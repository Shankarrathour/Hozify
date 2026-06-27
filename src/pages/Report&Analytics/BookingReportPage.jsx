import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function BookingReportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER & DATE FILTER CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Booking Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Real-time performance metrics and historical booking activity.
            </p>
          </div>
          
          <div className="self-end sm:self-auto">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
              <span>📅</span> Last 30 Days <span className="text-[10px] text-gray-400">▼</span>
            </button>
          </div>
        </div>

        {/* SUMMARY TRIPLE CARD MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Total Bookings */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">TOTAL BOOKINGS</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight">12,482</span>
                <span className="text-[11px] font-bold text-emerald-500">+12.5%</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium block pt-1">vs. previous 30 days</span>
            </div>
            <span className="text-lg p-2 bg-slate-50 border border-gray-100 rounded-lg">📱</span>
          </div>

          {/* Card 2: Completion Rate */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">COMPLETION RATE</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight">98.2%</span>
                <span className="text-[11px] font-bold text-emerald-500">+0.4%</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium block pt-1">Target: &gt;95%</span>
            </div>
            <span className="text-lg p-2 bg-slate-50 border border-gray-100 rounded-lg">✅</span>
          </div>

          {/* Card 3: Avg Order Value */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">AVG. ORDER VALUE</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight">$142.50</span>
                <span className="text-[11px] font-bold text-rose-500">↓2.1%</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium block pt-1">Revenue optimization required</span>
            </div>
            <span className="text-lg p-2 bg-slate-50 border border-gray-100 rounded-lg">💵</span>
          </div>

        </div>

        {/* REVENUE DISTRIBUTION BAR CHART WIDGET */}
        <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-black text-slate-800 tracking-wide uppercase">Revenue Distribution</h3>
            
            {/* Chart Legend indicators */}
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1d0094]"></span>
                <span className="text-slate-700">Standard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                <span className="text-gray-400">Premium</span>
              </div>
            </div>
          </div>

          {/* Custom Pure Tailwind CSS Graphic Bars Visualization Block */}
          <div className="h-44 w-full flex items-end justify-between px-4 pt-4 border-b border-gray-100 gap-2">
            <div className="w-full bg-gray-200 h-[25%] rounded-t-sm"></div>
            <div className="w-full bg-[#3d14f5] h-[60%] rounded-t-sm"></div>
            <div className="w-full bg-gray-200 h-[30%] rounded-t-sm"></div>
            <div className="w-full bg-[#3d14f5] h-[80%] rounded-t-sm"></div>
            <div className="w-full bg-[#3d14f5] h-[72%] rounded-t-sm"></div>
            <div className="w-full bg-gray-200 h-[38%] rounded-t-sm"></div>
            <div className="w-full bg-[#3d14f5] h-[90%] rounded-t-sm"></div>
            <div className="w-full bg-[#3d14f5] h-[55%] rounded-t-sm"></div>
            <div className="w-full bg-gray-200 h-[22%] rounded-t-sm"></div>
            <div className="w-full bg-[#3d14f5] h-[50%] rounded-t-sm"></div>
          </div>
        </div>

        {/* RECENT BOOKINGS LOG TABLE */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden mb-6">
          
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-xs font-black text-slate-800 tracking-wide uppercase">Recent Bookings</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 text-xs">🎛️</button>
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 text-xs">📥</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3.5 px-6">Booking ID</th>
                  <th className="py-3.5 px-4">Customer</th>
                  <th className="py-3.5 px-4">Service Type</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-6 text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {/* Item Row 1 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98421</td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/40 flex items-center justify-center text-[8px] font-black">EL</div>
                    <span className="text-xs text-slate-800 font-medium">Eleanor Lawrence</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Deep Clean</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-black text-emerald-600 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Completed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 24, 2023</td>
                  <td className="py-3.5 px-6 text-right text-slate-900 font-black">$189.00</td>
                </tr>

                {/* Item Row 2 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98422</td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 border border-gray-200 flex items-center justify-center text-[8px] font-black">MK</div>
                    <span className="text-xs text-slate-800 font-medium">Marcus Kane</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Maintenance</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-black text-indigo-600 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> In Progress
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 24, 2023</td>
                  <td className="py-3.5 px-6 text-right text-slate-900 font-black">$75.00</td>
                </tr>

                {/* Item Row 3 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98423</td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/40 flex items-center justify-center text-[8px] font-black">SV</div>
                    <span className="text-xs text-slate-800 font-medium">Sarah Vance</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Subscription</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-black text-amber-500 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Scheduled
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 25, 2023</td>
                  <td className="py-3.5 px-6 text-right text-slate-900 font-black">$210.00</td>
                </tr>

                {/* Item Row 4 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98424</td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 border border-gray-200 flex items-center justify-center text-[8px] font-black">DB</div>
                    <span className="text-xs text-slate-800 font-medium">David Byrne</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Deep Clean</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-black text-rose-500 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> Cancelled
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 25, 2023</td>
                  <td className="py-3.5 px-6 text-right text-slate-400 font-black">$0.00</td>
                </tr>

                {/* Item Row 5 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98425</td>
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 border border-gray-200 flex items-center justify-center text-[8px] font-black">JL</div>
                    <span className="text-xs text-slate-800 font-medium">Jessica Low</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">On-Demand</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-black text-emerald-600 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Completed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 26, 2023</td>
                  <td className="py-3.5 px-6 text-right text-slate-900 font-black">$120.00</td>
                </tr>

              </tbody>
            </table></div>
          </div>

          {/* Table Footer Pagination Layout */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3.5 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 1-5 of 1,240 entries</span>
            <div className="flex items-center gap-1.5">
              <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm">Previous</button>
              <button className="p-1 px-3 bg-slate-900 rounded text-white text-[11px] shadow-sm">1</button>
              <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm">2</button>
              <button className="p-1 px-3 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm">3</button>
              <button className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm">Next</button>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS BREAKDOWN & EFFICIENCY INSIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Large 2 Columns: Service Category Breakdown progress bars */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm md:col-span-2 space-y-5">
            <h3 className="text-sm font-black text-slate-900">Service Category Breakdown</h3>
            
            {/* Row Item 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Standard Maintenance</span>
                <span className="text-slate-900">42%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-slate-900" style={{ width: "42%" }}></div>
              </div>
            </div>

            {/* Row Item 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Deep Cleaning</span>
                <span className="text-slate-900">35%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-slate-900" style={{ width: "35%" }}></div>
              </div>
            </div>

            {/* Row Item 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Subscription Plans</span>
                <span className="text-slate-900">18%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-slate-900" style={{ width: "18%" }}></div>
              </div>
            </div>
          </div>

          {/* Right Column: Efficiency Insight Callout Card */}
          <div className="bg-[#1d0094] text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-sm font-black tracking-tight">Efficiency Insight</h4>
              <p className="text-[11px] text-indigo-100 font-medium leading-relaxed">
                Operational teams are currently 12% faster than last month. Consider increasing booking capacity for Q4.
              </p>
            </div>

            {/* High Performance badge structure inside card */}
            <div className="my-4 pt-3 border-t border-indigo-500/30 flex items-center gap-3">
              <span className="text-xl">🚀</span>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-200 block">OPTIMIZATION STATUS</span>
                <span className="text-xs font-black block">High Performance</span>
              </div>
            </div>

            <button className="w-full py-2 bg-white text-slate-900 text-xs font-black rounded-lg text-center hover:bg-gray-50 transition-colors shadow-sm">
              View Suggestions
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}