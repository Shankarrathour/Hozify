const fs = require('fs');
const file = 'src/pages/RevenueManagement/BusinessIntelligence.jsx';
let code = fs.readFileSync(file, 'utf8');

const modalToAdd = `
      {/* SIMULATION LOGS MODAL */}
      {showSimulationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowSimulationModal(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Server className="h-4 w-4 text-indigo-400" />
                Live Simulation Telemetry
              </h3>
              <button type="button" onClick={() => setShowSimulationModal(false)} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 bg-[#0a0a0a] min-h-[300px] font-mono text-xs text-emerald-400 overflow-y-auto space-y-2">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <RefreshCw className={\`h-3.5 w-3.5 \${isSimulating ? 'animate-spin text-indigo-400' : ''}\`} />
                <span>{isSimulating ? 'Establishing secure connection...' : 'Session terminated.'}</span>
              </div>
              {simulationLogs.map((log, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-slate-600 select-none">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
                  <span className={log.includes("Success") ? "text-indigo-400 font-bold" : "text-emerald-400"}>{log}</span>
                </div>
              ))}
              {isSimulating && (
                <div className="flex gap-3 animate-pulse">
                  <span className="text-slate-600 select-none">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
                  <span className="text-emerald-400 opacity-70">_</span>
                </div>
              )}
            </div>
            {!isSimulating && (
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/50 flex justify-end">
                <button type="button" onClick={() => setShowSimulationModal(false)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-500 transition-colors cursor-pointer">Acknowledge</button>
              </div>
            )}
          </div>
        </div>
      )}
`;

code = code.replace(/(\s*<\/div>\s*<\/AdminShell>)/, '\n' + modalToAdd + '$1');

fs.writeFileSync(file, code);
console.log('Simulation modal injected successfully.');
