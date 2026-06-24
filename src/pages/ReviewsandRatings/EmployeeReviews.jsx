import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, Plus, ChevronDown, Check, MoreVertical } from "lucide-react";

export default function EmployeeReviews() {
  // --- States ---
  const [employeeTab, setEmployeeTab] = useState("All Reviews");
  const [employeeSort, setEmployeeSort] = useState("Latest Feedback");
  const [isEmployeeSortOpen, setIsEmployeeSortOpen] = useState(false);
  const [activeActionMenuId, setActiveActionMenuId] = useState(null);

  // Exact UI Rows Data from image_7c313c.jpg
  const [employeeReviews, setEmployeeReviews] = useState([
    {
      id: 1,
      employee: { name: "Sarah Jenkins", role: "Senior Software Engineer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" },
      dept: "Engineering",
      rating: 5.0,
      metrics: { label1: "Velocity", val1: "98%", label2: "Quality", val2: "A+" },
      comment: '"Consistently exceeds expectations in architectural planning..."',
      meta: "2 days ago • From CTO",
    },
    {
      id: 2,
      employee: { name: "Marcus Thorne", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" },
      dept: "Product Design",
      rating: 4.2,
      metrics: { label1: "Utility", val1: "85%", label2: "Speed", val2: "B" },
      comment: '"Excellent visual design but could improve communication..."',
      meta: "5 days ago • Peer Review",
    },
    {
      id: 3,
      employee: { name: "Elena Rodriguez", role: "Customer Success Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80&q=80" },
      dept: "Support",
      rating: 4.9,
      metrics: { label1: "Satisfaction", val1: "99%", label2: "Volume", val2: "A+" },
      comment: '"Client feedback specifically highlights her empathy..."',
      meta: "1 week ago • Client NPS",
    },
    {
      id: 4,
      employee: { name: "Julian Vance", role: "Marketing Coordinator", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" },
      rating: 3.5,
      dept: "Growth",
      metrics: { label1: "Impact", val1: "72%", label2: "Leads", val2: "C+" },
      comment: '"Project timelines are slipping, intervention suggested..."',
      meta: "2 weeks ago • Manager Review",
    },
  ]);

  // Upper Grid Statistics
  const employeeStats = [
    { title: "AVG PERFORMANCE SCORE", value: "4.82", change: "▲ +0.4%", isPositive: true, hasProgressBar: true },
    { title: "TOTAL FEEDBACK RECEIVED", value: "1,248", subtitle: "Last 30 days", hasChart: true },
    { title: "RETENTION HEALTH", value: "94%", subtitle: "Stable", hasBadges: true },
    { title: "REVIEW COMPLETION", value: "87/102", subtitle: "Deadline: Dec 31st", isAlert: true, alertText: "15 Pending" },
  ];

  const renderRowStars = (rating) => {
    return (
      <div className="flex gap-0.5 text-slate-900 text-xs select-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? "text-slate-900" : "text-slate-200"}>★</span>
        ))}
      </div>
    );
  };

  return (
    <AdminShell activeTab="Employee Reviews" searchPlaceholder="Search employees...">
      <div className="space-y-6 select-none antialiased text-slate-900 bg-slate-50/50 p-4 rounded-xl">
        
        {/* MAIN PAGE TITLE AND ACTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Employee Performance Review</h1>
            <p className="text-sm text-slate-400 font-normal mt-0.5 max-w-xl">
              Monitor staff ratings, feedback trends, and productivity metrics across departments.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={() => alert("Export Report Triggered")}
              className="px-4 py-2 bg-white text-slate-800 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm border border-slate-200 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-slate-400" />
              <span>Export Report</span>
            </button>
            <button 
              onClick={() => alert("Opening New Review Cycle Modal")}
              className="px-4 py-2 bg-black text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>New Review Cycle</span>
            </button>
          </div>
        </div>

        {/* METRIC SUMMARY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {employeeStats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm h-32 relative">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.title}</p>
                  {stat.change && (
                    <span className="text-[11px] font-bold text-emerald-500">{stat.change}</span>
                  )}
                  {stat.isAlert && (
                    <span className="text-[10px] font-bold text-rose-600">{stat.alertText}</span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-3xl tracking-tight mt-1">{stat.value}</h3>
              </div>
              
              {stat.hasProgressBar && (
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-black h-full rounded-full" style={{ width: "85%" }} />
                </div>
              )}
              {stat.hasChart && (
                <div className="flex items-end gap-1 h-6 mt-1">
                  <div className="bg-slate-200 w-full h-3 rounded-sm" />
                  <div className="bg-slate-200 w-full h-4 rounded-sm" />
                  <div className="bg-black w-full h-6 rounded-sm" />
                  <div className="bg-slate-200 w-full h-4 rounded-sm" />
                  <div className="bg-slate-200 w-full h-3 rounded-sm" />
                </div>
              )}
              {stat.hasBadges && (
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-4 h-4 rounded-full bg-slate-200 border border-white" />
                  <div className="w-4 h-4 rounded-full bg-slate-300 border border-white -ml-2" />
                  <div className="w-4 h-4 rounded-full bg-slate-400 border border-white -ml-2" />
                  <div className="text-[9px] font-bold bg-slate-900 text-white rounded-full px-1 py-0.5 scale-90 -ml-1">+12</div>
                </div>
              )}
              {stat.subtitle && !stat.hasChart && (
                <p className="text-[10px] text-slate-400 font-medium italic">{stat.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        {/* REVIEWS TABLE MAIN BLOCK */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          {/* Header Filtering Tabs and Sorting Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-3 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-5 border-b border-transparent">
              {["All Reviews", "High Performance", "Needs Improvement", "Unfiltered Feed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setEmployeeTab(tab)}
                  className={`py-2 text-xs font-bold transition-all border-b-2 relative cursor-pointer ${
                    employeeTab === tab ? "border-black text-black" : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative text-xs">
              <div 
                onClick={() => setIsEmployeeSortOpen(!isEmployeeSortOpen)}
                className="flex items-center gap-1 cursor-pointer select-none py-1 px-2 hover:bg-slate-50 rounded"
              >
                <span className="text-slate-400">Sort by:</span>
                <span className="text-slate-900 font-bold flex items-center gap-1">
                  {employeeSort} <ChevronDown className="h-3 w-3" />
                </span>
              </div>
              {isEmployeeSortOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl py-1 w-44 z-30">
                  {["Latest Feedback", "Highest Rating", "Core Score"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setEmployeeSort(opt); setIsEmployeeSortOpen(false); }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between cursor-pointer"
                    >
                      <span>{opt}</span>
                      {employeeSort === opt && <Check className="h-3 w-3 text-black" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* TABLE DATA STRUCTURE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-150 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">Employee</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Core Rating</th>
                  <th className="px-6 py-3">Metrics</th>
                  <th className="px-6 py-3">Latest Sentiment</th>
                  <th className="px-6 py-3 text-right pr-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
                {employeeReviews.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                    {/* Employee Profile */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={row.employee.img} alt={row.employee.name} className="w-9 h-9 rounded-md object-cover" />
                        <div>
                          <p className="font-bold text-slate-900 text-sm leading-tight">{row.employee.name}</p>
                          <p className="text-[11px] text-slate-400 font-normal mt-0.5">{row.employee.role}</p>
                        </div>
                      </div>
                    </td>
                    
                    {/* Department Tag */}
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-150">
                        {row.dept}
                      </span>
                    </td>

                    {/* Star Component */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {renderRowStars(row.rating)}
                        <span className="font-bold text-slate-900">{row.rating.toFixed(1)}</span>
                      </div>
                    </td>

                    {/* Department Performance Indicators */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4 text-slate-400 font-normal">
                        <div>
                          <p className="text-[9px] uppercase tracking-tight">{row.metrics.label1}</p>
                          <p className="font-bold text-slate-900 text-xs">{row.metrics.val1}</p>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-tight">{row.metrics.label2}</p>
                          <p className="font-bold text-slate-900 text-xs">{row.metrics.val2}</p>
                        </div>
                      </div>
                    </td>

                    {/* Detailed Review Text */}
                    <td className="px-6 py-4 max-w-xs sm:max-w-md">
                      <p className="text-slate-800 font-normal line-clamp-2">{row.comment}</p>
                      <span className="text-[10px] text-slate-400 font-normal mt-1 block">{row.meta}</span>
                    </td>

                    {/* Actions Ellipsis Menu */}
                    <td className="px-6 py-4 text-right pr-6 relative">
                      <button 
                        onClick={() => setActiveActionMenuId(activeActionMenuId === row.id ? null : row.id)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                      {activeActionMenuId === row.id && (
                        <div className="absolute right-12 top-8 bg-white border border-slate-200 rounded-lg shadow-lg py-1 w-36 z-30 text-left">
                          {["View Details", "Request Sync", "Flag Review"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setActiveActionMenuId(null)}
                              className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 cursor-pointer border-0 bg-transparent block font-medium"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE PAGINATION FOOTER */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 text-[11px] font-bold text-slate-400 bg-slate-50/30">
            <span>Showing 1 to 4 of 102 employees</span>
            <div className="flex items-center gap-1 text-xs">
              <button className="px-3 py-1 rounded border border-slate-200 bg-white text-slate-400 font-semibold hover:bg-slate-50 cursor-pointer">Previous</button>
              <button className="w-7 h-7 rounded flex items-center justify-center font-bold bg-black text-white shadow-sm">1</button>
              <button className="w-7 h-7 rounded flex items-center justify-center font-semibold text-slate-600 hover:bg-slate-50">2</button>
              <button className="w-7 h-7 rounded flex items-center justify-center font-semibold text-slate-600 hover:bg-slate-50">3</button>
              <span className="px-1 text-slate-300">...</span>
              <button className="w-7 h-7 rounded flex items-center justify-center font-semibold text-slate-600 hover:bg-slate-50">26</button>
              <button className="px-3 py-1 rounded border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 cursor-pointer">Next</button>
            </div>
          </div>
        </div>

        {/* LOWER GRID MODULE WITH SKILL MATRIX & SENTIMENT HEATMAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Skill Matrix Box */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-5">Skill Matrix Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: "Technical Proficiency", val: "88%" },
                { name: "Communication", val: "74%" },
                { name: "Leadership Potential", val: "62%" },
                { name: "Problem Solving", val: "92%" },
                { name: "Adaptability", val: "81%" },
                { name: "Collaboration", val: "79%" },
              ].map((skill, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>{skill.name}</span>
                    <span className="text-slate-400 font-normal">{skill.val}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: skill.val }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Heatmap Box */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-4">Sentiment Heatmap</h3>
              
              {/* Heatmap Grid Visual */}
              <div className="grid grid-cols-5 gap-1.5 w-full max-w-[240px]">
                {/* Row 1 */}
                <div className="aspect-square rounded bg-indigo-50" />
                <div className="aspect-square rounded bg-indigo-100" />
                <div className="aspect-square rounded bg-slate-500" />
                <div className="aspect-square rounded bg-black" />
                <div className="aspect-square rounded bg-neutral-900" />
                {/* Row 2 */}
                <div className="aspect-square rounded bg-indigo-50" />
                <div className="aspect-square rounded bg-slate-400" />
                <div className="aspect-square rounded bg-black" />
                <div className="aspect-square rounded bg-black" />
                <div className="aspect-square rounded bg-black" />
                {/* Row 3 */}
                <div className="aspect-square rounded bg-indigo-50" />
                <div className="aspect-square rounded bg-indigo-100" />
                <div className="aspect-square rounded bg-slate-300" />
                <div className="aspect-square rounded bg-black" />
                <div className="aspect-square rounded bg-neutral-900" />
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-normal leading-relaxed mt-4 pt-4 border-t border-slate-100">
              Aggregated from 42 internal surveys. Majority indicates <strong className="text-slate-800 font-bold">High Satisfaction</strong>.
            </p>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}