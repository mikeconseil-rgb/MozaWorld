import json
s=open('modele.html').read(); c=open('carte.json').read()
open('index.html','w').write(s.replace('/*CARTE*/null',c))
