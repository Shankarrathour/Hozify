import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { MoreVertical } from "lucide-react";

export default function EmployeeRevenue() {
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
      value: "1,248",
      subtext: "12 new this month",
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

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6">
        
        {/* 1. TOP HEADER ACTION ROW */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Employee Revenue Performance</h1>
            <p className="text-xs text-slate-400 mt-0.5">Real-time individual fulfillment tracking and revenue efficiency metrics.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
              <span>📊</span> Filter Data
            </button>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-indigo-700 transition-colors">
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
          <button className="px-4 py-2 bg-white text-indigo-950 text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-50 transition-colors shrink-0">
            Review Criteria
          </button>
        </div>

        {/* 4. EMPLOYEE CONTRIBUTION DIRECTORY TABLE */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
            <h3 className="font-bold text-base text-slate-900">Employee Contribution Breakdown</h3>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer">
                  <option>Role: All</option>
                </select>
                <div className="absolute right-2.5 top-2.5 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer">
                  <option>Dept: Enterprise</option>
                </select>
                <div className="absolute right-2.5 top-2.5 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3.5 w-24">ID</th>
                  <th className="px-6 py-3.5">Employee</th>
                  <th className="px-6 py-3.5">Role</th>
                  <th className="px-6 py-3.5">Department</th>
                  <th className="px-6 py-3.5">Revenue Generated</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                {employees.map((emp, index) => (
                  <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-4 text-slate-400 text-xs font-mono">{emp.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-indigo-900 border border-slate-200 flex items-center justify-center font-bold text-xs shadow-sm">
                          {emp.initial}
                        </div>
                        <span className="font-semibold text-slate-900">{emp.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-normal">{emp.role}</td>
                    <td className="px-6 py-4 text-slate-400 font-normal">{emp.dept}</td>
                    <td className="px-6 py-4 text-slate-900 font-bold tracking-tight">{emp.revenue}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-sm ${emp.statusBg}`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-white text-xs font-semibold text-slate-400">
            <span>Showing 5 of 1,248 employees</span>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 flex items-center justify-center font-bold">{"<"}</button>
              <button className="w-7 h-7 bg-indigo-600 text-white rounded flex items-center justify-center font-bold shadow-sm">1</button>
              <button className="w-7 h-7 border border-slate-200 rounded text-slate-500 hover:bg-slate-50 flex items-center justify-center">2</button>
              <button className="w-7 h-7 border border-slate-200 rounded text-slate-500 hover:bg-slate-50 flex items-center justify-center">3</button>
              <button className="w-7 h-7 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 flex items-center justify-center font-bold">{">"}</button>
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
              <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">Download Analysis</button>
              <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors">Update Resource Plan</button>
            </div>
          </div>

          {/* Geographic Distribution - EXACT FIGMA MATCH MAP */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[180px]">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Geographic Distribution</h4>
              <p className="text-xs text-slate-400 mt-0.5">Regional performance breakdown by branch revenue density.</p>
            </div>

            {/* Simulated Vector Vector Map Shape Container */}
            <div className="h-28 bg-[#EBF1F6] rounded-xl mt-4 relative overflow-hidden flex items-center justify-center border border-slate-100">
              {/* Abstract World Vector SVG Silhouette to mimic image_183a27.png */}
              <svg className="w-full h-full opacity-40 absolute inset-0 text-teal-700" viewBox="0 0 200 100" fill="currentColor">
                {/* North America approximation */}
                <path d="M15,10 C30,8 45,15 40,35 C38,45 25,48 20,60 C15,70 30,75 35,65 C40,55 55,50 65,40 C75,30 60,15 50,12 Z" />
                {/* Europe/Asia approximation */}
                <path d="M90,15 C110,10 130,8 150,15 C160,25 145,40 135,35 C125,30 115,45 105,40 C95,35 85,25 90,15 Z" fillOpacity="0.8" />
                {/* South America approximation */}
                <path d="M35,68 C45,75 40,95 35,98 C30,95 28,85 30,75 Z" />
              </svg>

              {/* Exact Figma Blue Marker Overlay Component */}
              <div className="absolute top-[40%] left-[22%] flex flex-col items-center">
                {/* Micro Label Pin */}
                <div className="bg-indigo-950 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-md whitespace-nowrap mb-1">
                  North America: Lead Revenue
                </div>
                {/* Pulsing Blue Node Indicator */}
                <div className="w-3 h-3 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center shadow">
                  <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}