import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Calendar,
  Download,
  Users,
  Target,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { useToast } from "../../components/common/ToastNotification";

function MetricCard({
  title,
  value,
  change,
  icon,
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

function CampaignItem({
  icon,
  title,
  referrals,
  conv,
  onClick,
}) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 py-3 border-b border-slate-100 cursor-pointer hover:bg-slate-50 px-2 rounded-lg transition-all"
    >
      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-sm">
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-slate-950 text-xs">
          {title}
        </h4>
        <p className="text-[10px] text-slate-400">
          {referrals}
        </p>
      </div>

      <div className="font-bold text-emerald-600 text-xs">
        {conv}
      </div>
    </div>
  );
}

export default function ReferralDashboard() {
  const { addToast } = useToast();

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
            <p className="text-slate-550 mt-1 text-sm">
              High-level overview of referral performance and ecosystem health.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <button 
              onClick={() => addToast("Opening campaign date range selection...", "success")}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
            >
              <Calendar size={13}/>
              <span>Last 30 Days</span>
            </button>

            <button 
              onClick={() => addToast("Exporting comprehensive referral matrix PDF...", "success")}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
            >
              <Download size={13}/>
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Total Referrals"
            value="12,842"
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

        {/* Chart and Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* CHART */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-indigo-950 text-sm">
                Referral Volume
              </h3>

              <div className="flex gap-2">
                <button 
                  onClick={() => addToast("Switched referral chart to Daily view", "success")}
                  className="bg-indigo-800 text-white px-3 py-1 rounded text-[10px] font-bold cursor-pointer"
                >
                  Daily
                </button>
                <button 
                  onClick={() => addToast("Switched referral chart to Weekly view", "success")}
                  className="text-[10px] text-slate-500 font-bold hover:text-indigo-800 transition-all cursor-pointer"
                >
                  Weekly
                </button>
              </div>
            </div>

            <div className="h-[200px] flex items-end justify-between px-2 md:px-6">
              {[40,55,80,65,58,90,76].map((h,index)=>(
                <div
                  key={index}
                  onClick={() => addToast(`Data point ${index + 1}: value ${h}%`, "success")}
                  className={`w-8 rounded-t cursor-pointer hover:opacity-80 transition-all ${
                    index===2
                      ? "bg-indigo-800"
                      : "bg-indigo-100"
                  }`}
                  style={{height:`${h}%`}}
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

          {/* RIGHT PANEL */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="font-black text-indigo-955 mb-4 text-sm">
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

        {/* TRANSACTIONS TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200">
            <h3 className="font-black text-indigo-955 text-sm">
              Recent Transactions
            </h3>

            <button 
              onClick={() => addToast("Opening complete transaction history list...", "success")}
              className="font-bold text-indigo-700 text-xs hover:text-indigo-900 cursor-pointer"
            >
              View History
            </button>
          </div>
         
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 text-[10px] font-bold text-slate-500 uppercase">USER</th>
                  <th className="text-left p-4 text-[10px] font-bold text-slate-500 uppercase">CAMPAIGN</th>
                  <th className="text-left p-4 text-[10px] font-bold text-slate-500 uppercase">REFERRAL CODE</th>
                  <th className="text-left p-4 text-[10px] font-bold text-slate-500 uppercase">STATUS</th>
                  <th className="text-left p-4 text-[10px] font-bold text-slate-500 uppercase">REWARD</th>
                  <th className="text-left p-4 text-[10px] font-bold text-slate-500 uppercase">DATE</th>
                </tr>
              </thead>

              <tbody>
                <tr 
                  onClick={() => addToast("Opening transaction ledger for John Doe", "success")}
                  className="border-t border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <td className="p-4 text-xs font-bold text-slate-800">John Doe</td>
                  <td className="p-4 text-xs text-slate-600">Summer Growth</td>
                  <td className="p-4 text-xs font-semibold text-slate-600">SUMMER-991</td>
                  <td className="p-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-[9px] font-extrabold">
                      COMPLETED
                    </span>
                  </td>
                  <td className="p-4 text-xs font-black text-slate-900">$25.00</td>
                  <td className="p-4 text-xs text-slate-400">2 mins ago</td>
                </tr>

                <tr 
                  onClick={() => addToast("Opening transaction ledger for Sarah Adams", "success")}
                  className="border-t border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <td className="p-4 text-xs font-bold text-slate-800">Sarah Adams</td>
                  <td className="p-4 text-xs text-slate-600">Early Adopter</td>
                  <td className="p-4 text-xs font-semibold text-slate-600">ADOPT-221</td>
                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-[9px] font-extrabold">
                      PENDING
                    </span>
                  </td>
                  <td className="p-4 text-xs font-black text-slate-900">$50.00</td>
                  <td className="p-4 text-xs text-slate-400">15 mins ago</td>
                </tr>

                <tr 
                  onClick={() => addToast("Opening transaction ledger for Marcus Lee", "success")}
                  className="border-t border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <td className="p-4 text-xs font-bold text-slate-800">Marcus Lee</td>
                  <td className="p-4 text-xs text-slate-600">Loyalty v2</td>
                  <td className="p-4 text-xs font-semibold text-slate-600">LOYAL-456</td>
                  <td className="p-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-[9px] font-extrabold">
                      COMPLETED
                    </span>
                  </td>
                  <td className="p-4 text-xs font-black text-slate-900">$10.00</td>
                  <td className="p-4 text-xs text-slate-400">1 hour ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}