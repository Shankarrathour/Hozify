import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  IndianRupee,
  TrendingUp,
  Wallet,
  Receipt,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹8.42Cr",
    icon: IndianRupee,
  },
  {
    title: "Monthly Revenue",
    value: "₹1.24Cr",
    icon: TrendingUp,
  },
  {
    title: "Settlements",
    value: "₹92.8L",
    icon: Wallet,
  },
  {
    title: "Profit Margin",
    value: "28%",
    icon: Receipt,
  },
];

export default function PartnerRevenue() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search Revenue..."
    >
      <div className="min-h-screen bg-slate-50 p-6 space-y-6">

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            REVENUE ANALYTICS
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Partner Revenue 
          </h1>

          <p className="mt-3 text-slate-500 max-w-2xl">
            Monitor partner earnings, settlements,
            commissions and overall revenue performance.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Icon
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <span className="text-green-600 text-sm font-semibold">
                    +12%
                  </span>
                </div>

                <p className="mt-5 text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Revenue Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Subscriptions",
              amount: "₹3.24Cr",
              color: "bg-blue-500",
            },
            {
              title: "Service Revenue",
              amount: "₹2.18Cr",
              color: "bg-cyan-500",
            },
            {
              title: "Commission",
              amount: "₹1.84Cr",
              color: "bg-indigo-500",
            },
            {
              title: "Other Revenue",
              amount: "₹1.16Cr",
              color: "bg-violet-500",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
            >
              <div className={`h-2 w-full rounded-full ${item.color}`} />

              <p className="mt-5 text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {item.amount}
              </h3>

              <span className="text-green-600 text-sm font-semibold">
                +12%
              </span>
            </div>
          ))}
        </div>

        {/* Revenue Distribution */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Distribution Chart */}
          <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Revenue Distribution
            </h2>

            <p className="text-slate-500 mt-2">
              Revenue contribution by source
            </p>

            <div className="mt-8 space-y-6">
              {[
                ["Subscriptions", "38%"],
                ["Services", "26%"],
                ["Commission", "22%"],
                ["Other Revenue", "14%"],
              ].map(([name, value]) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">
                      {name}
                    </span>

                    <span className="font-semibold text-blue-600">
                      {value}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600 uppercase">
              Top Source
            </p>

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              Subscription Plans
            </h3>

            <p className="mt-3 text-slate-500">
              Highest revenue generating source across all active partners.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Revenue</span>
                <span className="font-semibold">₹3.24Cr</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Contribution</span>
                <span className="font-semibold">38%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Growth</span>
                <span className="font-semibold text-green-600">+12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Earning Partners */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Top Earning Partners
            </h2>

            <p className="mt-2 text-slate-500">
              Highest performing partners this month
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm text-slate-600">
                  <th className="px-6 py-4">Partner</th>
                  <th>Category</th>
                  <th>Revenue</th>
                  <th>Growth</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    name: "Apex Digital",
                    category: "Enterprise",
                    revenue: "₹24.8L",
                    growth: "+18%",
                    status: "Top Performer",
                  },
                  {
                    name: "Urban Connect",
                    category: "Retail",
                    revenue: "₹18.2L",
                    growth: "+12%",
                    status: "Growing",
                  },
                  {
                    name: "Prime Hub",
                    category: "Corporate",
                    revenue: "₹15.4L",
                    growth: "+8%",
                    status: "Stable",
                  },
                  {
                    name: "Elite Group",
                    category: "Enterprise",
                    revenue: "₹12.6L",
                    growth: "+5%",
                    status: "Stable",
                  },
                ].map((partner, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-xl bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                          {partner.name.charAt(0)}
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-slate-500">
                            ID #{1001 + index}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td>{partner.category}</td>

                    <td className="font-semibold text-slate-900">
                      {partner.revenue}
                    </td>

                    <td className="text-green-600 font-semibold">
                      {partner.growth}
                    </td>

                    <td>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                        {partner.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
        </div>

        {/* Revenue Leaderboard */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Revenue Leaderboard
            </h2>

            <p className="mt-2 text-slate-500">
              Ranking by monthly revenue
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["Apex Digital", "₹24.8L"],
                ["Urban Connect", "₹18.2L"],
                ["Prime Hub", "₹15.4L"],
                ["Elite Group", "₹12.6L"],
                ["Smart Connect", "₹10.8L"],
              ].map(([name, amount], index) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-5 rounded-2xl bg-slate-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      #{index + 1}
                    </div>

                    <span className="font-semibold text-slate-900">
                      {name}
                    </span>
                  </div>

                  <span className="font-bold text-blue-600 text-lg">
                    {amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Health Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
            <p className="uppercase text-sm tracking-wider opacity-80">
              Revenue Health
            </p>

            <h2 className="mt-4 text-6xl font-bold">
              94%
            </h2>

            <p className="mt-4 text-blue-100">
              Strong earnings performance across all active partners.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span>Active Partners</span>
                <span>1,284</span>
              </div>

              <div className="flex justify-between">
                <span>Avg Revenue</span>
                <span>₹6.4L</span>
              </div>

              <div className="flex justify-between">
                <span>Growth Rate</span>
                <span>+18%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Revenue Trend */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Monthly Revenue Trend
              </h2>

              <p className="mt-2 text-slate-500">
                Revenue growth throughout the year
              </p>
            </div>

            <span className="px-4 py-2 rounded-xl bg-green-100 text-green-700 font-semibold">
              +18%
            </span>
          </div>

          <div className="mt-10">
            <div className="flex items-end gap-3 h-64">
              {[60, 90, 80, 120, 140, 170, 150, 190, 210, 230, 250, 280].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-500 to-cyan-400"
                    style={{ height: `${height}px` }}
                  />
                )
              )}
            </div>

            <div className="mt-4 flex justify-between text-sm text-slate-500">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* Settlement Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
            <p className="uppercase text-sm tracking-wider opacity-80">
              Settlement Overview
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              ₹92.8L
            </h2>

            <p className="mt-3 text-blue-100">
              Total settlements processed this month.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span>Successful</span>
                <span>₹84.6L</span>
              </div>

              <div className="flex justify-between">
                <span>Pending</span>
                <span>₹6.2L</span>
              </div>

              <div className="flex justify-between">
                <span>Failed</span>
                <span>₹2.0L</span>
              </div>
            </div>
          </div>

          {/* Revenue Channels */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Revenue Channels
            </h3>

            <div className="mt-8 space-y-6">
              {[
                ["Subscription Plans", "38%"],
                ["Partner Services", "26%"],
                ["Commission Revenue", "22%"],
                ["Other Revenue", "14%"],
              ].map(([title, value]) => (
                <div key={title}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">
                      {title}
                    </span>

                    <span className="font-semibold text-blue-600">
                      {value}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">
              Fastest Growing Partner
            </h3>

            <p className="mt-4 text-3xl font-bold text-blue-600">
              Apex Digital
            </p>

            <p className="mt-3 text-slate-500">
              Achieved 28% growth this quarter.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">
              Highest Settlement
            </h3>

            <p className="mt-4 text-3xl font-bold text-green-600">
              ₹24.8L
            </p>

            <p className="mt-3 text-slate-500">
              Largest settlement processed this month.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">
              Revenue Forecast
            </h3>

            <p className="mt-4 text-3xl font-bold text-indigo-600">
              ₹9.6Cr
            </p>

            <p className="mt-3 text-slate-500">
              Estimated next quarter revenue.
            </p>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}