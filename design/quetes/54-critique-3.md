# Critique 3 : relecture finale de Kobor

*Agent critique. Fichiers relus : la fin de 31-canon-corrections.md (« debutSi »), 40-A.json, 41-B.json, 42-C.json, 43-D.json, 45-pnj.json, 46-livre.json. Le script verif.py passe : structure correcte, 15 quêtes. J'ai suivi chacun des 62 choix finaux jusqu'au nœud par lequel la quête suivante commence (`debutSi`, sinon `debutRetour`, sinon `debut`).*

## Note : 87 / 100 (64, puis 80)

| Critère | T1 | T2 | **T3** | En bref |
|---|---|---|---|---|
| Clarté phrase à phrase | 16 | 18 | **18 / 20** | C'est net, court et lisible sur une télé. Les nœuds d'entrée à un seul écran (5/t1, 5/u1) restent denses. |
| Clarté de l'intrigue | 11 | 16 | **18 / 20** | La plainte est écrite, cousue dans le manteau de Vera, et partira au printemps : c'est enfin cohérent partout. Gleb, la double dîme, Zverevo et Semion se comprennent en une phrase chacun. |
| Enchaînement | 8 | 12 | **16 / 20** | Avec `debutSi`, presque tous les va-et-vient tiennent. Il reste 2 remontées qui rejouent une scène et 2 répliques en retard sur le chemin suivi. |
| Choix cornéliens | 15 | 18 | **18 / 20** | Les nouveaux finals sont bons. Les meilleurs : 5/t1 (rappeler le coureur ou livrer Matveï), −2/sg (« deux vérités, il en faut une ») et −4/rg (se dédire coûte le knout). Aucune option ne s'impose d'elle-même. |
| Embranchements, ton | 16 | 16 | **17 / 20** | Le registre est adulte et sobre. Les entrées par trace sont de vraies scènes, pas des résumés. |

## Ce qui est réglé (rapport 52)

Les 16 corrections sont appliquées.
- **`debutSi`.** Il est posé sur 11 quêtes et couvre la remontée dans 7 des 8 cas que j'avais signalés : +4 (`carnet_maintenu`), +5 (`plainte_portee`), +6 (`page_gardee`), +7 (`fosse_declaree`), −2 (`rapport_confirme`), −3 (`ligne_gardee`), −5 (`se_dedit`). En −6 (`zverevo_condamne`), l'entrée existe mais une phrase y reste fausse (voir n°5).
- **Débuts de retour partagés.** Ils sont dédoublés ou rendus neutres : 1/t0 et t1, 2/u1, 4/r1 (avec des traces), 5/u1, −5/r0, 0/r1 et s2.
- **Plainte.** Le statut est uniforme : écrite, pas envoyée.
- **Clarté.** Les points sont réglés : la coutume des deux témoins, la croix de tombe, le combat de Zverevo, le manteau rapporté, Ilya en 0/s3, le nœud final de 0 raccourci.
- **PNJ.** Les répliques de Bogdan (`z`), Vera (`p2`), Oustina (`p2`) et Borislav (`m5`) sont justes. « Andreïevitch » passe de 17 à 13 occurrences : c'est acceptable.

---

## Corrections restantes (celles qui gêneraient vraiment un joueur)

**1. 41-B, palier 5, nœud u1, choix « Je ne mentirai pas pour vous » (`fosses_livrees`) vers +6 : on retombe sur 6/a.** Dans ce nœud, Borislav, pourtant déchu et sous garde, réclame le carnet en voïévode. *Correction* : ajouter à la quête 6 `"debutSi": {"fosses_livrees": "y1"}`. Le nœud y1 serait par exemple : *« L'escorte a vidé les fosses et emmené Borislav. Kobor n'a plus rien sous la neige. Le scribe du nouveau voïévode est là : il veut savoir qui a creusé. »* Il mène à r2 et r3, puis à un final propre : « Donne les noms au scribe (+7) / Dis que Borislav a menti (+5) ». Le final r4 ne convient pas, puisque les fosses sont vides.

**2. 41-B, palier 7, nœud w1 (`cache_hiver`) vers 6/r1 : le scribe « arrive ce matin » et veut compter, alors que Bogdan vient de dire qu'il est passé et ne reviendra pas avant l'automne.** *Correction* : donner à la fin de w1 une trace propre, `cache_hiver_bis`, et ajouter à la quête 6 `debutSi` → z1 : *« Le scribe est revenu plus tôt qu'il ne l'avait dit. Il a vu la neige remuée sous le séchoir. Il ne demande rien. Il attend. »* Le nœud z1 mène à r2.

**3. 42-C, palier −3, choix « C'était tout » (`ment_oustina`) vers −4 : Gleb refait son offre du registre comme si c'était la première fois** (« Je sais tout… Il me faut un témoin »), alors que le joueur l'a déjà refusée. *Correction*, `txtTrace` sur −4/a : `"ment_oustina": "Il ajoute : « Tu m'as refusé une fois. Puis je t'ai entendu mentir à Oustina. Tu sais te taire, finalement. »"`.

**4. 40-A, palier 3, nœud a : le carnet est intact alors qu'il a peut-être été brûlé ou renié.** Le chemin est 3 → 2 (`carnet_brule` ou `carnet_renie`) → 1/t0 → 2/w1 → « Témoigne » → 3/a. Le `txtTrace` « un marchand garde toujours un double » a disparu de 3/a ; il ne reste que dans x1. *Correction* : remettre `"carnet_brule": "« Le carnet brûlé ? Un marchand garde toujours un double. »"`, et la même chose pour `carnet_renie` : « Renié, oui. Mais je n'ai pas brûlé le double. »

**5. 43-D, palier −6, nœud s1 (`zverevo_condamne`) : « je n'ai plus son sceau, il me le rend ».** Si l'on vient de −5/r1, c'est-à-dire après « Garde-la », Vera n'a jamais eu le sceau. *Correction* : « Il m'offre encore son sceau si je brûle la plainte. Cette fois, il ajoute : « Sinon, je rouvre l'affaire du grain. » »

**6. 41-B, palier 7, nœud a : « La plainte de Vera partira au printemps » est faux si le joueur l'a laissée courir (`plainte_courue`, 5/t1).** *Correction*, `txtTrace` sur 7/a : `"plainte_courue": "La plainte, elle, est déjà loin sur la piste du nord."`.

**7. 41-B, palier 5, nœuds t1 et u1 : la quête tient en un seul écran.** Récit, menace et choix y sont réunis en 450 caractères, contre « 3 à 8 nœuds par chemin » dans le format. Sur une télé, le joueur passe d'un « Continuer » à un dilemme sans transition. *Correction* : couper chacun en deux nœuds.
- t1 : un nœud lieu « pierre » où Borislav fait enchaîner Gleb et lance sa menace, puis le nœud de Matveï avec le choix.
- u1 : un nœud lieu « camp », « Le dégel a coupé la piste… », puis le nœud de Borislav.

*Pas d'autre correction bloquante. Deux enchaînements plus rares restent imparfaits, mais ne justifient pas une réécriture : −2/sg → −3/a quand Oustina sait déjà tout, et 2/w1 après `dime_retiree`.*
