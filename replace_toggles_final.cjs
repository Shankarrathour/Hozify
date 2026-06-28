const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages', 'Settings');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // We know the exact string pattern of the onClick because we replaced it globally:
  // onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }}
  // We can just look for this literal string!

  const onClickStr = 'onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }}';
  
  // Outer div looks like:
  // <div onClick={...} style={{ width: '40px', height: '24px', background: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
  // Let's use a very safe regex that accounts for `>` in the arrow function.

  const toggleRegex = /<div\s+onClick=\{\(e\)\s*=>\s*\{[^}]+\}\}\s*style=\{\{\s*width:\s*['"](?:36|40)px['"][\s\S]*?\}\}>[\s\S]*?<div\s+style=\{\{[\s\S]*?borderRadius:\s*['"]50%['"][\s\S]*?\}\}>\s*<\/div>\s*<\/div>/gi;

  content = content.replace(toggleRegex, (match) => {
    const isChecked = match.includes("justifyContent: 'flex-end'") || match.includes('justifyContent: "flex-end"');
    return `<Toggle defaultChecked={${isChecked}} />`;
  });

  if (content !== original) {
    if (!content.includes('import Toggle')) {
      const lastImportIdx = content.lastIndexOf('import ');
      if (lastImportIdx !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIdx);
        content = content.substring(0, endOfLine + 1) + "import Toggle from '../../components/common/Toggle';\n" + content.substring(endOfLine + 1);
      } else {
        content = "import Toggle from '../../components/common/Toggle';\n" + content;
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log('Replaced toggles in: ' + file);
  }
}
console.log('Total files modified: ' + modifiedCount);
