import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

const heatmapData = [
  [1, 3, 4, 5, 2, 1, 0],
  [2, 4, 5, 5, 3, 2, 1],
  [3, 5, 5, 4, 3, 2, 1],
  [2, 4, 5, 5, 4, 3, 2],
  [1, 2, 3, 4, 3, 2, 1],
];

const serviceBreakdown = [
  {
    title: "Seller Solutions",
    revenue: "$482,000",
    growth: "+12.4%",
  },
  {
    title: "Partner Services",
    revenue: "$315,200",
    growth: "+8.6%",
  },
  {
    title: "Marketplace Fees",
    revenue: "$288,400",
    growth: "+11.8%",
  },
  {
    title: "Advertising",
    revenue: "$162,900",
    growth: "+5.2%",
  },
];

const clusterData = [
  {
    date: "Oct 24, 2023",
    type: "Enterprise SaaS Upgrade",
    volume: "$18,500",
    revenue: "$52,000",
  },
  {
    date: "Oct 19, 2023",
    type: "API Renewal Service",
    volume: "$11,200",
    revenue: "$34,500",
  },
  {
    date: "Oct 12, 2023",
    type: "Marketplace Pack Sale",
    volume: "$9,400",
    revenue: "$28,800",
  },
  {
    date: "Oct 08, 2023",
    type: "Partner Subscription",
    volume: "$8,100",
    revenue: "$21,400",
  },
  {
    date: "Oct 03, 2023",
    type: "Seller Premium Package",
    volume: "$6,900",
    revenue: "$18,600",
  },
];

const getHeatmapColor = (value) => {
  switch (value) {
    case 5:
      return "bg-indigo-700";
    case 4:
      return "bg-indigo-600";
    case 3:
      return "bg-indigo-500";
    case 2:
      return "bg-indigo-300";
    case 1:
      return "bg-indigo-200";
    default:
      return "bg-slate-100";
  }
};

export default function MonthlyRevenue() {
  return (
    <AdminShell
      activeTab="Revenue"
      searchPlaceholder="Search monthly revenue..."
    >
      <div className="space-y-6">

        {/* Header */}

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Monthly Revenue Overview
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Real-time performance tracking for October 2023
            </p>
          </div>

          <div className="bg-white border rounded-lg px-4 py-2 text-sm text-slate-600">
            USD ($)
          </div>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-5 bg-white border rounded-xl p-5">
            <p className="text-xs text-slate-500 uppercase">
              Total Revenue
            </p>

            <h2 className="text-4xl font-bold text-indigo-700 mt-3">
              $1,248,500
            </h2>

            <p className="text-green-600 text-sm mt-3">
              +18.4% vs Last Month
            </p>
          </div>

          <div className="col-span-3 bg-white border rounded-xl p-5">
            <p className="text-xs text-slate-500 uppercase">
              Avg Net Position
            </p>

            <h2 className="text-3xl font-bold mt-3">
              $1,850,000
            </h2>

            <p className="text-xs text-slate-500 mt-2">
              On track to exceed target by 3.2%
            </p>
          </div>

          <div className="col-span-4 bg-white border rounded-xl p-5">
            <p className="text-xs text-slate-500 uppercase">
              Target Progress
            </p>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>92% Achieved</span>
                <span>Goal</span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div className="h-3 w-[92%] bg-indigo-600 rounded-full"></div>
              </div>

              <p className="text-xs text-slate-500 mt-3">
                7 days remaining in cycle
              </p>
            </div>
          </div>

        </div>

        {/* Revenue Density Heatmap */}

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
                className={`h-16 rounded-lg flex items-center justify-center text-xs text-white ${getHeatmapColor(
                  value
                )}`}
              >
                {index + 1}
              </div>
            ))}

          </div>

        </div>

        {/* Service Breakdown */}

        <div className="grid grid-cols-4 gap-4">

          {serviceBreakdown.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5"
            >
              <p className="text-xs text-slate-500">
                {service.title}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {service.revenue}
              </h3>

              <p className="text-green-600 text-sm mt-2">
                {service.growth}
              </p>
            </div>
          ))}

        </div>

        {/* Daily Revenue Clusters */}

        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="flex justify-between items-center p-5 border-b">

            <h3 className="font-semibold">
              Daily Revenue Clusters
            </h3>

            <button className="text-indigo-600 text-sm">
              View All Data
            </button>

          </div>

          <table className="w-full">

            <thead>
              <tr className="bg-slate-50 text-left text-sm">
                <th className="p-4">Date</th>
                <th>Revenue Type</th>
                <th>Cost Cluster</th>
                <th>Volume</th>
                <th>Revenue</th>
              </tr>
            </thead>

            <tbody>

              {clusterData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4">{item.date}</td>
                  <td>{item.type}</td>
                  <td>Enterprise</td>
                  <td>{item.volume}</td>
                  <td className="font-semibold text-indigo-700">
                    {item.revenue}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Insight */}

        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-semibold text-indigo-700">
            Monthly Revenue Insight
          </h3>

          <p className="text-slate-600 mt-3 leading-7">
            Revenue performance remains strong throughout the
            month with peak activity concentrated in enterprise
            subscriptions and marketplace fee collections.
            Target achievement is currently at 92%, indicating
            a strong possibility of exceeding monthly goals
            before cycle completion.
          </p>

        </div>

      </div>
    </AdminShell>
  );
}