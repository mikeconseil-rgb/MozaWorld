"""Peint les zones et les portraits de leurs personnages, par lots, avec le quota gratuit Hugging Face (ZeroGPU).
Usage (depuis la racine) :  HF_TOKEN=... python3 tv/tools/images-zones/generer.py --max 8
- lit tv/tools/images-zones/zones.json (fait par liste.js), dans l'ordre : zones vues en premier d'abord, un portrait toutes les trois images ;
- saute ce qui existe déjà dans tv/img/zones/ et ce qui est listé dans ecartees.txt (sauf --seul) ;
- zones : WebP 480×320 (même format que les cartes) dans tv/img/zones/ ; portraits : WebP 384×384 dans tv/img/zones/portraits/.
Rien n'est branché dans le jeu : ces images servent plus tard (zones, quêtes). Gratuit : pas d'achat, environ 8 images par jour.
Le jeton ne s'écrit nulle part : il se passe seulement dans la commande."""
import argparse, json, os, sys
from pathlib import Path
from PIL import Image
from gradio_client import Client

RACINE = Path(__file__).resolve().parents[3]
DOSSIER = RACINE / 'tv' / 'img' / 'zones'
ESPACE = 'mcp-tools/qwen-image-fast'

def cadrer(im, ratio, taille):
    w, h = im.size; im = im.crop((int(w*.04), int(h*.04), int(w*.96), int(h*.96)))   # rogne un éventuel cadre dessiné par le modèle
    w, h = im.size
    if w / h > ratio: nw = int(h * ratio); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else: nh = int(w / ratio); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    return im.resize(taille, Image.LANCZOS)

def main():
    a = argparse.ArgumentParser(); a.add_argument('--max', type=int, default=8); a.add_argument('--seul', default='')
    a.add_argument('--etapes', type=int, default=8); a.add_argument('--refaire', action='store_true')
    a.add_argument('--sortie', default='', help='autre dossier de sortie (hors du dépôt pendant un long lot)')
    o = a.parse_args()
    sortie = Path(o.sortie) if o.sortie else DOSSIER
    liste = json.loads((Path(__file__).parent / 'zones.json').read_text(encoding='utf-8'))
    if o.seul: liste = [c for c in liste if c['k'] in o.seul.split(',')]
    existe = lambda c: (DOSSIER / (c['fichier'] + '.webp')).exists() or (sortie / (c['fichier'] + '.webp')).exists()
    a_faire = [c for c in liste if o.refaire or not existe(c)]
    ecart = Path(__file__).with_name('ecartees.txt')
    if ecart.exists() and not o.seul:
        sautees = set(ecart.read_text(encoding='utf8').split())
        a_faire = [c for c in a_faire if c['k'] not in sautees]
    print(f"{len(a_faire)} images à faire, {o.max} au plus cette fois")
    jeton = os.environ.get('HF_TOKEN') or None
    try: client = Client(ESPACE, token=jeton, verbose=False)
    except TypeError: client = Client(ESPACE, hf_token=jeton, verbose=False)
    faites = 0
    for c in a_faire[:o.max]:
        portrait = c['genre'] == 'portrait'
        graine = sum(map(ord, c['k'])) * 7919 % 2**31
        try:
            r = client.predict(prompt=c['prompt'], seed=graine, randomize_seed=False, aspect_ratio='1:1' if portrait else '3:2',
                               guidance_scale=1, num_inference_steps=o.etapes, api_name='/generate_image')
        except Exception as e:
            m = str(e); print('ARRÊT', c['k'], m[:200])
            if 'quota' in m.lower() or 'limit' in m.lower(): break
            continue
        src = r[0] if isinstance(r, (list, tuple)) else r
        if isinstance(src, dict): src = src.get('path') or src.get('url')
        im = Image.open(src).convert('RGB')
        im = cadrer(im, 1, (384, 384)) if portrait else cadrer(im, 1.5, (480, 320))
        f = sortie / (c['fichier'] + '.webp'); f.parent.mkdir(parents=True, exist_ok=True)
        im.save(f, 'WEBP', quality=72, method=6)
        faites += 1; print('ok', c['genre'], c['k'], c['nom'])
    z = len(list(DOSSIER.glob('*.webp'))); p = len(list((DOSSIER / 'portraits').glob('*.webp')))
    print(f"{faites} faites ; dans le dépôt : {z} zones peintes sur {sum(1 for c in json.loads((Path(__file__).parent / 'zones.json').read_text(encoding='utf-8')) if c['genre']=='zone')}, {p} portraits")

if __name__ == '__main__':
    sys.exit(main())
