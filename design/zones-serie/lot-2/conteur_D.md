# Lot 2 : conteur D (le Lovecraftien)

Huit zones à cartes (fiche + 14 cartes) et onze Ressources (fiche légère). Format : `CONSIGNES.md` et `cartes-2.2/consignes-cartes.md` sections 4, 6 et 7. Nombres fixes ; budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Conventions de calcul reprises du lot 1 : « tous » sur dégâts et brûlure ×2,2 ; « tous » sur hésite, affaiblit, vulnérable, brise-garde ×2,5 ennemis ; un effet sous condition (`si`) compte pour moitié ; `ignoreGarde` = 3 ; `volVie` = moitié des dégâts ; `ennemiSoin` n = 2,2n ; `ennemiGarde` n = 2n ; `prixBete` n = n. Chaque budget a été calculé par script, et chaque `si` placé avant ce qu'il teste quand la carte elle-même changerait la réponse (« si une bête était déjà en jeu », « si la Garde était déjà levée »).

Recettes de récit (profil D) : temps profond (Tezcaxoc, Tefaone), arrivée (Aumbrevaux, Phoinikoussa), détail qui cloche (Taab Ek'), document interrompu (Larsabba, le seul récit tronqué du lot), deux témoins (Benarrúz), relevé chiffré qui dérape (Bürgüdei).

## Familles d'effets (leçon 4 : aucune famille principale partagée)

| Zone | Pôle − : famille principale | Pôle + : famille principale |
|---|---|---|
| ANT169 La Géode de Tezcaxoc | Folie : bêtes frénétiques + coups au hasard (prix : cartes) | Raison : marques Vulnérable exploitées + pioche (prix : garde ennemie) |
| ANT149 Le Prieuré de sel d'Aumbrevaux | Mort : bêtes salées massives + affaiblissement (prix : PV) | Vie : essaims + soins du camp + vol de vie (prix : soin ennemi, bête blessée) |
| ASS148 Le Popol Na de Taab Ek' | Nuit : lois de pioche et récupération, combo « défaussé en prix » (prix : cartes) | Aurore : lois de brûlure de tous + Vulnérable + mana Pierre (prix : PV) |
| ASS177 L'Ukkin de Larsabba | Silence : lois d'hésitation + combo « la cible hésite » (prix : cartes, PV) | Chant : écho + pioche + garde et soins du camp (prix : PV, soin ennemi) |
| DON017 La Caldeira de Bürgüdei | Ruine : dégâts à tous + gardes brisées + pièges élan/piétinement (prix : PV) | Abondance : gros coup unique + mana Feu + soin du héros (prix : soin ennemi) |
| DON081 L'Alcázar gelé de Benarrúz | Mensonge : pièges (riposte) + conditions d'intention élan/vol/piétine (prix : cartes, PV) | Vérité : frappes qui ignorent la garde + bonus « seul » / « se garde » (prix : PV) |
| DON042 Le Marae ensablé de Tefaone | Peste : contagion en coups au hasard sur ennemis marqués (prix : PV, cartes) | Guérison : PV payés d'abord, puis garde et soin du héros, combo « sous la moitié » (prix : PV) |
| CIT019 Le Kastron de Phoinikoussa | Sécheresse : garde du héros + affaiblissement de tous, combo « Garde levée » (prix : PV) | Déluge : soldats invoqués + garde et soin du camp, combo « allié en jeu » (prix : cartes, garde ennemie) |

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| ANT169 La Géode de Tezcaxoc | Abîme / Racine | Sceau / Givre |
| ANT149 Le Prieuré de sel d'Aumbrevaux | Givre / Sang | Racine / Braise |
| ASS148 Le Popol Na de Taab Ek' | Abîme / Sceau | Braise / Givre |
| ASS177 L'Ukkin de Larsabba | Givre / Abîme | Sceau / Racine |
| DON017 La Caldeira de Bürgüdei | Sang / Braise | Racine / Sceau |
| DON081 L'Alcázar gelé de Benarrúz | Abîme / Givre | Givre / Sang |
| DON042 Le Marae ensablé de Tefaone | Braise / Abîme | Sang / Braise |
| CIT019 Le Kastron de Phoinikoussa | Braise / Sceau | Racine / Givre |

Chaque résonance est posée deux ou trois fois dans le lot, et réveillée au moins deux fois : des chaînes de trois formes ultimes sont possibles (par exemple Taab Ek' Aurore pose Braise → Bürgüdei Ruine la réveille et pose Sang → Benarrúz Vérité le réveille et pose Givre → Taab Ek' Aurore le réveille).

Prix : 5 cartes à prix sur 7 pour chaque pôle de chaque zone (40 au pôle −, 40 au pôle +). Boost : une seule carte, dans le réveil de La Harde démesurée (DON017 +7). Mana : jamais plus de 2 par opération. Invocations des Antres : 5 et 4 (Tezcaxoc), 5 et 7 (Aumbrevaux).

## ±7 : recettes tournantes (leçon 3)

- −7 : démesure (Tezcaxoc, poutres en tous sens), immobilité conservée (Aumbrevaux, frères salés), obscurité (Taab Ek'), silence (Larsabba), ruine (Bürgüdei), reflet trompeur (Benarrúz), rangées funèbres (Tefaone), vide vertical (Phoinikoussa, puits sec).
- +7 : ordre géométrique (Tezcaxoc), foule grouillante (Aumbrevaux), lumière figée (Taab Ek'), paysage devenu écriture (Larsabba), gigantisme (Bürgüdei), dépouillement jusqu'au plan (Benarrúz), retour d'une mer ancienne (Tefaone), submersion (Phoinikoussa).
- Aucun des mots ni des images interdits par la leçon 2 (vérifié au script), aucune végétation qui avale un bâtiment ; un nombre précis n'apparaît que dans une seule zone.

## Gestes des Ressources (leçon 5, à reporter dans la liste commune)

Déterrer des fulgurites (RES137) · recueillir la ponte du corail au filet de soie (RES295) · tendre le lin mouillé d'eau de mer au vent pour le blanchir (RES335, remplace les plumes d'ibis, trop proches des plumes de fou de RES373 chez C) · puiser par les trous de glace au bol de bronze (RES097) · arrêter à la fourche les boules d'herbes que roule le vent (RES231) · battre les cimes à la perche au-dessus de draps (RES077) · poser des nasses à anguilles (RES232) · récolter des sangsues jambes nues (RES263) · suivre l'oiseau indicateur jusqu'aux ruches sauvages (RES230) · écumer une algue au filet fin (RES375) · féconder les dattiers à la main (RES062). Croisé avec les listes de A et de B déjà déposées : aucun doublon (mon premier vannage, trop proche de RES226 chez A, et un tressage, proche de RES187 chez B, ont été remplacés).

## Notes pour le critique

- **Pôles partagés avec le lot 1.** Mort/Vie (ANT149) : ni réservoir, ni ménagerie, ni seiches, ni cellier ; ici des bêtes salées-bloqueuses contre des essaims qui soignent. Peste/Guérison (DON042, après DON101 et ASS115 au lot 1) : la Peste n'est plus de la brûlure ni des lois, mais des coups au hasard sur des ennemis marqués ; la Guérison fait payer des PV d'abord (le tatouage), puis protège.
- **DON042 Guérison** : plusieurs cartes commencent par « le héros perd n PV, puis se soigne ». Le prix est réel (compté dans le budget), mais surtout il sert à passer sous la moitié des PV, qui déclenche les coups (`blesse`). À regarder : est-ce lisible en main ?
- **ASS148 Nuit** s'appuie sur `defausseAPrix` (vrai dès qu'une carte a été défaussée en prix pendant le combat) : les lois de nuit défaussent, et les cartes suivantes s'en nourrissent.
- **CIT019 Déluge** utilise la condition `bete` pour « un allié invoqué » (les soldats invoqués sont des bêtes pour le moteur) ; le texte le dit ainsi.
- **DON081** : Mensonge/Vérité traité sans lumière qui démasque (territoire de C) : deux témoins, et le palais trompeur nourrit et protège tandis que la vérité affame.

---

## La Géode de Tezcaxoc (ANT169 · Antre · Pierre)

```json
{
 "fiche": "ANT169",
 "nom": "La Géode de Tezcaxoc",
 "recit": "Pendant cinq cent mille ans, une eau chargée de gypse a stagné à cinquante-huit degrés dans la géode de Tezcaxoc, et des cristaux y ont poussé d'un cheveu par siècle, jusqu'à barrer la salle de poutres longues de neuf brasses. Puis l'eau s'est retirée. Vinrent les chauves-souris, l'axolotl blanc des flaques, et beaucoup plus tard les polisseurs de miroirs de la maîtresse Ocelotzin, dont les ateliers ont laissé sur le sol une couche de copeaux épaisse d'un doigt. Depuis l'an dernier, les cristaux poussent de nouveau. Un cheveu par semaine.",
 "pal": [
  "Les poutres de gypse ont poussé en tous sens et se croisent à travers la salle ; les chauves-souris volent en huit, et chaque miroir montre une autre heure.",
  "Cristaux tordus, fendus de stries brunes ; les axolotls tournent en rond dans les flaques, et les miroirs d'obsidienne rendent les gestes avec retard.",
  "Géode immense barrée de poutres de gypse blanc, ateliers aztèques de polisseurs aux miroirs d'obsidienne, flaques où dorment des axolotls, chauves-souris.",
  "Les cristaux neufs s'alignent à angle droit, les copeaux se rangent par taille ; les chauves-souris pendent en rangées, à un empan l'une de l'autre.",
  "Un réseau de poutres parallèles remplit la géode ; axolotls, chauves-souris et polisseurs se tiennent aux nœuds, immobiles, tous tournés vers le même mur."
 ],
 "pm": "Folie",
 "pp": "Raison"
}
```

### Pôle − Folie

Progression : le vol en huit, le miroir en retard, l'axolotl qui tourne, la poutre tordue, l'ocelot des ateliers, la ronde des axolotls, puis les poutres se croisent dans toute la salle. Style : bêtes frénétiques à forte attaque et coups au hasard en grappes ; le prix se paie surtout en cartes (la folie fait lâcher la main).

```json
[
{"id": "ANT169-moins-1", "zone": "ANT169", "pole": "-", "palier": 1, "nom": "Le vol en huit", "cout": 1, "cible": 0, "effet": "Une chauve-souris en huit se lève : 6 PV, frappe 3. 3 coups de 2 dégâts au hasard. Défaussez 1 carte au hasard.", "ops": [["invoque", "Chauve-souris en huit", 6, 3], ["deg", "hasard", 2, 3], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Les chauves-souris de Tezcaxoc volent en huit autour des poutres de gypse, et jamais deux fois le même huit.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "ANT169-moins-2", "zone": "ANT169", "pole": "-", "palier": 2, "nom": "Le miroir en retard", "cout": 1, "cible": 0, "effet": "3 coups de 3 dégâts au hasard. Si une bête est en jeu : 2 coups de 3 de plus.", "ops": [["deg", "hasard", 3, 3], ["si", "bete", [["deg", "hasard", 3, 2]]]], "tags": ["Antre", "Pierre", "Pôle −", "Dégâts", "Condition"], "ambiance": "Ocelotzin lève la main devant son miroir d'obsidienne ; dans le miroir, la main se lève un peu après.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "ANT169-moins-3", "zone": "ANT169", "pole": "-", "palier": 3, "nom": "L'axolotl qui tourne", "cout": 1, "cible": 0, "effet": "Un axolotl tournoyant sort de la flaque : 12 PV, frappe 4. 3 coups de 2 dégâts au hasard. Défaussez 1 carte au hasard.", "ops": [["invoque", "Axolotl tournoyant", 12, 4], ["deg", "hasard", 2, 3], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Dans les flaques de la géode, l'axolotl blanc tourne sur lui-même, toujours vers la gauche, jusqu'à creuser la boue.", "budget": "15 (cible 15 ; vérifié)"},
{"id": "ANT169-moins-4", "zone": "ANT169", "pole": "-", "palier": 4, "nom": "La poutre tordue", "cout": 2, "cible": 0, "effet": "4 coups de 5 dégâts au hasard ; la garde ennemie tombe. Si une bête est en jeu : 2 coups de 3 de plus. Le héros perd 3 PV.", "ops": [["deg", "hasard", 5, 4], ["briseGarde", "tous"], ["si", "bete", [["deg", "hasard", 3, 2]]], ["prixPV", 3]], "tags": ["Antre", "Pierre", "Pôle −", "Dégâts", "Perce-garde", "Condition", "Prix"], "ambiance": "La grande poutre de gypse a pris un coude pendant la nuit et traverse maintenant l'atelier des polisseurs.", "budget": "27,5 (cible 28 ; vérifié)"},
{"id": "ANT169-moins-5", "zone": "ANT169", "pole": "-", "palier": 5, "nom": "L'ocelot des ateliers", "cout": 2, "cible": 0, "effet": "Un ocelot des ateliers bondit : 14 PV, frappe 7. 4 coups de 3 dégâts au hasard ; la prochaine carte de zone jouée ce tour a son effet doublé. Défaussez 1 carte au hasard.", "ops": [["invoque", "Ocelot des ateliers", 14, 7], ["deg", "hasard", 3, 4], ["echo"], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts", "Écho", "Prix"], "ambiance": "L'ocelot d'Ocelotzin chasse son reflet d'un miroir à l'autre, et revient parfois avec du sang aux griffes.", "budget": "32,5 (cible 32 ; vérifié)"},
{"id": "ANT169-moins-6", "zone": "ANT169", "pole": "-", "palier": 6, "nom": "Les axolotls en ronde", "cout": 2, "cible": 0, "effet": "Deux axolotls tournoyants sortent de la boue : 12 PV, frappent 4 chacun. 4 coups de 3 dégâts au hasard.", "ops": [["invoque", "Axolotl tournoyant", 12, 4], ["invoque", "Axolotl tournoyant", 12, 4], ["deg", "hasard", 3, 4]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts"], "ambiance": "Les axolotls de Tezcaxoc tournent par dizaines, en ronde, et la flaque s'enfonce au milieu de leur cercle.", "budget": "36 (cible 36 ; vérifié)"},
{"id": "ANT169-moins7", "zone": "ANT169", "pole": "-", "palier": 7, "nom": "La Salle croisée", "cout": 3, "cible": 0, "effet": "Les poutres se croisent : 6 coups de 5 dégâts au hasard, une nuée en huit se lève (16 PV, frappe 6), tous les ennemis hésitent. Défaussez 2 cartes. Pose Abîme. Si Racine (consommée) : un ocelot (14 PV, frappe 7), 4 coups de 4.", "ops": [["deg", "hasard", 5, 6], ["invoque", "Nuée en huit", 16, 6], ["hesite", "tous"], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Racine", true, [["invoque", "Ocelot des ateliers", 14, 7], ["deg", "hasard", 4, 4]]]], "tags": ["Antre", "Pierre", "Forme ultime −7", "Dégâts", "Invocation", "Contrôle", "Prix", "Pose Abîme", "Réveil Racine"], "ambiance": "Dans la géode, les poutres se croisent en tous sens, et chaque miroir de Tezcaxoc montre une heure différente.", "budget": "51 (+33,5 si Racine, soit +66 % ; vérifié)"}
]
```

### Pôle + Raison

Progression : la chauve-souris rangée, le copeau mesuré, l'axolotl aligné, l'angle droit, l'araignée des nœuds, le miroir qui obéit, puis tout se range dans le réseau. Style : marques (Vulnérable) posées puis exploitées, pioche, garde du camp, bêtes lentes qui tiennent leur place ; le prix renforce la garde ennemie ou coûte une carte.

```json
[
{"id": "ANT169-plus-1", "zone": "ANT169", "pole": "+", "palier": 1, "nom": "La chauve-souris rangée", "cout": 1, "cible": 1, "effet": "Une chauve-souris rangée se pend au-dessus de vous : 10 PV, frappe 3. La cible devient vulnérable 1. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Chauve-souris rangée", 10, 3], ["vulnerable", "cible", 1], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Marque", "Prix"], "ambiance": "Les chauves-souris de la voûte pendent à un empan l'une de l'autre, et corrigent l'écart quand l'une s'envole.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "ANT169-plus-2", "zone": "ANT169", "pole": "+", "palier": 2, "nom": "Le copeau mesuré", "cout": 1, "cible": 1, "effet": "4 dégâts à la cible ; elle devient vulnérable 2. Piochez 1 carte. Chaque ennemi gagne 1 de garde.", "ops": [["deg", "cible", 4], ["vulnerable", "cible", 2], ["pioche", 1], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Dégâts", "Marque", "Pioche", "Prix"], "ambiance": "Sur le sol de Tezcaxoc, les copeaux de gypse se sont triés par longueur, du mur jusqu'à la flaque.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "ANT169-plus-3", "zone": "ANT169", "pole": "+", "palier": 3, "nom": "L'axolotl aligné", "cout": 1, "cible": 1, "effet": "Un axolotl aligné se place au bord de la flaque : 14 PV, frappe 3. La cible devient vulnérable 1.", "ops": [["invoque", "Axolotl aligné", 14, 3], ["vulnerable", "cible", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Marque"], "ambiance": "Les axolotls blancs se couchent tous dans le même axe, museau au nord, même quand on les retourne.", "budget": "14,5 (cible 15 ; vérifié)"},
{"id": "ANT169-plus-4", "zone": "ANT169", "pole": "+", "palier": 4, "nom": "L'angle droit", "cout": 2, "cible": 1, "effet": "Tous les ennemis deviennent vulnérables 2 ; 6 dégâts à la cible. Piochez 1 carte. Vos alliés gagnent 6 de garde.", "ops": [["vulnerable", "tous", 2], ["deg", "cible", 6], ["pioche", 1], ["garde", "allies", 6]], "tags": ["Antre", "Pierre", "Pôle +", "Marque", "Dégâts", "Pioche", "Garde"], "ambiance": "Les cristaux neufs de la géode ne poussent plus qu'à angle droit, et se rejoignent sans laisser un jour.", "budget": "29,8 (cible 28 ; vérifié)"},
{"id": "ANT169-plus-5", "zone": "ANT169", "pole": "+", "palier": 5, "nom": "L'araignée des nœuds", "cout": 2, "cible": 1, "effet": "Une araignée des nœuds tisse entre les poutres : 20 PV, frappe 4. Si la cible était déjà vulnérable, 12 dégâts ; puis elle devient vulnérable 2. Piochez 1. Vos alliés gagnent 5 de garde. Chaque ennemi gagne 2 de garde.", "ops": [["invoque", "Araignée des nœuds", 20, 4], ["si", "vulnerable", [["deg", "cible", 12]]], ["vulnerable", "cible", 2], ["pioche", 1], ["garde", "allies", 5], ["ennemiGarde", 2]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Marque", "Condition", "Dégâts", "Pioche", "Garde", "Prix"], "ambiance": "Sa toile entre deux poutres de Tezcaxoc est un carré exact, et elle la refait chaque nuit, maille pour maille.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "ANT169-plus-6", "zone": "ANT169", "pole": "+", "palier": 6, "nom": "Le miroir qui obéit", "cout": 2, "cible": 1, "effet": "Si la cible était déjà vulnérable, 10 dégâts. Puis 14 dégâts ; elle devient vulnérable 3. Piochez 2 cartes. Vos alliés gagnent 4 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "vulnerable", [["deg", "cible", 10]]], ["deg", "cible", 14], ["vulnerable", "cible", 3], ["pioche", 2], ["garde", "allies", 4], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Dégâts", "Marque", "Condition", "Pioche", "Garde", "Prix"], "ambiance": "Dans le miroir d'Ocelotzin, tous les polisseurs font le même geste au même instant, sans s'être regardés.", "budget": "36,2 (cible 36 ; vérifié)"},
{"id": "ANT169-plus7", "zone": "ANT169", "pole": "+", "palier": 7, "nom": "Le Réseau de Tezcaxoc", "cout": 3, "cible": 0, "effet": "Tout se range : tous les ennemis deviennent vulnérables 2, vos alliés gagnent 12 de garde, une araignée se pose (24 PV, frappe 4) ; piochez 2. Ennemis +2 de garde. Pose Sceau. Si Givre (consommé) : tous hésitent, 8 dégâts à tous, vulnérables 1.", "ops": [["vulnerable", "tous", 2], ["garde", "allies", 12], ["invoque", "Grande araignée des nœuds", 24, 4], ["pioche", 2], ["ennemiGarde", 2], ["pose", "Sceau"], ["reveil", "Givre", true, [["hesite", "tous"], ["deg", "tous", 8], ["vulnerable", "tous", 1]]]], "tags": ["Antre", "Pierre", "Forme ultime +7", "Marque", "Garde", "Invocation", "Pioche", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "Polisseurs, axolotls et chauves-souris se tiennent aux nœuds du réseau de gypse, immobiles, tournés vers le même mur.", "budget": "46,6 (+35,1 si Givre, soit +75 % ; vérifié)"}
]
```

---

## Le Prieuré de sel d'Aumbrevaux (ANT149 · Antre · Pierre)

```json
{
 "fiche": "ANT149",
 "nom": "Le Prieuré de sel d'Aumbrevaux",
 "recit": "Vous traversez la croûte de sel par la chaussée des convers, balisée de croix blanchies. Le prieuré d'Aumbrevaux est taillé dans le banc lui-même : nef, cloître, gargouilles, tout devient translucide quand le soleil baisse. Dans le cloître, sur des socles, se tiennent les bêtes salées du temps du prieur Anseau, un chien, un âne, une cigogne, les yeux encore humides. Le frère qui vous guide caresse l'âne en passant. Dans le bassin de saumure, quelque chose de rouge se déplace en banc. En repartant, vous comptez les socles. Il y en a un de plus, et il est vide.",
 "pal": [
  "Le prieuré n'est plus qu'un bloc de sel sans porte ; à travers les murs, on voit les frères assis dans leurs stalles, salés, et le vent ne lève plus un grain.",
  "La croûte s'épaissit, les socles se multiplient dans le cloître ; les corbeaux posés sur les gargouilles ne s'envolent plus, même quand on crie.",
  "Prieuré gothique taillé dans un banc de sel, gargouilles translucides, cloître aux bêtes salées sur leurs socles, bassin de saumure, désert blanc alentour.",
  "La saumure monte dans le cloître, rouge de crevettes ; les mouches du sel couvrent les socles, et les bêtes salées ont des larves au coin des yeux.",
  "Le désert est devenu un lac de saumure qui grouille, sous un tapis noir de mouches bourdonnant d'un bloc ; le prieuré fond par le bas, ses socles flottent."
 ],
 "pm": "Mort",
 "pp": "Vie"
}
```

### Pôle − Mort

Progression : le socle de plus, la croûte qui épaissit, l'âne aux yeux humides, les corbeaux des gargouilles, la saumure qui fige, la cigogne du prieur, puis le chapitre entier quitte ses stalles. Style : bêtes salées lentes et massives qui tiennent le terrain, ennemis desséchés (affaiblissement) ; le prix se paie en PV.

```json
[
{"id": "ANT149-moins-1", "zone": "ANT149", "pole": "-", "palier": 1, "nom": "Le socle de plus", "cout": 1, "cible": 1, "effet": "Le chien salé descend de son socle : 14 PV, frappe 2. La cible perd 1 d'attaque pour le combat. Le héros perd 2 PV.", "ops": [["invoque", "Chien salé", 14, 2], ["affaiblit", "cible", 1], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Le frère convers d'Aumbrevaux époussette chaque matin le socle vide du cloître, avec le même soin que les autres.", "budget": "11 (cible 10 ; vérifié)"},
{"id": "ANT149-moins-2", "zone": "ANT149", "pole": "-", "palier": 2, "nom": "La croûte qui épaissit", "cout": 1, "cible": 1, "effet": "Le héros gagne 8 de garde. La cible perd 2 d'attaque pour le combat.", "ops": [["garde", "heros", 8], ["affaiblit", "cible", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Garde", "Affaiblissement"], "ambiance": "Sur la chaussée des convers, la croûte de sel a pris un doigt, et les croix ont raccourci d'autant.", "budget": "12,4 (cible 12,5 ; vérifié)"},
{"id": "ANT149-moins-3", "zone": "ANT149", "pole": "-", "palier": 3, "nom": "L'âne aux yeux humides", "cout": 1, "cible": 1, "effet": "L'âne salé du cloître se met en marche : 20 PV, frappe 2. La cible perd 1 d'attaque. Le héros perd 2 PV.", "ops": [["invoque", "Âne salé", 20, 2], ["affaiblit", "cible", 1], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "L'âne du prieur Anseau a les yeux humides depuis trois cents ans ; ce matin, une larme a coulé.", "budget": "14 (cible 15 ; vérifié)"},
{"id": "ANT149-moins-4", "zone": "ANT149", "pole": "-", "palier": 4, "nom": "Les corbeaux des gargouilles", "cout": 2, "cible": 0, "effet": "Deux corbeaux des gargouilles se posent devant vous : 16 PV, frappent 3 chacun. Tous les ennemis perdent 1 d'attaque. Le héros perd 4 PV.", "ops": [["invoque", "Corbeau de gargouille", 16, 3], ["invoque", "Corbeau de gargouille", 16, 3], ["affaiblit", "tous", 1], ["prixPV", 4]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Les corbeaux perchés sur les gargouilles d'Aumbrevaux ne s'envolent plus ; le sel leur monte aux pattes.", "budget": "28,5 (cible 28 ; vérifié)"},
{"id": "ANT149-moins-5", "zone": "ANT149", "pole": "-", "palier": 5, "nom": "La saumure qui fige", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent 2 d'attaque ; la cible hésite ce tour. Vos alliés gagnent 10 de garde. Si une bête est en jeu : tous perdent 1 d'attaque de plus.", "ops": [["affaiblit", "tous", 2], ["hesite", "cible"], ["garde", "allies", 10], ["si", "bete", [["affaiblit", "tous", 1]]]], "tags": ["Antre", "Pierre", "Pôle −", "Affaiblissement", "Contrôle", "Garde", "Condition"], "ambiance": "Une main trempée dans le bassin d'Aumbrevaux en ressort gantée de sel, et le gant ne se brise plus.", "budget": "31,75 (cible 32 ; vérifié)"},
{"id": "ANT149-moins-6", "zone": "ANT149", "pole": "-", "palier": 6, "nom": "La cigogne d'Anseau", "cout": 2, "cible": 0, "effet": "La cigogne du prieur déplie ses ailes de sel : 30 PV, frappe 4. Tous les ennemis perdent 2 d'attaque. Vos alliés gagnent 6 de garde. Le héros perd 5 PV.", "ops": [["invoque", "Cigogne d'Anseau", 30, 4], ["affaiblit", "tous", 2], ["garde", "allies", 6], ["prixPV", 5]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Affaiblissement", "Garde", "Prix"], "ambiance": "La cigogne d'Anseau a tourné la tête vers la porte pendant la nuit, et son cou n'a pas craqué.", "budget": "35,8 (cible 36 ; vérifié)"},
{"id": "ANT149-moins7", "zone": "ANT149", "pole": "-", "palier": 7, "nom": "Le Chapitre salé", "cout": 3, "cible": 0, "effet": "Les frères quittent leurs stalles : un chapitre salé de 40 PV qui frappe 3. Tous les ennemis perdent 2 d'attaque et hésitent ; vos alliés gagnent 12 de garde. −6 PV. Pose Givre. Si Sang (consommé) : −2 d'attaque, garde brisée, 8 dégâts à tous.", "ops": [["invoque", "Chapitre salé", 40, 3], ["affaiblit", "tous", 2], ["hesite", "tous"], ["garde", "allies", 12], ["prixPV", 6], ["pose", "Givre"], ["reveil", "Sang", true, [["affaiblit", "tous", 2], ["briseGarde", "tous"], ["deg", "tous", 8]]]], "tags": ["Antre", "Pierre", "Forme ultime −7", "Invocation", "Affaiblissement", "Contrôle", "Garde", "Prix", "Pose Givre", "Réveil Sang"], "ambiance": "Aumbrevaux est un bloc sans porte ; derrière le sel, les frères assis aux stalles ont les yeux humides.", "budget": "53,1 (+40,1 si Sang, soit +76 % ; vérifié)"}
]
```

### Pôle + Vie

Progression : la saumure rouge, les mouches du sel, les larves au coin des yeux, le bassin qui monte, l'âne dessalé, le tapis noir, puis le désert entier devient un lac qui grouille. Style : essaims nombreux et petits, soins de tout le camp, vol de vie ; le prix soigne l'ennemi ou blesse une bête.

```json
[
{"id": "ANT149-plus-1", "zone": "ANT149", "pole": "+", "palier": 1, "nom": "La saumure rouge", "cout": 1, "cible": 0, "effet": "Un banc de crevettes rouges monte du bassin : 6 PV, frappe 2. Vos alliés se soignent de 4.", "ops": [["invoque", "Banc de crevettes", 6, 2], ["soin", "allies", 4]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Soin"], "ambiance": "Dans le bassin du cloître, un banc rouge tourne comme une main qui cherche, et contourne les socles.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT149-plus-2", "zone": "ANT149", "pole": "+", "palier": 2, "nom": "Les mouches du sel", "cout": 1, "cible": 0, "effet": "Une nuée de mouches du sel se lève : 8 PV, frappe 3. 2 coups de 2 dégâts au hasard. Vos alliés se soignent de 3. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Nuée de mouches du sel", 8, 3], ["deg", "hasard", 2, 2], ["soin", "allies", 3], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Dégâts", "Soin", "Prix"], "ambiance": "Les mouches du sel couvrent la chaussée des convers d'une seule couche, et s'écartent du pied d'un seul mouvement.", "budget": "13,3 (cible 12,5 ; vérifié)"},
{"id": "ANT149-plus-3", "zone": "ANT149", "pole": "+", "palier": 3, "nom": "Les larves au coin des yeux", "cout": 1, "cible": 0, "effet": "Si une bête était déjà en jeu : piochez 1 carte. Des larves de socle éclosent : 10 PV, frappe 3. Vos alliés se soignent de 5. Votre bête la plus faible perd 2 PV.", "ops": [["si", "bete", [["pioche", 1]]], ["invoque", "Larves de socle", 10, 3], ["soin", "allies", 5], ["prixBete", 2]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Pioche", "Invocation", "Soin", "Prix"], "ambiance": "Au coin des yeux de l'âne salé, de petites larves blanches remuent ; le frère convers les laisse faire.", "budget": "14,5 (cible 15 ; vérifié)"},
{"id": "ANT149-plus-4", "zone": "ANT149", "pole": "+", "palier": 4, "nom": "Le bassin qui monte", "cout": 2, "cible": 0, "effet": "Deux bancs de crevettes montent : 6 PV, frappent 2 chacun. Vos alliés se soignent de 8 et gagnent 8 de garde. 2 coups de 2 dégâts au hasard.", "ops": [["invoque", "Banc de crevettes", 6, 2], ["invoque", "Banc de crevettes", 6, 2], ["soin", "allies", 8], ["garde", "allies", 8], ["deg", "hasard", 2, 2]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Soin", "Garde", "Dégâts"], "ambiance": "La saumure d'Aumbrevaux a passé le seuil du cloître ; elle monte d'une marche par semaine, rouge et grouillante.", "budget": "30,4 (cible 28 ; vérifié)"},
{"id": "ANT149-plus-5", "zone": "ANT149", "pole": "+", "palier": 5, "nom": "L'âne dessalé", "cout": 2, "cible": 0, "effet": "Si une bête était déjà en jeu : vos alliés se soignent de 6. L'âne dessalé se relève : 22 PV, frappe 5. Vos alliés se soignent de 8 ; piochez 1. Votre bête la plus faible perd 3 PV.", "ops": [["si", "bete", [["soin", "allies", 6]]], ["invoque", "Âne dessalé", 22, 5], ["soin", "allies", 8], ["pioche", 1], ["prixBete", 3]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Soin", "Invocation", "Pioche", "Prix"], "ambiance": "L'eau a dissous le sel sur le flanc de l'âne d'Anseau ; dessous, le poil a repoussé, gris et chaud.", "budget": "30,5 (cible 32 ; vérifié)"},
{"id": "ANT149-plus-6", "zone": "ANT149", "pole": "+", "palier": 6, "nom": "Le tapis noir", "cout": 2, "cible": 0, "effet": "Deux nuées de mouches se lèvent : 8 PV, frappent 3 chacune. 4 coups de 3 dégâts au hasard ; le héros se soigne de la moitié. Vos alliés se soignent de 6. Chaque ennemi se soigne de 2.", "ops": [["invoque", "Nuée de mouches du sel", 8, 3], ["invoque", "Nuée de mouches du sel", 8, 3], ["deg", "hasard", 3, 4], ["volVie"], ["soin", "allies", 6], ["ennemiSoin", 2]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Dégâts", "Vol de vie", "Soin", "Prix"], "ambiance": "Le tapis de mouches qui couvre le prieuré bourdonne sur une seule note, et la note monte quand on approche.", "budget": "36,6 (cible 36 ; vérifié)"},
{"id": "ANT149-plus7", "zone": "ANT149", "pole": "+", "palier": 7, "nom": "La Saumure grouillante", "cout": 3, "cible": 0, "effet": "Le lac de saumure se lève : 30 PV, frappe 4. Vos alliés se soignent de 12 ; 5 coups de 3 dégâts au hasard, le héros se soigne de la moitié. Ennemis soignés de 2. Pose Racine. Si Braise (consommée) : tous brûlent de 4 sur 3 tours, alliés soignés de 8.", "ops": [["invoque", "Lac de saumure", 30, 4], ["soin", "allies", 12], ["deg", "hasard", 3, 5], ["volVie"], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Braise", true, [["brulure", "tous", 4, 3], ["soin", "allies", 8]]]], "tags": ["Antre", "Pierre", "Forme ultime +7", "Invocation", "Soin", "Dégâts", "Vol de vie", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "Le désert d'Aumbrevaux est un lac qui grouille ; le prieuré fond par le bas, et ses socles flottent, vides.", "budget": "51,1 (+34,4 si Braise, soit +67 % ; vérifié)"}
]
```

---

## Le Popol Na de Taab Ek' (ASS148 · Assemblée · Pierre)

```json
{
 "fiche": "ASS148",
 "nom": "Le Popol Na de Taab Ek'",
 "recit": "Au Popol Na de Taab Ek', les sauniers tiennent conseil la nuit, parce que le jour le sel brûle les yeux. On y règle le partage des bassins, les mariages, les dettes de corvée. Le doyen Ah Kin Pech lit les décisions dans le reflet des étoiles sur la saumure, comme son père avant lui. Cette saison a été ordinaire : bonne évaporation, deux naissances, un toit de palmes refait après le vent du nord. Une seule plainte est peinte au codex du conseil, celle des veilleurs du bassin est. Là-bas, disent-ils, l'aube arrive un peu avant le soleil.",
 "pal": [
  "Nuit sans étoiles sur un désert noir ; les torches n'éclairent qu'à un pas, et le conseil siège à tâtons autour d'un bassin qui ne reflète plus rien.",
  "Les nuits durent jusqu'au milieu du jour ; les bassins renvoient des étoiles que le ciel n'a pas, et les sauniers dorment debout contre les tas de sel.",
  "Salines mayas sur un désert blanc, bassins carrés de saumure, maison du conseil au toit de palmes sur une terrasse de calcaire, tas de sel coniques.",
  "L'aube vient de l'est et de l'ouest à la fois ; le sel brille sans soleil, et les ombres des sauniers tombent toutes vers le Popol Na.",
  "Une aube blanche et fixe tient le ciel, sans soleil ; les sauniers aux yeux bandés récoltent à tâtons, et les tas de sel n'ont plus de face à l'ombre."
 ],
 "pm": "Nuit",
 "pp": "Aurore"
}
```

### Pôle − Nuit

Progression : le conseil de nuit, le reflet sur la saumure, les yeux brûlés, les veilleurs du bassin est, les nuits longues, les étoiles que le ciel n'a pas, puis le conseil siège dans le noir complet. Style : lois de pioche et de récupération ; on défausse en prix, et les cartes suivantes s'en nourrissent (condition « une carte a été défaussée en prix »).

```json
[
{"id": "ASS148-moins-1", "zone": "ASS148", "pole": "-", "palier": 1, "nom": "Loi du conseil de nuit", "cout": 1, "cible": 1, "effet": "Loi : la cible hésite ce tour ; piochez 2 cartes. Défaussez 1 carte au hasard.", "ops": [["hesite", "cible"], ["pioche", 2], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Contrôle", "Pioche", "Prix"], "ambiance": "Ah Kin Pech ouvre le conseil quand la dernière lueur du jour a quitté la pointe des tas de sel.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ASS148-moins-2", "zone": "ASS148", "pole": "-", "palier": 2, "nom": "Le reflet sur la saumure", "cout": 1, "cible": 1, "effet": "2 dégâts à la cible ; piochez 1 carte et reprenez la dernière de la défausse. Si une carte a déjà été défaussée en prix ce tour : piochez 1, 3 dégâts.", "ops": [["deg", "cible", 2], ["pioche", 1], ["recup"], ["si", "defausseAPrix", [["pioche", 1], ["deg", "cible", 3]]]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Pioche", "Récupération", "Condition"], "ambiance": "Le doyen se penche sur le bassin de Taab Ek' et lit les étoiles à l'envers, comme son père.", "budget": "13,5 (cible 12,5 ; vérifié)"},
{"id": "ASS148-moins-3", "zone": "ASS148", "pole": "-", "palier": 3, "nom": "Loi des yeux brûlés", "cout": 1, "cible": 0, "effet": "Loi : tous les ennemis hésitent ce tour ; piochez 1. Si une carte a déjà été défaussée en prix ce tour, reprenez la dernière de la défausse. Puis défaussez 1 carte au hasard. Le héros gagne 4 de garde.", "ops": [["hesite", "tous"], ["pioche", 1], ["si", "defausseAPrix", [["recup"]]], ["prixDefausse", 1], ["garde", "heros", 4]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Contrôle", "Pioche", "Prix", "Condition", "Récupération", "Garde"], "ambiance": "Au Popol Na, nul ne siège de jour : une heure de midi sur les bassins blanchit les yeux.", "budget": "16,2 (cible 15 ; vérifié)"},
{"id": "ASS148-moins-4", "zone": "ASS148", "pole": "-", "palier": 4, "nom": "Les veilleurs du bassin est", "cout": 2, "cible": 1, "effet": "10 dégâts à la cible ; piochez 2 cartes et reprenez la dernière de la défausse. Si une carte a déjà été défaussée en prix ce tour : tous hésitent, le héros gagne 6 de garde. Puis défaussez 1 carte au hasard.", "ops": [["deg", "cible", 10], ["pioche", 2], ["recup"], ["si", "defausseAPrix", [["hesite", "tous"], ["garde", "heros", 6]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Pioche", "Récupération", "Prix", "Condition", "Contrôle", "Garde"], "ambiance": "Les veilleurs du bassin est de Taab Ek' rentrent avant l'aube, et jurent qu'elle marchait derrière eux.", "budget": "26,4 (cible 28 ; vérifié)"},
{"id": "ASS148-moins-5", "zone": "ASS148", "pole": "-", "palier": 5, "nom": "Loi des nuits longues", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis hésitent ce tour ; piochez 3 cartes ; ajoutez 1 mana Pierre. Si une carte a déjà été défaussée en prix ce tour : piochez 2, 4 dégâts à tous. Puis défaussez 1 carte au hasard.", "ops": [["hesite", "tous"], ["pioche", 3], ["mana", "Pierre", 1], ["si", "defausseAPrix", [["pioche", 2], ["deg", "tous", 4]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Contrôle", "Pioche", "Mana", "Prix", "Condition", "Dégâts"], "ambiance": "Les nuits de Taab Ek' durent jusqu'au milieu du jour ; le conseil siège, et les sauniers dorment debout.", "budget": "30,4 (cible 32 ; vérifié)"},
{"id": "ASS148-moins-6", "zone": "ASS148", "pole": "-", "palier": 6, "nom": "Les étoiles que le ciel n'a pas", "cout": 2, "cible": 1, "effet": "10 dégâts à la cible ; piochez 3 cartes, reprenez la dernière de la défausse ; la prochaine carte de zone de ce tour a son effet doublé. Si une carte a déjà été défaussée en prix ce tour : 10 dégâts de plus.", "ops": [["deg", "cible", 10], ["pioche", 3], ["recup"], ["echo"], ["si", "defausseAPrix", [["deg", "cible", 10]]]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Pioche", "Récupération", "Écho", "Condition"], "ambiance": "Ah Kin Pech dénombre dans la saumure onze étoiles que le ciel au-dessus de Taab Ek' n'a pas.", "budget": "37 (cible 36 ; vérifié)"},
{"id": "ASS148-moins7", "zone": "ASS148", "pole": "-", "palier": 7, "nom": "Le Conseil à tâtons", "cout": 3, "cible": 0, "effet": "Loi de l'assemblée : tous les ennemis hésitent, perdent 1 d'attaque et subissent 6 dégâts ; piochez 3, reprenez 1, +2 mana Pierre. Défaussez 2 cartes. Pose Abîme. Si Sceau (consommé) : piochez 3, reprenez 1, écho, tous perdent 1 d'attaque.", "ops": [["hesite", "tous"], ["affaiblit", "tous", 1], ["deg", "tous", 6], ["pioche", 3], ["recup"], ["mana", "Pierre", 2], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Sceau", true, [["pioche", 3], ["recup"], ["echo"], ["affaiblit", "tous", 1]]]], "tags": ["Assemblée", "Pierre", "Forme ultime −7", "Loi", "Contrôle", "Affaiblissement", "Dégâts", "Pioche", "Récupération", "Mana", "Prix", "Pose Abîme", "Réveil Sceau"], "ambiance": "Plus une étoile sur Taab Ek' ; le conseil siège à tâtons autour d'un bassin qui ne reflète plus rien.", "budget": "46,7 (+29,5 si Sceau, soit +63 % ; vérifié)"}
]
```

### Pôle + Aurore

Progression : la première lueur, les ombres tournées vers le conseil, l'aube des deux côtés, le sel qui brille, les yeux bandés, la face sans ombre, puis le jour s'arrête. Style : lois de brûlure sur tous les ennemis et de marques (Vulnérable), mana Pierre ; le prix se paie en PV (l'éblouissement).

```json
[
{"id": "ASS148-plus-1", "zone": "ASS148", "pole": "+", "palier": 1, "nom": "La première lueur", "cout": 1, "cible": 1, "effet": "Tous les ennemis brûlent de 1 sur 3 tours ; la cible devient vulnérable 1.", "ops": [["brulure", "tous", 1, 3], ["vulnerable", "cible", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Brûlure", "Marque"], "ambiance": "Sur le bassin est de Taab Ek', une lueur blanche monte de la saumure, alors que l'horizon est encore noir.", "budget": "9,6 (cible 10 ; vérifié)"},
{"id": "ASS148-plus-2", "zone": "ASS148", "pole": "+", "palier": 2, "nom": "Loi des ombres tournées", "cout": 1, "cible": 1, "effet": "Loi : tous les ennemis deviennent vulnérables 1 ; la cible brûle de 2 sur 3 tours. Chaque ennemi gagne 1 de garde.", "ops": [["vulnerable", "tous", 1], ["brulure", "cible", 2, 3], ["ennemiGarde", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Marque", "Brûlure", "Prix"], "ambiance": "À l'aube, les ombres des sauniers tombent toutes vers le Popol Na, de quelque côté que vienne la lumière.", "budget": "11,5 (cible 12,5 ; vérifié)"},
{"id": "ASS148-plus-3", "zone": "ASS148", "pole": "+", "palier": 3, "nom": "L'aube des deux côtés", "cout": 1, "cible": 1, "effet": "Si la cible brûlait déjà, 4 dégâts. Puis tous les ennemis brûlent de 2 sur 2 tours ; la cible devient vulnérable 2. Le héros perd 2 PV.", "ops": [["si", "brule", [["deg", "cible", 4]]], ["brulure", "tous", 2, 2], ["vulnerable", "cible", 2], ["prixPV", 2]], "tags": ["Assemblée", "Pierre", "Pôle +", "Brûlure", "Marque", "Condition", "Dégâts", "Prix"], "ambiance": "Ce matin, l'aube s'est levée à l'est et à l'ouest de Taab Ek', et s'est rejointe au-dessus du conseil.", "budget": "14,8 (cible 15 ; vérifié)"},
{"id": "ASS148-plus-4", "zone": "ASS148", "pole": "+", "palier": 4, "nom": "Loi du sel qui brille", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis brûlent de 3 sur 2 tours et deviennent vulnérables 1 ; ajoutez 2 mana Pierre. Le héros gagne 4 de garde et perd 2 PV.", "ops": [["brulure", "tous", 3, 2], ["vulnerable", "tous", 1], ["mana", "Pierre", 2], ["garde", "heros", 4], ["prixPV", 2]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Brûlure", "Marque", "Mana", "Garde", "Prix"], "ambiance": "Le sel des bassins brille sans soleil ; les sauniers travaillent les paupières couvertes de feuilles de maïs.", "budget": "27,9 (cible 28 ; vérifié)"},
{"id": "ASS148-plus-5", "zone": "ASS148", "pole": "+", "palier": 5, "nom": "Les yeux bandés", "cout": 2, "cible": 1, "effet": "Si la cible était déjà vulnérable, 5 dégâts à tous. Puis tous les ennemis brûlent de 2 sur 3 tours et deviennent vulnérables 1. Piochez 1 ; ajoutez 1 mana Pierre.", "ops": [["si", "vulnerable", [["deg", "tous", 5]]], ["brulure", "tous", 2, 3], ["vulnerable", "tous", 1], ["pioche", 1], ["mana", "Pierre", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Brûlure", "Marque", "Condition", "Dégâts", "Pioche", "Mana"], "ambiance": "Ah Kin Pech ne lit plus rien dans les bassins ; il les écoute grésiller, les yeux bandés de coton.", "budget": "33,2 (cible 32 ; vérifié)"},
{"id": "ASS148-plus-6", "zone": "ASS148", "pole": "+", "palier": 6, "nom": "Loi de la face sans ombre", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis brûlent de 3 sur 3 tours et deviennent vulnérables 2 ; ajoutez 1 mana Pierre. Le héros gagne 3 de garde et perd 4 PV.", "ops": [["brulure", "tous", 3, 3], ["vulnerable", "tous", 2], ["mana", "Pierre", 1], ["garde", "heros", 3], ["prixPV", 4]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Brûlure", "Marque", "Mana", "Garde", "Prix"], "ambiance": "Plus un tas de sel de Taab Ek' n'a de face à l'ombre : c'est la loi du conseil.", "budget": "36,2 (cible 36 ; vérifié)"},
{"id": "ASS148-plus7", "zone": "ASS148", "pole": "+", "palier": 7, "nom": "L'Aube fixe", "cout": 3, "cible": 1, "effet": "Loi de l'assemblée : le jour s'arrête. Tous les ennemis brûlent de 4 sur 3 tours et deviennent vulnérables 2 ; la cible hésite ; +2 mana Pierre. −5 PV. Pose Braise. Si Givre (consommé) : tous hésitent, perdent 2 d'attaque, 5 dégâts à tous.", "ops": [["brulure", "tous", 4, 3], ["vulnerable", "tous", 2], ["hesite", "cible"], ["mana", "Pierre", 2], ["prixPV", 5], ["pose", "Braise"], ["reveil", "Givre", true, [["hesite", "tous"], ["affaiblit", "tous", 2], ["deg", "tous", 5]]]], "tags": ["Assemblée", "Pierre", "Forme ultime +7", "Loi", "Brûlure", "Marque", "Contrôle", "Mana", "Prix", "Pose Braise", "Réveil Givre"], "ambiance": "Une aube blanche tient le ciel de Taab Ek' depuis des saisons, et aucun soleil ne s'est levé derrière.", "budget": "47,4 (+36 si Givre, soit +76 % ; vérifié)"}
]
```

---

## L'Ukkin de Larsabba (ASS177 · Assemblée · Eau)

```json
{
 "fiche": "ASS177",
 "nom": "L'Ukkin de Larsabba",
 "recit": "Tablette de l'ukkin de Larsabba, l'année où le fleuve changea de bras. Présents : les anciens, les jeunes hommes, et la chanteuse Ninsun-ama, qui ouvre chaque séance en chantant l'eau. Première affaire : le canal des roselières s'envase ; on le recreusera. Deuxième affaire : les grenouilles du delta se taisent quand Ninsun-ama chante, puis reprennent son air, note pour note, depuis l'autre rive. Troisième affaire : l'assemblée vote le silence de la chanteuse, à mains levées, par dix-neuf voix contre une. Elle chantera ce soir une dernière fois, pour clore, et les roseaux de la rive",
 "pal": [
  "Le delta est muet : les roseaux ne froissent plus, l'eau coule sans clapot, et les grenouilles assises sur la berge gonflent la gorge sans rien rendre.",
  "Roselières grises immobiles sous le vent ; les bateliers rament en cadence sans un bruit, et les ibis s'envolent sans qu'on entende leurs ailes.",
  "Delta mésopotamien de roseaux géants et de canaux, maisons de roseaux en arche, terrasse de briques crues de l'assemblée, barques de bitume, grenouilles.",
  "Les roseaux sifflent tous la même note ; les grenouilles reprennent les chants des femmes depuis l'autre rive, et l'eau frémit en rides régulières.",
  "Vus de la terrasse, les canaux se sont redessinés en coins et en traits, comme une tablette ; le delta entier chante ce qui y est écrit, sans voix humaine."
 ],
 "pm": "Silence",
 "pp": "Chant"
}
```

### Pôle − Silence

Progression : le vote à mains levées, les grenouilles qui se taisent, la gorge close, les rameurs sans bruit, le roseau immobile, les ailes sans battement, puis le delta devient muet. Style : lois d'hésitation, puis cartes qui frappent la cible qui hésite (condition « la cible hésite ») ; le prix coûte des cartes ou des PV.

```json
[
{"id": "ASS177-moins-1", "zone": "ASS177", "pole": "-", "palier": 1, "nom": "Le vote à mains levées", "cout": 1, "cible": 1, "effet": "Loi : si la cible hésitait déjà, elle devient vulnérable 2. Puis elle hésite ce tour et subit 2 dégâts.", "ops": [["si", "hesite", [["vulnerable", "cible", 2]]], ["hesite", "cible"], ["deg", "cible", 2]], "tags": ["Assemblée", "Eau", "Pôle −", "Loi", "Contrôle", "Condition", "Marque", "Dégâts"], "ambiance": "Sur la terrasse de Larsabba, les mains se lèvent sans bruit ; la seule restée baissée est celle de Ninsun-ama.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ASS177-moins-2", "zone": "ASS177", "pole": "-", "palier": 2, "nom": "Les grenouilles qui se taisent", "cout": 1, "cible": 1, "effet": "Si la cible hésitait déjà, 6 dégâts. Puis tous les ennemis hésitent ce tour ; 3 dégâts à la cible. Défaussez 1 carte au hasard.", "ops": [["si", "hesite", [["deg", "cible", 6]]], ["hesite", "tous"], ["deg", "cible", 3], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle −", "Contrôle", "Dégâts", "Condition", "Prix"], "ambiance": "Quand la chanteuse ouvre la bouche, les grenouilles du delta de Larsabba se taisent toutes à la fois, et attendent.", "budget": "13 (cible 12,5 ; vérifié)"},
{"id": "ASS177-moins-3", "zone": "ASS177", "pole": "-", "palier": 3, "nom": "Loi de la gorge close", "cout": 1, "cible": 1, "effet": "Loi : tous les ennemis perdent 1 d'attaque ; si la cible hésitait déjà, 6 dégâts ; puis elle hésite. Le héros gagne 3 de garde et perd 2 PV.", "ops": [["affaiblit", "tous", 1], ["si", "hesite", [["deg", "cible", 6]]], ["hesite", "cible"], ["garde", "heros", 3], ["prixPV", 2]], "tags": ["Assemblée", "Eau", "Pôle −", "Loi", "Affaiblissement", "Contrôle", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "La loi de Larsabba défend de chanter sur la terrasse ; les anciens l'impriment dans l'argile sans ouvrir la bouche.", "budget": "15,9 (cible 15 ; vérifié)"},
{"id": "ASS177-moins-4", "zone": "ASS177", "pole": "-", "palier": 4, "nom": "Les rameurs sans bruit", "cout": 2, "cible": 1, "effet": "Si la cible hésitait déjà : 10 dégâts et vulnérable 1. Puis tous les ennemis hésitent ce tour et subissent 5 dégâts. Le héros gagne 4 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "hesite", [["deg", "cible", 10], ["vulnerable", "cible", 1]]], ["hesite", "tous"], ["deg", "tous", 5], ["garde", "heros", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle −", "Contrôle", "Dégâts", "Condition", "Marque", "Garde", "Prix"], "ambiance": "Les bateliers de Larsabba rament en cadence ; les pelles entrent dans l'eau et en sortent sans un clapot.", "budget": "27,7 (cible 28 ; vérifié)"},
{"id": "ASS177-moins-5", "zone": "ASS177", "pole": "-", "palier": 5, "nom": "Loi du roseau immobile", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis perdent 2 d'attaque ; piochez 2 cartes ; le héros gagne 8 de garde. Si la cible hésitait déjà, 10 de garde de plus.", "ops": [["affaiblit", "tous", 2], ["pioche", 2], ["garde", "heros", 8], ["si", "hesite", [["garde", "heros", 10]]]], "tags": ["Assemblée", "Eau", "Pôle −", "Loi", "Affaiblissement", "Pioche", "Garde", "Condition"], "ambiance": "Le vent souffle sur les roselières de Larsabba, et pas un roseau ne plie, pas une feuille ne froisse.", "budget": "33,4 (cible 32 ; recalculé par le critique)"},
{"id": "ASS177-moins-6", "zone": "ASS177", "pole": "-", "palier": 6, "nom": "Les ailes sans battement", "cout": 2, "cible": 1, "effet": "Si la cible hésitait déjà : 6 dégâts à tous et elle perd 2 d'attaque. Puis tous les ennemis hésitent ce tour et subissent 8 dégâts. Le héros perd 3 PV.", "ops": [["si", "hesite", [["deg", "tous", 6], ["affaiblit", "cible", 2]]], ["hesite", "tous"], ["deg", "tous", 8], ["prixPV", 3]], "tags": ["Assemblée", "Eau", "Pôle −", "Contrôle", "Dégâts", "Condition", "Affaiblissement", "Prix"], "ambiance": "Un vol d'ibis quitte le delta de Larsabba ; on voit les ailes battre, et l'on n'entend rien.", "budget": "34,2 (cible 36 ; vérifié)"},
{"id": "ASS177-moins7", "zone": "ASS177", "pole": "-", "palier": 7, "nom": "Le Delta muet", "cout": 3, "cible": 1, "effet": "Loi de l'assemblée : silence. Si la cible hésitait déjà, 12 dégâts. Puis tous hésitent, perdent 2 d'attaque et subissent 8 dégâts. Défaussez 1. Pose Givre. Si Abîme (consommé) : garde brisée, −1 d'attaque, 8 dégâts à tous.", "ops": [["si", "hesite", [["deg", "cible", 12]]], ["hesite", "tous"], ["affaiblit", "tous", 2], ["deg", "tous", 8], ["prixDefausse", 1], ["pose", "Givre"], ["reveil", "Abîme", true, [["briseGarde", "tous"], ["affaiblit", "tous", 1], ["deg", "tous", 8]]]], "tags": ["Assemblée", "Eau", "Forme ultime −7", "Loi", "Contrôle", "Affaiblissement", "Dégâts", "Condition", "Prix", "Pose Givre", "Réveil Abîme"], "ambiance": "Les grenouilles de Larsabba gonflent la gorge sur la berge, toutes ensemble, et le delta reste muet.", "budget": "45,6 (+32,6 si Abîme, soit +71 % ; vérifié)"}
]
```

### Pôle + Chant

Progression : la chanteuse ouvre la séance, la loi de l'eau chantée, les grenouilles de l'autre rive, la note unique, les roseaux qui sifflent, la rive qui répond, puis le delta chante ce qui est écrit. Style : écho (la carte suivante compte double), pioche, garde et soins de tout le camp ; le prix se paie en PV (la voix) ou soigne l'ennemi.

```json
[
{"id": "ASS177-plus-1", "zone": "ASS177", "pole": "+", "palier": 1, "nom": "La chanteuse ouvre la séance", "cout": 1, "cible": 0, "effet": "La prochaine carte de zone jouée ce tour a son effet doublé ; piochez 1 carte. Le héros gagne 3 de garde et perd 2 PV.", "ops": [["echo"], ["pioche", 1], ["garde", "heros", 3], ["prixPV", 2]], "tags": ["Assemblée", "Eau", "Pôle +", "Écho", "Pioche", "Garde", "Prix"], "ambiance": "Ninsun-ama chante l'eau pour ouvrir l'ukkin ; en contrebas, le fleuve ralentit jusqu'à la dernière note.", "budget": "10,4 (cible 10 ; vérifié)"},
{"id": "ASS177-plus-2", "zone": "ASS177", "pole": "+", "palier": 2, "nom": "Loi de l'eau chantée", "cout": 1, "cible": 0, "effet": "Loi : piochez 1 carte ; vos alliés gagnent 6 de garde et se soignent de 4.", "ops": [["pioche", 1], ["garde", "allies", 6], ["soin", "allies", 4]], "tags": ["Assemblée", "Eau", "Pôle +", "Loi", "Pioche", "Garde", "Soin"], "ambiance": "La loi de Larsabba veut qu'on chante avant de puiser ; les jarres remplies ainsi ne baissent pas au soleil.", "budget": "12,8 (cible 12,5 ; vérifié)"},
{"id": "ASS177-plus-3", "zone": "ASS177", "pole": "+", "palier": 3, "nom": "Les grenouilles de l'autre rive", "cout": 1, "cible": 1, "effet": "6 dégâts à la cible ; piochez 1 carte ; la prochaine carte de zone de ce tour a son effet doublé. Chaque ennemi se soigne de 1.", "ops": [["deg", "cible", 6], ["pioche", 1], ["echo"], ["ennemiSoin", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Dégâts", "Pioche", "Écho", "Prix"], "ambiance": "Depuis l'autre rive, les grenouilles reprennent l'air de Ninsun-ama, note pour note, avec ses respirations.", "budget": "13,8 (cible 15 ; vérifié)"},
{"id": "ASS177-plus-4", "zone": "ASS177", "pole": "+", "palier": 4, "nom": "Loi de la note unique", "cout": 2, "cible": 0, "effet": "Loi : piochez 2 cartes ; vos alliés gagnent 10 de garde et se soignent de 6 ; la prochaine carte de zone de ce tour a son effet doublé.", "ops": [["pioche", 2], ["garde", "allies", 10], ["soin", "allies", 6], ["echo"]], "tags": ["Assemblée", "Eau", "Pôle +", "Loi", "Pioche", "Garde", "Soin", "Écho"], "ambiance": "Tous les roseaux du delta de Larsabba sifflent la même note, du matin au soir, sans reprendre souffle.", "budget": "28 (cible 28 ; vérifié)"},
{"id": "ASS177-plus-5", "zone": "ASS177", "pole": "+", "palier": 5, "nom": "Les roseaux qui sifflent", "cout": 2, "cible": 0, "effet": "4 coups de 3 dégâts au hasard ; la prochaine carte de zone de ce tour compte double. Piochez 2. Vos alliés gagnent 8 de garde et se soignent de 4. Chaque ennemi se soigne de 2.", "ops": [["deg", "hasard", 3, 4], ["echo"], ["pioche", 2], ["garde", "allies", 8], ["soin", "allies", 4], ["ennemiSoin", 2]], "tags": ["Assemblée", "Eau", "Pôle +", "Dégâts", "Écho", "Pioche", "Garde", "Soin", "Prix"], "ambiance": "Les bateliers coupent un roseau de Larsabba pour en faire une flûte ; il siffle avant qu'on l'ait percé.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "ASS177-plus-6", "zone": "ASS177", "pole": "+", "palier": 6, "nom": "Loi de la rive qui répond", "cout": 2, "cible": 0, "effet": "Loi : écho ; reprenez la dernière carte de la défausse ; piochez 2 ; vos alliés gagnent 12 de garde et se soignent de 8 ; +1 mana Eau. Le héros perd 3 PV.", "ops": [["echo"], ["recup"], ["pioche", 2], ["garde", "allies", 12], ["soin", "allies", 8], ["mana", "Eau", 1], ["prixPV", 3]], "tags": ["Assemblée", "Eau", "Pôle +", "Loi", "Écho", "Récupération", "Pioche", "Garde", "Soin", "Mana", "Prix"], "ambiance": "Quand l'assemblée de Larsabba vote, l'autre rive répond par un chant, et le compte des voix change.", "budget": "35,6 (cible 36 ; vérifié)"},
{"id": "ASS177-plus7", "zone": "ASS177", "pole": "+", "palier": 7, "nom": "Le Chant écrit", "cout": 3, "cible": 0, "effet": "Le delta chante ce qui est écrit : piochez 3, écho, reprenez 1 ; alliés +12 de garde, soignés de 10 ; 3 coups de 3 au hasard. −4 PV. Pose Sceau. Si Racine (consommée) : un chœur de grenouilles (20 PV, frappe 5), alliés soignés de 10, +6 de garde.", "ops": [["pioche", 3], ["echo"], ["recup"], ["garde", "allies", 12], ["soin", "allies", 10], ["deg", "hasard", 3, 3], ["prixPV", 4], ["pose", "Sceau"], ["reveil", "Racine", true, [["invoque", "Chœur de grenouilles", 20, 5], ["soin", "allies", 10], ["garde", "allies", 6]]]], "tags": ["Assemblée", "Eau", "Forme ultime +7", "Pioche", "Écho", "Récupération", "Garde", "Soin", "Dégâts", "Prix", "Pose Sceau", "Réveil Racine"], "ambiance": "Vus de la terrasse, les canaux de Larsabba forment des coins et des traits, et le delta les chante.", "budget": "46,6 (+32,3 si Racine, soit +69 % ; vérifié)"}
]
```

---

## La Caldeira de Bürgüdei (DON017 · Donjon · Feu)

```json
{
 "fiche": "DON017",
 "nom": "La Caldeira de Bürgüdei",
 "recit": "Le clan de Bürgüdei mène ses chevaux d'hiver dans la caldeira, où la terre chaude garde l'herbe verte sous la neige. Chaque printemps, l'aîné Dorjsüren compte les bêtes à la sortie, sur un bâton entaillé. L'année du grand froid : trois cent dix chevaux entrés, trois cent dix sortis. L'année suivante : trois cent dix entrés, trois cent soixante-trois sortis, tous marqués au fer du clan. On a dressé un ovoo de remerciement au bord de la vieille coulée. Cette année, Dorjsüren a cassé son bâton. Les poulains de l'automne ont déjà la taille de leurs mères.",
 "pal": [
  "La caldeira s'est effondrée en un cirque de lave noire ; des ovoos renversés fument encore, et des selles vides pendent aux piquets fondus du campement.",
  "Herbe roussie, feutre des yourtes troué d'escarbilles ; les chevaux broutent la cendre, et la terre chaude craque sous les sabots comme une croûte de pain.",
  "Caldeira d'un volcan dans la steppe, herbe verte sur terre chaude sous la neige, yourtes de feutre blanc, ovoo de pierres et de soie bleue, chevaux, fumerolles.",
  "L'herbe monte au genou en plein hiver ; les juments mettent bas deux fois l'an, et les poulains naissent les yeux ouverts, déjà debout, déjà sevrés.",
  "Les chevaux de la caldeira ont la taille des yourtes et paissent au bord du cratère ; à leur flanc, les cavaliers du clan n'arrivent pas au jarret."
 ],
 "pm": "Ruine",
 "pp": "Abondance"
}
```

### Pôle − Ruine

Progression : l'escarbille, le feutre troué, la croûte qui craque, l'ovoo renversé, la coulée, les selles vides, puis la caldeira s'effondre. Style : puissance brute sur tous les ennemis, gardes brisées, pièges qui punissent l'élan et le piétinement ; le prix se paie en PV.

```json
[
{"id": "DON017-moins-1", "zone": "DON017", "pole": "-", "palier": 1, "nom": "L'escarbille", "cout": 1, "cible": 1, "effet": "3 dégâts à tous les ennemis ; la garde de la cible tombe.", "ops": [["deg", "tous", 3], ["briseGarde", "cible"]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Perce-garde"], "ambiance": "Une escarbille de la caldeira de Bürgüdei traverse le feutre de la yourte et s'éteint dans le seau de lait.", "budget": "9,6 (cible 10 ; vérifié)"},
{"id": "DON017-moins-2", "zone": "DON017", "pole": "-", "palier": 2, "nom": "Le feutre troué", "cout": 1, "cible": 1, "effet": "La garde ennemie tombe ; 7 dégâts à la cible. Le héros perd 2 PV.", "ops": [["briseGarde", "tous"], ["deg", "cible", 7], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Perce-garde", "Dégâts", "Prix"], "ambiance": "Le feutre des yourtes de Bürgüdei est percé de trous ronds, tous du côté du cratère, aucun de l'autre.", "budget": "12,5 (cible 12,5 ; vérifié)"},
{"id": "DON017-moins-3", "zone": "DON017", "pole": "-", "palier": 3, "nom": "La croûte qui craque", "cout": 1, "cible": 0, "effet": "Piège : 5 dégâts à tous les ennemis. Si la cible prend son élan ou piétine : 4 dégâts de plus à tous.", "ops": [["deg", "tous", 5], ["si", "pietine", [["deg", "tous", 4]]]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Condition"], "ambiance": "Sous les sabots, la terre chaude de Bürgüdei craque comme une croûte de pain ; dessous, il n'y a rien.", "budget": "15,4 (cible 15 ; vérifié)"},
{"id": "DON017-moins-4", "zone": "DON017", "pole": "-", "palier": 4, "nom": "L'ovoo renversé", "cout": 2, "cible": 1, "effet": "La garde ennemie tombe ; 9 dégâts à tous ; la cible devient vulnérable 1. Le héros perd 3 PV.", "ops": [["briseGarde", "tous"], ["deg", "tous", 9], ["vulnerable", "cible", 1], ["prixPV", 3]], "tags": ["Donjon", "Feu", "Pôle −", "Perce-garde", "Dégâts", "Marque", "Prix"], "ambiance": "L'ovoo de remerciement s'est couché dans la nuit, pierre par pierre, et sa soie bleue a brûlé sans flamme.", "budget": "27,3 (cible 28 ; vérifié)"},
{"id": "DON017-moins-5", "zone": "DON017", "pole": "-", "palier": 5, "nom": "La coulée", "cout": 2, "cible": 0, "effet": "Piège : 10 dégâts à tous, qui brûlent de 2 sur 2 tours. Si la cible prend son élan : 5 dégâts de plus à tous. Le héros perd 4 PV.", "ops": [["deg", "tous", 10], ["brulure", "tous", 2, 2], ["si", "elan", [["deg", "tous", 5]]], ["prixPV", 4]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Brûlure", "Condition", "Prix"], "ambiance": "La coulée de Bürgüdei avance d'un pas de cheval par jour, droit vers le campement, quel que soit le vent.", "budget": "32,3 (cible 32 ; vérifié)"},
{"id": "DON017-moins-6", "zone": "DON017", "pole": "-", "palier": 6, "nom": "Les selles vides", "cout": 2, "cible": 1, "effet": "La garde ennemie tombe ; 12 dégâts à tous ; la cible perd 2 d'attaque. Le héros perd 4 PV.", "ops": [["briseGarde", "tous"], ["deg", "tous", 12], ["affaiblit", "cible", 2], ["prixPV", 4]], "tags": ["Donjon", "Feu", "Pôle −", "Perce-garde", "Dégâts", "Affaiblissement", "Prix"], "ambiance": "Aux piquets fondus du campement de Bürgüdei pendent des selles vides, sangles bouclées, encore chaudes.", "budget": "35,9 (cible 36 ; vérifié)"},
{"id": "DON017-moins7", "zone": "DON017", "pole": "-", "palier": 7, "nom": "L'Effondrement de Bürgüdei", "cout": 3, "cible": 0, "effet": "La caldeira s'effondre : la garde ennemie tombe, 14 dégâts à tous, qui brûlent de 2 sur 2 tours ; riposte 6 jusqu'au prochain tour. −6 PV. Pose Sang. Si Braise (consommée) : 10 dégâts à tous, brûlure de 3 sur 2 tours.", "ops": [["briseGarde", "tous"], ["deg", "tous", 14], ["brulure", "tous", 2, 2], ["riposte", 6], ["prixPV", 6], ["pose", "Sang"], ["reveil", "Braise", true, [["deg", "tous", 10], ["brulure", "tous", 3, 2]]]], "tags": ["Donjon", "Feu", "Forme ultime −7", "Perce-garde", "Dégâts", "Brûlure", "Riposte", "Prix", "Pose Sang", "Réveil Braise"], "ambiance": "La caldeira de Bürgüdei s'est effondrée en un cirque noir ; les chevaux qui y paissaient n'ont pas laissé d'os.", "budget": "53,1 (+35,2 si Braise, soit +66 % ; vérifié)"}
]
```

### Pôle + Abondance

Progression : l'herbe sous la neige, les juments deux fois l'an, le poulain sevré, le bâton entaillé, les bêtes en surnombre, le cavalier au jarret, puis la harde passe à la taille des yourtes. Style : gros coups sur une seule cible, mana Feu, soins du héros, une bête énorme au palier 7 ; le prix soigne les ennemis (l'abondance nourrit tout le monde).

```json
[
{"id": "DON017-plus-1", "zone": "DON017", "pole": "+", "palier": 1, "nom": "L'herbe sous la neige", "cout": 1, "cible": 1, "effet": "4 dégâts à la cible ; le héros se soigne de 5 ; ajoutez 1 mana Feu. Chaque ennemi se soigne de 1.", "ops": [["deg", "cible", 4], ["soin", "heros", 5], ["mana", "Feu", 1], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Soin", "Mana", "Prix"], "ambiance": "Sous la neige de la caldeira, l'herbe reste verte ; les juments de Bürgüdei la broutent en soufflant.", "budget": "9,8 (cible 10 ; vérifié)"},
{"id": "DON017-plus-2", "zone": "DON017", "pole": "+", "palier": 2, "nom": "Les juments deux fois l'an", "cout": 1, "cible": 1, "effet": "9 dégâts à la cible ; le héros se soigne de 4.", "ops": [["deg", "cible", 9], ["soin", "heros", 4]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Soin"], "ambiance": "Les juments de Bürgüdei mettent bas au printemps, puis à l'automne, et allaitent les deux poulains côte à côte.", "budget": "13 (cible 12,5 ; vérifié)"},
{"id": "DON017-plus-3", "zone": "DON017", "pole": "+", "palier": 3, "nom": "Le poulain sevré", "cout": 1, "cible": 0, "effet": "Un poulain de la caldeira vous suit : 12 PV, frappe 4. Le héros se soigne de 5. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Poulain de la caldeira", 12, 4], ["soin", "heros", 5], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "Le poulain né hier à Bürgüdei se tient déjà debout, sevré, et regarde Dorjsüren dans les yeux.", "budget": "14,8 (cible 15 ; vérifié)"},
{"id": "DON017-plus-4", "zone": "DON017", "pole": "+", "palier": 4, "nom": "Le bâton entaillé", "cout": 2, "cible": 1, "effet": "18 dégâts à la cible ; ajoutez 2 mana Feu ; le héros se soigne de 6. Chaque ennemi se soigne de 1.", "ops": [["deg", "cible", 18], ["mana", "Feu", 2], ["soin", "heros", 6], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Mana", "Soin", "Prix"], "ambiance": "Dorjsüren entaille son bâton à chaque cheval qui sort ; les encoches remontent maintenant jusqu'à son poing.", "budget": "27,8 (cible 28 ; vérifié)"},
{"id": "DON017-plus-5", "zone": "DON017", "pole": "+", "palier": 5, "nom": "Les bêtes en surnombre", "cout": 2, "cible": 1, "effet": "16 dégâts à la cible ; piochez 2 cartes ; le héros se soigne de 8.", "ops": [["deg", "cible", 16], ["pioche", 2], ["soin", "heros", 8]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Pioche", "Soin"], "ambiance": "Trois cent soixante-trois chevaux sortent de la caldeira, tous au fer du clan, et le clan n'en reconnaît aucun.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "DON017-plus-6", "zone": "DON017", "pole": "+", "palier": 6, "nom": "Le cavalier au jarret", "cout": 2, "cible": 1, "effet": "24 dégâts à la cible ; ajoutez 2 mana Feu ; piochez 1. Si le héros est sous la moitié de ses PV : il se soigne de 10. Chaque ennemi se soigne de 2.", "ops": [["deg", "cible", 24], ["mana", "Feu", 2], ["pioche", 1], ["si", "blesse", [["soin", "heros", 10]]], ["ennemiSoin", 2]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Mana", "Pioche", "Condition", "Soin", "Prix"], "ambiance": "Debout près des chevaux de Bürgüdei, le cavalier n'arrive pas au jarret ; il monte par une échelle.", "budget": "34,6 (cible 36 ; vérifié)"},
{"id": "DON017-plus7", "zone": "DON017", "pole": "+", "palier": 7, "nom": "La Harde démesurée", "cout": 3, "cible": 1, "effet": "Un étalon haut comme une yourte se lève : 40 PV, frappe 8. 12 dégâts à la cible ; le héros se soigne de 8 ; +2 mana Feu. Chaque ennemi se soigne de 3. Pose Racine. Si Sceau (consommé) : piochez 2, +1 capacité ce tour, +2 mana Feu, 12 dégâts.", "ops": [["invoque", "Étalon de Bürgüdei", 40, 8], ["deg", "cible", 12], ["soin", "heros", 8], ["mana", "Feu", 2], ["ennemiSoin", 3], ["pose", "Racine"], ["reveil", "Sceau", true, [["pioche", 2], ["boost"], ["mana", "Feu", 2], ["deg", "cible", 12]]]], "tags": ["Donjon", "Feu", "Forme ultime +7", "Invocation", "Dégâts", "Soin", "Mana", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Les chevaux de Bürgüdei paissent au bord du cratère, hauts comme les yourtes, et le clan dort à leur ombre.", "budget": "51,4 (+32 si Sceau, soit +62 % ; vérifié)"}
]
```

---

## L'Alcázar gelé de Benarrúz (DON081 · Donjon · Glace)

```json
{
 "fiche": "DON081",
 "nom": "L'Alcázar gelé de Benarrúz",
 "recit": "Deux voyageurs ont hiverné dans l'alcázar de Benarrúz, debout au milieu de la toundra. Selon le muletier Abenhazam, le palais vivait : fontaines courant sous la glace, myrtes en feuilles dans la cour, serviteurs empressés qui lui portaient chaque soir du riz au safran. Selon la copiste Leonor de Almizcar, ce n'était qu'une ruine, des arcs en fer à cheval sous une coudée de givre, et elle y a mangé le cuir de ses bottes. Ils s'accordent sur les azulejos du patio : il en manquait un par rangée, et chaque matin, un autre.",
 "pal": [
  "Le palais est intact et éclairé, ses fontaines chantent sous la neige ; dans chaque bassin il se reflète avec une tour de plus, et ses serviteurs à l'envers.",
  "Les arcs se couvrent de myrtes en feuilles malgré le gel ; on entend des pas dans la cour et du riz qui cuit, et la neige garde des traces de babouches.",
  "Alcázar andalou en ruine au milieu de la toundra, arcs en fer à cheval sous le givre, patio d'azulejos fêlés, bassin gelé, lichens, rennes grattant la neige.",
  "Le vent arrache le givre des arcs et met la brique à nu ; le patio montre ses trous d'azulejos, et les rennes contournent la cour sans y entrer.",
  "De l'alcázar il ne reste que son plan, tracé à la règle dans le pergélisol ; pas un mur, pas une bête, et la neige ne se pose plus à l'intérieur du tracé."
 ],
 "pm": "Mensonge",
 "pp": "Vérité"
}
```

### Pôle − Mensonge

Progression : le riz au safran, les babouches fraîches, le pas dans la cour, les myrtes en feuilles, la fontaine sous la glace, les serviteurs empressés, puis le palais s'allume pour vous. Style : pièges (riposte) et conditions sur l'intention ennemie (élan, vol, piétinement), un confort qui soigne et protège ; le prix coûte des cartes ou des PV.

```json
[
{"id": "DON081-moins-1", "zone": "DON081", "pole": "-", "palier": 1, "nom": "Le riz au safran", "cout": 1, "cible": 1, "effet": "Le héros se soigne de 4 ; jusqu'au prochain tour, chaque coup reçu renvoie 2 dégâts. Si la cible prend son élan : elle hésite.", "ops": [["soin", "heros", 4], ["riposte", 2], ["si", "elan", [["hesite", "cible"]]]], "tags": ["Donjon", "Glace", "Pôle −", "Soin", "Riposte", "Condition", "Contrôle"], "ambiance": "Chaque soir, Abenhazam trouvait devant sa porte un bol de riz au safran, fumant, et aucune trace dans la neige.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "DON081-moins-2", "zone": "DON081", "pole": "-", "palier": 2, "nom": "Les babouches fraîches", "cout": 1, "cible": 1, "effet": "Piège : le héros gagne 6 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts. Si la cible prend son élan ou piétine : 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["garde", "heros", 6], ["riposte", 4], ["si", "pietine", [["deg", "cible", 6]]], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle −", "Garde", "Riposte", "Condition", "Dégâts", "Prix"], "ambiance": "Dans la cour de Benarrúz, la neige du matin porte des traces de babouches, fraîches, qui viennent vers vous.", "budget": "12,8 (cible 12,5 ; vérifié)"},
{"id": "DON081-moins-3", "zone": "DON081", "pole": "-", "palier": 3, "nom": "Le pas dans la cour", "cout": 1, "cible": 1, "effet": "Piège : si la cible vole, 10 dégâts ; si elle prend son élan, elle hésite. Riposte 3 jusqu'au prochain tour ; le héros gagne 5 de garde et perd 2 PV.", "ops": [["si", "vol", [["deg", "cible", 10]]], ["si", "elan", [["hesite", "cible"]]], ["riposte", 3], ["garde", "heros", 5], ["prixPV", 2]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Dégâts", "Contrôle", "Riposte", "Garde", "Prix"], "ambiance": "Toute la nuit, on marche dans la cour de Benarrúz ; au matin, neige lisse, sauf devant votre porte.", "budget": "15,5 (cible 15 ; vérifié)"},
{"id": "DON081-moins-4", "zone": "DON081", "pole": "-", "palier": 4, "nom": "Les myrtes en feuilles", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan ou piétine : tous perdent 1 d'attaque. Le héros gagne 12 de garde et se soigne de 6 ; riposte 6 jusqu'au prochain tour. Défaussez 1 carte au hasard.", "ops": [["si", "pietine", [["affaiblit", "tous", 1]]], ["garde", "heros", 12], ["soin", "heros", 6], ["riposte", 6], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Affaiblissement", "Garde", "Soin", "Riposte", "Prix"], "ambiance": "Les myrtes de Benarrúz sont en feuilles par un froid qui fend les pierres, et elles sentent l'été.", "budget": "28,35 (cible 28 ; vérifié)"},
{"id": "DON081-moins-5", "zone": "DON081", "pole": "-", "palier": 5, "nom": "La fontaine sous la glace", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : 8 dégâts à tous. Puis elle hésite ; riposte 5 jusqu'au prochain tour ; le héros gagne 8 de garde et se soigne de 4.", "ops": [["si", "elan", [["deg", "tous", 8]]], ["hesite", "cible"], ["riposte", 5], ["garde", "heros", 8], ["soin", "heros", 4]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Dégâts", "Contrôle", "Riposte", "Garde", "Soin"], "ambiance": "Sous la glace du bassin, Abenhazam voyait courir l'eau de la fontaine, et des poissons rouges qui suivaient son doigt.", "budget": "34,2 (cible 32 ; vérifié)"},
{"id": "DON081-moins-6", "zone": "DON081", "pole": "-", "palier": 6, "nom": "Les serviteurs empressés", "cout": 2, "cible": 1, "effet": "Si la cible vole : 12 dégâts. Un serviteur de l'alcázar se présente : 20 PV, frappe 4. Riposte 6 jusqu'au prochain tour ; le héros gagne 6 de garde et perd 3 PV.", "ops": [["si", "vol", [["deg", "cible", 12]]], ["invoque", "Serviteur de l'alcázar", 20, 4], ["riposte", 6], ["garde", "heros", 6], ["prixPV", 3]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Dégâts", "Invocation", "Riposte", "Garde", "Prix"], "ambiance": "Les serviteurs de Benarrúz s'inclinent très bas devant le muletier ; il ne les a jamais vus se redresser.", "budget": "35,8 (cible 36 ; vérifié)"},
{"id": "DON081-moins7", "zone": "DON081", "pole": "-", "palier": 7, "nom": "Le Palais éclairé", "cout": 3, "cible": 0, "effet": "Le palais vous reçoit : vos alliés gagnent 15 de garde, riposte 8 ; tous les ennemis hésitent et perdent 1 d'attaque ; le héros se soigne de 10. Défaussez 2 cartes. Pose Abîme. Si Givre (consommé) : riposte 6, 8 dégâts à tous, −1 d'attaque.", "ops": [["garde", "allies", 15], ["riposte", 8], ["hesite", "tous"], ["affaiblit", "tous", 1], ["soin", "heros", 10], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Givre", true, [["riposte", 6], ["deg", "tous", 8], ["affaiblit", "tous", 1]]]], "tags": ["Donjon", "Glace", "Forme ultime −7", "Garde", "Riposte", "Contrôle", "Affaiblissement", "Soin", "Prix", "Pose Abîme", "Réveil Givre"], "ambiance": "L'alcázar de Benarrúz brille de toutes ses lampes sur la toundra ; ses bassins reflètent des fenêtres qu'il n'a pas.", "budget": "49,5 (+37,1 si Givre, soit +75 % ; vérifié)"}
]
```

### Pôle + Vérité

Progression : les briques à nu, l'azulejo manquant, le cuir des bottes, le vent qui arrache le givre, les rennes à la porte, le compte des azulejos, puis il ne reste que le plan. Style : frappes uniques qui ignorent la garde, bonus contre l'ennemi resté seul ou contre celui qui se garde ; le prix se paie en PV (le froid) ou en cartes.

```json
[
{"id": "DON081-plus-1", "zone": "DON081", "pole": "+", "palier": 1, "nom": "Les briques à nu", "cout": 1, "cible": 1, "effet": "7 dégâts à la cible, qui ignorent sa garde.", "ops": [["deg", "cible", 7], ["ignoreGarde"]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde"], "ambiance": "Le vent de la toundra arrache le givre des arcs de Benarrúz et montre la brique crue, sans enduit.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "DON081-plus-2", "zone": "DON081", "pole": "+", "palier": 2, "nom": "L'azulejo manquant", "cout": 1, "cible": 1, "effet": "8 dégâts à la cible, qui ignorent sa garde ; s'il ne reste qu'un ennemi, 6 de plus. Le héros perd 2 PV.", "ops": [["deg", "cible", 8], ["ignoreGarde"], ["si", "seul", [["deg", "cible", 6]]], ["prixPV", 2]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde", "Condition", "Prix"], "ambiance": "Leonor compte les azulejos du patio de Benarrúz chaque matin : il en manque un par rangée, jamais le même.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "DON081-plus-3", "zone": "DON081", "pole": "+", "palier": 3, "nom": "Le cuir des bottes", "cout": 1, "cible": 1, "effet": "8 dégâts à la cible, qui ignorent sa garde ; elle devient vulnérable 1 ; s'il ne reste qu'un ennemi, 4 de plus.", "ops": [["deg", "cible", 8], ["ignoreGarde"], ["vulnerable", "cible", 1], ["si", "seul", [["deg", "cible", 4]]]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde", "Marque", "Condition"], "ambiance": "Leonor de Almizcar a mangé le cuir de ses bottes dans une salle vide, sous des arcs blancs de givre.", "budget": "16 (cible 15 ; vérifié)"},
{"id": "DON081-plus-4", "zone": "DON081", "pole": "+", "palier": 4, "nom": "Le vent qui arrache le givre", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : 8 dégâts. 16 dégâts à la cible ; ces dégâts ignorent la garde. Puis toute garde ennemie tombe. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["deg", "cible", 16], ["ignoreGarde"], ["briseGarde", "tous"], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Sur la toundra, le vent décape le givre des murs de Benarrúz et laisse la brique nue, rangée par rangée.", "budget": "27,5 (cible 28 ; vérifié)"},
{"id": "DON081-plus-5", "zone": "DON081", "pole": "+", "palier": 5, "nom": "Les rennes à la porte", "cout": 2, "cible": 1, "effet": "20 dégâts à la cible, qui ignorent sa garde ; elle perd 2 d'attaque ; s'il ne reste qu'un ennemi, 12 de plus. Le héros perd 3 PV.", "ops": [["deg", "cible", 20], ["ignoreGarde"], ["affaiblit", "cible", 2], ["si", "seul", [["deg", "cible", 12]]], ["prixPV", 3]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde", "Affaiblissement", "Condition", "Prix"], "ambiance": "Les rennes contournent l'alcázar de Benarrúz à cent pas, et ne broutent pas le lichen de ses murs.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "DON081-plus-6", "zone": "DON081", "pole": "+", "palier": 6, "nom": "Le compte des azulejos", "cout": 2, "cible": 1, "effet": "22 dégâts à la cible, qui ignorent sa garde ; elle devient vulnérable 3 ; piochez 1. S'il ne reste qu'un ennemi : il hésite. Le héros perd 4 PV.", "ops": [["deg", "cible", 22], ["ignoreGarde"], ["vulnerable", "cible", 3], ["pioche", 1], ["si", "seul", [["hesite", "cible"]]], ["prixPV", 4]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde", "Marque", "Pioche", "Condition", "Contrôle", "Prix"], "ambiance": "Abenhazam et Leonor ne s'accordent que sur les trous du patio ; ce matin, ils ont changé de place.", "budget": "36,5 (cible 36 ; vérifié)"},
{"id": "DON081-plus7", "zone": "DON081", "pole": "+", "palier": 7, "nom": "Le Plan dans le pergélisol", "cout": 3, "cible": 1, "effet": "Il ne reste que le plan : toute garde ennemie tombe, tous deviennent vulnérables 2 ; 24 dégâts à la cible, qui ignorent la garde, 10 de plus si elle est seule. −5 PV. Pose Givre. Si Sang (consommé) : 22 dégâts à la cible, vol de vie.", "ops": [["briseGarde", "tous"], ["vulnerable", "tous", 2], ["deg", "cible", 24], ["ignoreGarde"], ["si", "seul", [["deg", "cible", 10]]], ["prixPV", 5], ["pose", "Givre"], ["reveil", "Sang", true, [["deg", "cible", 22], ["volVie"]]]], "tags": ["Donjon", "Glace", "Forme ultime +7", "Perce-garde", "Marque", "Dégâts", "Condition", "Prix", "Pose Givre", "Réveil Sang"], "ambiance": "De Benarrúz ne reste que le plan, tracé à la règle dans le pergélisol ; la neige s'en écarte.", "budget": "49,5 (+33 si Sang, soit +67 % ; vérifié)"}
]
```

---

## Le Marae ensablé de Tefaone (DON042 · Donjon · Feu)

```json
{
 "fiche": "DON042",
 "nom": "Le Marae ensablé de Tefaone",
 "recit": "Il y a douze mille ans, le désert de Tefaone était un lagon, et le sable qui y roule est fait de ses coraux, broyés grain par grain par le vent. La mer s'est retirée en trois mille ans. Les navigateurs arrivés en pirogue à sa dernière marée ont bâti le marae en dalles de corail, et y ont soigné leurs fièvres par le tatouage, au peigne d'os et à la suie : la tahu'a Hina-Rau traçait sur chaque malade la carte des courants. Puis les dunes ont couvert le marae. Quand le vent le découvre, ses dalles sont mouillées.",
 "pal": [
  "Les malades sont couchés en rangées sur le sable jusqu'à l'horizon, la tête vers l'ancienne mer ; les dunes s'arrêtent net au bord de chaque corps.",
  "Sable brûlant piqué de taches brunes, fièvre qui court d'un campement à l'autre avec le vent ; les malades tracent en dormant des courants dans le sable.",
  "Désert de sable blond de corail broyé, marae polynésien de dalles de corail à demi ensablé, pirogues échouées au sommet des dunes, peignes à tatouer.",
  "Les dalles du marae suintent de l'eau salée ; les tatouages des guéris s'allongent seuls sur leur peau, et l'on trouve des coquillages vivants dans le sable.",
  "La mer d'autrefois est revenue sur Tefaone, claire, à hauteur de poitrine ; les guéris, tatoués de la tête aux pieds, y marchent sans remonter respirer."
 ],
 "pm": "Peste",
 "pp": "Guérison"
}
```

### Pôle − Peste

Progression : la fièvre du vent, les taches brunes, le campement suivant, les courants tracés en dormant, la pirogue des malades, le bord de chaque corps, puis la fièvre couche tout le monde en rangées. Style : contagion en coups au hasard qui se répandent sur des ennemis marqués (Vulnérable) ; le prix se paie en PV ou en cartes.

```json
[
{"id": "DON042-moins-1", "zone": "DON042", "pole": "-", "palier": 1, "nom": "La fièvre du vent", "cout": 1, "cible": 1, "effet": "4 coups de 2 dégâts au hasard ; la cible devient vulnérable 1. Le héros perd 1 PV.", "ops": [["deg", "hasard", 2, 4], ["vulnerable", "cible", 1], ["prixPV", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Marque", "Prix"], "ambiance": "Le vent de Tefaone porte la fièvre d'une dune à l'autre ; les campements tombent malades dans l'ordre du vent.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "DON042-moins-2", "zone": "DON042", "pole": "-", "palier": 2, "nom": "Les taches brunes", "cout": 1, "cible": 0, "effet": "3 coups de 3 dégâts au hasard. Si la cible est vulnérable : 3 coups de 2 de plus.", "ops": [["deg", "hasard", 3, 3], ["si", "vulnerable", [["deg", "hasard", 2, 3]]]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Condition"], "ambiance": "Le sable de corail se tache de brun autour des malades de Tefaone, en cercles de la taille d'une natte.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "DON042-moins-3", "zone": "DON042", "pole": "-", "palier": 3, "nom": "Le campement suivant", "cout": 1, "cible": 0, "effet": "4 coups de 3 dégâts au hasard ; tous les ennemis deviennent vulnérables 1. Le héros perd 4 PV.", "ops": [["deg", "hasard", 3, 4], ["vulnerable", "tous", 1], ["prixPV", 4]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Marque", "Prix"], "ambiance": "On fuit la fièvre de Tefaone, et l'on trouve au camp suivant des malades déjà couchés, que nul ne connaît.", "budget": "15,5 (cible 15 ; vérifié)"},
{"id": "DON042-moins-4", "zone": "DON042", "pole": "-", "palier": 4, "nom": "Les courants tracés en dormant", "cout": 2, "cible": 1, "effet": "6 coups de 4 dégâts au hasard ; la cible devient vulnérable 2. Défaussez 1 carte au hasard.", "ops": [["deg", "hasard", 4, 6], ["vulnerable", "cible", 2], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Marque", "Prix"], "ambiance": "Les fiévreux de Tefaone tracent du doigt, en dormant, les courants d'une mer qu'aucun d'eux n'a vue.", "budget": "27 (cible 28 ; vérifié)"},
{"id": "DON042-moins-5", "zone": "DON042", "pole": "-", "palier": 5, "nom": "La pirogue des malades", "cout": 2, "cible": 1, "effet": "Si la cible était déjà vulnérable : 3 coups de 3 dégâts au hasard. Puis 5 coups de 4 au hasard ; tous les ennemis deviennent vulnérables 1.", "ops": [["si", "vulnerable", [["deg", "hasard", 3, 3]]], ["deg", "hasard", 4, 5], ["vulnerable", "tous", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Marque", "Condition"], "ambiance": "On couche les malades dans les pirogues échouées au sommet des dunes de Tefaone, la proue vers l'ancienne mer.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "DON042-moins-6", "zone": "DON042", "pole": "-", "palier": 6, "nom": "Le bord de chaque corps", "cout": 2, "cible": 1, "effet": "6 coups de 5 dégâts au hasard ; tous les ennemis deviennent vulnérables 1 ; la cible perd 1 d'attaque. Le héros perd 4 PV.", "ops": [["deg", "hasard", 5, 6], ["vulnerable", "tous", 1], ["affaiblit", "cible", 1], ["prixPV", 4]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Marque", "Affaiblissement", "Prix"], "ambiance": "Le sable qui roule sur Tefaone s'arrête net au bord de chaque malade couché, comme devant une pierre.", "budget": "36,5 (cible 36 ; vérifié)"},
{"id": "DON042-moins7", "zone": "DON042", "pole": "-", "palier": 7, "nom": "Les Rangées de Tefaone", "cout": 3, "cible": 0, "effet": "La fièvre couche tout le monde : tous les ennemis hésitent et deviennent vulnérables 2 ; 6 coups de 5 dégâts au hasard. Le héros perd 6 PV. Pose Braise. Si Abîme (consommé) : 6 coups de 4 au hasard, tous perdent 1 d'attaque.", "ops": [["vulnerable", "tous", 2], ["hesite", "tous"], ["deg", "hasard", 5, 6], ["prixPV", 6], ["pose", "Braise"], ["reveil", "Abîme", true, [["deg", "hasard", 4, 6], ["affaiblit", "tous", 1]]]], "tags": ["Donjon", "Feu", "Forme ultime −7", "Marque", "Contrôle", "Dégâts", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "Les malades de Tefaone sont couchés en rangées jusqu'à l'horizon, la tête vers l'ancienne mer, et le vent les contourne.", "budget": "49 (+31,5 si Abîme, soit +64 % ; vérifié)"}
]
```

### Pôle + Guérison

Progression : le peigne d'os, la suie et l'eau salée, le tatouage qui s'allonge, la carte des courants, les coquillages vivants, la main de Hina-Rau, puis la mer revient. Style : le tatouage fait mal avant de guérir : on perd des PV d'abord, puis grosse garde et soins du héros, et des coups qui ne partent que si le héros est sous la moitié de ses PV.

```json
[
{"id": "DON042-plus-1", "zone": "DON042", "pole": "+", "palier": 1, "nom": "Le peigne d'os", "cout": 1, "cible": 1, "effet": "Le héros perd 3 PV ; s'il est alors sous la moitié de ses PV, 6 dégâts à la cible. Puis il se soigne de 6 et gagne 5 de garde.", "ops": [["prixPV", 3], ["si", "blesse", [["deg", "cible", 6]]], ["soin", "heros", 6], ["garde", "heros", 5]], "tags": ["Donjon", "Feu", "Pôle +", "Prix", "Soin", "Garde", "Condition", "Dégâts"], "ambiance": "Hina-Rau trempe le peigne d'os dans la suie et le frappe d'un petit maillet, à l'endroit exact du courant.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "DON042-plus-2", "zone": "DON042", "pole": "+", "palier": 2, "nom": "La suie et l'eau salée", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 8 et gagne 6 de garde.", "ops": [["soin", "heros", 8], ["garde", "heros", 6]], "tags": ["Donjon", "Feu", "Pôle +", "Soin", "Garde"], "ambiance": "Sur la plaie fraîche, la tahu'a frotte l'eau salée qui sort, goutte à goutte, des dalles du marae de Tefaone.", "budget": "12,8 (cible 12,5 ; vérifié)"},
{"id": "DON042-plus-3", "zone": "DON042", "pole": "+", "palier": 3, "nom": "Le tatouage qui s'allonge", "cout": 1, "cible": 1, "effet": "Le héros perd 4 PV ; s'il est alors sous la moitié de ses PV, 4 dégâts à la cible et il se soigne de 8. Puis il gagne 10 de garde et se soigne de 5.", "ops": [["prixPV", 4], ["si", "blesse", [["deg", "cible", 4], ["soin", "heros", 8]]], ["garde", "heros", 10], ["soin", "heros", 5]], "tags": ["Donjon", "Feu", "Pôle +", "Prix", "Garde", "Soin", "Condition", "Dégâts"], "ambiance": "Chez les guéris de Tefaone, le tatouage continue de s'allonger après le peigne, d'un doigt par nuit, vers le cœur.", "budget": "15 (cible 15 ; vérifié)"},
{"id": "DON042-plus-4", "zone": "DON042", "pole": "+", "palier": 4, "nom": "La carte des courants", "cout": 2, "cible": 1, "effet": "Le héros perd 3 PV ; s'il est alors sous la moitié de ses PV, 14 dégâts à la cible. Puis il se soigne de 10 et gagne 14 de garde ; riposte 2 jusqu'au prochain tour.", "ops": [["prixPV", 3], ["si", "blesse", [["deg", "cible", 14]]], ["soin", "heros", 10], ["garde", "heros", 14], ["riposte", 2]], "tags": ["Donjon", "Feu", "Pôle +", "Prix", "Soin", "Garde", "Riposte", "Condition", "Dégâts"], "ambiance": "Hina-Rau trace sur le dos du malade les courants d'un lagon que personne à Tefaone n'a jamais vu en eau.", "budget": "29,2 (cible 28 ; vérifié)"},
{"id": "DON042-plus-5", "zone": "DON042", "pole": "+", "palier": 5, "nom": "Les coquillages vivants", "cout": 2, "cible": 1, "effet": "Le héros se soigne de 12 et gagne 12 de garde ; 6 dégâts à la cible ; piochez 1 carte.", "ops": [["soin", "heros", 12], ["garde", "heros", 12], ["deg", "cible", 6], ["pioche", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Soin", "Garde", "Dégâts", "Pioche"], "ambiance": "Dans le sable brûlant autour du marae, on ramasse des coquillages vivants, fermés, pleins d'eau de mer.", "budget": "31,6 (cible 32 ; vérifié)"},
{"id": "DON042-plus-6", "zone": "DON042", "pole": "+", "palier": 6, "nom": "La main de Hina-Rau", "cout": 2, "cible": 1, "effet": "Le héros perd 5 PV ; s'il est alors sous la moitié de ses PV, 18 dégâts à la cible et il se soigne de 6. Puis il gagne 16 de garde et se soigne de 10 ; riposte 3.", "ops": [["prixPV", 5], ["si", "blesse", [["deg", "cible", 18], ["soin", "heros", 6]]], ["garde", "heros", 16], ["soin", "heros", 10], ["riposte", 3]], "tags": ["Donjon", "Feu", "Pôle +", "Prix", "Garde", "Soin", "Riposte", "Condition", "Dégâts"], "ambiance": "Les guéris de Hina-Rau se baignent dans le sable de Tefaone comme dans une eau, et en ressortent mouillés.", "budget": "35,8 (cible 36 ; vérifié)"},
{"id": "DON042-plus7", "zone": "DON042", "pole": "+", "palier": 7, "nom": "La Mer revenue", "cout": 3, "cible": 0, "effet": "La mer revient. Le héros perd 8 PV ; s'il est alors sous la moitié de ses PV, 12 dégâts à tous. Puis il se soigne de 18 et gagne 20 de garde ; riposte 5. Pose Sang. Si Braise (consommée) : 10 dégâts à tous, soin 12.", "ops": [["prixPV", 8], ["si", "blesse", [["deg", "tous", 12]]], ["soin", "heros", 18], ["garde", "heros", 20], ["riposte", 5], ["pose", "Sang"], ["reveil", "Braise", true, [["deg", "tous", 10], ["soin", "heros", 12]]]], "tags": ["Donjon", "Feu", "Forme ultime +7", "Prix", "Soin", "Garde", "Riposte", "Condition", "Dégâts", "Pose Sang", "Réveil Braise"], "ambiance": "La mer est revenue sur Tefaone, à hauteur de poitrine ; les guéris tatoués y marchent sans jamais remonter respirer.", "budget": "49,2 (+34 si Braise, soit +69 % ; vérifié)"}
]
```

---

## Le Kastron de Phoinikoussa (CIT019 · Citadelle · Sève)

```json
{
 "fiche": "CIT019",
 "nom": "Le Kastron de Phoinikoussa",
 "recit": "Vous entrez au kastron de Phoinikoussa par la porte du nord, sous un archange de mosaïque aux ailes ensablées. Le drongaire Kosmas vous mène droit à la citerne : une forêt de colonnes de marbre sous la cour, cent vingt-six, et l'eau noire, immobile, au troisième anneau de chacune. Au-dessus, les palmiers ont le pied sec et la garnison boit à la louche. Kosmas trempe un doigt dans la citerne, le goûte, fait graver un trait sur la colonne la plus proche. En remontant, vous comptez les anneaux. L'eau en a pris deux pendant votre visite.",
 "pal": [
  "La citerne est un puits sec de colonnes nues qui descendent plus bas qu'on ne les a bâties ; au-dessus, les palmiers morts tiennent debout et le kastron craque.",
  "Palmes jaunies, sable sur les mosaïques de la cour ; la garnison boit à la louche, et les colonnes de la citerne montrent des anneaux secs jusqu'au dernier.",
  "Forteresse byzantine de pierre blonde au cœur d'une oasis de palmiers, citerne à colonnes de marbre sous la cour, mosaïques à fond d'or, garnison et chameaux.",
  "L'eau de la citerne affleure aux grilles de la cour, noire et plate ; les palmiers ont les racines à l'air, et les soldats dorment les pieds mouillés.",
  "Le kastron est sous un lac immobile, clair jusqu'au fond ; la garnison tient ses postes sur les remparts noyés, et les palmes restent droites, comme à l'air."
 ],
 "pm": "Sécheresse",
 "pp": "Déluge"
}
```

### Pôle − Sécheresse

Progression : la louche de la garnison, le sable sur les mosaïques, les palmes jaunies, les anneaux secs, le drongaire qui rationne, le kastron qui craque, puis la citerne devient un puits de colonnes. Style : endurance du héros (grosse garde) et soif de l'assiégeant (affaiblissement de tous), avec un bonus si la Garde tenait déjà ; le prix se paie en PV (la ration).

```json
[
{"id": "CIT019-moins-1", "zone": "CIT019", "pole": "-", "palier": 1, "nom": "La louche de la garnison", "cout": 1, "cible": 1, "effet": "La cible perd 2 d'attaque pour le combat. Le héros gagne 6 de garde et perd 1 PV.", "ops": [["affaiblit", "cible", 2], ["garde", "heros", 6], ["prixPV", 1]], "tags": ["Citadelle", "Sève", "Pôle −", "Affaiblissement", "Garde", "Prix"], "ambiance": "À Phoinikoussa, chaque soldat boit une louche à la relève, sous l'œil du drongaire, et pas une goutte de plus.", "budget": "9,8 (cible 10 ; vérifié)"},
{"id": "CIT019-moins-2", "zone": "CIT019", "pole": "-", "palier": 2, "nom": "Le sable sur les mosaïques", "cout": 1, "cible": 0, "effet": "Tous les ennemis perdent 1 d'attaque pour le combat. Le héros gagne 6 de garde.", "ops": [["affaiblit", "tous", 1], ["garde", "heros", 6]], "tags": ["Citadelle", "Sève", "Pôle −", "Affaiblissement", "Garde"], "ambiance": "Le sable entre par les meurtrières du kastron et recouvre l'archange de la cour jusqu'aux genoux.", "budget": "12,3 (cible 12,5 ; vérifié)"},
{"id": "CIT019-moins-3", "zone": "CIT019", "pole": "-", "palier": 3, "nom": "Les palmes jaunies", "cout": 1, "cible": 1, "effet": "Si la Garde était déjà levée : la cible perd 1 d'attaque. Tous les ennemis perdent 1 d'attaque ; 2 dégâts à la cible. Le héros gagne 8 de garde et perd 2 PV.", "ops": [["si", "garde", [["affaiblit", "cible", 1]]], ["affaiblit", "tous", 1], ["deg", "cible", 2], ["garde", "heros", 8], ["prixPV", 2]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Affaiblissement", "Dégâts", "Garde", "Prix"], "ambiance": "Les palmes de l'oasis jaunissent par la pointe, toutes ensemble, et le kastron sent le foin chaud.", "budget": "15,4 (cible 15 ; vérifié)"},
{"id": "CIT019-moins-4", "zone": "CIT019", "pole": "-", "palier": 4, "nom": "Les anneaux secs", "cout": 2, "cible": 1, "effet": "Si la Garde était déjà levée : la cible hésite. Tous les ennemis perdent 2 d'attaque ; le héros gagne 16 de garde et perd 3 PV.", "ops": [["si", "garde", [["hesite", "cible"]]], ["affaiblit", "tous", 2], ["garde", "heros", 16], ["prixPV", 3]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Contrôle", "Affaiblissement", "Garde", "Prix"], "ambiance": "Sur les colonnes de la citerne, l'eau a quitté le dernier anneau pendant la nuit, sans un bruit d'écoulement.", "budget": "27,3 (cible 28 ; vérifié)"},
{"id": "CIT019-moins-5", "zone": "CIT019", "pole": "-", "palier": 5, "nom": "Le drongaire rationne", "cout": 2, "cible": 0, "effet": "Si la Garde était déjà levée : tous les ennemis perdent 1 d'attaque. Tous perdent 2 d'attaque ; vos alliés gagnent 14 de garde ; piochez 1 carte.", "ops": [["si", "garde", [["affaiblit", "tous", 1]]], ["affaiblit", "tous", 2], ["garde", "allies", 14], ["pioche", 1]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Affaiblissement", "Garde", "Pioche"], "ambiance": "Kosmas rationne l'eau de Phoinikoussa au poids, sur une balance de bronze, et inscrit chaque once au registre.", "budget": "33,95 (cible 32 ; vérifié)"},
{"id": "CIT019-moins-6", "zone": "CIT019", "pole": "-", "palier": 6, "nom": "Le kastron qui craque", "cout": 2, "cible": 0, "effet": "Si la Garde était déjà levée : 4 dégâts à tous. Le héros gagne 20 de garde ; tous les ennemis perdent 2 d'attaque ; riposte 3. Le héros perd 3 PV.", "ops": [["si", "garde", [["deg", "tous", 4]]], ["garde", "heros", 20], ["affaiblit", "tous", 2], ["riposte", 3], ["prixPV", 3]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Dégâts", "Garde", "Affaiblissement", "Riposte", "Prix"], "ambiance": "Le kastron de Phoinikoussa craque au soleil de midi comme une poutre, et chaque nuit lui donne une fissure.", "budget": "38,4 (cible 36 ; vérifié)"},
{"id": "CIT019-moins7", "zone": "CIT019", "pole": "-", "palier": 7, "nom": "Le Puits de colonnes", "cout": 3, "cible": 0, "effet": "La garnison tient sans eau : si la Garde était levée, tous hésitent ; le héros gagne 28 de garde, tous les ennemis perdent 3 d'attaque ; riposte 4. −6 PV. Pose Braise. Si Sceau (consommé) : piochez 3, +16 de garde, −1 d'attaque à tous.", "ops": [["si", "garde", [["hesite", "tous"]]], ["garde", "heros", 28], ["affaiblit", "tous", 3], ["riposte", 4], ["prixPV", 6], ["pose", "Braise"], ["reveil", "Sceau", true, [["pioche", 3], ["garde", "heros", 16], ["affaiblit", "tous", 1]]]], "tags": ["Citadelle", "Sève", "Forme ultime −7", "Condition", "Contrôle", "Garde", "Affaiblissement", "Riposte", "Prix", "Pose Braise", "Réveil Sceau"], "ambiance": "La citerne de Phoinikoussa est un puits de colonnes, plus profond qu'on ne l'a bâti.", "budget": "51,9 (+32,3 si Sceau, soit +62 % ; vérifié)"}
]
```

### Pôle + Déluge

Progression : l'eau aux grilles, l'akrite de la citerne, les racines à l'air, le trait gravé, la relève sous l'eau, les remparts noyés, puis le lac recouvre le kastron. Style : commandement : soldats invoqués qui tiennent le rempart, garde et soins pour tout le camp, bonus quand un soldat tient déjà son poste ; le prix coûte des cartes ou renforce la garde ennemie.

```json
[
{"id": "CIT019-plus-1", "zone": "CIT019", "pole": "+", "palier": 1, "nom": "L'eau aux grilles", "cout": 1, "cible": 0, "effet": "Un soldat aux pieds mouillés prend son poste : 8 PV, frappe 2. Vos alliés gagnent 4 de garde.", "ops": [["invoque", "Soldat aux pieds mouillés", 8, 2], ["garde", "allies", 4]], "tags": ["Citadelle", "Sève", "Pôle +", "Invocation", "Garde"], "ambiance": "L'eau noire de la citerne affleure aux grilles de la cour, et le soldat de faction garde les pieds dedans.", "budget": "10,2 (cible 10 ; vérifié)"},
{"id": "CIT019-plus-2", "zone": "CIT019", "pole": "+", "palier": 2, "nom": "L'akrite de la citerne", "cout": 1, "cible": 0, "effet": "Un akrite remonte de la citerne : 12 PV, frappe 3. Vos alliés gagnent 6 de garde. Défaussez 1 carte au hasard.", "ops": [["invoque", "Akrite de la citerne", 12, 3], ["garde", "allies", 6], ["prixDefausse", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Invocation", "Garde", "Prix"], "ambiance": "Il remonte de la citerne de Phoinikoussa trempé jusqu'au casque, et reprend son poste sans s'essuyer.", "budget": "12,3 (cible 12,5 ; vérifié)"},
{"id": "CIT019-plus-3", "zone": "CIT019", "pole": "+", "palier": 3, "nom": "Les racines à l'air", "cout": 1, "cible": 1, "effet": "Si un allié invoqué est en jeu : vos alliés se soignent de 6. Vos alliés gagnent 10 de garde ; 6 dégâts à la cible. Chaque ennemi gagne 1 de garde.", "ops": [["si", "bete", [["soin", "allies", 6]]], ["garde", "allies", 10], ["deg", "cible", 6], ["ennemiGarde", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Soin", "Garde", "Dégâts", "Prix"], "ambiance": "L'eau a déchaussé les palmiers de l'oasis ; leurs racines pendent à l'air, mouillées, et boivent encore.", "budget": "15 (cible 15 ; vérifié)"},
{"id": "CIT019-plus-4", "zone": "CIT019", "pole": "+", "palier": 4, "nom": "Le trait gravé", "cout": 2, "cible": 0, "effet": "Si un allié invoqué était déjà en jeu : tous les ennemis hésitent. Un archer du kastron monte au créneau : 14 PV, frappe 5. Vos alliés gagnent 12 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["hesite", "tous"]]], ["invoque", "Archer du kastron", 14, 5], ["garde", "allies", 12], ["prixDefausse", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Contrôle", "Invocation", "Garde", "Prix"], "ambiance": "Kosmas a fait graver un trait sur la colonne la plus proche ; au matin, l'eau le recouvrait d'une main.", "budget": "26,1 (cible 28 ; vérifié)"},
{"id": "CIT019-plus-5", "zone": "CIT019", "pole": "+", "palier": 5, "nom": "La relève sous l'eau", "cout": 2, "cible": 0, "effet": "Si un allié invoqué est en jeu : 6 dégâts à tous. Vos alliés gagnent 16 de garde et se soignent de 8 ; piochez 1 carte.", "ops": [["si", "bete", [["deg", "tous", 6]]], ["garde", "allies", 16], ["soin", "allies", 8], ["pioche", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Dégâts", "Garde", "Soin", "Pioche"], "ambiance": "À Phoinikoussa, on relève la garde de la citerne à la nage ; les sentinelles relevées ne remontent pas toutes.", "budget": "31,4 (cible 32 ; vérifié)"},
{"id": "CIT019-plus-6", "zone": "CIT019", "pole": "+", "palier": 6, "nom": "Les remparts noyés", "cout": 2, "cible": 0, "effet": "Si un allié invoqué était déjà en jeu : tous perdent 1 d'attaque. Une garnison noyée tient le rempart : 24 PV, frappe 5. Vos alliés gagnent 14 de garde et se soignent de 6. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["affaiblit", "tous", 1]]], ["invoque", "Garnison noyée", 24, 5], ["garde", "allies", 14], ["soin", "allies", 6], ["prixDefausse", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Affaiblissement", "Invocation", "Garde", "Soin", "Prix"], "ambiance": "Sous l'eau claire, les soldats de Phoinikoussa sont à leur poste sur le rempart, la lance droite, les yeux ouverts.", "budget": "37,45 (cible 36 ; vérifié)"},
{"id": "CIT019-plus7", "zone": "CIT019", "pole": "+", "palier": 7, "nom": "Le Lac sur le kastron", "cout": 3, "cible": 0, "effet": "Sous le lac : rempart noyé (36 PV, frappe 3), sentinelle noyée (16 PV, frappe 4), alliés +14 de garde, tous hésitent. Ennemis +2 de garde ; défaussez 1. Pose Racine. Si Givre (consommé) : tous −2 d'attaque et 4 dégâts, alliés +12 de garde.", "ops": [["invoque", "Rempart noyé", 36, 3], ["invoque", "Sentinelle noyée", 16, 4], ["garde", "allies", 14], ["hesite", "tous"], ["ennemiGarde", 2], ["prixDefausse", 1], ["pose", "Racine"], ["reveil", "Givre", true, [["affaiblit", "tous", 2], ["garde", "allies", 12], ["deg", "tous", 4]]]], "tags": ["Citadelle", "Sève", "Forme ultime +7", "Invocation", "Garde", "Contrôle", "Prix", "Pose Racine", "Réveil Givre"], "ambiance": "Un lac immobile recouvre le kastron de Phoinikoussa ; au fond, les palmiers tiennent leurs palmes droites, comme à l'air.", "budget": "50,7 (+33,4 si Givre, soit +66 % ; vérifié)"}
]
```

---

## Ressources

### Les Hautes-Herbes de Brannvik (RES137 · Savane, Feu, nordique)

```json
{
 "fiche": "RES137",
 "nom": "Les Hautes-Herbes de Brannvik",
 "recit": "Après chaque orage sur la savane de Brannvik, Sigrun Hallvardsdottir suit les étoiles noires que la foudre laisse dans l'herbe et déterre au couteau les fulgurites, tubes de sable fondu que les forgerons pilent pour leurs creusets. Hier, elle en a sorti une ramifiée comme une racine, plus longue qu'elle.",
 "pal": [
  "Herbes hautes et blondes, acacias isolés, étoiles noires où la foudre a frappé ; une femme à genoux creuse au couteau autour d'un tube de verre.",
  "Les étoiles de foudre se touchent dans l'herbe ; les fulgurites affleurent seules, ramifiées, et le sable crépite encore sous la paume."
 ]
}
```

### Le Récif de Bai Yuntai (RES295 · Récif, Eau, chinoise impériale)

```json
{"fiche":"RES295","nom":"Le Récif de Bai Yuntai",
 "recit":"Une nuit par an, après la lune de printemps, les coraux de Bai Yuntai pondent ensemble. Les pêcheuses recueillent les grappes d'œufs dans des filets de soie, pour les apothicaires de la cour. Sur le pont, les grappes battent doucement contre la soie, comme un pouls.",
 "pal":["Récif de coraux bruns sous une eau claire, barques à voile de natte, filets de soie roulés sur les ponts en attendant la lune.",
        "L'eau est trouble de grappes rondes qui montent vers la surface ; les filets de soie ploient, et les coraux pondent encore à l'aube."]}
```

### Les Corniches de Hut-Benu (RES335 · Falaise côtière, Vent, égyptienne)

```json
{"fiche":"RES335","nom":"Les Corniches de Hut-Benu",
 "recit":"Sur les corniches de Hut-Benu, les blanchisseuses du temple tendent le lin mouillé d'eau de mer sur des cadres tournés vers le large, et le vent le bat. Il en sort d'un blanc qui fait mal aux yeux ; les bandelettes des prêtres n'en jaunissent jamais, même au tombeau.",
 "pal":["Falaise blanche au-dessus de la mer, cadres de bois tendus de lin gris, vent salé qui siffle entre les montants ; deux blanchisseuses aux mains gercées.",
        "Les cadres couvrent la corniche jusqu'au bord, le lin claque à chaque rafale, d'un blanc si dur que les mouettes s'en détournent."]}
```

### Le Lac gelé de Phnom Sroeng (RES097 · Toundra, Glace, khmère)

```json
{"fiche":"RES097","nom":"Le Lac gelé de Phnom Sroeng",
 "recit":"Les moines de Phnom Sroeng descendent des bols de bronze par les trous du lac gelé et les remontent pleins. L'eau y gèle en coquilles fines comme la corne, qu'on garnit de mèches pour les lampes du sanctuaire. La flamme y brûle sans jamais fondre la coquille.",
 "pal":["Lac gelé sous un ciel bas, toundra rase alentour, moines en robes safran sous des peaux, cordes et bols de bronze au bord des trous.",
        "Les bols remontent en file, couverts de coquilles de glace ; dans chaque niche du sanctuaire, une lampe brûle au creux de la glace."]}
```

### Le Vicus de Ventidia (RES231 · Steppe, Vent, romaine)

```json
{"fiche":"RES231","nom":"Le Vicus de Ventidia",
 "recit":"À Ventidia, en fin d'été, le vent pousse vers le fossé des boules d'herbes sèches par milliers. Les colons les arrêtent à la fourche et les entassent contre la palissade pour l'hiver, faute de bois. Au foyer, elles flambent d'un coup, avec un bruit d'averse.",
 "pal":["Fossé et palissade d'un vicus romain dans la steppe, colons aux fourches, boules d'herbes sèches qui roulent par bonds vers le fossé.",
        "Les boules d'herbes s'entassent plus haut que la palissade ; le vent les pousse en troupeaux serrés, et elles se rangent seules le long du fossé."]}
```

### La Sylve de Pyrgothéa (RES077 · Jungle, Sève, grecque)

```json
{"fiche":"RES077","nom":"La Sylve de Pyrgothéa",
 "recit":"Dans la sylve de Pyrgothéa, les cueilleurs battent les cimes à la perche ; les fruits tombent sur des draps de lin tendus entre les troncs. Le vieux Philon règle le battage à la voix : les perches frappent ensemble, et la jungle se tait le temps d'un coup.",
 "pal":["Jungle haute et moite, draps de lin tendus entre les troncs, perches de bambou, fruits violets éclatés sur la toile, cris d'oiseaux.",
        "Les draps débordent de fruits mûrs qui tombent au moindre souffle ; les branches ploient jusqu'aux cueilleurs, et l'air colle aux doigts."]}
```

### Les Bras d'Abercoll (RES232 · Delta fluvial, Eau, celte)

```json
{
 "fiche": "RES232",
 "nom": "Les Bras d'Abercoll",
 "recit": "Aux bras d'Abercoll, Bran mab Ewyn pose ses nasses d'osier à marée descendante et les relève à l'aube, pleines d'anguilles argentées qu'il fume dans sa hutte de roseaux. Les nasses relevées hier contenaient des anguilles nouées deux à deux, vivantes, et qu'aucun doigt n'a pu défaire.",
 "pal": [
  "Bras d'eau brune entre des îlots de roseaux, nasses d'osier en file sur la vase, fumée d'une hutte où sèchent des anguilles.",
  "Les nasses débordent avant même la marée ; les bras luisent d'anguilles serrées, et les roseaux frémissent à leur passage."
 ]
}
```

### Les Mouillères de Grisemoutier (RES263 · Marais, Sève, gothique)

```json
{"fiche":"RES263","nom":"Les Mouillères de Grisemoutier",
 "recit":"Les sœurs de l'hospice de Grisemoutier entrent dans les mouillères jambes nues, à l'aube, et en ressortent les mollets couverts de sangsues, qu'elles détachent une à une pour l'infirmerie. Elles prient en avançant, très bas, pour ne pas réveiller l'eau.",
 "pal":["Marais noir sous les saules, clocher pointu d'un hospice gothique, sœurs en coiffes blanches qui avancent dans l'eau, bocaux de verre sur la berge.",
        "L'eau grouille de sangsues lisses ; les bocaux se remplissent en un instant, et les sœurs sortent du marais les jambes marbrées de bleu."]}
```

### Le Puits de Nkanyezi (RES230 · Oasis, Sève, zouloue)

```json
{
 "fiche": "RES230",
 "nom": "Le Puits de Nkanyezi",
 "recit": "Autour du puits de Nkanyezi, Sipho suit l'oiseau indicateur qui l'appelle d'arbre en arbre jusqu'aux ruches sauvages, enfume les abeilles et laisse au guide sa part de cire. Il rapporte une calebasse de miel par semaine. L'oiseau l'attend désormais au puits, chaque matin, et l'appelle par son nom.",
 "pal": [
  "Puits cerclé de pierres sous les palmiers ilala, acacias aux ruches sauvages, un homme qui suit un petit oiseau gris d'arbre en arbre.",
  "Les ruches débordent dans chaque tronc creux ; le miel coule le long des écorces jusqu'au puits, et les oiseaux indicateurs appellent de partout."
 ]
}
```

### La Mangrove d'Atlacuixco (RES375 · Mangrove, Eau, aztèque)

```json
{
 "fiche": "RES375",
 "nom": "La Mangrove d'Atlacuixco",
 "recit": "Dans les lagunes de la mangrove d'Atlacuixco, les écumeurs passent à la surface des filets fins et en retirent une mousse bleu-vert qu'ils sèchent en galettes. Le vieux Tototl en étale vingt par jour sur la vase chaude. Derrière sa barque, l'écume se reforme déjà, plus épaisse.",
 "pal": [
  "Lagunes vertes entre les palétuviers, barques plates, écumeurs aux filets fins, galettes bleu-vert qui sèchent sur des nattes.",
  "L'eau porte une écume bleu-vert épaisse comme un feutre ; les filets s'alourdissent dès qu'on les plonge, et les nattes débordent."
 ]
}
```

### La Palmeraie de Per-Bener (RES062 · Oasis, Sève, égyptienne)

```json
{"fiche":"RES062","nom":"La Palmeraie de Per-Bener",
 "recit":"À la palmeraie de Per-Bener, Neferhotep grimpe aux dattiers femelles ceint d'une sangle de fibre et secoue dans chaque couronne un brin de fleurs mâles. D'en bas, on ne voit de lui qu'un nuage pâle qui passe d'une couronne à l'autre.",
 "pal":["Palmeraie sur sable et limon, canaux d'irrigation, grimpeurs ceints de sangles dans les couronnes, grappes de fleurs blanches.",
        "Les régimes de dattes pendent, lourds, jusqu'au sol ; un voile de pollen flotte entre les couronnes, et les canaux en sont poudrés."]}
```
