import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { usersMockData } from "./usersMockData";
import { useApp } from "../../hooks/useApp";
import { ROUTES } from "../../config/routes";
import { useToast } from "../../components/common/ToastNotification";
import { triggerDownload, generateCSV } from "../../utils/downloadHelper";
import {
  Users,
  CheckCircle,
  DollarSign,
  Gift,
  Filter,
  Download,
  TrendingUp,
} from "lucide-react";

export default function UserReferralsPage() {
  const { navigate } = useApp();
  const { addToast } = useToast();

  const user = usersMockData[0];

  const [filterStatus, setFilterStatus] = useState("All");

  const allReferrals = user.referrals.referredUsers.map((name, index) => {
    const statuses = ["Successful", "Pending", "Failed"];
    return {
      name,
      email: `user${index + 1}@example.com`,
      joined: "2026-05-10",
      reward: "₹150",
      status: statuses[index % statuses.length],
    };
  });

  const filteredReferrals = allReferrals.filter(
    (item) => filterStatus === "All" || item.status === filterStatus
  );

  const handleExportReport = () => {
    const csvContent = generateCSV(['Name', 'Email', 'Joined', 'Reward', 'Status'], filteredReferrals);
    triggerDownload(csvContent, `${user.name.toLowerCase().replace(/ /g, '_')}_referrals_export.csv`, 'text/csv');
    addToast(`Referrals ledger for ${user.name} exported successfully!`, "success");
  };

  const handleViewProfile = (referredName) => {
    addToast(`Loading profile summary details for referred user: ${referredName}`, "success");
  };

  const handleActivateBonus = () => {
    addToast(`Referral bonus boost campaign successfully enabled for ${user.name}!`, "success");
  };

  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search referrals or users..."
    >
      <div style={{ paddingBottom: "40px" }} className="space-y-6">
        
        {/* Header & Breadcrumbs */}
        <div style={{ marginBottom: "24px" }}>
          <h1 className="page-title">Referral Ledger</h1>
          <div style={{ fontSize: "13px", color: "var(--muted)" }}>
            User & Partner Admin / User Management / <span style={{ color: "#696CFF" }}>Referrals</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Profile Card */}
          <div className="col-span-4 bg-white border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex gap-5">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-slate-500 mt-1" style={{ fontSize: "13px" }}>
                  {user.membershipType} • Joined {user.registrationDate}
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                    Referral Hero
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    Top 1%
                  </span>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="col-span-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ width: "100%" }}>
              <div className="bg-white border rounded-xl p-4 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Total users referred: 9", "success")}>
                <Users size={20} className="text-indigo-600 mb-2" />
                <p className="text-xs text-slate-500">Referrals</p>
                <h3 className="text-2xl font-bold">{user.referrals.totalReferrals}</h3>
              </div>
              <div className="bg-white border rounded-xl p-4 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Successful referrals: 9", "success")}>
                <CheckCircle size={20} className="text-green-600 mb-2" />
                <p className="text-xs text-slate-500">Successful</p>
                <h3 className="text-2xl font-bold">{user.referrals.totalReferrals}</h3>
              </div>
              <div className="bg-white border rounded-xl p-4 hover:shadow-md transition cursor-pointer" onClick={() => addToast(`Customer Referral Code: ${user.referrals.referralCode}`, "success")}>
                <Gift size={20} className="text-orange-500 mb-2" />
                <p className="text-xs text-slate-500">Code</p>
                <h3 className="text-sm font-black text-indigo-950 mt-1">{user.referrals.referralCode}</h3>
              </div>
              <div className="bg-white border rounded-xl p-4 hover:shadow-md transition cursor-pointer" onClick={() => addToast(`Total earned from referrals: ₹${user.referrals.earnedAmount}`, "success")}>
                <DollarSign size={20} className="text-purple-600 mb-2" />
                <p className="text-xs text-slate-500">Earnings</p>
                <h3 className="text-2xl font-bold">₹{user.referrals.earnedAmount}</h3>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-4 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Referrals performance growth: 22%", "success")}>
                <TrendingUp size={20} />
                <p className="text-xs opacity-90 mt-1">Growth Rate</p>
                <h3 className="text-2xl font-bold">+22%</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid var(--materio-border)", paddingBottom: "12px", marginTop: "24px" }}>
          <button onClick={() => { navigate(ROUTES.users); addToast("Navigating to Overview", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Overview
          </button>
          <button onClick={() => { navigate(ROUTES.userActivityLogs); addToast("Navigating to Activity Logs", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Activity Logs
          </button>
          <button onClick={() => { navigate(ROUTES.userReferrals); addToast("Reloaded Referrals Ledger", "success"); }} style={{ padding: "8px 16px", border: "1.5px solid #2A2454", borderRadius: "8px", background: "#e0e7ff", color: "#2A2454", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Referrals
          </button>
          <button onClick={() => { navigate(ROUTES.userWallets); addToast("Navigating to Wallet Transactions", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Wallet Transactions
          </button>
          <button onClick={() => { navigate(ROUTES.userTimeline); addToast("Navigating to Timeline", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Timeline
          </button>
        </div>

        {/* Referral History Table */}
        <div className="bg-white border rounded-xl overflow-hidden mt-6">
          <div className="p-5 border-b flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Referral History</h3>
              <p className="text-xs text-slate-500">Showing all users referred by {user.name}</p>
            </div>
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
                <option value="Successful">Successful</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
              <button onClick={handleExportReport} className="secondary-action-btn">
                <Download size={16} /> Export Report
              </button>
            </div>
          </div>

          <table className="w-full" style={{ borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
            <thead>
              <tr className="custom-table-header">
                <th className="p-4" style={{ color: "#fff", fontWeight: "700" }}>User</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Date Joined</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Reward</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Status</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredReferrals.map((item, index) => (
                <tr key={index} className="border-t hover:bg-slate-50" style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td className="p-4">
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.email}</p>
                    </div>
                  </td>
                  <td>{item.joined}</td>
                  <td style={{ fontWeight: "700", color: "#2A2454" }}>{item.reward}</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleViewProfile(item.name)} style={{ border: "none", background: "none", color: "#696CFF", fontWeight: "800", cursor: "pointer" }}>
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Boost Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border rounded-xl p-6 flex justify-between items-center mt-6">
          <div>
            <h3 className="text-lg font-bold text-amber-950">Boost {user.name}'s Referrals 🚀</h3>
            <p className="text-slate-600 text-sm mt-1">Enable a limited-time bonus campaign for this user's profile.</p>
          </div>
          <button onClick={handleActivateBonus} className="primary-action-btn" style={{ background: "#d97706", boxShadow: "none" }}>
            Activate Bonus
          </button>
        </div>

      </div>
    </AdminShell>
  );
}