# Lot 7 : conteur D (le Lovecraftien)

Douze zones à cartes (fiche et 14 cartes) et treize Ressources (fiche légère). Format : `CONSIGNES.md`, avec toutes les leçons des lots 1 à 6. Budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 % ; forme du palier 7 entre 45 et 55 points sans tolérance, réveil de 60 à 100 % en plus. Prix sur 4 cartes au moins par pôle.

Table de budget commune : « alliés » ×1,5 sur la garde et le soin ; « tous » ×2,2 ; un effet sous `si` compte pour 50 % ; `exil` = prix de 3 ; `volVie` = moitié des dégâts de la carte, `si` compris ; `ignoreGarde` = 3 ; `ennemiSoin` n = 2n ; `ennemiGarde` n = 2n ; `prixBete` n = n. Chaque budget est calculé au script et rappelé dans le champ `budget`.

Formes de récit, une par zone : le rite interrompu (ANT088), la mise en garde à celui qui part (ANT153), la coutume expliquée à un étranger (ANT233), la garde de nuit racontée par le garçon (ANT006), la cérémonie vue par un enfant (ANT064), l'épitaphe (ASS137, document), le témoignage d'un vieux serf (ASS011), la bataille vue du rang (ASS133), le firman (ASS106, document), la leçon du maître à l'élève (ASS019), l'ex-voto (DON109, document), le souvenir d'enfance (CIT011).

## Carte des familles

La carte complète (appoint, crochet, prix, prénoms, nombres, institutions, formes, Ressources) est dans `lot-7/familles_D.md`, écrite avant les cartes (10 h 16) et mise à jour à la remise après relecture de familles_A (10 h 22), familles_B (10 h 33), familles_C (10 h 26), conteur_B.md et conteur_C.md. Résumé compté au script sur les cartes (familles sur 3 cartes ou plus, dégâts ciblés à part) :

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT088 Le Templum de Vacuna | Vide : bêtes 4 ; exil 4 ; dégâts à tous 3 ; dégâts ciblés 4 ; crochet `seul` 4 ; prix sur 7 cartes (PV, exil) | Étoiles : vol de vie 7 ; bêtes 3 ; garde du héros 3 ; dégâts ciblés 4 ; crochet `vol` 2 ; prix sur 6 cartes (soin ennemi) |
| ANT153 Kamenogrib, le Bois des Têtes grises | Pierre : bêtes 4 ; dégâts ciblés 4 ; crochet `pietine` 4 ; prix sur 6 cartes (garde ennemie) | Cristal : soin des alliés 7 ; bêtes 4 ; garde des alliés 4 ; dégâts ciblés 4 ; crochet `bete` 2 ; prix sur 7 cartes (PV) |
| ANT233 Ükhelt-Uul, le Cône des Licous | Mort : bêtes 4 ; hésitation 4 ; dégâts ciblés 4 ; crochet `bete` 4 ; prix sur 7 cartes (bête) | Vie : bêtes 4 ; soin du héros 4 ; garde du héros 4 ; dégâts ciblés 4 ; crochet `elan` 4 ; prix sur 7 cartes (soin ennemi) |
| ANT006 eButhongweni, la Lande des Bergers couchés | Sommeil : pioche 4 ; bêtes 3 ; dégâts ciblés 4 ; crochet `defausseAPrix` 4 ; prix sur 7 cartes (défausse) | Éveil : soin des alliés 6 ; bêtes 4 ; garde des alliés 3 ; mana 3 ; dégâts ciblés 4 ; crochet `pietine` 2 ; prix sur 7 cartes (PV) |
| ANT064 KwaManga, la Crique des Seiches | Mensonge : soin du héros 7 ; hésitation 4 ; bêtes 3 ; garde des alliés 3 ; dégâts ciblés 4 ; crochet `hesiteAvant` 2 ; prix sur 6 cartes (défausse) | Vérité : hésitation 7 ; bêtes 4 ; perce-garde 3 ; dégâts ciblés 4 ; crochet `seul` 2 ; prix sur 7 cartes (garde ennemie) |
| ASS137 Mer-Kheper, la Salle des Cèdres rouges | Sang : brûlure 4 ; riposte 4 ; pioche 4 ; mana 3 ; soin du héros 3 ; dégâts ciblés 4 ; crochet `cartesJouees` 5, `troisCartes` 1 ; prix sur 7 cartes (PV) | Sève : perce-garde 7 ; pioche 4 ; soin du héros 4 ; dégâts ciblés 4 ; crochet `cibleGarde` 3 ; prix sur 7 cartes (défausse) |
| ASS011 La Diète de Kettenfjord | Tyrannie : pioche 7 ; riposte 4 ; exil 3 ; dégâts ciblés 4 ; crochet `defausseAPrix` 2 ; prix sur 7 cartes (défausse, exil) | Liberté : récupération 3 ; perce-garde 3 ; dégâts ciblés 4 ; crochet `cibleGarde` 4 ; prix sur 7 cartes (garde ennemie) |
| ASS133 L'Ibandla de Kwesine | Chaos : dégâts à tous 3 ; hasard 3 ; dégâts ciblés 4 ; crochet `blesse` 4 ; prix sur 7 cartes (PV) | Ordre : garde du héros 4 ; riposte 4 ; marque 3 ; dégâts ciblés 4 ; crochet `garde` 4 ; prix sur 7 cartes (défausse) |
| ASS106 Le Jharokha de Zamharir | Tempête : affaiblissement 4 ; hasard 4 ; mana 3 ; dégâts à tous 3 ; dégâts ciblés 4 ; crochet `vol` 4 ; prix sur 7 cartes (PV) | Calme : garde des alliés 7 ; récupération 4 ; dégâts ciblés 4 ; crochet `defausseAPrix` 2 ; prix sur 7 cartes (défausse) |
| ASS019 Le Yoriai de Kurayabu | Ombre : hasard 7 ; exil 3 ; marque 3 ; dégâts ciblés 3 ; crochet `hesiteAvant` 2 ; prix sur 7 cartes (PV, exil) | Lumière : garde du héros 7 ; affaiblissement 4 ; dégâts ciblés 4 ; crochet `seul` 2 ; prix sur 7 cartes (soin ennemi) |
| DON109 Hesperonèsos, la Tour des Brûlots | Nuit : brûlure 7 ; perce-garde 3 ; dégâts ciblés 4 ; crochet `elan` 2 ; prix sur 7 cartes (PV) | Aurore : soin du héros 7 ; marque 4 ; dégâts ciblés 4 ; crochet `blesse` 3 ; prix sur 6 cartes (défausse) |
| CIT011 Cocoliztlan, la Citadelle des Fièvres | Peste : affaiblissement 4 ; brûlure 4 ; dégâts ciblés 4 ; crochet `brule` 4 ; prix sur 7 cartes (PV) | Guérison : soin des alliés 4 ; hésitation 4 ; dégâts ciblés 4 ; crochet `hesite` 4 ; prix sur 7 cartes (soin ennemi) |

**Comptes de D (familles principales, script)** : soin des alliés 2 (Cristal, Éveil), soin du héros 2 (Mensonge, Aurore), perce-garde 1 (Sève), garde des alliés 1 (Calme), garde du héros 1 (Lumière), brûlure 1 (Nuit), pioche 1 (Tyrannie) ; places rares : vol de vie 1 (Étoiles), hésitation 1 (Vérité), enchaînement 1 (Sang), coups au hasard 1 (Ombre). Ni affaiblissement, ni riposte, ni mana, ni marque, ni exil en principal : ces familles étaient pleines (6) ou presque avant D.
**Totaux du lot avec D** (A + B + C relus à la remise, plus D) : soin des alliés 6, soin du héros 6, perce-garde 6, garde des alliés 6, garde du héros 6, brûlure 6, affaiblissement 6, riposte 6, mana 6, marque 6, exil 5, pioche 2 ; hésitation 2, vol de vie 2, hasard 1, enchaînement 1, écho 0. Aucun plafond dépassé (2 pour les places rares, 6 pour les autres).
**Onze pôles sans famille principale, chacun avec sa colonne vertébrale** (crochet sur 4 cartes, jamais 5) : un prix payé et le crochet qui en profite (Pierre : garde ennemie et `pietine` ; Mort : `prixBete` et `bete` ; Sommeil : `prixDefausse` et `defausseAPrix` ; Liberté : garde ennemie et `cibleGarde` ; Chaos : PV et `blesse`), un crochet nourri par le pôle (Ordre : garde du héros et `garde` ; Peste : brûlure et `brule` ; Guérison : hésitation et `hesite`), un crochet d'intention ennemie (Vide `seul`, Vie `elan`, Tempête `vol`). La raison : D est le dernier inscrit, et les familles encore libres sont presque toutes déjà principales sur ses mots dans les lots 1 à 6 (relevé au script, détail dans `familles_D.md`).
**Appoints (3 ou 4 cartes)** : chaque famille dans 3 pôles de D au plus, pioche comprise (compte du script ci-dessous). Seule exception, imposée par CONSIGNES et assumée aussi par A et C : les 3 ou 4 invocations obligées de chaque pôle d'Antre.

## Couples de pôles déjà en jeu : cartes relues avant d'écrire

Couples partagés avec A, B ou C (inscrits avant D) : D prend une autre famille principale sur les deux pôles. Relevé au script sur les lots 1 à 6 pour les mêmes mots.

- Mort/Vie (A ANT107 : vol de vie / soin du héros) → D : prix en bêtes et `bete` / crochet `elan`.
- Pierre/Cristal (A ANT224 : mana / riposte) → D : garde ennemie et `pietine` / soin des alliés.
- Sommeil/Éveil (A ANT235 : `prixBete` et `bete` / perce-garde) → D : défausse et `defausseAPrix` / soin des alliés.
- Tyrannie/Liberté (A ASS077 : garde du héros / brûlure) → D : pioche / garde ennemie et `cibleGarde`.
- Ombre/Lumière (A ASS163 : soin des alliés / marque) → D : coups au hasard / garde du héros.
- Peste/Guérison (B ANT049 : PV et `blesse` / marque) → D : crochet `brule` / crochet `hesite`.
- Nuit/Aurore (B ASS089 : soin des alliés / mana) → D : brûlure / soin du héros.
- Chaos/Ordre (B DON053 : hésitation / défausse et `defausseAPrix`) → D : PV et `blesse` / crochet `garde`.
- Sang/Sève (B DON034 : brûlure / marque) → D : enchaînement / perce-garde.
- Mensonge/Vérité (C ANT103 : invocations / affaiblissement) → D : soin du héros / hésitation.
- Vide/Étoiles (C ANT083 : mana / marque) → D : crochet `seul` / vol de vie.
Aucun pôle de D ne reprend la famille principale d'un autre conteur sur le même mot, ni une famille déjà principale pour ce mot dans les lots 1 à 6.

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| ANT088 Le Templum de Vacuna | Abîme / Sceau | Braise / Abîme |
| ANT153 Kamenogrib, le Bois des Têtes grises | Sceau / Givre | Racine / Sceau |
| ANT233 Ükhelt-Uul, le Cône des Licous | Braise / Sang | Racine / Braise |
| ANT006 eButhongweni, la Lande des Bergers couchés | Givre / Racine | Sang / Givre |
| ANT064 KwaManga, la Crique des Seiches | Abîme / Givre | Givre / Abîme |
| ASS137 Mer-Kheper, la Salle des Cèdres rouges | Sang / Braise | Racine / Sang |
| ASS011 La Diète de Kettenfjord | Sceau / Racine | Braise / Sceau |
| ASS133 L'Ibandla de Kwesine | Abîme / Braise | Racine / Abîme |
| ASS106 Le Jharokha de Zamharir | Givre / Sceau | Abîme / Givre |
| ASS019 Le Yoriai de Kurayabu | Sang / Racine | Braise / Givre |
| DON109 Hesperonèsos, la Tour des Brûlots | Braise / Sceau | Sceau / Braise |
| CIT011 Cocoliztlan, la Citadelle des Fièvres | Sang / Racine | Racine / Sang |

Poses : Braise 5, Racine 5, Abîme 4, Sang 4, Sceau 3, Givre 3. Chaque forme ultime pose une résonance et en réveille une autre ; dans chaque zone, au moins un des deux pôles réveille ce que l'autre pose.

## ±7 : recettes tournantes

Chaque forme ultime ouvre par une phrase de 3 à 6 mots (« Le ciel se retire. », « Personne ne tousse plus. »), vaut entre 45 et 55 points sans tolérance, porte un prix (PV, défausse, bête, garde ou soin ennemi, exil) et un réveil de 60 à 100 % en plus, calculés au script.
Pas de recette commune : selon le pôle, la forme ultime généralise le crochet de la colonne vertébrale (Vide, Pierre, Chaos, Tempête), paie le prix du pôle au plus haut (Mort, Sommeil, Liberté) ou porte la famille principale à tous (Ombre, Nuit, Lumière).

## Ressources : geste, objet, image

détacher au ciseau les veines bleues de fluorine et les tourner en coupes (objet : fluorine ; image : la paroi zébrée de bleu, les tours à perche en rang) (RES051) · agiter une houppe de crin blanc devant les terriers pour faire sortir les marmottes curieuses (objet : marmottes ; image : des chasseurs à plat ventre devant chaque terrier) (RES197) · tresser chaque printemps un pont d'herbe neuf au-dessus du canyon et couper l'ancien (objet : cordes d'ichu ; image : le pont neuf qui se balance, l'ancien qui tombe dans la gorge) (RES071) · arracher à la houe les bulbes de jacinthe sauvage et les bouillir en colle (objet : colle de bulbes ; image : la lande retournée, les tas de bulbes blancs) (RES141) · prendre les murènes au crochet dans les trous du récif et les vendre vivantes pour les viviers (objet : murènes ; image : les viviers de pierre où tournent les murènes) (RES270) · glisser sur la vase, un genou sur une planche, et prendre à la main les périophtalmes qui sautent (objet : périophtalmes ; image : des glisseurs sur toute la vase, les poissons qui sautent devant eux) (RES024) · battre la racine à poison dans l'eau des chenaux et ramasser les poissons qui remontent, étourdis (objet : poissons étourdis ; image : l'eau blanchie, les poissons sur le flanc) (RES072) · ramasser au matin les galets que le gel a fendus, pour les frondes (objet : pierres de fronde ; image : les clairières semées de galets ouverts) (RES326) · tendre au vent des toiles de chanvre pour boire la nuée (objet : eau de nuée ; image : des toiles perlées qui gouttent dans des gouttières de bambou) (RES110) · regarder le fond par une lunette de bois à fond de verre et décrocher les turbans à la perche (objet : turbans cornus ; image : les barques immobiles, chaque pêcheur penché sur sa lunette) (RES253) · arracher le kombu à la gaffe depuis la barque et l'étendre sur les galets (objet : kombu ; image : les grèves noires de rubans qui sèchent) (RES378) · couper au printemps les crosses roulées des fougères arborescentes (objet : crosses de fougère ; image : les fougères géantes étêtées, les crosses en monticules) (RES266) · gratter à la raclette de bois la croûte d'alun aux lèvres des fumerolles (objet : alun ; image : les fumerolles bordées de croûtes pâles, les racleurs masqués) (RES201).

Vérifiés contre les Ressources des lots 1 à 6 et contre A, B et C du lot 7. Changés à la remise : les palissades de roseaux en spirale (RES024), trop proches des bordigues de pieux de C (RES124), deviennent les glisseurs de vase et les périophtalmes ; les plongeuses d'ormeaux (RES253), proches des plongeurs d'eau douce de B (RES221), deviennent la lunette d'eau et les turbans. Aucun produit tinctorial, aucun récipient comme objet, aucun geste de gaule.

## Notes pour le critique

1. **Onze pôles en colonne vertébrale.** C'est beaucoup ; D est le dernier inscrit et a vérifié au script que les familles libres étaient déjà principales sur ses mots. Chaque colonne tient sur 4 cartes exactement (pas de crochet à 5 chez D) et passe le validateur.
2. **Quatre places rares** (vol de vie, hésitation, enchaînement, hasard), une par famille : c'est ce qui restait. Hésitation et vol de vie sont désormais à 2 pôles dans le lot, au plafond.
3. **Antres** : les invocations obligées (3 ou 4 par pôle) ne sont pas comptées comme appoint choisi.
4. **Récits** : trois documents cités (épitaphe ASS137, firman ASS106, ex-voto DON109), une forme par zone, sans reprise des recettes de D au lot 6 ni des formes de A, B et C. Trois nombres précis seulement : quatre-vingts (ANT233), vingt-trois (ASS133), soixante-dix (DON109).
5. **Bêtes** : après relecture de C (coléoptères dans quatre pôles), le lucane d'Étoiles devient un pluvier doré.
6. **Budget** : la table commune avec `ennemiSoin` n = 2n (leçon du lot 6) ; chaque budget est recalculé au script et écrit dans le champ `budget`.

---

## Le Templum de Vacuna (ANT088 · Antre · Lande · Vent · romaine)

```json
{
 "fiche": "ANT088",
 "nom": "Le Templum de Vacuna",
 "recit": "L'augure Gaius Vettius monta sur la lande avec son bâton courbe pour tracer le templum du nouveau camp. Il découpa le ciel, s'assit et attendit les oiseaux. Ils vinrent de partout, sauf du nord, au-dessus du creux où la bruyère ne pousse pas. Il attendit la nuit. Les étoiles sortirent partout, sauf là. On bâtit le camp plus au sud. Depuis, la sentinelle du rempart nord monte sa garde face au camp, le dos au creux. Personne ne le lui a ordonné.",
 "pal": [
  "Le creux a mangé la lande : bruyère morte jusqu'à l'horizon, et au-dessus un ciel sans étoile ni nuage, où le vent ne fait plus de bruit.",
  "Le creux s'élargit ; des lièvres morts gisent autour, le museau tourné vers lui, et le nord du ciel reste noir quand les étoiles sortent.",
  "Lande venteuse sous un ciel bas : bruyère, pierres levées, un camp romain abandonné, et au nord un creux où rien ne pousse.",
  "Les étoiles descendent sur la lande ; les palissades du camp luisent de givre, et les engoulevents tournent en criant au-dessus des tentes vides.",
  "Le ciel touche la bruyère : on marche entre les étoiles, la lande est semée de lumières immobiles, et le camp n'a plus d'ombre."
 ],
 "pm": "Vide",
 "pp": "Étoiles"
}
```

### Pôle − Vide

Progression : le lièvre tourné vers le creux, le blaireau qui creuse, la bruyère morte, le quartier nord, la sentinelle retournée, le terrier vide, puis le creux ouvert. Style : le creux isole ; quand il ne reste qu'un ennemi, les cartes frappent fort (crochet `seul` sur 4 cartes), et les cartes de milieu s'exilent après un gros effet. Prix : PV et exil.

```json
[
{"id": "ANT088-moins-1", "zone": "ANT088", "pole": "-", "palier": 1, "nom": "Le lièvre tourné", "cout": 1, "cible": 1, "effet": "Lièvre du creux se joint à vous : 10 PV, frappe 2. S'il ne reste qu'un ennemi : la cible subit 5 dégâts. Le héros perd 1 PV.", "ops": [["invoque", "Lièvre du creux", 10, 2], ["si", "seul", [["deg", "cible", 5]]], ["prixPV", 1]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Condition", "Dégâts", "Prix"], "ambiance": "Les lièvres de la lande meurent assis, le museau tourné vers le creux, les oreilles couchées.", "budget": "9,5 (cible 10, écart -5 % ; vérifié au script)"},
{"id": "ANT088-moins-2", "zone": "ANT088", "pole": "-", "palier": 2, "nom": "Le blaireau qui creuse", "cout": 1, "cible": 1, "effet": "Blaireau sans terrier se joint à vous : 12 PV, frappe 3. La cible perd 1 d'attaque. Le héros perd 1 PV.", "ops": [["invoque", "Blaireau sans terrier", 12, 3], ["affaiblit", "cible", 1], ["prixPV", 1]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Le blaireau de Vacuna creuse vers le creux toute la nuit, et au matin son terrier est vide.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "ANT088-moins-3", "zone": "ANT088", "pole": "-", "palier": 3, "nom": "La bruyère morte", "cout": 1, "cible": 1, "effet": "Tous les ennemis subissent 4 dégâts. S'il ne reste qu'un ennemi : la cible subit 10 dégâts. Piochez 1 carte. Exil.", "ops": [["deg", "tous", 4], ["si", "seul", [["deg", "cible", 10]]], ["pioche", 1], ["exil"]], "tags": ["Antre", "Vent", "Pôle −", "Dégâts", "Condition", "Pioche", "Exil"], "ambiance": "Autour du creux, la bruyère ne pourrit pas : elle sèche debout et garde sa couleur d'automne.", "budget": "14,8 (cible 15, écart -1 % ; vérifié au script)"},
{"id": "ANT088-moins-4", "zone": "ANT088", "pole": "-", "palier": 4, "nom": "Le quartier nord", "cout": 2, "cible": 1, "effet": "S'il ne reste qu'un ennemi : la cible subit 14 dégâts. Chose du quartier nord se joint à vous : 20 PV, frappe 5. Tous les ennemis subissent 3 dégâts. Le héros perd 2 PV.", "ops": [["si", "seul", [["deg", "cible", 14]]], ["invoque", "Chose du quartier nord", 20, 5], ["deg", "tous", 3], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Gaius Vettius avait tracé le quartier nord du ciel ; aucun oiseau n'y est jamais entré.", "budget": "29,1 (cible 28, écart +4 % ; vérifié au script)"},
{"id": "ANT088-moins-5", "zone": "ANT088", "pole": "-", "palier": 5, "nom": "La sentinelle retournée", "cout": 2, "cible": 1, "effet": "Le héros gagne 16 de garde. Piochez 2 cartes. Reprenez en main la dernière carte de la défausse. La cible brûle : 3 dégâts au début de ses 3 prochains tours. Exil. Le héros perd 2 PV.", "ops": [["garde", "heros", 16], ["pioche", 2], ["recup"], ["brulure", "cible", 3, 3], ["exil"], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle −", "Garde", "Pioche", "Récupération", "Dégâts dans le temps", "Exil", "Prix"], "ambiance": "La sentinelle du rempart nord se tient dos au creux, face au camp, la lance basse.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ANT088-moins-6", "zone": "ANT088", "pole": "-", "palier": 6, "nom": "Le terrier vide", "cout": 2, "cible": 1, "effet": "Blaireaux du creux se joint à vous : 24 PV, frappe 6. La cible brûle : 3 dégâts au début de ses 3 prochains tours. Le héros se soigne de 6. Exil. Le héros perd 2 PV.", "ops": [["invoque", "Blaireaux du creux", 24, 6], ["brulure", "cible", 3, 3], ["soin", "heros", 6], ["exil"], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Dégâts dans le temps", "Soin", "Exil", "Prix"], "ambiance": "Les blaireaux sont revenus au creux, plus gros, et ils ne laissent plus aucune trace dans la terre.", "budget": "31 (cible 36, écart -14 % ; vérifié au script)"},
{"id": "ANT088-moins-7", "zone": "ANT088", "pole": "-", "palier": 7, "nom": "Le Creux ouvert", "cout": 3, "cible": 1, "effet": "Le ciel se retire. Tous les ennemis subissent 7 dégâts et perdent 2 d'attaque. S'il ne reste qu'un ennemi : la cible subit 20 dégâts. Héros +18 de garde, −4 PV. Exil. Pose Abîme. Si Sceau (consommé) : la cible subit 16 dégâts et perd 4 d'attaque.", "ops": [["deg", "tous", 7], ["affaiblit", "tous", 2], ["si", "seul", [["deg", "cible", 20]]], ["garde", "heros", 18], ["prixPV", 4], ["exil"], ["pose", "Abîme"], ["reveil", "Sceau", true, [["deg", "cible", 16], ["affaiblit", "cible", 4]]]], "tags": ["Antre", "Vent", "Forme ultime −7", "Dégâts", "Affaiblissement", "Condition", "Garde", "Prix", "Exil", "Pose Abîme", "Réveil Sceau"], "ambiance": "Au-dessus du creux, il n'y a plus de ciel du tout ; le vent y entre et ne ressort pas.", "budget": "46 (+28 si Sceau, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Étoiles

Progression : la première étoile, le vol des engoulevents, le pluvier du rempart, la voûte qui boit, la nuée, l'augure ébloui, puis le ciel posé sur la lande. Style : chaque carte frappe et le héros boit la moitié de ce qu'il frappe ; contre une cible qui vole, les engoulevents frappent de plus. Prix : la lumière soigne aussi l'ennemi (soin ennemi).

```json
[
{"id": "ANT088-plus-1", "zone": "ANT088", "pole": "+", "palier": 1, "nom": "La première étoile", "cout": 1, "cible": 1, "effet": "Vol de vie : le héros se soigne de la moitié des dégâts. La cible subit 5 dégâts. Engoulevent se joint à vous : 4 PV, frappe 2. Chaque ennemi se soigne de 1.", "ops": [["volVie"], ["deg", "cible", 5], ["invoque", "Engoulevent", 4, 2], ["ennemiSoin", 1]], "tags": ["Antre", "Vent", "Pôle +", "Vol de vie", "Dégâts", "Invocation", "Prix"], "ambiance": "La première étoile de Vacuna sort au-dessus du camp, jamais au-dessus du creux ; les engoulevents la saluent.", "budget": "10,5 (cible 10, écart +5 % ; vérifié au script)"},
{"id": "ANT088-plus-2", "zone": "ANT088", "pole": "+", "palier": 2, "nom": "Le vol des engoulevents", "cout": 1, "cible": 1, "effet": "Vol de vie : le héros se soigne de la moitié des dégâts. Si la cible vole : la cible subit 6 dégâts. La cible subit 5 dégâts. Le héros gagne 4 de garde. Chaque ennemi se soigne de 1.", "ops": [["volVie"], ["si", "vol", [["deg", "cible", 6]]], ["deg", "cible", 5], ["garde", "heros", 4], ["ennemiSoin", 1]], "tags": ["Antre", "Vent", "Pôle +", "Vol de vie", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Les engoulevents chassent au ras de la bruyère, la gueule ouverte, et avalent tout ce qui vole plus bas qu'eux.", "budget": "13,2 (cible 12,5, écart +6 % ; vérifié au script)"},
{"id": "ANT088-plus-3", "zone": "ANT088", "pole": "+", "palier": 3, "nom": "Le pluvier du rempart", "cout": 1, "cible": 0, "effet": "Pluvier du rempart se joint à vous : 10 PV, frappe 3. Vol de vie : le héros se soigne de la moitié des dégâts. 2 coups de 2 dégâts au hasard.", "ops": [["invoque", "Pluvier du rempart", 10, 3], ["volVie"], ["deg", "hasard", 2, 2]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Vol de vie", "Dégâts"], "ambiance": "Le pluvier doré court sur le rempart chaque soir en criant vers les étoiles, et se tait avant l'aube.", "budget": "15,5 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "ANT088-plus-4", "zone": "ANT088", "pole": "+", "palier": 4, "nom": "La voûte qui boit", "cout": 2, "cible": 1, "effet": "Vol de vie : le héros se soigne de la moitié des dégâts. La cible subit 14 dégâts. Le héros gagne 8 de garde. Si la cible vole : la cible hésite. Chaque ennemi se soigne de 1.", "ops": [["volVie"], ["deg", "cible", 14], ["garde", "heros", 8], ["si", "vol", [["hesite", "cible"]]], ["ennemiSoin", 1]], "tags": ["Antre", "Vent", "Pôle +", "Vol de vie", "Dégâts", "Garde", "Condition", "Contrôle", "Prix"], "ambiance": "Sous la voûte de Vacuna, les veilleurs pâlissent d'une nuit à l'autre, et les étoiles grossissent.", "budget": "27,9 (cible 28, écart -0 % ; vérifié au script)"},
{"id": "ANT088-plus-5", "zone": "ANT088", "pole": "+", "palier": 5, "nom": "La nuée d'engoulevents", "cout": 2, "cible": 1, "effet": "Nuée d'engoulevents se joint à vous : 16 PV, frappe 5. Vol de vie : le héros se soigne de la moitié des dégâts. Tous les ennemis subissent 4 dégâts. La cible perd 1 d'attaque. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Nuée d'engoulevents", 16, 5], ["volVie"], ["deg", "tous", 4], ["affaiblit", "cible", 1], ["ennemiSoin", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Vol de vie", "Dégâts", "Affaiblissement", "Prix"], "ambiance": "Quand les engoulevents se lèvent ensemble, la lande entière ronronne, et les chevaux du camp refusent d'avancer.", "budget": "29,7 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "ANT088-plus-6", "zone": "ANT088", "pole": "+", "palier": 6, "nom": "L'augure ébloui", "cout": 2, "cible": 1, "effet": "Vol de vie : le héros se soigne de la moitié des dégâts. 3 coups de 4 dégâts au hasard. Le héros se soigne de 10. La cible perd 2 d'attaque. Chaque ennemi se soigne de 1.", "ops": [["volVie"], ["deg", "hasard", 4, 3], ["soin", "heros", 10], ["affaiblit", "cible", 2], ["ennemiSoin", 1]], "tags": ["Antre", "Vent", "Pôle +", "Vol de vie", "Dégâts", "Soin", "Affaiblissement", "Prix"], "ambiance": "Gaius Vettius a regardé le ciel du sud jusqu'à l'aube ; ses yeux sont restés clairs comme de l'eau.", "budget": "32 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ANT088-plus-7", "zone": "ANT088", "pole": "+", "palier": 7, "nom": "Le Ciel sur la lande", "cout": 3, "cible": 1, "effet": "La lande boit le ciel. Vol de vie : tous les ennemis subissent 6 dégâts, la cible 15. Héros +10 de garde. Chaque ennemi se soigne de 2. Pose Braise. Si Abîme (consommé) : le héros se soigne de 14 et gagne 12 de garde ; la cible hésite.", "ops": [["volVie"], ["deg", "tous", 6], ["deg", "cible", 15], ["garde", "heros", 10], ["ennemiSoin", 2], ["pose", "Braise"], ["reveil", "Abîme", true, [["soin", "heros", 14], ["garde", "heros", 12], ["hesite", "cible"]]]], "tags": ["Antre", "Vent", "Forme ultime +7", "Vol de vie", "Dégâts", "Garde", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "Les étoiles posées sur la bruyère ne chauffent pas ; elles boivent, et la lande devient plus froide.", "budget": "46,3 (+28,6 si Abîme, soit +62 % ; vérifié au script)"}
]
```

---

## Kamenogrib, le Bois des Têtes grises (ANT153 · Antre · Forêt de champignons géants · Sève · slave)

*Note du critique (lot 7) : Pierre (−) réécrite : c'était le plus faible des onze pôles sans famille principale (crochet `pietine` lu sur l'intention ennemie, garde ennemie payée sans profit, mosaïque d'appoints). Le pôle passe à l'exil, famille principale sur 6 cartes : ce qui s'assied dans le bois se pétrifie et quitte le combat. Le loir (rongeurs au plafond) devient un cloporte ; côté Cristal, la martre et l'ours deviennent un faon et un élan (mustélidés et ours au plafond).*

```json
{
 "fiche": "ANT153",
 "nom": "Kamenogrib, le Bois des Têtes grises",
 "recit": "Avant que Mstislav entre au bois de Kamenogrib pour couper les pieds de champignon, la vieille Zlata lui a dit : ne t'assieds pas. Les chapeaux gris, là-bas, sont tombés en pierre un à un, avec ce qui dormait dessous. Si tu as soif, bois en marchant. Si tu vois des bêtes couchées sur le cristal, ne les réveille pas : elles guérissent, et elles ne t'aiment pas. Mstislav est revenu au printemps. Il ne s'assied plus. Il dort debout, appuyé à la porte.",
 "pal": [
  "Le bois est pierre jusqu'aux chapeaux : lamelles de granit, cloportes figés dans leurs trous, et un silence où l'on entend battre son propre sang.",
  "Les pieds de champignon grisonnent et sonnent sous la hache ; les cloportes se raidissent sur les souches, et la mousse craque comme du gravier.",
  "Forêt de champignons géants sous un ciel bas : chapeaux bruns, lamelles humides, sentiers de bûcherons, et quelques pieds tachés de gris.",
  "Des aiguilles de cristal percent les lamelles ; des limaces de verre y glissent, et les bêtes blessées viennent dormir dessous.",
  "Le bois est une nef de cristal clair : la lumière tombe en colonnes, des bêtes guéries dorment partout, et plus rien ne pourrit."
 ],
 "pm": "Pierre",
 "pp": "Cristal"
}
```

### Pôle − Pierre

Progression : le loir pétrifié, le chapeau qui tombe, les cloportes raidis, la hache qui sonne, le bûcheron assis, la mousse en gravier, puis le bois arrêté. Style : chaque carte donne de la garde aux ennemis (la pierre les gagne), puis les plus gros coups ignorent cette garde ; contre une cible qui piétine ou charge, le bois tombe sur elle (crochet `pietine` sur 4 cartes). Prix : garde ennemie, sur 6 cartes.

```json
[
{"id": "ANT153-moins-1", "zone": "ANT153", "pole": "-", "palier": 1, "nom": "Le cloporte raidi", "cout": 1, "cible": 1, "effet": "Cloporte de granit se joint à vous : 10 PV, frappe 2. La cible perd 2 d'attaque. Exil.", "ops": [["invoque", "Cloporte de granit", 10, 2], ["affaiblit", "cible", 2], ["exil"]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Affaiblissement", "Exil", "Prix"], "ambiance": "Les cloportes géants se roulent en boule sur les souches et ne se déroulent plus : ils sonnent sous l'ongle.", "budget": "11 / 10, recalculé par le critique"},
{"id": "ANT153-moins-2", "zone": "ANT153", "pole": "-", "palier": 2, "nom": "Le chapeau qui tombe", "cout": 1, "cible": 1, "effet": "Si la cible piétine ou charge : la cible subit 10 dégâts. La cible subit 10 dégâts. Exil.", "ops": [["si", "pietine", [["deg", "cible", 10]]], ["deg", "cible", 10], ["exil"]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Dégâts", "Exil", "Prix"], "ambiance": "Un chapeau de pierre tombe sans bruit ; on ne l'entend qu'en touchant le sol, et le sol tremble.", "budget": "12 / 12,5, recalculé par le critique"},
{"id": "ANT153-moins-3", "zone": "ANT153", "pole": "-", "palier": 3, "nom": "Ne t'assieds pas", "cout": 1, "cible": 0, "effet": "Le héros gagne 10 de garde. Riposte 3. Piochez 1 carte. Exil.", "ops": [["garde", "heros", 10], ["riposte", 3], ["pioche", 1], ["exil"]], "tags": ["Antre", "Sève", "Pôle −", "Garde", "Riposte", "Pioche", "Exil", "Prix"], "ambiance": "Zlata l'a dit à Mstislav avant le bois : ne t'assieds pas, et si tu as soif, bois en marchant.", "budget": "15 / 15, recalculé par le critique"},
{"id": "ANT153-moins-4", "zone": "ANT153", "pole": "-", "palier": 4, "nom": "La hache qui sonne", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : la cible subit 16 dégâts. La cible subit 12 dégâts. Les dégâts ignorent la garde. La cible brûle : 2 dégâts au début de ses 3 prochains tours. Exil.", "ops": [["si", "pietine", [["deg", "cible", 16]]], ["deg", "cible", 12], ["ignoreGarde"], ["brulure", "cible", 2, 3], ["exil"]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Dégâts dans le temps", "Exil", "Prix"], "ambiance": "La hache de Mstislav sonne contre les pieds gris comme sur une enclume ; il a cessé de couper ceux-là.", "budget": "26 / 28, recalculé par le critique"},
{"id": "ANT153-moins-5", "zone": "ANT153", "pole": "-", "palier": 5, "nom": "Le bûcheron assis", "cout": 2, "cible": 0, "effet": "Bûcheron assis se joint à vous : 24 PV, frappe 6. Riposte 3. Le héros gagne 10 de garde. Exil.", "ops": [["invoque", "Bûcheron assis", 24, 6], ["riposte", 3], ["garde", "heros", 10], ["exil"]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Riposte", "Garde", "Exil", "Prix"], "ambiance": "Le bûcheron qui s'est assis sous un chapeau gris y est encore ; il se lève quand on approche.", "budget": "32 / 32, recalculé par le critique"},
{"id": "ANT153-moins-6", "zone": "ANT153", "pole": "-", "palier": 6, "nom": "La mousse en gravier", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 5 dégâts. La cible subit 16 dégâts. Le héros se soigne de 3. Gagnez 2 mana de Sève. Chaque ennemi gagne 1 de garde.", "ops": [["deg", "tous", 5], ["deg", "cible", 16], ["soin", "heros", 3], ["mana", "Sève", 2], ["ennemiGarde", 1]], "tags": ["Antre", "Sève", "Pôle −", "Dégâts", "Soin", "Mana", "Prix"], "ambiance": "Sous les chapeaux gris, la mousse craque comme du gravier, et les pas laissent des traces blanches.", "budget": "34 / 36, recalculé par le critique"},
{"id": "ANT153-moins-7", "zone": "ANT153", "pole": "-", "palier": 7, "nom": "Le Bois arrêté", "cout": 3, "cible": 1, "effet": "La forêt ne pousse plus. Si la cible piétine ou charge : 22 dégâts, −3 d'attaque. Puis 14 dégâts, garde ignorée. Chapeau-bête (28 PV, frappe 6). Exil. Pose Sceau. Si Givre (consommé) : 20 dégâts à la cible ; tous perdent 2 d'attaque.", "ops": [["si", "pietine", [["deg", "cible", 22], ["affaiblit", "cible", 3]]], ["deg", "cible", 14], ["ignoreGarde"], ["invoque", "Chapeau-bête de granit", 28, 6], ["exil"], ["pose", "Sceau"], ["reveil", "Givre", true, [["deg", "cible", 20], ["affaiblit", "tous", 2]]]], "tags": ["Antre", "Sève", "Forme ultime −7", "Condition", "Dégâts", "Affaiblissement", "Perce-garde", "Invocation", "Exil", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "Au cœur de Kamenogrib, rien ne bouge depuis la mort de la grand-mère de Zlata, pas même la poussière.", "budget": "base 52,5 + réveil 33,2 (63 %), recalculé par le critique"}
]
```

### Pôle + Cristal

Progression : la limace de verre, l'aiguille dans la lamelle, l'araignée de cave, le lit de cristal, la martre guérie, la colonne de lumière, puis la nef claire. Style : les bêtes se couchent sur le cristal et se refont ; le soin des alliés court sur les 7 cartes, la garde des alliés sur 4. Prix : le cristal coupe la main (PV).

```json
[
{"id": "ANT153-plus-1", "zone": "ANT153", "pole": "+", "palier": 1, "nom": "La limace de verre", "cout": 1, "cible": 0, "effet": "Limace de verre se joint à vous : 8 PV, frappe 2. Vos alliés se soignent de 3. Le héros perd 1 PV.", "ops": [["invoque", "Limace de verre", 8, 2], ["soin", "allies", 3], ["prixPV", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "La limace de verre laisse sur les lamelles une trace qui durcit en cristal avant le soir.", "budget": "10,5 (cible 10, écart +5 % ; vérifié au script)"},
{"id": "ANT153-plus-2", "zone": "ANT153", "pole": "+", "palier": 2, "nom": "L'aiguille dans la lamelle", "cout": 1, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : vos alliés se soignent de 4. Vos alliés gagnent 4 de garde. La cible subit 5 dégâts. Le héros perd 1 PV.", "ops": [["si", "bete", [["soin", "allies", 4]]], ["garde", "allies", 4], ["deg", "cible", 5], ["prixPV", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Soin", "Garde", "Dégâts", "Prix"], "ambiance": "Les aiguilles de cristal poussent à travers les lamelles en une nuit, droites comme des fuseaux.", "budget": "11,8 (cible 12,5, écart -6 % ; vérifié au script)"},
{"id": "ANT153-plus-3", "zone": "ANT153", "pole": "+", "palier": 3, "nom": "L'araignée de cave", "cout": 1, "cible": 0, "effet": "Araignée de cristal se joint à vous : 10 PV, frappe 3. Vos alliés se soignent de 4. Le héros perd 1 PV.", "ops": [["invoque", "Araignée de cristal", 10, 3], ["soin", "allies", 4], ["prixPV", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "L'araignée de cave tend sa toile entre deux aiguilles, et la toile prend la lumière comme du verre filé.", "budget": "14,5 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "ANT153-plus-4", "zone": "ANT153", "pole": "+", "palier": 4, "nom": "Le lit de cristal", "cout": 2, "cible": 1, "effet": "Vos alliés se soignent de 8. Vos alliés gagnent 6 de garde. La cible subit 8 dégâts. Si une bête alliée est déjà en jeu : vos alliés gagnent 4 de garde. Le héros perd 2 PV.", "ops": [["soin", "allies", 8], ["garde", "allies", 6], ["deg", "cible", 8], ["si", "bete", [["garde", "allies", 4]]], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle +", "Soin", "Garde", "Dégâts", "Condition", "Prix"], "ambiance": "Les bêtes blessées viennent se coucher sur le cristal ; au matin, leurs plaies sont fermées, et vitreuses.", "budget": "27,6 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "ANT153-plus-5", "zone": "ANT153", "pole": "+", "palier": 5, "nom": "Le faon guéri", "cout": 2, "cible": 1, "effet": "Faon de cristal se joint à vous : 20 PV, frappe 5. Vos alliés se soignent de 8. La cible subit 4 dégâts. Le héros perd 2 PV.", "ops": [["invoque", "Faon de cristal", 20, 5], ["soin", "allies", 8], ["deg", "cible", 4], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Soin", "Dégâts", "Prix"], "ambiance": "Le faon guéri sur le cristal a gardé une patte claire, qui ne laisse pas d'empreinte dans la neige.", "budget": "31,5 (cible 32, écart -2 % ; vérifié au script)"},
{"id": "ANT153-plus-6", "zone": "ANT153", "pole": "+", "palier": 6, "nom": "La colonne de lumière", "cout": 2, "cible": 0, "effet": "Vos alliés se soignent de 10. Vos alliés gagnent 8 de garde. Tous les ennemis subissent 5 dégâts. Le héros perd 2 PV.", "ops": [["soin", "allies", 10], ["garde", "allies", 8], ["deg", "tous", 5], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle +", "Soin", "Garde", "Dégâts", "Prix"], "ambiance": "La lumière descend en colonnes entre les chapeaux de cristal, et les bêtes s'y tiennent debout, les yeux fermés.", "budget": "33,6 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "ANT153-plus-7", "zone": "ANT153", "pole": "+", "palier": 7, "nom": "La Nef claire", "cout": 3, "cible": 1, "effet": "Plus rien ne pourrit. Un élan de verre se joint à vous : 30 PV, frappe 6. Vos alliés se soignent de 12. La cible subit 10 dégâts. Le héros perd 4 PV. Pose Racine. Si Sceau (consommé) : vos alliés se soignent de 12 et gagnent 10 de garde.", "ops": [["invoque", "Élan de verre", 30, 6], ["soin", "allies", 12], ["deg", "cible", 10], ["prixPV", 4], ["pose", "Racine"], ["reveil", "Sceau", true, [["soin", "allies", 12], ["garde", "allies", 10]]]], "tags": ["Antre", "Sève", "Forme ultime +7", "Invocation", "Soin", "Dégâts", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Dans la nef de cristal, Zlata dit qu'on guérit de tout, et qu'on ne repart jamais tout à fait.", "budget": "48 (+30 si Sceau, soit +62 % ; vérifié au script)"}
]
```

---

## Ükhelt-Uul, le Cône des Licous (ANT233 · Antre · Volcan · Feu · mongole)

*Note du critique (lot 7) : La gerboise devient un pika (rongeurs au plafond).*

```json
{
 "fiche": "ANT233",
 "nom": "Ükhelt-Uul, le Cône des Licous",
 "recit": "Tu demandes pourquoi tant de licous pendent aux pierres du cône. Quand un homme meurt, Odval mène son cheval jusqu'ici, au bord de la coulée, avec la selle. On ne l'abat pas. Le cône s'en charge. Mon grand-père a compté quatre-vingts licous ; il y en a davantage. Au printemps, les juments viennent mettre bas sur la cendre chaude, là où les chevaux des morts ont disparu. Les poulains naissent avec la marque de la sangle. Ne ris pas. Regarde leur dos.",
 "pal": [
  "Le cône fume noir sur une plaine de cendre ; des chevaux sellés y montent en file, sans cavalier, et aucun ne laisse d'empreinte.",
  "Les licous se multiplient sur les pierres ; la coulée s'avance, et des selles vides fument au bord de la lave.",
  "Volcan bas au milieu de la steppe : coulées refroidies, herbe rase, un ovoo de pierres au pied du cône, et des licous noués aux rochers.",
  "Les juments paissent sur la cendre chaude ; les poulains se roulent dans la vapeur, et l'herbe monte jusqu'aux bouches du cône.",
  "La harde couvre le cône entier : le sol est vert jusqu'au cratère, les juments tiennent la lave à distance, et l'air sent le lait."
 ],
 "pm": "Mort",
 "pp": "Vie"
}
```

### Pôle − Mort

Progression : le cheval du mort, le licou noué, la selle qui fume, la file sans cavalier, la coulée qui prend, l'étalon des cendres, puis le cône des licous. Style : on amène un cheval, et le cône le prend (prix en bêtes) ; tant qu'une bête est en jeu, les cartes frappent ou figent la cible (crochet `bete`, toujours lu avant l'invocation). Prix : vos bêtes, sur les 7 cartes.

```json
[
{"id": "ANT233-moins-1", "zone": "ANT233", "pole": "-", "palier": 1, "nom": "Le cheval du mort", "cout": 1, "cible": 1, "effet": "Cheval sellé se joint à vous : 10 PV, frappe 2. La cible perd 1 d'attaque. Votre bête la plus faible perd 1 PV.", "ops": [["invoque", "Cheval sellé", 10, 2], ["affaiblit", "cible", 1], ["prixBete", 1]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Odval mène le cheval par le licou jusqu'au bord de la coulée, puis rentre sans se retourner.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT233-moins-2", "zone": "ANT233", "pole": "-", "palier": 2, "nom": "Le licou noué", "cout": 1, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible subit 8 dégâts. La cible hésite. Gagnez 2 mana de Feu. Votre bête la plus faible perd 2 PV.", "ops": [["si", "bete", [["deg", "cible", 8]]], ["hesite", "cible"], ["mana", "Feu", 2], ["prixBete", 2]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Contrôle", "Mana", "Prix"], "ambiance": "Chaque licou est noué à une pierre différente, et personne n'a jamais vu deux licous sur la même.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT233-moins-3", "zone": "ANT233", "pole": "-", "palier": 3, "nom": "La selle qui fume", "cout": 1, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible est marquée 3. Cheval de cendre se joint à vous : 14 PV, frappe 3. Votre bête la plus faible perd 2 PV.", "ops": [["si", "bete", [["vulnerable", "cible", 3]]], ["invoque", "Cheval de cendre", 14, 3], ["prixBete", 2]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Marque", "Invocation", "Prix"], "ambiance": "Au bord de la lave, les selles fument longtemps après que les chevaux sont partis.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ANT233-moins-4", "zone": "ANT233", "pole": "-", "palier": 4, "nom": "La file sans cavalier", "cout": 2, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible subit 10 dégâts. Chevaux sans cavalier se joint à vous : 22 PV, frappe 5. La cible hésite. Votre bête la plus faible perd 3 PV.", "ops": [["si", "bete", [["deg", "cible", 10]]], ["invoque", "Chevaux sans cavalier", 22, 5], ["hesite", "cible"], ["prixBete", 3]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Invocation", "Contrôle", "Prix"], "ambiance": "Les nuits de pleine lune, une file de chevaux sellés monte le cône, au pas, sans un hennissement.", "budget": "25,5 (cible 28, écart -9 % ; vérifié au script)"},
{"id": "ANT233-moins-5", "zone": "ANT233", "pole": "-", "palier": 5, "nom": "La coulée qui prend", "cout": 2, "cible": 1, "effet": "Tous les ennemis brûlent : 2 dégâts au début de leurs 3 prochains tours. La cible subit 12 dégâts. La cible est marquée 2. Le héros gagne 8 de garde. Votre bête la plus faible perd 3 PV.", "ops": [["brulure", "tous", 2, 3], ["deg", "cible", 12], ["vulnerable", "cible", 2], ["garde", "heros", 8], ["prixBete", 3]], "tags": ["Antre", "Feu", "Pôle −", "Dégâts dans le temps", "Dégâts", "Marque", "Garde", "Prix"], "ambiance": "La coulée avance d'une longueur de cheval par nuit, et elle s'arrête toujours devant les licous.", "budget": "34,6 (cible 32, écart +8 % ; vérifié au script)"},
{"id": "ANT233-moins-6", "zone": "ANT233", "pole": "-", "palier": 6, "nom": "L'étalon des cendres", "cout": 2, "cible": 0, "effet": "Étalon des cendres se joint à vous : 26 PV, frappe 6. Tous les ennemis hésitent. Riposte 2. Votre bête la plus faible perd 3 PV.", "ops": [["invoque", "Étalon des cendres", 26, 6], ["hesite", "tous"], ["riposte", 2], ["prixBete", 3]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Contrôle", "Riposte", "Prix"], "ambiance": "L'étalon des cendres a la robe grise et chaude ; ceux qui le touchent gardent la main noire jusqu'au soir.", "budget": "31,8 (cible 36, écart -12 % ; vérifié au script)"},
{"id": "ANT233-moins-7", "zone": "ANT233", "pole": "-", "palier": 7, "nom": "Le Cône des Licous", "cout": 3, "cible": 1, "effet": "Les morts reprennent leurs chevaux. Avec une bête : tous subissent 6 dégâts, la cible hésite. La cible subit 16 dégâts ; tous brûlent 3 par tour (3 tours). Héros +8 de garde ; bête −4 PV. Pose Braise. Si Sang (consommé) : tous −2 d'attaque, 7 dégâts.", "ops": [["si", "bete", [["deg", "tous", 6], ["hesite", "cible"]]], ["deg", "cible", 16], ["brulure", "tous", 3, 3], ["garde", "heros", 8], ["prixBete", 4], ["pose", "Braise"], ["reveil", "Sang", true, [["affaiblit", "tous", 2], ["deg", "tous", 7]]]], "tags": ["Antre", "Feu", "Forme ultime −7", "Condition", "Dégâts", "Contrôle", "Dégâts dans le temps", "Garde", "Prix", "Pose Braise", "Réveil Sang"], "ambiance": "Au sommet d'Ükhelt-Uul, les licous sont noués si serré qu'on ne voit plus la pierre dessous.", "budget": "47,3 (+28,6 si Sang, soit +60 % ; vérifié au script)"}
]
```

### Pôle + Vie

Progression : la jument qui se retourne, le lait chaud, la gerboise sous la cendre, la harde qui reçoit, les poulains marqués, l'herbe aux bouches, puis la harde sur le cône. Style : la harde attend la charge ; contre une cible qui prend son élan, elle frappe et l'affaiblit (crochet `elan` sur 4 cartes), et le héros se refait au lait. Prix : la steppe nourrit aussi l'ennemi (soin ennemi).

```json
[
{"id": "ANT233-plus-1", "zone": "ANT233", "pole": "+", "palier": 1, "nom": "La jument qui se retourne", "cout": 1, "cible": 1, "effet": "Jument de la harde se joint à vous : 10 PV, frappe 2. Si la cible prend son élan : la cible subit 8 dégâts. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Jument de la harde", 10, 2], ["si", "elan", [["deg", "cible", 8]]], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Condition", "Dégâts", "Prix"], "ambiance": "La jument de tête se retourne quand on charge la harde ; elle ne fuit pas, elle attend.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT233-plus-2", "zone": "ANT233", "pole": "+", "palier": 2, "nom": "Le lait chaud", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 6. Gagnez 1 mana de Feu. Le héros gagne 6 de garde. Chaque ennemi se soigne de 1.", "ops": [["soin", "heros", 6], ["mana", "Feu", 1], ["garde", "heros", 6], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Soin", "Mana", "Garde", "Prix"], "ambiance": "Le lait des juments du cône sort chaud du pis et le reste longtemps, même dans la neige.", "budget": "11,8 (cible 12,5, écart -6 % ; vérifié au script)"},
{"id": "ANT233-plus-3", "zone": "ANT233", "pole": "+", "palier": 3, "nom": "Le pika sous la cendre", "cout": 1, "cible": 0, "effet": "Pika des cendres se joint à vous : 8 PV, frappe 3. 4 coups de 2 dégâts au hasard. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Pika des cendres", 8, 3], ["deg", "hasard", 2, 4], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Dégâts", "Prix"], "ambiance": "Les pikas creusent sous la cendre chaude et ressortent d'un bond, au milieu des sabots.", "budget": "14,5 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "ANT233-plus-4", "zone": "ANT233", "pole": "+", "palier": 4, "nom": "La harde reçoit", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : la cible subit 16 dégâts. Le héros gagne 12 de garde. La cible subit 8 dégâts. Le héros se soigne de 4. Chaque ennemi se soigne de 1.", "ops": [["si", "elan", [["deg", "cible", 16]]], ["garde", "heros", 12], ["deg", "cible", 8], ["soin", "heros", 4], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Dégâts", "Garde", "Soin", "Prix"], "ambiance": "La harde d'Ükhelt-Uul se serre en cercle, les poulains au milieu, les sabots dehors.", "budget": "27,6 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "ANT233-plus-5", "zone": "ANT233", "pole": "+", "palier": 5, "nom": "Les poulains marqués", "cout": 2, "cible": 1, "effet": "Poulains marqués se joint à vous : 20 PV, frappe 5. Si la cible prend son élan : la cible hésite. Le héros se soigne de 8. La cible subit 6 dégâts. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Poulains marqués", 20, 5], ["si", "elan", [["hesite", "cible"]]], ["soin", "heros", 8], ["deg", "cible", 6], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Condition", "Contrôle", "Soin", "Dégâts", "Prix"], "ambiance": "Les poulains nés sur la cendre portent sur le dos la trace pâle d'une sangle qu'ils n'ont jamais eue.", "budget": "32 (cible 32, écart +0 % ; vérifié au script)"},
{"id": "ANT233-plus-6", "zone": "ANT233", "pole": "+", "palier": 6, "nom": "L'herbe aux bouches", "cout": 2, "cible": 1, "effet": "Le héros gagne 14 de garde. Tous les ennemis subissent 4 dégâts. La cible perd 2 d'attaque. La cible brûle : 3 dégâts au début de ses 3 prochains tours. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 14], ["deg", "tous", 4], ["affaiblit", "cible", 2], ["brulure", "cible", 3, 3], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Garde", "Dégâts", "Affaiblissement", "Dégâts dans le temps", "Prix"], "ambiance": "L'herbe pousse jusqu'aux bouches du cône, et les juments la broutent dans la vapeur sans se brûler.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ANT233-plus-7", "zone": "ANT233", "pole": "+", "palier": 7, "nom": "La Harde sur le cône", "cout": 3, "cible": 1, "effet": "Le volcan nourrit la harde. Si la cible prend son élan : 20 dégâts, −3 d'attaque. Grande jument : 28 PV, frappe 6. Héros soigné de 12 ; ennemis de 2. Pose Racine. Si Braise (consommée) : héros +16 de garde, soigné de 10 ; tous subissent 4 dégâts.", "ops": [["si", "elan", [["deg", "cible", 20], ["affaiblit", "cible", 3]]], ["invoque", "Grande jument", 28, 6], ["soin", "heros", 12], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Braise", true, [["garde", "heros", 16], ["soin", "heros", 10], ["deg", "tous", 4]]]], "tags": ["Antre", "Feu", "Forme ultime +7", "Condition", "Dégâts", "Affaiblissement", "Invocation", "Soin", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "Odval dit que la grande jument est née l'année où son père est mort, et qu'elle a ses yeux.", "budget": "45,5 (+31,6 si Braise, soit +69 % ; vérifié au script)"}
]
```

---

## eButhongweni, la Lande des Bergers couchés (ANT006 · Antre · Lande · Vent · zouloue)

*Note du critique (lot 7) : Les pintades deviennent des ibis (gallinacés au plafond).*

```json
{
 "fiche": "ANT006",
 "nom": "eButhongweni, la Lande des Bergers couchés",
 "recit": "Je m'appelle Nkosinathi. J'avais la garde des bœufs cette nuit-là, avec mon oncle. Le vent est tombé d'un coup sur la lande. Mon oncle s'est couché dans l'herbe, puis les bœufs, l'un après l'autre, les pattes repliées. Je me suis pincé le bras jusqu'au sang pour rester debout. Au matin, ils se sont levés tous ensemble et ont repris le chemin de l'enclos. Mon oncle mange, rit, mène les bêtes. Il ne m'appelle plus par mon nom. Le grand taureau me suit partout, à deux pas, comme on suit un berger.",
 "pal": [
  "Toute la lande dort : bergers couchés dans l'herbe, troupeaux à terre, ibis sous l'aile, et le vent tombé ne se relève plus.",
  "Les bergers s'assoupissent debout, appuyés à leurs bâtons ; les bœufs se couchent l'un après l'autre, et le vent faiblit.",
  "Lande venteuse d'herbe dure et de bruyère : un enclos de pierres sèches, des bœufs nguni, des ibis, et des bergers qui sifflent.",
  "Les troupeaux se lèvent avant l'aube ; les bœufs blessés se redressent, les bergers ne s'assoient plus, et le vent souffle fort.",
  "Toute la lande est debout et marche : bêtes et gens guéris, les yeux grands ouverts, et personne ne s'est couché depuis des jours."
 ],
 "pm": "Sommeil",
 "pp": "Éveil"
}
```

### Pôle − Sommeil

Progression : le berger qui s'assoupit, le chant qui se perd, le porc-épic couché, les bœufs à terre, le vent tombé, les pangolins roulés, puis la lande endormie. Style : chaque carte fait oublier une carte (défausse en prix) ; une fois qu'on a oublié, la suivante frappe ou pioche (crochet `defausseAPrix`, lu avant le prix de la carte). Prix : défausse, sur les 7 cartes.

```json
[
{"id": "ANT006-moins-1", "zone": "ANT006", "pole": "-", "palier": 1, "nom": "Le berger qui s'assoupit", "cout": 1, "cible": 0, "effet": "Piochez 1 carte. Pangolin roulé se joint à vous : 10 PV, frappe 2. Défaussez 1 carte au hasard.", "ops": [["pioche", 1], ["invoque", "Pangolin roulé", 10, 2], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Pioche", "Invocation", "Prix"], "ambiance": "Le berger s'assoupit appuyé sur son bâton, et le bâton s'enfonce un peu dans la terre.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ANT006-moins-2", "zone": "ANT006", "pole": "-", "palier": 2, "nom": "Le chant qui se perd", "cout": 1, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour : la cible subit 10 dégâts. Le héros se soigne de 6. 2 coups de 2 dégâts au hasard. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["deg", "cible", 10]]], ["soin", "heros", 6], ["deg", "hasard", 2, 2], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Dégâts", "Soin", "Prix"], "ambiance": "Les bergers d'eButhongweni sifflent pour se tenir éveillés ; au milieu de la nuit, le sifflet s'arrête.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT006-moins-3", "zone": "ANT006", "pole": "-", "palier": 3, "nom": "Le porc-épic couché", "cout": 1, "cible": 0, "effet": "Si une carte a déjà été défaussée en prix ce tour : piochez 2 cartes. Porc-épic dormeur se joint à vous : 16 PV, frappe 3. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["pioche", 2]]], ["invoque", "Porc-épic dormeur", 16, 3], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Pioche", "Invocation", "Prix"], "ambiance": "Le porc-épic dort piquants dehors, en travers du sentier, et les bœufs l'enjambent sans le réveiller.", "budget": "13,5 (cible 15, écart -10 % ; vérifié au script)"},
{"id": "ANT006-moins-4", "zone": "ANT006", "pole": "-", "palier": 4, "nom": "Les bœufs à terre", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 4 dégâts. La cible subit 12 dégâts. Gagnez 1 mana de Vent. La cible brûle : 2 dégâts au début de ses 2 prochains tours. Défaussez 1 carte au hasard.", "ops": [["deg", "tous", 4], ["deg", "cible", 12], ["mana", "Vent", 1], ["brulure", "cible", 2, 2], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Dégâts", "Mana", "Dégâts dans le temps", "Prix"], "ambiance": "Les bœufs se couchent les pattes repliées, tous du même côté, le mufle tourné vers l'est.", "budget": "24,8 (cible 28, écart -11 % ; vérifié au script)"},
{"id": "ANT006-moins-5", "zone": "ANT006", "pole": "-", "palier": 5, "nom": "Le vent tombé", "cout": 2, "cible": 1, "effet": "Tous les ennemis hésitent. La cible brûle : 3 dégâts au début de ses 3 prochains tours. La cible perd 2 d'attaque. Le héros gagne 10 de garde. Défaussez 1 carte au hasard.", "ops": [["hesite", "tous"], ["brulure", "cible", 3, 3], ["affaiblit", "cible", 2], ["garde", "heros", 10], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Contrôle", "Dégâts dans le temps", "Affaiblissement", "Garde", "Prix"], "ambiance": "Quand le vent tombe sur eButhongweni, on entend respirer la lande entière, lentement, d'un seul souffle.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ANT006-moins-6", "zone": "ANT006", "pole": "-", "palier": 6, "nom": "Les pangolins roulés", "cout": 2, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour : la cible subit 16 dégâts. Pangolins de la lande se joint à vous : 24 PV, frappe 5. Piochez 1 carte. Le héros se soigne de 5. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["deg", "cible", 16]]], ["invoque", "Pangolins de la lande", 24, 5], ["pioche", 1], ["soin", "heros", 5], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Dégâts", "Invocation", "Pioche", "Soin", "Prix"], "ambiance": "Les pangolins dorment roulés au pied des pierres de l'enclos ; on dirait des pierres de plus.", "budget": "33,5 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "ANT006-moins-7", "zone": "ANT006", "pole": "-", "palier": 7, "nom": "La Lande endormie", "cout": 3, "cible": 1, "effet": "La lande se couche. Si une carte a déjà été défaussée en prix ce tour : tous hésitent et subissent 6 dégâts. La cible subit 20 ; tous −2 d'attaque. Piochez 2, défaussez 2 au hasard. Pose Givre. Si Racine (consommée) : piochez 3 ; la cible subit 16.", "ops": [["si", "defausseAPrix", [["hesite", "tous"], ["deg", "tous", 6]]], ["deg", "cible", 20], ["affaiblit", "tous", 2], ["pioche", 2], ["prixDefausse", 2], ["pose", "Givre"], ["reveil", "Racine", true, [["pioche", 3], ["deg", "cible", 16]]]], "tags": ["Antre", "Vent", "Forme ultime −7", "Condition", "Contrôle", "Dégâts", "Affaiblissement", "Pioche", "Prix", "Pose Givre", "Réveil Racine"], "ambiance": "Nkosinathi dit que la lande endormie ne ronfle pas : elle compte, tout bas, et il n'a jamais su quoi.", "budget": "46,2 (+28 si Racine, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Éveil

Progression : le taureau qui se lève, les ibis qui crient, le berger debout, le troupeau qui se redresse, le grand taureau, les yeux ouverts, puis la lande debout. Style : le troupeau réveillé se soigne et se tient (soin des alliés sur 6 cartes, garde des alliés sur 3), et le vent revient en mana. Prix : on se pince jusqu'au sang (PV).

```json
[
{"id": "ANT006-plus-1", "zone": "ANT006", "pole": "+", "palier": 1, "nom": "Le taureau qui se lève", "cout": 1, "cible": 0, "effet": "Taureau nguni se joint à vous : 10 PV, frappe 2. Vos alliés se soignent de 2. Le héros perd 1 PV.", "ops": [["invoque", "Taureau nguni", 10, 2], ["soin", "allies", 2], ["prixPV", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "Le taureau nguni se lève le premier et reste debout, tête basse, jusqu'à ce que le troupeau soit levé.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT006-plus-2", "zone": "ANT006", "pole": "+", "palier": 2, "nom": "Les ibis qui crient", "cout": 1, "cible": 1, "effet": "Ibis de garde se joint à vous : 6 PV, frappe 2. Vos alliés gagnent 4 de garde. Si la cible piétine ou charge : la cible subit 6 dégâts. Le héros perd 1 PV.", "ops": [["invoque", "Ibis de garde", 6, 2], ["garde", "allies", 4], ["si", "pietine", [["deg", "cible", 6]]], ["prixPV", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Garde", "Condition", "Dégâts", "Prix"], "ambiance": "Les ibis crient tous ensemble avant l'aube, et les bergers se lèvent avant d'avoir ouvert les yeux.", "budget": "12,8 (cible 12,5, écart +2 % ; vérifié au script)"},
{"id": "ANT006-plus-3", "zone": "ANT006", "pole": "+", "palier": 3, "nom": "Le berger debout", "cout": 1, "cible": 1, "effet": "Vos alliés se soignent de 5. La cible subit 6 dégâts. Vos alliés gagnent 3 de garde. Le héros perd 1 PV.", "ops": [["soin", "allies", 5], ["deg", "cible", 6], ["garde", "allies", 3], ["prixPV", 1]], "tags": ["Antre", "Vent", "Pôle +", "Soin", "Dégâts", "Garde", "Prix"], "ambiance": "Le berger qui veille se pince le bras ; les vieux d'eButhongweni ont tous des bras couverts de marques bleues.", "budget": "16,1 (cible 15, écart +7 % ; vérifié au script)"},
{"id": "ANT006-plus-4", "zone": "ANT006", "pole": "+", "palier": 4, "nom": "Le troupeau se redresse", "cout": 2, "cible": 1, "effet": "Vos alliés se soignent de 8. La cible subit 10 dégâts. Si la cible piétine ou charge : la cible perd 2 d'attaque. Gagnez 1 mana de Vent. Le héros perd 2 PV.", "ops": [["soin", "allies", 8], ["deg", "cible", 10], ["si", "pietine", [["affaiblit", "cible", 2]]], ["mana", "Vent", 1], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle +", "Soin", "Dégâts", "Condition", "Affaiblissement", "Mana", "Prix"], "ambiance": "Les bœufs blessés se redressent sur leurs genoux, puis sur leurs pattes, sans un meuglement.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT006-plus-5", "zone": "ANT006", "pole": "+", "palier": 5, "nom": "Le grand taureau", "cout": 2, "cible": 0, "effet": "Grand taureau se joint à vous : 24 PV, frappe 6. Vos alliés se soignent de 8. Le héros perd 2 PV.", "ops": [["invoque", "Grand taureau", 24, 6], ["soin", "allies", 8], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "Le grand taureau d'eButhongweni suit Nkosinathi à deux pas, et s'arrête quand il s'arrête.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "ANT006-plus-6", "zone": "ANT006", "pole": "+", "palier": 6, "nom": "Les yeux ouverts", "cout": 2, "cible": 0, "effet": "Vos alliés se soignent de 10. Vos alliés gagnent 6 de garde. Tous les ennemis subissent 4 dégâts. Gagnez 1 mana de Vent. Le héros perd 2 PV.", "ops": [["soin", "allies", 10], ["garde", "allies", 6], ["deg", "tous", 4], ["mana", "Vent", 1], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle +", "Soin", "Garde", "Dégâts", "Mana", "Prix"], "ambiance": "Le troupeau réveillé ne ferme plus les yeux, même pour boire ; les mouches s'y posent sans qu'il cligne.", "budget": "32 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ANT006-plus-7", "zone": "ANT006", "pole": "+", "palier": 7, "nom": "La Lande debout", "cout": 3, "cible": 1, "effet": "Personne ne se recouche. Troupeau éveillé : 30 PV, frappe 6. Vos alliés se soignent de 12. La cible subit 10 dégâts. +1 mana de Vent. Héros −4 PV. Pose Sang. Si Givre (consommé) : vos alliés se soignent de 12 ; tous les ennemis subissent 6 dégâts.", "ops": [["invoque", "Troupeau éveillé", 30, 6], ["soin", "allies", 12], ["deg", "cible", 10], ["mana", "Vent", 1], ["prixPV", 4], ["pose", "Sang"], ["reveil", "Givre", true, [["soin", "allies", 12], ["deg", "tous", 6]]]], "tags": ["Antre", "Vent", "Forme ultime +7", "Invocation", "Soin", "Dégâts", "Mana", "Prix", "Pose Sang", "Réveil Givre"], "ambiance": "Sur la lande debout, gens et bêtes tournent autour de l'enclos, et le cercle ne s'arrête pas la nuit.", "budget": "51 (+31,2 si Givre, soit +61 % ; vérifié au script)"}
]
```

---

## KwaManga, la Crique des Seiches (ANT064 · Antre · Fjord · Glace · zouloue)

*Note du critique (lot 7) : −2 : la condition `hesiteAvant` était lue après l'hésitation que la carte venait de poser (toujours vraie) ; elle passe en tête.*

```json
{
 "fiche": "ANT064",
 "nom": "KwaManga, la Crique des Seiches",
 "recit": "Dumisani était petit quand l'isangoma vint flairer le village au bord du fjord. Tout le monde s'assit en cercle sur la glace, les mains ouvertes sur les genoux. Elle passa derrière chacun en reniflant, comme un chien qui cherche. Devant son oncle, elle s'arrêta, et son oncle devint immobile. Pas raide : immobile. On le laissa là. La marée monta sous la glace, il ne bougea pas. Dumisani raconte qu'au printemps, quand la glace partit vers la mer, son oncle partit avec elle, assis, les mains ouvertes, et qu'il regardait encore le village.",
 "pal": [
  "Le fjord n'est qu'une nappe de glace lisse où tout se reflète faux : des cases qui n'existent pas, des gens assis qui ne sont pas là.",
  "La glace couvre la crique ; des seiches luisent dessous en couleurs changeantes, et les reflets ne suivent plus les gestes.",
  "Fjord froid entre des falaises noires : un village de cases rondes sur la grève, des barques tirées sur les galets, et la glace qui prend.",
  "Les morses se hissent sur la glace et regardent le village ; les gens s'assoient en cercle, et personne n'ose bouger les mains.",
  "Toute la crique est figée en cercle : gens et bêtes assis sur la glace, immobiles, les yeux ouverts, et le vent même ne passe plus."
 ],
 "pm": "Mensonge",
 "pp": "Vérité"
}
```

### Pôle − Mensonge

Progression : la seiche changeante, le reflet faux, l'encre sous la glace, le remède de l'isangoma, le banc de seiches, la glace qui ment, puis la crique menteuse. Style : chaque carte soigne le héros et trouble la cible (hésitation sur 4 cartes) ; les seiches couvrent vos bêtes de garde. Prix : on jette ce qu'on sait (défausse), sur 6 cartes.

```json
[
{"id": "ANT064-moins-1", "zone": "ANT064", "pole": "-", "palier": 1, "nom": "La seiche changeante", "cout": 1, "cible": 0, "effet": "Seiche changeante se joint à vous : 8 PV, frappe 2. Le héros se soigne de 6. Défaussez 1 carte au hasard.", "ops": [["invoque", "Seiche changeante", 8, 2], ["soin", "heros", 6], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Soin", "Prix"], "ambiance": "La seiche de KwaManga prend sous la glace la couleur de celui qui la regarde, puis celle d'un autre.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT064-moins-2", "zone": "ANT064", "pole": "-", "palier": 2, "nom": "Le reflet faux", "cout": 1, "cible": 1, "effet": "Si la cible hésitait déjà : la cible subit 8 dégâts. Puis la cible hésite. Le héros se soigne de 5. Défaussez 1 carte au hasard.", "ops": [["si", "hesiteAvant", [["deg", "cible", 8]]], ["hesite", "cible"], ["soin", "heros", 5], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle −", "Condition", "Dégâts", "Contrôle", "Soin", "Prix"], "ambiance": "Dans la glace de la crique, les reflets lèvent la main un instant avant vous.", "budget": "11 / 12,5, recalculé par le critique"},
{"id": "ANT064-moins-3", "zone": "ANT064", "pole": "-", "palier": 3, "nom": "L'encre sous la glace", "cout": 1, "cible": 0, "effet": "Seiche à encre se joint à vous : 12 PV, frappe 3. Le héros se soigne de 5.", "ops": [["invoque", "Seiche à encre", 12, 3], ["soin", "heros", 5]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Soin"], "ambiance": "L'encre des seiches monte sous la glace en fumée noire et dessine des cases absentes de la grève.", "budget": "15,5 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "ANT064-moins-4", "zone": "ANT064", "pole": "-", "palier": 4, "nom": "Le remède de l'isangoma", "cout": 2, "cible": 1, "effet": "Le héros se soigne de 12. La cible hésite. La cible subit 10 dégâts. Vos alliés gagnent 3 de garde. Défaussez 1 carte au hasard.", "ops": [["soin", "heros", 12], ["hesite", "cible"], ["deg", "cible", 10], ["garde", "allies", 3], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle −", "Soin", "Contrôle", "Dégâts", "Garde", "Prix"], "ambiance": "L'isangoma donne au malade une poudre grise ; il va mieux, et ne sait plus de quoi il souffrait.", "budget": "27,6 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "ANT064-moins-5", "zone": "ANT064", "pole": "-", "palier": 5, "nom": "Le banc de seiches", "cout": 2, "cible": 1, "effet": "Banc de seiches se joint à vous : 20 PV, frappe 5. Le héros se soigne de 8. Si la cible s'apprêtait à hésiter : tous les ennemis hésitent. Vos alliés gagnent 4 de garde. Défaussez 1 carte au hasard.", "ops": [["invoque", "Banc de seiches", 20, 5], ["soin", "heros", 8], ["si", "hesiteAvant", [["hesite", "tous"]]], ["garde", "allies", 4], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Soin", "Condition", "Contrôle", "Garde", "Prix"], "ambiance": "Le banc de seiches passe sous la glace en changeant de couleur toutes ensemble, comme une seule bête.", "budget": "31,7 (cible 32, écart -1 % ; vérifié au script)"},
{"id": "ANT064-moins-6", "zone": "ANT064", "pole": "-", "palier": 6, "nom": "La glace qui ment", "cout": 2, "cible": 1, "effet": "Le héros se soigne de 12. La cible subit 12 dégâts. Vos alliés gagnent 6 de garde. Tous les ennemis subissent 3 dégâts. Défaussez 1 carte au hasard.", "ops": [["soin", "heros", 12], ["deg", "cible", 12], ["garde", "allies", 6], ["deg", "tous", 3], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle −", "Soin", "Dégâts", "Garde", "Prix"], "ambiance": "La glace de KwaManga montre le village comme il était hier, et les enfants y cherchent leurs morts.", "budget": "34,8 (cible 36, écart -3 % ; vérifié au script)"},
{"id": "ANT064-moins-7", "zone": "ANT064", "pole": "-", "palier": 7, "nom": "La Crique menteuse", "cout": 3, "cible": 1, "effet": "La glace montre autre chose. Le héros se soigne de 20 et gagne 10 de garde. Tous les ennemis hésitent. La cible subit 16 dégâts. Défaussez 2 cartes au hasard. Pose Abîme. Si Givre (consommé) : le héros se soigne de 16 ; la cible subit 14 dégâts.", "ops": [["soin", "heros", 20], ["garde", "heros", 10], ["hesite", "tous"], ["deg", "cible", 16], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Givre", true, [["soin", "heros", 16], ["deg", "cible", 14]]]], "tags": ["Antre", "Glace", "Forme ultime −7", "Soin", "Garde", "Contrôle", "Dégâts", "Prix", "Pose Abîme", "Réveil Givre"], "ambiance": "Dumisani a vu dans la glace son oncle assis, et à côté de lui un enfant qui lui ressemblait.", "budget": "46,8 (+30 si Givre, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Vérité

Progression : le macareux qui fixe, les mains ouvertes, le morse sur la glace, le flairage, le cercle des morses, le cercle sur la glace, puis le cercle figé. Style : la cible se fige à chaque carte (hésitation sur les 7, « tous » jamais deux cartes de suite), et ce qui se fige perd sa garde. Prix : les accusés se serrent (garde ennemie).

```json
[
{"id": "ANT064-plus-1", "zone": "ANT064", "pole": "+", "palier": 1, "nom": "Le macareux qui fixe", "cout": 1, "cible": 1, "effet": "Macareux du flairage se joint à vous : 6 PV, frappe 2. La cible hésite. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Macareux du flairage", 6, 2], ["hesite", "cible"], ["ennemiGarde", 1]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Contrôle", "Prix"], "ambiance": "Le macareux se pose devant un homme et le fixe sans bouger ; on dit au village qu'il flaire, lui aussi.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ANT064-plus-2", "zone": "ANT064", "pole": "+", "palier": 2, "nom": "Les mains ouvertes", "cout": 1, "cible": 1, "effet": "La cible hésite. La cible subit 6 dégâts. La cible perd sa garde. Chaque ennemi gagne 1 de garde.", "ops": [["hesite", "cible"], ["deg", "cible", 6], ["briseGarde", "cible"], ["ennemiGarde", 1]], "tags": ["Antre", "Glace", "Pôle +", "Contrôle", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Dans le cercle, chacun tient les mains ouvertes sur les genoux ; celui qui ferme le poing est désigné.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT064-plus-3", "zone": "ANT064", "pole": "+", "palier": 3, "nom": "Le morse sur la glace", "cout": 1, "cible": 1, "effet": "Morse du fjord se joint à vous : 18 PV, frappe 3. S'il ne reste qu'un ennemi : la cible hésite. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Morse du fjord", 18, 3], ["si", "seul", [["hesite", "cible"]]], ["ennemiGarde", 1]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Condition", "Contrôle", "Prix"], "ambiance": "Le vieux morse s'est hissé sur la glace près du cercle, et il regarde chacun à tour de rôle.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ANT064-plus-4", "zone": "ANT064", "pole": "+", "palier": 4, "nom": "Le flairage", "cout": 2, "cible": 1, "effet": "Tous les ennemis hésitent. La cible subit 12 dégâts. Les dégâts ignorent la garde. La cible perd sa garde. Chaque ennemi gagne 1 de garde.", "ops": [["hesite", "tous"], ["deg", "cible", 12], ["ignoreGarde"], ["briseGarde", "cible"], ["ennemiGarde", 1]], "tags": ["Antre", "Glace", "Pôle +", "Contrôle", "Dégâts", "Perce-garde", "Prix"], "ambiance": "L'isangoma passe derrière le cercle en reniflant ; quand elle s'arrête, personne ne respire plus.", "budget": "24,8 (cible 28, écart -11 % ; vérifié au script)"},
{"id": "ANT064-plus-5", "zone": "ANT064", "pole": "+", "palier": 5, "nom": "Le cercle des morses", "cout": 2, "cible": 1, "effet": "La cible hésite. Morses en cercle se joint à vous : 22 PV, frappe 5. Tous les ennemis subissent 4 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["hesite", "cible"], ["invoque", "Morses en cercle", 22, 5], ["deg", "tous", 4], ["ennemiGarde", 1]], "tags": ["Antre", "Glace", "Pôle +", "Contrôle", "Invocation", "Dégâts", "Prix"], "ambiance": "Les morses se sont couchés en cercle autour des gens assis, défenses vers l'intérieur.", "budget": "30,3 (cible 32, écart -5 % ; vérifié au script)"},
{"id": "ANT064-plus-6", "zone": "ANT064", "pole": "+", "palier": 6, "nom": "Le cercle sur la glace", "cout": 2, "cible": 1, "effet": "Tous les ennemis hésitent. Tous les ennemis subissent 4 dégâts. S'il ne reste qu'un ennemi : la cible subit 14 dégâts. Le héros gagne 12 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["hesite", "tous"], ["deg", "tous", 4], ["si", "seul", [["deg", "cible", 14]]], ["garde", "heros", 12], ["ennemiGarde", 1]], "tags": ["Antre", "Glace", "Pôle +", "Contrôle", "Dégâts", "Condition", "Garde", "Prix"], "ambiance": "Le cercle des accusés reste assis sur la glace toute la nuit, et la glace ne fond pas sous eux.", "budget": "32,2 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ANT064-plus-7", "zone": "ANT064", "pole": "+", "palier": 7, "nom": "Le Cercle figé", "cout": 3, "cible": 1, "effet": "Personne ne bouge plus. La cible hésite, perd sa garde et subit 18 dégâts. Héros +12 de garde. Morse blanc : 24 PV, frappe 5. Ennemis +2 de garde. Pose Givre. Si Abîme (consommé) : la cible perd 3 d'attaque et subit 14 dégâts ; héros soigné de 8.", "ops": [["hesite", "cible"], ["briseGarde", "cible"], ["deg", "cible", 18], ["garde", "heros", 12], ["invoque", "Morse blanc", 24, 5], ["ennemiGarde", 2], ["pose", "Givre"], ["reveil", "Abîme", true, [["affaiblit", "cible", 3], ["deg", "cible", 14], ["soin", "heros", 8]]]], "tags": ["Antre", "Glace", "Forme ultime +7", "Contrôle", "Perce-garde", "Dégâts", "Garde", "Invocation", "Prix", "Pose Givre", "Réveil Abîme"], "ambiance": "Au printemps, la glace part vers la mer avec le cercle des accusés, assis, les mains ouvertes.", "budget": "51,1 (+31 si Abîme, soit +61 % ; vérifié au script)"}
]
```

---

## Mer-Kheper, la Salle des Cèdres rouges (ASS137 · Assemblée · Toundra · Glace · égyptienne)

```json
{
 "fiche": "ASS137",
 "nom": "Mer-Kheper, la Salle des Cèdres rouges",
 "recit": "« Iuput, prêtre de la Maison de Vie, envoyé au pays du froid pour garder les cèdres. Il saignait les arbres à l'aube, et l'aube ne venait pas. Il versait son sang au pied des troncs pour qu'ils restent rouges. Il fut juste. Que son nom soit dit. » La stèle est debout dans la neige, au milieu des cèdres de Mer-Kheper. Les voyageurs disent que l'écorce saigne encore quand on la frappe. Ils ne disent pas que la stèle a été gravée avant la mort d'Iuput, ni par qui.",
 "pal": [
  "Les cèdres sont rouges du pied à la cime, et la neige fond autour en rigoles sombres ; les prêtres saignent à genoux, sans un mot.",
  "L'écorce des cèdres suinte rouge ; les entailles se multiplient, et des taches sombres marquent la neige jusqu'à la stèle.",
  "Toundra blanche sous un soleil bas : un bosquet de cèdres sombres, une stèle gravée, et une salle de pierre où siège la Maison de Vie.",
  "La résine coule des cèdres en fils dorés ; elle ronge la glace, et les prêtres en enduisent les portes de la salle.",
  "La salle est noyée de résine claire : portes, armes et stèles sont prises dedans, et l'odeur du cèdre couvre la toundra."
 ],
 "pm": "Sang",
 "pp": "Sève"
}
```

### Pôle − Sang

Progression : la première entaille, la saignée de l'aube, le sang versé, les cèdres rouges, la rigole, le prêtre à genoux, puis la salle rouge. Style : une carte saigne, la suivante en profite (si vous avez déjà joué une autre carte ce tour) ; le saignement court (brûlure) et le prêtre rend les coups. Prix : le sang du héros (PV), sur les 7 cartes.

```json
[
{"id": "ASS137-moins-1", "zone": "ASS137", "pole": "-", "palier": 1, "nom": "Loi de la première entaille", "cout": 1, "cible": 1, "effet": "Loi : la cible brûle : 2 dégâts au début de ses 3 prochains tours. Riposte 3. Le héros perd 1 PV.", "ops": [["brulure", "cible", 2, 3], ["riposte", 3], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Dégâts dans le temps", "Riposte", "Prix"], "ambiance": "La Maison de Vie fixe l'heure de la première entaille ; à Mer-Kheper, l'aube ne vient jamais à l'heure.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "ASS137-moins-2", "zone": "ASS137", "pole": "-", "palier": 2, "nom": "La saignée de l'aube", "cout": 1, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : la cible subit 8 dégâts. La cible brûle : 2 dégâts au début de ses 3 prochains tours. Gagnez 1 mana de Glace. Le héros perd 1 PV.", "ops": [["si", "cartesJouees", [["deg", "cible", 8]]], ["brulure", "cible", 2, 3], ["mana", "Glace", 1], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Mana", "Prix"], "ambiance": "Iuput saignait les cèdres au couteau de cuivre, et le cuivre ne rouillait pas dans ce froid.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS137-moins-3", "zone": "ASS137", "pole": "-", "palier": 3, "nom": "Loi du sang versé", "cout": 1, "cible": 0, "effet": "Loi : si c'est au moins votre troisième carte ce tour : tous les ennemis subissent 6 dégâts. Piochez 1 carte. Riposte 2. Le héros perd 1 PV.", "ops": [["si", "troisCartes", [["deg", "tous", 6]]], ["pioche", 1], ["riposte", 2], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Condition", "Dégâts", "Pioche", "Riposte", "Prix"], "ambiance": "La loi dit que le sang versé au pied d'un cèdre lui appartient ; nul ne sait ce qu'il en fait.", "budget": "13,6 (cible 15, écart -9 % ; vérifié au script)"},
{"id": "ASS137-moins-4", "zone": "ASS137", "pole": "-", "palier": 4, "nom": "Les cèdres rouges", "cout": 2, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : piochez 2 cartes. La cible subit 14 dégâts. Riposte 4. Le héros se soigne de 4. Le héros perd 2 PV.", "ops": [["si", "cartesJouees", [["pioche", 2]]], ["deg", "cible", 14], ["riposte", 4], ["soin", "heros", 4], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Pioche", "Dégâts", "Riposte", "Soin", "Prix"], "ambiance": "Les cèdres de Mer-Kheper sont rouges sous l'écorce comme de la viande, et ils poussent dans la glace.", "budget": "28 (cible 28, écart +0 % ; vérifié au script)"},
{"id": "ASS137-moins-5", "zone": "ASS137", "pole": "-", "palier": 5, "nom": "Loi de la rigole", "cout": 2, "cible": 1, "effet": "Loi : si vous avez déjà joué une autre carte ce tour : riposte 5. La cible brûle : 4 dégâts au début de ses 3 prochains tours. Gagnez 2 mana de Glace. Riposte 4. Le héros perd 2 PV.", "ops": [["si", "cartesJouees", [["riposte", 5]]], ["brulure", "cible", 4, 3], ["mana", "Glace", 2], ["riposte", 4], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Condition", "Riposte", "Dégâts dans le temps", "Mana", "Prix"], "ambiance": "Les rigoles creusées dans la neige mènent toutes à la salle, et la loi interdit de les combler.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ASS137-moins-6", "zone": "ASS137", "pole": "-", "palier": 6, "nom": "Le prêtre à genoux", "cout": 2, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : la cible subit 16 dégâts. Le héros gagne 11 de garde. Le héros se soigne de 8. Piochez 2 cartes. Gagnez 1 mana de Glace. Le héros perd 2 PV.", "ops": [["si", "cartesJouees", [["deg", "cible", 16]]], ["garde", "heros", 11], ["soin", "heros", 8], ["pioche", 2], ["mana", "Glace", 1], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Dégâts", "Garde", "Soin", "Pioche", "Mana", "Prix"], "ambiance": "Les prêtres saignent à genoux devant les troncs, et se relèvent plus pâles, et plus contents.", "budget": "33,8 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "ASS137-moins-7", "zone": "ASS137", "pole": "-", "palier": 7, "nom": "La Salle rouge", "cout": 3, "cible": 1, "effet": "Le sang appelle encore. Si vous avez déjà joué une autre carte ce tour : la cible subit 20, tous brûlent 3 (3 tours). Héros : soin 10, garde 16, −4 PV. Piochez 2. Pose Sang. Si Braise (consommée) : tous subissent 7 ; la cible brûle 4 (4 tours).", "ops": [["si", "cartesJouees", [["deg", "cible", 20], ["brulure", "tous", 3, 3]]], ["soin", "heros", 10], ["garde", "heros", 16], ["pioche", 2], ["prixPV", 4], ["pose", "Sang"], ["reveil", "Braise", true, [["deg", "tous", 7], ["brulure", "cible", 4, 4]]]], "tags": ["Assemblée", "Glace", "Forme ultime −7", "Condition", "Dégâts", "Dégâts dans le temps", "Soin", "Garde", "Pioche", "Prix", "Pose Sang", "Réveil Braise"], "ambiance": "Dans la salle de Mer-Kheper, la stèle d'Iuput porte son nom ; la place d'un second nom est déjà creusée.", "budget": "46,7 (+31,4 si Braise, soit +67 % ; vérifié au script)"}
]
```

### Pôle + Sève

Progression : la loi de la résine, la résine qui ronge, les portes enduites, les fils dorés, l'odeur du cèdre, la glace rongée, puis la salle prise. Style : la résine ôte la garde et les dégâts passent au travers (perce-garde sur les 7 cartes) ; contre une cible qui a de la garde, elle frappe plus fort. Prix : ce qu'on enduit est perdu (défausse), sur les 7 cartes.

```json
[
{"id": "ASS137-plus-1", "zone": "ASS137", "pole": "+", "palier": 1, "nom": "Loi de la résine", "cout": 1, "cible": 1, "effet": "Loi : la cible perd sa garde. Le héros gagne 5 de garde. Piochez 1 carte. Gagnez 1 mana de Glace. Défaussez 1 carte au hasard.", "ops": [["briseGarde", "cible"], ["garde", "heros", 5], ["pioche", 1], ["mana", "Glace", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Perce-garde", "Garde", "Pioche", "Mana", "Prix"], "ambiance": "La loi veut que la résine des cèdres serve aux portes de la salle, et à rien d'autre.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "ASS137-plus-2", "zone": "ASS137", "pole": "+", "palier": 2, "nom": "La résine qui ronge", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : la cible subit 10 dégâts. La cible perd sa garde. La cible subit 4 dégâts. Le héros se soigne de 3. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 10]]], ["briseGarde", "cible"], ["deg", "cible", 4], ["soin", "heros", 3], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Soin", "Prix"], "ambiance": "La résine de Mer-Kheper ronge le bronze en une nuit, et la glace en une heure.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS137-plus-3", "zone": "ASS137", "pole": "+", "palier": 3, "nom": "Loi des portes enduites", "cout": 1, "cible": 0, "effet": "Loi : tous les ennemis perdent leur garde. Tous les ennemis subissent 3 dégâts. Piochez 1 carte. Défaussez 1 carte au hasard.", "ops": [["briseGarde", "tous"], ["deg", "tous", 3], ["pioche", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Perce-garde", "Dégâts", "Pioche", "Prix"], "ambiance": "Chaque année, les prêtres enduisent les portes de la salle d'une couche de résine de plus ; elles ne s'ouvrent plus.", "budget": "14,2 (cible 15, écart -5 % ; vérifié au script)"},
{"id": "ASS137-plus-4", "zone": "ASS137", "pole": "+", "palier": 4, "nom": "Les fils dorés", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : la cible subit 16 dégâts. La cible perd sa garde. La cible subit 12 dégâts. Le héros se soigne de 6. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 16]]], ["briseGarde", "cible"], ["deg", "cible", 12], ["soin", "heros", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Soin", "Prix"], "ambiance": "La résine coule des entailles en fils dorés qui ne cassent pas, et qui finissent toujours par toucher le sol.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ASS137-plus-5", "zone": "ASS137", "pole": "+", "palier": 5, "nom": "Loi de l'odeur de cèdre", "cout": 2, "cible": 1, "effet": "Loi : la cible perd sa garde. Piochez 2 cartes. Le héros gagne 10 de garde. Gagnez 1 mana de Glace. Tous les ennemis subissent 4 dégâts. Défaussez 1 carte au hasard.", "ops": [["briseGarde", "cible"], ["pioche", 2], ["garde", "heros", 10], ["mana", "Glace", 1], ["deg", "tous", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Perce-garde", "Pioche", "Garde", "Mana", "Dégâts", "Prix"], "ambiance": "La loi interdit de brûler le cèdre ; l'odeur seule suffit à faire tomber les cuirasses.", "budget": "27,8 (cible 32, écart -13 % ; vérifié au script)"},
{"id": "ASS137-plus-6", "zone": "ASS137", "pole": "+", "palier": 6, "nom": "La glace rongée", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : la cible subit 18 dégâts. Les dégâts ignorent la garde. La cible subit 16 dégâts. Le héros se soigne de 9. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 18]]], ["ignoreGarde"], ["deg", "cible", 16], ["soin", "heros", 9], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Soin", "Prix"], "ambiance": "Autour des cèdres, la glace rongée par la résine ressemble à de la dentelle, et ne porte plus personne.", "budget": "34 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "ASS137-plus-7", "zone": "ASS137", "pole": "+", "palier": 7, "nom": "La Salle prise", "cout": 3, "cible": 1, "effet": "La résine prend la salle. La cible perd sa garde et subit 26 dégâts, garde ignorée. Héros soigné de 12. Piochez 2, défaussez 2 au hasard. Pose Racine. Si Sang (consommé) : la cible subit 18 dégâts, garde ignorée ; héros soigné de 8.", "ops": [["briseGarde", "cible"], ["ignoreGarde"], ["deg", "cible", 26], ["soin", "heros", 12], ["pioche", 2], ["prixDefausse", 2], ["pose", "Racine"], ["reveil", "Sang", true, [["deg", "cible", 18], ["ignoreGarde"], ["soin", "heros", 8]]]], "tags": ["Assemblée", "Glace", "Forme ultime +7", "Perce-garde", "Dégâts", "Soin", "Pioche", "Prix", "Pose Racine", "Réveil Sang"], "ambiance": "Dans la salle prise, la Maison de Vie siège encore, figée dans la résine, la bouche ouverte.", "budget": "46 (+29 si Sang, soit +63 % ; vérifié au script)"}
]
```

---

## La Diète de Kettenfjord (ASS011 · Assemblée · Fjord · Glace · gothique)

```json
{
 "fiche": "ASS011",
 "nom": "La Diète de Kettenfjord",
 "recit": "Moi, Jost Ammerer, j'ai porté la chaîne. Le seigneur de Kettenfjord tenait sa Diète une fois l'an, sur la glace, au pied du château. Chaque serf venait la chaîne au cou, une chaîne fine, d'argent, qu'il fallait montrer polie. L'année où la Diète a aboli les chaînes, on nous les a ôtées sur la glace, une à une, devant le seigneur. Le soir même, la glace a cédé sous le château. Le seigneur et sa Diète sont au fond du fjord. Je garde ma chaîne dans un mouchoir. Certains matins, elle est mouillée.",
 "pal": [
  "Le château pèse sur la glace : chaînes tendues du rempart au fjord, serfs en rangs immobiles, et la Diète qui siège sous un dais noir.",
  "Les chaînes d'argent se multiplient aux cous ; le château s'arme, et les serfs polissent leurs maillons en silence sur la glace.",
  "Fjord pris sous un château gothique à flèches noires : une salle de Diète au bord de l'eau, et des maisons de serfs sur la grève.",
  "Les chaînes tombent sur la glace par poignées ; les serfs marchent où ils veulent, et la glace craque sous le château.",
  "Le château a sombré : une crevasse noire à sa place, des chaînes éparses sur la glace, et des gens qui patinent au-dessus en riant."
 ],
 "pm": "Tyrannie",
 "pp": "Liberté"
}
```

### Pôle − Tyrannie

Progression : la chaîne polie, la chaîne au cou, la loi de la Diète, le dais noir, la loi du seigneur, les maillons comptés, puis le château sur la glace. Style : chaque carte fait piocher, comme un seigneur qui distribue ; ce qu'on jette en prix nourrit la carte suivante, et le seigneur rend les coups. Prix : défausse ou exil, sur les 7 cartes.

```json
[
{"id": "ASS011-moins-1", "zone": "ASS011", "pole": "-", "palier": 1, "nom": "Loi de la chaîne polie", "cout": 1, "cible": 0, "effet": "Loi : piochez 2 cartes. Riposte 2. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["riposte", 2], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Riposte", "Prix"], "ambiance": "Chaque serf de Kettenfjord polit sa chaîne la veille de la Diète, et le seigneur la regarde de près.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ASS011-moins-2", "zone": "ASS011", "pole": "-", "palier": 2, "nom": "La chaîne au cou", "cout": 1, "cible": 1, "effet": "Piochez 1 carte. La cible subit 8 dégâts. Si une carte a déjà été défaussée en prix ce tour : la cible subit 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["pioche", 1], ["deg", "cible", 8], ["si", "defausseAPrix", [["deg", "cible", 6]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Pioche", "Dégâts", "Condition", "Prix"], "ambiance": "La chaîne est si fine qu'on l'oublie ; on ne l'oublie plus quand le seigneur tire dessus.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS011-moins-3", "zone": "ASS011", "pole": "-", "palier": 3, "nom": "Loi de la Diète", "cout": 1, "cible": 1, "effet": "Loi : piochez 2 cartes. Exil. La cible hésite. Gagnez 1 mana de Glace. Riposte 1.", "ops": [["pioche", 2], ["exil"], ["hesite", "cible"], ["mana", "Glace", 1], ["riposte", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Exil", "Contrôle", "Mana", "Riposte"], "ambiance": "La Diète de Kettenfjord vote debout sur la glace, et le seigneur compte les voix à l'oreille.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS011-moins-4", "zone": "ASS011", "pole": "-", "palier": 4, "nom": "Le dais noir", "cout": 2, "cible": 1, "effet": "Piochez 2 cartes. La cible subit 12 dégâts. Si une carte a déjà été défaussée en prix ce tour : tous les ennemis subissent 5 dégâts. Défaussez 1 carte au hasard. Riposte 3.", "ops": [["pioche", 2], ["deg", "cible", 12], ["si", "defausseAPrix", [["deg", "tous", 5]]], ["prixDefausse", 1], ["riposte", 3]], "tags": ["Assemblée", "Glace", "Pôle −", "Pioche", "Dégâts", "Condition", "Prix", "Riposte"], "ambiance": "Sous le dais noir, le seigneur ne bouge pas de la séance ; on dit qu'il ne cligne pas des yeux.", "budget": "28,5 (cible 28, écart +2 % ; vérifié au script)"},
{"id": "ASS011-moins-5", "zone": "ASS011", "pole": "-", "palier": 5, "nom": "Loi du seigneur", "cout": 2, "cible": 1, "effet": "Loi : piochez 2 cartes. Tous les ennemis subissent 4 dégâts. Exil. Le héros gagne 12 de garde. La cible est marquée 2.", "ops": [["pioche", 2], ["deg", "tous", 4], ["exil"], ["garde", "heros", 12], ["vulnerable", "cible", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Dégâts", "Exil", "Garde", "Marque"], "ambiance": "La loi du seigneur est écrite sur une plaque d'argent qu'on ne lit qu'à genoux, sur la glace.", "budget": "29,4 (cible 32, écart -8 % ; vérifié au script)"},
{"id": "ASS011-moins-6", "zone": "ASS011", "pole": "-", "palier": 6, "nom": "Les maillons comptés", "cout": 2, "cible": 1, "effet": "Piochez 1 carte. La cible subit 16 dégâts. Reprenez en main la dernière carte de la défausse. Défaussez 1 carte au hasard. Riposte 3. Gagnez 2 mana de Glace.", "ops": [["pioche", 1], ["deg", "cible", 16], ["recup"], ["prixDefausse", 1], ["riposte", 3], ["mana", "Glace", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Pioche", "Dégâts", "Récupération", "Prix", "Riposte", "Mana"], "ambiance": "Le bailli compte les maillons de chaque chaîne ; un maillon de moins, et le serf paie la Diète.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS011-moins-7", "zone": "ASS011", "pole": "-", "palier": 7, "nom": "Le Château sur la glace", "cout": 3, "cible": 1, "effet": "Le seigneur tient tout. Piochez 3 cartes. La cible est marquée 2, hésite et subit 20 dégâts. Héros +14 de garde. Défaussez 2 cartes au hasard. Exil. Pose Sceau. Si Racine (consommée) : piochez 2 ; la cible subit 14 dégâts et est marquée 3.", "ops": [["pioche", 3], ["vulnerable", "cible", 2], ["hesite", "cible"], ["deg", "cible", 20], ["garde", "heros", 14], ["prixDefausse", 2], ["exil"], ["pose", "Sceau"], ["reveil", "Racine", true, [["pioche", 2], ["deg", "cible", 14], ["vulnerable", "cible", 3]]]], "tags": ["Assemblée", "Glace", "Forme ultime −7", "Pioche", "Marque", "Contrôle", "Dégâts", "Garde", "Prix", "Exil", "Pose Sceau", "Réveil Racine"], "ambiance": "Le château de Kettenfjord était bâti sur la glace, et la glace a tenu tant que les chaînes ont tenu.", "budget": "45,2 (+31 si Racine, soit +69 % ; vérifié au script)"}
]
```

### Pôle + Liberté

Progression : la chaîne qui tombe, la loi d'abolition, les serfs sur la glace, la glace qui craque, les chemins ouverts, le patin sur la crevasse, puis le fjord libre. Style : chaque carte arme les maîtres (garde ennemie), et les cartes suivantes frappent plus fort ce qui a de la garde (crochet `cibleGarde` sur 4 cartes, toujours lu avant le prix) ; on reprend ce qu'on avait jeté. Prix : garde ennemie, sur les 7 cartes.

```json
[
{"id": "ASS011-plus-1", "zone": "ASS011", "pole": "+", "palier": 1, "nom": "La chaîne qui tombe", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : la cible subit 8 dégâts. Reprenez en main la dernière carte de la défausse. Gagnez 1 mana de Glace. Chaque ennemi gagne 1 de garde.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["recup"], ["mana", "Glace", 1], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts", "Récupération", "Mana", "Prix"], "ambiance": "Les chaînes ôtées tombent sur la glace avec un bruit de grelot, et personne n'ose les ramasser.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ASS011-plus-2", "zone": "ASS011", "pole": "+", "palier": 2, "nom": "Loi d'abolition", "cout": 1, "cible": 1, "effet": "Loi : la cible perd sa garde. Gagnez 2 mana de Glace. Tous les ennemis subissent 3 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["briseGarde", "cible"], ["mana", "Glace", 2], ["deg", "tous", 3], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Perce-garde", "Mana", "Dégâts", "Prix"], "ambiance": "La Diète a voté l'abolition un matin de grand froid ; le seigneur a signé sans ôter ses gants.", "budget": "13,6 (cible 12,5, écart +9 % ; vérifié au script)"},
{"id": "ASS011-plus-3", "zone": "ASS011", "pole": "+", "palier": 3, "nom": "Les serfs sur la glace", "cout": 1, "cible": 1, "effet": "2 coups de 3 dégâts au hasard. Riposte 4. La cible est marquée 1. Chaque ennemi gagne 1 de garde.", "ops": [["deg", "hasard", 3, 2], ["riposte", 4], ["vulnerable", "cible", 1], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Dégâts", "Riposte", "Marque", "Prix"], "ambiance": "Les serfs libérés marchent sur la glace dans tous les sens, comme pour vérifier qu'ils le peuvent.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS011-plus-4", "zone": "ASS011", "pole": "+", "palier": 4, "nom": "La glace qui craque", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : la cible subit 16 dégâts. La cible subit 12 dégâts. Reprenez en main la dernière carte de la défausse. Le héros gagne 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "cibleGarde", [["deg", "cible", 16]]], ["deg", "cible", 12], ["recup"], ["garde", "heros", 6], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts", "Récupération", "Garde", "Prix"], "ambiance": "Le soir de l'abolition, la glace craque sous le château avec un bruit de chaîne qu'on tire.", "budget": "26,8 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS011-plus-5", "zone": "ASS011", "pole": "+", "palier": 5, "nom": "Loi des chemins ouverts", "cout": 2, "cible": 0, "effet": "Loi : piochez 2 cartes. Tous les ennemis perdent leur garde. Tous les ennemis subissent 4 dégâts. Le héros se soigne de 6. Chaque ennemi gagne 1 de garde.", "ops": [["pioche", 2], ["briseGarde", "tous"], ["deg", "tous", 4], ["soin", "heros", 6], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Pioche", "Perce-garde", "Dégâts", "Soin", "Prix"], "ambiance": "La loi ouvre tous les chemins du fjord, même celui qui passe sur la crevasse, et surtout celui-là.", "budget": "27,4 (cible 32, écart -14 % ; vérifié au script)"},
{"id": "ASS011-plus-6", "zone": "ASS011", "pole": "+", "palier": 6, "nom": "Le patin sur la crevasse", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : la cible subit 18 dégâts. Reprenez en main la dernière carte de la défausse. La cible subit 14 dégâts. Riposte 3. Chaque ennemi gagne 1 de garde.", "ops": [["si", "cibleGarde", [["deg", "cible", 18]]], ["recup"], ["deg", "cible", 14], ["riposte", 3], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts", "Récupération", "Riposte", "Prix"], "ambiance": "Les enfants de Kettenfjord patinent au-dessus du château englouti, et regardent sous leurs pieds en riant.", "budget": "31 (cible 36, écart -14 % ; vérifié au script)"},
{"id": "ASS011-plus-7", "zone": "ASS011", "pole": "+", "palier": 7, "nom": "Le Fjord libre", "cout": 3, "cible": 1, "effet": "Le château n'est plus là. Si la cible a de la garde : elle la perd, 24 dégâts. Puis 18 dégâts. Piochez 2. Héros +12 de garde ; ennemis +2. Pose Braise. Si Sceau (consommé) : la cible perd sa garde et subit 16 ; héros +12 de garde.", "ops": [["si", "cibleGarde", [["deg", "cible", 24], ["briseGarde", "cible"]]], ["deg", "cible", 18], ["pioche", 2], ["garde", "heros", 12], ["ennemiGarde", 2], ["pose", "Braise"], ["reveil", "Sceau", true, [["deg", "cible", 16], ["briseGarde", "cible"], ["garde", "heros", 12]]]], "tags": ["Assemblée", "Glace", "Forme ultime +7", "Condition", "Dégâts", "Perce-garde", "Pioche", "Garde", "Prix", "Pose Braise", "Réveil Sceau"], "ambiance": "Jost Ammerer garde sa chaîne dans un mouchoir ; certains matins, elle est mouillée, et serrée.", "budget": "45,1 (+28,6 si Sceau, soit +63 % ; vérifié au script)"}
]
```

---

## L'Ibandla de Kwesine (ASS133 · Assemblée · Cité en ruines · Pierre · zouloue)

```json
{
 "fiche": "ASS133",
 "nom": "L'Ibandla de Kwesine",
 "recit": "Sobantu tenait le rang devant les murs effondrés de Kwesine quand les vieux de l'ibandla sortirent des ruines en hurlant, les yeux blancs, sans armes. On disait que l'ibandla siégeait là depuis toujours ; personne ne l'avait jamais vu siéger. Sobantu fit serrer les boucliers. Le rang tint. Les vieux se jetèrent dessus jusqu'au soir. On en compta vingt-trois, couchés devant les boucliers. Au matin, l'ibandla siégeait de nouveau dans le cercle des ruines, au complet, et il regardait le rang.",
 "pal": [
  "Les ruines tournent en tempête de poussière ; des vieillards hurlent entre les murs qui tombent, et plus rien ne tient debout ni en rang.",
  "Les pierres roulent des murs ; des cris montent des ruines la nuit, et le sentier change de place entre deux pas.",
  "Cité de pierre sèche en ruines sur une colline : enclos ronds effondrés, un grand cercle d'assemblée vide, et de l'herbe entre les pierres.",
  "Les murs se relèvent pierre à pierre ; des rangs de boucliers blancs et noirs se tiennent sur les remparts, sans bouger.",
  "Toute la cité est un mur de boucliers : des guerriers en cercles parfaits jusqu'à l'horizon, immobiles, et pas une pierre qui dépasse."
 ],
 "pm": "Chaos",
 "pp": "Ordre"
}
```

### Pôle − Chaos

Progression : le vieux qui hurle, la pierre qui roule, le sentier qui change, les yeux blancs, les murs qui tombent, la furie de l'ibandla, puis la ruine qui hurle. Style : chaque carte coûte des PV ; une fois le héros sous la moitié de ses PV, les cartes frappent plus fort (crochet `blesse` sur 4 cartes), et les pierres tombent au hasard. Prix : PV, sur les 7 cartes.

```json
[
{"id": "ASS133-moins-1", "zone": "ASS133", "pole": "-", "palier": 1, "nom": "Le vieux qui hurle", "cout": 1, "cible": 1, "effet": "La cible subit 6 dégâts. Si le héros est sous la moitié de ses PV : la cible subit 6 dégâts. Gagnez 1 mana de Pierre. Le héros perd 1 PV.", "ops": [["deg", "cible", 6], ["si", "blesse", [["deg", "cible", 6]]], ["mana", "Pierre", 1], ["prixPV", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Condition", "Mana", "Prix"], "ambiance": "Les vieux de l'ibandla hurlent sans reprendre leur souffle, et leur cri ne s'arrête pas quand ils tombent.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "ASS133-moins-2", "zone": "ASS133", "pole": "-", "palier": 2, "nom": "La pierre qui roule", "cout": 1, "cible": 1, "effet": "Tous les ennemis subissent 3 dégâts. La cible hésite. Riposte 1. Le héros perd 1 PV.", "ops": [["deg", "tous", 3], ["hesite", "cible"], ["riposte", 1], ["prixPV", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Contrôle", "Riposte", "Prix"], "ambiance": "À Kwesine, une pierre roule du mur chaque nuit ; au matin, elle est remontée à sa place.", "budget": "12,6 (cible 12,5, écart +1 % ; vérifié au script)"},
{"id": "ASS133-moins-3", "zone": "ASS133", "pole": "-", "palier": 3, "nom": "Le sentier qui change", "cout": 1, "cible": 0, "effet": "3 coups de 3 dégâts au hasard. Le héros se soigne de 4. Gagnez 1 mana de Pierre. Le héros perd 1 PV.", "ops": [["deg", "hasard", 3, 3], ["soin", "heros", 4], ["mana", "Pierre", 1], ["prixPV", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Soin", "Mana", "Prix"], "ambiance": "Le sentier des ruines change de place entre deux pas ; Sobantu fait marcher ses hommes en se tenant l'épaule.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS133-moins-4", "zone": "ASS133", "pole": "-", "palier": 4, "nom": "Les yeux blancs", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : la cible subit 16 dégâts. La cible subit 10 dégâts. La cible brûle : 2 dégâts au début de ses 3 prochains tours. La cible est marquée 2. Le héros perd 2 PV.", "ops": [["si", "blesse", [["deg", "cible", 16]]], ["deg", "cible", 10], ["brulure", "cible", 2, 3], ["vulnerable", "cible", 2], ["prixPV", 2]], "tags": ["Assemblée", "Pierre", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Marque", "Prix"], "ambiance": "Les vieux de l'ibandla ont les yeux blancs, sans pupille, et ils ne se trompent jamais de cible.", "budget": "28 (cible 28, écart +0 % ; vérifié au script)"},
{"id": "ASS133-moins-5", "zone": "ASS133", "pole": "-", "palier": 5, "nom": "Les murs qui tombent", "cout": 2, "cible": 0, "effet": "Tous les ennemis subissent 5 dégâts. 3 coups de 3 dégâts au hasard. Riposte 4. Reprenez en main la dernière carte de la défausse. Le héros perd 3 PV.", "ops": [["deg", "tous", 5], ["deg", "hasard", 3, 3], ["riposte", 4], ["recup"], ["prixPV", 3]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts", "Riposte", "Récupération", "Prix"], "ambiance": "Les murs de Kwesine tombent vers l'intérieur, toujours, comme si quelque chose les tirait du cercle.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ASS133-moins-6", "zone": "ASS133", "pole": "-", "palier": 6, "nom": "La furie de l'ibandla", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : tous les ennemis subissent 8 dégâts. Le héros se soigne de 8. La cible subit 14 dégâts. Le héros gagne 8 de garde. La cible brûle : 2 dégâts au début de ses 2 prochains tours. Le héros perd 3 PV.", "ops": [["si", "blesse", [["deg", "tous", 8], ["soin", "heros", 8]]], ["deg", "cible", 14], ["garde", "heros", 8], ["brulure", "cible", 2, 2], ["prixPV", 3]], "tags": ["Assemblée", "Pierre", "Pôle −", "Condition", "Dégâts", "Soin", "Garde", "Dégâts dans le temps", "Prix"], "ambiance": "Les blessés du rang de Sobantu ne se couchent pas ; ils se relèvent en hurlant, comme les vieux.", "budget": "34,2 (cible 36, écart -5 % ; vérifié au script)"},
{"id": "ASS133-moins-7", "zone": "ASS133", "pole": "-", "palier": 7, "nom": "La Ruine qui hurle", "cout": 3, "cible": 1, "effet": "Plus rien ne tient. Si le héros est sous la moitié de ses PV : la cible subit 24 et hésite. 4 coups de 4 au hasard. La cible subit 16. Héros +10 de garde, −5 PV. Pose Abîme. Si Braise (consommée) : 4 coups de 4 au hasard ; la cible hésite, marquée 3.", "ops": [["si", "blesse", [["deg", "cible", 24], ["hesite", "cible"]]], ["deg", "hasard", 4, 4], ["deg", "cible", 16], ["garde", "heros", 10], ["prixPV", 5], ["pose", "Abîme"], ["reveil", "Braise", true, [["deg", "hasard", 4, 4], ["hesite", "cible"], ["vulnerable", "cible", 3]]]], "tags": ["Assemblée", "Pierre", "Forme ultime −7", "Condition", "Dégâts", "Contrôle", "Garde", "Prix", "Pose Abîme", "Réveil Braise"], "ambiance": "Le soir, dans le cercle des ruines, on compte les vieux de l'ibandla ; le compte change chaque soir.", "budget": "49,5 (+30 si Braise, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Ordre

Progression : le premier bouclier, le rang serré, les cornes du buffle, le mur qui tient, les boucliers blancs et noirs, Sobantu qui ne recule pas, puis la cité des boucliers. Style : une carte lève la garde du héros, la suivante frappe tant que la garde tient (crochet `garde`, jamais lu après la garde de la même carte) ; le mur rend les coups. Prix : défausse, sur les 7 cartes.

```json
[
{"id": "ASS133-plus-1", "zone": "ASS133", "pole": "+", "palier": 1, "nom": "Le premier bouclier", "cout": 1, "cible": 0, "effet": "Le héros gagne 6 de garde. 2 coups de 2 dégâts au hasard. Gagnez 1 mana de Pierre. Défaussez 1 carte au hasard.", "ops": [["garde", "heros", 6], ["deg", "hasard", 2, 2], ["mana", "Pierre", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Garde", "Dégâts", "Mana", "Prix"], "ambiance": "Le bouclier de Sobantu est en peau de bœuf blanche tachée de noir ; il le porte depuis l'enfance.", "budget": "8,8 (cible 10, écart -12 % ; vérifié au script)"},
{"id": "ASS133-plus-2", "zone": "ASS133", "pole": "+", "palier": 2, "nom": "Le rang serré", "cout": 1, "cible": 1, "effet": "Si vous avez déjà de la garde : la cible subit 10 dégâts. La cible perd sa garde. Riposte 2. Le héros gagne 4 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "garde", [["deg", "cible", 10]]], ["briseGarde", "cible"], ["riposte", 2], ["garde", "heros", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Riposte", "Garde", "Prix"], "ambiance": "Les boucliers se touchent bord à bord ; entre eux, on ne passerait pas une lame de sagaie.", "budget": "12,2 (cible 12,5, écart -2 % ; vérifié au script)"},
{"id": "ASS133-plus-3", "zone": "ASS133", "pole": "+", "palier": 3, "nom": "Les cornes du buffle", "cout": 1, "cible": 1, "effet": "Tous les ennemis subissent 4 dégâts. 3 coups de 2 dégâts au hasard. La cible est marquée 1. Défaussez 1 carte au hasard.", "ops": [["deg", "tous", 4], ["deg", "hasard", 2, 3], ["vulnerable", "cible", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Dégâts", "Marque", "Prix"], "ambiance": "Les deux cornes du rang se referment sur les ruines, lentement, comme les bras de quelqu'un qui compte.", "budget": "14,8 (cible 15, écart -1 % ; vérifié au script)"},
{"id": "ASS133-plus-4", "zone": "ASS133", "pole": "+", "palier": 4, "nom": "Le mur tient", "cout": 2, "cible": 1, "effet": "Si vous avez déjà de la garde : riposte 6. Le héros gagne 14 de garde. La cible brûle : 3 dégâts au début de ses 3 prochains tours. La cible est marquée 1. Défaussez 1 carte au hasard.", "ops": [["si", "garde", [["riposte", 6]]], ["garde", "heros", 14], ["brulure", "cible", 3, 3], ["vulnerable", "cible", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Condition", "Riposte", "Garde", "Dégâts dans le temps", "Marque", "Prix"], "ambiance": "Le rang de Sobantu tient sous les coups des vieux jusqu'au soir, sans un pas en arrière.", "budget": "26,2 (cible 28, écart -6 % ; vérifié au script)"},
{"id": "ASS133-plus-5", "zone": "ASS133", "pole": "+", "palier": 5, "nom": "Les boucliers blancs et noirs", "cout": 2, "cible": 1, "effet": "Si vous avez déjà de la garde : la cible subit 16 dégâts. Tous les ennemis hésitent. La cible est marquée 2. Reprenez en main la dernière carte de la défausse. Riposte 3. Défaussez 1 carte au hasard.", "ops": [["si", "garde", [["deg", "cible", 16]]], ["hesite", "tous"], ["vulnerable", "cible", 2], ["recup"], ["riposte", 3], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Condition", "Dégâts", "Contrôle", "Marque", "Récupération", "Riposte", "Prix"], "ambiance": "Sur les remparts relevés de Kwesine, les boucliers se tiennent seuls, alignés, et personne ne les porte.", "budget": "29,8 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "ASS133-plus-6", "zone": "ASS133", "pole": "+", "palier": 6, "nom": "Sobantu ne recule pas", "cout": 2, "cible": 1, "effet": "Le héros gagne 12 de garde. La cible subit 14 dégâts. Riposte 4. Gagnez 1 mana de Pierre. Défaussez 1 carte au hasard.", "ops": [["garde", "heros", 12], ["deg", "cible", 14], ["riposte", 4], ["mana", "Pierre", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Garde", "Dégâts", "Riposte", "Mana", "Prix"], "ambiance": "Sobantu ne recule pas ; ses hommes disent qu'il ne sait plus comment on fait.", "budget": "31,6 (cible 36, écart -12 % ; vérifié au script)"},
{"id": "ASS133-plus-7", "zone": "ASS133", "pole": "+", "palier": 7, "nom": "La Cité des boucliers", "cout": 3, "cible": 1, "effet": "Le rang ne finit plus. Si vous avez déjà de la garde : tous subissent 8 dégâts et perdent leur garde. La cible subit 22 et hésite. Héros soigné de 12. Défaussez 2 cartes. Pose Racine. Si Abîme (consommé) : la cible subit 20 ; tous hésitent.", "ops": [["si", "garde", [["deg", "tous", 8], ["briseGarde", "tous"]]], ["deg", "cible", 22], ["hesite", "cible"], ["soin", "heros", 12], ["prixDefausse", 2], ["pose", "Racine"], ["reveil", "Abîme", true, [["deg", "cible", 20], ["hesite", "tous"]]]], "tags": ["Assemblée", "Pierre", "Forme ultime +7", "Condition", "Dégâts", "Perce-garde", "Contrôle", "Soin", "Prix", "Pose Racine", "Réveil Abîme"], "ambiance": "Dans la cité des boucliers, l'ibandla siège au centre du cercle, et le cercle le garde, ou le tient.", "budget": "45,1 (+28,8 si Abîme, soit +64 % ; vérifié au script)"}
]
```

---

## Le Jharokha de Zamharir (ASS106 · Assemblée · Toundra · Glace · moghole)

*Note du critique (lot 7) : Tempête (−) n'avait qu'un crochet d'intention ennemie (`vol`, 4 cartes) sur une mosaïque d'appoints. Le crochet devient `blesse` sur les mêmes 4 cartes : le pôle paie des PV sur 7 cartes (le gouverneur qui siège face au blizzard) et en profite.*

```json
{
 "fiche": "ASS106",
 "nom": "Le Jharokha de Zamharir",
 "recit": "Firman de l'empereur, lu au balcon de Zamharir : « Que Khwaja Ayaz, gouverneur des neiges, tienne chaque matin la séance du balcon, quel que soit le vent. Qu'il siège face au nord. Qu'on ne ferme pas les volets. » Ayaz a obéi jusqu'à sa mort. Les secrétaires le trouvaient chaque matin assis au jharokha, raide de givre, l'encrier gelé. Le firman n'a jamais été révoqué. On tient encore la séance devant le balcon vide, et les requêtes s'envolent dans le blizzard. Certaines reviennent signées.",
 "pal": [
  "Le blizzard a pris le palais : les volets battent, les tapis volent au-dessus de la toundra, et le balcon n'est plus qu'un trou blanc.",
  "Le vent se lève sur Zamharir ; les requêtes s'envolent des mains, les chameaux se couchent dos au nord, et la neige entre au balcon.",
  "Toundra plate sous un ciel gris : un palais de grès à balcon ajouré, des tentes de feutre autour, et un vent qui ne faiblit jamais.",
  "Le vent tombe ; les tentes se serrent autour du palais, les volets s'ouvrent, et la séance se tient dans un air immobile.",
  "Calme parfait sur la toundra : la neige tombe droite, les fumées montent en fils, et la cour attend, assise, au pied du balcon vide."
 ],
 "pm": "Tempête",
 "pp": "Calme"
}
```

### Pôle − Tempête

Progression : la loi du balcon ouvert, les requêtes envolées, le chameau dos au nord, la loi des volets, le blizzard au palais, les tapis qui volent, puis le balcon blanc. Style : le vent use l'attaque des ennemis (affaiblissement sur 4 cartes) et jette des coups au hasard ; ce qui vole est abattu (crochet `vol` sur 4 cartes). Prix : le froid prend le corps (PV), sur les 7 cartes.

```json
[
{"id": "ASS106-moins-1", "zone": "ASS106", "pole": "-", "palier": 1, "nom": "Loi du balcon ouvert", "cout": 1, "cible": 1, "effet": "Loi : si le héros a moins de la moitié de ses PV : la cible subit 8 dégâts. La cible perd 1 d'attaque. Gagnez 1 mana de Glace. Le héros perd 1 PV.", "ops": [["si", "blesse", [["deg", "cible", 8]]], ["affaiblit", "cible", 1], ["mana", "Glace", 1], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Condition", "Dégâts", "Affaiblissement", "Mana", "Prix"], "ambiance": "Le firman interdit de fermer les volets du jharokha ; le vent de Zamharir entre au palais comme chez lui.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ASS106-moins-2", "zone": "ASS106", "pole": "-", "palier": 2, "nom": "Les requêtes envolées", "cout": 1, "cible": 1, "effet": "4 coups de 2 dégâts au hasard. La cible perd 1 d'attaque. Gagnez 1 mana de Glace. Le héros perd 1 PV.", "ops": [["deg", "hasard", 2, 4], ["affaiblit", "cible", 1], ["mana", "Glace", 1], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Dégâts", "Affaiblissement", "Mana", "Prix"], "ambiance": "Les requêtes des sujets s'envolent du balcon dans le blizzard ; on en retrouve au printemps, très loin, pliées.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ASS106-moins-3", "zone": "ASS106", "pole": "-", "palier": 3, "nom": "Le chameau dos au nord", "cout": 1, "cible": 1, "effet": "3 coups de 3 dégâts au hasard. Le héros gagne 6 de garde. Si le héros a moins de la moitié de ses PV : la cible subit 6 dégâts. Le héros perd 1 PV.", "ops": [["deg", "hasard", 3, 3], ["garde", "heros", 6], ["si", "blesse", [["deg", "cible", 6]]], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Dégâts", "Garde", "Condition", "Prix"], "ambiance": "Les chameaux de Bactriane se couchent dos au nord quand le vent se lève, et ne se relèvent qu'après.", "budget": "15,8 (cible 15, écart +5 % ; vérifié au script)"},
{"id": "ASS106-moins-4", "zone": "ASS106", "pole": "-", "palier": 4, "nom": "Loi des volets", "cout": 2, "cible": 1, "effet": "Loi : si le héros a moins de la moitié de ses PV : la cible subit 16 dégâts. Tous les ennemis subissent 4 dégâts. La cible perd 2 d'attaque. Gagnez 2 mana de Glace. Le héros perd 2 PV.", "ops": [["si", "blesse", [["deg", "cible", 16]]], ["deg", "tous", 4], ["affaiblit", "cible", 2], ["mana", "Glace", 2], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Condition", "Dégâts", "Affaiblissement", "Mana", "Prix"], "ambiance": "Les volets du balcon battent toute la nuit, et les secrétaires comptent les coups pour savoir l'heure.", "budget": "26,8 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS106-moins-5", "zone": "ASS106", "pole": "-", "palier": 5, "nom": "Le blizzard au palais", "cout": 2, "cible": 1, "effet": "4 coups de 3 dégâts au hasard. Tous les ennemis subissent 4 dégâts. Riposte 3. La cible est marquée 2. Le héros perd 2 PV.", "ops": [["deg", "hasard", 3, 4], ["deg", "tous", 4], ["riposte", 3], ["vulnerable", "cible", 2], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Dégâts", "Riposte", "Marque", "Prix"], "ambiance": "Le blizzard entre au palais par le balcon ouvert et ressort par les cuisines, avec les tapis.", "budget": "30,8 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "ASS106-moins-6", "zone": "ASS106", "pole": "-", "palier": 6, "nom": "Les tapis qui volent", "cout": 2, "cible": 1, "effet": "Si le héros a moins de la moitié de ses PV : la cible subit 20 dégâts. La cible subit 12 dégâts. La cible hésite. Riposte 4. Le héros perd 2 PV.", "ops": [["si", "blesse", [["deg", "cible", 20]]], ["deg", "cible", 12], ["hesite", "cible"], ["riposte", 4], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Dégâts", "Contrôle", "Riposte", "Prix"], "ambiance": "Les tapis de la salle d'audience volent au-dessus de la toundra, et les nomades les ramènent sans un mot.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS106-moins-7", "zone": "ASS106", "pole": "-", "palier": 7, "nom": "Le Balcon blanc", "cout": 3, "cible": 0, "effet": "Le vent siège au balcon. Tous les ennemis subissent 7 dégâts et perdent 2 d'attaque. 4 coups de 4 dégâts au hasard. Le héros gagne 10 de garde et perd 4 PV. Pose Givre. Si Sceau (consommé) : tous les ennemis subissent 8 dégâts et perdent 2 d'attaque.", "ops": [["deg", "tous", 7], ["affaiblit", "tous", 2], ["deg", "hasard", 4, 4], ["garde", "heros", 10], ["prixPV", 4], ["pose", "Givre"], ["reveil", "Sceau", true, [["deg", "tous", 8], ["affaiblit", "tous", 2]]]], "tags": ["Assemblée", "Glace", "Forme ultime −7", "Dégâts", "Affaiblissement", "Garde", "Prix", "Pose Givre", "Réveil Sceau"], "ambiance": "Au balcon blanc de Zamharir, Khwaja Ayaz siège encore, face au nord, et le vent lui lit les requêtes.", "budget": "48,6 (+30,8 si Sceau, soit +63 % ; vérifié au script)"}
]
```

### Pôle + Calme

Progression : la loi du vent tombé, les tentes serrées, la fumée droite, la loi de la séance, la neige qui tombe droit, la cour assise, puis le calme de Zamharir. Style : chaque carte serre le camp (garde des alliés sur les 7 cartes) et reprend une carte jetée (récupération sur 4) ; ce qu'on a jeté en prix rend la carte suivante plus forte. Prix : défausse, sur les 7 cartes.

```json
[
{"id": "ASS106-plus-1", "zone": "ASS106", "pole": "+", "palier": 1, "nom": "Loi du vent tombé", "cout": 1, "cible": 0, "effet": "Loi : vos alliés gagnent 5 de garde. Reprenez en main la dernière carte de la défausse. Gagnez 1 mana de Glace. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 5], ["recup"], ["mana", "Glace", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Garde", "Récupération", "Mana", "Prix"], "ambiance": "Quand le vent tombe sur Zamharir, la loi veut qu'on se taise, pour ne pas le réveiller.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS106-plus-2", "zone": "ASS106", "pole": "+", "palier": 2, "nom": "Les tentes serrées", "cout": 1, "cible": 1, "effet": "Vos alliés gagnent 6 de garde. Si une carte a déjà été défaussée en prix ce tour : le héros se soigne de 6. La cible subit 5 dégâts. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 6], ["si", "defausseAPrix", [["soin", "heros", 6]]], ["deg", "cible", 5], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Garde", "Condition", "Soin", "Dégâts", "Prix"], "ambiance": "Les tentes de feutre se serrent autour du palais, si près que les cordes se croisent.", "budget": "12,2 (cible 12,5, écart -2 % ; vérifié au script)"},
{"id": "ASS106-plus-3", "zone": "ASS106", "pole": "+", "palier": 3, "nom": "La fumée droite", "cout": 1, "cible": 1, "effet": "Vos alliés gagnent 6 de garde. Reprenez en main la dernière carte de la défausse. La cible hésite. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 6], ["recup"], ["hesite", "cible"], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Garde", "Récupération", "Contrôle", "Prix"], "ambiance": "Les jours de calme, la fumée des tentes monte droite comme un fil, et personne ne sort la regarder.", "budget": "13,2 (cible 15, écart -12 % ; vérifié au script)"},
{"id": "ASS106-plus-4", "zone": "ASS106", "pole": "+", "palier": 4, "nom": "Loi de la séance", "cout": 2, "cible": 1, "effet": "Loi : vos alliés gagnent 12 de garde. La cible subit 10 dégâts. Reprenez en main la dernière carte de la défausse. Piochez 1 carte. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 12], ["deg", "cible", 10], ["recup"], ["pioche", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Garde", "Dégâts", "Récupération", "Pioche", "Prix"], "ambiance": "La séance du balcon se tient chaque matin, et chacun y parle bas, face au balcon vide.", "budget": "29,4 (cible 28, écart +5 % ; vérifié au script)"},
{"id": "ASS106-plus-5", "zone": "ASS106", "pole": "+", "palier": 5, "nom": "La neige qui tombe droit", "cout": 2, "cible": 1, "effet": "Vos alliés gagnent 12 de garde. Si une carte a déjà été défaussée en prix ce tour : tous les ennemis subissent 6 dégâts. La cible subit 12 dégâts. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 12], ["si", "defausseAPrix", [["deg", "tous", 6]]], ["deg", "cible", 12], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Garde", "Condition", "Dégâts", "Prix"], "ambiance": "À Zamharir, la neige des jours calmes tombe si droit qu'on voit chaque flocon de haut en bas.", "budget": "30 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ASS106-plus-6", "zone": "ASS106", "pole": "+", "palier": 6, "nom": "La cour assise", "cout": 2, "cible": 0, "effet": "Vos alliés gagnent 14 de garde. Vos alliés se soignent de 6. Riposte 4. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 14], ["soin", "allies", 6], ["riposte", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Garde", "Soin", "Riposte", "Prix"], "ambiance": "La cour de Zamharir attend assise sur les tapis, au pied du balcon, sans bouger depuis l'aube.", "budget": "30,8 (cible 36, écart -14 % ; vérifié au script)"},
{"id": "ASS106-plus-7", "zone": "ASS106", "pole": "+", "palier": 7, "nom": "Le Calme de Zamharir", "cout": 3, "cible": 1, "effet": "Le vent ne revient pas. Vos alliés gagnent 20 de garde. La cible subit 16 dégâts. Tous les ennemis hésitent. Reprenez la dernière carte défaussée, puis défaussez 2 cartes au hasard. Pose Abîme. Si Givre (consommé) : alliés +14 de garde, soignés de 8.", "ops": [["garde", "allies", 20], ["deg", "cible", 16], ["hesite", "tous"], ["recup"], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Givre", true, [["garde", "allies", 14], ["soin", "allies", 8]]]], "tags": ["Assemblée", "Glace", "Forme ultime +7", "Garde", "Dégâts", "Contrôle", "Récupération", "Prix", "Pose Abîme", "Réveil Givre"], "ambiance": "Le calme de Zamharir est si profond qu'on entend la neige se poser, et quelque chose respirer au balcon.", "budget": "46,8 (+28,8 si Givre, soit +62 % ; vérifié au script)"}
]
```

---

## Le Yoriai de Kurayabu (ASS019 · Assemblée · Jungle · Sève · japonaise féodale)

```json
{
 "fiche": "ASS019",
 "nom": "Le Yoriai de Kurayabu",
 "recit": "« Pourquoi les lanternes, maître ? » demanda Tama. Kogure Sōan alluma la dernière et la posa au bord du cercle. « Le yoriai de Kurayabu se tient la nuit, dans la clairière. Tant qu'on est dans la lumière, on peut parler. » « Et hors de la lumière ? » « On écoute. » Tama regarda le fourré, où quelque chose remuait. « Qui parle, là-bas ? » Sōan ne répondit pas. Il régla la mèche. Au matin, Tama remarqua qu'il y avait une natte de plus dans le cercle, et que personne ne s'y asseyait.",
 "pal": [
  "La jungle a mangé la clairière : noir complet sous les fougères, des voix basses partout dans le fourré, et pas une lanterne qui tienne.",
  "Les ombres avancent sur la clairière ; les lanternes s'éteignent une à une, et des pas tournent autour du cercle des nattes.",
  "Clairière dans une jungle épaisse : un cercle de nattes, des lanternes de papier sur des perches, et un sanctuaire couvert de mousse.",
  "Les lanternes se multiplient sur les perches ; le cercle s'élargit dans leur lumière, et le fourré recule d'un pas chaque nuit.",
  "Les lanternes font un jour sans soleil : la jungle est éclairée jusqu'aux racines, et aucune ombre ne reste sous les feuilles."
 ],
 "pm": "Ombre",
 "pp": "Lumière"
}
```

### Pôle − Ombre

Progression : la lanterne qui s'éteint, les pas autour du cercle, la natte de plus, la voix dans le fourré, les ombres qui avancent, le fourré qui écoute, puis la nuit sous les fougères. Style : on ne voit pas qui frappe ; les coups tombent au hasard sur les 7 cartes, et ce qui sort du fourré marque la cible. Prix : PV, ou la carte se perd dans le noir (exil).

```json
[
{"id": "ASS019-moins-1", "zone": "ASS019", "pole": "-", "palier": 1, "nom": "La lanterne qui s'éteint", "cout": 1, "cible": 0, "effet": "3 coups de 2 dégâts au hasard. Riposte 2. Le héros perd 1 PV.", "ops": [["deg", "hasard", 2, 3], ["riposte", 2], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Riposte", "Prix"], "ambiance": "À Kurayabu, la lanterne la plus proche du fourré s'éteint toujours la première, sans un souffle de vent.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ASS019-moins-2", "zone": "ASS019", "pole": "-", "palier": 2, "nom": "Les pas autour du cercle", "cout": 1, "cible": 1, "effet": "4 coups de 2 dégâts au hasard. Si la cible s'apprêtait à hésiter : la cible subit 8 dégâts. Gagnez 1 mana de Sève. Le héros perd 1 PV.", "ops": [["deg", "hasard", 2, 4], ["si", "hesiteAvant", [["deg", "cible", 8]]], ["mana", "Sève", 1], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Condition", "Mana", "Prix"], "ambiance": "Pendant le yoriai, des pas tournent autour du cercle des nattes, à la lisière de la lumière.", "budget": "14 (cible 12,5, écart +12 % ; vérifié au script)"},
{"id": "ASS019-moins-3", "zone": "ASS019", "pole": "-", "palier": 3, "nom": "La natte de plus", "cout": 1, "cible": 0, "effet": "3 coups de 3 dégâts au hasard. Exil. Le héros gagne 8 de garde. Piochez 1 carte.", "ops": [["deg", "hasard", 3, 3], ["exil"], ["garde", "heros", 8], ["pioche", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Exil", "Garde", "Pioche"], "ambiance": "Chaque matin, Tama compte les nattes du cercle ; il y en a une de plus, et personne ne s'y assied.", "budget": "16,4 (cible 15, écart +9 % ; vérifié au script)"},
{"id": "ASS019-moins-4", "zone": "ASS019", "pole": "-", "palier": 4, "nom": "La voix dans le fourré", "cout": 2, "cible": 1, "effet": "4 coups de 4 dégâts au hasard. Si la cible s'apprêtait à hésiter : tous les ennemis hésitent. La cible subit 8 dégâts. La cible brûle : 2 dégâts au début de ses 3 prochains tours. Le héros perd 2 PV. Exil.", "ops": [["deg", "hasard", 4, 4], ["si", "hesiteAvant", [["hesite", "tous"]]], ["deg", "cible", 8], ["brulure", "cible", 2, 3], ["prixPV", 2], ["exil"]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Condition", "Contrôle", "Dégâts dans le temps", "Prix", "Exil"], "ambiance": "La voix du fourré parle bas, dans la langue du yoriai, et elle connaît le nom de chacun.", "budget": "29,4 (cible 28, écart +5 % ; vérifié au script)"},
{"id": "ASS019-moins-5", "zone": "ASS019", "pole": "-", "palier": 5, "nom": "Les ombres qui avancent", "cout": 2, "cible": 1, "effet": "4 coups de 3 dégâts au hasard. Tous les ennemis subissent 4 dégâts. Le héros se soigne de 6. La cible est marquée 2. Le héros perd 2 PV.", "ops": [["deg", "hasard", 3, 4], ["deg", "tous", 4], ["soin", "heros", 6], ["vulnerable", "cible", 2], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Soin", "Marque", "Prix"], "ambiance": "Les ombres avancent sur la clairière d'une longueur de natte par nuit, et ne reculent pas au matin.", "budget": "30,8 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "ASS019-moins-6", "zone": "ASS019", "pole": "-", "palier": 6, "nom": "Le fourré qui écoute", "cout": 2, "cible": 1, "effet": "5 coups de 4 dégâts au hasard. La cible est marquée 1. Le héros gagne 8 de garde. Exil. La cible subit 10 dégâts. Le héros perd 2 PV.", "ops": [["deg", "hasard", 4, 5], ["vulnerable", "cible", 1], ["garde", "heros", 8], ["exil"], ["deg", "cible", 10], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Marque", "Garde", "Exil", "Prix"], "ambiance": "Kogure Sōan dit qu'il faut parler bas au yoriai, parce que le fourré écoute et retient tout.", "budget": "34,4 (cible 36, écart -4 % ; vérifié au script)"},
{"id": "ASS019-moins-7", "zone": "ASS019", "pole": "-", "palier": 7, "nom": "La Nuit sous les fougères", "cout": 3, "cible": 1, "effet": "Le fourré prend la parole. 5 coups de 5 dégâts au hasard. Tous les ennemis subissent 5 dégâts. La cible hésite. Le héros se soigne de 8 et perd 4 PV. Pose Sang. Si Racine (consommée) : 4 coups de 4 dégâts au hasard ; la cible est marquée 3 et hésite.", "ops": [["deg", "hasard", 5, 5], ["deg", "tous", 5], ["hesite", "cible"], ["soin", "heros", 8], ["prixPV", 4], ["pose", "Sang"], ["reveil", "Racine", true, [["deg", "hasard", 4, 4], ["vulnerable", "cible", 3], ["hesite", "cible"]]]], "tags": ["Assemblée", "Sève", "Forme ultime −7", "Dégâts", "Contrôle", "Soin", "Prix", "Pose Sang", "Réveil Racine"], "ambiance": "Sous les fougères de Kurayabu, le yoriai continue sans lanternes, et Tama entend voter des voix qu'il ne connaît pas.", "budget": "45 (+30 si Racine, soit +67 % ; vérifié au script)"}
]
```

### Pôle + Lumière

Progression : la loi des lanternes, la mèche réglée, le cercle éclairé, le fourré qui recule, le jour sans soleil, les perches de lanternes, puis le jour de Kurayabu. Style : le héros se tient dans la lumière (garde du héros sur les 7 cartes) et la lumière use l'attaque des ennemis ; contre un dernier ennemi, elle frappe. Prix : la lumière éclaire aussi l'ennemi (soin ennemi).

```json
[
{"id": "ASS019-plus-1", "zone": "ASS019", "pole": "+", "palier": 1, "nom": "Loi des lanternes", "cout": 1, "cible": 1, "effet": "Loi : le héros gagne 6 de garde. La cible perd 1 d'attaque. Riposte 2. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 6], ["affaiblit", "cible", 1], ["riposte", 2], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Garde", "Affaiblissement", "Riposte", "Prix"], "ambiance": "La loi du yoriai veut qu'on allume les lanternes avant de parler, et qu'on ne les touche plus ensuite.", "budget": "9,8 (cible 10, écart -2 % ; vérifié au script)"},
{"id": "ASS019-plus-2", "zone": "ASS019", "pole": "+", "palier": 2, "nom": "La mèche réglée", "cout": 1, "cible": 1, "effet": "Le héros gagne 8 de garde. S'il ne reste qu'un ennemi : la cible subit 10 dégâts. Gagnez 1 mana de Sève. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 8], ["si", "seul", [["deg", "cible", 10]]], ["mana", "Sève", 1], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Garde", "Condition", "Dégâts", "Mana", "Prix"], "ambiance": "Kogure Sōan règle la mèche de chaque lanterne à la longueur d'un ongle, ni plus ni moins.", "budget": "12,4 (cible 12,5, écart -1 % ; vérifié au script)"},
{"id": "ASS019-plus-3", "zone": "ASS019", "pole": "+", "palier": 3, "nom": "Loi du cercle éclairé", "cout": 1, "cible": 0, "effet": "Loi : le héros gagne 6 de garde. Tous les ennemis perdent 1 d'attaque. Piochez 1 carte. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 6], ["affaiblit", "tous", 1], ["pioche", 1], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Garde", "Affaiblissement", "Pioche", "Prix"], "ambiance": "Dans le cercle éclairé, la loi permet de tout dire ; hors du cercle, elle ne dit rien.", "budget": "13,4 (cible 15, écart -11 % ; vérifié au script)"},
{"id": "ASS019-plus-4", "zone": "ASS019", "pole": "+", "palier": 4, "nom": "Le fourré qui recule", "cout": 2, "cible": 1, "effet": "Le héros gagne 14 de garde. La cible subit 12 dégâts. La cible perd 2 d'attaque. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 14], ["deg", "cible", 12], ["affaiblit", "cible", 2], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Garde", "Dégâts", "Affaiblissement", "Prix"], "ambiance": "Chaque nuit, le fourré recule d'un pas devant les lanternes, et on entend les racines se retirer.", "budget": "27,2 (cible 28, écart -3 % ; vérifié au script)"},
{"id": "ASS019-plus-5", "zone": "ASS019", "pole": "+", "palier": 5, "nom": "Loi du jour sans soleil", "cout": 2, "cible": 0, "effet": "Loi : le héros gagne 12 de garde. Tous les ennemis subissent 4 dégâts. Reprenez en main la dernière carte de la défausse. Le héros se soigne de 8. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 12], ["deg", "tous", 4], ["recup"], ["soin", "heros", 8], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Garde", "Dégâts", "Récupération", "Soin", "Prix"], "ambiance": "Le yoriai a voté qu'il ferait jour toute la nuit, et les lanternes ont obéi.", "budget": "28,4 (cible 32, écart -11 % ; vérifié au script)"},
{"id": "ASS019-plus-6", "zone": "ASS019", "pole": "+", "palier": 6, "nom": "Les perches de lanternes", "cout": 2, "cible": 1, "effet": "Le héros gagne 16 de garde. S'il ne reste qu'un ennemi : la cible subit 18 dégâts. 3 coups de 2 dégâts au hasard. La cible est marquée 2. Chaque ennemi se soigne de 1.", "ops": [["garde", "heros", 16], ["si", "seul", [["deg", "cible", 18]]], ["deg", "hasard", 2, 3], ["vulnerable", "cible", 2], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Garde", "Condition", "Dégâts", "Marque", "Prix"], "ambiance": "Les perches de lanternes montent plus haut chaque année, et Tama grimpe les allumer au crépuscule.", "budget": "31,8 (cible 36, écart -12 % ; vérifié au script)"},
{"id": "ASS019-plus-7", "zone": "ASS019", "pole": "+", "palier": 7, "nom": "Le Jour de Kurayabu", "cout": 3, "cible": 1, "effet": "Aucune ombre ne reste. Le héros gagne 22 de garde. La cible subit 20 dégâts. Tous les ennemis perdent 2 d'attaque et se soignent de 2. Pose Braise. Si Givre (consommé) : héros +16 de garde ; la cible perd 3 d'attaque et subit 10 dégâts.", "ops": [["garde", "heros", 22], ["deg", "cible", 20], ["affaiblit", "tous", 2], ["ennemiSoin", 2], ["pose", "Braise"], ["reveil", "Givre", true, [["garde", "heros", 16], ["affaiblit", "cible", 3], ["deg", "cible", 10]]]], "tags": ["Assemblée", "Sève", "Forme ultime +7", "Garde", "Dégâts", "Affaiblissement", "Prix", "Pose Braise", "Réveil Givre"], "ambiance": "Dans le jour de Kurayabu, tout le yoriai siège en pleine lumière, et la natte en plus reste vide.", "budget": "46,8 (+31,8 si Givre, soit +68 % ; vérifié au script)"}
]
```

---

## Hesperonèsos, la Tour des Brûlots (DON109 · Donjon · Archipel · Eau · byzantine)

```json
{
 "fiche": "DON109",
 "nom": "Hesperonèsos, la Tour des Brûlots",
 "recit": "Ex-voto suspendu dans la chapelle de la tour : « Moi, Akindynos, calfat, j'offre cette barque d'argent à la Mère de Dieu, qui m'a gardé la nuit des brûlots. Nous étions soixante-dix à charger le feu liquide dans les vaisseaux de la passe. Le feu est parti seul, sans mèche, vers la mer. Il a brûlé sur l'eau jusqu'à l'aube, et dans le feu nous avons vu des rameurs. À l'aube, j'étais seul sur la jetée. » Les moines disent que la barque d'argent pèse plus lourd chaque année. Personne n'a revu les autres.",
 "pal": [
  "La passe brûle d'un bord à l'autre ; les vaisseaux sont des torches, la mer elle-même flambe, et la tour se dresse noire dans le feu.",
  "Des brûlots dérivent dans la passe la nuit ; le feu court sur l'eau en nappes, et les îlots fument jusqu'au matin.",
  "Archipel de rochers blancs : une tour de garde sur l'îlot de la passe, une chaîne tendue sous l'eau, et des barques de calfats amarrées.",
  "L'aube vient plus tôt sur la passe ; les moines chantent sur la tour, et l'eau calme reflète une lumière qui ne vient pas du soleil.",
  "Une aube qui ne finit plus baigne l'archipel : la mer est d'or pâle, les blessés guérissent sur les jetées, et la tour n'a pas d'ombre."
 ],
 "pm": "Nuit",
 "pp": "Aurore"
}
```

### Pôle − Nuit

Progression : le premier brûlot, la nappe de feu, la chaîne sous l'eau, le feu liquide, les rameurs dans le feu, la passe en flammes, puis la mer qui flambe. Style : chaque carte met le feu (brûlure sur les 7 cartes) ; la chaîne et le feu liquide percent la garde, et ce qui charge la passe est frappé. Prix : PV, sur les 7 cartes.

```json
[
{"id": "DON109-moins-1", "zone": "DON109", "pole": "-", "palier": 1, "nom": "Le premier brûlot", "cout": 1, "cible": 1, "effet": "La cible brûle : 3 dégâts au début de ses 3 prochains tours. La cible est marquée 1. Le héros perd 1 PV.", "ops": [["brulure", "cible", 3, 3], ["vulnerable", "cible", 1], ["prixPV", 1]], "tags": ["Donjon", "Eau", "Pôle −", "Dégâts dans le temps", "Marque", "Prix"], "ambiance": "Le premier brûlot part de la jetée sans personne à bord, et la marée le porte droit dans la passe.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "DON109-moins-2", "zone": "DON109", "pole": "-", "palier": 2, "nom": "La nappe de feu", "cout": 1, "cible": 1, "effet": "Tous les ennemis brûlent : 1 dégâts au début de leurs 3 prochains tours. Si la cible prend son élan : la cible subit 8 dégâts. Gagnez 1 mana de Eau. Le héros perd 1 PV.", "ops": [["brulure", "tous", 1, 3], ["si", "elan", [["deg", "cible", 8]]], ["mana", "Eau", 1], ["prixPV", 1]], "tags": ["Donjon", "Eau", "Pôle −", "Dégâts dans le temps", "Condition", "Dégâts", "Mana", "Prix"], "ambiance": "Le feu liquide s'étale sur l'eau en nappe mince, et l'eau ne l'éteint pas : elle le porte.", "budget": "12,6 (cible 12,5, écart +1 % ; vérifié au script)"},
{"id": "DON109-moins-3", "zone": "DON109", "pole": "-", "palier": 3, "nom": "La chaîne sous l'eau", "cout": 1, "cible": 1, "effet": "La cible brûle : 2 dégâts au début de ses 3 prochains tours. La cible perd sa garde. 3 coups de 2 dégâts au hasard. Le héros perd 1 PV.", "ops": [["brulure", "cible", 2, 3], ["briseGarde", "cible"], ["deg", "hasard", 2, 3], ["prixPV", 1]], "tags": ["Donjon", "Eau", "Pôle −", "Dégâts dans le temps", "Perce-garde", "Dégâts", "Prix"], "ambiance": "La chaîne tendue sous la passe brise les quilles ; les calfats la graissent chaque printemps sans savoir pour qui.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "DON109-moins-4", "zone": "DON109", "pole": "-", "palier": 4, "nom": "Le feu liquide", "cout": 2, "cible": 1, "effet": "La cible brûle : 4 dégâts au début de ses 3 prochains tours. La cible subit 12 dégâts. Les dégâts ignorent la garde. Le héros perd 2 PV. Gagnez 1 mana de Eau.", "ops": [["brulure", "cible", 4, 3], ["deg", "cible", 12], ["ignoreGarde"], ["prixPV", 2], ["mana", "Eau", 1]], "tags": ["Donjon", "Eau", "Pôle −", "Dégâts dans le temps", "Dégâts", "Perce-garde", "Prix", "Mana"], "ambiance": "Akindynos chargeait le feu liquide dans des siphons de bronze ; il en sentait encore l'odeur sur ses mains, vieux.", "budget": "28 (cible 28, écart +0 % ; vérifié au script)"},
{"id": "DON109-moins-5", "zone": "DON109", "pole": "-", "palier": 5, "nom": "Les rameurs dans le feu", "cout": 2, "cible": 1, "effet": "Tous les ennemis brûlent : 2 dégâts au début de leurs 3 prochains tours. Si la cible prend son élan : la cible subit 16 dégâts. Riposte 3. Le héros gagne 8 de garde. Le héros perd 2 PV.", "ops": [["brulure", "tous", 2, 3], ["si", "elan", [["deg", "cible", 16]]], ["riposte", 3], ["garde", "heros", 8], ["prixPV", 2]], "tags": ["Donjon", "Eau", "Pôle −", "Dégâts dans le temps", "Condition", "Dégâts", "Riposte", "Garde", "Prix"], "ambiance": "Dans le feu de la passe, des rameurs tiraient sur leurs avirons en cadence, et le feu avançait avec eux.", "budget": "31,6 (cible 32, écart -1 % ; vérifié au script)"},
{"id": "DON109-moins-6", "zone": "DON109", "pole": "-", "palier": 6, "nom": "La passe en flammes", "cout": 2, "cible": 1, "effet": "La cible brûle : 5 dégâts au début de ses 4 prochains tours. La cible perd sa garde. La cible hésite. Riposte 3. Le héros se soigne de 3. Le héros perd 2 PV.", "ops": [["brulure", "cible", 5, 4], ["briseGarde", "cible"], ["hesite", "cible"], ["riposte", 3], ["soin", "heros", 3], ["prixPV", 2]], "tags": ["Donjon", "Eau", "Pôle −", "Dégâts dans le temps", "Perce-garde", "Contrôle", "Riposte", "Soin", "Prix"], "ambiance": "La passe a brûlé jusqu'à l'aube, d'un îlot à l'autre, et l'eau n'a pas bouillonné une seule fois.", "budget": "35 (cible 36, écart -3 % ; vérifié au script)"},
{"id": "DON109-moins-7", "zone": "DON109", "pole": "-", "palier": 7, "nom": "La Mer qui flambe", "cout": 3, "cible": 1, "effet": "La mer elle-même brûle. Tous les ennemis brûlent : 3 dégâts pendant 3 tours. La cible subit 20 dégâts et hésite. Héros +8 de garde, −4 PV. Pose Braise. Si Sceau (consommé) : la cible brûle, 5 pendant 4 tours, et subit 10 dégâts.", "ops": [["brulure", "tous", 3, 3], ["deg", "cible", 20], ["hesite", "cible"], ["garde", "heros", 8], ["prixPV", 4], ["pose", "Braise"], ["reveil", "Sceau", true, [["brulure", "cible", 5, 4], ["deg", "cible", 10]]]], "tags": ["Donjon", "Eau", "Forme ultime −7", "Dégâts dans le temps", "Dégâts", "Contrôle", "Garde", "Prix", "Pose Braise", "Réveil Sceau"], "ambiance": "Les moines d'Hesperonèsos ne regardent pas la passe la nuit ; ils disent que les rameurs regardent la tour.", "budget": "47,2 (+30 si Sceau, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Aurore

Progression : la première cloche, le chant sur la tour, l'eau qui reflète, les blessés sur la jetée, l'or pâle, la lumière sans soleil, puis l'aube qui reste. Style : le héros se refait à chaque carte (soin du héros sur 6), et la lumière désigne la cible (marque sur 4) ; blessé, il guérit ou frappe plus fort. Prix : on laisse ses affaires sur la jetée (défausse).

```json
[
{"id": "DON109-plus-1", "zone": "DON109", "pole": "+", "palier": 1, "nom": "La première cloche", "cout": 1, "cible": 1, "effet": "Le héros se soigne de 6. La cible subit 5 dégâts. La cible est marquée 1. Défaussez 1 carte au hasard.", "ops": [["soin", "heros", 6], ["deg", "cible", 5], ["vulnerable", "cible", 1], ["prixDefausse", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Soin", "Dégâts", "Marque", "Prix"], "ambiance": "La première cloche de la tour sonne avant l'aube, et les mouettes se taisent sur tous les îlots.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "DON109-plus-2", "zone": "DON109", "pole": "+", "palier": 2, "nom": "Le chant sur la tour", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 5. Si le héros est sous la moitié de ses PV : le héros se soigne de 6. Riposte 1. Gagnez 1 mana de Eau.", "ops": [["soin", "heros", 5], ["si", "blesse", [["soin", "heros", 6]]], ["riposte", 1], ["mana", "Eau", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Soin", "Condition", "Riposte", "Mana"], "ambiance": "Les moines chantent sur la tour face à la passe, et l'écho revient de la mer une voix plus nombreux.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON109-plus-3", "zone": "DON109", "pole": "+", "palier": 3, "nom": "L'eau qui reflète", "cout": 1, "cible": 1, "effet": "Le héros se soigne de 6. La cible est marquée 2. 3 coups de 2 dégâts au hasard. Défaussez 1 carte au hasard.", "ops": [["soin", "heros", 6], ["vulnerable", "cible", 2], ["deg", "hasard", 2, 3], ["prixDefausse", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Soin", "Marque", "Dégâts", "Prix"], "ambiance": "L'eau calme de la passe reflète une lumière dorée avant le soleil, et personne n'en cherche la source.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "DON109-plus-4", "zone": "DON109", "pole": "+", "palier": 4, "nom": "Les blessés sur la jetée", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : le héros se soigne de 12. Le héros se soigne de 10. La cible subit 12 dégâts. Défaussez 1 carte au hasard. Riposte 2.", "ops": [["si", "blesse", [["soin", "heros", 12]]], ["soin", "heros", 10], ["deg", "cible", 12], ["prixDefausse", 1], ["riposte", 2]], "tags": ["Donjon", "Eau", "Pôle +", "Condition", "Soin", "Dégâts", "Prix", "Riposte"], "ambiance": "Les blessés couchés sur la jetée guérissent à l'aube, tous ensemble, et se lèvent sans rien dire.", "budget": "29 (cible 28, écart +4 % ; vérifié au script)"},
{"id": "DON109-plus-5", "zone": "DON109", "pole": "+", "palier": 5, "nom": "L'or pâle", "cout": 2, "cible": 1, "effet": "Le héros se soigne de 10. La cible est marquée 2. Tous les ennemis subissent 4 dégâts. Le héros gagne 8 de garde. Défaussez 1 carte au hasard.", "ops": [["soin", "heros", 10], ["vulnerable", "cible", 2], ["deg", "tous", 4], ["garde", "heros", 8], ["prixDefausse", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Soin", "Marque", "Dégâts", "Garde", "Prix"], "ambiance": "À l'aube, la mer d'Hesperonèsos prend la couleur de la barque d'argent, puis celle de l'or pâle.", "budget": "28,2 (cible 32, écart -12 % ; vérifié au script)"},
{"id": "DON109-plus-6", "zone": "DON109", "pole": "+", "palier": 6, "nom": "La lumière sans soleil", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : la cible subit 18 dégâts. Le héros se soigne de 14. La cible subit 10 dégâts. Défaussez 1 carte au hasard. Gagnez 1 mana de Eau.", "ops": [["si", "blesse", [["deg", "cible", 18]]], ["soin", "heros", 14], ["deg", "cible", 10], ["prixDefausse", 1], ["mana", "Eau", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Condition", "Dégâts", "Soin", "Prix", "Mana"], "ambiance": "La lumière de l'aube vient de la passe, et non de l'est ; les moines ont cessé d'en parler.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "DON109-plus-7", "zone": "DON109", "pole": "+", "palier": 7, "nom": "L'Aube qui reste", "cout": 3, "cible": 1, "effet": "L'aube ne s'en va plus. Le héros se soigne de 20 et gagne 10 de garde. La cible est marquée 2 et subit 18 dégâts. Défaussez 2 cartes au hasard. Pose Sceau. Si Braise (consommée) : le héros se soigne de 14 ; tous les ennemis subissent 7 dégâts.", "ops": [["soin", "heros", 20], ["garde", "heros", 10], ["vulnerable", "cible", 2], ["deg", "cible", 18], ["prixDefausse", 2], ["pose", "Sceau"], ["reveil", "Braise", true, [["soin", "heros", 14], ["deg", "tous", 7]]]], "tags": ["Donjon", "Eau", "Forme ultime +7", "Soin", "Garde", "Marque", "Dégâts", "Prix", "Pose Sceau", "Réveil Braise"], "ambiance": "Dans l'aube qui reste, Akindynos pend une seconde barque d'argent à la voûte, et la première a bougé.", "budget": "46 (+29,4 si Braise, soit +64 % ; vérifié au script)"}
]
```

---

## Cocoliztlan, la Citadelle des Fièvres (CIT011 · Citadelle · Forêt de champignons géants · Sève · aztèque)

*Note du critique (lot 7) : Récit repris : « Necahual était petite quand… » répétait l'ouverture d'ANT064 (« Dumisani était petit quand… »). Le récit passe au présent, Necahual porte le brasero.*

```json
{"fiche": "CIT011", "nom": "Cocoliztlan, la Citadelle des Fièvres", "recit": "Chaque nuit, Necahual porte le brasero du guérisseur le long des remparts de Cocoliztlan. La fièvre est entrée dans la citadelle avec la relève du calpulli ; les soldats dorment à leur poste, sous les chapeaux des grands champignons, et leur sueur coule noire. Le guérisseur leur souffle dans la bouche la fumée des spores. Ceux qui toussent guérissent. Ceux qui ne toussent pas se lèvent quand même et reprennent la garde. Necahual ne regarde que la braise. Son père est de garde sur la tour de l'est. Il ne transpire plus.", "pal": ["La citadelle sue la fièvre : les remparts suintent noir, des soldats couchés partout sous les chapeaux, et la fumée des nattes ne retombe plus.", "Les nattes brûlent dans les cours ; des soldats grelottent sur les remparts, et les champignons géants laissent pleuvoir une poussière grise.", "Citadelle de pierre dans une forêt de champignons géants : remparts à degrés, cours dallées, et des chapeaux immenses au-dessus des tours.", "Des braseros fument à chaque porte ; les soldats guéris reprennent la garde, et les chapeaux exhalent une fumée blanche qui apaise.", "La citadelle est entière et silencieuse : chaque soldat debout à son poste, la fumée blanche dans toutes les cours, et plus personne ne tousse."], "pm": "Peste", "pp": "Guérison"}
```

### Pôle − Peste

Progression : la sueur noire, la natte brûlée, le soldat qui grelotte, la poussière grise, les remparts qui suintent, la fumée qui ne retombe pas, puis la citadelle des fièvres. Style : une carte donne la fièvre (brûlure sur 4 cartes), les suivantes frappent ce qui brûle déjà (crochet `brule` sur 4) et la fièvre use l'attaque. Prix : PV, sur les 7 cartes.

```json
[
{"id": "CIT011-moins-1", "zone": "CIT011", "pole": "-", "palier": 1, "nom": "La sueur noire", "cout": 1, "cible": 1, "effet": "La cible brûle : 2 dégâts au début de ses 3 prochains tours. La cible perd 1 d'attaque. Gagnez 1 mana de Sève. Le héros perd 1 PV.", "ops": [["brulure", "cible", 2, 3], ["affaiblit", "cible", 1], ["mana", "Sève", 1], ["prixPV", 1]], "tags": ["Citadelle", "Sève", "Pôle −", "Dégâts dans le temps", "Affaiblissement", "Mana", "Prix"], "ambiance": "La sueur des fiévreux de Cocoliztlan coule noire et sent la terre ; elle tache la pierre pour toujours.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "CIT011-moins-2", "zone": "CIT011", "pole": "-", "palier": 2, "nom": "La natte brûlée", "cout": 1, "cible": 1, "effet": "Si la cible brûle déjà : la cible subit 8 dégâts. La cible brûle : 2 dégâts au début de ses 2 prochains tours. Vos alliés gagnent 4 de garde. Le héros perd 1 PV.", "ops": [["si", "brule", [["deg", "cible", 8]]], ["brulure", "cible", 2, 2], ["garde", "allies", 4], ["prixPV", 1]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Garde", "Prix"], "ambiance": "On brûle les nattes des malades dans les cours, et la fumée monte se coller sous les chapeaux.", "budget": "11,8 (cible 12,5, écart -6 % ; vérifié au script)"},
{"id": "CIT011-moins-3", "zone": "CIT011", "pole": "-", "palier": 3, "nom": "Le soldat qui grelotte", "cout": 1, "cible": 1, "effet": "Le héros se soigne de 8. La cible est marquée 1. Riposte 2. Le héros perd 1 PV.", "ops": [["soin", "heros", 8], ["vulnerable", "cible", 1], ["riposte", 2], ["prixPV", 1]], "tags": ["Citadelle", "Sève", "Pôle −", "Soin", "Marque", "Riposte", "Prix"], "ambiance": "Le soldat grelotte sous le soleil de midi, la lance serrée, et ne quitte pas son créneau.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "CIT011-moins-4", "zone": "CIT011", "pole": "-", "palier": 4, "nom": "La poussière grise", "cout": 2, "cible": 1, "effet": "Tous les ennemis brûlent : 2 dégâts au début de leurs 3 prochains tours. La cible perd 2 d'attaque. Reprenez en main la dernière carte de la défausse. Le héros perd 2 PV. Gagnez 1 mana de Sève.", "ops": [["brulure", "tous", 2, 3], ["affaiblit", "cible", 2], ["recup"], ["prixPV", 2], ["mana", "Sève", 1]], "tags": ["Citadelle", "Sève", "Pôle −", "Dégâts dans le temps", "Affaiblissement", "Récupération", "Prix", "Mana"], "ambiance": "Les chapeaux géants laissent pleuvoir une poussière grise sur la citadelle, et la fièvre suit la poussière.", "budget": "24,2 (cible 28, écart -14 % ; vérifié au script)"},
{"id": "CIT011-moins-5", "zone": "CIT011", "pole": "-", "palier": 5, "nom": "Les remparts qui suintent", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : la cible subit 16 dégâts. Vos alliés gagnent 8 de garde. 3 coups de 3 dégâts au hasard. Le héros perd 2 PV. La cible est marquée 2.", "ops": [["si", "brule", [["deg", "cible", 16]]], ["garde", "allies", 8], ["deg", "hasard", 3, 3], ["prixPV", 2], ["vulnerable", "cible", 2]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Dégâts", "Garde", "Prix", "Marque"], "ambiance": "Les remparts de Cocoliztlan suintent comme une peau, et les soldats y collent leur dos pour avoir frais.", "budget": "30,6 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "CIT011-moins-6", "zone": "CIT011", "pole": "-", "palier": 6, "nom": "La fumée qui ne retombe pas", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : tous les ennemis subissent 6 dégâts. La cible subit 12 dégâts. Tous les ennemis perdent 1 d'attaque. Le héros gagne 10 de garde. Le héros perd 2 PV.", "ops": [["si", "brule", [["deg", "tous", 6]]], ["deg", "cible", 12], ["affaiblit", "tous", 1], ["garde", "heros", 10], ["prixPV", 2]], "tags": ["Citadelle", "Sève", "Pôle −", "Condition", "Dégâts", "Affaiblissement", "Garde", "Prix"], "ambiance": "La fumée des nattes ne retombe plus sur Cocoliztlan ; elle reste sous les chapeaux, en plafond gris.", "budget": "31,2 (cible 36, écart -13 % ; vérifié au script)"},
{"id": "CIT011-moins-7", "zone": "CIT011", "pole": "-", "palier": 7, "nom": "La Citadelle des Fièvres", "cout": 3, "cible": 1, "effet": "La fièvre tient les murs. Si la cible brûle déjà : elle subit 22 dégâts et perd 3 d'attaque. Tous brûlent, 3 pendant 3 tours. Héros +18 de garde, −4 PV. Pose Sang. Si Racine (consommée) : tous brûlent, 3 pendant 3 tours ; la cible perd 3 d'attaque.", "ops": [["si", "brule", [["deg", "cible", 22], ["affaiblit", "cible", 3]]], ["brulure", "tous", 3, 3], ["garde", "heros", 18], ["prixPV", 4], ["pose", "Sang"], ["reveil", "Racine", true, [["brulure", "tous", 3, 3], ["affaiblit", "cible", 3]]]], "tags": ["Citadelle", "Sève", "Forme ultime −7", "Condition", "Dégâts", "Affaiblissement", "Dégâts dans le temps", "Garde", "Prix", "Pose Sang", "Réveil Racine"], "ambiance": "Necahual se souvient des fiévreux debout sur les remparts, les yeux fermés, qui saluaient quand elle passait.", "budget": "45,7 (+28,8 si Racine, soit +63 % ; vérifié au script)"}
]
```

### Pôle + Guérison

Progression : la fumée blanche, le brasero de spores, la toux qui guérit, le guérisseur de nuit, les soldats guéris, les braseros aux portes, puis la citadelle guérie. Style : la fumée fait hésiter l'assaillant (hésitation sur 4 cartes), et les cartes suivantes en profitent (crochet `hesite` sur 4) ; la garnison se refait et reprend ce qu'elle avait perdu. Prix : la fumée soigne aussi l'ennemi (soin ennemi).

```json
[
{"id": "CIT011-plus-1", "zone": "CIT011", "pole": "+", "palier": 1, "nom": "La fumée blanche", "cout": 1, "cible": 1, "effet": "La cible hésite. Vos alliés se soignent de 3. Gagnez 1 mana de Sève. Chaque ennemi se soigne de 1.", "ops": [["hesite", "cible"], ["soin", "allies", 3], ["mana", "Sève", 1], ["ennemiSoin", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Contrôle", "Soin", "Mana", "Prix"], "ambiance": "La fumée blanche des chapeaux descend dans les cours au crépuscule, et les chiens de garde s'y couchent.", "budget": "10,5 (cible 10, écart +5 % ; vérifié au script)"},
{"id": "CIT011-plus-2", "zone": "CIT011", "pole": "+", "palier": 2, "nom": "Le brasero de spores", "cout": 1, "cible": 1, "effet": "Si la cible hésite déjà : la cible subit 10 dégâts. Vos alliés gagnent 4 de garde. Le héros se soigne de 4. Chaque ennemi se soigne de 1.", "ops": [["si", "hesite", [["deg", "cible", 10]]], ["garde", "allies", 4], ["soin", "heros", 4], ["ennemiSoin", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Dégâts", "Garde", "Soin", "Prix"], "ambiance": "Le guérisseur porte son brasero de spores à bout de bras, et ne respire jamais la fumée lui-même.", "budget": "11,8 (cible 12,5, écart -6 % ; vérifié au script)"},
{"id": "CIT011-plus-3", "zone": "CIT011", "pole": "+", "palier": 3, "nom": "La toux qui guérit", "cout": 1, "cible": 1, "effet": "La cible hésite. Vos alliés se soignent de 4. Riposte 3. Chaque ennemi se soigne de 1.", "ops": [["hesite", "cible"], ["soin", "allies", 4], ["riposte", 3], ["ennemiSoin", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Contrôle", "Soin", "Riposte", "Prix"], "ambiance": "À Cocoliztlan, la toux d'un malade est une bonne nouvelle ; on se méfie de ceux qui se taisent.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "CIT011-plus-4", "zone": "CIT011", "pole": "+", "palier": 4, "nom": "Le guérisseur de nuit", "cout": 2, "cible": 1, "effet": "Si la cible hésite déjà : la cible subit 16 dégâts. Reprenez en main la dernière carte de la défausse. Le héros gagne 8 de garde. La cible subit 6 dégâts. Vos alliés se soignent de 4. Chaque ennemi se soigne de 1.", "ops": [["si", "hesite", [["deg", "cible", 16]]], ["recup"], ["garde", "heros", 8], ["deg", "cible", 6], ["soin", "allies", 4], ["ennemiSoin", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Dégâts", "Récupération", "Garde", "Soin", "Prix"], "ambiance": "Le guérisseur passe la nuit de bouche en bouche, et souffle la fumée blanche jusqu'au fond des poitrines.", "budget": "28,4 (cible 28, écart +1 % ; vérifié au script)"},
{"id": "CIT011-plus-5", "zone": "CIT011", "pole": "+", "palier": 5, "nom": "Les soldats guéris", "cout": 2, "cible": 1, "effet": "Si la cible hésite déjà : vos alliés gagnent 10 de garde. Tous les ennemis hésitent. Reprenez en main la dernière carte de la défausse. Le héros se soigne de 6. 3 coups de 3 dégâts au hasard. Chaque ennemi se soigne de 1.", "ops": [["si", "hesite", [["garde", "allies", 10]]], ["hesite", "tous"], ["recup"], ["soin", "heros", 6], ["deg", "hasard", 3, 3], ["ennemiSoin", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Condition", "Garde", "Contrôle", "Récupération", "Soin", "Dégâts", "Prix"], "ambiance": "Les soldats guéris reprennent la garde sans un mot, et ne quittent plus le rempart, même pour manger.", "budget": "31,8 (cible 32, écart -1 % ; vérifié au script)"},
{"id": "CIT011-plus-6", "zone": "CIT011", "pole": "+", "palier": 6, "nom": "Les braseros aux portes", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 4 dégâts. Vos alliés se soignent de 8. La cible subit 12 dégâts. Gagnez 1 mana de Sève. Chaque ennemi se soigne de 1.", "ops": [["deg", "tous", 4], ["soin", "allies", 8], ["deg", "cible", 12], ["mana", "Sève", 1], ["ennemiSoin", 1]], "tags": ["Citadelle", "Sève", "Pôle +", "Dégâts", "Soin", "Mana", "Prix"], "ambiance": "Un brasero fume à chaque porte de la citadelle, et ceux qui entrent doivent y tousser avant de passer.", "budget": "33,8 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "CIT011-plus-7", "zone": "CIT011", "pole": "+", "palier": 7, "nom": "La Citadelle guérie", "cout": 3, "cible": 1, "effet": "Personne ne tousse plus. Si la cible hésite déjà : elle subit 22 dégâts. Puis elle hésite. 3 coups de 3 au hasard. Héros +18 de garde, riposte 5 ; ennemis soignés de 2. Pose Racine. Si Sang (consommé) : la cible subit 14 ; tous subissent 4, hésitent.", "ops": [["si", "hesite", [["deg", "cible", 22]]], ["hesite", "cible"], ["deg", "hasard", 3, 3], ["garde", "heros", 18], ["riposte", 5], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sang", true, [["deg", "cible", 14], ["deg", "tous", 4], ["hesite", "tous"]]]], "tags": ["Citadelle", "Sève", "Forme ultime +7", "Condition", "Dégâts", "Contrôle", "Garde", "Riposte", "Prix", "Pose Racine", "Réveil Sang"], "ambiance": "Dans la citadelle guérie, Necahual a cherché son père sur le rempart ; il l'a saluée, sans la reconnaître.", "budget": "45,4 (+31,6 si Sang, soit +70 % ; vérifié au script)"}
]
```

---

## Ressources

### Les Veines d'Uamh Ghlas (RES051 · Cavernes cristallines, Pierre, celte)

```json
{
 "fiche": "RES051",
 "nom": "Les Veines d'Uamh Ghlas",
 "recit": "Dans la grotte d'Uamh Ghlas, la fluorine court en veines bleues et jaunes dans la paroi. Seonag Rua la détache au ciseau et la tourne en coupes sur un tour à perche. Les coupes de la veine la plus profonde restent froides, même pleines de lait chaud.",
 "pal": [
  "Une paroi zébrée de bleu à la lueur d'une chandelle, un ciseau, et des éclats de fluorine dans la poussière du sol.",
  "Les veines bleues courent sur toute la grotte ; les tours à perche grincent en rang, et les coupes translucides sèchent sur des planches."
 ]
}
```

### Les Terriers de Tarvagan-Tal (RES197 · Lande, Vent, mongole)

```json
{
 "fiche": "RES197",
 "nom": "Les Terriers de Tarvagan-Tal",
 "recit": "Sur la lande de Tarvagan-Tal, Möngke rampe vers les terriers en agitant une houppe de crin blanc. Les marmottes sortent pour la regarder, et il les prend. Elles ne fuient jamais la houppe : les vieux disent qu'elles y reconnaissent un parent.",
 "pal": [
  "Une lande rase semée de terriers, un chasseur couché dans l'herbe, et une houppe blanche qui danse au bout d'un bâton.",
  "Des chasseurs à plat ventre devant chaque terrier, des houppes qui dansent partout, et des peaux de marmotte tendues sur les yourtes."
 ]
}
```

### Le Pont d'herbe d'Ichuwayq'u (RES071 · Canyon, Feu, inca)

```json
{
 "fiche": "RES071",
 "nom": "Le Pont d'herbe d'Ichuwayq'u",
 "recit": "Chaque printemps, les villages d'Ichuwayq'u tressent l'herbe dure de la puna en cordes, puis en un pont neuf au-dessus du canyon. Le jour où il est tendu, on coupe l'ancien. Qhawa, la maîtresse du pont, traverse la première, pieds nus, sans regarder en bas.",
 "pal": [
  "Un vieux pont d'herbe au-dessus du canyon, des bottes d'ichu séché, et des femmes qui roulent les cordes sur leurs cuisses.",
  "Le pont neuf se balance au-dessus de la gorge, épais comme un torse ; l'ancien tombe lentement, et le village chante sur les deux bords."
 ]
}
```

### Les Jacinthes de Kar-Nabium (RES141 · Lande, Vent, mésopotamienne)

```json
{
 "fiche": "RES141",
 "nom": "Les Jacinthes de Kar-Nabium",
 "recit": "Sur la lande de Kar-Nabium, Amat-Šamaš arrache à la houe les bulbes de jacinthe sauvage. On les fait bouillir pour la colle des scribes, qui tient les tablettes dans leurs étuis. Les jacinthes repoussent toujours, mais jamais au même endroit.",
 "pal": [
  "Une lande d'herbe sèche piquée de fleurs bleues, une femme à la houe, et des bulbes blancs en tas sur une natte.",
  "La lande est retournée sur des lieues ; des tas de bulbes blancs fument dans les chaudrons, et la colle sèche en plaques au soleil."
 ]
}
```

### Les Murènes de Scopulus Niger (RES270 · Récif, Eau, romaine)

```json
{
 "fiche": "RES270",
 "nom": "Les Murènes de Scopulus Niger",
 "recit": "Au pied du rocher de Scopulus Niger, Tertia Marcia prend les murènes au crochet dans les trous du récif et les vend vivantes pour les viviers des villas. Les murènes de ce récif mangent dans la main, et elles reconnaissent la sienne.",
 "pal": [
  "Un récif sombre à fleur d'eau, une barque, une femme penchée qui tend un crochet dans un trou, et une murène qui sort la tête.",
  "Des viviers de pierre bordent le récif ; des centaines de murènes y tournent en anneaux, et les acheteurs des villas attendent sur le quai."
 ]
}
```

### Les Glisseurs de Nhlanzana (RES024 · Mangrove, Eau, zouloue)

```json
{
 "fiche": "RES024",
 "nom": "Les Glisseurs de Nhlanzana",
 "recit": "À marée basse, dans la mangrove de Nhlanzana, Thandeka glisse sur la vase, un genou sur une planche, et prend à la main les périophtalmes qui sautent devant elle. Ce sont des poissons qui marchent. Les vieux disent qu'ils regardent monter la mer avec inquiétude, comme nous.",
 "pal": [
  "Une vase luisante entre les racines de palétuviers, une femme à genoux sur une planche, et de petits poissons qui sautent devant elle.",
  "Des glisseurs sur toute la vase de la mangrove ; les périophtalmes sautent par centaines, et les prises sèchent sur des claies au bord des chenaux."
 ]
}
```

### Les Eaux ivres de Vaipōuli (RES072 · Delta fluvial, Eau, polynésienne)

```json
{
 "fiche": "RES072",
 "nom": "Les Eaux ivres de Vaipōuli",
 "recit": "À Vaipōuli, quand le delta est bas, Hina-rau bat la racine à poison sur une pierre au bord d'un chenal. L'eau blanchit, et les poissons remontent ivres, sur le flanc. On les ramasse à la main. Personne ne boit l'eau ce jour-là, ni le lendemain.",
 "pal": [
  "Un chenal boueux du delta, une femme qui bat des racines sur une pierre plate, et l'eau qui commence à blanchir.",
  "Tous les chenaux sont laiteux ; les poissons flottent par bancs entiers, et les enfants les ramassent à pleines mains en riant."
 ]
}
```

### Les Queñuas de Sach'a-Rit'i (RES326 · Forêt boréale, Glace, inca)

```json
{"fiche": "RES326", "nom": "Les Queñuas de Sach'a-Rit'i", "recit": "À Sach'a-Rit'i, les queñuas ont une écorce rouge qui se détache en feuilles fines comme du papier. Sinchi Tupa les effeuille une à une, sans blesser l'arbre, et les monte aux postes des cols. Une poignée allume un feu dans la neige mouillée. L'arbre, lui, ne brûle jamais.", "pal": ["Un queñua tordu sous la neige, son écorce rouge qui bat au vent, et un homme qui la détache feuille à feuille.", "Les queñuas de toute la forêt luisent rouges et nus ; des porteurs montent vers les cols avec des ballots d'écorce, et des feux s'allument là-haut."]}
```

### Les Kakis de Kasumijima (RES110 · Îles flottantes, Vent, japonaise féodale)

*Note du critique (lot 7) : RES110 change d'objet (l'eau de nuée doublait l'eau douce de B RES221) et RES326 aussi (les galets fendus doublaient les galets éclatés de A RES249).*

```json
{"fiche": "RES110", "nom": "Les Kakis de Kasumijima", "recit": "À Kasumijima, le vent ne tombe jamais. À l'automne, Okō épluche les kakis encore âpres et les suspend sous l'avant-toit. Chaque matin, elle les masse un à un entre ses paumes. Au bout d'un mois, ils sont doux, et couverts d'un sucre blanc qu'aucune main n'y a mis.", "pal": ["Une île flottante sous le vent, un avant-toit de chaume, et une femme qui masse lentement un fruit orange entre ses paumes.", "Sur toutes les vérandas de l'île, des femmes assises massent des fruits ; les paniers blanchissent de sucre à mesure que l'hiver approche."]}
```

### Les Lunettes d'eau de Shiokaze-ura (RES253 · Archipel, Eau, japonaise féodale)

```json
{
 "fiche": "RES253",
 "nom": "Les Lunettes d'eau de Shiokaze-ura",
 "recit": "Dans l'archipel de Shiokaze-ura, on ne plonge pas. Kiyo se penche hors de sa barque sur une lunette de bois à fond de verre et décroche à la perche les turbans cornus du fond. Elle dit que certains jours, en bas, quelque chose regarde aussi par la lunette.",
 "pal": [
  "Une barque immobile sur l'eau claire, une femme penchée sur une lunette de bois, et une longue perche qui descend vers le fond.",
  "Des barques immobiles couvrent la baie, chaque pêcheur la tête dans sa lunette ; les turbans cornus s'entassent à l'avant, et personne ne parle."
 ]
}
```

### Le Kombu d'Ōtomari (RES378 · Fjord, Glace, japonaise féodale)

```json
{
 "fiche": "RES378",
 "nom": "Le Kombu d'Ōtomari",
 "recit": "Au fond du fjord d'Ōtomari, Genzō arrache le kombu à la gaffe depuis sa barque, au ras de la glace. On l'étend sur les galets de la grève pour qu'il sèche au vent froid. Le kombu pris sous la glace est le plus doux ; personne ne sait pourquoi.",
 "pal": [
  "Une barque près de la glace, un homme qui tire un long ruban brun au bout d'une gaffe, et quelques algues sur les galets.",
  "Les grèves sont noires de rubans de kombu étendus en rangs ; les barques reviennent chargées, et le vent froid sèche tout avant le soir."
 ]
}
```

### Les Crosses de Doire Dubh (RES266 · Jungle, Sève, celte)

```json
{
 "fiche": "RES266",
 "nom": "Les Crosses de Doire Dubh",
 "recit": "Dans la jungle de Doire Dubh, les fougères arborescentes montent plus haut que les chênes. Au printemps, Ailín grimpe couper leurs crosses encore roulées, qu'on mange bouillies. On en laisse toujours quelques-unes sur chaque fougère ; sinon, dit-on, elle se déroule la nuit et vous cherche.",
 "pal": [
  "Des fougères géantes sous la canopée humide, une échelle de lianes, et quelques crosses brunes roulées au pied d'un tronc.",
  "Toutes les fougères sont étêtées à mi-hauteur ; les crosses s'entassent en monticules, et les grimpeurs descendent couverts de spores."
 ]
}
```

### L'Alun de Žeravica (RES201 · Volcan, Feu, slave)

```json
{
 "fiche": "RES201",
 "nom": "L'Alun de Žeravica",
 "recit": "Aux lèvres des fumerolles de Žeravica, l'alun se dépose en croûtes pâles. Radko les gratte à la raclette de bois, un linge mouillé sur la bouche, et les vend aux tanneurs de la plaine. Les chèvres qui lèchent les croûtes ne boivent plus pendant des jours.",
 "pal": [
  "Une fumerolle au flanc du cône, une croûte pâle sur la roche, et un homme masqué de linge qui gratte à genoux.",
  "Les fumerolles sont bordées de croûtes pâles sur toute la pente ; des files de racleurs masqués descendent, et l'air pique les yeux."
 ]
}
```
