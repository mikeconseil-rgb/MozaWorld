#!/usr/bin/env python3
"""MozaWorld : mesure de ressemblance entre images (25 nov. 2026, critique renforcé des boucles graphiques).
Règle de l'utilisateur : deux zones différentes, ou les deux pôles −7 et +7 d'une même zone, doivent se ressembler à moins de 15 %.
Score = moitié couleur (intersection d'histogrammes RVB 8×8×8) + moitié structure (SSIM par blocs, en luminance), de 0 à 100 %.
Usage : python3 tv/tools/ressemblance.py <dossier du banc boucle.js>  → tableau des pôles par zone et des zones entre elles,
        et ressemblance.json dans le même dossier. Les planches sont découpées en trois panneaux (−7 | 0 | +7)."""
import sys, os, json, itertools
import numpy as np
from PIL import Image

def panneaux(p):
    im = Image.open(p).convert('RGB'); w, h = im.size; t = w // 3
    return [im.crop((i * t, 0, (i + 1) * t, h)) for i in range(3)]

def hist(im):
    a = np.asarray(im.resize((160, 120)), dtype=np.int32) // 32
    k = a[..., 0] * 64 + a[..., 1] * 8 + a[..., 2]
    h = np.bincount(k.ravel(), minlength=512).astype(float); return h / h.sum()

def lum(im):
    return np.asarray(im.convert('L').resize((160, 120)), dtype=float) / 255

def ssim(a, b, n=8):
    c1, c2, v = .01 ** 2, .03 ** 2, []
    for y in range(0, a.shape[0] - n + 1, n):
        for x in range(0, a.shape[1] - n + 1, n):
            p, q = a[y:y + n, x:x + n], b[y:y + n, x:x + n]
            mp, mq = p.mean(), q.mean(); vp, vq = p.var(), q.var(); cv = ((p - mp) * (q - mq)).mean()
            v.append(((2 * mp * mq + c1) * (2 * cv + c2)) / ((mp * mp + mq * mq + c1) * (vp + vq + c2)))
    return max(0., float(np.mean(v)))

def ress(a, b):
    return round(100 * (.5 * np.minimum(hist(a), hist(b)).sum() + .5 * ssim(lum(a), lum(b))), 1)

d = sys.argv[1]
zs = sorted(f[8:-4] for f in os.listdir(d) if f.startswith('planche-') and f.endswith('.png'))
P = {z: panneaux(os.path.join(d, f'planche-{z}.png')) for z in zs}
out = {'poles': {}, 'zones': {}}
print('Pôles d\'une même zone (−7/+7 doit être < 15 %) :')
for z in zs:
    m, o, p = P[z]; r = {'-7/+7': ress(m, p), '-7/0': ress(m, o), '0/+7': ress(o, p)}; out['poles'][z] = r
    print(f"  {z:8s} −7/+7 {r['-7/+7']:5.1f} %{'  ← TROP PROCHE' if r['-7/+7'] >= 15 else ''}   −7/0 {r['-7/0']:5.1f} %   0/+7 {r['0/+7']:5.1f} %")
print('Zones entre elles, même palier (doit être < 15 %) :')
for i, lab in enumerate(['-7', '0', '+7']):
    for a, b in itertools.combinations(zs, 2):
        r = ress(P[a][i], P[b][i]); out['zones'][f'{a}/{b} {lab}'] = r
        if r >= 15: print(f'  {lab:>2} {a}/{b} : {r:.1f} %  ← TROP PROCHE')
json.dump(out, open(os.path.join(d, 'ressemblance.json'), 'w'), ensure_ascii=False, indent=1)
