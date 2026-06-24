import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function UserComplaintsPage() {
  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search users, tickets or complaints..."
    >
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            User Complaints
          </h1>

          <p className="text-sm text-slate-500">
            Track and manage user complaints
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex justify-between items-start">

            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt=""
                className="w-20 h-20 rounded-xl"
              />

              <div>
                <h2 className="text-3xl font-bold">
                  Sarah Jenkins
                </h2>

                <div className="flex items-center gap-3 mt-2">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">
                    PREMIUM MEMBER
                  </span>

                  <span className="text-slate-500">
                    ID: #HZ-44921
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="border px-4 py-2 rounded-lg">
                Edit Profile
              </button>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                Actions
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-10 mt-8 border-b text-base font-semibold">
  <button className="pb-4 text-slate-600 hover:text-indigo-600">
    Overview
  </button>

  <button className="pb-4 text-slate-600 hover:text-indigo-600">
    Activity Logs
  </button>

  <button className="pb-4 border-b-2 border-indigo-600 text-indigo-600 font-bold">
    Complaints
  </button>

  <button className="pb-4 text-slate-600 hover:text-indigo-600">
    Financials
  </button>

  <button className="pb-4 text-slate-600 hover:text-indigo-600">
    Settings
  </button>
</div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-sm text-slate-500">
              Open Complaints
            </p>

            <h3 className="text-4xl font-bold mt-2">
              1
            </h3>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-sm text-slate-500">
              Resolved
            </p>

            <h3 className="text-4xl font-bold text-green-600 mt-2">
              5
            </h3>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-sm text-slate-500">
              Escalated
            </p>

            <h3 className="text-4xl font-bold text-orange-500 mt-2">
              0
            </h3>
          </div>
        </div>

        {/* Complaint Table */}
        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-lg">
              Complaint Tickets
            </h3>

            <div className="flex gap-2">
              <button className="border px-4 py-2 rounded-lg">
                Filter
              </button>

              <button className="border px-4 py-2 rounded-lg">
                Export
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="p-4">Ticket ID</th>
                <th>Issue Type</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assigned Agent</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4 text-indigo-600 font-medium">
                  #TK-88210
                </td>

                <td>Service Delay</td>

                <td>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
                    High
                  </span>
                </td>

                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                    OPEN
                  </span>
                </td>

                <td>Alex Rivera</td>

                <td>
                  <button className="text-indigo-600">
                    View Ticket
                  </button>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 text-indigo-600 font-medium">
                  #TK-88156
                </td>

                <td>Payment Failed</td>

                <td>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs">
                    Med
                  </span>
                </td>

                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    RESOLVED
                  </span>
                </td>

                <td>System (Auto)</td>

                <td>
                  <button className="text-indigo-600">
                    View Ticket
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Support Note */}
        <div className="bg-white border rounded-xl p-6">
          <h3 className="font-semibold text-indigo-600">
            Support Intelligence Note
          </h3>

          <p className="text-slate-600 mt-3">
            Sarah Jenkins has a high resolution rate but
            frequently reports service delay issues.
            Recommended to review booking assignments
            and partner performance history.
          </p>
        </div>

      </div>
    </AdminShell>
  );
}