import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { ArrowUpRight, TrendingUp, Calendar, Building2, FileBarChart2, ChevronDown } from "lucide-react";

const weeklyData = [
  { day: "Mon", value: 65, amount: "$96,920" },
  { day: "Tue", value: 85, amount: "$126,740" },
  { day: "Wed", value: 72, amount: "$107,350" },
  { day: "Thu", value: 95, amount: "$141,600" },
  { day: "Fri", value: 110, amount: "$164,250" },
  { day: "Sat", value: 88, amount: "$131,200" },
  { day: "Sun", value: 55, amount: "$81,950" },
];

const branchData = [
  {
    branch: "North Region HQ",
    revenue: "$212,450",
    growth: "+12.4%",
    status: "Excellent"
  },
  {
    branch: "South Coastal Logistics",
    revenue: "$184,300",
    growth: "+9.2%",
    status: "Excellent"
  },
  {
    branch: "Central Business Hub",
    revenue: "$162,850",
    growth: "+7.8%",
    status: "Good"
  },
  {
    branch: "East Operations Center",
    revenue: "$138,420",
    growth: "+5.1%",
    status: "Good"
  },
];

export default function WeeklyRevenue() {
  // Timeframe states
  const [selectedTimeframe, setSelectedTimeframe] = useState("Current Week");
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);

  const timeframes = ["Current Week", "Previous Week", "Last 30 Days"];

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search weekly revenue...">
      <div className="space-y-5 max-w-7xl mx-auto">

        {/* Minimal Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <FileBarChart2 className="h-5 w-5 text-indigo-600" />
              Weekly Financial Analytics
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">Real-time revenue performance indicators and branch tracking.</p>
          </div>
          
          {/* Working Timeframe Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowTimeframeDropdown(!showTimeframeDropdown)}
              className="text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Calendar className="h-3.5 w-3.5 text-indigo-600" />
              <span>{selectedTimeframe}</span>
              <ChevronDown className="h-3 w-3 text-slate-400 transition-transform duration-200" style={{ transform: showTimeframeDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {showTimeframeDropdown && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                {timeframes.map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => {
                      setSelectedTimeframe(timeframe);
                      setShowTimeframeDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold block transition-colors ${
                      selectedTimeframe === timeframe 
                        ? "bg-indigo-50 text-indigo-700" 
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Slim & Compact KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Revenue Card */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Weekly Revenue</p>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                $842,910
              </h2>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-50 flex items-center justify-between text-xs">
              <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" /> +15.3%
              </span>
              <span className="text-slate-400 text-[11px] font-medium">Prev: $730,480</span>
            </div>
          </div>

          {/* Best Day Card */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Peak Performance Day</p>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                Friday
              </h3>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-50 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Peak Volume</span>
              <span className="font-bold text-slate-800">$164,250</span>
            </div>
          </div>

          {/* Avg Daily Card */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Average Daily Run-rate</p>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                $120,415
              </h3>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-50 flex items-center justify-between text-xs">
              <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                <TrendingUp className="h-3.5 w-3.5" /> Stable Growth
              </span>
              <span className="text-slate-500 font-semibold">+8.2%</span>
            </div>
          </div>

        </div>

        {/* Premium Area Trend Chart with fixed safe-zone Tooltip */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Revenue Momentum Curve
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Smooth trend vector displaying daily financial influx.</p>
            </div>
            <span className="text-[10px] font-extrabold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md">
              Live Data Flow
            </span>
          </div>

          {/* Added extra top padding pt-10 to prevent word hiding */}
          <div className="relative w-full h-48 bg-slate-50/50 rounded-xl border border-slate-100 overflow-hidden pt-10">
            
            <svg 
              viewBox="0 0 700 120" 
              className="absolute inset-0 w-full h-[75%] overflow-visible text-indigo-600 top-8"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <path
                d="M 0,120 L 0,55 Q 58,35 116,35 Q 174,48 232,48 Q 290,25 348,25 Q 406,10 464,10 Q 522,32 580,32 Q 638,65 700,65 L 700,120 Z"
                fill="url(#chartGradient)"
              />

              <path
                d="M 0,55 Q 58,35 116,35 Q 174,48 232,48 Q 290,25 348,25 Q 406,10 464,10 Q 522,32 580,32 Q 638,65 700,65"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Interactive Overlay & Safer Tooltip Position */}
            <div className="absolute inset-x-0 bottom-0 h-full flex justify-between px-4">
              {weeklyData.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between items-center h-full group relative flex-1 text-center">
                  
                  {/* Tooltip position shifted to safely sit on top without getting clipped */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md top-1 z-30 pointer-events-none whitespace-nowrap">
                    {item.amount}
                  </div>

                  {/* Dot Indicator */}
                  <div className="w-full flex justify-center h-full items-center relative">
                    <div className="w-2 h-2 rounded-full border-2 border-indigo-600 bg-white opacity-0 group-hover:opacity-100 shadow-md transition-opacity absolute" 
                         style={{ bottom: `${item.value - 15}%` }} />
                  </div>

                  {/* X-Axis Label */}
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-indigo-600 pb-2 transition-colors z-10">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Branch Performance Table */}
        <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50">
            <Building2 className="h-4 w-4 text-slate-400" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Weekly Growth % by Branch
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/40 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="p-3 pl-5">Branch Name</th>
                  <th className="p-3">Revenue</th>
                  <th className="p-3">Growth</th>
                  <th className="p-3 text-right pr-5">Performance</th>
                </tr>
              </thead>

              <tbody className="text-xs font-medium text-slate-700">
                {branchData.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                    <td className="p-3 pl-5 font-bold text-slate-800">{item.branch}</td>
                    <td className="p-3 text-slate-600">{item.revenue}</td>
                    <td className="p-3 text-emerald-600 font-bold">{item.growth}</td>
                    <td className="p-3 text-right pr-5">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${
                        item.status === "Excellent" 
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Professional Summary Insight Box */}
        <div className="bg-indigo-50/40 border border-indigo-100 rounded-xl p-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950 uppercase tracking-wider">
            <TrendingUp className="h-4 w-4 text-indigo-600" />
            <span>Executive Summary</span>
          </div>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
            Weekly revenue registered an upward shift of <span className="font-bold text-slate-900">15.3%</span> relative to the historical baseline. Friday volume operations generated optimal velocity, steering approximately 19% of the aggregate weekly yield. Outlying branch distribution metrics reveal <span className="font-bold text-slate-900">North Region HQ</span> remains the primary driver of corporate financial momentum.
          </p>
        </div>

      </div>
    </AdminShell>
  );
}