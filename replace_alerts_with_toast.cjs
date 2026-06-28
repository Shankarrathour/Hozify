const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages', 'Settings');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace alert() with toast.success()
  content = content.replace(/alert\("Action performed successfully"\)/g, 'toast.success("Action performed successfully!")');
  content = content.replace(/alert\('Action performed successfully'\)/g, "toast.success('Action performed successfully!')");

  if (content !== original) {
    // Add import if missing
    if (!content.includes('import toast from')) {
      const lastImportIdx = content.lastIndexOf('import ');
      if (lastImportIdx !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIdx);
        content = content.substring(0, endOfLine + 1) + "import toast from 'react-hot-toast';\n" + content.substring(endOfLine + 1);
      } else {
        content = "import toast from 'react-hot-toast';\n" + content;
      }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log('Replaced alerts in: ' + file);
  }
}
console.log('Total files modified: ' + modifiedCount);
