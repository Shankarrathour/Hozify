import React from "react";
import AdminShell from "../../components/layouts/AdminShell"; // Direct file import as requested

export default function PartnerReportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER WITH DATE RANGE & FILTER ACTIONS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Partner Performance Analytics</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              ISP and BSP regional management & quality compliance.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-l font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
              <span>📅</span> Oct 01 - Oct 31, 2023
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-l font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
              <span>⏳</span> Filter
            </button>
          </div>
        </div>

        {/* TOP ANALYTICS BLOCKS: SCORE CHART & REGIONAL DISTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Left Block: Aggregate Quality Score Chart Layout */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">AGGREGATE QUALITY SCORE</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-black text-[#1d0094] tracking-tight">94.2</span>
                <span className="text-xs font-bold text-emerald-500 inline-flex items-center">↑2.4%</span>
              </div>
              <span className="text-[10px] text-gray-400 font-bold block mt-0.5">vs last month</span>
            </div>

            {/* Custom Multi-shade Violet/Indigo Bar Chart Graphic */}
            <div className="h-28 flex items-end justify-between gap-3 pt-4 px-2">
              <div className="w-[9%] bg-[#ccd0f5] h-[55%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#b3b9f2] h-[65%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#818beb] h-[45%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#4f5de0] h-[78%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#1d0094] h-[70%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#4f5de0] h-[60%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#1d0094] h-[88%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#b3b9f2] h-[58%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#ccd0f5] h-[42%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#4f5de0] h-[75%] rounded-t-sm"></div>
            </div>
          </div>

          {/* Right Block: Regional Distribution Thumbnail Container */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-3">REGIONAL DISTRIBUTION</span>
              
              {/* Simulated Dark Satellite Map Card */}
              <div className="w-full h-36 bg-[#0a111a] rounded-lg overflow-hidden relative border border-slate-800 flex items-center justify-center p-2">
                {/* Micro Vector Path Representation of Region Map */}
                <svg className="w-full h-full text-emerald-500/20 fill-current opacity-60" viewBox="0 0 200 100">
                  <path d="M20,20 L40,15 L70,25 L90,10 L120,30 L110,60 L80,75 L40,65 L15,45 Z" />
                  <path d="M130,25 L160,20 L180,45 L155,70 L135,55 Z" />
                </svg>
                {/* Small Data Card overlay inside Map */}
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded border border-gray-100 flex justify-between items-center shadow-sm">
                  <div>
                    <span className="text-[9px] text-slate-800 font-extrabold block">Active Regions</span>
                    <div className="w-24 bg-gray-200 h-1 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-[#1d0094] h-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-slate-900">14 / 20</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FOUR KEY PERFORMANCE METRIC SUB-GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Card 1: Total Partners */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">Total Partners</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">1,284</span>
              <span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded mt-1.5 inline-block">+12 New</span>
            </div>
          </div>

          {/* Card 2: SLA Compliance */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">SLA Compliance</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">98.1%</span>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-3 overflow-hidden">
                <div className="bg-slate-900 h-full" style={{ width: "98.1%" }}></div>
              </div>
            </div>
          </div>

          {/* Card 3: Avg. Latency */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">Avg. Latency</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">24ms</span>
              <span className="text-[9px] text-gray-400 font-bold block mt-2">Target: &lt;30ms</span>
            </div>
          </div>

          {/* Card 4: Uptime Rank */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">Uptime Rank</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">Tier 1</span>
              <div className="flex items-center gap-1 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: PARTNER REGISTRY LOG ARCHIVE LOGS */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-sm font-black text-slate-800 tracking-wide">Partner Registry</h3>
            <div className="flex items-center gap-2">
              <button className="text-xs font-bold border border-gray-200 px-2.5 py-1 rounded bg-white hover:bg-gray-50 flex items-center gap-1">
                All Types <span className="text-[9px] text-gray-400">▼</span>
              </button>
              <button className="p-1 border border-gray-200 rounded text-slate-400 hover:bg-gray-50 text-xs">⋮</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3 px-6">Partner Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Region</th>
                  <th className="py-3 px-4 text-center">Health Score</th>
                  <th className="py-3 px-4 text-center">Uptime</th>
                  <th className="py-3 px-6 text-right">SLA Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 bg-slate-100 rounded flex items-center justify-center text-xs font-black text-slate-800 border border-gray-200/60">N</div>
                    <div>
                      <span className="font-extrabold text-slate-900 block text-xs">Nexus Global ISP</span>
                      <span className="text-[10px] text-gray-400 font-medium block">ID: 4882-QX</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black tracking-wider border border-gray-200 uppercase bg-gray-50 text-slate-500 px-1.5 py-0.5 rounded">ISP</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">North America (East)</td>
                  <td className="py-3.5 px-4 text-center text-slate-900 font-black">98.8</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">99.99%</td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="text-[9px] font-black tracking-wide bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">COMPLIANT</span>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 bg-slate-100 rounded flex items-center justify-center text-xs font-black text-slate-800 border border-gray-200/60">Q</div>
                    <div>
                      <span className="font-extrabold text-slate-900 block text-xs">Quantum Link BSP</span>
                      <span className="text-[10px] text-gray-400 font-medium block">ID: 9021-LP</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black tracking-wider border border-gray-200 uppercase bg-gray-50 text-slate-500 px-1.5 py-0.5 rounded">BSP</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">Europe (Central)</td>
                  <td className="py-3.5 px-4 text-center text-slate-900 font-black">91.4</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">99.92%</td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="text-[9px] font-black tracking-wide bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">COMPLIANT</span>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 bg-slate-100 rounded flex items-center justify-center text-xs font-black text-slate-800 border border-gray-200/60">O</div>
                    <div>
                      <span className="font-extrabold text-slate-900 block text-xs">OpticStream Pro</span>
                      <span className="text-[10px] text-gray-400 font-medium block">ID: 1125-ZZ</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black tracking-wider border border-gray-200 uppercase bg-gray-50 text-slate-500 px-1.5 py-0.5 rounded">ISP</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">Asia Pacific (West)</td>
                  <td className="py-3.5 px-4 text-center text-rose-600 font-black">84.2</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">98.45%</td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="text-[9px] font-black tracking-wide bg-rose-50 text-rose-500 px-2 py-0.5 rounded uppercase">WARNING</span>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 bg-slate-100 rounded flex items-center justify-center text-xs font-black text-slate-800 border border-gray-200/60">C</div>
                    <div>
                      <span className="font-extrabold text-slate-900 block text-xs">CloudPath Connect</span>
                      <span className="text-[10px] text-gray-400 font-medium block">ID: 7731-BC</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[9px] font-black tracking-wider border border-gray-200 uppercase bg-gray-50 text-slate-500 px-1.5 py-0.5 rounded">BSP</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">North America (West)</td>
                  <td className="py-3.5 px-4 text-center text-slate-900 font-black">96.0</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">99.98%</td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="text-[9px] font-black tracking-wide bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">COMPLIANT</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Table Footer Controls Segment */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 4 of 1,284 entries</span>
            <div className="flex items-center gap-1.5">
              <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-400 text-[11px] shadow-sm">Previous</button>
              <button className="p-1 px-3 bg-[#1d0094] rounded text-white text-[11px] shadow-sm">1</button>
              <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">2</button>
              <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">3</button>
              <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}