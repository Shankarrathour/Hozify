const fs = require('fs'); 
const file = 'src/pages/RevenueManagement/Targets.jsx'; 
let code = fs.readFileSync(file, 'utf8'); 

const modals = `
      {/* NEW TARGET MODAL */}
      {showNewTargetModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowNewTargetModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Create New Target</h3>
              <button type="button" onClick={() => setShowNewTargetModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleCreateTarget} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Region / Department</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={newTargetForm.region} onChange={e => setNewTargetForm({...newTargetForm, region: e.target.value})} placeholder="e.g. EMEA Central" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Metric</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={newTargetForm.metric} onChange={e => setNewTargetForm({...newTargetForm, metric: e.target.value})} placeholder="e.g. SaaS Subscriptions" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Goal Value</label>
                  <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={newTargetForm.goal} onChange={e => setNewTargetForm({...newTargetForm, goal: e.target.value})} placeholder="1200000" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Actual Performance</label>
                  <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={newTargetForm.actual} onChange={e => setNewTargetForm({...newTargetForm, actual: e.target.value})} placeholder="1050000" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Status Tracking</label>
                <select required className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={newTargetForm.status} onChange={e => setNewTargetForm({...newTargetForm, status: e.target.value})}>
                  <option value="Near Target">Near Target</option>
                  <option value="Exceeded">Exceeded</option>
                  <option value="At Risk">At Risk</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowNewTargetModal(false)} className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-950 text-white rounded-lg text-sm font-bold hover:bg-indigo-900 transition-colors cursor-pointer">Create Target</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT KPI MODAL */}
      {editingRow && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setEditingRow(null)}>
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Edit KPI Target</h3>
              <button type="button" onClick={() => setEditingRow(null)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Region / Department</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={editingRow.region} onChange={e => setEditingRow({...editingRow, region: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Metric</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={editingRow.metric} onChange={e => setEditingRow({...editingRow, metric: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Goal Value</label>
                  <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={editingRow.goal} onChange={e => setEditingRow({...editingRow, goal: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Actual Performance</label>
                  <input required type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={editingRow.actual} onChange={e => setEditingRow({...editingRow, actual: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Status Tracking</label>
                <select required className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" value={editingRow.status} onChange={e => setEditingRow({...editingRow, status: e.target.value})}>
                  <option value="Near Target">Near Target</option>
                  <option value="Exceeded">Exceeded</option>
                  <option value="At Risk">At Risk</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setEditingRow(null)} className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-950 text-white rounded-lg text-sm font-bold hover:bg-indigo-900 transition-colors cursor-pointer">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RANKINGS MODAL */}
      {showRankingsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowRankingsModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Complete Leaderboard Rankings</h3>
              <button type="button" onClick={() => setShowRankingsModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {leaderboard.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className={\`w-8 h-8 flex items-center justify-center rounded-full text-sm font-extrabold shrink-0 \${item.rank <= 3 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}\`}>
                    {item.rank}
                  </span>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-700">{item.name}</span>
                      <span className="text-indigo-950">{item.revenue} <span className="text-xs text-slate-400 font-medium ml-1">({item.progress}%)</span></span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-950 rounded-full" style={{ width: \`\${Math.min(item.progress, 100)}%\` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button type="button" onClick={() => setShowRankingsModal(false)} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer">Close</button>
            </div>
          </div>
        </div>
      )}
`; 
code = code.replace(/(\s*\{\/\* =================================== \*\/\}\s*<\/div>\s*)(<\/AdminShell>)/, '$1' + modals + '$2'); 
fs.writeFileSync(file, code); 
console.log('Modals injected successfully.');
