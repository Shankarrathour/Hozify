import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  AlertTriangle,
  Ban,
  Activity,
  Shield,
  WifiOff,
  Copy,
} from "lucide-react";

export default function FraudDetectionPage() {
  return (
    <AdminShell activeTab="Referrals">
      <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Referral Fraud Detection
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Real-time monitoring of referral integrity and system security.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border rounded-lg bg-white hover:bg-gray-100">
              Filters
            </button>
            <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Export Report
            </button>
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">

          {/* GLOBAL SCORE */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-900 text-white p-5 rounded-xl shadow">
            <div className="flex justify-between">
              <h3 className="text-xs opacity-80">GLOBAL FRAUD SCORE</h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">LIVE</span>
            </div>

            <div className="mt-4 text-4xl font-bold">
              24.8 <span className="text-lg font-normal">/100</span>
            </div>

            <div className="mt-4 h-2 bg-white/20 rounded-full">
              <div className="h-2 bg-white rounded-full w-1/4"></div>
            </div>

            <p className="text-sm mt-2 opacity-80">
              Risk level: Low - Medium
            </p>
          </div>

          {/* FLAGGED */}
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between">
              <h3 className="text-xs text-gray-500">FLAGGED REFERRALS</h3>
              <AlertTriangle className="text-red-500" size={18} />
            </div>

            <div className="text-3xl font-bold mt-3">1,284</div>
            <p className="text-xs text-red-500 mt-1">+12% from yesterday</p>

            <div className="mt-3 h-1.5 bg-gray-100 rounded-full">
              <div className="h-1.5 bg-red-500 w-2/3 rounded-full"></div>
            </div>
          </div>

          {/* BLOCKED */}
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between">
              <h3 className="text-xs text-gray-500">BLOCKED ACCOUNTS</h3>
              <Ban className="text-gray-600" size={18} />
            </div>

            <div className="text-3xl font-bold mt-3">492</div>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Bot detection</span>
                <span className="font-medium">312</span>
              </div>
              <div className="flex justify-between">
                <span>Sybil attack</span>
                <span className="font-medium">180</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">

          {/* TABLE */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Recently Flagged Items</h2>
              <button className="text-sm text-indigo-600">
                View All Records
              </button>
            </div>

            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-sm">
              <thead className="text-left text-gray-500 border-b">
                <tr>
                  <th className="py-2">Entity</th>
                  <th>Trigger</th>
                  <th>Risk</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>

                {/* ROW 1 */}
                <tr className="border-b">
                  <td className="py-3 font-medium">
                    user_8921_beta
                    <p className="text-xs text-gray-400">192.168.1.104</p>
                  </td>
                  <td>Rapid Referral Spiking</td>
                  <td>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                      CRITICAL 94
                    </span>
                  </td>
                  <td className="text-gray-500">2 mins ago</td>
                </tr>

                {/* ROW 2 */}
                <tr className="border-b">
                  <td className="py-3 font-medium">
                    referral_vortex_77
                    <p className="text-xs text-gray-400">email mismatch</p>
                  </td>
                  <td>Duplicate Account</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">
                      HIGH 72
                    </span>
                  </td>
                  <td className="text-gray-500">14 mins ago</td>
                </tr>

                {/* ROW 3 */}
                <tr>
                  <td className="py-3 font-medium">
                    shadow_walker_01
                    <p className="text-xs text-gray-400">proxy detected</p>
                  </td>
                  <td>VPN Usage</td>
                  <td>
                    <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded text-xs">
                      MEDIUM 45
                    </span>
                  </td>
                  <td className="text-gray-500">1 hour ago</td>
                </tr>

              </tbody>
            </table></div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-4">

            {/* THREAT DISTRIBUTION (IMPROVED LIKE FIGMA) */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Threat Distribution</h3>

              <div className="space-y-4 text-sm">

                {/* BOT FARM */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Bot Farm Activity</span>
                    <span>42%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-[42%]"></div>
                  </div>
                </div>

                {/* DUPLICATE IP */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Duplicate IP Usage</span>
                    <span>28%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full w-[28%]"></div>
                  </div>
                </div>

                {/* VPN */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>VPN / Tunnel Bypass</span>
                    <span>15%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-orange-500 rounded-full w-[15%]"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* AUTOMATION */}
            <div className="bg-gray-900 text-white p-4 rounded-xl">
              <h3 className="font-semibold">Automated Security</h3>
              <p className="text-xs text-gray-300 mt-2">
                AI is handling 82% mitigation tasks.
              </p>

              <div className="flex items-center gap-2 mt-3 text-green-400 text-sm">
                <Activity size={16} /> Active
              </div>

              <button className="mt-3 w-full bg-white text-black py-2 rounded-lg text-sm">
                Configure Rules
              </button>
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}