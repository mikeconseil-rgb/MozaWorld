#!/usr/bin/env python3
"""Assemble les inscriptions des quatre conteurs (conteur_*.json) et les livres (livres_*.json) en tv/src/inscriptions-donnees.js.
Usage : python3 design/inscriptions/assembler.py   (depuis la racine du dépôt), puis sh tv/build.sh.
Vérifie : 4 inscriptions par zone, 5 bandes (m5, m2, z, p2, p5), 300 caractères au plus, pas de Ressource."""
import json, glob, os, sys
ici = os.path.dirname(os.path.abspath(__file__))
racine = os.path.dirname(os.path.dirname(ici))
BANDES = ['m5', 'm2', 'z', 'p2', 'p5']
SUPPORTS = {'stele', 'panneau', 'mur', 'borne'}
tout, erreurs = {}, []
for f in sorted(glob.glob(os.path.join(ici, 'conteur_*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    for zid, ins in d['zones'].items():
        if zid.startswith('RES'): erreurs.append(f'{zid} : les Ressources n\'ont pas d\'inscriptions')
        if len(ins) != 4: erreurs.append(f'{zid} : {len(ins)} inscriptions au lieu de 4')
        for n, i in enumerate(ins):
            if i.get('support') not in SUPPORTS: erreurs.append(f'{zid}#{n} : support inconnu {i.get("support")}')
            for b in BANDES:
                t = i['textes'].get(b, '')
                if not t: erreurs.append(f'{zid}#{n} : bande {b} vide')
                if len(t) > 300: erreurs.append(f'{zid}#{n} {b} : {len(t)} caractères')
            i['conteur'] = d['conteur']
        tout[zid] = ins
livres = {}
for f in sorted(glob.glob(os.path.join(ici, 'livres_*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    for zid, L in d['livres'].items():
        if zid.startswith('RES'): erreurs.append(f'{zid} : livre sur une Ressource')
        if len(L.get('pages', [])) != 4: erreurs.append(f'{zid} : le livre doit avoir 4 pages')
        for n, pg in enumerate(L.get('pages', [])):
            if not pg.get('t') or not (200 <= len(pg.get('txt', '')) <= 700): erreurs.append(f'{zid} page {n} : {len(pg.get("txt", ""))} caractères')
        for b in BANDES:
            if not (80 <= len(L['fin'].get(b, '')) <= 420): erreurs.append(f'{zid} fin {b} : {len(L["fin"].get(b, ""))} caractères')
        L['conteur'] = d['conteur']
        livres[zid] = L
if erreurs:
    print('\n'.join(erreurs)); sys.exit(1)
js = ('/* Généré par design/inscriptions/assembler.py depuis design/inscriptions/conteur_*.json : ne pas modifier à la main. */\n'
      'const INSCRIPTIONS=' + json.dumps(tout, ensure_ascii=False, separators=(',', ':')) + ';\n'
      'const LIVRES=' + json.dumps(livres, ensure_ascii=False, separators=(',', ':')) + ';\n')
open(os.path.join(racine, 'tv', 'src', 'inscriptions-donnees.js'), 'w', encoding='utf-8').write(js)
print(f'{len(livres)} livres ; {len(tout)} zones, {sum(len(v) for v in tout.values())} inscriptions, {sum(len(v) for v in tout.values())*5} textes')
