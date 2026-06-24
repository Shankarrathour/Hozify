import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function CampaignReportPage() {
  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-6 text-slate-800 antialiased font-sans">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#111827]">Campaign Performance</h1>
            <p className="text-xs text-gray-400 mt-0.5">Real-time analysis of banner and referral network ROI.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm">
              <span className="text-gray-400">📅</span> Last 30 Days
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* TOP REGION: REVENUE TREND & SIDE METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          
          {/* Main Chart Box: Aggregate Revenue Trend */}
          <div className="lg:col-span-2 bg-white border border-gray-400 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">AGGREGREGATE REVENUE TREND</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">$412,890.44</h2>
              </div>
              <span className="text-[11px] font-bold text-emerald-500 bg-emerald-50/60 px-2 py-0.5 rounded flex items-center gap-0.5">
                📈 +14.2%
              </span>
            </div>

            {/* Custom Bar Graph Layout to match the mockup style */}
            <div className="h-36 flex items-end justify-between gap-1.5 pt-8">
              <div className="w-full bg-gray-200 h-14 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-20 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-16 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-24 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-12 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-22 rounded-sm"></div>
              <div className="w-full bg-[#1d0094] h-28 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-24 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-18 rounded-sm"></div>
              <div className="w-full bg-gray-200 h-14 rounded-sm"></div>
            </div>
          </div>

          {/* Right Stack: Total Impressions & Average CTR */}
          <div className="flex flex-col gap-4">
            {/* Card A: Total Impressions */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">TOTAL IMPRESSIONS</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">4.2M</h2>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-900 rounded-full" style={{ width: "68%" }}></div>
                </div>
                <span className="text-[10px] font-medium text-gray-400 block mt-1.5">68% of quarterly target</span>
              </div>
            </div>

            {/* Card B: Average CTR */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">AVERAGE CTR</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">3.82%</h2>
              </div>
              <p className="text-[11px] font-bold text-emerald-500 mt-4 flex items-center gap-0.5">
                ↑ 0.4% improvement
              </p>
            </div>
          </div>

        </div>

        {/* MIDDLE REGION: ACTIVE CAMPAIGNS & TRAFFIC SOURCE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          
          {/* Active Campaigns Table Panel */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-sm font-bold text-slate-900">Active Campaigns</h3>
              <button className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-0.5">
                View All ➔
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100 uppercase text-[10px] font-bold tracking-wider">
                    <th className="pb-3 pl-2">Campaign Name</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Impressions</th>
                    <th className="pb-3 text-right">CTR</th>
                    <th className="pb-3 text-right pr-2">ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 font-semibold text-slate-700">
                  {/* Row 1 */}
                  <tr>
                    <td className="py-4 pl-2 flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-gray-50 flex items-center justify-center border border-gray-100">📢</span>
                      <span className="font-bold text-slate-900">Summer Banner Blast</span>
                    </td>
                    <td className="py-4 text-gray-400 font-medium">Display</td>
                    <td className="py-4">
                      <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded uppercase">Active</span>
                    </td>
                    <td className="py-4 text-right text-slate-600">1,240,500</td>
                    <td className="py-4 text-right text-slate-600">4.2%</td>
                    <td className="py-4 text-right pr-2 font-bold text-slate-900">3.2x</td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td className="py-4 pl-2 flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-gray-50 flex items-center justify-center border border-gray-100">👥</span>
                      <span className="font-bold text-slate-900">Q3 Referral Program</span>
                    </td>
                    <td className="py-4 text-gray-400 font-medium">Referral</td>
                    <td className="py-4">
                      <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded uppercase">Active</span>
                    </td>
                    <td className="py-4 text-right text-slate-600">450,200</td>
                    <td className="py-4 text-right text-slate-600">8.5%</td>
                    <td className="py-4 text-right pr-2 font-bold text-slate-900">5.1x</td>
                  </tr>
                  {/* Row 3 */}
                  <tr>
                    <td className="py-4 pl-2 flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-gray-50 flex items-center justify-center border border-gray-100">🔍</span>
                      <span className="font-bold text-slate-900">Flash Sale Retargeting</span>
                    </td>
                    <td className="py-4 text-gray-400 font-medium">Banner</td>
                    <td className="py-4">
                      <span className="text-[9px] font-bold bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded uppercase">Paused</span>
                    </td>
                    <td className="py-4 text-right text-slate-600">890,000</td>
                    <td className="py-4 text-right text-slate-600">2.1%</td>
                    <td className="py-4 text-right pr-2 font-bold text-slate-900">1.8x</td>
                  </tr>
                  {/* Row 4 */}
                  <tr>
                    <td className="py-4 pl-2 flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-gray-50 flex items-center justify-center border border-gray-100">📣</span>
                      <span className="font-bold text-slate-900">Influencer Launch</span>
                    </td>
                    <td className="py-4 text-gray-400 font-medium">Referral</td>
                    <td className="py-4">
                      <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded uppercase">Active</span>
                    </td>
                    <td className="py-4 text-right text-slate-600">312,900</td>
                    <td className="py-4 text-right text-slate-600">12.2%</td>
                    <td className="py-4 text-right pr-2 font-bold text-slate-900">7.4x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Traffic Source Side Panel */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-4">Traffic Source</h3>
              
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                    <span>Banner Ads</span> <span className="text-slate-900 font-extrabold">62%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-900 rounded-full" style={{ width: "62%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                    <span>Referrals</span> <span className="text-slate-900 font-extrabold">28%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                    <span>Direct</span> <span className="text-slate-900 font-extrabold">10%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-300 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Blue Purple Info Banner */}
            <div className="bg-[#1d0094] rounded-xl p-3.5 mt-5 text-white flex flex-col gap-0.5 relative overflow-hidden">
              <span className="text-xs font-bold">Referral efficiency is up</span>
              <p className="text-[10px] text-indigo-200 font-medium">+22% this week.</p>
              <span className="absolute right-3 bottom-2 text-indigo-400/30 text-2xl font-bold">✦</span>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS STAT ROW (4 Grid items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Block 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-indigo-50 text-[#1d0094] flex items-center justify-center font-bold text-sm">
              $
            </span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Cost Per Lead</span>
              <h4 className="text-sm font-bold text-slate-900">$12.40</h4>
            </div>
          </div>

          {/* Block 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-gray-50 text-slate-600 flex items-center justify-center font-bold text-sm">
              🎯
            </span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Avg. CPC</span>
              <h4 className="text-sm font-bold text-slate-900">$0.85</h4>
            </div>
          </div>

          {/* Block 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-gray-50 text-slate-600 flex items-center justify-center font-bold text-sm">
              🛒
            </span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Conversion Rate</span>
              <h4 className="text-sm font-bold text-slate-900">2.14%</h4>
            </div>
          </div>

          {/* Block 4 */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-gray-50 text-slate-600 flex items-center justify-center font-bold text-sm">
              ⏱️
            </span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Avg. Time to Conv.</span>
              <h4 className="text-sm font-bold text-slate-900">4.2 days</h4>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}