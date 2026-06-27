const fs = require('fs');
const path = require('path');
const dir = 'src/pages/Settings';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Regex to match the outer div of the toggle
  // <div ... width: '40px' ... height: '22px' ...> ... <div ... width: '18px' ...></div> </div>
  const toggleRegex = /<div[\s\S]*?width:\s*['"]40px['"][\s\S]*?height:\s*['"]22px['"][\s\S]*?>[\s\S]*?<div[\s\S]*?width:\s*['"]18px['"][\s\S]*?height:\s*['"]18px['"][\s\S]*?><\/div>\s*<\/div>/g;

  content = content.replace(toggleRegex, (match) => {
    // Determine if it was "On" or "Off" by checking for 'right: '2px'' or dark background.
    const isChecked = match.includes("right: '2px'") || match.includes('right: "2px"');
    return `<Toggle defaultChecked={${isChecked}} />`;
  });

  if (content !== original) {
    // Add import if missing
    if (!content.includes('import Toggle')) {
      // Find the last import
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
    console.log('Replaced toggles in: ' + file);
  }
}
console.log('Total files modified: ' + modifiedCount);
