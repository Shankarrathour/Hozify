import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, Star, MessageSquare, Smile, Zap, TrendingUp, X } from "lucide-react";

export default function RatingAnalytics() {
  const [timeRange, setTimeRange] = useState("7D");
  const [showAllFeedback, setShowAllFeedback] = useState(false);

  const analyticStats = [
    { title: "Average Rating", value: "4.8", meta: "+0.2 vs last period", isPositive: true, icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Total Reviews", value: "12.4k", meta: "+8% growth rate", isPositive: true, icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Sentiment Score", value: "92%", meta: "Positive overall sentiment", isNeutralMeta: true, icon: Smile, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Response Rate", value: "98.5%", meta: "-1.2m avg response time", isPositive: true, icon: Zap, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  const criticalFeedbacks = [
    { id: 1, user: "Marcus V.", rating: 1, comment: "UI latency during heavy load sessions...", time: "2 HOURS AGO" },
    { id: 2, user: "Elena G.", rating: 1, comment: "Checkout flow failed twice on mobile...", time: "5 HOURS AGO" },
    { id: 3, user: "Sarah K.", rating: 2, comment: "Onboarding flow feels disconnected...", time: "1 DAY AGO" },
    { id: 4, user: "John D.", rating: 2, comment: "Bug in the settings menu page...", time: "2 DAYS AGO" },
  ];

  // CSV Export Logic
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "User,Rating,Comment,Time\n" + 
      criticalFeedbacks.map(f => `${f.user},${f.rating},"${f.comment}",${f.time}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rating_report.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <AdminShell activeTab="Rating Analytics">
      <div className="space-y-6 p-6 bg-slate-50 min-h-screen">
        
        {/* Header with Dynamic Date Select */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Rating & Sentiment Analytics</h1>
          </div>
          <div className="flex gap-3">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold shadow-sm cursor-pointer"
            >
              <option value="7D">Last 7 Days</option>
              <option value="30D">Last 30 Days</option>
              <option value="90D">Last 90 Days</option>
            </select>
            <button onClick={handleExport} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm">
              <Download className="h-4 w-4" /> Export Report
            </button>
          </div>
        </div>

        {/* Colorful KPI Cards */}
        <div className="grid grid-cols-4 gap-5">
          {analyticStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase">{stat.title}</p>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-[11px] font-medium text-emerald-500 mt-1">{stat.meta}</p>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold">Critical Feedback</h3>
            <button onClick={() => setShowAllFeedback(true)} className="text-sm font-bold text-blue-600">View All</button>
          </div>
          {criticalFeedbacks.slice(0, 3).map(item => (
            <div key={item.id} className="py-3 border-b text-sm">
              <strong>{item.user}</strong> - {item.comment}
            </div>
          ))}
        </div>

        {/* Modal for View All */}
        {showAllFeedback && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[500px] p-6 rounded-xl shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">All Critical Feedback</h2>
                <X className="cursor-pointer" onClick={() => setShowAllFeedback(false)} />
              </div>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {criticalFeedbacks.map(f => (
                  <div key={f.id} className="p-3 bg-slate-50 rounded-lg">
                    <p className="font-bold text-sm">{f.user}</p>
                    <p className="text-xs text-slate-600">{f.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}