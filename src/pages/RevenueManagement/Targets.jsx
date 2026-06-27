import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Trophy, 
  Layers, 
  Cpu, 
  Megaphone, 
  Headphones, 
  Globe, 
  Zap, 
  TrendingUp, 
  SlidersHorizontal, 
  Plus, 
  Download,
  MoreVertical
} from "lucide-react";

export default function Targets() {
  // Leaderboard lists metrics data
  const leaderboard = [
    { rank: 1, name: "Northwest Branch", progress: 104 },
    { rank: 2, name: "Enterprise Sales", progress: 92 },
    { rank: 3, name: "Global Services", progress: 85 },
    { rank: 4, name: "Direct Retail", progress: 76 }
  ];

  // Department Row Metric Grid array
  const departments = [
    {
      title: "Tech & Software",
      revenue: "$12,400,000",
      percent: 65,
      color: "bg-indigo-950",
      icon: <Cpu className="h-4 w-4 text-indigo-950" />
    },
    {
      title: "Operations",
      revenue: "$8,900,000",
      percent: 88,
      color: "bg-indigo-950",
      icon: <Layers className="h-4 w-4 text-indigo-950" />
    },
    {
      title: "Marketing",
      revenue: "$6,250,000",
      percent: 42,
      color: "bg-rose-600",
      icon: <Megaphone className="h-4 w-4 text-indigo-950" />
    },
    {
      title: "Support",
      revenue: "$4,100,000",
      percent: 95,
      color: "bg-indigo-950",
      icon: <Headphones className="h-4 w-4 text-indigo-950" />
    }
  ];

  // Detailed Grid Rows Dataset
  const managementRows = [
    {
      region: "EMEA Central",
      metric: "SaaS Subscriptions",
      goal: "$1,200,000",
      actual: "$1,050,000",
      status: "Near Target",
      statusStyle: "bg-blue-50 text-blue-600 border border-blue-100",
      icon: <Globe className="h-3.5 w-3.5 text-white" />
    },
    {
      region: "APAC South",
      metric: "Hardware Sales",
      goal: "$2,500,000",
      actual: "$2,750,000",
      status: "Exceeded",
      statusStyle: "bg-indigo-950 text-white",
      icon: <Zap className="h-3.5 w-3.5 text-white" />
    },
    {
      region: "LATAM East",
      metric: "Consulting Rev",
      goal: "$800,000",
      actual: "$320,000",
      status: "At Risk",
      statusStyle: "bg-rose-50 text-rose-600 border border-rose-100",
      icon: <TrendingUp className="h-3.5 w-3.5 text-white" />
    }
  ];

  return (
    <AdminShell activeTab="Targets" searchPlaceholder="Search target benchmarks...">
      <div className="space-y-6">
        
        {/* ==========================================
            1. ACTIONS HEADER CONTROLS BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Targets & Goals</h1>
            <p className="text-xs text-slate-400 mt-0.5">Strategic revenue management and KPI tracking for Q4 2024.</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filter View</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm">
              <Plus className="h-3.5 w-3.5" />
              <span>New Target</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. UPPER DASHBOARD GRID ROW
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Main Total Revenue Target Box */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">TOTAL REVENUE GOAL</p>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">$42,500,000</h2>
                </div>
                <span className="inline-flex items-center text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  ↗ +12.4% vs last Q
                </span>
              </div>

              {/* Progress Line Bar Wrapper */}
              <div className="mt-5 space-y-1.5">
                <div className="flex justify-between items-center text-[11px] font-bold">
                  <span className="text-slate-400">Overall Achievement: <span className="text-slate-700">78%</span></span>
                  <span className="text-indigo-950">$33,150,000 to date</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-sm overflow-hidden">
                  <div className="h-full bg-indigo-950 rounded-sm w-[78%] transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Sub-KPI Quad Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 border-t border-slate-50 pt-4">
              {[
                { label: "Remaining", value: "$9.35M" },
                { label: "Avg Daily", value: "$215K" },
                { label: "Days Left", value: "24" },
                { label: "Forecast", value: "On Track" }
              ].map((sub, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide">{sub.label}</span>
                  <span className={`block text-sm font-extrabold mt-1 ${sub.value === "On Track" ? "text-slate-800" : "text-slate-800"}`}>
                    {sub.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-900 tracking-tight">Leaderboard</h3>
              <Trophy className="h-4 w-4 text-amber-500" />
            </div>

            <div className="space-y-3.5 my-auto">
              {leaderboard.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-slate-100 rounded-full text-[10px] font-extrabold text-slate-600 shrink-0">
                    {item.rank}
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-700">{item.name}</span>
                      <span className="text-indigo-950">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-950 rounded-full" style={{ width: `${Math.min(item.progress, 100)}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors shadow-sm">
              View All Rankings
            </button>
          </div>

        </div>

        {/* ==========================================
            3. MIDDLE PANEL: DEPARTMENT REVENUE CARDS
           ========================================== */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-slate-900 tracking-tight">Department Revenue Targets</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">{dept.title}</span>
                    <span className="block text-[10px] text-slate-400 font-medium mt-1">Q4 Revenue</span>
                    <h4 className="text-lg font-extrabold text-slate-900 tracking-tight mt-0.5">{dept.revenue}</h4>
                  </div>
                  <span className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg">
                    {dept.icon}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-slate-400">Achieved</span>
                    <span className="text-slate-800">{dept.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-sm overflow-hidden">
                    <div className={`h-full ${dept.color} rounded-sm`} style={{ width: `${dept.percent}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM PANEL: DETAILED TARGET TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-sm text-slate-900">Detailed Target Management</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                <Download className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                <MoreVertical className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">Region / Department</th>
                  <th className="px-6 py-3">Target Metric</th>
                  <th className="px-6 py-3">Goal Value</th>
                  <th className="px-6 py-3">Actual</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {managementRows.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-indigo-950 text-white rounded-md shrink-0">
                          {row.icon}
                        </div>
                        <span className="font-bold text-slate-800">{row.region}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{row.metric}</td>
                    <td className="px-6 py-4 font-medium text-slate-600">{row.goal}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">{row.actual}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${row.statusStyle}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-bold text-slate-600 hover:text-indigo-950 transition-colors">
                        Edit KPI
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