import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useApp } from "../../hooks/useApp";
import { ROUTES } from "../../config/routes";
import { useToast } from "../../components/common/ToastNotification";
import { triggerDownload, generateCSV } from "../../utils/downloadHelper";

export default function UserComplaintsPage() {
  const { navigate } = useApp();
  const { addToast } = useToast();
  const [filterStatus, setFilterStatus] = useState("All");

  const complaintsList = [
    { ticketId: "#TK-88210", issueType: "Service Delay", priority: "High", status: "OPEN", assignedAgent: "Alex Rivera" },
    { ticketId: "#TK-88156", issueType: "Payment Failed", priority: "Med", status: "RESOLVED", assignedAgent: "System (Auto)" }
  ];

  const filteredComplaints = complaintsList.filter(
    (item) => filterStatus === "All" || item.status === filterStatus
  );

  const handleEditProfile = () => {
    navigate(ROUTES.users);
    addToast("Redirected to All Users directory to edit profile.", "success");
  };

  const handleActions = () => {
    addToast("Platform action options loaded for Sarah Jenkins.", "success");
  };



  const handleExport = () => {
    const csvContent = generateCSV(["TicketID", "IssueType", "Priority", "Status", "AssignedAgent"], filteredComplaints);
    triggerDownload(csvContent, "user_complaints_report.csv", "text/csv");
    addToast("Complaints report exported successfully!", "success");
  };

  const handleViewTicket = (ticketId) => {
    addToast(`Loading details for ticket ${ticketId}...`, "success");
  };

  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search users, tickets or complaints..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* Header */}
        <div>
          <h1 className="page-title">
            User Complaints
          </h1>
          <p className="page-subtitle">
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
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                    PREMIUM MEMBER
                  </span>
                  <span className="text-slate-500 font-semibold">
                    ID: #HZ-44921
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={handleEditProfile} className="secondary-action-btn font-bold">
                Edit Profile
              </button>
              <button onClick={handleActions} className="primary-action-btn font-bold">
                Actions
              </button>
            </div>
          </div>

          {/* Sub-tabs Routing */}
          <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid var(--materio-border)", paddingBottom: "12px", marginTop: "24px" }}>
            <button onClick={() => { navigate(ROUTES.users); addToast("Navigating to Overview", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
              Overview
            </button>
            <button onClick={() => { navigate(ROUTES.userActivityLogs); addToast("Navigating to Activity Logs", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
              Activity Logs
            </button>
            <button onClick={() => { navigate(ROUTES.userComplaints); addToast("Reloaded Complaints", "success"); }} style={{ padding: "8px 16px", border: "1.5px solid #2A2454", borderRadius: "8px", background: "#e0e7ff", color: "#2A2454", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
              Complaints
            </button>
            <button onClick={() => { navigate(ROUTES.userWallets); addToast("Navigating to Financials", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
              Financials
            </button>
            <button onClick={() => addToast("Sarah Jenkins platform parameters dashboard loaded.", "success")} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
              Settings
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Currently 1 ticket requires resolution.", "success")}>
            <p className="text-sm text-slate-500">Open Complaints</p>
            <h3 className="text-4xl font-bold mt-2">1</h3>
          </div>

          <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Historically 5 tickets resolved successfully.", "success")}>
            <p className="text-sm text-slate-500">Resolved</p>
            <h3 className="text-4xl font-bold text-green-600 mt-2">5</h3>
          </div>

          <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("No complaints currently escalated.", "success")}>
            <p className="text-sm text-slate-500">Escalated</p>
            <h3 className="text-4xl font-bold text-orange-500 mt-2">0</h3>
          </div>
        </div>

        {/* Complaint Table */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-lg">
              Complaint Tickets
            </h3>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: "6px 12px",
                  border: "1px solid var(--materio-border)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  outline: "none",
                  background: "var(--materio-surface)",
                }}
              >
                <option value="All">All Statuses</option>
                <option value="OPEN">Open</option>
                <option value="RESOLVED">Resolved</option>
              </select>
              <button onClick={handleExport} className="secondary-action-btn">
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
              {filteredComplaints.map((item) => (
                <tr key={item.ticketId} className="border-t hover:bg-slate-50">
                  <td className="p-4 text-indigo-600 font-medium">
                    {item.ticketId}
                  </td>
                  <td>{item.issueType}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.priority === "High" ? "bg-red-100 text-red-600" : "bg-orange-100 text-orange-600"
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === "OPEN" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.assignedAgent}</td>
                  <td>
                    <button onClick={() => handleViewTicket(item.ticketId)} className="text-indigo-600 hover:underline font-bold cursor-pointer" style={{ border: "none", background: "none" }}>
                      View Ticket
                    </button>
                  </td>
                </tr>
              ))}
              {filteredComplaints.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-slate-400">
                    No tickets found matching the selected status.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Support Note */}
        <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Audited: Customer frequently files ticket regarding delays.", "success")}>
          <h3 className="font-semibold text-indigo-600">
            Support Intelligence Note
          </h3>
          <p className="text-slate-600 mt-3">
            Sarah Jenkins has a high resolution rate but frequently reports service delay issues. Recommended to review booking assignments and partner performance history.
          </p>
        </div>

      </div>
    </AdminShell>
  );
}