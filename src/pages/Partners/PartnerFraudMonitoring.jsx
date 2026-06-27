import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Shield,
  AlertTriangle,
  Users,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Alerts",
    value: "128",
    growth: "+18%",
    icon: Shield,
  },
  {
    title: "High Risk Alerts",
    value: "32",
    growth: "+12%",
    icon: AlertTriangle,
  },
  {
    title: "Partners Monitored",
    value: "1,284",
    growth: "0%",
    icon: Users,
  },
  {
    title: "Resolved Alerts",
    value: "96",
    growth: "+22%",
    icon: CheckCircle,
  },
];

export default function PartnerFraudMonitoring() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search fraud alerts..."
    >
      <div className="space-y-6">

        {/* Hero */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">

          <h1 className="text-4xl font-bold">
            Partner Fraud Monitoring
          </h1>

          <p className="mt-3 text-blue-100 max-w-2xl">
            Monitor suspicious partner activity,
            fraud alerts and risk scores in real time.
          </p>

        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
              >
                <div className="flex justify-between">

                  <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Icon
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <span className="text-green-600 font-semibold">
                    {item.growth}
                  </span>

                </div>

                <p className="mt-5 text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {item.value}
                </h2>

              </div>
            );
          })}

        </div>
        {/* Fraud Analytics */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  {/* Alerts Chart */}

  <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Fraud Alerts Over Time
        </h2>

        <p className="mt-2 text-slate-500">
          Last 7 days monitoring activity
        </p>
      </div>

      <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600">
        Last 7 Days
      </button>

    </div>

    <div className="mt-10">

      <div className="flex items-end gap-4 h-64">

        {[20, 35, 45, 70, 80, 55, 68].map(
          (height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-400"
              style={{
                height: `${height * 2.5}px`,
              }}
            />
          )
        )}

      </div>

      <div className="mt-4 flex justify-between text-sm text-slate-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

    </div>

  </div>


  {/* Risk Summary */}

  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

    <h2 className="text-2xl font-bold text-slate-900">
      Risk Level Summary
    </h2>

    <div className="mt-8 flex justify-center">

      <div className="relative h-44 w-44 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 p-4">

        <div className="h-full w-full rounded-full bg-white flex flex-col items-center justify-center">

          <h3 className="text-4xl font-bold text-slate-900">
            128
          </h3>

          <p className="text-slate-500">
            Total Alerts
          </p>

        </div>

      </div>

    </div>

    <div className="mt-8 space-y-4">

      <div className="flex justify-between">
        <span className="text-red-500 font-medium">
          High Risk
        </span>
        <span className="font-semibold">
          32
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-orange-500 font-medium">
          Medium Risk
        </span>
        <span className="font-semibold">
          51
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-blue-500 font-medium">
          Low Risk
        </span>
        <span className="font-semibold">
          38
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-green-500 font-medium">
          Safe
        </span>
        <span className="font-semibold">
          7
        </span>
      </div>

    </div>

  </div>

</div>
{/* Partners At Risk */}

<div className="bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden">

  <div className="flex items-center justify-between p-6 border-b border-blue-100">
    <div>
      <h2 className="text-2xl font-bold text-slate-900">
        Partners At Risk
      </h2>

      <p className="text-slate-500 mt-1">
        Partners requiring investigation
      </p>
    </div>

    <button className="px-4 py-2 rounded-xl bg-blue-50 text-blue-600 font-medium">
      View All
    </button>
  </div>

  <div className="overflow-x-auto">

    <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

      <thead className="bg-slate-50">
        <tr className="text-left text-sm text-slate-500">
          <th className="px-6 py-4">Partner</th>
          <th>Risk Level</th>
          <th>Risk Score</th>
          <th>Last Alert</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {[
          {
            name: "Urban Connect",
            risk: "High",
            score: "82%",
            alert: "10 min ago",
            status: "Under Review",
          },
          {
            name: "Apex Digital",
            risk: "High",
            score: "74%",
            alert: "25 min ago",
            status: "Under Review",
          },
          {
            name: "Prime Hub",
            risk: "Medium",
            score: "48%",
            alert: "1 hr ago",
            status: "Monitoring",
          },
          {
            name: "Elite Group",
            risk: "Medium",
            score: "42%",
            alert: "2 hrs ago",
            status: "Monitoring",
          },
        ].map((partner, index) => (

          <tr
            key={index}
            className="border-t border-slate-100 hover:bg-slate-50"
          >

            <td className="px-6 py-5">

              <div className="flex items-center gap-4">

                <div className="h-11 w-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
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

            <td>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                ${
                  partner.risk === "High"
                    ? "bg-red-100 text-red-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {partner.risk}
              </span>

            </td>

            <td className="font-semibold text-slate-900">
              {partner.score}
            </td>

            <td>{partner.alert}</td>

            <td>
              <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                {partner.status}
              </span>
            </td>

            <td>

              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">
                Review
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table></div>

  </div>

</div>



{/* Risk Distribution + Fraud Summary */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  {/* Risk Distribution */}

  <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">

    <h2 className="text-2xl font-bold text-slate-900">
      Risk Distribution
    </h2>

    <div className="mt-8 space-y-6">

      {[
        ["High Risk", "18%"],
        ["Medium Risk", "32%"],
        ["Low Risk", "50%"],
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

          <div className="h-3 bg-slate-100 rounded-full">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
              style={{ width: value }}
            />

          </div>

        </div>

      ))}

    </div>

  </div>


  {/* Fraud Summary */}

  <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">

    <h2 className="text-2xl font-bold text-slate-900">
      Fraud Summary
    </h2>

    <div className="grid grid-cols-2 gap-5 mt-8">

      <div className="bg-blue-50 rounded-2xl p-5">
        <h4 className="text-slate-500 text-sm">
          Total Alerts
        </h4>

        <p className="text-3xl font-bold text-blue-600 mt-2">
          186
        </p>
      </div>

      <div className="bg-green-50 rounded-2xl p-5">
        <h4 className="text-slate-500 text-sm">
          Resolved
        </h4>

        <p className="text-3xl font-bold text-green-600 mt-2">
          142
        </p>
      </div>

      <div className="bg-orange-50 rounded-2xl p-5">
        <h4 className="text-slate-500 text-sm">
          Pending
        </h4>

        <p className="text-3xl font-bold text-orange-600 mt-2">
          44
        </p>
      </div>

      <div className="bg-purple-50 rounded-2xl p-5">
        <h4 className="text-slate-500 text-sm">
          False Positive
        </h4>

        <p className="text-3xl font-bold text-purple-600 mt-2">
          18
        </p>
      </div>

    </div>

  </div>

</div>
</div>
    </AdminShell>
  );
}