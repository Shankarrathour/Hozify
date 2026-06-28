import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { ArrowUpRight, ShieldCheck, Clock, FileText, X, ArrowLeftRight } from "lucide-react";

const hourlyData = [
  60, 45, 30, 20, 65, 90, 95, 70, 82, 100, 85, 75,
  65, 40, 25,
];

const transactions = [
  {
    id: "#TXN-98421",
    entity: "Global Logistics Corp",
    service: "Infrastructure Audit",
    time: "11:22 PM",
    amount: "$12,450",
  },
  {
    id: "#TXN-98418",
    entity: "DataStream Services",
    service: "SaaS Subscription",
    time: "10:15 PM",
    amount: "$8,200",
  },
  {
    id: "#TXN-98415",
    entity: "Vertex Partners",
    service: "Cloud Hosting",
    time: "9:15 PM",
    amount: "$7,800",
  },
  {
    id: "#TXN-98412",
    entity: "Blue Wave Retail",
    service: "Digital Strategy",
    time: "8:02 PM",
    amount: "$6,900",
  },
  {
    id: "#TXN-98410",
    entity: "Swift Horizon LLC",
    service: "Compliance Review",
    time: "7:30 PM",
    amount: "$5,100",
  },
];

export default function DailyRevenue() {
  // Sidebar/Ledger visibility state
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search revenue metrics...">
      <div className="space-y-5 max-w-7xl mx-auto relative">

        {/* Minimal Header */}
        <div className="border-b border-slate-100 pb-4">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Daily Revenue
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time financial performance data and atomic transaction logging.
          </p>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-12 gap-5">

          {/* Hourly Chart - Styled to look professional and slim */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Hourly Revenue Distribution
              </h3>
              <div className="flex items-center gap-3 text-[10px] font-bold">
                <span className="text-indigo-600 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 inline-block" /> Today
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 inline-block" /> Yesterday
                </span>
              </div>
            </div>

            {/* Clean Hourly Progress-Bar Graph */}
            <div className="h-44 flex items-end gap-1.5 pt-4 border-b border-slate-50">
              {hourlyData.map((value, index) => (
                <div key={index} className="flex-1 bg-slate-100 hover:bg-indigo-600 rounded-t transition-all duration-200 group relative" style={{ height: '100%' }}>
                  <div 
                    className="absolute bottom-0 w-full bg-indigo-950/10 group-hover:bg-indigo-600 rounded-t transition-all"
                    style={{ height: `${value}%` }}
                  />
                  {/* Inline micro-tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-10 whitespace-nowrap transition-opacity pointer-events-none">
                    Val: {value}%
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-2.5 text-[10px] font-bold text-slate-400 tracking-wider">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>

          {/* Slim, Light-Colored Right KPI Cards */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">

            {/* Total Daily Revenue Card - Restructured & Whitened */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Daily Revenue</p>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                  $142,850
                </h2>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
                <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" /> +12.5%
                </span>
                <span className="text-slate-400 text-[11px] font-medium">Yesterday: $126,980</span>
              </div>
            </div>

            {/* Top Service Segment Card */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Service Segment</p>
                <h3 className="text-xs font-bold text-slate-800 mt-1.5 truncate">
                  Enterprise Cloud Security
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-50 flex items-center justify-between">
                <span className="text-lg font-black text-slate-900">$54,200</span>
                <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-indigo-100">
                  38% Share
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Live Transaction Ledger Table */}
        <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
          <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Top 10 Transactions (Today)
            </h3>
            <button 
              onClick={() => setIsLedgerOpen(true)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-sm hover:border-slate-300 transition-all"
            >
              <ArrowLeftRight className="h-3 w-3" />
              <span>View Ledger</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/40 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="p-3 pl-5">Transaction ID</th>
                  <th className="p-3">Entity</th>
                  <th className="p-3">Service Type</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right pr-5">Amount</th>
                </tr>
              </thead>

              <tbody className="text-xs font-medium text-slate-700">
                {transactions.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                    <td className="p-3 pl-5 font-bold text-slate-500">{item.id}</td>
                    <td className="p-3 font-bold text-slate-800">{item.entity}</td>
                    <td className="p-3 text-slate-600">{item.service}</td>
                    <td className="p-3 text-slate-400 font-semibold">{item.time}</td>
                    <td className="p-3">
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1 w-max">
                        <ShieldCheck className="h-3 w-3" /> Settled
                      </span>
                    </td>
                    <td className="p-3 text-right pr-5 font-bold text-slate-900">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            SLIDE-OUT LEDGER SIDE PANEL (DRAWER MODULE)
           ========================================== */}
        {isLedgerOpen && (
          <>
            {/* Backdrop blur effect */}
            <div 
              onClick={() => setIsLedgerOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 transition-opacity" 
            />
            
            {/* Right Side Drawer */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl border-l border-slate-200 z-50 flex flex-col justify-between p-5 animate-in slide-in-from-right duration-200">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-indigo-600" />
                    <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Enterprise Ledger</h3>
                  </div>
                  <button 
                    onClick={() => setIsLedgerOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-xs text-slate-400 font-medium mb-4">
                  Detailed real-time breakdown of current ledger entries.
                </p>

                {/* List inside Ledger Panel */}
                <div className="space-y-3 overflow-y-auto max-h-[75vh] pr-1">
                  {transactions.map((txn) => (
                    <div key={txn.id} className="p-3 border border-slate-100 rounded-lg hover:border-slate-200 bg-slate-50/30 transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                            {txn.id}
                          </span>
                          <h4 className="font-bold text-xs text-slate-800 mt-1.5">{txn.entity}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">{txn.service}</p>
                        </div>
                        <span className="font-extrabold text-xs text-slate-900">{txn.amount}</span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400 font-semibold border-t border-slate-100/70 pt-2">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-slate-300" /> {txn.time}
                        </span>
                        <span className="text-emerald-600 font-bold">● Authorized</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Audit Action */}
              <div className="border-t border-slate-100 pt-3">
                <button 
                  onClick={() => alert("Full CSV Audit Trail Download Triggered.")}
                  className="w-full py-2 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm"
                >
                  Export Audit Trail
                </button>
              </div>
            </div>
          </>
        )}

      </div>
    </AdminShell>
  );
}