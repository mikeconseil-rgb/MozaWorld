/* MozaWorld 2.52 : le pont entre le lutrin et l'exploration (28 nov., demande de l'utilisateur : « Depuis l'arène je veux pouvoir
   me téléporter dans une zone. Ensuite revenir via le menu. Sur la carte du lutrin indiqué avec une figure à mon image la zone où j'étais »).
   - Le lutrin écrit l'id de la zone visée dans localStorage (mz-aller) puis ouvre le jeu. Ici, au démarrage : on reprend la partie
     (ou on en commence une, dans le monde du lutrin), on voyage vers la région de la zone si elle est loin, puis le héros apparaît
     devant sa Pierre d'éveil.
   - Menu pause → « Le lutrin » : on enregistre la partie et la zone où l'on est (mz-lutrin-ici), puis on ouvre le lutrin. */
function allerLutrin(){try{if(started){S.pos=[P.x,P.z,P.yaw];const z=zoneAt(P.x,P.z);if(z)localStorage.setItem('mz-lutrin-ici',z.id)}save()}catch(_){}
  if(typeof libererGPU==='function')libererGPU();setTimeout(()=>{location.href='lutrin.html'},80)}
(()=>{let id=null;try{id=localStorage.getItem('mz-aller')}catch(_){}if(!id)return;
  const fini=()=>{try{localStorage.removeItem('mz-aller');localStorage.removeItem('mz-aller-v')}catch(_){}};
  const W=typeof ZWB!=='undefined'&&ZWB[id];if(!W||(W.d&&W.d.ombre)){fini();return}
  if(!started){if(hasSave)startGame(false);else{startGame(true);if(!started)return}}   /* partie neuve loin de sa région : elle voyage d'abord */
  const Z=ZB[id];
  if(Z&&!Z.logique&&SPOTS[id]){fini();tp(id);recaler(true);if(typeof CULL!=='undefined')CULL.dirty=true;
    setTimeout(()=>toast('Téléporté depuis le lutrin',zI(id).nom,'Menu → « Le lutrin » pour revenir au plateau.'),400);return}
  let v=0;try{v=+(localStorage.getItem('mz-aller-v')||0)}catch(_){}
  if(v>=1){fini();return}   /* déjà voyagé une fois sans trouver la zone : on n'insiste pas */
  try{localStorage.setItem('mz-aller-v','1')}catch(_){}
  voyagerRegion(W.c,'jeu')})();
