const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');
const pagesFile = path.join(root, 'data', 'pagesContent.ts');
const text = fs.readFileSync(pagesFile,'utf8');
const pageRegex = /"([a-z0-9-]+)"\s*:\s*\{/g;
let m; let lastIndex=0; let current=null; const pages=[];
while((m=pageRegex.exec(text))){
  if(current){ pages.push({slug: current, body: text.slice(lastIndex, m.index)});
  }
  current = m[1]; lastIndex = m.index;
}
if(current){ pages.push({slug: current, body: text.slice(lastIndex)});
}
pages.forEach(p=>{
  const imgs = (p.body.match(/institutoImages\.[A-Za-z0-9_.]+/g)||[]);
  const counts = {};
  imgs.forEach(i=>counts[i]=(counts[i]||0)+1);
  console.log('PAGE:', p.slug);
  console.log('  total images:', imgs.length);
  console.log('  unique images:', Object.keys(counts).length);
  console.log('  counts:', JSON.stringify(counts));
});
