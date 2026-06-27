import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

const hourlyData = [
  60, 45, 30, 20, 65, 90, 95, 70, 82, 100, 85, 75,
  65, 40, 25,
];

const transactions = [
  {
    id: "#TXN-98421",
    entity: "Global Logistics Corp",
    service: "Infrastructure Audit",
    time: "11:22 PM",
    amount: "$12,450",
  },
  {
    id: "#TXN-98418",
    entity: "DataStream Services",
    service: "SaaS Subscription",
    time: "10:15 PM",
    amount: "$8,200",
  },
  {
    id: "#TXN-98415",
    entity: "Vertex Partners",
    service: "Cloud Hosting",
    time: "9:15 PM",
    amount: "$7,800",
  },
  {
    id: "#TXN-98412",
    entity: "Blue Wave Retail",
    service: "Digital Strategy",
    time: "8:02 PM",
    amount: "$6,900",
  },
  {
    id: "#TXN-98410",
    entity: "Swift Horizon LLC",
    service: "Compliance Review",
    time: "7:30 PM",
    amount: "$5,100",
  },
];

export default function DailyRevenue() {
  return (
    <AdminShell
      activeTab="Revenue"
      searchPlaceholder="Search revenue metrics..."
    >
      <div className="space-y-6">

        {/* Header */}

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Daily Revenue
          </h1>

          <p className="text-sm text-slate-500">
            Real-time financial performance for today
          </p>
        </div>

        {/* Top Section */}

        <div className="grid grid-cols-12 gap-6">

          {/* Hourly Chart */}

          <div className="col-span-8 bg-white border rounded-xl p-5">

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">
                Hourly Revenue (24h)
              </h3>

              <div className="flex items-center gap-4 text-xs">
                <span className="text-indigo-600 font-medium">
                  ● Today
                </span>

                <span className="text-slate-400">
                  ● Yesterday
                </span>
              </div>
            </div>

            <div className="h-64 flex items-end gap-2">
              {hourlyData.map((value, index) => (
                <div
                  key={index}
                  className="flex-1 bg-indigo-700 rounded-t"
                  style={{
                    height: `${value * 1.5}px`,
                  }}
                />
              ))}
            </div>

            <div className="flex justify-between mt-3 text-xs text-slate-400">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>

          </div>

          {/* Right Cards */}

          <div className="col-span-4 space-y-4">

            <div className="bg-indigo-700 text-white rounded-xl p-5">

              <p className="text-xs uppercase opacity-80">
                Total Daily Revenue
              </p>

              <h2 className="text-4xl font-bold mt-2">
                $142,850
              </h2>

              <p className="text-sm mt-4 opacity-90">
                +12.5% vs yesterday
              </p>

              <p className="text-xs opacity-70 mt-1">
                $126,980 yesterday
              </p>

            </div>

            <div className="bg-white border rounded-xl p-5">

              <p className="text-xs uppercase text-slate-400">
                Top Service Segment
              </p>

              <h3 className="font-semibold mt-3">
                Enterprise Cloud Security
              </h3>

              <div className="flex justify-between items-center mt-4">
                <span className="text-3xl font-bold text-slate-900">
                  $54,200
                </span>

                <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
                  38% Share
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Transactions */}

        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">
              Top 10 Transactions (Today)
            </h3>

            <button className="text-indigo-600 text-sm">
              View Ledger
            </button>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

            <thead>
              <tr className="bg-slate-50 text-xs uppercase text-slate-500">
                <th className="p-4 text-left">
                  Transaction ID
                </th>
                <th className="text-left">Entity</th>
                <th className="text-left">Service Type</th>
                <th className="text-left">Time</th>
                <th className="text-left">Status</th>
                <th className="text-left">Amount</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 text-sm font-medium text-slate-700">
                    {item.id}
                  </td>

                  <td className="text-sm">
                    {item.entity}
                  </td>

                  <td className="text-sm">
                    {item.service}
                  </td>

                  <td className="text-sm">
                    {item.time}
                  </td>

                  <td>
                    <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
                      Completed
                    </span>
                  </td>

                  <td className="font-semibold text-sm">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>

          </table></div>

        </div>

      </div>
    </AdminShell>
  );
}