import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  AlertTriangle,
  ShieldAlert,
  Eye,
  Ban,
  Search,
  Filter,
} from "lucide-react";

export default function UserFraudMonitoring() {
  const [filter, setFilter] = useState("All");

  const users = [
    { id: 1, risk: "High", ip: "103.45.21.11", country: "India", status: "Reviewing" },
    { id: 2, risk: "Medium", ip: "192.168.10.5", country: "Russia", status: "Blocked" },
    { id: 3, risk: "High", ip: "45.88.91.22", country: "Unknown", status: "Reviewing" },
    { id: 4, risk: "Low", ip: "157.240.10.8", country: "USA", status: "Safe" },
    { id: 5, risk: "Medium", ip: "89.44.21.9", country: "Nigeria", status: "Reviewing" },
    { id: 6, risk: "High", ip: "210.55.12.77", country: "Suspicious Region", status: "Blocked" },
  ];

  const filteredUsers =
    filter === "All" ? users : users.filter((u) => u.risk === filter);

  return (
    <AdminShell
      activeTab="Fraud Monitoring"
      searchPlaceholder="Search suspicious users, IP, country..."
    >
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-black-600">
              Fraud Monitoring Center
            </h1>
            <p className="text-sm text-slate-500">
              Real-time detection of suspicious user behavior & anomalies
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg">
            <Search size={16} className="text-slate-400" />
            <input
              placeholder="Search users..."
              className="outline-none text-sm"
            />
          </div>
        </div>

        {/* ALERT CARDS */}
        <div className="grid grid-cols-4 gap-4">
          <AlertCard icon={<AlertTriangle />} label="High Risk Users" value="18" color="red" />
          <AlertCard icon={<ShieldAlert />} label="Blocked Accounts" value="42" color="gray" />
          <AlertCard icon={<Eye />} label="Under Investigation" value="97" color="yellow" />
          <AlertCard icon={<Ban />} label="Auto Flags Today" value="11" color="purple" />
        </div>

        {/* FILTER BAR */}
        <div className="flex gap-2 items-center">
          <Filter size={16} className="text-slate-500" />
          {["All", "High", "Medium", "Low"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 text-sm rounded-full border ${
                filter === f
                  ? "bg-red-600 text-white"
                  : "bg-white text-slate-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">

          {/* HEADER ROW */}
          <div className="grid grid-cols-6 bg-red-50 p-3 text-xs font-semibold text-red-700">
            <div>USER</div>
            <div>RISK</div>
            <div>IP ADDRESS</div>
            <div>COUNTRY</div>
            <div>STATUS</div>
            <div>ACTION</div>
          </div>

          {/* ROWS */}
          {filteredUsers.map((user, i) => (
            <div
              key={user.id}
              className="grid grid-cols-6 p-4 border-t hover:bg-red-50 items-center"
            >
              <div className="font-medium">User #{user.id}</div>

              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.risk === "High"
                      ? "bg-red-100 text-red-600"
                      : user.risk === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {user.risk}
                </span>
              </div>

              <div className="text-sm text-slate-500">{user.ip}</div>
              <div className="text-sm text-slate-500">{user.country}</div>

              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    user.status === "Blocked"
                      ? "bg-red-200 text-red-700"
                      : user.status === "Reviewing"
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="flex gap-2">
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs rounded-md">
                  Block
                </button>
                <button className="bg-slate-800 hover:bg-black text-white px-3 py-1 text-xs rounded-md">
                  Inspect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

/* ALERT CARD */
function AlertCard({ icon, label, value, color }) {
  const colors = {
    red: "text-red-600",
    gray: "text-slate-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
  };

  return (
    <div className="bg-white border rounded-xl p-5 hover:shadow-lg transition">
      <div className={colors[color]}>{icon}</div>
      <p className="text-sm text-slate-500 mt-2">{label}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}