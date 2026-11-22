# Le philosophe, 2e lecture : le jeu laisse-t-il le joueur juger ?

Relecture des 15 quêtes après le tour 4 (40-A, 41-B, 42-C, 43-D), à la lumière de 31-canon-corrections.

## Note : 88/100
(1re lecture, rapportée sur 100 : environ 78.)

| Critère | /25 | Commentaire |
|---|---|---|
| Mensonge : leçon gagnée, pas assénée | 23 | La bascule se voit à −1 (« ce n'est plus son aveu : c'est ta signature ») et à −3 (Oustina). Les fruits du mensonge restent jusqu'à −7 (« personne n'a eu faim cet hiver »). Le chef de Zverevo enchaîné double désormais Bogdan. |
| Vérité : victoires et prix | 23 | Inchangé et solide. La vérité dite à moitié sert Gleb, la vérité entière fait tomber le voïévode et laisse le hameau à nu. Matveï (+6) penche maintenant d'un côté (défaut 4). |
| Retour (se raviser) | 21 | Le nouveau final `h2` à 0 et l'entrée v0/v1 à +5 sont bons. La seule punition physique de la zone (le knout) frappe encore un seul sens (défaut 3). |
| Le jeu ne tranche pas | 21 | Les combats sont maintenant équilibrés : 13 choix Vérité et 13 choix Mensonge. Restent la première impression à 0 (défaut 2) et une phrase ambiguë à −5 (défaut 1). |

## Ce qui est réglé
- **Équilibre des épreuves.** J'ai compté les finals : 13 combats pour un choix de vérité, 13 pour un choix de mensonge. Les combats côté Mensonge sont bien motivés : les cousins d'Oustina à −2, les trappeurs de Zverevo à −5, les familles qui ont mis leur marque à +4 et −6. Le jeu dit maintenant qu'**un mensonge aussi doit se défendre**.
- **Les deux pôles sont captés par le pouvoir, chacun à sa manière.** La vérité sert Gleb à 0. Le mensonge sert Gleb à −4 (« Tu sais te taire, finalement ») et le voïévode à −6 (le sceau). La leçon commune se dégage seule : ce qui compte, c'est *à qui* sert ce qu'on dit, plus que le fait de dire vrai ou faux. C'est le cœur du cas, et personne ne le formule.
- **Les deux extrêmes se répondent.** À −7, le seul choix possible est d'ouvrir la porte ; à +7, le seul choix possible est de creuser la fosse. Les boutons de refus sont symétriques (« la glace garde tout » / « la fosse restera vide »). Aucun pôle n'est une fin heureuse.

## Défauts restants et corrections

**1. −5 : la phrase ajoutée désigne le mauvais homme (bug).**
43-D, quête −5, nœuds `e` et `rf`, choix « Zverevo ment », `resultat`. La phrase « Il passe enchaîné devant la Pierre… » vient juste après une réplique de Borislav, donc « Il » se lit comme le voïévode.
→ Remplacer par : « Le chef de Zverevo passe enchaîné devant la Pierre, sur les traces de Bogdan. »

**2. La première décision penche encore vers le mensonge.**
40-A, quête 0, nœuds `h` et `h2`. Le prix du choix Vérité porte un jugement (« Et Gleb obtient ce qu'il voulait »). Le prix du choix Mensonge n'en porte aucun, alors que c'est le choix qui façonne tout le reste.
→ Choix « C'est Bogdan », `prix` : « Bogdan, innocent, est enchaîné au fort, puis part aux mines au printemps. Vera garde le hameau et le grain, et sa plainte repose sur un mensonge. »
(Cela prépare la phrase de Vera à +1 : « Si Kobor vole encore, elle ne vaudra plus rien. »)

**3. Le seul châtiment corporel de la zone punit le mensonge.**
42-C, quête −4, nœud `rg` : se dédire vers le mensonge coûte le knout (PV −3). Aucun retour vers la vérité ne coûte rien au corps du joueur. Le jeu laisse donc entendre que mentir se paie dans la chair. Or la loi punit le **dédit** dans les deux sens, et le jumeau exact existe déjà : +5, `v1`, où le joueur avoue au scribe qu'il a juré faux.
→ 41-B, quête +5, nœud `v1`, choix « Rejure ta page, Ilya » : ajouter `"cout": {"pv": 3}`.
`prix` : « Tu as juré faux devant le scribe : le knout, pour faux serment. Les quatre familles seront recomptées. »
`resultat` : « On te fouette devant le camp, pour faux serment. Puis Ilya rejure sa page, mot pour mot, et le scribe rouvre son registre à la page de Kobor. »
Leçon : se raviser coûte, dans un sens comme dans l'autre.

**4. Matveï penche maintenant pour la vérité (+6).**
41-B, quête +6, nœud `e`. « J'ai choisi de cacher, il y a quarante ans. Regarde où j'en suis. » est un argument d'autorité pour tout livrer, juste avant le choix du carnet. L'ancienne version disait « Les deux sont vrais ».
→ `txt` : « Matveï, sous la garde d'un soldat : « Si tu donnes tout, le voïévode tiendra chaque famille par son nom. Si tu caches, ça pourrira sous la neige, comme Semion. J'ai caché, il y a quarante ans. Je ne sais toujours pas si j'aurais dû parler. » »

**5. Le narrateur juge par la météo et par un adjectif.**
Chaque résultat Mensonge finit dans le gel (« le gel descend d'une coudée », « le givre gagne la porte », « le ruisseau gèle jusqu'au fond »), chaque résultat Vérité dans le dégel ou la légèreté. C'est l'identité visuelle de la zone et il faut la garder, mais un adjectif tranche à la place du joueur.
→ 41-B, quête +5, nœud `f`, choix « Dis tout, Matveï », `resultat` : remplacer « plus pauvre et plus léger » par « plus pauvre, et sans plus rien à cacher ».
(Le gel a déjà un sens tendre à +7, « juste assez pour garder un secret ». C'est le bon équilibre : le froid conserve autant qu'il tue.)

## Pour les auteurs
Après ces cinq corrections, je monterais à **93/100**. Ce qui sépare encore la zone de la perfection tient au texte, plus à la structure : quelques prix et quelques adjectifs disent encore au joueur ce qu'il doit penser. Pour vérifier, une règle simple : **chaque prix doit nommer une victime, et aucun ne doit nommer un vainqueur moral.**
