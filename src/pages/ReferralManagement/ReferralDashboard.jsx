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

function MetricCard({
  title,
  value,
  change,
  icon,
}) {
  return (
<div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all">      <div className="flex justify-between items-start">
        <div>
          <p className="text-[11px] uppercase tracking-widest font-bold text-slate-600">
            {title}
          </p>

          <h3 className="text-2xl font-black text-slate-950 mt-4">
            {value}
          </h3>

          <p className="text-sm text-emerald-600 font-semibold mt-1">
            {change}
          </p>
        </div>

        <div className="text-indigo-700">
          {icon}
        </div>
      </div>

      <div className="h-1 bg-slate-100 rounded-full mt-5">
        <div className="h-1 bg-indigo-700 rounded-full w-3/4"></div>
      </div>
    </div>
  );
}

function CampaignItem({
  icon,
  title,
  referrals,
  conv,
}) {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-slate-100">

      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700">
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-slate-900 text-sm">
          {title}
        </h4>

        <p className="text-xs text-slate-400">
          {referrals}
        </p>
      </div>

      <div className="font-bold text-emerald-600 text-sm">
        {conv}
      </div>

    </div>
  );
}
export default function ReferralDashboard() {
  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
<div className="p-4 md:p-6 lg:p-8 bg-slate-100 min-h-screen w-full overflow-x-hidden">
        {/* HEADER */}

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-black text-indigo-950">
              Referral Management
            </h1>

            <p className="text-slate-500 mt-2">
              High-level overview of referral performance and ecosystem health.
            </p>
          </div>

<div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl">
              <Calendar size={14}/>
              Last 30 Days
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl">
              <Download size={14}/>
              Export PDF
            </button>

          </div>

        </div>

        {/* KPI */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

          <MetricCard
            title="Total Referrals"
            value="12,842"
            change="+12.5%"
            icon={<Users size={18} />}
          />

          <MetricCard
            title="Conversion Rate"
            value="24.8%"
            change="+2.1%"
            icon={<Target size={18} />}
          />

          <MetricCard
            title="Rewards Paid"
            value="$142.5k"
            change="Target $150k"
            icon={<Wallet size={18} />}
          />

          <MetricCard
            title="ROI"
            value="4.2x"
            change="+0.4x"
            icon={<TrendingUp size={18} />}
          />

        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
          {/* CHART */}

          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6">

            <div className="flex justify-between mb-6">

              <h3 className="font-black text-indigo-950">
                Referral Volume
              </h3>

              <div className="flex gap-2">

                <button className="bg-indigo-800 text-white px-3 py-1 rounded text-xs">
                  Daily
                </button>

                <button className="text-xs text-slate-500">
                  Weekly
                </button>

              </div>

            </div>

            <div className="h-[320px] md:h-[380px] flex items-end justify-between px-2 md:px-6">
              {[40,55,80,65,58,90,76].map((h,index)=>(
                <div
                  key={index}
                  className={`w-10 rounded-t ${
                    index===2
                      ? "bg-indigo-800"
                      : "bg-indigo-100"
                  }`}
                  style={{height:`${h}%`}}
                />
              ))}

            </div>

            <div className="flex justify-between mt-3 text-xs font-bold text-slate-700 px-3">
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

          <div className="bg-white rounded-2xl border border-slate-300 p-5 shadow-md">
            <h3 className="font-black text-indigo-950 mb-4">
              Top Performing Campaigns
            </h3>

            <CampaignItem
              icon="🎯"
              title="Summer Growth Blitz"
              referrals="3,420 Referrals"
              conv="32%"
            />

            <CampaignItem
              icon="🚀"
              title="Early Adopter IV"
              referrals="2,105 Referrals"
              conv="28%"
            />

            <CampaignItem
              icon="🎁"
              title="Black Friday Social"
              referrals="1,890 Referrals"
              conv="21%"
            />

            <CampaignItem
              icon="⭐"
              title="Loyalty Rewards"
              referrals="1,540 Referrals"
              conv="18%"
            />

          </div>

        </div>
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
                <th className="text-left p-4 text-xs">USER</th>
                <th className="text-left p-4 text-xs">CAMPAIGN</th>
                <th className="text-left p-4 text-xs">REFERRAL CODE</th>
                <th className="text-left p-4 text-xs">STATUS</th>
                <th className="text-left p-4 text-xs">REWARD</th>
                <th className="text-left p-4 text-xs">DATE</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-4">John Doe</td>
                <td className="p-4">Summer Growth</td>
                <td className="p-4">SUMMER-991</td>
                <td className="p-4">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                    COMPLETED
                  </span>
                </td>
                <td className="p-4 font-bold">$25.00</td>
                <td className="p-4">2 mins ago</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Sarah Adams</td>
                <td className="p-4">Early Adopter</td>
                <td className="p-4">ADOPT-221</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                    PENDING
                  </span>
                </td>
                <td className="p-4 font-bold">$50.00</td>
                <td className="p-4">15 mins ago</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Marcus Lee</td>
                <td className="p-4">Loyalty v2</td>
                <td className="p-4">LOYAL-456</td>
                <td className="p-4">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                    COMPLETED
                  </span>
                </td>
                <td className="p-4 font-bold">$10.00</td>
                <td className="p-4">1 hour ago</td>
              </tr>

            </tbody>

          </table>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}