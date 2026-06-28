import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

const quarterlyRevenue = [
  { quarter: "Q1", revenue: "$2.4M", growth: "+8.2%" },
  { quarter: "Q2", revenue: "$2.8M", growth: "+12.5%" },
  { quarter: "Q3", revenue: "$3.1M", growth: "+14.1%" },
  { quarter: "Q4", revenue: "$3.6M", growth: "+18.4%" },
];

const contributors = [
  { name: "Enterprise Services", revenue: "$4.8M" },
  { name: "Partner Solutions", revenue: "$3.2M" },
  { name: "Seller Revenue", revenue: "$2.7M" },
  { name: "Advertising", revenue: "$1.4M" },
];

// Interactive data for the chart hover
const chartDataPoints = [
  { year: "2020", revenue: "$6.2M", growth: "Base Year", cx: 40, cy: 240 },
  { year: "2021", revenue: "$7.8M", growth: "+25.8%", cx: 260, cy: 180 },
  { year: "2022", revenue: "$9.1M", growth: "+16.6%", cx: 470, cy: 130 },
  { year: "2023", revenue: "$10.2M", growth: "+12.0%", cx: 720, cy: 90 },
  { year: "2024", revenue: "$12.1M", growth: "+18.4%", cx: 960, cy: 40 },
];

export default function YearlyRevenue() {
  // State for Contributors Toggle
  const [showAllContributors, setShowAllContributors] = useState(false);
  
  // State for Chart Hover Tooltip
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const visibleContributors = showAllContributors ? contributors : contributors.slice(0, 2);

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search yearly revenue...">
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Yearly Revenue
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Enterprise revenue performance and yearly growth analysis
          </p>
        </div>

        {/* Top Cards (Height/Width Optimized & Indigo Background Removed) */}
        <div className="grid grid-cols-12 gap-4">

          {/* Card 1 - Normalized to White Grid */}
          <div className="col-span-6 bg-white border rounded-xl p-4 flex flex-col justify-between min-h-[105px]">
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              Total Revenue
            </p>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              $12.1M
            </h2>
            <p className="text-xs text-slate-500">
              Generated during fiscal year 2024
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-span-3 bg-white border rounded-xl p-4 flex flex-col justify-between min-h-[105px]">
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              Growth Rate
            </p>
            <h2 className="text-2xl font-bold text-green-600 leading-tight">
              +18.4%
            </h2>
            <p className="text-xs text-slate-500">
              YoY Growth
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-span-3 bg-white border rounded-xl p-4 flex flex-col justify-between min-h-[105px]">
            <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              <span>Target Achievement</span>
              <span className="text-indigo-600 font-bold">96%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full my-1.5">
              <div className="bg-indigo-600 h-2 rounded-full w-[96%]" />
            </div>
            <p className="text-xs text-slate-500">
              $12.1M / $12.6M
            </p>
          </div>

        </div>

        {/* Revenue Trend Analysis with Dynamic Range Hover */}
        <div className="bg-white border rounded-xl p-6 relative">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-base text-slate-800">
                Revenue Trend Analysis
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Fiscal year growth overview (Hover nodes for data range)
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                Revenue Growth
              </p>
              <h3 className="text-2xl font-bold text-indigo-700">
                +18.4%
              </h3>
            </div>
          </div>

          {/* Chart Wrapper Container */}
          <div className="relative h-64 bg-slate-50 rounded-xl border overflow-hidden">
            
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
              <div className="border-t border-slate-200/60"></div>
              <div className="border-t border-slate-200/60"></div>
              <div className="border-t border-slate-200/60"></div>
              <div className="border-t border-slate-200/60"></div>
            </div>

            {/* SVG Graph */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="yearlyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area Path */}
              <path
                d="M 40 240 C 140 220, 180 170, 260 180 C 340 190, 380 120, 470 130 C 560 140, 620 80, 720 90 C 820 100, 880 50, 960 40 L 960 300 L 40 300 Z"
                fill="url(#yearlyGradient)"
              />

              {/* Line Path */}
              <path
                d="M 40 240 C 140 220, 180 170, 260 180 C 340 190, 380 120, 470 130 C 560 140, 620 80, 720 90 C 820 100, 880 50, 960 40"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="4"
              />

              {/* Data Points / Circles */}
              {chartDataPoints.map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.cx}
                  cy={pt.cy}
                  r={hoveredPoint?.year === pt.year ? "8" : "5"}
                  fill={hoveredPoint?.year === pt.year ? "#312E81" : "#4F46E5"}
                  className="transition-all duration-150"
                />
              ))}
            </svg>

            {/* Invisible Hover Hitboxes to trigger tooltips accurately */}
            <div className="absolute inset-0 flex justify-between px-2">
              {chartDataPoints.map((pt, i) => (
                <div
                  key={i}
                  className="w-[18%] h-full cursor-pointer z-10"
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              ))}
            </div>

            {/* Floating Range Tooltip UI */}
            {hoveredPoint && (
              <div 
                className="absolute bg-slate-900 text-white rounded-lg p-2.5 shadow-xl border border-slate-700 pointer-events-none z-20 transition-all duration-100 text-xs"
                style={{
                  left: `${(hoveredPoint.cx / 1000) * 92 + 2}%`,
                  top: `${(hoveredPoint.cy / 300) * 55}%`,
                }}
              >
                <div className="font-bold border-b border-slate-700 pb-1 mb-1 text-indigo-300">
                  Fiscal Year {hoveredPoint.year}
                </div>
                <div>Revenue: <span className="font-semibold text-white">{hoveredPoint.revenue}</span></div>
                <div>Growth: <span className="font-semibold text-green-400">{hoveredPoint.growth}</span></div>
              </div>
            )}

          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-between text-xs font-medium text-slate-400 mt-3 px-3">
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
          </div>
        </div>

        {/* Quarterly Revenue Cards (Sized Small & Compact) */}
        <div className="grid grid-cols-4 gap-4">
          {quarterlyRevenue.map((item, index) => (
            <div key={index} className="bg-white border rounded-xl p-3.5 flex flex-col justify-between min-h-[85px]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-slate-400 uppercase">{item.quarter}</span>
                <span className="bg-green-50 text-green-600 text-[11px] font-medium px-2 py-0.5 rounded-full">
                  {item.growth}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-2">
                {item.revenue}
              </h3>
            </div>
          ))}
        </div>

        {/* Contributors Section (With Working Clickable View All/Less Button) */}
        <div className="bg-white border rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-sm text-slate-800">
              Top Revenue Contributors
            </h3>
            
            {/* Functional Toggle Button */}
            <button 
              onClick={() => setShowAllContributors(!showAllContributors)}
              className="text-indigo-600 text-xs font-semibold hover:text-indigo-800 transition"
            >
              {showAllContributors ? "View Less" : "View All"}
            </button>
          </div>

          <div className="space-y-3">
            {visibleContributors.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition duration-150"
              >
                <div>
                  <h4 className="text-xs font-semibold text-slate-700">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Revenue Contribution
                  </p>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50/60 px-2.5 py-1 rounded-lg">
                  {item.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Insight */}
        <div className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold text-xs text-indigo-700 uppercase tracking-wider">
            Executive Revenue Insight
          </h3>
          <p className="text-slate-600 mt-2 text-xs leading-5">
            Annual revenue reached $12.1M with a growth rate of 18.4% compared to the previous fiscal year.
            Enterprise Services remained the strongest contributor, while Partner Solutions recorded the
            highest growth momentum. Current trends indicate continued revenue expansion across all major business units.
          </p>
        </div>

      </div>
    </AdminShell>
  );
}