/* Génère tv/lutrin/region.js : un morceau d'un seul tenant de la mosaïque du monde (CARTE_PLUS), pour l'Arène du plateau.
   Usage : node tv/tools/lutrin-region.js [cx cy largeur hauteur] */
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'../src/carte.js'),'utf8');
const C=JSON.parse(src.match(/const CARTE_PLUS=(\[.*?\]);\n/s)[1]);
const [cx,cy,W,H]=(process.argv.slice(2).length?process.argv.slice(2).map(Number):[2500,-500,2600,1500]);
const cen=p=>{let x=0,y=0;for(const q of p){x+=q[0];y+=q[1]}return[x/p.length,y/p.length]};
const key=q=>Math.round(q[0])+','+Math.round(q[1]);
const sel=C.filter(d=>{const c=cen(d.poly);return Math.abs(c[0]-cx)<W/2&&Math.abs(c[1]-cy)<H/2});
const E={};sel.forEach((d,i)=>{const p=d.poly;for(let k=0;k<p.length;k++){const a=key(p[k]),b=key(p[(k+1)%p.length]);const e=a<b?a+'|'+b:b+'|'+a;(E[e]=E[e]||[]).push(i)}});
const adj=sel.map(()=>new Set());for(const e in E){const l=E[e];if(l.length==2){adj[l[0]].add(l[1]);adj[l[1]].add(l[0])}}
const seen=new Array(sel.length).fill(false);let best=[];
for(let i=0;i<sel.length;i++){if(seen[i])continue;const st=[i],comp=[];seen[i]=true;while(st.length){const j=st.pop();comp.push(j);for(const k of adj[j])if(!seen[k]){seen[k]=true;st.push(k)}}if(comp.length>best.length)best=comp}
best.sort((a,b)=>a-b);const idx=new Map(best.map((g,i)=>[g,i]));
const T=best.map(g=>{const d=sel[g];return{id:d.id,nom:d.nom,mod:d.mod,type:d.type,biome:d.biome,mana:d.mana,culture:d.culture,
  p:d.poly.map(q=>[+(q[0]-cx).toFixed(1),+(q[1]-cy).toFixed(1)]),v:[...adj[g]].filter(k=>idx.has(k)).map(k=>idx.get(k)).sort((a,b)=>a-b)}});
const out='/* Généré par tv/tools/lutrin-region.js : '+T.length+' tuiles de la mosaïque du monde autour de ('+cx+', '+cy+'). Ne pas modifier à la main. */\nwindow.LUTRIN_REGION='+JSON.stringify(T)+';\n';
fs.writeFileSync(path.join(__dirname,'../lutrin/region.js'),out);console.log(T.length,'tuiles');
