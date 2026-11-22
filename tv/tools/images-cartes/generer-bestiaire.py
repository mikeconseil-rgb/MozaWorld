"""Portraits du bestiaire par zone (22 nov. 2026), par Pollinations (gratuit, sans compte, ~1 image / 45 s).
Retour de l'utilisateur : « les affiches des bêtes ne représentent pas le lore de la zone ». Trois créatures par zone,
tirées de son histoire (bestiaire.json). Sortie : tv/img/bestiaire/<ZONE>-<i>.webp (256×256). Reprend là où il s'est arrêté.
Usage (depuis la racine) : python3 tv/tools/images-cartes/generer-bestiaire.py"""
import io, json, subprocess, time, urllib.parse
from pathlib import Path
from PIL import Image
R = Path(__file__).resolve().parents[2]; D = R / 'img' / 'bestiaire'
B = json.load(open(Path(__file__).with_name('bestiaire.json'), encoding='utf-8'))
STYLE = ('dark fantasy portrait, head and shoulders, centered, painterly illustration, rich colors with one vivid accent, '
         'dramatic rim light, dark vignette, plain dark background, no text, no frame')
def main():
    D.mkdir(parents=True, exist_ok=True); n = 0
    for zid, z in B.items():
        if zid.startswith('_'): continue
        for i, (nom, sujet) in enumerate(z['b']):
            f = D / f'{zid}-{i}.webp'
            if f.exists(): continue
            p = f'{sujet}. Setting and style: {z["style"]}. {STYLE}'
            url = 'https://image.pollinations.ai/prompt/' + urllib.parse.quote(p) + f'?width=384&height=448&nologo=true&seed={7 + n}'
            im = None
            for essai in range(4):
                r = subprocess.run(['curl', '-s', '--max-time', '150', url], capture_output=True)
                try: im = Image.open(io.BytesIO(r.stdout)).convert('RGB'); break
                except Exception: print('échec', zid, i, essai, flush=True); time.sleep(30)
            if im is None: continue
            w, h = im.size; im = im.crop((0, 0, w, h - int(h * .12)))
            w, h = im.size; c = min(w, h); im = im.crop(((w - c) // 2, 0, (w - c) // 2 + c, c)).resize((256, 256), Image.LANCZOS)
            im.save(f, 'WEBP', quality=80); n += 1; print('ok', zid, i, nom, flush=True); time.sleep(8)
main()
