const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/pages/Settings/MaintenanceMode.jsx');

let content = fs.readFileSync(file, 'utf8');

// Normalize CRLF to LF
content = content.replace(/\r\n/g, '\n');

// 1. Add import for Toggle
if (!content.includes('import Toggle')) {
  content = content.replace(
    "import toast from 'react-hot-toast';",
    "import toast from 'react-hot-toast';\nimport Toggle from '../../components/common/Toggle';"
  );
}

// 2. Replace the 56px toggle
const toggleRegex = /<div onClick=\{\(e\) => \{ e\.preventDefault\(\); toast\.success\("Action performed successfully!"\); \}\} style=\{\{ width: '56px', height: '32px', background: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', padding: '3px', boxSizing: 'border-box', justifyContent: 'flex-start', cursor: 'pointer', transition: 'all 0\.2s' \}\}>\n\s*<div style=\{\{ width: '26px', height: '26px', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 4px rgba\(0,0,0,0\.1\)' \}\}>\s*<\/div>\n\s*<\/div>/g;

content = content.replace(toggleRegex, `<Toggle defaultChecked={false} />`);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed MaintenanceMode toggle');
