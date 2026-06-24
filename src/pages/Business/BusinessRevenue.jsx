import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Calendar,
  Download,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

export default function BusinessRevenue() {
  const payouts = [
    {
      id: "#TRX-9481",
      recipient: "Main Branch Fleet",
      date: "Oct 24, 2023",
      amount: "$14,200.00",
      status: "COMPLETED",
    },
    {
      id: "#TRX-9480",
      recipient: "Logistics Partner Ltd",
      date: "Oct 23, 2023",
      amount: "$3,450.00",
      status: "PROCESSING",
    },
    {
      id: "#TRX-9479",
      recipient: "Service Subscriptions",
      date: "Oct 22, 2023",
      amount: "$840.50",
      status: "COMPLETED",
    },
    {
      id: "#TRX-9478",
      recipient: "Maintenance Fees",
      date: "Oct 21, 2023",
      amount: "$1,100.00",
      status: "COMPLETED",
    },
  ];

  return (
    <AdminShell
      activeTab="Revenue Dashboard"
      searchPlaceholder="Search revenue data..."
    >
      <div className="space-y-6">

        {/* HEADER */}

        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-4xl font-bold">
              Revenue Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Financial performance across all business units for Q4 2023.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="h-12 px-5 border rounded-lg flex items-center gap-2">
              <Calendar size={18} />
              Last 30 Days
            </button>

            <button className="h-12 px-5 bg-indigo-700 text-white rounded-lg flex items-center gap-2">
              <Download size={18} />
              Export Report
            </button>

          </div>

        </div>

        {/* TOP SECTION */}

        <div className="grid grid-cols-12 gap-6">

          {/* CHART */}

          <div className="col-span-8 bg-white border rounded-xl p-6">

            <div className="flex justify-between items-start mb-8">

              <div>
                <h2 className="text-3xl font-semibold">
                  Earnings Overview
                </h2>

                <p className="text-gray-500">
                  Net revenue vs Operating costs
                </p>
              </div>

              <div className="flex gap-5">

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-700"></div>
                  Revenue
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                  Costs
                </div>

              </div>

            </div>

            {/* BAR CHART */}

            <div className="h-[420px] flex items-end justify-between px-6">

              {[40, 45, 50, 40, 58, 90, 39, 33].map((bar, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-end items-center"
                >
                  <div
                    className="w-10 bg-gray-200 rounded-t"
                    style={{
                      height: `${bar + 40}px`,
                    }}
                  />

                  <div
                    className="w-10 bg-indigo-700 -mt-20 rounded-t"
                    style={{
                      height: `${bar}px`,
                    }}
                  />
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT CARDS */}

          <div className="col-span-4 space-y-4">

            <div className="bg-white border rounded-xl p-6">
              <h4 className="text-gray-500 text-xl">
                Total Earnings
              </h4>

              <div className="text-5xl font-bold mt-3">
                $482,910.42
              </div>

              <p className="text-green-600 mt-5 flex items-center gap-1">
                <ArrowUpRight size={16} />
                +12.5% from last month
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h4 className="text-gray-500 text-xl">
                Pending Settlements
              </h4>

              <div className="text-5xl font-bold mt-3">
                $24,103.00
              </div>

              <p className="text-gray-500 mt-5 flex items-center gap-2">
                <Clock3 size={15} />
                Est. payout in 3 business days
              </p>
            </div>

            <div className="bg-indigo-800 text-white rounded-xl p-6">

              <h4 className="text-indigo-200 text-xl">
                Available for Payout
              </h4>

              <div className="text-5xl font-bold mt-3">
                $12,050.00
              </div>

              <button className="bg-white text-black px-5 h-12 rounded-lg mt-6 font-semibold">
                Withdraw Funds
              </button>

            </div>

          </div>

        </div>        {/* MIDDLE SECTION */}

        <div className="grid grid-cols-12 gap-6">

          {/* RECENT PAYOUTS */}

          <div className="col-span-8 bg-white border rounded-xl overflow-hidden">

            <div className="flex items-center justify-between px-6 py-5 border-b">

              <h2 className="text-3xl font-semibold">
                Recent Payouts
              </h2>

              <button className="font-semibold hover:text-indigo-700">
                View All
              </button>

            </div>

            {/* TABLE HEAD */}

            <div className="grid grid-cols-5 px-6 py-4 bg-gray-50 border-b text-gray-500 text-sm font-semibold uppercase">

              <div>Transaction ID</div>
              <div>Recipient</div>
              <div>Date</div>
              <div>Amount</div>
              <div>Status</div>

            </div>

            {/* TABLE ROWS */}

            {payouts.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 px-6 py-6 border-b last:border-b-0 items-center"
              >

                <div className="font-semibold">
                  {item.id}
                </div>

                <div>
                  {item.recipient}
                </div>

                <div>
                  {item.date}
                </div>

                <div className="font-semibold">
                  {item.amount}
                </div>

                <div>

                  <span
                    className={`px-3 py-1 rounded text-xs font-semibold ${
                      item.status === "COMPLETED"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* REVENUE BY SERVICE */}

          <div className="col-span-4 bg-white border rounded-xl p-6">

            <h2 className="text-3xl font-semibold mb-8">
              Revenue by Service
            </h2>

            {/* ITEM */}

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="text-xl">
                  Facility Management
                </span>

                <span className="font-bold text-xl">
                  42%
                </span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-full w-[42%] bg-black rounded-full"></div>
              </div>

            </div>

            {/* ITEM */}

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="text-xl">
                  Security Personnel
                </span>

                <span className="font-bold text-xl">
                  28%
                </span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-full w-[28%] bg-gray-700 rounded-full"></div>
              </div>

            </div>

            {/* ITEM */}

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="text-xl">
                  Technical Support
                </span>

                <span className="font-bold text-xl">
                  18%
                </span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-full w-[18%] bg-gray-500 rounded-full"></div>
              </div>

            </div>

            {/* ITEM */}

            <div className="mb-12">

              <div className="flex justify-between mb-3">

                <span className="text-xl">
                  Consultation
                </span>

                <span className="font-bold text-xl">
                  12%
                </span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-full w-[12%] bg-gray-400 rounded-full"></div>
              </div>

            </div>

            <div className="border-t pt-8">

              <button className="font-semibold text-xl hover:text-indigo-700">
                View Detailed Breakdown
              </button>

            </div>

          </div>

        </div>        {/* GLOBAL REVENUE SECTION */}

        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="grid grid-cols-12">

            {/* LEFT INFO */}

            <div className="col-span-4 p-8 border-r">

              <h2 className="text-4xl font-semibold mb-4">
                Global Revenue
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Regional distribution of earnings and contract density
                across primary hubs.
              </p>

              <div className="space-y-6">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-black"></span>
                    <span className="text-2xl">
                      North America
                    </span>
                  </div>

                  <span className="font-bold text-2xl">
                    $210.4k
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                    <span className="text-2xl">
                      Europe
                    </span>
                  </div>

                  <span className="font-bold text-2xl">
                    $154.2k
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="text-2xl">
                      Asia Pacific
                    </span>
                  </div>

                  <span className="font-bold text-2xl">
                    $98.3k
                  </span>

                </div>

              </div>

            </div>

            {/* MAP AREA */}

            <div className="col-span-8 relative bg-gray-200 min-h-[380px] flex items-center justify-center">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World Map"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />

              <button className="relative z-10 bg-white px-8 py-3 rounded-md shadow font-medium hover:bg-gray-50">
                Interactive Map View
              </button>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="border-t pt-6 mt-10">

          <div className="flex items-center justify-between text-gray-500 text-sm">

            <p>
              © 2023 Hozify Enterprise. Financial data is updated every
              15 minutes.
            </p>

            <div className="flex gap-8">

              <span>System Status: Operational</span>

              <span>Privacy Policy</span>

              <span>Support</span>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}