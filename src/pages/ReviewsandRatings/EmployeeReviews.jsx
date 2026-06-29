import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, Plus, ChevronDown, Check, Eye, X } from "lucide-react"; 

export default function EmployeeReviews() {
  // --- States ---
  const [employeeTab, setEmployeeTab] = useState("All Reviews");
  const [employeeSort, setEmployeeSort] = useState("Latest Feedback");
  const [isEmployeeSortOpen, setIsEmployeeSortOpen] = useState(false);
  const [activeViewId, setActiveViewId] = useState(null);
  
  // New State for Review Cycle
  const [isReviewCycleOpen, setIsReviewCycleOpen] = useState(false);

  // --- Original Data Set ---
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

  const employeeStats = [
    { title: "AVG PERFORMANCE SCORE", value: "4.82", change: "▲ +0.4%", isPositive: true, hasProgressBar: true },
    { title: "TOTAL FEEDBACK RECEIVED", value: "1,248", subtitle: "Last 30 days", hasChart: true },
    { title: "RETENTION HEALTH", value: "94%", subtitle: "Stable", hasBadges: true },
    { title: "REVIEW COMPLETION", value: "87/102", subtitle: "Deadline: Dec 31st", isAlert: true, alertText: "15 Pending" },
  ];

  // --- Functions ---
  const handleExportCSV = () => {
    const csvRows = ["Employee,Rating,Department,Comment"];
    employeeReviews.forEach(r => csvRows.push(`${r.employee.name},${r.rating},${r.dept},${r.comment}`));
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Employee_Reviews.csv";
    a.click();
  };

  const handleNewCycle = () => {
    setIsReviewCycleOpen(true);
    alert("New Review Cycle Mode Active - Yahan tumhara Modal open hoga!");
  };

  const filteredReviews = employeeReviews.filter((row) => {
    if (employeeTab === "High Performance") return row.rating >= 4.5;
    if (employeeTab === "Needs Improvement") return row.rating < 4.0;
    return true;
  });

  const renderRowStars = (rating) => (
    <div className="flex gap-0.5 text-slate-900 text-xs">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < Math.floor(rating) ? "text-slate-900" : "text-slate-200"}>★</span>
      ))}
    </div>
  );

  // Filtered target data extraction
  const selectedReview = employeeReviews.find((r) => r.id === activeViewId);

  return (
    <AdminShell activeTab="Employee Reviews" searchPlaceholder="Search employees...">
      <div className="space-y-6 select-none antialiased text-slate-900 bg-slate-50/50 p-4 rounded-xl relative">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Employee Performance Review</h1>
            <p className="text-sm text-slate-400">Monitor staff ratings, feedback trends, and productivity metrics.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={handleExportCSV} className="px-4 py-2 bg-white rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-50 shadow-sm border border-slate-200">
              <Download className="h-3.5 w-3.5" /> Export Report
            </button>
            <button onClick={handleNewCycle} className="px-4 py-2 bg-black text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-slate-800">
              <Plus className="h-3.5 w-3.5" /> New Review Cycle
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {employeeStats.map((stat, idx) => (
            <div key={idx} className="bg-white border p-5 rounded-xl shadow-sm h-32">
              <p className="text-[10px] font-bold text-slate-400 uppercase">{stat.title}</p>
              <h3 className="font-bold text-3xl mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
          <div className="flex px-6 py-3 border-b gap-5">
            {["All Reviews", "High Performance", "Needs Improvement", "Unfiltered Feed"].map((tab) => (
              <button key={tab} onClick={() => setEmployeeTab(tab)} className={`py-2 text-xs font-bold border-b-2 ${employeeTab === tab ? "border-black" : "border-transparent text-slate-400"}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 border-b text-[10px] font-bold text-slate-400 uppercase">
                  <th className="px-6 py-3">Employee</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Rating</th>
                  <th className="px-6 py-3">Metrics</th>
                  <th className="px-6 py-3 w-[300px]">Comment</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-xs">
                {filteredReviews.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img src={row.employee.img} className="w-9 h-9 rounded-md object-cover" />
                      <div><p className="font-bold text-sm">{row.employee.name}</p><p className="text-[11px] text-slate-400">{row.employee.role}</p></div>
                    </td>
                    <td className="px-6 py-4 font-bold">{row.dept}</td>
                    <td className="px-6 py-4">{renderRowStars(row.rating)}</td>
                    <td className="px-6 py-4">{row.metrics.val1} / {row.metrics.val2}</td>
                    <td className="px-6 py-4 truncate max-w-[300px]">{row.comment}</td>
                    <td className="px-6 py-4 text-center">
                      {/* Fixed Absolute Click Target Area */}
                      <button 
                        onClick={() => setActiveViewId(row.id)} 
                        className="text-blue-500 hover:text-blue-700 inline-block p-2 cursor-pointer transition-colors"
                        style={{ contentVisibility: "auto" }}
                      >
                        <Eye size={18} className="pointer-events-none" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DETAILS DRAWER/MODAL CARD (Matching theme) */}
        {selectedReview && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-[9999]" 
            style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          >
            <div className="bg-white border rounded-xl shadow-xl w-full max-w-lg overflow-hidden mx-4">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center px-6 py-4 border-b bg-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Employee Data View</p>
                <button 
                  onClick={() => setActiveViewId(null)} 
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Data Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img src={selectedReview.employee.img} className="w-12 h-12 rounded-md object-cover" />
                  <div>
                    <h3 className="font-bold text-base text-slate-900">{selectedReview.employee.name}</h3>
                    <p className="text-[11px] text-slate-400">{selectedReview.employee.role} • <span className="font-bold text-slate-600">{selectedReview.dept}</span></p>
                  </div>
                </div>

                <div className="border-t pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Score</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-bold text-lg">{selectedReview.rating}</span>
                      {renderRowStars(selectedReview.rating)}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Metrics</p>
                    <p className="mt-1 font-bold text-xs text-slate-700">
                      {selectedReview.metrics.label1}: {selectedReview.metrics.val1} <br/>
                      {selectedReview.metrics.label2}: {selectedReview.metrics.val2}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Feedback Comment</p>
                  <p className="text-xs bg-slate-50 p-3 rounded-lg border text-slate-700 italic">
                    {selectedReview.comment}
                  </p>
                </div>
                
                <p className="text-[10px] text-slate-400 text-right">{selectedReview.meta}</p>
              </div>

              {/* Action Button */}
              <div className="px-6 py-3 border-t bg-slate-50 flex justify-end">
                <button 
                  onClick={() => setActiveViewId(null)} 
                  className="px-4 py-2 bg-black text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}