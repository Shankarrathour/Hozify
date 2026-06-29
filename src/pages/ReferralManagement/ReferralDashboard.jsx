import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Calendar,
  Download,
  Users,
  Target,
  Wallet,
  TrendingUp,
  Plus,
  X,
} from "lucide-react";
import { useToast } from "../../components/common/ToastNotification";

function MetricCard({ title, value, change, icon }) {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
            {title}
          </p>

          <h3 className="text-2xl font-black text-slate-950 mt-4">{value}</h3>

          <p className="text-sm text-emerald-600 font-semibold mt-1">
            {change}
          </p>
        </div>

        <div className="text-indigo-700">{icon}</div>
      </div>
      
      <div className="flex justify-between items-center mt-2 w-full">
        <span className="text-[9px] text-emerald-600 font-semibold">
          {change}
        </span>
        <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-700 w-3/4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function CampaignItem({ icon, title, referrals, conv }) {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-slate-100">
      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700">
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-400">{referrals}</p>
      </div>

      <div className="font-bold text-emerald-600 text-sm">{conv}</div>
    </div>
  );
}

export default function ReferralDashboard() {
  // Dynamic Transactions State
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      user: "John Doe",
      campaign: "Summer Growth",
      code: "SUMMER-991",
      status: "COMPLETED",
      reward: "$25.00",
      date: "2 mins ago",
    },
    {
      id: 2,
      user: "Sarah Adams",
      campaign: "Early Adopter",
      code: "ADOPT-221",
      status: "PENDING",
      reward: "$50.00",
      date: "15 mins ago",
    },
    {
      id: 3,
      user: "Marcus Lee",
      campaign: "Loyalty v2",
      code: "LOYAL-456",
      status: "COMPLETED",
      reward: "$10.00",
      date: "1 hour ago",
    },
  ]);

  // Modal aur Input States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    campaign: "Summer Growth",
    reward: "",
  });

  // Form submit handle karne ke liye function
  const handleCreateReferral = (e) => {
    e.preventDefault();
    if (!formData.user || !formData.reward) return;

    // Naya dynamic data generate ho raha hai
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const generatedCode = `${formData.campaign.split(" ")[0].toUpperCase()}-${randomSuffix}`;

    const newTransaction = {
      id: Date.now(),
      user: formData.user,
      campaign: formData.campaign,
      code: generatedCode,
      status: "PENDING",
      reward: formData.reward.startsWith("$") ? formData.reward : `$${formData.reward}`,
      date: "Just now",
    };

    // State update aur reset
    setTransactions([newTransaction, ...transactions]);
    setFormData({ user: "", campaign: "Summer Growth", reward: "" });
    setIsModalOpen(false);
  };

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="p-4 md:p-6 lg:p-8 bg-slate-100 min-h-screen w-full overflow-x-hidden">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-black text-indigo-955">
              Referral Management
            </h1>
            <p className="text-slate-500 mt-2">
              High-level overview of referral performance and ecosystem health.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl font-medium text-sm">
              <Calendar size={14} />
              Last 30 Days
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl font-medium text-sm">
              <Download size={14} />
              Export PDF
            </button>

            {/* NAYA BUTTON: Open Create Referral Modal */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-800 text-white rounded-xl shadow-md hover:bg-indigo-900 transition-all font-bold text-sm"
            >
              <Plus size={16} />
              Create Referral
            </button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
          <MetricCard
            title="Total Referrals"
            value={(12842 + (transactions.length - 3)).toLocaleString()}
            change="+12.5%"
            icon={<Users size={14} />}
            onClick={() => addToast("Card clicked: Total Referrals volume history", "success")}
          />
          <MetricCard
            title="Conversion Rate"
            value="24.8%"
            change="+2.1%"
            icon={<Target size={14} />}
            onClick={() => addToast("Card clicked: Conversion Rate dynamics", "success")}
          />
          <MetricCard
            title="Rewards Paid"
            value="$142.5k"
            change="Target $150k"
            icon={<Wallet size={14} />}
            onClick={() => addToast("Card clicked: Rewards Paid ledger", "success")}
          />
          <MetricCard
            title="ROI"
            value="4.2x"
            change="+0.4x"
            icon={<TrendingUp size={14} />}
            onClick={() => addToast("Card clicked: ROI performance analytics", "success")}
          />
        </div>

        {/* MIDDLE SECTION: CHART & TOP CAMPAIGNS */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
          {/* CHART */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between mb-6">
              <h3 className="font-black text-indigo-950">Referral Volume</h3>
              <div className="flex gap-2">
                <button className="bg-indigo-800 text-white px-3 py-1 rounded text-xs">
                  Daily
                </button>
                <button className="text-xs text-slate-500">Weekly</button>
              </div>
            </div>

            <div className="h-[320px] md:h-[380px] flex items-end justify-between px-2 md:px-6">
              {[40, 55, 80, 65, 58, 90, 76].map((h, index) => (
                <div
                  key={index}
                  className={`w-10 rounded-t ${
                    index === 2 ? "bg-indigo-800" : "bg-indigo-100"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-500 px-3">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>
          </div>

          {/* RIGHT PANEL: CAMPAIGNS */}
          <div className="bg-white rounded-2xl border border-slate-300 p-5 shadow-md">
            <h3 className="font-black text-indigo-950 mb-4">
              Top Performing Campaigns
            </h3>
            <CampaignItem
              icon="🎯"
              title="Summer Growth Blitz"
              referrals="3,420 Referrals"
              conv="32%"
              onClick={() => addToast("Opening campaign metrics for Summer Growth Blitz", "success")}
            />
            <CampaignItem
              icon="🚀"
              title="Early Adopter IV"
              referrals="2,105 Referrals"
              conv="28%"
              onClick={() => addToast("Opening campaign metrics for Early Adopter IV", "success")}
            />
            <CampaignItem
              icon="🎁"
              title="Black Friday Social"
              referrals="1,890 Referrals"
              conv="21%"
              onClick={() => addToast("Opening campaign metrics for Black Friday Social", "success")}
            />
            <CampaignItem
              icon="⭐"
              title="Loyalty Rewards"
              referrals="1,540 Referrals"
              conv="18%"
              onClick={() => addToast("Opening campaign metrics for Loyalty Rewards", "success")}
            />
          </div>
        </div>

        {/* RECENT TRANSACTIONS TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <h3 className="font-black text-indigo-950">
              Recent Transactions
            </h3>
            <button className="font-bold text-indigo-700 text-sm">
              View History
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 text-xs font-bold text-slate-500">USER</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500">CAMPAIGN</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500">REFERRAL CODE</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500">STATUS</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500">REWARD</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500">DATE</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-t hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-sm font-semibold text-slate-800">{tx.user}</td>
                    <td className="p-4 text-sm text-slate-600">{tx.campaign}</td>
                    <td className="p-4 text-sm font-mono text-indigo-600 font-bold">{tx.code}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          tx.status === "COMPLETED"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-bold text-slate-900">{tx.reward}</td>
                    <td className="p-4 text-sm text-slate-400">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CREATE REFERRAL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-black text-indigo-950 text-lg">Create New Referral</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-200/50 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateReferral} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Harrison"
                  value={formData.user}
                  onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-2">
                  Select Campaign
                </label>
                <select
                  value={formData.campaign}
                  onChange={(e) => setFormData({ ...formData, campaign: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white transition-all"
                >
                  <option value="Summer Growth">Summer Growth</option>
                  <option value="Early Adopter">Early Adopter</option>
                  <option value="Loyalty v2">Loyalty v2</option>
                  <option value="Black Friday">Black Friday</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-2">
                  Reward Value ($)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 25.00"
                  value={formData.reward}
                  onChange={(e) => setFormData({ ...formData, reward: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="flex gap-3 justify-end mt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-800 text-white rounded-xl font-bold text-sm hover:bg-indigo-900 shadow-md transition-all"
                >
                  Generate &amp; Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminShell>
  );
}