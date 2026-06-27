import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function RevenueOverview() {
  const branches = [
    {
      name: "Singapore - Regional Hub",
      revenue: "$1.24M",
      width: "100%",
    },
    {
      name: "London - European HQ",
      revenue: "$980K",
      width: "80%",
    },
    {
      name: "New York - North America",
      revenue: "$825K",
      width: "70%",
    },
    {
      name: "Dubai - MENA Logistics",
      revenue: "$610K",
      width: "55%",
    },
    {
      name: "Tokyo - Asia Pacific",
      revenue: "$485K",
      width: "45%",
    },
  ];

  return (
    <AdminShell
      activeTab="Revenue"
      searchPlaceholder="Search revenue metrics..."
    >
      <div className="space-y-6">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Revenue Overview
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Real-time breakdown of organizational revenue streams and segments
            </p>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg text-sm">
              Monthly
            </button>

            <button className="px-4 py-2 border rounded-lg text-sm">
              Quarterly
            </button>

            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
              Yearly
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-slate-500">
              Total Gross Revenue
            </p>

            <h3 className="text-3xl font-bold mt-2">
              $4.28M
            </h3>

            <p className="text-green-600 text-sm mt-2">
              +12.5% vs last month
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-slate-500">
              Avg Monthly ARPU
            </p>

            <h3 className="text-3xl font-bold mt-2">
              $842
            </h3>

            <p className="text-green-600 text-sm mt-2">
              +3.2% growth
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-slate-500">
              Active Branches
            </p>

            <h3 className="text-3xl font-bold mt-2">
              42
            </h3>

            <p className="text-slate-500 text-sm mt-2">
              2 Pending Activation
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-slate-500">
              Partner Churn
            </p>

            <h3 className="text-3xl font-bold mt-2">
              1.8%
            </h3>

            <p className="text-red-500 text-sm mt-2">
              +0.4% increase
            </p>
          </div>
        </div>

        {/* Revenue Segment + Branches */}
        <div className="grid grid-cols-2 gap-6">

          {/* Segment */}
          <div className="bg-white border rounded-xl p-6">

            <h3 className="font-semibold text-lg mb-6">
              Revenue by Segment
            </h3>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Partners</span>
                  <span>45%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 bg-indigo-600 rounded-full w-[45%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Sellers</span>
                  <span>35%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 bg-purple-500 rounded-full w-[35%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Services</span>
                  <span>20%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 bg-cyan-500 rounded-full w-[20%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Branch Revenue */}
          <div className="bg-white border rounded-xl p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">
                Top Revenue Generating Branches
              </h3>

              <button className="text-indigo-600 text-sm">
                View All
              </button>
            </div>

            <div className="space-y-5">
              {branches.map((branch, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{branch.name}</span>
                    <span>{branch.revenue}</span>
                  </div>

                  <div className="h-2 bg-slate-100 rounded-full">
                    <div
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{ width: branch.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ARPU Trend */}
        <div className="bg-white border rounded-xl p-6">

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">
              Average Revenue Per User (ARPU) Trend
            </h3>

            <span className="text-sm text-slate-500">
              Last 12 Months
            </span>
          </div>

          <div className="h-64 flex items-end gap-6">

            {[40, 45, 52, 68, 60, 78].map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className="w-full bg-indigo-600 rounded-t-lg"
                  style={{ height: `${item * 2}px` }}
                />

                <span className="text-xs mt-2 text-slate-500">
                  {["May","Jun","Jul","Aug","Sep","Oct"][index]}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </AdminShell>
  );
}