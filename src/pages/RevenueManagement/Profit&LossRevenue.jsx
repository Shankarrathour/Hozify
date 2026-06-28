import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, X, BarChart3, Calendar, ChevronDown } from "lucide-react";

export default function ProfitAndLossRevenue() {
  // --- States for Interaction ---
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Q3 FY 2026");
  const [showProjectionModal, setShowProjectionModal] = useState(false);

  // Top 4 Metric Cards data matching image_18b2bf.png
  const metrics = [
    { title: "TOTAL REVENUE", value: "$12,482,900", badge: "↗ +14.2% vs last Q", isPositive: true },
    { title: "GROSS PROFIT", value: "$8,245,100", badge: "• 66.0% Margin", isNeutral: true },
    { title: "EBITDA", value: "$4,120,500", badge: "• Flat vs Target", isNeutral: true },
    { title: "NET INCOME", value: "$2,890,200", badge: "↘ -2.1% Tax Adj.", isPositive: false },
  ];

  // Table Data Structure matching the exact rows of the Statement
  const statementRows = [
    { name: "Total Revenue", q1: "3,850.2", q2: "4,120.4", q3: "4,512.3", variance: "+17.1%", isHeader: true },
    { name: "Product Sales", q1: "2,100.5", q2: "2,340.2", q3: "2,650.1", variance: "--", isSubItem: true },
    { name: "Service Revenue", q1: "1,749.7", q2: "1,780.2", q3: "1,862.2", variance: "--", isSubItem: true },
    { name: "Cost of Goods Sold (COGS)", q1: "(1,240.5)", q2: "(1,310.2)", q3: "(1,420.5)", variance: "+14.5%", isSubItem: true },
    
    { name: "GROSS PROFIT", q1: "2,609.7", q2: "2,810.2", q3: "3,091.8", variance: "+18.4%", isTotalRow: true, bgClass: "bg-indigo-900 text-white" },
    
    { name: "Operating Expenses (OpEx)", q1: "(1,420.1)", q2: "(1,540.5)", q3: "(1,610.2)", variance: "--", isHeader: true },
    { name: "R&D Expenses", q1: "450.2", q2: "510.4", q3: "540.1", variance: "--", isSubItem: true },
    { name: "Sales & Marketing", q1: "620.4", q2: "680.1", q3: "720.5", variance: "--", isSubItem: true },
    { name: "General & Administrative", q1: "349.5", q2: "350.0", q3: "349.6", variance: "--", isSubItem: true },
    
    { name: "EBITDA", q1: "1,189.6", q2: "1,269.7", q3: "1,481.6", variance: "+24.5%", isBoldRow: true },
    { name: "Depreciation & Amortization", q1: "210.5", q2: "210.1", q3: "210.5", variance: "--", isSubItem: true },
    { name: "Interest & Taxes", q1: "150.2", q2: "165.8", q3: "180.1", variance: "--", isSubItem: true },
    
    { name: "NET INCOME", q1: "828.9", q2: "893.8", q3: "1,091.0", variance: "+31.6%", isTotalRow: true, bgClass: "bg-indigo-950 text-white" },
  ];

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search enterprise metrics...">
      <div 
        className="space-y-5 max-w-7xl mx-auto relative z-10 pointer-events-auto select-none"
        onClick={() => setShowCalendarDropdown(false)}
      >
        
        {/* ==========================================
            1. HEADER FILTER BAR WITH INTEGRATED CALENDAR DROPDOWN
           ========================================== */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Profit & Loss Statement</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Consolidated view for Hozify Global Entities</p>
          </div>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {/* COMPACT ALL-IN-ONE CALENDAR DROPDOWN */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                className={`px-3 py-1.5 bg-white border text-slate-600 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer ${
                  showCalendarDropdown ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-500' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>{selectedPeriod}</span>
                <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${showCalendarDropdown ? 'rotate-180 text-indigo-600' : ''}`} />
              </button>

              {showCalendarDropdown && (
                <div className="absolute top-full right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg p-2 min-w-[200px] z-50 max-h-[280px] overflow-y-auto space-y-1.5">
                  {/* Quarters Tier */}
                  <div>
                    <p className="text-[9px] font-extrabold text-slate-400 px-2 tracking-wider uppercase mb-1">QUARTERS</p>
                    {["Q1 FY 2026", "Q2 FY 2026", "Q3 FY 2026", "Q4 FY 2026"].map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => {
                          setSelectedPeriod(period);
                          setShowCalendarDropdown(false);
                        }}
                        className={`w-full text-left px-2 py-1 rounded-lg text-xs font-semibold block ${selectedPeriod === period ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>

                  <hr className="border-slate-100" />

                  {/* Months Tier */}
                  <div>
                    <p className="text-[9px] font-extrabold text-slate-400 px-2 tracking-wider uppercase mb-1">MONTHS</p>
                    {["July 2026", "August 2026", "September 2026"].map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => {
                          setSelectedPeriod(period);
                          setShowCalendarDropdown(false);
                        }}
                        className={`w-full text-left px-2 py-1 rounded-lg text-xs font-semibold block ${selectedPeriod === period ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>

                  <hr className="border-slate-100" />

                  {/* Years Tier */}
                  <div>
                    <p className="text-[9px] font-extrabold text-slate-400 px-2 tracking-wider uppercase mb-1">FULL YEAR</p>
                    {["Full Year 2025", "Full Year 2026"].map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => {
                          setSelectedPeriod(period);
                          setShowCalendarDropdown(false);
                        }}
                        className={`w-full text-left px-2 py-1 rounded-lg text-xs font-semibold block ${selectedPeriod === period ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Downloader Action */}
            <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ==========================================
            2. TOP ROW METRIC BLOCKS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm min-h-[105px]">
              <div>
                <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{item.title}</p>
                <h3 className="text-xl font-extrabold mt-1 text-slate-900 tracking-tight">{item.value}</h3>
              </div>
              <div className="mt-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                  item.isNeutral ? "bg-slate-50 text-slate-500 border-slate-100" :
                  item.isPositive ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
                }`}>
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================
            3. CONSOLIDATED STATEMENT TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-3.5 border-b border-slate-100 flex justify-between items-center bg-white">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Consolidated Statement of Operations</h3>
            </div>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
              All figures in USD (millions) • Basis: {selectedPeriod}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3 w-[40%]">Line Item</th>
                  <th className="px-6 py-3">Q1 2026</th>
                  <th className="px-6 py-3">Q2 2026</th>
                  <th className="px-6 py-3">Q3 2026</th>
                  <th className="px-6 py-3 text-right">Variance (%)</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700 bg-white">
                {statementRows.map((row, index) => {
                  if (row.isTotalRow) {
                    return (
                      <tr key={index} className={`${row.name.includes("NET") ? "bg-indigo-950" : "bg-indigo-900"} text-white font-bold border-y border-indigo-950`}>
                        <td className="px-6 py-3 tracking-wider uppercase text-[10px]">{row.name}</td>
                        <td className="px-6 py-3 font-extrabold">{row.q1}</td>
                        <td className="px-6 py-3 font-extrabold">{row.q2}</td>
                        <td className="px-6 py-3 font-extrabold">{row.q3}</td>
                        <td className="px-6 py-3 text-right text-emerald-300 font-extrabold">{row.variance}</td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={index} className={`border-b border-slate-100 hover:bg-slate-50/40 transition-colors ${
                      row.isHeader ? "bg-slate-50/40 text-slate-900 font-bold" : ""
                    } ${row.isBoldRow ? "text-slate-900 font-bold bg-slate-50/20" : ""}`}>
                      <td className={`px-6 py-2.5 ${row.isSubItem ? "pl-12 font-medium text-slate-400" : ""}`}>
                        {row.name}
                      </td>
                      <td className="px-6 py-2.5 font-semibold text-slate-800">{row.q1}</td>
                      <td className="px-6 py-2.5 font-semibold text-slate-800">{row.q2}</td>
                      <td className="px-6 py-2.5 font-semibold text-slate-800">{row.q3}</td>
                      <td className={`px-6 py-2.5 text-right ${
                        row.variance.startsWith("+") ? "text-emerald-600 font-bold" : "text-slate-400 font-normal"
                      }`}>
                        {row.variance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM BLOCKS: GROWTH ANALYSIS & PROJECTION
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* Growth Analysis Insights */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-3 flex flex-col justify-between">
            <h4 className="text-xs font-bold text-indigo-950 flex items-center gap-2 uppercase tracking-wider">
              <span>📈</span> Growth Analysis Matrix
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-0.5">
              <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-lg">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Revenue increased by <span className="font-bold text-slate-800">17.1%</span> primarily driven by Product Sales in the APAC region.
                </p>
              </div>

              <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-lg">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Gross Margin improved from <span className="font-bold text-slate-800">63.7% to 68.5%</span> due to optimized supply chain logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Quarterly Projection Callout */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between items-center text-center">
            <div className="w-full text-left">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quarterly Projection</h4>
              <p className="text-xs text-slate-500 font-normal mt-1.5">
                Visualizing the forecasted trajectory based on current operational performance benchmarks.
              </p>
            </div>

            <div className="w-full pt-3">
              <button 
                type="button"
                onClick={() => setShowProjectionModal(true)}
                className="w-full py-2 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm cursor-pointer"
              >
                View Model Details
              </button>
            </div>
          </div>

        </div>

        {/* ==========================================
            5. WORKING QUARTERLY PROJECTION MODAL
           ========================================== */}
        {showProjectionModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowProjectionModal(false)}>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              
              <div className="px-5 py-3.5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-indigo-600" /> Financial Projections (Q4 FY2026)
                </h4>
                <button type="button" onClick={() => setShowProjectionModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5 space-y-4">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Based on Q1-Q3 velocity data streams, the predictive core calculates a continuing upward trend for the upcoming settlement ledger matrix:
                </p>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold">
                    <span className="text-slate-600 flex items-center gap-1.5">🎯 Target Revenue Forecast</span>
                    <span className="text-slate-900 font-extrabold">$4,890.5M</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold">
                    <span className="text-slate-600 flex items-center gap-1.5">📊 Expected Margin Threshold</span>
                    <span className="text-indigo-600 font-extrabold">69.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold">
                    <span className="text-slate-600 flex items-center gap-1.5">🚀 Core Growth Catalysts</span>
                    <span className="text-emerald-600 font-extrabold">+4.5% QoQ</span>
                  </div>
                </div>

                <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-950 rounded-lg text-[11px] font-medium leading-relaxed flex gap-2">
                  <span className="text-xs">💡</span>
                  <span><strong>Strategic Note:</strong> R&D cost-cutting measures coupled with optimized server footprints are expected to produce an additional 40bps optimization buffer in OpEx pipelines.</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}