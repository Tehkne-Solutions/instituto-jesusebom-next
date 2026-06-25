const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');
const imagesFile = path.join(root,'data','institutoImages.ts');
const walk = (dir)=>{
  const res=[];
  fs.readdirSync(dir,{withFileTypes:true}).forEach(d=>{
    const p=path.join(dir,d.name);
    if(d.isDirectory()){
      if(d.name==='public') return; // skip public assets
      res.push(...walk(p));
    } else if(/\.tsx?$/.test(d.name)){
      res.push(p);
    }
  });
  return res;
};
const files = walk(root);
const imgTxt = fs.readFileSync(imagesFile,'utf8');
// crude parse: find lines like key: "/assets/instituto/.."
const map = {};
const regex = /([a-zA-Z0-9_]+)\s*:\s*"(\/assets\/instituto\/[^"]+)"/g;
let m;
while((m=regex.exec(imgTxt))){ map[m[2]] = `institutoImages.${m[1]}`; }
// also handle nested object keys (programas, paginas, doacao, historias)
// fallback: also detect keys inside nested sections like programas: { key: "/assets/..."
const fmatches = [];
files.forEach(fpath=>{
  if(fpath.endsWith('data\\institutoImages.ts')) return;
  const txt = fs.readFileSync(fpath,'utf8');
  const occ = [...txt.matchAll(/("|')((?:\/assets\/instituto\/)[^"']+)("|')/g)];
  occ.forEach(o=>{
    const literal = o[2];
    const line = txt.slice(0,o.index).split('\n').length;
    const suggestion = map[literal] || null;
    fmatches.push({file:path.relative(root,fpath), line, literal, suggestion});
  });
});
console.log(JSON.stringify({totalFiles: files.length, findings: fmatches},null,2));
