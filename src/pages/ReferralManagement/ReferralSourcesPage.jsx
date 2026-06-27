import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Download,
  Search,
  Filter,
  MoreVertical,
  Share2,
  MousePointerClick,
  BadgeCheck,
  Wallet,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react";

const trafficSources = [
  {
    source: "Monthly Newsletter",
    category: "EMAIL",
    referrals: "2,419",
    rate: "14.2%",
    trend: "📈",
  },
  {
    source: "Instagram Stories",
    category: "SOCIAL",
    referrals: "1,852",
    rate: "9.8%",
    trend: "📈",
  },
  {
    source: "In-Store Display",
    category: "QR CODE",
    referrals: "1,105",
    rate: "18.5%",
    trend: "📉",
  },
  {
    source: "Main Landing Page",
    category: "DIRECT",
    referrals: "984",
    rate: "11.1%",
    trend: "📈",
  },
  {
    source: "YouTube Sponsorship",
    category: "SOCIAL",
    referrals: "842",
    rate: "7.4%",
    trend: "➖",
  },
];
function StatCard({
  icon: Icon,
  title,
  value,
  change,
  color = "text-emerald-500",
}) {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
          <Icon size={20} className="text-indigo-700" />
        </div>

        <span className={`text-xs font-bold ${color}`}>
          {change}
        </span>
      </div>

      <p className="text-xs text-slate-500 uppercase tracking-wider mt-5">
        {title}
      </p>

      <h2 className="text-5xl font-black text-slate-900 mt-2">
        {value}
      </h2>
    </div>
  );
}
export default function ReferralSourcesPage() {
  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="bg-slate-100 min-h-screen p-4 lg:p-8">

        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">

          <div>
            <h1 className="text-4xl font-black text-slate-900">
              Referral Sources
            </h1>

            <p className="text-slate-600 mt-2">
              Visualize and track where your user acquisition efforts are most successful.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 border border-slate-300 bg-white rounded-lg text-sm font-semibold">
              Last 30 Days
            </button>

            <button className="px-5 py-2 border border-slate-300 bg-white rounded-lg text-sm font-semibold">
              Quarterly
            </button>

            <button className="px-5 py-2 border border-slate-300 bg-white rounded-lg text-sm font-semibold">
              Yearly
            </button>

            <button className="px-5 py-2 bg-indigo-800 text-white rounded-lg font-semibold flex items-center gap-2">
              <Download size={16} />
              Export PDF
            </button>
          </div>
        </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <StatCard
            icon={Share2}
            title="Total Referrals"
            value="14,292"
            change="+12.5%"
          />

          <StatCard
            icon={MousePointerClick}
            title="Click Through Rate"
            value="24.8%"
            change="+8.2%"
          />

          <StatCard
            icon={BadgeCheck}
            title="Conversion Rate"
            value="12.1%"
            change="-1.4%"
            color="text-red-500"
          />

          <StatCard
            icon={Wallet}
            title="Total Payouts"
            value="$24.5k"
            change="+22%"
          />
        </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* LEFT CARD */}

          <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-sm">

            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-xl">
                Source Distribution
              </h2>

              <MoreVertical size={18} />
            </div>

             <div className="flex justify-center py-8">
  <div className="relative w-72 h-72">

    {/* Donut Ring */}
    <div
      className="w-full h-full rounded-full"
      style={{
        background:
          "conic-gradient(#1e1b7a 0deg 45deg, #e0e7ff 45deg 90deg, #4338ca 90deg 135deg, #e0e7ff 135deg 180deg, #1e1b7a 180deg 225deg, #e0e7ff 225deg 270deg, #4338ca 270deg 315deg, #e0e7ff 315deg 360deg)"
      }}
    />

    {/* Inner Circle */}
    <div className="absolute inset-[28px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
      <h2 className="text-5xl font-bold text-slate-900">
        Global
      </h2>

      <p className="text-sm text-slate-500 mt-2">
        Traffic Sources
      </p>

      <span className="mt-3 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
        14,292 Referrals
      </span>
    </div>

  </div>
</div>

            <div className="grid grid-cols-2 gap-6 mt-8 text-sm">

              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-900 rounded-full" />
                  Social
                </div>
                <p className="mt-1 text-slate-600">
                  45% (6,431)
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-700 rounded-full" />
                  Email
                </div>
                <p className="mt-1 text-slate-500">
                  25% (3,573)
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                  Direct
                </div>
                <p className="mt-1 text-slate-500">
                  20% (2,858)
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-300 rounded-full" />
                  QR Codes
                </div>
                <p className="mt-1 text-slate-500">
                  10% (1,430)
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT CARD */}

          <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm">

            <div className="p-5 flex justify-between items-center border-b border-slate-200">

              <h2 className="font-bold text-xl">
                Top Traffic Sources
              </h2>

              <div className="flex gap-3">
                <Filter size={18} />
                <Search size={18} />
              </div>

            </div>
                        <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead className="bg-slate-100">

                  <tr className="text-left text-xs uppercase text-slate-600">
                    <th className="p-4">Source Detail</th>
                    <th>Category</th>
                    <th>Referrals</th>
                    <th>Conv. Rate</th>
                    <th>Trend</th>
                  </tr>

                </thead>

                <tbody>

                  {trafficSources.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-slate-200"
                    >
                      <td className="p-4 font-medium">
                        {item.source}
                      </td>

                      <td>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-semibold">
                          {item.category}
                        </span>
                      </td>

                      <td className="font-bold">
                        {item.referrals}
                      </td>

                      <td>{item.rate}</td>

                     <td className="text-5xl leading-none">
  <span className="inline-block transform scale-185">
    {item.trend}
  </span>
</td>
                    </tr>
                  ))}

                </tbody>
              </table>

            </div>

            <div className="text-center p-5 border-t border-slate-200">
              <button className="text-indigo-700 font-bold">
                View All Traffic Sources
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}