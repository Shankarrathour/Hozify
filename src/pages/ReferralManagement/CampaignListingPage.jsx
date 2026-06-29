import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Filter,
  Download,
  Rocket,
  Users,
  RefreshCw,
  MoreVertical,
  Edit,
} from "lucide-react";
import { useToast } from "../../components/common/ToastNotification";

function StatCard({ title, value, change, icon, onClick }) {
  const positive = !change.includes("-");

  return (
    <div 
      onClick={onClick}
      className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start w-full">
        <div>
          <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">{title}</p>
          <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
            {value}
          </h3>
        </div>

        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700 mt-0.5">
          {icon}
        </div>
      </div>

      <div className="mt-2 w-full">
        <p
          className={`text-[9px] font-semibold ${
            positive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {change}
        </p>
      </div>
    </div>
  );
}

function CampaignRow({
  icon,
  title,
  subtitle,
  duration,
  participants,
  growth,
  conversions,
  rate,
  status,
  onClick,
  onEditClick,
  onMoreClick,
}) {
  return (
    <tr 
      onClick={onClick}
      className="border-b border-slate-200 hover:bg-slate-50 transition-all cursor-pointer"
    >
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-900 text-white flex items-center justify-center text-xs">
            {icon}
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs">{title}</h4>
            <p className="text-[10px] text-slate-500">{subtitle}</p>
          </div>
        </div>
      </td>

      <td className="p-4 text-xs text-slate-700">
        {duration}
      </td>

      <td className="p-4">
        <div className="text-xs font-semibold">{participants}</div>
        {growth && (
          <span className="text-emerald-600 text-[10px] font-bold">
            {growth}
          </span>
        )}
        <div className="w-16 h-1 bg-slate-200 rounded-full mt-1.5">
          <div className="w-12 h-1 bg-indigo-800 rounded-full"></div>
        </div>
      </td>

      <td className="p-4">
        <div className="font-semibold text-xs">{conversions}</div>
        <div className="text-[10px] text-slate-500">{rate}</div>
      </td>

      <td className="p-4">
        <span
          className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold ${
            status === "ACTIVE"
              ? "bg-emerald-100 text-emerald-700"
              : status === "COMPLETED"
              ? "bg-slate-200 text-slate-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end gap-3">
          <button 
            onClick={onEditClick}
            className="hover:text-indigo-900 cursor-pointer"
            aria-label={`Edit ${title}`}
          >
            <Edit size={14} />
          </button>

          <button 
            onClick={onMoreClick}
            className="hover:text-indigo-900 cursor-pointer"
            aria-label={`More actions for ${title}`}
          >
            <MoreVertical size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function CampaignListingPage() {
  const { addToast } = useToast();

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
       <div className="p-4 md:p-6 lg:p-8 bg-slate-200 min-h-screen max-w-[1600px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <p className="text-[10px] text-slate-500 mb-1">
              Admin &gt; Campaigns
            </p>

            <h1 className="text-3xl font-black text-indigo-950">
              Campaign Performance
            </h1>

            <p className="text-slate-650 mt-1 text-sm">
              Monitor referral campaign performance and conversion metrics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => addToast("Opening campaign filter console...", "success")}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-400 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
            >
              <Filter size={13} />
              <span>Filters</span>
            </button>

            <button 
              onClick={() => addToast("Exporting campaign performance list CSV...", "success")}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-400 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
            >
              <Download size={13} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            title="Total Active Campaigns"
            value="12"
            change="+2 this month"
            icon={<Rocket size={14} />}
            onClick={() => addToast("Card clicked: Active Campaigns count details", "success")}
          />

          <StatCard
            title="Unique Participants"
            value="42,891"
            change="+12.5% increase"
            icon={<Users size={14} />}
            onClick={() => addToast("Card clicked: Unique Campaign Participants details", "success")}
          />

          <StatCard
            title="Total Conversions"
            value="8,442"
            change="-3.1% vs prev."
            icon={<RefreshCw size={14} />}
            onClick={() => addToast("Card clicked: Conversions summary details", "success")}
          />
        </div>

        {/* CAMPAIGN TABLE */}
        <div className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-slate-50">
                <tr className="text-left text-[10px] uppercase font-bold text-slate-500">
                  <th className="p-4">Campaign Name</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Participants</th>
                  <th className="p-4">Conversions</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                <CampaignRow
                  icon={<Rocket size={13} />}
                  title="Summer Referral Blitz 2024"
                  subtitle="E-commerce • Multi-tier rewards"
                  duration="Jun 01 - Aug 31"
                  participants="12,402"
                  growth="+142"
                  conversions="2,810"
                  rate="22.6% Rate"
                  status="ACTIVE"
                  onClick={() => addToast("Opening details for Summer Referral Blitz 2024", "success")}
                  onEditClick={() => addToast("Editing Summer Referral Blitz 2024 settings", "success")}
                  onMoreClick={() => addToast("More options for Summer Referral Blitz 2024", "success")}
                />

                <CampaignRow
                  icon={<Users size={13} />}
                  title="Spring Anniversary Rewards"
                  subtitle="Loyalty • Fixed credit"
                  duration="Mar 15 - Apr 15"
                  participants="8,912"
                  conversions="1,402"
                  rate="15.7% Rate"
                  status="COMPLETED"
                  onClick={() => addToast("Opening details for Spring Anniversary Rewards", "success")}
                  onEditClick={() => addToast("Editing Spring Anniversary Rewards settings", "success")}
                  onMoreClick={() => addToast("More options for Spring Anniversary Rewards", "success")}
                />

                <CampaignRow
                  icon={<RefreshCw size={13} />}
                  title="Q4 Expansion Referral"
                  subtitle="Enterprise • Cash payout"
                  duration="Oct 01 - Dec 31"
                  participants="--"
                  conversions="--"
                  rate="Starts in 3 months"
                  status="DRAFT"
                  onClick={() => addToast("Opening details for Q4 Expansion Referral", "success")}
                  onEditClick={() => addToast("Editing Q4 Expansion Referral settings", "success")}
                  onMoreClick={() => addToast("More options for Q4 Expansion Referral", "success")}
                />

                <CampaignRow
                  icon={<Rocket size={13} />}
                  title="Influencer Beta Program"
                  subtitle="Growth • Referral Links"
                  duration="May 10 - Jun 30"
                  participants="452"
                  growth="+12"
                  conversions="194"
                  rate="42.9% Rate"
                  status="ACTIVE"
                  onClick={() => addToast("Opening details for Influencer Beta Program", "success")}
                  onEditClick={() => addToast("Editing Influencer Beta Program settings", "success")}
                  onMoreClick={() => addToast("More options for Influencer Beta Program", "success")}
                />
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Showing 1-4 of 12 campaigns
            </p>

            <div className="flex gap-2">
              <button 
                onClick={() => addToast("Loaded previous campaign page", "success")}
                className="w-8 h-8 border border-slate-300 rounded-md hover:bg-slate-50 flex items-center justify-center text-sm cursor-pointer"
              >
                ‹
              </button>
              <button className="w-8 h-8 bg-indigo-900 text-white rounded-md text-xs font-bold">
                1
              </button>
              <button 
                onClick={() => addToast("Loaded next campaign page", "success")}
                className="w-8 h-8 border border-slate-300 rounded-md hover:bg-slate-50 flex items-center justify-center text-sm cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LIVE CONVERSION FEED */}
          <div className="lg:col-span-2 bg-white border border-slate-300 rounded-xl shadow-sm">
            <div className="flex justify-between items-center p-5 border-b border-slate-200">
              <h3 className="font-black text-indigo-950 text-sm">
                Live Conversion Feed
              </h3>

              <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider">
                ● Live Tracking
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {/* USER 1 */}
              <div 
                onClick={() => addToast("Opening details timeline for Sarah Jenkins", "success")}
                className="flex items-center justify-between p-5 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      Sarah Jenkins
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Successfully referred "Mark Thompson"
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-emerald-600 font-bold text-xs">
                    +$25.00 Credit
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    2 mins ago
                  </p>
                </div>
              </div>

              {/* USER 2 */}
              <div 
                onClick={() => addToast("Opening details timeline for Robert Chen", "success")}
                className="flex items-center justify-between p-5 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      Robert Chen
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Successfully referred "Lisa Wong"
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-emerald-600 font-bold text-xs">
                    +$25.00 Credit
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    15 mins ago
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 text-center">
              <button 
                onClick={() => addToast("Navigating to full live activity roster...", "success")}
                className="text-indigo-700 font-bold text-xs hover:text-indigo-900 transition-all cursor-pointer"
              >
                View all recent activity
              </button>
            </div>
          </div>

          {/* CAMPAIGN TIP CARD */}
          <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-black text-lg mb-4">
                Campaign Tip
              </h3>

              <p className="text-xs leading-relaxed text-slate-200">
                Campaigns with multi-tier rewards are currently performing
                40% better than single-payout models.
              </p>

              <p className="text-xs leading-relaxed text-slate-200 mt-4">
                Consider updating your
                <span className="font-bold text-white">
                  {" "}Summer Referral Blitz{" "}
                </span>
                to include a second-level milestone reward.
              </p>
            </div>

            <button 
              onClick={() => addToast("Opening multi-tier setup assistant panel...", "success")}
              className="mt-6 bg-white text-indigo-900 font-bold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition text-xs cursor-pointer"
            >
              Explore Multi-tier
            </button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}