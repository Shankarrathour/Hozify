import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function ExcelExportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP CONTROLS & TIMELINE FILTER PANEL */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Export Center</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-semibold">
              Manage and download your historical data snapshots.
            </p>
          </div>
          
          {/* Filter Bar Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Date Range Selector */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 mb-1">Date Range</span>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-xs font-bold text-slate-700 shadow-sm">
                <span>📅</span> Oct 01 - Oct 31, 2023
              </button>
            </div>

            {/* Data Type Dropdown */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 mb-1">Data Type</span>
              <select className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs font-bold text-slate-700 shadow-sm focus:outline-none focus:border-indigo-500 min-w-[100px]">
                <option>All Types</option>
                <option>Financial</option>
                <option>Marketing</option>
                <option>System</option>
                <option>Operational</option>
              </select>
            </div>

            {/* More Filters Toggle */}
            <div className="flex flex-col justify-end pt-5">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
                <span>🎛️</span> More Filters
              </button>
            </div>
          </div>
        </div>

        {/* METRICS & ACTIVE JOBS INFRASTRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-6">
          
          {/* Card 1: Total Exports */}
          <div className="bg-white border border-gray-200/60 rounded-xl p-5 shadow-sm md:col-span-1 lg:col-span-1 flex flex-col justify-between min-h-[115px]">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-gray-400 block">TOTAL EXPORTS</span>
              <span className="text-2xl font-black text-slate-900 block mt-1 tracking-tight">1,248</span>
            </div>
            <p className="text-[10px] font-bold text-emerald-500 flex items-center gap-0.5">
              <span>📈</span> 12% from last month
            </p>
          </div>

          {/* Card 2: Storage Used */}
          <div className="bg-white border border-gray-200/60 rounded-xl p-5 shadow-sm md:col-span-1 lg:col-span-1 flex flex-col justify-between min-h-[115px]">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-gray-400 block">STORAGE USED</span>
              <span className="text-2xl font-black text-slate-900 block mt-1 tracking-tight">4.2 GB</span>
            </div>
            <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-slate-800 rounded-full" style={{ width: "84%" }}></div>
            </div>
          </div>

          {/* Card 3: Active Generating Processing Job Status */}
          <div className="bg-[#1d0094] text-white border border-transparent rounded-xl p-5 shadow-md md:col-span-2 lg:col-span-3 flex items-center justify-between min-h-[115px] relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-200 block">ACTIVE JOBS</span>
              <h2 className="text-xl font-black tracking-tight leading-snug">Generating: Q4 Revenue Report</h2>
              <span className="text-[10px] text-indigo-200 font-medium block">Est. completion in 2 mins</span>
            </div>
            
            {/* Right aligned Percentage Radial Loader Context */}
            <div className="flex flex-col items-center justify-center shrink-0 z-10">
              <span className="text-2xl font-black tracking-tighter">78%</span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-200 mt-0.5">Progress</span>
            </div>

            {/* Back ambient design vector */}
            <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-indigo-500/10 rounded-full pointer-events-none"></div>
          </div>

        </div>

        {/* LOG DATA CONTAINER MATRIX */}
        <div className="bg-white border border-gray-200/70 rounded-xl shadow-sm overflow-hidden mb-6">
          
          {/* Segment Filter Menu Toolbar */}
          <div className="flex justify-between items-center px-5 py-3.5 border-b border-gray-100 bg-white">
            <span className="text-xs font-black text-slate-800 tracking-wide uppercase">Recent Export Logs</span>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="font-semibold text-[11px]">Sorted by:</span>
              <button className="text-slate-700 font-bold hover:underline inline-flex items-center gap-0.5">
                Newest First <span>▼</span>
              </button>
            </div>
          </div>

          {/* Data Log Table Frame */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3 px-5">File Name</th>
                  <th className="py-3 px-4">Data Type</th>
                  <th className="py-3 px-4">Generated By</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {/* Row 1: Ready Excel Sheet */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-xl shadow-sm">📄</span>
                    <span className="font-black text-slate-900 text-xs">q4_financial_consolidated_2023.xlsx</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Financial</span>
                  </td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-slate-800 font-medium">Sarah Jenkins</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px] leading-tight">
                    Oct 24, 2023 <span className="block text-gray-400 text-[10px] mt-0.5">14:22</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-semibold text-xs">24.5 MB</td>
                  <td className="py-3.5 px-5 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded inline-flex items-center gap-1 uppercase tracking-wide">
                      ● Ready
                    </span>
                  </td>
                </tr>

                {/* Row 2: Marketing Sheets */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center text-xl shadow-sm">📄</span>
                    <span className="font-black text-slate-900 text-xs">marketing_reach_oct_audit.xlsx</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Marketing</span>
                  </td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&q=80" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-slate-800 font-medium">Marcus Thorne</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px] leading-tight">
                    Oct 22, 2023 <span className="block text-gray-400 text-[10px] mt-0.5">09:15</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-semibold text-xs">11.2 MB</td>
                  <td className="py-3.5 px-5 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded inline-flex items-center gap-1 uppercase tracking-wide">
                      ● Ready
                    </span>
                  </td>
                </tr>

                {/* Row 3: System Failed Row Instance */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center text-xl shadow-sm">⚠️</span>
                    <span className="font-black text-slate-900 text-xs">full_user_migration_dump.xlsx</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">System</span>
                  </td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center text-[10px] text-slate-500 shrink-0">
                      🤖
                    </div>
                    <span className="text-xs text-slate-800 font-medium">System Automator</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px] leading-tight">
                    Oct 21, 2023 <span className="block text-gray-400 text-[10px] mt-0.5">03:00</span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-400 text-xs">0 KB</td>
                  <td className="py-3.5 px-5 text-right">
                    <span className="text-[9px] font-black bg-rose-50 text-rose-600 px-2 py-0.5 rounded inline-flex items-center gap-1 uppercase tracking-wide">
                      ✕ Failed
                    </span>
                  </td>
                </tr>

                {/* Row 4: Operational Log Segment */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center text-xl shadow-sm">📄</span>
                    <span className="font-black text-slate-900 text-xs">regional_ops_south_division.xlsx</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Operational</span>
                  </td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=40&q=80" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-slate-800 font-medium">Elena Rodriguez</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px] leading-tight">
                    Oct 20, 2023 <span className="block text-gray-400 text-[10px] mt-0.5">17:50</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-semibold text-xs">8.4 MB</td>
                  <td className="py-3.5 px-5 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded inline-flex items-center gap-1 uppercase tracking-wide">
                      ● Ready
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination Navigation Footer Controls */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-5 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 1-10 of 1,248 exports</span>
            <div className="flex items-center gap-1">
              <button className="px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-300 font-bold cursor-not-allowed text-[11px] shadow-sm">Previous</button>
              <button className="px-3 py-1 bg-[#1d0094] border border-transparent rounded text-white font-bold text-[11px] shadow-sm">1</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded text-slate-700 font-bold text-[11px] hover:bg-gray-50 shadow-sm transition-colors">2</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded text-slate-700 font-bold text-[11px] hover:bg-gray-50 shadow-sm transition-colors">3</button>
              <button className="px-2.5 py-1 bg-white border border-gray-200 rounded text-slate-700 font-bold text-[11px] hover:bg-gray-50 shadow-sm transition-colors">Next</button>
            </div>
          </div>

        </div>

        {/* BOTTOM UTILITY ROW MODULES */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Box Left: Auto-Archival Policy info */}
          <div className="bg-slate-50/50 border border-gray-200/70 rounded-xl p-5 shadow-sm md:col-span-3 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-xl text-[#1d0094] shrink-0 font-bold">
              ℹ️
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Auto-Archival Policy</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed mt-1 font-medium">
                Exports older than 90 days are automatically moved to cold storage to optimize system performance. You can request retrieval of archived files via the Support portal.
              </p>
            </div>
          </div>

          {/* Box Right: External Data Bridge Configuration Link */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm md:col-span-2 flex flex-col justify-between text-center min-h-[110px]">
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <span className="text-xl">☁️</span>
              <span className="text-xs font-black text-slate-900 uppercase tracking-wide">External Data Bridge</span>
            </div>
            <p className="text-[11px] text-gray-400 font-semibold leading-normal mt-1">
              Connect your AWS S3 bucket to automatically sync daily Excel dumps.
            </p>
            <button className="text-xs text-[#1d0094] font-black hover:underline mt-2 cursor-pointer">
              Configure Sync
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}