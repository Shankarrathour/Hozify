import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { SlidersHorizontal, Download, MoreVertical, Calendar, Globe, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";


export default function BranchRevenue() {
  // Stat Cards Data
  const stats = [
    { title: "TOTAL BRANCH REVENUE", value: "$12.4M", badge: "+8.2%", isPositive: true },
    { title: "TOP PERFORMING BRANCH", value: "London, UK", subtext: "Highest MoM growth", isTextValue: true },
    { title: "AVG. BRANCH MARGIN", value: "24.1%", badge: "-1.4%", isPositive: false },
    { title: "ACTIVE FORECASTS", value: "18 / 24", subtext: "Branches on track", isTextValue: true },
  ];

  // Regional Growth Lead Data
  const regionalGrowth = [
    { region: "North America", value: "+12.4%", width: "75%" },
    { region: "Europe / EMEA", value: "+9.1%", width: "55%" },
    { region: "Asia Pacific", value: "+15.8%", width: "90%" },
  ];

  // Branch Performance Table Data
  const branchData = [
    { id: "BR-01", location: "London, UK", manager: "Sarah Jenkins", revenue: "$3.45M", growth: "+14.2%", isPositive: true, status: "Optimal" },
    { id: "BR-02", location: "Singapore", manager: "David Cho", revenue: "$2.90M", growth: "+11.5%", isPositive: true, status: "Optimal" },
    { id: "BR-03", location: "New York, US", manager: "Michael Scott", revenue: "$2.10M", growth: "-2.4%", isPositive: false, status: "Warning" },
  ];

  return (
    <AdminShell activeTab="Branches" searchPlaceholder="Search branch metrics...">
      <div className="space-y-6">
        
        {/* 1. HEADER SECTION */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Branch Revenue Analysis</h1>
            <p className="text-sm text-slate-500 mt-1">
              Real-time performance distribution across 24 global offices.
            </p>
          </div>

          {/* Action Filters */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>Last 30 Days</span>
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <SlidersHorizontal className="h-4 w-4 text-slate-400" />
              <span>Filter Region</span>
            </button>
          </div>
        </div>

        {/* 2. STATS GRID (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.title}</p>
                <h3 className={`font-bold mt-2 text-slate-900 ${stat.isTextValue ? "text-xl leading-tight" : "text-2xl"}`}>
                  {stat.value}
                </h3>
              </div>
              
              <div className="mt-3 flex items-center gap-1.5">
                {stat.badge ? (
                  <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-semibold ${
                    stat.isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                  }`}>
                    {stat.isPositive ? "↗" : "↘"} {stat.badge}
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 font-normal">{stat.subtext}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. MIDDLE ROW: Global Distribution & Side Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bubble Intensity Chart Area */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-2 flex flex-col justify-between shadow-sm">
            <div>
              <div className="border border-slate-100 rounded-lg p-3 inline-block bg-slate-50/50 mb-4">
                <h4 className="text-sm font-bold text-slate-800">Global Distribution</h4>
                <p className="text-xs text-slate-400 mt-0.5">Volume scaled by bubble intensity</p>
              </div>

              {/* Map/Bubble Simulation Canvas */}
              <div className="h-60 bg-slate-50 border border-dashed border-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center">
                <Globe className="absolute h-40 w-40 text-slate-100 opacity-60" />
                
                {/* Simulated Figma Map Circles */}
                <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-900" />
                </div>
                <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-900" />
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-600 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-900" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Panels: Growth Lead & Performance Insight */}

          <div className="flex flex-col gap-6">
            
            {/* Regional Growth Progress Bars */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex-1">
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-5">Regional Growth Lead</h4>
              
              <div className="space-y-4">
                {regionalGrowth.map((region, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
                      <span>{region.region}</span>
                      <span className="text-indigo-600">{region.value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full w-full">
                      <div className="h-1.5 bg-indigo-900 rounded-full transition-all" style={{ width: region.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Insight Card */}
            <div className="bg-indigo-950 text-white rounded-xl p-5 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-300 tracking-wider uppercase">
                  <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Performance Insight</span>
                </div>
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed mt-3 font-medium">
                The Singapore branch is projected to exceed quarterly targets by 22% based on recent booking trends.
              </p>
              <button className="text-[11px] font-semibold text-indigo-300 hover:text-white underline mt-4 block transition-colors">
                View detailed forecast
              </button>
            </div>

          </div>
        </div>

        {/* 4. BRANCH PERFORMANCE TABLE SECTION */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-base text-slate-900">Branch Performance</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors">
                <Download className="h-4 w-4" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-3.5">Branch ID</th>
                  <th className="px-6 py-3.5">Location</th>
                  <th className="px-6 py-3.5">Regional Manager</th>
                  <th className="px-6 py-3.5">Monthly Revenue</th>
                  <th className="px-6 py-3.5">Growth (MoM)</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {branchData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-slate-500 text-xs font-mono">{row.id}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.location}</td>
                    <td className="px-6 py-4 text-slate-600 font-normal">{row.manager}</td>
                    <td className="px-6 py-4 text-slate-900 font-bold">{row.revenue}</td>
                    <td className={`px-6 py-4 font-semibold ${row.isPositive ? "text-emerald-600" : "text-rose-600"}`}>
                      {row.growth}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${row.status === "Optimal" ? "bg-indigo-600" : "bg-amber-500"}`} />
                        <span className="text-xs font-semibold">{row.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}