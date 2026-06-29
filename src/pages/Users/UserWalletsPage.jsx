import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useApp } from "../../hooks/useApp";
import { ROUTES } from "../../config/routes";
import { useToast } from "../../components/common/ToastNotification";
import { triggerDownload, generateCSV } from "../../utils/downloadHelper";
import { usersMockData } from "./usersMockData";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Users,
  Download,
  Filter,
  Eye,
} from "lucide-react";

export default function UserWalletPage() {
  const { navigate } = useApp();
  const { addToast } = useToast();
  const [filterType, setFilterType] = useState("All");

  // Flatten transactions from mock users data
  const allTransactions = useMemo(() => {
    return usersMockData.flatMap((user) =>
      user.wallet.transactions.map((txn) => ({
        ...txn,
        userId: user.id,
        userName: user.name,
        userMobile: user.mobile,
      }))
    );
  }, []);

  // Filtered transactions based on selected filter
  const filteredTransactions = useMemo(() => {
    if (filterType === "All") return allTransactions;
    return allTransactions.filter((t) => t.type === filterType);
  }, [allTransactions, filterType]);

  // Statistics calculation
  const totalBalance = usersMockData.reduce((acc, curr) => acc + curr.wallet.balance, 0);
  const totalCredits = allTransactions
    .filter((t) => t.type === "Credit")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalDebits = allTransactions
    .filter((t) => t.type === "Debit")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const handleExportReport = () => {
    const csvContent = generateCSV(
      ["ID", "Date", "Type", "Amount", "Remarks", "UserName", "UserMobile"],
      filteredTransactions
    );
    triggerDownload(csvContent, "wallet_transactions_report.csv", "text/csv");
    addToast(`Wallet transaction ledger (${filterType} records) exported successfully!`, "success");
  };

  const handleViewDetails = (txn) => {
    addToast(`Transaction details: ID ${txn.id}, Amount ₹${txn.amount}, User: ${txn.userName}`, "success");
  };


  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search users, transactions, wallets..."
    >
      <div style={{ paddingBottom: "40px" }} className="space-y-6">
        
        {/* HEADER & BREADCRUMBS */}
        <div style={{ marginBottom: "24px" }}>
          <h1 className="page-title">Wallet Management</h1>
          <div style={{ fontSize: "13px", color: "var(--muted)" }}>
            User & Partner Admin / User Management / <span style={{ color: "#696CFF" }}>User Wallets</span>
          </div>
        </div>

        {/* PROFILE SUB-TABS */}
        <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid var(--materio-border)", paddingBottom: "12px", marginBottom: "24px" }}>
          <button onClick={() => { navigate(ROUTES.users); addToast("Navigating to Overview", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Overview
          </button>
          <button onClick={() => { navigate(ROUTES.userActivityLogs); addToast("Navigating to Activity Logs", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Activity Logs
          </button>
          <button onClick={() => { navigate(ROUTES.userReferrals); addToast("Navigating to Referrals", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Referrals
          </button>
          <button onClick={() => { navigate(ROUTES.userWallets); addToast("Reloaded Wallet Transactions", "success"); }} style={{ padding: "8px 16px", border: "1.5px solid #2A2454", borderRadius: "8px", background: "#e0e7ff", color: "#2A2454", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Wallet Transactions
          </button>
          <button onClick={() => { navigate(ROUTES.userTimeline); addToast("Navigating to Timeline", "success"); }} style={{ padding: "8px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", background: "#fff", color: "#64748b", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Timeline
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast(`Total platform wallet value: ₹${totalBalance.toLocaleString("en-IN")}`, "success")}>
            <div className="flex justify-between">
              <Wallet className="text-indigo-600" />
              <span className="text-xs text-green-600">+12%</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Total Balance</p>
            <h2 className="text-2xl font-bold">₹{totalBalance.toLocaleString("en-IN")}</h2>
          </div>

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast(`Total credit adjustments today: ₹${totalCredits.toLocaleString("en-IN")}`, "success")}>
            <div className="flex justify-between">
              <ArrowUpRight className="text-green-600" />
              <span className="text-xs text-green-600">Income</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Total Credits</p>
            <h2 className="text-2xl font-bold text-green-600">₹{totalCredits.toLocaleString("en-IN")}</h2>
          </div>

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast(`Total debits/deductions: ₹${totalDebits.toLocaleString("en-IN")}`, "success")}>
            <div className="flex justify-between">
              <ArrowDownLeft className="text-red-600" />
              <span className="text-xs text-red-600">Expense</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Total Debits</p>
            <h2 className="text-2xl font-bold text-red-600">₹{totalDebits.toLocaleString("en-IN")}</h2>
          </div>

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Current user wallet growth: 18%", "success")}>
            <div className="flex justify-between">
              <TrendingUp className="text-indigo-600" />
              <span className="text-xs text-indigo-600">Growth</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Monthly Growth</p>
            <h2 className="text-2xl font-bold">+18%</h2>
          </div>
        </div>

        {/* SYSTEM STATUS STRIP */}
        <div className="bg-gradient-to-r from-indigo-900 to-[#2A2454] text-white rounded-xl p-5 flex justify-between items-center cursor-pointer" onClick={() => addToast("Platform payment gateway health: 100% operational", "success")}>
          <div>
            <h2 className="font-semibold">Wallet System Status</h2>
            <p className="text-sm opacity-80">
              All transactions and settlement gateways are running normally.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <div>
              <p className="opacity-70">Active Wallets</p>
              <p className="font-bold">{usersMockData.length}</p>
            </div>
            <div>
              <p className="opacity-70">Today TXN</p>
              <p className="font-bold">{allTransactions.length}</p>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden mt-6">
          <div className="p-5 border-b flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Ledger Transactions</h3>
              <p className="text-xs text-slate-500">Real-time ledger list for all users</p>
            </div>
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{
                  padding: "6px 12px",
                  border: "1px solid var(--materio-border)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  outline: "none",
                  background: "var(--materio-surface)",
                }}
              >
                <option value="All">All Types</option>
                <option value="Credit">Credits Only</option>
                <option value="Debit">Debits Only</option>
              </select>
              <button onClick={handleExportReport} className="secondary-action-btn">
                <Download size={16} /> Export CSV
              </button>
            </div>
          </div>

          <table className="w-full" style={{ borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
            <thead>
              <tr className="custom-table-header">
                <th className="p-4" style={{ color: "#fff", fontWeight: "700" }}>User</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Type</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Amount</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Remarks</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Date</th>
                <th style={{ color: "#fff", fontWeight: "700" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn, index) => (
                <tr key={index} className="border-t hover:bg-slate-50" style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td className="p-4">
                    <div className="flex items-center gap-2 font-medium">
                      <Users size={16} className="text-indigo-900" />
                      <div>
                        <p className="font-semibold text-slate-800">{txn.userName}</p>
                        <p className="text-xs text-slate-400">{txn.userMobile}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {txn.type === "Credit" ? (
                      <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                        Credit
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                        Debit
                      </span>
                    )}
                  </td>
                  <td className="font-bold text-slate-800">₹{txn.amount.toLocaleString("en-IN")}</td>
                  <td className="text-slate-600">{txn.remarks}</td>
                  <td className="text-slate-500">{txn.date}</td>
                  <td>
                    <button
                      onClick={() => handleViewDetails(txn)}
                      style={{
                        border: "none",
                        background: "none",
                        color: "#2A2454",
                        fontWeight: "700",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Eye size={14} /> Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-xs text-slate-400 text-center mt-4">
          Showing {filteredTransactions.length} transactions • Auto-updated every 5 min
        </div>
      </div>
    </AdminShell>
  );
}