import json,csv,random,collections
random.seed(17)
T=json.load(open('c_12.json'))
R=list(csv.DictReader(open('/mnt/project-files/etape2/sous-zones-986-v2.csv',encoding='utf-8-sig'),delimiter=';'))
TY={'decagone':('Citadelle','CIT'),'pentagone':('Donjon','DON'),'hexagone':('Ressource','RES'),'papillon':('Antre','ANT'),'losange':('Assemblée','MAR')}
SYL={'Slave':['vo','gra','mir','sla','vet','ko','ro','dno','bor'],'Nordique':['skal','fjor','hel','vik','gar','sund','ulf'],'Celte':['dun','bre','ca','ross','lin','mor'],
'Perse':['shah','dar','pa','sar','ab','zan','mi'],'Aztèque':['tlal','co','tep','ix','atl','mal','teo'],'Maya':['ka','bal','tun','ix','chi','pak'],'Inca':['qu','pa','cha','ma','yu','wasi'],
'Japonaise féodale':['ka','mi','ya','shi','ro','na','to'],'Chinoise impériale':['lan','zhou','an','ling','shan','xi'],'Khmère':['ang','kor','pra','sre','tha','ban'],
'Égyptienne':['ka','ne','fer','tep','ra','mes'],'Grecque':['the','los','ar','ka','do','nia'],'Romaine':['val','cas','tra','um','sar','ia'],'Byzantine':['kon','sta','ni','ka','the','os'],
'Gothique':['wal','burg','ster','hel','gra','mund'],'Vénitienne':['san','ma','rea','zo','do','ce'],'Andalouse':['al','ham','bra','gra','ce','ra'],'Moghole':['jah','na','ba','pur','ga','ra'],
'Mongole':['khan','or','gol','bat','ul','tai'],'Zouloue':['ulu','nde','lo','ba','zi','ma'],'Éthiopienne':['ak','sum','la','be','go','ra'],'Mésopotamienne':['ur','uk','ba','bel','ni','nur'],
'Inuit':['ik','alu','nu','qa','tuk','si'],'Polynésienne':['mo','ana','ta','hi','po','ra']}
def nom(cult):
  s=SYL.get(cult,['ka','ra','to']);a,b=random.sample(s,2);n=(a+b).capitalize();return n
ART={'Volcan':'Le Volcan','Mangrove':'La Mangrove','Archipel':"L'Archipel",'Steppe':'La Steppe','Jungle':'La Jungle','Désert de sable':'Les Dunes','Falaise côtière':'Les Falaises',
'Haute montagne':'Les Cimes','Cité en ruines':'Les Ruines','Forêt boréale':'La Taïga','Forêt de champignons géants':'La Futaie de champignons','Glacier':'Le Glacier','Récif':'Le Récif',
'Marais':'Le Marais','Oasis':"L'Oasis",'Canyon':'Le Canyon','Cavernes cristallines':'Les Cavernes de cristal','Lande':'La Lande','Fjord':'Le Fjord','Désert de sel':'Le Désert de sel',
'Delta fluvial':'Le Delta','Iles flottantes':'Les Îles flottantes','Savane':'La Savane','Toundra':'La Toundra'}
used=set();out=[];manaRES=collections.Counter()
for i,t in enumerate(T):
  if t['id']:continue
  typ,mod=TY[t['forme']]
  cands=[r for r in R if r['type']==typ and r['id'] not in used]
  if typ=='Ressource':
    cands.sort(key=lambda r:(manaRES[r['mana']],random.random()))
  else:random.shuffle(cands)
  r=cands[0];used.add(r['id'])
  if typ=='Ressource':manaRES[r['mana']]+=1
  pn=nom(r['culture']);n=f"{ART[r['biome']]} {'d'+chr(39) if pn[0] in 'AEIOUY' else 'de '}{pn}"
  out.append({'id':r['id'].replace('-',''),'sz':r['id'],'mod':mod,'type':typ,'biome':r['biome'],'mana':r['mana'],'culture':r['culture'],'pm':r['pole_moins7'] or '','pp':r['pole_plus7'] or '','nom':n,'poly':t['pts']})
print(len(out),manaRES,[o['nom']+' ('+o['type']+', '+o['mana']+')' for o in out])
js='/* MozaWorld TV 2.0 : carte agrandie (17 nov.). Tuiles Girih exactes posées autour des cinq zones d\'origine\n   (girih_exact.py, graine 12, cadre 4,8 × 4), une sous-zone de la liste des 986 par tuile. Généré par carte/emettre.py. */\nconst CARTE_PLUS='+json.dumps(out,ensure_ascii=False)+';\n'
open('/home/user/MozaWorld/tv/src/carte.js','w',encoding='utf-8').write(js)
