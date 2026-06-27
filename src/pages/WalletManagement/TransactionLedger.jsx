import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, Printer, ArrowUpRight, ArrowDownRight, HelpCircle, Landmark } from "lucide-react";

export default function TransactionLedger() {
  return (
    <AdminShell activeTab="Transactions" searchPlaceholder="Search ledgers...">
      
      {/* Exact jet-black background color framework as shown in image_7c4006.jpg */}
      <div className="min-h-screen bg-[#f8fafc] text-white p-6 space-y-6 font-sans">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#2b35db]">Transaction Ledger</h1>
            <p className="text-xs text-slate-500 mt-1">Real-time audit trail for all global wallet activities across multi-currency channels.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f8fafc] border border-zinc-800-#181075 text-xs font-bold text-[#3139cb] hover:bg-zinc-200">
              <Download size={13} /> Export CSV
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f8fafc] border border-zinc-800-#181075 text-xs font-bold text-[#3139cb] hover:bg-zinc-200">
              <Printer size={13} /> Print Ledger
            </button>
          </div>
        </div>

        {/* ================= FILTER TOOLBAR CONTAINER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          
          {/* Date Range Block */}
          <div className="bg-white rounded p-3 border border-slate-200">
            <label className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">Date Range</label>
            <div className="flex items-center gap-1 text-slate-700 text-xs">
              <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-center outline-none focus:border-slate-400" />
              <span className="text-slate-400 font-medium">to</span>
              <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-center outline-none focus:border-slate-400" />
            </div>
          </div>

          {/* Transaction Type Dropdown */}
          <div className="bg-white rounded p-3 border border-slate-200">
            <label className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">Transaction Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-700 outline-none">
              <option>All Types</option>
            </select>
          </div>

          {/* Source Channel Dropdown */}
          <div className="bg-white rounded p-3 border border-slate-200">
            <label className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">Source Channel</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-700 outline-none">
              <option>All Sources</option>
            </select>
          </div>

          {/* Core Apply Action Button */}
          <button className="w-full bg-[#1e1591] hover:bg-[#181075] text-white rounded py-3.5 text-xs font-black tracking-wider uppercase transition-colors shadow-sm">
            Apply
          </button>
        </div>

        {/* ================= MAIN TRANSACTION LEDGER TABLE ================= */}
        <div className="bg-white rounded text-slate-800 border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-4">Transaction ID</th>
                  <th className="px-5 py-4">Owner / Entity</th>
                  <th className="px-5 py-4 text-right">Credit (+)</th>
                  <th className="px-5 py-4 text-right">Debit (-)</th>
                  <th className="px-5 py-4 text-right">Running Balance</th>
                  <th className="px-5 py-4">Source</th>
                  <th className="px-5 py-4">Reference</th>
                  <th className="px-5 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-900">#TXN-882104-B</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-900 font-black text-[9px] p-1 rounded-sm tracking-tighter">AS</span>
                      <span className="font-black text-slate-900">Acme Solutions Corp</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right font-black text-emerald-600">$12,450.00</td>
                  <td className="px-5 py-4 text-right text-slate-400">--</td>
                  <td className="px-5 py-4 text-right font-black text-slate-900">$1,042,550.00</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Wire Transfer</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Settlement Payout</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-[9px] font-black bg-blue-900 text-white px-1.5 py-0.5 rounded-xs uppercase">COM</span>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-900">#TXN-882103-X</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-900 font-black text-[9px] p-1 rounded-sm tracking-tighter">JL</span>
                      <span className="font-black text-slate-900">Janus Logistics</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right text-slate-400">--</td>
                  <td className="px-5 py-4 text-right font-black text-rose-600">$4,200.00</td>
                  <td className="px-5 py-4 text-right font-black text-slate-900">$1,030,100.00</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">ACH Batch</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Platform Fee Dec</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-[9px] font-black bg-blue-900 text-white px-1.5 py-0.5 rounded-xs uppercase">COM</span>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-900">#TXN-882099-C</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-900 font-black text-[9px] p-1 rounded-sm tracking-tighter">GT</span>
                      <span className="font-black text-slate-900">Global Tech Partners</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right text-slate-400">--</td>
                  <td className="px-5 py-4 text-right font-black text-rose-600">$150,000.00</td>
                  <td className="px-5 py-4 text-right font-black text-slate-900">$1,034,300.00</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Swift Payment</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Infrastructure Reserve</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-[9px] font-black bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-xs uppercase">APP</span>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-900">#TXN-882098-F</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-900 font-black text-[9px] p-1 rounded-sm tracking-tighter">MM</span>
                      <span className="font-black text-slate-900">Merchant Max</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right text-slate-400">--</td>
                  <td className="px-5 py-4 text-right font-black text-rose-600">$850.00</td>
                  <td className="px-5 py-4 text-right font-black text-slate-900">$1,184,300.00</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Card Chargeback</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Dispute #88312</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-[9px] font-black bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded-xs uppercase">PEN</span>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-900">#TXN-882097-Z</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-900 font-black text-[9px] p-1 rounded-sm tracking-tighter">HS</span>
                      <span className="font-black text-slate-900">Hyper Scale Inc</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right font-black text-emerald-600">$55,000.00</td>
                  <td className="px-5 py-4 text-right text-slate-400">--</td>
                  <td className="px-5 py-4 text-right font-black text-slate-900">$1,185,150.00</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Internal Transfer</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Equity Drawdown</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-[9px] font-black bg-blue-900 text-white px-1.5 py-0.5 rounded-xs uppercase">COM</span>
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-900">#TXN-882096-A</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-50 text-blue-900 font-black text-[9px] p-1 rounded-sm tracking-tighter">UX</span>
                      <span className="font-black text-slate-900">UserX Labs</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right font-black text-emerald-600">$1,200.00</td>
                  <td className="px-5 py-4 text-right text-slate-400">--</td>
                  <td className="px-5 py-4 text-right font-black text-slate-900">$1,130,150.00</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Gateway Credit</td>
                  <td className="px-5 py-4 text-[11px] text-slate-400">Refund Receipt #3</td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-[9px] font-black bg-blue-900 text-white px-1.5 py-0.5 rounded-xs uppercase">COM</span>
                  </td>
                </tr>

              </tbody>
            </table></div>
          </div>

          {/* Table Control Pagination Footer Block */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-semibold text-slate-500">
            <span>Showing 1-15 of 4,281 entries</span>
            <div className="flex items-center gap-1">
              <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-400 hover:bg-slate-50">‹</button>
              <button className="px-3 py-1 rounded bg-blue-900 text-white">1</button>
              <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">2</button>
              <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">3</button>
              <span className="px-1.5 text-slate-400">...</span>
              <button className="px-3 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">286</button>
              <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">›</button>
            </div>
          </div>
        </div>

        {/* ================= LOWER FOUR PERFORMANCE INDICATORS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Box 1: Total Credits */}
          <div className="bg-white rounded p-4 text-slate-800 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Total Credits (24h)</span>
                <ArrowUpRight size={14} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2 leading-none">
                $452,120<span className="text-sm font-bold block sm:inline">.50</span>
              </h2>
            </div>
            <p className="text-[10px] font-bold text-emerald-600 mt-4">+12.4% <span className="text-slate-400 font-medium">vs previous day</span></p>
          </div>

          {/* Box 2: Total Debits */}
          <div className="bg-white rounded p-4 text-slate-800 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Total Debits (24h)</span>
                <ArrowDownRight size={14} className="text-rose-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2 leading-none">
                $218,040<span className="text-sm font-bold block sm:inline">.00</span>
              </h2>
            </div>
            <p className="text-[10px] font-bold text-rose-600 mt-4">-3.2% <span className="text-slate-400 font-medium">vs previous day</span></p>
          </div>

          {/* Box 3: Active Holds */}
          <div className="bg-white rounded p-4 text-slate-800 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Active Holds</span>
                <HelpCircle size={14} className="text-amber-600" />
              </div>
              <h2 className="text-2xl font-black text-amber-600 tracking-tight mt-2">12 Entries</h2>
            </div>
            <p className="text-[10px] font-medium text-slate-400 mt-4">Requiring administrative review</p>
          </div>

          {/* Box 4: Current Liquidity */}
          <div className="bg-[#1e1591] rounded p-4 text-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex justify-between items-center text-[10px] font-bold text-indigo-200 uppercase tracking-wider">
                <span>Current Liquidity</span>
                <Landmark size={14} className="text-indigo-200" />
              </div>
              <h2 className="text-2xl font-black tracking-tight mt-2">$8.24M</h2>
            </div>
            <p className="text-[10px] font-medium text-indigo-200 mt-4">Aggregated across all vaults</p>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}