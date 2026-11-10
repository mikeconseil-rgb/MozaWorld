#!/bin/sh
# Assemble src/* en un seul fichier index.html (format artifact : pas de <html>/<body>).
cd "$(dirname "$0")"
{ cat src/head.html
  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>'
  echo '<script>'
  cat src/core.js src/zones1.js src/zones2.js src/main.js
  echo '</script>'; } > index.html
wc -c index.html
