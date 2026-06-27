import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Filter,
  Download,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

const settlements = [
  {
    id: "#SET-94021",
    initials: "JD",
    name: "John Doe",
    email: "j.doe@example.com",
    amount: "$250.00",
    status: "PAID",
    method: "ACH Transfer",
    date: "Oct 24, 2023, 14:20",
  },
  {
    id: "#SET-94020",
    initials: "AS",
    name: "Alice Smith",
    email: "alice.s@design.co",
    amount: "$1,200.00",
    status: "PROCESSING",
    method: "Wire Transfer",
    date: "Oct 24, 2023, 11:45",
  },
  {
    id: "#SET-94019",
    initials: "BW",
    name: "Bob Williams",
    email: "bob.w@tech.org",
    amount: "$45.00",
    status: "FAILED",
    method: "PayPal",
    date: "Oct 23, 2023, 16:10",
  },
  {
    id: "#SET-94018",
    initials: "EK",
    name: "Emma Knight",
    email: "eknight@gmail.com",
    amount: "$500.00",
    status: "PAID",
    method: "ACH Transfer",
    date: "Oct 23, 2023, 09:30",
  },
  {
    id: "#SET-94017",
    initials: "MT",
    name: "Marcus Thorne",
    email: "m.thorne@corp.net",
    amount: "$125.00",
    status: "PAID",
    method: "PayPal",
    date: "Oct 22, 2023, 18:50",
  },
];
export default function RewardSettlementsPage() {
  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="min-h-screen bg-slate-100 p-4 md:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-black text-indigo-950">
              Reward Settlements
            </h1>

            <p className="text-slate-600 mt-1">
              Financial overview of all disbursed and pending reward distributions.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="bg-white border border-slate-300 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
              <Filter size={15} />
              Filter
            </button>

            <button className="bg-white border border-slate-300 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
              <Download size={15} />
              Export CSV
            </button>

          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Total Disbursed
            </p>

            <h3 className="text-4xl font-black text-indigo-950 mt-2">
              $128,450.00
            </h3>

            <p className="text-green-600 text-sm mt-2">
              ↗ +12.5% vs last month
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Pending Settlement
            </p>

            <h3 className="text-4xl font-black text-indigo-950 mt-2">
              $14,200.50
            </h3>

            <p className="text-slate-500 text-sm mt-2">
              142 individual payments
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Processing
            </p>

            <h3 className="text-4xl font-black text-indigo-950 mt-2">
              $5,120.00
            </h3>

            <p className="text-blue-600 text-sm mt-2">
              Awaiting bank confirmation
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Failed Rate
            </p>

            <h3 className="text-4xl font-black text-red-600 mt-2">
              0.42%
            </h3>

            <p className="text-slate-500 text-sm mt-2">
              6 transactions this week
            </p>
          </div>

        </div>
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8">

          <div className="flex justify-between items-center p-5 border-b border-slate-200">

            <h2 className="font-bold text-indigo-950">
              Transaction History
            </h2>

            <span className="text-sm text-slate-500">
              Showing 1-10 of 2,450 results
            </span>

          </div>

          <div className="overflow-x-auto">

            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full min-w-[1200px]">

              <thead className="bg-slate-100">
                <tr className="text-left text-xs uppercase text-slate-600">

                  <th className="p-4">Settlement ID</th>
                  <th className="p-4">Recipient</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Method</th>
                  <th className="p-4">Settlement Date</th>
                  <th className="p-4">Actions</th>

                </tr>
              </thead>

              <tbody>

                {settlements.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-200 hover:bg-slate-50"
                  >
                    <td className="p-4 font-semibold text-indigo-900">
                      {item.id}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
                          {item.initials}
                        </div>

                        <div>
                          <h4 className="font-semibold">
                            {item.name}
                          </h4>

                          <p className="text-xs text-slate-500">
                            {item.email}
                          </p>
                        </div>

                      </div>
                    </td>

                    <td className="p-4 font-semibold">
                      {item.amount}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === "PAID"
                            ? "bg-green-100 text-green-700"
                            : item.status === "FAILED"
                            ? "bg-red-100 text-red-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.method}
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.date}
                    </td>

                    <td className="p-4">
                      <button className="text-indigo-700 font-semibold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table></div>

          </div>
                    <div className="flex justify-between items-center p-4 border-t border-slate-200 bg-slate-50">

            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg bg-white">
                Previous
              </button>

              <button className="px-3 py-1 bg-indigo-900 text-white rounded-lg">
                1
              </button>

              <button className="px-3 py-1 border rounded-lg bg-white">
                2
              </button>

              <button className="px-3 py-1 border rounded-lg bg-white">
                3
              </button>

              <button className="px-3 py-1 border rounded-lg bg-white">
                Next
              </button>
            </div>

            <button className="px-3 py-1 border rounded-lg bg-white text-sm">
              Show 10
            </button>

          </div>
        </div>

        {/* Bottom Cards */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

            <div className="flex justify-between mb-6">
              <div>
                <h3 className="font-bold text-indigo-950">
                  Disbursement Trend
                </h3>

                <p className="text-sm text-slate-500">
                  Last 30 days performance
                </p>
              </div>

              <div className="text-sm text-slate-500">
                ● Paid &nbsp; ○ Pending
              </div>
            </div>

            <div className="h-64 flex items-end gap-2">

              {[65,58,69,45,72,53,58,84].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${
                    i === 7
                      ? "bg-indigo-900"
                      : "bg-indigo-200"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}

            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <h3 className="font-bold text-indigo-950 mb-6">
              Settlement Health
            </h3>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>ACH Success Rate</span>
                  <span className="font-bold">99.8%</span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-[99%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>PayPal Success Rate</span>
                  <span className="font-bold">94.2%</span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-indigo-700 rounded-full w-[94%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Bank Verification Time</span>
                  <span className="font-bold">
                    1.2 Days (Avg)
                  </span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-blue-400 rounded-full w-[70%]" />
                </div>
              </div>

              <button className="w-full mt-4 bg-indigo-900 hover:bg-indigo-800 text-white py-3 rounded-xl font-semibold">
                View Fraud Alerts
              </button>

            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}