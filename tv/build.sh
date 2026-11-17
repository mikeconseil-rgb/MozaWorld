#!/bin/sh
# Assemble src/* en une seule page index.html (ouvrable dans le navigateur de la télé).
cd "$(dirname "$0")"
{ echo '<!doctype html><html lang="fr"><head><meta charset="utf-8">'
  cat src/head.html
  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>'
  echo '<script>'
  cat src/carte.js src/core.js src/zones1.js src/zones2.js src/zones3.js src/zonesplus.js src/mutations.js src/styles.js src/combat.js src/economie.js src/habillage.js src/manette.js src/xbox.js src/fluidite.js src/grimoire.js src/main.js
  echo '</script></body></html>'; } > index.html
wc -c index.html
