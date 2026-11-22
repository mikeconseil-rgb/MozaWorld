"""Assemble les quêtes de Kobor (40-43), les répliques des PNJ (45) et le livre (46) dans tv/src/quetes-donnees.js.
Usage : python3 design/quetes/assembler.py (depuis la racine du dépôt ou d'ici)."""
import json,os
ici=os.path.dirname(os.path.abspath(__file__));sortie=os.path.join(ici,'..','..','tv','src','quetes-donnees.js')
Q={}
for f in ['40-A.json','41-B.json','42-C.json','43-D.json']:Q.update(json.load(open(os.path.join(ici,f)))['quetes'])
dit=json.load(open(os.path.join(ici,'45-pnj.json')))['pnj'];livre=json.load(open(os.path.join(ici,'46-livre.json')))
# apparence et place des PNJ (choisies par l'éditeur, pas par les auteurs)
META={
 'vera':{'nom':'Vera','role':'Cheffe du hameau','ou':'camp','look':{'robe':0x6a2a24,'coiffe':'voile','coiffeC':0x8a6a3a,'objet':'lanterne'}},
 'bogdan':{'nom':'Bogdan','role':'Trappeur','ou':'belvedere','look':{'robe':0x5a4632,'coiffe':'chapka','coiffeC':0x3a2a1e,'barbe':0x5a3a22,'objet':'fusil'}},
 'oustina':{'nom':'Oustina','role':'Femme de Bogdan, au séchoir','ou':'camp','look':{'robe':0x3a4a3a,'coiffe':'voile','coiffeC':0xc8b890}},
 'gleb':{'nom':'Gleb','role':'Inspecteur du trésor','ou':'pierre','look':{'robe':0x22303e,'coiffe':'chapka','coiffeC':0x1a1a22,'objet':'registre','ceinture':0xc9a45c}},
 'ilya':{'nom':'Ilya','role':'Marchand de grain','ou':'cercle','look':{'robe':0x7a5a2a,'coiffe':'bonnet','coiffeC':0x8a2a1a,'barbe':0x2a1a12}},
 'matvei':{'nom':'Le vieux Matveï','role':'Gardien du Coffre','ou':'pierre','look':{'robe':0x4a4440,'coiffe':'chapka','coiffeC':0x6a6460,'barbe':0xd8d0c0,'objet':'baton'}},
 'borislav':{'nom':'Le voïévode Borislav','role':'Voïévode','ou':'cercle','look':{'robe':0x4a1820,'coiffe':'mitre','coiffeC':0x6a1a22,'barbe':0x3a2a1a,'ceinture':0xc9a45c}},
}
pnj={k:dict(v,dit=dit[k]['dit']) for k,v in META.items()}
err=[]
for k,q in Q.items():
    for nid,n in q['noeuds'].items():
        if n.get('qui') and n['qui'] in q.get('absents',[]):err.append(f'{k}/{nid}: {n["qui"]} absent')
        if n.get('qui') and n['qui'] not in pnj:err.append(f'{k}/{nid}: PNJ inconnu {n["qui"]}')
        if n.get('lieu') and n['lieu'] not in ('camp','cercle','belvedere','pierre'):err.append(f'{k}/{nid}: lieu {n["lieu"]}')
if err:raise SystemExit('\n'.join(err))
D={'lieux':{'camp':'au camp des trappeurs','cercle':'au cercle de pierres','belvedere':'au belvédère','pierre':'devant le Coffre'},
   'avant':"Prenez d'abord la Pierre d'éveil de la zone : à Kobor, on ne confie rien à un inconnu.",'pnj':pnj,'quetes':Q}
js=('/* Généré par design/quetes/assembler.py : ne pas modifier à la main.\n   Kobor refait le 22 nov. 2026 : deux historiens, un philosophe, puis les quatre auteurs (A : 0..3, B : 4..7 et PNJ,\n   C : −1..−4, D : −5..−7 et le livre). Canon : design/quetes/30-canon-et-format.md */\n'
    'const QUETES={"DON045":'+json.dumps(D,ensure_ascii=False)+'};\n'
    '/* le livre de Kobor raconte la nouvelle histoire ; les anciennes inscriptions (ancienne histoire) sont retirées en attendant leur réécriture */\n'
    'if(typeof LIVRES!=="undefined")LIVRES.DON045='+json.dumps(livre,ensure_ascii=False)+';\n'
    'if(typeof INSCRIPTIONS!=="undefined")delete INSCRIPTIONS.DON045;\n')
open(sortie,'w').write(js);print('écrit',sortie,len(js),'octets,',len(Q),'quêtes')
