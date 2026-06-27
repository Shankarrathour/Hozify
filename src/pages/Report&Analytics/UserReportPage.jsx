import React from "react";
import AdminShell from "../../components/layouts/AdminShell"; // Aapka layout shell component

export default function UserReportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER WITH TIME-PERIOD TABS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Activity Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Real-time analysis of user growth and engagement patterns.
            </p>
          </div>
          
          {/* Timeframe selector pill */}
          <div className="flex items-center bg-white border border-gray-200 p-1 rounded-lg text-xs font-bold shadow-sm">
            <button className="px-3 py-1 bg-[#3d14f5] text-white rounded-md shadow-sm">30 Days</button>
            <button className="px-3 py-1 text-gray-400 hover:text-slate-600">90 Days</button>
            <button className="px-3 py-1 text-gray-400 hover:text-slate-600">Year</button>
          </div>
        </div>

        {/* MIDDLE GRID: USER GROWTH TREND & SEGMENTATION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* User Growth Trend Chart Container */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">User Growth Trend</h3>
              <div className="flex items-center gap-4 text-[10px] font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3d14f5]"></span>
                  <span className="text-slate-600">Active Users</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                  <span className="text-slate-400">Churn</span>
                </div>
              </div>
            </div>

            {/* Stacked Bar Graph Representation */}
            <div className="h-48 flex items-end justify-between gap-3 pt-4 border-b border-gray-100 px-2 relative">
              {/* MON */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[45%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[30%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Mon</span>
              </div>
              {/* TUE */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[55%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[42%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Tue</span>
              </div>
              {/* WED */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[40%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[25%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Wed</span>
              </div>
              {/* THU */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[70%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[55%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Thu</span>
              </div>
              {/* FRI */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[65%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[50%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Fri</span>
              </div>
              {/* SAT */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[35%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[18%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Sat</span>
              </div>
              {/* SUN */}
              <div className="w-[10%] flex flex-col justify-end h-full group relative">
                <div className="bg-gray-200/70 h-[42%] w-full rounded-t-sm absolute bottom-0 z-0"></div>
                <div className="bg-[#3d14f5] h-[32%] w-full rounded-t-sm z-10"></div>
                <span className="absolute bottom-[-22px] left-0 right-0 text-center text-[9px] text-gray-400 font-bold uppercase">Sun</span>
              </div>
            </div>
            <div className="h-2"></div>
          </div>

          {/* Right Column: Segmentation */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide mb-6">Segmentation</h3>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600 font-medium">Enterprise</span>
                    <span className="text-slate-900 font-black">54%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3d14f5] rounded-full" style={{ width: "54%" }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600 font-medium">Startup</span>
                    <span className="text-slate-900 font-black">32%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600 font-medium">Individual</span>
                    <span className="text-slate-900 font-black">14%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{ width: "14%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 text-center">
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">Total Sample: 12,480 Users</span>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: TOP USERS BY ACTIVITY & DEMOGRAPHICS (MAP) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Left Block: Top Users Table Panel */}
          <div className="bg-white border border-gray-200/70 rounded-xl shadow-sm overflow-hidden lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Top Users by Activity</h3>
                <button className="text-xs font-bold text-[#5b36ff] hover:underline">View All</button>
              </div>

              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                    <th className="py-3 px-6">User Identity</th>
                    <th className="py-3 px-4">Sessions</th>
                    <th className="py-3 px-4">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-3 px-6 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#3d14f5] text-white flex items-center justify-center text-[9px] font-black shadow-sm">AS</div>
                      <div>
                        <span className="font-extrabold text-slate-900 text-xs block">Alex Sterling</span>
                        <span className="text-[10px] text-gray-400 font-medium block">alex@sterling.io</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-900 font-black">1,240</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded inline-flex items-center gap-0.5">
                        📈 12%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-3 px-6 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[9px] font-black shadow-sm">ML</div>
                      <div>
                        <span className="font-extrabold text-slate-900 text-xs block">Marcus Lowes</span>
                        <span className="text-[10px] text-gray-400 font-medium block">m.lowes@enterprise.com</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-900 font-black">982</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded inline-flex items-center gap-0.5">
                        📈 8%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-3 px-6 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-300 text-slate-700 flex items-center justify-center text-[9px] font-black shadow-sm">KP</div>
                      <div>
                        <span className="font-extrabold text-slate-900 text-xs block">Kendra Park</span>
                        <span className="text-[10px] text-gray-400 font-medium block">kpark@startup.co</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-900 font-black">854</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] font-black bg-rose-50 text-rose-600 px-2 py-0.5 rounded inline-flex items-center gap-0.5">
                        📉 3%
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Controls inside box */}
            <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
              <span>Showing 1-3 of 1,240 entries</span>
              <div className="flex items-center gap-1">
                <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-400 text-[11px]">Previous</button>
                <button className="p-1 px-3 bg-[#3d14f5] rounded text-white text-[11px]">1</button>
                <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] hover:bg-gray-50">2</button>
                <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] hover:bg-gray-50">3</button>
                <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>

          {/* Right Block: User Demographics (EXACT MONOCHROMATIC MAP SVG EMBEDDED) */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide mb-3">User Demographics (Map)</h3>
              
              {/* High-fidelity Vector Map Component Section */}
              <div className="w-full h-28 bg-[#1a2332] rounded-lg flex items-center justify-center p-1 relative overflow-hidden border border-slate-800 shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:5px_5px]"></div>
                
                <svg
                  className="w-full h-full text-slate-600/40 fill-current select-none z-10 opacity-80"
                  viewBox="0 0 1000 450"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M150,120 L180,110 L220,115 L250,90 L290,100 L320,120 L280,160 L240,180 L180,190 L130,160 Z" />
                  <path d="M80,80 L120,75 L140,95 L110,120 L70,110 Z" />
                  <path className="text-slate-400" d="M140,195 L220,185 L290,165 L310,210 L280,250 L220,260 L150,240 L135,210 Z" />
                  <path d="M160,265 L180,260 L195,290 L180,310 L195,330 L220,350 L240,390 L220,440 L190,440 L170,390 L175,340 Z" />
                  <path d="M360,50 L420,40 L450,70 L410,110 L370,100 Z" />
                  <path d="M460,250 L520,220 L560,230 L590,260 L580,310 L550,360 L520,400 L505,420 L490,390 L480,320 L450,290 Z" />
                  <path className="text-slate-500" d="M450,140 L490,110 L540,115 L550,150 L510,180 L470,180 L440,160 Z" />
                  <path d="M550,110 L620,90 L700,80 L800,85 L880,95 L900,130 L850,170 L780,160 L710,170 L620,150 L560,140 Z" />
                  <path d="M630,160 L720,175 L820,170 L850,210 L810,250 L750,260 L680,270 L650,240 L610,210 Z" />
                  <path d="M780,340 L840,330 L880,350 L870,390 L820,410 L770,380 Z" />
                </svg>

                {/* Glowing Radar Active Tints */}
                <span className="absolute top-[38%] left-[23%] flex h-2 w-2 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="absolute top-[34%] left-[48%] flex h-2 w-2 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3d14f5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5b36ff]"></span>
                </span>
              </div>

              {/* Progress Distribution Metrics Below Map */}
              <div className="space-y-3 mt-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500 font-medium">North America</span>
                    <span className="text-slate-900">42%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3d14f5] rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500 font-medium">Europe</span>
                    <span className="text-slate-900">31%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full" style={{ width: "31%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRIC INSIGHT DETECTED SOLID CARD BANNER */}
        <div className="bg-[#120a3a] text-white p-5 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg text-indigo-300 shrink-0">
              💡
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-200">Metric Insight Detected</h4>
              <p className="text-xs text-gray-300 font-medium leading-relaxed mt-0.5">
                User retention has increased by 14.2% since the implementation of the new onboarding workflow last quarter.
              </p>
            </div>
          </div>

          <button className="px-4 py-2 bg-[#5b36ff] hover:bg-[#3d14f5] text-white text-xs font-bold rounded-lg shadow-sm shrink-0 self-end sm:self-auto transition-colors">
            View Strategy
          </button>
        </div>

      </div>
    </AdminShell>
  );
}