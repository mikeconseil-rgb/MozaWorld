# Démo « grandes zones »

Copie de la démo Cinq Tuiles avec deux changements demandés le 2026-11-12 :
- tuiles deux fois plus grandes (arête 200 m au lieu de 100 m) ; le cœur déjà jugé garde sa taille, une ceinture l'entoure ;
- niveaux beaucoup plus contrastés : dans la ceinture, relief, objets, couleur du sol et étalonnage d'image changent de nature selon le pôle (src/mutations.js).

Assemblage : `sh build.sh` (src/ → index.html).
Mesure : `node tools/capture.js index.html captures CIT,DON,RES,ANT,MAR "" 0.55,0.45,42` puis `python3 tools/ressemblance.py captures`.
Planches : planches/<zone>.png, niveaux -7 à +7 de gauche à droite et de haut en bas.
