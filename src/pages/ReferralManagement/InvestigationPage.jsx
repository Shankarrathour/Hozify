import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  AlertTriangle,
  Shield,
  Clock,
  CheckCircle,
  Users,
  Network,
} from "lucide-react";

export default function InvestigationPage() {
  return (
    <AdminShell activeTab="Referrals">
      <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-2">
          FRAUD &gt; INVESTIGATIONS &gt; CASE-88219-F
        </div>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Incident: High-Frequency Referral Pattern
            </h1>

            <span className="inline-flex mt-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              Critical Alert
            </span>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button className="px-3 py-2 text-sm border rounded-lg bg-white">
              Request Info
            </button>
            <button className="px-3 py-2 text-sm border rounded-lg bg-white">
              Suspend
            </button>
            <button className="px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg">
              Clear Case
            </button>
          </div>
        </div>

        {/* INCIDENT + AUDIT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
            <div className="flex justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                <AlertTriangle size={16} /> Incident Details
              </h2>
              <span className="text-xs text-gray-500">
                Detected: Oct 24, 2023 - 14:22 GMT
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div>
                <div className="text-sm text-gray-500">Risk Score</div>
                <div className="text-3xl font-bold text-red-600">
                  94<span className="text-gray-400">/100</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-red-600 w-[94%] rounded-full" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  High confidence automated detection
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-semibold mb-4">Audit Trail</h2>

            <div className="space-y-4 text-sm">
              <div className="flex gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <div>
                  <p className="font-medium">Auto-Flagged</p>
                  <p className="text-xs text-gray-500">14:22</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Clock className="text-blue-500" size={16} />
                <div>
                  <p className="font-medium">Case Assigned</p>
                  <p className="text-xs text-gray-500">14:35</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RELATED ACCOUNTS ================= */}
        <div className="bg-white rounded-xl shadow mt-6 p-5">

          {/* HEADER MATCHED */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Users size={16} /> Related Accounts (Associated Clusters)
            </h2>

            <div className="flex gap-2">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                12 Nodes Detected
              </span>
              <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                Common IP Block
              </span>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">

              <thead className="text-left text-gray-500 border-b">
                <tr>
                  <th className="py-2">User Account</th>
                  <th>Join Date</th>
                  <th>Referral Count</th>
                  <th>Status</th>
                  <th>Identity Verification</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">

                {/* ROW 1 */}
                <tr className="border-b">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center font-bold">
                      MK
                    </div>
                    <div>
                      <p className="font-medium">Marcus Krauss</p>
                      <p className="text-xs text-gray-400">mkrauss@mail.com</p>
                    </div>
                  </td>
                  <td>Oct 20, 2023</td>
                  <td className="font-medium">42</td>
                  <td>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                      Flagged
                    </span>
                  </td>
                  <td>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                      Failed
                    </span>
                  </td>
                  <td className="text-indigo-600 cursor-pointer">
                    View Profile
                  </td>
                </tr>

                {/* ROW 2 */}
                <tr className="border-b">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold">
                      JL
                    </div>
                    <div>
                      <p className="font-medium">Janice Liao</p>
                      <p className="text-xs text-gray-400">liao@mail.com</p>
                    </div>
                  </td>
                  <td>Oct 22, 2023</td>
                  <td className="font-medium">1</td>
                  <td>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-600">
                      Pending
                    </span>
                  </td>
                  <td>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      In Progress
                    </span>
                  </td>
                  <td className="text-indigo-600 cursor-pointer">
                    View Profile
                  </td>
                </tr>

                {/* ROW 3 */}
                <tr>
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center font-bold">
                      DR
                    </div>
                    <div>
                      <p className="font-medium">David Rossi</p>
                      <p className="text-xs text-gray-400">rossi@mail.com</p>
                    </div>
                  </td>
                  <td>Oct 23, 2023</td>
                  <td className="font-medium">28</td>
                  <td>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                      Flagged
                    </span>
                  </td>
                  <td>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                      Failed
                    </span>
                  </td>
                  <td className="text-indigo-600 cursor-pointer">
                    View Profile
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* ================= NETWORK TOPOLOGY ================= */}
        <div className="bg-white rounded-xl shadow mt-6 p-5">

          <h2 className="font-bold flex items-center gap-2 mb-2">
            <Network size={16} /> Network Topology Visualization
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Mapping connections between suspicious nodes and referral hubs.
          </p>

          {/* BIG CENTER GRAPH AREA (MATCHED UI) */}
          <div className="h-64 rounded-xl border bg-gray-50 flex items-center justify-center relative">

            <div className="absolute w-20 h-20 bg-red-200 rounded-full opacity-60" />
            <div className="absolute w-10 h-10 bg-indigo-200 rounded-full top-10 left-20" />
            <div className="absolute w-10 h-10 bg-green-200 rounded-full bottom-10 right-20" />

            <div className="text-sm text-black-600 font-medium bg-white px-4 py-2 rounded-full shadow">
              3 High-Confidence Clusters Detected
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}