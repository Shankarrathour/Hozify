import React from "react";
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

function MetricCard({
  title,
  value,
  change,
  icon,
  changeColor = "text-emerald-500",
}) {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
          {icon}
        </div>

        <span className={`text-sm font-bold ${changeColor}`}>
          {change}
        </span>
      </div>

      <p className="text-slate-600 text-sm mt-4">{title}</p>

      <h3 className="text-4xl font-black text-slate-900 mt-1">
        {value}
      </h3>
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
}) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt=""
            className="w-12 h-12 rounded-xl object-cover"
          />

          <span className="font-bold text-slate-900">
            {title}
          </span>
        </div>
      </td>

      <td className="py-4 px-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === "ACTIVE"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="py-4 px-4 font-semibold text-slate-700">
        {participants}
      </td>

      <td className="py-4 px-4">
        <div className="space-y-1">
          <p className="font-bold text-slate-800">{rate}</p>

          <div className="w-full h-2 bg-slate-200 rounded-full">
            <div
              className="h-2 rounded-full bg-indigo-700"
              style={{
                width: rate,
              }}
            />
          </div>
        </div>
      </td>

      <td className="py-4 px-4 font-bold text-slate-800">
        {budget}
      </td>
    </tr>
  );
}
export default function CampaignDashboard() {
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

            <p className="text-slate-600 mt-1">
              Real-time referral metrics and conversion trends.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-slate-300 rounded-xl bg-white flex items-center gap-2">
              <Calendar size={16} />
              Last 30 Days
            </button>

            <button className="px-4 py-2 bg-indigo-950 text-white rounded-xl flex items-center gap-2">
              <Download size={16} />
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <MetricCard
            title="Active Campaigns"
            value="24"
            change="+12%"
            icon={<Rocket size={20} />}
          />

          <MetricCard
            title="Total Participants"
            value="12,842"
            change="+8.4%"
            icon={<Users size={20} />}
          />

          <MetricCard
            title="Average CPA"
            value="$14.50"
            change="+2.1%"
            changeColor="text-red-500"
            icon={<DollarSign size={20} />}
          />

          <MetricCard
            title="Total Conversions"
            value="3,204"
            change="+18.2%"
            icon={<ShieldCheck size={20} />}
          />
        </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

          <div className="xl:col-span-3 bg-white rounded-2xl border border-slate-300 p-6">

            <div className="flex justify-between mb-6">
              <div>
                <h3 className="font-bold text-xl text-slate-900">
                  Campaign Performance Comparison
                </h3>

                <p className="text-slate-500 text-sm">
                  Top 5 performing campaigns by conversion volume
                </p>
              </div>

              <div className="text-indigo-700 font-bold text-sm">
                ● Conversions
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-[320px] border-2 border-slate-300 rounded-xl flex items-end justify-around px-6 pb-6">
              {[70, 90, 65, 45, 80].map((h, i) => (
                <div
                  key={i}
                  className="bg-indigo-700 rounded-t-lg w-14"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="grid grid-cols-5 mt-4 text-center text-sm font-semibold text-slate-600">
              <span>Summer Blast</span>
              <span>VIP Referral</span>
              <span>Welcome 2024</span>
              <span>Growth Hack</span>
              <span>Holiday Tier</span>
            </div>

          </div>

          <div className="bg-white rounded-2xl border border-slate-300 p-6">

            <h3 className="font-bold text-xl text-slate-900 mb-5">
              Optimization Insights
            </h3>

            <div className="space-y-6">

              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Lower CPA Opportunity
                  </h4>

                  <p className="text-sm text-slate-600">
                    Summer Blast has a 15% lower CPA.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-red-100 rounded-xl">
                  <AlertTriangle size={18} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    High Fraud Alert
                  </h4>

                  <p className="text-sm text-slate-600">
                    Unusual referral spikes detected.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-purple-100 rounded-xl">
                  <Sparkles size={18} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Top Performer Milestone
                  </h4>

                  <p className="text-sm text-slate-600">
                    VIP Referral crossed 1,000 participants.
                  </p>
                </div>
              </div>

            </div>

            <button className="w-full mt-6 text-indigo-700 font-bold">
              View All Insights
            </button>

          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-300 overflow-hidden">

          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-900">
              Campaign Details
            </h3>

            <select className="border border-slate-300 rounded-lg px-3 py-2">
              <option>All Statuses</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full min-w-[900px]">

              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4">Campaign Name</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Participants</th>
                  <th className="text-left p-4">Conv. Rate</th>
                  <th className="text-left p-4">Budget Used</th>
                </tr>
              </thead>

              <tbody>

                <CampaignRow
                  image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
                  title="Summer Blast 2024"
                  status="ACTIVE"
                  participants="4,821"
                  rate="17.4%"
                  budget="$12,400"
                />

                <CampaignRow
                  image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300"
                  title="VIP Rewards Tier"
                  status="ACTIVE"
                  participants="1,055"
                  rate="22.1%"
                  budget="$8,900"
                />

                <CampaignRow
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300"
                  title="Global Growth v2"
                  status="PAUSED"
                  participants="2,140"
                  rate="9.5%"
                  budget="$4,200"
                />

              </tbody>

            </table></div>
          </div>

          <div className="flex justify-between items-center p-5 border-t border-slate-200">
            <p className="text-slate-600 text-sm">
              Showing 3 of 24 active campaigns
            </p>

            <div className="flex gap-2">
              <button className="w-8 h-8 border rounded-lg flex items-center justify-center">
                <ChevronLeft size={14} />
              </button>

              <button className="w-8 h-8 border rounded-lg flex items-center justify-center">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}