/* ---------- Arrivée nette (23 nov. 2026, boucle 5) ----------
   Après une téléportation (tp, main.js), la caméra glissait depuis l'ancienne zone jusque derrière le héros, en ligne droite :
   pendant ce trajet (une à trois secondes quand l'image est lente), elle traversait collines et décors, d'où les vues
   « aplat violet » d'ASS152 −7 et les deux pics noirs devant le billet « Éveiller » de DON045 sur les captures d'avant.
   On enveloppe tp sans toucher main.js : même pose du héros, puis la caméra repart de sa cible (camInit=false, comme le
   garde du voile blanc, voile.js) : dès la première image, on voit le héros, la Pierre d'éveil et le sol du pôle.
   Aucune règle du jeu ne change ; rien de plus à dessiner. */
(function(){if(typeof tp!=='function')return;const tp0=tp;
  tp=function(id){const r=tp0.apply(this,arguments);try{camInit=false}catch(_){}return r};
  if(window.MZ)MZ.tp=tp})();
