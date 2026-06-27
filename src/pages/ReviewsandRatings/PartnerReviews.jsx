import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, SlidersHorizontal, ChevronDown, Check, MoreVertical } from "lucide-react";

export default function PartnerReviews() {
  // --- Active Interactive Controls State Handling ---
  const [activeTab, setActiveTab] = useState("All Reviews");
  const [sortBy, setSortBy] = useState("Newest First");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Live editable state representation matching the rows layout in image_7bd2ec.jpg
  const [reviewsData, setReviewsData] = useState([
    {
      id: 1,
      partner: { name: "NetStream Fiber", code: "NS", tags: ["ISP", "Region: North"] },
      rating: 4,
      comment: '"Installation was prompt but throughput speeds are inconsistent during peak hours..."',
      meta: "2 hours ago by @jdoe_88",
      sentiment: "Neutral",
      status: "In Review",
    },
    {
      id: 2,
      partner: { name: "CorePoint Solutions", code: "CP", tags: ["ASP", "Region: Central"] },
      rating: 2,
      comment: '"Multiple billing errors over the last quarter. Support has been unresponsive."',
      meta: "5 hours ago by @company_x",
      sentiment: "Negative",
      status: "Escalated",
    },
    {
      id: 3,
      partner: { name: "SkyLink Wireless", code: "SL", tags: ["ISP", "Region: West"] },
      rating: 5,
      comment: '"Excellent service reliability. Best partner we\'ve worked with in years."',
      meta: "1 day ago by @admin_pro",
      sentiment: "Positive",
      status: "Resolved",
    },
  ]);

  // --- Inline Actions Context Handler ---
  const handleUpdateStatus = (id, newStatus) => {
    setReviewsData(prev => 
      prev.map(review => review.id === id ? { ...review, status: newStatus } : review)
    );
    setActiveMenuId(null);
  };

  // --- Filter Logic Engine ---
  const filteredReviews = reviewsData.filter((item) => {
    if (activeTab === "Flagged" && item.status !== "Escalated") return false;
    if (activeTab === "Critical" && item.rating > 2) return false;
    return true;
  });

  const renderStars = (count) => (
    <div className="flex gap-0.5 text-slate-900 text-sm select-none tracking-tight">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-slate-900" : "text-slate-200"}>★</span>
      ))}
    </div>
  );

  return (
    <AdminShell activeTab="Partner Reviews" searchPlaceholder="Search partners...">
      <div className="space-y-6">
        
        {/* TOP LAYOUT CONTROL CONTROLLER PANEL */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs font-medium text-slate-400">
              Admin <span className="text-slate-900 font-semibold mx-0.5">/ Partner Management</span>
            </div>
            {/* Added exact bold prominence heading layout */}
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
              Partner Reviews
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-normal">
              Manage and monitor performance feedback for ISPs and BSPs.
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button 
              onClick={() => alert("CSV Generation Standard Framework Hook triggered.")}
              className="flex-1 sm:flex-initial px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-slate-500" />
              <span>Export CSV</span>
            </button>
            <button 
              onClick={() => alert("Toggle Global Context Filters Overlay Menu")}
              className="flex-1 sm:flex-initial px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>

        {/* STATS KPI SUMMARY ROW (Brought to clean White Card Standard Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Total Partners */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm h-36">
            <div>
              <p className="text-xs font-bold text-slate-400 tracking-wide uppercase">Total Partners</p>
              <div className="flex items-center justify-between mt-2">
                <h3 className="font-bold text-slate-900 text-3xl tracking-tight">1,248</h3>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100/60">
                  +12%
                </span>
              </div>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="bg-black h-full rounded-full w-2/3" />
            </div>
          </div>

          {/* Card 2: Average Rating */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm h-36">
            <div>
              <p className="text-xs font-bold text-slate-400 tracking-wide uppercase">Average Rating</p>
              <div className="flex items-center gap-3 mt-2">
                <h3 className="font-bold text-slate-900 text-3xl tracking-tight">4.2</h3>
                <div className="text-slate-900 text-sm tracking-tighter select-none mt-1">★★★★★</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-normal">Based on 14.5k reviews</p>
          </div>

          {/* Card 3: Resolution Rate with Custom Sparkline Line */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm h-36 relative overflow-hidden">
            <div>
              <p className="text-xs font-bold text-slate-400 tracking-wide uppercase">Resolution Rate</p>
              <h3 className="font-bold text-slate-900 text-3xl tracking-tight mt-2">94.8%</h3>
            </div>
            <p className="text-[11px] text-slate-400 font-normal">Average time: 4.2 hrs</p>
            
            {/* Clean minimalist embedded SVG vector curve from image_7bd2ec.jpg */}
            <div className="absolute right-6 bottom-4 w-32 h-12 opacity-85 hidden sm:block">
              <svg className="w-full h-full stroke-slate-900 stroke-[2] fill-none" viewBox="0 0 100 40">
                <path d="M0,28 Q20,28 40,20 T80,10 T100,5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

        {/* CONTEXT BOARD TABULAR FEED PANEL */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* Header Internal Sub Filtering Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-slate-100 gap-4">
            
            {/* View Selection Segment Tabs */}
            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
              {["All Reviews", "Flagged", "Critical"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer border-0 ${
                    activeTab === tab
                      ? "bg-white text-slate-900 shadow-sm border border-slate-100/50"
                      : "text-slate-500 hover:text-slate-900 bg-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Quick Count Metrics & Sorters */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-slate-400 font-normal border-l border-slate-200 pl-4 hidden sm:inline">
                Showing 1-10 of 482 reviews
              </span>
              
              {/* Dynamic Sort Trigger dropdown box system */}
              <div className="relative">
                <div 
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-1.5 cursor-pointer hover:text-slate-900 select-none px-2 py-1 rounded hover:bg-slate-50"
                >
                  <span className="text-slate-400 font-normal">Sort by:</span>
                  <span className="text-slate-900 font-bold flex items-center gap-0.5">
                    {sortBy} <ChevronDown className="h-3 w-3 mt-0.5" />
                  </span>
                </div>

                {isSortOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl py-1 w-40 z-30">
                    {["Newest First", "Highest Rating", "Lowest Rating"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSortBy(opt);
                          setIsSortOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between cursor-pointer border-0 bg-transparent"
                      >
                        <span>{opt}</span>
                        {sortBy === opt && <Check className="h-3 w-3 text-slate-900" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Core Table Matrix Frame Layout */}
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Partner</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4 w-5/12">Feedback Snippet</th>
                  <th className="px-6 py-4 text-center">Sentiment</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {filteredReviews.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/30 transition-colors">
                    
                    {/* Partner Core Badge & Metadata Area */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-800 text-xs flex-shrink-0">
                          {row.partner.code}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm leading-tight">{row.partner.name}</p>
                          <p className="text-[11px] text-slate-400 font-normal mt-1.5">
                            {row.partner.tags.join(" • ")}
                          </p>
                        </div>
                      </div>
                    </td>
                    
                    {/* Minimalist Star Indicator block */}
                    <td className="px-6 py-5">{renderStars(row.rating)}</td>
                    
                    {/* Review Snippet Description */}
                    <td className="px-6 py-5">
                      <p className="text-slate-800 text-sm font-normal line-clamp-2 leading-relaxed">{row.comment}</p>
                      <span className="text-xs text-slate-400 font-normal mt-1 block">{row.meta}</span>
                    </td>
                    
                    {/* Colored Soft Badges for Sentiment Analytics Mapping */}
                    <td className="px-6 py-5 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                        row.sentiment === "Positive" ? "bg-emerald-50 text-emerald-700 border-emerald-100/70" :
                        row.sentiment === "Neutral" ? "bg-amber-50 text-amber-700 border-amber-100/70" : 
                        "bg-rose-50 text-rose-700 border-rose-100/70"
                      }`}>
                        <span className="text-[10px]">
                          {row.sentiment === "Positive" ? "😊" : row.sentiment === "Neutral" ? "😐" : "😞"}
                        </span>
                        {row.sentiment}
                      </span>
                    </td>
                    
                    {/* Moderation Workflow State Column */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          row.status === "Resolved" ? "bg-emerald-500" :
                          row.status === "In Review" ? "bg-blue-500" : "bg-rose-500"
                        }`} />
                        <span>{row.status}</span>
                      </div>
                    </td>
                    
                    {/* Dropdown Options Overlay Controller */}
                    <td className="px-6 py-5 text-center relative">
                      <button 
                        onClick={() => setActiveMenuId(activeMenuId === row.id ? null : row.id)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 transition-colors border-0 bg-transparent cursor-pointer"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>

                      {activeMenuId === row.id && (
                        <div className="absolute right-12 top-10 bg-white border border-slate-200 rounded-lg shadow-xl py-1 w-36 z-40 text-left">
                          {["In Review", "Escalated", "Resolved"].map((statusOption) => (
                            <button
                              key={statusOption}
                              onClick={() => handleUpdateStatus(row.id, statusOption)}
                              className="w-full px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors border-0 bg-transparent text-left cursor-pointer block"
                            >
                              Mark as {statusOption}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>

          {/* Table Footer: Dynamic Items per page selection and pagination links */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-100 gap-4 text-xs font-bold text-slate-400">
            
            <div className="flex items-center gap-2 text-slate-500">
              <span>Items per page:</span>
              <div className="relative">
                <select 
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(e.target.value)}
                  className="bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 font-bold pr-6 appearance-none focus:outline-none focus:border-slate-400 cursor-pointer text-xs"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <ChevronDown className="h-3 w-3 text-slate-500 absolute right-1.5 top-2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                className={`hover:text-slate-900 transition-colors bg-transparent border border-slate-200 rounded p-1.5 cursor-pointer font-bold ${currentPage === 1 ? "opacity-35 pointer-events-none" : ""}`}
              >
                &lt;
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 rounded flex items-center justify-center transition-all cursor-pointer border-0 font-bold text-xs ${
                      currentPage === pageNum
                        ? "bg-black text-white shadow-sm"
                        : "bg-transparent hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                <span className="px-1 select-none text-slate-300">...</span>
                <button 
                  onClick={() => setCurrentPage(12)}
                  className={`w-7 h-7 rounded flex items-center justify-center transition-all cursor-pointer border-0 font-bold text-xs ${
                    currentPage === 12 ? "bg-black text-white" : "bg-transparent hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  12
                </button>
              </div>
              <button 
                onClick={() => currentPage < 12 && setCurrentPage(currentPage + 1)}
                className="text-slate-700 hover:text-slate-900 transition-colors bg-transparent border border-slate-200 rounded p-1.5 cursor-pointer font-bold"
              >
                &gt;
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}