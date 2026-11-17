/* MozaWorld TV 2.2 : cartes écrites par les quatre conteurs (généré par cartes-2.2/outils/assembler.py, ne pas modifier à la main). */
const CARTES22={
"zones": {
"CIT": {
"m": {
"nom": "Neige de l'oubli",
"cout": 1,
"cible": 0,
"effet": "La garde de tous les ennemis tombe à 0, puis (1+L) dégâts à tous. S'il ne reste qu'un ennemi, il oublie son ordre : il hésite ce tour. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"briseGarde",
"tous"
],
[
"deg",
"tous",
[
1,
1
]
],
[
"si",
"seul",
[
[
"hesite",
"cible"
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "La neige recouvrit les créneaux comme l'enduit les icônes ; les gardes y perdirent leur consigne, et le héros une ligne."
},
"p": {
"nom": "Témoins aux créneaux",
"cout": 1,
"cible": 0,
"effet": "Jusqu'au prochain tour, chaque coup reçu par le héros renvoie (1+L) dégâts à l'attaquant. Le héros gagne (2+L) de garde. Reprenez en main la dernière carte de votre défausse.",
"ops": [
[
"riposte",
[
1,
1
]
],
[
"garde",
"heros",
[
2,
1
]
],
[
"recup"
]
],
"ambiance": "Sur chaque rondin, une écorce cousue tenait le compte des coups ; les Échos du rempart désignaient le débiteur du doigt."
},
"m7": {
"nom": "Le Visage raboté",
"cout": 2,
"cible": 0,
"effet": "Rituel d'effacement. Tous les ennemis hésitent ce tour, leur garde tombe à 0, ils perdent 2 d'attaque pour le combat et subissent 12 dégâts. Pose Abîme. Si Givre est posée (consommée) : les visages oubliés se fendent, tous les ennemis deviennent vulnérables 5. Prix : défaussez 1 carte ; la carte s'exile.",
"ops": [
[
"hesite",
"tous"
],
[
"briseGarde",
"tous"
],
[
"affaiblit",
"tous",
2
],
[
"deg",
"tous",
12
],
[
"pose",
"Abîme"
],
[
"reveil",
"Givre",
true,
[
[
"vulnerable",
"tous",
5
]
]
],
[
"prixDefausse",
1
],
[
"exil"
]
],
"ambiance": "Le kniaz fit raboter son propre visage pour ressembler à toutes ses icônes ; la ville cessa d'obéir à qui que ce fût."
},
"p7": {
"nom": "Le Tribunal des Bouleaux",
"cout": 2,
"cible": 0,
"effet": "Audience. Tous les ennemis deviennent vulnérables 4. Piochez 3 cartes, reprenez en main la dernière carte de la défausse, et la prochaine carte de zone jouée ce tour a son effet doublé. Pose Sceau. Si Sang est posée (consommée) : le frère noyé prononce la sentence, 15 dégâts à tous qui ignorent la garde. Prix : le héros, appelé à la barre, perd 3 PV.",
"ops": [
[
"vulnerable",
"tous",
4
],
[
"pioche",
3
],
[
"recup"
],
[
"echo"
],
[
"pose",
"Sceau"
],
[
"reveil",
"Sang",
true,
[
[
"deg",
"tous",
15
],
[
"ignoreGarde"
]
]
],
[
"prixPV",
3
]
],
"ambiance": "Le juge avait encore les cheveux mouillés ; il lut la chronique dans l'ordre, et le greffier n'omit aucun nom."
},
"m1": {
"nom": "Écorces à la boue",
"cout": 1,
"cible": 1,
"effet": "La garde de la cible tombe à 0, puis 7 dégâts.",
"ops": [
[
"briseGarde",
"cible"
],
[
"deg",
"cible",
7
]
],
"ambiance": "Dettes, promesses, insultes au voisin : tout finissait dans la boue, et la boue ne rendait rien."
},
"m2": {
"nom": "Le Tesson d'Ouliana",
"cout": 0,
"cible": 0,
"effet": "Défaussez 1 carte au hasard, puis piochez 2 cartes.",
"ops": [
[
"prixDefausse",
1
],
[
"pioche",
2
]
],
"ambiance": "Elle grattait jusqu'au blanc de l'aubier, pour trois mesures de seigle la saison."
},
"m3": {
"nom": "Généalogie neuve",
"cout": 1,
"cible": 1,
"effet": "La cible perd 2 d'attaque pour le combat, hésite ce tour et subit 7 dégâts. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"affaiblit",
"cible",
2
],
[
"hesite",
"cible"
],
[
"deg",
"cible",
7
],
[
"prixDefausse",
1
]
],
"ambiance": "Sur l'écorce raclée, les scribes recopièrent une lignée sans frère, d'une encre encore fraîche."
},
"m4": {
"nom": "Le Vernis des Sèvelins",
"cout": 2,
"cible": 1,
"effet": "La garde de la cible tombe à 0, puis 16 dégâts ; le héros se soigne de la moitié des dégâts infligés.",
"ops": [
[
"briseGarde",
"cible"
],
[
"deg",
"cible",
16
],
[
"volVie"
]
],
"ambiance": "On saigna les troncs qui refusaient leur ambre, et le vernis brilla sur les icônes neuves."
},
"m5": {
"nom": "Icône repeinte",
"cout": 1,
"cible": 1,
"effet": "Tous les ennemis hésitent ce tour et leur garde tombe à 0 ; 7 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"hesite",
"tous"
],
[
"briseGarde",
"tous"
],
[
"deg",
"cible",
7
],
[
"prixDefausse",
1
]
],
"ambiance": "Sous le visage du kniaz, le saint d'origine attendait, raboté mais pas tout à fait parti."
},
"m6": {
"nom": "Neige de l'oubli",
"cout": 1,
"cible": 0,
"effet": "La garde de tous les ennemis tombe à 0, puis 7 dégâts à tous. S'il ne reste qu'un ennemi, il hésite ce tour. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"briseGarde",
"tous"
],
[
"deg",
"tous",
7
],
[
"si",
"seul",
[
[
"hesite",
"cible"
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "La neige recouvrit les créneaux comme l'enduit les icônes ; les gardes y perdirent leur consigne."
},
"p1": {
"nom": "Lettre ramassée",
"cout": 0,
"cible": 0,
"effet": "Reprenez en main la dernière carte de votre défausse.",
"ops": [
[
"recup"
]
],
"ambiance": "Une écorce affleurait dans la boue de la cour ; quelqu'un la ramassa au lieu de la racler."
},
"p2": {
"nom": "Écorce cousue au mur",
"cout": 1,
"cible": 0,
"effet": "Le héros gagne 10 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 3 dégâts. Prix : le héros perd 2 PV.",
"ops": [
[
"garde",
"heros",
10
],
[
"riposte",
3
],
[
"prixPV",
2
]
],
"ambiance": "On cousit les lettres aux rondins comme des écailles, au fil de tendon, et l'aiguille piqua les doigts."
},
"p3": {
"nom": "Le Témoin venu de loin",
"cout": 1,
"cible": 1,
"effet": "La cible devient vulnérable 2 ; jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts ; reprenez la dernière carte de la défausse. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"vulnerable",
"cible",
2
],
[
"riposte",
4
],
[
"recup"
],
[
"prixDefausse",
1
]
],
"ambiance": "Il avait marché trois hivers pour réclamer une dette, l'écorce du contrat cousue dans sa doublure."
},
"p4": {
"nom": "L'Ambre rouvert",
"cout": 1,
"cible": 0,
"effet": "Piochez 3 cartes, puis défaussez 1 carte au hasard. Le héros gagne 8 de garde.",
"ops": [
[
"pioche",
3
],
[
"prixDefausse",
1
],
[
"garde",
"heros",
8
]
],
"ambiance": "Les Sèvelins ouvrirent leur ambre : dedans, les lettres qu'ils avaient avalées pour les sauver."
},
"p5": {
"nom": "La Vieille Conteuse",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis deviennent vulnérables 3. Piochez 2 cartes, reprenez la dernière carte de la défausse, et la prochaine carte de zone jouée ce tour a son effet doublé. Prix : le héros perd 4 PV.",
"ops": [
[
"vulnerable",
"tous",
3
],
[
"pioche",
2
],
[
"recup"
],
[
"echo"
],
[
"prixPV",
4
]
],
"ambiance": "Elle récita la chronique de mémoire, en mesure, et chaque nom désigna quelqu'un dans la salle."
},
"p6": {
"nom": "Témoins aux créneaux",
"cout": 1,
"cible": 0,
"effet": "Jusqu'au prochain tour, chaque coup reçu par le héros renvoie 7 dégâts. Le héros gagne 8 de garde. Reprenez la dernière carte de la défausse.",
"ops": [
[
"riposte",
7
],
[
"garde",
"heros",
8
],
[
"recup"
]
],
"ambiance": "Les Échos du rempart désignaient chaque assaillant du doigt, et l'écorce cousue tenait le compte."
}
},
"DON045": {
"m": {
"nom": "Peau teinte",
"cout": 2,
"cible": 1,
"effet": "Un Chien teint en zibeline rejoint le combat : (6+4L) PV, frappe (3+L) à chaque tour. La cible, trompée par le leurre, hésite ce tour.",
"ops": [
[
"invoque",
"Chien teint en zibeline",
[
6,
4
],
[
3,
1
]
],
[
"hesite",
"cible"
]
],
"ambiance": "Passé à la suie de lampe, le chien du hameau valait une zibeline au registre, tant qu'il ne pleuvait pas."
},
"p": {
"nom": "Le Pouce mouillé",
"cout": 2,
"cible": 1,
"effet": "La cible devient vulnérable L, puis subit (10+L) dégâts qui ignorent la garde. Prix : le héros perd 2 PV.",
"ops": [
[
"vulnerable",
"cible",
[
0,
1
]
],
[
"deg",
"cible",
[
10,
1
]
],
[
"ignoreGarde"
],
[
"prixPV",
2
]
],
"ambiance": "L'inspecteur frotta la peau, et la teinture lui noircit le pouce ; la vérité tache d'abord celui qui la cherche."
},
"m7": {
"nom": "Le Coffre scellé",
"cout": 2,
"cible": 1,
"effet": "On referme la loge. L'Inspecteur gelé rejoint le combat : 36 PV, ne frappe pas, encaisse. Tous les ennemis perdent 2 d'attaque pour le combat, la cible hésite ce tour, piochez 2 cartes et gagnez 1 mana Glace. Pose Givre. Si Racine est posée (consommée) : la meute sort du Coffre, deux Chiens de la meute teinte rejoignent le combat (12 PV, frappent 6 chacun).",
"ops": [
[
"invoque",
"L'Inspecteur gelé",
36,
0
],
[
"affaiblit",
"tous",
2
],
[
"hesite",
"cible"
],
[
"pioche",
2
],
[
"mana",
"Glace",
1
],
[
"pose",
"Givre"
],
[
"reveil",
"Racine",
true,
[
[
"invoque",
"Chien de la meute teinte",
12,
6
],
[
"invoque",
"Chien de la meute teinte",
12,
6
]
]
]
],
"ambiance": "Le registre de l'An 23 tomba juste parce que l'inspecteur ne sortit jamais du Coffre ; il garde la porte depuis."
},
"p7": {
"nom": "Le Compte juste",
"cout": 2,
"cible": 0,
"effet": "Recensement. Tous les ennemis deviennent vulnérables 2, puis 5 coups de 6 dégâts au hasard qui ignorent la garde ; s'il ne reste qu'un ennemi, il subit encore 10 dégâts. Pose Sang. Si Abîme est posée (consommée) : les années manquantes ressortent du registre, 4 coups de 6 dégâts au hasard, reprenez la dernière carte de la défausse et piochez 1 carte. Prix : le héros perd 4 PV.",
"ops": [
[
"vulnerable",
"tous",
2
],
[
"deg",
"hasard",
6,
5
],
[
"ignoreGarde"
],
[
"si",
"seul",
[
[
"deg",
"cible",
10
]
]
],
[
"pose",
"Sang"
],
[
"reveil",
"Abîme",
true,
[
[
"deg",
"hasard",
6,
4
],
[
"recup"
],
[
"pioche",
1
]
]
],
[
"prixPV",
4
]
],
"ambiance": "On recompta peau par peau, puis chien par chien, puis trappeur par trappeur ; le compte fut juste, et payé en sang."
},
"m1": {
"nom": "Promesse au trésor",
"cout": 1,
"cible": 1,
"effet": "La cible hésite ce tour. Piochez 1 carte ; le héros gagne 2 de garde.",
"ops": [
[
"hesite",
"cible"
],
[
"pioche",
1
],
[
"garde",
"heros",
2
]
],
"ambiance": "Quatre cents zibelines par hiver, promit le voïévode ; le trésor nota le chiffre sans lever les yeux."
},
"m2": {
"nom": "Suie de lampe",
"cout": 1,
"cible": 1,
"effet": "La cible perd 2 d'attaque pour le combat ; si elle hésite, elle en perd 2 de plus. Piochez 1 carte. Prix : le héros perd 1 PV.",
"ops": [
[
"affaiblit",
"cible",
2
],
[
"si",
"hesite",
[
[
"affaiblit",
"cible",
2
]
]
],
[
"pioche",
1
],
[
"prixPV",
1
]
],
"ambiance": "On racla les lampes du hameau pour noircir les peaux ; on veilla ensuite dans le noir."
},
"m3": {
"nom": "Peau teinte",
"cout": 2,
"cible": 1,
"effet": "Un Chien teint en zibeline rejoint le combat : 18 PV, frappe 6 à chaque tour. La cible, trompée par le leurre, hésite ce tour.",
"ops": [
[
"invoque",
"Chien teint en zibeline",
18,
6
],
[
"hesite",
"cible"
]
],
"ambiance": "Passé à la suie, le chien du hameau valait une zibeline au registre, tant qu'il ne pleuvait pas."
},
"m4": {
"nom": "Les Années manquantes",
"cout": 1,
"cible": 1,
"effet": "Défaussez 2 cartes au hasard, piochez 3 cartes et gagnez 2 mana Glace. La cible hésite ce tour.",
"ops": [
[
"prixDefausse",
2
],
[
"pioche",
3
],
[
"mana",
"Glace",
2
],
[
"hesite",
"cible"
]
],
"ambiance": "Six feuillets arrachés au registre ; le relieur fut payé en peaux, noires évidemment."
},
"m5": {
"nom": "Trappeurs en peaux",
"cout": 2,
"cible": 0,
"effet": "Un Trappeur déguisé rejoint le combat : 20 PV, frappe 8. Tous les ennemis perdent 1 d'attaque pour le combat ; si une bête est en jeu, ils hésitent aussi ce tour. Prix : votre bête la plus faible perd 4 PV.",
"ops": [
[
"invoque",
"Trappeur déguisé",
20,
8
],
[
"affaiblit",
"tous",
1
],
[
"si",
"bete",
[
[
"hesite",
"tous"
]
]
],
[
"prixBete",
4
]
],
"ambiance": "Quand les chiens manquèrent, les trappeurs enfilèrent les peaux eux-mêmes et marchèrent à quatre pattes devant l'inspecteur."
},
"m6": {
"nom": "Quatre cents, toutes noires",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis hésitent ce tour. Un Chien teint rejoint le combat : 22 PV, frappe 7. Si une bête était déjà en jeu, piochez 2 cartes. Gagnez 1 mana Glace. Prix : le héros perd 3 PV.",
"ops": [
[
"hesite",
"tous"
],
[
"si",
"bete",
[
[
"pioche",
2
]
]
],
[
"invoque",
"Chien teint",
22,
7
],
[
"mana",
"Glace",
1
],
[
"prixPV",
3
]
],
"ambiance": "L'An 16, le compte tomba juste et d'un noir parfaitement égal ; personne n'osa en frotter une."
},
"p1": {
"nom": "Le Doute de l'inspecteur",
"cout": 1,
"cible": 1,
"effet": "La cible devient vulnérable 2, puis subit 4 dégâts.",
"ops": [
[
"vulnerable",
"cible",
2
],
[
"deg",
"cible",
4
]
],
"ambiance": "L'inspecteur relut trois fois la colonne des zibelines ; elle était trop régulière pour une forêt."
},
"p2": {
"nom": "Le Pouce mouillé",
"cout": 1,
"cible": 1,
"effet": "La cible devient vulnérable 1, puis subit 9 dégâts qui ignorent la garde. Prix : le héros perd 2 PV.",
"ops": [
[
"vulnerable",
"cible",
1
],
[
"deg",
"cible",
9
],
[
"ignoreGarde"
],
[
"prixPV",
2
]
],
"ambiance": "Il frotta la peau, et la teinture lui noircit le pouce : la vérité tache d'abord celui qui cherche."
},
"p3": {
"nom": "La Teinture qui coule",
"cout": 1,
"cible": 1,
"effet": "La garde de tous les ennemis tombe à 0 et ils deviennent vulnérables 1 ; 4 dégâts à la cible. Prix : le héros perd 2 PV.",
"ops": [
[
"briseGarde",
"tous"
],
[
"vulnerable",
"tous",
1
],
[
"deg",
"cible",
4
],
[
"prixPV",
2
]
],
"ambiance": "Le dégel fit couler la suie des quatre mille peaux en une rigole noire jusqu'à la porte."
},
"p4": {
"nom": "Les Chiens recomptés",
"cout": 2,
"cible": 0,
"effet": "4 coups de 5 dégâts au hasard, qui ignorent la garde. S'il ne reste qu'un ennemi, il subit encore 10 dégâts.",
"ops": [
[
"deg",
"hasard",
5,
4
],
[
"ignoreGarde"
],
[
"si",
"seul",
[
[
"deg",
"cible",
10
]
]
]
],
"ambiance": "Au hameau, on compta les niches vides : dix-sept, de l'An 17, comme par hasard."
},
"p5": {
"nom": "Le Coffre ouvert",
"cout": 2,
"cible": 1,
"effet": "La cible devient vulnérable 3, puis subit 20 dégâts qui ignorent la garde. Piochez 1 carte. Prix : le héros perd 4 PV.",
"ops": [
[
"vulnerable",
"cible",
3
],
[
"deg",
"cible",
20
],
[
"ignoreGarde"
],
[
"pioche",
1
],
[
"prixPV",
4
]
],
"ambiance": "Sous les mélèzes, la loge exhalait l'odeur du chien mouillé ; quatre mille fois la même."
},
"p6": {
"nom": "Le Registre de l'An 23",
"cout": 2,
"cible": 1,
"effet": "Tous les ennemis deviennent vulnérables 2 ; 16 dégâts à la cible qui ignorent la garde ; reprenez la dernière carte de la défausse. S'il ne reste qu'un ennemi, il devient vulnérable 2 de plus. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"vulnerable",
"tous",
2
],
[
"deg",
"cible",
16
],
[
"ignoreGarde"
],
[
"recup"
],
[
"si",
"seul",
[
[
"vulnerable",
"cible",
2
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "Le dernier registre tombe juste, d'une écriture sans ratures ; on ne sait pas qui le tint."
}
},
"ASS006": {
"m": {
"nom": "Fève lestée",
"cout": 1,
"cible": 1,
"effet": "La cible brûle : (2+L) dégâts au début de chacun de ses 2 prochains tours. Le vote est truqué : tous les ennemis perdent 1 d'attaque pour le combat. Prix : la corruption coûte 2 PV au héros.",
"ops": [
[
"brulure",
"cible",
[
2,
1
],
2
],
[
"affaiblit",
"tous",
1
],
[
"prixPV",
2
]
],
"ambiance": "La fève de bruyère, creusée et remplie de plomb, retombait toujours dans le cercle des sauniers ; le conseiller qui la jeta toussa longtemps."
},
"p": {
"nom": "Vote au vent",
"cout": 1,
"cible": 0,
"effet": "Défaussez 1 carte au hasard (les fèves douteuses), puis piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Le héros se soigne de (1+2L).",
"ops": [
[
"prixDefausse",
1
],
[
"pioche",
1
],
[
"echo"
],
[
"soin",
"heros",
[
1,
2
]
]
],
"ambiance": "Sans paravent, le vent rendit des verdicts que personne n'avait payés ; on en jeta quelques-uns, par prudence, avant de compter."
},
"m7": {
"nom": "La Lande brûlée trois fois",
"cout": 2,
"cible": 0,
"effet": "Le feu efface les bornes. Tous les ennemis brûlent : 6 dégâts au début de chacun de leurs 3 prochains tours, et leur garde tombe à 0. La prochaine carte de zone jouée ce tour a son effet doublé. Pose Braise. Si Sceau est posée (consommée) : la loi est achetée, +1 de capacité ce tour, piochez 3 cartes, gagnez encore 2 mana Vent et tous les ennemis hésitent ce tour. Prix : le héros perd 3 PV.",
"ops": [
[
"brulure",
"tous",
6,
3
],
[
"briseGarde",
"tous"
],
[
"echo"
],
[
"pose",
"Braise"
],
[
"reveil",
"Sceau",
true,
[
[
"boost"
],
[
"pioche",
3
],
[
"mana",
"Vent",
2
],
[
"hesite",
"tous"
]
]
],
[
"prixPV",
3
]
],
"ambiance": "Chaque incendie emporta une rangée de bornes, et chaque nouveau cadastre fut signé au banc, par les mêmes mains."
},
"p7": {
"nom": "Le Vent sans paravent",
"cout": 2,
"cible": 0,
"effet": "Les bergers reviennent au banc. Les Bergers du banc rejoignent le combat : 24 PV, frappent 5. Tous vos alliés se soignent de 8, le héros gagne 8 de garde, piochez 2 cartes. Pose Racine. Si Braise est posée (consommée) : le brûlis réglé, la garde de tous les ennemis tombe à 0 et ils subissent 12 dégâts.",
"ops": [
[
"invoque",
"Bergers du banc",
24,
5
],
[
"soin",
"allies",
8
],
[
"garde",
"heros",
8
],
[
"pioche",
2
],
[
"pose",
"Racine"
],
[
"reveil",
"Braise",
true,
[
[
"briseGarde",
"tous"
],
[
"deg",
"tous",
12
]
]
]
],
"ambiance": "On arracha les trous des paravents au burin ; les bergers rallumèrent la lande eux-mêmes, par parcelles, et l'appelèrent un vote."
},
"m1": {
"nom": "Fève creusée",
"cout": 0,
"cible": 1,
"effet": "La cible brûle : 2 dégâts au début de chacun de ses 2 prochains tours.",
"ops": [
[
"brulure",
"cible",
2,
2
]
],
"ambiance": "Une fève de bruyère évidée au poinçon, le premier hiver, par un conseiller qui jurait plaisanter."
},
"m2": {
"nom": "Plomb dans la fève",
"cout": 1,
"cible": 1,
"effet": "La cible brûle : 4 dégâts au début de chacun de ses 2 prochains tours, et perd 1 d'attaque pour le combat. Gagnez 1 mana Vent. Prix : le héros perd 2 PV.",
"ops": [
[
"brulure",
"cible",
4,
2
],
[
"affaiblit",
"cible",
1
],
[
"mana",
"Vent",
1
],
[
"prixPV",
2
]
],
"ambiance": "Le plomb venait des sceaux fondus de l'ancien conseil ; il pesait juste ce qu'il fallait."
},
"m3": {
"nom": "Fève lestée",
"cout": 1,
"cible": 1,
"effet": "La cible brûle : 5 dégâts au début de chacun de ses 2 prochains tours. Tous les ennemis perdent 1 d'attaque pour le combat. Prix : le héros perd 2 PV.",
"ops": [
[
"brulure",
"cible",
5,
2
],
[
"affaiblit",
"tous",
1
],
[
"prixPV",
2
]
],
"ambiance": "La fève lestée retombait toujours dans le cercle des sauniers ; le conseiller qui la jeta toussa longtemps."
},
"m4": {
"nom": "Le Paravent goudronné",
"cout": 1,
"cible": 1,
"effet": "La cible hésite ce tour ; si elle hésite, elle brûle aussi de 3 au début de ses 2 prochains tours. Le héros gagne 8 de garde et 1 mana Vent.",
"ops": [
[
"hesite",
"cible"
],
[
"si",
"hesite",
[
[
"brulure",
"cible",
3,
2
]
]
],
[
"garde",
"heros",
8
],
[
"mana",
"Vent",
1
]
],
"ambiance": "Derrière la toile goudronnée, le vent tombait, et les fèves aussi, exactement où on les attendait."
},
"m5": {
"nom": "Le Banc vendu aux sauniers",
"cout": 2,
"cible": 1,
"effet": "Gagnez 3 mana Vent ; la prochaine carte de zone jouée ce tour a son effet doublé. Tous les ennemis perdent 2 d'attaque pour le combat ; la cible brûle de 4 au début de ses 2 prochains tours. Prix : le héros perd 4 PV.",
"ops": [
[
"mana",
"Vent",
3
],
[
"echo"
],
[
"affaiblit",
"tous",
2
],
[
"brulure",
"cible",
4,
2
],
[
"prixPV",
4
]
],
"ambiance": "La seconde inscription fut gravée plus bas, d'une main plus fine : banc cédé, avec le vent."
},
"m6": {
"nom": "Premier incendie",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis brûlent : 4 dégâts au début de chacun de leurs 3 prochains tours, et leur garde tombe à 0. Piochez 1 carte. Prix : le héros perd 2 PV.",
"ops": [
[
"brulure",
"tous",
4,
3
],
[
"briseGarde",
"tous"
],
[
"pioche",
1
],
[
"prixPV",
2
]
],
"ambiance": "La bruyère brûla une première fois, par un ciel sans orage ; les bornes du commun partirent avec."
},
"p1": {
"nom": "Fève jetée en l'air",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte.",
"ops": [
[
"pioche",
1
]
],
"ambiance": "Une poignée de fèves lancée au-dessus du banc ; le vent seul décidait où elles retombaient."
},
"p2": {
"nom": "Le Cercle de pierre",
"cout": 1,
"cible": 0,
"effet": "Défaussez 1 carte au hasard. Piochez 1 carte ; le héros gagne 8 de garde et se soigne de 5.",
"ops": [
[
"prixDefausse",
1
],
[
"pioche",
1
],
[
"garde",
"heros",
8
],
[
"soin",
"heros",
5
]
],
"ambiance": "On ne comptait que les fèves tombées dans le cercle ; les autres, on les laissait à la lande."
},
"p3": {
"nom": "Vote au vent",
"cout": 1,
"cible": 0,
"effet": "Défaussez 1 carte au hasard, puis piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Le héros se soigne de 7.",
"ops": [
[
"prixDefausse",
1
],
[
"pioche",
1
],
[
"echo"
],
[
"soin",
"heros",
7
]
],
"ambiance": "Sans paravent, le vent rendit des verdicts que personne n'avait payés ; on en jeta quelques-uns, par prudence."
},
"p4": {
"nom": "Paravents arrachés",
"cout": 1,
"cible": 0,
"effet": "La garde de tous les ennemis tombe à 0. Piochez 2 cartes ; le héros se soigne de 3.",
"ops": [
[
"briseGarde",
"tous"
],
[
"pioche",
2
],
[
"soin",
"heros",
3
]
],
"ambiance": "On arracha les montants au burin ; les trous restèrent dans la pierre du banc, pour mémoire."
},
"p5": {
"nom": "Retour des bergers",
"cout": 2,
"cible": 0,
"effet": "Une Bergère de la lande rejoint le combat : 20 PV, frappe 5. Tous vos alliés se soignent de 6 ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"invoque",
"Bergère de la lande",
20,
5
],
[
"soin",
"allies",
6
],
[
"garde",
"heros",
8
],
[
"prixDefausse",
1
]
],
"ambiance": "Les bergers revinrent s'asseoir au banc avec leurs bêtes, ce que l'ancienne inscription n'interdisait pas."
},
"p6": {
"nom": "Brûlis réglé",
"cout": 2,
"cible": 0,
"effet": "8 dégâts à tous les ennemis. Si une bête est en jeu, tous vos alliés se soignent de 8. Piochez 2 cartes ; la prochaine carte de zone jouée ce tour a son effet doublé. Prix : le héros perd 2 PV.",
"ops": [
[
"deg",
"tous",
8
],
[
"si",
"bete",
[
[
"soin",
"allies",
8
]
]
],
[
"pioche",
2
],
[
"echo"
],
[
"prixPV",
2
]
],
"ambiance": "Cette fois, le feu fut mis par parcelles, au vu de tous, et la bruyère repoussa pour les moutons."
}
},
"ANT": {
"m": {
"nom": "Larve-de-Cuve",
"cout": 2,
"cible": 1,
"effet": "Une Larve-de-Cuve affamée rejoint le combat ((2+3L) PV, frappe (2+2L) à chaque tour). La nuit tombe sur la cible : elle hésite ce tour et garde une tache pourpre (+1 dégât à chaque coup reçu). La larve a faim : le héros perd 2 PV.",
"ops": [
[
"invoque",
"Larve-de-Cuve",
[
2,
3
],
[
2,
2
]
],
[
"hesite",
"cible"
],
[
"vulnerable",
"cible",
1
],
[
"prixPV",
2
]
],
"ambiance": "Sous la bâche goudronnée, la larve a mangé la teinture ; maintenant elle vous mange les doigts."
},
"p": {
"nom": "Essaim-Fixeur",
"cout": 2,
"cible": 0,
"effet": "Une Vespérine adulte rejoint le combat ((4+4L) PV, frappe (1+L) à chaque tour) ; sa chaleur fixe la pourpre sur l'ennemi : tous les ennemis brûlent de 2 pendant 3 tours. Les larves réclament leur nasse : défaussez 1 carte au hasard.",
"ops": [
[
"invoque",
"Vespérine adulte",
[
4,
4
],
[
1,
1
]
],
[
"brulure",
"tous",
2,
3
],
[
"prixDefausse",
1
]
],
"ambiance": "Chaque Vespérine qui passe au ras des toiles fixe la pourpre ; il faut juste payer sa nasse."
},
"m7": {
"nom": "Nuit close",
"cout": 3,
"cible": 0,
"effet": "Toutes les lanternes s'éteignent. Deux Ballots luisants rejoignent le combat (6 PV, frappent 5 chacun) ; tous les ennemis hésitent ce tour et sont tachés de pourpre (+3 dégâts à chaque coup reçu). Piochez 1 carte. Le héros perd 5 PV ; la carte s'exile. Pose Abîme. Si Sang est posée (consommée) : la Reine Vespérine, affamée pour de bon, se retourne contre l'ennemi et rejoint le combat (30 PV, frappe 9), et la cible, éblouie, hésite ce tour.",
"ops": [
[
"invoque",
"Ballot luisant",
6,
5
],
[
"invoque",
"Ballot luisant",
6,
5
],
[
"hesite",
"tous"
],
[
"vulnerable",
"tous",
3
],
[
"pioche",
1
],
[
"prixPV",
5
],
[
"exil"
],
[
"pose",
"Abîme"
],
[
"reveil",
"Sang",
true,
[
[
"invoque",
"Reine Vespérine affamée",
30,
9
],
[
"hesite",
"cible"
]
]
]
],
"ambiance": "Anthémios a éteint le chenal ; dans le noir, seuls ses ballots volés luisent, et la reine attend son heure."
},
"p7": {
"nom": "L'Aube tenue",
"cout": 3,
"cible": 0,
"effet": "La reine tient l'aurore et trois couleurs passent sur le champ : la pourpre brûle tous les ennemis de 4 pendant 3 tours ; le safran soigne tous vos alliés de 10 (16 si une bête est en jeu) ; l'indigo retire 1 d'attaque à tous les ennemis. Les nasses doublent : défaussez 2 cartes au hasard. Pose Racine. Si Braise est posée (consommée) : la pourpre vire au violet : 10 dégâts à tous et +2 dégâts à chaque coup qu'ils recevront.",
"ops": [
[
"brulure",
"tous",
4,
3
],
[
"soin",
"allies",
10
],
[
"affaiblit",
"tous",
1
],
[
"si",
"bete",
[
[
"soin",
"allies",
6
]
]
],
[
"prixDefausse",
2
],
[
"pose",
"Racine"
],
[
"reveil",
"Braise",
true,
[
[
"deg",
"tous",
10
],
[
"vulnerable",
"tous",
2
]
]
]
],
"ambiance": "Pourpre, safran, indigo passent sur l'eau : la reine tient l'aube, et la mangrove entière devient séchoir."
},
"m1": {
"nom": "Chair vendue",
"cout": 1,
"cible": 1,
"effet": "Une Larve affamée rejoint le combat (6 PV, frappe 3) ; la cible prend une tache pourpre (+1 dégât à chaque coup reçu). Le héros perd 1 PV.",
"ops": [
[
"invoque",
"Larve affamée",
6,
3
],
[
"vulnerable",
"cible",
1
],
[
"prixPV",
1
]
],
"ambiance": "L'exarque a vendu la chair aux saleurs ; la première larve sort de la ruche, et elle a faim."
},
"m2": {
"nom": "Lanterne sourde",
"cout": 1,
"cible": 1,
"effet": "On ferme les volets de cuir : la cible hésite ce tour et prend une tache pourpre (+1 dégât à chaque coup reçu). Piochez 1 carte.",
"ops": [
[
"hesite",
"cible"
],
[
"vulnerable",
"cible",
1
],
[
"pioche",
1
]
],
"ambiance": "Volets de cuir rabattus : le teinturier clandestin travaille, et l'ennemi ne voit plus rien."
},
"m3": {
"nom": "Cuve recousue",
"cout": 1,
"cible": 1,
"effet": "Une Larve de cuve s'installe dans les planches flottées (10 PV, frappe 5). Si la cible hésite, elle prend +2 dégâts à chaque coup reçu. Le héros perd 1 PV.",
"ops": [
[
"invoque",
"Larve de cuve",
10,
5
],
[
"si",
"hesite",
[
[
"vulnerable",
"cible",
2
]
]
],
[
"prixPV",
1
]
],
"ambiance": "Une cuve abandonnée, trois planches clouées dessus, et la larve y a mangé toute la teinture."
},
"m4": {
"nom": "Éclats brefs",
"cout": 2,
"cible": 0,
"effet": "Les adultes ne s'allument plus qu'une seconde : tous les ennemis hésitent ce tour et prennent +2 dégâts à chaque coup reçu. Si une bête est en jeu, piochez 2 cartes.",
"ops": [
[
"hesite",
"tous"
],
[
"vulnerable",
"tous",
2
],
[
"si",
"bete",
[
[
"pioche",
2
]
]
]
],
"ambiance": "Un éclat, puis le noir : les passeurs lisent la lueur, l'ennemi n'y voit qu'une menace."
},
"m5": {
"nom": "Larve-de-Cuve",
"cout": 2,
"cible": 1,
"effet": "La Larve-de-Cuve rejoint le combat (20 PV, frappe 6) ; la cible hésite ce tour et prend +3 dégâts à chaque coup reçu. Elle a faim : le héros perd 3 PV.",
"ops": [
[
"invoque",
"Larve-de-Cuve",
20,
6
],
[
"hesite",
"cible"
],
[
"vulnerable",
"cible",
3
],
[
"prixPV",
3
]
],
"ambiance": "Sous la bâche goudronnée, la larve a mangé la teinture ; maintenant elle vous mange les doigts."
},
"m6": {
"nom": "Chenal de contrebande",
"cout": 2,
"cible": 0,
"effet": "Une barque plate glisse sous les racines, chargée de larves (18 PV, frappe 6) ; tous les ennemis prennent +3 dégâts à chaque coup reçu. Le héros perd 4 PV.",
"ops": [
[
"invoque",
"Barque de larves",
18,
6
],
[
"vulnerable",
"tous",
3
],
[
"prixPV",
4
]
],
"ambiance": "Lambeaux d'étoffe luisants aux racines : le chenal est balisé, et les larves ont faim pour tout le monde."
},
"p1": {
"nom": "Panier de murex",
"cout": 1,
"cible": 1,
"effet": "Zoé remonte le chenal : la cible brûle de 2 pendant 3 tours. Piochez 1 carte.",
"ops": [
[
"brulure",
"cible",
2,
3
],
[
"pioche",
1
]
],
"ambiance": "Le panier de Zoé se remplit à marée basse, entre les racines, de coquilles qui saignent la pourpre."
},
"p2": {
"nom": "Nasse de chair",
"cout": 1,
"cible": 0,
"effet": "Une Larve nourrie rejoint le combat (14 PV, frappe 2) ; le héros se soigne de 5. Une nasse à remplir : défaussez 1 carte au hasard.",
"ops": [
[
"invoque",
"Larve nourrie",
14,
2
],
[
"soin",
"heros",
5
],
[
"prixDefausse",
1
]
],
"ambiance": "Première nasse livrée sous la ruche depuis la rupture : la larve gonfle, et la lumière revient."
},
"p3": {
"nom": "Grappes sous la ruche",
"cout": 1,
"cible": 0,
"effet": "Tous vos alliés gagnent 6 de garde. Si une bête est en jeu, les grappes s'allument : tous les ennemis brûlent de 2 pendant 3 tours.",
"ops": [
[
"garde",
"allies",
6
],
[
"si",
"bete",
[
[
"brulure",
"tous",
2,
3
]
]
]
],
"ambiance": "Pré-aube rose garance : les larves s'allument en grappes, et la ruche éclaire à nouveau le chenal."
},
"p4": {
"nom": "Pourpre sur les racines",
"cout": 2,
"cible": 0,
"effet": "Les premières pièces sèchent comme des voiles : tous les ennemis brûlent de 3 pendant 3 tours, tous vos alliés se soignent de 6. Défaussez 1 carte au hasard.",
"ops": [
[
"brulure",
"tous",
3,
3
],
[
"soin",
"allies",
6
],
[
"prixDefausse",
1
]
],
"ambiance": "Les premières pièces de pourpre sèchent sur les racines ; sous la chaleur des adultes, elles tiennent."
},
"p5": {
"nom": "Essaim-Fixeur",
"cout": 2,
"cible": 0,
"effet": "Une Vespérine adulte rejoint le combat (24 PV, frappe 5) ; sa chaleur fixe la pourpre : tous les ennemis brûlent de 2 pendant 3 tours. Défaussez 1 carte au hasard.",
"ops": [
[
"invoque",
"Vespérine adulte",
24,
5
],
[
"brulure",
"tous",
2,
3
],
[
"prixDefausse",
1
]
],
"ambiance": "Chaque Vespérine qui passe au ras des toiles fixe la pourpre ; il faut juste payer sa nasse."
},
"p6": {
"nom": "Pourpre contre indigo",
"cout": 2,
"cible": 0,
"effet": "Une Escouade de l'aube rejoint le combat (20 PV, frappe 6) ; tous les ennemis brûlent de 2 pendant 3 tours ; si une bête est en jeu, tous vos alliés se soignent de 10. Chaque ennemi se soigne de 2.",
"ops": [
[
"invoque",
"Escouade de l'aube",
20,
6
],
[
"brulure",
"tous",
2,
3
],
[
"si",
"bete",
[
[
"soin",
"allies",
10
]
]
],
[
"ennemiSoin",
2
]
],
"ambiance": "Les acheteurs d'une autre côte troquent leur indigo contre la pourpre ; le péage ne désemplit plus."
}
},
"ASS150": {
"m": {
"nom": "Vote de la crue",
"cout": 1,
"cible": 0,
"effet": "L'Assemblée vote l'ouverture des digues : la garde de tous les ennemis s'effondre, puis (2+L) dégâts à tous. Vos champs boivent aussi : le héros perd 2 PV.",
"ops": [
[
"briseGarde",
"tous"
],
[
"deg",
"tous",
[
2,
1
]
],
[
"prixPV",
2
]
],
"ambiance": "Huaman a voté la crue : les champs du rival boivent, les siens aussi, mais la vase paie mieux."
},
"p": {
"nom": "Loi des greniers",
"cout": 1,
"cible": 0,
"effet": "L'Assemblée vote la corvée des digues et les greniers débordent : piochez 2 cartes et gagnez 1 mana d'Eau. L'abondance nourrit tout le monde : chaque ennemi se soigne de 2.",
"ops": [
[
"pioche",
2
],
[
"mana",
"Eau",
1
],
[
"ennemiSoin",
2
]
],
"ambiance": "Chaque nœud rouge du cordon compte un grenier plein ; quand ils débordent, même les rivaux mangent."
},
"m7": {
"nom": "L'Ensablement",
"cout": 2,
"cible": 0,
"effet": "Plus une digue debout, le delta s'envase : tous les ennemis perdent 3 d'attaque pour le combat, leur garde tombe et ils subissent +3 dégâts à chaque coup. Le héros perd 6 PV ; s'il a moins de la moitié de ses PV, tous les ennemis hésitent ce tour. Pose Sang. Si Abîme est posée (consommée) : la vase les engloutit : 14 dégâts à tous qui ignorent la garde, et ils hésitent ce tour.",
"ops": [
[
"affaiblit",
"tous",
3
],
[
"briseGarde",
"tous"
],
[
"vulnerable",
"tous",
3
],
[
"prixPV",
6
],
[
"si",
"blesse",
[
[
"hesite",
"tous"
]
]
],
[
"pose",
"Sang"
],
[
"reveil",
"Abîme",
true,
[
[
"deg",
"tous",
14
],
[
"ignoreGarde"
],
[
"hesite",
"tous"
]
]
]
],
"ambiance": "Plus une digue debout : la vase monte aux genoux des lamas, et l'on troque désormais à la perche."
},
"p7": {
"nom": "Loi du Partage",
"cout": 2,
"cible": 0,
"effet": "Les quarante greniers s'ouvrent pour toute la vallée : piochez 3 cartes, tous vos alliés se soignent de 12 et gagnent 12 de garde, et la prochaine carte de zone jouée ce tour a son effet doublé (jamais un réveil). Chaque ennemi se soigne de 3. Pose Sceau. Si Racine est posée (gardée) : une Caravane de lamas descend des terrasses (24 PV, frappe 8) et tous vos alliés se soignent encore de 8.",
"ops": [
[
"pioche",
3
],
[
"soin",
"allies",
12
],
[
"garde",
"allies",
12
],
[
"echo"
],
[
"ennemiSoin",
3
],
[
"pose",
"Sceau"
],
[
"reveil",
"Racine",
false,
[
[
"invoque",
"Caravane de lamas",
24,
8
],
[
"soin",
"allies",
8
]
]
]
],
"ambiance": "On ouvre les greniers d'un coup ; la caravane descend des terrasses, et le cordon compte pour toute la vallée."
},
"m1": {
"nom": "Digue fissurée",
"cout": 1,
"cible": 1,
"effet": "La garde de la cible tombe, puis 8 dégâts. Le héros perd 1 PV.",
"ops": [
[
"briseGarde",
"cible"
],
[
"deg",
"cible",
8
],
[
"prixPV",
1
]
],
"ambiance": "Personne n'a recousu la digue depuis la dernière crue ; Huaman y glisse la main, l'eau suit."
},
"m2": {
"nom": "Corvée fantôme",
"cout": 0,
"cible": 1,
"effet": "5 dégâts à la cible (9 si le héros a moins de la moitié de ses PV). Le héros perd 2 PV.",
"ops": [
[
"deg",
"cible",
5
],
[
"si",
"blesse",
[
[
"deg",
"cible",
4
]
]
],
[
"prixPV",
2
]
],
"ambiance": "Le cordon des bateliers compte les corvées payées et jamais faites ; c'est vous qui portez les sacs."
},
"m3": {
"nom": "Sel en fraude",
"cout": 1,
"cible": 1,
"effet": "6 dégâts à la cible qui ignorent sa garde ; elle prend +2 dégâts à chaque coup reçu.",
"ops": [
[
"deg",
"cible",
6
],
[
"ignoreGarde"
],
[
"vulnerable",
"cible",
2
]
],
"ambiance": "Chaque crue, quelques sacs de sel passent sous les quais ; le douanier regarde toujours l'autre rive."
},
"m4": {
"nom": "Vote de la crue",
"cout": 1,
"cible": 0,
"effet": "L'Assemblée vote l'ouverture des digues : la garde de tous les ennemis s'effondre, puis 6 dégâts à tous. Vos champs boivent aussi : le héros perd 2 PV.",
"ops": [
[
"briseGarde",
"tous"
],
[
"deg",
"tous",
6
],
[
"prixPV",
2
]
],
"ambiance": "Huaman a voté la crue : les champs du rival boivent, les siens aussi, mais la vase paie mieux."
},
"m5": {
"nom": "Champs noyés",
"cout": 2,
"cible": 0,
"effet": "8 dégâts à tous ; tous les ennemis perdent 1 d'attaque et prennent +1 dégât à chaque coup reçu. Si le héros a moins de la moitié de ses PV, ils hésitent ce tour. Le héros perd 3 PV.",
"ops": [
[
"deg",
"tous",
8
],
[
"affaiblit",
"tous",
1
],
[
"vulnerable",
"tous",
1
],
[
"si",
"blesse",
[
[
"hesite",
"tous"
]
]
],
[
"prixPV",
3
]
],
"ambiance": "Les greniers du rival flottent jusqu'au delta ; on repêche ce qu'on peut, à la perche."
},
"m6": {
"nom": "Troc à la perche",
"cout": 1,
"cible": 1,
"effet": "14 dégâts à la cible qui ignorent sa garde. Reprenez en main la dernière carte de la défausse ; si le héros a moins de la moitié de ses PV, piochez 1 carte.",
"ops": [
[
"deg",
"cible",
14
],
[
"ignoreGarde"
],
[
"recup"
],
[
"si",
"blesse",
[
[
"pioche",
1
]
]
]
],
"ambiance": "Plus de quai, plus de péage : on troque de barque à barque, perche contre perche, au plus offrant."
},
"p1": {
"nom": "Corvée des digues",
"cout": 1,
"cible": 0,
"effet": "Le héros gagne 8 de garde. Piochez 1 carte.",
"ops": [
[
"garde",
"heros",
8
],
[
"pioche",
1
]
],
"ambiance": "Tout le village porte la vase en paniers ; à midi, la digue tient, et le cordon gagne un nœud."
},
"p2": {
"nom": "Cordon à nœuds rouges",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte et gagnez 1 mana d'Eau. Chaque ennemi se soigne de 1.",
"ops": [
[
"pioche",
1
],
[
"mana",
"Eau",
1
],
[
"ennemiSoin",
1
]
],
"ambiance": "Un nœud rouge par grenier plein ; Huaman les compte du pouce, et les rivaux aussi."
},
"p3": {
"nom": "Tubercules gelés",
"cout": 1,
"cible": 0,
"effet": "Le héros se soigne de 7 et gagne 8 de garde ; s'il a de la garde, piochez 1 carte.",
"ops": [
[
"soin",
"heros",
7
],
[
"garde",
"heros",
8
],
[
"si",
"garde",
[
[
"pioche",
1
]
]
]
],
"ambiance": "Séchés au gel sur les terrasses, ils pèsent trois fois moins et nourrissent tout un hiver."
},
"p4": {
"nom": "Caravane de lamas",
"cout": 2,
"cible": 0,
"effet": "Un Lama de bât rejoint le combat (20 PV, frappe 4) ; tous vos alliés gagnent 8 de garde. Piochez 1 carte. Chaque ennemi gagne 2 de garde.",
"ops": [
[
"invoque",
"Lama de bât",
20,
4
],
[
"garde",
"allies",
8
],
[
"pioche",
1
],
[
"ennemiGarde",
2
]
],
"ambiance": "La file descend des terrasses, une clochette par bête, et chaque sac porte le nœud de son grenier."
},
"p5": {
"nom": "Loi des greniers",
"cout": 1,
"cible": 0,
"effet": "L'Assemblée vote la corvée et les greniers débordent : piochez 2 cartes, gagnez 2 mana d'Eau, tous vos alliés se soignent de 4, et la prochaine carte de zone jouée ce tour a son effet doublé (jamais un réveil). Chaque ennemi se soigne de 2.",
"ops": [
[
"pioche",
2
],
[
"mana",
"Eau",
2
],
[
"soin",
"allies",
4
],
[
"echo"
],
[
"ennemiSoin",
2
]
],
"ambiance": "Chaque nœud rouge du cordon compte un grenier plein ; quand ils débordent, même les rivaux mangent."
},
"p6": {
"nom": "Délégués de la vallée",
"cout": 2,
"cible": 0,
"effet": "Les délégués de toute la vallée descendent au conseil : piochez 2 cartes, tous vos alliés gagnent 12 de garde et se soignent de 8 ; reprenez en main la dernière carte de la défausse. Chaque ennemi se soigne de 2.",
"ops": [
[
"pioche",
2
],
[
"garde",
"allies",
12
],
[
"soin",
"allies",
8
],
[
"recup"
],
[
"ennemiSoin",
2
]
],
"ambiance": "De la source au delta, chaque village envoie son délégué et son cordon ; la table du conseil déborde."
}
},
"ASS155": {
"m": {
"nom": "Loi gravée",
"cout": 1,
"cible": 1,
"effet": "Les anciens gravent le tarif dans le grès : le héros gagne (2+3L) de garde, et la cible, qui ne peut plus le discuter, hésite ce tour.",
"ops": [
[
"garde",
"heros",
[
2,
3
]
],
[
"hesite",
"cible"
]
],
"ambiance": "Ce qui est gravé dans le grès ne se discute plus : l'ancien prix de l'eau, et votre silence."
},
"p": {
"nom": "Loi de sel",
"cout": 1,
"cible": 1,
"effet": "La loi passe de main en main, claire comme une barre de sel : (3+2L) dégâts à la cible, qui traversent sa garde. Piochez 1 carte.",
"ops": [
[
"deg",
"cible",
[
3,
2
]
],
[
"ignoreGarde"
],
[
"pioche",
1
]
],
"ambiance": "Tsehay paie avec une barre de sel qui passe de main en main ; la loi suit, claire comme elle."
},
"m7": {
"nom": "Code de grès",
"cout": 2,
"cible": 0,
"effet": "L'Assemblée scelle le prix de l'eau dans la pierre, payé d'avance : tous les ennemis perdent 2 d'attaque pour le combat ; le héros gagne 15 de garde et, jusqu'au prochain tour, renvoie 10 dégâts à chaque coup reçu. Piochez 1 carte. Le héros perd 4 PV. Pose Sang. Si Braise est posée (consommée) : le grès chauffé au soleil devient four : tous les ennemis brûlent de 4 pendant 3 tours et tous vos alliés gagnent 10 de garde.",
"ops": [
[
"affaiblit",
"tous",
2
],
[
"garde",
"heros",
15
],
[
"riposte",
10
],
[
"pioche",
1
],
[
"prixPV",
4
],
[
"pose",
"Sang"
],
[
"reveil",
"Braise",
true,
[
[
"brulure",
"tous",
4,
3
],
[
"garde",
"allies",
10
]
]
]
],
"ambiance": "Au fond de la spirale, chaque goutte se paie d'avance ; qui frappe le mur paie dix fois."
},
"p7": {
"nom": "Lentille de sel",
"cout": 2,
"cible": 1,
"effet": "On taille une barre de sel en lentille et on la tend au soleil de l'oasis : 12 dégâts à la cible qui ignorent sa garde, puis elle brûle de 6 pendant 3 tours et subit +3 dégâts à chaque coup. Piochez 1 carte. Pose Braise. Si Givre est posée (consommée) : ce qui est figé se fend comme du sel : 25 dégâts à la cible qui ignorent la garde, et la garde de tous les ennemis tombe.",
"ops": [
[
"deg",
"cible",
12
],
[
"ignoreGarde"
],
[
"brulure",
"cible",
6,
3
],
[
"vulnerable",
"cible",
3
],
[
"pioche",
1
],
[
"pose",
"Braise"
],
[
"reveil",
"Givre",
true,
[
[
"deg",
"cible",
25
],
[
"ignoreGarde"
],
[
"briseGarde",
"tous"
]
]
]
],
"ambiance": "Une barre de sel taillée en lentille, le soleil de l'oasis, et la plus vieille loi du désert prend feu."
},
"m1": {
"nom": "Ancien tarif",
"cout": 1,
"cible": 0,
"effet": "Le héros gagne 8 de garde et, jusqu'au prochain tour, renvoie 2 dégâts à chaque coup reçu.",
"ops": [
[
"garde",
"heros",
8
],
[
"riposte",
2
]
],
"ambiance": "Une jarre d'eau contre une barre de sel : le tarif n'a pas bougé depuis le grand-père de l'ancien."
},
"m2": {
"nom": "Banc des anciens",
"cout": 1,
"cible": 1,
"effet": "Le héros gagne 10 de garde et, jusqu'au prochain tour, renvoie 3 dégâts à chaque coup reçu ; s'il a de la garde, la cible perd 1 d'attaque. Défaussez 1 carte au hasard : la barre de sel du droit de parole.",
"ops": [
[
"garde",
"heros",
10
],
[
"riposte",
3
],
[
"si",
"garde",
[
[
"affaiblit",
"cible",
1
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "Pour parler au banc des anciens, on pose d'abord une barre de sel sur le grès."
},
"m3": {
"nom": "Tarif gravé",
"cout": 1,
"cible": 1,
"effet": "La cible perd 2 d'attaque pour le combat ; le héros gagne 10 de garde ; s'il a de la garde, il renvoie 2 dégâts à chaque coup reçu. Défaussez 1 carte au hasard.",
"ops": [
[
"affaiblit",
"cible",
2
],
[
"garde",
"heros",
10
],
[
"si",
"garde",
[
[
"riposte",
2
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "Le ciseau mord le grès : le prix de l'eau est gravé, et la vieille ardoise part au feu."
},
"m4": {
"nom": "Spirale de grès",
"cout": 2,
"cible": 0,
"effet": "Le héros gagne 18 de garde et, jusqu'au prochain tour, renvoie 5 dégâts à chaque coup reçu ; tous les ennemis perdent 1 d'attaque. Défaussez 1 carte au hasard.",
"ops": [
[
"garde",
"heros",
18
],
[
"riposte",
5
],
[
"affaiblit",
"tous",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "La salle s'enfonce en spirale dans le grès rouge ; chaque marche descendue renvoie l'écho d'un ancien."
},
"m5": {
"nom": "Prix de l'eau gravé",
"cout": 1,
"cible": 1,
"effet": "Le prix de l'eau est gravé, qui frappe paie : le héros gagne 13 de garde et, jusqu'au prochain tour, renvoie 5 dégâts à chaque coup reçu ; s'il a de la garde, la cible perd 1 d'attaque. Défaussez 1 carte au hasard.",
"ops": [
[
"garde",
"heros",
13
],
[
"riposte",
5
],
[
"si",
"garde",
[
[
"affaiblit",
"cible",
1
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "Ce qui est gravé dans le grès ne se discute plus : une jarre, une barre de sel, pas une de moins."
},
"m6": {
"nom": "Porte de grès",
"cout": 2,
"cible": 0,
"effet": "On roule la meule devant la source : tous les ennemis perdent 1 d'attaque pour le combat ; le héros gagne 24 de garde et, jusqu'au prochain tour, renvoie 6 dégâts à chaque coup reçu. Défaussez 1 carte au hasard.",
"ops": [
[
"affaiblit",
"tous",
1
],
[
"garde",
"heros",
24
],
[
"riposte",
6
],
[
"prixDefausse",
1
]
],
"ambiance": "La meule roule devant la source ; personne ne boit plus sans payer l'ancien prix, pas même vous."
},
"p1": {
"nom": "Coup de hache sur le sel",
"cout": 1,
"cible": 1,
"effet": "8 dégâts à la cible qui ignorent sa garde.",
"ops": [
[
"deg",
"cible",
8
],
[
"ignoreGarde"
]
],
"ambiance": "Un coup de hache sur la plaine blanche, et la barre de sel sort nette, prête à voyager."
},
"p2": {
"nom": "Plaine blanche",
"cout": 0,
"cible": 1,
"effet": "La cible prend +1 dégât à chaque coup reçu. Piochez 1 carte. La réverbération brûle les yeux : le héros perd 2 PV.",
"ops": [
[
"vulnerable",
"cible",
1
],
[
"pioche",
1
],
[
"prixPV",
2
]
],
"ambiance": "Quarante chameaux sur le sel, pas une ombre ; Tsehay avance les yeux plissés, et voit tout."
},
"p3": {
"nom": "De main en main",
"cout": 1,
"cible": 1,
"effet": "Piochez 2 cartes ; 5 dégâts à la cible qui ignorent sa garde.",
"ops": [
[
"pioche",
2
],
[
"deg",
"cible",
5
],
[
"ignoreGarde"
]
],
"ambiance": "La barre passe du chamelier au palmier, du palmier au potier : la loi voyage avec la monnaie."
},
"p4": {
"nom": "Pluie sur le sel",
"cout": 1,
"cible": 0,
"effet": "La première pluie dissout tout : la garde de tous les ennemis tombe et ils prennent +2 dégâts à chaque coup reçu. Le héros perd 2 PV.",
"ops": [
[
"briseGarde",
"tous"
],
[
"vulnerable",
"tous",
2
],
[
"prixPV",
2
]
],
"ambiance": "Une averse sur l'oasis, et les vieilles lois de sel fondent ; il faut en tailler de nouvelles."
},
"p5": {
"nom": "Barre de sel",
"cout": 1,
"cible": 1,
"effet": "14 dégâts à la cible qui ignorent sa garde (+4 s'il ne reste qu'un ennemi). Piochez 1 carte. Le héros perd 2 PV.",
"ops": [
[
"deg",
"cible",
14
],
[
"ignoreGarde"
],
[
"si",
"seul",
[
[
"deg",
"cible",
4
]
]
],
[
"pioche",
1
],
[
"prixPV",
2
]
],
"ambiance": "Tsehay paie avec une barre de sel qui passe de main en main ; la loi suit, claire comme elle."
},
"p6": {
"nom": "Vendu au double",
"cout": 2,
"cible": 1,
"effet": "20 dégâts à la cible qui ignorent sa garde ; elle prend +2 dégâts à chaque coup reçu et brûle de 3 pendant 2 tours. Piochez 1 carte. Le héros perd 2 PV.",
"ops": [
[
"deg",
"cible",
20
],
[
"ignoreGarde"
],
[
"vulnerable",
"cible",
2
],
[
"brulure",
"cible",
3,
2
],
[
"pioche",
1
],
[
"prixPV",
2
]
],
"ambiance": "Tsehay a vendu ses barres au double la veille du vote ; le soleil chauffe déjà le sel."
}
},
"DON": {
"m": {
"nom": "Édit gravé",
"cout": 2,
"cible": 1,
"effet": "(6+4L) dégâts à la cible. Nul ne frappera : la cible hésite ce tour et devient Vulnérable 1. Clause : l'Édit s'applique d'abord à la main qui le grave, le héros perd 2 PV.",
"ops": [
[
"deg",
"cible",
[
6,
4
]
],
[
"hesite",
"cible"
],
[
"vulnerable",
"cible",
1
],
[
"prixPV",
2
]
],
"ambiance": "Nul ne frappera — sauf la main qui grave, et le sceau la brûle en premier."
},
"p": {
"nom": "Coulée sans maître",
"cout": 2,
"cible": 0,
"effet": "Brisez la garde de tous les ennemis ; ils brûlent (1+L) par tour pendant 2 tours. Reprenez en main la dernière carte défaussée. Prix : défaussez 1 carte au hasard (ce qu'on repêche peut repartir).",
"ops": [
[
"briseGarde",
"tous"
],
[
"brulure",
"tous",
[
1,
1
],
2
],
[
"recup"
],
[
"prixDefausse",
1
]
],
"ambiance": "Les cangues ouvertes flottent sur la lave : on lâche une chose pour en repêcher une autre."
},
"m7": {
"nom": "Le Neuvième Édit",
"cout": 3,
"cible": 1,
"effet": "Imprimez le sceau. 18 dégâts à la cible, qui ignorent la garde ; la cible hésite. Tous les ennemis perdent 2 d'attaque et deviennent Vulnérables 2 pour le combat. Le héros perd 4 PV. Pose Sceau. Si Sang est posée (consommée) : le sang versé signe l'Édit, 10 dégâts à tous et le héros se soigne de 10.",
"ops": [
[
"deg",
"cible",
18
],
[
"ignoreGarde"
],
[
"hesite",
"cible"
],
[
"affaiblit",
"tous",
2
],
[
"vulnerable",
"tous",
2
],
[
"prixPV",
4
],
[
"pose",
"Sceau"
],
[
"reveil",
"Sang",
true,
[
[
"deg",
"tous",
10
],
[
"soin",
"heros",
10
]
]
]
],
"ambiance": "Imprimé, le neuvième sceau se lit enfin : le puits garde celui qui le commande. Vous commandez."
},
"p7": {
"nom": "Le Puits Ouvert",
"cout": 3,
"cible": 0,
"effet": "Le puits s'ouvre sur le ciel. Tous les ennemis perdent leur garde et brûlent 5 par tour pendant 3 tours. La prochaine carte de zone jouée ce tour est doublée. +1 mana Feu. Pose Braise. Si Givre est posée (consommée) : la lave rencontre la glace, 16 dégâts à tous.",
"ops": [
[
"brulure",
"tous",
5,
3
],
[
"briseGarde",
"tous"
],
[
"echo"
],
[
"mana",
"Feu",
1
],
[
"pose",
"Braise"
],
[
"reveil",
"Givre",
true,
[
[
"deg",
"tous",
16
]
]
]
],
"ambiance": "Plus de margelle, plus d'étages : la lave jaillit en fontaines, et le céladon marque où."
},
"m1": {
"nom": "Le Portique vermillon",
"cout": 1,
"cible": 1,
"effet": "7 dégâts à la cible, qui devient Vulnérable 1.",
"ops": [
[
"deg",
"cible",
7
],
[
"vulnerable",
"cible",
1
]
],
"ambiance": "Sous le portique, on vous tamponne la main : l'encre vermillon désigne aussi celui qu'on frappe."
},
"m2": {
"nom": "Nul ne courra",
"cout": 1,
"cible": 1,
"effet": "9 dégâts à la cible, qui hésite ce tour. Clause : le héros perd 2 PV.",
"ops": [
[
"deg",
"cible",
9
],
[
"hesite",
"cible"
],
[
"prixPV",
2
]
],
"ambiance": "Premier étage, premier Édit : nul ne courra. Pas même vous, qui l'avez fait respecter."
},
"m3": {
"nom": "Les Dalles céladon",
"cout": 1,
"cible": 1,
"effet": "Vous gagnez 8 de garde. Si la cible hésite : 12 dégâts et elle devient Vulnérable 1.",
"ops": [
[
"garde",
"heros",
8
],
[
"si",
"hesite",
[
[
"deg",
"cible",
12
],
[
"vulnerable",
"cible",
1
]
]
]
],
"ambiance": "Deux verts presque pareils : celui qui marche sur le céladon frappe celui qui a glissé sur le jade."
},
"m4": {
"nom": "L'Enclos des Tesselés",
"cout": 2,
"cible": 1,
"effet": "16 dégâts à la cible, qui ignorent la garde ; elle hésite et perd 2 d'attaque. Clause : le héros perd 3 PV.",
"ops": [
[
"deg",
"cible",
16
],
[
"ignoreGarde"
],
[
"hesite",
"cible"
],
[
"affaiblit",
"cible",
2
],
[
"prixPV",
3
]
],
"ambiance": "Les dominos d'os se soudent en cercle autour de l'infraction, et se referment sur ce qu'ils gardent."
},
"m5": {
"nom": "L'Inspecteur à la lanterne",
"cout": 2,
"cible": 1,
"effet": "Tous les ennemis deviennent Vulnérables 2. 16 dégâts à la cible, qui hésite. Clause : le héros perd 3 PV.",
"ops": [
[
"vulnerable",
"tous",
2
],
[
"deg",
"cible",
16
],
[
"hesite",
"cible"
],
[
"prixPV",
3
]
],
"ambiance": "La lanterne de corne passe sur chaque visage ; ceux qu'elle a vus portent la marque jusqu'au soir."
},
"m6": {
"nom": "Huit Édits ensemble",
"cout": 2,
"cible": 1,
"effet": "Tous les ennemis perdent 2 d'attaque. 18 dégâts à la cible, qui ignorent la garde ; elle hésite. Clause : le héros perd 4 PV.",
"ops": [
[
"affaiblit",
"tous",
2
],
[
"deg",
"cible",
18
],
[
"ignoreGarde"
],
[
"hesite",
"cible"
],
[
"prixPV",
4
]
],
"ambiance": "À l'étage neuf, les huit premiers Édits valent ensemble ; la main qui les porte saigne de tous."
},
"p1": {
"nom": "La Cangue ouverte",
"cout": 1,
"cible": 1,
"effet": "La garde de la cible tombe à 0, puis 3 dégâts. Reprenez en main la dernière carte défaussée.",
"ops": [
[
"briseGarde",
"cible"
],
[
"deg",
"cible",
3
],
[
"recup"
]
],
"ambiance": "Un forçat ouvre sa cangue de basalte : ce qui l'entravait devient la première chose qu'il ramasse."
},
"p2": {
"nom": "Première fissure",
"cout": 1,
"cible": 0,
"effet": "Brisez la garde de tous les ennemis ; ils brûlent 2 par tour pendant 2 tours. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"briseGarde",
"tous"
],
[
"brulure",
"tous",
2,
2
],
[
"prixDefausse",
1
]
],
"ambiance": "La croûte se fend sous les tablettes retournées ; on lâche ce qu'on tient pour ne pas tomber."
},
"p3": {
"nom": "Rigoles sinueuses",
"cout": 1,
"cible": 1,
"effet": "La cible brûle 3 par tour pendant 3 tours. La prochaine carte de zone jouée ce tour a son effet doublé.",
"ops": [
[
"brulure",
"cible",
3,
3
],
[
"echo"
]
],
"ambiance": "La lave coule entre les dalles soulevées et ne suit aucun Édit : elle double ce qu'elle touche."
},
"p4": {
"nom": "Dominos en chaîne",
"cout": 2,
"cible": 0,
"effet": "4 coups de 5 dégâts au hasard. Brisez la garde de tous les ennemis ; reprenez la dernière carte défaussée. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"deg",
"hasard",
5,
4
],
[
"briseGarde",
"tous"
],
[
"recup"
],
[
"prixDefausse",
1
]
],
"ambiance": "Les Tesselés tombent l'un sur l'autre et tracent une passerelle qu'aucune règle n'avait prévue."
},
"p5": {
"nom": "Le riz cuit sur la lave",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis brûlent 3 par tour pendant 3 tours. Le héros se soigne de 8. +2 mana Feu. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"brulure",
"tous",
3,
3
],
[
"soin",
"heros",
8
],
[
"mana",
"Feu",
2
],
[
"prixDefausse",
1
]
],
"ambiance": "Les évadés cuisent leur riz sur la coulée tiède et jouent aux osselets avec les débris des sceaux."
},
"p6": {
"nom": "Le radeau de cangue",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis perdent leur garde et brûlent 4 pendant 2 tours. Écho, reprenez la dernière défaussée, piochez 1. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"briseGarde",
"tous"
],
[
"brulure",
"tous",
4,
2
],
[
"echo"
],
[
"recup"
],
[
"pioche",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Sur le lac de lave, une cangue sert de radeau : elle ramène ce que le puits voulait garder."
}
},
"MAR": {
"m": {
"nom": "Scrutin dans la brume",
"cout": 1,
"cible": 1,
"effet": "La cible hésite ce tour : son bulletin se perd dans la brume. Vous gagnez (2+3L) de garde.",
"ops": [
[
"hesite",
"cible"
],
[
"garde",
"heros",
[
2,
3
]
]
],
"ambiance": "Le bulletin part dans la brume ; l'adversaire attend un verdict que personne ne lira tout haut."
},
"p": {
"nom": "Motion de censure",
"cout": 1,
"cible": 1,
"effet": "Piochez 1 carte. (3+3L) dégâts à la cible, qui devient Vulnérable 1. Prix : la Maison prend sa part, défaussez 1 carte au hasard.",
"ops": [
[
"pioche",
1
],
[
"deg",
"cible",
[
3,
3
]
],
[
"vulnerable",
"cible",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Écrite à la craie au-dessus de la table, la motion est juste ; la Maison prend quand même sa part."
},
"m7": {
"nom": "Le Scrutin sans visage",
"cout": 2,
"cible": 0,
"effet": "Treize capuches votent à l'aveugle. Tous les ennemis hésitent et perdent 1 d'attaque. Vous gagnez 24 de garde. Piochez 2 cartes et reprenez la dernière défaussée. Pose Givre. Si Abîme est posée (consommée) : le feutre vert de mousse cède sur la crevasse, la garde de tous les ennemis tombe et ils subissent 12 dégâts.",
"ops": [
[
"hesite",
"tous"
],
[
"affaiblit",
"tous",
1
],
[
"garde",
"heros",
24
],
[
"pioche",
2
],
[
"recup"
],
[
"pose",
"Givre"
],
[
"reveil",
"Abîme",
true,
[
[
"briseGarde",
"tous"
],
[
"deg",
"tous",
12
]
]
]
],
"ambiance": "Treize capuches votent dans la brume ; le vert de mousse s'ouvre sous ceux qui ont mal compté."
},
"p7": {
"nom": "Le Treizième Carton",
"cout": 2,
"cible": 1,
"effet": "Le carton sans trou défile : la cible hésite, perd 2 d'attaque et devient Vulnérable 3, puis subit 12 dégâts. Piochez 3 cartes ; la prochaine carte de zone est doublée. Prix : défaussez 1 carte. Pose Sceau. Si Sang est posée (consommée) : la Maison rend la part du sang versé, le héros se soigne de 15, piochez 2, +1 mana Glace.",
"ops": [
[
"hesite",
"cible"
],
[
"vulnerable",
"cible",
3
],
[
"affaiblit",
"cible",
2
],
[
"deg",
"cible",
12
],
[
"pioche",
3
],
[
"echo"
],
[
"prixDefausse",
1
],
[
"pose",
"Sceau"
],
[
"reveil",
"Sang",
true,
[
[
"soin",
"heros",
15
],
[
"pioche",
2
],
[
"mana",
"Glace",
1
]
]
]
],
"ambiance": "Le treizième carton n'a aucun trou : l'orgue se tait pendant qu'il défile, et c'est là qu'on frappe."
},
"m1": {
"nom": "Brume des crevasses",
"cout": 0,
"cible": 0,
"effet": "Vous gagnez 5 de garde.",
"ops": [
[
"garde",
"heros",
5
]
],
"ambiance": "La brume monte des crevasses jusqu'aux genoux ; dans la séance, on ne voit plus qui se lève."
},
"m2": {
"nom": "Housse de Fil-de-Brume",
"cout": 1,
"cible": 1,
"effet": "La cible hésite ce tour. Vous gagnez 10 de garde et piochez 1 carte. Prix : chaque ennemi gagne 2 de garde.",
"ops": [
[
"hesite",
"cible"
],
[
"garde",
"heros",
10
],
[
"pioche",
1
],
[
"ennemiGarde",
2
]
],
"ambiance": "Les Fil-de-Brume tricotent une housse autour de la motion ; personne ne sait plus ce qu'elle cache."
},
"m3": {
"nom": "Lanternes de corne",
"cout": 1,
"cible": 1,
"effet": "La cible perd 2 d'attaque. Vous gagnez 8 de garde et reprenez la dernière carte défaussée. Prix : chaque ennemi gagne 1 de garde.",
"ops": [
[
"affaiblit",
"cible",
2
],
[
"garde",
"heros",
8
],
[
"recup"
],
[
"ennemiGarde",
1
]
],
"ambiance": "À la lueur brune des lanternes, on retrouve son bulletin ; l'adversaire, lui, a perdu le sien."
},
"m4": {
"nom": "Le bulletin plié",
"cout": 1,
"cible": 1,
"effet": "La cible hésite ce tour. Piochez 2 cartes et gagnez 6 de garde.",
"ops": [
[
"hesite",
"cible"
],
[
"pioche",
2
],
[
"garde",
"heros",
6
]
],
"ambiance": "Plié en quatre et glissé sous la glace dépolie : le vote compte, mais nul ne sait pour qui."
},
"m5": {
"nom": "Crécelles des chanoines",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis hésitent et perdent 1 d'attaque. Vous gagnez 18 de garde et reprenez la dernière défaussée. Prix : chaque ennemi gagne 1 de garde.",
"ops": [
[
"hesite",
"tous"
],
[
"affaiblit",
"tous",
1
],
[
"garde",
"heros",
18
],
[
"recup"
],
[
"ennemiGarde",
1
]
],
"ambiance": "Les chanoines appellent les votes à la crécelle, sans quitter leur capuche ; la salle attend, figée."
},
"m6": {
"nom": "Le feutre de mousse givrée",
"cout": 2,
"cible": 0,
"effet": "Vous gagnez 20 de garde. Tous les ennemis hésitent et deviennent Vulnérables 1. Piochez 2. Prix : chaque ennemi gagne 2 de garde.",
"ops": [
[
"garde",
"heros",
20
],
[
"hesite",
"tous"
],
[
"vulnerable",
"tous",
1
],
[
"pioche",
2
],
[
"ennemiGarde",
2
]
],
"ambiance": "Deux feutres presque du même vert : la vraie table tient, l'autre couvre la crevasse. Ils ont choisi l'autre."
},
"p1": {
"nom": "Ciel dégagé",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte.",
"ops": [
[
"pioche",
1
]
],
"ambiance": "La brume tombe, le soleil bas éclaire la nef : on relit enfin l'ordre du jour."
},
"p2": {
"nom": "La règle à la craie",
"cout": 1,
"cible": 1,
"effet": "La cible devient Vulnérable 2, puis subit 8 dégâts. Prix : la Maison prend sa part, défaussez 1 carte au hasard.",
"ops": [
[
"vulnerable",
"cible",
2
],
[
"deg",
"cible",
8
],
[
"prixDefausse",
1
]
],
"ambiance": "Les règles sont redessinées en grandes lettres au-dessus des tables : toutes justes, sauf la treizième."
},
"p3": {
"nom": "Ardoises de séance",
"cout": 1,
"cible": 1,
"effet": "Piochez 2 cartes. La prochaine carte de zone est doublée. La cible devient Vulnérable 1. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"pioche",
2
],
[
"echo"
],
[
"vulnerable",
"cible",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Chacun note les votes sur son ardoise ; deux colonnes justes valent une motion doublée."
},
"p4": {
"nom": "Cordeaux blancs",
"cout": 1,
"cible": 1,
"effet": "La garde de la cible tombe à 0. 12 dégâts, et elle devient Vulnérable 1.",
"ops": [
[
"briseGarde",
"cible"
],
[
"deg",
"cible",
12
],
[
"vulnerable",
"cible",
1
]
],
"ambiance": "Les Fil-de-Brume tendent leurs fils en cordeaux : chaque case de la séance a un bord net."
},
"p5": {
"nom": "Bouliers d'os",
"cout": 2,
"cible": 1,
"effet": "Piochez 3 cartes. 14 dégâts à la cible, qui devient Vulnérable 2. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"pioche",
3
],
[
"deg",
"cible",
14
],
[
"vulnerable",
"cible",
2
],
[
"prixDefausse",
1
]
],
"ambiance": "Les parieurs comptent sur leurs bouliers d'os ; à ce compte-là, la Maison n'a plus besoin de tricher."
},
"p6": {
"nom": "Les comptes en public",
"cout": 2,
"cible": 0,
"effet": "Tous les ennemis deviennent Vulnérables 2 et subissent 8 dégâts. Piochez 2. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"vulnerable",
"tous",
2
],
[
"deg",
"tous",
8
],
[
"pioche",
2
],
[
"prixDefausse",
1
]
],
"ambiance": "Les chanoines tiennent les comptes devant tous, au boulier ; chaque erreur se lit, et chaque menteur."
}
},
"ASS152": {
"m": {
"nom": "Loi du tison",
"cout": 1,
"cible": 1,
"effet": "Jusqu'au prochain tour, chaque coup reçu renvoie (2+L) dégâts. Vous gagnez (4+L) de garde. La cible perd 1 d'attaque. Prix : ce qui n'est pas dit se perd, défaussez 1 carte au hasard.",
"ops": [
[
"riposte",
[
2,
1
]
],
[
"garde",
"heros",
[
4,
1
]
],
[
"affaiblit",
"cible",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Le tison s'éteint avant qu'on ait parlé : la loi passe, et chaque coup revient à son porteur."
},
"p": {
"nom": "Chant à trois voix",
"cout": 1,
"cible": 0,
"effet": "La paroi répond : la prochaine carte de zone jouée ce tour a son effet doublé. Vous et vos bêtes gagnez (1+3L) de garde. Si une bête est en jeu, piochez 1 carte.",
"ops": [
[
"echo"
],
[
"garde",
"allies",
[
1,
3
]
],
[
"si",
"bete",
[
[
"pioche",
1
]
]
]
],
"ambiance": "Vous chantez une fois, la paroi rouge répond trois — la troisième voix plus forte que la vôtre."
},
"m7": {
"nom": "Le Mutisme de la Faille",
"cout": 2,
"cible": 1,
"effet": "Trois souffles, puis plus rien. Jusqu'au prochain tour, chaque coup reçu renvoie 10 dégâts ; vous gagnez 15 de garde. 12 dégâts à la cible, qui ignorent la garde ; vous vous soignez de la moitié. Prix : défaussez 2 cartes. Pose Abîme. Si Sceau est posée (consommée) : la loi tue tous les mots, tous les ennemis hésitent et perdent 2 d'attaque, piochez 2.",
"ops": [
[
"riposte",
10
],
[
"garde",
"heros",
15
],
[
"deg",
"cible",
12
],
[
"ignoreGarde"
],
[
"volVie"
],
[
"prixDefausse",
2
],
[
"pose",
"Abîme"
],
[
"reveil",
"Sceau",
true,
[
[
"hesite",
"tous"
],
[
"affaiblit",
"tous",
2
],
[
"pioche",
2
]
]
]
],
"ambiance": "Trois souffles, puis plus rien : la faille avale vos mots, vos cartes et la colère d'en face."
},
"p7": {
"nom": "Les Voix qui Reviennent",
"cout": 2,
"cible": 0,
"effet": "Deux Écho-Chanteurs descendent de la paroi (12 PV, frappent 5 chacun). Vous et vos bêtes gagnez 10 de garde. La prochaine carte de zone est doublée. Piochez 1. Pose Racine. Si Braise est posée (consommée) : le chant attise les braseros, tous les ennemis brûlent 4 pendant 3 tours et subissent 6 dégâts.",
"ops": [
[
"invoque",
"Écho-Chanteur",
12,
5
],
[
"invoque",
"Écho-Chanteur",
12,
5
],
[
"garde",
"allies",
10
],
[
"echo"
],
[
"pioche",
1
],
[
"pose",
"Racine"
],
[
"reveil",
"Braise",
true,
[
[
"brulure",
"tous",
4,
3
],
[
"deg",
"tous",
6
]
]
]
],
"ambiance": "Les échos ne repartent plus : ils descendent de la paroi, prennent pied, et chantent avec vous."
},
"m1": {
"nom": "Brasero couvert",
"cout": 0,
"cible": 0,
"effet": "Jusqu'au prochain tour, chaque coup reçu renvoie 2 dégâts.",
"ops": [
[
"riposte",
2
]
],
"ambiance": "On couvre le brasero de la pierre-de-parole : la chaleur reste, la flamme se tait."
},
"m2": {
"nom": "Le tison posé",
"cout": 1,
"cible": 0,
"effet": "Riposte 3 jusqu'au prochain tour. Vous gagnez 8 de garde.",
"ops": [
[
"riposte",
3
],
[
"garde",
"heros",
8
]
],
"ambiance": "Un ancien pose le tison au pied de la pierre et se tait : à vous de ne rien dire."
},
"m3": {
"nom": "Premier souffle",
"cout": 1,
"cible": 1,
"effet": "Vous gagnez 10 de garde ; la cible perd 1 d'attaque. Si vous avez de la garde : riposte 4. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"garde",
"heros",
10
],
[
"affaiblit",
"cible",
1
],
[
"si",
"garde",
[
[
"riposte",
4
]
]
],
[
"prixDefausse",
1
]
],
"ambiance": "Un souffle : le tison rougit encore. Ce que vous auriez dit, vous le gardez pour le rendre."
},
"m4": {
"nom": "Deuxième souffle",
"cout": 1,
"cible": 1,
"effet": "Riposte 5 jusqu'au prochain tour. Vous gagnez 9 de garde ; la cible perd 1 d'attaque. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"riposte",
5
],
[
"garde",
"heros",
9
],
[
"affaiblit",
"cible",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Deux souffles : la braise noircit au bord. Qui ouvre la bouche maintenant se brûle la langue."
},
"m5": {
"nom": "Les anciens muets",
"cout": 2,
"cible": 1,
"effet": "Tous les ennemis hésitent. Riposte 6, 12 de garde ; la cible perd 1 d'attaque. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"hesite",
"tous"
],
[
"riposte",
6
],
[
"garde",
"heros",
12
],
[
"affaiblit",
"cible",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Les anciens se tiennent autour de la pierre sans un mot ; l'assemblée entière retient son tour."
},
"m6": {
"nom": "La pierre froide",
"cout": 2,
"cible": 1,
"effet": "Riposte 8 et 15 de garde. 8 dégâts à la cible, qui ignorent la garde. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"riposte",
8
],
[
"garde",
"heros",
15
],
[
"deg",
"cible",
8
],
[
"ignoreGarde"
],
[
"prixDefausse",
1
]
],
"ambiance": "Le tison est éteint, la pierre-de-parole a refroidi : la loi est passée, et nul ne la contredira."
},
"p1": {
"nom": "Premier vers",
"cout": 0,
"cible": 0,
"effet": "Vous et vos bêtes gagnez 5 de garde.",
"ops": [
[
"garde",
"allies",
5
]
],
"ambiance": "Vous montez sur la pierre rouge et lancez un vers ; la paroi le garde un instant avant de répondre."
},
"p2": {
"nom": "La paroi répond",
"cout": 1,
"cible": 0,
"effet": "La prochaine carte de zone est doublée. Vous et vos bêtes gagnez 6 de garde. Piochez 1. Prix : la gorge brûle, le héros perd 2 PV.",
"ops": [
[
"echo"
],
[
"garde",
"allies",
6
],
[
"pioche",
1
],
[
"prixPV",
2
]
],
"ambiance": "Une fois, deux fois, trois fois : la paroi rend le vers, et le braséro vous racle la gorge."
},
"p3": {
"nom": "Deuxième voix",
"cout": 1,
"cible": 0,
"effet": "Un Écho-Chanteur descend de la paroi (8 PV, frappe 3). Vous et vos bêtes gagnez 8 de garde.",
"ops": [
[
"invoque",
"Écho-Chanteur",
8,
3
],
[
"garde",
"allies",
8
]
],
"ambiance": "La deuxième voix ne repart pas : elle prend forme sur la corniche et chante au-dessus de vous."
},
"p4": {
"nom": "Braseros rallumés",
"cout": 1,
"cible": 1,
"effet": "Écho. La cible brûle 3 pendant 2 tours. Vous et vos bêtes gagnez 6 de garde. Si une bête est en jeu, piochez 1. Prix : le héros perd 2 PV.",
"ops": [
[
"echo"
],
[
"brulure",
"cible",
3,
2
],
[
"garde",
"allies",
6
],
[
"si",
"bete",
[
[
"pioche",
1
]
]
],
[
"prixPV",
2
]
],
"ambiance": "Le chant attise les braseros de l'assemblée ; la paroi rouge renvoie la chaleur avec la voix."
},
"p5": {
"nom": "La troisième voix, plus forte",
"cout": 2,
"cible": 0,
"effet": "Un Écho-Chanteur descend (12 PV, frappe 5). Écho. Vous et vos bêtes gagnez 10 de garde. Piochez 1. Prix : le héros perd 2 PV.",
"ops": [
[
"invoque",
"Écho-Chanteur",
12,
5
],
[
"echo"
],
[
"garde",
"allies",
10
],
[
"pioche",
1
],
[
"prixPV",
2
]
],
"ambiance": "La loi est juste : la troisième voix revient plus forte que la vôtre, et elle a des pieds."
},
"p6": {
"nom": "Toute l'assemblée chante",
"cout": 2,
"cible": 0,
"effet": "Un Écho-Chanteur descend (12 PV, frappe 5). Vous et vos bêtes gagnez 14 de garde. Écho. Si une bête est en jeu, piochez 2. Prix : le héros perd 3 PV.",
"ops": [
[
"invoque",
"Écho-Chanteur",
12,
5
],
[
"garde",
"allies",
14
],
[
"echo"
],
[
"si",
"bete",
[
[
"pioche",
2
]
]
],
[
"prixPV",
3
]
],
"ambiance": "Tout le canyon vote à l'écho ; chaque loi chantée revient trois fois, et l'assemblée triple."
}
},
"ANT120": {
"m": {
"nom": "Porte de l'aube : Bœuf de givre",
"cout": 2,
"cible": 1,
"effet": "Un bœuf de givre entre dans l'enclos ((8+4L) PV, frappe (1+L)). Vous gagnez 5 de garde. Si une bête est en jeu, la cible hésite ce tour. Prix : le froid de l'aube coûte 2 PV au héros.",
"ops": [
[
"invoque",
"Bœuf de givre",
[
8,
4
],
[
1,
1
]
],
[
"garde",
"heros",
5
],
[
"si",
"bete",
[
[
"hesite",
"cible"
]
]
],
[
"prixPV",
2
]
],
"ambiance": "Par la porte de l'aube, le bœuf de givre entre lent et lourd ; l'auge gèle sous son mufle."
},
"p": {
"nom": "Porte de midi : Chacal de braise",
"cout": 2,
"cible": 1,
"effet": "Un chacal de braise entre (5 PV, frappe (3+L)). La cible subit (4+L) dégâts puis brûle (1+L) pendant 2 tours. Prix : votre bête la plus faible perd 3 PV (souvent le chacal lui-même).",
"ops": [
[
"invoque",
"Chacal de braise",
5,
[
3,
1
]
],
[
"deg",
"cible",
[
4,
1
]
],
[
"brulure",
"cible",
[
1,
1
],
2
],
[
"prixBete",
3
]
],
"ambiance": "Par la porte de midi, le chacal mord vite : à cette auge, le feu mange ce qu'il abreuve."
},
"m7": {
"nom": "Le Troupeau de l'Aube",
"cout": 3,
"cible": 1,
"effet": "Trois bœufs de givre, pas un de plus (10 PV, frappent 3 chacun). Vous et vos bêtes gagnez 10 de garde. Tous les ennemis perdent 1 d'attaque ; la cible hésite. Pose Racine. Si Givre est posée (consommée) : l'auge gèle d'un bloc, tous les ennemis hésitent et perdent 2 d'attaque, vos alliés se soignent de 12.",
"ops": [
[
"invoque",
"Bœuf de givre",
10,
3
],
[
"invoque",
"Bœuf de givre",
10,
3
],
[
"invoque",
"Bœuf de givre",
10,
3
],
[
"garde",
"allies",
10
],
[
"affaiblit",
"tous",
1
],
[
"hesite",
"cible"
],
[
"pose",
"Racine"
],
[
"reveil",
"Givre",
true,
[
[
"hesite",
"tous"
],
[
"affaiblit",
"tous",
2
],
[
"soin",
"allies",
12
]
]
]
],
"ambiance": "Trois bœufs à l'auge, pas un de plus : la source n'en abreuve que trois, et les garde gelés."
},
"p7": {
"nom": "Midi Rouge",
"cout": 3,
"cible": 0,
"effet": "La meute se jette dans l'eau qui bout. Votre bête la plus faible perd 6 PV. 12 dégâts à tous les ennemis, qui brûlent 3 pendant 3 tours et deviennent Vulnérables 1. Pose Sang. Si Racine est posée (consommée) : chaque bête se sacrifie à la source, 15 dégâts à tous, ignorant la garde.",
"ops": [
[
"prixBete",
6
],
[
"deg",
"tous",
12
],
[
"brulure",
"tous",
3,
3
],
[
"vulnerable",
"tous",
1
],
[
"pose",
"Sang"
],
[
"reveil",
"Racine",
true,
[
[
"deg",
"tous",
15
],
[
"ignoreGarde"
]
]
]
],
"ambiance": "À midi, la quatrième bête boit à votre place, et toute la meute plonge dans l'eau qui bout."
},
"m1": {
"nom": "Pierres sèches de l'enclos",
"cout": 1,
"cible": 1,
"effet": "Vous et vos bêtes gagnez 8 de garde. La cible perd 1 d'attaque.",
"ops": [
[
"garde",
"allies",
8
],
[
"affaiblit",
"cible",
1
]
],
"ambiance": "Les bergers montent l'enclos rond pierre à pierre ; la porte de l'aube regarde l'est."
},
"m2": {
"nom": "Nuit sur l'oasis",
"cout": 1,
"cible": 1,
"effet": "Un veau de givre entre (8 PV, frappe 2). Vous gagnez 5 de garde ; la cible perd 1 d'attaque. Prix : le froid coûte 2 PV.",
"ops": [
[
"invoque",
"Veau de givre",
8,
2
],
[
"garde",
"heros",
5
],
[
"affaiblit",
"cible",
1
],
[
"prixPV",
2
]
],
"ambiance": "La nuit tombe sur Maulu ; un veau blanc de givre passe la porte, seul, et s'arrête à l'auge."
},
"m3": {
"nom": "Dalles bleues",
"cout": 1,
"cible": 0,
"effet": "Vous et vos bêtes gagnez 8 de garde. Tous les ennemis perdent 1 d'attaque. Si une bête est en jeu, la cible hésite.",
"ops": [
[
"garde",
"allies",
8
],
[
"affaiblit",
"tous",
1
],
[
"si",
"bete",
[
[
"hesite",
"cible"
]
]
]
],
"ambiance": "L'eau gèle en dalles bleues ; tant qu'une bête y boit, nul ne s'approche de l'auge sans glisser."
},
"m4": {
"nom": "Le premier bœuf",
"cout": 2,
"cible": 1,
"effet": "Un bœuf de givre entre (20 PV, frappe 4). Vous gagnez 5 de garde. Si une bête est en jeu, la cible hésite et perd 1 d'attaque. Prix : 2 PV.",
"ops": [
[
"invoque",
"Bœuf de givre",
20,
4
],
[
"garde",
"heros",
5
],
[
"si",
"bete",
[
[
"hesite",
"cible"
],
[
"affaiblit",
"cible",
1
]
]
],
[
"prixPV",
2
]
],
"ambiance": "Le premier bœuf de l'aube entre lent et lourd ; il a choisi sa place, il ne la rendra pas."
},
"m5": {
"nom": "Le deuxième bœuf",
"cout": 2,
"cible": 1,
"effet": "Un bœuf de givre entre (20 PV, frappe 4). Vous et vos bêtes gagnez 10 de garde. La cible hésite ; tous les ennemis perdent 1 d'attaque. Prix : 3 PV.",
"ops": [
[
"invoque",
"Bœuf de givre",
20,
4
],
[
"garde",
"allies",
10
],
[
"hesite",
"cible"
],
[
"affaiblit",
"tous",
1
],
[
"prixPV",
3
]
],
"ambiance": "Deux bœufs à l'auge, flanc contre flanc ; la source n'en abreuve que trois, et l'aube compte."
},
"m6": {
"nom": "La porte de l'aube se ferme",
"cout": 2,
"cible": 0,
"effet": "Vous et vos bêtes gagnez 15 de garde et vous soignez de 6. Tous les ennemis hésitent et perdent 2 d'attaque. Prix : 4 PV.",
"ops": [
[
"garde",
"allies",
15
],
[
"soin",
"allies",
6
],
[
"hesite",
"tous"
],
[
"affaiblit",
"tous",
2
],
[
"prixPV",
4
]
],
"ambiance": "La porte de l'aube se referme sur le troupeau ; dehors, la nuit gèle tout ce qui voulait boire."
},
"p1": {
"nom": "Midi monte",
"cout": 1,
"cible": 1,
"effet": "4 dégâts à la cible, qui brûle 2 pendant 3 tours.",
"ops": [
[
"deg",
"cible",
4
],
[
"brulure",
"cible",
2,
3
]
],
"ambiance": "Le soleil grimpe au-dessus de l'enclos ; la porte de midi chauffe avant même d'être ouverte."
},
"p2": {
"nom": "L'eau bout",
"cout": 1,
"cible": 1,
"effet": "Tous les ennemis brûlent 2 pendant 2 tours ; 4 dégâts à la cible. Si une bête est en jeu : 6 dégâts de plus. Prix : votre bête la plus faible perd 2 PV.",
"ops": [
[
"brulure",
"tous",
2,
2
],
[
"deg",
"cible",
4
],
[
"si",
"bete",
[
[
"deg",
"cible",
6
]
]
],
[
"prixBete",
2
]
],
"ambiance": "À midi, la source bout dans l'auge ; qui boit se brûle, qui attaque ébouillante."
},
"p3": {
"nom": "Le premier chacal",
"cout": 1,
"cible": 1,
"effet": "Un chacal de braise entre (4 PV, frappe 4). 6 dégâts à la cible, qui brûle 1 pendant 2 tours. Prix : votre bête la plus faible perd 2 PV.",
"ops": [
[
"invoque",
"Chacal de braise",
4,
4
],
[
"deg",
"cible",
6
],
[
"brulure",
"cible",
1,
2
],
[
"prixBete",
2
]
],
"ambiance": "Le premier chacal passe la porte de midi en courant ; il mord vite, il ne durera pas."
},
"p4": {
"nom": "La quatrième boit",
"cout": 1,
"cible": 1,
"effet": "3 dégâts ; la cible devient Vulnérable 1 et brûle 3 pendant 2 tours. Si une bête est en jeu : 14 dégâts de plus.",
"ops": [
[
"deg",
"cible",
3
],
[
"vulnerable",
"cible",
1
],
[
"brulure",
"cible",
3,
2
],
[
"si",
"bete",
[
[
"deg",
"cible",
14
]
]
]
],
"ambiance": "La source n'abreuve que trois bêtes ; la quatrième boit à votre place, et c'est vous qui brûlez."
},
"p5": {
"nom": "Meute de midi",
"cout": 2,
"cible": 0,
"effet": "Deux chacals de braise entrent (5 PV, frappent 5). 6 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 3 PV.",
"ops": [
[
"invoque",
"Chacal de braise",
5,
5
],
[
"invoque",
"Chacal de braise",
5,
5
],
[
"deg",
"tous",
6
],
[
"prixBete",
3
]
],
"ambiance": "La meute du soleil entre d'un coup ; l'enclos sent le poil roussi et la pierre chaude."
},
"p6": {
"nom": "L'auge se vide",
"cout": 2,
"cible": 1,
"effet": "8 dégâts à tous ; ils brûlent 3 pendant 2 tours ; 6 dégâts à la cible. Si une bête est en jeu, tous deviennent Vulnérables 1. Prix : votre bête la plus faible perd 4 PV.",
"ops": [
[
"deg",
"tous",
8
],
[
"brulure",
"tous",
3,
2
],
[
"deg",
"cible",
6
],
[
"si",
"bete",
[
[
"vulnerable",
"tous",
1
]
]
],
[
"prixBete",
4
]
],
"ambiance": "L'auge s'évapore jusqu'à la pierre ; les bêtes de midi n'ont plus rien à boire que la lumière."
}
},
"DON024": {
"m": {
"nom": "Le coup d'en dessous",
"cout": 1,
"cible": 1,
"effet": "(1+3L) dégâts à la cible ; elle hésite ce tour et perd 1 d'attaque pour le combat. Le froid du fond coûte 3 PV au héros.",
"ops": [
[
"deg",
"cible",
[
1,
3
]
],
[
"hesite",
"cible"
],
[
"affaiblit",
"cible",
1
],
[
"prixPV",
3
]
],
"ambiance": "Cent quarante coups jusqu'au glacier ; le cent quarante et unième remonte par la rame, et il est froid."
},
"p": {
"nom": "Le dormeur qui rame",
"cout": 2,
"cible": 0,
"effet": "Un dormeur aux bandelettes se lève de la glace sans s'éveiller : (8+4L) PV, frappe (2+L) à chaque tour. Piochez 1 carte.",
"ops": [
[
"invoque",
"Dormeur aux bandelettes",
[
8,
4
],
[
2,
1
]
],
[
"pioche",
1
]
],
"ambiance": "Il dort, les yeux peints ouverts, et il rame dans votre rythme ; ses bandelettes sont mouillées par-dessous."
},
"m7": {
"nom": "Les rames rentrées",
"cout": 2,
"cible": 0,
"effet": "Les rameurs cessent de ramer et le fjord gèle par le fond : 10 dégâts à tous, la garde ennemie tombe, tous les ennemis hésitent ce tour et perdent 2 d'attaque pour le combat. Le froid coûte 6 PV au héros. Pose Givre. Si Abîme est posée (consommée) : les dormeurs tirent vers le fond, tous les ennemis deviennent vulnérables 3 et subissent encore 10 dégâts.",
"ops": [
[
"deg",
"tous",
10
],
[
"briseGarde",
"tous"
],
[
"hesite",
"tous"
],
[
"affaiblit",
"tous",
2
],
[
"prixPV",
6
],
[
"pose",
"Givre"
],
[
"reveil",
"Abîme",
true,
[
[
"vulnerable",
"tous",
3
],
[
"deg",
"tous",
10
]
]
]
],
"ambiance": "On rentre les douze rames ; le fjord gèle par le fond, et les dormeurs, en bas, ouvrent la bouche."
},
"p7": {
"nom": "Le rêve des douze rames",
"cout": 3,
"cible": 0,
"effet": "Piochez 3 cartes, reprenez la dernière carte de votre défausse, ajoutez 4 mana Glace, +1 de capacité ce tour, et la prochaine carte de zone jouée ce tour a son effet doublé. Un rameur endormi se lève : 10 PV, frappe 4. Le rêve plaît aussi aux ennemis : chacun gagne 3 de garde. Pose Sceau. Si Racine est posée (consommée) : tout l'équipage se lève, un second rameur de 20 PV qui frappe 6, piochez 2 cartes, et vos alliés gagnent 15 de garde.",
"ops": [
[
"pioche",
3
],
[
"recup"
],
[
"mana",
"Glace",
4
],
[
"boost"
],
[
"echo"
],
[
"invoque",
"Rameur endormi",
10,
4
],
[
"ennemiGarde",
3
],
[
"pose",
"Sceau"
],
[
"reveil",
"Racine",
true,
[
[
"invoque",
"Équipage du rêve",
20,
6
],
[
"pioche",
2
],
[
"garde",
"allies",
15
]
]
]
],
"ambiance": "Les douze rameurs rêvent la même chose ; au réveil, il y a treize paires de mains sur les rames."
},
"m1": {
"nom": "Le compte des coups",
"cout": 1,
"cible": 1,
"effet": "4 dégâts à la cible ; elle hésite ce tour.",
"ops": [
[
"deg",
"cible",
4
],
[
"hesite",
"cible"
]
],
"ambiance": "Cent quarante coups jusqu'au glacier ; le pilote les compte à voix basse, et l'ennemi s'arrête pour écouter."
},
"m2": {
"nom": "Le coup de plus",
"cout": 1,
"cible": 1,
"effet": "9 dégâts à la cible, qui perd 1 d'attaque pour le combat. Si elle hésite : 6 dégâts de plus. Le froid coûte 3 PV au héros.",
"ops": [
[
"deg",
"cible",
9
],
[
"affaiblit",
"cible",
1
],
[
"si",
"hesite",
[
[
"deg",
"cible",
6
]
]
],
[
"prixPV",
3
]
],
"ambiance": "Le cent quarante et unième coup ne vient pas des rameurs ; il vient d'en dessous, dans le même rythme."
},
"m3": {
"nom": "Le froid dans les poumons",
"cout": 1,
"cible": 1,
"effet": "Tous les ennemis hésitent ce tour. 6 dégâts à la cible, qui perd 1 d'attaque pour le combat. Le héros perd 4 PV.",
"ops": [
[
"hesite",
"tous"
],
[
"deg",
"cible",
6
],
[
"affaiblit",
"cible",
1
],
[
"prixPV",
4
]
],
"ambiance": "Les rameurs se réveillent la poitrine lourde ; chacun crache un peu d'eau bleue, toujours à la même seconde."
},
"m4": {
"nom": "Les yeux peints ouverts",
"cout": 1,
"cible": 1,
"effet": "La cible devient vulnérable 3 et hésite ce tour. Si elle hésitait déjà : elle perd aussi 2 d'attaque pour le combat.",
"ops": [
[
"vulnerable",
"cible",
3
],
[
"hesite",
"cible"
],
[
"si",
"hesite",
[
[
"affaiblit",
"cible",
2
]
]
]
],
"ambiance": "Sous la coque, les yeux peints des embaumés suivent la barque ; la peinture est fraîche, ce matin."
},
"m5": {
"nom": "Les jarres scellées",
"cout": 2,
"cible": 1,
"effet": "14 dégâts à la cible ; sa garde tombe, elle hésite ce tour, perd 2 d'attaque et devient vulnérable 1. Si elle hésitait déjà : 10 dégâts de plus. Le héros perd 5 PV.",
"ops": [
[
"deg",
"cible",
14
],
[
"briseGarde",
"cible"
],
[
"hesite",
"cible"
],
[
"affaiblit",
"cible",
2
],
[
"vulnerable",
"cible",
1
],
[
"si",
"hesite",
[
[
"deg",
"cible",
10
]
]
],
[
"prixPV",
5
]
],
"ambiance": "Au bord de l'eau, les jarres à viscères sont toutes descellées, et le sceau de cire est à l'intérieur."
},
"m6": {
"nom": "La glace monte",
"cout": 2,
"cible": 1,
"effet": "8 dégâts à tous ; tous les ennemis perdent 1 d'attaque pour le combat ; la cible hésite. Si elle hésitait déjà : elle devient vulnérable 2 et chaque coup reçu par le héros renvoie 3 dégâts jusqu'au prochain tour. Le héros perd 4 PV.",
"ops": [
[
"deg",
"tous",
8
],
[
"affaiblit",
"tous",
1
],
[
"hesite",
"cible"
],
[
"si",
"hesite",
[
[
"vulnerable",
"cible",
2
],
[
"riposte",
3
]
]
],
[
"prixPV",
4
]
],
"ambiance": "Le fjord gèle vers le haut, d'une main par nuit ; ce matin, la glace touche les rames."
},
"p1": {
"nom": "Le même rêve",
"cout": 1,
"cible": 0,
"effet": "Piochez 2 cartes, puis défaussez 1 carte au hasard. Une main bandée sort de la glace : 4 PV, frappe 2.",
"ops": [
[
"pioche",
2
],
[
"prixDefausse",
1
],
[
"invoque",
"Main sous la glace",
4,
2
]
],
"ambiance": "Les douze rameurs racontent leur rêve au matin ; ils emploient les mêmes mots, dans le même ordre."
},
"p2": {
"nom": "La main sur la rame",
"cout": 1,
"cible": 0,
"effet": "Un rameur à demi levé vous rejoint : 10 PV, frappe 4. Le héros gagne 3 de garde. Si une bête était déjà en jeu : piochez 1 carte. Le rêve calme aussi l'ennemi : chacun gagne 2 de garde.",
"ops": [
[
"invoque",
"Rameur à demi levé",
10,
4
],
[
"garde",
"heros",
3
],
[
"si",
"bete",
[
[
"pioche",
1
]
]
],
[
"ennemiGarde",
2
]
],
"ambiance": "Une main froide se pose sur la vôtre, à la rame ; elle tire juste un peu plus fort."
},
"p3": {
"nom": "Le dormeur qui rame",
"cout": 2,
"cible": 0,
"effet": "Un dormeur aux bandelettes se lève sans s'éveiller : 20 PV, frappe 5. Piochez 1 carte et reprenez en main la dernière carte de votre défausse.",
"ops": [
[
"invoque",
"Dormeur aux bandelettes",
20,
5
],
[
"pioche",
1
],
[
"recup"
]
],
"ambiance": "Il dort, les yeux peints ouverts, et il rame dans votre rythme ; ses bandelettes sont mouillées par-dessous."
},
"p4": {
"nom": "Les bandelettes déroulées",
"cout": 1,
"cible": 0,
"effet": "Tous vos alliés gagnent 12 de garde ; jusqu'au prochain tour, chaque coup reçu par le héros renvoie 3 dégâts. Si une bête est en jeu : piochez 1 carte.",
"ops": [
[
"garde",
"allies",
12
],
[
"riposte",
3
],
[
"si",
"bete",
[
[
"pioche",
1
]
]
]
],
"ambiance": "Les dormeurs déroulent leurs bandelettes pour amarrer la barque ; dessous, la peau est neuve et rose."
},
"p5": {
"nom": "Deux dormeurs, un seul rêve",
"cout": 2,
"cible": 0,
"effet": "Deux dormeurs se lèvent : 14 PV, frappent 4 chacun. Piochez 1 carte ; la prochaine carte de zone jouée ce tour a son effet doublé. Chaque ennemi gagne 3 de garde.",
"ops": [
[
"invoque",
"Dormeur jumeau",
14,
4
],
[
"invoque",
"Dormeur jumeau",
14,
4
],
[
"pioche",
1
],
[
"echo"
],
[
"ennemiGarde",
3
]
],
"ambiance": "Deux dormeurs se lèvent ensemble et tournent la tête du même côté, avant le bruit."
},
"p6": {
"nom": "Le rêve tire les vivants",
"cout": 2,
"cible": 0,
"effet": "Reprenez en main la dernière carte de votre défausse, piochez 2 cartes, ajoutez 2 mana Glace. Un rameur endormi se lève : 18 PV, frappe 6. Si une bête était déjà en jeu : vos alliés gagnent 10 de garde. Le rêve garde sa part : votre bête la plus faible perd 4 PV.",
"ops": [
[
"recup"
],
[
"pioche",
2
],
[
"mana",
"Glace",
2
],
[
"invoque",
"Rameur endormi",
18,
6
],
[
"si",
"bete",
[
[
"garde",
"allies",
10
]
]
],
[
"prixBete",
4
]
],
"ambiance": "Les vivants dorment mieux sur la barque qu'à terre ; chaque matin, l'un d'eux a les doigts bleus."
}
},
"ASS012": {
"m": {
"nom": "Loi des Cendres",
"cout": 2,
"cible": 0,
"effet": "Chaque ennemi brûle de (2+L) au début de ses 2 prochains tours. Piochez 1 carte, puis défaussez 1 carte au hasard : votre bulletin brûle avec les autres.",
"ops": [
[
"brulure",
"tous",
[
2,
1
],
2
],
[
"pioche",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "On vote en brûlant la résine ; la cendre bouche les pores du cristal, et la pointe la plus proche refroidit."
},
"p": {
"nom": "Loi de Floraison",
"cout": 1,
"cible": 1,
"effet": "La calcite fleurit dans les plaies de la cible : elle devient vulnérable 2. Tous vos alliés se soignent de (2+2L). Piochez 1 carte. La floraison ne choisit pas : chaque ennemi se soigne de 2.",
"ops": [
[
"vulnerable",
"cible",
2
],
[
"soin",
"allies",
[
2,
2
]
],
[
"pioche",
1
],
[
"ennemiSoin",
2
]
],
"ambiance": "Versez l'eau du puits : la calcite fleurit dans la plaie, rose de gencive, et ne demande pas qui saigne."
},
"m7": {
"nom": "Le Siège de cendre",
"cout": 3,
"cible": 0,
"effet": "Le conseil vote à votre place : tous les ennemis hésitent ce tour, leur garde tombe, et chacun brûle de 4 au début de ses 3 prochains tours. La prochaine carte de zone jouée ce tour a son effet doublé. Pose Braise. Si Sceau est posée (consommée) : les lois écrites brûlent aussi, chaque ennemi brûle encore de 5 pendant 3 tours et devient vulnérable 1.",
"ops": [
[
"hesite",
"tous"
],
[
"briseGarde",
"tous"
],
[
"brulure",
"tous",
4,
3
],
[
"echo"
],
[
"pose",
"Braise"
],
[
"reveil",
"Sceau",
true,
[
[
"brulure",
"tous",
5,
3
],
[
"vulnerable",
"tous",
1
]
]
]
],
"ambiance": "Le dernier scrutin est sec : les bancs se figent, tièdes, et chacun reste assis là où la loi l'a trouvé."
},
"p7": {
"nom": "Le Conseil en fleur",
"cout": 2,
"cible": 1,
"effet": "Deux conseillers fleuris se lèvent de leurs sièges : 18 PV, frappent 5 chacun. Tous vos alliés se soignent de 10, la cible devient vulnérable 2, piochez 1 carte. La floraison se nourrit : votre bête la plus faible perd 6 PV. Pose Racine. Si Sang est posée (consommée) : le sang versé fait fleurir le troisième siège, un conseiller de 16 PV qui frappe 5 ; vos alliés se soignent de 10 et tous les ennemis deviennent vulnérables 2.",
"ops": [
[
"invoque",
"Conseiller fleuri",
18,
5
],
[
"invoque",
"Conseiller fleuri",
18,
5
],
[
"soin",
"allies",
10
],
[
"vulnerable",
"cible",
2
],
[
"pioche",
1
],
[
"prixBete",
6
],
[
"pose",
"Racine"
],
[
"reveil",
"Sang",
true,
[
[
"invoque",
"Troisième siège",
16,
5
],
[
"soin",
"allies",
10
],
[
"vulnerable",
"tous",
2
]
]
]
],
"ambiance": "Les sièges ont fleuri pendant la séance ; deux conseillers se lèvent, et les pétales poussent dans le sens des veines."
},
"m1": {
"nom": "Une pincée de résine",
"cout": 0,
"cible": 1,
"effet": "La cible brûle de 2 au début de ses 2 prochains tours.",
"ops": [
[
"brulure",
"cible",
2,
2
]
],
"ambiance": "Une pincée de résine sur la pointe de cristal ; la fumée descend au lieu de monter."
},
"m2": {
"nom": "Le bulletin noirci",
"cout": 1,
"cible": 0,
"effet": "Chaque ennemi brûle de 3 au début de ses 2 prochains tours. Piochez 1 carte, puis défaussez 1 carte au hasard.",
"ops": [
[
"brulure",
"tous",
3,
2
],
[
"pioche",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Le scribe compte les bulletins noircis ; il en compte un de plus que de conseillers assis."
},
"m3": {
"nom": "Les pores bouchés",
"cout": 1,
"cible": 1,
"effet": "La garde de tous les ennemis tombe. La cible brûle de 3 au début de ses 3 prochains tours. La cendre coûte 2 PV au héros.",
"ops": [
[
"briseGarde",
"tous"
],
[
"brulure",
"cible",
3,
3
],
[
"prixPV",
2
]
],
"ambiance": "La cendre colmate les pores du cristal ; la caverne cesse de suinter, et l'air devient sec à tousser."
},
"m4": {
"nom": "Loi des Cendres",
"cout": 2,
"cible": 0,
"effet": "Chaque ennemi brûle de 6 au début de ses 2 prochains tours. Piochez 1 carte, puis défaussez 1 carte au hasard : votre bulletin brûle avec les autres.",
"ops": [
[
"brulure",
"tous",
6,
2
],
[
"pioche",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "On vote en brûlant la résine ; la cendre bouche les pores du cristal, et la pointe la plus proche refroidit."
},
"m5": {
"nom": "Les bancs durcis",
"cout": 2,
"cible": 1,
"effet": "La cible hésite ce tour et brûle de 4 au début de ses 3 prochains tours. Tous les ennemis perdent 2 d'attaque pour le combat. Défaussez 1 carte au hasard.",
"ops": [
[
"hesite",
"cible"
],
[
"brulure",
"cible",
4,
3
],
[
"affaiblit",
"tous",
2
],
[
"prixDefausse",
1
]
],
"ambiance": "Les bancs ont cessé de pousser ; ceux qui s'y assoient se relèvent plus lentement, et plus tard."
},
"m6": {
"nom": "Le dernier bulletin",
"cout": 2,
"cible": 1,
"effet": "Chaque ennemi brûle de 5 au début de ses 3 prochains tours. La garde de la cible tombe. S'il ne reste qu'un ennemi : il brûle encore de 5 pendant 2 tours. Défaussez 2 cartes au hasard.",
"ops": [
[
"brulure",
"tous",
5,
3
],
[
"briseGarde",
"cible"
],
[
"si",
"seul",
[
[
"brulure",
"cible",
5,
2
]
]
],
[
"prixDefausse",
2
]
],
"ambiance": "Le dernier bulletin brûle seul sur la pointe ; personne ne se souvient de l'avoir déposé."
},
"p1": {
"nom": "L'eau du puits",
"cout": 0,
"cible": 1,
"effet": "La cible devient vulnérable 1. Vos alliés se soignent de 3. Chaque ennemi se soigne de 1.",
"ops": [
[
"vulnerable",
"cible",
1
],
[
"soin",
"allies",
3
],
[
"ennemiSoin",
1
]
],
"ambiance": "On verse l'eau du puits sur la pointe ; elle ne coule pas, elle est bue."
},
"p2": {
"nom": "Un pétale sur le banc",
"cout": 1,
"cible": 1,
"effet": "Une pousse de calcite rejoint le combat : 6 PV, frappe 2. Vos alliés se soignent de 4. La cible devient vulnérable 1.",
"ops": [
[
"invoque",
"Pousse de calcite",
6,
2
],
[
"soin",
"allies",
4
],
[
"vulnerable",
"cible",
1
]
],
"ambiance": "Sur le banc du doyen, un pétale de calcite rose, épais comme une gencive, a poussé pendant la séance."
},
"p3": {
"nom": "Loi de Floraison",
"cout": 1,
"cible": 1,
"effet": "La calcite fleurit dans les plaies de la cible : elle devient vulnérable 2. Tous vos alliés se soignent de 8. Piochez 1 carte. La floraison ne choisit pas : chaque ennemi se soigne de 2.",
"ops": [
[
"vulnerable",
"cible",
2
],
[
"soin",
"allies",
8
],
[
"pioche",
1
],
[
"ennemiSoin",
2
]
],
"ambiance": "Versez l'eau du puits : la calcite fleurit dans la plaie, rose de gencive, et ne demande pas qui saigne."
},
"p4": {
"nom": "Les ongles en fleur",
"cout": 1,
"cible": 1,
"effet": "8 dégâts à la cible ; le héros se soigne de la moitié. La cible devient vulnérable 2.",
"ops": [
[
"deg",
"cible",
8
],
[
"volVie"
],
[
"vulnerable",
"cible",
2
]
],
"ambiance": "Sous les ongles des conseillers, de petites corolles blanches ; elles griffent proprement, et se referment."
},
"p5": {
"nom": "La plaie qui fleurit",
"cout": 1,
"cible": 0,
"effet": "Tous les ennemis deviennent vulnérables 3. Si une bête est en jeu : vos alliés se soignent de 6. Chaque ennemi se soigne de 2.",
"ops": [
[
"vulnerable",
"tous",
3
],
[
"si",
"bete",
[
[
"soin",
"allies",
6
]
]
],
[
"ennemiSoin",
2
]
],
"ambiance": "La plaie se referme en corolle ; elle est plus belle que la peau, et plus fragile au coup suivant."
},
"p6": {
"nom": "Les sièges poussent",
"cout": 2,
"cible": 1,
"effet": "Un siège fleuri se lève : 20 PV, frappe 5. Vos alliés se soignent de 10. La cible devient vulnérable 2. Si une bête était déjà en jeu : piochez 1 carte. La floraison se nourrit : votre bête la plus faible perd 4 PV.",
"ops": [
[
"invoque",
"Siège fleuri",
20,
5
],
[
"soin",
"allies",
10
],
[
"vulnerable",
"cible",
2
],
[
"si",
"bete",
[
[
"pioche",
1
]
]
],
[
"prixBete",
4
]
],
"ambiance": "Les sièges ont grandi d'une main depuis hier ; l'un d'eux s'est levé avant que la séance ne commence."
}
}
},
"gerbes": {
"RES079": {
"nom": "Gerbe de Teoco : éclat du mur tourné",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte ; (1+2L) dégâts à la cible.",
"ops": [
[
"pioche",
1
],
[
"deg",
"cible",
[
1,
2
]
]
],
"ambiance": "Une lame d'obsidienne arrachée à l'enceinte, tranchant vers le dedans, comme le voulaient ceux qui levaient le tribut.",
"n1": {
"nom": "La Marche retournée",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte ; le héros gagne 4 de garde.",
"ops": [
[
"pioche",
1
],
[
"garde",
"heros",
4
]
],
"ambiance": "Une marche reposée à l'envers, glyphes de tribut contre la terre : on s'y abrite sans lire."
},
"n2": {
"nom": "La Meule en cuvette",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte, gagnez 1 mana Pierre ; le héros gagne 3 de garde.",
"ops": [
[
"pioche",
1
],
[
"mana",
"Pierre",
1
],
[
"garde",
"heros",
3
]
],
"ambiance": "Au fond de la meule usée, quelqu'un grava un compte de capes ; le maïs, lui, ne fut pas compté."
},
"n3": {
"nom": "Éclat du mur tourné",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte ; 7 dégâts à la cible.",
"ops": [
[
"pioche",
1
],
[
"deg",
"cible",
7
]
],
"ambiance": "Une lame d'obsidienne arrachée à l'enceinte, tranchant vers le dedans, comme le voulaient les collecteurs."
}
},
"RES212": {
"nom": "Gerbe de Gramir : orge du tribut",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte ; le héros se soigne de (1+2L).",
"ops": [
[
"pioche",
1
],
[
"soin",
"heros",
[
1,
2
]
]
],
"ambiance": "Une gerbe d'orge d'hiver, liée au crin de cheval ; le percepteur ne demanda jamais d'où venait le crin.",
"n1": {
"nom": "L'Anneau usé",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte et gagnez 1 mana Vent.",
"ops": [
[
"pioche",
1
],
[
"mana",
"Vent",
1
]
],
"ambiance": "L'anneau du relais brille d'usure ; officiellement, aucun cheval n'y fut attaché depuis la proclamation."
},
"n2": {
"nom": "La Proclamation clouée",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte ; la cible hésite ce tour.",
"ops": [
[
"pioche",
1
],
[
"hesite",
"cible"
]
],
"ambiance": "Lue à voix haute au poteau, la proclamation arrêtait tout le monde, le temps de la lecture."
},
"n3": {
"nom": "Orge du tribut",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte ; le héros se soigne de 7.",
"ops": [
[
"pioche",
1
],
[
"soin",
"heros",
7
]
],
"ambiance": "Une gerbe d'orge d'hiver liée au crin de cheval ; le percepteur ne demanda jamais d'où venait le crin."
}
},
"RES021": {
"nom": "Larme d'encens",
"cout": 0,
"cible": 0,
"effet": "Le héros se soigne de (2+2L) et gagne 1 mana de Sève.",
"ops": [
[
"soin",
"heros",
[
2,
2
]
],
[
"mana",
"Sève",
1
]
],
"ambiance": "Onze jours sur l'écorce, une larme ambrée décollée au couteau d'os : elle panse avant de partir en fumée.",
"n1": {
"nom": "Incision",
"cout": 0,
"cible": 0,
"effet": "Le héros se soigne de 4 et gagne 1 mana de Sève.",
"ops": [
[
"soin",
"heros",
4
],
[
"mana",
"Sève",
1
]
],
"ambiance": "Mekdes entaille l'écorce tordue ; la première larme perle au bord de la source."
},
"n2": {
"nom": "Panier tressé",
"cout": 0,
"cible": 0,
"effet": "Reprenez en main la dernière carte de la défausse ; le héros se soigne de 5.",
"ops": [
[
"recup"
],
[
"soin",
"heros",
5
]
],
"ambiance": "Onze jours de séchage, puis la larme ambrée tombe dans le panier, décollée au couteau d'os."
},
"n3": {
"nom": "Fumée bleue",
"cout": 0,
"cible": 1,
"effet": "La cible hésite ce tour, perdue dans la fumée ; le héros se soigne de 6.",
"ops": [
[
"hesite",
"cible"
],
[
"soin",
"heros",
6
]
],
"ambiance": "Dans un port lointain, la récolte de Mekdes part en fumée bleue, et tout le marché s'arrête."
}
},
"RES122": {
"nom": "Branche de corail",
"cout": 0,
"cible": 1,
"effet": "1 dégât à la cible ; jusqu'au prochain tour, chaque coup reçu par le héros renvoie (2+L) dégâts.",
"ops": [
[
"deg",
"cible",
1
],
[
"riposte",
[
2,
1
]
]
],
"ambiance": "Alvise pèse le corail brin par brin ; qui le vole s'écorche les mains sur les têtes rouges.",
"n1": {
"nom": "Tête de corail",
"cout": 0,
"cible": 1,
"effet": "1 dégât à la cible ; jusqu'au prochain tour, le héros renvoie 3 dégâts à chaque coup reçu.",
"ops": [
[
"deg",
"cible",
1
],
[
"riposte",
3
]
],
"ambiance": "Les barques accostent sur les têtes rouges ; qui y pose le pied sans regarder s'écorche jusqu'au sang."
},
"n2": {
"nom": "Filet lesté",
"cout": 0,
"cible": 1,
"effet": "2 dégâts à la cible, qui prend +1 dégât à chaque coup reçu. Piochez 1 carte.",
"ops": [
[
"deg",
"cible",
2
],
[
"vulnerable",
"cible",
1
],
[
"pioche",
1
]
],
"ambiance": "Les plongeurs remontent les branches rouges dans des filets lestés, avant que la marée ne revienne."
},
"n3": {
"nom": "Balance de laiton",
"cout": 0,
"cible": 1,
"effet": "2 dégâts à la cible ; le héros renvoie 3 dégâts à chaque coup reçu jusqu'au prochain tour ; gagnez 1 mana d'Eau.",
"ops": [
[
"deg",
"cible",
2
],
[
"riposte",
3
],
[
"mana",
"Eau",
1
]
],
"ambiance": "Alvise pèse le corail brin par brin ; à midi, l'eau remonte et la balance se referme."
}
},
"RES136": {
"nom": "Nid de salangane",
"cout": 0,
"cible": 0,
"effet": "Reprenez en main la dernière carte de votre défausse ; le héros gagne (1+3L) de garde.",
"ops": [
[
"recup"
],
[
"garde",
"heros",
[
1,
3
]
]
],
"ambiance": "Le vieux Vann redescend l'échelle de rotin avec le nid que vous aviez laissé tomber, sans un mot.",
"n1": {
"nom": "Échelle de rotin",
"cout": 0,
"cible": 0,
"effet": "Le héros gagne 4 de garde. Piochez 1 carte.",
"ops": [
[
"garde",
"heros",
4
],
[
"pioche",
1
]
],
"ambiance": "Une torche entre les dents, le cueilleur monte l'échelle de rotin dans le vent qui siffle."
},
"n2": {
"nom": "Nid de salangane",
"cout": 0,
"cible": 0,
"effet": "Le héros gagne 8 de garde ; s'il avait déjà de la garde, piochez 1 carte.",
"ops": [
[
"garde",
"heros",
8
],
[
"si",
"garde",
[
[
"pioche",
1
]
]
]
],
"ambiance": "Un panier de nids pèse moins qu'une poule et vaut une barque ; Vann le cale contre la paroi."
},
"n3": {
"nom": "Grotte de Vann",
"cout": 0,
"cible": 1,
"effet": "La cible hésite ce tour ; le héros gagne 3 de garde. Piochez 1 carte.",
"ops": [
[
"hesite",
"cible"
],
[
"garde",
"heros",
3
],
[
"pioche",
1
]
],
"ambiance": "Vann repart vers une grotte qu'il n'a montrée à personne ; le vent y couvre tous les bruits."
}
},
"RES227": {
"nom": "Poignée de Balo",
"cout": 0,
"cible": 1,
"effet": "La cible brûle (1+L) par tour pendant 2 tours. Une poignée dans le feu : +1 mana Feu.",
"ops": [
[
"brulure",
"cible",
[
1,
1
],
2
],
[
"mana",
"Feu",
1
]
],
"ambiance": "Une poignée dans la paume, une dans le feu : le sable de Balo mord deux fois avant la nuit.",
"n1": {
"nom": "Poignée de verre",
"cout": 0,
"cible": 1,
"effet": "La cible brûle 2 pendant 2 tours. +1 mana Feu.",
"ops": [
[
"brulure",
"cible",
2,
2
],
[
"mana",
"Feu",
1
]
],
"ambiance": "Une poignée dans la paume, une dans le feu : le sable de Balo mord deux fois."
},
"n2": {
"nom": "Tube de foudre",
"cout": 0,
"cible": 1,
"effet": "5 dégâts à la cible. Piochez 1 carte.",
"ops": [
[
"deg",
"cible",
5
],
[
"pioche",
1
]
],
"ambiance": "Là où la foudre est tombée, un tube de verre creux siffle quand on le lance."
},
"n3": {
"nom": "Dune avant la nuit",
"cout": 0,
"cible": 0,
"effet": "Tous les ennemis brûlent 2 pendant 2 tours. +1 mana Feu.",
"ops": [
[
"brulure",
"tous",
2,
2
],
[
"mana",
"Feu",
1
]
],
"ambiance": "La chaleur ne quitte pas la dune avant la nuit : elle mord tout ce qui y reste."
}
},
"RES": {
"nom": "Galette du premier grain",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte. Le héros se soigne de (1+2L).",
"ops": [
[
"pioche",
1
],
[
"soin",
"heros",
[
1,
2
]
]
],
"ambiance": "Galette du premier grain : l'esprit clair, la langue lente, et le compte des tiges juste, pour cette fois.",
"n1": {
"nom": "Grain bleu tombé",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte. Ajoutez 1 mana Vent.",
"ops": [
[
"pioche",
1
],
[
"mana",
"Vent",
1
]
],
"ambiance": "Les enfants ramassent le grain tombé entre deux îles ; il en tombe plus qu'on n'en a coupé."
},
"n2": {
"nom": "Galette du premier grain",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte. Le héros se soigne de 5.",
"ops": [
[
"pioche",
1
],
[
"soin",
"heros",
5
]
],
"ambiance": "Galette du premier grain : l'esprit clair, la langue lente, et le compte des tiges juste, pour cette fois."
},
"n3": {
"nom": "Le pont d'agave retendu",
"cout": 0,
"cible": 0,
"effet": "Le héros gagne 5 de garde. Piochez 1 carte. Ajoutez 1 mana Vent.",
"ops": [
[
"garde",
"heros",
5
],
[
"pioche",
1
],
[
"mana",
"Vent",
1
]
],
"ambiance": "On renoue en chantant l'île qui a dérivé ; la corde est plus courte qu'hier, et l'île plus proche."
}
},
"RES374": {
"nom": "Gerbe de résine",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte. Le héros gagne (3+2L) de garde : la résine se fige sur lui.",
"ops": [
[
"pioche",
1
],
[
"garde",
"heros",
[
3,
2
]
]
],
"ambiance": "La résine coule vers l'entaille et vous recouvre ; l'arbre ne sait pas qu'il n'y a plus d'entailleur.",
"n1": {
"nom": "Lichen de paume",
"cout": 0,
"cible": 0,
"effet": "Le héros gagne 4 de garde. Piochez 1 carte.",
"ops": [
[
"garde",
"heros",
4
],
[
"pioche",
1
]
],
"ambiance": "Un cercle de lichen de la largeur d'une paume ; il a mis trois siècles à couvrir votre main."
},
"n2": {
"nom": "Gerbe de résine",
"cout": 0,
"cible": 0,
"effet": "Le héros gagne 6 de garde : la résine se fige sur lui. Piochez 1 carte.",
"ops": [
[
"garde",
"heros",
6
],
[
"pioche",
1
]
],
"ambiance": "La résine coule vers l'entaille et vous recouvre ; l'arbre ne sait pas qu'il n'y a plus d'entailleur."
},
"n3": {
"nom": "La résine des quarante mille hivers",
"cout": 0,
"cible": 1,
"effet": "Le héros gagne 5 de garde. La cible, engluée, perd 1 d'attaque pour le combat. Piochez 1 carte.",
"ops": [
[
"garde",
"heros",
5
],
[
"affaiblit",
"cible",
1
],
[
"pioche",
1
]
],
"ambiance": "Dans la vieille résine, un insecte pris il y a quarante mille hivers ; ses pattes bougent encore, lentement."
}
},
"RES345": {
"nom": "Braise de bouse",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte. La cible brûle de (1+L) au début de ses 2 prochains tours.",
"ops": [
[
"pioche",
1
],
[
"brulure",
"cible",
[
1,
1
],
2
]
],
"ambiance": "Une galette de bouse sèche, prise à la paroi, encore tiède du flanc du canyon qui respire.",
"n1": {
"nom": "Galette de bouse",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte. La cible brûle de 1 au début de ses 3 prochains tours.",
"ops": [
[
"pioche",
1
],
[
"brulure",
"cible",
1,
3
]
],
"ambiance": "Une galette de bouse sèche, prise à la paroi, encore tiède du flanc du canyon."
},
"n2": {
"nom": "La pierre tiède",
"cout": 0,
"cible": 1,
"effet": "Le héros gagne 3 de garde. La cible brûle de 2 au début de ses 2 prochains tours. Ajoutez 1 mana Feu.",
"ops": [
[
"garde",
"heros",
3
],
[
"brulure",
"cible",
2,
2
],
[
"mana",
"Feu",
1
]
],
"ambiance": "Les vaches se couchent contre la pierre rouge ; au matin, la pierre est plus chaude que les vaches."
},
"n3": {
"nom": "Le flanc qui se soulève",
"cout": 0,
"cible": 0,
"effet": "3 dégâts à tous. Piochez 1 carte.",
"ops": [
[
"deg",
"tous",
3
],
[
"pioche",
1
]
],
"ambiance": "La nuit, le fond du canyon se soulève d'une hauteur de main, et les pierres roulent vers vous."
}
}
},
"secrets": {
"L'écorce pliée en huit": {
"nom": "L'écorce pliée en huit",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Cette carte s'exile : on ne la déplie pas.",
"ops": [
[
"pioche",
1
],
[
"echo"
],
[
"exil"
]
],
"ambiance": "Onze hivers de raclage, et une seule écorce gardée ; ce qu'elle disait, Ouliana l'emporta sans savoir le lire."
},
"Le racloir d'Ouliana": {
"nom": "Le racloir d'Ouliana",
"cout": 0,
"cible": 0,
"effet": "Défaussez 1 carte au hasard, piochez 2 cartes et gagnez 1 mana Glace.",
"ops": [
[
"prixDefausse",
1
],
[
"pioche",
2
],
[
"mana",
"Glace",
1
]
],
"ambiance": "Un tesson encore blanc d'aubier : trois mesures de seigle la saison pour gratter la mémoire des autres."
},
"Le nom du frère noyé": {
"nom": "Le nom du frère noyé",
"cout": 1,
"cible": 1,
"effet": "Prononcez le nom : la cible hésite ce tour et perd 1 d'attaque pour le combat.",
"ops": [
[
"hesite",
"cible"
],
[
"affaiblit",
"cible",
1
]
],
"ambiance": "La racleuse oublia une écorce sous les copeaux ; le nom y était, et la main de l'assassin s'arrêta."
},
"La cave sous la palissade": {
"nom": "La cave sous la palissade",
"cout": 0,
"cible": 0,
"effet": "Reprenez en main la dernière carte de votre défausse et gagnez 1 mana Glace.",
"ops": [
[
"recup"
],
[
"mana",
"Glace",
1
]
],
"ambiance": "Sous les rondins effacés, la terre gardait ce que la ville avait jeté, en couches, comme un registre."
},
"La généalogie d'origine": {
"nom": "La généalogie d'origine",
"cout": 1,
"cible": 0,
"effet": "Piochez 2 cartes.",
"ops": [
[
"pioche",
2
]
],
"ambiance": "Sur le balcon rebâti, les noms reprirent leur ordre ; le kniaz y figurait, mais en cadet, et après son frère."
},
"La niche aux lettres": {
"nom": "La niche aux lettres",
"cout": 1,
"cible": 0,
"effet": "La phrase s'arrête ici : tous les ennemis hésitent ce tour.",
"ops": [
[
"hesite",
"tous"
]
],
"ambiance": "Les écorces cousues le long du rempart formaient une accusation ; le dernier mot manquait, et tout le monde se tut pour l'attendre."
},
"Une lettre dans la boue": {
"nom": "Une lettre dans la boue",
"cout": 0,
"cible": 0,
"effet": "Piochez 1 carte et gagnez 2 mana Glace. Cette carte s'exile.",
"ops": [
[
"pioche",
1
],
[
"mana",
"Glace",
2
],
[
"exil"
]
],
"ambiance": "Une écorce blanche sur un toit d'isba, ni grattée ni recopiée : la seule page de la ville sans propriétaire."
},
"Le contrat peint au minium": {
"nom": "Contrat au minium",
"cout": 0,
"cible": 0,
"effet": "Un échange en règle : défaussez 1 carte au hasard, piochez 2 cartes et gagnez 1 mana d'Eau.",
"ops": [
[
"prixDefausse",
1
],
[
"pioche",
2
],
[
"mana",
"Eau",
1
]
],
"ambiance": "Peint sur le pilotis : la ruche éclaire le chenal, l'Exarchat nourrit les larves. Chacun donne, chacun reçoit."
},
"Quatre langues de comptoir": {
"nom": "Quatre langues",
"cout": 1,
"cible": 1,
"effet": "On marchande dans la langue de la cible : elle hésite ce tour. Piochez 1 carte.",
"ops": [
[
"hesite",
"cible"
],
[
"pioche",
1
]
],
"ambiance": "Au troisième étage du comptoir, quatre langues se mêlent ; qui parle seulement la sienne a déjà perdu."
},
"Larve-de-Cuve": {
"nom": "Ballot qui luit",
"cout": 0,
"cible": 1,
"effet": "La cible prend la lueur de la larve : +2 dégâts à chaque coup qu'elle reçoit, jusqu'à la fin du combat. La carte s'exile.",
"ops": [
[
"vulnerable",
"cible",
2
],
[
"exil"
]
],
"ambiance": "Le ballot volé luit sous sa bâche ; qui le porte devient la seule lumière du chenal, et la cible."
},
"Le signal des passeurs": {
"nom": "Éclats des passeurs",
"cout": 1,
"cible": 0,
"effet": "Un éclat bref, un éclat long : piochez 1 carte, et la prochaine carte de zone jouée ce tour a son effet doublé.",
"ops": [
[
"pioche",
1
],
[
"echo"
]
],
"ambiance": "Deux éclats sur la canopée prune, et les passeurs savent déjà quelle barque laisser filer."
},
"Le baril de saumure": {
"nom": "Baril crevé",
"cout": 1,
"cible": 1,
"effet": "On crève le baril : la saumure ronge les bâches, la garde de tous les ennemis tombe et la cible perd 1 d'attaque pour le combat.",
"ops": [
[
"briseGarde",
"tous"
],
[
"affaiblit",
"cible",
1
]
],
"ambiance": "Anthémios salait la chair volée dans ces barils ; crevez-les, la saumure ronge ses propres bâches."
},
"La nasse de Zoé": {
"nom": "La nasse de Zoé",
"cout": 0,
"cible": 0,
"effet": "Ce que le chenal a pris remonte : reprenez en main la dernière carte de votre défausse et gagnez 1 mana d'Eau.",
"ops": [
[
"recup"
],
[
"mana",
"Eau",
1
]
],
"ambiance": "Zoé a gardé ses nasses ; ce que le chenal emporte à marée haute, elle le repêche à marée basse."
},
"Le sceau de jade céladon": {
"nom": "Le Sceau imprimé",
"cout": 1,
"cible": 0,
"effet": "Posez la résonance Sceau ; défaussez 1 carte au hasard. Cette carte quitte le combat.",
"ops": [
[
"pose",
"Sceau"
],
[
"prixDefausse",
1
],
[
"exil"
]
],
"ambiance": "Gravé à l'envers, il ne se lit qu'imprimé : une fois posé, toutes les lois en dépendent."
},
"L'Édit que personne n'a gravé": {
"nom": "L'Édit blanc",
"cout": 0,
"cible": 0,
"effet": "Reprenez en main la dernière carte défaussée, puis piochez 1 carte.",
"ops": [
[
"recup"
],
[
"pioche",
1
]
],
"ambiance": "Une tablette vierge au-dessus de la fontaine : ce qu'aucun Édit n'interdit, vous pouvez le reprendre."
},
"Une main tamponnée": {
"nom": "Main tamponnée",
"cout": 0,
"cible": 1,
"effet": "La cible devient Vulnérable 2 jusqu'à la fin du combat.",
"ops": [
[
"vulnerable",
"cible",
2
]
],
"ambiance": "L'encre vermillon ne part pas : chaque inspecteur du puits sait désormais qui frapper."
},
"Panier de fleurs de soufre": {
"nom": "Panier de soufre",
"cout": 0,
"cible": 0,
"effet": "+2 mana Feu (mana de combat).",
"ops": [
[
"mana",
"Feu",
2
]
],
"ambiance": "Les soufriers l'ont laissé sur la pagode de guet : jaune, sec, et prêt à prendre feu."
},
"La dalle qui ne ment pas": {
"nom": "La dalle qui ne ment pas",
"cout": 1,
"cible": 1,
"effet": "La cible hésite ce tour. Piochez 1 carte.",
"ops": [
[
"hesite",
"cible"
],
[
"pioche",
1
]
],
"ambiance": "Parmi tous ces verts presque pareils, une seule dalle luit un peu plus : vous y posez le pied."
},
"La cangue qui flotte": {
"nom": "La cangue qui flotte",
"cout": 1,
"cible": 0,
"effet": "Reprenez en main la dernière carte défaussée. La prochaine carte de zone jouée ce tour a son effet doublé.",
"ops": [
[
"recup"
],
[
"echo"
]
],
"ambiance": "Ouverte, la cangue sert de radeau : elle ramène à la rive ce que la lave allait garder."
},
"La cloche misée": {
"nom": "La cloche misée",
"cout": 1,
"cible": 0,
"effet": "Tous les ennemis hésitent ce tour : ils attendent un signal qui ne sonnera pas. Cette carte quitte le combat.",
"ops": [
[
"hesite",
"tous"
],
[
"exil"
]
],
"ambiance": "L'abbesse l'a perdue au brelan : depuis, toute l'assemblée attend un coup qui ne vient jamais."
},
"Lot scellé numéro treize": {
"nom": "Lot scellé numéro treize",
"cout": 0,
"cible": 0,
"effet": "Piochez 2 cartes et gagnez 1 mana Glace. Prix : défaussez 1 carte au hasard.",
"ops": [
[
"pioche",
2
],
[
"mana",
"Glace",
1
],
[
"prixDefausse",
1
]
],
"ambiance": "Sous le feutre de mousse givrée, le lot treize : on l'ouvre, et la Maison garde un morceau."
},
"Le treizième carton": {
"nom": "Le carton sans trou",
"cout": 1,
"cible": 0,
"effet": "Posez la résonance Abîme ; défaussez 1 carte au hasard. Cette carte quitte le combat.",
"ops": [
[
"pose",
"Abîme"
],
[
"prixDefausse",
1
],
[
"exil"
]
],
"ambiance": "Aucun trou, aucune note : glissé dans l'orgue, il ouvre un silence où tout peut tomber."
},
"Le brelan de l'abbesse": {
"nom": "Le brelan de l'abbesse",
"cout": 0,
"cible": 0,
"effet": "Piochez 3 cartes, puis défaussez-en 2 au hasard.",
"ops": [
[
"pioche",
3
],
[
"prixDefausse",
2
]
],
"ambiance": "Trois dés sur l'autel, la même face : la main qui a misé la cloche, rejouée par la vôtre."
},
"La gargouille qui compte": {
"nom": "La gargouille qui compte",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte. La cible devient Vulnérable 1.",
"ops": [
[
"pioche",
1
],
[
"vulnerable",
"cible",
1
]
],
"ambiance": "Elle compte les mises depuis l'égout du toit, et elle a déjà vu où l'adversaire flanche."
},
"La baguette entaillée": {
"nom": "Une entaille de plus",
"cout": 0,
"cible": 1,
"effet": "Piochez 1 carte. La cible devient vulnérable 1 : on l'a comptée une fois de trop.",
"ops": [
[
"pioche",
1
],
[
"vulnerable",
"cible",
1
]
],
"ambiance": "Les vieux recomptent les tiges : une entaille de plus que de cultivateurs, et l'entaille en trop porte votre ennemi."
},
"Bouture de l'Île-Mère": {
"nom": "Bouture de l'Île-Mère",
"cout": 1,
"cible": 0,
"effet": "Ajoutez 1 mana Vent. La prochaine carte de zone jouée ce tour a son effet doublé.",
"ops": [
[
"mana",
"Vent",
1
],
[
"echo"
]
],
"ambiance": "Une bouture de la taille d'une galette, qui grossit d'une main par jour dans votre paume fermée."
},
"Galle de Tezcamixtli": {
"nom": "La ronde des galles",
"cout": 1,
"cible": 0,
"effet": "La galle éclate : tous les ennemis dansent et hésitent ce tour. Défaussez 1 carte au hasard. Exil.",
"ops": [
[
"hesite",
"tous"
],
[
"prixDefausse",
1
],
[
"exil"
]
],
"ambiance": "Une galle brune éclate en spores ; tous dansent à rebours jusqu'au soir, et une carte se perd dans la ronde."
},
"La danse à rebours": {
"nom": "L'île qui revient",
"cout": 0,
"cible": 0,
"effet": "Reprenez en main la dernière carte de votre défausse. Ajoutez 1 mana Vent.",
"ops": [
[
"recup"
],
[
"mana",
"Vent",
1
]
],
"ambiance": "L'île revient porter ce qu'elle avait emporté ; elle remonte contre le vent, à la vitesse d'un pas."
},
"Le panier du cultivateur manquant": {
"nom": "Le panier encore plein",
"cout": 1,
"cible": 0,
"effet": "Piochez 2 cartes.",
"ops": [
[
"pioche",
2
]
],
"ambiance": "Suspendu sous l'île du nord, le panier est encore plein ; les épis ont continué de mûrir sans lui."
},
"Le rang de plus": {
"nom": "Le rang que personne n'a semé",
"cout": 0,
"cible": 1,
"effet": "La cible perd 1 d'attaque pour le combat. Piochez 1 carte.",
"ops": [
[
"affaiblit",
"cible",
1
],
[
"pioche",
1
]
],
"ambiance": "Un rang de maïs que personne n'a semé ; à la lanterne, il dépasse les autres d'une tête exactement."
},
"La crypte de racines": {
"nom": "Les sandales dans les racines",
"cout": 1,
"cible": 0,
"effet": "Pose la résonance Abîme pour le combat (réveil à moitié). Prix : défaussez 1 carte. Exil.",
"ops": [
[
"pose",
"Abîme"
],
[
"prixDefausse",
1
],
[
"exil"
]
],
"ambiance": "Au bas de la passerelle, deux sandales posées bien droites ; les racines ont poussé dans les lanières."
}
}
};
