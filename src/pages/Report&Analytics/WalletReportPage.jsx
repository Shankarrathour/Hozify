import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function WalletReportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-4 sm:p-6 lg:p-8 text-slate-700 antialiased font-sans">
        
        {/* HEADER SECTION */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Wallet Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Real-time aggregate balances and transactional movements across segments.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors">
              <span>📅</span> Last 30 Days <span className="text-[10px] text-gray-400">▼</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1d0094] rounded-lg text-xs font-bold text-white shadow-sm hover:bg-opacity-90 transition-colors">
              <span>📤</span> Export CSV
            </button>
          </div>
        </div>

        {/* TOP ROW: THREE SEGMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: User Segment */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-6 right-6 text-slate-400 text-lg">👥</div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">User Segment</span>
            <div className="mt-4">
              <span className="text-2xl font-black text-slate-900 tracking-tight block">$1,482,930.55</span>
              <div className="flex items-center gap-1 mt-1 text-[11px]">
                <span className="font-bold text-emerald-500">📈 12.5%</span>
                <span className="text-gray-400">vs last month</span>
              </div>
            </div>
          </div>

          {/* Card 2: Partner Segment */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-6 right-6 text-slate-400 text-lg">💎</div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Partner Segment</span>
            <div className="mt-4">
              <span className="text-2xl font-black text-slate-900 tracking-tight block">$842,100.00</span>
              <div className="flex items-center gap-1 mt-1 text-[11px]">
                <span className="font-bold text-emerald-500">📈 4.2%</span>
                <span className="text-gray-400">vs last month</span>
              </div>
            </div>
          </div>

          {/* Card 3: Seller Segment */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-6 right-6 text-slate-400 text-lg">🏪</div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Seller Segment</span>
            <div className="mt-4">
              <span className="text-2xl font-black text-slate-900 tracking-tight block">$2,109,445.12</span>
              <div className="flex items-center gap-1 mt-1 text-[11px]">
                <span className="font-bold text-rose-500">📉 2.1%</span>
                <span className="text-gray-400">vs last month</span>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: BALANCE TREND & WALLET ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Left: Aggregate Balance Trend (Custom CSS Bar Chart) */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black text-[#1d0094] tracking-wide">Aggregate Balance Trend</h3>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#1d0094]"></span>
                <span>Total Balance</span>
              </div>
            </div>

            {/* Custom Bar Layout matching the screenshot */}
            <div className="h-56 flex items-end justify-between pt-4 px-2 relative border-b border-gray-100">
              <div className="w-[6%] bg-gray-200 rounded-t h-[40%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[45%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[35%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[55%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[65%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[75%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[70%]"></div>
              <div className="w-[6%] bg-[#1d0094] rounded-t h-[85%]"></div> {/* Highlighted Month */}
              <div className="w-[6%] bg-gray-400 rounded-t h-[80%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[90%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[87%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[93%]"></div>
            </div>
            
            {/* X-Axis Month Labels */}
            <div className="w-full flex justify-between text-[10px] text-gray-400 font-bold mt-2 px-1">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
            </div>
          </div>

          {/* Right: Wallet Activity + Critical Alert Frame */}
          <div className="flex flex-col gap-6">
            
            {/* Wallet Activity Stats */}
            <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-between">
              <h3 className="text-sm font-black text-slate-800 tracking-wide mb-4">Wallet Activity</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                    <span>Avg. Top-up Size</span>
                    <span className="text-slate-900 font-extrabold">$1,240.00</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-900 h-full rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                    <span>Avg. Withdrawal</span>
                    <span className="text-slate-900 font-extrabold">$4,500.00</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-900 h-full rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                    <span>Pending Transfers</span>
                    <span className="text-slate-900 font-extrabold">143</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-900 h-full rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Alert Dark Blue Card */}
            <div className="bg-[#110066] text-white rounded-xl p-5 shadow-sm">
              <span className="text-[9px] font-black text-blue-300 tracking-wider uppercase block">Critical Alert</span>
              <h4 className="text-sm font-black mt-1 tracking-tight">High Volume Withdrawal</h4>
              <p className="text-[11px] text-blue-200/80 mt-1.5 font-medium leading-relaxed">
                A withdrawal request for $150,000.00 from Seller ID #882 has been flagged for administrative review.
              </p>
              <button className="mt-4 text-xs font-bold text-white underline hover:text-blue-200 block text-left">
                Review Case
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: RECENT WALLET MOVEMENTS TABLE */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-sm font-black text-slate-800 tracking-wide">Recent Wallet Movements</h3>
            <button className="w-8 h-8 border border-gray-200 bg-white rounded-lg flex items-center justify-center text-xs text-slate-600 hover:bg-gray-50 shadow-sm">
              ⚙️
            </button>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3.5 px-6">Transaction ID</th>
                  <th className="py-3.5 px-6">Entity</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Amount</th>
                  <th className="py-3.5 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 text-slate-900 font-extrabold">#TRX-99201</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-600 flex items-center justify-center border border-gray-200">
                      JS
                    </div>
                    <span className="text-xs text-slate-900 font-bold">John Sullivan (Seller)</span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Withdrawal</td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Oct 24, 2023</td>
                  <td className="py-4 px-4 text-slate-950 font-black">-$1,200.00</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded uppercase">
                      Completed
                    </span>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 text-slate-900 font-extrabold">#TRX-99202</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-600 flex items-center justify-center border border-gray-200">
                      AW
                    </div>
                    <span className="text-xs text-slate-900 font-bold">Acme West (Partner)</span>
                  </td>
                  <td className="py-4 px-4 text-blue-500 font-medium">Top-up</td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Oct 24, 2023</td>
                  <td className="py-4 px-4 text-emerald-600 font-black">+$15,000.00</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded uppercase">
                      Completed
                    </span>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 text-slate-900 font-extrabold">#TRX-99203</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-600 flex items-center justify-center border border-gray-200">
                      EM
                    </div>
                    <span className="text-xs text-slate-900 font-bold">Elena Martinez (User)</span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Refund</td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Oct 23, 2023</td>
                  <td className="py-4 px-4 text-slate-950 font-black">+$42.50</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[9px] font-black bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5 rounded uppercase">
                      Pending
                    </span>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 text-slate-900 font-extrabold">#TRX-99204</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-600 flex items-center justify-center border border-gray-200">
                      GL
                    </div>
                    <span className="text-xs text-slate-900 font-bold">Global Logistics (Partner)</span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Withdrawal</td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Oct 23, 2023</td>
                  <td className="py-4 px-4 text-slate-950 font-black">-$5,600.00</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded uppercase">
                      Completed
                    </span>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-6 text-slate-900 font-extrabold">#TRX-99205</td>
                  <td className="py-4 px-6 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-600 flex items-center justify-center border border-gray-200">
                      TP
                    </div>
                    <span className="text-xs text-slate-900 font-bold">Tech Pro (Seller)</span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Settlement</td>
                  <td className="py-4 px-4 text-gray-400 font-medium">Oct 23, 2023</td>
                  <td className="py-4 px-4 text-emerald-600 font-black">+$8,920.00</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded uppercase">
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>
            </table></div>
          </div>

          {/* Table Footer Pagination */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing 1-10 of 1,248 transactions</span>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-slate-400 text-xs shadow-sm">
                &lt;
              </button>
              <button className="w-6 h-6 bg-[#1d0094] rounded flex items-center justify-center text-white text-xs shadow-sm">
                1
              </button>
              <button className="w-6 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-slate-700 text-xs shadow-sm hover:bg-gray-50">
                2
              </button>
              <button className="w-6 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-slate-700 text-xs shadow-sm hover:bg-gray-50">
                3
              </button>
              <button className="w-6 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-slate-700 text-xs shadow-sm hover:bg-gray-50">
                &gt;
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}