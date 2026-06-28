import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  SlidersHorizontal, Download, Eye, Edit3, Trash2, 
  Calendar, Globe, ArrowUpRight, ArrowDownRight, TrendingUp, CheckCircle 
} from "lucide-react";

export default function BranchRevenue() {
  // --- States ---
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 30 Days");
  const [activeRegionFilter, setActiveRegionFilter] = useState("All");
  const [selectedMapBranch, setSelectedMapBranch] = useState("Global System");

  // --- Static Stats ---
  const stats = [
    { title: "TOTAL BRANCH REVENUE", value: "$12.4M", badge: "+8.2%", isPositive: true },
    { title: "TOP PERFORMING BRANCH", value: "London, UK", subtext: "Highest MoM growth", isTextValue: true },
    { title: "AVG. BRANCH MARGIN", value: "24.1%", badge: "-1.4%", isPositive: false },
    { title: "ACTIVE FORECASTS", value: "18 / 24", subtext: "Branches on track", isTextValue: true },
  ];

  const regionalGrowth = [
    { region: "North America", value: "+12.4%", width: "75%", key: "NA" },
    { region: "Europe / EMEA", value: "+9.1%", width: "55%", key: "EU" },
    { region: "Asia Pacific", value: "+15.8%", width: "90%", key: "APAC" },
  ];

  // --- Core Branch Data ---
  const branchData = [
    { id: "BR-01", location: "London, UK", region: "EU", manager: "Sarah Jenkins", revenue: 3450000, growth: "+14.2%", isPositive: true, status: "Optimal" },
    { id: "BR-02", location: "Singapore", region: "APAC", manager: "David Cho", revenue: 2900000, growth: "+11.5%", isPositive: true, status: "Optimal" },
    { id: "BR-03", location: "New York, US", region: "NA", manager: "Michael Scott", revenue: 2100000, growth: "-2.4%", isPositive: false, status: "Warning" },
  ];

  // --- Handlers ---
  const filteredBranchRows = branchData.filter(row => {
    if (activeRegionFilter === "All") return true;
    return row.region === activeRegionFilter;
  });

  const handleDownloadSheet = () => {
    const headers = "Branch ID,Location,Manager,Revenue,Growth,Status\n";
    const content = filteredBranchRows.map(b => 
      `${b.id},${b.location},${b.manager},$${b.revenue},${b.growth},${b.status}`
    ).join("\n");

    const blob = new Blob([headers + content], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Branch_Report_${selectedTimeframe.replace(" ", "_")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const triggerForecastModal = (e) => {
    e.preventDefault();
    alert(
      `--- LIVE QUARTERLY PROJECTION ---\n\n` +
      `• Singapore Operations: Exceeding baseline targets by +22%.\n` +
      `• EMEA Region Log: London pipeline holding stable.`
    );
  };

  const handleRowAction = (actionType, branchName) => {
    alert(`${actionType} action triggered for: ${branchName}`);
  };

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

          {/* Action Filters using Native HTML Select (Zero Failure Rate) */}
          <div className="flex gap-3">
            
            {/* Native Calendar Dropdown */}
            <div className="relative flex items-center bg-white border border-slate-200 rounded-lg px-2.5 hover:border-slate-300 shadow-sm transition">
              <Calendar className="h-3.5 w-3.5 text-slate-400 mr-1.5 pointer-events-none" />
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-700 py-2 pr-6 focus:outline-none cursor-pointer appearance-none"
              >
                <option value="Today">Today</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="This Quarter">This Quarter</option>
              </select>
              <div className="absolute right-2.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 w-0 h-0" />
            </div>

            {/* Native Region Filter Dropdown */}
            <div className="relative flex items-center bg-white border border-slate-200 rounded-lg px-2.5 hover:border-slate-300 shadow-sm transition">
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400 mr-1.5 pointer-events-none" />
              <select
                value={activeRegionFilter}
                onChange={(e) => {
                  console.log("Region Changed To:", e.target.value); // Debugging line
                  setActiveRegionFilter(e.target.value);
                }}
                className="bg-transparent text-xs font-semibold text-slate-700 py-2 pr-6 focus:outline-none cursor-pointer appearance-none"
              >
                <option value="All">All Regions</option>
                <option value="NA">North America (NA)</option>
                <option value="EU">Europe (EMEA)</option>
                <option value="APAC">Asia Pacific (APAC)</option>
              </select>
              <div className="absolute right-2.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 w-0 h-0" />
            </div>

          </div>
        </div>

        {/* 2. STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-between shadow-sm min-h-[100px]">
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.title}</p>
                <h3 className={`font-black mt-1 text-slate-900 ${stat.isTextValue ? "text-base leading-tight" : "text-xl"}`}>
                  {stat.value}
                </h3>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                {stat.badge ? (
                  <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    stat.isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                  }`}>
                    {stat.isPositive ? <ArrowUpRight className="h-2.5 w-2.5" /> : <ArrowDownRight className="h-2.5 w-2.5" />}
                    {stat.badge}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400 font-medium">{stat.subtext}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. MIDDLE ROW: Map Nodes & Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Interactive Map */}
          <div className="bg-white border border-slate-100 rounded-xl p-5 lg:col-span-2 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Global Revenue Nodes</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Click active pins to change active focus area</p>
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  Active: {selectedMapBranch}
                </span>
              </div>

              {/* Map Framework Canvas */}
              <div className="h-56 bg-slate-50 border border-dashed border-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center">
                <Globe className="absolute h-36 w-36 text-slate-200/60" />
                
                {/* New York Pin */}
                <button 
                  type="button"
                  onClick={() => setSelectedMapBranch("New York Node")}
                  className="absolute top-1/3 left-1/4 p-2 focus:outline-none z-10 cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping" />
                  <div className="w-3 h-3 rounded-full bg-indigo-600 border-2 border-white relative shadow-md" />
                </button>

                {/* London Pin */}
                <button 
                  type="button"
                  onClick={() => setSelectedMapBranch("London Node")}
                  className="absolute top-1/4 left-1/2 p-2 focus:outline-none z-10 cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
                  <div className="w-3 h-3 rounded-full bg-emerald-600 border-2 border-white relative shadow-md" />
                </button>

                {/* Singapore Pin */}
                <button 
                  type="button"
                  onClick={() => setSelectedMapBranch("Singapore Node")}
                  className="absolute bottom-1/3 right-1/3 p-2 focus:outline-none z-10 cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping" />
                  <div className="w-3 h-3 rounded-full bg-indigo-600 border-2 border-white relative shadow-md" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Side Panels */}
          <div className="flex flex-col gap-4">
            
            {/* Regional Progress */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex-1">
              <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-4">Regional Growth Lead</h4>
              <div className="space-y-3.5">
                {regionalGrowth.map((region, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>{region.region}</span>
                      <span className="text-indigo-600 font-bold">{region.value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full w-full">
                      <div className="h-1.5 bg-indigo-950 rounded-full" style={{ width: region.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Insight Card */}
            <div className="bg-slate-900 text-white rounded-xl p-4 shadow-sm flex flex-col justify-between min-h-[125px]">
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-400 tracking-wider uppercase">
                  <TrendingUp className="h-3 w-3 text-emerald-400" />
                  <span>Performance Insight</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  The Singapore branch is projected to exceed quarterly targets by 22% based on current velocities.
                </p>
              </div>
              <button 
                type="button"
                onClick={triggerForecastModal}
                className="text-left text-[11px] font-bold text-emerald-400 hover:text-emerald-300 underline mt-2 block transition-colors w-max cursor-pointer"
              >
                View detailed forecast
              </button>
            </div>

          </div>
        </div>

        {/* 4. PERFORMANCE TABLE SECTION */}
        <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Branch Performance</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Live records synchronized with regional filters</p>
            </div>
            
            {/* Export CSV Button */}
            <button 
              type="button"
              onClick={handleDownloadSheet}
              className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 flex items-center gap-1.5 text-xs font-bold px-3 transition shadow-sm cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-indigo-600" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-5 py-3">Branch ID</th>
                  <th className="px-5 py-3">Location</th>
                  <th className="px-5 py-3">Regional Manager</th>
                  <th className="px-5 py-3">Monthly Revenue</th>
                  <th className="px-5 py-3">Growth (MoM)</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3 text-right">Row Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                {filteredBranchRows.length > 0 ? (
                  filteredBranchRows.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-5 py-3.5 text-slate-400 text-[11px] font-mono font-bold">{row.id}</td>
                      <td className="px-5 py-3.5 font-bold text-slate-900">{row.location}</td>
                      <td className="px-5 py-3.5 text-slate-500 font-medium">{row.manager}</td>
                      <td className="px-5 py-3.5 text-slate-900 font-bold">${row.revenue.toLocaleString()}</td>
                      <td className={`px-5 py-3.5 font-bold ${row.isPositive ? "text-emerald-600" : "text-rose-600"}`}>
                        {row.growth}
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          row.status === "Optimal" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                        }`}>
                          <span className={`w-1 h-1 rounded-full ${row.status === "Optimal" ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {row.status}
                        </span>
                      </td>

                      {/* Colorful Actions Row (Zero Layer Nesting) */}
                      <td className="px-5 py-3.5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          
                          {/* Colorful Blue View Icon */}
                          <button 
                            type="button"
                            onClick={() => handleRowAction("View Logs", row.location)}
                            className="p-1 hover:bg-slate-100 rounded transition text-blue-600 cursor-pointer"
                            title="Quick View"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          
                          {/* Colorful Amber Edit Icon */}
                          <button 
                            type="button"
                            onClick={() => handleRowAction("Edit Parameters", row.location)}
                            className="p-1 hover:bg-slate-100 rounded transition text-amber-500 cursor-pointer"
                            title="Edit Node"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>

                          {/* Red Action Icon directly available */}
                          <button 
                            type="button"
                            onClick={() => handleRowAction("Archive Node", row.location)}
                            className="p-1 hover:bg-slate-100 rounded transition text-rose-500 cursor-pointer"
                            title="Archive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-slate-400 font-semibold">
                      No matching branch data found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}