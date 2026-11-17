"""Assemble les cartes des conteurs (conteur_*.md, blocs ```json```) en :
 - tv/src/cartes-donnees.js (données lues par le moteur tv/src/cartes.js)
 - recap/donnees-2.2.json (Grimoire publié)
 - cartes-2.2.md (liste lisible)
Usage : python3 assembler.py <dossier cartes-2.2> <fichier cartes-donnees.js>"""
import json,re,sys,glob,os
D=sys.argv[1];OUTJS=sys.argv[2]
ALIAS={'CIT001':'CIT','DON058':'DON','RES334':'RES','ANT079':'ANT','MAR156':'MAR','ASS156':'MAR'}
ORIG={'CIT':("Berestograd, la Ville-Écorce",'Citadelle','Glace','Oubli','Mémoire'),'DON':('Le Puits des Neuf Édits','Donjon','Feu','Tyrannie','Liberté'),
 'RES':('Les Chinampas Dérivantes de Tezcamixtli','Ressource','Vent','',''),'ANT':("L'Exarchat des Lucioles",'Antre','Eau','Nuit','Aurore'),'MAR':('La Foire de Givrecloche','Assemblée','Glace','Brume','Clarté')}
carte=open(os.path.join(os.path.dirname(OUTJS),'carte.js')).read()
plus=json.loads(carte[carte.index('['):carte.rindex(']')+1])
META=dict(ORIG)
for z in plus: META[z['id']]=(z['nom'],z['type'],z['mana'],z['pm'],z['pp'])
CONTEUR={}
TAG={'deg':'Dégâts','garde':'Garde','soin':'Soin','pioche':'Pioche','hesite':'Contrôle','affaiblit':'Affaiblissement','briseGarde':'Perce-garde','ignoreGarde':'Perce-garde',
 'invoque':'Invocation','brulure':'Brûlure','vulnerable':'Marque','riposte':'Riposte','volVie':'Vol de vie','echo':'Écho','recup':'Récupération','mana':'Mana','boost':'Boost',
 'exil':'Exil','pose':'Combo','reveil':'Combo','si':'Condition','prixPV':'Prix','prixDefausse':'Prix','prixBete':'Prix','ennemiGarde':'Prix','ennemiSoin':'Prix'}
WHO={'cible','tous','hasard','heros','allies','héros','alliés'}
def norm_op(o):
  o=list(o);k=o[0]
  if k in('affaiblit','briseGarde','brulure','vulnerable','deg') and len(o)>2 and not isinstance(o[1],str) and isinstance(o[2],str): o[1],o[2]=o[2],o[1]
  if k in('garde','soin') and len(o)>=2 and not isinstance(o[1],str): o=[k,'heros',o[1]]
  if k=='affaiblit' and len(o)==2: o=[k,'cible',o[1]]
  if k=='vulnerable' and len(o)==2: o=[k,'cible',o[1]]
  if k=='brulure' and (len(o)<2 or not isinstance(o[1],str)): o=[k,'cible']+o[1:]
  if len(o)>1 and o[1] in('héros',): o[1]='heros'
  if len(o)>1 and o[1] in('alliés',): o[1]='allies'
  if k=='reveil': o=[k,o[1],bool(o[2]) if len(o)>3 else True,[norm_op(p) for p in (o[3] if len(o)>3 else o[2])]]
  if k=='si': o=[k,o[1],[norm_op(p) for p in o[2]]]
  return o
def tags(ops):
  t=[]
  for o in ops:
    n=TAG.get(o[0]);
    if n and n not in t:t.append(n)
    if o[0] in('reveil','si'):
      for x in tags(o[-1]):
        if x not in t:t.append(x)
    if o[0]=='deg' and len(o)>1 and o[1]=='tous' and 'Zone d\'effet' not in t:t.append("Zone d'effet")
  return t
def comb(ops):
  p=[o[1] for o in ops if o[0]=='pose'];r=[o for o in ops if o[0]=='reveil']
  return {'pose':p[0] if p else None,'reveil':r[0][1] if r else None}
cards=[]
for f in sorted(glob.glob(os.path.join(D,'conteur_[A-D].md'))+glob.glob(os.path.join(D,'conteur_[A-D]_paliers.md'))):
  who=os.path.basename(f)[8];txt=open(f).read()
  for blk in re.findall(r'```json\s*(.*?)```',txt,re.S):
    try: arr=json.loads(blk)
    except Exception as e:
      blk2=re.sub(r',\s*([\]}])',r'\1',blk)
      try: arr=json.loads(blk2)
      except Exception as e2: print('JSON illisible dans',f,e2);continue
    if isinstance(arr,dict):arr=[arr]
    for c in arr:
      if not isinstance(c,dict) or 'nom' not in c: continue
      z=str(c.get('zone','')).replace('-','');z=ALIAS.get(z,z)
      if z not in META: print('zone inconnue',z,c['nom']);continue
      c['zone']=z;c['effet']=re.sub(r'(\d*)N\)',r'\1L)',str(c.get('effet','')));c['ops']=[norm_op(o) for o in c.get('ops',[])];c['conteur']=who;cards.append(c)
# ---- données pour le jeu ----
J={'zones':{},'gerbes':{},'secrets':{}}
for c in cards:
  d={k:c.get(k) for k in('nom','cout','cible','effet','ops','ambiance')};d['cible']=1 if c.get('cible') else 0
  pol=str(c.get('pole'));pal=str(c.get('palier'))
  if pol=='secret': J['secrets'][c.get('secret') or c['nom']]=d
  elif pol=='res':
    if pal.isdigit(): J['gerbes'].setdefault(c['zone'],{})['n'+pal]=d
    else: J['gerbes'][c['zone']]={**J['gerbes'].get(c['zone'],{}),**d}
  else:
    slot=('m' if pol.startswith('-') else 'p')+(pal if pal.isdigit() else ('7' if '7' in pol else ''))
    J['zones'].setdefault(c['zone'],{})[slot]=d
open(OUTJS,'w').write('/* MozaWorld TV 2.2 : cartes écrites par les quatre conteurs (généré par cartes-2.2/outils/assembler.py, ne pas modifier à la main). */\nconst CARTES22='+json.dumps(J,ensure_ascii=False,indent=0)+';\n')
# ---- Grimoire ----
G=[]
seen=set();keep=[]
perpal={(c['zone'],str(c.get('pole'))[:1]) for c in cards if str(c.get('palier')).isdigit() and str(c.get('palier'))!='7'}
for c in reversed(cards):
  pol=str(c.get('pole'));pal=str(c.get('palier'))
  if not pal.isdigit() and pal!='7' and pol in('-','+','res') and (c['zone'],pol[:1] if pol!='res' else 'r') in perpal: continue
  key=(c['zone'],pol,pal,c['nom'] if pol=='secret' else '')
  if key in seen: continue
  seen.add(key);keep.append(c)
cards_g=keep[::-1]
for n,co,e,mc,k in [('Coup de bâton',1,'6 dégâts. Sur une cible qui brûle : 10.',['Dégâts','Combo'],1),
  ('Pas de côté',1,"5 de garde : la Garde se dresse devant le héros. Si elle était déjà levée, elle ne s'effrite pas au prochain tour.",['Garde','Bloqueur'],1),
  ('Pieu planté',1,'Un bloqueur de 6 PV prend place sur le terrain : il encaisse les coups et renvoie 2 dégâts à qui le frappe.',['Bloqueur','Riposte'],1),
  ('Jet de pierre',0,"3 dégâts à l'ennemi qui prend son élan (sinon au hasard) : il perd son élan et hésite.",['Dégâts','Contrôle'],1),
  ('Torche',1,'2 dégâts, puis 2 de brûlure sur 2 tours. Si la cible brûlait déjà, sa brûlure double (une fois par tour).',['Dégâts','Brûlure','Combo'],1)]:
  G.append(dict(nom=n,zone='Paquet de départ',tuile='Commune',mana='Gris',pole='',polenom='×1',cout=co,e1=e,genre='Commune',mec=mc))
order={'m':0,'p':1,'m7':2,'p7':3}
def zkey(z):return (list(META).index(z))
for c in sorted(cards_g,key=lambda c:(zkey(c['zone']),{'res':0,'-':1,'+':2,'secret':9}.get(str(c.get('pole'))[:1] if str(c.get('pole'))!='secret' and str(c.get('pole'))!='res' else str(c.get('pole')),5),str(c.get('palier')))):
  nom,typ,mana,pm,pp=META[c['zone']];pol=str(c.get('pole'));pal=str(c.get('palier'))
  e=dict(nom=c['nom'],zone=nom,tuile=typ,cout=c.get('cout'),e1=c.get('effet',''),ambiance=c.get('ambiance',''),mec=tags(c['ops']),combo=comb(c['ops']),conteur=c['conteur'])
  if pol=='secret': e.update(genre='Utilitaire (secret)',mana='Gris',pole='',polenom='Secret : '+(c.get('secret') or ''))
  elif pol=='res': e.update(genre='Gerbe',mana=mana,pole='',polenom='Niveau '+pal if pal.isdigit() else 'Niveaux 1 à 3')
  elif pal=='7': e.update(genre='Forme du palier 7',mana=mana,pole=('-7' if pol.startswith('-') else '+7'),polenom=pm if pol.startswith('-') else pp)
  elif pal.isdigit(): e.update(genre='Carte de palier',mana=mana,pole=pol[:1],polenom=(pm if pol.startswith('-') else pp)+' · palier '+pal)
  else: e.update(genre='Carte de pôle',mana=mana,pole=pol[:1],polenom=(pm if pol.startswith('-') else pp)+' · paliers '+pal)
  G.append(e)
json.dump(G,open(os.path.join(D,'recap','cartes-2.2.json'),'w'),ensure_ascii=False)
print(len(cards),'cartes ;',{g:sum(1 for x in G if x['genre']==g) for g in set(x['genre'] for x in G)})
print('zones à pôles :',sorted(J['zones']),'gerbes :',sorted(J['gerbes']),'secrets :',len(J['secrets']))
