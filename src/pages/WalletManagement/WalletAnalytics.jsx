import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  MoreVertical, 
  SlidersHorizontal, 
  Download, 
  Building2 
} from "lucide-react";

export default function WalletAnalytics() {
  return (
    <AdminShell activeTab="Analytics" searchPlaceholder="Search metrics...">
      
      {/* Light slate layout framework matching standard floating layout card templates */}
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 p-6 space-y-6 font-sans">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#1e224e]">Analytics Engine</h1>
            <p className="text-xs text-slate-400 mt-1">Real-time fiscal monitoring and performance distribution.</p>
          </div>
          
          {/* Timeframe Selector Button Group */}
          <div className="flex bg-white p-1 rounded border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
            <button className="px-3 py-1.5 rounded hover:bg-slate-50">24h</button>
            <button className="px-3 py-1.5 rounded hover:bg-slate-50">7d</button>
            <button className="px-3 py-1.5 rounded bg-[#1d1880] text-white shadow-xs">30d</button>
            <button className="px-3 py-1.5 rounded hover:bg-slate-50">Custom</button>
          </div>
        </div>

        {/* ================= 4 TOP CARD METRICS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Total Wallet Vol */}
          <div className="bg-white rounded p-4 border border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Wallet Vol.</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12.5%</span>
            </div>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2">$4,289,502</h2>
            <div className="mt-4 h-6 w-full text-emerald-600 opacity-80">
              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,15 Q25,5 50,15 T100,8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Card 2: Net Settlement */}
          <div className="bg-white rounded p-4 border border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Net Settlement</span>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Stable</span>
            </div>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2">$892,100</h2>
            <div className="mt-4 h-6 w-full text-indigo-600 opacity-80">
              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,10 Q30,15 60,8 T100,12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Card 3: Refund Rate */}
          <div className="bg-white rounded p-4 border border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Refund Rate</span>
              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">+0.4%</span>
            </div>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2">0.82%</h2>
            <div className="mt-4 h-6 w-full text-rose-600 opacity-80">
              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,5 Q50,18 100,14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Card 4: Active Merchants */}
          <div className="bg-white rounded p-4 border border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Merchants</span>
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">New: 42</span>
            </div>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2">1,402</h2>
            <div className="mt-4 flex items-end gap-1 h-6 pt-2">
              <div className="bg-teal-600/30 w-full h-2 rounded-xs" />
              <div className="bg-teal-600/30 w-full h-3 rounded-xs" />
              <div className="bg-teal-600/30 w-full h-2.5 rounded-xs" />
              <div className="bg-teal-600/30 w-full h-4 rounded-xs" />
              <div className="bg-teal-600/30 w-full h-4.5 rounded-xs" />
            </div>
          </div>

        </div>

        {/* ================= VISUAL DATA CHARTS SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Block: Wallet Growth Trend Line Plot */}
          <div className="lg:col-span-2 bg-white rounded p-5 border border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Wallet Growth Trend</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Cumulative deposit and withdrawal volume</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
            </div>

            <div className="my-6 relative h-48 w-full border-b border-slate-100">
              <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible text-indigo-900">
                <line x1="0" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeDasharray="4 4" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="#f1f5f9" strokeDasharray="4 4" />
                
                <line x1="370" y1="0" x2="370" y2="150" stroke="#a78bfa" strokeDasharray="3 3" />
                <circle cx="370" cy="50" r="4" className="fill-indigo-900 stroke-white stroke-2" />

                <path 
                  d="M0,100 L80,95 L140,110 L210,80 L280,85 L350,60 L420,50 L500,35" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1 uppercase tracking-wider">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>

          {/* Right Block: Revenue Distribution Donut Split */}
          <div className="bg-white rounded p-5 border border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Revenue Distribution</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Allocation by asset class</p>
            </div>

            <div className="flex justify-center items-center my-4 relative">
              <div className="h-32 w-32 rounded-full border-[14px] border-indigo-900 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-[14px] border-emerald-600 border-t-transparent border-r-transparent border-b-transparent -m-[14px] rotate-45" />
                <div className="absolute inset-0 rounded-full border-[14px] border-rose-600 border-t-transparent border-l-transparent border-b-transparent -m-[14px] -rotate-12" />
                
                <span className="text-xs font-black text-slate-900 tracking-tight">Global</span>
                <span className="text-[10px] font-semibold text-slate-400">100%</span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-semibold text-slate-600 pt-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-900" />
                  <span>Transaction Fees</span>
                </div>
                <span className="font-bold text-slate-900">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  <span>Merchant Services</span>
                </div>
                <span className="font-bold text-slate-900">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-600" />
                  <span>Compliance Penalties</span>
                </div>
                <span className="font-bold text-slate-900">10%</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= SETTLEMENT PERFORMANCE LEDGER TABLE ================= */}
        <div className="bg-white rounded text-slate-800 border border-slate-200/80 overflow-hidden shadow-xs">
          <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Settlement Performance Ledger</h3>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold hover:bg-slate-50 text-slate-600">
                <SlidersHorizontal size={13} /> Filter
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-[#1d1880] text-white text-xs font-bold shadow-xs">
                <Download size={13} /> Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-3.5">Settlement ID</th>
                  <th className="px-6 py-3.5">Merchant Group</th>
                  <th className="px-6 py-3.5">Volume</th>
                  <th className="px-6 py-3.5">Velocity</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Net Yield</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-400">#SET-99021-X</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">Blue-Chip Retail Hub</td>
                  <td className="px-6 py-4 font-bold text-slate-900">$450,200.00</td>
                  <td className="px-6 py-4">
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-4/5" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[9px] font-extrabold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-xs uppercase">Settled</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-600">+$12,400.00</td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-400">#SET-99022-P</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">Quantum Tech APAC</td>
                  <td className="px-6 py-4 font-bold text-slate-900">$1,290,000.50</td>
                  <td className="px-6 py-4">
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-11/12" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[9px] font-extrabold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-xs uppercase">Settled</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-600">+$38,210.15</td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-400">#SET-99025-F</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">Neo-Bank Liquidity</td>
                  <td className="px-6 py-4 font-bold text-slate-900">$85,400.00</td>
                  <td className="px-6 py-4">
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-rose-600 h-full w-1/3" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[9px] font-extrabold bg-rose-50 text-rose-600 px-2 py-0.5 rounded-xs uppercase">Frozen</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-rose-600">-$1,250.00</td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-400">#SET-99028-W</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">Luxe Global Logistics</td>
                  <td className="px-6 py-4 font-bold text-slate-900">$310,000.00</td>
                  <td className="px-6 py-4">
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-slate-300 h-full w-1/2" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[9px] font-extrabold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-xs uppercase">Pending</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-slate-400">$0.00</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* ================= LOWER RATIO & LIQUIDITY WIDGET ================= */}
        <div className="bg-white rounded text-slate-800 p-5 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Credit/Debit Ratio</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Real-time balancing of inbound vs outbound flow. Current ratio is within healthy parameters.</p>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Credit Liquidity</span>
                    <span className="text-emerald-600">72%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full" style={{ width: "72%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600">Debit Obligation</span>
                    <span className="text-rose-600">28%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-600 h-full" style={{ width: "28%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 border border-slate-100 bg-slate-50/50 rounded-md p-6 flex flex-col items-center text-center space-y-2">
              <Building2 size={24} className="text-indigo-900" />
              <h4 className="text-sm font-black text-indigo-950 tracking-tight">Liquidity Index: Stable</h4>
              <p className="text-[11px] text-slate-400 max-w-sm leading-normal font-medium">
                Our algorithm monitors credit/debit volatility 24/7 to ensure settlement reserves remain at +20% of peak historical volume.
              </p>
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}