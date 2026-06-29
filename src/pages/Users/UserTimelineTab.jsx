import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useApp } from "../../hooks/useApp";
import { ROUTES } from "../../config/routes";
import { useToast } from "../../components/common/ToastNotification";
import { triggerDownload, generateCSV } from "../../utils/downloadHelper";
import {
  LogIn,
  Calendar,
  Wallet,
  FileText,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    title: "Successful Login",
    time: "2h ago • 192.168.1.45",
    description:
      "Authenticated via Chrome 118 on MacOS. Session started from Mumbai, IN.",
    color: "bg-slate-100",
    icon: LogIn,
  },
  {
    title: "Booking Created #BK-88201",
    time: "Yesterday, 4:15 PM",
    description:
      "New booking initiated for Deep Home Cleaning service.",
    color: "bg-indigo-100",
    icon: Calendar,
  },
  {
    title: "Wallet Credit +₹500",
    time: "Jan 14, 2024",
    description: "Payment successful via HDFC Credit Card.",
    color: "bg-orange-100",
    icon: Wallet,
  },
  {
    title: "Document Uploaded",
    time: "Jan 12, 2024",
    description: "Identity verification document uploaded.",
    color: "bg-slate-100",
    icon: FileText,
  },
  {
    title: "Account Registration",
    time: "Jan 12, 2024",
    description: "User registered successfully via mobile app.",
    color: "bg-indigo-100",
    icon: UserPlus,
  },
];

export default function UserTimelineTab() {
  const { navigate } = useApp();
  const { addToast } = useToast();

  const handleExportLog = () => {
    const csvData = activities.map((a) => ({
      Title: a.title,
      Time: a.time,
      Description: a.description,
    }));
    const csvContent = generateCSV(["Title", "Time", "Description"], csvData);
    triggerDownload(csvContent, "user_activity_timeline.csv", "text/csv");
    addToast("Activity timeline logs exported successfully!", "success");
  };

  const handleQuickNote = () => {
    addToast("Quick Note saved for Rahul Sharma!", "success");
  };

  const handleRequestFullLogs = () => {
    addToast("Full compliance audit logs requested from server and queued for review.", "success");
  };

  return (
    <AdminShell activeTab="User Management" searchPlaceholder="Search users...">
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>
        
        {/* BREADCRUMB */}
        <div>
          <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "8px" }}>
            User & Partner Admin / User Profile / <span style={{ color: "#696CFF" }}>Timeline</span>
          </div>

          <div className="flex justify-between items-start mt-2">
            <div>
              <h1 className="page-title">
                Activity Timeline
              </h1>
              <p className="page-subtitle">
                Detailed historical log for Rahul Sharma
              </p>
            </div>

            <div className="flex gap-3">
              <button onClick={handleExportLog} className="secondary-action-btn">
                Export Log
              </button>
              <button onClick={handleQuickNote} className="primary-action-btn">
                Quick Note
              </button>
            </div>
          </div>
        </div>

        {/* SUB-TABS ROUTING */}
        <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid var(--materio-border)", paddingBottom: "12px", marginBottom: "24px" }}>
          <button onClick={() => { navigate(ROUTES.users); addToast("Navigating to Overview", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Overview
          </button>
          <button onClick={() => { navigate(ROUTES.userDocuments); addToast("Navigating to KYC & Docs", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            KYC & Docs
          </button>
          <button onClick={() => { navigate(ROUTES.userTimeline); addToast("Reloaded Timeline", "success"); }} style={{ padding: "8px 16px", border: "1.5px solid #2A2454", borderRadius: "8px", background: "#e0e7ff", color: "#2A2454", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Activity Timeline
          </button>
          <button onClick={() => { navigate(ROUTES.userWallets); addToast("Navigating to Transaction History", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Transaction History
          </button>
          <button onClick={() => { navigate(ROUTES.userComplaints); addToast("Navigating to Support Tickets", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Support Tickets
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9">
            <div className="bg-white border rounded-xl p-6">
              <div className="flex justify-between mb-8">
                <h3 className="text-2xl font-semibold">
                  Chronological Activity
                </h3>
                <span className="text-sm text-slate-500">
                  All Activities
                </span>
              </div>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-slate-200"></div>

                {activities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="relative flex gap-5 pb-10">
                      <div className={`w-10 h-10 rounded-lg ${item.color} z-10 flex items-center justify-center`}>
                        {Icon && <Icon size={18} />}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-lg">
                            {item.title}
                          </h4>
                          <span className="text-sm text-slate-400">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-slate-500 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-span-3 space-y-4">
            <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Login Count: 124, Success Rate: 98%", "success")}>
              <h3 className="font-semibold text-lg">User Stats</h3>
              <div className="mt-6">
                <div className="flex justify-between">
                  <span>Login Count</span>
                  <span className="font-bold text-indigo-700">124</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span>Success Rate</span>
                  <span className="font-bold text-orange-600">98%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Devices checked: MacBook Pro 14, iPhone 15 Pro", "success")}>
              <h3 className="font-semibold">Known Devices</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-medium">MacBook Pro 14"</p>
                  <p className="text-xs text-slate-500">
                    Last active 2h ago
                  </p>
                </div>
                <div>
                  <p className="font-medium">iPhone 15 Pro</p>
                  <p className="text-xs text-slate-500">
                    Last active 1 day ago
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2A2454] text-white rounded-xl p-6">
              <h3 className="font-semibold text-lg">
                Need deep audit?
              </h3>
              <p className="mt-3 text-sm opacity-90">
                Generate a full compliance report.
              </p>
              <button onClick={handleRequestFullLogs} className="w-full mt-5 bg-white text-[#2A2454] py-2 rounded-lg font-semibold cursor-pointer">
                Request Full Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}