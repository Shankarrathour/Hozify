import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Trophy, 
  Layers, 
  Cpu, 
  Megaphone, 
  Headphones, 
  Globe, 
  Zap, 
  TrendingUp, 
  SlidersHorizontal, 
  Plus, 
  Download,
  X,
  ChevronDown,
  CheckCircle2
} from "lucide-react";

export default function Targets() {
  // Operational Hooks & States
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  
  const [showNewTargetModal, setShowNewTargetModal] = useState(false);
  const [showRankingsModal, setShowRankingsModal] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  // Form input bindings for creating a new KPI
  const [newTargetForm, setNewTargetForm] = useState({
    region: "",
    metric: "",
    goal: "",
    actual: "",
    status: "Near Target"
  });

  // Leaderboard Dataset
  const leaderboard = [
    { rank: 1, name: "Northwest Branch", progress: 104, revenue: "$4.1M" },
    { rank: 2, name: "Enterprise Sales", progress: 92, revenue: "$12.4M" },
    { rank: 3, name: "Global Services", progress: 85, revenue: "$6.2M" },
    { rank: 4, name: "Direct Retail", progress: 76, revenue: "$3.9M" },
    { rank: 5, name: "EMEA Sales Hub", progress: 71, revenue: "$2.8M" },
    { rank: 6, name: "APAC Core Retail", progress: 64, revenue: "$1.9M" }
  ];

  // Department Row Metric Grid with Colorful Themes
  const departments = [
    {
      title: "Tech & Software",
      revenue: "$12,400,000",
      percent: 65,
      color: "bg-indigo-600",
      iconBg: "bg-indigo-50 border-indigo-100",
      icon: <Cpu className="h-4 w-4 text-indigo-600" />
    },
    {
      title: "Operations",
      revenue: "$8,900,000",
      percent: 88,
      color: "bg-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-100",
      icon: <Layers className="h-4 w-4 text-emerald-600" />
    },
    {
      title: "Marketing",
      revenue: "$6,250,000",
      percent: 42,
      color: "bg-rose-600",
      iconBg: "bg-rose-50 border-rose-100",
      icon: <Megaphone className="h-4 w-4 text-rose-600" />
    },
    {
      title: "Support",
      revenue: "$4,100,000",
      percent: 95,
      color: "bg-amber-500",
      iconBg: "bg-amber-50 border-amber-100",
      icon: <Headphones className="h-4 w-4 text-amber-600" />
    }
  ];

  // Table Core Reactive Grid Resource State
  const [managementRows, setManagementRows] = useState([
    {
      id: 1,
      region: "EMEA Central",
      metric: "SaaS Subscriptions",
      goal: "$1,200,000",
      actual: "$1,050,000",
      status: "Near Target",
      statusStyle: "bg-blue-50 text-blue-600 border border-blue-100",
      icon: <Globe className="h-3.5 w-3.5 text-white" />
    },
    {
      id: 2,
      region: "APAC South",
      metric: "Hardware Sales",
      goal: "$2,500,000",
      actual: "$2,750,000",
      status: "Exceeded",
      statusStyle: "bg-indigo-950 text-white",
      icon: <Zap className="h-3.5 w-3.5 text-white" />
    },
    {
      id: 3,
      region: "LATAM East",
      metric: "Consulting Rev",
      goal: "$800,000",
      actual: "$320,000",
      status: "At Risk",
      statusStyle: "bg-rose-50 text-rose-600 border border-rose-100",
      icon: <TrendingUp className="h-3.5 w-3.5 text-white" />
    }
  ]);

  // Real-time table filter logic
  const filteredRows = managementRows.filter(row => {
    if (activeFilter === "All") return true;
    return row.status.toLowerCase() === activeFilter.toLowerCase();
  });

  // Dynamic Status Stylist Mapper
  const getStatusStyle = (status) => {
    if (status === "Exceeded") return "bg-indigo-950 text-white";
    if (status === "Near Target") return "bg-blue-50 text-blue-600 border border-blue-100";
    return "bg-rose-50 text-rose-600 border border-rose-100";
  };

  // Dynamic Icon Selector for added components
  const getStatusIcon = (status) => {
    if (status === "Exceeded") return <Zap className="h-3.5 w-3.5 text-white" />;
    if (status === "Near Target") return <Globe className="h-3.5 w-3.5 text-white" />;
    return <TrendingUp className="h-3.5 w-3.5 text-white" />;
  };

  // Create KPI Form Submission handler
  const handleCreateTarget = (e) => {
    e.preventDefault();
    const formattedGoal = newTargetForm.goal.startsWith("$") ? newTargetForm.goal : `$${Number(newTargetForm.goal).toLocaleString()}`;
    const formattedActual = newTargetForm.actual.startsWith("$") ? newTargetForm.actual : `$${Number(newTargetForm.actual).toLocaleString()}`;

    const newRow = {
      id: Date.now(),
      region: newTargetForm.region,
      metric: newTargetForm.metric,
      goal: formattedGoal,
      actual: formattedActual,
      status: newTargetForm.status,
      statusStyle: getStatusStyle(newTargetForm.status),
      icon: getStatusIcon(newTargetForm.status)
    };

    setManagementRows([newRow, ...managementRows]);
    setShowNewTargetModal(false);
    setNewTargetForm({ region: "", metric: "", goal: "", actual: "", status: "Near Target" });
  };

  // Save changes handler for Edit KPI feature
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setManagementRows(managementRows.map(row => {
      if (row.id === editingRow.id) {
        return {
          ...editingRow,
          statusStyle: getStatusStyle(editingRow.status),
          icon: getStatusIcon(editingRow.status)
        };
      }
      return row;
    }));
    setEditingRow(null);
  };

  // CSV Sheet Exporter Logic
  const handleDownloadCSV = () => {
    const headers = "Region / Department,Target Metric,Goal Value,Actual Performance,Status\n";
    const rows = filteredRows.map(r => `"${r.region}","${r.metric}","${r.goal}","${r.actual}","${r.status}"`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Target_Metrics_${activeFilter}_Report.csv`);
    link.click();
  };

  return (
    <AdminShell activeTab="Targets" searchPlaceholder="Search target benchmarks...">
      <div className="space-y-6 select-none pointer-events-auto" onClick={() => setShowFilterDropdown(false)}>
        
        {/* ==========================================
            1. ACTIONS HEADER CONTROLS BAR
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Targets & Goals</h1>
            <p className="text-xs text-slate-400 mt-0.5">Strategic revenue management and KPI tracking for Q4 2024.</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowFilterDropdown(!showFilterDropdown);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${
                showFilterDropdown || activeFilter !== "All" ? 'border-indigo-600 bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filter: {activeFilter}</span>
            </button>
            
            <button 
              type="button"
              onClick={() => setShowNewTargetModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-950 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>New Target</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. UPPER DASHBOARD GRID ROW
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Main Total Revenue Target Box */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">TOTAL REVENUE GOAL</p>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">$42,500,000</h2>
                </div>
                <span className="inline-flex items-center text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  ↗ +12.4% vs last Q
                </span>
              </div>

              {/* Progress Line Bar Wrapper */}
              <div className="mt-5 space-y-1.5">
                <div className="flex justify-between items-center text-[11px] font-bold">
                  <span className="text-slate-400">Overall Achievement: <span className="text-slate-700">78%</span></span>
                  <span className="text-indigo-950">$33,150,000 to date</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-sm overflow-hidden">
                  <div className="h-full bg-indigo-950 rounded-sm w-[78%] transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Sub-KPI Quad Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 border-t border-slate-100 pt-4">
              {[
                { label: "Remaining", value: "$9.35M" },
                { label: "Avg Daily", value: "$215K" },
                { label: "Days Left", value: "24" },
                { label: "Forecast", value: "On Track" }
              ].map((sub, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide">{sub.label}</span>
                  <span className="block text-sm font-extrabold mt-1 text-slate-800">
                    {sub.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Leaderboard View Mini Grid */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-900 tracking-tight">Leaderboard</h3>
              <Trophy className="h-4 w-4 text-amber-500" />
            </div>

            <div className="space-y-3.5 my-auto">
              {leaderboard.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-slate-100 rounded-full text-[10px] font-extrabold text-slate-600 shrink-0">
                    {item.rank}
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-700">{item.name}</span>
                      <span className="text-indigo-950">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-950 rounded-full" style={{ width: `${Math.min(item.progress, 100)}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              type="button"
              onClick={() => setShowRankingsModal(true)}
              className="w-full mt-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors shadow-sm cursor-pointer"
            >
              View All Rankings
            </button>
          </div>

        </div>

        {/* ==========================================
            3. MIDDLE PANEL: DEPARTMENT REVENUE CARDS
           ========================================== */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-slate-900 tracking-tight">Department Revenue Targets</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">{dept.title}</span>
                    <span className="block text-[10px] text-slate-400 font-medium mt-1">Q4 Revenue</span>
                    <h4 className="text-lg font-extrabold text-slate-900 tracking-tight mt-0.5">{dept.revenue}</h4>
                  </div>
                  <span className={`p-2 border rounded-xl shadow-xs shrink-0 ${dept.iconBg}`}>
                    {dept.icon}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-slate-400">Achieved</span>
                    <span className="text-slate-800">{dept.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-sm overflow-hidden">
                    <div className={`h-full ${dept.color} rounded-sm`} style={{ width: `${dept.percent}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM PANEL: DETAILED TARGET TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm relative">
          
          {/* Functional Header controls menu */}
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-slate-900">Detailed Target Management</h3>
              {activeFilter !== "All" && (
                <span className="text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                  Filtered: {activeFilter}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button 
                type="button"
                onClick={handleDownloadCSV}
                className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-sm cursor-pointer"
                title="Download Filtered CSV Report"
              >
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Filter Selection Dropdown Popover layout */}
            {showFilterDropdown && (
              <div 
                className="absolute top-14 right-6 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 min-w-[150px] z-30 space-y-0.5"
                onClick={(e) => e.stopPropagation()}
              >
                {["All", "Exceeded", "Near Target", "At Risk"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setActiveFilter(opt);
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold block transition-colors ${
                      activeFilter === opt ? 'bg-indigo-950 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {opt} {opt === "All" ? "Status" : ""}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">Region / Department</th>
                  <th className="px-6 py-3">Target Metric</th>
                  <th className="px-6 py-3">Goal Value</th>
                  <th className="px-6 py-3">Actual</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, index) => (
                    <tr key={row.id || index} className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 bg-indigo-950 text-white rounded-md shrink-0">
                            {row.icon}
                          </div>
                          <span className="font-bold text-slate-800">{row.region}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{row.metric}</td>
                      <td className="px-6 py-4 font-medium text-slate-600">{row.goal}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{row.actual}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block ${row.statusStyle}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          type="button"
                          onClick={() => setEditingRow({ ...row })}
                          className="text-xs font-bold text-indigo-600 hover:text-indigo-950 transition-colors cursor-pointer"
                        >
                          Edit KPI
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-10 text-center text-slate-400 font-medium">
                      No matching targets found for status filter index scope.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            5. DYNAMIC POPUP MODAL: VIEW ALL RANKINGS
           ========================================== */}
        {showRankingsModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowRankingsModal(false)}>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-500" /> Full Corporate Branch Leaderboard
                </h3>
                <button type="button" onClick={() => setShowRankingsModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5 max-h-[400px] overflow-y-auto space-y-3">
                {leaderboard.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold">
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-extrabold shrink-0 ${
                        idx === 0 ? 'bg-amber-100 text-amber-700' : idx === 1 ? 'bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.rank}
                      </span>
                      <div>
                        <span className="block text-slate-800 font-bold">{item.name}</span>
                        <span className="text-[10px] text-slate-400 font-medium">Closed {item.revenue}</span>
                      </div>
                    </div>
                    <span className="text-indigo-950 font-extrabold bg-white px-2 py-1 rounded-md border border-slate-200/60">{item.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            6. DYNAMIC POPUP MODAL: CREATE NEW TARGET
           ========================================== */}
        {showNewTargetModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowNewTargetModal(false)}>
            <form onSubmit={handleCreateTarget} className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" /> Establish Corporate Target Matrix
                </h3>
                <button type="button" onClick={() => setShowNewTargetModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-5 space-y-4 text-xs font-bold text-slate-700">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">REGION / SECTOR</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. North America"
                      value={newTargetForm.region}
                      onChange={e => setNewTargetForm({...newTargetForm, region: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden focus:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">TARGET METRIC</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Direct Consumer"
                      value={newTargetForm.metric}
                      onChange={e => setNewTargetForm({...newTargetForm, metric: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">GOAL BOUNDARY ($)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 1500000"
                      value={newTargetForm.goal}
                      onChange={e => setNewTargetForm({...newTargetForm, goal: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden focus:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">ACTUAL REACHED ($)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 120000"
                      value={newTargetForm.actual}
                      onChange={e => setNewTargetForm({...newTargetForm, actual: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">STATUS PHASE</label>
                  <select 
                    value={newTargetForm.status}
                    onChange={e => setNewTargetForm({...newTargetForm, status: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-semibold focus:outline-hidden focus:border-indigo-600 cursor-pointer"
                  >
                    <option value="Near Target">Near Target</option>
                    <option value="Exceeded">Exceeded</option>
                    <option value="At Risk">At Risk</option>
                  </select>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={() => setShowNewTargetModal(false)} className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-bold cursor-pointer">Cancel</button>
                <button type="submit" className="px-3 py-1.5 bg-indigo-950 text-white hover:bg-indigo-900 rounded-lg text-xs font-bold cursor-pointer shadow-sm">Save Metric</button>
              </div>
            </form>
          </div>
        )}

        {/* ==========================================
            7. DYNAMIC POPUP MODAL: EDIT ACTIVE KPI
           ========================================== */}
        {editingRow && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setEditingRow(null)}>
            <form onSubmit={handleSaveEdit} className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-sm text-slate-900">
                  Modify KPI Runtime: {editingRow.region}
                </h3>
                <button type="button" onClick={() => setEditingRow(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5 space-y-4 text-xs font-bold text-slate-700">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">TARGET METRIC IDENTIFIER</label>
                  <input 
                    type="text" 
                    required
                    value={editingRow.metric}
                    onChange={e => setEditingRow({...editingRow, metric: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">GOAL TARGET</label>
                    <input 
                      type="text" 
                      required
                      value={editingRow.goal}
                      onChange={e => setEditingRow({...editingRow, goal: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">ACTUAL REACHED</label>
                    <input 
                      type="text" 
                      required
                      value={editingRow.actual}
                      onChange={e => setEditingRow({...editingRow, actual: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-medium focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">METRIC COMPLIANCE STATUS</label>
                  <select 
                    value={editingRow.status}
                    onChange={e => setEditingRow({...editingRow, status: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg font-semibold focus:outline-hidden cursor-pointer"
                  >
                    <option value="Near Target">Near Target</option>
                    <option value="Exceeded">Exceeded</option>
                    <option value="At Risk">At Risk</option>
                  </select>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={() => setEditingRow(null)} className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-bold cursor-pointer">Discard</button>
                <button type="submit" className="px-3 py-1.5 bg-indigo-950 text-white hover:bg-indigo-900 rounded-lg text-xs font-bold cursor-pointer shadow-sm">Apply Changes</button>
              </div>
            </form>
          </div>
        )}

      </div>
    </AdminShell>
  );
}