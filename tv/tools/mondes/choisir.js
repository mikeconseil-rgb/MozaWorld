/* MozaWorld 2.49 : « repasse les générations et garde les meilleures ».
   Pose les fiches sur chaque monde brut, note chacun, garde les N meilleurs par rosace, écrit tv/mondes/*.js et src/mondes-banque.js.
   Usage : node choisir.js <dossier des mondes bruts> [N par rosace = 5] */
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const [,,dos,nn]=process.argv;const N=+nn||5,OUT=path.join(__dirname,'..','..','mondes');fs.mkdirSync(OUT,{recursive:true});
const notes=[];
for(const f of fs.readdirSync(dos).filter(f=>f.endsWith('.json'))){const W=JSON.parse(fs.readFileSync(path.join(dos,f),'utf8'));if(!W.tuiles)continue;
  try{const r=JSON.parse(execFileSync('node',[path.join(__dirname,'assigner.js'),path.join(dos,f),'-'],{encoding:'utf8'}));notes.push(Object.assign(r,{f,rosace:W.rosace,fleurs:W.fleurs}))}catch(e){console.log('échec',f)}}
const garde=[];for(const ros of [...new Set(notes.map(n=>n.rosace))]){const L=notes.filter(n=>n.rosace===ros).sort((a,b)=>b.score-a.score);garde.push(...L.slice(0,N));
  console.log(ros,L.map(n=>n.score).join(' '))}
for(const f of fs.readdirSync(OUT))if(/^m-.*\.js$/.test(f))fs.unlinkSync(path.join(OUT,f));
const B=[];for(const n of garde){const id=('m-'+n.f.replace(/\.json$/,'')).toLowerCase().replace(/[^a-z0-9-]/g,'-');
  execFileSync('node',[path.join(__dirname,'assigner.js'),path.join(dos,n.f),path.join(OUT,id+'.js')]);
  B.push({id,rosace:n.rosace,fleurs:n.fleurs,dep:n.dep,score:n.score,ombres:n.ombres,tuiles:n.tuiles,regroupement:n.regroupement})}
fs.writeFileSync(path.join(__dirname,'..','..','src','mondes-banque.js'),
  '/* MozaWorld 2.49 : la banque des mondes générés (tv/tools/mondes/choisir.js, ne pas modifier à la main) : les meilleurs de chaque rosace. */\nconst MONDES_BANQUE='+JSON.stringify(B)+';\n');
fs.writeFileSync(path.join(OUT,'notes.json'),JSON.stringify(notes.sort((a,b)=>b.score-a.score),null,1));
console.log('gardés',B.length,'sur',notes.length);
