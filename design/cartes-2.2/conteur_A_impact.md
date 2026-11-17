# Cartes « impact » — Conteur A, le Chroniqueur amer
Cartes modifiées seulement, d'après `revue-impact.md` : cartes fades réécrites, crochets appliqués aux cartes correctes, formes du palier 7 raccourcies (effet ≤ 250 caractères, résonances inchangées). Les ids remplacent ceux de `conteur_A_paliers.md` et `conteur_A.md`. Les ops hors moteur sont signalées par `a_coder` ; une condition nouvelle est écrite dans l'op `si` (ex. `elan`, `vol`, `pietine`, `brule`, `hesiteAvant`), avec un effet vide quand aucune op n'approche.

## Berestograd, la Ville-Écorce (CIT)

```json
{
 "id": "CIT-moins-1",
 "zone": "CIT",
 "pole": "-",
 "palier": 1,
 "nom": "Écorces à la boue",
 "cout": 1,
 "cible": 1,
 "effet": "Raclage : la garde de la cible tombe à 0, et la carte gagne +1 dégât par 3 de garde effacée (au plus +5). Puis 5 dégâts.",
 "ops": [
  [
   "si",
   "cibleGarde",
   [
    [
     "deg",
     "cible",
     5
    ]
   ]
  ],
  [
   "briseGarde",
   "cible"
  ],
  [
   "deg",
   "cible",
   5
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle −",
  "Perce-garde",
  "Dégâts",
  "Condition",
  "Crochet : garde ennemie"
 ],
 "ambiance": "Dettes, promesses, insultes au voisin : tout finissait dans la boue, et la boue ne rendait rien.",
 "budget": "10,5 / 10 (brise-garde 3 + 5 + raclage moyen 2,5)",
 "a_coder": "Nouvelle condition « cibleGarde » et bonus proportionnel : +1 dégât par tranche de 3 de garde effacée (au plus +5), calculé avant la mise à 0 ; le deg 5 sous si est le plafond, à remplacer par ce calcul."
}
```

```json
{
 "id": "CIT-moins-2",
 "zone": "CIT",
 "pole": "-",
 "palier": 2,
 "nom": "Le Tesson d'Ouliana",
 "cout": 0,
 "cible": 0,
 "effet": "Défaussez 1 carte au hasard, puis piochez 1 carte. Si la carte défaussée porte un prix, Ouliana gratte ce qui coûtait : piochez 2 cartes de plus.",
 "ops": [
  [
   "prixDefausse",
   1
  ],
  [
   "pioche",
   1
  ],
  [
   "si",
   "defausseAPrix",
   [
    [
     "pioche",
     2
    ]
   ]
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle −",
  "Pioche",
  "Condition",
  "Prix",
  "Crochet : défausse"
 ],
 "ambiance": "Elle grattait d'abord les dettes et les serments, ce qui avait coûté cher, pour trois mesures de seigle.",
 "budget": "5 / 5 (pioche 4 − défausse 3 + pioche 8 à 50 %)",
 "a_coder": "Nouvelle condition « defausseAPrix » : vraie si une carte défaussée par cette carte porte un prix (prixPV, prixDefausse, prixBete, ennemiGarde, ennemiSoin ou exil)."
}
```

```json
{
 "id": "CIT-moins-3",
 "zone": "CIT",
 "pole": "-",
 "palier": 3,
 "nom": "Généalogie neuve",
 "cout": 1,
 "cible": 1,
 "effet": "La cible hésite ce tour, perd 2 d'attaque pour le combat et subit 5 dégâts. Si elle prenait son élan, elle le perd et sa prochaine frappe ne piétine pas. Prix : défaussez 1 carte au hasard.",
 "ops": [
  [
   "si",
   "elan",
   [
    [
     "hesite",
     "cible"
    ]
   ]
  ],
  [
   "hesite",
   "cible"
  ],
  [
   "affaiblit",
   2,
   "cible"
  ],
  [
   "deg",
   "cible",
   5
  ],
  [
   "prixDefausse",
   1
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle −",
  "Contrôle",
  "Affaiblissement",
  "Dégâts",
  "Condition",
  "Prix",
  "Crochet : anti-élan"
 ],
 "ambiance": "Sur l'écorce raclée, les scribes recopièrent une lignée sans frère, d'une encre encore fraîche.",
 "budget": "15,5 / 15 (hésite 5 + affaiblit 6 + 5 − défausse 3 + perte d'élan 2,5)",
 "a_coder": "Nouvelle condition « elan » (la cible a annoncé élan) : elle perd l'élan et sa frappe suivante ne piétine pas ; le hesite sous si est l'op la plus proche."
}
```

```json
{
 "id": "CIT-moins-4",
 "zone": "CIT",
 "pole": "-",
 "palier": 4,
 "nom": "Le Vernis des Sèvelins",
 "cout": 2,
 "cible": 1,
 "effet": "La garde de la cible tombe à 0, puis 14 dégâts ; le héros se soigne de la moitié des dégâts. Si la cible avait de la garde, la sève coule : il se soigne de la totalité.",
 "ops": [
  [
   "si",
   "cibleGarde",
   [
    [
     "volVie"
    ]
   ]
  ],
  [
   "briseGarde",
   "cible"
  ],
  [
   "deg",
   "cible",
   14
  ],
  [
   "volVie"
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle −",
  "Perce-garde",
  "Dégâts",
  "Vol de vie",
  "Condition",
  "Crochet : garde ennemie"
 ],
 "ambiance": "On saigna les troncs qui refusaient leur ambre, et le vernis brilla sur les icônes neuves.",
 "budget": "27,5 / 28 (brise-garde 3 + 14 + vol de vie 7 + 7 à 50 %)",
 "a_coder": "Condition « cibleGarde » : la cible avait de la garde juste avant le brise-garde de cette carte. Effet : le vol de vie rend 100 % des dégâts au lieu de 50 % (le second volVie sous si l'approche)."
}
```

```json
{
 "id": "CIT-moins-5",
 "zone": "CIT",
 "pole": "-",
 "palier": 5,
 "nom": "Icône repeinte",
 "cout": 1,
 "cible": 1,
 "effet": "Tous les ennemis hésitent ce tour et leur garde tombe à 0 ; ceux qui hésitaient déjà perdent aussi 2 d'attaque pour le combat. 5 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops": [
  [
   "si",
   "hesiteAvant",
   [
    [
     "affaiblit",
     2,
     "tous"
    ]
   ]
  ],
  [
   "hesite",
   "tous"
  ],
  [
   "briseGarde",
   "tous"
  ],
  [
   "deg",
   "cible",
   5
  ],
  [
   "prixDefausse",
   1
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle −",
  "Contrôle",
  "Perce-garde",
  "Affaiblissement",
  "Dégâts",
  "Condition",
  "Prix",
  "Crochet : hésitation"
 ],
 "ambiance": "Sous le visage du kniaz, le saint d'origine attendait, raboté mais pas tout à fait parti.",
 "budget": "20,6 / 20 (hésite tous 9 + brise-garde tous 6,6 + 5 − défausse 3 + affaiblit 2 sur un ennemi à 50 % 3)",
 "a_coder": "Nouvelle condition « hesiteAvant », évaluée ennemi par ennemi avant l'hésitation de la carte : seuls ceux qui hésitaient déjà perdent 2 d'attaque."
}
```

```json
{
 "id": "CIT-moins7",
 "zone": "CIT",
 "pole": "-",
 "palier": 7,
 "nom": "Le Visage raboté",
 "cout": 2,
 "cible": 0,
 "effet": "Rituel d'effacement. Tous les ennemis hésitent, leur garde tombe à 0, ils perdent 2 d'attaque pour le combat et subissent 12 dégâts. Pose Abîme. Si Givre (consommée) : tous les ennemis deviennent vulnérables 5. Prix : défaussez 1 carte ; exil.",
 "ops": [
  [
   "hesite",
   "tous"
  ],
  [
   "briseGarde",
   "tous"
  ],
  [
   "affaiblit",
   2,
   "tous"
  ],
  [
   "deg",
   "tous",
   12
  ],
  [
   "pose",
   "Abîme"
  ],
  [
   "reveil",
   "Givre",
   true,
   [
    [
     "vulnerable",
     "tous",
     5
    ]
   ]
  ],
  [
   "prixDefausse",
   1
  ],
  [
   "exil"
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Forme ultime −7",
  "Contrôle",
  "Perce-garde",
  "Affaiblissement",
  "Dégâts",
  "Combo",
  "Pose Abîme",
  "Réveil Givre",
  "Marque",
  "Prix",
  "Exil"
 ],
 "ambiance": "Le kniaz fit raboter son propre visage pour ressembler à toutes ses icônes ; la ville cessa d'obéir à qui que ce fût.",
 "budget": "49,2 sans combo (hésite tous 9 + brise-garde 6,6 + affaiblit 13,2 + 26,4 − défausse 3 − exil 3) ; réveil +33 (67 %)"
}
```

```json
{
 "id": "CIT-plus-1",
 "zone": "CIT",
 "pole": "+",
 "palier": 1,
 "nom": "Lettre ramassée",
 "cout": 0,
 "cible": 0,
 "effet": "Reprenez en main la dernière carte de votre défausse. Si c'est une Commune, elle coûte 0 de capacité ce tour. Cette carte s'exile : la lettre, une fois lue, ne revient pas.",
 "ops": [
  [
   "recup"
  ],
  [
   "si",
   "recupCommune",
   [
    [
     "boost"
    ]
   ]
  ],
  [
   "exil"
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle +",
  "Récupération",
  "Condition",
  "Exil",
  "Crochet : Communes"
 ],
 "ambiance": "Une écorce affleurait dans la boue de la cour ; quelqu'un la ramassa au lieu de la racler.",
 "budget": "4 / 4 (récup 4 + capacité rendue 6 à 50 % − exil 3)",
 "a_coder": "Nouvelle condition « recupCommune » (la carte reprise est une Commune) : elle coûte 0 de capacité ce tour ; le boost sous si est l'op la plus proche. L'exil limite la boucle Torche + récupération à une fois par copie."
}
```

```json
{
 "id": "CIT-plus-2",
 "zone": "CIT",
 "pole": "+",
 "palier": 2,
 "nom": "Écorce cousue au mur",
 "cout": 1,
 "cible": 0,
 "effet": "Le héros gagne 8 de garde ; jusqu'au prochain tour, chaque coup reçu par la Garde, le héros ou un bloqueur renvoie 3 dégâts. Prix : le héros perd 2 PV.",
 "ops": [
  [
   "garde",
   "heros",
   8
  ],
  [
   "riposte",
   3
  ],
  [
   "prixPV",
   2
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle +",
  "Garde",
  "Riposte",
  "Prix",
  "Crochet : bloqueurs"
 ],
 "ambiance": "On cousit les lettres aux rondins comme des écailles, au fil de tendon, et l'aiguille piqua les doigts.",
 "budget": "12,4 / 12,5 (garde 6,4 + riposte 6 − 2 PV + riposte des bloqueurs 2)",
 "a_coder": "La riposte de cette carte joue aussi quand un bloqueur allié est frappé (l'écorce cousue sur le Pieu planté)."
}
```

```json
{
 "id": "CIT-plus-3",
 "zone": "CIT",
 "pole": "+",
 "palier": 3,
 "nom": "Le Témoin venu de loin",
 "cout": 1,
 "cible": 1,
 "effet": "La cible devient vulnérable 1 ; jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts, 8 contre un ennemi qui vole par-dessus. Reprenez la dernière carte de la défausse. Prix : défaussez 1 carte au hasard.",
 "ops": [
  [
   "vulnerable",
   "cible",
   1
  ],
  [
   "riposte",
   4
  ],
  [
   "si",
   "vol",
   [
    [
     "riposte",
     4
    ]
   ]
  ],
  [
   "recup"
  ],
  [
   "prixDefausse",
   1
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle +",
  "Marque",
  "Riposte",
  "Récupération",
  "Condition",
  "Prix",
  "Crochet : anti-vol"
 ],
 "ambiance": "Il avait marché trois hivers pour réclamer une dette, l'écorce du contrat cousue dans sa doublure.",
 "budget": "16 / 15 (vulnérable 3 + riposte 8 + récup 4 − défausse 3 + riposte 8 à 50 %)",
 "a_coder": "Nouvelle condition « vol » : contre un ennemi qui vole par-dessus, la riposte vaut 8 au lieu de 4 (le second riposte sous si s'ajoute pour ce seul attaquant)."
}
```

```json
{
 "id": "CIT-plus-4",
 "zone": "CIT",
 "pole": "+",
 "palier": 4,
 "nom": "L'Ambre rouvert",
 "cout": 1,
 "cible": 0,
 "effet": "Si la Garde est déjà levée, l'ambre la fige : elle ne s'effrite pas au prochain tour. Piochez 3 cartes, puis défaussez 1 carte au hasard. Le héros gagne 8 de garde.",
 "ops": [
  [
   "si",
   "garde",
   [
    [
     "garde",
     "heros",
     4
    ]
   ]
  ],
  [
   "pioche",
   3
  ],
  [
   "prixDefausse",
   1
  ],
  [
   "garde",
   "heros",
   8
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle +",
  "Pioche",
  "Garde",
  "Condition",
  "Prix",
  "Crochet : Garde"
 ],
 "ambiance": "Les Sèvelins ouvrirent leur ambre : dedans, les lettres qu'ils avaient avalées pour les sauver.",
 "budget": "18,6 / 17,5 (pioche 12 + garde 6,4 − défausse 3 + Garde figée 6,4 à 50 %)",
 "a_coder": "La condition « garde » est testée avant le gain de garde de la carte ; effet : la Garde ne s'effrite pas au prochain tour du héros (le garde 4 sous si l'approche)."
}
```

```json
{
 "id": "CIT-plus-5",
 "zone": "CIT",
 "pole": "+",
 "palier": 5,
 "nom": "La Vieille Conteuse",
 "cout": 2,
 "cible": 0,
 "effet": "Tous les ennemis deviennent vulnérables 2. Piochez 2 cartes, reprenez la dernière carte de la défausse ; la prochaine carte de zone, ou la Commune reprise, jouée ce tour est doublée. Prix : le héros perd 4 PV.",
 "ops": [
  [
   "vulnerable",
   "tous",
   2
  ],
  [
   "pioche",
   2
  ],
  [
   "recup"
  ],
  [
   "echo"
  ],
  [
   "prixPV",
   4
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle +",
  "Marque",
  "Pioche",
  "Récupération",
  "Écho",
  "Prix",
  "Crochet : Communes"
 ],
 "ambiance": "Elle récita la chronique de mémoire, en mesure, et chaque nom désigna quelqu'un dans la salle.",
 "budget": "30,2 / 32 (vulnérable tous 13,2 + pioche 8 + récup 4 + écho 6 − 4 PV + écho sur Commune 3)",
 "a_coder": "L'écho de cette carte peut aussi doubler la Commune reprise par son recup (chronique du feu : Torche reprise et doublée) ; appliquer la règle « la brûlure double une fois par tour et par cible »."
}
```

```json
{
 "id": "CIT-plus-6",
 "zone": "CIT",
 "pole": "+",
 "palier": 6,
 "nom": "Témoins aux créneaux",
 "cout": 1,
 "cible": 0,
 "effet": "Jusqu'au prochain tour, chaque coup reçu renvoie 6 dégâts ; un ennemi qui piétine la subit une fois par unité traversée. Le héros gagne 6 de garde. Reprenez la dernière carte de la défausse.",
 "ops": [
  [
   "riposte",
   6
  ],
  [
   "si",
   "pietine",
   [
    [
     "riposte",
     6
    ]
   ]
  ],
  [
   "garde",
   "heros",
   6
  ],
  [
   "recup"
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Pôle +",
  "Riposte",
  "Garde",
  "Récupération",
  "Condition",
  "Crochet : anti-piétinement"
 ],
 "ambiance": "Les Échos du rempart désignaient chaque assaillant du doigt, et l'écorce cousue tenait le compte.",
 "budget": "23,8 / 22,5 (riposte 12 + garde 4,8 + récup 4 + riposte par unité 3)",
 "a_coder": "Nouvelle condition « pietine » : la riposte joue une fois par unité traversée (Garde, bloqueurs, bêtes, héros) par la frappe qui piétine."
}
```

```json
{
 "id": "CIT-plus7",
 "zone": "CIT",
 "pole": "+",
 "palier": 7,
 "nom": "Le Tribunal des Bouleaux",
 "cout": 2,
 "cible": 0,
 "effet": "Audience. Tous les ennemis deviennent vulnérables 4. Piochez 3 cartes, reprenez la dernière de la défausse ; la prochaine carte de zone est doublée. Pose Sceau. Si Sang (consommée) : 15 dégâts à tous qui ignorent la garde. Prix : 3 PV.",
 "ops": [
  [
   "vulnerable",
   "tous",
   4
  ],
  [
   "pioche",
   3
  ],
  [
   "recup"
  ],
  [
   "echo"
  ],
  [
   "pose",
   "Sceau"
  ],
  [
   "reveil",
   "Sang",
   true,
   [
    [
     "deg",
     "tous",
     15
    ],
    [
     "ignoreGarde"
    ]
   ]
  ],
  [
   "prixPV",
   3
  ]
 ],
 "tags": [
  "Citadelle",
  "Glace",
  "Forme ultime +7",
  "Marque",
  "Pioche",
  "Récupération",
  "Écho",
  "Combo",
  "Pose Sceau",
  "Réveil Sang",
  "Dégâts",
  "Perce-garde",
  "Prix"
 ],
 "ambiance": "Le juge avait encore les cheveux mouillés ; il lut la chronique dans l'ordre, et le greffier n'omit aucun nom.",
 "budget": "45,4 sans combo (vulnérable tous 26,4 + pioche 12 + récup 4 + écho 6 − 3 PV) ; réveil +36 (79 %)"
}
```

## Secrets de Berestograd (CIT)

```json
{
 "id": "CIT-secret1",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "L'écorce pliée en huit",
 "nom": "L'écorce pliée en huit",
 "cout": 0,
 "cible": 0,
 "effet": "Piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Cette carte s'exile ; si Sceau est posée, on la replie : elle va à la défausse.",
 "ops": [
  [
   "pioche",
   1
  ],
  [
   "echo"
  ],
  [
   "reveil",
   "Sceau",
   false,
   []
  ],
  [
   "exil"
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Pioche",
  "Écho",
  "Exil",
  "Combo",
  "Réveil Sceau"
 ],
 "ambiance": "Onze hivers de raclage, et une seule écorce gardée ; ce qu'elle disait, Ouliana l'emporta sans savoir le lire.",
 "budget": "8,5 (pioche 4 + écho 6 − exil 3 + exil évité 3 à 50 %)",
 "a_coder": "Si Sceau est posée (non consommée), ignorer l'op exil : la carte va à la défausse (le reveil vide marque le point d'accroche)."
}
```

```json
{
 "id": "CIT-secret2",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "Le racloir d'Ouliana",
 "nom": "Le racloir d'Ouliana",
 "cout": 0,
 "cible": 0,
 "effet": "Défaussez 1 carte au hasard, puis piochez 2 cartes. Si la carte défaussée porte un prix, la prochaine carte jouée ce tour ne paie pas le sien.",
 "ops": [
  [
   "prixDefausse",
   1
  ],
  [
   "pioche",
   2
  ],
  [
   "si",
   "defausseAPrix",
   []
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Pioche",
  "Condition",
  "Prix",
  "Crochet : défausse"
 ],
 "ambiance": "Un tesson encore blanc d'aubier : trois mesures de seigle la saison pour gratter la mémoire des autres.",
 "budget": "7 (pioche 8 − défausse 3 + prix évité 4 à 50 %)",
 "a_coder": "Nouvelle condition « defausseAPrix » ; effet : la prochaine carte jouée ce tour n'applique pas ses ops de prix (prixPV, prixDefausse, prixBete, ennemiGarde, ennemiSoin)."
}
```

```json
{
 "id": "CIT-secret3",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "Le nom du frère noyé",
 "nom": "Le nom du frère noyé",
 "cout": 1,
 "cible": 1,
 "effet": "Prononcez le nom : la cible hésite ce tour et perd 1 d'attaque pour le combat. Si Sang est posée, elle hésite aussi au tour suivant (Sang reste posée).",
 "ops": [
  [
   "hesite",
   "cible"
  ],
  [
   "affaiblit",
   1,
   "cible"
  ],
  [
   "reveil",
   "Sang",
   false,
   [
    [
     "hesite",
     "cible"
    ]
   ]
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Contrôle",
  "Affaiblissement",
  "Combo",
  "Réveil Sang"
 ],
 "ambiance": "La racleuse oublia une écorce sous les copeaux ; le nom y était, et la main de l'assassin s'arrêta.",
 "budget": "10 (hésite 5 + affaiblit 3 + hésite au tour suivant 5 à 40 %)",
 "a_coder": "Le hesite sous le reveil de Sang porte sur le tour suivant de la cible, pas sur le tour en cours."
}
```

```json
{
 "id": "CIT-secret4",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "La cave sous la palissade",
 "nom": "La cave sous la palissade",
 "cout": 0,
 "cible": 0,
 "effet": "Reprenez en main la dernière carte exilée de ce combat (à défaut, la dernière de la défausse) et gagnez 1 mana Glace : la cave rend ce que la ville a jeté.",
 "ops": [
  [
   "recup"
  ],
  [
   "mana",
   "Glace",
   1
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Récupération",
  "Mana",
  "Crochet : exil"
 ],
 "ambiance": "Sous les rondins effacés, la terre gardait ce que la ville avait jeté, en couches, comme un registre.",
 "budget": "9 (récup d'une carte exilée 6 + mana 3)",
 "a_coder": "Variante du recup : reprendre la dernière carte exilée de ce combat (formes du palier 7, secrets exilés) ; s'il n'y en a pas, recup normal."
}
```

```json
{
 "id": "CIT-secret5",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "La généalogie d'origine",
 "nom": "La généalogie d'origine",
 "cout": 1,
 "cible": 1,
 "effet": "Piochez 2 cartes. Si la cible hésite, les noms reprennent leur ordre : piochez-en 1 de plus.",
 "ops": [
  [
   "pioche",
   2
  ],
  [
   "si",
   "hesite",
   [
    [
     "pioche",
     1
    ]
   ]
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Pioche",
  "Condition",
  "Crochet : hésitation"
 ],
 "ambiance": "Sur le balcon rebâti, les noms reprirent leur ordre ; le kniaz y figurait, mais en cadet, et après son frère.",
 "budget": "10 (pioche 8 + pioche 4 à 50 %)"
}
```

```json
{
 "id": "CIT-secret6",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "La niche aux lettres",
 "nom": "La niche aux lettres",
 "cout": 1,
 "cible": 0,
 "effet": "La phrase reste suspendue : tous les ennemis hésitent ce tour, et celui qui prenait son élan le perd aussi.",
 "ops": [
  [
   "hesite",
   "tous"
  ],
  [
   "si",
   "elan",
   [
    [
     "hesite",
     "cible"
    ]
   ]
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Contrôle",
  "Condition",
  "Crochet : anti-élan"
 ],
 "ambiance": "Les écorces cousues le long du rempart formaient une accusation ; le dernier mot manquait, et tout le monde se tut pour l'attendre.",
 "budget": "10,5 (hésite tous 9 + perte d'élan 3 à 50 %)",
 "a_coder": "Nouvelle condition « elan », évaluée ennemi par ennemi : l'ennemi qui avait annoncé élan perd aussi l'élan (son coup fort suivant est annulé)."
}
```

```json
{
 "id": "CIT-secret7",
 "zone": "CIT",
 "pole": "secret",
 "palier": "-",
 "secret": "Une lettre dans la boue",
 "nom": "Une lettre dans la boue",
 "cout": 0,
 "cible": 0,
 "effet": "Piochez 1 carte. La boue paie le silence : gagnez 1 mana Glace par ennemi qui hésite. Cette carte s'exile.",
 "ops": [
  [
   "pioche",
   1
  ],
  [
   "si",
   "hesite",
   [
    [
     "mana",
     "Glace",
     1
    ]
   ]
  ],
  [
   "exil"
  ]
 ],
 "tags": [
  "Secret",
  "Utilitaire",
  "Pioche",
  "Mana",
  "Condition",
  "Exil",
  "Crochet : hésitation"
 ],
 "ambiance": "Une écorce blanche sur un toit d'isba, ni grattée ni recopiée : la seule page de la ville sans propriétaire.",
 "budget": "7 (pioche 4 + mana 2 en moyenne 6 − exil 3)",
 "a_coder": "Le mana est compté par ennemi qui hésite (1 mana Glace chacun), pas seulement pour la cible."
}
```

## La Taïga de Kobor (DON045)

```json
{
 "id": "DON045-moins-1",
 "zone": "DON045",
 "pole": "-",
 "palier": 1,
 "nom": "Promesse au trésor",
 "cout": 1,
 "cible": 1,
 "effet": "La cible hésite ce tour. Si elle hésitait déjà, la promesse tient : elle perd aussi 2 d'attaque pour le combat. Piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops": [
  [
   "si",
   "hesiteAvant",
   [
    [
     "affaiblit",
     2,
     "cible"
    ]
   ]
  ],
  [
   "hesite",
   "cible"
  ],
  [
   "pioche",
   1
  ],
  [
   "prixPV",
   1
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle −",
  "Contrôle",
  "Affaiblissement",
  "Pioche",
  "Condition",
  "Prix",
  "Crochet : hésitation"
 ],
 "ambiance": "Quatre cents zibelines par hiver, promit le voïévode ; le trésor nota le chiffre sans lever les yeux.",
 "budget": "11 / 10 (hésite 5 + pioche 4 + affaiblit 6 à 50 % − 1 PV)",
 "a_coder": "Nouvelle condition « hesiteAvant » : la cible hésitait avant cette carte (Jet de pierre, Suie de lampe…), sinon la condition se remplirait seule."
}
```

```json
{
 "id": "DON045-moins-3",
 "zone": "DON045",
 "pole": "-",
 "palier": 3,
 "nom": "Peau teinte",
 "cout": 2,
 "cible": 1,
 "effet": "Un Chien teint en zibeline rejoint le combat : 18 PV, frappe 6. C'est un leurre : un ennemi qui vole par-dessus frappe le Chien au lieu du héros. La cible hésite ce tour.",
 "ops": [
  [
   "invoque",
   "Chien teint en zibeline",
   18,
   6
  ],
  [
   "hesite",
   "cible"
  ],
  [
   "si",
   "vol",
   []
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle −",
  "Invocation",
  "Contrôle",
  "Condition",
  "Crochet : anti-vol"
 ],
 "ambiance": "Passé à la suie, le chien du hameau valait une zibeline au registre, tant qu'il ne pleuvait pas.",
 "budget": "26 / 24 (invocation 18 + hésite 5 + leurre 3)",
 "a_coder": "Tant que le Chien teint vit, la frappe d'un ennemi qui vole par-dessus le vise lui au lieu du héros (le si vide marque l'accroche)."
}
```

```json
{
 "id": "DON045-moins-4",
 "zone": "DON045",
 "pole": "-",
 "palier": 4,
 "nom": "Les Années manquantes",
 "cout": 1,
 "cible": 1,
 "effet": "Défaussez 2 cartes au hasard, piochez 3 cartes et gagnez 2 mana Glace ; la cible hésite. Si une bête est en jeu, le chien a caché un feuillet : reprenez la dernière carte défaussée.",
 "ops": [
  [
   "prixDefausse",
   2
  ],
  [
   "pioche",
   3
  ],
  [
   "mana",
   "Glace",
   2
  ],
  [
   "hesite",
   "cible"
  ],
  [
   "si",
   "bete",
   [
    [
     "recup"
    ]
   ]
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle −",
  "Pioche",
  "Mana",
  "Contrôle",
  "Condition",
  "Récupération",
  "Prix",
  "Crochet : bêtes"
 ],
 "ambiance": "Six feuillets arrachés au registre ; le relieur fut payé en peaux, noires évidemment.",
 "budget": "19 / 17,5 (pioche 12 + mana 6 + hésite 5 − défausse 6 + récup 4 à 50 %)"
}
```

```json
{
 "id": "DON045-moins7",
 "zone": "DON045",
 "pole": "-",
 "palier": 7,
 "nom": "Le Coffre scellé",
 "cout": 2,
 "cible": 1,
 "effet": "On referme la loge. L'Inspecteur gelé (36 PV, ne frappe pas) rejoint le combat. Tous les ennemis perdent 2 d'attaque, la cible hésite, piochez 2, +1 mana Glace. Pose Givre. Si Racine (consommée) : deux Chiens de la meute teinte (12 PV, frappe 6).",
 "ops": [
  [
   "invoque",
   "L'Inspecteur gelé",
   36,
   0
  ],
  [
   "affaiblit",
   2,
   "tous"
  ],
  [
   "hesite",
   "cible"
  ],
  [
   "pioche",
   2
  ],
  [
   "mana",
   "Glace",
   1
  ],
  [
   "pose",
   "Givre"
  ],
  [
   "reveil",
   "Racine",
   true,
   [
    [
     "invoque",
     "Chien de la meute teinte",
     12,
     6
    ],
    [
     "invoque",
     "Chien de la meute teinte",
     12,
     6
    ]
   ]
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Forme ultime −7",
  "Invocation",
  "Affaiblissement",
  "Contrôle",
  "Pioche",
  "Mana",
  "Combo",
  "Pose Givre",
  "Réveil Racine"
 ],
 "ambiance": "Le registre de l'An 23 tomba juste parce que l'inspecteur ne sortit jamais du Coffre ; il garde la porte depuis.",
 "budget": "47,2 sans combo (invocation 18 + affaiblit tous 13,2 + hésite 5 + pioche 8 + mana 3) ; réveil +30 (64 %)"
}
```

```json
{
 "id": "DON045-plus-1",
 "zone": "DON045",
 "pole": "+",
 "palier": 1,
 "nom": "Le Doute de l'inspecteur",
 "cout": 1,
 "cible": 1,
 "effet": "La cible devient vulnérable 2, puis subit 2 dégâts. Si elle hésite, le doute s'installe : elle devient vulnérable 2 de plus.",
 "ops": [
  [
   "vulnerable",
   "cible",
   2
  ],
  [
   "deg",
   "cible",
   2
  ],
  [
   "si",
   "hesite",
   [
    [
     "vulnerable",
     "cible",
     2
    ]
   ]
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle +",
  "Marque",
  "Dégâts",
  "Condition",
  "Crochet : hésitation"
 ],
 "ambiance": "L'inspecteur relut trois fois la colonne des zibelines ; quand le voïévode se tut, il la relut une quatrième.",
 "budget": "11 / 10 (vulnérable 6 + 2 + vulnérable 6 à 50 %)"
}
```

```json
{
 "id": "DON045-plus-2",
 "zone": "DON045",
 "pole": "+",
 "palier": 2,
 "nom": "Le Pouce mouillé",
 "cout": 1,
 "cible": 1,
 "effet": "La cible devient vulnérable 1, puis subit 7 dégâts qui ignorent la garde. Si elle brûle, la suie coule : 5 dégâts de plus. Prix : le héros perd 2 PV.",
 "ops": [
  [
   "vulnerable",
   "cible",
   1
  ],
  [
   "deg",
   "cible",
   7
  ],
  [
   "ignoreGarde"
  ],
  [
   "si",
   "brule",
   [
    [
     "deg",
     "cible",
     5
    ]
   ]
  ],
  [
   "prixPV",
   2
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle +",
  "Marque",
  "Dégâts",
  "Perce-garde",
  "Condition",
  "Prix",
  "Crochet : brûlure"
 ],
 "ambiance": "Il frotta la peau, et la teinture lui noircit le pouce : la vérité tache d'abord celui qui cherche.",
 "budget": "13,5 / 12,5 (vulnérable 3 + 7 + ignore-garde 3 + 5 à 50 % − 2 PV)",
 "a_coder": "Nouvelle condition « brule » : la cible subit une brûlure en cours."
}
```

```json
{
 "id": "DON045-plus-3",
 "zone": "DON045",
 "pole": "+",
 "palier": 3,
 "nom": "La Teinture qui coule",
 "cout": 1,
 "cible": 1,
 "effet": "La garde de tous les ennemis tombe à 0 et ils deviennent vulnérables 1 ; 2 dégâts à la cible. Un ennemi qui piétine ce tour devient vulnérable 2 de plus. Prix : le héros perd 2 PV.",
 "ops": [
  [
   "briseGarde",
   "tous"
  ],
  [
   "vulnerable",
   "tous",
   1
  ],
  [
   "deg",
   "cible",
   2
  ],
  [
   "si",
   "pietine",
   [
    [
     "vulnerable",
     "cible",
     2
    ]
   ]
  ],
  [
   "prixPV",
   2
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle +",
  "Perce-garde",
  "Marque",
  "Dégâts",
  "Condition",
  "Prix",
  "Crochet : anti-piétinement"
 ],
 "ambiance": "Le dégel fit couler la suie des quatre mille peaux en une rigole noire jusqu'à la porte.",
 "budget": "16,2 / 15 (brise-garde tous 6,6 + vulnérable tous 6,6 + 2 − 2 PV + vulnérable 6 à 50 %)",
 "a_coder": "Nouvelle condition « pietine » : l'ennemi qui frappe en piétinant ce tour (pas forcément la cible) reçoit vulnérable 2 au moment de sa frappe."
}
```

```json
{
 "id": "DON045-plus-5",
 "zone": "DON045",
 "pole": "+",
 "palier": 5,
 "nom": "Le Coffre ouvert",
 "cout": 2,
 "cible": 1,
 "effet": "La cible devient vulnérable 3, puis subit 18 dégâts qui ignorent la garde. Si une bête est en jeu, la loge s'ouvre : elle frappe aussi la cible. Piochez 1 carte. Prix : le héros perd 4 PV.",
 "ops": [
  [
   "vulnerable",
   "cible",
   3
  ],
  [
   "deg",
   "cible",
   18
  ],
  [
   "ignoreGarde"
  ],
  [
   "si",
   "bete",
   [
    [
     "deg",
     "cible",
     6
    ]
   ]
  ],
  [
   "pioche",
   1
  ],
  [
   "prixPV",
   4
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Pôle +",
  "Marque",
  "Dégâts",
  "Perce-garde",
  "Condition",
  "Pioche",
  "Prix",
  "Crochet : bêtes"
 ],
 "ambiance": "Sous les mélèzes, la loge exhalait l'odeur du chien mouillé ; quatre mille fois la même.",
 "budget": "33 / 32 (vulnérable 9 + 18 + ignore-garde 3 + pioche 4 + frappe de bête 6 à 50 % − 4 PV)",
 "a_coder": "Si une bête est en jeu, la bête la plus forte frappe tout de suite la cible avec son attaque (le deg 6 sous si l'approche, à remplacer)."
}
```

```json
{
 "id": "DON045-plus7",
 "zone": "DON045",
 "pole": "+",
 "palier": 7,
 "nom": "Le Compte juste",
 "cout": 2,
 "cible": 0,
 "effet": "Recensement. Tous les ennemis deviennent vulnérables 2, puis 5 coups de 6 au hasard qui ignorent la garde ; un ennemi seul subit encore 10. Pose Sang. Si Abîme (consommée) : 4 coups de 6 au hasard, reprenez 1 carte, piochez 1. Prix : 4 PV.",
 "ops": [
  [
   "vulnerable",
   "tous",
   2
  ],
  [
   "deg",
   "hasard",
   6,
   5
  ],
  [
   "ignoreGarde"
  ],
  [
   "si",
   "seul",
   [
    [
     "deg",
     "cible",
     10
    ]
   ]
  ],
  [
   "pose",
   "Sang"
  ],
  [
   "reveil",
   "Abîme",
   true,
   [
    [
     "deg",
     "hasard",
     6,
     4
    ],
    [
     "recup"
    ],
    [
     "pioche",
     1
    ]
   ]
  ],
  [
   "prixPV",
   4
  ]
 ],
 "tags": [
  "Donjon",
  "Glace",
  "Forme ultime +7",
  "Marque",
  "Dégâts",
  "Perce-garde",
  "Condition",
  "Combo",
  "Pose Sang",
  "Réveil Abîme",
  "Récupération",
  "Pioche",
  "Prix"
 ],
 "ambiance": "On recompta peau par peau, puis chien par chien, puis trappeur par trappeur ; le compte fut juste, et payé en sang.",
 "budget": "47,2 sans combo (vulnérable tous 13,2 + 30 + ignore-garde 3 + 10 si seul à 50 % − 4 PV) ; réveil +32 (68 %)"
}
```

## La Lande de Cezo (ASS006)

```json
{
 "id": "ASS006-moins-1",
 "zone": "ASS006",
 "pole": "-",
 "palier": 1,
 "nom": "Fève creusée",
 "cout": 0,
 "cible": 1,
 "effet": "La cible brûle : 1 dégât au début de chacun de ses 3 prochains tours. Si elle prenait son élan, la fève l'étouffe : elle perd l'élan. Prix : le héros perd 1 PV.",
 "ops": [
  [
   "si",
   "elan",
   [
    [
     "hesite",
     "cible"
    ]
   ]
  ],
  [
   "brulure",
   "cible",
   1,
   3
  ],
  [
   "prixPV",
   1
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle −",
  "Dégâts dans le temps",
  "Condition",
  "Prix",
  "Crochet : anti-élan"
 ],
 "ambiance": "Une fève de bruyère évidée au poinçon ; le conseiller qui l'avala de travers ne parla plus de la séance.",
 "budget": "4,5 / 4 (brûlure 3 + perte d'élan 5 à 50 % − 1 PV)",
 "a_coder": "Nouvelle condition « elan » : la cible perd l'élan annoncé (le hesite sous si est l'op la plus proche). La brûlure longue garde la cible « en feu » pour Coup de bâton et Torche."
}
```

```json
{
 "id": "ASS006-moins-2",
 "zone": "ASS006",
 "pole": "-",
 "palier": 2,
 "nom": "Plomb dans la fève",
 "cout": 1,
 "cible": 1,
 "effet": "La cible brûle : 4 dégâts au début de chacun de ses 2 prochains tours, et perd 1 d'attaque pour le combat. Le plomb alourdit : un ennemi qui vole par-dessus perd le vol pendant 2 tours. Prix : 2 PV.",
 "ops": [
  [
   "brulure",
   "cible",
   4,
   2
  ],
  [
   "affaiblit",
   1,
   "cible"
  ],
  [
   "si",
   "vol",
   []
  ],
  [
   "prixPV",
   2
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle −",
  "Dégâts dans le temps",
  "Affaiblissement",
  "Condition",
  "Prix",
  "Crochet : anti-vol"
 ],
 "ambiance": "Le plomb venait des sceaux fondus de l'ancien conseil ; il pesait juste ce qu'il fallait.",
 "budget": "12 / 12,5 (brûlure 8 + affaiblit 3 − 2 PV + perte du vol 3)",
 "a_coder": "Nouvelle condition « vol » : la cible ne peut plus annoncer « vole par-dessus » pendant 2 tours ; ses frappes passent par la Garde et les bloqueurs."
}
```

```json
{
 "id": "ASS006-moins-3",
 "zone": "ASS006",
 "pole": "-",
 "palier": 3,
 "nom": "Fève lestée",
 "cout": 1,
 "cible": 1,
 "effet": "Si la cible brûlait déjà, tous les ennemis perdent 2 d'attaque pour le combat, sinon 1. La cible brûle : 4 dégâts au début de chacun de ses 2 prochains tours. Prix : le héros perd 2 PV.",
 "ops": [
  [
   "si",
   "brule",
   [
    [
     "affaiblit",
     1,
     "tous"
    ]
   ]
  ],
  [
   "affaiblit",
   1,
   "tous"
  ],
  [
   "brulure",
   "cible",
   4,
   2
  ],
  [
   "prixPV",
   2
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle −",
  "Dégâts dans le temps",
  "Affaiblissement",
  "Condition",
  "Prix",
  "Crochet : brûlure"
 ],
 "ambiance": "La fève lestée retombait toujours dans le cercle des sauniers ; le conseiller qui la jeta toussa longtemps.",
 "budget": "15,9 / 15 (brûlure 8 + affaiblit tous 6,6 + 6,6 à 50 % − 2 PV)",
 "a_coder": "Nouvelle condition « brule », testée avant la brûlure posée par la carte."
}
```

```json
{
 "id": "ASS006-moins-4",
 "zone": "ASS006",
 "pole": "-",
 "palier": 4,
 "nom": "Le Paravent goudronné",
 "cout": 1,
 "cible": 1,
 "effet": "Si la cible hésitait déjà, derrière la toile, elle brûle aussi de 6 au début de ses 2 prochains tours. Puis elle hésite ce tour. Le héros gagne 6 de garde et 1 mana Vent.",
 "ops": [
  [
   "si",
   "hesiteAvant",
   [
    [
     "brulure",
     "cible",
     6,
     2
    ]
   ]
  ],
  [
   "hesite",
   "cible"
  ],
  [
   "garde",
   "heros",
   6
  ],
  [
   "mana",
   "Vent",
   1
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle −",
  "Contrôle",
  "Condition",
  "Dégâts dans le temps",
  "Garde",
  "Mana",
  "Crochet : hésitation"
 ],
 "ambiance": "Derrière la toile goudronnée, le vent tombait, et les fèves aussi, exactement où on les attendait.",
 "budget": "18,8 / 17,5 (hésite 5 + brûlure 12 à 50 % + garde 4,8 + mana 3)",
 "a_coder": "Nouvelle condition « hesiteAvant » : testée avant l'hésitation que pose la carte, pour qu'elle ne se remplisse plus seule."
}
```

```json
{
 "id": "ASS006-moins-5",
 "zone": "ASS006",
 "pole": "-",
 "palier": 5,
 "nom": "Le Banc vendu aux sauniers",
 "cout": 2,
 "cible": 1,
 "effet": "Gagnez 2 mana Vent ; la prochaine carte de zone jouée ce tour est doublée. Tous les ennemis perdent 2 d'attaque ; la cible brûle de 4 sur 2 tours. Si elle brûlait déjà, l'écho double aussi sa brûlure en cours. Prix : 4 PV.",
 "ops": [
  [
   "si",
   "brule",
   [
    [
     "brulure",
     "cible",
     4,
     2
    ]
   ]
  ],
  [
   "mana",
   "Vent",
   2
  ],
  [
   "echo"
  ],
  [
   "affaiblit",
   2,
   "tous"
  ],
  [
   "brulure",
   "cible",
   4,
   2
  ],
  [
   "prixPV",
   4
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle −",
  "Mana",
  "Écho",
  "Affaiblissement",
  "Dégâts dans le temps",
  "Condition",
  "Prix",
  "Crochet : brûlure"
 ],
 "ambiance": "La seconde inscription fut gravée plus bas, d'une main plus fine : banc cédé, avec le vent.",
 "budget": "33,2 / 32 (mana 6 + écho 6 + affaiblit tous 13,2 + brûlure 8 + doublement 8 à 50 % − 4 PV)",
 "a_coder": "Nouvelle condition « brule » (avant la carte) : la brûlure déjà en cours sur la cible est doublée, une fois par tour et par cible ; la brulure sous si est l'approximation."
}
```

```json
{
 "id": "ASS006-moins-6",
 "zone": "ASS006",
 "pole": "-",
 "palier": 6,
 "nom": "Premier incendie",
 "cout": 2,
 "cible": 0,
 "effet": "Si un ennemi brûlait déjà, piochez 2 cartes, sinon 1. Tous les ennemis brûlent : 4 dégâts au début de chacun de leurs 3 prochains tours, et leur garde tombe à 0. Prix : le héros perd 2 PV.",
 "ops": [
  [
   "si",
   "brule",
   [
    [
     "pioche",
     1
    ]
   ]
  ],
  [
   "brulure",
   "tous",
   4,
   3
  ],
  [
   "briseGarde",
   "tous"
  ],
  [
   "pioche",
   1
  ],
  [
   "prixPV",
   2
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle −",
  "Dégâts dans le temps",
  "Perce-garde",
  "Pioche",
  "Condition",
  "Prix",
  "Crochet : brûlure"
 ],
 "ambiance": "La bruyère brûla une première fois, par un ciel sans orage ; les bornes du commun partirent avec.",
 "budget": "37 / 36 (brûlure tous 26,4 + brise-garde tous 6,6 + pioche 4 + pioche 4 à 50 % − 2 PV)",
 "a_coder": "Nouvelle condition « brule » étendue : vraie si au moins un ennemi brûlait avant la carte."
}
```

```json
{
 "id": "ASS006-moins7",
 "zone": "ASS006",
 "pole": "-",
 "palier": 7,
 "nom": "La Lande brûlée trois fois",
 "cout": 2,
 "cible": 0,
 "effet": "Le feu efface les bornes. Tous les ennemis brûlent de 6 sur 3 tours et leur garde tombe à 0 ; la prochaine carte de zone est doublée. Pose Braise. Si Sceau (consommée) : +1 de capacité, piochez 3, +2 mana Vent, tous hésitent. Prix : 3 PV.",
 "ops": [
  [
   "brulure",
   "tous",
   6,
   3
  ],
  [
   "briseGarde",
   "tous"
  ],
  [
   "echo"
  ],
  [
   "pose",
   "Braise"
  ],
  [
   "reveil",
   "Sceau",
   true,
   [
    [
     "boost"
    ],
    [
     "pioche",
     3
    ],
    [
     "mana",
     "Vent",
     2
    ],
    [
     "hesite",
     "tous"
    ]
   ]
  ],
  [
   "prixPV",
   3
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Forme ultime −7",
  "Dégâts dans le temps",
  "Perce-garde",
  "Mana",
  "Écho",
  "Combo",
  "Pose Braise",
  "Réveil Sceau",
  "Boost",
  "Pioche",
  "Contrôle",
  "Prix"
 ],
 "ambiance": "Chaque incendie emporta une rangée de bornes, et chaque nouveau cadastre fut signé au banc, par les mêmes mains.",
 "budget": "48,6 sans combo (brûlure tous 33 + brise-garde 6,6 + mana 6 + écho 6 − 3 PV) ; réveil +33 (69 %)"
}
```

```json
{
 "id": "ASS006-plus-1",
 "zone": "ASS006",
 "pole": "+",
 "palier": 1,
 "nom": "Fève jetée en l'air",
 "cout": 0,
 "cible": 0,
 "effet": "Piochez 1 carte. Le vent décide : si elle coûte 0, elle se joue tout de suite, sans payer son mana.",
 "ops": [
  [
   "pioche",
   1
  ],
  [
   "si",
   "piocheCout0",
   []
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle +",
  "Pioche",
  "Condition",
  "Crochet : cartes à 0"
 ],
 "ambiance": "Une poignée de fèves lancée au-dessus du banc ; celle qui retombait dans la main votait aussitôt.",
 "budget": "4,5 / 4 (pioche 4 + mana épargné 1 à 50 %)",
 "a_coder": "Nouvelle condition « piocheCout0 » : si la carte piochée coûte 0 de capacité, elle est jouée aussitôt sans payer son mana (cible choisie par le joueur)."
}
```

```json
{
 "id": "ASS006-plus-2",
 "zone": "ASS006",
 "pole": "+",
 "palier": 2,
 "nom": "Le Cercle de pierre",
 "cout": 1,
 "cible": 0,
 "effet": "Défaussez 1 carte au hasard ; si c'est une Commune, elle tombe dans le cercle : reprenez-la en main à la fin du tour. Piochez 1 carte ; le héros gagne 8 de garde et se soigne de 4.",
 "ops": [
  [
   "prixDefausse",
   1
  ],
  [
   "si",
   "defausseCommune",
   [
    [
     "recup"
    ]
   ]
  ],
  [
   "pioche",
   1
  ],
  [
   "garde",
   "heros",
   8
  ],
  [
   "soin",
   "heros",
   4
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle +",
  "Pioche",
  "Garde",
  "Soin",
  "Condition",
  "Prix",
  "Crochet : Communes"
 ],
 "ambiance": "On ne comptait que les fèves tombées dans le cercle ; les autres, on les laissait à la lande.",
 "budget": "13,4 / 12,5 (pioche 4 + garde 6,4 + soin 4 − défausse 3 + récup 4 à 50 %)",
 "a_coder": "Nouvelle condition « defausseCommune » : la Commune défaussée revient en main à la fin du tour (le recup sous si l'approche, mais au mauvais moment)."
}
```

```json
{
 "id": "ASS006-plus-3",
 "zone": "ASS006",
 "pole": "+",
 "palier": 3,
 "nom": "Vote au vent",
 "cout": 1,
 "cible": 0,
 "effet": "Défaussez 1 carte au hasard, puis piochez 1 carte ; la prochaine carte de zone jouée ce tour est doublée. Si la carte défaussée porte un prix, la carte doublée ne paie pas le sien. Soin 7.",
 "ops": [
  [
   "prixDefausse",
   1
  ],
  [
   "pioche",
   1
  ],
  [
   "echo"
  ],
  [
   "si",
   "defausseAPrix",
   []
  ],
  [
   "soin",
   "heros",
   7
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle +",
  "Pioche",
  "Écho",
  "Soin",
  "Condition",
  "Prix",
  "Crochet : défausse"
 ],
 "ambiance": "Sans paravent, le vent rendit des verdicts que personne n'avait payés ; on en jeta quelques-uns, par prudence.",
 "budget": "16 / 15 (pioche 4 + écho 6 + soin 7 − défausse 3 + prix évité 4 à 50 %)",
 "a_coder": "Nouvelle condition « defausseAPrix » ; effet : la carte doublée par cet écho n'applique pas ses ops de prix."
}
```

```json
{
 "id": "ASS006-plus-4",
 "zone": "ASS006",
 "pole": "+",
 "palier": 4,
 "nom": "Paravents arrachés",
 "cout": 1,
 "cible": 0,
 "effet": "La garde de tous les ennemis tombe à 0. Plus de paravent, plus de vent : un ennemi qui vole par-dessus frappe la Garde ce tour. Piochez 2 cartes.",
 "ops": [
  [
   "briseGarde",
   "tous"
  ],
  [
   "si",
   "vol",
   []
  ],
  [
   "pioche",
   2
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle +",
  "Perce-garde",
  "Pioche",
  "Condition",
  "Crochet : anti-vol"
 ],
 "ambiance": "On arracha les montants au burin ; les trous restèrent dans la pierre du banc, pour mémoire.",
 "budget": "17,6 / 17,5 (brise-garde tous 6,6 + pioche 8 + vol ramené sur la Garde 3)",
 "a_coder": "Nouvelle condition « vol » : ce tour, la frappe d'un ennemi qui vole par-dessus suit l'ordre normal (Garde, bloqueurs, bêtes, héros)."
}
```

```json
{
 "id": "ASS006-plus-5",
 "zone": "ASS006",
 "pole": "+",
 "palier": 5,
 "nom": "Retour des bergers",
 "cout": 2,
 "cible": 0,
 "effet": "Une Bergère de la lande rejoint le combat : 20 PV, frappe 5. Vos alliés se soignent de 6 et vos bêtes ne peuvent pas être piétinées ce tour. Le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops": [
  [
   "invoque",
   "Bergère de la lande",
   20,
   5
  ],
  [
   "soin",
   "allies",
   6
  ],
  [
   "si",
   "pietine",
   []
  ],
  [
   "garde",
   "heros",
   8
  ],
  [
   "prixDefausse",
   1
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Pôle +",
  "Invocation",
  "Soin",
  "Garde",
  "Condition",
  "Prix",
  "Crochet : anti-piétinement"
 ],
 "ambiance": "Les bergers revinrent s'asseoir au banc avec leurs bêtes, ce que l'ancienne inscription n'interdisait pas.",
 "budget": "32,9 / 32 (invocation 17,5 + soin alliés 9 + garde 6,4 − défausse 3 + bêtes non piétinables 3)",
 "a_coder": "Ce tour, une frappe qui piétine s'arrête sur la première bête touchée : le surplus ne passe pas aux unités suivantes."
}
```

```json
{
 "id": "ASS006-plus7",
 "zone": "ASS006",
 "pole": "+",
 "palier": 7,
 "nom": "Le Vent sans paravent",
 "cout": 2,
 "cible": 0,
 "effet": "Les bergers reviennent au banc. Les Bergers du banc (24 PV, frappent 5) rejoignent le combat. Vos alliés se soignent de 8, le héros gagne 8 de garde, piochez 2. Pose Racine. Si Braise (consommée) : garde de tous les ennemis à 0 et 12 dégâts à tous.",
 "ops": [
  [
   "invoque",
   "Bergers du banc",
   24,
   5
  ],
  [
   "soin",
   "allies",
   8
  ],
  [
   "garde",
   "heros",
   8
  ],
  [
   "pioche",
   2
  ],
  [
   "pose",
   "Racine"
  ],
  [
   "reveil",
   "Braise",
   true,
   [
    [
     "briseGarde",
     "tous"
    ],
    [
     "deg",
     "tous",
     12
    ]
   ]
  ]
 ],
 "tags": [
  "Assemblée",
  "Vent",
  "Forme ultime +7",
  "Invocation",
  "Soin",
  "Garde",
  "Pioche",
  "Combo",
  "Pose Racine",
  "Réveil Braise",
  "Perce-garde",
  "Dégâts"
 ],
 "ambiance": "On arracha les trous des paravents au burin ; les bergers rallumèrent la lande eux-mêmes, par parcelles, et l'appelèrent un vote.",
 "budget": "45,9 sans combo (invocation 19,5 + soin alliés 12 + garde 6,4 + pioche 8) ; réveil +33 (72 %)"
}
```
