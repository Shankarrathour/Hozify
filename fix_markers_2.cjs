const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('d:\\Zenvora\\Hozify_Admin (2)\\src', function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasMarkers = false;
    let lines = content.split(/\r?\n/);
    let newLines = lines.filter(line => {
      let t = line.trim();
      if (t.startsWith('>>>>>>>') || t.startsWith('=======')) {
        hasMarkers = true;
        return false;
      }
      return true;
    });
    if (hasMarkers) {
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
      console.log('Fixed', filePath);
    }
  }
});
