import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  TrendingUp,
  Users,
} from "lucide-react";

export default function UserWalletPage() {
  return (
    <AdminShell
      activeTab="User Wallets"
      searchPlaceholder="Search users, transactions, wallets..."
    >
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Wallet Management</h1>
            <p className="text-sm text-slate-500">
              Track user balances, credits & transactions
            </p>
          </div>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Wallet size={16} /> Wallet Report
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition">
            <div className="flex justify-between">
              <Wallet className="text-indigo-600" />
              <span className="text-xs text-green-600">+12%</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Total Balance</p>
            <h2 className="text-2xl font-bold">₹1,24,500</h2>
          </div>

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition">
            <div className="flex justify-between">
              <ArrowUpRight className="text-green-600" />
              <span className="text-xs text-green-600">Income</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Total Credits</p>
            <h2 className="text-2xl font-bold text-green-600">₹80,000</h2>
          </div>

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition">
            <div className="flex justify-between">
              <ArrowDownLeft className="text-red-600" />
              <span className="text-xs text-red-600">Expense</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Total Debits</p>
            <h2 className="text-2xl font-bold text-red-600">₹40,000</h2>
          </div>

          <div className="bg-white border rounded-xl p-5 hover:shadow-md transition">
            <div className="flex justify-between">
              <TrendingUp className="text-indigo-600" />
              <span className="text-xs text-indigo-600">Growth</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Monthly Growth</p>
            <h2 className="text-2xl font-bold">+18%</h2>
          </div>

        </div>

        {/* QUICK INFO STRIP */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-5 flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Wallet System Status</h2>
            <p className="text-sm opacity-80">
              All transactions are running normally
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <div>
              <p className="opacity-70">Active Users</p>
              <p className="font-bold">2,450</p>
            </div>
            <div>
              <p className="opacity-70">Today TXN</p>
              <p className="font-bold">342</p>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-6 bg-slate-100 p-3 text-xs font-semibold text-slate-600">
            <div>USER</div>
            <div>TYPE</div>
            <div>AMOUNT</div>
            <div>STATUS</div>
            <div>METHOD</div>
            <div>DATE</div>
          </div>

          {/* ROWS */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-6 p-4 border-t items-center hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-2 font-medium">
                <Users size={16} />
                James Wilson
              </div>

              <div>
                {i % 2 === 0 ? (
                  <span className="text-green-600 text-sm font-medium">
                    Credit
                  </span>
                ) : (
                  <span className="text-red-600 text-sm font-medium">
                    Debit
                  </span>
                )}
              </div>

              <div className="font-semibold">
                ₹{(Math.random() * 5000).toFixed(0)}
              </div>

              <div>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                  Success
                </span>
              </div>

              <div className="text-sm text-slate-500">
                UPI / Card
              </div>

              <div className="text-sm text-slate-500">
                Oct 24, 2023
              </div>
            </div>
          ))}

        </div>

        {/* FOOTER NOTE */}
        <div className="text-xs text-slate-400 text-center">
          Showing latest wallet transactions • Auto-updated every 5 min
        </div>

      </div>
    </AdminShell>
  );
}