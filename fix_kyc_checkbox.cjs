const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Settings', 'PlatformConfiguration.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add useState import
content = content.replace(
  "import React from 'react';",
  "import React, { useState } from 'react';"
);

// 2. Add state variables inside PlatformConfiguration
content = content.replace(
  "export default function PlatformConfiguration() {",
  "export default function PlatformConfiguration() {\n  const [level1Checked, setLevel1Checked] = useState(true);\n  const [level2Checked, setLevel2Checked] = useState(true);"
);

// 3. Fix Level 1 block
// Let's replace the whole div for Level 1
const level1Regex = /<div style={{ position: 'relative' }}>\s*<select[^>]*>\s*<option[^>]*>Self-Declaration<\/option>\s*(?:<option[^>]*>Document Upload<\/option>\s*<option[^>]*>Manual Review<\/option>\s*)?<\/select>\s*<div[^>]*>\s*<svg[^>]*><polyline[^>]*><\/polyline><\/svg>\s*<\/div>\s*<\/div>/g;

const newLevel1 = `<div style={{ position: 'relative' }}>
                    <select 
                      defaultValue="Self-Declaration"
                      onChange={(e) => toast.success('Level 1 updated!')}
                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc', cursor: 'pointer', opacity: level1Checked ? 1 : 0.6 }}
                    >
                      <option value="Self-Declaration">Self-Declaration</option>
                      <option value="Document Upload">Document Upload</option>
                      <option value="Manual Review">Manual Review</option>
                    </select>
                    <div 
                      onClick={() => {
                        setLevel1Checked(!level1Checked);
                        toast.success('Level 1 ' + (!level1Checked ? 'enabled' : 'disabled'));
                      }}
                      style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: level1Checked ? '#0f172a' : '#fff', border: level1Checked ? 'none' : '1px solid #cbd5e1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 10 }}
                    >
                      {level1Checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                  </div>`;

content = content.replace(level1Regex, newLevel1);

// 4. Fix Level 2 block
const level2Regex = /<div style={{ position: 'relative' }}>\s*<select[^>]*>\s*<option[^>]*>Biometric ID Scan<\/option>\s*(?:<option[^>]*>Video KYC<\/option>\s*<option[^>]*>In-Person Verification<\/option>\s*)?<\/select>\s*<div[^>]*>\s*<svg[^>]*><polyline[^>]*><\/polyline><\/svg>\s*<\/div>\s*<\/div>/g;

const newLevel2 = `<div style={{ position: 'relative' }}>
                    <select 
                      defaultValue="Biometric ID Scan"
                      onChange={(e) => toast.success('Level 2 updated!')}
                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc', cursor: 'pointer', opacity: level2Checked ? 1 : 0.6 }}
                    >
                      <option value="Biometric ID Scan">Biometric ID Scan</option>
                      <option value="Video KYC">Video KYC</option>
                      <option value="In-Person Verification">In-Person Verification</option>
                    </select>
                    <div 
                      onClick={() => {
                        setLevel2Checked(!level2Checked);
                        toast.success('Level 2 ' + (!level2Checked ? 'enabled' : 'disabled'));
                      }}
                      style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: level2Checked ? '#0f172a' : '#fff', border: level2Checked ? 'none' : '1px solid #cbd5e1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 10 }}
                    >
                      {level2Checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                  </div>`;

content = content.replace(level2Regex, newLevel2);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully applied precise changes to KYC checkboxes');
