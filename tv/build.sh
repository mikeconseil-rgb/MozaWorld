#!/bin/sh
# Assemble src/* en une seule page index.html (ouvrable dans le navigateur de la télé).
cd "$(dirname "$0")"
{ echo '<!doctype html><html lang="fr"><head><meta charset="utf-8">'
  cat src/head.html
  # 2.27.1 : Three.js servi depuis le dépôt (le CDN peut tomber ou être bloqué sur la Xbox), CDN en secours seulement
  echo '<script src="android/assets/three.min.js"></script>'
  echo '<script>window.THREE||document.write('"'"'<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>'"'"')</script>'
  # 2.27.1 : une erreur au démarrage s'affiche sous le titre au lieu de laisser la page muette
  echo '<script>addEventListener("error",function(e){if(/Nouvel essai/.test(e.message||""))return;var v=document.getElementById("seuil-ver");if(v&&!window.MZ)v.textContent="Erreur au démarrage : "+(e.message||e)+" (rechargez la page)"})</script>'
  echo '<script>'
  cat src/arene-garde.js src/carte.js src/zones-fiches.js src/core.js src/zones1.js src/zones2.js src/zones3.js src/zonesplus.js src/poles-decor.js src/sol.js src/lieux.js src/cartes.js src/cartes-donnees.js src/routes.js src/mutations.js src/styles.js src/ciels.js src/combat.js src/plateau.js src/economie.js src/assemblees.js src/siege.js src/donjons.js src/commerce.js src/domaines.js src/hordes.js src/rivaux.js src/pacte.js src/tours.js src/caravanes.js src/lois.js src/habillage.js src/cartes-images.js src/cartes-visuel.js src/ecrin.js src/anim-combat.js src/manette.js src/xbox.js src/fluidite.js src/grimoire.js src/heros.js src/bandeau.js src/sauvegardes.js src/chemins.js src/poussiere.js src/duel.js src/musique.js src/scenarios.js src/scenarios-zones.js src/main.js src/arrivee.js src/inscriptions-donnees.js src/quetes-donnees.js src/inscriptions.js src/quetes.js src/epure.js src/monde-anime.js src/factions.js src/minicarte.js src/remparts.js src/memoire.js src/voile.js src/carnet.js src/carnet-combat.js src/carnet-menu.js src/tactile.js src/tactique.js src/factions-combat.js src/arene.js src/pixel.js src/bestiaire.js src/portraits-combat.js src/cartes-relook.js src/paquet.js
  echo '</script></body></html>'; } > index.html
wc -c index.html
