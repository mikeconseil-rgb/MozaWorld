"""Portraits des créatures du champ de bataille (Arène), par Pollinations (gratuit, sans compte, ~1 image / 45 s).
22 nov. 2026 : l'utilisateur trouve les dessins des bêtes « moches à mourir ». Une image par archétype (oiseau, félin…)
pour les ~2 000 bêtes des cartes, une image par monstre de zone, plus le héros, la Garde et la Sentinelle.
Usage (depuis la racine) : python3 tv/tools/images-cartes/generer-creatures.py   → tv/img/creatures/<cle>.webp (256×256)."""
import io, subprocess, sys, time, urllib.parse
from pathlib import Path
from PIL import Image
D = Path(__file__).resolve().parents[2] / 'img' / 'creatures'
STYLE = ('dark fantasy creature portrait, head and shoulders, facing the viewer, centered, ink and watercolor illustration on aged parchment, '
         'bold ink outlines, muted earthy colors with one vivid accent, dramatic rim light, dark vignette, plain dark background, no text')
# pour les bêtes, sans « portrait » : sinon le modèle dessine une personne
STYLE_BETE = ('dark fantasy bestiary illustration of the creature alone, no human, no person, no face of a person, centered, close-up, '
              'ink and watercolor on aged parchment, bold ink outlines, muted earthy colors with one vivid accent, dark vignette, plain dark background, no text')
BETES = {'garde','oiseau','felin','canide','bovin','cheval','singe','ours','reptile','insecte','rongeur','aquatique','objet','bete','luciole',
         'Larve de lave','Anguille des canaux','Luciole ardente','Crabe-racine','Reine-luciole','Mâtin de cloche'}
SUJETS = {
 'heros': 'a hooded wandering hero with a glowing staff and red cloak, determined eyes',
 'garde': 'a great round iron shield with a carved star emblem lying on stone, glowing faintly, still life, object only',
 'sentinelle': 'a stone sentinel golem with glowing runes and a spear',
 'oiseau': 'a fierce bird of prey with spread wings and sharp beak',
 'felin': 'a wild lynx-like cat with tufted ears and glowing eyes',
 'canide': 'a gaunt grey wolf snarling, fur bristling',
 'bovin': 'a massive horned buffalo with steaming breath',
 'cheval': 'a wild black mare with flowing mane, rearing',
 'singe': 'a maned baboon-like monkey with intense red chest',
 'ours': 'a huge bear standing, roaring',
 'reptile': 'a scaled lizard-serpent with forked tongue',
 'insecte': 'a giant horned beetle insect with iridescent shell, surrounded by a buzzing swarm of flies',
 'rongeur': 'a quick hare-like rodent with long ears, alert',
 'aquatique': 'a fierce pike fish monster leaping from water, scales and fins',
 'humain': 'a battle-worn soldier in leather armor with a spear',
 'objet': 'a crude barricade wall made of bones, stones and timber with glowing runes, object only',
 'esprit': 'a translucent ghostly spirit with glowing eyes and wisps of smoke',
 'bete': 'a strange mosaic beast with patterned hide and curled horns',
 'luciole': 'a giant glowing firefly insect with luminous abdomen and translucent wings',
 'lanciere': 'a radiant warrior woman with a long spear at dawn',
 'Pillard des sapins': 'a savage bandit with pine branches in his hair and an axe',
 "Archère d'écorce": 'an archer woman with bark skin and a bow',
 'Voïvode sans mémoire': 'a hollow-eyed crowned warlord in fur, ancient and menacing',
 "Gardien d'édit": 'an armored guardian holding a stone tablet of laws',
 'Larve de lave': 'a huge grub larva worm made of molten lava with glowing cracks',
 'Scribe-tyran': 'a tyrant scribe in dark robes with a giant quill and chains',
 'Glaneur hagard': 'a haggard gleaner with a sickle, hollow cheeks',
 'Anguille des canaux': 'a monstrous eel fish with needle teeth bursting from dark water',
 'Mère des Gerbes': 'a towering harvest matron made of wheat sheaves with a scythe',
 'Luciole ardente': 'a giant burning firefly insect monster with flaming wings',
 'Crabe-racine': 'a giant crab with big claws, its shell overgrown by roots and moss',
 'Reine-luciole': 'a glowing firefly queen with a crown of light',
 'Colporteur givré': 'a frost-covered peddler with icicles and a heavy pack',
 'Mâtin de cloche': 'a huge mastiff with a bronze bell collar, drooling',
 'Prévôt de la Foire': 'a sinister fair provost in a tall hat with a staff of office',
}
def cle(n): return n
def main():
    D.mkdir(parents=True, exist_ok=True)
    for i,(k,s) in enumerate(SUJETS.items()):
        f = D / (k.replace("'", '').replace(' ', '_') + '.webp')
        if f.exists(): continue
        url = 'https://image.pollinations.ai/prompt/' + urllib.parse.quote(f'{s}. {STYLE_BETE if k in BETES else STYLE}') + f'?width=384&height=448&nologo=true&seed={101+i}'
        for essai in range(4):
            r = subprocess.run(['curl', '-s', '--max-time', '120', url], capture_output=True)
            try:
                im = Image.open(io.BytesIO(r.stdout)).convert('RGB'); break
            except Exception:
                print('échec', k, essai, flush=True); time.sleep(30); im = None
        if im is None: continue
        w, h = im.size; im = im.crop((0, 0, w, h - int(h * .12)))     # retire le filigrane du bas
        w, h = im.size; c = min(w, h); im = im.crop(((w - c) // 2, 0, (w - c) // 2 + c, c)).resize((256, 256), Image.LANCZOS)
        im.save(f, 'WEBP', quality=80); print('ok', k, flush=True); time.sleep(40)
main()
