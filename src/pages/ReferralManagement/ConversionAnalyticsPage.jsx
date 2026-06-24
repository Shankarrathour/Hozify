import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Download,
  ShoppingCart,
  Target,
  Timer,
  DollarSign,
  Info,
} from "lucide-react";

const campaignRates = [
  { name: "Summer Blast", rate: "32.4%", width: "w-[90%]" },
  { name: "VIP Rewards", rate: "28.1%", width: "w-[80%]" },
  { name: "Flash Sale", rate: "24.5%", width: "w-[70%]" },
  { name: "Early Bird", rate: "19.8%", width: "w-[55%]" },
  { name: "Loyalty v2", rate: "15.2%", width: "w-[45%]" },
];

const trendBars = [35, 50, 40, 65, 60, 78, 85, 74, 55, 68, 78, 82];
export default function ConversionAnalyticsPage() {
  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="min-h-screen bg-slate-100 p-4 md:p-6 lg:p-8">

        <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              Analytics › Conversion Deep Dive
            </p>

            <h1 className="text-4xl font-black text-indigo-950 mt-2">
              Conversion Performance
            </h1>
          </div>

          <div className="flex gap-3 flex-wrap">

            <div className="bg-white border border-slate-300 rounded-xl flex overflow-hidden">
              <button className="px-4 py-2 bg-indigo-900 text-white text-sm font-semibold">
                Last 30 Days
              </button>

              <button className="px-4 py-2 text-sm">
                Quarterly
              </button>

              <button className="px-4 py-2 text-sm">
                Yearly
              </button>
            </div>

            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-3 rounded-xl flex items-center gap-2">
              <Download size={16} />
              Export PDF
            </button>

          </div>
        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-xs uppercase font-bold text-slate-500">
                  Total Conversions
                </p>

                <h3 className="text-5xl font-black text-slate-900 mt-4">
                  3,204
                </h3>

                <p className="text-green-600 mt-2 text-sm">
                  +18.2%
                </p>
              </div>

              <ShoppingCart className="text-indigo-700" />
            </div>

            <div className="h-2 bg-slate-200 rounded-full mt-5">
              <div className="h-2 w-3/4 bg-indigo-900 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-xs uppercase font-bold text-slate-500">
                  Conversion Rate
                </p>

                <h3 className="text-5xl font-black text-slate-900 mt-4">
                  22.4%
                </h3>

                <p className="text-green-600 mt-2 text-sm">
                  +2.1%
                </p>
              </div>

              <Target className="text-indigo-700" />
            </div>

            <div className="h-2 bg-slate-200 rounded-full mt-5">
              <div className="h-2 w-1/3 bg-indigo-900 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-xs uppercase font-bold text-slate-500">
                  Avg. Time To Convert
                </p>

                <h3 className="text-5xl font-black text-slate-900 mt-4">
                  4.2
                </h3>

                <p className="text-red-500 mt-2 text-sm">
                  -1.4%
                </p>
              </div>

              <Timer className="text-indigo-700" />
            </div>

            <div className="h-2 bg-slate-200 rounded-full mt-5">
              <div className="h-2 w-2/5 bg-indigo-900 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-xs uppercase font-bold text-slate-500">
                  Conversion Value
                </p>

                <h3 className="text-5xl font-black text-slate-900 mt-4">
                  $84,500
                </h3>

                <p className="text-green-600 mt-2 text-sm">
                  +12.5%
                </p>
              </div>

              <DollarSign className="text-indigo-700" />
            </div>

            <div className="h-2 bg-slate-200 rounded-full mt-5">
              <div className="h-2 w-4/5 bg-indigo-900 rounded-full" />
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  <div className="bg-white rounded-2xl border border-slate-200 p-6">

    <div className="flex justify-between items-center mb-10">
      <h2 className="text-2xl font-bold text-slate-900">
        Conversion Funnel
      </h2>

      <Info size={20} className="text-slate-500" />
    </div>

    <div className="space-y-6">

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Referral (14,292)</span>
          <span>100%</span>
        </div>

        <div className="h-14 bg-indigo-900 rounded-full flex items-center justify-center text-white font-bold">
          Referral (14,292)
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Click (9,289)</span>
          <span>65%</span>
        </div>

        <div className="h-12 bg-indigo-700 rounded-full w-[80%] mx-auto flex items-center justify-center text-white">
          Click
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Signup (5,430)</span>
          <span>38%</span>
        </div>

        <div className="h-12 bg-indigo-500 rounded-full w-[60%] mx-auto flex items-center justify-center text-white">
          Signup
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>First Transaction (3,204)</span>
          <span>22.4%</span>
        </div>

        <div className="h-12 bg-indigo-300 rounded-full w-[45%] mx-auto flex items-center justify-center text-slate-900 font-semibold">
          First Transaction
        </div>
      </div>

    </div>

  </div>
    <div className="space-y-6">

    <div className="bg-white rounded-2xl border border-slate-200 p-6">

      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Campaign Conversion Rates
        </h2>

        <span className="text-xs uppercase font-bold text-slate-500">
          Top 5 Campaigns
        </span>
      </div>

      <div className="space-y-6">

        {campaignRates.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.name}</span>
              <span className="font-semibold">{item.rate}</span>
            </div>

            <div className="h-3 bg-slate-200 rounded-full">
              <div
                className={`h-3 bg-indigo-900 rounded-full ${item.width}`}
              />
            </div>
          </div>
        ))}

      </div>
    </div>

    <div className="bg-white rounded-2xl border border-slate-200 p-6">

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Conversions over Time
        </h2>

        <span className="text-green-600 font-bold text-sm">
          ↗ TRENDING UP
        </span>
      </div>

      <div className="h-64 flex items-end gap-3">

        {trendBars.map((bar, index) => (
          <div
            key={index}
            className="flex-1 bg-indigo-200 rounded-t"
            style={{ height: `${bar}%` }}
          />
        ))}

      </div>

      <div className="flex justify-between mt-4 text-xs text-slate-500 font-semibold">
        <span>DAY 1</span>
        <span>DAY 10</span>
        <span>DAY 20</span>
        <span>TODAY</span>
      </div>

    </div>

  </div>

</div>

      </div>
    </AdminShell>
  );
}