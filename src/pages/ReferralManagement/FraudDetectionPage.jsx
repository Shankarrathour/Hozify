import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  AlertTriangle,
  Ban,
  Activity,
  Shield,
  WifiOff,
  Copy,
} from "lucide-react";

export default function FraudDetectionPage() {
  const { addToast } = useToast();

  return (
    <AdminShell activeTab="Referrals">
      <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Referral Fraud Detection
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Real-time monitoring of referral integrity and system security.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => addToast("Opening fraud analytics filter panel...", "success")}
              className="px-3 py-1.5 text-xs font-bold border border-slate-300 rounded-lg bg-white hover:bg-gray-100 cursor-pointer transition-all shadow-sm"
            >
              Filters
            </button>
            <button 
              onClick={() => addToast("Exporting detailed fraud analysis report...", "success")}
              className="px-3 py-1.5 text-xs font-bold bg-indigo-650 hover:bg-indigo-700 text-white rounded-lg cursor-pointer transition-all shadow-sm"
            >
              Export Report
            </button>
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {/* GLOBAL SCORE */}
          <div 
            onClick={() => addToast("Card clicked: Global Fraud Score details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">GLOBAL FRAUD SCORE</p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  24.8 <span className="text-[10px] font-bold text-slate-400">/ 100</span>
                </h3>
              </div>
              <span className="text-[8px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-extrabold border border-indigo-150">LIVE</span>
            </div>
            <div className="flex items-center justify-between mt-2 w-full">
              <span className="text-[9px] text-slate-500 font-semibold">Risk level: Low-Med</span>
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-700 w-1/4 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* FLAGGED */}
          <div 
            onClick={() => addToast("Card clicked: Flagged Referrals analysis", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">FLAGGED REFERRALS</p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">1,284</h3>
              </div>
              <div className="text-red-500 mt-0.5">
                <AlertTriangle size={14} />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 w-full">
              <span className="text-[9px] text-red-500 font-semibold">+12% from yesterday</span>
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-2/3 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* BLOCKED */}
          <div 
            onClick={() => addToast("Card clicked: Blocked Accounts detailed logs", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">BLOCKED ACCOUNTS</p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">492</h3>
              </div>
              <div className="text-slate-600 mt-0.5">
                <Ban size={14} />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 w-full">
              <span className="text-[9px] text-slate-500 font-semibold">Bot: 312 • Sybil: 180</span>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {/* TABLE */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-sm text-slate-900">Recently Flagged Items</h2>
              <button 
                onClick={() => addToast("Opening full audit records logs page...", "success")}
                className="text-xs font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                View All Records
              </button>
            </div>

            <table className="w-full text-left text-xs border-collapse">
              <thead className="text-slate-500 border-b border-slate-100 font-bold uppercase text-[10px]">
                <tr>
                  <th className="py-2.5">Entity</th>
                  <th>Trigger</th>
                  <th>Risk</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {/* ROW 1 */}
                <tr 
                  onClick={() => addToast("Opening threat review for user_8921_beta", "success")}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <td className="py-3 font-bold text-slate-800">
                    user_8921_beta
                    <p className="text-[10px] text-gray-400 font-normal mt-0.5">192.168.1.104</p>
                  </td>
                  <td className="font-semibold text-slate-650">Rapid Referral Spiking</td>
                  <td>
                    <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[9px] font-extrabold border border-red-100">
                      CRITICAL 94
                    </span>
                  </td>
                  <td className="text-gray-400 font-semibold">2 mins ago</td>
                </tr>

                {/* ROW 2 */}
                <tr 
                  onClick={() => addToast("Opening threat review for referral_vortex_77", "success")}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <td className="py-3 font-bold text-slate-800">
                    referral_vortex_77
                    <p className="text-[10px] text-gray-400 font-normal mt-0.5">email mismatch</p>
                  </td>
                  <td className="font-semibold text-slate-650">Duplicate Account</td>
                  <td>
                    <span className="bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded text-[9px] font-extrabold border border-yellow-100">
                      HIGH 72
                    </span>
                  </td>
                  <td className="text-gray-400 font-semibold">14 mins ago</td>
                </tr>

                {/* ROW 3 */}
                <tr 
                  onClick={() => addToast("Opening threat review for shadow_walker_01", "success")}
                  className="hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <td className="py-3 font-bold text-slate-800">
                    shadow_walker_01
                    <p className="text-[10px] text-gray-400 font-normal mt-0.5">proxy detected</p>
                  </td>
                  <td className="font-semibold text-slate-650">VPN Usage</td>
                  <td>
                    <span className="bg-orange-50 text-orange-500 px-2 py-0.5 rounded text-[9px] font-extrabold border border-orange-100">
                      MEDIUM 45
                    </span>
                  </td>
                  <td className="text-gray-400 font-semibold">1 hour ago</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-4">
            {/* THREAT DISTRIBUTION */}
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 mb-4">Threat Distribution</h3>

              <div className="space-y-4 text-xs font-bold text-slate-650">
                {/* BOT FARM */}
                <div onClick={() => addToast("Threat type: Bot Farm details", "success")} className="cursor-pointer group">
                  <div className="flex justify-between mb-1.5">
                    <span className="group-hover:text-indigo-900">Bot Farm Activity</span>
                    <span>42%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full w-[42%]"></div>
                  </div>
                </div>

                {/* DUPLICATE IP */}
                <div onClick={() => addToast("Threat type: Duplicate IP details", "success")} className="cursor-pointer group">
                  <div className="flex justify-between mb-1.5">
                    <span className="group-hover:text-indigo-900">Duplicate IP Usage</span>
                    <span>28%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full w-[28%]"></div>
                  </div>
                </div>

                {/* VPN */}
                <div onClick={() => addToast("Threat type: VPN details", "success")} className="cursor-pointer group">
                  <div className="flex justify-between mb-1.5">
                    <span className="group-hover:text-indigo-900">VPN / Tunnel Bypass</span>
                    <span>15%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-50 rounded-full w-[15%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AUTOMATION */}
            <div className="bg-slate-900 text-white p-4 rounded-xl shadow-sm flex flex-col justify-between min-h-[140px]">
              <div>
                <h3 className="font-bold text-sm">Automated Security</h3>
                <p className="text-[10px] text-gray-300 mt-1 leading-relaxed">
                  AI is handling 82% mitigation tasks.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-3 text-green-450 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Active</span>
              </div>

              <button 
                onClick={() => addToast("Opening automated threat rules configuration console...", "success")}
                className="mt-3 w-full bg-white hover:bg-slate-50 text-slate-900 font-bold py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
              >
                Configure Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}