import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { SlidersHorizontal, Download, Eye, Edit2, ShieldAlert, ShieldCheck, Trophy, Calendar } from "lucide-react";

export default function SellerRevenue() {
  // --- States for Filters & Functionalities ---
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 30 Days");
  const [currentPage, setCurrentPage] = useState(1);

  // --- Core Raw Data ---
  const topSellersData = [
    { id: 1, name: "Lumina Gear", category: "Electronics", amount: "$1.2M", change: "2.4%" },
    { id: 2, name: "Aura Living", category: "Home & Decor", amount: "$984K", change: "12.8%" },
    { id: 3, name: "Vigor Skin", category: "Beauty", amount: "$872K", change: "5.1%" },
  ];

  const initialTableData = [
    { id: "SL-98234", name: "Lumina Gear", initial: "LG", bg: "bg-blue-50", text: "text-blue-600", category: "Electronics", catBg: "bg-indigo-50 text-indigo-600", sales: 1245000, feesRate: 15, status: "Active" },
    { id: "SL-11202", name: "Aura Living", initial: "AL", bg: "bg-amber-50", text: "text-amber-600", category: "Home & Decor", catBg: "bg-sky-50 text-sky-600", sales: 984200, feesRate: 12, status: "Active" },
    { id: "SL-88392", name: "Vigor Skin", initial: "VS", bg: "bg-purple-50", text: "text-purple-600", category: "Beauty", catBg: "bg-purple-50 text-purple-600", sales: 872150, feesRate: 10, status: "Suspended" },
  ];

  const [tableData, setTableData] = useState(initialTableData);

  // --- Dynamic Calculations based on Filters ---
  const filteredTableData = tableData.filter((row) => {
    if (selectedCategory === "All Categories") return true;
    return row.category === selectedCategory;
  });

  // --- Action Button Handlers ---
  const handleViewSeller = (name) => {
    alert(`Viewing detailed ledger & profile for: ${name}`);
  };

  const handleEditSeller = (name) => {
    alert(`Opening quick editor window for: ${name}`);
  };

  const toggleSellerStatus = (id) => {
    setTableData(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === "Active" ? "Suspended" : "Active";
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  const handleApplyAdvancedFilters = () => {
    alert(`Applying advanced filters: Category [${selectedCategory}] & Timeframe [${selectedTimeframe}]`);
  };

  const handleDownloadReport = () => {
    // Basic structured CSV generator block
    const headers = "Seller ID,Name,Category,Sales,Fees,Net Revenue,Status\n";
    const rows = filteredTableData.map(r => {
      const fees = r.sales * (r.feesRate / 100);
      const net = r.sales - fees;
      return `${r.id},${r.name},${r.category},$${r.sales},$${fees},$${net},${r.status}`;
    }).join("\n");
    
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `Seller_Revenue_Report_${selectedCategory.replace(" ", "_")}.csv`);
    a.click();
  };

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Seller Revenue</h1>
            <p className="text-sm text-slate-500 mt-1">
              Real-time marketplace performance and seller analytics.
            </p>
          </div>

          {/* Connected Functional Filters */}
          <div className="flex gap-3">
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer hover:border-slate-300 transition"
              >
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Home & Decor">Home & Decor</option>
                <option value="Beauty">Beauty</option>
              </select>
              <div className="absolute right-3 top-3.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 w-0 h-0" />
            </div>

            <div className="relative">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-lg pl-8 pr-8 py-2 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer hover:border-slate-300 transition"
              >
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
                <option value="Last Quarter">Last Quarter</option>
              </select>
              <Calendar className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <div className="absolute right-3 top-3.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 w-0 h-0" />
            </div>
          </div>
        </div>

        {/* Top 10 Sellers & Revenue Trends Widgets */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Compact Top Sellers Card */}
          <div className="bg-white border rounded-xl p-5 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-slate-900">Top Sellers</h3>
                <Trophy className="h-4 w-4 text-amber-500" />
              </div>

              <div className="space-y-3.5">
                {topSellersData.map((seller) => (
                  <div key={seller.id} className="flex items-center justify-between py-0.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-slate-400 w-3">{seller.id}</span>
                      <div className="w-7 h-7 rounded bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs text-slate-500">
                        {seller.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{seller.name}</p>
                        <p className="text-[10px] text-slate-400">{seller.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-800">{seller.amount}</p>
                      <p className="text-[10px] font-bold text-emerald-600">↗ {seller.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-dashed border-slate-100 mt-4 pt-3 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Subtotal</span>
              <span className="text-base font-black text-indigo-600">$8.42M</span>
            </div>
          </div>

          {/* Revenue Trends Card */}
          <div className="bg-white border rounded-xl p-5 col-span-2 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Revenue Trends</h3>
                  <p className="text-[11px] text-slate-400">Aggregated marketplace sales vs. target projection</p>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-semibold">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    <span className="text-slate-600">Actual</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-200"></span>
                    <span className="text-slate-400">Forecast</span>
                  </div>
                </div>
              </div>

              {/* Chart Line Minimalist Placeholder */}
              <div className="h-28 w-full mt-4 relative flex flex-col justify-end">
                <div className="absolute inset-x-0 bottom-8 border-b border-slate-100" />
                <div className="w-full h-1 bg-slate-100 rounded mb-8 relative">
                  <div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-600 rounded" />
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
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
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Seller Directory</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Showing list updated according to selected parameters</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={handleApplyAdvancedFilters}
                className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 transition"
                title="Advanced Filters"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
              </button>
              <button 
                onClick={handleDownloadReport}
                className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 transition flex items-center gap-1 text-xs font-semibold px-2.5"
                title="Download CSV"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-5 py-3">Seller Information</th>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Sales Volume</th>
                    <th className="px-5 py-3">Marketplace Fees</th>
                    <th className="px-5 py-3">Net Revenue</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                  {filteredTableData.length > 0 ? (
                    filteredTableData.map((row, index) => {
                      const computedFees = row.sales * (row.feesRate / 100);
                      const computedNet = row.sales - computedFees;

                      return (
                        <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-full ${row.bg} ${row.text} flex items-center justify-center font-bold text-xs shadow-sm`}>
                                {row.initial}
                              </div>
                              <div>
                                <p className="font-bold text-slate-900">{row.name}</p>
                                <p className="text-[10px] text-slate-400 font-normal">ID: {row.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.catBg}`}>
                              {row.category}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-slate-900 font-medium">
                            ${row.sales.toLocaleString()}
                          </td>
                          <td className="px-5 py-3.5 text-rose-600">
                            ${computedFees.toLocaleString()} <span className="text-[10px] text-slate-400 font-normal">({row.feesRate}%)</span>
                          </td>
                          <td className="px-5 py-3.5 text-slate-900 font-bold">
                            ${computedNet.toLocaleString()}
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              row.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
                            }`}>
                              <span className={`w-1 h-1 rounded-full ${row.status === "Active" ? "bg-emerald-600" : "bg-rose-600"}`} />
                              {row.status}
                            </span>
                          </td>
                          {/* Beautiful and clickable row actions */}
                          <td className="px-5 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button 
                                onClick={() => handleViewSeller(row.name)}
                                className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded transition"
                                title="View Details"
                              >
                                <Eye className="h-3.5 w-3.5" />
                              </button>
                              <button 
                                onClick={() => handleEditSeller(row.name)}
                                className="p-1 text-slate-400 hover:text-amber-600 hover:bg-slate-100 rounded transition"
                                title="Edit Record"
                              >
                                <Edit2 className="h-3.5 w-3.5" />
                              </button>
                              <button 
                                onClick={() => toggleSellerStatus(row.id)}
                                className={`p-1 rounded transition ${
                                  row.status === "Active" ? "text-slate-400 hover:text-rose-600 hover:bg-rose-50" : "text-rose-500 hover:text-emerald-600 hover:bg-emerald-50"
                                }`}
                                title={row.status === "Active" ? "Suspend Account" : "Activate Account"}
                              >
                                {row.status === "Active" ? <ShieldAlert className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-8 text-slate-400 font-medium">
                        No sellers found matching the "{selectedCategory}" category filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Pagination with dynamic active state */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-white text-[11px] font-bold text-slate-400">
            <span>Showing {filteredTableData.length > 0 ? "1" : "0"} to {filteredTableData.length} of {filteredTableData.length} entries</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-6 h-6 rounded flex items-center justify-center font-bold transition ${
                    currentPage === page ? "bg-slate-900 text-white shadow-sm" : "hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}