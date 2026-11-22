/* Arène (22 nov.) : demande de l'utilisateur, « un module juste pour tester le jeu de cartes », avec des cycles courts.
   index.html?arene (ou tv/arene.html) : on choisit le champ, le paquet, le combat, la zone et son niveau, on joue, on rejoue.
   La vraie partie n'est jamais touchée (voir arene-garde.js). */
window.TAC_ON=false;
if(window.MZ_ARENE)(function(){
  const AR={champ:'tac',profil:'depart',kind:'renc',type:'ANT',niv:2,v:0,d:0,der:''};
  const NOMT={ANT:'Antre',DON:'Donjon',MAR:'Assemblée',CIT:'Citadelle',hasard:'Au hasard'},TYPES=['ANT','DON','MAR','CIT','hasard'];
  const NOMP={depart:'Départ (cartes de palier 1)',milieu:'Milieu (paliers 1 à 3)',fort:'Fort (paliers 1 à 6)'},PROF=['depart','milieu','fort'];
  let base=null;
  function profil(){if(!base)return;for(const id in base.lv)S.lv[id]=base.lv[id];S.deck=base.deck.slice();const L={depart:1,milieu:3,fort:6}[AR.profil]||1;if(L<2)return;
    const deck=[];for(const Z of ZN){if(!S.own[Z.id])continue;const id=Z.id,s=Math.sign(S.lv[id]||1);if((Z.mod||id)==='RES'){S.lv[id]=Math.min(3,L);continue}S.lv[id]=s*L;
      for(let n=1;n<=L;n++){const k=id+'#'+(s<0?'-':'+')+n;if(typeof CK!=='undefined'&&CK[k])deck.push(k)}}if(deck.length)S.deck=deck}
  function lancer(){window.TAC_ON=AR.champ==='tac';profil();S.hurt=0;S.fatigue=0;S.res={};for(const t of MTYPES)S.res[t]=40;
    const c=ZN.filter(Z=>!S.own[Z.id]&&(Z.mod||Z.id)!=='RES'&&(AR.type==='hasard'||(Z.mod||Z.id)===AR.type)&&(typeof MON==='undefined'||MON[Z.id]||MON[Z.mod]));
    const Z=c.length?c[Math.floor(Math.random()*c.length)]:ZN.find(Z=>!S.own[Z.id]&&(Z.mod||Z.id)!=='RES');
    S.lv[Z.id]=(Math.random()<.5?-1:1)*AR.niv;mode='monde';startCombat(Z,AR.kind)}
  function menu(f){mode='menu';const o=[
    {l:'Lancer le combat',ic:'⚔',go:lancer},
    {l:'Champ de bataille',ic:'⬡',d:AR.champ==='tac'?'Mosaïque : vous déplacez vos créatures':'Plateau à 3 voies (le jeu actuel)',go:()=>{AR.champ=AR.champ==='tac'?'voies':'tac';menu(1)}},
    {l:'Paquet',ic:'✦',d:NOMP[AR.profil],go:()=>{AR.profil=PROF[(PROF.indexOf(AR.profil)+1)%3];menu(2)}},
    {l:'Combat',ic:'☗',d:AR.kind==='eveil'?'Éveil : deux gardiens, dont un chef':'Rencontre : deux ou trois créatures',go:()=>{AR.kind=AR.kind==='eveil'?'renc':'eveil';menu(3)}},
    {l:'Zone',ic:'◈',d:NOMT[AR.type],go:()=>{AR.type=TYPES[(TYPES.indexOf(AR.type)+1)%TYPES.length];menu(4)}},
    {l:'Niveau de la zone',ic:'▲',d:String(AR.niv),go:()=>{AR.niv=AR.niv%7+1;menu(5)}},
    {l:'Quitter l\'Arène',ic:'↩',go:()=>{location.href=location.pathname}}];
    ui('menu',{sur:'Arène · test du combat',t:'Choisir le combat',corps:`<p>Victoires ${AR.v} · défaites ${AR.d}${AR.der?' · dernier : '+AR.der:''}</p><p class="petit">OK sur une ligne change le réglage. Rien ici ne touche à votre partie.</p>`,opts:o,f:f||0})}
  window.addEventListener('load',()=>setTimeout(()=>{try{window.MZ.start()}catch(e){console.error(e)}
    setTimeout(()=>{base={lv:Object.assign({},S.lv),deck:S.deck.slice()};const fc=finCombat,fu=fuir;
      finCombat=function(ok){const C=CB;fermerCombat();ok?AR.v++:AR.d++;AR.der=(ok?'victoire':'défaite')+' en '+(C?C.tour:0)+' tours, héros à '+(C?C.hero.pv:0)+' PV';S.hurt=0;menu(0)};
      fuir=function(){fermerCombat();AR.der='fuite';menu(0)};
      const st=document.createElement('style');st.textContent='body.arene #hud,body.arene #minicarte{visibility:hidden}';document.head.appendChild(st);document.body.classList.add('arene');
      menu(0)},900)},300));
})();
