# Critique 5 : note finale de Kobor

*Agent critique. J'ai relu les fichiers 40 à 43, 45-pnj, 46-livre et la fin de 31-canon-corrections. Le script verif.py passe : structure correcte, 15 quêtes, et un résumé pour chaque point d'entrée. J'ai suivi de nouveau les 70 choix finaux jusqu'au nœud par lequel la quête suivante commence. J'ai aussi vérifié que le moteur (tv/src/quetes.js) lit bien `debutSi`, `resumeSi`, `resumeRetour`, `absentsRetour` et `refus`.*

## Note finale : 91 / 100

| Critère | T1 | T2 | T3 | T4 | **T5** |
|---|---|---|---|---|---|
| Clarté phrase à phrase | 16 | 18 | 18 | 18 | **19 / 20** |
| Clarté de l'intrigue | 11 | 16 | 18 | 18 | **18 / 20** |
| Enchaînement | 8 | 12 | 16 | 17 | **18 / 20** |
| Choix cornéliens | 15 | 18 | 18 | 18 | **18 / 20** |
| Embranchements, ton | 14 | 16 | 17 | 17 | **18 / 20** |

**L'objectif de 90 est atteint sans complaisance.** Aucun des défauts restants ne casse l'histoire. Ce sont des incohérences de détail, sur des chemins peu fréquentés.

## Points forts

- **On comprend en 30 secondes, à chaque entrée.** Le résumé change maintenant selon le point d'entrée (`resumeRetour`, `resumeSi`), et le moteur l'affiche. C'était le dernier vrai obstacle à la clarté.
- **L'histoire de départ se dit en quatre phrases** : Vera a vendu le tribut pour nourrir Kobor, Bogdan s'accuse à sa place, Gleb, qui vole la dîme deux fois, veut faire tomber Vera à cause de sa plainte, et Ilya a tout noté. Le livre la raconte sans détour.
- **Les deux sens de la descente tiennent.** Les 70 transitions arrivent sur un nœud vrai. 0/h2 ne rejoue plus la révélation du reçu.
- **Les dilemmes sont adultes et ont un prix humain réel** : la phrase vraie qui trompe Oustina (−3), se dédire au prix du knout (−4/rg), rappeler le coureur ou livrer Matveï (5/t1), deux vérités dont il faut choisir une (−2/sg), ce que vaut un homme qui s'est dédit (3/v4). Les combats tombent autant sur les options de Mensonge que de Vérité, si bien que l'épreuve ne trahit plus la « bonne » réponse.
- **Le Mensonge a de vraies générosités jusqu'au fond.** En −7/a, « personne n'a eu faim cet hiver ». Le chef de Zverevo passe sur les traces de Bogdan.
- **Le ton est tenu.** Les consignes de refus sont devenues des boutons, et les maximes d'auteur ont disparu.

## Défauts restants, classés par gravité

**1. 43-D, palier −5, `resultat` des deux choix « Zverevo ment » (nœuds e et rf) : le pronom renvoie à la mauvaise personne.** La phrase « Il passe enchaîné devant la Pierre, sur les traces de Bogdan » vient juste après une réplique de Borislav, donc le « Il » désigne le voïévode. Or c'est le cœur de la leçon du Mensonge (le philosophe l'a demandé). *Correction* : « Le chef de Zverevo passe enchaîné devant la Pierre, sur les traces de Bogdan. »

**2. 41-B, quête 6, entrée y1 (`fosses_livrees`, `page_rejuree`), et quête 5, entrée v0 (`borislav_dementi`) : Borislav et Matveï restent sur la carte alors que le texte les dit emmenés.** Le texte dit « l'escorte a emmené Borislav », et Matveï est parti avec le convoi. Le joueur peut pourtant leur parler, et Borislav répond en voïévode en place (réplique `p5`). *Correction* : ajouter au moteur un champ `"absentsSi": {"<trace>": [...]}`, à vérifier avant `absentsRetour`. Puis :
- quête 6 : `{"fosses_livrees": ["gleb","borislav","matvei"], "page_rejuree": ["gleb","borislav","matvei"]}` ;
- quête 5 : `{"borislav_dementi": ["gleb","borislav","matvei"]}`.

**3. 41-B, palier 6, nœud y2, entrée `page_rejuree` : on repropose le mensonge que le scribe vient de démasquer.** On arrive par 5/v1, où Ilya vient de rejurer sa page. Vera reprend alors mot pour mot « Si tu dis que Borislav a menti… le scribe repart », alors que le scribe sait que tu as menti. *Correction* : ajouter à y2 le `txtTrace` `"page_rejuree": "« Cette fois, le scribe ne te croira pas sur parole. Si tu redis que Borislav ment, il comptera lui-même chaque fosse. »"`. Dans le prix de « Dis que Borislav a menti », ajouter : « …et le scribe recomptera tout Kobor. »

**4. 42-C, palier −2, choix sg « Le rapport compte » (`ligne_partagee`) vers −3/a : Oustina repose « Qu'a fait mon mari ? » alors qu'elle le sait peut-être déjà.** Elle le sait si le joueur est passé auparavant par `oustina_sait` (−3 → −2 → −1 → −2/s1). Le chemin est rare. *Correction* : ajouter à −3/a le `txtTrace` `"oustina_sait": "Elle s'arrête. « Je sais pour qui. Ce que je ne sais pas, c'est ce que tu en feras. »"`. Plus propre : donner au choix sg une trace distincte, `ligne_reprise`, avec un `debutSi` vers −3/t1, qui suppose déjà qu'Oustina sait.

**5. 40-A, palier 2, entrée w1 (`oustina_refuse`) quand le joueur vient de `dime_retiree` : Gleb exige que Bogdan témoigne contre Vera, alors qu'il l'a déjà fait.** Bogdan a témoigné à +2 (`bogdan_temoin`) avant de se dédire sur la dîme. Le chemin est rare. *Correction* : ajouter à 2/w2 le `txtTrace` `"dime_retiree": "« Tu as déjà dit la vente, et retiré la dîme. Cette fois, tu diras que Vera a menti sur le grain. »"`.

**6. 41-B, palier 7, nœud w1, puis 6/z1, 6/r4 et retour à 7/w1 : le joueur peut tourner en rond.** Creuser, se faire voir, montrer la fosse, recreuser… : la boucle n'a pas de fin narrative. Ce n'est pas faux, mais c'est répétitif. *Correction* : au second passage en w1 (`txtTrace` `cache_hiver_bis`), Bogdan dit : « Le scribe a vu la première. Il verra celle-ci. Je ne creuserai plus. » Le choix « Creusez » prend alors le prix « Bogdan refuse : c'est toi qui creuseras. »

---

*Il n'y a pas d'autre défaut qui gênerait un joueur. Les corrections 1 à 3 prennent dix minutes et rendraient la note de 91 solide. Les corrections 4 à 6 ne touchent que des chemins de trois allers-retours ou plus.*
