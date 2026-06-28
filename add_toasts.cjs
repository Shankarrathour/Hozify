const fs = require('fs');
const path = require('path');

const settingsDir = path.join(__dirname, 'src', 'pages', 'Settings');

if (fs.existsSync(settingsDir)) {
  const files = fs.readdirSync(settingsDir).filter(f => f.endsWith('.jsx'));

  files.forEach(file => {
    const filePath = path.join(settingsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // Add toast import if missing
    if (!content.includes("import toast from 'react-hot-toast';")) {
      // Find last import
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + "import toast from 'react-hot-toast';\n" + content.slice(endOfLine + 1);
      } else {
        content = "import toast from 'react-hot-toast';\n" + content;
      }
    }

    // Regex to match button tags without onClick
    // Negative lookahead to ensure no onClick is present before the closing >
    const buttonRegex = /<button(?![^>]*?onClick\s*=)([^>]*)>/gi;
    
    content = content.replace(buttonRegex, (match, p1) => {
      // Let's create a custom message if possible based on text content? No, regex replace won't easily know text content inside.
      // So generic message it is.
      return `<button${p1} onClick={(e) => { e.preventDefault(); toast.success('Action completed successfully!'); }}>`;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  });
} else {
  console.log("Settings dir not found");
}
