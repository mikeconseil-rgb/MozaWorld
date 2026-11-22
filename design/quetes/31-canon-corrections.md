# Corrections du canon après la relecture 1 (critique 64/100 + historien) — elles PRIMENT sur 30-canon-et-format.md

1. Bogdan a PORTÉ les peaux du Coffre au traîneau d'Ilya, sur l'ordre de Vera, sans toucher une pièce. Il s'accuse de les avoir « vendues ».
   Oustina soupçonne qu'il ment pour quelqu'un, sans savoir pour qui ni pourquoi (jusqu'à ce qu'une quête le lui apprenne).
2. « Aux mines » : Bogdan est d'abord gardé au fort du voïévode, enchaîné, en attendant le convoi de forçats du printemps. On peut donc le faire revenir du fort dans le même hiver ; s'il part avec le convoi, il est perdu.
3. Le vol de Gleb = la DOUBLE DÎME : le trésor prend une peau sur dix ; Gleb la prend deux fois, une pour le trésor, une pour lui. Preuve : des peaux marquées de l'estampille du trésor (déjà comptées) retrouvées dans des sacs sans sceau, revendues à Ilya.
4. La plainte de Vera : une supplique au tsar portant la marque de chaque famille (Vera ne sait pas écrire, Ilya l'a écrite pour elle), contre le voïévode Borislav et contre Gleb. Elle doit être PRÉSENTÉE au joueur dès le palier 0 et dans le premier nœud des quêtes 1 et −1. Le final de 0 dit clairement que c'est Gleb qui a posé le reçu.
5. Zverevo : le hameau voisin, nommé ainsi partout. Mécanisme : Gleb écrit que les peaux ont été pillées sur la route, sur le tronçon de Zverevo ; la coutume fait rembourser le hameau du tronçon : 400 peaux, quarante par hiver pendant dix hivers. Même chiffre partout.
6. Semion, l'inspecteur d'il y a quarante ans : il avait trouvé des peaux cachées et allait écrire au trésor — le même crime qu'aujourd'hui.
7. Borislav : le carnet d'Ilya contient aussi une page sur les peaux que lui revendent les hommes du voïévode ; lu devant le hameau, il fait tomber Gleb ET Borislav (côté Vérité). À +7, le pouvoir envoie un voïévode inconnu (« personne ne sait qui viendra »), le tsar n'a pas encore lu la plainte (elle n'arrivera qu'au printemps).
8. Ilya a payé 40 charges de traîneau de grain (pas 40 sacs).
9. Mots : « terres de chasse » (pas permis), « interrogatoire des témoins », Vera « met sa marque » (ne signe pas), « exiger des présents » (pas doubler le tribut).

## LE RETOUR (correction structurelle n°1 du critique)
Quand la zone REDESCEND vers 0 (le joueur s'est ravisé), la quête ne doit pas rejouer la scène déjà vécue.
Chaque quête de −6 à +6 reçoit donc "debutRetour": "<nœud>" : un point d'entrée quand on arrive depuis le palier plus éloigné de 0
(à −3 : quand on vient de −4 ; à +2 : quand on vient de +3). Ce nœud dit en 1-2 phrases ce qui a changé (ce que le choix de se raviser a défait),
puis pose une situation NOUVELLE qui mène (par 2 à 4 nœuds propres au retour, ou en rejoignant des nœuds existants qui restent vrais) au même final ou à un final
adapté. Si le final existant n'a plus de sens au retour, ajoute un second nœud final ("final":true) atteint seulement par le chemin du retour.
La quête 0 reçoit "debutRetour": {"-":"<nœud>","+":"<nœud>"} (retour depuis −1 : Bogdan revient du fort ; depuis +1 : Vera sort du Coffre).
Si les PNJ présents diffèrent au retour, ajoute "absentsRetour": [...] (ou, pour 0 : {"-":[...],"+":[...]}).
Les traces posées par les choix de « se raviser » existent déjà : sers-t'en dans txtTrace.
Le moteur accepte plusieurs nœuds finaux. Le test vérifie que TOUT nœud est atteignable depuis debut ou debutRetour.

## TOUR 3 : « debutSi » (correction n°1 et n°3 du critique 2)
Nouveau champ de quête : "debutSi": {"<trace>": "<nœud>"}. Le moteur regarde la trace posée par le DERNIER choix final réussi dans la zone
(celui qui vient de faire bouger le palier) ; si elle est dans debutSi, la quête commence à ce nœud, avant debutRetour et debut.
Usages :
1. Remonter après un retour (ex. carnet_maintenu → +4) : un nœud d'entrée qui tient compte de ce qui a été défait, au lieu de rejouer la scène d'origine.
2. Un même debutRetour qui sert à deux descentes (ex. 1/t1 après dime_maintenue ou dime_retiree) : une entrée par trace.
Le nœud d'entrée peut rejoindre ensuite les nœuds existants qui restent vrais. Toute entrée doit mener à un final.
La plainte de Vera : elle a été ÉCRITE (par Ilya, avec la marque de chaque famille) mais PAS envoyée ; elle partira avec le convoi du printemps, par la piste du nord ; d'ici là Vera la garde cousue dans son manteau.
