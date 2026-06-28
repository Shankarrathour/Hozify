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
    if (content.includes('<<<<<<< HEAD')) {
      // Replace with INCOMING content (between ======= and >>>>>>>)
      let newContent = content.replace(/<<<<<<< HEAD\r?\n([\s\S]*?)\r?\n=======\r?\n([\s\S]*?)\r?\n>>>>>>> [^\n]*\r?\n?/g, "$2\n");
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Resolved with INCOMING', filePath);
    }
  }
});
