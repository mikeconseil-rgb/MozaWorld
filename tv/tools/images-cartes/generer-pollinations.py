"""Décors peints des cartes par Pollinations (gratuit, sans compte, 1 image toutes les 45 s par adresse IP).
Choix de l'utilisateur du 19 nov. 2026 pour tenir l'échéance : qualité plus faible que Hugging Face, mais tout de suite.
Usage (depuis la racine) :  python3 tv/tools/images-cartes/generer-pollinations.py --max 200
Écrit dans tv/img/cartes/fonds/. Saute les secrets (ils gardent le kraft) et les cartes qui ont déjà une image
complète Hugging Face dans tv/img/cartes/ ; generer.py continue d'en ajouter ~8 par jour, et l'image complète gagne."""
import argparse, json, re, subprocess, sys, time, urllib.parse
from pathlib import Path
from PIL import Image

ICI = Path(__file__).parent
RACINE = ICI.parents[2]
DOSSIER = RACINE / 'tv' / 'img' / 'cartes' / 'fonds'
PLEINES = RACINE / 'tv' / 'img' / 'cartes'
STYLE = 'Fantasy matte painting, wide landscape, dramatic volumetric light, vivid colors, highly detailed, empty scene with no people'
HEURES = ['at dawn with low golden light', 'under a huge full moon', 'at blazing noon', 'in a gathering storm', 'at blood-red sunset', 'in drifting mist', 'under a starry night sky with aurora']

def prompt_court(c):
    """Sana (le seul modèle gratuit) suit mal les sujets : on lui demande seulement un DÉCOR peint par carte.
    Le sujet de la carte reste dessiné par-dessus par cartes-visuel.js."""
    p = c['prompt']
    decor = re.search(r'Setting: (.*?)\.(?: Mood| Color)', p, re.S).group(1).strip()
    decor = re.sub(r', with (.*?) motifs in costume, props and distant buildings', r', with distant \1 buildings', decor)
    humeur = re.search(r'Mood of [^:]+: ([^.]*)\.', p)
    palette = re.search(r'Color palette: ([^.]*)\.', p).group(1)
    heure = HEURES[sum(map(ord, c['k'])) % len(HEURES)]
    h = humeur.group(1).replace(', moonlit', '') + '. ' if humeur else ''
    return f"{decor} {heure}. {h}{palette}. {STYLE}."

def main():
    a = argparse.ArgumentParser(); a.add_argument('--max', type=int, default=200); a.add_argument('--seul', default='')
    a.add_argument('--enhance', action='store_true'); a.add_argument('--sortie', default='')
    o = a.parse_args()
    cartes = json.loads((ICI / 'cartes.json').read_text(encoding='utf-8'))
    if o.seul: cartes = [c for c in cartes if c['k'] in o.seul.split(',')]
    dossier = Path(o.sortie) if o.sortie else DOSSIER
    dossier.mkdir(parents=True, exist_ok=True)
    a_faire = [c for c in cartes if not c['fichier'].startswith('S-') and not (dossier / (c['fichier'] + '.webp')).exists() and not (PLEINES / (c['fichier'] + '.webp')).exists()]
    a_faire.sort(key=lambda c: int(c['k'][-1]) if '#' in c['k'] else 3.5)
    print(len(a_faire), 'images à faire', flush=True)
    faites = 0
    for c in a_faire[:o.max]:
        graine = sum(map(ord, c['k'])) * 7919 % 2**31
        url = ('https://image.pollinations.ai/prompt/' + urllib.parse.quote(prompt_court(c), safe='')
               + f'?width=1200&height=800&nologo=true&seed={graine}' + ('&enhance=true' if o.enhance else ''))
        tmp = dossier / '_tmp.jpg'; ok = False
        for essai in range(8):
            r = subprocess.run(['curl', '-sS', '-L', '--max-time', '120', '-o', str(tmp), '-w', '%{http_code}', url], capture_output=True, text=True)
            if r.stdout.strip() == '200':
                try: im = Image.open(tmp).convert('RGB'); ok = True; break
                except Exception: pass
            time.sleep(47 if r.stdout.strip() == '402' else 20)
        if not ok: print('ÉCHEC', c['k'], r.stdout, flush=True); time.sleep(47); continue
        w, h = im.size
        im = im.crop((int(w * .07), int(h * .07), int(w * .93), int(h * .89)))      # enlève un éventuel cadre et le filigrane du coin bas droit
        w, h = im.size; nw = int(h * 1.5)
        if nw <= w: im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
        else: nh = int(w / 1.5); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
        im.resize((480, 320), Image.LANCZOS).save(dossier / (c['fichier'] + '.webp'), 'WEBP', quality=68, method=6)
        tmp.unlink(missing_ok=True)
        faites += 1; print('ok', faites, c['k'], c['nom'], flush=True)
        time.sleep(46)
    print(faites, 'faites', flush=True)

if __name__ == '__main__':
    sys.exit(main())
