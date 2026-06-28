const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/pages/Settings/WalletSettings.jsx');

let content = fs.readFileSync(file, 'utf8');

// 1. Add import for Toggle
if (!content.includes('import Toggle')) {
  content = content.replace(
    "import toast from 'react-hot-toast';",
    "import toast from 'react-hot-toast';\nimport Toggle from '../../components/common/Toggle';"
  );
  // fallback if toast isn't there
  if (!content.includes('import Toggle')) {
    content = content.replace(
      "import AdminShell",
      "import Toggle from '../../components/common/Toggle';\nimport AdminShell"
    );
  }
}

// Enable Wallet Toggle (Checked)
content = content.replace(
  `<div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '40px', height: '24px', background: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>\n                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>\n                  </div>`,
  `<Toggle defaultChecked={true} />`
);

// Auto-Settlement Toggle (Unchecked)
content = content.replace(
  `<div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '40px', height: '24px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-start', cursor: 'pointer' }}>\n                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></div>\n                  </div>`,
  `<Toggle defaultChecked={false} />`
);

// Withdrawal Notifications Toggle (Checked)
content = content.replace(
  `<div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '40px', height: '24px', background: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>\n                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>\n                  </div>`,
  `<Toggle defaultChecked={true} />`
);

// MFA Enforcement Toggle (36px Checked)
content = content.replace(
  `<div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '36px', height: '20px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>\n                  <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>\n                </div>`,
  `<Toggle defaultChecked={true} />`
);

fs.writeFileSync(file, content);
console.log('Fixed WalletSettings');
