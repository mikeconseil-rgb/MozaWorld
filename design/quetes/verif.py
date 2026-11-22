"""Contrôle de structure des quêtes de Kobor : python3 verif.py"""
import json,os
ici=os.path.dirname(os.path.abspath(__file__));Q={};err=[]
for f in ['40-A.json','41-B.json','42-C.json','43-D.json']:
    try:Q.update(json.load(open(os.path.join(ici,f)))['quetes'])
    except Exception as e:err.append(f+': '+str(e))
for k,q in sorted(Q.items(),key=lambda x:int(x[0])):
    L=int(k);N=q['noeuds'];starts=[q['debut']]
    dr=q.get('debutRetour')
    if dr:starts+=list(dr.values()) if isinstance(dr,dict) else [dr]
    elif abs(L)<7:err.append(f'{k}: pas de debutRetour')
    for t,nid in (q.get('debutSi') or {}).items():starts.append(nid)
    seen=set();st=list(starts)
    while st:
        x=st.pop()
        if x not in N:err.append(f'{k}: nœud inconnu {x}');continue
        if x in seen:continue
        seen.add(x);n=N[x]
        for r in n.get('rep',[]):st.append(r['va'])
        if n.get('combat') and not n.get('final'):st.append(n.get('gagne'))
    if set(N)-seen:err.append(f'{k}: nœuds inatteignables {sorted(set(N)-seen)}')
    for nid,n in N.items():
        if len(n.get('txt',''))>450:err.append(f'{k}/{nid}: txt {len(n["txt"])} > 450')
        for r in n.get('rep',[])+n.get('fin',[]):
            if len(r.get('l',''))>45:err.append(f'{k}/{nid}: l > 45 ({r["l"]})')
        if n.get('final'):
            vs=sorted(r['vers'] for r in n['fin'])
            ok=[L-1,L+1] if abs(L)<7 else [L-(1 if L>0 else -1)]
            if sorted(vs)!=sorted(ok):err.append(f'{k}/{nid}: vers {vs}, attendu {ok}')
            for r in n['fin']:
                if r.get('epreuve') not in ('combat','dialogue'):err.append(f'{k}/{nid}: epreuve manquante')
        if not n.get('final') and not n.get('rep') and not n.get('combat'):err.append(f'{k}/{nid}: nœud sans suite')
        if n.get('qui') and n['qui'] in q.get('absents',[]) and nid==q['debut']:err.append(f'{k}/{nid}: {n["qui"]} est absent')
    if not any(n.get('final') for n in N.values()):err.append(f'{k}: pas de final')
    if q.get('debutRetour') and not q.get('resumeRetour'):err.append(f'{k}: pas de resumeRetour')
    for t in (q.get('debutSi') or {}):
        if t not in (q.get('resumeSi') or {}):err.append(f'{k}: pas de resumeSi pour {t}')
print('\n'.join(err) if err else 'Structure correcte : %d quêtes'%len(Q))
