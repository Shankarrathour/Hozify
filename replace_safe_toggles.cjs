const fs = require('fs');
const path = require('path');
const dir = 'src/pages/Settings';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Safe regex that matches immediately nested divs
  const toggleRegex = /<div[^>]*width:\s*['"](?:36|40)px['"][^>]*height:\s*['"](?:20|24)px['"][^>]*>\s*<div[^>]*borderRadius:\s*['"]50%['"][^>]*>\s*<\/div>\s*<\/div>/gi;

  content = content.replace(toggleRegex, (match) => {
    // Check if it's "On" by checking background color or flex-end
    const isChecked = match.includes("justifyContent: 'flex-end'") || match.includes('justifyContent: "flex-end"');
    return `<Toggle defaultChecked={${isChecked}} />`;
  });

  if (content !== original) {
    // Add import if missing
    if (!content.includes('import Toggle')) {
      const lastImportIdx = content.lastIndexOf('import ');
      if (lastImportIdx !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIdx);
        content = content.substring(0, endOfLine + 1) + "import Toggle from '../../components/common/Toggle';\n" + content.substring(endOfLine + 1);
      } else {
        content = "import Toggle from '../../components/common/Toggle';\n" + content;
      }
    }

    fs.writeFileSync(filePath, content);
    modifiedCount++;
    console.log('Replaced safely in: ' + file);
  }
}
console.log('Total files safely modified: ' + modifiedCount);
