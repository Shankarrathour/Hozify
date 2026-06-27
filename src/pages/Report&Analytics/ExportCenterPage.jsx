import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function ExportCenterPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER & CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Export Center</h1>
            <p className="text-sm text-gray-400 mt-1 font-medium">
              Manage and track your generated enterprise intelligence reports.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-xs font-bold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm transition-colors">
              Filter Archive
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#1d0094] text-white rounded hover:bg-[#130066] shadow-sm transition-colors">
              <span className="text-xs font-light">📄</span> Create PDF Report
            </button>
          </div>
        </div>

        {/* METRICS THREE-CARD GRID LAYER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Storage */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[125px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">STORAGE USED</span>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">1.2</span>
                <span className="text-xs font-bold text-gray-400">GB / 5GB</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-slate-900 rounded-full" style={{ width: "24%" }}></div>
            </div>
          </div>

          {/* Card 2: Total Reports */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[125px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">TOTAL REPORTS</span>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">142</span>
                <span className="text-xs font-semibold text-gray-400 pl-1">Files generated</span>
              </div>
            </div>
            <p className="text-xs font-bold text-emerald-500 mt-4 flex items-center gap-1">
              <span className="text-sm">↗</span> +12% from last month
            </p>
          </div>

          {/* Card 3: Next Scheduled with Clock Background */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[125px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">NEXT SCHEDULED</span>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">Oct 14</span>
                <span className="text-xs text-gray-400 font-bold">at 09:00 AM</span>
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-500 tracking-wider uppercase mt-4">
              WEEKLY FINANCIAL AUDIT
            </p>
            {/* Soft Transparent Clock Element from image */}
            <div className="absolute -right-1 -bottom-center text-gray-100 text-7xl select-none pointer-events-none opacity-80 font-light">
              🕒
            </div>
          </div>

        </div>

        {/* CORE DATA PANEL: GENERATION HISTORY */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
          
          {/* Table Headline Utilities */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-base font-bold text-slate-900">Generation History</h3>
            <div className="flex items-center gap-4 text-gray-400 text-xs">
              <button className="hover:text-slate-600 transition-colors" style={{ fontSize: '24px', leading: '1' }}>
             🔄
             </button>
            <button className="hover:text-slate-600 transition-colors font-black tracking-widest" style={{ fontSize: '20px', leading: '1' }}>
             •••
           </button>
            </div>
          </div>

          {/* Data Table Core View */}
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[10px] font-bold tracking-wider">
                  <th className="py-4 px-6 w-[40%]">Report Name</th>
                  <th className="py-4 px-4">Generation Date</th>
                  <th className="py-4 px-4">File Size</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-semibold text-slate-700 bg-white">
                
                {/* Item Row 1 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <span className="w-9 h-9 rounded bg-slate-50 border border-gray-100 flex items-center justify-center text-2xl shadow-sm">📄</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Q3_Revenue_Performance_Final.pdf</span>
                      <span className="text-[11px] text-gray-400 font-medium block mt-0.5">Financial • Enterprise Core</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600">Oct 12, 2023 • <span className="text-gray-400 font-normal">14:22</span></td>
                  <td className="py-4 px-4 text-slate-600">4.2 MB</td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded uppercase tracking-wide">Completed</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-2xl font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                      📥 Download
                    </button>
                  </td>
                </tr>

                {/* Item Row 2 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <span className="w-9 h-9 rounded bg-slate-50 border border-gray-100 flex items-center justify-center text-xl shadow-sm">📊</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Marketing_Campaign_Efficiency_v2.pdf</span>
                      <span className="text-[11px] text-gray-400 font-medium block mt-0.5">Marketing • North America</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600">Oct 11, 2023 • <span className="text-gray-400 font-normal">09:15</span></td>
                  <td className="py-4 px-4 text-slate-600">8.7 MB</td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded uppercase tracking-wide">Completed</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-2xl font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                      📥 Download
                    </button>
                  </td>
                </tr>

                {/* Item Row 3 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <span className="w-9 h-9 rounded bg-slate-50 border border-gray-100 flex items-center justify-center text-xl shadow-sm">🏛️</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Weekly_Liability_Check.pdf</span>
                      <span className="text-[11px] text-gray-400 font-medium block mt-0.5">Operational • Global Risk</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600">Oct 12, 2023 • <span className="text-gray-400 font-normal">16:05</span></td>
                  <td className="py-4 px-4 text-gray-400 font-bold">--</td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded uppercase tracking-wide animate-pulse">Generating...</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-gray-400 hover:text-slate-600 text-xl font-bold tracking-widest px-1">
                      •••
                    </button>
                  </td>
                </tr>

                {/* Item Row 4 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <span className="w-9 h-9 rounded bg-slate-50 border border-gray-100 flex items-center justify-center text-xl shadow-sm">📋</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Inventory_Turnover_Analysis.pdf</span>
                      <span className="text-[11px] text-gray-400 font-medium block mt-0.5">Operational • Supply Chain</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600">Oct 10, 2023 • <span className="text-gray-400 font-normal">11:40</span></td>
                  <td className="py-4 px-4 text-slate-600">3.1 MB</td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded uppercase tracking-wide">Completed</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-xs font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                      📥 Download
                    </button>
                  </td>
                </tr>

              </tbody>
            </table></div>
          </div>

          {/* Pagination Navigation Footer */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-4 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 1-10 of 142 results</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-gray-300 font-bold cursor-not-allowed shadow-sm">Previous</button>
              <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-slate-700 font-bold hover:bg-gray-50 shadow-sm transition-colors">Next</button>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}