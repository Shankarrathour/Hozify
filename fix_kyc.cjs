const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Settings', 'PlatformConfiguration.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Level 1: Basic
content = content.replace(
  `<select \n                      defaultValue="Self-Declaration"\n                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc' }}\n                    >\n                      <option value="Self-Declaration">Self-Declaration</option>\n                    </select>`,
  `<select \n                      defaultValue="Self-Declaration"\n                      onChange={(e) => toast.success('Level 1 updated!')}\n                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc', cursor: 'pointer' }}\n                    >\n                      <option value="Self-Declaration">Self-Declaration</option>\n                      <option value="Document Upload">Document Upload</option>\n                      <option value="Manual Review">Manual Review</option>\n                    </select>`
);

content = content.replace(
  `<div style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: '#0f172a', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>\n                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>\n                    </div>`,
  `<div style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: '#0f172a', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>\n                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>\n                    </div>`
);

// Level 2: Advanced
content = content.replace(
  `<select \n                      defaultValue="Biometric ID Scan"\n                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc' }}\n                    >\n                      <option value="Biometric ID Scan">Biometric ID Scan</option>\n                    </select>`,
  `<select \n                      defaultValue="Biometric ID Scan"\n                      onChange={(e) => toast.success('Level 2 updated!')}\n                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc', cursor: 'pointer' }}\n                    >\n                      <option value="Biometric ID Scan">Biometric ID Scan</option>\n                      <option value="Video KYC">Video KYC</option>\n                      <option value="In-Person Verification">In-Person Verification</option>\n                    </select>`
);

content = content.replace(
  `<div style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: '#0f172a', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>\n                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>\n                    </div>`,
  `<div style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: '#0f172a', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>\n                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>\n                    </div>`
);

// Verification Logic
content = content.replace(
  `<select \n                    defaultValue="Automated API Only"\n                    style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', backgroundColor: '#f8fafc' }}\n                  >\n                    <option value="Automated API Only">Automated API Only</option>\n                  </select>`,
  `<select \n                    defaultValue="Automated API Only"\n                    onChange={(e) => toast.success('Verification logic updated!')}\n                    style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', backgroundColor: '#f8fafc', cursor: 'pointer' }}\n                  >\n                    <option value="Automated API Only">Automated API Only</option>\n                    <option value="Hybrid (API + Manual)">Hybrid (API + Manual)</option>\n                    <option value="Manual Only">Manual Only</option>\n                  </select>`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully applied precise changes to KYC & Compliance');
