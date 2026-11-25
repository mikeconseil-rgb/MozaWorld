# Sceaux de faction (25 nov. 2026)

Choix de l'utilisateur : « 2,3 et 4 » (idée 4 : tenir 3, 6 puis 10 zones d'une même faction donne une carte de faction unique). Données : `sceaux.json` (même format que les cartes de zone : nom, coût, cible, effet, ops, ambiance). **Pas encore dans le jeu** : intégration après le 28 nov. (gel), avec une relecture du critique littéraire v3.

## Règles proposées (provisoires)

- Tenir 3 zones d'une faction (activées) donne son Sceau I, 6 zones son Sceau II, 10 zones son Sceau III. La carte entre dans le paquet comme une carte de palier, une seule fois par partie, et se perd à la mort comme le reste.
- Une carte de sceau se paie avec le mana de sa faction (gris possible, à −25 %).
- L'Ombre n'a pas de zones à tenir : ses sceaux viennent des hordes brisées (3, 6, 10).
- Une carte de sceau a la faction de son mana pour l'avantage et l'alliance (voir `design/plateau/TACTIQUE.md`).

## Feu (zones des Braisiers tenues)

- **I. Le Soufflet du camp** (3, coût 1) : 6 dégâts à la cible, qui brûle 2 pendant 2 tours.  
  _Au camp, on ne range jamais le soufflet : la forge suit l'armée, et l'armée suit la forge._
- **II. Marteaux en cadence** (6, coût 2) : 4 dégâts à tous les ennemis. Si la cible brûlait déjà, elle prend 4 dégâts de plus.  
  _Cent marteaux frappent ensemble, et l'ennemi entend venir l'enclume avant l'armée._
- **III. La Coulée des Braisiers** (10, coût 3) : 10 dégâts à tous les ennemis, qui brûlent 3 pendant 3 tours. Pose Braise. Prix : le héros perd 3 PV.  
  _Les Braisiers ouvrent le flanc du volcan et laissent la montagne finir la guerre à leur place._

## Pierre (zones de l'Ordre du Socle tenues)

- **I. Première pierre** (3, coût 1) : Le héros gagne 6 de garde. Jusqu'au prochain tour, chaque coup reçu renvoie 2 dégâts.  
  _On pose la première pierre en public, devant témoins : ce qui est bâti ainsi ne se défait plus._
- **II. Le Mur de l'édit** (6, coût 2) : Invoque un Mur de l'édit (14 PV, 0 attaque). Vous et vos bêtes gagnez 4 de garde.  
  _L'édit tient en une ligne gravée sur le mur. Le mur, lui, tient en mille pierres._
- **III. La Charte du Socle** (10, coût 3) : Vous et vos bêtes gagnez 10 de garde. Tous les ennemis perdent 2 d'attaque pour le combat. Pose Sceau.  
  _Quand la Charte est lue, même l'ennemi baisse la voix : on ne frappe pas fort dans une salle d'audience._

## Vent (zones de la Compagnie des Vents tenues)

- **I. Éclaireur en avant** (3, coût 0) : Piochez 2 cartes. La prochaine carte reprise de la défausse est gratuite.  
  _L'éclaireur revient toujours avant la tempête, et c'est à son visage qu'on sait s'il faut fuir._
- **II. Changer de piste** (6, coût 1) : Tous les ennemis hésitent. Un ennemi qui vole par-dessus frappera la Garde. Piochez 1 carte.  
  _La Compagnie ne se bat pas sur le terrain choisi par l'ennemi : elle lève le camp, et l'ennemi se retrouve seul._
- **III. La Grande Transhumance** (10, coût 2) : Piochez 3 cartes et gagnez 1 mana de plus ce tour. La prochaine carte de zone de ce tour compte double.  
  _Une fois par génération, toute la Compagnie se met en route. Sur son passage, les frontières se déplacent._

## Glace (zones de la Veille Blanche tenues)

- **I. Le Serment du guet** (3, coût 1) : La cible hésite et perd sa garde. Le héros gagne 4 de garde.  
  _La Veille Blanche jure une seule chose : ne pas dormir. Ceux qui l'attaquent de nuit l'apprennent vite._
- **II. Givre sur les lances** (6, coût 2) : Tous les ennemis perdent 1 d'attaque pour le combat et subissent 4 dégâts. Pose Givre.  
  _Au matin, les lances de l'ennemi sont soudées à leurs fourreaux par le gel. Il faut une heure pour les dégager._
- **III. La Longue Nuit blanche** (10, coût 3) : Tous les ennemis hésitent, perdent leur garde et deviennent vulnérables 3. Si Givre est posé : 8 dégâts à tous.  
  _Pendant la Longue Nuit, la Veille ne dort pas. L'ennemi, lui, finit toujours par s'endormir._

## Eau (zones de la Ligue des Marées tenues)

- **I. Le Contrat de fret** (3, coût 0) : Gagnez 1 mana d'Eau pour ce combat. Piochez 1 carte.  
  _Un contrat de la Ligue se signe sur le pont, à marée haute : à marée basse, le prix aurait changé._
- **II. Retour de cargaison** (6, coût 1) : Reprenez en main la dernière carte de votre défausse. Le héros récupère 5 PV.  
  _La Ligue ne perd jamais une cargaison. Elle la retrouve, parfois sur un autre navire, parfois chez un autre client._
- **III. La Grande Marée** (10, coût 3) : 8 dégâts à tous les ennemis. Gagnez 2 mana d'Eau pour ce combat. Vous et vos bêtes récupérez 6 PV.  
  _Quand la Ligue ouvre les écluses, la mer rentre dans le port, et l'ennemi en ressort sans ses bateaux._

## Sève (zones du Cercle des Racines tenues)

- **I. Le Petit de la portée** (3, coût 1) : Invoque un Louveteau du Cercle (7 PV, 2 attaque). Le héros récupère 3 PV.  
  _Au Cercle, chaque enfant reçoit une bête née la même saison. Ils grandissent ensemble, et se battent ensemble._
- **II. Le Rappel de la meute** (6, coût 2) : Invoque deux Loups des racines (8 PV, 3 attaque). Si vous aviez déjà une bête : vos bêtes récupèrent 4 PV.  
  _Un sifflement long, puis deux courts. Dans toute la jungle, les loups du Cercle relèvent la tête._
- **III. La Mère des Racines** (10, coût 3) : Invoque la Mère des Racines (20 PV, 5 attaque). Vous et vos bêtes récupérez 6 PV. Pose Racine.  
  _On ne l'appelle qu'en dernier recours. Elle est plus vieille que le Cercle, et le Cercle le sait._

## Ombre (hordes brisées)

- **I. Ce que la horde a laissé** (3, coût 1) : La cible devient vulnérable 2 et subit 5 dégâts. Vol de vie.  
  _Après le passage d'une horde, il reste une odeur, et ceux qui la suivent finissent par lui ressembler._
- **II. Le Pacte du sauvage** (6, coût 1) : Gagnez 1 mana de plus ce tour et piochez 2 cartes. Prix : le héros perd 4 PV.  
  _Le sauvage ne vend rien. Il prête, et il revient toujours chercher son dû._
- **III. La Nuit sans sceau** (10, coût 2) : 14 dégâts à tous les ennemis, en ignorant la garde. Pose Abîme. Prix : le héros perd 6 PV ; exil.  
  _Il existe une nuit où aucune faction ne monte la garde. L'Ombre l'attend depuis le premier jour._
