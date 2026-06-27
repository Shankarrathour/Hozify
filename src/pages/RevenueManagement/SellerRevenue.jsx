import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { SlidersHorizontal, Download, MoreVertical, Trophy } from "lucide-react";

export default function SellerRevenue() {
  // Top 10 Sellers Data
  const topSellers = [
    { id: 1, name: "Lumina Gear", category: "Electronics", amount: "$1.2M", change: "2.4%" },
    { id: 2, name: "Aura Living", category: "Home & Decor", amount: "$984K", change: "12.8%" },
    { id: 3, name: "Vigor Skin", category: "Beauty", amount: "$872K", change: "5.1%" },
  ];

  // Seller Directory Table Data
  const tableData = [
    {
      id: "SL-98234",
      name: "Lumina Gear",
      initial: "LG",
      bg: "bg-blue-100",
      text: "text-blue-600",
      category: "Electronics",
      catBg: "bg-indigo-50 text-indigo-600",
      sales: "$1,245,000",
      fees: "$186,750 (15%)",
      revenue: "$1,058,250",
      status: "Active",
    },
    {
      id: "SL-11202",
      name: "Aura Living",
      initial: "AL",
      bg: "bg-blue-50",
      text: "text-blue-500",
      category: "Home & Decor",
      catBg: "bg-sky-50 text-sky-600",
      sales: "$984,200",
      fees: "$118,104 (12%)",
      revenue: "$866,096",
      status: "Active",
    },
    {
      id: "SL-88392",
      name: "Vigor Skin",
      initial: "VS",
      bg: "bg-purple-100",
      text: "text-purple-600",
      category: "Beauty",
      catBg: "bg-purple-50 text-purple-600",
      sales: "$872,150",
      fees: "$87,215 (10%)",
      revenue: "$784,935",
      status: "Suspended",
    },
  ];

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Seller Revenue</h1>
            <p className="text-sm text-slate-500 mt-1">
              Real-time marketplace performance and seller analytics.
            </p>
          </div>

          {/* Filters aligned with Figma */}
          <div className="flex gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm font-medium text-slate-600 focus:outline-none cursor-pointer">
                <option>Electronics</option>
                <option>Home & Decor</option>
                <option>Beauty</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 w-0 h-0" />
            </div>

            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium flex items-center gap-2">
              <span>📅</span> Last 30 Days
            </button>
          </div>
        </div>

        {/* Top 10 Sellers & Revenue Trends Widgets */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Top 10 Sellers Card */}
          <div className="bg-white border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-base text-slate-900">Top 10 Sellers</h3>
                <Trophy className="h-5 w-5 text-indigo-600" />
              </div>

              <div className="space-y-4">
                {topSellers.map((seller) => (
                  <div key={seller.id} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-400 w-4">{seller.id}</span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">
                        {seller.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{seller.name}</p>
                        <p className="text-xs text-slate-400">{seller.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-800">{seller.amount}</p>
                      <p className="text-xs font-medium text-emerald-600">↗ {seller.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-dashed border-slate-200 mt-6 pt-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Revenue (Top 10)</span>
              <span className="text-xl font-bold text-indigo-600">$8.42M</span>
            </div>
          </div>

          {/* Revenue Trends Card */}
          <div className="bg-white border rounded-xl p-6 col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-bold text-base text-slate-900">Revenue Trends</h3>
                  <p className="text-xs text-slate-400">Aggregated marketplace sales vs. target projection</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-950"></span>
                    <span className="text-slate-600">Actual</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-200"></span>
                    <span className="text-slate-400">Forecast</span>
                  </div>
                </div>
              </div>

              {/* Chart Line Representation placeholder */}
              <div className="h-40 w-full mt-6 relative flex flex-col justify-end">
                <div className="absolute inset-x-0 bottom-12 border-b border-slate-100" />
                <div className="w-full h-1 bg-slate-200 rounded mb-12" />
              </div>
            </div>

            <div className="flex justify-between text-xs font-medium text-slate-400 px-2">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>

        </div>

        {/* Seller Directory Table Section */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
          {/* Table Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-base text-slate-900">Seller Directory</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-3.5">Seller Information</th>
                  <th className="px-6 py-3.5">Category</th>
                  <th className="px-6 py-3.5">Sales Volume</th>
                  <th className="px-6 py-3.5">Marketplace Fees</th>
                  <th className="px-6 py-3.5">Net Revenue</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${row.bg} ${row.text} flex items-center justify-center font-bold text-xs`}>
                          {row.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{row.name}</p>
                          <p className="text-xs text-slate-400 font-normal">ID: {row.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${row.catBg}`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-900">{row.sales}</td>
                    <td className="px-6 py-4 text-rose-600 font-semibold">{row.fees}</td>
                    <td className="px-6 py-4 text-slate-900 font-bold">{row.revenue}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${row.status === "Active" ? "bg-indigo-600" : "bg-rose-500"}`} />
                        <span className="text-xs font-semibold">{row.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>

          {/* Table Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-white text-xs font-medium text-slate-500">
            <span>Showing 1 to 10 of 125</span>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded bg-indigo-900 text-white flex items-center justify-center font-semibold">1</button>
              <button className="w-7 h-7 rounded hover:bg-slate-100 flex items-center justify-center">2</button>
              <button className="w-7 h-7 rounded hover:bg-slate-100 flex items-center justify-center">3</button>
              <span className="px-1">...</span>
              <button className="w-7 h-7 rounded hover:bg-slate-100 flex items-center justify-center">125</button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}