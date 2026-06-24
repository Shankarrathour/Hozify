import React from "react";
import AdminShell from "../../components/layouts/AdminShell"; // Direct layout path import as requested

export default function EmployeeReportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER WITH TIME-PERIOD TABS & FILTERS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Employee Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Comprehensive tracking of staff performance and operational efficiency.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
              <span>📅</span> Last 30 Days
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
              <span>⏳</span> Filters
            </button>
          </div>
        </div>

        {/* TOP ROW: FOUR ANALYTICS METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Card 1: Avg Completion Time */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Avg Completion Time</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">24.5m</span>
                <span className="text-[10px] font-bold text-rose-500">-2.4%</span>
              </div>
              <div className="w-24 bg-gray-100 h-1 rounded-full mt-3 overflow-hidden">
                <div className="bg-slate-900 h-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Feedback Score */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Feedback Score</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">4.82</span>
                <span className="text-[10px] font-bold text-emerald-500">+0.12</span>
              </div>
              <div className="flex items-center gap-0.5 text-[10px] text-amber-400 mt-2.5">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>

          {/* Card 3: Jobs Completed */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Jobs Completed</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">1,204</span>
                <span className="text-[10px] font-bold text-emerald-500">+18%</span>
              </div>
              <span className="text-[9px] text-gray-400 font-bold block mt-2.5">Target: 1,500 by EOM</span>
            </div>
          </div>

          {/* Card 4: Productivity Rate */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Productivity Rate</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">92.1%</span>
                <span className="text-[10px] font-bold text-emerald-500">+3.2%</span>
              </div>
              <div className="flex items-center gap-1 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-[9px] text-gray-400 font-bold">Above Threshold</span>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: PRODUCTIVITY TRENDS & PERFORMANCE LEADERBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Productivity Trends Chart Box */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Productivity Trends</h3>
              <select className="text-xs font-bold border border-gray-200 px-2 py-1 rounded bg-white text-slate-600 focus:outline-none">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            {/* Custom Styled Weekly Bar Graph Frame */}
            <div className="h-44 flex items-end justify-between gap-3 pt-6 border-b border-gray-100 px-4 bg-slate-50/30 rounded-t-lg relative">
              {/* MON */}
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[45%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Mon</span>
              </div>
              {/* TUE */}
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[62%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Tue</span>
              </div>
              {/* WED */}
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[55%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Wed</span>
              </div>
              {/* THU (Active Highlighted Item) */}
              <div className="w-[10%] flex flex-col justify-end h-full relative z-10">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-[#1d0094] text-white text-[8px] px-1 py-0.5 rounded font-black shadow-sm">92%</div>
                <div className="bg-[#b3b9f2] h-[82%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-slate-800 font-black uppercase">Thu</span>
              </div>
              {/* FRI */}
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[68%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Fri</span>
              </div>
              {/* SAT */}
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[72%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Sat</span>
              </div>
              {/* SUN */}
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[40%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Sun</span>
              </div>
            </div>
            <div className="h-1"></div>
          </div>

          {/* Right Panel: Performance Leaderboard WITH PROFILE PHOTOS */}
          <div className="bg-white border border-gray-200/70 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-white">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Performance Leaderboard</h3>
            </div>

            <div className="p-4 divide-y divide-gray-100/70 space-y-3.5 flex-1">
              
              {/* Leader 1 - Elena Vance */}
              <div className="flex items-center justify-between pt-3 first:pt-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-indigo-900 w-4">01</span>
                  {/* Profile Photo added below */}
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" 
                      alt="Elena Vance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">Elena Vance</span>
                    <span className="text-[9px] text-gray-400 block font-medium">Tech Lead</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-slate-950 block">98.5</span>
                  <span className="text-[8px] font-black text-indigo-600 tracking-tight block uppercase">TOP 1%</span>
                </div>
              </div>

              {/* Leader 2 - Marcus Thorne */}
              <div className="flex items-center justify-between pt-3.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-400 w-4">02</span>
                  {/* Profile Photo added below */}
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" 
                      alt="Marcus Thorne"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">Marcus Thorne</span>
                    <span className="text-[9px] text-gray-400 block font-medium">Senior Analyst</span>
                  </div>
                </div>
                <span className="text-xs font-black text-slate-900">96.2</span>
              </div>

              {/* Leader 3 - Sarah Jenkins */}
              <div className="flex items-center justify-between pt-3.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-400 w-4">03</span>
                  {/* Profile Photo added below */}
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80" 
                      alt="Sarah Jenkins"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">Sarah Jenkins</span>
                    <span className="text-[9px] text-gray-400 block font-medium">Team Manager</span>
                  </div>
                </div>
                <span className="text-xs font-black text-slate-900">95.8</span>
              </div>

              {/* Leader 4 - David Chen */}
              <div className="flex items-center justify-between pt-3.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-400 w-4">04</span>
                  {/* Profile Photo added below */}
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80" 
                      alt="David Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">David Chen</span>
                    <span className="text-[9px] text-gray-400 block font-medium">Ops Specialist</span>
                  </div>
                </div>
                <span className="text-xs font-black text-slate-900">94.1</span>
              </div>
            </div>

            <button className="w-full bg-[#f8fafd] border-t border-gray-100 py-3 text-center text-xs font-bold text-[#1d0094] hover:bg-slate-100/50 transition-colors">
              View Full Leaderboard
            </button>
          </div>

        </div>

        {/* BOTTOM SECTION: STAFF PERFORMANCE BREAKDOWN */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-sm font-black text-slate-800 tracking-wide">Staff Performance Breakdown</h3>
            
            <div className="flex items-center gap-4 text-[10px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="text-slate-500">High Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span className="text-slate-400">Standard</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3 px-6">Employee</th>
                  <th className="py-3 px-4">Job Status</th>
                  <th className="py-3 px-4">Completion Time</th>
                  <th className="py-3 px-4 text-center">Feedback</th>
                  <th className="py-3 px-4 text-center">Trend</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {/* Member Row 1 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Lila" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 text-xs block">Lila Thorne</span>
                      <span className="text-[10px] text-gray-400 font-medium block">Customer Experience</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">42 Completed</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">18m 42s</td>
                  <td className="py-3.5 px-4 text-center text-slate-900 font-black">
                    4.9 <span className="text-[14px] text-amber-400">★</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                  <span className="inline-block text-xl text-emerald-600 transform scale-110 align-middle">
                  📈
                  </span>
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-[11px] text-[#1d0094] hover:underline">View Profile</button>
                  </td>
                </tr>

                {/* Member Row 2 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="James" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 text-xs block">James Wilson</span>
                      <span className="text-[10px] text-gray-400 font-medium block">Logistics Lead</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">38 Completed</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">22m 15s</td>
                  <td className="py-3.5 px-4 text-center text-slate-900 font-black">
                    4.7 <span className="text-[14px] text-amber-400">★</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                  <span className="inline-block text-xl text-slate-400 transform scale-110 align-middle">
                  ➡️
                 </span>
                 </td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-[11px] text-[#1d0094] hover:underline">View Profile</button>
                  </td>
                </tr>

                {/* Member Row 3 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80" alt="Sofia" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 text-xs block">Sofia Rodriguez</span>
                      <span className="text-[10px] text-gray-400 font-medium block">Support Tier III</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">51 Completed</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">15m 10s</td>
                  <td className="py-3.5 px-4 text-center text-slate-900 font-black">
                    5.0 <span className="text-[14px] text-amber-400">★</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                  <span className="inline-block text-xl text-emerald-600 transform scale-110 align-middle">
                   📈
                 </span>
                 </td>
                  <td className="py-3.5 px-6 text-right">
                    <button className="text-[11px] text-[#1d0094] hover:underline">View Profile</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination Blocks Footer */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 1-3 of 42 entries</span>
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