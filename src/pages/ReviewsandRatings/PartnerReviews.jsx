import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, SlidersHorizontal, Eye, Edit2, X } from "lucide-react";

export default function PartnerReviews() {
  // --- Active Interactive Controls State Handling ---
  const [activeTab, setActiveTab] = useState("All Reviews");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({ sentiment: "All", minRating: 0 });

  // --- Export CSV Logic ---
  const handleExportCSV = () => {
    const headers = ["Partner", "Rating", "Sentiment", "Status", "Comment"];
    const rows = reviewsData.map(r => [r.partner.name, r.rating, r.sentiment, r.status, r.comment.replace(/"/g, '')]);
    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'partner_reviews_report.csv';
    link.click();
  };

  const [reviewsData, setReviewsData] = useState([
    { id: 1, partner: { name: "NetStream Fiber", code: "NS", tags: ["ISP", "Region: North"] }, rating: 4, comment: '"Installation was prompt but throughput speeds are inconsistent during peak hours..."', meta: "2 hours ago by @jdoe_88", sentiment: "Neutral", status: "In Review" },
    { id: 2, partner: { name: "CorePoint Solutions", code: "CP", tags: ["ASP", "Region: Central"] }, rating: 2, comment: '"Multiple billing errors over the last quarter. Support has been unresponsive."', meta: "5 hours ago by @company_x", sentiment: "Negative", status: "Escalated" },
    { id: 3, partner: { name: "SkyLink Wireless", code: "SL", tags: ["ISP", "Region: West"] }, rating: 5, comment: '"Excellent service reliability. Best partner we\'ve worked with in years."', meta: "1 day ago by @admin_pro", sentiment: "Positive", status: "Resolved" },
  ]);

  // --- Filter Logic ---
  const filteredReviews = reviewsData.filter((item) => {
    if (activeTab === "Flagged" && item.status !== "Escalated") return false;
    if (activeTab === "Critical" && item.rating > 2) return false;
    if (filterCriteria.sentiment !== "All" && item.sentiment !== filterCriteria.sentiment) return false;
    if (item.rating < filterCriteria.minRating) return false;
    return true;
  });

  const getSentimentColor = (s) => {
    if (s === "Positive") return "text-emerald-600 bg-emerald-50";
    if (s === "Negative") return "text-red-600 bg-red-50";
    return "text-blue-600 bg-blue-50";
  };

  const renderStars = (count) => (
    <div className="flex gap-0.5 text-slate-900 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-slate-900" : "text-slate-200"}>★</span>
      ))}
    </div>
  );

  return (
    <AdminShell activeTab="Partner Reviews" searchPlaceholder="Search partners...">
      <div className="space-y-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs font-medium text-slate-400">Admin <span className="text-slate-900 font-semibold mx-0.5">/ Partner Management</span></div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">Partner Reviews</h2>
            <p className="text-sm text-slate-500 mt-1">Manage and monitor performance feedback for all partners.</p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button onClick={handleExportCSV} className="flex-1 sm:flex-initial px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 shadow-sm cursor-pointer">
              <Download className="h-3.5 w-3.5 text-slate-500" /> Export CSV
            </button>
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex-1 sm:flex-initial px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 shadow-sm cursor-pointer">
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" /> Advanced Filters
            </button>
          </div>
        </div>

        {/* ADVANCED FILTER PANEL */}
        {isFilterOpen && (
          <div className="bg-white p-4 border border-slate-200 rounded-xl flex flex-wrap gap-4 items-center shadow-sm">
             <select onChange={(e) => setFilterCriteria({...filterCriteria, sentiment: e.target.value})} className="border border-slate-200 rounded px-2 py-1 text-xs">
               <option value="All">All Sentiments</option>
               <option value="Positive">Positive</option>
               <option value="Neutral">Neutral</option>
               <option value="Negative">Negative</option>
             </select>
             <input type="number" placeholder="Min Rating (0-5)" className="border border-slate-200 rounded px-2 py-1 text-xs w-32" onChange={(e) => setFilterCriteria({...filterCriteria, minRating: Number(e.target.value)})} />
             <button onClick={() => setIsFilterOpen(false)} className="ml-auto text-slate-400 hover:text-red-500"><X size={16}/></button>
          </div>
        )}

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           <div className="bg-white border border-slate-200 rounded-xl p-6 h-36 shadow-sm"><p className="text-xs font-bold text-slate-400 uppercase">Total Partners</p><h3 className="font-bold text-3xl mt-2">1,248</h3></div>
           <div className="bg-white border border-slate-200 rounded-xl p-6 h-36 shadow-sm"><p className="text-xs font-bold text-slate-400 uppercase">Average Rating</p><h3 className="font-bold text-3xl mt-2">4.2</h3></div>
           <div className="bg-white border border-slate-200 rounded-xl p-6 h-36 shadow-sm"><p className="text-xs font-bold text-slate-400 uppercase">Resolution Rate</p><h3 className="font-bold text-3xl mt-2">94.8%</h3></div>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="bg-slate-50 border-b text-[11px] font-bold text-slate-400 uppercase">
                  <th className="px-6 py-4">Partner</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Feedback</th>
                  <th className="px-6 py-4 text-center">Sentiment</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReviews.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="px-6 py-5 font-bold text-sm">{row.partner.name}</td>
                    <td className="px-6 py-5">{renderStars(row.rating)}</td>
                    <td className="px-6 py-5 text-sm">{row.comment}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${getSentimentColor(row.sentiment)}`}>{row.sentiment}</span>
                    </td>
                    <td className="px-6 py-5 text-xs font-semibold">{row.status}</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center gap-4">
                        <button onClick={() => alert("View Action Triggered")} className="text-blue-500 hover:text-blue-700 transition-colors"><Eye size={18} /></button>
                        <button onClick={() => alert("Edit Action Triggered")} className="text-indigo-500 hover:text-indigo-700 transition-colors"><Edit2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}