import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  AlertTriangle,
  Undo2,
  TrendingUp,
  Bell,
  Globe,
} from "lucide-react";

export default function FraudMonitoringCenter() {
  return (
    <AdminShell
      activeTab="Fraud"
      searchPlaceholder="Search Wallet IDs or Hash..."
    >
      <div className="min-h-screen max-w-full text-slate-800 p-6 space-y-6 font-sans overflow-x-hidden">

        {/* ================= TOP METRIC CARDS GRID ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">

          {/* High Risk Wallets */}

          <div className="bg-white rounded p-4 border border-slate-100 flex flex-col justify-between shadow-xs w-full">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  High Risk Wallets
                </span>

                <h2 className="text-3xl font-black text-slate-950 mt-1">
                  428
                </h2>
              </div>

              <div className="bg-rose-50 p-2 rounded text-rose-600">
                <AlertTriangle size={18} />
              </div>
            </div>

            <p className="text-[11px] font-bold text-rose-600 mt-4 flex items-center gap-1">
              <TrendingUp size={12} />
              +12.4%
              <span className="text-slate-400 font-medium">
                vs last week
              </span>
            </p>
          </div>

          {/* Chargeback Alerts */}

          <div className="bg-white rounded p-4 border border-slate-100 flex flex-col justify-between shadow-xs w-full">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Chargeback Alerts
                </span>

                <h2 className="text-3xl font-black text-rose-900 mt-1">
                  86
                </h2>
              </div>

              <div className="bg-rose-50 p-2 rounded text-rose-800">
                <Undo2 size={18} />
              </div>
            </div>

            <p className="text-[11px] font-bold text-rose-900 mt-4 flex items-center gap-1">
              <Bell size={12} />
              14 Pending Review
            </p>
          </div>

          {/* Abnormal Activity */}

          <div className="bg-white rounded p-4 border border-slate-100 flex flex-col justify-between shadow-xs w-full sm:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Abnormal Activity
                </span>

                <h2 className="text-3xl font-black text-emerald-700 mt-1">
                  1,204
                </h2>
              </div>

              <div className="bg-[#1e1591] p-2 rounded text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-bold text-emerald-600 mt-4 flex items-center gap-1">
              <span>✓</span>
              92% mitigation rate
            </p>
          </div>

        </div>
                {/* ================= MIDDLE SECTION: TREND VS RISK FEED ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

          {/* Left Block: Fraud Trend vs Total Transactions Histogram */}

          <div className="lg:col-span-2 bg-white rounded p-5 border border-slate-100 flex flex-col justify-between shadow-xs w-full">

            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900">
                Fraud Trend vs Total Transactions
              </h3>

              <div className="flex border border-slate-200 rounded text-[10px] font-bold text-slate-500 overflow-hidden">
                <button className="px-2.5 py-1 bg-white hover:bg-slate-50">
                  1H
                </button>
                <button className="px-2.5 py-1 bg-white hover:bg-slate-50">
                  24H
                </button>
                <button className="px-2.5 py-1 bg-white hover:bg-slate-50">
                  7D
                </button>
              </div>
            </div>

            {/* Histogram */}

            <div className="my-6 relative h-56 w-full flex items-end justify-between px-2 pt-4">

              <div className="absolute inset-x-0 top-1/4 border-t border-slate-100" />
              <div className="absolute inset-x-0 top-2/4 border-t border-slate-100" />
              <div className="absolute inset-x-0 top-3/4 border-t border-slate-100" />

              <div className="bg-slate-100 w-[7%] h-[20%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[40%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[50%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[35%] rounded-t-xs" />
              <div className="bg-slate-100 w-[7%] h-[60%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[75%] rounded-t-xs" />
              <div className="bg-[#b91c1c] w-[7%] h-[80%] rounded-t-xs" />
              <div className="bg-slate-100 w-[7%] h-[45%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[30%] rounded-t-xs" />
              <div className="bg-slate-100 w-[7%] h-[65%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[75%] rounded-t-xs" />
              <div className="bg-[#b91c1c] w-[7%] h-[88%] rounded-t-xs" />
              <div className="bg-slate-200/70 w-[7%] h-[70%] rounded-t-xs" />
            </div>

            <div className="flex justify-between text-[10px] font-bold text-slate-400 tracking-wide px-1">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>

          </div>

          {/* Right Block: Live Risk Feed Alerts */}

          <div className="bg-white rounded p-5 border border-slate-100 flex flex-col justify-between shadow-xs w-full">

            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
                <h3 className="text-sm font-bold text-slate-900">
                  Live Risk Feed
                </h3>
              </div>

              <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase">
                Live
              </span>
            </div>

            {/* SCROLL REMOVED HERE */}

            <div className="space-y-4 pt-4">
                            <div className="border-l-2 border-rose-600 pl-3 space-y-1.5">

                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-rose-600 uppercase tracking-wider">
                    Critical Priority
                  </span>
                  <span className="text-slate-400">12:44:01</span>
                </div>

                <h4 className="text-xs font-black text-slate-900">
                  Mass Login Failure Sequence
                </h4>

                <p className="text-[11px] text-slate-500 leading-normal">
                  IP: 192.168.1.42 attempted 45 auth calls in 2s.
                </p>

                <div className="flex gap-2 pt-1">
                  <button className="flex-1 text-center bg-[#b91c1c] hover:bg-rose-700 text-white font-bold text-[10px] py-1 rounded uppercase tracking-wider">
                    Block IP
                  </button>

                  <button className="flex-1 text-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-600 font-bold text-[10px] py-1 rounded uppercase tracking-wider">
                    Ignore
                  </button>
                </div>

              </div>

              <div className="border-l-2 border-amber-500 pl-3 space-y-1.5">

                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-amber-600 uppercase tracking-wider">
                    High Risk
                  </span>

                  <span className="text-slate-400">
                    12:42:33
                  </span>
                </div>

                <h4 className="text-xs font-black text-slate-900">
                  Large Cross-Border Transfer
                </h4>

                <p className="text-[11px] text-slate-500 leading-normal">
                  Amount: $18,200.00 to Bank of Russia.
                </p>

                <button className="w-full text-center bg-white border border-indigo-900 hover:bg-indigo-50 text-[#1e1591] font-black text-[10px] py-1.5 rounded uppercase tracking-wide">
                  Hold Funds
                </button>

              </div>

              <div className="bg-slate-50/80 p-2 border-l-2 border-slate-400 pl-3 space-y-1">

                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-slate-500 uppercase tracking-wider">
                    Investigation Log
                  </span>

                  <span className="text-slate-400">
                    12:35:12
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-700">
                  Agent J. Doe closed case #9921
                </h4>

                <p className="text-[10px] text-slate-400 italic">
                  "False positive triggered by VPN change."
                </p>

              </div>

            </div>
          </div>

        </div>
                {/* ================= LOWER ROW SECTION: TABLE & WORLD MAP ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

          {/* Bottom Left: Fraud Wallets Entry Ledger Table */}

          <div className="lg:col-span-2 bg-white rounded border border-slate-200 overflow-hidden shadow-xs w-full">

            <div className="overflow-x-auto">

              <table className="w-full text-left text-xs border-collapse">

                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="px-5 py-3.5">Wallet ID</th>
                    <th className="px-5 py-3.5 text-right">Amount</th>
                    <th className="px-5 py-3.5">Risk Level</th>
                    <th className="px-5 py-3.5">Pattern</th>
                    <th className="px-5 py-3.5 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 font-medium text-slate-600">

                  <tr className="hover:bg-slate-50/60 transition-colors">

                    <td className="px-5 py-4 font-mono font-bold text-slate-900">
                      WL-8291-XX
                    </td>

                    <td className="px-5 py-4 text-right font-black text-rose-600">
                      -$42,500.00
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-[9px] font-extrabold bg-rose-50 text-rose-700 px-2 py-0.5 rounded-xs uppercase">
                        Critical
                      </span>
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      Rapid Outflow Burst
                    </td>

                    <td className="px-5 py-4 text-center">
                      <button className="text-[#1e1591] hover:underline font-bold text-xs">
                        Review
                      </button>
                    </td>

                  </tr>

                  <tr className="hover:bg-slate-50/60 transition-colors">

                    <td className="px-5 py-4 font-mono font-bold text-slate-900">
                      WL-0112-AB
                    </td>

                    <td className="px-5 py-4 text-right font-black text-rose-600">
                      -$1,200.00
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-[9px] font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-xs uppercase">
                        High
                      </span>
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      Geolocation Mismatch
                    </td>

                    <td className="px-5 py-4 text-center">
                      <button className="text-[#1e1591] hover:underline font-bold text-xs">
                        Review
                      </button>
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>
                    {/* Bottom Right: Dark Network Map Graphic */}

          <div className="bg-[#050814] rounded border border-zinc-900 flex flex-col justify-between text-white relative overflow-hidden min-h-[225px] shadow-lg w-full">

            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px]" />

            <svg className="absolute inset-0 w-full h-full opacity-40 stroke-indigo-400 stroke-[0.5] fill-none">

              <path
                d="M 30,50 Q 120,20 220,90 T 340,40"
                strokeDasharray="3 3"
              />

              <path
                d="M 60,140 Q 180,90 290,160"
              />

              <circle
                cx="30"
                cy="50"
                r="2"
                className="fill-indigo-400 animate-pulse"
              />

              <circle
                cx="220"
                cy="90"
                r="3"
                className="fill-rose-500"
              />

              <circle
                cx="290"
                cy="160"
                r="3"
                className="fill-rose-400 animate-ping"
              />

            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-8">

              <div className="relative mb-3 bg-white text-slate-950 p-2.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-slate-200">
                <Globe
                  size={22}
                  className="stroke-[2.5]"
                />
              </div>

              <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase">
                Real-Time Origin Map
              </h4>

              <p className="text-[9px] text-slate-500 font-medium tracking-wide mt-1 max-w-[210px] text-center leading-normal">
                Live geographical plotting of concurrent suspicious token
                network nodes.
              </p>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
            