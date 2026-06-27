import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

const weeklyData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 85 },
  { day: "Wed", value: 72 },
  { day: "Thu", value: 95 },
  { day: "Fri", value: 110 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 55 },
];

const branchData = [
  {
    branch: "North Region HQ",
    revenue: "$212,450",
    growth: "+12.4%",
  },
  {
    branch: "South Coastal Logistics",
    revenue: "$184,300",
    growth: "+9.2%",
  },
  {
    branch: "Central Business Hub",
    revenue: "$162,850",
    growth: "+7.8%",
  },
  {
    branch: "East Operations Center",
    revenue: "$138,420",
    growth: "+5.1%",
  },
];

export default function WeeklyRevenue() {
  return (
    <AdminShell
      activeTab="Revenue"
      searchPlaceholder="Search weekly revenue..."
    >
      <div className="space-y-6">

        {/* Header */}

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Weekly Revenue
          </h1>

          <p className="text-sm text-slate-500">
            Detailed financial analysis for the current week
          </p>
        </div>

        {/* Top Cards */}

        <div className="grid grid-cols-12 gap-6">

          {/* Revenue Card */}

          <div className="col-span-4 bg-indigo-700 text-white rounded-xl p-6">

            <p className="text-xs uppercase opacity-80">
              Total Weekly Revenue
            </p>

            <h2 className="text-4xl font-bold mt-2">
              $842,910
            </h2>

            <p className="mt-4 text-sm opacity-90">
              +15.3% vs previous week
            </p>

            <p className="text-xs opacity-70 mt-1">
              Last week: $730,480
            </p>

          </div>

          {/* Best Day */}

          <div className="col-span-4 bg-white border rounded-xl p-6">

            <p className="text-xs uppercase text-slate-400">
              Best Performing Day
            </p>

            <h3 className="text-3xl font-bold mt-3">
              Friday
            </h3>

            <p className="text-slate-500 mt-2">
              Revenue Generated
            </p>

            <p className="text-xl font-semibold mt-1">
              $164,250
            </p>

          </div>

          {/* Avg Daily */}

          <div className="col-span-4 bg-white border rounded-xl p-6">

            <p className="text-xs uppercase text-slate-400">
              Average Daily Revenue
            </p>

            <h3 className="text-3xl font-bold mt-3">
              $120,415
            </h3>

            <p className="text-green-600 text-sm mt-3">
              +8.2% Growth
            </p>

          </div>

        </div>

        {/* Revenue By Day */}

        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-semibold mb-6">
            Revenue by Day of Week
          </h3>

          <div className="h-72 flex items-end gap-4">

            {weeklyData.map((item) => (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className="w-full bg-indigo-700 rounded-t-lg"
                  style={{
                    height: `${item.value * 2.2}px`,
                  }}
                />

                <span className="text-xs mt-3 text-slate-500">
                  {item.day}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Branch Performance */}

        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="p-4 border-b">
            <h3 className="font-semibold">
              Weekly Growth % by Branch
            </h3>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="p-4">Branch Name</th>
                <th>Revenue</th>
                <th>Growth</th>
                <th>Performance</th>
              </tr>
            </thead>

            <tbody>

              {branchData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {item.branch}
                  </td>

                  <td>{item.revenue}</td>

                  <td className="text-green-600 font-medium">
                    {item.growth}
                  </td>

                  <td>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                      Excellent
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table></div>

        </div>

        {/* Weekly Insight */}

        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-semibold text-indigo-600">
            Weekly Revenue Insight
          </h3>

          <p className="text-slate-600 mt-3 leading-7">
            Weekly revenue increased by 15.3% compared to the
            previous week. Friday generated the highest sales,
            contributing nearly 19% of total weekly revenue.
            North Region HQ remains the strongest performing
            branch this week.
          </p>

        </div>

      </div>
    </AdminShell>
  );
}