import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Calendar,
  Download,
  Rocket,
  Users,
  DollarSign,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useToast } from "../../components/common/ToastNotification";

const MOCK_CAMPAIGNS = [
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    title: "Summer Blast 2024",
    status: "ACTIVE",
    participants: "4,821",
    rate: "17.4%",
    budget: "$12,400"
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300",
    title: "VIP Rewards Tier",
    status: "ACTIVE",
    participants: "1,055",
    rate: "22.1%",
    budget: "$8,900"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300",
    title: "Global Growth v2",
    status: "PAUSED",
    participants: "2,140",
    rate: "9.5%",
    budget: "$4,200"
  }
];

function MetricCard({
  title,
  value,
  change,
  icon,
  changeColor = "text-emerald-500",
  onClick,
}) {
  return (
    <div 
      onClick={onClick}
      className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start w-full">
        <div>
          <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
            {title}
          </p>
          <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
            {value}
          </h3>
        </div>
        <div className="text-indigo-700 mt-0.5">
          {icon}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-2 w-full">
        <span className={`text-[9px] font-semibold ${changeColor}`}>
          {change}
        </span>
        <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-700 w-3/4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function CampaignRow({
  image,
  title,
  status,
  participants,
  rate,
  budget,
  onClick,
}) {
  return (
    <tr 
      onClick={onClick}
      className="border-b border-slate-200 hover:bg-slate-50 transition-all cursor-pointer"
    >
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt=""
            className="w-10 h-10 rounded-xl object-cover"
          />
          <span className="font-bold text-slate-900 text-xs">
            {title}
          </span>
        </div>
      </td>

      <td className="py-4 px-4">
        <span
          className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold ${
            status === "ACTIVE"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="py-4 px-4 font-semibold text-slate-700 text-xs">
        {participants}
      </td>

      <td className="py-4 px-4">
        <div className="space-y-1">
          <p className="font-bold text-slate-800 text-xs">{rate}</p>
          <div className="w-24 h-1.5 bg-slate-200 rounded-full">
            <div
              className="h-1.5 rounded-full bg-indigo-700"
              style={{
                width: rate,
              }}
            />
          </div>
        </div>
      </td>

      <td className="py-4 px-4 font-bold text-slate-800 text-xs">
        {budget}
      </td>
    </tr>
  );
}

export default function CampaignDashboard() {
  const { addToast } = useToast();
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const filteredCampaigns = MOCK_CAMPAIGNS.filter(c => {
    return statusFilter === "All Statuses" || c.status === statusFilter;
  });

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="p-4 md:p-8 bg-slate-100 min-h-screen space-y-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black text-indigo-950">
              Campaign Performance
            </h1>
            <p className="text-slate-600 mt-1 text-sm">
              Real-time referral metrics and conversion trends.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => addToast("Opening campaign date range selection...", "success")}
              className="px-3 py-1.5 border border-slate-300 rounded-xl bg-white flex items-center gap-2 text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
            >
              <Calendar size={14} />
              <span>Last 30 Days</span>
            </button>

            <button 
              onClick={() => addToast("Exporting campaign performance metrics...", "success")}
              className="px-3 py-1.5 bg-indigo-955 text-white rounded-xl flex items-center gap-2 text-xs font-bold hover:bg-indigo-900 transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Active Campaigns"
            value="24"
            change="+12%"
            icon={<Rocket size={14} />}
            onClick={() => addToast("Card clicked: Active Campaigns detailed statistics", "success")}
          />

          <MetricCard
            title="Total Participants"
            value="12,842"
            change="+8.4%"
            icon={<Users size={14} />}
            onClick={() => addToast("Card clicked: Total campaign participants", "success")}
          />

          <MetricCard
            title="Average CPA"
            value="$14.50"
            change="+2.1%"
            changeColor="text-red-500"
            icon={<DollarSign size={14} />}
            onClick={() => addToast("Card clicked: Average Cost Per Acquisition dynamics", "success")}
          />

          <MetricCard
            title="Total Conversions"
            value="3,204"
            change="+18.2%"
            icon={<ShieldCheck size={14} />}
            onClick={() => addToast("Card clicked: Total verified conversions", "success")}
          />
        </div>

        {/* Chart and Side Panel */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Campaign Performance Comparison
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">
                  Top 5 performing campaigns by conversion volume
                </p>
              </div>

              <div className="text-indigo-700 font-bold text-xs">
                ● Conversions
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-[200px] border border-slate-200 rounded-xl flex items-end justify-around px-6 pb-6 bg-slate-50">
              {[70, 90, 65, 45, 80].map((h, i) => (
                <div
                  key={i}
                  onClick={() => addToast(`Data point: Value ${h}%`, "success")}
                  className="bg-indigo-700 rounded-t-lg w-10 cursor-pointer hover:opacity-85 transition-all"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="grid grid-cols-5 mt-3 text-center text-xs font-bold text-slate-500">
              <span>Summer Blast</span>
              <span>VIP Referral</span>
              <span>Welcome 2024</span>
              <span>Growth Hack</span>
              <span>Holiday Tier</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-lg text-slate-900 mb-5">
              Optimization Insights
            </h3>

            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-xl text-blue-700 h-9 w-9 flex items-center justify-center">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">
                    Lower CPA Opportunity
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Summer Blast has a 15% lower CPA.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-red-100 rounded-xl text-red-700 h-9 w-9 flex items-center justify-center">
                  <AlertTriangle size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">
                    High Fraud Alert
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Unusual referral spikes detected.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-purple-100 rounded-xl text-purple-700 h-9 w-9 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">
                    Top Performer Milestone
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    VIP Referral crossed 1,000 participants.
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => addToast("Opening full performance insights dashboard...", "success")}
              className="w-full mt-6 text-indigo-700 hover:text-indigo-900 font-bold text-xs transition-all cursor-pointer"
            >
              View All Insights
            </button>
          </div>
        </div>

        {/* DETAILS TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <h3 className="font-bold text-lg text-slate-900">
              Campaign Details
            </h3>

            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold outline-none bg-white cursor-pointer"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="ACTIVE">Active</option>
              <option value="PAUSED">Paused</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase">Campaign Name</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase">Participants</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase">Conv. Rate</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase">Budget Used</th>
                </tr>
              </thead>

              <tbody>
                {filteredCampaigns.map((row, idx) => (
                  <CampaignRow
                    key={idx}
                    image={row.image}
                    title={row.title}
                    status={row.status}
                    participants={row.participants}
                    rate={row.rate}
                    budget={row.budget}
                    onClick={() => addToast(`Opening detailed performance profile for ${row.title}`, "success")}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center p-5 border-t border-slate-200">
            <p className="text-slate-500 text-xs">
              Showing {filteredCampaigns.length} of 24 active campaigns
            </p>

            <div className="flex gap-2">
              <button 
                onClick={() => addToast("Loaded previous campaign page", "success")}
                className="w-8 h-8 border border-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>

              <button 
                onClick={() => addToast("Loaded next campaign page", "success")}
                className="w-8 h-8 border border-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}