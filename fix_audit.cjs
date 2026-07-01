const fs = require('fs');
const file = 'src/pages/RevenueManagement/FinancialHealth.jsx';
let code = fs.readFileSync(file, 'utf8');

const modalToAdd = `
      {/* AUDIT LOG MODAL */}
      {showAuditModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowAuditModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-600" />
                Compliance Audit Log: {selectedQuarter}
              </h3>
              <button type="button" onClick={() => setShowAuditModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4">
              {/* Timeline Items */}
              {[
                { time: "Today, 09:41 AM", user: "System Auto-Check", event: "Validated Q3 Liquidity Bounds", status: "Passed", icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" /> },
                { time: "Yesterday, 14:22 PM", user: "Finance Ops (J. Doe)", event: "Adjusted Burn Rate Projections", status: "Logged", icon: <Calendar className="h-4 w-4 text-indigo-500" /> },
                { time: "Oct 12, 11:05 AM", user: "Compliance Engine", event: "Detected Asset Turnover Variance", status: "Warning", icon: <AlertTriangle className="h-4 w-4 text-amber-500" /> },
                { time: "Oct 10, 08:00 AM", user: "System Auto-Check", event: "Monthly Solvency Snapshot Saved", status: "Passed", icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" /> }
              ].map((log, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{log.icon}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold text-slate-800">{log.event}</p>
                      <span className="text-xs font-semibold text-slate-500">{log.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 font-medium">Initiated by: {log.user}</p>
                      <span className={\`text-[10px] font-bold px-2 py-0.5 rounded-md \${
                        log.status === "Passed" ? "bg-emerald-50 text-emerald-600" :
                        log.status === "Warning" ? "bg-amber-50 text-amber-600" :
                        "bg-indigo-50 text-indigo-600"
                      }\`}>{log.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
              <button type="button" onClick={() => setShowAuditModal(false)} className="px-4 py-2 border border-slate-200 bg-white rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer">Close</button>
            </div>
          </div>
        </div>
      )}
`;

code = code.replace(/(\s*\{\/\* =================================== \*\/\}\s*<\/div>\s*<\/AdminShell>)/, '\n' + modalToAdd + '$1');

// Note: `Download` icon is not imported here if we want to use it. Looking at imports:
// import { ShieldCheck, ArrowUpRight, SlidersHorizontal, Calendar, X, CheckCircle2, AlertTriangle, ChevronDown } from "lucide-react";
// So I will just use `CheckCircle2` or simply not add a Download button, or I can add the Download button without an icon.
// Let's replace the Download button line entirely.
fs.writeFileSync(file, code);
console.log('Audit modal injected successfully.');
