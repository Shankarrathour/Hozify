import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

const quarterlyRevenue = [
  { quarter: "Q1", revenue: "$2.4M", growth: "+8.2%" },
  { quarter: "Q2", revenue: "$2.8M", growth: "+12.5%" },
  { quarter: "Q3", revenue: "$3.1M", growth: "+14.1%" },
  { quarter: "Q4", revenue: "$3.6M", growth: "+18.4%" },
];

const contributors = [
  {
    name: "Enterprise Services",
    revenue: "$4.8M",
  },
  {
    name: "Partner Solutions",
    revenue: "$3.2M",
  },
  {
    name: "Seller Revenue",
    revenue: "$2.7M",
  },
  {
    name: "Advertising",
    revenue: "$1.4M",
  },
];

export default function YearlyRevenue() {
  return (
    <AdminShell
      activeTab="Revenue"
      searchPlaceholder="Search yearly revenue..."
    >
      <div className="space-y-6">

        {/* Header */}

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Yearly Revenue
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Enterprise revenue performance and yearly growth analysis
          </p>
        </div>

        {/* Top Cards */}

        <div className="grid grid-cols-12 gap-5">

          <div className="col-span-7 bg-indigo-700 text-white rounded-xl p-6">

            <p className="text-xs uppercase opacity-80">
              Total Revenue
            </p>

            <h2 className="text-5xl font-bold mt-3">
              $12.1M
            </h2>

            <p className="mt-4 text-sm opacity-90">
              Revenue generated during fiscal year 2024
            </p>

          </div>

          <div className="col-span-2 bg-white border rounded-xl p-6">

            <p className="text-xs uppercase text-slate-400">
              Growth Rate
            </p>

            <h2 className="text-3xl font-bold mt-3 text-green-600">
              +18.4%
            </h2>

            <p className="text-xs text-slate-500 mt-3">
              YoY Growth
            </p>

          </div>

          <div className="col-span-3 bg-white border rounded-xl p-6">

            <p className="text-xs uppercase text-slate-400">
              Target Achievement
            </p>

            <h2 className="text-4xl font-bold mt-3">
              96%
            </h2>

            <div className="mt-4 h-2 bg-slate-100 rounded-full">
              <div className="h-2 w-[96%] bg-indigo-600 rounded-full" />
            </div>

            <p className="text-sm text-slate-500 mt-3">
              $12.1M / $12.6M
            </p>

          </div>

        </div>

        {/* Revenue Trend Analysis */}

        <div className="bg-white border rounded-xl p-6">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h3 className="font-semibold text-lg">
                Revenue Trend Analysis
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Fiscal year growth overview
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase">
                Revenue Growth
              </p>

              <h3 className="text-3xl font-bold text-indigo-700">
                +18.4%
              </h3>
            </div>

          </div>

          <div className="relative h-72 bg-slate-50 rounded-xl border overflow-hidden">

            {/* Grid */}

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="border-t border-slate-200"></div>
              <div className="border-t border-slate-200"></div>
              <div className="border-t border-slate-200"></div>
              <div className="border-t border-slate-200"></div>
            </div>

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="yearlyGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#4F46E5"
                    stopOpacity="0.35"
                  />
                  <stop
                    offset="100%"
                    stopColor="#4F46E5"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="
                M 40 240
                C 140 220, 180 170, 260 180
                C 340 190, 380 120, 470 130
                C 560 140, 620 80, 720 90
                C 820 100, 880 50, 960 40
                L 960 300
                L 40 300
                Z
              "
                fill="url(#yearlyGradient)"
              />

              <path
                d="
                M 40 240
                C 140 220, 180 170, 260 180
                C 340 190, 380 120, 470 130
                C 560 140, 620 80, 720 90
                C 820 100, 880 50, 960 40
              "
                fill="none"
                stroke="#4F46E5"
                strokeWidth="4"
              />

              <circle cx="40" cy="240" r="6" fill="#4F46E5" />
              <circle cx="260" cy="180" r="6" fill="#4F46E5" />
              <circle cx="470" cy="130" r="6" fill="#4F46E5" />
              <circle cx="720" cy="90" r="6" fill="#4F46E5" />
              <circle cx="960" cy="40" r="6" fill="#4F46E5" />
            </svg>

          </div>

          <div className="flex justify-between text-xs text-slate-500 mt-4 px-2">
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
          </div>

        </div>

        {/* Quarterly Revenue */}

        <div className="grid grid-cols-2 gap-4">

          {quarterlyRevenue.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-sm text-slate-500">
                    {item.quarter}
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {item.revenue}
                  </h3>
                </div>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {item.growth}
                </span>

              </div>
            </div>
          ))}

        </div>

        {/* Contributors */}

        <div className="bg-white border rounded-xl p-6">

          <div className="flex justify-between items-center mb-6">

            <h3 className="font-semibold">
              Top Revenue Contributors
            </h3>

            <button className="text-indigo-600 text-sm">
              View All
            </button>

          </div>

          <div className="space-y-4">

            {contributors.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <h4 className="font-medium">
                    {item.name}
                  </h4>

                  <p className="text-xs text-slate-500">
                    Revenue Contribution
                  </p>
                </div>

                <span className="font-semibold text-indigo-700">
                  {item.revenue}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Executive Insight */}

        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-semibold text-indigo-700">
            Executive Revenue Insight
          </h3>

          <p className="text-slate-600 mt-3 leading-7">
            Annual revenue reached $12.1M with a growth rate
            of 18.4% compared to the previous fiscal year.
            Enterprise Services remained the strongest
            contributor, while Partner Solutions recorded the
            highest growth momentum. Current trends indicate
            continued revenue expansion across all major
            business units.
          </p>

        </div>

      </div>
    </AdminShell>
  );
}