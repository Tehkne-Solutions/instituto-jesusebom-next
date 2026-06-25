const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesFile = path.join(root, 'data', 'pagesContent.ts');
const siteFile = path.join(root, 'data', 'siteContent.ts');
const doacaoFile = path.join(root, 'app', 'doacao', 'page.tsx');
const imagesFile = path.join(root, 'data', 'institutoImages.ts');

function auditFile(filePath, treatPages=false){
  const text = fs.readFileSync(filePath,'utf8');
  const imgs = (text.match(/institutoImages\.[A-Za-z0-9_.]+/g)||[]);
  const counts = {};
  imgs.forEach(i=>counts[i]=(counts[i]||0)+1);
  const dups = Object.entries(counts).filter(([,v])=>v>1);
  const direct = (text.match(/"\/assets\/[^\"]+"|'/g) || []).length;
  return { file: path.relative(root,filePath), totalImgs: imgs.length, uniqueImgs: Object.keys(counts).length, dups, directAssetLiterals: (text.match(/"\/assets\/[^"]+"|'\/assets\/[^']+'/g)||[]) };
}

function auditPages(filePath){
  const text = fs.readFileSync(filePath,'utf8');
  // split by top-level page keys like "slug": {...}
  const pageRegex = /"([a-z0-9-]+)"\s*:\s*\{/g;
  const pages = [];
  let m; let lastIndex=0; let current=null;
  while((m=pageRegex.exec(text))){
    if(current){ pages.push({slug: current, body: text.slice(lastIndex, m.index)});
    }
    current = m[1]; lastIndex = m.index;
  }
  if(current){ pages.push({slug: current, body: text.slice(lastIndex)});
  }
  const results = [];
  pages.forEach(p=>{
    const imgs = (p.body.match(/institutoImages\.[A-Za-z0-9_.]+/g)||[]);
    const counts = {};
    imgs.forEach(i=>counts[i]=(counts[i]||0)+1);
    const dups = Object.entries(counts).filter(([,v])=>v>1);
    if(dups.length) results.push({slug: p.slug, total: imgs.length, unique: Object.keys(counts).length, dups});
  });
  return results;
}

const out = {
  pagesAudit: auditPages(pagesFile),
  site: auditFile(siteFile),
  doacao: auditFile(doacaoFile),
  imagesRegistry: fs.readFileSync(imagesFile,'utf8').match(/\w+\s*:\s*"\/assets\/[^"]+"/g) || []
};
console.log(JSON.stringify(out,null,2));
