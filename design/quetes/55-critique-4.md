# Critique 4 : Kobor, la note de 90 est-elle atteinte ?

*Agent critique. J'ai relu les quatre fichiers de quêtes, les PNJ et le livre. Le script verif.py passe : structure correcte, 15 quêtes. J'ai suivi de nouveau chacun des choix finaux jusqu'au nœud par lequel la quête suivante commence.*

## Note honnête : 88 / 100. Ce n'est pas encore 90.

Les 7 corrections du rapport 54 sont toutes appliquées, et proprement :
- 3/a a retrouvé son « double » du carnet ;
- 5/t0 → t1 et 5/u0 → u1 forment maintenant de vraies scènes en deux temps ;
- 6/y1, 6/z1 et `cache_hiver_bis` existent ;
- 7/a porte le `txtTrace` `plainte_courue` ;
- −4/a porte le `txtTrace` `ment_oustina` ;
- −6/s1 dit « il m'offre encore son sceau ».

Deux choses empêchent encore d'atteindre 90 :
1. **Le résumé de la quête ne change pas selon l'entrée.** Le texte qu'on lit en premier, dans le journal ou à l'écran d'ouverture, décrit la scène de départ. C'est faux pour une trentaine d'entrées (par `debutRetour` ou par `debutSi`). C'est exactement le reproche n°1 de l'utilisateur : « on ne comprend pas qui veut quoi ».
2. **Un nouveau trou dans l'enchaînement**, créé par la correction de 6/y2. Il est décrit en correction 2.

| Critère | T1 | T2 | T3 | **T4** | Ce qui le ferait monter |
|---|---|---|---|---|---|
| Clarté phrase à phrase | 16 | 18 | 18 | **18** | Correction 1 (+1), correction 5 |
| Clarté de l'intrigue | 11 | 16 | 18 | **18** | atteint |
| Enchaînement | 8 | 12 | 16 | **17** | Correction 2 (+1), correction 3 |
| Choix cornéliens | 15 | 18 | 18 | **18** | atteint |
| Embranchements, ton | 14 | 16 | 17 | **17** | Corrections 4 et 6 (+1) |

**Avec les corrections 1, 2 et 4, la note passe à 91. Avec les six, à 92.**

---

## Corrections, classées par points gagnés

### 1. Un résumé par point d'entrée (+1 en clarté). C'est la plus importante.

Il manque des résumés propres à chaque entrée, dans les 4 fichiers de quêtes. Exemple : à l'entrée 1/t1, le journal annonce « Le hameau veut reprendre le grain de nuit », alors que la scène porte sur le faux serment d'Oustina. Même chose en 5/t0 : le journal dit « Décide si Matveï avoue », alors qu'on parle de rappeler le coureur.

*Correction* : ajouter à chaque quête `"resumeRetour"` (une chaîne, ou un objet `{"-","+"}` pour la quête 0) et `"resumeSi": {"<trace>": "…"}`. Le moteur affiche le résumé qui correspond à l'entrée utilisée. Textes proposés :

| Quête, entrée | Résumé |
|---|---|
| 0, retour − (r1) | Tu as retiré ton nom du rapport : Bogdan est revenu du fort, enchaîné. Dis de nouveau à Gleb qui a vidé le Coffre. |
| 0, retour + (s1) | Vera est sortie du Coffre, faute de preuve. Gleb veut toujours un coupable : dis-lui qui a vidé le Coffre. |
| 1, retour et `bogdan_muet`, `dime_retiree` (t1, t0) | Vera est toujours au Coffre et le grain est parti. Oustina propose de jurer à faux contre Bogdan pour la faire sortir : oui ou non ? |
| 2, retour (u1) | Le carnet d'Ilya ne vaut plus rien. Gleb exige que Bogdan retire sa phrase sur la double dîme, sinon c'est le fort. |
| 3, retour (v1) | Vera a détruit sa plainte. Gleb lèvera les scellés de la barge d'Ilya s'il renie son carnet : maintenir, ou renier ? |
| 3, `dime_maintenue` (x1) | Bogdan risque le fort pour sa phrase sur la dîme. Ilya a gardé un double de son carnet : le porter au procès, ou le brûler ? |
| 4, retour (r1) | Gleb est libre et achète le retrait des marques sur la plainte. Aide Vera à décider si la plainte part quand même. |
| 4, `carnet_maintenu` (s1) | Vera a déchiré sa plainte, mais Ilya a tenu son carnet. Il faut retrouver les marques des familles malgré Gleb. |
| 5, retour (r1) | Le carnet a brûlé. Le voïévode épargnera Matveï si Vera retire la page de la plainte qui le nomme. |
| 5, `plainte_portee` (t0) | La plainte est partie par la piste du nord. Le voïévode jugera la mort de Semion si l'on ne rappelle pas le coureur. |
| 5, `fosses_creusees` (u0) | Borislav, déchu, a vu vos fosses. Il les livrera, sauf si tu jures que la page du carnet sur lui est un faux. |
| 6, retour et `cache_hiver_bis` (r1, z1) | Le scribe du nouveau voïévode compte les réserves. Bogdan doit-il montrer sa fosse, ou chaque famille creuser la sienne ? |
| 6, `fosses_livrees` (y1) | L'escorte a vidé les fosses. Le scribe veut savoir qui a creusé : donner les noms, ou dire que Borislav a menti ? |
| 7, `fosse_declaree` (w1) | Bogdan a montré sa fosse au scribe. Il veut en creuser une autre, en secret. |
| −1, retour (r1) | Ta phrase au conseil a semé le doute. Gleb te demande de confirmer ton rapport contre Bogdan, ou de retirer ton nom. |
| −2, retour (r1) | Oustina sait pour qui Bogdan a porté les peaux. Elle exige qu'on lui rende la ligne de son mari, devant tous. |
| −2, `rapport_confirme` (s1) | Tu as dit deux choses vraies et contraires : « Bogdan n'a rien gardé » et « Bogdan a avoué ». Le conseil veut savoir laquelle compte. |
| −3, retour (r1) | Gleb cherche un témoin contre Vera. Oustina te repose sa question : ce que tu lui as dit de Bogdan, c'était tout ? |
| −3, `ligne_gardee` (t1) | Oustina sait tout et hésite à aller voir Gleb. Aide-la à comprendre la dernière ligne de la lettre de Bogdan. |
| −4, retour (r1) | Ton aveu a fait saisir le grain, et Vera sera jugée. Gleb rendra tout si tu te dédis devant le voïévode. |
| −5, retour et `brouillon_donne` (r1, r0) | Vera n'a pas brûlé la plainte. Pour la punir, le voïévode rouvre l'affaire de Zverevo : qui ment ? |
| −6, retour (r1) | La porte est ouverte : l'envoyé du tsar a vu Semion. Dis-lui « accident », ou montre-lui le brouillon de la plainte. |
| −7, `semion_accident` (s1) | L'envoyé a écrit « accident », mais il demande qui a fermé la porte. Jure, ou nomme Matveï. |

Il faut aussi faire contrôler par verif.py que chaque entrée a son résumé.

### 2. 41-B, choix 6/y2 « Dis que Borislav a menti » (`borislav_dementi`) vers +5 : on retombe sur 5/r1 (+1 en enchaînement)

Le nœud 5/r1 dit « Les pages du carnet ont brûlé… Borislav sourit : plus rien ne le nomme ». Or sur ce chemin, Borislav est déchu, l'escorte l'a emmené et les fosses sont vides. C'est le même défaut qu'au tour 3, réintroduit par la correction de 6/y2.

*Correction* : à la quête 5, ajouter `"debutSi": {"borislav_dementi": "v0"}` et deux nœuds.
- **v0** (lieu « camp ») : « Tu as juré que Borislav mentait. Le scribe est reparti, et il a noté autre chose : si Borislav ment sur les fosses, sa page dans le carnet d'Ilya ment peut-être aussi. »
- **v1** (Ilya, final) : « Ilya : « Ton serment a fait de ma page un mensonge. Je peux la rejurer devant le scribe : Borislav ne sortira plus du fort. Mais le scribe saura alors que tu as menti, et il reviendra compter les familles. Ou je me tais, et Borislav finira blanchi. » »
  - « Rejure ta page, Ilya » (+6, trace `page_rejuree`). Prix : « Tu passes pour un menteur devant le scribe. Les quatre familles seront recomptées. »
  - « Tais-toi. Laisse-le blanchi » (+4, trace `page_reniee`, dont l'entrée 4/r1 est déjà juste). Prix : « Borislav repart libre au fort, Gleb sur ses talons. »
- Ajouter `page_rejuree` au `debutSi` de la quête 6, vers y1.

### 3. 41-B, palier 7, nœud w1 : « Il ne reviendra pas avant l'automne » est faux au second passage

Le circuit 7/w1 → 6/z1 (le scribe « revenu plus tôt ») → 6/r4 → 7/w1 fait relire cette phrase alors que le scribe vient de revenir. *Correction* : « J'ai montré ma fosse au scribe. Il a noté dix peaux et il est reparti. Une autre fosse, dix peaux, il ne la verra pas… »

### 4. Les quatre fichiers : sortir du texte les consignes entre parenthèses (+1 en ton)

Les finals 7/c, 7/w1, −7/c et −7/s3 se terminent par « (Pour refuser, quitte Bogdan…) » ou « (Pour jurer, quitte Matveï…) ». La phrase casse la voix du personnage et ressemble à une note de développeur. *Correction* : un champ `"refus": "Quitter Bogdan : la fosse restera vide"` (ou « Jurer et partir : la glace garde tout »), que le moteur affiche comme deuxième bouton. Retirer les parenthèses du txt.

### 5. 41-B, palier 6, nœud y2 : « l'amende du recel » est faux

Le recel, c'est Ilya qui le commet. Les familles, elles, ont caché des peaux au tribut. *Correction* : « …quatre familles paieront l'amende des peaux cachées, Bogdan en tête. »

### 6. 41-B (6/e) et 42-C (−2/f) : deux maximes de Matveï qui parlent comme l'auteur

- 6/e : « Un secret de hameau gèle d'abord, puis il pourrit… une vérité donnée à un voïévode, il en fait toujours un fouet. Les deux sont vrais. Choisis lequel tu préfères porter. »
- −2/f : « C'est ça, le pire. »

*Correction* :
- 6/e : « Matveï, sous la garde d'un soldat : « Si tu donnes tout, le voïévode tiendra chaque famille par son nom. Si tu caches, ça pourrira sous la neige, comme Semion. J'ai choisi de cacher, il y a quarante ans. Regarde où j'en suis. » »
- −2/f : couper « C'est ça, le pire » et finir sur « Le conseil fera pareil, et il aura raison aussi. »
