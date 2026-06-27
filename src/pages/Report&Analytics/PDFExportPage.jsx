import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function PDFExportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP BREADCRUMB & HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              <span>Reports & Analytics</span>
              <span>/</span>
              <span className="text-[#1d0094]">Export Center</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Configure PDF Export</h1>
            <p className="text-sm text-gray-400 mt-0.5 font-medium">
              Select modules, date configurations, and targets to generate your enterprise report.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-xs font-bold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm transition-colors">
              Cancel
            </button>
          </div>
        </div>

        {/* WORKSPACE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: CONFIGURATION FORM */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-5 pb-2 border-b border-gray-50">1. Report Specifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Input: Report Name */}
                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Report Document Name</label>
                  <input 
                    type="text" 
                    defaultValue="Enterprise_Intelligence_Snapshot_v1"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1d0094] font-medium bg-gray-50/30"
                  />
                </div>

                {/* Dropdown: Date Range */}
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Target Timeline Filter</label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1d0094] font-bold bg-white text-slate-700">
                    <option>Last 30 Days (Standard)</option>
                    <option>Current Quarter (Q3)</option>
                    <option>Previous Quarter (Q2)</option>
                    <option>Custom Date Frame</option>
                  </select>
                </div>

                {/* Dropdown: Layout Orientation */}
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Page Structure Format</label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1d0094] font-bold bg-white text-slate-700">
                    <option>Portrait (Standard Corporate)</option>
                    <option>Landscape (Data-heavy Tables)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Checkbox Sections: Select Modules */}
            <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">2. Intelligence Modules to Include</h3>
              <p className="text-xs text-gray-400 font-medium mb-5">Select which segments should be compiled inside this specific PDF build.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Module 1 */}
                <label className="flex items-start gap-3 p-3.5 border border-gray-100 rounded-xl hover:bg-slate-50/50 cursor-pointer transition-colors">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#1d0094]" />
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">Revenue Metrics & ROI Summary</span>
                    <span className="text-[10px] text-gray-400 font-medium block mt-0.5">Aggregate trends, operational costs, conversion analytics.</span>
                  </div>
                </label>

                {/* Module 2 */}
                <label className="flex items-start gap-3 p-3.5 border border-gray-100 rounded-xl hover:bg-slate-50/50 cursor-pointer transition-colors">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#1d0094]" />
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">Campaign Performance Breakdown</span>
                    <span className="text-[10px] text-gray-400 font-medium block mt-0.5">CTR indexes, impressions timeline, click funnel matrices.</span>
                  </div>
                </label>

                {/* Module 3 */}
                <label className="flex items-start gap-3 p-3.5 border border-gray-100 rounded-xl hover:bg-slate-50/50 cursor-pointer transition-colors">
                  <input type="checkbox" defaultChecked className="mt-1 accent-[#1d0094]" />
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">Fraud & Anomalies Logs</span>
                    <span className="text-[10px] text-gray-400 font-medium block mt-0.5">IP attacks summary, critical triggers, review state.</span>
                  </div>
                </label>

                {/* Module 4 */}
                <label className="flex items-start gap-3 p-3.5 border border-gray-100 rounded-xl hover:bg-slate-50/50 cursor-pointer transition-colors">
                  <input type="checkbox" className="mt-1 accent-[#1d0094]" />
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">User Activity & KYC Archives</span>
                    <span className="text-[10px] text-gray-400 font-medium block mt-0.5">Geographic density map, registration velocities.</span>
                  </div>
                </label>

              </div>
            </div>
          </div>

          {/* RIGHT 1 COLUMN: GENERATE & ACTIONS PANEL */}
          <div className="space-y-6">
            
            {/* Core Trigger Component Box */}
            <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">EXPORT SUMMARY</span>
                <div className="mt-4 space-y-2.5 text-xs font-semibold text-slate-600">
                  <div className="flex justify-between">
                    <span>Selected Segments:</span>
                    <span className="text-slate-900 font-bold">3 Modules</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compression Level:</span>
                    <span className="text-slate-900 font-bold">Standard (High Res)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated File Size:</span>
                    <span className="text-slate-900 font-bold">~5.4 MB</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-[#1d0094] text-white rounded-md hover:bg-[#130066] shadow-sm transition-all text-center">
                  ⚡ Compile and Export File
                </button>
                <p className="text-[10px] text-center text-gray-400 font-medium mt-2 leading-relaxed">
                  Compiling process logs engine assets dynamically. This could take up to 2 minutes depending on database queries depth.
                </p>
              </div>
            </div>

            {/* Quick Informational Warning Banner */}
            <div className="border border-amber-100 bg-amber-50/30 rounded-xl p-4 flex gap-3">
              <span className="text-base">⚠️</span>
              <div>
                <span className="font-bold text-slate-800 text-xs block">Data Refresh Notice</span>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5 font-medium">
                  PDF compiles use transactional cache updated up until 10 minutes ago. Real-time sub-second sync parameters are not mirrored inside hard document exports.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}