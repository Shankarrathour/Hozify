import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  CheckCircle2,
  XCircle,
  Filter,
  ShieldAlert,
  Clock,
  DollarSign,
} from "lucide-react";

const rewards = [
  {
    initials: "AS",
    name: "Alex Simmons",
    email: "alex.s@enterprise.com",
    achievement: "Q3 Growth Milestone",
    subtitle: "10 Successful Conversions",
    reward: "$250.00",
    date: "Oct 12, 2023 14:32",
  },
  {
    initials: "MJ",
    name: "Marcus Johnson",
    email: "m.johnson@techflow.io",
    achievement: "Enterprise Referral",
    subtitle: "Qualified Lead: ACME Corp",
    reward: "$1,500.00",
    date: "Oct 12, 2023 11:15",
  },
  {
    initials: "SL",
    name: "Sarah Lin",
    email: "slin88@gmail.com",
    achievement: "Referral Bonus",
    subtitle: "Duplicate ID Detected",
    reward: "$50.00",
    date: "Oct 11, 2023 23:45",
    alert: true,
  },
  {
    initials: "DB",
    name: "David Brooks",
    email: "d.brooks@creative.co",
    achievement: "Annual Partner Reward",
    subtitle: "Top Tier Partner Bonus",
    reward: "$5,000.00",
    date: "Oct 11, 2023 18:20",
  },
];
export default function RewardApprovalQueuePage() {
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
              Reward Approval Queue
            </h1>

            <p className="text-slate-600 mt-1">
              Review and authorize referral payouts across active campaigns.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-3 rounded-xl font-semibold text-sm">
              Bulk Approve
            </button>

            <button className="border border-slate-300 bg-white px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Pending Approvals
            </p>

            <div className="flex items-end gap-2 mt-2">
              <h3 className="text-4xl font-black text-indigo-950">
                124
              </h3>

              <span className="text-red-500 text-sm font-semibold">
                +12 today
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Queue Value
            </p>

            <div className="flex items-end gap-2 mt-2">
              <h3 className="text-4xl font-black text-indigo-950">
                $12,450
              </h3>

              <span className="text-slate-500 text-sm">USD</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Avg. Processing Time
            </p>

            <div className="flex items-center gap-3 mt-2">
              <Clock className="text-indigo-700" size={22} />

              <h3 className="text-4xl font-black text-indigo-950">
                4.2h
              </h3>

              <span className="text-indigo-600 text-sm">
                Excellent
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Fraud Risk Alerts
            </p>

            <div className="flex items-center gap-3 mt-2">
              <ShieldAlert className="text-red-500" size={22} />

              <h3 className="text-4xl font-black text-red-600">
                3
              </h3>

              <span className="text-slate-600 text-sm">
                Requires Review
              </span>
            </div>
          </div>

        </div>
                {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1100px]">

              <thead className="bg-slate-100">
                <tr className="text-left text-xs uppercase text-slate-600">

                  <th className="p-4">
                    <input type="checkbox" />
                  </th>

                  <th className="p-4">Referrer</th>
                  <th className="p-4">Achievement</th>
                  <th className="p-4">Reward Value</th>
                  <th className="p-4">Date Logged</th>
                  <th className="p-4 text-center">Actions</th>

                </tr>
              </thead>

              <tbody>

                {rewards.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-200 hover:bg-slate-50"
                  >
                    <td className="p-4">
                      <input type="checkbox" />
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                          {item.initials}
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {item.name}
                          </h4>

                          <p className="text-xs text-slate-500">
                            {item.email}
                          </p>
                        </div>

                      </div>
                    </td>

                    <td className="p-4">
                      <h4 className="font-medium text-slate-900">
                        {item.achievement}
                      </h4>

                      <p
                        className={`text-xs ${
                          item.alert
                            ? "text-red-500"
                            : "text-indigo-600"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </td>

                    <td className="p-4">
                      <span className="bg-indigo-900 text-white px-4 py-2 rounded-md text-sm font-semibold">
                        {item.reward}
                      </span>
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.date}
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center gap-4">

                        <button>
                          <CheckCircle2
                            size={20}
                            className="text-indigo-700"
                          />
                        </button>

                        <button>
                          <XCircle
                            size={20}
                            className="text-red-500"
                          />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>

          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4 border-t border-slate-200 bg-slate-50">

            <p className="text-sm text-slate-600">
              Showing 4 of 124 pending rewards
            </p>

            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-lg border bg-white">
                ‹
              </button>

              <button className="w-9 h-9 rounded-lg bg-indigo-900 text-white">
                1
              </button>

              <button className="w-9 h-9 rounded-lg border bg-white">
                2
              </button>

              <button className="w-9 h-9 rounded-lg border bg-white">
                3
              </button>

              <button className="w-9 h-9 rounded-lg border bg-white">
                ›
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}