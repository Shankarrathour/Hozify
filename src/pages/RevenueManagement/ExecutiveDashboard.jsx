import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Plus, 
  BarChart3, 
  Sparkles, 
  GripVertical, 
  FileText, 
  Layout, 
  Clock, 
  MoreVertical,
  ExternalLink 
} from "lucide-react";

export default function ExecutiveDashboard() {
  // Region filters and template interactive state active links
  const [activeRegion, setActiveRegion] = useState("EMEA");

  // Simulated bar heights array for "Regional Revenue Growth" chart
  const barHeights = ["h-24", "h-36", "h-44", "h-48", "h-40", "h-52", "h-44"];

  // Sidebar drag dimension targets structure datasets
  const dimensions = ["Timeframe", "Region", "Branch ID"];
  const measures = ["Gross Revenue", "Net Margin"];

  // Table items rows configuration
  const sharedReports = [
    {
      name: "Q4 Revenue Audit - APAC",
      createdBy: "Sarah Jenkins",
      avatar: "https://unsplash.com",
      status: "Finalized",
      statusClass: "bg-blue-50 text-blue-600 border border-blue-100",
      time: "2 hours ago"
    },
    {
      name: "Branch Efficiency Forecast",
      createdBy: "Liam Zhao",
      avatar: "https://unsplash.com",
      status: "Drafting",
      statusClass: "bg-slate-50 text-slate-600 border border-slate-200"
    },
    {
      name: "P&L Consolidated Master",
      createdBy: "Marcus Thorne",
      avatar: "https://unsplash.com",
      status: "Private",
      statusClass: "bg-indigo-50 text-indigo-600 border border-indigo-100"
    }
  ];

  return (
    <AdminShell activeTab="Executive Dashboard" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6">
        
        {/* ==========================================
            1. HEADER CONTROLS ACTIONS MODULE
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive BI Center</h1>
            <p className="text-xs text-slate-400 mt-0.5">Advanced cross-regional data exploration and report crafting.</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 hover:text-slate-800 rounded-lg text-xs font-bold transition-all shadow-sm">
              Drafts
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm">
              <Plus className="h-3.5 w-3.5" />
              <span>New Report</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. UPPER LEVEL SECTIONS: GROWTH CHART & LATAM FOCUS
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Revenue Growth Columns Display Container */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Regional Revenue Growth</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5 tracking-wider">Historical Performance Q3-Q4</p>
              </div>
              
              {/* Region Pill Tabs */}
              <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[10px] font-extrabold">
                {["EMEA", "APAC", "AMER"].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`px-3 py-1 rounded ${activeRegion === reg ? "bg-white text-indigo-950 shadow-sm" : "text-slate-400"}`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* Plot Columns Heights Stack Area */}
            <div className="h-56 flex items-end justify-between px-4 pb-2 border-b border-slate-100">
              {barHeights.map((height, idx) => (
                <div key={idx} className="w-[10%] group flex flex-col items-center gap-2">
                  <div className={`w-full bg-indigo-950 rounded-t-sm ${height} transition-all duration-300 group-hover:bg-indigo-900`} />
                </div>
              ))}
            </div>
          </div>

          {/* Efficiency & Target Status Sidebar Container */}
          <div className="space-y-5 flex flex-col">
            {/* Efficiency Box */}
            <div className="bg-indigo-950 text-white rounded-xl p-5 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold text-indigo-300 tracking-wider uppercase">Total Branch Efficiency</p>
                <h3 className="text-4xl font-extrabold tracking-tight mt-2 text-white">94.2%</h3>
              </div>
              <p className="text-xs text-indigo-200/80 font-medium flex items-center gap-1 mt-4">
                <span className="text-emerald-400">↗ +2.4%</span> from last month
              </p>
            </div>

            {/* LATAM Highlight Targets Box */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
              <div>
                <h4 className="font-bold text-xs text-slate-900">Regional Focus: LATAM</h4>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-xs text-slate-400 font-semibold">Active Pipelines</span>
                  <span className="text-xl font-extrabold text-slate-900">1,204</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-950 rounded-full w-[72%]" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>Target: 1,500</span>
                  <span className="text-slate-700">72% to Goal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* Left Dimensions Sidebar Selector Panel */}
          <div className="p-4 bg-slate-50/60 border-b md:border-b-0 md:border-r border-slate-200/80 space-y-5">
            {/* Dimensions Section */}
            <div className="space-y-2">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Dimensions</span>
              <div className="space-y-1.5">
                {dimensions.map((dim, idx) => (
                  <div key={idx} className="flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm cursor-grab hover:border-slate-300 transition-colors">
                    <span className="text-xs font-semibold text-slate-700">{dim}</span>
                    <GripVertical className="h-3.5 w-3.5 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Measures Section */}
            <div className="space-y-2">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Measures</span>
              <div className="space-y-1.5">
                {measures.map((meas, idx) => (
                  <div key={idx} className="flex items-center justify-between px-3 py-2 bg-indigo-950 text-white rounded-lg shadow-sm cursor-grab hover:bg-indigo-900 transition-colors">
                    <span className="text-xs font-bold">{meas}</span>
                    <GripVertical className="h-3.5 w-3.5 text-indigo-400/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Central Report Workspace Area Drop target */}
          <div className="md:col-span-2 p-8 flex flex-col items-center justify-center text-center min-h-[260px] bg-white">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 mb-3 shadow-inner">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">Report Builder Workspace</h4>
            <p className="text-xs text-slate-400 max-w-sm mt-1 leading-relaxed font-medium">
              Drag dimensions and measures from the left sidebar to start constructing your customized BI report.
            </p>
            <button className="mt-5 px-4 py-1.5 border border-slate-200 hover:bg-slate-50 text-indigo-950 text-xs font-bold rounded-lg transition-colors shadow-sm">
              Select Template
            </button>
          </div>

        </div>

        {/* ==========================================
            4. BOTTOM PANEL: EXECUTIVE SHARED DATA TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-sm text-slate-900">Shared Executive Reports</h3>
            <button className="text-xs font-bold text-indigo-950 flex items-center gap-1 hover:underline">
              <span>View All Shared</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">REPORT NAME</th>
                  <th className="px-6 py-3">CREATED BY</th>
                  <th className="px-6 py-3">STATUS</th>
                  <th className="px-6 py-3">LAST MODIFIED</th>
                  <th className="px-6 py-3 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {sharedReports.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-indigo-950 shrink-0" />
                        <span className="font-bold text-slate-800">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <img src={row.avatar} alt={row.createdBy} className="w-5 h-5 rounded-full object-cover shadow-sm border border-slate-100" />
                        <span className="font-medium text-slate-600">{row.createdBy}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${row.statusClass}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-medium">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-slate-300" />
                        <span>{row.time || "Yesterday"}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-700 transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer info bars */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
          <span>© 2026 Hozify Enterprise BI. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-slate-600">Terms of Service</a>
            <a href="#privacy" className="hover:text-slate-600">Data Privacy Policy</a>
            <a href="#compliance" className="hover:text-slate-600">Compliance</a>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}