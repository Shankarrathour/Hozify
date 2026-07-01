const fs = require('fs');
const file = 'src/pages/ReferralManagement/ReferralDashboard.jsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Add onClick to MetricCard
code = code.replace(
  /function MetricCard\(\{ title, value, change, icon \}\) \{/,
  'function MetricCard({ title, value, change, icon, onClick }) {'
);
code = code.replace(
  /<div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all">/,
  '<div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all cursor-pointer" onClick={onClick}>'
);

// 2. Add onClick to CampaignItem
code = code.replace(
  /function CampaignItem\(\{ icon, title, referrals, conv \}\) \{/,
  'function CampaignItem({ icon, title, referrals, conv, onClick }) {'
);
code = code.replace(
  /<div className="flex items-center gap-3 py-4 border-b border-slate-100">/,
  '<div className="flex items-center gap-3 py-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors rounded-lg px-2" onClick={onClick}>'
);

// 3. Add useToast inside ReferralDashboard
code = code.replace(
  /export default function ReferralDashboard\(\) \{/,
  'export default function ReferralDashboard() {\n  const { addToast } = useToast();'
);

// 4. Add action to Last 30 Days
code = code.replace(
  /<button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl font-medium text-sm">/,
  '<button type="button" onClick={() => addToast("Filtering data for Last 30 Days", "info")} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors">'
);

// 5. Add action to Export PDF
// Since there are multiple buttons matching the previous one, let's use exact match or a custom replace
code = code.replace(
  /<button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl font-medium text-sm">\s*<Download size=\{14\} \/>\s*Export PDF\s*<\/button>/m,
  `<button type="button" onClick={() => addToast("Exporting Dashboard as PDF...", "info")} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors">\n              <Download size={14} />\n              Export PDF\n            </button>`
);

// 6. Add action to Daily & Weekly (And convert to state)
code = code.replace(
  /const \[transactions, setTransactions\] = useState\(\[/,
  'const [chartView, setChartView] = useState("Daily");\n  const [transactions, setTransactions] = useState(['
);

code = code.replace(
  /<button className="bg-indigo-800 text-white px-3 py-1 rounded text-xs">\s*Daily\s*<\/button>\s*<button className="text-xs text-slate-500">Weekly<\/button>/m,
  `<button type="button" onClick={() => setChartView("Daily")} className={\`px-3 py-1 rounded text-xs transition-colors \${chartView === "Daily" ? "bg-indigo-800 text-white" : "text-slate-500 hover:bg-slate-100"}\`}>\n                  Daily\n                </button>\n                <button type="button" onClick={() => setChartView("Weekly")} className={\`px-3 py-1 rounded text-xs transition-colors \${chartView === "Weekly" ? "bg-indigo-800 text-white" : "text-slate-500 hover:bg-slate-100"}\`}>\n                  Weekly\n                </button>`
);

// 7. Add action to View History
code = code.replace(
  /<button className="font-bold text-indigo-700 text-sm">/,
  '<button type="button" onClick={() => addToast("Navigating to full transaction history", "info")} className="font-bold text-indigo-700 hover:text-indigo-900 text-sm cursor-pointer">'
);

fs.writeFileSync(file, code);
console.log('ReferralDashboard updated successfully.');
