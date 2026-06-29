import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function CampaignReportPage() {
  // Calendar and Filter States
  const [isDateMenuOpen, setIsDateMenuOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");
  const [statusFilter, setStatusFilter] = useState("ALL"); // ALL, ACTIVE, PAUSED

  // Suggestions Overlay State
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);

  // Mock Data matrix governed by selected range filter
  const dynamicMetrics = {
    "Today": { revenue: "$14,210.00", trend: "+3.1%", impressions: "140K", barHeights: ["h-6", "h-10", "h-8", "h-14", "h-12", "h-20", "h-28", "h-24", "h-16", "h-10"], bannerPct: "50%", refPct: "40%", dirPct: "10%" },
    "Last 7 Days": { revenue: "$98,450.22", trend: "+8.4%", impressions: "1.1M", barHeights: ["h-12", "h-16", "h-10", "h-24", "h-20", "h-14", "h-28", "h-18", "h-22", "h-14"], bannerPct: "58%", refPct: "32%", dirPct: "10%" },
    "Last 30 Days": { revenue: "$412,890.44", trend: "+14.2%", impressions: "4.2M", barHeights: ["h-14", "h-20", "h-16", "h-24", "h-12", "h-22", "h-28", "h-24", "h-18", "h-14"], bannerPct: "62%", refPct: "28%", dirPct: "10%" },
    "Q3 Range": { revenue: "$1,245,110.00", trend: "+19.7%", impressions: "12.8M", barHeights: ["h-20", "h-24", "h-14", "h-28", "h-18", "h-26", "h-28", "h-22", "h-16", "h-24"], bannerPct: "65%", refPct: "25%", dirPct: "10%" }
  };

  const currentData = dynamicMetrics[selectedRange] || dynamicMetrics["Last 30 Days"];

  // Campaign Array
  const rawCampaigns = [
    { name: "Summer Banner Blast", type: "Display", status: "Active", icon: "📢", imp: "1,240,500", ctr: "4.2%", roi: "3.2x" },
    { name: "Q3 Referral Program", type: "Referral", status: "Active", icon: "👥", imp: "450,200", ctr: "8.5%", roi: "5.1x" },
    { name: "Flash Sale Retargeting", type: "Banner", status: "Paused", icon: "🔍", imp: "890,000", ctr: "2.1%", roi: "1.8x" },
    { name: "Influencer Launch", type: "Referral", status: "Active", icon: "📣", imp: "312,900", ctr: "12.2%", roi: "7.4x" }
  ];

  // Filter computation logic
  const filteredCampaigns = rawCampaigns.filter(c => {
    if (statusFilter === "ACTIVE") return c.status === "Active";
    if (statusFilter === "PAUSED") return c.status === "Paused";
    return true;
  });

  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-6 text-slate-800 antialiased font-sans relative">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative">
          <div>
            <h1 className="text-2xl font-bold text-[#111827]">Campaign Performance</h1>
            <p className="text-xs text-gray-400 mt-0.5">Real-time analysis of banner and referral network ROI.</p>
          </div>
          
          <div className="flex items-center gap-2 self-end sm:self-auto relative">
            {/* Interactive Calendar Dropdown Button */}
            <div className="relative">
              <button 
                onClick={() => setIsDateMenuOpen(!isDateMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm transition-all"
              >
                <span className="text-gray-400">📅</span> {selectedRange} <span className="text-[10px]">▼</span>
              </button>

              {isDateMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-44 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 text-xs font-medium">
                  {["Today", "Last 7 Days", "Last 30 Days", "Q3 Range"].map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setSelectedRange(range);
                        setIsDateMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                        selectedRange === range ? "text-[#1d0094] bg-indigo-50/40 font-bold" : "text-slate-600"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Interactive Status Cycle Filter */}
            <button 
              onClick={() => {
                const nextStatus = statusFilter === "ALL" ? "ACTIVE" : statusFilter === "ACTIVE" ? "PAUSED" : "ALL";
                setStatusFilter(nextStatus);
              }}
              title="Click to cycle filter status"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded shadow-sm transition-all text-xs font-bold ${
                statusFilter !== "ALL" ? "bg-indigo-50 border-indigo-200 text-[#1d0094]" : "bg-white border-gray-200 text-slate-600 hover:bg-gray-50"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>{statusFilter}</span>
            </button>
          </div>
        </div>

        {/* TOP REGION: REVENUE TREND & SIDE METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          
          {/* Main Chart Box */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">AGGREGATE REVENUE TREND ({selectedRange})</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1 transition-all">{currentData.revenue}</h2>
              </div>
              <span className="text-[11px] font-bold text-emerald-500 bg-emerald-50/60 px-2 py-0.5 rounded flex items-center gap-0.5">
                {currentData.trend}
              </span>
            </div>

            {/* Graph Bars matching dynamically generated heights based on range state */}
            <div className="h-36 flex items-end justify-between gap-1.5 pt-8">
              {currentData.barHeights.map((ht, idx) => (
                <div 
                  key={idx} 
                  className={`w-full rounded-sm transition-all duration-300 ${idx === 6 ? "bg-[#1d0094]" : "bg-gray-200"} ${ht}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Stack */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">TOTAL IMPRESSIONS</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">{currentData.impressions}</h2>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-900 rounded-full transition-all duration-500" style={{ width: selectedRange === "Today" ? "15%" : selectedRange === "Last 7 Days" ? "42%" : "68%" }}></div>
                </div>
                <span className="text-[10px] font-medium text-gray-400 block mt-1.5">Target dynamic projection</span>
              </div>
            </div>

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
              <h3 className="text-sm font-bold text-slate-900">Active Campaigns ({filteredCampaigns.length})</h3>
              <button 
                onClick={() => setShowAllCampaigns(true)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-0.5"
              >
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
                  {filteredCampaigns.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-8 text-center text-gray-400 font-medium">No campaigns match this status filter view.</td>
                    </tr>
                  ) : (
                    filteredCampaigns.map((camp, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                        <td className="py-4 pl-2 flex items-center gap-3">
                          <span className="w-7 h-7 rounded bg-gray-50 flex items-center justify-center border border-gray-100">{camp.icon}</span>
                          <span className="font-bold text-slate-900">{camp.name}</span>
                        </td>
                        <td className="py-4 text-gray-400 font-medium">{camp.type}</td>
                        <td className="py-4">
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                            camp.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                          }`}>{camp.status}</span>
                        </td>
                        <td className="py-4 text-right text-slate-600">{camp.imp}</td>
                        <td className="py-4 text-right text-slate-600">{camp.ctr}</td>
                        <td className="py-4 text-right pr-2 font-bold text-slate-900">{camp.roi}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Traffic Source Side Panel */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-4">Traffic Source Allocation</h3>
              
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                    <span>Banner Ads</span> <span className="text-slate-900 font-extrabold">{currentData.bannerPct}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-900 rounded-full transition-all duration-300" style={{ width: currentData.bannerPct }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                    <span>Referrals</span> <span className="text-slate-900 font-extrabold">{currentData.refPct}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full transition-all duration-300" style={{ width: currentData.refPct }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                    <span>Direct</span> <span className="text-slate-900 font-extrabold">{currentData.dirPct}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-300 rounded-full transition-all duration-300" style={{ width: currentData.dirPct }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clickable Info Suggestions Strip */}
            <div 
              onClick={() => setShowSuggestions(true)}
              className="bg-[#1d0094] hover:bg-[#2805be] cursor-pointer rounded-xl p-3.5 mt-5 text-white flex flex-col gap-0.5 relative overflow-hidden active:scale-[0.99] transition-all shadow-md group"
            >
              <span className="text-xs font-bold flex items-center gap-1">Referral suggestion alert <span className="group-hover:translate-x-1 transition-transform">➔</span></span>
              <p className="text-[10px] text-indigo-200 font-medium">+22% traction. Click to view suggestion.</p>
              <span className="absolute right-3 bottom-2 text-indigo-400/30 text-2xl font-bold">✦</span>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS STAT ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-indigo-50 text-[#1d0094] flex items-center justify-center font-bold text-sm">$</span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Cost Per Lead</span>
              <h4 className="text-sm font-bold text-slate-900">$12.40</h4>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-gray-50 text-slate-600 flex items-center justify-center font-bold text-sm">🎯</span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Avg. CPC</span>
              <h4 className="text-sm font-bold text-slate-900">$0.85</h4>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-gray-50 text-slate-600 flex items-center justify-center font-bold text-sm">🛒</span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Conversion Rate</span>
              <h4 className="text-sm font-bold text-slate-900">2.14%</h4>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <span className="w-9 h-9 rounded bg-gray-50 text-slate-600 flex items-center justify-center font-bold text-sm">⏱️</span>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Avg. Time to Conv.</span>
              <h4 className="text-sm font-bold text-slate-900">4.2 days</h4>
            </div>
          </div>
        </div>

        {/* INTERACTIVE OVERLAY MODAL FOR VIEW SUGGESTION */}
        {showSuggestions && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
              <div className="p-4 bg-[#1d0094] text-white flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider">✦ Optimization Insights</span>
                <button onClick={() => setShowSuggestions(false)} className="text-white/80 hover:text-white font-bold text-sm">✕</button>
              </div>
              <div className="p-5 text-xs space-y-3">
                <p className="font-semibold text-slate-700 leading-relaxed">
                  Referral efficiency tracking status indicates an exponential growth spike. We recommend relocating 10% of display banner spend directly into the <span className="text-[#1d0094] font-bold">Q3 Referral Network</span> matrix immediately to scale higher margin sales.
                </p>
                <div className="bg-slate-50 border border-gray-100 p-2.5 rounded font-medium text-gray-500">
                  Estimated efficiency impact projection: <span className="text-emerald-600 font-bold">+4.5% Overall ROI</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button onClick={() => setShowSuggestions(false)} className="px-3 py-1.5 bg-slate-900 text-white rounded text-xs font-bold hover:bg-slate-800 transition-colors">Acknowledge</button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW ALL CAMPAIGNS MODAL */}
        {showAllCampaigns && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Full Campaign Inventory</h3>
                <button onClick={() => setShowAllCampaigns(false)} className="text-gray-400 hover:text-slate-600 font-bold text-sm">✕</button>
              </div>
              <div className="p-4 max-h-64 overflow-y-auto space-y-2 text-xs">
                {rawCampaigns.map((c, i) => (
                  <div key={i} className="flex justify-between items-center p-2 hover:bg-slate-50 rounded border border-gray-50">
                    <div className="flex items-center gap-2">
                      <span>{c.icon}</span>
                      <span className="font-bold text-slate-800">{c.name}</span>
                    </div>
                    <span className="text-gray-400 font-semibold">{c.imp} Imp</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}