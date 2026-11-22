# Critique 2 : Kobor après le tour de corrections

*Agent critique. Fichiers relus : 31-canon-corrections.md, 40-A.json, 41-B.json, 42-C.json, 43-D.json, 45-pnj.json, 46-livre.json. Le script verif.py passe : structure correcte, 15 quêtes.*

## Note : 80 / 100 (64 au tour 1)

| Critère | Tour 1 | Tour 2 | En bref |
|---|---|---|---|
| Clarté phrase à phrase | 16 | **18 / 20** | Les répliques disent qui parle, et les phrases restent courtes. D s'est aligné sur les autres. Il reste deux ou trois images obscures (la « croix de tombe » de Vera en 4/a). |
| Clarté de l'intrigue (qui veut quoi) | 11 | **16 / 20** | La plainte est posée dès 0/a, 1/a et −1/a. Gleb avoue le reçu en 0/h. La double dîme et le mécanisme de Zverevo sont clairs, et le livre raconte enfin le départ. Un fait se contredit encore : **la plainte est-elle partie chez le tsar ou entre les mains de Vera ?** |
| Enchaînement entre les quêtes | 8 | **12 / 20** | La redescente fonctionne : chaque retour dit ce qui a changé et pose une question neuve. Il reste deux défauts. (1) **La remontée après un retour** rejoue la scène d'origine, avec des objets détruits. (2) Un même `debutRetour` sert à deux descentes différentes, et son texte n'est vrai que pour l'une d'elles. |
| Choix cornéliens | 15 | **18 / 20** | Les trois finals qui avaient une option évidente (2, 4, −5) sont corrigés, et les 13 nouveaux finals de retour sont presque tous déchirants. Les meilleurs : 3/v4 (« ce que vaut un homme qui a dit vrai une fois, puis s'est dédit »), −4/rg et −6/r4. |
| Embranchements, registre, ton | 14 | **16 / 20** | Les faux embranchements sont réparés (−1/c2, −2/d→f). Le registre reste adulte et sobre. Quelques répliques de PNJ sont en retard sur le canon. |

---

## Les 40 corrections du tour 1 : ce qui est réglé

**39 sur 40 sont appliquées, et une l'est en partie.**
- **Structure.** Il y a un `debutRetour` sur chaque quête de −6 à +6, avec un objet `{"-","+"}` à 0 (n°1). Vera est libérée en 1→0 (n°2).
- **Canon.** La plainte est présentée tôt (n°3). Bogdan a porté les peaux (n°4). Ce que sait Oustina est cohérent en 0, −3, −6 et +4 (n°5). Zverevo est nommé partout, avec 400 peaux, 40 par hiver pendant 10 hivers (n°6 et 7).
- **Procès.** Bogdan accuse Gleb en +4 au lieu de répéter la vente (n°8). « Vera ne nie pas » (n°9).
- **Choix évidents (n°10 à 15).** −5, 4 et 2 sont rééquilibrés. La quête 3 donne un vrai gain à qui brûle le carnet. Les prix de 1 et de 5 sont honnêtes. Le prix du sang (100 ou 30 zibelines) est une bonne trouvaille.
- **Clarté (n°16 à 31).** Les corrections sont toutes faites : Semion a une seule histoire, Ilya et sa barge restent au camp, Gleb peut accuser même accusé, les peaux viennent d'un autre hameau, le témoin signe en −4, la règle de la ligne de pièges est posée, les vingt peaux sont sous les claies et Bogdan les a tannées, l'envoyé du tsar a un motif.
- **PNJ, forme et livre (n°32 à 40).** Les répliques sont corrigées. D indique qui parle. Les deux finals à un seul bouton ont leur consigne. Le livre est clair, son auteur est situé (un scribe venu avec Gleb), et le reçu est au bon endroit.
- **En partie seulement : n°26.** La plainte est bien dans le manteau de Vera. Mais en −6/e, Vera la tient même si le joueur n'est pas passé par le nœud c, et rien ne l'explique.

---

## Corrections restantes (20 au plus), classées par gravité

### Gravité 1 : l'histoire se contredit

**1. Tous les fichiers : la remontée après un retour rejoue la scène d'origine.** Chaque final de retour renvoie vers le pôle, par exemple 3/v4 « Maintiens ton carnet » vers +4. Le joueur arrive alors au `debut` ordinaire de la quête suivante, qui ignore ce qui vient de se passer. Les cas cassés :

| Remontée (trace) | Ce que la quête rejoue à tort |
|---|---|
| `carnet_maintenu` → +4 | Vera « lira notre plainte », alors qu'elle l'a déchirée. |
| `plainte_portee` → +5 | On redécouvre Semion, déjà caché en « trappeur inconnu » ou déjà enterré sous son nom. |
| `page_gardee` → +6 | Borislav réclame le carnet, alors que ses pages ont brûlé. |
| `fosse_declaree` → +7 | Bogdan propose de creuser une fosse qu'il vient de déclarer. |
| `rapport_confirme` → −2 | Le conseil réclame une ligne qu'Oustina a déjà récupérée. |
| `ligne_gardee` → −3 | Oustina repose sa question alors qu'elle sait déjà tout. |
| `zverevo_paie` (via −4/rg) → −5 | « Le voïévode arrive ce soir », alors qu'il est déjà là. |
| `voisin_accuse` après `plainte_gardee` → −6 | Le voïévode refait l'offre que Vera a refusée, sans la mentionner. |

*Correction* : ajouter un champ moteur `"debutSi": {"<trace>": "<nœud>"}`, lu avant `debut`. Dans chacune de ces 8 quêtes, prévoir un nœud d'entrée qui raconte la situation et rejoint le final existant, ou un nœud final propre. Exemple, quête 4 avec `carnet_maintenu` : *« Vera, sortie du Coffre : « J'ai déchiré ma plainte. Ilya, lui, a tenu. Le carnet suffira-t-il sans elle ? Ilya peut la réécrire de mémoire, avec les marques de ceux qui oseront la remettre. » »* Ce nœud mène à r1, r2 et r4, le chemin des marques grattées, qui convient ici. Plus léger : mettre au moins un `txtTrace` sur le premier nœud de chaque quête, et faire réécrire le premier nœud en conséquence.

**2. 40-A (paliers 0 et 1) contre 41-B, 42-C et 43-D : la plainte est-elle partie ?**
- En 0/a, elle « a envoyé une plainte au tsar ». En 1/a, « Vera a envoyé au tsar ». En 1/b, « Ma plainte est partie ».
- Partout ailleurs, Vera l'a encore en main : elle la lit en 4/g, la porte au fort en 4/r4, en raye une page en 5/r4, la brûle en −6. En 6/a et en 7/a, elle « arrivera au printemps ».

*Correction* : en 0/a, « Votre cheffe, Vera, a fait écrire une plainte au tsar contre le voïévode, et contre moi. Elle partira avec le convoi du printemps. » En 1/a, « Vera a fait écrire au tsar… ». En 1/b, « Ma plainte partira au printemps. Si Kobor vole encore… ».

**3. Plusieurs `debutRetour` ne sont vrais que pour l'une des deux descentes qui y mènent.**

| Nœud | Descente pour laquelle le texte est faux | Ce qui ne colle pas |
|---|---|---|
| 1/t1 | `dime_retiree` | « On m'a pris mes terres et mes pièges », alors que Gleb les lui a rendus. Le prix de t3 « Ne jure pas » dit aussi « sans terres ». |
| 2/u1 | `carnet_renie` | « Le carnet du marchand a brûlé », alors qu'il a été renié, pas brûlé. |
| 4/r1 | `page_retiree` | « A brûlé la lettre de Semion », alors que Semion a été avoué et enterré sous son nom. |
| 5/r1 | `fosses_creusees` | « Les pages ont brûlé… Borislav sourit », alors que le carnet a été lu en entier et que Borislav est tombé. |
| −5/r1 | `brouillon_donne` | « J'ai gardé la plainte », alors qu'elle est brûlée et que Vera a le sceau. |
| 0/r1 | `rapport_confirme` puis `rapport_dechire` | « Tu as refusé de signer », alors qu'on a signé, puis retiré son nom. |
| 0/s2 | `oustina_parjure` | « Le hameau mange », alors que le convoi est parti avec le grain. |

*Correction* : permettre `"debutRetour": {"<trace>": "<nœud>", "*": "<nœud>"}` et écrire un nœud d'entrée par descente. Sinon, rendre le texte neutre. Exemple pour 2/u1 : « Le carnet du marchand ne vaut plus rien : brûlé ou renié, c'est pareil. »

### Gravité 2 : clarté

**4. 40-A, palier 1, nœud t1 : on ne comprend pas comment le faux serment d'Oustina ferait sortir Vera.** Gleb sait que le reçu est vrai, puisqu'il l'a posé. *Correction*, Bogdan : « La coutume donne raison à deux témoins contre un papier. Si Oustina jure m'avoir vu vendre les peaux, nous serons deux contre le reçu. Gleb devra lâcher Vera. »

**5. 41-B, palier 4, nœud a : « Hier, j'ai fait tailler ma croix de tombe par Matveï : on ne peut plus me faire peur. »** L'image tombe du ciel, et 5/r4 y revient (« il a taillé ma croix »). *Correction* : « Hier, j'ai demandé à Matveï de tailler ma croix de tombe. Si on m'envoie aux mines, je suis prête. On ne peut plus me faire peur. »

**6. 43-D, palier −5, nœud b, combat : « veulent prendre au séchoir les quarante peaux qu'on leur réclame ».** Qui prend quoi, et à qui ? *Correction* : « Les trappeurs de Zverevo viennent se payer eux-mêmes : ils veulent vider le séchoir de Kobor. »

**7. 43-D, palier −6, nœud e : Vera tient la plainte au-dessus du feu même si le joueur ne l'a pas arrachée aux hommes de Gleb** (reste de la n°26). *Correction* : ajouter le `txtTrace` `ecoute_oustina` (ou `aveu_matvei`) : « Vera a repris la plainte elle-même au séchoir, la manche déchirée. » Plus simple : retirer de c la phrase « Quand tu arrives, trois hommes de Gleb… » et faire de c un combat sur le chemin du cercle.

**8. 40-A, palier 0, nœud s3 : « Il veut que je dise au tribunal d'où viennent mes peaux. »** Il n'y a pas de tribunal à 0, et Gleb le sait déjà. *Correction* : « Il veut que je jure, devant tout le hameau, que Vera m'a vendu le tribut. »

**9. 40-A, palier 0, nœud h : jusqu'à 624 caractères quand les traces s'empilent** (txt de 337 caractères et six `txtTrace`). *Correction* : garder au plus deux traces affichées (la plus récente d'abord) et raccourcir le txt en coupant « Je voulais que tu le trouves toi-même. Il n'en est pas moins vrai. »

### Gravité 3 : répliques des PNJ et détails

**10. 45-pnj, Bogdan, `z` : « J'ai vendu les peaux. C'est écrit » ne tient plus à +1**, où il dit en 1/a « j'ai menti pour rien ». *Correction* : « Ce que j'ai dit à Gleb est écrit. Le reste ne regarde que moi. »

**11. 45-pnj, Vera, `p2` : « le grain est mangé » est faux de +1 à +3, où le grain est saisi.** *Correction* : « …j'ai vendu les peaux, et le grain nous a nourris tout l'automne. »

**12. 45-pnj, Oustina, `p2` : « À moi aussi » contredit le canon corrigé** (elle soupçonnait). *Correction* : « Il a menti à tout Kobor pour la cheffe. Je savais qu'il mentait. Je ne savais pas pour qui. »

**13. 45-pnj, Borislav, `m5` : « pas une plainte » est faux à −5 et −6**, où la plainte existe encore. *Correction* : « Kobor, le hameau le plus en règle de ma province. Pas une peau qui manque. Pour le reste, nous verrons. »

**14. 41-B et 43-D : « Borislav Andreïevitch » revient 17 fois, à côté de « Borislav » tout court.** Sur une télé, c'est lourd et le nom change d'une ligne à l'autre. *Correction* : le nom complet à sa première apparition dans chaque quête, puis « le voïévode » ou « Borislav ».

**15. 42-C, palier −3, nœud r1 : rien ne dit l'état du grain.** Si l'on vient de −4/rg (« Non. Mon aveu tient »), le grain est saisi et Vera sera jugée au dégel. *Correction* : ajouter le `txtTrace` `registre_refuse` : « Les greniers sont vides depuis que le voïévode a pris le grain. »

**16. 41-B, palier 6 : après `fosse_declaree` → +7, la quête 7 redemande de creuser** (voir n°1). Si rien ne change au moteur, il faut au moins un `txtTrace` en 7/c : « Bogdan : « J'ai montré ma fosse au scribe. Il est reparti. Celle-ci, il ne la verra pas. » »
