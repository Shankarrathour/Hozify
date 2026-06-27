import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Cpu, 
  Layers, 
  BarChart2, 
  ArrowUpRight, 
  TrendingUp, 
  Compass, 
  Zap, 
  LineChart, 
  Download, 
  MoreVertical, 
  Globe2, 
  Gauge 
} from "lucide-react";


export default function BusinessIntelligence() {
  // Navigation contextual filters states
  const [selectedGeo, setSelectedGeo] = useState("Global All");

  // Summary Metrics reflecting core performance indicators
  const topKPIs = [
    {
      title: "ENTERPRISE RUN RATE",
      value: "$18.64M",
      badge: "↗ +16.8%",
      isPositive: true,
      subtext: "Target benchmark: $17.5M expected",
      icon: <Gauge className="h-4 w-4 text-indigo-950" />
    },
    {
      title: "SYSTEM PERFORMANCE VELOCITY",
      value: "98.4%",
      badge: "• Optimal",
      isPositive: true,
      subtext: "All 14 distributed clusters active",
      icon: <Cpu className="h-4 w-4 text-indigo-950" />
    }
  ];

  // Operations Geo performance data matrices
  const operationalSlices = [
    { region: "EMEA Core Entity", target: 8200000, actual: 8850000, percentage: 107 },
    { region: "AMER Enterprise Account", target: 6500000, actual: 6120000, percentage: 94 },
    { region: "APAC Logistics Cluster", target: 4000000, actual: 3670000, percentage: 91 }
  ];

  return (
    <AdminShell activeTab="Business Intelligence" searchPlaceholder="Inquire enterprise neural metrics...">
      <div className="space-y-6">
        
        {/* ==========================================
            1. HEADER CONTEXT FILTERS BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Business Intelligence Control</h1>
            <p className="text-xs text-slate-400 mt-0.5">Unified intelligence hub cross-referencing forecasting metrics with real-time operations.</p>
          </div>

          {/* Geo Entity Pills Context View */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold self-end sm:self-auto shadow-sm">
            {["Global All", "EMEA Nodes", "AMER Hub", "APAC Grid"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedGeo(tab)}
                className={`px-3 py-1 transition-all rounded ${
                  selectedGeo === tab ? "bg-white text-indigo-950 shadow-sm" : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================
            2. UPPER TOP METRIC PLATFORMS GRID
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topKPIs.map((kpi, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{kpi.title}</p>
                  <span className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg shadow-sm">
                    {kpi.icon}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{kpi.value}</h3>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600">
                    {kpi.badge}
                  </span>
                </div>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="text-xs text-slate-500 font-medium">{kpi.subtext}</p>
              </div>
            </div>
          ))}

          {/* Forecast Overview Card */}
          <div className="bg-indigo-950 text-white rounded-xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <p className="text-[10px] font-bold text-indigo-300 tracking-wider uppercase flex items-center gap-1">
                <BarChart2 className="h-3 w-3" />
                <span>FORECAST OVERVIEW</span>
              </p>
              <h3 className="text-3xl font-extrabold mt-3 text-white tracking-tight">96.8%</h3>
              <p className="text-xs text-indigo-200/80 mt-2 leading-relaxed font-medium">
                High probability reach variance matching targeted parameters across global segments.
              </p>
            </div>
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-900 border border-indigo-800 text-white rounded-lg text-xs font-bold hover:bg-indigo-850 transition-colors shadow-inner">
                <span>Access Simulation Logs</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Integrated Projection Bar Heights Matrix Area */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                <LineChart className="h-4 w-4 text-indigo-950" />
                <h3>Strategic Revenue Allocation Runway</h3>
              </div>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                6-Month Rolling Distribution
              </span>
            </div>

            {/* Overlap-proof customized chart visual workspace setup */}
            <div className="h-48 relative flex items-end justify-between px-6 pb-2 pt-6 border-b border-l border-slate-100">
              
              {/* Plot Heights Indicators mapping via bars blocks structure */}
              {["h-24", "h-32", "h-40", "h-44", "h-36", "h-48"].map((h, i) => (
                <div key={i} className="w-[12%] flex flex-col items-center gap-1.5 group">
                  <div className={`w-full bg-indigo-950 rounded-t-sm ${h} transition-all duration-300 group-hover:bg-indigo-900`} />
                </div>
              ))}

              {/* Grid Vertical Timeframe Labels Line */}
              <div className="absolute bottom-[-22px] left-0 right-0 flex justify-between px-2 text-[9px] font-extrabold text-slate-400 tracking-wider">
                {["JAN-FEB", "MAR-APR", "MAY-JUN", "JUL-AUG", "SEP-OCT", "NOV-DEC"].map((lbl) => (
                  <span key={lbl}>{lbl}</span>
                ))}
              </div>
            </div>

            {/* Visual Indicators Metadata Grid Wrapper */}
            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 mt-8 pt-3 border-t border-slate-50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-950" />
                <span className="text-slate-800">Actualized Run Rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200" />
                <span>Forecast Confidence Horizon</span>
              </div>
            </div>
          </div>

          {/* Operational Distribution Tracker Cluster Progress Bars */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Globe2 className="h-4 w-4 text-indigo-950" />
                <span>Regional Nodes</span>
              </h3>
            </div>

            <div className="space-y-4 my-auto">
              {operationalSlices.map((slice, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 text-[10px] uppercase tracking-wide">{slice.region}</span>
                    <span className="text-slate-800">{slice.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-sm overflow-hidden">
                    <div 
                      className={`h-full rounded-sm transition-all duration-500 ${slice.percentage >= 100 ? "bg-emerald-500" : "bg-indigo-950"}`}
                      style={{ width: `${Math.min(slice.percentage, 100)}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-50 pt-3 mt-4">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-semibold">
                <span>System Health Map Grid</span>
                <span className="text-slate-800 font-bold">All Logs Synced</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM PANEL: ANALYTICS SEGMENT TRANS DATA TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-sm text-slate-900">Neural Network Model Assertions</h3>
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
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">BI MODEL CLUSTER</th>
                  <th className="px-6 py-3">PREDICTIVE CONTEXT</th>
                  <th className="px-6 py-3">VARIANCE RATIO</th>
                  <th className="px-6 py-3">STATUS FLAG</th>
                  <th className="px-6 py-3 text-right">METRIC RUN RATE</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {[
                  { name: "SaaS Enterprise Core", desc: "Subscription drift expansion logic", variance: "+/- 1.4%", status: "Stable Node", badge: "bg-blue-50 text-blue-600 border border-blue-100", rate: "$8.42M" },
                  { name: "Logistics Fuel Fleet", desc: "Consolidated operational spending variance", variance: "+/- 2.1%", status: "Optimized", badge: "bg-emerald-50 text-emerald-600 border border-emerald-100", rate: "$4.12M" },
                  { name: "Marketing Media Pipeline", desc: "Ad Spend Adjustment conversion metrics", variance: "+/- 3.8%", status: "At Risk Context", badge: "bg-rose-50 text-rose-600 border border-rose-100", rate: "$1.85M" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-3.5 font-bold text-slate-800">{row.name}</td>
                    <td className="px-6 py-3.5 text-slate-500 font-medium">{row.desc}</td>
                    <td className="px-6 py-3.5 font-mono text-slate-600 font-bold">{row.variance}</td>
                    <td className="px-6 py-3.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${row.badge}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right font-extrabold text-slate-900 text-sm">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer legal notes link */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
          <span>© 2026 Hozify Predictive Business Intelligence Stack.</span>
          <div className="flex items-center gap-3">
            <span className="cursor-pointer hover:text-slate-600">Secure Cluster Connection</span>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}