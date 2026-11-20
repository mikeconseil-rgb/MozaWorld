# Lot 5 : conteur D (le Lovecraftien)

Douze zones à cartes (fiche + 14 cartes) et seize Ressources (fiche légère). Format : `CONSIGNES.md` (avec les leçons des lots 1 à 4) et `cartes-2.2/consignes-cartes.md`, sections 4, 6 et 7. Nombres fixes ; budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 % ; forme du palier 7 entre 45 et 55 points (±15 %), réveil de 60 à 100 % en plus.

Table de budget commune (leçon 7 du lot 3) : « alliés » ×1,5 sur la garde et le soin ; « tous » ×2,2 partout (dégâts, brûlure, hésitation, affaiblissement, marque, perce-garde) ; un effet sous `si` compte pour 50 % ; `exil` = prix de 3 ; `volVie` = moitié des dégâts (aucune carte de D n'en porte) ; `ignoreGarde` = 3 ; `ennemiSoin` n = 2,2n ; `ennemiGarde` n = 2n ; `prixBete` n = n ; `boost` = 6. Chaque budget est calculé par le script et rappelé dans le champ `budget`.

Recettes de récit (profil D), une par zone : commande et feuilles livrées (Badal-Ghat), questions et réponses d'apprentis (Sfoungária), temps profond (Veal Dâmrei), mesure d'arpenteur (Þokuvað), rapport tronqué (Favillae, le seul du lot), procès-verbal et compte (Kryolimnè), règlement en articles (Lianyao-Shan), croyance transmise (Ulluriarjuk), registre des heures de veille (Yoake-dani), arrivée à la deuxième personne (Studenets), lettre d'ingénieur (Châh-e Bâd), deux versions qui s'accordent sur un seul point (Rocca Salsa). Aucun témoignage juré (tic relevé au lot 4).

## Carte des familles

La carte complète (appoints, crochets, collisions) est dans `lot-5/familles_D.md`, écrite avant les cartes (05 h 43), mise à jour à 05 h 50 après familles_C.md (écrit dix secondes plus tôt), et relue contre familles_A.md et familles_B.md à la remise. Résumé, tel que compté au script sur les cartes :

| Zone | Pôle − : famille principale | Pôle + : famille principale |
|---|---|---|
| ANT038 Le Shikargah de Badal-Ghat | Tempête : perce-garde ciblée (la mousson arrache les abris), bêtes de mousson, prix en PV ; crochet `cibleGarde` | Calme : riposte (le tigre immobile), bêtes qui attendent, soin du héros ; crochet `elan` |
| ANT162 Les Bancs de Sfoungária | Mensonge : hésitation ciblée (le leurre), bêtes-leurres, défausse en prix ; crochet `pietine` | Vérité : bêtes du fond (6 cartes), marque sur 4 cartes, pioche ; crochet `seul` (corrigé par le critique : la marque sur 7 cartes recopiait ASS161 +) |
| ANT126 Les Pistes de Veal Dâmrei | Oubli : brûlure ciblée (le feu de brousse efface les pistes), éléphants égarés, affaiblissement ; crochet `brule` | Mémoire : soin des alliés (le troupeau revient chercher les siens), éléphants, garde des alliés ; crochet `bete` |
| ANT047 Þokuvað, le Gué des Tourbières | Brume : invocations (ce qui marche dans la brume), affaiblissement, prix sur la bête ; crochet `vol` | Clarté : soin du héros (l'eau claire de la tourbière), bêtes de l'eau claire, garde du héros ; crochet `blesse` |
| ANT108 Favillae, le Port des Palétuviers | Cendre : affaiblissement ciblé (la cendre étouffe), bêtes de cendre, brûlure ; crochet `soinEnnemi` | Floraison : mana d'Eau (la floraison sous l'eau), bêtes des corolles, soin des alliés, petits coups ; crochet `bete` |
| ASS068 L'Ekklèsia de Kryolimnè | Exil : pioche payée en défausse, Lois (l'ostracisme), hésitation et récupération sur 3 cartes, exil sur une ; crochet `defausseAPrix` | Foyer : brûlure, Lois (le feu commun), garde du héros ; crochet `garde` |
| ASS008 Le Bureau des Fourneaux de Lianyao-Shan | Poison : soin du héros, Lois (l'élixir qui guérit et ronge), dégâts à tous sur 3 cartes, brûlure ; crochet `brule` | Nectar : écho sur 4 cartes (+1, +2, +4, +7) et trois cartes à doubler (+3, +5, +6), Lois, pioche, soin du héros ; crochet `seul` (corrigé par le critique) |
| ASS031 Ulluriarjuk, la Clairière du Conseil | Vide : garde du héros, Lois (le blanc du ciel sans repère), hésitation sur 3 cartes ; crochet `hesite` | Étoiles : perce-garde, Lois (la lumière d'étoile passe au travers), pioche, mana de Sève ; crochet `cibleGarde` |
| DON062 Yoake-dani, la Gorge des Veilleurs | Nuit : riposte (les pièges de la veille), affaiblissement ; crochet `pietine` | Aurore : gros coups ciblés (le premier rayon), brûlure, perce-garde (`ignoreGarde`) ; crochet `blesse` |
| DON076 Le Kourgane de Studenets | Mort : gros coups (6 cartes), affaiblissement sur 2 cartes, exil, perce-garde ; crochet `elan` (corrigé par le critique : Mort en affaiblissement était déjà ASS074, ANT149 et ASS092) | Vie : enchaînement (`cartesJouees`, `troisCartes` : la sève qui monte d'une carte à l'autre), soin du héros, riposte et récupération (3 cartes chacune) ; crochet d'enchaînement sur 7 cartes |
| DON110 Châh-e Bâd, la Tour du Puits | Abysse : garde du héros (la pression du fond), riposte, exil sur 3 cartes ; crochet `garde` | Ciel : mana d'Eau (les tours qui boivent les nuages), garde du héros, coups au hasard et riposte sur 3 cartes ; crochet `vol` |
| CIT015 Le Lazaret de Rocca Salsa | Chaos : invocations (la cohue des sauniers et des déserteurs), dégâts à tous sur 3 cartes, prix sur la bête ; crochet `blesse` | Ordre : marque (la croix de craie sur ce qui doit tomber), garde des alliés, gardes postés ; crochet `vulnerable` |

- Places rares du lot : D prend une hésitation (ANT162 Mensonge), un écho (ASS008 Nectar) et un enchaînement (DON076 Vie) ; ni hasard ni vol de vie en principal. Les coups au hasard n'apparaissent que sur 3 cartes (DON110 Ciel), l'hésitation hors ANT162 sur 3 cartes au plus (ASS031 Vide).
- Autres familles : 2 pôles au plus chez D pour chacune (perce-garde, riposte, marque, brûlure, affaiblissement, mana, garde du héros, soin du héros, invocations) ; une seule fois la pioche, le soin des alliés et les gros coups. Aucune garde des alliés en principal.
- Leçons du lot 4 : récupération sur 3 cartes au plus par pôle ; exil sur 3 cartes au plus par pôle ; aucun `defausseCommune` ; « tous » sur 3 cartes sur 7 au plus dans chaque pôle ; toute carte qui vise ou teste un ennemi précis (`elan`, `pietine`, `vol`, `cibleGarde`, `brule`, `hesite`, `vulnerable`, dégâts) porte `"cible":1` et dit « la cible » ; aucune famille d'appoint dans plus de 3 pôles (hors bêtes des Antres) ; chaque pôle mêle au moins trois familles. Tout est vérifié au script.
- Crochets : une seule condition sur 5 cartes ou plus, l'enchaînement de DON076 Vie (7 cartes), qui est la famille du pôle ; ailleurs, 2 à 3 cartes.
- Prix : 5 cartes à prix sur 7 dans chaque pôle, soit le même nombre aux deux pôles de chaque zone.

## Mots de pôle déjà en jeu : cartes relues avant d'écrire

Relevé au script sur les lots 1 à 4 (familles à 5 cartes ou plus), puis lecture des cartes des pôles du même mot ; au lot 5, lecture de familles_A, B et C.

- **Tempête / Calme** (ANT192 hasard / gros coups ; DON082 dégâts à tous / brûlure de tous ; ASS124 marque / soin des alliés ; DON046 gros coups / garde du héros ; DON080 hasard / soin et pioche ; au lot 5, A ANT093 : pioche / écho). ANT038 : perce-garde sur `cibleGarde` / riposte sur `elan`, jamais employées sur ce couple. Image : la mousson d'un album de chasse, pas une côte ni un col.
- **Mensonge / Vérité** (ANT198 marque / brûlure ; ASS161 pioche / pioche et marque en appoint sur `vulnerable` ; DON081 riposte / gros coups ; au lot 5, C ANT193 : perce-garde / riposte). ANT162 : hésitation ciblée sur `pietine` / marque sur `seul`. La marque de la Vérité n'avait jamais dominé (ASS161 la portait sur 4 cartes) ; ici la pioche n'est qu'un appoint.
- **Oubli / Mémoire** (sept zones : gros coups et exil, bêtes, affaiblissement, hésitation, mana, soin / pioche cinq fois, riposte, récupération ; au lot 5, C CIT014 : garde des alliés / soin du héros). ANT126 : brûlure / soin des alliés, jamais employées sur ce couple ; crochets `brule` / `bete` (C : `pietine` / `vol`).
- **Brume / Clarté** (ANT100 gros coups sur `elan` / écho ; ASS052 affaiblissement de tous / garde et mana ; ASS170 garde du héros / pioche ; DON021 riposte et hasard / gros coups et brûlure). ANT047 : invocations sur `vol` / soin du héros sur `blesse`. Couple unique au lot 5.
- **Cendre / Floraison** (ANT019 dégâts à tous / soin et bêtes ; ASS033 brûlure / garde du héros et riposte ; ASS070 gros coups / pioche et écho ; au lot 5, A ANT130 : invocations / marque). ANT108 : affaiblissement ciblé / mana d'Eau. La brûlure n'est qu'un appoint de la Cendre (4 cartes, petites).
- **Exil / Foyer** (ANT016 marque / pioche ; ANT239 hasard / garde des alliés ; ASS059 brûlure / pioche et soin ; ASS101 exil / soin et mana ; CIT036 garde du héros / soin ; DON030 gros coups ; au lot 5, A ANT187 : invocations / soin des alliés). ASS068 : pioche payée en défausse / brûlure. La pioche n'avait jamais été du côté de l'Exil, la brûlure jamais du côté du Foyer ; l'exil ne touche qu'une carte.
- **Poison / Nectar** (ANT089 gros coups et hésitation / soin ; CIT005 et CIT013 garde du héros et riposte / soin ; DON010 affaiblissement et brûlure / soin ; au lot 5, C ASS061 : marque / affaiblissement, le goûteur). ASS008 : soin du héros (l'élixir qui guérit et ronge) / écho. D a quitté la marque et le goûteur prévus d'abord, parce que C avait écrit dix secondes avant.
- **Vide / Étoiles** (six zones : bêtes, pioche, gros coups, perce-garde sur `seul` / bêtes, pioche trois fois, garde et soin, hasard). ASS031 : garde du héros sur `hesite` / perce-garde sur `cibleGarde`. La perce-garde de CIT017 était du côté du Vide ; ici elle passe du côté des Étoiles. Couple unique au lot 5.
- **Nuit / Aurore** (ANT105 bêtes et affaiblissement de tous / gros coups sur `cibleGarde` et `ignoreGarde` ; ASS148 pioche et récupération / brûlure et marque de tous ; au lot 5, A ASS109 : garde des alliés / pioche). DON062 : riposte sur `pietine` / gros coups sur `blesse`, avec `ignoreGarde` sur 2 cartes seulement.
- **Mort / Vie** (neuf zones : bêtes, gros coups, exil, garde du héros / soin, bêtes, garde, pioche, mana, vol de vie). DON076 : gros coups / enchaînement (le critique a retiré l'affaiblissement principal, déjà pris trois fois par la Mort). Couple unique au lot 5.
- **Abysse / Ciel** (ANT045 affaiblissement / hasard ; ANT161 gros coups / gros coups sur `vol` ; au lot 5, B CIT031 : exil / garde des alliés). DON110 : garde du héros sur `garde` / mana d'Eau sur `vol` (3 cartes) ; les coups au hasard du Ciel ne passent pas 3 cartes.
- **Chaos / Ordre** (hasard trois fois, garde du héros, marque / mana, riposte, pioche, garde du héros, garde des alliés ; au lot 5, C ASS082 : mana / soin des alliés). CIT015 : invocations sur `blesse` / marque sur `vulnerable`. D a quitté le soin des alliés de l'Ordre, pris par C.

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| ANT038 Le Shikargah de Badal-Ghat | Sang / Givre | Givre / Racine |
| ANT162 Les Bancs de Sfoungária | Abîme / Sceau | Sceau / Abîme |
| ANT126 Les Pistes de Veal Dâmrei | Braise / Abîme | Racine / Sceau |
| ANT047 Þokuvað, le Gué des Tourbières | Abîme / Sang | Givre / Braise |
| ANT108 Favillae, le Port des Palétuviers | Braise / Racine | Racine / Braise |
| ASS068 L'Ekklèsia de Kryolimnè | Abîme / Givre | Braise / Sceau |
| ASS008 Le Bureau des Fourneaux de Lianyao-Shan | Sang / Braise | Sceau / Sang |
| ASS031 Ulluriarjuk, la Clairière du Conseil | Givre / Abîme | Sceau / Givre |
| DON062 Yoake-dani, la Gorge des Veilleurs | Sang / Racine | Braise / Sang |
| DON076 Le Kourgane de Studenets | Givre / Sang | Racine / Abîme |
| DON110 Châh-e Bâd, la Tour du Puits | Abîme / Racine | Sang / Braise |
| CIT015 Le Lazaret de Rocca Salsa | Racine / Sceau | Sceau / Givre |

Chaque résonance est posée 4 fois et réveillée 4 fois dans mes douze zones (compté au script) ; aucune forme ne réveille ce qu'elle pose. Chaîne de trois possible, par exemple : ANT126 Oubli pose Braise → ASS008 Poison la réveille et pose Sang → DON062 Aurore le réveille et pose Braise de nouveau ; ou ASS068 Exil pose Abîme → ANT162 Vérité le réveille et pose Sceau → CIT015 Chaos le réveille et pose Racine.

## ±7 : recettes tournantes

- −7 : mousson couchée à l'horizontale (Badal-Ghat), eau trop limpide où les bancs reculent (Sfoungária), incendie qui efface les pistes (Veal Dâmrei), brume qui porte et bois de perches (Þokuvað), croûte de cendre qui respire (Favillae), agora vide et barques sans rameurs (Kryolimnè), maîtres bleus sur les fourneaux éteints (Lianyao-Shan), ciel blanc sans astre (Ulluriarjuk), nuit sans fond et pièges seuls (Yoake-dani), lits de pierre vides (Studenets), entonnoir qui aspire l'île (Châh-e Bâd), lazaret sans murs et cohue (Rocca Salsa).
- +7 : pluie suspendue et attente (Badal-Ghat), récif à sec, une éponge, un œil (Sfoungária), troupeau sous l'herbe chargé d'os (Veal Dâmrei), tourbière de verre et dormeurs en rang (Þokuvað), floraison d'un tenant et marée de pollen (Favillae), cité serrée autour du feu (Kryolimnè), verger du cratère et rire (Lianyao-Shan), étoile sur chaque feuille (Ulluriarjuk), soleil arrêté sur la gorge (Yoake-dani), foule des morts qui redescend (Studenets), nuage posé sur l'île (Châh-e Bâd), désert tracé en cellules (Rocca Salsa).
- Recettes : vide (Ulluriarjuk −, Kryolimnè −), ordre (Rocca Salsa +), foule (Studenets +, Kryolimnè +), immobilité (Badal-Ghat +, Yoake-dani +), démesure (Châh-e Bâd ±, Veal Dâmrei +), ruine (Rocca Salsa −). Aucun +7 peint ou teint ; aucun végétal qui avale un bâtiment (la floraison de Favillae gagne pilotis, barques et cordages, pas le port ; le verger de Lianyao-Shan pousse dans le cratère, à côté des pavillons). Aucune architecture qui devient organisme.

## Ressources : geste, objet, image

battre les pieds des champignons au maillet pour faire tomber les spores dans des draps (RES118) · grimper aux palmiers par des échelles de bambou fixées à demeure et masser les grappes de fleurs pour faire couler la sève (RES369) · fendre la sélénite en feuilles minces à la lame de cuivre (RES331) · étendre au soleil du glacier des lanières de viande de lama salée et les retourner chaque midi (RES019) · détacher au couteau courbe les huîtres accrochées aux racines-échasses, à marée basse (RES150) · descendre à la corde de fibre le long des séracs pour prendre les œufs des oiseaux de mer (RES198) · égrener les cosses de caroubier sur une pierre creuse, au pilon de bois (RES142) · découper la croûte de sel à la hache en briques et les équarrir au couteau (RES274) · peigner la résine collée aux barbes des chèvres qui broutent le ciste (RES038) · enfumer à la torche de feuilles les rayons pendus au-dessus de l'eau, depuis la barque (RES289) · râteler le lichen des rennes et le sécher en meules pour la farine d'hiver (RES057) · cueillir à la perche le bitume qui remonte en bulles et le rouler en boules (RES117) · entailler l'écorce des arbres à encens, puis revenir détacher les larmes séchées (RES202) · arracher l'écorce fibreuse des pieds de champignons et la tordre en cordes (RES164) · scier et polir les pierres à encre dans l'ardoise du torrent (RES370) · tendre des filets entre des perches plantées dans le delta pour y faire prendre les algues (RES168).

- Gestes, objets et images relus contre familles_A, B et C du lot 5 : B a retiré les œufs, le sel, les draps et les algues que D avait déjà ; C a retiré les cordes d'écorce et la vesse-de-loup ; D a changé RES019 (les lanières de charqui remplacent le chuño, que A a aussi pris en RES314), RES057 (le lichen remplace les bois de renne, trop près des défenses de mammouth de B RES126), RES202 (on entaille, on ne gratte plus une résine, comme A RES347) et RES369 (les échelles à demeure remplacent les fours fumants, trop près des fosses à goudron de C RES037).
- Récipients : un seul nommé, les sacs de farine de RES118. Aucun produit tinctorial. Premiers mots des noms : tous différents entre eux (Draps, Palmiers, Feuillets, Lanières, Huîtres, Séracs, Caroubiers, Briques, Barbes, Rayons, Lichen, Bulles, Larmes, Cordiers, Ardoise, Champ).
- Chutes : aucune Ressource sur « nom, compte chiffré, puis anomalie de cette année ». Les chutes tournent : un détail qui cloche (Per-Iâh, Kalamonia, Hukahau, Asbo Arra, Id-Kalam), une habitude des bêtes (Shahd-Ban, Aigolophos), une marque qui reste (eMakhoweni, Puquio Ch'aki), une règle de métier (Yanxi-Jian, Amanoura, Kryopédion).

## Notes pour le critique

- **Collisions avec C (premier écrit, dix secondes avant D)** : sur Poison/Nectar, Chaos/Ordre et Oubli/Mémoire, D a changé la famille qui recoupait celle de C (marque du Poison, soin des alliés de l'Ordre, garde des alliés de la Mémoire) et l'image du goûteur. Sur Mensonge/Vérité, les familles ne se touchaient pas. Les crochets diffèrent sur les quatre couples.
- **Lot 4, « l'ennemi en tête »** : aucune carte de D ne l'écrit. Toute carte qui vise ou teste un ennemi précis (dégâts, marque, brûlure, hésitation ciblée, `elan`, `pietine`, `vol`, `cibleGarde`, `brule`, `hesite`, `vulnerable`) a `"cible":1` et dit « la cible » ; le validateur le vérifie dans les deux sens.
- **Places rares** : D prend l'hésitation d'ANT162 Mensonge (« tous » sur une seule carte, le palier 5 ; le réveil du palier 7 la donne aussi, deux cartes plus loin), l'écho d'ASS008 Nectar et l'enchaînement de DON076 Vie. L'écho est sur les 7 cartes du Nectar : le moteur ne double jamais une carte qui porte elle-même un écho, donc deux cartes du Nectar à la suite ne se doublent pas ; le pôle se joue avec une carte d'une autre zone derrière chaque coupe. C'est voulu, et dit dans la prose du pôle.
- **DON076 Vie, enchaînement** : `cartesJouees` sur 4 cartes, `troisCartes` sur 4 (le palier 4 porte les deux), toujours écrit « si vous avez déjà joué une autre carte ce tour » ou « si c'est au moins votre troisième carte ». C'est le seul crochet de D sur 5 cartes ou plus. Le palier 6 porte le seul `boost` de D (sous condition, palier 6).
- **Dégâts ciblés** : ils servent de charge utile partout, et dépassent 4 cartes dans quatre pôles où ils accompagnent la famille (Aurore 6, Vie 6, Étoiles 5, Ciel 5). Aucun pôle n'est « X dégâts à la cible » sur ses 7 cartes.
- **Récupération et exil** : récupération sur 3 cartes au plus (ASS068 −, DON076 +) ; le moteur saute de toute façon les cartes qui récupèrent ; exil sur 3 cartes au plus (DON076 −, DON110 −), une seule dans ASS068 −.
- **Soin des alliés et garde des alliés** (ANT126 +, ANT108 +, CIT015 ±) : ils ne servent qu'avec des bêtes en jeu ; chaque pôle concerné en invoque au moins 3, et le crochet `bete` de la Mémoire et de la Floraison récompense celui qui les garde en vie.
- **Récits** : un seul tronqué (Favillae). Pas de témoignage juré. Pas de « La Chose-qui- », pas de mot de l'indicible, pas de « trop », « tiède » ni « quarante » (vérifié au script). Le récit de Rocca Salsa reprend la structure des deux versions qui s'accordent sur un point, déjà employée par D au lot 4 (Marjanabad) : une fois par lot.

---

## Le Shikargah de Badal-Ghat (ANT038 · Antre · Jungle · Sève · moghole)

```json
{
 "fiche": "ANT038",
 "nom": "Le Shikargah de Badal-Ghat",
 "recit": "Commande de l'émir Daulat Khan au peintre Nasir Lahauri, pour l'album du shikargah de Badal-Ghat : la mousson sur la jungle ; les paons qui crient avant elle ; le buffle emporté par le torrent ; le tigre assis dans la clairière où la pluie s'arrête. Le peintre a livré quinze feuilles. Sur chacune, quel que soit le sujet, la même clairière ronde occupe un coin, et la pluie peinte s'y arrête à une coudée du sol. Elle est vide sur toutes les feuilles, sauf la dernière. L'émir y est assis, sec, et il regarde le peintre.",
 "pal": [
  "La mousson ne retombe plus : un mur d'eau couché par le vent rase la jungle, les teks passent à l'horizontale, et les paons crient sans reprendre souffle.",
  "Les pavillons de chasse ont perdu leurs toits ; le torrent charrie des buffles, les singes hurlent dans les cimes couchées, et le ciel est vert sombre à midi.",
  "Jungle moghole autour d'un pavillon de chasse à coupoles : banians, tigres sous les teks, rabatteurs en turban, et la mousson qui gronde au loin.",
  "La pluie s'arrête au-dessus des clairières, à une coudée du sol ; les gouttes suspendues tiennent la lumière, et les tigres s'y couchent sans un bruit.",
  "Plus rien ne tombe : toute la mousson pend au-dessus de la jungle, immobile, et dessous les bêtes et les rabatteurs restent assis, secs, à attendre."
 ],
 "pm": "Tempête",
 "pp": "Calme"
}
```

### Pôle − Tempête

Progression : le paon qui crie, le toit du pavillon, le buffle du torrent, les teks couchés, les singes des cimes, le mur d'eau, puis la mousson couchée. Style : on arrache la garde de la cible (ou de tous, deux fois) avant de frapper ; contre une cible qui s'abrite, le coup tombe deux fois. Prix : le héros prend la pluie (PV).

```json
[
{"id": "ANT038-moins-1", "zone": "ANT038", "pole": "-", "palier": 1, "nom": "Le cri des paons", "cout": 1, "cible": 1, "effet": "Un paon de mousson crie avant l'orage : 8 PV, frappe 2. La cible perd sa garde.", "ops": [["invoque", "Paon de mousson", 8, 2], ["briseGarde", "cible"]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Perce-garde"], "ambiance": "À Badal-Ghat, les paons crient avant la mousson, et le rabatteur compte les cris pour savoir quand fuir.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT038-moins-2", "zone": "ANT038", "pole": "-", "palier": 2, "nom": "Le toit du pavillon", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : elle subit 4 dégâts. Puis elle perd sa garde et subit 8 dégâts. Le héros perd 1 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 4]]], ["briseGarde", "cible"], ["deg", "cible", 8], ["prixPV", 1]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Le toit du pavillon de chasse est parti d'un seul coup, coupole comprise, et l'émir a continué son repas.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT038-moins-3", "zone": "ANT038", "pole": "-", "palier": 3, "nom": "Le buffle du torrent", "cout": 1, "cible": 1, "effet": "Un buffle emporté remonte du torrent : 14 PV, frappe 4. La cible perd sa garde.", "ops": [["invoque", "Buffle du torrent", 14, 4], ["briseGarde", "cible"]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Perce-garde"], "ambiance": "Le buffle que Nasir Lahauri a peint emporté par le torrent est revenu le lendemain, mouillé, sans un regard.", "budget": "16 (cible 15, écart +7 % ; vérifié au script)"},
{"id": "ANT038-moins-4", "zone": "ANT038", "pole": "-", "palier": 4, "nom": "Les teks couchés", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle subit 6 dégâts. Puis tous les ennemis perdent leur garde, et la cible subit 18 dégâts. Le héros perd 2 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 6]]], ["briseGarde", "tous"], ["deg", "cible", 18], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Les teks du shikargah sont tombés dans le même sens, la cime vers la clairière où il ne pleut pas.", "budget": "25,6 (cible 28, écart -9 % ; vérifié au script)"},
{"id": "ANT038-moins-5", "zone": "ANT038", "pole": "-", "palier": 5, "nom": "Les singes des cimes couchées", "cout": 2, "cible": 1, "effet": "Une bande de singes hurleurs s'abat sur la cible : 18 PV, frappe 6. La cible subit 10 dégâts, qui ignorent sa garde. Le héros perd 2 PV.", "ops": [["invoque", "Singes hurleurs", 18, 6], ["ignoreGarde"], ["deg", "cible", 10], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Perce-garde", "Dégâts", "Prix"], "ambiance": "Les singes de Badal-Ghat hurlent à la mousson depuis les cimes couchées, et la mousson leur répond de plus près.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ANT038-moins-6", "zone": "ANT038", "pole": "-", "palier": 6, "nom": "Le mur d'eau", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle subit 8 dégâts. Puis elle perd sa garde et subit 20 dégâts. Tous les ennemis subissent 4 dégâts. Le héros perd 3 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["briseGarde", "cible"], ["deg", "cible", 20], ["deg", "tous", 4], ["prixPV", 3]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Le mur d'eau traverse la jungle à hauteur d'homme ; les rabatteurs qui se couchent à temps le regardent passer.", "budget": "32,8 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "ANT038-moins-7", "zone": "ANT038", "pole": "-", "palier": 7, "nom": "La Mousson couchée", "cout": 3, "cible": 0, "effet": "La pluie tombe à l'horizontale. Un éléphant d'orage charge (26 PV, frappe 6). Tous les ennemis perdent leur garde et subissent 10 dégâts. Le héros perd 5 PV. Pose Sang. Si Givre (consommé) : tous hésitent, 6 dégâts à tous, héros +8 de garde.", "ops": [["invoque", "Éléphant d'orage", 26, 6], ["briseGarde", "tous"], ["deg", "tous", 10], ["prixPV", 5], ["pose", "Sang"], ["reveil", "Givre", true, [["hesite", "tous"], ["deg", "tous", 6], ["garde", "heros", 8]]]], "tags": ["Antre", "Sève", "Forme ultime −7", "Invocation", "Perce-garde", "Dégâts", "Prix", "Pose Sang", "Réveil Givre"], "ambiance": "La dernière feuille de l'album montre la mousson couchée sur la jungle, et le papier en est resté gondolé.", "budget": "45,6 (+28,4 si Givre, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Calme

Progression : la goutte suspendue, le tigre assis, la clairière sèche, le crocodile sous la feuille, l'éléphant qui ne bouge plus, la pluie retenue, puis la mousson suspendue. Style : on ne frappe presque pas ; on attend, et chaque coup reçu revient à l'attaquant, plus fort si la cible a pris son élan. Prix : l'ennemi se couvre ou se soigne pendant qu'on attend, ou une carte part.

```json
[
{"id": "ANT038-plus-1", "zone": "ANT038", "pole": "+", "palier": 1, "nom": "La goutte suspendue", "cout": 1, "cible": 0, "effet": "Riposte 3 : jusqu'au prochain tour, chaque coup reçu renvoie 3 dégâts. Le héros gagne 5 de garde.", "ops": [["riposte", 3], ["garde", "heros", 5]], "tags": ["Antre", "Sève", "Pôle +", "Riposte", "Garde"], "ambiance": "La première goutte qui s'arrête à Badal-Ghat reste suspendue à une coudée du sol ; on ne la touche pas.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT038-plus-2", "zone": "ANT038", "pole": "+", "palier": 2, "nom": "Le tigre assis", "cout": 1, "cible": 0, "effet": "Un tigre s'assoit dans la clairière sèche : 10 PV, frappe 3. Riposte 2. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Tigre de la clairière", 10, 3], ["riposte", 2], ["ennemiGarde", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Riposte", "Prix"], "ambiance": "Le tigre de la clairière ne chasse pas : assis au sec, il attend la proie sous la pluie arrêtée.", "budget": "11,5 (cible 12,5, écart -8 % ; vérifié au script)"},
{"id": "ANT038-plus-3", "zone": "ANT038", "pole": "+", "palier": 3, "nom": "La clairière sèche", "cout": 1, "cible": 1, "effet": "Si la cible prend son élan : riposte 4 de plus. Riposte 4. Le héros se soigne de 5. Chaque ennemi se soigne de 1.", "ops": [["si", "elan", [["riposte", 4]]], ["riposte", 4], ["soin", "heros", 5], ["ennemiSoin", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Riposte", "Soin", "Prix"], "ambiance": "Dans la clairière sèche, la poussière ne bouge pas, même quand l'orage tourne tout autour.", "budget": "14,8 (cible 15, écart -1 % ; vérifié au script)"},
{"id": "ANT038-plus-4", "zone": "ANT038", "pole": "+", "palier": 4, "nom": "Le crocodile sous la feuille", "cout": 2, "cible": 0, "effet": "Un crocodile attend sous une feuille de banian : 24 PV, frappe 6. Riposte 4. Défaussez 1 carte au hasard.", "ops": [["invoque", "Crocodile sous la feuille", 24, 6], ["riposte", 4], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Riposte", "Prix"], "ambiance": "Le crocodile du bassin s'est glissé sous une seule feuille de banian, et la feuille le cache tout entier.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT038-plus-5", "zone": "ANT038", "pole": "+", "palier": 5, "nom": "L'éléphant qui ne bouge plus", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : riposte 6 de plus. Riposte 6. Un éléphant immobile se poste : 20 PV, frappe 2. Le héros se soigne de 4.", "ops": [["si", "elan", [["riposte", 6]]], ["riposte", 6], ["invoque", "Éléphant immobile", 20, 2], ["soin", "heros", 4]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Riposte", "Invocation", "Soin"], "ambiance": "L'éléphant de l'émir est resté debout sous la pluie arrêtée depuis la dernière feuille ; il respire, une fois par jour.", "budget": "35 (cible 32, écart +9 % ; vérifié au script)"},
{"id": "ANT038-plus-6", "zone": "ANT038", "pole": "+", "palier": 6, "nom": "La pluie retenue", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : riposte 6 de plus. Riposte 11. Le héros se soigne de 8. Défaussez 1 carte au hasard.", "ops": [["si", "elan", [["riposte", 6]]], ["riposte", 11], ["soin", "heros", 8], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Riposte", "Soin", "Prix"], "ambiance": "Les rabatteurs de Badal-Ghat ne lèvent plus la tête : toute la pluie de la saison est juste au-dessus.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ANT038-plus-7", "zone": "ANT038", "pole": "+", "palier": 7, "nom": "La Mousson suspendue", "cout": 3, "cible": 0, "effet": "Plus rien ne tombe. Riposte 12. Un tigre sec se couche à vos pieds (20 PV, frappe 6). Le héros se soigne de 8. Chaque ennemi gagne 2 de garde. Pose Givre. Si Racine (consommée) : riposte 8 de plus, alliés +10 de garde, héros soigné de 2.", "ops": [["riposte", 12], ["invoque", "Tigre sec", 20, 6], ["soin", "heros", 8], ["ennemiGarde", 2], ["pose", "Givre"], ["reveil", "Racine", true, [["riposte", 8], ["garde", "allies", 10], ["soin", "heros", 2]]]], "tags": ["Antre", "Sève", "Forme ultime +7", "Riposte", "Invocation", "Soin", "Prix", "Pose Givre", "Réveil Racine"], "ambiance": "Sur la dernière feuille, l'émir assis au sec ne cligne pas ; le peintre a jeté son pinceau dans le bassin.", "budget": "47 (+30 si Racine, soit +64 % ; vérifié au script)"}
]
```

---

## Les Bancs de Sfoungária (ANT162 · Antre · Récif · Eau · grecque)

```json
{
 "fiche": "ANT162",
 "nom": "Les Bancs de Sfoungária",
 "recit": "Questions que le maître des plongeurs de Sfoungária pose aux apprentis, et réponses attendues. Combien de brasses tient un souffle ? Vingt et une. Que voit-on au fond ? Des éponges, des murènes, la pierre blanche. Qui parle au fond ? Personne. Que dit-il ? Qu'il reste des éponges plus loin. Faut-il le croire ? Une fois sur deux. Laquelle ? Le maître, Stamatis Lerios, n'a jamais donné cette réponse. Il plonge encore, à son âge, et remonte chaque fois avec un panier plein et les yeux d'un autre homme, plus clairs.",
 "pal": [
  "L'eau est si limpide qu'on voit les bancs d'éponges à portée de main ; ils reculent d'une brasse à chaque plongée, et les rochers du fond ont des bouches.",
  "Les murènes portent sur la tête un leurre de chair en forme d'éponge ; les barques rapportent des pierres blanches que tous jurent être des éponges.",
  "Récif grec d'eau turquoise, caïques à voile latine, plongeurs nus lestés d'une pierre plate, éponges qui sèchent en chapelets sur les quais blanchis.",
  "L'eau se trouble ; au fond, les bancs apparaissent tels qu'ils sont, ravagés, et des choses pâles fixées à la roche regardent les plongeurs remonter.",
  "La mer s'est retirée du récif ; sur la roche sèche, chaque éponge a un œil ouvert, et les plongeurs n'osent plus mentir à voix haute, même pour rire."
 ],
 "pm": "Mensonge",
 "pp": "Vérité"
}
```

### Pôle − Mensonge

Progression : la murène au leurre, l'éponge qui n'en est pas une, le poulpe aux bras peints, le panier de pierres blanches, le banc qui recule, la voix du fond, puis le banc de Sfoungária. Style : la cible croit voir autre chose et n'agit pas ; on frappe pendant qu'elle hésite, plus fort si elle s'apprêtait à charger. Prix : le paquet se vide de ce qu'on croyait tenir (défausse).

```json
[
{"id": "ANT162-moins-1", "zone": "ANT162", "pole": "-", "palier": 1, "nom": "La murène au leurre", "cout": 1, "cible": 1, "effet": "Une murène agite son leurre de chair : 6 PV, frappe 2. La cible hésite.", "ops": [["invoque", "Murène au leurre", 6, 2], ["hesite", "cible"]], "tags": ["Antre", "Eau", "Pôle −", "Invocation", "Contrôle"], "ambiance": "La murène de Sfoungária agite sur sa tête une petite éponge de chair ; les apprentis tendent toujours la main.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "ANT162-moins-2", "zone": "ANT162", "pole": "-", "palier": 2, "nom": "L'éponge qui n'en est pas une", "cout": 1, "cible": 1, "effet": "Si la cible piétine ou charge : elle subit 4 dégâts. La cible hésite et subit 6 dégâts.", "ops": [["si", "pietine", [["deg", "cible", 4]]], ["hesite", "cible"], ["deg", "cible", 6]], "tags": ["Antre", "Eau", "Pôle −", "Condition", "Dégâts", "Contrôle"], "ambiance": "Stamatis Lerios enseigne qu'une éponge vraie ne respire pas ; il ne dit pas ce que font les autres.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT162-moins-3", "zone": "ANT162", "pole": "-", "palier": 3, "nom": "Le poulpe aux bras peints", "cout": 1, "cible": 1, "effet": "Un poulpe se fait pierre blanche : 12 PV, frappe 3. La cible hésite. Le héros gagne 4 de garde. Défaussez 1 carte au hasard.", "ops": [["invoque", "Poulpe des pierres blanches", 12, 3], ["hesite", "cible"], ["garde", "heros", 4], ["prixDefausse", 1]], "tags": ["Antre", "Eau", "Pôle −", "Invocation", "Contrôle", "Garde", "Prix"], "ambiance": "Le poulpe du récif prend la couleur de la pierre blanche, puis celle du panier, puis celle du plongeur.", "budget": "15,7 (cible 15, écart +5 % ; vérifié au script)"},
{"id": "ANT162-moins-4", "zone": "ANT162", "pole": "-", "palier": 4, "nom": "Le panier de pierres blanches", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : elle subit 8 dégâts. La cible hésite et subit 20 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "pietine", [["deg", "cible", 8]]], ["hesite", "cible"], ["deg", "cible", 20], ["prixDefausse", 1]], "tags": ["Antre", "Eau", "Pôle −", "Condition", "Dégâts", "Contrôle", "Prix"], "ambiance": "Les paniers remontés à Sfoungária pèsent le poids des éponges et sonnent comme des pierres sur le quai.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT162-moins-5", "zone": "ANT162", "pole": "-", "palier": 5, "nom": "Le banc qui recule", "cout": 2, "cible": 0, "effet": "Un banc de sars vous suit : 16 PV, frappe 4. Tous les ennemis hésitent et subissent 4 dégâts. Défaussez 1 carte au hasard.", "ops": [["invoque", "Banc de sars", 16, 4], ["hesite", "tous"], ["deg", "tous", 4], ["prixDefausse", 1]], "tags": ["Antre", "Eau", "Pôle −", "Invocation", "Contrôle", "Dégâts", "Prix"], "ambiance": "Le banc d'éponges recule d'une brasse à chaque plongée, et les sars le suivent comme un troupeau son berger.", "budget": "28,6 (cible 32, écart -11 % ; vérifié au script)"},
{"id": "ANT162-moins-6", "zone": "ANT162", "pole": "-", "palier": 6, "nom": "La voix du fond", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : elle subit 10 dégâts. La cible hésite et subit 8 dégâts. Un rocher à bouche s'ouvre : 22 PV, frappe 5. Défaussez 1 carte au hasard.", "ops": [["si", "pietine", [["deg", "cible", 10]]], ["hesite", "cible"], ["deg", "cible", 8], ["invoque", "Rocher à bouche", 22, 5], ["prixDefausse", 1]], "tags": ["Antre", "Eau", "Pôle −", "Condition", "Dégâts", "Contrôle", "Invocation", "Prix"], "ambiance": "Au fond de Sfoungária, personne ne parle ; les apprentis remontent pourtant en répétant la même phrase, mot pour mot.", "budget": "33,5 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "ANT162-moins-7", "zone": "ANT162", "pole": "-", "palier": 7, "nom": "Le Banc de Sfoungária", "cout": 3, "cible": 1, "effet": "Le récif ment pour vous. Un plongeur aux yeux d'un autre remonte (26 PV, frappe 6). La cible hésite, subit 14 dégâts. Piochez 2 cartes, défaussez-en 2 au hasard. Pose Abîme. Si Sceau (consommé) : tous hésitent, piochez 2, 10 dégâts à la cible.", "ops": [["invoque", "Plongeur aux yeux d'un autre", 26, 6], ["hesite", "cible"], ["deg", "cible", 14], ["pioche", 2], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Sceau", true, [["hesite", "tous"], ["pioche", 2], ["deg", "cible", 10]]]], "tags": ["Antre", "Eau", "Forme ultime −7", "Invocation", "Contrôle", "Dégâts", "Pioche", "Prix", "Pose Abîme", "Réveil Sceau"], "ambiance": "Le plongeur qui remonte du banc salue Stamatis Lerios par son nom, avec la voix de Stamatis Lerios.", "budget": "43 (+26,8 si Sceau, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Vérité

Progression : l'eau qui se trouble, la chose pâle, le panier vidé, le mérou qui regarde, les bancs tels qu'ils sont, la mer qui se retire, puis le récif mis à nu. Style : on désigne la cible, qui encaisse de plus en plus à chaque coup, et quand il ne reste qu'un ennemi, il n'a plus rien pour se cacher. Prix : voir coûte des PV, ou l'ennemi se couvre.

```json
[
{"id": "ANT162-plus-1", "zone": "ANT162", "pole": "+", "palier": 1, "nom": "L'eau qui se trouble", "cout": 1, "cible": 0, "effet": "Une murène claire sort de son trou : 8 PV, frappe 2. Piochez 1 carte.", "ops": [["invoque", "Murène claire", 8, 2], ["pioche", 1]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Pioche"], "ambiance": "Quand l'eau de Sfoungária se trouble, les plongeurs voient enfin le fond, et ils remontent plus vite.", "budget": "11 / 10 (+10 %) recalculé par le critique"},
{"id": "ANT162-plus-2", "zone": "ANT162", "pole": "+", "palier": 2, "nom": "La chose pâle sur la roche", "cout": 1, "cible": 1, "effet": "Une ascidie pâle s'ouvre sur la roche : 12 PV, frappe 2. La cible est marquée de 1.", "ops": [["invoque", "Ascidie pâle", 12, 2], ["vulnerable", "cible", 1]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Marque"], "ambiance": "Les choses pâles du récif sont fixées à la roche par le pied ; elles se tournent quand un plongeur passe.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT162-plus-3", "zone": "ANT162", "pole": "+", "palier": 3, "nom": "Le panier vidé", "cout": 1, "cible": 1, "effet": "S'il ne reste qu'un ennemi : il subit 6 dégâts. Un poulpe sort d'entre les pierres du panier : 10 PV, frappe 4. Le héros gagne 4 de garde et perd 1 PV.", "ops": [["si", "seul", [["deg", "cible", 6]]], ["invoque", "Poulpe du panier", 10, 4], ["garde", "heros", 4], ["prixPV", 1]], "tags": ["Antre", "Eau", "Pôle +", "Condition", "Dégâts", "Invocation", "Garde", "Prix"], "ambiance": "Vidé sur le quai, le panier de Sfoungária ne contenait que des pierres, et chacun l'avait su en plongeant.", "budget": "16,2 / 15 (+8 %) recalculé par le critique"},
{"id": "ANT162-plus-4", "zone": "ANT162", "pole": "+", "palier": 4, "nom": "Le mérou qui regarde", "cout": 2, "cible": 1, "effet": "Un mérou aux yeux ouverts monte du fond : 22 PV, frappe 5. La cible est marquée de 2 et subit 6 dégâts. Le héros perd 2 PV.", "ops": [["invoque", "Mérou aux yeux ouverts", 22, 5], ["vulnerable", "cible", 2], ["deg", "cible", 6], ["prixPV", 2]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Marque", "Dégâts", "Prix"], "ambiance": "Le mérou du grand tombant regarde les plongeurs sans bouger ; ceux qu'il a regardés ne mentent plus de la saison.", "budget": "28,5 (cible 28, écart +2 % ; vérifié au script)"},
{"id": "ANT162-plus-5", "zone": "ANT162", "pole": "+", "palier": 5, "nom": "Les bancs tels qu'ils sont", "cout": 2, "cible": 1, "effet": "S'il ne reste qu'un ennemi : il subit 10 dégâts. Une murène des bancs ravagés sort de la roche : 14 PV, frappe 6. La cible subit 8 dégâts. Piochez 1 carte. Le héros perd 3 PV.", "ops": [["si", "seul", [["deg", "cible", 10]]], ["invoque", "Murène des bancs ravagés", 14, 6], ["deg", "cible", 8], ["pioche", 1], ["prixPV", 3]], "tags": ["Antre", "Eau", "Pôle +", "Condition", "Dégâts", "Invocation", "Pioche", "Prix"], "ambiance": "Les bancs de Sfoungária, vus tels qu'ils sont, ne portent plus une éponge ; ils sont ravagés depuis l'enfance du maître.", "budget": "30 / 32 (-6 %) recalculé par le critique"},
{"id": "ANT162-plus-6", "zone": "ANT162", "pole": "+", "palier": 6, "nom": "La mer qui se retire", "cout": 2, "cible": 1, "effet": "Un crabe des roches sèches sort de son trou : 24 PV, frappe 6. La cible est marquée de 3 et subit 8 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Crabe des roches sèches", 24, 6], ["vulnerable", "cible", 3], ["deg", "cible", 8], ["ennemiGarde", 1]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Marque", "Dégâts", "Prix"], "ambiance": "La mer recule d'une brasse par jour autour de Sfoungária ; les caïques restent posés sur la pierre, droits.", "budget": "36 (cible 36, écart +0 % ; vérifié au script)"},
{"id": "ANT162-plus-7", "zone": "ANT162", "pole": "+", "palier": 7, "nom": "Le Récif mis à nu", "cout": 3, "cible": 1, "effet": "Chaque éponge ouvre un œil. S'il ne reste qu'un ennemi : marqué de 4. Tous les ennemis sont marqués de 2. Piochez 2. La cible subit 20 dégâts. Le héros perd 4 PV. Pose Sceau. Si Abîme (consommé) : la cible est marquée de 3 et subit 18 dégâts.", "ops": [["si", "seul", [["vulnerable", "cible", 4]]], ["vulnerable", "tous", 2], ["pioche", 2], ["deg", "cible", 20], ["prixPV", 4], ["pose", "Sceau"], ["reveil", "Abîme", true, [["vulnerable", "cible", 3], ["deg", "cible", 18]]]], "tags": ["Antre", "Eau", "Forme ultime +7", "Condition", "Marque", "Pioche", "Dégâts", "Prix", "Pose Sceau", "Réveil Abîme"], "ambiance": "Sur le récif à sec, les yeux des éponges suivent le maître ; lui seul ne baisse pas les siens.", "budget": "43,2 (+27 si Abîme, soit +62 % ; vérifié au script)"}
]
```

---

## Les Pistes de Veal Dâmrei (ANT126 · Antre · Savane · Feu · khmère)

```json
{
 "fiche": "ANT126",
 "nom": "Les Pistes de Veal Dâmrei",
 "recit": "Les éléphants de Veal Dâmrei suivent des pistes plus anciennes que la savane. Six cent douze générations de troupeaux les ont tassées dans la latérite, et les cornacs khmers les empruntent pour aller d'un bassin à l'autre. Chaque saison sèche, on brûle la plaine ; chaque saison, les pistes reparaissent sous la cendre. L'an dernier, le feu a duré plus que de coutume. Quand il s'est éteint, la vieille femelle que le cornac Prak Sokha monte depuis l'enfance a pris une piste que personne ne connaissait, droit vers l'ouest, où il n'y a pas d'eau. Le troupeau l'a suivie.",
 "pal": [
  "La savane brûle par plaques qui ne s'éteignent pas ; les pistes ont disparu, et les éléphants tournent en silence autour d'un bassin qu'ils ne trouvent plus.",
  "Les feux de saison sèche ont pris d'avance ; la latérite fume, les cornacs perdent la piste, et des éléphants seuls marchent vers l'ouest, la trompe basse.",
  "Savane khmère de rôniers et de hautes herbes, pistes rouges tassées par les troupeaux, bassins de latérite, cornacs en krâma qui mènent les éléphants boire.",
  "Les pistes se creusent en tranchées ; les troupeaux y repassent en file serrée, et les rôniers portent des marques de défenses, toutes à la même hauteur.",
  "La plaine n'est plus que pistes, si creuses que les éléphants y marchent sous l'herbe ; ils portent sur le dos les os de leurs morts et ne les déposent jamais."
 ],
 "pm": "Oubli",
 "pp": "Mémoire"
}
```

### Pôle − Oubli

Progression : la piste sous la cendre, l'éléphant égaré, le rônier qui flambe, la vieille femelle qui tourne, la plaine qui fume, le troupeau sans bassin, puis la savane sans pistes. Style : on met le feu à la cible, et ce qui brûle déjà brûle plus fort ; les bêtes égarées tiennent le terrain pendant que le feu travaille. Prix : le héros se brûle, ou une bête se perd.

```json
[
{"id": "ANT126-moins-1", "zone": "ANT126", "pole": "-", "palier": 1, "nom": "La piste sous la cendre", "cout": 1, "cible": 1, "effet": "La cible brûle : 2 dégâts au début de chacun de ses 3 prochains tours. Elle perd 1 d'attaque.", "ops": [["brulure", "cible", 2, 3], ["affaiblit", "cible", 1]], "tags": ["Antre", "Feu", "Pôle −", "Dégâts dans le temps", "Affaiblissement"], "ambiance": "À Veal Dâmrei, la piste reparaît sous la cendre chaque saison ; cette année, elle n'a pas reparu.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ANT126-moins-2", "zone": "ANT126", "pole": "-", "palier": 2, "nom": "L'éléphant égaré", "cout": 1, "cible": 1, "effet": "Un éléphant sans piste vous suit : 12 PV, frappe 3. La cible brûle : 1 dégât pendant 3 tours.", "ops": [["invoque", "Éléphant égaré", 12, 3], ["brulure", "cible", 1, 3]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Dégâts dans le temps"], "ambiance": "L'éléphant égaré de Veal Dâmrei a suivi le cornac Prak Sokha jusqu'au village, puis il a oublié pourquoi.", "budget": "13,5 (cible 12,5, écart +8 % ; vérifié au script)"},
{"id": "ANT126-moins-3", "zone": "ANT126", "pole": "-", "palier": 3, "nom": "Le rônier qui flambe", "cout": 1, "cible": 1, "effet": "Si la cible brûle déjà : elle subit 4 dégâts. La cible brûle : 3 dégâts pendant 4 tours, et perd 1 d'attaque. Le héros perd 1 PV.", "ops": [["si", "brule", [["deg", "cible", 4]]], ["brulure", "cible", 3, 4], ["affaiblit", "cible", 1], ["prixPV", 1]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Affaiblissement", "Prix"], "ambiance": "Les rôniers de la savane flambent comme des torches ; les marques de défenses sur leurs troncs partent en premier.", "budget": "16 (cible 15, écart +7 % ; vérifié au script)"},
{"id": "ANT126-moins-4", "zone": "ANT126", "pole": "-", "palier": 4, "nom": "La vieille femelle qui tourne", "cout": 2, "cible": 1, "effet": "La vieille femelle se lève, sans piste : 24 PV, frappe 6. La cible brûle : 2 dégâts pendant 4 tours. Le héros perd 2 PV.", "ops": [["invoque", "Vieille femelle sans piste", 24, 6], ["brulure", "cible", 2, 4], ["prixPV", 2]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "La vieille femelle tourne autour du bassin de latérite, à sec, et Prak Sokha tourne avec elle sur son dos.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ANT126-moins-5", "zone": "ANT126", "pole": "-", "palier": 5, "nom": "La plaine qui fume", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : elle perd 2 d'attaque. Tous les ennemis brûlent : 2 dégâts pendant 3 tours ; la cible brûle en plus de 3 pendant 3 tours et subit 6 dégâts. Le héros perd 2 PV.", "ops": [["si", "brule", [["affaiblit", "cible", 2]]], ["brulure", "tous", 2, 3], ["brulure", "cible", 3, 3], ["deg", "cible", 6], ["prixPV", 2]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Affaiblissement", "Dégâts dans le temps", "Dégâts", "Prix"], "ambiance": "La latérite de Veal Dâmrei fume une lune après le feu ; les traces qu'on y laisse s'effacent dans l'heure.", "budget": "29,2 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ANT126-moins-6", "zone": "ANT126", "pole": "-", "palier": 6, "nom": "Le troupeau sans bassin", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : elle subit 8 dégâts. Un troupeau égaré se met en marche : 26 PV, frappe 6. La cible brûle : 3 dégâts pendant 4 tours. Votre bête la plus faible perd 2 PV.", "ops": [["si", "brule", [["deg", "cible", 8]]], ["invoque", "Troupeau égaré", 26, 6], ["brulure", "cible", 3, 4], ["prixBete", 2]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "Le troupeau a marché vers l'ouest sur une piste que personne n'avait tracée, et il n'a laissé aucune empreinte.", "budget": "36 (cible 36, écart +0 % ; vérifié au script)"},
{"id": "ANT126-moins-7", "zone": "ANT126", "pole": "-", "palier": 7, "nom": "La Savane sans pistes", "cout": 3, "cible": 1, "effet": "Le feu efface les pistes. Tous les ennemis brûlent (3 pendant 3 tours) perdent 1 d'attaque. La cible brûle de 4 (3 tours), subit 8 dégâts. Le héros perd 4 PV. Pose Braise. Si Abîme (consommé) : la cible brûle de 5 (3 tours), −3 d'attaque, 4 dégâts.", "ops": [["brulure", "tous", 3, 3], ["affaiblit", "tous", 1], ["brulure", "cible", 4, 3], ["deg", "cible", 8], ["prixPV", 4], ["pose", "Braise"], ["reveil", "Abîme", true, [["brulure", "cible", 5, 3], ["affaiblit", "cible", 3], ["deg", "cible", 4]]]], "tags": ["Antre", "Feu", "Forme ultime −7", "Dégâts dans le temps", "Affaiblissement", "Dégâts", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "La plaine de Veal Dâmrei brûle sans laisser de cendre ; les cornacs ne savent plus de quel côté est l'eau.", "budget": "42,4 (+28 si Abîme, soit +66 % ; vérifié au script)"}
]
```

### Pôle + Mémoire

Progression : les marques sur les rôniers, la jeune femelle qui revient, la tranchée des troupeaux, le mâle qui porte les os, le bassin qui se souvient, la file serrée, puis les pistes creuses. Style : un troupeau qu'on ne laisse pas mourir ; chaque carte soigne les bêtes, et mieux encore quand une bête est déjà là. Prix : l'ennemi se soigne ou se couvre aussi, ou une carte part.

```json
[
{"id": "ANT126-plus-1", "zone": "ANT126", "pole": "+", "palier": 1, "nom": "Les marques sur les rôniers", "cout": 1, "cible": 0, "effet": "Vos alliés se soignent de 4. Le héros gagne 5 de garde.", "ops": [["soin", "allies", 4], ["garde", "heros", 5]], "tags": ["Antre", "Feu", "Pôle +", "Soin", "Garde"], "ambiance": "Les éléphants de Veal Dâmrei frottent leurs défenses aux mêmes rôniers depuis six cent douze générations, au même endroit.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT126-plus-2", "zone": "ANT126", "pole": "+", "palier": 2, "nom": "La jeune femelle qui revient", "cout": 1, "cible": 0, "effet": "Une jeune femelle revient au troupeau : 10 PV, frappe 2. Vos alliés se soignent de 3.", "ops": [["invoque", "Jeune femelle", 10, 2], ["soin", "allies", 3]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Soin"], "ambiance": "La jeune femelle perdue au dernier feu est revenue seule par la tranchée, en tenant la queue d'une morte.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "ANT126-plus-3", "zone": "ANT126", "pole": "+", "palier": 3, "nom": "La tranchée des troupeaux", "cout": 1, "cible": 0, "effet": "Si une bête est déjà en jeu : vos alliés gagnent 4 de garde. Vos alliés se soignent de 5 et gagnent 5 de garde. Chaque ennemi se soigne de 1.", "ops": [["si", "bete", [["garde", "allies", 4]]], ["soin", "allies", 5], ["garde", "allies", 5], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Garde", "Soin", "Prix"], "ambiance": "Les pistes de Veal Dâmrei se creusent d'un pouce par saison, et les troupeaux y marchent maintenant à couvert.", "budget": "13,7 (cible 15, écart -9 % ; vérifié au script)"},
{"id": "ANT126-plus-4", "zone": "ANT126", "pole": "+", "palier": 4, "nom": "Le mâle qui porte les os", "cout": 2, "cible": 0, "effet": "Un mâle aux défenses marquées porte les os des siens : 26 PV, frappe 6. Vos alliés se soignent de 6. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Mâle aux défenses marquées", 26, 6], ["soin", "allies", 6], ["ennemiGarde", 1]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "Le grand mâle porte sur son dos les os d'une femelle morte avant la naissance de Prak Sokha.", "budget": "29 (cible 28, écart +4 % ; vérifié au script)"},
{"id": "ANT126-plus-5", "zone": "ANT126", "pole": "+", "palier": 5, "nom": "Le bassin qui se souvient", "cout": 2, "cible": 0, "effet": "Si une bête est déjà en jeu : vos alliés se soignent de 6. Vos alliés se soignent de 12 et gagnent 8 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["soin", "allies", 6]]], ["soin", "allies", 12], ["garde", "allies", 8], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Soin", "Garde", "Prix"], "ambiance": "Le bassin de latérite se remplit quand le troupeau arrive, même en saison sèche, et se vide quand il repart.", "budget": "29,1 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ANT126-plus-6", "zone": "ANT126", "pole": "+", "palier": 6, "nom": "La file serrée", "cout": 2, "cible": 0, "effet": "Si une bête est déjà en jeu : vos alliés gagnent 6 de garde. Une matriarche ferme la file : 28 PV, frappe 6. Vos alliés se soignent de 8. Chaque ennemi se soigne de 1.", "ops": [["si", "bete", [["garde", "allies", 6]]], ["invoque", "Matriarche de la file", 28, 6], ["soin", "allies", 8], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Garde", "Invocation", "Soin", "Prix"], "ambiance": "Dans la tranchée, la file serrée marche flanc contre flanc ; les petits avancent dessous sans voir le ciel.", "budget": "36,4 (cible 36, écart +1 % ; vérifié au script)"},
{"id": "ANT126-plus-7", "zone": "ANT126", "pole": "+", "palier": 7, "nom": "Les Pistes creuses", "cout": 3, "cible": 0, "effet": "Le troupeau n'oublie personne. Le troupeau des pistes se lève (30 PV, frappe 6). Vos alliés se soignent de 12 et gagnent 8 de garde. Défaussez 1 carte au hasard. Pose Racine. Si Sceau (consommé) : alliés soignés de 10, piochez 2, héros soigné de 8.", "ops": [["invoque", "Troupeau des pistes", 30, 6], ["soin", "allies", 12], ["garde", "allies", 8], ["prixDefausse", 1], ["pose", "Racine"], ["reveil", "Sceau", true, [["soin", "allies", 10], ["pioche", 2], ["soin", "heros", 8]]]], "tags": ["Antre", "Feu", "Forme ultime +7", "Invocation", "Soin", "Garde", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Les éléphants marchent sous le niveau de l'herbe, chargés d'os, et Prak Sokha entend parfois son propre nom.", "budget": "48,6 (+31 si Sceau, soit +64 % ; vérifié au script)"}
]
```

---

## Þokuvað, le Gué des Tourbières (ANT047 · Antre · Marais · Sève · nordique)

```json
{
 "fiche": "ANT047",
 "nom": "Þokuvað, le Gué des Tourbières",
 "recit": "Ketill Grímsson, envoyé par le thing pour borner le gué de Þokuvað, a planté ses perches de bouleau dans la tourbière au lever du jour : soixante et onze pieds de la rive aux saules. À midi, la brume est montée de l'eau noire, et il a repris la mesure : soixante et onze pieds, juste. Le soir, quand elle s'est levée, il a compté une perche en plus, plantée droite, de la même écorce. Les fermiers du gué disent qu'il faut compter les perches deux fois et ne jamais arracher celle en plus. Ketill l'a arrachée. Elle était chaude.",
 "pal": [
  "La brume est si épaisse qu'elle porte : des formes y marchent sans toucher l'eau, et les perches du gué sont si nombreuses qu'on dirait un bois sans feuilles.",
  "Brume basse sur la tourbière ; on entend des pas dans l'eau où personne ne passe, et des perches de bouleau neuves se dressent chaque matin au milieu du gué.",
  "Tourbière nordique d'eau noire et de linaigrettes, gué balisé de perches de bouleau, ferme de tourbe aux toits d'herbe, brume du matin qui se lève vite.",
  "L'eau noire s'éclaircit jusqu'au fond ; on y voit les vieilles perches couchées dans la tourbe, des chaussures, des mains de cuir brun, nettes sous une vitre.",
  "La tourbière est claire comme l'air jusqu'au lit de tourbe ; les dormeurs du fond y reposent en rang, les yeux ouverts, et le gué passe au-dessus d'eux."
 ],
 "pm": "Brume",
 "pp": "Clarté"
}
```

### Pôle − Brume

Progression : les pas dans l'eau, la perche en plus, le noyé de la tourbe, la forme sans pieds, la brume qui porte, les fermiers de l'autre rive, puis le bois de perches. Style : la brume se peuple ; chaque carte amène quelqu'un qui marche sans toucher l'eau, et ce qui vole par-dessus le gué s'y alourdit. Prix : ce qui sort de la brume se nourrit des bêtes déjà là.

```json
[
{"id": "ANT047-moins-1", "zone": "ANT047", "pole": "-", "palier": 1, "nom": "Les pas dans l'eau", "cout": 1, "cible": 1, "effet": "Quelque chose marche dans la brume à vos côtés : 8 PV, frappe 2. La cible subit 3 dégâts.", "ops": [["invoque", "Marcheur de brume", 8, 2], ["deg", "cible", 3]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Dégâts"], "ambiance": "À Þokuvað, on entend des pas dans l'eau du gué, et on ne se retourne pas avant la rive.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT047-moins-2", "zone": "ANT047", "pole": "-", "palier": 2, "nom": "La perche en plus", "cout": 1, "cible": 1, "effet": "Si la cible vole : elle subit 4 dégâts. Une perche de bouleau se met à marcher : 12 PV, frappe 3.", "ops": [["si", "vol", [["deg", "cible", 4]]], ["invoque", "Perche qui marche", 12, 3]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Dégâts", "Invocation"], "ambiance": "La perche en plus a la même écorce que les autres, et elle n'est jamais plantée au même endroit.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "ANT047-moins-3", "zone": "ANT047", "pole": "-", "palier": 3, "nom": "Le noyé de la tourbe", "cout": 1, "cible": 1, "effet": "Un noyé remonte de la tourbe : 14 PV, frappe 4. La cible perd 1 d'attaque. Votre bête la plus faible perd 2 PV.", "ops": [["invoque", "Noyé de la tourbe", 14, 4], ["affaiblit", "cible", 1], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Le noyé de Þokuvað sort de la tourbe à reculons, couvert de brume, et rejoint les fermiers sans un mot.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ANT047-moins-4", "zone": "ANT047", "pole": "-", "palier": 4, "nom": "La forme sans pieds", "cout": 2, "cible": 1, "effet": "Si la cible vole : la brume l'alourdit, elle perd 2 d'attaque. Une forme sans pieds se dresse : 22 PV, frappe 6. La cible perd 2 d'attaque. Votre bête la plus faible perd 2 PV.", "ops": [["si", "vol", [["affaiblit", "cible", 2]]], ["invoque", "Forme sans pieds", 22, 6], ["affaiblit", "cible", 2], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Affaiblissement", "Invocation", "Prix"], "ambiance": "Ketill Grímsson a noté une forme sans pieds entre deux perches ; il a mesuré sa hauteur, et rien d'autre.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ANT047-moins-5", "zone": "ANT047", "pole": "-", "palier": 5, "nom": "La brume qui porte", "cout": 2, "cible": 1, "effet": "La brume se dresse en silhouette : 24 PV, frappe 6. La cible subit 12 dégâts. Votre bête la plus faible perd 2 PV.", "ops": [["invoque", "Brume dressée", 24, 6], ["deg", "cible", 12], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Au solstice, la brume de Þokuvað est assez épaisse pour qu'un enfant s'y assoie ; on l'en empêche.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "ANT047-moins-6", "zone": "ANT047", "pole": "-", "palier": 6, "nom": "Les fermiers de l'autre rive", "cout": 2, "cible": 1, "effet": "Si la cible vole : elle perd 2 d'attaque. Les fermiers de l'autre rive traversent : 30 PV, frappe 7. La cible perd 2 d'attaque et subit 4 dégâts. Votre bête la plus faible perd 3 PV.", "ops": [["si", "vol", [["affaiblit", "cible", 2]]], ["invoque", "Fermiers de l'autre rive", 30, 7], ["affaiblit", "cible", 2], ["deg", "cible", 4], ["prixBete", 3]], "tags": ["Antre", "Sève", "Pôle −", "Condition", "Affaiblissement", "Invocation", "Dégâts", "Prix"], "ambiance": "Il n'y a pas de ferme sur l'autre rive ; les fermiers qui en viennent saluent pourtant ceux de Þokuvað.", "budget": "35,5 (cible 36, écart -1 % ; vérifié au script)"},
{"id": "ANT047-moins-7", "zone": "ANT047", "pole": "-", "palier": 7, "nom": "Le Bois de perches", "cout": 3, "cible": 1, "effet": "Chaque perche se met à marcher. Le gué se lève (32 PV, frappe 7). Tous −2 d'attaque, 4 dégâts à tous. Votre bête la plus faible perd 4 PV. Pose Abîme. Si Sang (consommé) : un marcheur (20 PV, frappe 5), héros soigné de 6, la cible −2 d'attaque.", "ops": [["invoque", "Gué en marche", 32, 7], ["affaiblit", "tous", 2], ["deg", "tous", 4], ["prixBete", 4], ["pose", "Abîme"], ["reveil", "Sang", true, [["invoque", "Marcheur de brume", 20, 5], ["soin", "heros", 6], ["affaiblit", "cible", 2]]]], "tags": ["Antre", "Sève", "Forme ultime −7", "Invocation", "Affaiblissement", "Dégâts", "Prix", "Pose Abîme", "Réveil Sang"], "ambiance": "Les perches de bouleau du gué sont des milliers ; personne n'en a planté autant, et toutes sont chaudes.", "budget": "44,5 (+29,5 si Sang, soit +66 % ; vérifié au script)"}
]
```

### Pôle + Clarté

Progression : l'eau qui s'éclaircit, le brochet visible, les chaussures au fond, le cygne de tourbe, les mains de cuir brun, les dormeurs en rang, puis le gué de verre. Style : le héros guérit à mesure que l'eau se fait claire, et guérit davantage quand il est au plus bas. Prix : l'ennemi se couvre, se soigne, ou une carte part.

```json
[
{"id": "ANT047-plus-1", "zone": "ANT047", "pole": "+", "palier": 1, "nom": "L'eau qui s'éclaircit", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 6 et gagne 5 de garde.", "ops": [["soin", "heros", 6], ["garde", "heros", 5]], "tags": ["Antre", "Sève", "Pôle +", "Soin", "Garde"], "ambiance": "Le matin où l'eau de Þokuvað s'est éclaircie, les fermiers ont vu leurs propres pieds pour la première fois.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT047-plus-2", "zone": "ANT047", "pole": "+", "palier": 2, "nom": "Le brochet visible", "cout": 1, "cible": 0, "effet": "Un brochet de l'eau claire monte à la surface : 10 PV, frappe 3. Le héros se soigne de 3.", "ops": [["invoque", "Brochet de l'eau claire", 10, 3], ["soin", "heros", 3]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Soin"], "ambiance": "Le brochet du gué reste immobile dans l'eau claire, si visible qu'on le croit peint sur le fond.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "ANT047-plus-3", "zone": "ANT047", "pole": "+", "palier": 3, "nom": "Les chaussures au fond", "cout": 1, "cible": 0, "effet": "Si le héros est sous la moitié de ses PV : il se soigne de 6 de plus. Le héros se soigne de 10 et gagne 5 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "blesse", [["soin", "heros", 6]]], ["soin", "heros", 10], ["garde", "heros", 5], ["ennemiGarde", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Soin", "Garde", "Prix"], "ambiance": "Au fond du gué, les chaussures sont rangées par paires, pointes vers la rive, comme devant une porte.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ANT047-plus-4", "zone": "ANT047", "pole": "+", "palier": 4, "nom": "Le cygne de tourbe", "cout": 2, "cible": 0, "effet": "Un cygne de la tourbière glisse sur l'eau claire : 20 PV, frappe 5. Le héros se soigne de 10. Défaussez 1 carte au hasard.", "ops": [["invoque", "Cygne de la tourbière", 20, 5], ["soin", "heros", 10], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "Le cygne de Þokuvað a les pattes brunes comme le cuir des mains du fond, et il ne s'envole pas.", "budget": "24,5 (cible 28, écart -12 % ; vérifié au script)"},
{"id": "ANT047-plus-5", "zone": "ANT047", "pole": "+", "palier": 5, "nom": "Les mains de cuir brun", "cout": 2, "cible": 0, "effet": "Si le héros est sous la moitié de ses PV : il se soigne de 10 de plus. Le héros se soigne de 14, gagne 10 de garde. Piochez 1 carte. Chaque ennemi se soigne de 1.", "ops": [["si", "blesse", [["soin", "heros", 10]]], ["soin", "heros", 14], ["garde", "heros", 10], ["pioche", 1], ["ennemiSoin", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Soin", "Garde", "Pioche", "Prix"], "ambiance": "Les mains de cuir brun du fond de la tourbe sont ouvertes, paume en l'air, et l'eau claire passe dessus.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ANT047-plus-6", "zone": "ANT047", "pole": "+", "palier": 6, "nom": "Les dormeurs en rang", "cout": 2, "cible": 0, "effet": "Si le héros est sous la moitié de ses PV : il se soigne de 6 de plus. Un dormeur de la tourbe se lève : 28 PV, frappe 5. Le héros se soigne de 12. Défaussez 1 carte au hasard.", "ops": [["si", "blesse", [["soin", "heros", 6]]], ["invoque", "Dormeur de la tourbe", 28, 5], ["soin", "heros", 12], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Soin", "Invocation", "Prix"], "ambiance": "Les dormeurs de la tourbe ont des visages de fermiers de Þokuvað ; Ketill Grímsson en a reconnu un, le sien.", "budget": "33,5 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "ANT047-plus-7", "zone": "ANT047", "pole": "+", "palier": 7, "nom": "Le Gué de verre", "cout": 3, "cible": 1, "effet": "L'eau ne cache plus rien. Le gardien de la tourbe se lève (26 PV, frappe 6). Le héros se soigne de 18 et gagne 10 de garde. Chaque ennemi gagne 2 de garde. Pose Givre. Si Braise (consommée) : le héros se soigne de 12, la cible subit 16 dégâts.", "ops": [["invoque", "Gardien de la tourbe", 26, 6], ["soin", "heros", 18], ["garde", "heros", 10], ["ennemiGarde", 2], ["pose", "Givre"], ["reveil", "Braise", true, [["soin", "heros", 12], ["deg", "cible", 16]]]], "tags": ["Antre", "Sève", "Forme ultime +7", "Invocation", "Soin", "Garde", "Prix", "Pose Givre", "Réveil Braise"], "ambiance": "Le gué passe au-dessus des dormeurs en rang ; ceux qui traversent marchent doucement, pour ne pas les réveiller.", "budget": "44 (+28 si Braise, soit +64 % ; vérifié au script)"}
]
```

---

## Favillae, le Port des Palétuviers (ANT108 · Antre · Mangrove · Eau · romaine)

```json
{
 "fiche": "ANT108",
 "nom": "Favillae, le Port des Palétuviers",
 "recit": "Au légat, de Lucius Varenus, préfet du port de Favillae. Le volcan de l'île d'en face a craché sa cendre vingt-trois jours durant. Elle est tombée sur la mangrove comme une neige sale ; les palétuviers ont perdu leurs feuilles, les crabes sont montés aux racines, les pilotis du quai sont gainés de boue dure. Aujourd'hui, les racines ont fleuri. Pas les branches : les racines, sous l'eau, des fleurs blanches ouvertes vers le fond, et les crabes vont s'y coucher. Les esclaves refusent d'entrer dans l'eau. J'y suis descendu moi-même. Les fleurs se sont tournées vers",
 "pal": [
  "La cendre a tout recouvert d'une croûte où l'on marche ; dessous, la mangrove respire encore par des trous ronds, et les crabes ne remontent plus.",
  "La cendre tombe en flocons lents ; les palétuviers sont nus, les quais disparaissent sous une boue qui durcit, et la marée rapporte des poissons aveugles.",
  "Mangrove d'une côte romaine : quais de pierre sur pilotis, entrepôts à tuiles, palétuviers aux racines-échasses, barques de sel et crabes rouges à marée basse.",
  "Les racines fleurissent sous l'eau, fleurs blanches tournées vers le fond ; à marée basse, elles restent ouvertes, et les crabes dorment dans leurs corolles.",
  "Les fleurs ne se ferment plus ; elles ont gagné pilotis, barques et cordages, et le pollen fait une marée jaune qui monte et descend avec l'autre."
 ],
 "pm": "Cendre",
 "pp": "Floraison"
}
```

### Pôle − Cendre

Progression : le premier flocon, le crabe des racines, la boue qui durcit, les palétuviers nus, les poissons aveugles, la croûte où l'on marche, puis la mangrove sous la croûte. Style : la cendre étouffe le bras qui frappe ; la cible perd son attaque carte après carte, et l'ennemi qui voulait se soigner étouffe plus vite. Prix : le héros respire la cendre, ou une bête y reste.

```json
[
{"id": "ANT108-moins-1", "zone": "ANT108", "pole": "-", "palier": 1, "nom": "Le premier flocon", "cout": 1, "cible": 1, "effet": "La cible perd 2 d'attaque et brûle : 1 dégât pendant 3 tours. Le héros gagne 2 de garde.", "ops": [["affaiblit", "cible", 2], ["brulure", "cible", 1, 3], ["garde", "heros", 2]], "tags": ["Antre", "Eau", "Pôle −", "Affaiblissement", "Dégâts dans le temps", "Garde"], "ambiance": "Le premier flocon de cendre est tombé sur le registre du préfet Varenus, et il a laissé un trou rond.", "budget": "10,6 (cible 10, écart +6 % ; vérifié au script)"},
{"id": "ANT108-moins-2", "zone": "ANT108", "pole": "-", "palier": 2, "nom": "Le crabe des racines", "cout": 1, "cible": 1, "effet": "Un crabe de cendre descend des racines : 10 PV, frappe 2. La cible perd 1 d'attaque et brûle : 1 dégât pendant 2 tours.", "ops": [["invoque", "Crabe de cendre", 10, 2], ["affaiblit", "cible", 1], ["brulure", "cible", 1, 2]], "tags": ["Antre", "Eau", "Pôle −", "Invocation", "Affaiblissement", "Dégâts dans le temps"], "ambiance": "Les crabes de Favillae sont montés aux racines avant la cendre, et ils y sont restés, gris et immobiles.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT108-moins-3", "zone": "ANT108", "pole": "-", "palier": 3, "nom": "La boue qui durcit", "cout": 1, "cible": 1, "effet": "Si un ennemi s'apprête à se soigner : la cible perd 2 d'attaque de plus. La cible perd 3 d'attaque et subit 4 dégâts. Le héros perd 1 PV.", "ops": [["si", "soinEnnemi", [["affaiblit", "cible", 2]]], ["affaiblit", "cible", 3], ["deg", "cible", 4], ["prixPV", 1]], "tags": ["Antre", "Eau", "Pôle −", "Condition", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "La boue du quai a pris en une nuit ; un esclave y a laissé sa sandale, toujours debout.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ANT108-moins-4", "zone": "ANT108", "pole": "-", "palier": 4, "nom": "Les palétuviers nus", "cout": 2, "cible": 1, "effet": "Un héron de cendre se pose : 20 PV, frappe 5. La cible perd 3 d'attaque et brûle : 2 dégâts pendant 2 tours. Le héros perd 2 PV.", "ops": [["invoque", "Héron de cendre", 20, 5], ["affaiblit", "cible", 3], ["brulure", "cible", 2, 2], ["prixPV", 2]], "tags": ["Antre", "Eau", "Pôle −", "Invocation", "Affaiblissement", "Dégâts dans le temps", "Prix"], "ambiance": "Les palétuviers de Favillae ont perdu leurs feuilles en un jour, et les hérons se tiennent sur les branches nues.", "budget": "28,5 (cible 28, écart +2 % ; vérifié au script)"},
{"id": "ANT108-moins-5", "zone": "ANT108", "pole": "-", "palier": 5, "nom": "Les poissons aveugles", "cout": 2, "cible": 1, "effet": "Si un ennemi s'apprête à se soigner : tous les ennemis perdent 1 d'attaque. La cible perd 4 d'attaque et subit 10 dégâts. Piochez 2 cartes. Le héros perd 2 PV.", "ops": [["si", "soinEnnemi", [["affaiblit", "tous", 1]]], ["affaiblit", "cible", 4], ["deg", "cible", 10], ["pioche", 2], ["prixPV", 2]], "tags": ["Antre", "Eau", "Pôle −", "Condition", "Affaiblissement", "Dégâts", "Pioche", "Prix"], "ambiance": "La marée rapporte des poissons aveugles dans les filets du port ; ils ont des yeux, couverts de cendre fine.", "budget": "31,3 (cible 32, écart -2 % ; vérifié au script)"},
{"id": "ANT108-moins-6", "zone": "ANT108", "pole": "-", "palier": 6, "nom": "La croûte où l'on marche", "cout": 2, "cible": 1, "effet": "Si un ennemi s'apprête à se soigner : la cible subit 8 dégâts. Des crabes remontent sous la croûte : 24 PV, frappe 6. La cible perd 4 d'attaque. Votre bête la plus faible perd 2 PV.", "ops": [["si", "soinEnnemi", [["deg", "cible", 8]]], ["invoque", "Crabes sous la croûte", 24, 6], ["affaiblit", "cible", 4], ["prixBete", 2]], "tags": ["Antre", "Eau", "Pôle −", "Condition", "Dégâts", "Invocation", "Affaiblissement", "Prix"], "ambiance": "On marche sur la croûte de Favillae jusqu'aux barques ; dessous, la mangrove respire, et la croûte se soulève un peu.", "budget": "35 (cible 36, écart -3 % ; vérifié au script)"},
{"id": "ANT108-moins-7", "zone": "ANT108", "pole": "-", "palier": 7, "nom": "La Mangrove sous la croûte", "cout": 3, "cible": 1, "effet": "La cendre étouffe tout. Tous −3 d'attaque et brûlure de 2 (2 tours) ; la cible −3 de plus. Un crabe géant sort (20 PV, frappe 4). Héros −5 PV. Pose Braise. Si Racine (consommée) : cible −4 d'attaque, crabe (16 PV, frappe 4), alliés soignés de 4.", "ops": [["affaiblit", "tous", 3], ["brulure", "tous", 2, 2], ["affaiblit", "cible", 3], ["invoque", "Crabe de cendre géant", 20, 4], ["prixPV", 5], ["pose", "Braise"], ["reveil", "Racine", true, [["affaiblit", "cible", 4], ["invoque", "Crabe de cendre", 16, 4], ["soin", "allies", 4]]]], "tags": ["Antre", "Eau", "Forme ultime −7", "Affaiblissement", "Dégâts dans le temps", "Invocation", "Prix", "Pose Braise", "Réveil Racine"], "ambiance": "Sous la croûte de cendre, quelque chose de très large respire au rythme des marées ; le préfet n'écrit plus.", "budget": "48,6 (+32 si Racine, soit +66 % ; vérifié au script)"}
]
```

### Pôle + Floraison

Progression : la fleur sous l'eau, le crabe dans la corolle, la marée de pollen, le héron blanc, les racines ouvertes, les pilotis en fleurs, puis la floraison d'un tenant. Style : la mangrove nourrit la réserve ; chaque carte rend du mana d'Eau, davantage quand une bête dort déjà dans les fleurs, et prépare les grosses cartes qui suivent. Prix : le pollen soigne aussi l'ennemi, ou une carte part.

```json
[
{"id": "ANT108-plus-1", "zone": "ANT108", "pole": "+", "palier": 1, "nom": "La fleur sous l'eau", "cout": 1, "cible": 0, "effet": "Gagnez 2 mana d'Eau. Le héros se soigne de 4.", "ops": [["mana", "Eau", 2], ["soin", "heros", 4]], "tags": ["Antre", "Eau", "Pôle +", "Mana", "Soin"], "ambiance": "La première fleur s'est ouverte sous l'eau, au pied du quai, tournée vers un fond vide.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT108-plus-2", "zone": "ANT108", "pole": "+", "palier": 2, "nom": "Le crabe dans la corolle", "cout": 1, "cible": 1, "effet": "Un crabe des corolles se réveille : 10 PV, frappe 2. Gagnez 1 mana d'Eau. La cible subit 2 dégâts.", "ops": [["invoque", "Crabe des corolles", 10, 2], ["mana", "Eau", 1], ["deg", "cible", 2]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Mana", "Dégâts"], "ambiance": "Les crabes de Favillae dorment repliés dans les fleurs des racines ; la corolle se referme sur eux à marée haute.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT108-plus-3", "zone": "ANT108", "pole": "+", "palier": 3, "nom": "La marée de pollen", "cout": 1, "cible": 1, "effet": "Si une bête est déjà en jeu : gagnez 1 mana d'Eau de plus. Gagnez 2 mana d'Eau. Vos alliés se soignent de 4. La cible subit 4 dégâts. Chaque ennemi se soigne de 1.", "ops": [["si", "bete", [["mana", "Eau", 1]]], ["mana", "Eau", 2], ["soin", "allies", 4], ["deg", "cible", 4], ["ennemiSoin", 1]], "tags": ["Antre", "Eau", "Pôle +", "Condition", "Mana", "Soin", "Dégâts", "Prix"], "ambiance": "Le pollen monte et descend avec la marée de Favillae ; les esclaves du port en ont les cils jaunes.", "budget": "15,3 (cible 15, écart +2 % ; vérifié au script)"},
{"id": "ANT108-plus-4", "zone": "ANT108", "pole": "+", "palier": 4, "nom": "Le héron blanc", "cout": 2, "cible": 1, "effet": "Un héron des fleurs se pose sur les pilotis : 22 PV, frappe 5. Gagnez 2 mana d'Eau. La cible subit 5 dégâts. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Héron des fleurs", 22, 5], ["mana", "Eau", 2], ["deg", "cible", 5], ["ennemiSoin", 1]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Mana", "Dégâts", "Prix"], "ambiance": "Le héron blanc est apparu le jour de la floraison ; il pêche dans les corolles et ne mange rien.", "budget": "27,3 (cible 28, écart -2 % ; vérifié au script)"},
{"id": "ANT108-plus-5", "zone": "ANT108", "pole": "+", "palier": 5, "nom": "Les racines ouvertes", "cout": 2, "cible": 1, "effet": "Si une bête est déjà en jeu : vos alliés se soignent de 6. Gagnez 2 mana d'Eau. Vos alliés se soignent de 8. La cible subit 12 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["soin", "allies", 6]]], ["mana", "Eau", 2], ["soin", "allies", 8], ["deg", "cible", 12], ["prixDefausse", 1]], "tags": ["Antre", "Eau", "Pôle +", "Condition", "Soin", "Mana", "Dégâts", "Prix"], "ambiance": "Les racines-échasses s'ouvrent sous l'eau comme des mains, et chaque main tient une fleur blanche.", "budget": "31,5 (cible 32, écart -2 % ; vérifié au script)"},
{"id": "ANT108-plus-6", "zone": "ANT108", "pole": "+", "palier": 6, "nom": "Les pilotis en fleurs", "cout": 2, "cible": 0, "effet": "Si une bête est déjà en jeu : gagnez 1 mana d'Eau. Un poisson-fleur sort des pilotis : 26 PV, frappe 6. Gagnez 2 mana d'Eau. Vos alliés se soignent de 6. Chaque ennemi se soigne de 1.", "ops": [["si", "bete", [["mana", "Eau", 1]]], ["invoque", "Poisson-fleur", 26, 6], ["mana", "Eau", 2], ["soin", "allies", 6], ["ennemiSoin", 1]], "tags": ["Antre", "Eau", "Pôle +", "Condition", "Mana", "Invocation", "Soin", "Prix"], "ambiance": "Les pilotis du quai romain ont fleuri jusqu'à la ligne de marée haute, et pas un pouce au-dessus.", "budget": "36,3 (cible 36, écart +1 % ; vérifié au script)"},
{"id": "ANT108-plus-7", "zone": "ANT108", "pole": "+", "palier": 7, "nom": "La Floraison d'un tenant", "cout": 3, "cible": 0, "effet": "La mangrove fleurit d'un tenant. Gagnez 2 mana d'Eau et 2 de Sève. Une floraison marcheuse se lève (28 PV, frappe 6). Alliés soignés de 8. Défaussez 1 carte. Pose Racine. Si Braise (consommée) : 2 mana d'Eau, piochez 2, alliés soignés de 10.", "ops": [["mana", "Eau", 2], ["mana", "Sève", 2], ["invoque", "Floraison marcheuse", 28, 6], ["soin", "allies", 8], ["prixDefausse", 1], ["pose", "Racine"], ["reveil", "Braise", true, [["mana", "Eau", 2], ["pioche", 2], ["soin", "allies", 10]]]], "tags": ["Antre", "Eau", "Forme ultime +7", "Mana", "Invocation", "Soin", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "La dernière lettre de Lucius Varenus est arrivée au légat couverte de pollen, et sans un mot dedans.", "budget": "44 (+29 si Braise, soit +66 % ; vérifié au script)"}
]
```

---

## L'Ekklèsia de Kryolimnè (ASS068 · Assemblée · Fjord · Glace · grecque)

```json
{
 "fiche": "ASS068",
 "nom": "L'Ekklèsia de Kryolimnè",
 "recit": "Procès-verbal de l'ekklèsia de Kryolimnè, au fond du fjord, le jour de l'ostracisme. Cent dix-huit citoyens présents, cent dix-huit tessons remis au greffier Pheidon. Au dépouillement, quatre-vingt-dix portent le nom du pilote Ménalkas, les autres des noms divers. Ménalkas est monté dans la barque d'exil, sur l'eau noire, sous la falaise, et le feu commun a été rallumé sur la place. Au matin, le greffier a relu les tessons pour l'archive. Sur celui de Ménalkas lui-même, d'une écriture fine et régulière, on ne lisait pas son rival : on lisait le nom de la cité.",
 "pal": [
  "L'agora est vide, le feu commun éteint ; des barques d'exil sans rameurs tournent sous la falaise, et sur la glace des tessons portent tous les noms.",
  "Les maisons ont le volet clos sur la place ; la neige couvre l'agora, et chaque matin une barque de plus est amarrée au quai, vide, avec une seule rame.",
  "Colonie grecque au fond d'un fjord : agora dallée au pied de la falaise, portique de bois, feu commun sous un auvent, pêcheurs en manteaux de laine.",
  "Le feu commun ne s'éteint plus ; on y cuit, on y dort, on y juge, et la glace fond en cercle autour de l'agora jusqu'au quai.",
  "Toute la cité vit autour du feu, serrée épaule contre épaule ; la falaise est noire de suie, le fjord fume, et personne n'a quitté le cercle depuis l'hiver."
 ],
 "pm": "Exil",
 "pp": "Foyer"
}
```

### Pôle − Exil

Progression : le tesson remis, le nom du pilote, la barque d'exil, le dépouillement, les volets clos, le tesson en plus, puis l'ekklèsia vide. Style : on fait tourner le paquet ; on pioche beaucoup, on écarte ce qu'on ne garde pas, et une carte déjà défaussée ce tour fait frapper plus fort. Prix : la défausse elle-même, et une carte qui part en exil.

```json
[
{"id": "ASS068-moins-1", "zone": "ASS068", "pole": "-", "palier": 1, "nom": "Le tesson remis", "cout": 1, "cible": 1, "effet": "Loi de l'ostracisme : piochez 1 carte. La cible hésite.", "ops": [["pioche", 1], ["hesite", "cible"]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Contrôle"], "ambiance": "Chaque citoyen de Kryolimnè grave un nom sur son tesson, et le greffier Pheidon ne regarde jamais lequel.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ASS068-moins-2", "zone": "ASS068", "pole": "-", "palier": 2, "nom": "Le nom du pilote", "cout": 1, "cible": 1, "effet": "Si vous avez déjà défaussé une carte en prix ce tour : la cible subit 6 dégâts. Piochez 2 cartes. La cible subit 4 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["deg", "cible", 6]]], ["pioche", 2], ["deg", "cible", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Dégâts", "Pioche", "Prix"], "ambiance": "Quatre-vingt-dix tessons portaient le nom de Ménalkas ; le pilote les a comptés lui-même, sans se tromper.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS068-moins-3", "zone": "ASS068", "pole": "-", "palier": 3, "nom": "La barque d'exil", "cout": 1, "cible": 0, "effet": "Loi : piochez 3 cartes, puis reprenez en main la dernière carte de votre défausse. Exil : cette carte quitte le combat.", "ops": [["pioche", 3], ["recup"], ["exil"]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Récupération", "Exil"], "ambiance": "La barque d'exil de Kryolimnè n'a qu'une rame, et on la pousse du quai sans la regarder partir.", "budget": "13 (cible 15, écart -13 % ; vérifié au script)"},
{"id": "ASS068-moins-4", "zone": "ASS068", "pole": "-", "palier": 4, "nom": "Le dépouillement", "cout": 2, "cible": 1, "effet": "Si vous avez déjà défaussé une carte en prix ce tour : piochez 1 carte. Piochez 3 cartes. La cible subit 16 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["pioche", 1]]], ["pioche", 3], ["deg", "cible", 16], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Pioche", "Dégâts", "Prix"], "ambiance": "Au dépouillement, les tessons sont rangés en tas sur les dalles, et le tas du milieu fond la neige.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS068-moins-5", "zone": "ASS068", "pole": "-", "palier": 5, "nom": "Les volets clos", "cout": 2, "cible": 1, "effet": "Loi : piochez 2 cartes. La cible hésite et subit 20 dégâts.", "ops": [["pioche", 2], ["hesite", "cible"], ["deg", "cible", 20]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Contrôle", "Dégâts"], "ambiance": "Les volets de Kryolimnè restent clos le jour du vote ; on entend derrière eux graver des tessons.", "budget": "33 (cible 32, écart +3 % ; vérifié au script)"},
{"id": "ASS068-moins-6", "zone": "ASS068", "pole": "-", "palier": 6, "nom": "Le tesson en plus", "cout": 2, "cible": 0, "effet": "Si vous avez déjà défaussé une carte en prix ce tour : piochez 2 cartes. Piochez 3 cartes, puis reprenez en main la dernière carte de votre défausse. Tous les ennemis subissent 7 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["pioche", 2]]], ["pioche", 3], ["recup"], ["deg", "tous", 7], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Condition", "Pioche", "Récupération", "Dégâts", "Prix"], "ambiance": "Le tesson de Ménalkas est rangé à part dans l'archive ; il est chaque matin un peu plus près des autres.", "budget": "32,4 (cible 36, écart -10 % ; vérifié au script)"},
{"id": "ASS068-moins-7", "zone": "ASS068", "pole": "-", "palier": 7, "nom": "L'Ekklèsia vide", "cout": 3, "cible": 1, "effet": "La cité vote contre elle-même. Piochez 4 cartes, reprenez la dernière de votre défausse. La cible subit 28 dégâts. Défaussez 2 cartes au hasard. Pose Abîme. Si Givre (consommé) : piochez 2, la cible hésite et subit 14 dégâts.", "ops": [["pioche", 4], ["recup"], ["deg", "cible", 28], ["prixDefausse", 2], ["pose", "Abîme"], ["reveil", "Givre", true, [["pioche", 2], ["hesite", "cible"], ["deg", "cible", 14]]]], "tags": ["Assemblée", "Glace", "Forme ultime −7", "Pioche", "Récupération", "Dégâts", "Prix", "Pose Abîme", "Réveil Givre"], "ambiance": "L'agora de Kryolimnè est vide, la neige intacte ; sur chaque dalle, un tesson, et sur chaque tesson le même nom.", "budget": "42 (+27 si Givre, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Foyer

Progression : le feu sous l'auvent, la braise passée, le cercle qui fond, on y cuit et on y juge, la suie de la falaise, épaule contre épaule, puis le feu de Kryolimnè. Style : un feu qu'on entretient ; la cible brûle plus longtemps à chaque carte, et le héros déjà abrité attise davantage. Prix : on se brûle les mains (PV), ou l'ennemi se couvre.

```json
[
{"id": "ASS068-plus-1", "zone": "ASS068", "pole": "+", "palier": 1, "nom": "Le feu sous l'auvent", "cout": 1, "cible": 1, "effet": "Loi du foyer : la cible brûle, 2 dégâts au début de chacun de ses 5 prochains tours.", "ops": [["brulure", "cible", 2, 5]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Dégâts dans le temps"], "ambiance": "Le feu commun de Kryolimnè brûle sous un auvent de bois, et chaque maison y porte une bûche le soir.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS068-plus-2", "zone": "ASS068", "pole": "+", "palier": 2, "nom": "La braise passée", "cout": 1, "cible": 1, "effet": "Si le héros a déjà de la garde : la cible brûle en plus de 2 pendant 2 tours. La cible brûle : 2 dégâts pendant 4 tours. Le héros gagne 4 de garde.", "ops": [["si", "garde", [["brulure", "cible", 2, 2]]], ["brulure", "cible", 2, 4], ["garde", "heros", 4]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts dans le temps", "Garde"], "ambiance": "On se passe la braise du feu commun de main en main, nue, et personne à Kryolimnè ne s'en plaint.", "budget": "13,2 (cible 12,5, écart +6 % ; vérifié au script)"},
{"id": "ASS068-plus-3", "zone": "ASS068", "pole": "+", "palier": 3, "nom": "Le cercle qui fond", "cout": 1, "cible": 1, "effet": "Loi : tous les ennemis brûlent, 1 dégât pendant 3 tours ; la cible brûle en plus de 3 pendant 3 tours. Le héros perd 1 PV.", "ops": [["brulure", "tous", 1, 3], ["brulure", "cible", 3, 3], ["prixPV", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Dégâts dans le temps", "Prix"], "ambiance": "Autour du feu, la glace fond en cercle parfait jusqu'au quai, et le cercle s'élargit d'un pas chaque nuit.", "budget": "14,6 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "ASS068-plus-4", "zone": "ASS068", "pole": "+", "palier": 4, "nom": "On y cuit, on y juge", "cout": 2, "cible": 1, "effet": "Si le héros a déjà de la garde : la cible brûle en plus de 3 pendant 3 tours. La cible brûle : 4 dégâts pendant 4 tours, et subit 6 dégâts. Le héros gagne 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "garde", [["brulure", "cible", 3, 3]]], ["brulure", "cible", 4, 4], ["deg", "cible", 6], ["garde", "heros", 6], ["ennemiGarde", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts dans le temps", "Dégâts", "Garde", "Prix"], "ambiance": "On juge à Kryolimnè assis autour du feu commun ; le coupable tient la marmite, et elle ne refroidit pas.", "budget": "29,3 (cible 28, écart +5 % ; vérifié au script)"},
{"id": "ASS068-plus-5", "zone": "ASS068", "pole": "+", "palier": 5, "nom": "La suie de la falaise", "cout": 2, "cible": 1, "effet": "Loi : tous les ennemis brûlent, 2 dégâts pendant 3 tours. La cible subit 18 dégâts. Le héros perd 2 PV.", "ops": [["brulure", "tous", 2, 3], ["deg", "cible", 18], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Dégâts dans le temps", "Dégâts", "Prix"], "ambiance": "La falaise au-dessus de l'agora est noire de suie jusqu'aux nids de mouettes, et les mouettes sont noires aussi.", "budget": "29,2 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ASS068-plus-6", "zone": "ASS068", "pole": "+", "palier": 6, "nom": "Épaule contre épaule", "cout": 2, "cible": 1, "effet": "Si le héros a déjà de la garde : la cible brûle en plus de 4 pendant 3 tours. Le héros gagne 12 de garde. La cible brûle : 5 dégâts pendant 4 tours. Le héros perd 2 PV.", "ops": [["si", "garde", [["brulure", "cible", 4, 3]]], ["garde", "heros", 12], ["brulure", "cible", 5, 4], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle +", "Condition", "Dégâts dans le temps", "Garde", "Prix"], "ambiance": "Les citoyens de Kryolimnè dorment assis autour du feu, épaule contre épaule, et se réveillent tous ensemble.", "budget": "33,6 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "ASS068-plus-7", "zone": "ASS068", "pole": "+", "palier": 7, "nom": "Le Feu de Kryolimnè", "cout": 3, "cible": 1, "effet": "Personne ne quitte le cercle. Tous les ennemis brûlent (3 pendant 3 tours) ; la cible, de 4 de plus pendant 4 tours. Héros +14 de garde, −4 PV. Pose Braise. Si Sceau (consommé) : la cible subit 8 dégâts et brûle de 5 (3 tours), héros soigné de 6.", "ops": [["brulure", "tous", 3, 3], ["brulure", "cible", 4, 4], ["garde", "heros", 14], ["prixPV", 4], ["pose", "Braise"], ["reveil", "Sceau", true, [["deg", "cible", 8], ["brulure", "cible", 5, 3], ["soin", "heros", 6]]]], "tags": ["Assemblée", "Glace", "Forme ultime +7", "Dégâts dans le temps", "Garde", "Prix", "Pose Braise", "Réveil Sceau"], "ambiance": "Le fjord fume autour de Kryolimnè ; les barques du large ne trouvent plus le quai, et accostent au feu.", "budget": "43 (+29 si Sceau, soit +67 % ; vérifié au script)"}
]
```

---

## Le Bureau des Fourneaux de Lianyao-Shan (ASS008 · Assemblée · Volcan · Feu · chinoise impériale)

```json
{
 "fiche": "ASS008",
 "nom": "Le Bureau des Fourneaux de Lianyao-Shan",
 "recit": "Règlement du Bureau des Fourneaux de Lianyao-Shan, gravé à l'entrée du cratère. Article premier : les maîtres boivent eux-mêmes chaque élixir avant de l'envoyer au Palais. Article deux : le maître dont la peau tourne au bleu est relevé de sa charge, avec honneur. Article sept : le nectar des pêchers du cratère se boit après l'élixir, jamais avant. Article vingt : les maîtres relevés ne descendent pas en ville. Le maître Wei Changsun, cent ans passés, siège toujours au conseil. On ne l'a jamais vu boire le nectar. Sa peau est d'un bleu très égal, et il rit souvent.",
 "pal": [
  "Le cratère exhale une vapeur jaune et lourde ; les maîtres siègent sur les fourneaux éteints, la peau bleue et luisante, et ils ne toussent plus du tout.",
  "Les fourneaux brûlent jour et nuit ; les fumées tachent les tuiles, les grues mortes jonchent les marches, et les maîtres portent des gants de soie.",
  "Pavillons de tuiles vernissées accrochés au flanc d'un volcan, fourneaux d'alchimie au bord du cratère, pêchers en terrasses, maîtres en robes de lettrés.",
  "Les pêchers du cratère fleurissent hors saison ; le nectar coule des troncs, les abeilles en sont ivres, et les maîtres se versent des coupes sous les auvents.",
  "Le cratère est un verger : les pêchers débordent sur la lave froide, le nectar fait des mares, et tout le Bureau rit, couché dans l'herbe, sans se relever."
 ],
 "pm": "Poison",
 "pp": "Nectar"
}
```

### Pôle − Poison

Progression : la première coupe, la vapeur jaune, les gants de soie, la peau qui bleuit, les grues sur les marches, le maître relevé, puis l'élixir du Bureau. Style : le héros boit et se refait, beaucoup, pendant que les fumées rongent l'ennemi ; ce qui brûle déjà donne davantage. Prix : l'élixir ronge aussi le buveur (PV), ou une carte part.

```json
[
{"id": "ASS008-moins-1", "zone": "ASS008", "pole": "-", "palier": 1, "nom": "La première coupe", "cout": 1, "cible": 1, "effet": "Loi des fourneaux : le héros se soigne de 6. La cible subit 4 dégâts.", "ops": [["soin", "heros", 6], ["deg", "cible", 4]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Soin", "Dégâts"], "ambiance": "Le maître boit la première coupe d'élixir debout devant le fourneau, et le Bureau attend qu'il s'assoie.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS008-moins-2", "zone": "ASS008", "pole": "-", "palier": 2, "nom": "La vapeur jaune", "cout": 1, "cible": 1, "effet": "Si la cible brûle déjà : elle subit 4 dégâts. Le héros se soigne de 6. Tous les ennemis subissent 2 dégâts.", "ops": [["si", "brule", [["deg", "cible", 4]]], ["soin", "heros", 6], ["deg", "tous", 2]], "tags": ["Assemblée", "Feu", "Pôle −", "Condition", "Dégâts", "Soin"], "ambiance": "La vapeur du cratère de Lianyao-Shan descend les marches à pas lents, et les maîtres lui laissent le passage.", "budget": "12,4 (cible 12,5, écart -1 % ; vérifié au script)"},
{"id": "ASS008-moins-3", "zone": "ASS008", "pole": "-", "palier": 3, "nom": "Les gants de soie", "cout": 1, "cible": 1, "effet": "Loi : le héros se soigne de 8 et gagne 4 de garde. La cible brûle : 2 dégâts pendant 3 tours. Le héros perd 2 PV.", "ops": [["soin", "heros", 8], ["garde", "heros", 4], ["brulure", "cible", 2, 3], ["prixPV", 2]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Soin", "Garde", "Dégâts dans le temps", "Prix"], "ambiance": "Les gants de soie des maîtres montent jusqu'au coude ; dessous, la peau a déjà la couleur du ciel.", "budget": "15,2 (cible 15, écart +1 % ; vérifié au script)"},
{"id": "ASS008-moins-4", "zone": "ASS008", "pole": "-", "palier": 4, "nom": "La peau qui bleuit", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : elle subit 10 dégâts. Le héros se soigne de 12. La cible brûle : 3 dégâts pendant 3 tours, et subit 4 dégâts. Le héros perd 2 PV.", "ops": [["si", "brule", [["deg", "cible", 10]]], ["soin", "heros", 12], ["brulure", "cible", 3, 3], ["deg", "cible", 4], ["prixPV", 2]], "tags": ["Assemblée", "Feu", "Pôle −", "Condition", "Dégâts", "Soin", "Dégâts dans le temps", "Prix"], "ambiance": "Le maître qui bleuit est relevé avec honneur, et il remercie le Bureau d'une voix plus claire qu'avant.", "budget": "28 (cible 28, écart +0 % ; vérifié au script)"},
{"id": "ASS008-moins-5", "zone": "ASS008", "pole": "-", "palier": 5, "nom": "Les grues sur les marches", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis subissent 5 dégâts. Le héros se soigne de 18. Piochez 1 carte. Le héros perd 3 PV.", "ops": [["deg", "tous", 5], ["soin", "heros", 18], ["pioche", 1], ["prixPV", 3]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Dégâts", "Soin", "Pioche", "Prix"], "ambiance": "Les grues du Palais se posent sur les marches du cratère pour boire, et elles y restent, bec ouvert.", "budget": "30 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ASS008-moins-6", "zone": "ASS008", "pole": "-", "palier": 6, "nom": "Le maître relevé", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : le héros se soigne de 8 de plus. Le héros se soigne de 20. La cible brûle : 4 dégâts pendant 3 tours. Défaussez 1 carte au hasard.", "ops": [["si", "brule", [["soin", "heros", 8]]], ["soin", "heros", 20], ["brulure", "cible", 4, 3], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Condition", "Soin", "Dégâts dans le temps", "Prix"], "ambiance": "Les maîtres relevés ne descendent pas en ville ; ils montent, et on les entend rire plus haut que le cratère.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS008-moins-7", "zone": "ASS008", "pole": "-", "palier": 7, "nom": "L'Élixir du Bureau", "cout": 3, "cible": 1, "effet": "Le maître boit le premier. Le héros se soigne de 20. Tous les ennemis subissent 8 dégâts ; la cible brûle de 4 pendant 3 tours. Le héros perd 5 PV. Pose Sang. Si Braise (consommée) : héros soigné de 14, tous brûlent de 2 pendant 3 tours.", "ops": [["soin", "heros", 20], ["deg", "tous", 8], ["brulure", "cible", 4, 3], ["prixPV", 5], ["pose", "Sang"], ["reveil", "Braise", true, [["soin", "heros", 14], ["brulure", "tous", 2, 3]]]], "tags": ["Assemblée", "Feu", "Forme ultime −7", "Soin", "Dégâts", "Dégâts dans le temps", "Prix", "Pose Sang", "Réveil Braise"], "ambiance": "Wei Changsun boit l'élixir du Palais avant chaque envoi depuis cent ans, et le Palais le remercie chaque fois.", "budget": "44,6 (+27,2 si Braise, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Nectar

Progression : la coupe d'après, les abeilles ivres, le pêcher hors saison, le nectar des troncs, sous les auvents, la mare sucrée, puis le verger du cratère. Style : chaque coupe double la suivante ; on joue l'écho, puis une carte forte d'une autre zone, et l'on finit sur un ennemi resté seul. Prix : le nectar enivre aussi l'ennemi, qui se soigne ou se couvre.

```json
[
{"id": "ASS008-plus-1", "zone": "ASS008", "pole": "+", "palier": 1, "nom": "La coupe d'après", "cout": 1, "cible": 0, "effet": "Loi du nectar : écho, la prochaine carte de zone jouée ce tour compte double. Gagnez 1 mana de Feu.", "ops": [["echo"], ["mana", "Feu", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Écho", "Mana"], "ambiance": "Article sept : le nectar se boit après l'élixir. Les apprentis de Lianyao-Shan ne demandent pas pourquoi.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ASS008-plus-2", "zone": "ASS008", "pole": "+", "palier": 2, "nom": "Les abeilles ivres", "cout": 1, "cible": 0, "effet": "Écho : la prochaine carte de zone de ce tour compte double. Piochez 1 carte. Le héros se soigne de 3.", "ops": [["echo"], ["pioche", 1], ["soin", "heros", 3]], "tags": ["Assemblée", "Feu", "Pôle +", "Écho", "Pioche", "Soin"], "ambiance": "Les abeilles du cratère tombent ivres dans les coupes, et les maîtres boivent la coupe avec l'abeille.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ASS008-plus-3", "zone": "ASS008", "pole": "+", "palier": 3, "nom": "Le pêcher hors saison", "cout": 1, "cible": 1, "effet": "S'il ne reste qu'un ennemi : il subit 6 dégâts. La cible subit 14 dégâts. Chaque ennemi se soigne de 1.", "ops": [["si", "seul", [["deg", "cible", 6]]], ["deg", "cible", 14], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Condition", "Dégâts", "Prix"], "ambiance": "Le pêcher du cratère a fleuri au cœur de l'hiver, sur la lave encore chaude, et ses pêches sont froides.", "budget": "15 / 15 (+0 %) recalculé par le critique"},
{"id": "ASS008-plus-4", "zone": "ASS008", "pole": "+", "palier": 4, "nom": "Le nectar des troncs", "cout": 2, "cible": 1, "effet": "Loi : écho, la prochaine carte de zone de ce tour compte double. Piochez 2 cartes. Le héros se soigne de 8. La cible subit 8 dégâts. Chaque ennemi se soigne de 1.", "ops": [["echo"], ["pioche", 2], ["soin", "heros", 8], ["deg", "cible", 8], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Écho", "Pioche", "Soin", "Dégâts", "Prix"], "ambiance": "Le nectar coule des pêchers en fils épais, et les fils se rejoignent tous vers le fourneau du milieu.", "budget": "27,8 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "ASS008-plus-5", "zone": "ASS008", "pole": "+", "palier": 5, "nom": "Sous les auvents", "cout": 2, "cible": 1, "effet": "S'il ne reste qu'un ennemi : il subit 10 dégâts. La cible subit 28 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "seul", [["deg", "cible", 10]]], ["deg", "cible", 28], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Condition", "Dégâts", "Prix"], "ambiance": "Sous les auvents du Bureau, les maîtres se versent le nectar à deux mains, et la coupe ne déborde jamais.", "budget": "30 / 32 (-6 %) recalculé par le critique"},
{"id": "ASS008-plus-6", "zone": "ASS008", "pole": "+", "palier": 6, "nom": "La mare sucrée", "cout": 2, "cible": 0, "effet": "Reprenez en main la dernière carte de votre défausse. Piochez 2 cartes. Le héros se soigne de 16 et gagne 12 de garde. Chaque ennemi se soigne de 1.", "ops": [["recup"], ["pioche", 2], ["soin", "heros", 16], ["garde", "heros", 12], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Récupération", "Pioche", "Soin", "Garde", "Prix"], "ambiance": "Une mare de nectar s'est formée au fond du cratère ; les grues y boivent, et elles reprennent leur vol.", "budget": "35,6 / 36 (-1 %) recalculé par le critique"},
{"id": "ASS008-plus-7", "zone": "ASS008", "pole": "+", "palier": 7, "nom": "Le Verger du cratère", "cout": 3, "cible": 1, "effet": "Tout le Bureau rit. S'il ne reste qu'un ennemi : il subit 16 dégâts. Écho. Piochez 3 cartes. Héros soigné de 12. La cible subit 12 dégâts. Ennemis +2 de garde. Pose Sceau. Si Sang (consommé) : piochez 2, héros soigné de 10, 10 dégâts à la cible.", "ops": [["si", "seul", [["deg", "cible", 16]]], ["echo"], ["pioche", 3], ["soin", "heros", 12], ["deg", "cible", 12], ["ennemiGarde", 2], ["pose", "Sceau"], ["reveil", "Sang", true, [["pioche", 2], ["soin", "heros", 10], ["deg", "cible", 10]]]], "tags": ["Assemblée", "Feu", "Forme ultime +7", "Condition", "Dégâts", "Écho", "Pioche", "Soin", "Prix", "Pose Sceau", "Réveil Sang"], "ambiance": "Le Bureau des Fourneaux rit, couché sous les pêchers ; seul Wei Changsun reste assis, bleu, et compte les rires.", "budget": "46 (+28 si Sang, soit +61 % ; vérifié au script)"}
]
```

---

## Ulluriarjuk, la Clairière du Conseil (ASS031 · Assemblée · Jungle · Sève · inuit)

```json
{
 "fiche": "ASS031",
 "nom": "Ulluriarjuk, la Clairière du Conseil",
 "recit": "Les familles qui tiennent conseil à Ulluriarjuk sont venues du nord il y a longtemps, en suivant les étoiles jusqu'ici, où la jungle les cache toutes. Elles ont ouvert une seule clairière, ronde, pour voir le ciel, et s'y réunissent la nuit pour compter. L'aînée, Aninnguaq, sait cinq cent un noms d'étoiles. Elle les récite à chaque conseil, dans l'ordre, et chacun lève la tête quand passe la sienne. La clairière s'agrandit à chaque génération ; la jungle recule sans qu'on la coupe. Depuis l'été, au milieu du compte, il y a un nom qu'Aninnguaq prononce et que personne ne voit.",
 "pal": [
  "La clairière est immense, le ciel au-dessus est blanc, sans un astre ; les familles assises en cercle comptent à voix basse ce qu'elles ne voient plus.",
  "La canopée s'écarte d'elle-même autour de la clairière ; le ciel y est laiteux même la nuit, et des oiseaux tombent sur le sol de feuilles, sans blessure.",
  "Jungle épaisse sous une seule clairière ronde ; maisons de lianes et de peaux, feux de mousse, familles en anoraks de fibre qui guettent le ciel la nuit.",
  "La nuit, la clairière se remplit d'étoiles plus nombreuses que les noms ; leur lumière traverse les feuilles et les peaux, et l'on voit ses os en marchant.",
  "Le ciel est descendu jusqu'aux cimes : chaque feuille porte une étoile, la jungle entière brille au-dessus du conseil, et Aninnguaq a fini de compter."
 ],
 "pm": "Vide",
 "pp": "Étoiles"
}
```

### Pôle − Vide

Progression : le ciel blanc, l'oiseau sans blessure, le compte à voix basse, la canopée qui s'écarte, les noms sans astre, la clairière immense, puis le cercle sans ciel. Style : le héros se couvre d'un vide où rien ne l'atteint ; la cible qui hésite déjà, perdue sous un ciel sans repère, paie davantage. Prix : on y laisse des PV ou des cartes.

```json
[
{"id": "ASS031-moins-1", "zone": "ASS031", "pole": "-", "palier": 1, "nom": "Le ciel blanc", "cout": 1, "cible": 0, "effet": "Loi du vide : le héros gagne 12 de garde.", "ops": [["garde", "heros", 12]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Garde"], "ambiance": "Les nuits où le ciel d'Ulluriarjuk est blanc, le conseil se tient quand même, et l'on compte dans le blanc.", "budget": "9,6 (cible 10, écart -4 % ; vérifié au script)"},
{"id": "ASS031-moins-2", "zone": "ASS031", "pole": "-", "palier": 2, "nom": "L'oiseau sans blessure", "cout": 1, "cible": 1, "effet": "Si la cible hésite : elle subit 6 dégâts. Le héros gagne 8 de garde. La cible subit 3 dégâts.", "ops": [["si", "hesite", [["deg", "cible", 6]]], ["garde", "heros", 8], ["deg", "cible", 3]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Dégâts", "Garde"], "ambiance": "Les oiseaux tombent dans la clairière sans blessure et sans peur ; ils ont simplement oublié de voler.", "budget": "12,4 (cible 12,5, écart -1 % ; vérifié au script)"},
{"id": "ASS031-moins-3", "zone": "ASS031", "pole": "-", "palier": 3, "nom": "Le compte à voix basse", "cout": 1, "cible": 1, "effet": "Loi : le héros gagne 15 de garde. La cible hésite. Le héros perd 1 PV.", "ops": [["garde", "heros", 15], ["hesite", "cible"], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Garde", "Contrôle", "Prix"], "ambiance": "Aninnguaq compte à voix basse les noms des étoiles absentes, et les familles répondent après chaque nom.", "budget": "16 (cible 15, écart +7 % ; vérifié au script)"},
{"id": "ASS031-moins-4", "zone": "ASS031", "pole": "-", "palier": 4, "nom": "La canopée qui s'écarte", "cout": 2, "cible": 1, "effet": "Si la cible hésite : le héros gagne 10 de garde de plus. Le héros gagne 16 de garde. La cible subit 13 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "hesite", [["garde", "heros", 10]]], ["garde", "heros", 16], ["deg", "cible", 13], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Garde", "Dégâts", "Prix"], "ambiance": "La jungle s'écarte de la clairière d'un pas par nuit, sans un bruit, et les lianes coupées ne sèchent pas.", "budget": "26,8 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS031-moins-5", "zone": "ASS031", "pole": "-", "palier": 5, "nom": "Les noms sans astre", "cout": 2, "cible": 1, "effet": "Loi : le héros gagne 24 de garde. La cible hésite. Riposte 4 : jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts. Le héros perd 2 PV.", "ops": [["garde", "heros", 24], ["hesite", "cible"], ["riposte", 4], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Garde", "Contrôle", "Riposte", "Prix"], "ambiance": "Le cinq cent unième nom d'Aninnguaq ne désigne aucune étoile ; chacun lève pourtant la tête quand il passe.", "budget": "30,2 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ASS031-moins-6", "zone": "ASS031", "pole": "-", "palier": 6, "nom": "La clairière immense", "cout": 2, "cible": 1, "effet": "Si la cible hésite : elle subit 12 dégâts. Le héros gagne 25 de garde. La cible subit 10 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "hesite", [["deg", "cible", 12]]], ["garde", "heros", 25], ["deg", "cible", 10], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "La clairière d'Ulluriarjuk est si grande que le cercle du conseil ne voit plus la lisière, d'aucun côté.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS031-moins-7", "zone": "ASS031", "pole": "-", "palier": 7, "nom": "Le Cercle sans ciel", "cout": 3, "cible": 1, "effet": "Plus rien ne brille au-dessus. Le héros gagne 30 de garde. Tous les ennemis hésitent. Piochez 2 cartes. La cible subit 10 dégâts. Le héros perd 4 PV. Pose Givre. Si Abîme (consommé) : le héros gagne 20 de garde, la cible subit 14 dégâts.", "ops": [["garde", "heros", 30], ["hesite", "tous"], ["pioche", 2], ["deg", "cible", 10], ["prixPV", 4], ["pose", "Givre"], ["reveil", "Abîme", true, [["garde", "heros", 20], ["deg", "cible", 14]]]], "tags": ["Assemblée", "Sève", "Forme ultime −7", "Garde", "Contrôle", "Pioche", "Dégâts", "Prix", "Pose Givre", "Réveil Abîme"], "ambiance": "Le conseil se tient sous un ciel vide ; on y récite encore les noms, mais personne ne lève la tête.", "budget": "46,8 (+30 si Abîme, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Étoiles

Progression : la lumière à travers les peaux, plus d'étoiles que de noms, les os en marchant, l'étoile sur la feuille, le nom qu'on ne voit pas, la jungle qui brille, puis le ciel aux cimes. Style : la lumière passe à travers tout ; on fait tomber la garde de la cible, et une cible qui s'abritait en révèle plus. Prix : voir ses os coûte des PV, ou une carte.

```json
[
{"id": "ASS031-plus-1", "zone": "ASS031", "pole": "+", "palier": 1, "nom": "La lumière à travers les peaux", "cout": 1, "cible": 1, "effet": "Loi des étoiles : la cible perd sa garde et subit 7 dégâts.", "ops": [["briseGarde", "cible"], ["deg", "cible", 7]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Perce-garde", "Dégâts"], "ambiance": "La lumière des étoiles traverse les peaux tendues des maisons, et les dormeurs d'Ulluriarjuk dorment éclairés.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS031-plus-2", "zone": "ASS031", "pole": "+", "palier": 2, "nom": "Plus d'étoiles que de noms", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : piochez 1 carte. La cible perd sa garde. Piochez 1 carte. Le héros gagne 5 de garde.", "ops": [["si", "cibleGarde", [["pioche", 1]]], ["briseGarde", "cible"], ["pioche", 1], ["garde", "heros", 5]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Pioche", "Perce-garde", "Garde"], "ambiance": "Il y a maintenant plus d'étoiles au-dessus de la clairière que de noms dans la mémoire d'Aninnguaq.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ASS031-plus-3", "zone": "ASS031", "pole": "+", "palier": 3, "nom": "Les os en marchant", "cout": 1, "cible": 1, "effet": "Loi : la cible subit 10 dégâts, qui ignorent sa garde. Gagnez 1 mana de Sève. Le héros perd 1 PV.", "ops": [["ignoreGarde"], ["deg", "cible", 10], ["mana", "Sève", 1], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Perce-garde", "Dégâts", "Mana", "Prix"], "ambiance": "Sous les étoiles d'Ulluriarjuk, on voit ses os en marchant, et ceux des enfants sont plus brillants.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS031-plus-4", "zone": "ASS031", "pole": "+", "palier": 4, "nom": "L'étoile sur la feuille", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle subit 8 dégâts. Puis elle perd sa garde et subit 14 dégâts. Piochez 2 cartes. Le héros perd 2 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["briseGarde", "cible"], ["deg", "cible", 14], ["pioche", 2], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Pioche", "Prix"], "ambiance": "Une étoile s'est posée sur une feuille de la lisière ; la feuille ne jaunit pas, ne bouge plus.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS031-plus-5", "zone": "ASS031", "pole": "+", "palier": 5, "nom": "Le nom qu'on ne voit pas", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis perdent leur garde. Gagnez 2 mana de Sève. Piochez 3 cartes. Riposte 4. Le héros perd 2 PV.", "ops": [["briseGarde", "tous"], ["mana", "Sève", 2], ["pioche", 3], ["riposte", 4], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Perce-garde", "Mana", "Pioche", "Riposte", "Prix"], "ambiance": "Quand Aninnguaq prononce le nom qu'on ne voit pas, la lumière de toutes les autres étoiles traverse les corps.", "budget": "30,6 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "ASS031-plus-6", "zone": "ASS031", "pole": "+", "palier": 6, "nom": "La jungle qui brille", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle subit 8 dégâts. La cible subit 26 dégâts, qui ignorent sa garde. Gagnez 1 mana de Sève. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["ignoreGarde"], ["deg", "cible", 26], ["mana", "Sève", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Mana", "Prix"], "ambiance": "La jungle autour d'Ulluriarjuk brille par-dessous, comme si chaque racine tenait une étoile tombée.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS031-plus-7", "zone": "ASS031", "pole": "+", "palier": 7, "nom": "Le Ciel aux cimes", "cout": 3, "cible": 1, "effet": "Chaque feuille porte une étoile. Tous les ennemis perdent leur garde. La cible subit 24 dégâts, qui ignorent la garde. Gagnez 2 mana de Sève, piochez 2. Héros −4 PV. Pose Sceau. Si Givre (consommé) : la cible hésite, piochez 2, 14 dégâts à la cible.", "ops": [["briseGarde", "tous"], ["ignoreGarde"], ["deg", "cible", 24], ["mana", "Sève", 2], ["pioche", 2], ["prixPV", 4], ["pose", "Sceau"], ["reveil", "Givre", true, [["hesite", "cible"], ["pioche", 2], ["deg", "cible", 14]]]], "tags": ["Assemblée", "Sève", "Forme ultime +7", "Perce-garde", "Dégâts", "Mana", "Pioche", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "Aninnguaq a fini de compter ; elle dit que les étoiles sont enfin assez près pour être comptées par quelqu'un d'autre.", "budget": "43,6 (+27 si Givre, soit +62 % ; vérifié au script)"}
]
```

---

## Yoake-dani, la Gorge des Veilleurs (DON062 · Donjon · Canyon · Feu · japonaise féodale)

```json
{
 "fiche": "DON062",
 "nom": "Yoake-dani, la Gorge des Veilleurs",
 "recit": "Registre des veilleurs de la gorge de Yoake-dani, nuit d'hiver. Heure du Chien : vingt-cinq hommes aux postes, lanternes allumées sur les passerelles. Heure du Rat : un pas sur l'éboulis, rien vu. Heure du Bœuf : les pièges de la troisième passerelle ont joué ; rien dedans. Heure du Tigre : le capitaine Sakuma Gennosuke fait éteindre les lanternes. Heure du Lièvre : le soleil touche le haut de la gorge. Il descend une paroi, puis l'autre, très lentement. Il n'atteint pas le fond. Au fond, nous sommes vingt-six.",
 "pal": [
  "Nuit sans fond dans la gorge ; les passerelles pendent dans l'ombre, les pièges claquent seuls, et des veilleurs sans lanterne se comptent tout bas.",
  "Le soleil ne descend plus qu'à mi-paroi ; en dessous, les veilleurs gardent les passerelles à tâtons, et l'on entend des pas sur l'éboulis toute la journée.",
  "Gorge de grès rouge sous un château de bois accroché aux parois, passerelles de cordes et de planches, lanternes de papier, veilleurs en armure laquée.",
  "L'aube s'attarde dans la gorge jusqu'à midi ; le grès flambe, les armures laquées brûlent aux doigts, et les veilleurs dorment le jour, face à la paroi.",
  "Le soleil s'est arrêté au ras de la gorge et ne la quitte plus ; le fond est en plein jour pour la première fois, et l'on y voit ce qui marchait sur l'éboulis."
 ],
 "pm": "Nuit",
 "pp": "Aurore"
}
```

### Pôle − Nuit

Progression : la lanterne éteinte, le piège de la passerelle, le pas sur l'éboulis, les pièges qui jouent seuls, les veilleurs à tâtons, le compte des camarades, puis la gorge sans fond. Style : on ne voit rien venir, alors on tend des pièges ; chaque coup reçu revient à l'attaquant, et ce qui charge dans le noir s'y prend davantage. Prix : la nuit coûte des PV ou une carte.

```json
[
{"id": "DON062-moins-1", "zone": "DON062", "pole": "-", "palier": 1, "nom": "La lanterne éteinte", "cout": 1, "cible": 0, "effet": "Riposte 5 : jusqu'au prochain tour, chaque coup reçu renvoie 5 dégâts.", "ops": [["riposte", 5]], "tags": ["Donjon", "Feu", "Pôle −", "Riposte"], "ambiance": "À l'heure du Tigre, on éteint les lanternes de Yoake-dani ; les veilleurs gardent la main sur la mèche.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON062-moins-2", "zone": "DON062", "pole": "-", "palier": 2, "nom": "Le piège de la passerelle", "cout": 1, "cible": 1, "effet": "Si la cible piétine ou charge : elle subit 6 dégâts. Riposte 4. La cible subit 2 dégâts.", "ops": [["si", "pietine", [["deg", "cible", 6]]], ["riposte", 4], ["deg", "cible", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Dégâts", "Riposte"], "ambiance": "Les pièges de la troisième passerelle ont joué à l'heure du Bœuf ; les lames sont revenues propres.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON062-moins-3", "zone": "DON062", "pole": "-", "palier": 3, "nom": "Le pas sur l'éboulis", "cout": 1, "cible": 1, "effet": "Riposte 5. La cible perd 2 d'attaque. Le héros perd 1 PV.", "ops": [["riposte", 5], ["affaiblit", "cible", 2], ["prixPV", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Riposte", "Affaiblissement", "Prix"], "ambiance": "Sur l'éboulis du fond, un pas, puis un autre, toujours à la même distance du veilleur qui écoute.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "DON062-moins-4", "zone": "DON062", "pole": "-", "palier": 4, "nom": "Les pièges qui jouent seuls", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : riposte 6 de plus. Riposte 6. La cible subit 10 dégâts. Le héros perd 2 PV.", "ops": [["si", "pietine", [["riposte", 6]]], ["riposte", 6], ["deg", "cible", 10], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Riposte", "Dégâts", "Prix"], "ambiance": "Les pièges de Yoake-dani claquent seuls toute la nuit, et au matin aucun n'est à réarmer.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "DON062-moins-5", "zone": "DON062", "pole": "-", "palier": 5, "nom": "Les veilleurs à tâtons", "cout": 2, "cible": 1, "effet": "Riposte 12. Tous les ennemis perdent 1 d'attaque. La cible subit 4 dégâts. Défaussez 1 carte au hasard.", "ops": [["riposte", 12], ["affaiblit", "tous", 1], ["deg", "cible", 4], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Riposte", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "Les veilleurs gardent les passerelles à tâtons, une main sur la corde, et ils se comptent en se touchant l'épaule.", "budget": "31,6 (cible 32, écart -1 % ; vérifié au script)"},
{"id": "DON062-moins-6", "zone": "DON062", "pole": "-", "palier": 6, "nom": "Le compte des camarades", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : elle perd 3 d'attaque. Riposte 11. La cible perd 2 d'attaque et subit 6 dégâts. Le héros perd 2 PV.", "ops": [["si", "pietine", [["affaiblit", "cible", 3]]], ["riposte", 11], ["affaiblit", "cible", 2], ["deg", "cible", 6], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Affaiblissement", "Riposte", "Dégâts", "Prix"], "ambiance": "Le capitaine Sakuma compte ses veilleurs à chaque heure ; il trouve un homme de plus, et ne dit pas lequel.", "budget": "36,5 (cible 36, écart +1 % ; vérifié au script)"},
{"id": "DON062-moins-7", "zone": "DON062", "pole": "-", "palier": 7, "nom": "La Gorge sans fond", "cout": 3, "cible": 1, "effet": "La nuit garde la gorge. Riposte 12. Tous les ennemis perdent 2 d'attaque. Le héros gagne 14 de garde et perd 4 PV. Pose Sang. Si Racine (consommée) : riposte 8 de plus, la cible perd 3 d'attaque, un veilleur sans lanterne se lève (14 PV, frappe 3).", "ops": [["riposte", 12], ["affaiblit", "tous", 2], ["garde", "heros", 14], ["prixPV", 4], ["pose", "Sang"], ["reveil", "Racine", true, [["riposte", 8], ["affaiblit", "cible", 3], ["invoque", "Veilleur sans lanterne", 14, 3]]]], "tags": ["Donjon", "Feu", "Forme ultime −7", "Riposte", "Affaiblissement", "Garde", "Prix", "Pose Sang", "Réveil Racine"], "ambiance": "Au fond de Yoake-dani, les veilleurs sans lanterne se comptent tout bas, et le compte ne tombe jamais juste.", "budget": "44,4 (+36,5 si Racine, soit +82 % ; vérifié au script)"}
]
```

### Pôle + Aurore

Progression : le haut de la gorge, le grès qui flambe, l'armure qui brûle aux doigts, la lame au soleil, les dormeurs de jour, midi dans la gorge, puis l'aube arrêtée. Style : un rayon par carte, de plus en plus lourd ; le héros paie en PV, et sous la moitié de ses PV, le soleil frappe plus fort. Prix : le grès brûle aux doigts (PV).

```json
[
{"id": "DON062-plus-1", "zone": "DON062", "pole": "+", "palier": 1, "nom": "Le haut de la gorge", "cout": 1, "cible": 1, "effet": "La cible subit 6 dégâts, qui ignorent sa garde.", "ops": [["ignoreGarde"], ["deg", "cible", 6]], "tags": ["Donjon", "Feu", "Pôle +", "Perce-garde", "Dégâts"], "ambiance": "À l'heure du Lièvre, le soleil touche le haut de Yoake-dani, et les veilleurs du fond lèvent la tête.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "DON062-plus-2", "zone": "DON062", "pole": "+", "palier": 2, "nom": "Le grès qui flambe", "cout": 1, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : la cible subit 6 dégâts de plus. La cible subit 9 dégâts.", "ops": [["si", "blesse", [["deg", "cible", 6]]], ["deg", "cible", 9]], "tags": ["Donjon", "Feu", "Pôle +", "Condition", "Dégâts"], "ambiance": "Le grès rouge de la gorge flambe au premier rayon, sans fumée, et s'éteint quand le rayon passe.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "DON062-plus-3", "zone": "DON062", "pole": "+", "palier": 3, "nom": "L'armure qui brûle aux doigts", "cout": 1, "cible": 1, "effet": "La cible subit 12 dégâts et brûle : 2 dégâts pendant 3 tours. Le héros perd 3 PV.", "ops": [["deg", "cible", 12], ["brulure", "cible", 2, 3], ["prixPV", 3]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Les armures laquées des veilleurs brûlent aux doigts dès l'aube ; ils les gardent pourtant, lacées jusqu'au cou.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "DON062-plus-4", "zone": "DON062", "pole": "+", "palier": 4, "nom": "La lame au soleil", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : la cible subit 10 dégâts de plus. La cible subit 22 dégâts, qui ignorent sa garde. Le héros perd 2 PV.", "ops": [["si", "blesse", [["deg", "cible", 10]]], ["ignoreGarde"], ["deg", "cible", 22], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle +", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Le capitaine Sakuma tire sa lame au premier rayon, et l'éboulis du fond se tait d'un coup.", "budget": "28 (cible 28, écart +0 % ; vérifié au script)"},
{"id": "DON062-plus-5", "zone": "DON062", "pole": "+", "palier": 5, "nom": "Les dormeurs de jour", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 6 dégâts. La cible brûle : 6 dégâts pendant 3 tours. Le héros perd 2 PV.", "ops": [["deg", "tous", 6], ["brulure", "cible", 6, 3], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Les veilleurs de Yoake-dani dorment le jour, face à la paroi ; leurs ombres restent debout derrière eux.", "budget": "29,2 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "DON062-plus-6", "zone": "DON062", "pole": "+", "palier": 6, "nom": "Midi dans la gorge", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : la cible subit 12 dégâts de plus. La cible subit 28 dégâts et brûle : 3 dégâts pendant 2 tours. Le héros perd 4 PV.", "ops": [["si", "blesse", [["deg", "cible", 12]]], ["deg", "cible", 28], ["brulure", "cible", 3, 2], ["prixPV", 4]], "tags": ["Donjon", "Feu", "Pôle +", "Condition", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "À midi, le soleil atteint le fond de la gorge pour la première fois depuis que le château existe.", "budget": "36 (cible 36, écart +0 % ; vérifié au script)"},
{"id": "DON062-plus-7", "zone": "DON062", "pole": "+", "palier": 7, "nom": "L'Aube arrêtée", "cout": 3, "cible": 1, "effet": "Le soleil ne repart plus. La cible subit 34 dégâts, qui ignorent sa garde. Tous les ennemis brûlent : 2 dégâts pendant 3 tours. Le héros perd 5 PV. Pose Braise. Si Sang (consommé) : la cible subit 24 dégâts, le héros se soigne de 6.", "ops": [["ignoreGarde"], ["deg", "cible", 34], ["brulure", "tous", 2, 3], ["prixPV", 5], ["pose", "Braise"], ["reveil", "Sang", true, [["deg", "cible", 24], ["soin", "heros", 6]]]], "tags": ["Donjon", "Feu", "Forme ultime +7", "Perce-garde", "Dégâts", "Dégâts dans le temps", "Prix", "Pose Braise", "Réveil Sang"], "ambiance": "Au fond de Yoake-dani, en plein jour, on voit enfin ce qui marchait sur l'éboulis, et c'est à hauteur d'homme.", "budget": "45,2 (+30 si Sang, soit +66 % ; vérifié au script)"}
]
```

---

## Le Kourgane de Studenets (DON076 · Donjon · Haute montagne · Pierre · slave)

```json
{
 "fiche": "DON076",
 "nom": "Le Kourgane de Studenets",
 "recit": "Vous montez au col de Studenets avec le muletier Fedot, qui ne parle pas. Le kourgane est au sommet : une butte de pierres sèches, une porte basse, et devant elle trois cent trois croix de mélèze. Fedot vous dit qu'on y enterre depuis toujours ceux qui meurent en montagne, et que la butte ne grandit pas. Vous entrez. Le couloir descend, et l'air y est doux. Au fond, sur des lits de pierre, les morts sont rangés, et sous leurs mains jointes poussent des tiges vertes, longues, qui cherchent la porte. Fedot n'est pas entré. Vous l'entendez compter les croix.",
 "pal": [
  "Gel qui fend la pierre sur le col ; la porte du kourgane est ouverte, les lits de pierre vides, et les croix de mélèze penchent toutes vers la vallée.",
  "Le givre couvre les croix jusqu'au faîte ; le couloir du kourgane souffle un froid qui éteint les torches, et les mulets refusent de passer devant la porte.",
  "Col de haute montagne sous la neige, kourgane de pierres sèches à porte basse, croix de mélèze en rangs, muletiers slaves en pelisses qui passent vite.",
  "La neige fond autour du kourgane ; des tiges vertes sortent entre les pierres de la butte, et l'on entend, à travers la porte, une respiration lente et égale.",
  "Le col est noir de monde : les morts du kourgane sont sortis, les joues rouges de froid, et ils redescendent vers les villages, chacun vers sa maison."
 ],
 "pm": "Mort",
 "pp": "Vie"
}
```

### Pôle − Mort

Progression : le froid du couloir, les croix de mélèze, la torche éteinte, les lits vides, le mulet qui refuse, le gel qui fend la pierre, puis le kourgane ouvert. Style : le froid prend la force de la cible, carte après carte, et ce qui s'élance vers le héros s'y glace davantage. Prix : certaines cartes restent dans le kourgane (exil), d'autres coûtent des PV.

```json
[
{"id": "DON076-moins-1", "zone": "DON076", "pole": "-", "palier": 1, "nom": "Le froid du couloir", "cout": 1, "cible": 1, "effet": "La cible perd 3 d'attaque.", "ops": [["affaiblit", "cible", 3]], "tags": ["Donjon", "Pierre", "Pôle −", "Affaiblissement"], "ambiance": "Le couloir du kourgane de Studenets descend sous le col, et le froid y remonte à la rencontre du visiteur.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "DON076-moins-2", "zone": "DON076", "pole": "-", "palier": 2, "nom": "Les croix de mélèze", "cout": 1, "cible": 1, "effet": "Si la cible prend son élan : elle subit 6 dégâts de plus. La cible subit 9 dégâts.", "ops": [["si", "elan", [["deg", "cible", 6]]], ["deg", "cible", 9]], "tags": ["Donjon", "Pierre", "Pôle −", "Condition", "Dégâts"], "ambiance": "Fedot compte trois cent trois croix devant la porte ; le compte est le même chaque hiver, quoi qu'on enterre.", "budget": "12 / 12,5 (-4 %) recalculé par le critique"},
{"id": "DON076-moins-3", "zone": "DON076", "pole": "-", "palier": 3, "nom": "La torche éteinte", "cout": 1, "cible": 1, "effet": "La cible subit 15 dégâts, qui ignorent sa garde. Exil : cette carte quitte le combat.", "ops": [["deg", "cible", 15], ["ignoreGarde"], ["exil"]], "tags": ["Donjon", "Pierre", "Pôle −", "Dégâts", "Perce-garde", "Exil", "Prix"], "ambiance": "Le souffle du couloir éteint les torches à la troisième marche, et les muletiers le savent depuis toujours.", "budget": "15 / 15 (+0 %) recalculé par le critique"},
{"id": "DON076-moins-4", "zone": "DON076", "pole": "-", "palier": 4, "nom": "Les lits vides", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : elle subit 12 dégâts. Le héros gagne 15 de garde ; la cible subit 12 dégâts. Le héros perd 2 PV.", "ops": [["si", "elan", [["deg", "cible", 12]]], ["garde", "heros", 15], ["deg", "cible", 12], ["prixPV", 2]], "tags": ["Donjon", "Pierre", "Pôle −", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Sur les lits de pierre vides, la forme des corps est restée dans le givre, mains jointes, et rien dessous.", "budget": "28 / 28 (+0 %) recalculé par le critique"},
{"id": "DON076-moins-5", "zone": "DON076", "pole": "-", "palier": 5, "nom": "Le mulet qui refuse", "cout": 2, "cible": 1, "effet": "La cible subit 22 dégâts, qui ignorent sa garde. Piochez 2 cartes. Exil : cette carte quitte le combat.", "ops": [["deg", "cible", 22], ["ignoreGarde"], ["pioche", 2], ["exil"]], "tags": ["Donjon", "Pierre", "Pôle −", "Dégâts", "Perce-garde", "Pioche", "Exil", "Prix"], "ambiance": "Le mulet de Fedot refuse de passer devant la porte du kourgane, et Fedot ne le force jamais.", "budget": "30 / 32 (-6 %) recalculé par le critique"},
{"id": "DON076-moins-6", "zone": "DON076", "pole": "-", "palier": 6, "nom": "Le gel qui fend la pierre", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : elle subit 12 dégâts. La cible subit 18 dégâts. Le héros gagne 12 de garde. Piochez 1 carte. Le héros perd 3 PV.", "ops": [["si", "elan", [["deg", "cible", 12]]], ["deg", "cible", 18], ["garde", "heros", 12], ["pioche", 1], ["prixPV", 3]], "tags": ["Donjon", "Pierre", "Pôle −", "Condition", "Dégâts", "Garde", "Pioche", "Prix"], "ambiance": "Le gel de Studenets fend les pierres sèches de la butte, et pas une ne tombe de son rang.", "budget": "34,6 / 36 (-4 %) recalculé par le critique"},
{"id": "DON076-moins-7", "zone": "DON076", "pole": "-", "palier": 7, "nom": "Le Kourgane ouvert", "cout": 3, "cible": 1, "effet": "Les lits de pierre sont vides. Tous les ennemis perdent 3 d'attaque ; la cible, 3 de plus, et subit 18 dégâts. Le héros perd 2 PV. Exil. Pose Givre. Si Sang (consommé) : la cible subit 20 dégâts et perd 3 d'attaque.", "ops": [["affaiblit", "tous", 3], ["affaiblit", "cible", 3], ["deg", "cible", 18], ["prixPV", 2], ["exil"], ["pose", "Givre"], ["reveil", "Sang", true, [["deg", "cible", 20], ["affaiblit", "cible", 3]]]], "tags": ["Donjon", "Pierre", "Forme ultime −7", "Affaiblissement", "Dégâts", "Prix", "Exil", "Pose Givre", "Réveil Sang"], "ambiance": "La porte du kourgane est ouverte sur le col ; le froid sort par là, lentement, et descend vers les villages.", "budget": "41,8 (+29 si Sang, soit +69 % ; vérifié au script)"}
]
```

### Pôle + Vie

Progression : la tige sous les mains, la respiration égale, la neige qui fond, le mort qui se réchauffe, le muletier qui revient, le verger d'hiver, puis la foule du col. Style : la vie monte à mesure qu'on joue ; chaque carte rend davantage si une autre l'a précédée ce tour, et bien plus à la troisième. On joue court et vite, en enchaînant. Prix : la sève réchauffe aussi l'ennemi (soin, garde).

```json
[
{"id": "DON076-plus-1", "zone": "DON076", "pole": "+", "palier": 1, "nom": "La tige sous les mains", "cout": 1, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : le héros se soigne de 4. Il se soigne de 3. La cible subit 5 dégâts.", "ops": [["si", "cartesJouees", [["soin", "heros", 4]]], ["soin", "heros", 3], ["deg", "cible", 5]], "tags": ["Donjon", "Pierre", "Pôle +", "Condition", "Soin", "Dégâts"], "ambiance": "Sous les mains jointes des morts de Studenets, une tige verte pousse et cherche la porte du kourgane.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON076-plus-2", "zone": "DON076", "pole": "+", "palier": 2, "nom": "La respiration égale", "cout": 1, "cible": 0, "effet": "Si vous avez déjà joué une autre carte ce tour : riposte 3 de plus. Riposte 5 : jusqu'au prochain tour, chaque coup reçu renvoie 5 dégâts.", "ops": [["si", "cartesJouees", [["riposte", 3]]], ["riposte", 5]], "tags": ["Donjon", "Pierre", "Pôle +", "Condition", "Riposte"], "ambiance": "On entend, à travers la porte du kourgane, une respiration lente et égale, et plusieurs voix qui la suivent.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON076-plus-3", "zone": "DON076", "pole": "+", "palier": 3, "nom": "La neige qui fond", "cout": 1, "cible": 1, "effet": "Si c'est au moins votre troisième carte du tour : la cible subit 8 dégâts. La cible subit 8 dégâts. Reprenez en main la dernière carte de votre défausse. Chaque ennemi se soigne de 1.", "ops": [["si", "troisCartes", [["deg", "cible", 8]]], ["deg", "cible", 8], ["recup"], ["ennemiSoin", 1]], "tags": ["Donjon", "Pierre", "Pôle +", "Condition", "Dégâts", "Récupération", "Prix"], "ambiance": "La neige fond en rond autour de la butte, et l'herbe y pousse en plein hiver, jusqu'aux croix.", "budget": "13,8 (cible 15, écart -8 % ; vérifié au script)"},
{"id": "DON076-plus-4", "zone": "DON076", "pole": "+", "palier": 4, "nom": "Le mort qui se réchauffe", "cout": 2, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : reprenez en main la dernière carte de votre défausse. Si c'est au moins votre troisième : la cible subit 12 dégâts. La cible subit 16 dégâts. Riposte 4. Chaque ennemi se soigne de 1.", "ops": [["si", "cartesJouees", [["recup"]]], ["si", "troisCartes", [["deg", "cible", 12]]], ["deg", "cible", 16], ["riposte", 4], ["ennemiSoin", 1]], "tags": ["Donjon", "Pierre", "Pôle +", "Condition", "Récupération", "Dégâts", "Riposte", "Prix"], "ambiance": "Le mort du troisième lit a les joues rouges ; ses mains jointes se sont écartées d'un doigt.", "budget": "29,8 (cible 28, écart +6 % ; vérifié au script)"},
{"id": "DON076-plus-5", "zone": "DON076", "pole": "+", "palier": 5, "nom": "Le muletier qui revient", "cout": 2, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : la cible subit 10 dégâts. Reprenez en main la dernière carte de votre défausse. Le héros se soigne de 10. Riposte 6. Chaque ennemi gagne 1 de garde.", "ops": [["si", "cartesJouees", [["deg", "cible", 10]]], ["recup"], ["soin", "heros", 10], ["riposte", 6], ["ennemiGarde", 1]], "tags": ["Donjon", "Pierre", "Pôle +", "Condition", "Dégâts", "Récupération", "Soin", "Riposte", "Prix"], "ambiance": "Un muletier mort l'hiver dernier redescend du col avec sa bête ; Fedot lui rend son salut sans lever les yeux.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "DON076-plus-6", "zone": "DON076", "pole": "+", "palier": 6, "nom": "Le verger d'hiver", "cout": 2, "cible": 1, "effet": "Si c'est au moins votre troisième carte du tour : +1 de capacité de dépense ce tour, et la cible subit 10 dégâts. La cible subit 20 dégâts. Le héros se soigne de 10. Chaque ennemi se soigne de 2.", "ops": [["si", "troisCartes", [["boost"], ["deg", "cible", 10]]], ["deg", "cible", 20], ["soin", "heros", 10], ["ennemiSoin", 2]], "tags": ["Donjon", "Pierre", "Pôle +", "Condition", "Boost", "Dégâts", "Soin", "Prix"], "ambiance": "Un verger a poussé sur le col de Studenets en plein hiver ; ses pommes sont chaudes et personne n'y mord.", "budget": "33,6 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "DON076-plus-7", "zone": "DON076", "pole": "+", "palier": 7, "nom": "La Foule du col", "cout": 3, "cible": 1, "effet": "Les morts redescendent au village. Si c'est au moins votre 3e carte : 20 dégâts à la cible. La cible subit 20 dégâts, tous 4. Héros soigné de 12, ennemis de 2. Pose Racine. Si Abîme (consommé) : piochez 2, 16 dégâts à la cible, héros soigné de 8.", "ops": [["si", "troisCartes", [["deg", "cible", 20]]], ["deg", "cible", 20], ["soin", "heros", 12], ["deg", "tous", 4], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Abîme", true, [["pioche", 2], ["deg", "cible", 16], ["soin", "heros", 8]]]], "tags": ["Donjon", "Pierre", "Forme ultime +7", "Condition", "Dégâts", "Soin", "Prix", "Pose Racine", "Réveil Abîme"], "ambiance": "Les morts de Studenets redescendent en foule, chacun vers sa maison, et Fedot les compte en passant.", "budget": "46,4 (+32 si Abîme, soit +69 % ; vérifié au script)"}
]
```

---

## Châh-e Bâd, la Tour du Puits (DON110 · Donjon · Archipel · Eau · perse)

```json
{
 "fiche": "DON110",
 "nom": "Châh-e Bâd, la Tour du Puits",
 "recit": "Lettre de l'ingénieur Farrokh Zand, depuis Châh-e Bâd. La tour à vent est bien comme on l'a dite : des bouches en haut, qui boivent le vent, et un puits en bas, qui descend sous la mer. L'air froid tombe du ciel jusqu'au fond du puits et remonte chargé d'eau douce. J'ai fait descendre une corde lestée : soixante-quatre brasses, sans toucher le fond. Ce matin, la tour aspirait si fort que les pigeons tombaient dans les bouches. Ce soir, elle souffle vers le haut. Les gens de l'île ont posé des pierres sur les bouches. Elles respirent tout de même.",
 "pal": [
  "La tour aspire l'île entière : l'air, l'eau des citernes, les oiseaux, tout descend dans le puits, et la mer autour s'est creusée en entonnoir.",
  "Le puits sous la tour gronde ; les citernes baissent la nuit, les palmiers penchent vers la tour, et les pêcheurs entendent sous leurs barques un souffle lent.",
  "Archipel persan d'îles basses, tours à vent de brique crue au-dessus des maisons, citernes à coupoles, boutres à voile triangulaire, pêcheurs de perles.",
  "La tour souffle vers le haut ; des colonnes d'air humide montent des bouches, les nuages s'accrochent au-dessus de l'île, et il pleut de l'eau douce sur la mer.",
  "Le ciel est posé sur l'île : un nuage énorme s'appuie sur les tours, l'île flotte à moitié, et les boutres y montent par des cordes, les voiles pendantes."
 ],
 "pm": "Abysse",
 "pp": "Ciel"
}
```

### Pôle − Abysse

Progression : la corde sans fond, la citerne qui baisse, le souffle sous la barque, les pigeons dans les bouches, la mer en entonnoir, le puits qui gronde, puis l'entonnoir de Châh-e Bâd. Style : le héros se fait lourd comme le fond ; une épaisse garde, et quand elle est déjà levée, la pression la double ou la retourne contre l'attaquant. Prix : le puits garde certaines cartes (exil), ou des PV.

```json
[
{"id": "DON110-moins-1", "zone": "DON110", "pole": "-", "palier": 1, "nom": "La corde sans fond", "cout": 1, "cible": 0, "effet": "Le héros gagne 12 de garde.", "ops": [["garde", "heros", 12]], "tags": ["Donjon", "Eau", "Pôle −", "Garde"], "ambiance": "Farrokh Zand a laissé filer la corde lestée jusqu'au bout ; il l'a remontée mouillée, et froide jusqu'à la main.", "budget": "9,6 (cible 10, écart -4 % ; vérifié au script)"},
{"id": "DON110-moins-2", "zone": "DON110", "pole": "-", "palier": 2, "nom": "La citerne qui baisse", "cout": 1, "cible": 1, "effet": "Si le héros a déjà de la garde : la cible subit 6 dégâts. Le héros gagne 8 de garde et se soigne de 3.", "ops": [["si", "garde", [["deg", "cible", 6]]], ["garde", "heros", 8], ["soin", "heros", 3]], "tags": ["Donjon", "Eau", "Pôle −", "Condition", "Dégâts", "Garde", "Soin"], "ambiance": "Les citernes de Châh-e Bâd baissent la nuit d'une marche, et l'eau ne sort par aucun trou visible.", "budget": "12,4 (cible 12,5, écart -1 % ; vérifié au script)"},
{"id": "DON110-moins-3", "zone": "DON110", "pole": "-", "palier": 3, "nom": "Le souffle sous la barque", "cout": 1, "cible": 1, "effet": "Le héros gagne 10 de garde. La cible subit 10 dégâts. Exil : cette carte quitte le combat.", "ops": [["garde", "heros", 10], ["deg", "cible", 10], ["exil"]], "tags": ["Donjon", "Eau", "Pôle −", "Garde", "Dégâts", "Exil"], "ambiance": "Les pêcheurs de perles sentent sous leurs barques un souffle lent qui monte du fond, et ils cessent de plonger.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "DON110-moins-4", "zone": "DON110", "pole": "-", "palier": 4, "nom": "Les pigeons dans les bouches", "cout": 2, "cible": 0, "effet": "Si le héros a déjà de la garde : il en gagne 8 de plus. Le héros gagne 18 de garde. Riposte 6. Le héros perd 2 PV.", "ops": [["si", "garde", [["garde", "heros", 8]]], ["garde", "heros", 18], ["riposte", 6], ["prixPV", 2]], "tags": ["Donjon", "Eau", "Pôle −", "Condition", "Garde", "Riposte", "Prix"], "ambiance": "Les pigeons de l'île tombent dans les bouches de la tour, et on ne les entend pas toucher le fond.", "budget": "27,6 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "DON110-moins-5", "zone": "DON110", "pole": "-", "palier": 5, "nom": "La mer en entonnoir", "cout": 2, "cible": 0, "effet": "Le héros gagne 24 de garde. Tous les ennemis subissent 5 dégâts. Piochez 1 carte. Exil : cette carte quitte le combat.", "ops": [["garde", "heros", 24], ["deg", "tous", 5], ["pioche", 1], ["exil"]], "tags": ["Donjon", "Eau", "Pôle −", "Garde", "Dégâts", "Pioche", "Exil"], "ambiance": "Autour de Châh-e Bâd, la mer se creuse en entonnoir, et les boutres tournent en rond sans toucher la rame.", "budget": "31,2 (cible 32, écart -2 % ; vérifié au script)"},
{"id": "DON110-moins-6", "zone": "DON110", "pole": "-", "palier": 6, "nom": "Le puits qui gronde", "cout": 2, "cible": 1, "effet": "Si le héros a déjà de la garde : riposte 4. Le héros gagne 20 de garde. La cible subit 14 dégâts. Le héros perd 2 PV.", "ops": [["si", "garde", [["riposte", 4]]], ["garde", "heros", 20], ["deg", "cible", 14], ["prixPV", 2]], "tags": ["Donjon", "Eau", "Pôle −", "Condition", "Riposte", "Garde", "Dégâts", "Prix"], "ambiance": "Le puits gronde à marée haute ; Farrokh Zand écrit qu'il gronde aussi à marée basse, plus bas.", "budget": "32 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "DON110-moins-7", "zone": "DON110", "pole": "-", "palier": 7, "nom": "L'Entonnoir de Châh-e Bâd", "cout": 3, "cible": 1, "effet": "La tour boit l'île. Le héros gagne 30 de garde. La cible subit 24 dégâts. Exil : cette carte quitte le combat. Pose Abîme. Si Racine (consommée) : le héros gagne 20 de garde, une murène du puits remonte (18 PV, frappe 4).", "ops": [["garde", "heros", 30], ["deg", "cible", 24], ["exil"], ["pose", "Abîme"], ["reveil", "Racine", true, [["garde", "heros", 20], ["invoque", "Murène du puits", 18, 4]]]], "tags": ["Donjon", "Eau", "Forme ultime −7", "Garde", "Dégâts", "Exil", "Pose Abîme", "Réveil Racine"], "ambiance": "La tour de Châh-e Bâd aspire l'eau des citernes, l'air des maisons, les oiseaux ; la lettre de Farrokh s'arrête là.", "budget": "45 (+31 si Racine, soit +69 % ; vérifié au script)"}
]
```

### Pôle + Ciel

Progression : la colonne d'air, le nuage accroché, la pluie douce sur la mer, les boutres aux cordes, les pêcheurs d'oiseaux, l'île à moitié flottante, puis le ciel posé sur l'île. Style : la tour remplit la réserve de mana d'Eau, puis la pluie tombe en coups au hasard ; ce qui vole se prend dans le nuage. Prix : le ciel couvre aussi l'ennemi (garde), ou une carte part.

```json
[
{"id": "DON110-plus-1", "zone": "DON110", "pole": "+", "palier": 1, "nom": "La colonne d'air", "cout": 1, "cible": 0, "effet": "Gagnez 1 mana d'Eau. Le héros gagne 9 de garde.", "ops": [["mana", "Eau", 1], ["garde", "heros", 9]], "tags": ["Donjon", "Eau", "Pôle +", "Mana", "Garde"], "ambiance": "Une colonne d'air humide monte des bouches de la tour, et les enfants de l'île y lancent des plumes.", "budget": "10,2 (cible 10, écart +2 % ; vérifié au script)"},
{"id": "DON110-plus-2", "zone": "DON110", "pole": "+", "palier": 2, "nom": "Le nuage accroché", "cout": 1, "cible": 1, "effet": "Si la cible vole : elle subit 6 dégâts. Gagnez 2 mana d'Eau. Riposte 2 : jusqu'au prochain tour, chaque coup reçu renvoie 2 dégâts.", "ops": [["si", "vol", [["deg", "cible", 6]]], ["mana", "Eau", 2], ["riposte", 2]], "tags": ["Donjon", "Eau", "Pôle +", "Condition", "Dégâts", "Mana", "Riposte"], "ambiance": "Un nuage s'est accroché aux tours de Châh-e Bâd, et il ne bouge plus, même quand le vent tourne.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON110-plus-3", "zone": "DON110", "pole": "+", "palier": 3, "nom": "La pluie douce sur la mer", "cout": 1, "cible": 0, "effet": "Gagnez 2 mana d'Eau. Le héros se soigne de 6. Riposte 2. Chaque ennemi gagne 1 de garde.", "ops": [["mana", "Eau", 2], ["soin", "heros", 6], ["riposte", 2], ["ennemiGarde", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Mana", "Soin", "Riposte", "Prix"], "ambiance": "Il pleut de l'eau douce sur la mer, et les pêcheurs boivent à même le creux de la vague.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "DON110-plus-4", "zone": "DON110", "pole": "+", "palier": 4, "nom": "Les boutres aux cordes", "cout": 2, "cible": 1, "effet": "Si la cible vole : elle subit 12 dégâts. Gagnez 2 mana d'Eau. 3 coups au hasard de 4 dégâts. Le héros gagne 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "vol", [["deg", "cible", 12]]], ["mana", "Eau", 2], ["deg", "hasard", 4, 3], ["garde", "heros", 6], ["ennemiGarde", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Condition", "Dégâts", "Mana", "Garde", "Prix"], "ambiance": "Les boutres de Châh-e Bâd montent au nuage par des cordes de palmier, et redescendent chargés de grêle.", "budget": "26,8 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "DON110-plus-5", "zone": "DON110", "pole": "+", "palier": 5, "nom": "Les pêcheurs d'oiseaux", "cout": 2, "cible": 1, "effet": "Gagnez 2 mana d'Eau et 1 de Vent. La cible subit 16 dégâts. Riposte 3. Défaussez 1 carte au hasard.", "ops": [["mana", "Eau", 2], ["mana", "Vent", 1], ["deg", "cible", 16], ["riposte", 3], ["prixDefausse", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Mana", "Dégâts", "Riposte", "Prix"], "ambiance": "Sur l'île flottante, les pêcheurs de perles jettent leurs filets vers le haut, et les ramènent pleins d'oiseaux.", "budget": "28 (cible 32, écart -12 % ; vérifié au script)"},
{"id": "DON110-plus-6", "zone": "DON110", "pole": "+", "palier": 6, "nom": "L'île à moitié flottante", "cout": 2, "cible": 1, "effet": "Si la cible vole : elle subit 14 dégâts. Gagnez 2 mana d'Eau. 4 coups au hasard de 5 dégâts. Le héros gagne 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "vol", [["deg", "cible", 14]]], ["mana", "Eau", 2], ["deg", "hasard", 5, 4], ["garde", "heros", 6], ["ennemiGarde", 1]], "tags": ["Donjon", "Eau", "Pôle +", "Condition", "Dégâts", "Mana", "Garde", "Prix"], "ambiance": "Les maisons de l'île ne touchent plus le sol que d'un coin ; Farrokh Zand a glissé sa main dessous.", "budget": "35,8 (cible 36, écart -1 % ; vérifié au script)"},
{"id": "DON110-plus-7", "zone": "DON110", "pole": "+", "palier": 7, "nom": "Le Ciel posé sur l'île", "cout": 3, "cible": 1, "effet": "Le nuage s'appuie sur les tours. Gagnez 2 mana d'Eau et 2 de Vent. Piochez 2 cartes. La cible subit 20 dégâts. Le héros gagne 10 de garde. Défaussez 1 carte. Pose Sang. Si Braise (consommée) : 6 coups au hasard de 4 dégâts, 1 mana d'Eau.", "ops": [["mana", "Eau", 2], ["mana", "Vent", 2], ["pioche", 2], ["deg", "cible", 20], ["garde", "heros", 10], ["prixDefausse", 1], ["pose", "Sang"], ["reveil", "Braise", true, [["deg", "hasard", 4, 6], ["mana", "Eau", 1]]]], "tags": ["Donjon", "Eau", "Forme ultime +7", "Mana", "Pioche", "Dégâts", "Garde", "Prix", "Pose Sang", "Réveil Braise"], "ambiance": "Le nuage de Châh-e Bâd s'appuie sur les tours comme sur des cannes, et l'île monte avec lui d'une coudée.", "budget": "45 (+27 si Braise, soit +60 % ; vérifié au script)"}
]
```

---

## Le Lazaret de Rocca Salsa (CIT015 · Citadelle · Désert de sel · Pierre · vénitienne)

```json
{
 "fiche": "CIT015",
 "nom": "Le Lazaret de Rocca Salsa",
 "recit": "Le provéditeur Alvise Moranzon écrit au Sénat que le lazaret de Rocca Salsa tient bon : cent quatre-vingt-sept malades en quarantaine, chacun dans sa cellule de sel, une croix de craie sur chaque porte, les gardes relevés à l'heure. Le saunier Bortolo, qui livre l'eau, raconte autre chose : les cellules n'ont plus de portes, les malades travaillent aux salines avec les gardes, tous chantent la même chanson, et l'on ne sait plus qui garde qui. Les deux s'accordent sur un point. La nuit, on entend le sel pousser contre les murs, de l'extérieur.",
 "pal": [
  "Le lazaret n'a plus de murs, le sel les a mangés ; malades, gardes et sauniers dansent mêlés sur la croûte, et le sel monte autour d'eux en vagues figées.",
  "Les portes des cellules battent ; des sauniers en loques ont pris les remparts, les croix de craie sont effacées, et le sel craque contre les murs la nuit.",
  "Forteresse vénitienne de briques au bord d'un désert de sel, lazaret à cellules blanchies, salines en damier, gardes en casaque, barques plates sur la saumure.",
  "Chaque porte a sa croix de craie, chaque garde son heure ; le damier des salines est tracé au cordeau, et les malades défilent en rang vers la saumure.",
  "L'ordre a gagné le désert : la croûte de sel est tracée en cellules jusqu'à l'horizon, chacune avec sa porte et sa croix, et un homme debout dedans."
 ],
 "pm": "Chaos",
 "pp": "Ordre"
}
```

### Pôle − Chaos

Progression : les portes qui battent, la croix effacée, la chanson des remparts, le sel contre les murs, les gardes mêlés, la croûte où l'on danse, puis la mer de sel figée. Style : la cohue grossit ; chaque carte amène quelqu'un, déserteur, malade ou saunier, et un héros au plus mal en attire davantage. Prix : la cohue se piétine elle-même (bête blessée), ou le héros y laisse des PV.

```json
[
{"id": "CIT015-moins-1", "zone": "CIT015", "pole": "-", "palier": 1, "nom": "Les portes qui battent", "cout": 1, "cible": 1, "effet": "Un saunier en loques se joint à vous : 8 PV, frappe 2. La cible subit 3 dégâts.", "ops": [["invoque", "Saunier en loques", 8, 2], ["deg", "cible", 3]], "tags": ["Citadelle", "Pierre", "Pôle −", "Invocation", "Dégâts"], "ambiance": "Les portes des cellules battent au vent du désert ; personne ne sort, n'entre, ni ne les ferme.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "CIT015-moins-2", "zone": "CIT015", "pole": "-", "palier": 2, "nom": "La croix effacée", "cout": 1, "cible": 0, "effet": "Si le héros est sous la moitié de ses PV : un garde déserteur vous rejoint (10 PV, frappe 3). Un malade évadé vous rejoint : 10 PV, frappe 2.", "ops": [["si", "blesse", [["invoque", "Garde déserteur", 10, 3]]], ["invoque", "Malade évadé", 10, 2]], "tags": ["Citadelle", "Pierre", "Pôle −", "Condition", "Invocation"], "ambiance": "La croix de craie d'une cellule est effacée ; son malade travaille aux salines, et il chante juste.", "budget": "12,8 (cible 12,5, écart +2 % ; vérifié au script)"},
{"id": "CIT015-moins-3", "zone": "CIT015", "pole": "-", "palier": 3, "nom": "La chanson des remparts", "cout": 1, "cible": 0, "effet": "Une bande de sauniers chante sur les remparts : 16 PV, frappe 4. Tous les ennemis subissent 2 dégâts. Votre bête la plus faible perd 3 PV.", "ops": [["invoque", "Bande de sauniers", 16, 4], ["deg", "tous", 2], ["prixBete", 3]], "tags": ["Citadelle", "Pierre", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Gardes, malades et sauniers de Rocca Salsa chantent la même chanson ; Bortolo dit qu'elle n'a pas de fin connue.", "budget": "15,4 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "CIT015-moins-4", "zone": "CIT015", "pole": "-", "palier": 4, "nom": "Le sel contre les murs", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : vos alliés se soignent de 6. Des mercenaires du sel passent la brèche : 24 PV, frappe 6. La cible subit 6 dégâts. Votre bête la plus faible perd 3 PV.", "ops": [["si", "blesse", [["soin", "allies", 6]]], ["invoque", "Mercenaires du sel", 24, 6], ["deg", "cible", 6], ["prixBete", 3]], "tags": ["Citadelle", "Pierre", "Pôle −", "Condition", "Soin", "Invocation", "Dégâts", "Prix"], "ambiance": "La nuit, le sel pousse contre les murs du lazaret, et au matin les briques sont bombées vers dedans.", "budget": "28,5 (cible 28, écart +2 % ; vérifié au script)"},
{"id": "CIT015-moins-5", "zone": "CIT015", "pole": "-", "palier": 5, "nom": "Les gardes mêlés", "cout": 2, "cible": 1, "effet": "Des gardes sans casaque se mêlent à la cohue : 20 PV, frappe 5. Tous les ennemis subissent 5 dégâts ; la cible, 4 de plus. Le héros perd 2 PV.", "ops": [["invoque", "Gardes sans casaque", 20, 5], ["deg", "tous", 5], ["deg", "cible", 4], ["prixPV", 2]], "tags": ["Citadelle", "Pierre", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Les gardes de Rocca Salsa ont retourné leurs casaques ; on ne sait plus lesquels gardent et lesquels sont gardés.", "budget": "30,5 (cible 32, écart -5 % ; vérifié au script)"},
{"id": "CIT015-moins-6", "zone": "CIT015", "pole": "-", "palier": 6, "nom": "La croûte où l'on danse", "cout": 2, "cible": 1, "effet": "Si le héros est sous la moitié de ses PV : d'autres danseurs se lèvent (14 PV, frappe 3). Les danseurs de la croûte vous suivent : 30 PV, frappe 7. La cible subit 8 dégâts. Votre bête la plus faible perd 3 PV.", "ops": [["si", "blesse", [["invoque", "Danseurs du sel", 14, 3]]], ["invoque", "Danseurs de la croûte", 30, 7], ["deg", "cible", 8], ["prixBete", 3]], "tags": ["Citadelle", "Pierre", "Pôle −", "Condition", "Invocation", "Dégâts", "Prix"], "ambiance": "Sur la croûte blanche, malades et sauniers dansent la nuit en rond, et le rond ne laisse pas de traces.", "budget": "36,2 (cible 36, écart +1 % ; vérifié au script)"},
{"id": "CIT015-moins-7", "zone": "CIT015", "pole": "-", "palier": 7, "nom": "La Mer de sel figée", "cout": 3, "cible": 0, "effet": "Plus personne ne garde personne. La cohue déborde (34 PV, frappe 8). 8 dégâts à tous. Votre bête la plus faible perd 4 PV. Pose Racine. Si Sceau (consommé) : un mercenaire de plus (18 PV, frappe 5), piochez 2, alliés soignés de 3.", "ops": [["invoque", "Cohue de Rocca Salsa", 34, 8], ["deg", "tous", 8], ["prixBete", 4], ["pose", "Racine"], ["reveil", "Sceau", true, [["invoque", "Mercenaire du sel", 18, 5], ["pioche", 2], ["soin", "allies", 3]]]], "tags": ["Citadelle", "Pierre", "Forme ultime −7", "Invocation", "Dégâts", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Le sel s'est levé en vagues autour du lazaret, puis figé ; la cohue danse au creux de la plus haute.", "budget": "42,6 (+29 si Sceau, soit +68 % ; vérifié au script)"}
]
```

### Pôle + Ordre

Progression : la croix de craie, la relève à l'heure, le cordeau des salines, les malades en rang, la porte et sa croix, le provéditeur à l'heure, puis le désert en cellules. Style : on marque la cible, puis on frappe ce qui est déjà marqué ; les gardes postés tiennent le rang sous une garde commune. Prix : le règlement coûte des cartes, ou l'ennemi se couvre.

```json
[
{"id": "CIT015-plus-1", "zone": "CIT015", "pole": "+", "palier": 1, "nom": "La croix de craie", "cout": 1, "cible": 1, "effet": "La cible est marquée : elle subit 2 dégâts de plus à chaque coup. Le héros gagne 5 de garde.", "ops": [["vulnerable", "cible", 2], ["garde", "heros", 5]], "tags": ["Citadelle", "Pierre", "Pôle +", "Marque", "Garde"], "ambiance": "Chaque porte du lazaret a sa croix de craie, tracée par le provéditeur lui-même, d'un seul geste.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "CIT015-plus-2", "zone": "CIT015", "pole": "+", "palier": 2, "nom": "La relève à l'heure", "cout": 1, "cible": 1, "effet": "Un garde en casaque se poste : 10 PV, frappe 2. La cible est marquée de 1.", "ops": [["invoque", "Garde en casaque", 10, 2], ["vulnerable", "cible", 1]], "tags": ["Citadelle", "Pierre", "Pôle +", "Invocation", "Marque"], "ambiance": "La relève se fait à l'heure exacte ; le garde relevé reste debout une minute de plus, sans savoir pourquoi.", "budget": "11 (cible 12,5, écart -12 % ; vérifié au script)"},
{"id": "CIT015-plus-3", "zone": "CIT015", "pole": "+", "palier": 3, "nom": "Le cordeau des salines", "cout": 1, "cible": 1, "effet": "Si la cible est déjà marquée : elle subit 6 dégâts. La cible est marquée de 2. Vos alliés gagnent 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "vulnerable", [["deg", "cible", 6]]], ["vulnerable", "cible", 2], ["garde", "allies", 6], ["ennemiGarde", 1]], "tags": ["Citadelle", "Pierre", "Pôle +", "Condition", "Dégâts", "Marque", "Garde", "Prix"], "ambiance": "Le damier des salines est tracé au cordeau ; les sauniers ne marchent plus que sur les lignes.", "budget": "14,2 (cible 15, écart -5 % ; vérifié au script)"},
{"id": "CIT015-plus-4", "zone": "CIT015", "pole": "+", "palier": 4, "nom": "Les malades en rang", "cout": 2, "cible": 1, "effet": "La cible est marquée de 3 et subit 8 dégâts. Vos alliés gagnent 10 de garde. Défaussez 1 carte au hasard.", "ops": [["vulnerable", "cible", 3], ["deg", "cible", 8], ["garde", "allies", 10], ["prixDefausse", 1]], "tags": ["Citadelle", "Pierre", "Pôle +", "Marque", "Dégâts", "Garde", "Prix"], "ambiance": "Les malades de Rocca Salsa défilent en rang vers la saumure, chacun à un pas exact du précédent.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "CIT015-plus-5", "zone": "CIT015", "pole": "+", "palier": 5, "nom": "La porte et sa croix", "cout": 2, "cible": 1, "effet": "Si la cible est déjà marquée : elle subit 12 dégâts. La cible est marquée de 4. Un piquet de gardes se poste : 20 PV, frappe 4. Défaussez 1 carte au hasard.", "ops": [["si", "vulnerable", [["deg", "cible", 12]]], ["vulnerable", "cible", 4], ["invoque", "Piquet de gardes", 20, 4], ["prixDefausse", 1]], "tags": ["Citadelle", "Pierre", "Pôle +", "Condition", "Dégâts", "Marque", "Invocation", "Prix"], "ambiance": "Derrière chaque porte marquée, le malade se tient debout ; il ne s'assoit qu'à la relève, et seulement alors.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "CIT015-plus-6", "zone": "CIT015", "pole": "+", "palier": 6, "nom": "Le provéditeur à l'heure", "cout": 2, "cible": 1, "effet": "Si la cible est déjà marquée : elle subit 8 dégâts. Tous les ennemis sont marqués de 2. Vos alliés gagnent 8 de garde. La cible subit 10 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["si", "vulnerable", [["deg", "cible", 8]]], ["vulnerable", "tous", 2], ["garde", "allies", 8], ["deg", "cible", 10], ["ennemiGarde", 1]], "tags": ["Citadelle", "Pierre", "Pôle +", "Condition", "Dégâts", "Marque", "Garde", "Prix"], "ambiance": "Alvise Moranzon écrit au Sénat à la même heure chaque jour, et ses lettres arrivent toutes ensemble, en retard.", "budget": "34,8 (cible 36, écart -3 % ; vérifié au script)"},
{"id": "CIT015-plus-7", "zone": "CIT015", "pole": "+", "palier": 7, "nom": "Le Désert en cellules", "cout": 3, "cible": 1, "effet": "Chaque homme a sa cellule. Tous marqués de 2, la cible de 3 de plus. Alliés +14 de garde. Une garnison de sel se poste (24 PV, frappe 5). Défaussez 2 cartes. Pose Sceau. Si Givre (consommé) : la cible hésite, 8 dégâts à tous, alliés +8 de garde.", "ops": [["vulnerable", "tous", 2], ["vulnerable", "cible", 3], ["garde", "allies", 14], ["invoque", "Garnison de sel", 24, 5], ["prixDefausse", 2], ["pose", "Sceau"], ["reveil", "Givre", true, [["hesite", "cible"], ["deg", "tous", 8], ["garde", "allies", 8]]]], "tags": ["Citadelle", "Pierre", "Forme ultime +7", "Marque", "Garde", "Invocation", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "Jusqu'à l'horizon, la croûte de sel est tracée en cellules marquées, et dans chacune un homme attend son tour.", "budget": "52,5 (+32,2 si Givre, soit +61 % ; vérifié au script)"}
]
```

---

## Ressources

### Les Draps de Gribnoïé (RES118 · Forêt de champignons géants, Sève, slave)

```json
{
 "fiche": "RES118",
 "nom": "Les Draps de Gribnoïé",
 "recit": "À Gribnoïé, on tend des draps de lin sous les chapeaux géants et l'on frappe les pieds au maillet de bouleau. Les spores tombent en pluie brune, et les femmes en font une farine qui tient tout l'hiver. Le pain en est noir, léger, et il lève seul la nuit.",
 "pal": [
  "Quelques draps tendus sous les chapeaux, des maillets qui frappent les pieds, une poussière brune qui tombe lentement sur le lin.",
  "Toute la forêt est tendue de draps ; les spores tombent en nuées à chaque coup, et les femmes portent des sacs de farine brune jusqu'aux isbas."
 ]
}
```

### Les Palmiers à sucre de Phnom Thnot (RES369 · Canyon, Feu, khmère)

```json
{
 "fiche": "RES369",
 "nom": "Les Palmiers à sucre de Phnom Thnot",
 "recit": "Au fond du canyon de Phnom Thnot, chaque palmier à sucre porte son échelle de bambou, attachée au tronc pour toujours. Les grimpeurs y montent à l'aube masser les grappes de fleurs, et la sève coule. Cuite le soir, elle durcit en pains blonds qui sentent la fumée.",
 "pal": [
  "Quelques palmiers au fond du canyon, une échelle de bambou contre chaque tronc, un grimpeur qui monte à l'aube.",
  "Des centaines de palmiers serrés entre les parois rouges, une échelle à chacun, et des grimpeurs qui se saluent d'une cime à l'autre."
 ]
}
```

### Les Feuillets de Per-Iâh (RES331 · Cavernes cristallines, Pierre, égyptienne)

```json
{
 "fiche": "RES331",
 "nom": "Les Feuillets de Per-Iâh",
 "recit": "Dans les grottes de Per-Iâh, les tailleurs fendent la sélénite à la lame de cuivre, feuille après feuille, jusqu'à ce qu'on lise au travers. On en fait les fenêtres des tombes. Le vieux Nebsenet dit que la lumière qui passe par ces feuilles arrive un peu en retard.",
 "pal": [
  "Une galerie basse, quelques blocs laiteux, un tailleur qui fend une feuille à la lame et la lève vers la lampe.",
  "Des piles de feuilles claires à l'entrée de la grotte, si hautes qu'on voit le jour à travers, et le bruit sec des lames dans tout le roc."
 ]
}
```

### Les Lanières de Rit'i Qocha (RES019 · Glacier, Glace, inca)

```json
{
 "fiche": "RES019",
 "nom": "Les Lanières de Rit'i Qocha",
 "recit": "Sur le glacier de Rit'i Qocha, les bergers étendent la viande de lama en lanières salées, à même la glace, et la retournent à midi. Le froid la sèche, le soleil la durcit. Elle se garde des années. Les plus anciennes, au fond des magasins, ont gardé leur couleur.",
 "pal": [
  "Quelques rangs de lanières sombres sur la glace bleue, et un berger qui les retourne une à une, à midi.",
  "La langue du glacier est rayée de lanières jusqu'au col ; les bergers marchent entre les rangs, et les condors tournent sans oser descendre."
 ]
}
```

### Les Huîtres des Échasses de Kalamonia (RES150 · Mangrove, Eau, byzantine)

```json
{
 "fiche": "RES150",
 "nom": "Les Huîtres des Échasses de Kalamonia",
 "recit": "À marée basse, les racines-échasses de Kalamonia sortent de l'eau couvertes d'huîtres jusqu'à mi-hauteur. Les ramasseurs les détachent au couteau courbe, sans toucher à la racine. Le moine Sophronios tient le compte des charges pour le monastère. Il note aussi les racines qui ont changé de place.",
 "pal": [
  "Quelques racines découvertes par la marée, grises d'huîtres, et des ramasseurs penchés qui travaillent au couteau.",
  "Toute la mangrove découverte est hérissée de coquilles jusqu'aux branches ; les ramasseurs avancent en file, et les barques s'enfoncent sous la charge."
 ]
}
```

### Les Séracs aux Œufs de Hukahau (RES198 · Glacier, Glace, polynésienne)

```json
{
 "fiche": "RES198",
 "nom": "Les Séracs aux Œufs de Hukahau",
 "recit": "Les oiseaux de mer de Hukahau pondent dans les séracs, au-dessus de la baie. Les jeunes hommes y descendent à la corde de coco, un œuf à la fois, tenu dans la bouche. Les séracs bougent. Les oiseaux reviennent au même creux, même quand il a changé de place.",
 "pal": [
  "Une paroi de séracs bleus au-dessus de la baie, quelques nids, et une corde qui pend avec un homme au bout.",
  "Des nuées d'oiseaux autour des séracs, des dizaines de cordes le long de la glace, et des œufs roulés dans des feuilles qui descendent vers les pirogues."
 ]
}
```

### Les Caroubiers de Puquio Ch'aki (RES142 · Oasis, Sève, inca)

```json
{
 "fiche": "RES142",
 "nom": "Les Caroubiers de Puquio Ch'aki",
 "recit": "Autour de la source de Puquio Ch'aki, les caroubiers sont plus vieux que le chemin des messagers. On secoue leurs cosses, on les égrène sur la pierre creuse, on pile la pulpe en farine douce. La pierre est creusée d'une coudée. Personne ne se souvient de l'avoir vue plate.",
 "pal": [
  "Quelques caroubiers tordus autour d'une source, des cosses brunes au sol, une femme qui pile sur une pierre creuse.",
  "Une forêt de caroubiers penchés sur l'eau, les branches chargées de cosses, et le bruit des pilons sur des dizaines de pierres creuses."
 ]
}
```

### Les Briques blanches d'Asbo Arra (RES274 · Désert de sel, Pierre, éthiopienne)

```json
{
 "fiche": "RES274",
 "nom": "Les Briques blanches d'Asbo Arra",
 "recit": "Les tailleurs d'Asbo Arra découpent la croûte à la hache en briques pareilles, que les caravanes emportent vers les plateaux, où elles servent de monnaie. Le chef des tailleurs, Alemu, dit qu'il ne faut pas creuser plus bas que la troisième couche. Là, le sel est chaud au toucher.",
 "pal": [
  "Une croûte blanche à perte de vue, quelques tailleurs à la hache, une caravane de chameaux qui attend son chargement.",
  "La croûte est quadrillée de tranchées ; des files de chameaux chargés de plaques blanches partent dans toutes les directions, et la hache résonne sans arrêt."
 ]
}
```

### Les Barbes de Ciste d'Aigolophos (RES038 · Lande, Vent, grecque)

```json
{
 "fiche": "RES038",
 "nom": "Les Barbes de Ciste d'Aigolophos",
 "recit": "Sur la lande d'Aigolophos, les chèvres noires broutent le ciste au plus chaud du jour, et la résine leur colle à la barbe. Le soir, les bergers les peignent au peigne de cuir et roulent le ladanum en boules odorantes. Les chèvres attendent leur tour en silence, alignées.",
 "pal": [
  "Quelques chèvres noires dans la bruyère et le ciste, un berger assis qui peigne une barbe luisante.",
  "La lande embaume jusqu'à la mer ; des troupeaux entiers attendent en rang d'être peignés, et les boules de ladanum s'empilent sur des feuilles de figuier."
 ]
}
```

### Les Rayons pendus de Shahd-Ban (RES289 · Mangrove, Eau, moghole)

```json
{
 "fiche": "RES289",
 "nom": "Les Rayons pendus de Shahd-Ban",
 "recit": "Dans la mangrove de Shahd-Ban, les abeilles bâtissent leurs rayons sous les branches, au-dessus de l'eau. Les récolteurs y vont en barque, une torche de feuilles vertes à la main, et coupent le rayon d'un seul geste. Le miel a un goût de sel. Les abeilles, elles, ne piquent jamais.",
 "pal": [
  "Quelques rayons sombres pendus sous les branches, une barque dessous, une torche qui fume au ras de l'eau.",
  "Les rayons pendent par centaines au-dessus des chenaux, si lourds que les branches touchent l'eau, et l'air est épais de fumée et de miel."
 ]
}
```

### Le Lichen des Rennes de Kryopédion (RES057 · Toundra, Glace, grecque)

```json
{
 "fiche": "RES057",
 "nom": "Le Lichen des Rennes de Kryopédion",
 "recit": "À Kryopédion, on râtelle le lichen pâle de la toundra à la fin de l'été et on le sèche en meules rondes. Il nourrit les rennes et, moulu, épaissit le pain d'hiver. Le lichen repousse d'un doigt en une vie d'homme. On râtelle pourtant chaque année le même champ.",
 "pal": [
  "Une toundra couverte de lichen pâle, quelques râteleurs, une meule ronde qui sèche au vent.",
  "La plaine est ponctuée de meules jusqu'à l'horizon ; les rennes s'y frottent, et les râteleurs travaillent en ligne, au pas."
 ]
}
```

### Les Bulles de bitume d'Id-Kalam (RES117 · Delta fluvial, Eau, mésopotamienne)

```json
{
 "fiche": "RES117",
 "nom": "Les Bulles de bitume d'Id-Kalam",
 "recit": "Dans un bras mort du delta d'Id-Kalam, le bitume remonte du fond en grosses bulles lentes qui crèvent à la surface. Les cueilleurs le prennent à la perche et le roulent en boules pour les barques. On dit que les bulles remontent plus vite quand on parle au-dessus.",
 "pal": [
  "Un bras d'eau morte, quelques plaques noires et luisantes, un cueilleur qui tourne sa perche dans une bulle.",
  "Le bras du delta est couvert de plaques noires qui respirent ; des barques chargées de boules de bitume descendent vers les chantiers."
 ]
}
```

### Les Larmes d'encens de Däbrä Säqo (RES202 · Cité en ruines, Pierre, éthiopienne)

```json
{
 "fiche": "RES202",
 "nom": "Les Larmes d'encens de Däbrä Säqo",
 "recit": "Les arbres à encens de Däbrä Säqo poussent entre les blocs du palais effondré, les racines dans les salles. Les récolteurs entaillent l'écorce, puis reviennent une lune plus tard détacher les larmes séchées. Les arbres les plus riches poussent dans la salle du trône. On y entre pieds nus.",
 "pal": [
  "Quelques arbres tordus sur des murs effondrés, l'écorce entaillée, des larmes blanches qui sèchent au soleil.",
  "Les ruines sont une forêt d'arbres à encens ; chaque salle a son arbre, chaque arbre ses entailles, et l'odeur monte jusqu'au village."
 ]
}
```

### Les Cordiers d'eMakhoweni (RES164 · Forêt de champignons géants, Sève, zouloue)

```json
{
 "fiche": "RES164",
 "nom": "Les Cordiers d'eMakhoweni",
 "recit": "À eMakhoweni, les cordiers arrachent l'écorce fibreuse des pieds géants en longues bandes et la tordent en cordes sur la cuisse. Ces cordes ne pourrissent pas. Le pied écorcé cicatrise en une saison, et la nouvelle écorce porte, en relief, les marques des doigts.",
 "pal": [
  "Quelques pieds géants écorcés en bandes, des lanières qui sèchent entre les troncs, un cordier qui tord sur sa cuisse.",
  "Toute la forêt est tendue de lanières pâles d'un pied à l'autre, et les cordes s'enroulent en cercles plus hauts qu'un homme."
 ]
}
```

### L'Ardoise à encre de Yanxi-Jian (RES370 · Haute montagne, Pierre, chinoise impériale)

```json
{
 "fiche": "RES370",
 "nom": "L'Ardoise à encre de Yanxi-Jian",
 "recit": "Au torrent de Yanxi-Jian, les tailleurs sortent l'ardoise de l'eau, la scient et la polissent en pierres à encre pour les lettrés de la capitale. La meilleure pierre est celle qui a passé mille ans sous le courant. Les tailleurs l'écoutent avant de la polir : elle doit sonner creux.",
 "pal": [
  "Un torrent dans une gorge, des dalles noires sorties de l'eau, un tailleur qui polit à la main.",
  "Des rangées de pierres à encre noires sèchent sur chaque rocher du torrent, et le bruit des scies couvre celui de l'eau."
 ]
}
```

### Le Champ de perches d'Amanoura (RES168 · Delta fluvial, Eau, japonaise féodale)

```json
{
 "fiche": "RES168",
 "nom": "Le Champ de perches d'Amanoura",
 "recit": "À Amanoura, on plante des perches de bambou dans les vasières du delta et l'on tend des filets entre elles. Les algues y prennent tout l'hiver. On les décolle à l'aube, on les étale en feuilles minces au soleil. Les filets les plus vieux prennent plus que les neufs.",
 "pal": [
  "Quelques rangées de perches dans la vasière, des filets bruns tendus entre elles, une barque qui passe à l'aube.",
  "Le delta est un champ de perches jusqu'à la mer ; des feuilles noires sèchent sur chaque berge, et les barques se croisent dans les allées."
 ]
}
```
