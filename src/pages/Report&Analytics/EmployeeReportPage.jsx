import React, { useState, useRef, useEffect } from "react";
import AdminShell from "../../components/layouts/AdminShell"; // Direct layout path import as requested

export default function EmployeeReportPage() {
  // --- UI Interactivity States ---
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 30 Days");
  const [teamFilter, setTeamFilter] = useState("All Departments");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Refs for closing dropdowns on outside click
  const dateRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Mock Data Layer ---
  const initialLeaderboard = [
    { rank: "01", name: "Elena Vance", role: "Tech Lead", score: 98.5, badge: "TOP 1%", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" },
    { rank: "02", name: "Marcus Thorne", role: "Senior Analyst", score: 96.2, badge: null, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" },
    { rank: "03", name: "Sarah Jenkins", role: "Team Manager", score: 95.8, badge: null, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80" },
    { rank: "04", name: "David Chen", role: "Ops Specialist", score: 94.1, badge: null, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80" },
  ];

  const initialStaff = [
    { id: 1, name: "Lila Thorne", dept: "Customer Experience", completed: 42, time: "18m 42s", feedback: 4.9, trend: "📈", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" },
    { id: 2, name: "James Wilson", dept: "Logistics Lead", completed: 38, time: "22m 15s", feedback: 4.7, trend: "➡️", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" },
    { id: 3, name: "Sofia Rodriguez", dept: "Support Tier III", completed: 51, time: "15m 10s", feedback: 5.0, trend: "📈", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80" },
  ];

  // --- Filter and Search Pipeline ---
  const filteredStaff = initialStaff.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || emp.dept.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = teamFilter === "All Departments" || emp.dept === teamFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER WITH TIME-PERIOD TABS & FILTERS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Employee Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              Comprehensive tracking of staff performance and operational efficiency.
            </p>
          </div>
          
          <div className="flex items-center gap-2 relative">
            {/* Interactive Date Select Dropdown */}
            <div ref={dateRef} className="relative">
              <button 
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span>📅</span> {selectedTimeframe}
              </button>
              {showDatePicker && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-1.5 text-xs font-bold divide-y divide-gray-50">
                  {["Today", "Last 7 Days", "Last 30 Days", "This Month", "Custom Range"].map((time) => (
                    <button
                      key={time}
                      onClick={() => { setSelectedTimeframe(time); setShowDatePicker(false); }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${selectedTimeframe === time ? "text-[#1d0094] bg-indigo-50/40" : "text-slate-700"}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Interactive Advanced Filter Dropdown */}
            <div ref={filterRef} className="relative">
              <button 
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span>⏳</span> Filters {(teamFilter !== "All Departments" || searchQuery) && "•"}
              </button>
              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-4 space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">Search Employee</label>
                    <input 
                      type="text"
                      placeholder="Type name or team..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-slate-400 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">Department</label>
                    <select
                      value={teamFilter}
                      onChange={(e) => setTeamFilter(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs bg-white text-slate-700 focus:outline-none"
                    >
                      <option value="All Departments">All Departments</option>
                      <option value="Customer Experience">Customer Experience</option>
                      <option value="Logistics Lead">Logistics Lead</option>
                      <option value="Support Tier III">Support Tier III</option>
                    </select>
                  </div>
                  {(searchQuery || teamFilter !== "All Departments") && (
                    <button 
                      onClick={() => { setSearchQuery(""); setTeamFilter("All Departments"); }}
                      className="w-full text-center text-[10px] font-black text-rose-500 uppercase pt-1 hover:underline"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TOP ROW: FOUR ANALYTICS METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1: Avg Completion Time */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Avg Completion Time</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">24.5m</span>
                <span className="text-[10px] font-bold text-rose-500">-2.4%</span>
              </div>
              <div className="w-24 bg-gray-100 h-1 rounded-full mt-3 overflow-hidden">
                <div className="bg-slate-900 h-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Feedback Score */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Feedback Score</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">4.82</span>
                <span className="text-[10px] font-bold text-emerald-500">+0.12</span>
              </div>
              <div className="flex items-center gap-0.5 text-[10px] text-amber-400 mt-2.5">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>

          {/* Card 3: Jobs Completed */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Jobs Completed</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">1,204</span>
                <span className="text-[10px] font-bold text-emerald-500">+18%</span>
              </div>
              <span className="text-[9px] text-gray-400 font-bold block mt-2.5">Target: 1,500 by EOM</span>
            </div>
          </div>

          {/* Card 4: Productivity Rate */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[115px]">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Productivity Rate</span>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">92.1%</span>
                <span className="text-[10px] font-bold text-emerald-500">+3.2%</span>
              </div>
              <div className="flex items-center gap-1 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-[9px] text-gray-400 font-bold">Above Threshold</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: PRODUCTIVITY TRENDS & PERFORMANCE LEADERBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Productivity Trends Chart Box */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Productivity Trends</h3>
              <select className="text-xs font-bold border border-gray-200 px-2 py-1 rounded bg-white text-slate-600 focus:outline-none cursor-pointer">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            {/* Weekly Bar Graph Frame */}
            <div className="h-44 flex items-end justify-between gap-3 pt-6 border-b border-gray-100 px-4 bg-slate-50/30 rounded-t-lg relative">
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[45%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Mon</span>
              </div>
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[62%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Tue</span>
              </div>
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[55%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Wed</span>
              </div>
              <div className="w-[10%] flex flex-col justify-end h-full relative z-10">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-[#1d0094] text-white text-[8px] px-1 py-0.5 rounded font-black shadow-sm">92%</div>
                <div className="bg-[#b3b9f2] h-[82%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-slate-800 font-black uppercase">Thu</span>
              </div>
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[68%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Fri</span>
              </div>
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[72%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Sat</span>
              </div>
              <div className="w-[10%] flex flex-col justify-end h-full relative">
                <div className="bg-gray-200/60 h-[40%] w-full rounded-t-sm"></div>
                <span className="absolute bottom-[-24px] left-0 right-0 text-center text-[9px] text-gray-400 font-black uppercase">Sun</span>
              </div>
            </div>
            <div className="h-1"></div>
          </div>

          {/* Right Panel: Performance Leaderboard */}
          <div className="bg-white border border-gray-200/70 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-white">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Performance Leaderboard</h3>
            </div>

            <div className="p-4 divide-y divide-gray-100/70 space-y-3.5 flex-1">
              {initialLeaderboard.map((leader) => (
                <div key={leader.rank} className="flex items-center justify-between pt-3 first:pt-0">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-black w-4 ${leader.rank === "01" ? "text-indigo-900" : "text-slate-400"}`}>{leader.rank}</span>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
                      <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 block">{leader.name}</span>
                      <span className="text-[9px] text-gray-400 block font-medium"> {leader.role}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-slate-950 block">{leader.score}</span>
                    {leader.badge && <span className="text-[8px] font-black text-indigo-600 tracking-tight block uppercase">{leader.badge}</span>}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#f8fafd] border-t border-gray-100 py-3 text-center text-xs font-bold text-[#1d0094] hover:bg-slate-100/50 transition-colors">
              View Full Leaderboard
            </button>
          </div>

        </div>

        {/* BOTTOM SECTION: STAFF PERFORMANCE BREAKDOWN */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-sm font-black text-slate-800 tracking-wide">Staff Performance Breakdown</h3>
            
            <div className="flex items-center gap-4 text-[10px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="text-slate-500">High Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span className="text-slate-400">Standard</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3 px-6">Employee</th>
                  <th className="py-3 px-4">Job Status</th>
                  <th className="py-3 px-4">Completion Time</th>
                  <th className="py-3 px-4 text-center">Feedback</th>
                  <th className="py-3 px-4 text-center">Trend</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                {filteredStaff.length > 0 ? (
                  filteredStaff.map((employee) => (
                    <tr key={employee.id} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-6 flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                          <img src={employee.img} alt={employee.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="font-extrabold text-slate-900 text-xs block">{employee.name}</span>
                          <span className="text-[10px] text-gray-400 font-medium block">{employee.dept}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">{employee.completed} Completed</span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-600">{employee.time}</td>
                      <td className="py-3.5 px-4 text-center text-slate-900 font-black">
                        {employee.feedback.toFixed(1)} <span className="text-[14px] text-amber-400">★</span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block text-xl transform scale-110 align-middle">
                          {employee.trend}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        <button 
                          onClick={() => setSelectedProfile(employee)}
                          className="text-[11px] text-[#1d0094] hover:underline focus:outline-none"
                        >
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-400 text-xs font-medium">
                      No employees found matching the setup filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Blocks Footer */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>Showing {filteredStaff.length} of {filteredStaff.length} entries</span>
            <div className="flex items-center gap-1.5">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-400 text-[11px] shadow-sm disabled:opacity-50"
              >
                Previous
              </button>
              <button onClick={() => setCurrentPage(1)} className={`p-1 px-3 rounded text-[11px] shadow-sm ${currentPage === 1 ? "bg-[#1d0094] text-white" : "bg-white border border-gray-200 text-slate-700 hover:bg-gray-50"}`}>1</button>
              <button onClick={() => setCurrentPage(2)} className={`p-1 px-3 rounded text-[11px] shadow-sm ${currentPage === 2 ? "bg-[#1d0094] text-white" : "bg-white border border-gray-200 text-slate-700 hover:bg-gray-50"}`}>2</button>
              <button onClick={() => setCurrentPage(3)} className={`p-1 px-3 rounded text-[11px] shadow-sm ${currentPage === 3 ? "bg-[#1d0094] text-white" : "bg-white border border-gray-200 text-slate-700 hover:bg-gray-50"}`}>3</button>
              <button 
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="p-1 px-2.5 bg-white border border-gray-200 rounded text-slate-700 text-[11px] shadow-sm hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* PROFILE REVIEW OVERLAY MODAL */}
        {selectedProfile && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 transition-opacity animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md mx-auto mb-3">
                  <img src={selectedProfile.img} alt={selectedProfile.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base font-black text-slate-900">{selectedProfile.name}</h4>
                <p className="text-xs text-gray-400 font-medium">{selectedProfile.dept}</p>
              </div>
              <div className="p-4 bg-slate-50/50 grid grid-cols-2 gap-4 text-center border-b border-gray-100">
                <div className="bg-white p-3 border border-gray-100 rounded-lg shadow-2xs">
                  <span className="text-[9px] font-bold text-gray-400 uppercase block">Completed</span>
                  <span className="text-sm font-black text-slate-900 mt-0.5 block">{selectedProfile.completed} Jobs</span>
                </div>
                <div className="bg-white p-3 border border-gray-100 rounded-lg shadow-2xs">
                  <span className="text-[9px] font-bold text-gray-400 uppercase block">Efficiency</span>
                  <span className="text-sm font-black text-[#1d0094] mt-0.5 block">{selectedProfile.time}</span>
                </div>
              </div>
              <div className="p-3 bg-white flex items-center justify-end gap-2">
                <button 
                  onClick={() => setSelectedProfile(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors focus:outline-none"
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