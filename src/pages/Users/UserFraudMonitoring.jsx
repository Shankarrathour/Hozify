import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  AlertTriangle,
  ShieldAlert,
  Eye,
  Ban,
  Search,
  Filter,
} from "lucide-react";

export default function UserFraudMonitoring() {
  const { addToast } = useToast();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    { id: 1, risk: "High", ip: "103.45.21.11", country: "India", status: "Reviewing" },
    { id: 2, risk: "Medium", ip: "192.168.10.5", country: "Russia", status: "Blocked" },
    { id: 3, risk: "High", ip: "45.88.91.22", country: "Unknown", status: "Reviewing" },
    { id: 4, risk: "Low", ip: "157.240.10.8", country: "USA", status: "Safe" },
    { id: 5, risk: "Medium", ip: "89.44.21.9", country: "Nigeria", status: "Reviewing" },
    { id: 6, risk: "High", ip: "210.55.12.77", country: "Suspicious Region", status: "Blocked" },
  ]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.trim() !== "") {
      addToast(`Filtering fraud matrix: "${e.target.value}"`, "success");
    }
  };

  const handleFilterClick = (f) => {
    setFilter(f);
  };

  const handleBlockUser = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: "Blocked" } : u))
    );
    addToast(`Account for User #${id} successfully restricted & blocked from API gateways!`, "success");
  };

  const handleInspectUser = (user) => {
    addToast(`Fetched device fingerprint, IP geolocation trace, and logs for User #${user.id}!`, "success");
  };

  const filteredUsers = users
    .filter((u) => filter === "All" || u.risk === filter)
    .filter((u) => u.ip.includes(search) || u.country.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminShell
      activeTab="Fraud Monitoring"
      searchPlaceholder="Search suspicious users, IP, country..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="page-title">
              Fraud Monitoring Center
            </h1>
            <p className="page-subtitle">
              Real-time detection of suspicious user behavior & anomalies
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg">
            <Search size={16} className="text-slate-400" />
            <input
              value={search}
              onChange={handleSearchChange}
              placeholder="Search IP, country..."
              className="outline-none text-sm"
            />
          </div>
        </div>

        {/* ALERT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <AlertCard icon={<AlertTriangle />} label="High Risk Users" value="18" color="red" onClick={() => addToast("High-risk users telemetry dashboard loaded.", "success")} />
          <AlertCard icon={<ShieldAlert />} label="Blocked Accounts" value="42" color="gray" onClick={() => addToast("Reviewing 42 accounts currently blacklisted.", "success")} />
          <AlertCard icon={<Eye />} label="Under Investigation" value="97" color="yellow" onClick={() => addToast("97 accounts marked for verification checks.", "success")} />
          <AlertCard icon={<Ban />} label="Auto Flags Today" value="11" color="purple" onClick={() => addToast("System auto-flagged 11 anomalous activities today.", "success")} />
        </div>

        {/* FILTER BAR */}
        <div className="flex gap-2 items-center">
          <Filter size={16} className="text-slate-500" />
          {["All", "High", "Medium", "Low"].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterClick(f)}
              className={`px-3 py-1 text-sm rounded-full border cursor-pointer ${
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
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-6 p-4 border-t hover:bg-red-50 items-center"
            >
              <div className="font-semibold text-slate-800">User #{user.id}</div>
              <div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
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
              <div className="text-sm text-slate-500 font-medium">{user.ip}</div>
              <div className="text-sm text-slate-500 font-medium">{user.country}</div>
              <div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
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
                <button
                  onClick={() => handleBlockUser(user.id)}
                  disabled={user.status === "Blocked"}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs rounded-md font-bold cursor-pointer disabled:opacity-50"
                >
                  Block
                </button>
                <button
                  onClick={() => handleInspectUser(user)}
                  className="bg-slate-800 hover:bg-black text-white px-3 py-1 text-xs rounded-md font-bold cursor-pointer"
                >
                  Inspect
                </button>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <div className="text-center py-6 text-slate-400">
              No telemetry alerts match current search query.
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}

/* ALERT CARD */
function AlertCard({ icon, label, value, color, onClick }) {
  const colors = {
    red: "text-red-600",
    gray: "text-slate-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
  };

  return (
    <div onClick={onClick} className="bg-white border rounded-xl p-5 hover:shadow-lg transition cursor-pointer">
      <div className={colors[color]}>{icon}</div>
      <p className="text-sm text-slate-500 mt-2">{label}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}