/* Arène (22 nov.) : la page index.html?arene lance des combats de test. Rien n'y touche la vraie partie :
   le stockage du navigateur est remplacé par une mémoire de page (seuls les réglages d'image sont lus et gardés). */
window.MZ_ARENE=/[?&#]arene/.test(location.search+location.hash);
if(window.MZ_ARENE)(function(){try{const P=Storage.prototype,g=P.getItem,s=P.setItem,r=P.removeItem,m={},garde=/^mz-tv-(q2|style)$/;
  P.getItem=function(k){return garde.test(k)?g.call(this,k):(Object.prototype.hasOwnProperty.call(m,k)?m[k]:null)};
  P.setItem=function(k,v){if(garde.test(k))s.call(this,k,v);else m[k]=String(v)};
  P.removeItem=function(k){if(!garde.test(k))delete m[k]}}catch(_){}})();
