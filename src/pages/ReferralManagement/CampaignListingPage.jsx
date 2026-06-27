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

function StatCard({ title, value, change, icon }) {
  const positive = !change.includes("-");

  return (
    <div className="bg-white border border-slate-300 rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-slate-500 font-medium">{title}</p>
          <h3 className="text-4xl font-black text-slate-900 mt-2">
            {value}
          </h3>

          <p
            className={`text-xs font-semibold mt-2 ${
              positive ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {change}
          </p>
        </div>

        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700">
          {icon}
        </div>
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
}) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-900 text-white flex items-center justify-center">
            {icon}
          </div>

          <div>
            <h4 className="font-bold text-slate-900">{title}</h4>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
        </div>
      </td>

      <td className="p-4 text-sm text-slate-700">
        {duration}
      </td>

      <td className="p-4">
        <div className="text-sm font-semibold">{participants}</div>

        {growth && (
          <span className="text-emerald-600 text-xs font-bold">
            {growth}
          </span>
        )}

        <div className="w-16 h-1.5 bg-slate-200 rounded-full mt-2">
          <div className="w-12 h-1.5 bg-indigo-800 rounded-full"></div>
        </div>
      </td>

      <td className="p-4">
        <div className="font-semibold">{conversions}</div>
        <div className="text-xs text-slate-500">{rate}</div>
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
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

      <td className="p-4">
        <div className="flex justify-end gap-3">
          <button>
            <Edit size={16} />
          </button>

          <button>
            <MoreVertical size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}
export default function CampaignListingPage() {
  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
       <div className="p-4 md:p-6 lg:p-8 bg-slate-200 min-h-screen max-w-[1600px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs text-slate-500 mb-1">
              Admin &gt; Campaigns
            </p>

            <h1 className="text-3xl font-black text-indigo-950">
              Campaign Performance
            </h1>

            <p className="text-slate-600 mt-1">
              Monitor referral campaign performance and conversion metrics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-400 rounded-lg text-sm font-semibold hover:bg-slate-50">
              <Filter size={15} />
              Filters
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-400 rounded-lg text-sm font-semibold hover:bg-slate-50">
              <Download size={15} />
              Export CSV
            </button>
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

          <StatCard
            title="Total Active Campaigns"
            value="12"
            change="+2 this month"
            icon={<Rocket size={18} />}
          />

          <StatCard
            title="Unique Participants"
            value="42,891"
            change="+12.5% increase"
            icon={<Users size={18} />}
          />

          <StatCard
            title="Total Conversions"
            value="8,442"
            change="-3.1% vs prev."
            icon={<RefreshCw size={18} />}
          />

        </div>
                {/* CAMPAIGN TABLE */}
        <div className="bg-white border border-slate-400 rounded-xl overflow-hidden shadow-sm mb-6">

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full min-w-[1000px]">

              <thead className="bg-slate-100">
                <tr className="text-left text-xs uppercase text-slate-600">
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
                  icon={<Rocket size={16} />}
                  title="Summer Referral Blitz 2024"
                  subtitle="E-commerce • Multi-tier rewards"
                  duration="Jun 01 - Aug 31"
                  participants="12,402"
                  growth="+142"
                  conversions="2,810"
                  rate="22.6% Rate"
                  status="ACTIVE"
                />

                <CampaignRow
                  icon={<Users size={16} />}
                  title="Spring Anniversary Rewards"
                  subtitle="Loyalty • Fixed credit"
                  duration="Mar 15 - Apr 15"
                  participants="8,912"
                  conversions="1,402"
                  rate="15.7% Rate"
                  status="COMPLETED"
                />

                <CampaignRow
                  icon={<RefreshCw size={16} />}
                  title="Q4 Expansion Referral"
                  subtitle="Enterprise • Cash payout"
                  duration="Oct 01 - Dec 31"
                  participants="--"
                  conversions="--"
                  rate="Starts in 3 months"
                  status="DRAFT"
                />

                <CampaignRow
                  icon={<Rocket size={16} />}
                  title="Influencer Beta Program"
                  subtitle="Growth • Referral Links"
                  duration="May 10 - Jun 30"
                  participants="452"
                  growth="+12"
                  conversions="194"
                  rate="42.9% Rate"
                  status="ACTIVE"
                />

              </tbody>

            </table></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4 border-t border-slate-200">

            <p className="text-sm text-slate-500">
              Showing 1-4 of 12 campaigns
            </p>

            <div className="flex gap-2">
              <button className="w-8 h-8 border rounded-md hover:bg-slate-50">
                ‹
              </button>

              <button className="w-8 h-8 bg-indigo-900 text-white rounded-md">
                1
              </button>

              <button className="w-8 h-8 border rounded-md hover:bg-slate-50">
                ›
              </button>
            </div>

          </div>
        </div>
                {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LIVE CONVERSION FEED */}
          <div className="lg:col-span-2 bg-white border border-slate-400 rounded-xl shadow-sm">

            <div className="flex justify-between items-center p-5 border-b border-slate-200">
              <h3 className="font-black text-indigo-950">
                Live Conversion Feed
              </h3>

              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                ● Live Tracking
              </span>
            </div>

            <div className="divide-y divide-slate-200">

              {/* USER 1 */}
              <div className="flex items-center justify-between p-5">

                <div className="flex items-center gap-3">

                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Sarah Jenkins
                    </h4>

                    <p className="text-sm text-slate-500">
                      Successfully referred "Mark Thompson"
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-emerald-600 font-bold">
                    +$25.00 Credit
                  </p>

                  <p className="text-xs text-slate-400">
                    2 mins ago
                  </p>
                </div>

              </div>

              {/* USER 2 */}
              <div className="flex items-center justify-between p-5">

                <div className="flex items-center gap-3">

                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Robert Chen
                    </h4>

                    <p className="text-sm text-slate-500">
                      Successfully referred "Lisa Wong"
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-emerald-600 font-bold">
                    +$25.00 Credit
                  </p>

                  <p className="text-xs text-slate-400">
                    15 mins ago
                  </p>
                </div>

              </div>

            </div>

            <div className="p-5 border-t border-slate-200 text-center">
              <button className="text-indigo-700 font-bold text-sm hover:underline">
                View all recent activity
              </button>
            </div>

          </div>

          {/* CAMPAIGN TIP CARD */}
          <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white rounded-xl p-6 shadow-lg">

            <h3 className="font-black text-xl mb-4">
              Campaign Tip
            </h3>

            <p className="text-sm leading-relaxed text-slate-200">
              Campaigns with multi-tier rewards are currently performing
              40% better than single-payout models.
            </p>

            <p className="text-sm leading-relaxed text-slate-200 mt-4">
              Consider updating your
              <span className="font-bold text-white">
                {" "}Summer Referral Blitz{" "}
              </span>
              to include a second-level milestone reward.
            </p>

            <button className="mt-6 bg-white text-indigo-900 font-bold px-5 py-3 rounded-lg hover:bg-slate-100 transition">
              Explore Multi-tier
            </button>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}