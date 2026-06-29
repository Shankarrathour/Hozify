import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  Filter,
  Download,
  CheckCircle,
  AlertCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const settlements = [
  {
    id: "#SET-94021",
    initials: "JD",
    name: "John Doe",
    email: "j.doe@example.com",
    amount: "$250.00",
    status: "PAID",
    method: "ACH Transfer",
    date: "Oct 24, 2023, 14:20",
  },
  {
    id: "#SET-94020",
    initials: "AS",
    name: "Alice Smith",
    email: "alice.s@design.co",
    amount: "$1,200.00",
    status: "PROCESSING",
    method: "Wire Transfer",
    date: "Oct 24, 2023, 11:45",
  },
  {
    id: "#SET-94019",
    initials: "BW",
    name: "Bob Williams",
    email: "bob.w@tech.org",
    amount: "$45.00",
    status: "FAILED",
    method: "PayPal",
    date: "Oct 23, 2023, 16:10",
  },
  {
    id: "#SET-94018",
    initials: "EK",
    name: "Emma Knight",
    email: "eknight@gmail.com",
    amount: "$500.00",
    status: "PAID",
    method: "ACH Transfer",
    date: "Oct 23, 2023, 09:30",
  },
  {
    id: "#SET-94017",
    initials: "MT",
    name: "Marcus Thorne",
    email: "m.thorne@corp.net",
    amount: "$125.00",
    status: "PAID",
    method: "PayPal",
    date: "Oct 22, 2023, 18:50",
  },
];

function MetricCard({ title, value, change, color = "text-emerald-500", onClick }) {
  return (
    <div 
      onClick={onClick}
      className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div>
        <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
          {title}
        </p>
        <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
          {value}
        </h3>
      </div>
      
      <div className="flex justify-between items-center mt-2 w-full">
        <span className={`text-[9px] font-semibold ${color}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

export default function RewardSettlementsPage() {
  const { addToast } = useToast();
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="min-h-screen bg-slate-100 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-indigo-955">
              Reward Settlements
            </h1>
            <p className="text-slate-550 mt-1 text-sm">
              Financial overview of all disbursed and pending reward distributions.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => addToast("Opening reward settlement filters...", "success")}
              className="bg-white border border-slate-350 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-all cursor-pointer shadow-sm text-slate-700"
            >
              <Filter size={13} />
              <span>Filter</span>
            </button>

            <button 
              onClick={() => addToast("Exporting reward settlements ledger CSV...", "success")}
              className="bg-white border border-slate-355 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-all cursor-pointer shadow-sm text-slate-700"
            >
              <Download size={13} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Total Disbursed"
            value="$128,450.00"
            change="↗ +12.5% vs last month"
            onClick={() => addToast("Card clicked: Total disbursed settlements analytics", "success")}
          />

          <MetricCard
            title="Pending Settlement"
            value="$14,200.50"
            change="142 individual payments"
            color="text-slate-500"
            onClick={() => addToast("Card clicked: Pending settlements analytics", "success")}
          />

          <MetricCard
            title="Processing"
            value="$5,120.00"
            change="Awaiting bank confirmation"
            color="text-blue-600"
            onClick={() => addToast("Card clicked: Processing settlements details", "success")}
          />

          <MetricCard
            title="Failed Rate"
            value="0.42%"
            change="6 transactions this week"
            color="text-red-500"
            onClick={() => addToast("Card clicked: Failed settlements analytics", "success")}
          />
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8 shadow-sm">
          <div className="flex justify-between items-center p-5 border-b border-slate-200">
            <h2 className="font-bold text-sm text-indigo-955">
              Transaction History
            </h2>
            <span className="text-xs text-slate-500">
              Showing 1-5 of 2,450 results
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px] border-collapse">
              <thead className="bg-slate-50">
                <tr className="text-left text-[10px] font-bold text-slate-500 uppercase border-b border-slate-200">
                  <th className="p-4 pl-6">Settlement ID</th>
                  <th className="p-4">Recipient</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Method</th>
                  <th className="p-4">Settlement Date</th>
                  <th className="p-4 text-right pr-6">Actions</th>
                </tr>
              </thead>

              <tbody>
                {settlements.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => addToast(`Opening detailed transaction logs for settlement ${item.id}`, "success")}
                    className="border-t border-slate-100 hover:bg-slate-50 transition-all cursor-pointer font-medium text-xs text-slate-650"
                  >
                    <td className="p-4 pl-6 font-bold text-indigo-900">
                      {item.id}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-extrabold text-slate-700">
                          {item.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-semibold">
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 font-bold text-slate-900">
                      {item.amount}
                    </td>

                    <td className="p-4 font-semibold">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold ${
                          item.status === "PAID"
                            ? "bg-green-150 text-green-700 bg-green-50 border border-green-100"
                            : item.status === "FAILED"
                            ? "bg-red-150 text-red-700 bg-red-50 border border-red-100"
                            : "bg-blue-150 text-blue-700 bg-blue-50 border border-blue-100"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4 text-slate-500 font-semibold">
                      {item.method}
                    </td>

                    <td className="p-4 text-slate-400 font-semibold">
                      {item.date}
                    </td>

                    <td className="p-4 text-right pr-6" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => addToast(`Opening detailed transaction logs for settlement ${item.id}`, "success")}
                        className="text-indigo-700 hover:text-indigo-900 font-bold cursor-pointer text-xs"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-550 font-semibold">
            <div className="flex gap-2">
              <button 
                onClick={() => addToast("Loaded previous settlement history page", "success")}
                className="w-8 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer transition-all"
              >
                <ChevronLeft size={13} />
              </button>
              <button className="w-8 h-8 rounded-lg bg-indigo-900 text-white font-bold text-xs">
                1
              </button>
              <button onClick={() => addToast("Loaded page 2", "success")} className="w-8 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 font-bold text-xs cursor-pointer">
                2
              </button>
              <button onClick={() => addToast("Loaded page 3", "success")} className="w-8 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 font-bold text-xs cursor-pointer">
                3
              </button>
              <button 
                onClick={() => addToast("Loaded next settlement history page", "success")}
                className="w-8 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer transition-all"
              >
                <ChevronRight size={13} />
              </button>
            </div>

            <button 
              onClick={() => addToast("Adjusting page records count...", "success")}
              className="px-3 py-1 border border-slate-300 rounded-lg bg-white text-xs font-bold hover:bg-slate-50 cursor-pointer shadow-sm text-slate-700"
            >
              Show 10
            </button>
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="font-bold text-indigo-955 text-sm">
                  Disbursement Trend
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Last 30 days performance
                </p>
              </div>

              <div className="text-xs text-slate-550 font-bold">
                ● Paid &nbsp; ○ Pending
              </div>
            </div>

            <div className="h-48 flex items-end gap-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
              {[65,58,69,45,72,53,58,84].map((h, i) => (
                <div
                  key={i}
                  onClick={() => addToast(`Disbursement milestone ${i + 1}: value ${h}%`, "success")}
                  className={`flex-1 rounded-t cursor-pointer hover:opacity-85 transition-all ${
                    i === 7 ? "bg-indigo-900" : "bg-indigo-200"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-indigo-955 text-sm mb-5">
                Settlement Health
              </h3>

              <div className="space-y-4 text-xs font-bold text-slate-650">
                <div onClick={() => addToast("ACH Success Rate metrics...", "success")} className="cursor-pointer group">
                  <div className="flex justify-between mb-1.5">
                    <span className="group-hover:text-indigo-900">ACH Success Rate</span>
                    <span>99.8%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[99%]" />
                  </div>
                </div>

                <div onClick={() => addToast("PayPal Success Rate metrics...", "success")} className="cursor-pointer group">
                  <div className="flex justify-between mb-1.5">
                    <span className="group-hover:text-indigo-900">PayPal Success Rate</span>
                    <span>94.2%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-750 w-[94%]" />
                  </div>
                </div>

                <div onClick={() => addToast("Bank Verification Time metrics...", "success")} className="cursor-pointer group">
                  <div className="flex justify-between mb-1.5">
                    <span className="group-hover:text-indigo-900">Bank Verification Time</span>
                    <span>1.2 Days (Avg)</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[70%]" />
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => addToast("Opening fraud risk alert center panel...", "success")}
              className="w-full mt-6 bg-indigo-900 hover:bg-indigo-850 text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              View Fraud Alerts
            </button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}