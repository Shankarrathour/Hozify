import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function ReferralReport() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-6 text-slate-800 antialiased font-sans">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#111827]">Referral Reports</h1>
            <p className="text-xs text-gray-500 mt-0.5">Performance tracking for the Q3 Loyalty Program</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm">
              <span className="text-gray-400">📅</span> Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm">
              <span className="text-gray-400">📊</span> Filters
            </button>
          </div>
        </div>

        {/* TOP 4 METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">TOTAL REFERRALS</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">12,482</h2>
            <p className="text-[11px] font-semibold mt-2 text-emerald-500">↗ +14.2% vs last month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">CONVERSION RATE</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">28.4%</h2>
            <p className="text-[11px] font-semibold mt-2 text-emerald-500">↗ +2.1% vs last month</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">REWARD COST</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">$42,850</h2>
            <p className="text-[11px] font-semibold mt-2 text-rose-500">↗ +8.5% spend increase</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">FRAUD FLAGS</span>
            <h2 className="text-2xl font-bold text-rose-600 mt-1">214</h2>
            <p className="text-[11px] font-semibold mt-2 text-rose-500">⚠️ 12 critical alerts</p>
          </div>
        </div>

        {/* MIDDLE SECTION - PROGRAM HEALTH & FUNNEL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          
          {/* Program Health Chart Panel */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-slate-900">Program Health</h3>
              <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1d0094] block"></span> Active Users</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#e5e7eb] block"></span> Inactive</span>
              </div>
            </div>

            {/* Custom Bar Chart Layout matching the exact style of Screenshot 2026-06-24 145722.png */}
            <div className="flex-1 flex items-end justify-between gap-2 pt-8 border-b border-gray-100 pb-2 min-h-[200px]">
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-16 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">JAN</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-24 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">FEB</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-[#1d0094] h-32 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">MAR</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-20 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">APR</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-28 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">MAY</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-[#1d0094] h-36 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">JUN</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-30 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">JUL</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-24 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">AUG</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-[#1d0094] h-40 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">SEP</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-36 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">OCT</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-gray-200 h-32 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">NOV</span></div>
              <div className="flex flex-col items-center flex-1"><div className="w-full bg-[#1d0094] h-44 rounded-t-sm max-w-[20px]"></div><span className="text-[10px] text-gray-400 font-semibold mt-2">DEC</span></div>
            </div>
          </div>

          {/* Referral Funnel Panel */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Referral Funnel</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>SENT</span> <span className="text-slate-900 font-bold">12,482</span>
                </div>
                <div className="w-full bg-gray-100 h-6 rounded overflow-hidden">
                  <div className="h-full bg-[#1d0094]" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>CLICKED</span> <span className="text-slate-900 font-bold">8,940</span>
                </div>
                <div className="w-full bg-gray-100 h-6 rounded overflow-hidden">
                  <div className="h-full bg-[#130769]" style={{ width: "72%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>SIGNED UP</span> <span className="text-slate-900 font-bold">4,120</span>
                </div>
                <div className="w-full bg-gray-100 h-6 rounded overflow-hidden">
                  <div className="h-full bg-slate-600" style={{ width: "33%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>CONVERTED</span> <span className="text-slate-900 font-bold">3,542</span>
                </div>
                <div className="w-full bg-gray-100 h-6 rounded overflow-hidden">
                  <div className="h-full bg-gray-400" style={{ width: "28%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - TOP REFERRAL SOURCES & ANOMALIES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Top Referral Sources Table Container */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-900">Top Referral Sources</h3>
              <button className="text-xs font-bold text-[#1a0dab] hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100 uppercase text-[10px] font-bold tracking-wider">
                    <th className="pb-3 pl-2">Source</th>
                    <th className="pb-3 text-center">Referrals</th>
                    <th className="pb-3 text-center">CR%</th>
                    <th className="pb-3 text-right pr-2">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 font-medium text-slate-700">
                  {/* Row 1 */}
                  <tr>
                    <td className="py-3.5 pl-2 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-50 text-[#1a0dab] flex items-center justify-center font-bold text-[10px]">@</span>
                      <span className="font-bold text-slate-800">Email Direct</span>
                    </td>
                    <td className="py-3.5 text-center text-slate-500">4,821</td>
                    <td className="py-3.5 text-center text-slate-500">32.1%</td>
                    <td className="py-3.5 text-right pr-2 font-bold text-slate-900">$12,400</td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td className="py-3.5 pl-2 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-[10px]">🔗</span>
                      <span className="font-bold text-slate-800">Social Links</span>
                    </td>
                    <td className="py-3.5 text-center text-slate-500">3,140</td>
                    <td className="py-3.5 text-center text-slate-500">24.5%</td>
                    <td className="py-3.5 text-right pr-2 font-bold text-slate-900">$8,920</td>
                  </tr>
                  {/* Row 3 */}
                  <tr>
                    <td className="py-3.5 pl-2 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-[10px]">🌐</span>
                      <span className="font-bold text-slate-800">Partner Portal</span>
                    </td>
                    <td className="py-3.5 text-center text-slate-500">2,845</td>
                    <td className="py-3.5 text-center text-slate-500">41.8%</td>
                    <td className="py-3.5 text-right pr-2 font-bold text-slate-900">$15,280</td>
                  </tr>
                  {/* Row 4 */}
                  <tr>
                    <td className="py-3.5 pl-2 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-[10px]">🔳</span>
                      <span className="font-bold text-slate-800">Offline QR</span>
                    </td>
                    <td className="py-3.5 text-center text-slate-500">1,676</td>
                    <td className="py-3.5 text-center text-slate-500">18.2%</td>
                    <td className="py-3.5 text-right pr-2 font-bold text-slate-900">$4,120</td>
                  </tr>
                </tbody>
              </table></div>
            </div>
          </div>

          {/* Anomalies Detected Column Panel */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-rose-600">Anomalies Detected</h3>
              <span className="text-[10px] font-bold bg-rose-600 text-white px-2 py-0.5 rounded uppercase">Critical</span>
            </div>

            <div className="space-y-3.5">
              {/* Alert Card 1 */}
              <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-3 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1">⚠️ IP Cluster Attack</span>
                  <button className="text-[10px] font-semibold text-slate-400 hover:text-slate-600">Review</button>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal">
                  42 signups from 185.x.x.x in 3 minutes. Accounts blocked for review.
                </p>
              </div>

              {/* Alert Card 2 */}
              <div className="border border-gray-100 bg-slate-50/50 rounded-xl p-3 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1">ℹ️ Cyclic Referral Chain</span>
                  <button className="text-[10px] font-semibold text-slate-400 hover:text-slate-600">Dismiss</button>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Circular referral pattern detected between user_891 and user_442.
                </p>
              </div>

              {/* Alert Card 3 */}
              <div className="border border-gray-100 bg-slate-50/50 rounded-xl p-3 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1">ℹ️ High Reward Velocity</span>
                  <button className="text-[10px] font-semibold text-slate-400 hover:text-slate-600">Investigate</button>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal">
                  User "j_smith_92" exceeded $500 monthly reward cap.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}