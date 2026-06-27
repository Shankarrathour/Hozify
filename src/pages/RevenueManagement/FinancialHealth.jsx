import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Download, 
  SlidersHorizontal, 
  Calendar,
  Activity,
  Maximize2
} from "lucide-react";

export default function FinancialHealth() {
  // Metric datasets for Operating Efficiency Rows
  const efficiencyMetrics = [
    { name: "Account Receivable Turnover", value: "8.4x", change: "+0.6x", isPos: true, status: "Green", dotColor: "bg-emerald-500" },
    { name: "Inventory Turnover Ratio", value: "4.2x", change: "-0.2x", isPos: false, status: "Yellow", dotColor: "bg-amber-500" },
    { name: "Asset Turnover Ratio", value: "1.12", change: "0.00", isPos: true, status: "Green", dotColor: "bg-emerald-500" },
    { name: "Return on Assets (ROA)", value: "14.6%", change: "+2.1%", isPos: true, status: "Green", dotColor: "bg-emerald-500" },
    { name: "Debt Service Coverage Ratio", value: "1.25", change: "-0.15", isPos: false, status: "Red", dotColor: "bg-rose-500" }
  ];

  return (
    <AdminShell activeTab="Financial Health" searchPlaceholder="Search operational ratios...">
      <div className="space-y-6">
        
        {/* ==========================================
            1. MASTER DASHBOARD HEADER BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Financial Health Monitor</h1>
            <p className="text-xs text-slate-400 mt-0.5">Real-time oversight of enterprise liquidity, solvency, and operational efficiency ratios.</p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                Overall Health: <span className="text-slate-800">Optimizing</span>
              </div>
            </div>

            {/* Quarter Filter Tag */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>Q3 FY2024</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            2. UPPER LEVEL TRI-CARD RATIO MONITORS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* LIQUIDITY MONITOR BOX */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">LIQUIDITY</span>
                  <h3 className="text-base font-bold text-slate-800 mt-1">Current Ratio</h3>
                </div>
                <span className="text-[9px] font-extrabold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded border border-emerald-100 uppercase tracking-wide">Optimal</span>
              </div>

              <div className="flex items-baseline gap-2 mt-4">
                <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight">2.14</h4>
                <span className="text-xs font-bold text-emerald-600">↑ 12%</span>
              </div>
            </div>

            {/* Simulated Stack Steps Mini-Chart */}
            <div className="mt-5 space-y-3">
              <div className="h-12 flex items-end gap-1 px-1">
                {["h-4 bg-indigo-950/20", "h-6 bg-indigo-950/30", "h-8 bg-indigo-950/50", "h-10 bg-indigo-950/70", "h-12 bg-indigo-950"].map((bar, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm ${bar}`} />
                ))}
              </div>
              <div className="text-[10px] font-bold text-slate-400 text-center border-t border-slate-50 pt-2">
                Target Range: <span className="text-slate-700">1.5 - 2.5</span>
              </div>
            </div>
          </div>

          {/* SOLVENCY MONITOR BOX */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">SOLVENCY</span>
                  <h3 className="text-base font-bold text-slate-800 mt-1">Debt-to-Equity</h3>
                </div>
                <span className="text-[9px] font-extrabold px-2 py-0.5 bg-amber-50 text-amber-600 rounded border border-amber-100 uppercase tracking-wide">Monitor</span>
              </div>

              <div className="flex items-baseline gap-2 mt-4">
                <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight">0.82</h4>
                <span className="text-xs font-bold text-amber-500">↑ 4.2%</span>
              </div>
            </div>

            {/* Simulated Horizontal Progress Marker */}
            <div className="mt-5 space-y-3">
              <div className="space-y-1.5">
                <div className="w-full h-3 bg-slate-100 rounded-sm overflow-hidden relative">
                  <div className="h-full bg-amber-500 rounded-sm w-[82%]" />
                </div>
                <div className="flex justify-between text-[9px] font-bold text-slate-400">
                  <span>Low Risk (0.0)</span>
                  <span>Threshold (1.0)</span>
                </div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 text-center border-t border-slate-50 pt-2">
                Industry Benchmark: <span className="text-slate-700">0.75</span>
              </div>
            </div>
          </div>

          {/* EFFICIENCY MONITOR BOX */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">EFFICIENCY</span>
                  <h3 className="text-base font-bold text-slate-800 mt-1">Cash Burn Rate</h3>
                </div>
                <span className="text-[9px] font-extrabold px-2 py-0.5 bg-rose-50 text-rose-600 rounded border border-rose-100 uppercase tracking-wide">Critical</span>
              </div>

              <div className="flex items-baseline gap-2 mt-4">
                <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight">$420k<span className="text-sm font-semibold text-slate-400">/mo</span></h4>
                <span className="text-xs font-bold text-rose-600">↑ 18%</span>
              </div>
            </div>

            {/* Multi-Colored Trend Bar Indicator */}
            <div className="mt-5 space-y-3">
              <div className="h-12 flex items-end gap-1 px-1">
                {["h-6 bg-indigo-950/20", "h-6 bg-indigo-950/30", "h-6 bg-indigo-950/50", "h-8 bg-indigo-950/80", "h-8 bg-indigo-950", "h-8 bg-rose-600"].map((cls, i) => (
                  <div key={i} className={`flex-1 rounded-sm ${cls}`} />
                ))}
              </div>
              <div className="text-[10px] font-bold text-slate-400 text-center border-t border-slate-50 pt-2">
                Runway: <span className="text-slate-700">14.2 Months Remaining</span>
              </div>
            </div>
          </div>

        </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Operating Efficiency Grid Table */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
              <h3 className="font-bold text-sm text-slate-900">Operating Efficiency Metrics</h3>
              <div className="flex items-center gap-1">
                <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-3.5">METRIC INDICATOR</th>
                    <th className="px-6 py-3.5">CURRENT VALUE</th>
                    <th className="px-6 py-3.5">VS PREV PERIOD</th>
                    <th className="px-6 py-3.5">RISK STATUS</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-semibold text-slate-700">
                  {efficiencyMetrics.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/20 transition-colors">
                      <td className="px-6 py-4 text-slate-800 font-bold">{row.name}</td>
                      <td className="px-6 py-4 text-slate-900 font-extrabold">{row.value}</td>
                      <td className={`px-6 py-4 font-mono font-bold ${row.isPos ? "text-emerald-600" : row.change === "0.00" ? "text-slate-400" : "text-amber-500"}`}>
                        {row.change}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`} />
                          <span className="text-slate-600 text-[11px] font-medium">{row.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Asset vs Liability Distribution Ring Component */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-sm text-slate-900 tracking-tight">Asset vs Liability Dist.</h3>
            
            {/* Visual Ring Representation */}
            <div className="my-4 flex justify-center items-center">
              <div className="w-36 h-36 rounded-full border-[14px] border-slate-100 flex items-center justify-center relative">
                {/* Precise Dynamic CSS Overlay Segments */}
                <div className="absolute inset-0 rounded-full border-[14px] border-indigo-950 border-t-transparent border-r-transparent rotate-45" />
                <div className="text-center">
                  <span className="block text-3xl font-extrabold text-slate-900">64%</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Equity Ratio</span>
                </div>
              </div>
            </div>

            {/* Data Rows Legends */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-bold">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-950" />
                  <span className="text-slate-500 font-semibold">Current Assets</span>
                </div>
                <span className="text-slate-900">$14.2M</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-300" />
                  <span className="text-slate-500 font-semibold">Long Term Debt</span>
                </div>
                <span className="text-slate-900">$6.8M</span>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================
            4. BOTTOM CALLOUT PANEL: COMPLIANCE BANNER
           ========================================== */}
        <div className="bg-indigo-950 text-white rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-900 rounded-xl text-indigo-300 shadow-inner">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Compliance Audit Ready</h4>
              <p className="text-xs text-indigo-200/70 mt-0.5 font-medium">
                All solvency indicators are within the mandatory federal regulatory bounds for Q3.
              </p>
            </div>
          </div>

          <button className="flex items-center gap-1.5 px-4 py-2 bg-white text-indigo-950 rounded-lg text-xs font-extrabold hover:bg-slate-50 transition-colors shadow-sm self-end sm:self-auto whitespace-nowrap">
            <span>Review Audit Log</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </AdminShell>
  );
}