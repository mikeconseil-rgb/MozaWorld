# Critique 1 : les 15 quêtes de Kobor, les répliques des PNJ et le livre

*Agent critique. Fichiers lus : 30-canon-et-format.md, 40-A.json, 41-B.json, 42-C.json, 43-D.json, 45-pnj.json, 46-livre.json.*

## Note : 64 / 100

| Critère | Note | En bref |
|---|---|---|
| Clarté phrase à phrase | 16 / 20 | Phrases courtes et lisibles sur une télé. Le « charabia » d'avant a disparu. On sait presque toujours qui parle. |
| Clarté de l'intrigue (qui veut quoi) | 11 / 20 | Deux faits essentiels ne sont jamais posés à l'écran : **la plainte de Vera au tsar** et **le reçu laissé par Gleb**. Le joueur les découvre par allusion, ou pas du tout. |
| Enchaînement entre les quêtes | 8 / 20 | La montée tient à peu près. **La descente est cassée** : chaque quête est écrite comme si on y arrivait par le bas. En redescendant, on rejoue une scène déjà jouée, avec des objets brûlés ou des personnes déjà emmenées. Les quatre auteurs se contredisent aussi sur plusieurs faits : Bogdan a-t-il porté les peaux ? que sait Oustina ? Zverevo doit-il 40 peaux ou 400 ? |
| Choix cornéliens | 15 / 20 | Neuf finals sur treize sont vraiment déchirants (0, 1, 5, 6, −1, −3, −4, −6, et 3 avec une retouche). Trois ont une option qui s'impose d'elle-même : 2, 4 et −5. |
| Embranchements, registre, ton | 14 / 20 | Registre adulte et sobre, rien de gratuit. Il y a quelques faux embranchements et quelques maximes d'auteur. D n'indique pas qui parle. |

Les points forts sont réels. La quête −3 (« Il a sorti les peaux du Coffre » : une phrase vraie qui trompe) est la meilleure du lot. Les répliques du voïévode, envoyées par message scellé quand il est absent, sont une bonne trouvaille. Le livre qui se termine différemment selon le palier aussi. Les défauts sont surtout de **structure** et de **cohérence**, pas d'écriture.

---

## Corrections, classées par gravité

### Gravité 1 : bloquant (la quête ne tient pas ou se contredit)

**1. Tous les fichiers, tous les paliers sauf 0 : la redescente rejoue une scène déjà jouée.** La règle dit que l'état dépend du palier, et on peut redescendre. Quatorze retours sont incohérents. Exemples :
- 3→2 : on a brûlé le carnet d'Ilya. En remontant 2→3, la quête 3 tend de nouveau ce carnet.
- 4→3 : le carnet a déjà été lu au procès, et la quête 3 demande encore « Porter le carnet au procès ? ».
- 5→4 : la plainte de Vera est déjà lue, un cavalier est parti, et la quête 4 redemande « je lis ou je déchire ? ».
- 6→5 : Matveï a déjà avoué et attend le convoi sous garde, et la quête 5 lui redemande d'avouer.
- 7→6 : le voïévode est rappelé et le carnet déjà livré, et la quête 6 redemande le carnet.
- −5→−4 : le faux registre vient d'être avoué devant le voïévode, et Gleb redemande de le truquer.
- −6→−5 : le voïévode est déjà là, et il « arrive ce soir ».
- −7→−6 : la plainte est brûlée et Vera est starosta, et la quête −6 lui redemande de brûler la plainte.

*Correction* : ajouter à chaque quête de ±1 à ±6 un second départ, `"debutRetour"`, déclenché par la trace du choix de retour (`carnet_brule`, `plainte_dechiree`, `semion_cache`, `pages_brulees`, `cache_hiver`, `registre_avoue`, `plainte_gardee`, `porte_ouverte`, etc. ; elles existent déjà et ne servent à rien pour l'instant). Ce départ ouvre sur un nœud qui dit ce qui a changé, puis rejoint l'arbre avec une question nouvelle. Exemple pour 3 au retour de 4 : *« Vera est de nouveau au Coffre. Gleb a écrit « tempête ». Ilya : « Mon carnet a été lu pour rien. Gleb veut que je le renie au prochain procès. » »* Le final devient « Ilya maintient son carnet (+4) / Ilya le renie (+2) ». Sinon, solution plus légère : écrire dans chaque `resultat` de descente un texte qui remet la situation du palier inférieur en place, et réécrire le premier nœud de chaque quête pour qu'il marche dans les deux sens.

**2. 40-A.json, palier 1, fin `vers 0` (« Reprendre le grain ») : Vera reste enfermée.** Le palier 0 la veut présente, et rien ne la libère. *Correction* : ajouter au `resultat` : « Sans grain saisi, plus de preuve : Gleb fait sortir Vera du Coffre, en attendant mieux. »

**3. Plusieurs fichiers : la plainte de Vera au tsar n'est jamais présentée.** Elle tombe du ciel en 1/b (« Ma plainte au tsar est partie ») et en 1/c (« Si Vera retire sa plainte »). Côté Mensonge, on n'en entend parler qu'en −6. C'est pourtant le mobile de Gleb et l'enjeu de tout l'arc. *Correction* : la poser dans le premier nœud des deux quêtes qui suivent le palier 0.
- 1/a, Bogdan, ajouter : « Gleb la voulait, elle. Elle a écrit au tsar contre le voïévode, et contre lui. »
- −1/a, Vera, ajouter : « J'ai écrit au tsar contre le voïévode et contre Gleb. Si je tombe, ma plainte tombe avec moi. »
- Option : une phrase de Matveï en 0/g.

**4. 40-A palier 0 (nœud e), 41-B palier 4 (nœud f), 42-C paliers −1 (nœud e) et −3 : Bogdan a-t-il porté les peaux ?** Oustina lui donne un alibi : « Il était ici avec moi, cette nuit-là » en 0 ; « Je dirai qu'il était au séchoir la nuit de la vente » en +4. Mais en −1, Matveï « a vu Bogdan porter les peaux », et toute la quête −3 repose sur la phrase vraie « Il a sorti les peaux du Coffre ». *Correction (canon)* : Bogdan a bien sorti les peaux du Coffre, de nuit, sur l'ordre de Vera, jusqu'au traîneau d'Ilya, sans toucher une pièce.
- 0/e devient : « Cette nuit-là, il est sorti tard et rentré les mains vides. Il ment pour quelqu'un. »
- 4/f devient : « Je dirai qu'il a porté les peaux pour la cheffe, et qu'il n'a pas gardé une pièce. »
- 4/c, Bogdan : retirer « je n'ai jamais vu ce marchand ».

**5. 40-A palier 0, 42-C palier −3, 43-D palier −6, 41-B palier 4 : ce que sait Oustina change d'une quête à l'autre.**
- En 0/e, elle sait déjà que Bogdan ment pour quelqu'un à qui il doit tout. En −3, toute la quête lui fait demander s'il est un voleur.
- On n'atteint −4 qu'en l'ayant trompée. Pourtant, en −6/b, elle sait que Vera a vendu les peaux (« on saura qui a vendu les peaux… Vera ira le rejoindre »).
- En +4/f, elle dit « il m'a menti à moi aussi, en me regardant dans les yeux ». Or on n'arrive à +3 que si Bogdan a témoigné, ce qu'elle voulait (2/d).

*Correction* :
- 0/e : elle soupçonne, sans savoir pour qui (voir 4).
- −6/b : « Mon mari est un voleur, soit. Mais le voïévode peut le faire sortir des mines. Une plainte, une enquête, et il n'en sortira jamais. Il ment peut-être. C'est la seule promesse qu'on m'ait faite. »
- 4/c et 4/f : Oustina lui en veut d'avoir menti au hameau, pas de lui avoir menti à elle.

**6. 42-C palier −4 et 43-D palier −5 : le hameau voisin s'appelle « Zverevo » chez C et n'a pas de nom chez D, et la dette ne fait pas la même taille.** En −4, « Zverevo paiera le tribut de Kobor », soit 400 peaux. En −5, le voisin doit « quarante peaux, les quarante que nous avons rayées ». Le mécanisme est flou des deux côtés : pourquoi « disparues sur la route de Zverevo » ferait-il payer Zverevo ? *Correction* :
- −4/a, Gleb : « J'écris : le convoi a été pillé sur les terres de Zverevo. La loi dit que le hameau du pillage rembourse. Zverevo paiera nos quatre cents peaux. »
- −5 : nommer Zverevo partout, remplacer « quarante peaux » par « le tribut de Kobor », et adapter l'offre d'Ilya en −5/c : « Je prête à Zverevo de quoi payer. Mon prix : le grain de printemps de Kobor. »

**7. 43-D palier −5, nœud a : Gleb dit « les quarante que *nous* avons rayées de *notre* registre ».** C'est la voix du hameau, pas celle de l'inspecteur. Il n'y a ni nom ni guillemets, donc on ne sait pas qui parle. *Correction* : « Gleb : « Le voïévode arrive ce soir. Zverevo n'a pas payé et crie au faux registre. Ses trappeurs descendent la rivière. Moi, je n'ai rien vu. Toi non plus. » »

**8. 41-B palier 4, nœud a / réponse « Bogdan doit dire qu'il a menti » : Bogdan l'a déjà dit.** On n'atteint +3 qu'en passant par `bogdan_temoin` : « Bogdan raconte la vente, mot pour mot. » *Correction* : réponse « Bogdan doit accuser Gleb » ; en 4/c, Bogdan : « J'ai déjà dit la vente. Cette fois, je dirai l'encoche : une peau sur dix. Mais un trappeur contre un inspecteur… Il me faut Oustina à côté de moi. »

**9. 40-A palier 2, nœud a : la réponse « Vera a déjà avoué. Pourquoi lui ? » contredit la quête 4.** En 4/a et 4/g, Vera n'a pas encore avoué devant tous (« Si je lis ma plainte, j'avoue la vente »). *Correction* : « Vera ne nie pas. Pourquoi lui ? »

### Gravité 2 : un choix qui n'en est pas un (une option s'impose)

**10. 43-D palier −5, final : l'aveu ne coûte presque rien.** Mentir envoie un innocent aux mines. Dire la vérité coûte 40 peaux, et Oustina vide sa cachette. Tout joueur avoue. *Correction*, prix de « Notre registre est faux » : « Gleb, démasqué, accuse Vera de la vente : elle part au Coffre, le grain d'hiver est saisi. » Le `resultat` doit le montrer.

**11. 41-B palier 4, final : « Déchire-la » n'apporte rien.** Dans les deux cas Vera est punie, et la plainte est l'œuvre de sa vie : on lit. *Correction* :
- Prix de « Déchire-la » : « Le tribut perdu est effacé : Kobor ne doit plus rien, et Vera ne fait que quelques mois de Coffre. Gleb garde sa place. »
- Prix de « Lis ta plainte » : « Vera avoue la vente devant tous : ce peut être les mines. Le voïévode, humilié, s'en prendra à Kobor. »

**12. 40-A palier 2, final : « Témoigne » l'emporte sur tous les plans.** Oustina le veut, la famille mange, Gleb est accusé. Vera elle-même, en 2/c, dit qu'elle ne veut pas que Bogdan perde tout. *Correction* :
- En 2/c, couper « Je ne veux pas de ça non plus » et écrire : « S'il parle, Kobor me lâche, et ma plainte meurt avec moi. »
- Prix de « Témoigne » : « Bogdan désigne celle qui l'a sauvé. Le hameau ne suivra plus Vera. »
- Ajouter un gain à « Tais-toi » dans le `resultat` : « … mais les trappeurs déposent chaque soir une part de gibier devant sa porte. »

**13. 40-A palier 3, fin `vers 2` : le jeu condamne déjà « Jeter le carnet au feu ».** Le `resultat`, où Gleb lève son gobelet vers toi, rend l'option perdante. *Correction*, ajouter un vrai gain : « Ilya garde sa barge et fera crédit au hameau tout l'hiver. » Remplacer le gobelet par : « Ilya pleure de soulagement. Plus loin, Gleb rentre son sourire. »

**14. 40-A palier 1, fin `vers 2` : le prix cache le vrai coût.** Le prix dit « Kobor se rationne », alors que 1/a annonce : « Les vieux ne passeront pas février. » *Correction* : « Kobor se rationne. Les plus vieux ne verront peut-être pas le printemps. Bogdan est méprisé de tous. » Le libellé « Le grain part. Vera a vendu le tribut » mélange deux idées : écrire « Laissez partir le convoi ».

**15. 41-B palier 5, fin `vers 6` : le prix est sous-estimé.** Il dit « Kobor paiera une amende », alors que Borislav menace en 5/e : « Si c'est un meurtre, Kobor paiera quarante ans de tribut d'un coup. » *Correction* : « Matveï sera emmené et ne reviendra pas. Kobor paiera une lourde amende. »

### Gravité 3 : clarté (un nom, un objet ou un fait sorti de nulle part)

**16. 40-A palier 0, nœud h : sur le chemin a→b→d→h, le joueur n'a jamais entendu le nom de Vera, et on lui propose « C'est Vera ».** Le fait que Gleb a posé le reçu n'est dit nulle part en clair. *Correction*, txt de Gleb en 0/h : « Alors ? J'ai un reçu de grain signé par Vera. Et Bogdan qui jure que c'est lui. L'un des deux ment. » Ajouter des `txtTrace` qui rappellent ce que le joueur a vu, à partir des traces `recu` et `vu_ilya`, aujourd'hui inutilisées : « Tu as vu le reçu. Personne ne t'a dit qui l'avait posé. » « Ilya t'a dit : quarante sacs, contre les peaux. »

**17. 43-D palier −7, nœud b : l'envoyé du tsar arrive sans raison.** La plainte est brûlée, alors pourquoi chercher un inspecteur disparu depuis quarante ans ? *Correction*, Vera : « Un envoyé du tsar monte la piste. La veuve de l'inspecteur disparu est morte cet automne. Dans ses papiers, une lettre : « Je pars pour Kobor. » Tout le hameau a juré : personne n'est jamais venu. Moi aussi. »

**18. 42-C palier −2 (nœud f) et 41-B palier 5 (nœud b), comparés à 43-D palier −6 (nœud d) : trois versions de l'histoire d'il y a quarante ans.** En −2, on a « chassé un homme » ; en +5 et en −6, on l'a enfermé. Le mobile change aussi : en +5, il voulait « la moitié de nos hommes pour l'armée » ; en −6, il avait « lu nos comptes ». *Correction* : garder la version de D, plus simple, et la nommer. En −2/f : « Il y a quarante ans, on a enfermé un homme pour sauver tout le monde. » En +5/b : « Il s'appelait Semion. Il avait lu nos comptes et voulait écrire au tsar. On l'a enfermé une nuit, pour lui faire peur… » Donner le nom de Semion aussi en −6/d.

**19. 40-A palier 0 (nœud f), 42-C palier −1 (nœud a), 46-livre page 2 : où est Ilya ?** En 0, sa barge est prise dans la glace au camp. En −1, « Ilya est revenu ». Dans le livre, la barge est « repartie chargée ». *Correction (canon)* : la barge est prise dans la glace au bord du camp depuis l'automne, et Ilya se déplace en traîneau. En −1/a : « Et Ilya s'impatiente. » Livre, page 2 : « …venue à l'automne. Elle est restée prise dans la glace, au bord du camp. »

**20. 42-C palier −1, nœud b : « Vera me doit encore trente peaux » contredit le marché de 0/f** (les peaux contre quarante sacs, payé). *Correction* : « J'ai été payé. Mais ton inspecteur rôde autour de ma barge. Si on me questionne, je dirai d'où viennent les peaux. Je ne mentirai pas pour Kobor gratis. » La réponse « Prends mon or » garde son sens. Mettre le combat du nœud f au camp, pas au belvédère : la barge est là-bas.

**21. 41-B palier 4, nœud a : Gleb préside encore le procès alors que le carnet l'accuse.** Le joueur ne comprend pas pourquoi le carnet ne l'a pas fait tomber. *Correction*, ajouter à Vera en 4/a : « Gleb est l'homme du trésor : il juge, même accusé. Seul le voïévode peut le juger, lui. » Le cavalier envoyé chercher le voïévode en 4 devient alors logique.

**22. 40-A palier 2, nœud e : « les peaux saisies au dernier convoi » ; le Coffre est vide, de quelles peaux s'agit-il ?** *Correction* : « Au belvédère, les hommes de Gleb comptent le tribut d'un autre hameau, qu'ils escortent. Une peau de côté, neuf dans le sac, une peau de côté. »

**23. 42-C palier −4, nœud a et final : on ne sait pas pourquoi Gleb a besoin du joueur pour « porter le registre ».** *Correction*, Gleb : « …Il me faut un témoin qui signe, comme pour Bogdan. Toi. » Le final devient : « Signe : la route de Zverevo. »

**24. 42-C palier −2, final : on ne voit pas pourquoi « Bogdan n'a rien gardé pour lui » sauverait la ligne de pièges.** *Correction*, Vera en −2/a : « La règle dit : un voleur qui s'est enrichi perd sa ligne. »

**25. 42-C palier −3 (nœud b) et 41-B palier 6 (nœud d) : les vingt peaux d'Oustina.** Dans la lettre de C, Bogdan sait où elles sont (« Garde ce que tu sais où tu sais »). Chez B, « il ne le sait même pas ». Elles sont aussi « sous les claies » chez C et « sous le plancher » chez B. *Correction* : en 6/d, « Pour nos vieux jours. Bogdan le sait, il les a tannées lui-même. » Un seul endroit : sous les claies du séchoir.

**26. 43-D palier −6, nœuds c et e : pourquoi la plainte est-elle cousue dans un manteau au séchoir d'Oustina ?** Et Vera la tient au final même si le joueur ne l'a pas sauvée. *Correction* : « La plainte est cousue dans le manteau de Vera, pendu au séchoir. » Ajouter dans e un `txtTrace` à rebours : si `plainte_sauvee` est absente, « Vera l'a reprise elle-même, la manche déchirée ».

**27. 43-D palier −6, nœud a : « starosta » n'est jamais défini.** *Correction* : « Starosta : la cheffe reconnue par le voïévode. Un tribut fixe, du grain garanti. »

**28. 40-A palier 0, nœud d, `apres` : « Personne n'est venu ici, d'accord ? » est une phrase obscure.** Elle reprend le serment du −7, hors de propos ici. *Correction* : « Bon. Ce n'était pas ici. Je ne sais plus où. Mais c'est moi. »

**29. 40-A palier 3, nœud d : « quelqu'un d'innocent paiera aussi » ; Ilya n'est pas innocent (il fait du recel).** *Correction* : « Si tu le portes, l'homme qui nous a nourris paiera aussi. »

**30. 40-A palier 1, `txtTrace` `message_vera` : « Tu n'as pas encore répété les mots de Vera » ne veut rien dire.** *Correction* : « Vera t'a dit : « Ne les laisse pas voler ce grain. » »

**31. 41-B palier 6, nœud a : pourquoi le voïévode, accusé par la plainte, fait-il lui-même les comptes ?** *Correction*, ajouter : « Le tsar m'ordonne de faire ce compte moi-même. C'est ma punition. Elle sera aussi la vôtre. »

### Gravité 4 : embranchements, forme, PNJ, livre

**32. 45-pnj.json, Bogdan, réplique `z` (−1 à +1) : au palier 0, Bogdan avoue au joueur qu'il s'est accusé pour la cheffe.** Ça tue l'enquête de la quête 0. En −1, il est aux mines et ne devrait pas parler du tout. *Correction*, `z` : « J'ai vendu les peaux. C'est écrit. Laisse-moi tranquille. » (Prévoir une variante par lettre en −1, comme pour m2.)

**33. 45-pnj.json, Vera, réplique `m5` (−7 à −5) : « Le voïévode m'appelle starosta » et « il n'y a jamais eu de plainte » sont faux en −5 et en −6.** *Correction* : « Le voïévode est à Kobor. Le tribut est en règle. Moi, je compte les jours, et je ne compte plus les mensonges. »

**34. 45-pnj.json, Oustina `m2`, Ilya `p2`, Gleb `p5` : trois répliques contredisent leur palier.**
- Oustina, `m2` (−4 à −2) : en −4, elle a déjà eu sa réponse. Écrire : « Le séchoir tourne. Je ne demande plus rien à personne. Pas encore. »
- Ilya, `p2` (+2 à +4) : en +4, son carnet est déjà lu et sa barge scellée. Écrire : « Mon carnet a parlé, ou parlera. Dans les deux cas, je paie. Je sais compter : je n'aime pas ce calcul. »
- Gleb, `p5` : il est absent de +5 à +7. Il faut le rendre muet, ou faire porter la réplique par un garde.

**35. 42-C, paliers −1 (nœud c) et −2 (nœud d) : faux embranchements.** Les deux réponses mènent au même nœud, et seule la trace change. *Correction* : en −1/c, « Dire : Bogdan a avoué » mène à e ; « Ne rien dire » mène à un nœud avec Oustina qui te suit hors du cercle : « Tu sais quelque chose. » En −2/d, « Je ne peux rien promettre » mène à f (Matveï).

**36. 43-D, paliers −5 à −7 : aucune réplique ne nomme son locuteur et il n'y a pas de guillemets, contrairement aux trois autres auteurs.** Sur une télé, on ne sait pas qui parle. *Correction* : préfixer « Gleb : « … » », « Ilya : « … » », etc., comme en 40-A.

**37. 43-D palier −7, nœud c, et 41-B palier 7, nœud c : un seul bouton pour deux options annoncées.** Matveï propose « Jure… ou bien ouvre », Bogdan demande un oui ou un non, mais il n'y a qu'un bouton. *Correction*, ajouter à la fin du txt : « (Pour jurer, quitte Matveï : la glace garde tout.) », et l'équivalent pour Bogdan.

**38. 43-D palier −7, nœud a : le lieu est la Pierre d'éveil, mais le texte décrit les traces devant la maison de Bogdan.** *Correction* : « Devant la Pierre d'éveil, les traces de Bogdan, laissées le jour de son départ aux mines, sont toujours nettes. »

**39. 46-livre.json, pages 2 et 4 : le livre doit raconter « clairement » le canon, et il reste trop allusif.** Il ne dit jamais que Vera a échangé les peaux contre le grain. Le reçu y « traîne sur le chemin du camp », alors qu'en 0/c il est devant le Coffre. *Correction* :
- page 2 : « Je crois que Vera a échangé le tribut contre le grain d'Ilya. »
- page 4 : « …un reçu de grain, signé de Vera, posé devant le Coffre, bien en vue. Je ne l'ai pas ramassé. Je sais qui l'a posé. »
- auteur : préciser « un arpenteur du trésor, venu avec Gleb », pour que le joueur situe ce troisième homme.

**40. 40-A palier 0, nœud e : « cette nuit-là » ; quelle nuit ?** La vente date de l'automne, et le joueur n'a aucun repère. *Correction* (avec 4) : « La nuit où le Coffre a été vidé, il est sorti tard… »
