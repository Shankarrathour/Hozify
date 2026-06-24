import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  RotateCw, 
  TrendingUp, 
  TrendingDown, 
  MoveRight, 
  SlidersHorizontal, 
  Download, 
  Sparkles,
  ArrowUpRight,
  ExternalLink
} from "lucide-react";

export default function RevenueForecasting() {
  // Interactive Controls default dynamic settings
  const [volatility, setVolatility] = useState("Medium");
  const [churnRate, setChurnRate] = useState("2.4%");
  const [adSpend, setAdSpend] = useState("+$150k");

  // Predictive Units breakdown datagrid source
  const segmentsData = [
    {
      unit: "SaaS Enterprise",
      currentRate: "$1.2M / mo",
      forecasted: "$1.65M / mo",
      confidence: 92,
      confidenceColor: "bg-emerald-500",
      trend: "Strong",
      trendColor: "text-emerald-600 bg-emerald-50",
      trendIcon: <TrendingUp className="h-3 w-3" />
    },
    {
      unit: "Direct Consumer",
      currentRate: "$840k / mo",
      forecasted: "$790k / mo",
      confidence: 78,
      confidenceColor: "bg-indigo-900",
      trend: "Softening",
      trendColor: "text-rose-600 bg-rose-50",
      trendIcon: <TrendingDown className="h-3 w-3" />
    },
    {
      unit: "B2B Partnerships",
      currentRate: "$3.1M / mo",
      forecasted: "$3.22M / mo",
      confidence: 96,
      confidenceColor: "bg-emerald-500",
      trend: "Stable",
      trendColor: "text-slate-500 bg-slate-50",
      trendIcon: <MoveRight className="h-3 w-3" />
    }
  ];

  return (
    <AdminShell activeTab="Forecasting" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6">
        
        {/* ==========================================
            1. HEADER METADATA META TAG BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Financial Forecasting</h1>
            <p className="text-xs text-slate-400 mt-0.5">Predictive AI engine analyzing historical performance and market trends.</p>
          </div>
          <div className="self-end sm:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs font-bold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Model: Hozify-LLM v4.2</span>
            </span>
          </div>
        </div>

        {/* ==========================================
            2. TOP PANEL GRAPH SCREEN CONTROLS
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Overlap-proof 6-Month Projection Grid Container */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-sm text-slate-900">6-Month Revenue Projection</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">High Confidence</span>
                <span className="text-[10px] text-slate-400 font-semibold">Updated 2m ago</span>
              </div>
            </div>

            {/* Secure Plot Space utilizing extra padding to eliminate label crashes */}
            <div className="h-56 relative flex flex-col justify-between pl-10 pr-4 pb-6 pt-4 border-l border-b border-slate-100/80">
              
              {/* Y-Axis Label Positions Layer */}
              {["$12M", "$9M", "$6M", "$3M", "$0"].map((label, idx) => (
                <div key={idx} className="w-full flex items-center text-[10px] font-bold text-slate-400 absolute left-0 right-0" style={{ top: `${idx * 22 + 12}%` }}>
                  <span className="w-8 text-right pr-2 absolute left-0">{label}</span>
                  <div className="w-full border-t border-slate-100 border-dashed ml-9" />
                </div>
              ))}

              {/* Secure Non-Overlapping 'TODAY' Dash Marker */}
              <div className="absolute left-[45%] top-0 bottom-6 border-l-2 border-rose-200 border-dashed z-10">
                <span className="text-[9px] font-extrabold bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded absolute top-2 -translate-x-1/2 shadow-sm tracking-wider whitespace-nowrap">
                  TODAY
                </span>
              </div>

              {/* X-Axis Grid Timeframe Baseline Track */}
              <div className="absolute bottom-1 left-9 right-4 flex justify-between text-[10px] font-bold text-slate-400">
                {["MAR", "APR", "MAY", "JUN", "JUL", "AUG"].map((m) => (
                  <span key={m} className={m === "JUN" || m === "JUL" || m === "AUG" ? "bg-indigo-50 text-indigo-950 font-extrabold px-2 py-0.5 rounded-md" : "py-0.5"}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Isolated Bottom Legends Row Panel with safe top spacing */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 text-indigo-950">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-950" />
                  <span>Forecast Mean</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-100 border border-blue-200" />
                  <span>95% Confidence Interval</span>
                </div>
              </div>
              <button className="text-indigo-950/70 hover:text-indigo-950 flex items-center gap-1 mt-1 sm:mt-0 transition-colors">
                <span>View Methodology</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
           <div className="space-y-5 flex flex-col justify-between">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 flex-1">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                <SlidersHorizontal className="h-4 w-4 text-indigo-950" />
                <h3>'What-if' Scenario</h3>
              </div>

              {/* Input Form Fields Blocks */}
              <div className="space-y-4 text-xs font-semibold">
                <div>
                  <div className="flex justify-between text-slate-500 mb-1.5 font-bold text-[11px]">
                    <span>Customer Churn Rate</span>
                    <span className="text-slate-900 font-extrabold">{churnRate}</span>
                  </div>
                  <input type="range" className="w-full accent-indigo-950 h-1 bg-slate-100 rounded" readOnly />
                </div>

                <div>
                  <div className="flex justify-between text-slate-500 mb-2 font-bold text-[11px]">
                    <span>Market Volatility Index</span>
                    <span className="text-indigo-950 font-extrabold">{volatility}</span>
                  </div>
                  <div className="grid grid-cols-3 bg-slate-50 p-0.5 rounded-lg border border-slate-200 text-center font-bold text-[10px]">
                    {["Low", "Medium", "High"].map((level) => (
                      <button 
                        key={level} 
                        onClick={() => setVolatility(level)}
                        className={`py-1 rounded transition-colors ${volatility === level ? "bg-indigo-950 text-white shadow-sm" : "text-slate-400 hover:text-slate-700"}`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-500 mb-1.5 font-bold text-[11px]">
                    <span>Ad Spend Adjustment</span>
                    <span className="text-slate-900 font-extrabold">{adSpend}</span>
                  </div>
                  <input type="range" className="w-full accent-indigo-950 h-1 bg-slate-100 rounded" readOnly />
                </div>
              </div>

              <button className="w-full mt-2 flex items-center justify-center gap-1.5 py-2 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm">
                <RotateCw className="h-3.5 w-3.5" />
                <span>Recalculate Model</span>
              </button>
            </div>

            {/* solid blue theme output panel block */}
            <div className="bg-indigo-950 text-white rounded-xl p-5 shadow-sm relative overflow-hidden">
              <p className="text-[10px] font-bold text-indigo-300 tracking-wider uppercase">PROJECTED 6M GROWTH</p>
              <div className="flex items-baseline gap-1.5 mt-1">
                <h3 className="text-4xl font-extrabold tracking-tight">+14.8%</h3>
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <p className="text-xs text-indigo-200/80 mt-2 leading-relaxed font-medium">
                Expected total revenue reach of <span className="text-white font-bold">$64.2M</span> by end of Q3 fiscal year.
              </p>
            </div>
          </div>

        </div>

        {/* ==========================================
            3. MIDDLE PANEL: PREDICTIVE DATA GRID TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-sm text-slate-900">Predictive Variance by Segment</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                <SlidersHorizontal className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">BUSINESS UNIT</th>
                  <th className="px-6 py-3">CURRENT RUN RATE</th>
                  <th className="px-6 py-3">FORECASTED (6M)</th>
                  <th className="px-6 py-3 w-[22%]">AI CONFIDENCE</th>
                  <th className="px-6 py-3">TREND</th>
                  <th className="px-6 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {segmentsData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">{row.unit}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{row.currentRate}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">{row.forecasted}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className={`h-full ${row.confidenceColor}`} style={{ width: `${row.confidence}%` }} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">{row.confidence}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${row.trendColor}`}>
                        {row.trendIcon}
                        <span>{row.trend}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-bold text-slate-700 border border-slate-200 px-3 py-1 rounded-lg bg-white hover:bg-slate-50 transition-colors shadow-sm">
                        Analyze
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM SUMMARY: DYNAMIC TRAINING CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Continuous Retraining Info Bar */}
          <div className="md:col-span-1.5 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-indigo-950 text-white rounded-xl shadow-inner shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Continuous Learning Model</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">
                Our neural network retrains every 24 hours on global financial indicators and internal transaction data to ensure projection precision within a +/- 3% variance window.
              </p>
            </div>
          </div>

          {/* Market Penetration Grid Item */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>MARKET PENETRATION</span>
              <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-extrabold">+5%</span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">28.4%</h3>
            </div>
          </div>

          {/* Churn Propensity Grid Item */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>CHURN PROPENSITY</span>
              <span className="text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded font-extrabold">-1.2%</span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">0.85%</h3>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}