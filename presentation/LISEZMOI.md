# Visuels de présentation

Captures réelles du jeu (version 2.27, 1920×1080, sans interface sauf `interface`, `combat`, `titre-jeu` et les cartes du monde), utilisées pour l'affiche, l'écran titre et la bande-annonce faits dans Canva.
Noms : `<zone>_m7` = niveau −7, `_0` = équilibre, `_p7` = niveau +7.
Ce dossier ne touche pas au code du jeu.

## Bande-annonce
`bande-annonce-mozaworld.mp4` (52 s, 1920×1080) : montage des vraies captures (bascules −7 → +7, carte du monde, exploration, combat), textes en Cormorant Garamond et Jost (polices du jeu), nappe sonore synthétisée.
Refaire : `node presentation/outils/captures-hd.js <dossier>` (après `sh tv/build.sh`), puis `python3 presentation/outils/bande-annonce.py sortie.mp4` (chemins à ajuster en tête des scripts).
