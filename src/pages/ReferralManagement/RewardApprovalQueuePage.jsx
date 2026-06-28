import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  CheckCircle2,
  XCircle,
  Filter,
  ShieldAlert,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const rewards = [
  {
    initials: "AS",
    name: "Alex Simmons",
    email: "alex.s@enterprise.com",
    achievement: "Q3 Growth Milestone",
    subtitle: "10 Successful Conversions",
    reward: "$250.00",
    date: "Oct 12, 2023 14:32",
  },
  {
    initials: "MJ",
    name: "Marcus Johnson",
    email: "m.johnson@techflow.io",
    achievement: "Enterprise Referral",
    subtitle: "Qualified Lead: ACME Corp",
    reward: "$1,500.00",
    date: "Oct 12, 2023 11:15",
  },
  {
    initials: "SL",
    name: "Sarah Lin",
    email: "slin88@gmail.com",
    achievement: "Referral Bonus",
    subtitle: "Duplicate ID Detected",
    reward: "$50.00",
    date: "Oct 11, 2023 23:45",
    alert: true,
  },
  {
    initials: "DB",
    name: "David Brooks",
    email: "d.brooks@creative.co",
    achievement: "Annual Partner Reward",
    subtitle: "Top Tier Partner Bonus",
    reward: "$5,000.00",
    date: "Oct 11, 2023 18:20",
  },
];

export default function RewardApprovalQueuePage() {
  const { addToast } = useToast();
  const [selectedItems, setSelectedItems] = useState({});

  const handleToggleSelect = (index) => {
    setSelectedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleToggleAll = (e) => {
    const isChecked = e.target.checked;
    const updated = {};
    if (isChecked) {
      rewards.forEach((_, idx) => {
        updated[idx] = true;
      });
    }
    setSelectedItems(updated);
  };

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

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
              Reward Approval Queue
            </h1>
            <p className="text-slate-600 mt-1 text-sm">
              Review and authorize referral payouts across active campaigns.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => {
                if (selectedCount === 0) {
                  addToast("Please select items first to bulk approve", "success");
                } else {
                  addToast(`Bulk approved ${selectedCount} selected reward payouts successfully!`, "success");
                  setSelectedItems({});
                }
              }}
              className="bg-indigo-900 hover:bg-indigo-850 text-white px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-sm"
            >
              Bulk Approve {selectedCount > 0 && `(${selectedCount})`}
            </button>

            <button 
              onClick={() => addToast("Opening approval queue filters...", "success")}
              className="border border-slate-350 bg-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-all cursor-pointer shadow-sm text-slate-700"
            >
              <Filter size={13} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Card 1 */}
          <div 
            onClick={() => addToast("Card clicked: Pending Approvals count details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Pending Approvals
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  124
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Clock size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-red-500 font-semibold">+12 today</span>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => addToast("Card clicked: Queue Value summary details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Queue Value
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  $12,450
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <DollarSign size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-slate-500 font-semibold">USD Currency</span>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => addToast("Card clicked: Processing Time analysis", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Avg. Processing Time
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  4.2h
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Clock size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">Excellent</span>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => addToast("Card clicked: Fraud Risk Alerts list", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Fraud Risk Alerts
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight text-red-500">
                  3
                </h3>
              </div>
              <div className="text-red-550 mt-0.5">
                <ShieldAlert size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-red-500 font-semibold bg-red-50 px-1 rounded">Requires Review</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse">
              <thead className="bg-slate-50">
                <tr className="text-left text-[10px] font-bold text-slate-500 uppercase border-b border-slate-200">
                  <th className="p-4 w-12">
                    <input 
                      type="checkbox" 
                      onChange={handleToggleAll}
                      checked={rewards.length > 0 && Object.keys(selectedItems).length === rewards.length}
                    />
                  </th>
                  <th className="p-4">Referrer</th>
                  <th className="p-4">Achievement</th>
                  <th className="p-4">Reward Value</th>
                  <th className="p-4">Date Logged</th>
                  <th className="p-4 text-center pr-6">Actions</th>
                </tr>
              </thead>

              <tbody>
                {rewards.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => addToast(`Opening audit history details for ${item.name}`, "success")}
                    className="border-t border-slate-100 hover:bg-slate-50 transition-all cursor-pointer font-medium text-xs"
                  >
                    <td className="p-4" onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="checkbox" 
                        checked={!!selectedItems[index]}
                        onChange={() => handleToggleSelect(index)}
                      />
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-[10px] font-extrabold text-indigo-700">
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

                    <td className="p-4">
                      <h4 className="font-bold text-slate-900">
                        {item.achievement}
                      </h4>
                      <p className={`text-[10px] font-bold ${item.alert ? "text-red-500" : "text-indigo-650"}`}>
                        {item.subtitle}
                      </p>
                    </td>

                    <td className="p-4">
                      <span className="bg-indigo-900 text-white px-3 py-1 rounded text-xs font-bold">
                        {item.reward}
                      </span>
                    </td>

                    <td className="p-4 text-slate-400 font-semibold">
                      {item.date}
                    </td>

                    <td className="p-4 text-center pr-6" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-center gap-4">
                        <button 
                          onClick={() => addToast(`Successfully approved reward payout for ${item.name}!`, "success")}
                          className="hover:text-indigo-900 transition-all cursor-pointer"
                          aria-label={`Approve reward for ${item.name}`}
                        >
                          <CheckCircle2 size={18} className="text-indigo-700 hover:text-indigo-900" />
                        </button>

                        <button 
                          onClick={() => addToast(`Rejected and flagged reward payout for ${item.name}`, "success")}
                          className="hover:text-red-750 transition-all cursor-pointer"
                          aria-label={`Reject reward for ${item.name}`}
                        >
                          <XCircle size={18} className="text-red-500 hover:text-red-700" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-500 font-semibold">
            <p>
              Showing 4 of 124 pending rewards
            </p>

            <div className="flex gap-2">
              <button 
                onClick={() => addToast("Loaded previous pending reward queue page", "success")}
                className="w-8 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer transition-all"
              >
                <ChevronLeft size={13} />
              </button>
              <button className="w-8 h-8 rounded-lg bg-indigo-900 text-white text-xs font-bold">
                1
              </button>
              <button 
                onClick={() => addToast("Loaded next pending reward queue page", "success")}
                className="w-8 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer transition-all"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}