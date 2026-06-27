import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

const topPartners = [
  {
    name: "TechNova Solutions",
    revenue: "$482,500",
    projects: 84,
    growth: "+18%",
  },
  {
    name: "Global Ventures",
    revenue: "$395,200",
    projects: 67,
    growth: "+14%",
  },
  {
    name: "Prime Networks",
    revenue: "$328,900",
    projects: 58,
    growth: "+11%",
  },
  {
    name: "Elite Systems",
    revenue: "$274,400",
    projects: 46,
    growth: "+9%",
  },
];

const partnerTypes = [
  {
    type: "Enterprise Partners",
    percentage: "45%",
    width: "45%",
  },
  {
    type: "Technology Partners",
    percentage: "28%",
    width: "28%",
  },
  {
    type: "Service Partners",
    percentage: "17%",
    width: "17%",
  },
  {
    type: "Affiliate Partners",
    percentage: "10%",
    width: "10%",
  },
];

export default function PartnerRevenue() {
  return (
    <AdminShell
      activeTab="Revenue"
      searchPlaceholder="Search partner revenue..."
    >
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-blue-800">
            Partner Revenue
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Revenue generated through strategic business partners
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-12 gap-5">

          <div className="col-span-5 bg-indigo-700 text-white rounded-xl p-6">
            <p className="text-xs uppercase opacity-80">
              Total Partner Revenue
            </p>

            <h2 className="text-5xl font-bold mt-3">
              $3.48M
            </h2>

            <p className="mt-4 text-sm opacity-90">
              +16.8% compared to last quarter
            </p>
          </div>

          <div className="col-span-3 bg-white border rounded-xl p-6">
            <p className="text-xs uppercase text-slate-400">
              Active Partners
            </p>

            <h2 className="text-4xl font-bold mt-3">
              248
            </h2>

            <p className="text-green-600 text-sm mt-3">
              +24 New Partners
            </p>
          </div>

          <div className="col-span-4 bg-white border rounded-xl p-6">
            <p className="text-xs uppercase text-slate-400">
              Avg Revenue Per Partner
            </p>

            <h2 className="text-4xl font-bold mt-3">
              $14K
            </h2>

            <p className="text-slate-500 text-sm mt-3">
              Monthly Average
            </p>
          </div>

        </div>

        {/* Performance (NEW REPLACEMENT SECTION) */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg">
                Partner Performance
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Overall performance overview
              </p>
            </div>

            <span className="text-blue-600 font-semibold">
              Stable Growth
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">

            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-slate-500">Efficiency</p>
              <h2 className="text-2xl font-bold text-blue-700 mt-1">
                87%
              </h2>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-slate-500">Engagement</p>
              <h2 className="text-2xl font-bold text-blue-700 mt-1">
                72%
              </h2>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-slate-500">Retention</p>
              <h2 className="text-2xl font-bold text-blue-700 mt-1">
                91%
              </h2>
            </div>

          </div>
        </div>

        {/* Distribution + Top Partners */}
        <div className="grid grid-cols-12 gap-5">

          {/* Partner Types */}
          <div className="col-span-4 bg-white border rounded-xl p-6">

            <h3 className="font-semibold mb-6">
              Revenue Distribution
            </h3>

            <div className="space-y-5">

              {partnerTypes.map((item, index) => (
                <div key={index}>

                  <div className="flex justify-between mb-2">
                    <span className="text-sm">
                      {item.type}
                    </span>

                    <span className="font-medium">
                      {item.percentage}
                    </span>
                  </div>

                  <div className="h-2 bg-slate-100 rounded-full">

                    <div
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{
                        width: item.width,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Top Partners */}
          <div className="col-span-8 bg-white border rounded-xl overflow-hidden">

            <div className="p-5 border-b">

              <h3 className="font-semibold">
                Top Revenue Partners
              </h3>

            </div>

            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="p-4">Partner</th>
                  <th>Revenue</th>
                  <th>Projects</th>
                  <th>Growth</th>
                </tr>
              </thead>

              <tbody>

                {topPartners.map((partner, index) => (
                  <tr key={index} className="border-t">

                    <td className="p-4 font-medium">
                      {partner.name}
                    </td>

                    <td>{partner.revenue}</td>

                    <td>{partner.projects}</td>

                    <td>
                      <span className="text-green-600 font-medium">
                        {partner.growth}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table></div>

          </div>

        </div>

        {/* Insight */}
        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-semibold text-indigo-700">
            Partner Revenue Insight
          </h3>

          <p className="text-slate-600 mt-3 leading-7">
            Partner-driven revenue contributed significantly
            to overall business growth this quarter.
            Enterprise Partners generated the highest share
            of revenue, while Technology Partners recorded
            the fastest growth. Strategic collaborations
            continue to strengthen revenue stability and
            long-term profitability.
          </p>

        </div>

      </div>
    </AdminShell>
  );
}