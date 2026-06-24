import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function CSVExportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Export Center</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Manage and monitor enterprise-wide data extraction tasks.
            </p>
          </div>
          
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/>
              </svg>
              Filter
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Refresh
            </button>
          </div>
        </div>

        {/* CLOUD STORAGE USAGE & ACTIVE EXPORTS WIDGETS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Left Large Card: Cloud Storage Usage */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="text-base">☁️</span>
                <h3 className="text-sm font-bold text-slate-800">Cloud Storage Usage</h3>
              </div>
              <span className="text-[10px] text-gray-400 font-semibold">Updated 5m ago</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Progress Bar & Mini Stats */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-500">84.2 GB used of 100 GB</span>
                    <span className="text-slate-900">84%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-700 rounded-full" style={{ width: "84%" }}></div>
                  </div>
                </div>

                {/* Subdivided breakdown grids */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#f8fafd] p-2.5 rounded-lg border border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 block uppercase">CSV FILES</span>
                    <span className="text-xs font-black text-slate-800 mt-0.5 block">62.4 GB</span>
                  </div>
                  <div className="bg-[#f8fafd] p-2.5 rounded-lg border border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 block uppercase">JSON SNAPSHOTS</span>
                    <span className="text-xs font-black text-slate-800 mt-0.5 block">18.1 GB</span>
                  </div>
                  <div className="bg-[#f8fafd] p-2.5 rounded-lg border border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 block uppercase">LOGS & META</span>
                    <span className="text-xs font-black text-slate-800 mt-0.5 block">3.7 GB</span>
                  </div>
                </div>
              </div>

              {/* Radial Donut Representation */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-8 border-gray-100 border-t-indigo-700 border-r-indigo-700 border-b-indigo-700 transform rotate-[45deg]">
                  <div className="transform rotate-[-45deg] text-center">
                    <span className="text-base font-black text-slate-900 block tracking-tighter">84%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Stack: Active Exports & Avg Time */}
          <div className="space-y-4">
            {/* Active Exports Count */}
            <div className="bg-[#1d0094] text-white p-5 rounded-xl shadow-md flex items-center justify-between min-h-[95px] relative overflow-hidden">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-200 block">ACTIVE EXPORTS</span>
                <span className="text-3xl font-black block mt-0.5 tracking-tight">12</span>
                <span className="text-[10px] text-indigo-200 font-medium block mt-1">+4 from yesterday</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">⏳</div>
            </div>

            {/* Avg Export Time */}
            <div className="bg-white border border-gray-200/70 p-5 rounded-xl shadow-sm flex items-center justify-between min-h-[95px]">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">AVG. EXPORT TIME</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">3.2</span>
                  <span className="text-xs font-bold text-slate-500">min</span>
                </div>
                <span className="text-[10px] text-emerald-500 font-bold block mt-1">↗ +12s since last week</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center text-base">⏱️</div>
            </div>
          </div>

        </div>

        {/* RECENT EXPORTS TABLE MATRIX */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden mb-6">
          
          {/* Table Control Tabs Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center px-6 py-3.5 border-b border-gray-100 gap-3 bg-white">
            <h3 className="text-xs font-black text-slate-800 tracking-wide uppercase">Recent Exports</h3>
            
            <div className="flex items-center gap-1.5 bg-gray-100/80 p-0.5 rounded-lg text-[11px] font-bold">
              <button className="px-3 py-1 bg-white shadow-sm text-slate-900 rounded-md">All</button>
              <button className="px-3 py-1 text-slate-500 hover:text-slate-800">Completed</button>
              <button className="px-3 py-1 text-slate-500 hover:text-slate-800">Processing</button>
            </div>
          </div>

          {/* Table Structure */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3 px-6 w-[35%]">File Name</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Created By</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {/* Row 1: Processing */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-xs">📄</span>
                      <div>
                        <span className="font-extrabold text-slate-900 text-xs block">q4_financial_audit_final.csv</span>
                        <span className="text-[10px] text-gray-400 font-medium block mt-0.5">ID: EXP-9022-X</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase tracking-wide">
                      ● Processing
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-400">--</td>
                  <td className="py-3.5 px-4 flex items-center gap-2 pt-4">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center text-[9px] text-slate-600">JD</div>
                    <span className="text-xs text-slate-800 font-medium">Jane Doe</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px]">Oct 24, 2:45 PM</td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-gray-400 hover:text-rose-600 text-sm transition-colors font-bold px-1">✕</button>
                  </td>
                </tr>

                {/* Row 2: Completed Large File */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-xs">📄</span>
                      <div>
                        <span className="font-extrabold text-slate-900 text-xs block">marketing_leads_october.csv</span>
                        <span className="text-[10px] text-gray-400 font-medium block mt-0.5">ID: EXP-8841-A</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase tracking-wide">
                      ● Completed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-semibold">1.4 GB</td>
                  <td className="py-3.5 px-4 flex items-center gap-2 pt-4">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center text-[9px] text-slate-600">SY</div>
                    <span className="text-xs text-slate-800 font-medium">Sarah Young</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px]">Oct 24, 11:20 AM</td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-indigo-600 hover:text-[#1d0094] text-sm font-bold inline-flex items-center gap-0.5">📥</button>
                  </td>
                </tr>

                {/* Row 3: Completed Normal File */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-xs">📄</span>
                      <div>
                        <span className="font-extrabold text-slate-900 text-xs block">inventory_stock_levels.csv</span>
                        <span className="text-[10px] text-gray-400 font-medium block mt-0.5">ID: EXP-8832-B</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase tracking-wide">
                      ● Completed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-semibold">422 MB</td>
                  <td className="py-3.5 px-4 flex items-center gap-2 pt-4">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-[8px]">AU</div>
                    <span className="text-xs text-slate-800 font-medium">Admin User</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px]">Oct 23, 04:15 PM</td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-indigo-600 hover:text-[#1d0094] text-sm font-bold inline-flex items-center gap-0.5">📥</button>
                  </td>
                </tr>

                {/* Row 4: Failed Row Instance */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-rose-50 border border-rose-100 flex items-center justify-center text-xs text-rose-500">⚠️</span>
                      <div>
                        <span className="font-extrabold text-rose-600 text-xs block">user_behavior_analytics_raw.csv</span>
                        <span className="text-[10px] text-gray-400 font-medium block mt-0.5">ID: EXP-8820-F</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase tracking-wide">
                      ✕ Failed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-400">--</td>
                  <td className="py-3.5 px-4 flex items-center gap-2 pt-4">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center text-[9px] text-slate-600">MR</div>
                    <span className="text-xs text-slate-800 font-medium">Mike Ross</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-[11px]">Oct 23, 01:30 PM</td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-gray-400 hover:text-slate-700 text-sm font-bold">🔄</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Table Footer Pagination */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3.5 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 4 of 128 exports</span>
            <div className="flex items-center gap-1.5">
              <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">‹</button>
              <button className="p-1 px-3 bg-[#1d0094] rounded text-white text-[11px] shadow-sm">1</button>
              <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">2</button>
              <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">3</button>
              <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">›</button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: SCHEDULE RECURRING & EXPORT QUEUE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Block: Schedule Recurring Exports Panel */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-slate-900 rounded-xl shrink-0 flex items-center justify-center text-xl text-indigo-400 shadow-md">
              ✨
            </div>
            <div className="space-y-3 flex-1 text-center md:text-left">
              <div>
                <h4 className="text-sm font-black text-slate-900">Schedule Recurring Exports</h4>
                <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                  Automate your reporting workflow by scheduling CSV generations to be delivered directly to your S3 bucket or email every Monday at 8:00 AM.
                </p>
              </div>
              <button className="px-4 py-2 bg-[#1d0094] hover:bg-[#130066] text-white text-xs font-bold rounded-lg shadow-sm transition-colors">
                Set Automation Rule
              </button>
            </div>
          </div>

          {/* Right Block: Export Queue List */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide mb-3">Export Queue</h4>
              
              <div className="space-y-3">
                {/* Queue Item 1 */}
                <div className="flex justify-between items-center p-2.5 border border-gray-50 bg-[#f8fafd]/60 rounded-lg">
                  <span className="text-xs font-bold text-slate-900 truncate max-w-[150px]">Legacy_User_Data.csv</span>
                  <span className="text-[9px] font-black bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase">Queued</span>
                </div>
                {/* Queue Item 2 */}
                <div className="flex justify-between items-center p-2.5 border border-gray-50 bg-[#f8fafd]/60 rounded-lg">
                  <span className="text-xs font-bold text-slate-900 truncate max-w-[150px]">Inventory_Backup_Full.csv</span>
                  <span className="text-[9px] font-black bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase">Queued</span>
                </div>
              </div>
            </div>

            <button className="w-full text-center text-xs text-[#1d0094] font-black hover:underline mt-4">
              View Full Queue ➔
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}