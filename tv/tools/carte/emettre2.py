"""2.15 (zones en série) : du pavage du monde entier à tv/src/carte.js et tv/src/zones-fiches.js.
Usage (depuis la racine du dépôt) : python3 tv/tools/carte/emettre2.py <monde.json produit par remplir.py>
- Les 21 tuiles déjà en jeu gardent leur identifiant, leur nom et leur place (les 16 de la 2.0 en tête de CARTE_PLUS, dans le même ordre).
- Les zones écrites par les conteurs (design/zones-serie/lot-*/conteur_*.md) sont posées au plus près du départ, lot par lot.
- Les autres lignes de la liste des 986 sont posées plus loin, au hasard (graine fixe) ; elles sont « pas encore écrites » (pret:false).
- Monde : les 986 tuiles les plus proches du centre (pas de trou)."""
import json,csv,random,re,glob,os,sys,math,collections
RAC=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','..','..'))
sys.path.insert(0,os.path.dirname(__file__))
random.seed(1119)
T=json.load(open(sys.argv[1]))
R=list(csv.DictReader(open(os.path.join(RAC,'design/donnees/sous-zones-986-v2.csv'),encoding='utf-8-sig'),delimiter=';'))
TY={'decagone':('Citadelle','CIT'),'pentagone':('Donjon','DON'),'hexagone':('Ressource','RES'),'papillon':('Antre','ANT'),'losange':('Assemblée','MAR')}
ORIG={'CIT','ANT','RES','MAR','DON'}
anc=open(os.path.join(RAC,'tv/src/carte.js')).read()
# on repart de la liste de la 2.0 (les 16 tuiles d'origine de CARTE_PLUS), lue dans c_12.json + l'ancien carte.js si besoin
C12={t['id']:t for t in json.load(open(os.path.join(os.path.dirname(__file__),'c_12.json')))}
ANC=json.load(open(os.path.join(os.path.dirname(__file__),'carte-2.0.json')))
ancById={d['id']:d for d in ANC}
# ---- fiches écrites ----
FICHES={};ORDRE=[]
for f in sorted(glob.glob(os.path.join(RAC,'design/zones-serie/lot-*/conteur_[A-D].md'))):
  lot=int(re.search(r'lot-(\d+)',f).group(1));who=os.path.basename(f)[8]
  for blk in re.findall(r'```json\s*(.*?)```',open(f,encoding='utf-8').read(),re.S):
    try:o=json.loads(blk)
    except Exception:
      try:o=json.loads(re.sub(r',\s*([\]}])',r'\1',blk))
      except Exception as e:print('JSON illisible',f,e);continue
    for c in (o if isinstance(o,list) else [o]):
      if isinstance(c,dict) and c.get('fiche'):
        z=c['fiche'].replace('-','');FICHES[z]=dict(nom=c['nom'],recit=c.get('recit',''),pal=c.get('pal',[]),pm=c.get('pm',''),pp=c.get('pp',''),conteur=who,lot=lot)
        if z not in ORDRE:ORDRE.append(z)
print(len(FICHES),'fiches écrites')
# ---- tuiles du monde : les 986 plus proches du centre ----
def cen(t):return (sum(p[0] for p in t['pts'])/len(t['pts']),sum(p[1] for p in t['pts'])/len(t['pts']))
T.sort(key=lambda t:math.hypot(*cen(t)))
fixes=[t for t in T if t.get('id')];libres=[t for t in T if not t.get('id')]
T=fixes+libres[:986-len(fixes)]
print('tuiles',len(T),collections.Counter(t['forme'] for t in T))
# ---- lignes de la liste par type ----
used={d['sz'] for d in ANC}|{'CIT-001','CIT-045','DON-058','ANT-079','ASS-156','MAR-156','RES-334'}
lignes=collections.defaultdict(list)
for r in R:
  if r['id'] in used:continue
  lignes[r['type']].append(r)
for k in lignes:random.shuffle(lignes[k])
# les zones écrites passent devant, dans l'ordre des lots
rang={z:i for i,z in enumerate(ORDRE)}
for k in lignes:lignes[k].sort(key=lambda r:rang.get(r['id'].replace('-',''),10**6))
SYL={'Slave':['vo','gra','mir','sla','vet','ko','ro','dno','bor'],'Nordique':['skal','fjor','hel','vik','gar','sund','ulf'],'Celte':['dun','bre','ca','ross','lin','mor'],
'Perse':['shah','dar','pa','sar','ab','zan','mi'],'Aztèque':['tlal','co','tep','ix','atl','mal','teo'],'Maya':['ka','bal','tun','ix','chi','pak'],'Inca':['qu','pa','cha','ma','yu','wasi'],
'Japonaise féodale':['ka','mi','ya','shi','ro','na','to'],'Chinoise impériale':['lan','zhou','an','ling','shan','xi'],'Khmère':['ang','kor','pra','sre','tha','ban'],
'Égyptienne':['ka','ne','fer','tep','ra','mes'],'Grecque':['the','los','ar','ka','do','nia'],'Romaine':['val','cas','tra','um','sar','ia'],'Byzantine':['kon','sta','ni','ka','the','os'],
'Gothique':['wal','burg','ster','hel','gra','mund'],'Vénitienne':['san','ma','rea','zo','do','ce'],'Andalouse':['al','ham','bra','gra','ce','ra'],'Moghole':['jah','na','ba','pur','ga','ra'],
'Mongole':['khan','or','gol','bat','ul','tai'],'Zouloue':['ulu','nde','lo','ba','zi','ma'],'Éthiopienne':['ak','sum','la','be','go','ra'],'Mésopotamienne':['ur','uk','ba','bel','ni','nur'],
'Inuit':['ik','alu','nu','qa','tuk','si'],'Polynésienne':['mo','ana','ta','hi','po','ra']}
ART={'Volcan':'Le Volcan','Mangrove':'La Mangrove','Archipel':"L'Archipel",'Steppe':'La Steppe','Jungle':'La Jungle','Désert de sable':'Les Dunes','Falaise côtière':'Les Falaises',
'Haute montagne':'Les Cimes','Cité en ruines':'Les Ruines','Forêt boréale':'La Taïga','Forêt de champignons géants':'La Futaie de champignons','Glacier':'Le Glacier','Récif':'Le Récif',
'Marais':'Le Marais','Oasis':"L'Oasis",'Canyon':'Le Canyon','Cavernes cristallines':'Les Cavernes de cristal','Lande':'La Lande','Fjord':'Le Fjord','Désert de sel':'Le Désert de sel',
'Delta fluvial':'Le Delta','Iles flottantes':'Les Îles flottantes','Savane':'La Savane','Toundra':'La Toundra'}
noms=set(d['nom'] for d in ANC)|{f['nom'] for f in FICHES.values()}
def nomProvisoire(r):
  s=SYL.get(r['culture'],['ka','ra','to'])
  for _ in range(200):
    a,b=random.sample(s,2);pn=(a+b).capitalize();n=f"{ART[r['biome']]} {'d'+chr(39) if pn[0] in 'AEIOUY' else 'de '}{pn}"
    if n not in noms:noms.add(n);return n
  return f"{ART[r['biome']]} {r['id']}"
# ---- lignes en plus si le pavage a plus de tuiles d'une forme que la liste n'a de lignes ----
BIO_MANA={}
for r in R:BIO_MANA.setdefault(r['biome'],r['mana'])
CULT=sorted({r['culture'] for r in R});BIOS=sorted(BIO_MANA)
POLES=sorted({(r['pole_moins7'],r['pole_plus7']) for r in R if r['pole_moins7']})
pris={(r['type'],r['biome'],r['culture']) for r in R}
compteur=collections.Counter()
def ligneEnPlus(typ,pre):
  n=max(int(r['id'].split('-')[1]) for r in R if r['type']==typ)+1+compteur[typ];compteur[typ]+=1
  for _ in range(500):
    b,c=random.choice(BIOS),random.choice(CULT)
    if (typ,b,c) not in pris:break
  pris.add((typ,b,c));pm,pp=('','') if typ=='Ressource' else random.choice(POLES)
  return {'id':f'{pre}-{n:03d}','type':typ,'biome':b,'mana':BIO_MANA[b],'culture':c,'pole_moins7':pm,'pole_plus7':pp,'en_plus':1}
# ---- affectation ----
out=[];ajoutees=[]
for d in ANC:   # les 16 de la 2.0, mêmes données, mêmes polygones (repris de c_12 pour rester identiques)
  e=dict(d);e['pret']=True;out.append(e)
for t in libres[:986-len(fixes)]:
  typ,mod=TY[t['forme']];pre='ASS' if mod=='MAR' else mod
  if lignes[typ]:r=lignes[typ].pop(0)
  else:r=ligneEnPlus(typ,pre);ajoutees.append(r)
  z=r['id'].replace('-','');F=FICHES.get(z)
  e={'id':z,'sz':r['id'],'mod':mod,'type':typ,'biome':r['biome'],'mana':r['mana'],'culture':r['culture'],'pm':(F or {}).get('pm') or r['pole_moins7'] or '','pp':(F or {}).get('pp') or r['pole_plus7'] or '',
     'nom':F['nom'] if F else nomProvisoire(r),'pret':bool(F),'poly':t['pts']}
  out.append(e)
manq=[z for z in FICHES if z not in {e['id'] for e in out}]
if manq:print('ATTENTION : zones écrites sans tuile',manq)
print('posées',len(out)+5,'dont écrites',sum(1 for e in out if e['pret']),'; lignes ajoutées faute de place dans la liste :',collections.Counter(r['type'] for r in ajoutees),
      '; lignes de la liste non posées :',{k:len(v) for k,v in lignes.items() if v})
json.dump(ajoutees,open(os.path.join(RAC,'design/zones-serie/lignes-ajoutees.json'),'w'),ensure_ascii=False,indent=0)
js=('/* MozaWorld 2.15 : le monde entier (zones en série, 19 nov.). Pavage Girih exact en disque autour des cinq zones d\'origine\n'
    '   (tv/tools/carte/remplir.py), une sous-zone de la liste des 986 par tuile ; pret:false = pas encore écrite par les conteurs.\n'
    '   Généré par tv/tools/carte/emettre2.py, ne pas modifier à la main. */\nconst CARTE_PLUS='+json.dumps(out,ensure_ascii=False,separators=(',',':'))+';\n')
open(os.path.join(RAC,'tv/src/carte.js'),'w',encoding='utf-8').write(js)
fj=('/* MozaWorld 2.15 : fiches des zones écrites en série (nom, récit, cinq paliers, pôles, conteur). Généré par tv/tools/carte/emettre2.py. */\n'
    'const FICHES='+json.dumps(FICHES,ensure_ascii=False,separators=(',',':'))+';\n')
open(os.path.join(RAC,'tv/src/zones-fiches.js'),'w',encoding='utf-8').write(fj)
print('carte.js',len(js)//1024,'Ko ; zones-fiches.js',len(fj)//1024,'Ko')
