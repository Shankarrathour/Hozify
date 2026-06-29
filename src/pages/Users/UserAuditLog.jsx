import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { triggerDownload, generateCSV } from "../../utils/downloadHelper";
import {
  Download,
  Filter,
  ShieldAlert,
  Activity,
  Smartphone,
  Monitor,
  KeyRound,
  User,
  CreditCard,
  CheckCircle,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Activities (30d)",
    value: "142",
    sub: "+8%",
    icon: Activity,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Security Events",
    value: "3",
    sub: "Alert",
    icon: ShieldAlert,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Last Active IP",
    value: "192.168.1.45",
    icon: Monitor,
    color: "bg-slate-100 text-slate-700",
  },
  {
    title: "Primary Device",
    value: "iPhone 14 Pro",
    icon: Smartphone,
    color: "bg-green-100 text-green-700",
  },
];

const logs = [
  {
    action: "Password Change",
    by: "Admin (Sarah J.)",
    date: "Oct 24, 2023",
    time: "14:22:10",
    ip: "192.168.1.1",
    device: "Chrome / MacOS",
    remark: "Forced reset due to policy",
    icon: KeyRound,
    type: "info",
  },
  {
    action: "Profile Update",
    by: "User (Self)",
    date: "Oct 23, 2023",
    time: "09:15:44",
    ip: "192.168.1.45",
    device: "Mobile App / iOS",
    remark: "NAME CHANGE",
    icon: User,
    type: "warning",
  },
  {
    action: "Failed Login",
    by: "System",
    date: "Oct 23, 2023",
    time: "08:12:01",
    ip: "103.45.21.199",
    device: "Unrecognized Browser",
    remark: "3 incorrect attempts from China",
    icon: XCircle,
    type: "danger",
  },
  {
    action: "Wallet Withdrawal",
    by: "User (Self)",
    date: "Oct 21, 2023",
    time: "18:45:30",
    ip: "192.168.1.45",
    device: "Mobile App / iOS",
    remark: "Withdrawal of ₹4,500.00",
    icon: CreditCard,
    type: "info",
  },
  {
    action: "KYC Approved",
    by: "System (Auto)",
    date: "Oct 20, 2023",
    time: "11:30:12",
    ip: "Internal Server",
    device: "Engine v2.4",
    remark: "Identity verified via Digilocker",
    icon: CheckCircle,
    type: "success",
  },
];

export default function UserAuditLog() {
  const { addToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("All");

  const filteredLogs = logs.filter(
    (item) => filterType === "All" || item.type === filterType
  );

  const handleExportCSV = () => {
    const csvContent = generateCSV(
      ["Action", "PerformedBy", "Date", "Time", "IPAddress", "Device", "Remark", "Type"],
      filteredLogs.map((log) => ({
        Action: log.action,
        PerformedBy: log.by,
        Date: log.date,
        Time: log.time,
        IPAddress: log.ip,
        Device: log.device,
        Remark: log.remark,
        Type: log.type,
      }))
    );
    triggerDownload(csvContent, "user_audit_logs.csv", "text/csv");
    addToast("User audit logs exported successfully!", "success");
  };



  const handlePageChange = (page) => {
    setCurrentPage(page);
    addToast(`Switched audit logs page to Page ${page}`, "success");
  };

  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search audit logs, users, IP, actions..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>
        
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="page-title">James Wilson</h1>
            <p className="page-subtitle">Audit Logs</p>
          </div>

          <div className="flex gap-3">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{
                padding: "8px 12px",
                border: "1px solid var(--materio-border)",
                borderRadius: "6px",
                fontSize: "14px",
                outline: "none",
                background: "var(--materio-surface)",
              }}
            >
              <option value="All">All Severities</option>
              <option value="success">Success</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
            </select>
            <button onClick={handleExportCSV} className="secondary-action-btn">
              <Download size={16} /> Export CSV
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-4 rounded-xl border hover:shadow-md transition cursor-pointer"
                onClick={() => addToast(`Stat "${s.title}": ${s.value}`, "success")}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <p className="text-sm text-slate-500 mt-2">{s.title}</p>
                <p className="text-xl font-bold">{s.value}</p>
                {s.sub && (
                  <p className="text-xs text-slate-400">{s.sub}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="grid grid-cols-7 bg-[#2A2454] p-3 text-xs font-semibold text-white">
            <div>ACTION</div>
            <div>PERFORMED BY</div>
            <div>DATE/TIME</div>
            <div>IP ADDRESS</div>
            <div>DEVICE</div>
            <div>REMARKS</div>
            <div>STATUS</div>
          </div>

          {filteredLogs.map((log, i) => {
            const Icon = log.icon;

            return (
              <div
                key={i}
                className="grid grid-cols-7 p-4 border-t items-center hover:bg-slate-50 cursor-pointer"
                onClick={() => addToast(`Clicked audit record: ${log.action} by ${log.by}`, "success")}
              >
                <div className="flex items-center gap-2 font-medium">
                  <Icon size={16} className="text-indigo-900" />
                  {log.action}
                </div>

                <div className="text-sm text-slate-600">{log.by}</div>
                <div className="text-sm text-slate-600">
                  {log.date} {log.time}
                </div>
                <div className="text-sm text-slate-600">{log.ip}</div>
                <div className="text-sm text-slate-600">{log.device}</div>
                <div className="text-sm text-slate-600">{log.remark}</div>

                <div>
                  {log.type === "danger" && (
                    <span className="text-red-600 text-sm font-medium">
                      Alert
                    </span>
                  )}

                  {log.type === "success" && (
                    <span className="text-green-600 text-sm font-medium">
                      Success
                    </span>
                  )}

                  {log.type === "info" && (
                    <span className="text-blue-600 text-sm font-medium">
                      Info
                    </span>
                  )}

                  {log.type === "warning" && (
                    <span className="text-orange-600 text-sm font-medium">
                      Warning
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-end gap-2 text-sm mt-4">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="px-3 py-1 border rounded bg-white hover:bg-slate-50 cursor-pointer"
          >
            Prev
          </button>
          <button
            onClick={() => handlePageChange(1)}
            className={`px-3 py-1 border rounded cursor-pointer ${
              currentPage === 1 ? "bg-[#2A2454] text-white" : "bg-white"
            }`}
          >
            1
          </button>
          <button
            onClick={() => handlePageChange(2)}
            className={`px-3 py-1 border rounded cursor-pointer ${
              currentPage === 2 ? "bg-[#2A2454] text-white" : "bg-white"
            }`}
          >
            2
          </button>
          <button
            onClick={() => handlePageChange(Math.min(2, currentPage + 1))}
            className="px-3 py-1 border rounded bg-white hover:bg-slate-50 cursor-pointer"
          >
            Next
          </button>
        </div>

      </div>
    </AdminShell>
  );
}