/* ---------- Voile blanc (22 nov. 2026, fil « Corriger le brouillard blanc après montée de niveau ») ----------
   Sur la Xbox, après une mue ou un passage au menu, la vue 3D devenait parfois d'un blanc gris uni (l'interface restait
   intacte), et le restait même en changeant de zone. Impossible à reproduire sur PC : on soupçonne un état du rendu
   (lissage de l'atmosphère, caméra, étalonnage ou images de rendu) qui part à la dérive quand la carte graphique de la
   Xbox est à bout. Ici, un garde :
   (1) toutes les 2 s dans le monde, on lit 9 points de l'image finale (une lecture minuscule) ;
   (2) si les 9 points sont presque identiques et clairs, l'image est « voilée » : on note l'état du rendu (journal
       « mz-voile », 5 derniers, lisible par window.MZvoile()) ;
   (3) on répare par paliers : d'abord on remet à zéro les lissages (atmosphère, étalonnage, caméra), puis on refait les
       images de rendu, puis, en dernier recours (une fois par 10 min au plus), on recharge la région là où est le héros. */
const VOILE={t:0,n:0,etape:0,px:new Uint8Array(4),vu:false};
function voileMesure(){const gl=renderer.getContext();if(gl.isContextLost&&gl.isContextLost())return null;
  const W=gl.drawingBufferWidth,H=gl.drawingBufferHeight,o=[];
  for(const fy of[.15,.4,.65])for(const fx of[.2,.5,.8]){gl.readPixels(Math.floor(W*fx),Math.floor(H*fy),1,1,gl.RGBA,gl.UNSIGNED_BYTE,VOILE.px);o.push([VOILE.px[0],VOILE.px[1],VOILE.px[2]])}
  return o}
function voileUni(o){let mn=[255,255,255],mx=[0,0,0],L=0;
  for(const c of o){for(let j=0;j<3;j++){mn[j]=Math.min(mn[j],c[j]);mx[j]=Math.max(mx[j],c[j])}L+=.299*c[0]+.587*c[1]+.114*c[2]}
  L/=o.length;return Math.max(mx[0]-mn[0],mx[1]-mn[1],mx[2]-mn[2])<30&&L>160}   /* relevé sur 57 vues (16 zones, −7, 0, +7) : une vue claire normale varie d'au moins 65 ; voilée, de 25 au plus (vignette et grain) */
const voileR=v=>Array.isArray(v)?v.map(voileR):typeof v==='number'?(isFinite(v)?Math.round(v*1000)/1000:String(v)):v;
function voileNote(o){try{const Z=typeof curZ!=='undefined'&&curZ,i=renderer.info;
  const d={t:Date.now(),v:typeof MZ_VERSION!=='undefined'?MZ_VERSION:'',etape:VOILE.etape+1,mode,zone:Z?Z.id:'',lv:Z?Z.lv:null,q:QI,
    cam:voileR(camera.position.toArray()),heros:voileR([P.x,P.y,P.z]),fog:voileR(scene.fog.density),hor:voileR(A.hor),top:voileR(A.top),
    exp:voileR(A.exp),bl:voileR(A.bl),sunI:voileR(A.sunI),ge:voileR(G.e),gs:voileR(G.s),sig:voileR([sigCur.on,sigCur.k]),
    rt:rtS?[rtS.width,rtS.height]:null,geo:i.memory.geometries,tex:i.memory.textures,points:o};
  const L=JSON.parse(localStorage.getItem('mz-voile')||'[]');L.push(d);localStorage.setItem('mz-voile',JSON.stringify(L.slice(-5)))}catch(_){}}
function voileRepare(){VOILE.etape++;
  /* 1. les lissages repartent de leur cible : atmosphère et étalonnage (A, G), signature de la zone, caméra */
  try{Afirst=true;sigCur.on=0;sigCur.t=0;camInit=false;CULL.dirty=true;for(const k in STY)STY[k].w=0}catch(_){}
  /* 2. ensuite, on refait les images de rendu (cibles, profondeur, ombres) */
  if(VOILE.etape===2)try{resize()}catch(_){}
  /* 3. en dernier recours, on recharge la région, une fois par 10 minutes au plus */
  /* 22 nov. : jamais dans la première minute après un chargement, et seulement si la limite a pu être enregistrée (sinon pas de rechargement : aucune boucle possible) */
  if(VOILE.etape>=3&&performance.now()>60000){let t=0,ok=false;try{t=+localStorage.getItem('mz-voile-rech')||0}catch(_){}
    if(Date.now()-t>6e5&&typeof voyagerRegion==='function'&&typeof REGION!=='undefined'){try{localStorage.setItem('mz-voile-rech',String(Date.now()));ok=localStorage.getItem('mz-voile-rech')===String(Date.now())||+localStorage.getItem('mz-voile-rech')>t}catch(_){}if(ok)voyagerRegion(REGION.c,'jeu')}}}
const _drawVoile=draw;
draw=function(t){_drawVoile(t);
  if(!started||mode!=='monde'||(typeof memLibere!=='undefined'&&memLibere))return;const now=performance.now();if(now-VOILE.t<2000)return;VOILE.t=now;
  let o=null;try{o=voileMesure()}catch(_){return}if(!o)return;
  if(!voileUni(o)){VOILE.n=0;if(VOILE.etape&&!VOILE.vu){VOILE.vu=true;if(typeof toast==='function')toast('Image réparée','Le voile blanc est parti','Le rendu s\'était bloqué ; il a été remis à zéro. C\'est noté pour la suite.')}VOILE.etape=0;return}
  VOILE.n++;if(VOILE.n<2)return;   /* deux relevés de suite (4 s), pour ne pas confondre avec un éclair ou un plein écran de neige */
  VOILE.n=0;voileNote(o);voileRepare()};
window.MZvoile=()=>{try{return JSON.parse(localStorage.getItem('mz-voile')||'[]')}catch(_){return[]}};
