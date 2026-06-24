import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Eye,
  MousePointerClick,
  ShoppingCart,
  DollarSign,
  Download,
} from "lucide-react";

function MetricCard({
  title,
  value,
  change,
  icon,
  dark = false,
}) {
  return (
    <div
      className={`rounded-2xl p-5 border shadow-sm ${
        dark
          ? "bg-indigo-950 text-white border-indigo-900"
          : "bg-white border-slate-100"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className={`p-3 rounded-xl ${
            dark
              ? "bg-indigo-900"
              : "bg-slate-100"
          }`}
        >
          {icon}
        </div>

        <span
          className={`text-xs font-bold ${
            change.includes("+")
              ? "text-emerald-500"
              : "text-rose-500"
          }`}
        >
          {change}
        </span>
      </div>

      <p
        className={`text-xs mt-4 ${
          dark
            ? "text-indigo-200"
            : "text-slate-500"
        }`}
      >
        {title}
      </p>

      <h2 className="text-4xl font-black mt-2">
        {value}
      </h2>
    </div>
  );
}

export default function BannerAnalyticsPage() {
  return (
    <AdminShell
      activeTab="Banners"
      searchPlaceholder="Search analytics..."
    >
      <div className="p-8 bg-slate-50 min-h-screen space-y-6 max-w-[1400px] mx-auto">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black text-indigo-950">
              Banner Analytics
            </h1>

            <p className="text-slate-500 text-sm mt-1">
              Comprehensive performance insights and
              campaign intelligence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>

            <button className="flex items-center gap-2 bg-indigo-950 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md">
              <Download size={16} />
              Export Report
            </button>
          </div>
        </div>

        {/* TOP METRICS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <MetricCard
            title="Total Impressions"
            value="1,284,502"
            change="+12.5%"
            icon={<Eye size={20} />}
          />

          <MetricCard
            title="Average CTR"
            value="2.4%"
            change="+0.4%"
            icon={<MousePointerClick size={20} />}
          />

          <MetricCard
            title="Total Conversions"
            value="42,891"
            change="-2.1%"
            icon={<ShoppingCart size={20} />}
          />

          <MetricCard
            title="Revenue Attribution"
            value="$124,500"
            change="+18%"
            dark
            icon={<DollarSign size={20} />}
          />

        </div>
                {/* PERFORMANCE SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* PERFORMANCE TRENDS */}

          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Performance Trends
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Impression and CTR evolution over time
                </p>
              </div>

              <select className="border border-slate-200 rounded-lg px-3 py-2 text-xs">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            {/* FAKE CHART */}

            <div className="relative h-[320px] rounded-2xl bg-slate-50 overflow-hidden">

              <div className="absolute inset-0 flex flex-col justify-between p-4 text-[10px] text-slate-400">
                <span>150k</span>
                <span>100k</span>
                <span>50k</span>
                <span>0</span>
              </div>

              <svg
                viewBox="0 0 900 320"
                className="absolute inset-0 w-full h-full"
              >
                <polyline
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="5"
                  points="
                    0,240
                    80,210
                    160,190
                    240,170
                    320,160
                    400,140
                    480,120
                    560,135
                    640,100
                    720,85
                    800,60
                    900,40
                  "
                />

                <polyline
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="4"
                  points="
                    0,260
                    80,240
                    160,220
                    240,210
                    320,190
                    400,180
                    480,170
                    560,155
                    640,145
                    720,120
                    800,110
                    900,90
                  "
                />
              </svg>

              <div className="absolute bottom-3 left-0 right-0 flex justify-around text-[10px] text-slate-400 font-semibold">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}

          <div className="space-y-6">

            {/* DEVICE USAGE */}

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

              <h3 className="text-lg font-black text-slate-900">
                Device Usage
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Traffic distribution by device
              </p>

              <div className="mt-6 space-y-5">

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">
                      Desktop
                    </span>
                    <span className="font-black">
                      58%
                    </span>
                  </div>

                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[58%] bg-indigo-600 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">
                      Mobile
                    </span>
                    <span className="font-black">
                      34%
                    </span>
                  </div>

                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[34%] bg-cyan-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">
                      Tablet
                    </span>
                    <span className="font-black">
                      8%
                    </span>
                  </div>

                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[8%] bg-amber-500 rounded-full" />
                  </div>
                </div>

              </div>
            </div>

            {/* REGIONAL ENGAGEMENT */}

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

              <h3 className="text-lg font-black text-slate-900">
                Regional Engagement
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Top performing locations
              </p>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between items-center">
                  <span className="font-medium">United States</span>
                  <span className="font-black">42%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">United Kingdom</span>
                  <span className="font-black">21%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Germany</span>
                  <span className="font-black">14%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Canada</span>
                  <span className="font-black">12%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Australia</span>
                  <span className="font-black">11%</span>
                </div>

              </div>

            </div>

          </div>

        </div>
                {/* TOP PERFORMING BANNERS */}

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                Top Performing Banners
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Highest engagement campaigns this month
              </p>
            </div>

            <button className="text-indigo-600 text-sm font-bold hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* Banner 1 */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=900"
                alt="Banner"
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h4 className="font-black text-slate-900">
                  Winter Launch Sale
                </h4>

                <p className="text-xs text-slate-500 mt-1">
                  Homepage Hero Banner
                </p>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-[10px] text-slate-400">
                      CTR
                    </p>
                    <p className="font-black text-emerald-600">
                      5.2%
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Impressions
                    </p>
                    <p className="font-black">
                      450K
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
                alt="Banner"
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h4 className="font-black text-slate-900">
                  Flash Deal Event
                </h4>

                <p className="text-xs text-slate-500 mt-1">
                  Offers Sidebar
                </p>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-[10px] text-slate-400">
                      CTR
                    </p>
                    <p className="font-black text-emerald-600">
                      4.8%
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Impressions
                    </p>
                    <p className="font-black">
                      392K
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                alt="Banner"
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h4 className="font-black text-slate-900">
                  New Feature Release
                </h4>

                <p className="text-xs text-slate-500 mt-1">
                  Category Banner
                </p>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-[10px] text-slate-400">
                      CTR
                    </p>
                    <p className="font-black text-emerald-600">
                      4.4%
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Impressions
                    </p>
                    <p className="font-black">
                      310K
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner 4 */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
                alt="Banner"
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h4 className="font-black text-slate-900">
                  Premium Membership
                </h4>

                <p className="text-xs text-slate-500 mt-1">
                  Exit Intent Banner
                </p>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-[10px] text-slate-400">
                      CTR
                    </p>
                    <p className="font-black text-emerald-600">
                      4.1%
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Impressions
                    </p>
                    <p className="font-black">
                      280K
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* AI PERFORMANCE INSIGHT */}

        <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-blue-900 rounded-3xl p-8 text-white shadow-xl">

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div className="max-w-3xl">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold">
                AI PERFORMANCE INSIGHT
              </span>

              <h2 className="text-3xl font-black mt-4">
                AI detected a 24% engagement lift on
                homepage banners using dynamic CTA
                personalization.
              </h2>

              <p className="text-indigo-200 mt-4 text-sm leading-relaxed">
                Campaigns using personalized call-to-action
                messaging consistently outperformed generic
                creatives across all device categories.
              </p>
            </div>

            <div className="flex items-center">
              <button className="bg-white text-indigo-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all">
                View Recommendations
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}