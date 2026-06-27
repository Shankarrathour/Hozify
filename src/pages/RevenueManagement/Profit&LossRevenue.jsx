import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, FileText } from "lucide-react";

export default function ProfitAndLossRevenue() {
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
      <div className="space-y-6">
        
        {/* ==========================================
            1. HEADER FILTER BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Profit & Loss Statement</h1>
            <p className="text-xs text-slate-400 mt-0.5">Consolidated view for Hozify Global Entities • FY 2026</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* View Mode Dropdowns */}
            <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button className="px-3 py-1 text-xs font-medium text-slate-500 rounded hover:text-slate-800">Month</button>
              <button className="px-3 py-1 text-xs font-bold bg-white text-indigo-950 rounded shadow-sm">Quarter</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-500 rounded hover:text-slate-800">Year</button>
            </div>

            {/* Actions */}
            <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
              <Download className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm">
              <FileText className="h-3.5 w-3.5" />
              <span>PDF Export</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. TOP ROW METRIC BLOCKS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{item.title}</p>
                <h3 className="text-2xl font-extrabold mt-1.5 text-slate-900 tracking-tight">{item.value}</h3>
              </div>
              <div className="mt-2.5">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                  item.isNeutral ? "bg-slate-50 text-slate-500 border border-slate-100" :
                  item.isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
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
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Consolidated Statement of Operations</h3>
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
              All figures in USD (millions)
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3 w-[40%]">Line Item</th>
                  <th className="px-6 py-3">Q1 2026</th>
                  <th className="px-6 py-3">Q2 2026</th>
                  <th className="px-6 py-3">Q3 2026</th>
                  <th className="px-6 py-3 text-right">Variance (%)</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {statementRows.map((row, index) => {
                  if (row.isTotalRow) {
                    return (
                      <tr key={index} className={`${row.bgClass} font-bold border-y border-indigo-950`}>
                        <td className="px-6 py-3 tracking-wider uppercase text-[11px]">{row.name}</td>
                        <td className="px-6 py-3">{row.q1}</td>
                        <td className="px-6 py-3">{row.q2}</td>
                        <td className="px-6 py-3">{row.q3}</td>
                        <td className="px-6 py-3 text-right text-emerald-300">{row.variance}</td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={index} className={`border-b border-slate-100 hover:bg-slate-50/40 transition-colors ${
                      row.isHeader ? "bg-slate-50/40 text-slate-900 font-bold" : ""
                    } ${row.isBoldRow ? "text-slate-900 font-bold bg-slate-50/20" : ""}`}>
                      <td className={`px-6 py-2.5 ${row.isSubItem ? "pl-12 font-normal text-slate-500" : ""}`}>
                        {row.name}
                      </td>
                      <td className="px-6 py-2.5 font-medium">{row.q1}</td>
                      <td className="px-6 py-2.5 font-medium">{row.q2}</td>
                      <td className="px-6 py-2.5 font-medium">{row.q3}</td>
                      <td className={`px-6 py-2.5 text-right ${
                        row.variance.startsWith("+") ? "text-emerald-600 font-bold" : "text-slate-400"
                      }`}>
                        {row.variance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table></div>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM BLOCKS: GROWTH ANALYSIS & PROJECTION
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Growth Analysis Insights */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-indigo-950 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-sm">📈</span> Growth Analysis
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-lg">
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Revenue increased by <span className="font-bold text-slate-800">17.1%</span> primarily driven by Product Sales in the APAC region.
                </p>
              </div>

              <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-lg">
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Gross Margin improved from <span className="font-bold text-slate-800">63.7% to 68.5%</span> due to optimized supply chain logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Quarterly Projection Callout */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between items-center text-center">
            <div className="w-full">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-left">Quarterly Projection</h4>
              <p className="text-xs text-slate-500 font-normal mt-2">
                Visualizing the forecasted trajectory based on current performance benchmarks.
              </p>
            </div>

            <div className="w-full pt-4">
              <button className="w-full py-2 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm">
                View Model Details
              </button>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}