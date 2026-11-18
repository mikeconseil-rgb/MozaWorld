"""Génère les images IA des cartes, par lots, avec le quota gratuit Hugging Face (ZeroGPU).
Usage (depuis la racine) :  HF_TOKEN=... python3 tv/tools/images-cartes/generer.py --max 20
- lit tv/tools/images-cartes/cartes.json (fait par liste.js) ;
- saute les cartes qui ont déjà leur image dans tv/img/cartes/ ;
- enregistre chaque image en WebP 480×320 (≈ 30 Ko) ;
- réécrit tv/src/cartes-images.js (liste des images présentes) : relancer ensuite sh tv/build.sh.
Le jeu affiche l'image si elle existe, sinon le dessin vectoriel d'avant. Gratuit : pas d'achat, quota quotidien du compte."""
import argparse, json, os, sys, time
from pathlib import Path
from PIL import Image
from gradio_client import Client

RACINE = Path(__file__).resolve().parents[3]
DOSSIER = RACINE / 'tv' / 'img' / 'cartes'
MANIFESTE = RACINE / 'tv' / 'src' / 'cartes-images.js'
ESPACES = ['mcp-tools/qwen-image-fast']   # espaces ZeroGPU gratuits, essayés dans l'ordre

def manifeste():
    DOSSIER.mkdir(parents=True, exist_ok=True)
    noms = sorted(f.stem for f in DOSSIER.glob('*.webp'))
    MANIFESTE.write_text('/* Images IA des cartes présentes dans img/cartes/ (généré par tools/images-cartes/generer.py, ne pas modifier à la main). */\n'
                         'window.CARTES_IMG=new Set(' + json.dumps(noms, ensure_ascii=False) + ');\n', encoding='utf-8')
    return len(noms)

def main():
    a = argparse.ArgumentParser(); a.add_argument('--max', type=int, default=20); a.add_argument('--seul', default='')
    a.add_argument('--etapes', type=int, default=8); a.add_argument('--refaire', action='store_true'); a.add_argument('--manifeste', action='store_true', help='réécrit seulement la liste des images')
    o = a.parse_args()
    if o.manifeste: print(manifeste(), 'images listées'); return
    cartes = json.loads((Path(__file__).parent / 'cartes.json').read_text(encoding='utf-8'))
    toutes = len(cartes)
    if o.seul: cartes = [c for c in cartes if c['k'] in o.seul.split(',') or c['fichier'] in o.seul.split(',')]
    a_faire = [c for c in cartes if o.refaire or not (DOSSIER / (c['fichier'] + '.webp')).exists()]
    print(f"{len(a_faire)} images à faire, {o.max} au plus cette fois")
    jeton = os.environ.get('HF_TOKEN') or None
    try: client = Client(ESPACES[0], token=jeton, verbose=False)        # gradio_client récent
    except TypeError: client = Client(ESPACES[0], hf_token=jeton, verbose=False)
    faites = 0
    for c in a_faire[:o.max]:
        graine = sum(map(ord, c['k'])) * 7919 % 2**31
        try:
            r = client.predict(prompt=c['prompt'], seed=graine, randomize_seed=False, aspect_ratio='3:2',
                               guidance_scale=1, num_inference_steps=o.etapes, api_name='/generate_image')
        except Exception as e:
            m = str(e); print('ARRÊT', c['k'], m[:200])
            if 'quota' in m.lower() or 'limit' in m.lower(): break
            continue
        src = r[0] if isinstance(r, (list, tuple)) else r
        if isinstance(src, dict): src = src.get('path') or src.get('url')
        im = Image.open(src).convert('RGB')
        w, h = im.size; im = im.crop((int(w*.04), int(h*.04), int(w*.96), int(h*.96)))   # rogne un éventuel cadre dessiné par le modèle
        w, h = im.size; cible = 1.5
        if w / h > cible: nw = int(h * cible); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
        else: nh = int(w / cible); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
        im.resize((480, 320), Image.LANCZOS).save(DOSSIER / (c['fichier'] + '.webp'), 'WEBP', quality=72, method=6)
        faites += 1; print('ok', c['k'], c['nom'])
    total = manifeste()
    print(f"{faites} faites ; {total}/{toutes} cartes ont leur image")

if __name__ == '__main__':
    sys.exit(main())
