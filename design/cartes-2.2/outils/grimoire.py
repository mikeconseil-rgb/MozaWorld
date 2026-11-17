import json,re
C=json.load(open('recap/cartes-2.2.json'))
R=open('regles-avancees.md').read()
at=[]
for l in R.split('\n'):
  m=re.match(r'\| (Feu|Glace|Eau|Sève|Pierre|Vent) \| \*\*(.+?)\*\* \| (.+?) \|$',l)
  if m:
    mana,nom,eff=m.groups();t=eff.lower();mec=[k for k,w in [('Brûlure','brûlure'),('Dégâts','dégât'),('Contrôle','hésite'),('Affaiblissement',"d'attaque"),('Pioche','pioch'),('Soin','soign'),('Récupération','revient en main'),('Invocation','bête'),('Garde','garde'),('Combo','racine'),('Prix','prix'),('Coût','coûte'),('Rétention','gardée en main'),('Information','intention')] if w in t]
    at.append(dict(nom=nom,zone='Ressource de type '+mana+' au niveau 3',tuile='Atout',mana=mana,pole='',polenom='Lié par une route',cout='·',e1=eff,genre='Atout (bonus lié)',mec=mec,combo={'pose':'Racine'} if nom=='Greffe' else {}))
cartes=C+at
for c in cartes:
  if c['genre']=='Carte de pôle': c['e7lab']=''
D={'version':'Version télé 2.2 · écrite par les quatre conteurs, relue par le critique et le game design (229 cartes et 18 atouts)',
'lede':"Toutes les cartes du jeu avec leurs tags. Chaque zone à pôles a une carte par pôle (paliers 1 à 6) et une forme du palier 7 qui change de nature et crée des combos par les résonances. Chaque Ressource a sa Gerbe, chaque secret sa carte utilitaire, et les atouts sont les bonus qu'une route greffe sur une carte. Les nombres « (2+L) » grandissent avec le palier L.",
'pied':'Sources : cartes-2.2/conteur_A à D.md, regles-avancees.md, critique-2.2.md. Une carte différente à chaque palier pour les 12 zones à pôles (7 par pôle) et 3 Gerbes par Ressource. Corrections du critique appliquées (critique-2.2.md).',
'legende':[
 ['Le tour','Capacité de dépense = numéro du tour. Chaque carte se paie dans la réserve de son type de mana ; sinon en gris, à −25 %. Main de 5, pioche jusqu’à 5 à chaque tour. Paquet de départ : 5 communes (3 Coup de bâton, 2 Pas de côté), sans carte de pioche.'],
 ['Pôles et paliers','Chaque palier donne une carte différente : 7 par pôle, qui racontent l’histoire du pôle. Une carte dort hors du paquet de combat si la zone redescend sous son palier ou change de pôle. Aucun pôle n’est le bien ; deux cartes sur trois ont un prix (PV, défausse, ennemis renforcés, exil).'],
 ['Palier 7 et résonances','À ±7 la carte change de nature. Elle pose une résonance (Braise, Givre, Sang, Racine, Sceau, Abîme) qui reste tout le combat, et en réveille une autre pour un bonus énorme : les formes du palier 7 s’enchaînent en combos.'],
 ['Secrets','Chaque secret doré trouvé donne une carte utilitaire, payée en gris : elle agit sur les cartes, le mana ou les intentions, jamais de dégâts, soin ni garde directs.'],
 ['Atouts','Une Ressource au niveau 3 offre trois atouts de son mana ; on en choisit un. Une route vers une autre tuile greffe l’atout sur la carte de cette tuile. Types différents cumulés, même type : le meilleur. Route coupée : atout perdu.'],
 ['Trois combos à essayer','Le Grand Gel : Les rames rentrées, puis Le Visage raboté, puis Le Scrutin sans visage. La Meute de midi : Le Puits ouvert, puis Les Voix qui reviennent, puis Midi Rouge. Le Prix de la crue : Le Mutisme de la Faille, puis L’Ensablement, puis Le Neuvième Édit.'],
 ['Garde-fous','Le mana gagné par une carte disparaît à la fin du combat (2 au plus par carte). L’écho ne double jamais un réveil. Une récupération ne reprend pas une carte qui récupère, 2 par tour au plus. Une résonance posée par un secret ne réveille qu’à moitié.'],
 ['Nouvelles mécaniques','Brûlure (dégâts au début des tours ennemis), Marque (+n dégâts à chaque coup), Riposte, Vol de vie, Écho (prochaine carte de zone doublée), Récupération, Exil, Conditions.']],
'cartes':cartes}
json.dump(D,open('recap/donnees-2.2.json','w'),ensure_ascii=False)
print(len(cartes))
