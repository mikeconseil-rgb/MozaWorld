#!/bin/sh
# Assemble src/* en une seule page index.html (ouvrable dans le navigateur de la télé).
cd "$(dirname "$0")"
{ echo '<!doctype html><html lang="fr"><head><meta charset="utf-8">'
  cat src/head.html
  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>'
  echo '<script>'
  cat src/carte.js src/core.js src/zones1.js src/zones2.js src/zones3.js src/zonesplus.js src/poles-decor.js src/sol.js src/lieux.js src/cartes.js src/cartes-donnees.js src/routes.js src/mutations.js src/styles.js src/combat.js src/economie.js src/assemblees.js src/habillage.js src/cartes-images.js src/cartes-visuel.js src/ecrin.js src/anim-combat.js src/manette.js src/xbox.js src/fluidite.js src/grimoire.js src/heros.js src/bandeau.js src/sauvegardes.js src/chemins.js src/poussiere.js src/duel.js src/musique.js src/scenarios.js src/main.js src/epure.js src/monde-anime.js
  echo '</script></body></html>'; } > index.html
wc -c index.html
