import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function BookingReportPage() {
  // States for Calendar / Date Filter
  const [isDateMenuOpen, setIsDateMenuOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");

  // States for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // States for View Suggestions Modal
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  // Sample static data handler for pagination demonstration
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sansrelative">
        
        {/* TOP TITLE HEADER & DATE FILTER CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Booking Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Real-time performance metrics and historical booking activity.
            </p>
          </div>
          
          {/* Calendar Filter Dropdown Implementation */}
          <div className="self-end sm:self-auto relative">
            <button 
              onClick={() => setIsDateMenuOpen(!isDateMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <span>📅</span> {selectedRange} <span className="text-[10px] text-gray-400">▼</span>
            </button>

            {isDateMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 text-xs">
                {["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Custom Range"].map((range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setSelectedRange(range);
                      setIsDateMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-50 font-bold ${
                      selectedRange === range ? "text-[#3d14f5] bg-indigo-50/50" : "text-slate-700"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
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
              <span className="text-[10px] text-gray-400 font-medium block pt-1">vs. previous {selectedRange.toLowerCase()}</span>
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
            <h3 className="text-xs font-black text-slate-800 tracking-wide uppercase">Revenue Distribution ({selectedRange})</h3>
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
            <h3 className="text-xs font-black text-slate-800 tracking-wide uppercase">Recent Bookings (Page {currentPage})</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 text-xs">🎛️</button>
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 text-xs">📥</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
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
                {/* Dynamically altering visual rows just for interactive feel based on pagination */}
                {currentPage === 1 && (
                  <>
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98421</td>
                      <td className="py-3.5 px-4 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/40 flex items-center justify-center text-[8px] font-black">EL</div>
                        <span className="text-xs text-slate-800 font-medium">Eleanor Lawrence</span>
                      </td>
                      <td className="py-3.5 px-4"><span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Deep Clean</span></td>
                      <td className="py-3.5 px-4">
                        <span className="text-[10px] font-black text-emerald-600 inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Completed
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 24, 2023</td>
                      <td className="py-3.5 px-6 text-right text-slate-900 font-black">$189.00</td>
                    </tr>
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98422</td>
                      <td className="py-3.5 px-4 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 border border-gray-200 flex items-center justify-center text-[8px] font-black">MK</div>
                        <span className="text-xs text-slate-800 font-medium">Marcus Kane</span>
                      </td>
                      <td className="py-3.5 px-4"><span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Maintenance</span></td>
                      <td className="py-3.5 px-4">
                        <span className="text-[10px] font-black text-indigo-600 inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> In Progress
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 24, 2023</td>
                      <td className="py-3.5 px-6 text-right text-slate-900 font-black">$75.00</td>
                    </tr>
                  </>
                )}
                {currentPage === 2 && (
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98423</td>
                    <td className="py-3.5 px-4 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/40 flex items-center justify-center text-[8px] font-black">SV</div>
                      <span className="text-xs text-slate-800 font-medium">Sarah Vance</span>
                    </td>
                    <td className="py-3.5 px-4"><span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Subscription</span></td>
                    <td className="py-3.5 px-4">
                      <span className="text-[10px] font-black text-amber-500 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Scheduled
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 25, 2023</td>
                    <td className="py-3.5 px-6 text-right text-slate-900 font-black">$210.00</td>
                  </tr>
                )}
                {currentPage === 3 && (
                  <>
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98424</td>
                      <td className="py-3.5 px-4 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 border border-gray-200 flex items-center justify-center text-[8px] font-black">DB</div>
                        <span className="text-xs text-slate-800 font-medium">David Byrne</span>
                      </td>
                      <td className="py-3.5 px-4"><span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Deep Clean</span></td>
                      <td className="py-3.5 px-4">
                        <span className="text-[10px] font-black text-rose-500 inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> Cancelled
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 25, 2023</td>
                      <td className="py-3.5 px-6 text-right text-slate-400 font-black">$0.00</td>
                    </tr>
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-6 text-slate-900 font-black">#HZ-98425</td>
                      <td className="py-3.5 px-4 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 border border-gray-200 flex items-center justify-center text-[8px] font-black">JL</div>
                        <span className="text-xs text-slate-800 font-medium">Jessica Low</span>
                      </td>
                      <td className="py-3.5 px-4"><span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">On-Demand</span></td>
                      <td className="py-3.5 px-4">
                        <span className="text-[10px] font-black text-emerald-600 inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Completed
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-medium">Oct 26, 2023</td>
                      <td className="py-3.5 px-6 text-right text-slate-900 font-black">$120.00</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Pagination Controls - Fully Working Now */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3.5 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing {(currentPage - 1) * 2 + 1}-{Math.min(currentPage * 2, 5)} of 5 entries</span>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-1 px-2.5 bg-white border border-gray-200 rounded text-[11px] shadow-sm transition-all ${
                  currentPage === 1 ? "opacity-40 cursor-not-allowed text-gray-300" : "text-slate-700 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`p-1 px-3 rounded text-[11px] shadow-sm transition-all ${
                    currentPage === page 
                      ? "bg-slate-900 text-white" 
                      : "bg-white border border-gray-200 text-slate-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-1 px-2.5 bg-white border border-gray-200 rounded text-[11px] shadow-sm transition-all ${
                  currentPage === totalPages ? "opacity-40 cursor-not-allowed text-gray-300" : "text-slate-700 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS BREAKDOWN & EFFICIENCY INSIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm md:col-span-2 space-y-5">
            <h3 className="text-sm font-black text-slate-900">Service Category Breakdown</h3>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Standard Maintenance</span>
                <span className="text-slate-900">42%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-slate-900" style={{ width: "42%" }}></div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Deep Cleaning</span>
                <span className="text-slate-900">35%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-slate-900" style={{ width: "35%" }}></div>
              </div>
            </div>
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

          {/* Efficiency Insight Callout Card */}
          <div className="bg-[#1d0094] text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-sm font-black tracking-tight">Efficiency Insight</h4>
              <p className="text-[11px] text-indigo-100 font-medium leading-relaxed">
                Operational teams are currently 12% faster than last month. Consider increasing booking capacity for Q4.
              </p>
            </div>

            <div className="my-4 pt-3 border-t border-indigo-500/30 flex items-center gap-3">
              <span className="text-xl">🚀</span>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-200 block">OPTIMIZATION STATUS</span>
                <span className="text-xs font-black block">High Performance</span>
              </div>
            </div>

            {/* Clickable View Suggestions Button */}
            <button 
              onClick={() => setIsSuggestionsOpen(true)}
              className="w-full py-2 bg-white text-slate-900 text-xs font-black rounded-lg text-center hover:bg-gray-100 active:scale-[0.98] transition-all shadow-sm"
            >
              View Suggestions
            </button>
          </div>
        </div>

        {/* VIEW SUGGESTIONS MODAL POPUP */}
        {isSuggestionsOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 max-w-md w-full overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💡</span>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Operational Suggestions</h3>
                </div>
                <button 
                  onClick={() => setIsSuggestionsOpen(false)}
                  className="text-gray-400 hover:text-slate-600 text-sm font-bold p-1"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 space-y-4 text-xs">
                <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100/30">
                  <p className="font-bold text-slate-900 mb-1">📈 Increase Slots by 15%</p>
                  <p className="text-gray-500 font-medium">Due to high performance and rapid completions, morning hours currently have unutilized labor capacity.</p>
                </div>
                <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100/30">
                  <p className="font-bold text-slate-900 mb-1">🤖 Automate Dispatching</p>
                  <p className="text-gray-500 font-medium">Deep Cleaning bookings are peaking on weekends. Shift scheduling to auto-assign rules.</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setIsSuggestionsOpen(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold shadow-sm transition-all"
                >
                  Acknowledge
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}