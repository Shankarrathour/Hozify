import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, Star, MessageSquare, Smile, Zap, TrendingUp } from "lucide-react";

export default function RatingAnalytics() {
  const [timeRange, setTimeRange] = useState("7D");

  // Upper Grid Analytics Statistics
  const analyticStats = [
    { title: "Average Rating", value: "4.8", meta: "+0.2 vs last period", isPositive: true, icon: Star },
    { title: "Total Reviews", value: "12.4k", meta: "+8% growth rate", isPositive: true, icon: MessageSquare },
    { title: "Sentiment Score", value: "92%", meta: "Positive overall sentiment", isNeutralMeta: true, icon: Smile },
    { title: "Response Rate", value: "98.5%", meta: "-1.2m avg response time", isPositive: true, icon: Zap },
  ];

  // Critical Feedback list extracted from the image
  const criticalFeedbacks = [
    {
      id: 1,
      user: "Marcus V.",
      rating: 1,
      comment: "UI latency during heavy load sessions is becoming a bottleneck...",
      time: "2 HOURS AGO",
    },
    {
      id: 2,
      user: "Elena G.",
      rating: 1,
      comment: "Checkout flow failed twice on mobile Safari. Needs immediate...",
      time: "5 HOURS AGO",
    },
    {
      id: 3,
      user: "Sarah K.",
      rating: 2,
      comment: "The onboarding flow feels disconnected from the core application dashboard...",
      time: "1 DAY AGO",
    },
  ];

  const categoryScores = [
    { name: "Service", score: 92 },
    { name: "Speed", score: 78 },
    { name: "Quality", score: 85 },
    { name: "Support", score: 95 },
    { name: "Price", score: 64 },
  ];

  return (
    <AdminShell activeTab="Rating Analytics" searchPlaceholder="Search metrics...">
      <div className="space-y-6 select-none antialiased text-slate-900 bg-slate-50/50 p-4 rounded-xl">
        
        {/* MAIN PAGE HEADER WITH HEADING & SUB-TEXT */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Rating & Sentiment Analytics</h1>
            <p className="text-sm text-slate-400 font-normal mt-0.5 max-w-xl">
              Comprehensive performance metrics and sentiment insights across all user segments.
            </p>
          </div>
          
          {/* TOP CONTROLS: TIME RANGE TOGGLE & EXPORT */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="bg-white border border-slate-200 p-1 rounded-lg flex items-center shadow-sm">
              {["7D", "30D", "90D"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    timeRange === range
                      ? "bg-black text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            <button 
              onClick={() => alert("Export Report Triggered")}
              className="px-4 py-2 bg-white text-slate-800 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm border border-slate-200 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-slate-400" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* METRIC SUMMARY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {analyticStats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm h-32 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.title}</p>
                    <h3 className="font-bold text-slate-900 text-3xl tracking-tight mt-1">{stat.value}</h3>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <IconComponent className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
                
                <p className={`text-[11px] font-medium ${
                  stat.isNeutralMeta ? "text-slate-500 font-semibold" : stat.isPositive ? "text-emerald-500" : "text-rose-500"
                }`}>
                  {stat.meta}
                </p>
              </div>
            );
          })}
        </div>

        {/* MIDDLE SECTION: TREND GRAPH & SENTIMENT DISTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Rating Trends Line Visual */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between h-[380px]">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">Rating Trends</h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <span>Average Rating</span>
              </div>
            </div>

            {/* Simulated Clean Analytics Graph Line */}
            <div className="relative flex-1 mt-6 flex items-end h-48 border-b border-l border-slate-100 pl-2 pb-2">
              <span className="absolute left-[-20px] top-0 text-[10px] font-bold text-slate-300">5.0</span>
              <span className="absolute left-[-20px] bottom-0 text-[10px] font-bold text-slate-300">4.0</span>
              
              {/* SVG Smooth Curve mirroring image_7cb76a */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 10 150 C 80 120, 120 80, 180 120 C 240 160, 280 40, 360 40 C 440 40, 480 160, 540 120 C 560 100, 580 40, 590 50"
                  stroke="#4f46e5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Visual Dot nodes along the curve path */}
                <circle cx="120" cy="98" r="4" fill="#1e1b4b" stroke="#ffffff" strokeWidth="2" />
                <circle cx="232" cy="148" r="4" fill="#1e1b4b" stroke="#ffffff" strokeWidth="2" />
                <circle cx="330" cy="40" r="4" fill="#1e1b4b" stroke="#ffffff" strokeWidth="2" />
                <circle cx="435" cy="85" r="4" fill="#1e1b4b" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>

            {/* X Axis Days Ticks */}
            <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-2 px-4">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Sentiment Distribution Bar Blocks */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between h-[380px]">
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-6">Sentiment Distribution</h3>
              
              <div className="space-y-5">
                {/* Positive Row */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Positive</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "88%" }} />
                  </div>
                </div>

                {/* Neutral Row */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Neutral</span>
                    <span>9%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-slate-300 rounded-full" style={{ width: "9%" }} />
                  </div>
                </div>

                {/* Negative Row */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Negative</span>
                    <span>3%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: "3%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50 mt-4">
              <TrendingUp className="h-4 w-4" />
              <span>Sentiment has improved by 4% this week.</span>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: RATING PER CATEGORY & CRITICAL FEEDBACK LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Rating Per Category Bar Visuals */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[300px]">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Rating per Category</h3>
            
            <div className="flex items-end justify-between gap-4 h-40 px-4 mt-4">
              {categoryScores.map((cat, i) => (
                <div key={i} className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-full bg-slate-50 border border-slate-100 rounded-lg flex items-end h-32 relative overflow-hidden">
                    <div 
                      className="bg-slate-900 w-full rounded-b-md transition-all duration-500" 
                      style={{ height: `${cat.score}%` }} 
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-400 mixed-blend-difference">
                      {(cat.score / 20).toFixed(1)}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Feedback Real List panel */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[300px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">Critical Feedback</h3>
              <button 
                onClick={() => alert("Redirecting to all Feedbacks")}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                View All
              </button>
            </div>

            <div className="divide-y divide-slate-100 flex-1">
              {criticalFeedbacks.map((item) => (
                <div key={item.id} className="py-3.5 first:pt-0 last:pb-0 text-left">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 border border-slate-200">
                        {item.user[0]}
                      </div>
                      <span className="text-xs font-bold text-slate-900">{item.user}</span>
                    </div>
                    
                    {/* Star layout row mapping code */}
                    <div className="flex gap-0.5 text-xs">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < item.rating ? "text-amber-400" : "text-slate-200"}>★</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-600 font-normal mt-1.5 line-clamp-1 leading-relaxed">
                    "{item.comment}"
                  </p>
                  <span className="text-[9px] text-slate-400 font-semibold tracking-wider block mt-1">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}