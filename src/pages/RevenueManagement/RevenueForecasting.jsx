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
  ExternalLink,
  X,
  LineChart,
  Eye,
  Activity,
  Lightbulb,
  Cpu,
  ChevronDown
} from "lucide-react";

export default function RevenueForecasting() {
  // Scenario Inputs States
  const [churnRate, setChurnRate] = useState(2.4);
  const [adSpend, setAdSpend] = useState(150);
  const [volatility, setVolatility] = useState("Medium");
  
  // Operational Trigger Hooks
  const [showMethodology, setShowMethodology] = useState(false);
  const [isRecalculating, setIsRecalculating] = useState(false);
  const [hoveredData, setHoveredData] = useState(null);
  const [growthFactor, setGrowthFactor] = useState(14.8);
  
  // Filter States
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Projection Graph Mapping Dataset Coordinates
  const graphPoints = [
    { month: "MAR", value: "$4.2M", percentage: "35%", details: "Enterprise Core: Stable pipeline execution" },
    { month: "APR", value: "$5.8M", percentage: "48%", details: "Direct Consumer seasonal high spike" },
    { month: "MAY", value: "$6.9M", percentage: "58%", details: "B2B Expansion contract finalized" },
    { month: "JUN", value: "$8.4M", percentage: "70%", details: "Post EOM Velocity Optimization tracking" },
    { month: "JUL", value: "$9.6M", percentage: "80%", details: "Forecasted Runway inflection target boundary" },
    { month: "AUG", value: "$11.2M", percentage: "93%", details: "Neural Engine projected scale maxima" }
  ];

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
      trendIcon: <TrendingUp className="h-3 w-3" />,
      actionColor: "text-emerald-600 bg-emerald-50 border-emerald-100 hover:bg-emerald-100"
    },
    {
      unit: "Direct Consumer",
      currentRate: "$840k / mo",
      forecasted: "$790k / mo",
      confidence: 78,
      confidenceColor: "bg-indigo-900",
      trend: "Softening",
      trendColor: "text-rose-600 bg-rose-50",
      trendIcon: <TrendingDown className="h-3 w-3" />,
      actionColor: "text-rose-600 bg-rose-50 border-rose-100 hover:bg-rose-100"
    },
    {
      unit: "B2B Partnerships",
      currentRate: "$3.1M / mo",
      forecasted: "$3.22M / mo",
      confidence: 96,
      confidenceColor: "bg-emerald-500",
      trend: "Stable",
      trendColor: "text-slate-500 bg-slate-50",
      trendIcon: <MoveRight className="h-3 w-3" />,
      actionColor: "text-indigo-600 bg-indigo-50 border-indigo-100 hover:bg-indigo-100"
    }
  ];

  // Logic to Filter Segments
  const filteredSegments = segmentsData.filter(row => {
    if (activeFilter === "All") return true;
    return row.trend.toLowerCase() === activeFilter.toLowerCase();
  });

  // Trigger Local Data Engine Calculation
  const handleRecalculate = () => {
    setIsRecalculating(true);
    setTimeout(() => {
      const calculatedVariance = (14.8 + (adSpend / 100) - (churnRate * 0.5)).toFixed(1);
      setGrowthFactor(parseFloat(calculatedVariance));
      setIsRecalculating(false);
    }, 900);
  };

  // CSV Data Download Engine Simulator Function
  const handleDownloadCSV = () => {
    const headers = "Business Unit,Current Run Rate,Forecasted 6M,Forecast Score,Trend\n";
    const rows = filteredSegments.map(r => `"${r.unit}","${r.currentRate}","${r.forecasted}",${r.confidence}%,"${r.trend}"`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `Revenue_Forecast_${activeFilter}_Report.csv`);
    a.click();
  };

  return (
    <AdminShell activeTab="Forecasting" searchPlaceholder="Search enterprise metrics...">
      <div 
        className="space-y-6 max-w-7xl mx-auto select-none pointer-events-auto"
        onClick={() => setShowFilterDropdown(false)}
      >
        
        {/* ==========================================
            1. HEADER METADATA META TAG BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Financial Forecasting</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Predictive engine analyzing historical performance and market trends.</p>
          </div>
        </div>

        {/* ==========================================
            2. TOP PANEL GRAPH SCREEN CONTROLS
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-sm text-slate-900">6-Month Revenue Projection</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">High Confidence</span>
                <span className="text-[10px] text-slate-400 font-semibold">Updated 2m ago</span>
              </div>
            </div>

            <div className="h-56 relative border-l border-b border-slate-200/60 ml-8 mr-2 mb-2">
              {["$12M", "$9M", "$6M", "$3M", "$0"].map((label, idx) => (
                <div key={idx} className="w-full flex items-center text-[9px] font-bold text-slate-400 absolute left-0 right-0" style={{ top: `${idx * 23}%` }}>
                  <span className="w-8 text-right pr-2 absolute -left-10">{label}</span>
                  <div className="w-full border-t border-slate-100 border-dashed" />
                </div>
              ))}

              <div className="absolute left-[45%] top-0 bottom-0 border-l-2 border-rose-200 border-dashed z-10">
                <span className="text-[9px] font-extrabold bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded absolute top-2 -translate-x-1/2 shadow-sm tracking-wider whitespace-nowrap">
                  TODAY
                </span>
              </div>

              <div className="absolute inset-0 top-4 bottom-4 left-4 right-4 flex justify-between items-end z-20">
                {graphPoints.map((pt, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center relative group" 
                    style={{ bottom: pt.percentage }}
                    onMouseEnter={() => setHoveredData(pt)}
                    onMouseLeave={() => setHoveredData(null)}
                  >
                    <div className="w-3 h-3 rounded-full bg-indigo-600 border-2 border-white shadow-md cursor-pointer transform group-hover:scale-135 transition-transform duration-150" />
                    <div className="w-0.5 h-32 bg-indigo-600/10 absolute top-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-dashed border-l" />
                  </div>
                ))}
              </div>

              {hoveredData && (
                <div className="absolute top-2 left-4 bg-slate-900 text-white rounded-lg p-2.5 shadow-xl max-w-xs z-30 space-y-1 animate-in fade-in zoom-in-95 duration-100 pointer-events-none">
                  <div className="flex justify-between items-center gap-6">
                    <span className="text-[10px] uppercase font-bold text-indigo-300">{hoveredData.month} Target Matrix</span>
                    <span className="text-xs font-extrabold text-emerald-400">{hoveredData.value}</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium leading-tight">{hoveredData.details}</p>
                </div>
              )}

              <div className="absolute -bottom-7 left-0 right-0 flex justify-between text-[10px] font-bold text-slate-400 px-2">
                {graphPoints.map((pt) => (
                  <span key={pt.month} className={pt.month === "JUN" || pt.month === "JUL" || pt.month === "AUG" ? "bg-indigo-50 text-indigo-950 font-extrabold px-1.5 py-0.5 rounded" : "py-0.5"}>
                    {pt.month}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-8 pt-3 border-t border-slate-100 text-[11px] font-bold">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 text-indigo-950">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <span>Forecast Mean</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-50 border border-indigo-100" />
                  <span className="text-xs font-medium text-slate-500">Hover points to audit specific monthly indicators</span>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setShowMethodology(true)}
                className="text-indigo-950 font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View Methodology</span>
                <ExternalLink className="h-3 w-3 text-indigo-600" />
              </button>
            </div>
          </div>

          <div className="space-y-4 flex flex-col justify-between">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 flex-1">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                <SlidersHorizontal className="h-4 w-4 text-indigo-900" />
                <h3>'What-if' Scenario</h3>
              </div>

              <div className="space-y-4 text-xs font-semibold">
                <div>
                  <div className="flex justify-between text-slate-500 mb-1.5 font-bold text-[11px]">
                    <span>Customer Churn Rate</span>
                    <span className="text-slate-900 font-extrabold">{churnRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="5.0" 
                    step="0.1"
                    value={churnRate}
                    onChange={(e) => setChurnRate(parseFloat(e.target.value))}
                    className="w-full accent-indigo-950 h-1 bg-slate-100 rounded cursor-pointer" 
                  />
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
                        type="button"
                        onClick={() => setVolatility(level)}
                        className={`py-1 rounded transition-colors cursor-pointer ${volatility === level ? "bg-indigo-950 text-white shadow-sm" : "text-slate-400 hover:text-slate-700"}`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-500 mb-1.5 font-bold text-[11px]">
                    <span>Ad Spend Adjustment</span>
                    <span className="text-slate-900 font-extrabold">+${adSpend}k</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="500" 
                    step="25"
                    value={adSpend}
                    onChange={(e) => setAdSpend(parseInt(e.target.value))}
                    className="w-full accent-indigo-950 h-1 bg-slate-100 rounded cursor-pointer" 
                  />
                </div>
              </div>

              <button 
                type="button"
                onClick={handleRecalculate}
                disabled={isRecalculating}
                className="w-full mt-2 flex items-center justify-center gap-1.5 py-2 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
              >
                <RotateCw className={`h-3.5 w-3.5 ${isRecalculating ? 'animate-spin' : ''}`} />
                <span>{isRecalculating ? 'Processing Model...' : 'Recalculate Model'}</span>
              </button>
            </div>

            <div className="bg-indigo-950 text-white rounded-xl p-4 shadow-sm relative overflow-hidden">
              <p className="text-[10px] font-bold text-indigo-300 tracking-wider uppercase">PROJECTED 6M GROWTH</p>
              <div className="flex items-baseline gap-1.5 mt-1">
                <h3 className="text-3xl font-extrabold tracking-tight">+{growthFactor}%</h3>
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <p className="text-[11px] text-indigo-200/80 mt-1 leading-normal font-medium">
                Expected total revenue reach of <span className="text-white font-bold">$64.2M</span> by end of fiscal period.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. MIDDLE PANEL: PREDICTIVE DATA GRID TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white relative">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-slate-900">Predictive Variance by Segment</h3>
              {activeFilter !== "All" && (
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                  Filtered: {activeFilter}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2 relative" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className={`p-1.5 border rounded-lg text-slate-600 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-sm ${
                  showFilterDropdown || activeFilter !== "All" ? 'border-indigo-600 bg-indigo-50/50 text-indigo-600 ring-1 ring-indigo-500' : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-[11px]">{activeFilter}</span>
                <ChevronDown className={`h-3 w-3 opacity-70 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showFilterDropdown && (
                <div className="absolute top-full right-10 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg p-1.5 min-w-[140px] z-50 space-y-0.5">
                  {["All", "Strong", "Stable", "Softening"].map((filterOpt) => (
                    <button
                      key={filterOpt}
                      type="button"
                      onClick={() => {
                        setActiveFilter(filterOpt);
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold block transition-colors ${
                        activeFilter === filterOpt ? 'bg-indigo-950 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {filterOpt} {filterOpt === "All" ? 'Segments' : ''}
                    </button>
                  ))}
                </div>
              )}

              <button 
                type="button" 
                onClick={handleDownloadCSV}
                className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-sm cursor-pointer"
                title="Download Filtered CSV Report"
              >
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
                  <th className="px-6 py-3 w-[22%]">FORECAST SCORE</th>
                  <th className="px-6 py-3">TREND</th>
                  <th className="px-6 py-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {filteredSegments.length > 0 ? (
                  filteredSegments.map((row, index) => (
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
                        <button 
                          type="button"
                          onClick={() => alert(`Detailed breakdown for ${row.unit} is currently being generated by the neural engine.`)}
                          className={`p-2 border rounded-lg shadow-xs transition-all cursor-pointer ${row.actionColor}`}
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-10 text-center text-slate-400 font-medium">
                      No matching business segments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM SUMMARY: DYNAMIC TRAINING CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-indigo-950 text-white rounded-xl shadow-inner shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Continuous Learning Model</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">
                Our neural network retrains every 24 hours on global indicators to keep variance thresholds within a tight +/- 3% margin.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>MARKET PENETRATION</span>
              <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-extrabold">+5%</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">28.4%</h3>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>CHURN PROPENSITY</span>
              <span className="text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded font-extrabold">-1.2%</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">0.85%</h3>
            </div>
          </div>
        </div>

        {/* =================================== */}
    </div>
</AdminShell>
  );
}