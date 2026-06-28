import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

const heatmapData = [
  [1, 3, 4, 5, 2, 1, 0],
  [2, 4, 5, 5, 3, 2, 1],
  [3, 5, 5, 4, 3, 2, 1],
  [2, 4, 5, 5, 4, 3, 2],
  [1, 2, 3, 4, 3, 2, 1],
];

const serviceBreakdown = [
  { title: "Seller Solutions", revenue: "$482,000", growth: "+12.4%" },
  { title: "Partner Services", revenue: "$315,200", growth: "+8.6%" },
  { title: "Marketplace Fees", revenue: "$288,400", growth: "+11.8%" },
  { title: "Advertising", revenue: "$162,900", growth: "+5.2%" },
];

const clusterData = [
  { date: "Oct 24, 2023", type: "Enterprise SaaS Upgrade", volume: "$18,500", revenue: "$52,000" },
  { date: "Oct 19, 2023", type: "API Renewal Service", volume: "$11,200", revenue: "$34,500" },
  { date: "Oct 12, 2023", type: "Marketplace Pack Sale", volume: "$9,400", revenue: "$28,800" },
  { date: "Oct 08, 2023", type: "Partner Subscription", volume: "$8,100", revenue: "$21,400" },
  { date: "Oct 03, 2023", type: "Seller Premium Package", volume: "$6,900", revenue: "$18,600" },
];

const getHeatmapColor = (value) => {
  switch (value) {
    case 5: return "bg-indigo-700";
    case 4: return "bg-indigo-600";
    case 3: return "bg-indigo-500";
    case 2: return "bg-indigo-300";
    case 1: return "bg-indigo-200";
    default: return "bg-slate-100 text-slate-400";
  }
};

export default function MonthlyRevenue() {
  // State to control table row visibility
  const [showAllData, setShowAllData] = useState(false);

  // Filter or show all data based on state
  const visibleClusterData = showAllData ? clusterData : clusterData.slice(0, 3);

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search monthly revenue...">
      <div className="space-y-6">

        {/* Header (USD Box Completely Removed) */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Monthly Revenue Overview
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Real-time performance tracking for October 2023
            </p>
          </div>
        </div>

        {/* KPI Cards (Optimized Width/Grid & Padding for smaller height) */}
        <div className="grid grid-cols-12 gap-4">

          {/* Card 1 */}
          <div className="col-span-4 bg-white border rounded-xl p-3.5 flex flex-col justify-between min-h-[110px]">
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Total Revenue
            </p>
            <h2 className="text-2xl font-bold text-indigo-700 leading-tight">
              $1,248,500
            </h2>
            <p className="text-green-600 text-xs font-medium">
              +18.4% vs Last Month
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-span-4 bg-white border rounded-xl p-3.5 flex flex-col justify-between min-h-[110px]">
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Avg Net Position
            </p>
            <h2 className="text-2xl font-bold text-slate-800 leading-tight">
              $1,850,000
            </h2>
            <p className="text-[11px] text-slate-400 truncate">
              On track to exceed target by 3.2%
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-span-4 bg-white border rounded-xl p-3.5 flex flex-col justify-between min-h-[110px]">
            <div className="flex justify-between items-center text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              <span>Target Progress</span>
              <span className="text-indigo-600 normal-case font-bold">92% Achieved</span>
            </div>
            
            <div className="w-full bg-slate-100 h-2 rounded-full my-2">
              <div className="bg-indigo-600 h-2 rounded-full w-[92%]" />
            </div>

            <p className="text-[11px] text-slate-400">
              7 days remaining in cycle
            </p>
          </div>

        </div>

        {/* Revenue Density Heatmap (Added Interactivity & Hover State) */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex justify-between mb-6">
            <h3 className="font-semibold text-slate-900">
              Revenue Density Heatmap
            </h3>
            <div className="text-xs text-slate-500">
              Low → High
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {heatmapData.flat().map((value, index) => (
              <div
                key={index}
                className={`group relative h-14 rounded-lg flex items-center justify-center text-xs font-medium text-white transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 hover:shadow-md ${getHeatmapColor(value)}`}
              >
                {/* Regular Cell Content */}
                <span>{index + 1}</span>

                {/* Tooltip / Hover Data Box */}
                <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-10 animate-fade-in">
                  <div className="bg-slate-900 text-white text-[10px] rounded px-2 py-1 whitespace-nowrap shadow-xl">
                    Day {index + 1}: <span className="font-bold text-indigo-300">Level {value}</span> Density
                  </div>
                  <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Breakdown */}
        <div className="grid grid-cols-4 gap-4">
          {serviceBreakdown.map((service, index) => (
            <div key={index} className="bg-white border rounded-xl p-4">
              <p className="text-xs text-slate-500">{service.title}</p>
              <h3 className="text-xl font-bold mt-1 text-slate-800">{service.revenue}</h3>
              <p className="text-green-600 text-xs font-medium mt-1">{service.growth}</p>
            </div>
          ))}
        </div>

        {/* Daily Revenue Clusters */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b">
            <h3 className="font-semibold text-slate-800">
              Daily Revenue Clusters
            </h3>
            {/* View All Details Functionality Trigger */}
            <button 
              onClick={() => setShowAllData(!showAllData)} 
              className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition"
            >
              {showAllData ? "Show Less" : "View All Data"}
            </button>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 text-left text-sm text-slate-500 border-b">
                  <th className="p-4 font-medium">Date</th>
                  <th className="font-medium">Revenue Type</th>
                  <th className="font-medium">Cost Cluster</th>
                  <th className="font-medium">Volume</th>
                  <th className="font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {visibleClusterData.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-slate-50 transition">
                    <td className="p-4 text-sm text-slate-600">{item.date}</td>
                    <td className="text-sm text-slate-700">{item.type}</td>
                    <td className="text-sm text-slate-500">Enterprise</td>
                    <td className="text-sm text-slate-600">{item.volume}</td>
                    <td className="font-semibold text-indigo-700 text-sm">{item.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insight */}
        <div className="bg-white border rounded-xl p-6">
          <h3 className="font-semibold text-indigo-700">
            Monthly Revenue Insight
          </h3>
          <p className="text-slate-600 mt-2 text-sm leading-6">
            Revenue performance remains strong throughout the month with peak activity concentrated in enterprise
            subscriptions and marketplace fee collections. Target achievement is currently at 92%, indicating
            a strong possibility of exceeding monthly goals before cycle completion.
          </p>
        </div>

      </div>
    </AdminShell>
  );
}