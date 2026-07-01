import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Filter, 
  Eye, 
  Edit2, 
  Download, 
  X, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award 
} from "lucide-react";

export default function EmployeeRevenue() {
  // --- Core States for Interactivity ---
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("All");
  
  const [showForecastModal, setShowForecastModal] = useState(false);
  const [showCriteriaModal, setShowCriteriaModal] = useState(false);
  
  // Dynamic metrics states that changes on Resource Update trigger
  const [activeSellersCount, setActiveSellersCount] = useState(1248);
  const [newSellersThisMonth, setNewSellersThisMonth] = useState(12);

  // Top row metrics data matching figma layout
  const metrics = [
    {
      title: "AVERAGE REVENUE PER EMPLOYEE",
      value: "$142,850",
      subtext: "↗ +8.4% vs last quarter",
      hasGraph: true,
    },
    {
      title: "TOTAL ACTIVE SELLERS",
      value: activeSellersCount.toLocaleString(),
      subtext: `${newSellersThisMonth} new this month`,
      hasGraph: false,
    },
    {
      title: "Q2 TOTAL REVENUE",
      value: "$178.2M",
      subtext: "On track for target",
      hasGraph: false,
    },
    {
      title: "FULFILLMENT ACCURACY",
      value: "99.2%",
      subtext: "Exceeding benchmark",
      hasGraph: false,
    },
  ];

  // Employee Contribution Breakdown Table Data
  const employees = [
    { id: "EMP-8291", name: "Sarah Miller", initial: "SM", role: "Senior Account Exec", dept: "Enterprise Sales", revenue: "$1,240,500", status: "HIGH PERFORMER", statusBg: "bg-indigo-50 text-indigo-600 border border-indigo-100" },
    { id: "EMP-7742", name: "James Rodriguez", initial: "JR", role: "Solutions Architect", dept: "Technical Fulfillment", revenue: "$985,200", status: "TARGET MET", statusBg: "bg-slate-50 text-slate-600 border border-slate-200" },
    { id: "EMP-9104", name: "Elena Laurent", initial: "EL", role: "Account Director", dept: "Enterprise Sales", revenue: "$2,150,000", status: "ELITE TIER", statusBg: "bg-purple-50 text-purple-600 border border-purple-100" },
    { id: "EMP-3321", name: "David Chen", initial: "DC", role: "Fulfillment Manager", dept: "Logistics", revenue: "$742,000", status: "TARGET MET", statusBg: "bg-slate-50 text-slate-600 border border-slate-200" },
    { id: "EMP-5120", name: "Ananya White", initial: "AW", role: "Sales Associate", dept: "Retail Banking", revenue: "$412,300", status: "IMPROVING", statusBg: "bg-amber-50 text-amber-600 border border-amber-100" },
  ];

  // --- Real-time Filter Matrix Pipeline ---
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchDept = selectedDept === "All" || emp.dept === selectedDept;
      const matchStatus = selectedStatusFilter === "All" || emp.status === selectedStatusFilter;
      return matchDept && matchStatus;
    });
  }, [selectedDept, selectedStatusFilter]);

  // --- Action pipelines ---
  const handleDownloadAnalysis = (e) => {
    e.stopPropagation();
    const analysisText = `Hozify Enterprise BI Center - AI Revenue Projection Analysis\nGenerated on: ${new Date().toLocaleDateString()}\n\nProjections Matrix:\n- Sarah Miller is projected to exceed annual revenue targets by 22%.\n- Elena Laurent is projected to exceed targets by 18%.\n\nRecommendation Vector:\nAssign high-tier enterprise clients contextually to priority pipelines for Q4 layout tracks.`;
    
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(analysisText));
    element.setAttribute("download", `AI_Revenue_Projection_${new Date().toISOString().split('T')[0]}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleUpdateResourcePlan = () => {
    setActiveSellersCount(prev => prev + 5);
    setNewSellersThisMonth(prev => prev + 5);
    alert("Resource Allocation updated! 5 new team nodes integrated into active pipelines.");
  };

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6 max-w-7xl mx-auto relative z-10 pointer-events-auto select-none" onClick={() => setShowFilterDropdown(false)}>
        
        {/* 1. TOP HEADER ACTION ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Employee Revenue Performance</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Real-time individual fulfillment tracking and revenue efficiency metrics.</p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto relative">
            {/* FILTER ICON TRIGGER BUTTON */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button"
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className={`flex items-center gap-2 px-3 py-1.5 bg-white border rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${showFilterDropdown ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-500' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <Filter className="h-3.5 w-3.5" />
                <span>Filter Data</span>
              </button>

              {/* LIVE FILTER DROPDOWN GRID */}
              {showFilterDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-4 min-w-[220px] z-50 space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department</label>
                    <select 
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
                    >
                      <option value="All">All Departments</option>
                      <option value="Enterprise Sales">Enterprise Sales</option>
                      <option value="Technical Fulfillment">Technical Fulfillment</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Retail Banking">Retail Banking</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status Tier</label>
                    <select 
                      value={selectedStatusFilter}
                      onChange={(e) => setSelectedStatusFilter(e.target.value)}
                      className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
                    >
                      <option value="All">All Status Tiers</option>
                      <option value="ELITE TIER">Elite Tier</option>
                      <option value="HIGH PERFORMER">High Performer</option>
                      <option value="TARGET MET">Target Met</option>
                      <option value="IMPROVING">Improving</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <button 
              type="button"
              onClick={() => setShowForecastModal(true)}
              className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              View Detailed Forecasts
            </button>
          </div>
        </div>

        {/* 2. FOUR-COLUMN METRIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm min-h-[140px]">
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{card.title}</p>
                <h3 className="text-2xl font-bold mt-2 text-indigo-950 tracking-tight">{card.value}</h3>
              </div>
              
              <div className="flex items-end justify-between mt-3">
                <span className="text-xs text-slate-400 font-medium">{card.subtext}</span>
                {card.hasGraph && (
                  <div className="flex items-end gap-1 h-10">
                    <div className="w-4 h-4 bg-indigo-100 rounded-sm"></div>
                    <div className="w-4 h-6 bg-indigo-200 rounded-sm"></div>
                    <div className="w-4 h-8 bg-indigo-300 rounded-sm"></div>
                    <div className="w-4 h-10 bg-indigo-900 rounded-sm"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. PURPLE ACHIEVEMENT PROGRAM BANNER */}
        <div className="bg-indigo-950 text-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-900/40 rounded-full blur-xl pointer-events-none" />
          <div>
            <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase block">Performance Achievement Program</span>
            <p className="text-xs text-indigo-100 mt-1 max-w-3xl font-medium leading-relaxed">
              The 2026 Q2 bonus pool has been increased by <span className="text-white font-bold">15%</span>, due to record-breaking revenue generation across enterprise branches.
            </p>
          </div>
          <button 
            type="button"
            onClick={() => setShowCriteriaModal(true)}
            className="px-4 py-2 bg-white text-indigo-950 text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-50 transition-colors shrink-0 cursor-pointer"
          >
            Review Criteria
          </button>
        </div>

        {/* 4. EMPLOYEE CONTRIBUTION DIRECTORY TABLE */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Employee Contribution Breakdown</h3>
            <div className="text-[11px] text-slate-400 font-medium">
              Filters Active: <span className="font-bold text-indigo-600">{selectedDept} / {selectedStatusFilter}</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3.5 w-24">ID</th>
                  <th className="px-6 py-3.5">Employee</th>
                  <th className="px-6 py-3.5">Role</th>
                  <th className="px-6 py-3.5">Department</th>
                  <th className="px-6 py-3.5">Revenue Generated</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700 bg-white">
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((emp, index) => (
                    <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4 text-slate-400 text-xs font-mono">{emp.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 text-indigo-900 border border-slate-200 flex items-center justify-center font-bold text-xs shadow-sm">
                            {emp.initial}
                          </div>
                          <span className="font-bold text-slate-800">{emp.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{emp.role}</td>
                      <td className="px-6 py-4 text-slate-400 font-medium">{emp.dept}</td>
                      <td className="px-6 py-4 text-slate-900 font-extrabold tracking-tight">{emp.revenue}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide shadow-sm ${emp.statusBg}`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                        {/* REPLACED 3 DOTS WITH DEDICATED VIEW & EDIT ICONS */}
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            title="View Metrics Detail"
                            onClick={() => alert(`Opening metrics breakdown matrix for: ${emp.name}`)}
                            className="p-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            title="Edit Target Setup"
                            onClick={() => alert(`Modifying quotas configuration layer for: ${emp.name}`)}
                            className="p-1.5 rounded-md bg-amber-50 border border-amber-100 text-amber-600 hover:bg-amber-100 transition-colors cursor-pointer"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-10 text-center text-slate-400 font-medium bg-slate-50/20">
                      No team targets found matching the dropdown configuration setup.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-white text-[11px] font-bold text-slate-400">
            <span>Showing {filteredEmployees.length} of {activeSellersCount} employees</span>
            <div className="flex items-center gap-1">
              <button type="button" className="w-7 h-7 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 flex items-center justify-center font-bold">{"<"}</button>
              <button type="button" className="w-7 h-7 bg-indigo-600 text-white rounded flex items-center justify-center font-bold shadow-sm">1</button>
              <button type="button" className="w-7 h-7 border border-slate-200 rounded text-slate-500 hover:bg-slate-50 flex items-center justify-center">2</button>
              <button type="button" className="w-7 h-7 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 flex items-center justify-center font-bold">{">"}</button>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM GRID: AI PROJECTION & FIGMA INSPIRED MAP BOXES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Revenue Projection AI */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-2 flex flex-col justify-between shadow-sm min-h-[180px]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Revenue Projection AI</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-normal">
                  Based on current performance trends, <span className="font-semibold text-slate-700">Sarah Miller</span> and <span className="font-semibold text-slate-700">Elena Laurent</span> are projected to exceed their annual revenue targets by 22% and 18% respectively. Recommending priority client assignment for Q4.
                </p>
              </div>

              {/* Circular Progress Ring */}
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-indigo-600" strokeWidth="3.5" strokeDasharray="74, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-xs font-bold text-slate-800">74%</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 pt-2">
              {/* REMOVED TEXT, KEEPS ICON WITH LIVE TEXT DOWNLOAD PIPELINE */}
              <button 
                type="button"
                title="Download Projection Analysis File"
                onClick={handleDownloadAnalysis}
                className="p-2 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors cursor-pointer flex items-center justify-center shadow-xs"
              >
                <Download className="h-4 w-4" />
              </button>
              <button 
                type="button"
                onClick={handleUpdateResourcePlan}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Update Resource Plan
              </button>
            </div>
          </div>

          {/* Geographic Distribution - EXACT FIGMA MATCH MAP */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[180px]">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Geographic Distribution</h4>
              <p className="text-xs text-slate-400 mt-0.5">Regional performance breakdown by branch revenue density.</p>
            </div>

            <div className="h-28 bg-[#EBF1F6] rounded-xl mt-4 relative overflow-hidden flex items-center justify-center border border-slate-100">
              <svg className="w-full h-full opacity-40 absolute inset-0 text-teal-700" viewBox="0 0 200 100" fill="currentColor">
                <path d="M15,10 C30,8 45,15 40,35 C38,45 25,48 20,60 C15,70 30,75 35,65 C40,55 55,50 65,40 C75,30 60,15 50,12 Z" />
                <path d="M90,15 C110,10 130,8 150,15 C160,25 145,40 135,35 C125,30 115,45 105,40 C95,35 85,25 90,15 Z" fillOpacity="0.8" />
                <path d="M35,68 C45,75 40,95 35,98 C30,95 28,85 30,75 Z" />
              </svg>

              <div className="absolute top-[40%] left-[22%] flex flex-col items-center">
                <div className="bg-indigo-950 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-md whitespace-nowrap mb-1">
                  North America: Lead Revenue
                </div>
                <div className="w-3 h-3 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center shadow">
                  <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =================================== */}
      </div>

      {/* FORECAST MODAL */}
      {showForecastModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowForecastModal(false)}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">Detailed Revenue Forecasts</h3>
              <button onClick={() => setShowForecastModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                Based on current quarter trends, employee revenue generation is projected to grow by <span className="font-bold text-indigo-600">12%</span> in the next quarter. 
                Sarah Miller and Elena Laurent are driving the majority of enterprise conversions.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg space-y-3 border border-slate-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Q3 Target</span>
                  <span className="font-bold text-slate-900">$210.5M</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Projected Q3</span>
                  <span className="font-bold text-emerald-600">$225.0M</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button onClick={() => setShowForecastModal(false)} className="px-5 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-700 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CRITERIA MODAL */}
      {showCriteriaModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowCriteriaModal(false)}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">Achievement Criteria</h3>
              <button onClick={() => setShowCriteriaModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Revenue Target</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Must exceed $1M in generated revenue.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Client Retention</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Maintain {">"}95% client retention rate.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Compliance</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">100% adherence to SLA and policies.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button onClick={() => setShowCriteriaModal(false)} className="px-5 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-700 transition-colors">
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}