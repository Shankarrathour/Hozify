import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function PDFExportPage() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [reportName, setReportName] = useState("Enterprise_Intelligence_Snapshot_v1");
  
  // State for all 4 original modules
  const [modules, setModules] = useState({
    revenue: true,
    campaign: true,
    fraud: true,
    kyc: false,
  });

  const handleCancel = () => {
    if (confirm("Are you sure you want to discard your current export configurations?")) {
      window.location.reload(); // Reset state
    }
  };

  const handleCompile = () => {
    setIsCompiling(true);
    setTimeout(() => {
      setIsCompiling(false);
      alert(`Success: "${reportName}.pdf" has been successfully compiled and exported.`);
    }, 2500);
  };

  const selectedCount = Object.values(modules).filter(Boolean).length;

  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              <span>Reports & Analytics</span> <span>/</span> <span className="text-[#1d0094]">Export Center</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Configure PDF Export</h1>
            <p className="text-sm text-gray-400 mt-0.5 font-medium">Select modules, date configurations, and targets to generate your enterprise report.</p>
          </div>
          <button 
            onClick={handleCancel}
            className="px-4 py-2 text-xs font-bold border border-gray-200 bg-white rounded text-slate-600 hover:bg-red-50 hover:text-red-600 shadow-sm transition-all"
          >
            Cancel Process
          </button>
        </div>

        {/* WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {/* SPECIFICATIONS */}
            <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-5 pb-2 border-b border-gray-50">1. Report Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Report Document Name</label>
                  <input 
                    type="text" 
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1d0094] font-medium bg-gray-50/30"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Target Timeline Filter</label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1d0094] font-bold bg-white text-slate-700">
                    <option>Last 30 Days (Standard)</option>
                    <option>Current Quarter (Q3)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Page Structure Format</label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1d0094] font-bold bg-white text-slate-700">
                    <option>Portrait (Standard Corporate)</option>
                    <option>Landscape (Data-heavy Tables)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* MODULES */}
            <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">2. Intelligence Modules to Include</h3>
              <p className="text-xs text-gray-400 font-medium mb-5">Select which segments should be compiled inside this specific PDF build.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Module List Restored */}
                {[
                  { id: 'revenue', title: 'Revenue Metrics & ROI Summary', desc: 'Aggregate trends, operational costs.' },
                  { id: 'campaign', title: 'Campaign Performance Breakdown', desc: 'CTR indexes, impressions timeline.' },
                  { id: 'fraud', title: 'Fraud & Anomalies Logs', desc: 'IP attacks summary, critical triggers.' },
                  { id: 'kyc', title: 'User Activity & KYC Archives', desc: 'Geographic density map, registration.' }
                ].map((mod) => (
                  <label key={mod.id} className="flex items-start gap-3 p-3.5 border border-gray-100 rounded-xl hover:bg-slate-50/50 cursor-pointer transition-colors">
                    <input 
                      type="checkbox" 
                      checked={modules[mod.id]}
                      onChange={() => setModules({...modules, [mod.id]: !modules[mod.id]})}
                      className="mt-1 accent-[#1d0094]" 
                    />
                    <div>
                      <span className="font-bold text-slate-900 text-xs block">{mod.title}</span>
                      <span className="text-[10px] text-gray-400 font-medium block mt-0.5">{mod.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIONS PANEL */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">EXPORT SUMMARY</span>
              <div className="mt-4 space-y-2.5 text-xs font-semibold text-slate-600">
                <div className="flex justify-between"><span>Selected Segments:</span> <span className="text-slate-900 font-bold">{selectedCount} Modules</span></div>
                <div className="flex justify-between"><span>Compression Level:</span> <span className="text-slate-900 font-bold">Standard (High Res)</span></div>
                <div className="flex justify-between"><span>Estimated File Size:</span> <span className="text-slate-900 font-bold">~{selectedCount * 1.8} MB</span></div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50">
                <button 
                  onClick={handleCompile}
                  disabled={isCompiling}
                  className={`w-full py-2.5 text-xs font-bold rounded-md shadow-sm transition-all ${isCompiling ? "bg-gray-400" : "bg-[#1d0094] hover:bg-[#130066]"} text-white`}
                >
                  {isCompiling ? "⚡ Compiling..." : "⚡ Compile and Export File"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}