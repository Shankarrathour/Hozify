import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function WalletReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);

  // CSV Export Function
  const handleExportCSV = () => {
    alert("Exporting CSV...");
    // Logic here
  };

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
          
          <div className="flex items-center gap-2 relative">
            {/* Calendar Button */}
            <button 
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <span>📅</span> Last 30 Days <span className="text-[10px] text-gray-400">▼</span>
            </button>
            {showCalendar && (
              <input 
                type="date" 
                className="absolute top-12 right-24 p-2 border rounded shadow-lg z-50 bg-white"
                onChange={() => setShowCalendar(false)}
              />
            )}

            {/* Export Button */}
            <button 
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-[#1d0094] rounded-lg text-xs font-bold text-white shadow-sm hover:bg-opacity-90 transition-colors"
            >
              <span>📤</span> Export CSV
            </button>
          </div>
        </div>

        {/* TOP ROW: THREE SEGMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <h3 className="text-sm font-black text-[#1d0094] tracking-wide mb-6">Aggregate Balance Trend</h3>
            <div className="h-56 flex items-end justify-between pt-4 px-2 relative border-b border-gray-100">
               {/* Bar Chart Bars */}
              <div className="w-[6%] bg-gray-200 rounded-t h-[40%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[45%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[35%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[55%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[65%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[75%]"></div>
              <div className="w-[6%] bg-gray-200 rounded-t h-[70%]"></div>
              <div className="w-[6%] bg-[#1d0094] rounded-t h-[85%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[80%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[90%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[87%]"></div>
              <div className="w-[6%] bg-gray-400 rounded-t h-[93%]"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm flex-1">
              <h3 className="text-sm font-black text-slate-800 tracking-wide mb-4">Wallet Activity</h3>
              {/* Wallet Activity Items */}
              <div className="space-y-4">
                <div>
                   <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5"><span>Avg. Top-up Size</span><span className="text-slate-900 font-extrabold">$1,240.00</span></div>
                   <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-slate-900 h-full rounded-full" style={{ width: "40%" }}></div></div>
                </div>
                <div>
                   <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5"><span>Avg. Withdrawal</span><span className="text-slate-900 font-extrabold">$4,500.00</span></div>
                   <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-slate-900 h-full rounded-full" style={{ width: "75%" }}></div></div>
                </div>
                <div>
                   <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5"><span>Pending Transfers</span><span className="text-slate-900 font-extrabold">143</span></div>
                   <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="bg-slate-900 h-full rounded-full" style={{ width: "20%" }}></div></div>
                </div>
              </div>
            </div>
            
            {/* Critical Alert */}
            <div className="bg-[#110066] text-white rounded-xl p-5 shadow-sm">
              <span className="text-[9px] font-black text-blue-300 tracking-wider uppercase block">Critical Alert</span>
              <h4 className="text-sm font-black mt-1 tracking-tight">High Volume Withdrawal</h4>
              <button className="mt-4 text-xs font-bold text-white underline">Review Case</button>
            </div>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left text-xs border-collapse">
             <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b uppercase text-[9px] font-black">
                  <th className="py-3.5 px-6">Transaction ID</th>
                  <th className="py-3.5 px-6">Entity</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Amount</th>
                  <th className="py-3.5 px-6 text-right">Status</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-gray-100 font-bold text-slate-700">
                {/* Rows Row 1 to 5 kept exactly as they were */}
                <tr><td className="py-4 px-6">#TRX-99201</td><td className="py-4 px-6">John Sullivan (Seller)</td><td className="py-4 px-4">Withdrawal</td><td className="py-4 px-4">Oct 24, 2023</td><td className="py-4 px-4">-$1,200.00</td><td className="py-4 px-6 text-right">Completed</td></tr>
                <tr><td className="py-4 px-6">#TRX-99202</td><td className="py-4 px-6">Acme West (Partner)</td><td className="py-4 px-4">Top-up</td><td className="py-4 px-4">Oct 24, 2023</td><td className="py-4 px-4">+$15,000.00</td><td className="py-4 px-6 text-right">Completed</td></tr>
                <tr><td className="py-4 px-6">#TRX-99203</td><td className="py-4 px-6">Elena Martinez (User)</td><td className="py-4 px-4">Refund</td><td className="py-4 px-4">Oct 23, 2023</td><td className="py-4 px-4">+$42.50</td><td className="py-4 px-6 text-right">Pending</td></tr>
                <tr><td className="py-4 px-6">#TRX-99204</td><td className="py-4 px-6">Global Logistics (Partner)</td><td className="py-4 px-4">Withdrawal</td><td className="py-4 px-4">Oct 23, 2023</td><td className="py-4 px-4">-$5,600.00</td><td className="py-4 px-6 text-right">Completed</td></tr>
                <tr><td className="py-4 px-6">#TRX-99205</td><td className="py-4 px-6">Tech Pro (Seller)</td><td className="py-4 px-4">Settlement</td><td className="py-4 px-4">Oct 23, 2023</td><td className="py-4 px-4">+$8,920.00</td><td className="py-4 px-6 text-right">Completed</td></tr>
             </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-[#f8fafd] border-t px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing Page {currentPage} of 3</span>
            <div className="flex items-center gap-1">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="px-2 py-1 bg-white border rounded">&lt;</button>
              <button className="px-2 py-1 bg-[#1d0094] text-white rounded">{currentPage}</button>
              <button onClick={() => setCurrentPage(Math.min(3, currentPage + 1))} className="px-2 py-1 bg-white border rounded">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}