"""Écrit tv/src/bestiaire.js à partir de bestiaire.json, en ne gardant que les zones dont les trois portraits existent
(img/bestiaire/<ZONE>-0..2.webp) : une zone sans peinture garde ses créatures de type. Usage : python3 tv/tools/images-cartes/emettre-bestiaire.py"""
import json
from pathlib import Path
R = Path(__file__).resolve().parents[2]
B = json.load(open(Path(__file__).with_name('bestiaire.json'), encoding='utf-8'))
noms = {k: [b[0] for b in v['b']] for k, v in B.items() if not k.startswith('_') and all((R/'img'/'bestiaire'/f'{k}-{i}.webp').exists() for i in range(3))}
src = (R/'src'/'bestiaire.js').read_text(encoding='utf-8')
deb = src.index('const BESTIAIRE='); fin = src.index(';\n', deb)
(R/'src'/'bestiaire.js').write_text(src[:deb] + 'const BESTIAIRE=' + json.dumps(noms, ensure_ascii=False, separators=(',', ':')) + src[fin:], encoding='utf-8')
print(len(noms), 'zones')
