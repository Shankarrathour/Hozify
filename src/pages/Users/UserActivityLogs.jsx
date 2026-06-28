import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  Activity,
  LogIn,
  CreditCard,
  FileText,
  Shield,
  Filter,
  Search,
} from "lucide-react";

export default function UserActivityLogs() {
  const { addToast } = useToast();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const activities = [
    {
      id: 1,
      icon: <LogIn />,
      title: "Successful Login",
      desc: "Chrome / Windows - IP 192.168.1.1",
      time: "2 min ago",
      type: "success",
    },
    {
      id: 2,
      icon: <CreditCard />,
      title: "Payment Added",
      desc: "₹500 added via UPI",
      time: "20 min ago",
      type: "info",
    },
    {
      id: 3,
      icon: <FileText />,
      title: "Document Uploaded",
      desc: "Aadhaar Card verified",
      time: "1 hour ago",
      type: "warning",
    },
    {
      id: 4,
      icon: <Shield />,
      title: "Security Alert",
      desc: "Multiple failed login attempts",
      time: "3 hours ago",
      type: "danger",
    },
    {
      id: 5,
      icon: <Activity />,
      title: "Profile Updated",
      desc: "User changed email & password",
      time: "5 hours ago",
      type: "info",
    },
  ];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.trim() !== "") {
      addToast(`Searching logs for: "${e.target.value}"`, "success");
    }
  };

  const handleFilterChange = (f) => {
    setFilter(f);
  };

  const filtered = activities
    .filter((a) => filter === "All" || a.type === filter)
    .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminShell
      activeTab="User Activity Logs"
      searchPlaceholder="Search activity, user actions..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <div>
            <h1 className="page-title">
              User Activity Logs
            </h1>
            <p className="page-subtitle">
              Real-time tracking of all user actions across platform
            </p>
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-2 border bg-white px-3 py-2 rounded-lg w-full md:w-72">
            <Search size={16} className="text-slate-400" />
            <input
              value={search}
              onChange={handleSearchChange}
              placeholder="Search logs..."
              className="outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter size={16} className="text-slate-500" />

          {["All", "success", "info", "warning", "danger"].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-3 py-1 text-sm rounded-full border transition cursor-pointer ${
                filter === f
                  ? "bg-[#2A2454] text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Total Activities" value="1,248" onClick={() => addToast("Total recorded activity operations: 1,248", "success")} />
          <Stat label="Logins Today" value="312" onClick={() => addToast("Platform user log-ins today: 312", "success")} />
          <Stat label="Payments" value="89" onClick={() => addToast("Completed user deposit/billing payments today: 89", "success")} />
          <Stat label="Security Alerts" value="14" onClick={() => addToast("Critical security telemetry events flagged: 14", "success")} />
        </div>

        {/* TIMELINE CARD */}
        <div className="bg-white border rounded-xl shadow-sm p-4 md:p-6">
          <h2 className="font-semibold text-slate-700 mb-4">
            Recent Activity Timeline
          </h2>

          <div className="space-y-5">
            {filtered.map((a) => (
              <ActivityItem key={a.id} {...a} onClick={() => addToast(`Clicked activity: ${a.title} (${a.time})`, "success")} />
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-6 text-slate-400">
                No matching activity logs found.
              </div>
            )}
          </div>
        </div>

      </div>
    </AdminShell>
  );
}

/* ACTIVITY ITEM */
function ActivityItem({ icon, title, desc, time, type, onClick }) {
  const styles = {
    success: "text-green-600 bg-green-50",
    danger: "text-red-600 bg-red-50",
    warning: "text-yellow-600 bg-yellow-50",
    info: "text-indigo-600 bg-indigo-50",
  };

  return (
    <div onClick={onClick} className="flex gap-3 items-start hover:bg-slate-50 p-3 rounded-lg transition cursor-pointer">
      {/* ICON */}
      <div className={`p-2 rounded-lg ${styles[type]}`}>
        {icon}
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h3 className="font-medium text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>

      {/* TIME */}
      <span className="text-xs text-slate-400 whitespace-nowrap">
        {time}
      </span>
    </div>
  );
}

/* STAT CARD */
function Stat({ label, value, onClick }) {
  return (
    <div onClick={onClick} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">
      <p className="text-xs text-slate-500">{label}</p>
      <h3 className="text-xl font-bold text-slate-800">{value}</h3>
    </div>
  );
}