import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Building2, 
  Fuel, 
  ArrowUpRight, 
  TrendingDown, 
  Laptop, 
  Megaphone, 
  Wallet, 
  Truck,
  ExternalLink,
  Calendar,
  ChevronDown,
  X,
  LineChart,
  Activity
} from "lucide-react";

import { useDateFilter } from "../../contexts/DateFilterContext";
import DateFilter from "../../components/common/DateFilter";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import EmptyState from "../../components/common/EmptyState";

export default function Expenses() {
  const { preset, isFiltering, hasData } = useDateFilter();
  const [showSimulation, setShowSimulation] = useState(false);
  const [showAllExpenses, setShowAllExpenses] = useState(false);

  // Top metric row datasets configuration (Enhanced Borders, Compact & Colorful Icons)
  const metrics = [
    {
      title: "TOTAL OPERATIONAL COSTS",
      value: "$2.48M",
      badge: "↘ 12.4%",
      subtext: "Budget utilized: 72% of Q3 allocation",
      icon: <Building2 className="h-4 w-4 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-100"
    },
    {
      title: "LOGISTICS EFFICIENCY",
      value: "$642K",
      badge: "↘ 4.2%",
      subtext: "Primary driver: Fleet fuel optimization",
      icon: <Fuel className="h-4 w-4 text-amber-600" />,
      iconBg: "bg-amber-50 border-amber-100"
    }
  ];

  // Middle panel cost tracking datasets mapping
  const allocationRows = [
    { name: "LOGISTICS", current: 642300, total: 700000, colorClass: "bg-indigo-950" },
    { name: "PAYROLL", current: 1250000, total: 1250000, colorClass: "bg-indigo-950" },
    { name: "INFRASTRUCTURE", current: 420000, total: 550000, colorClass: "bg-indigo-950" },
    { name: "MARKETING", current: 167700, total: 150000, colorClass: "bg-rose-600", isOverBudget: true }
  ];

  // Recent operational cost items structural datasets
  const initialExpenses = [
    {
      vendor: "AWS Global Cloud Svcs",
      id: "MKT-2023-04",
      category: "Infrastructure",
      date: "Oct 12, 2023",
      status: "Processed",
      amount: "$142,500.00",
      catBg: "bg-blue-50 text-blue-600 border border-blue-100",
      icon: <Laptop className="h-3.5 w-3.5 text-blue-500" />
    },
    {
      vendor: "Global Media Group",
      id: "MKT-2023-04",
      category: "Marketing",
      date: "Oct 10, 2023",
      status: "Pending",
      amount: "$89,200.00",
      catBg: "bg-indigo-50 text-indigo-600 border border-indigo-100",
      icon: <Megaphone className="h-3.5 w-3.5 text-indigo-500" />
    },
    {
      vendor: "Internal Payroll Cycle",
      id: "PR-Q4-WK01",
      category: "Payroll",
      date: "Oct 05, 2023",
      status: "Processed",
      amount: "$1,250,000.00",
      catBg: "bg-purple-50 text-purple-600 border border-purple-100",
      icon: <Wallet className="h-3.5 w-3.5 text-slate-500" />
    },
    {
      vendor: "Apex Logistics Fleet",
      id: "LOG-FLEET-22",
      category: "Logistics",
      date: "Oct 01, 2023",
      status: "Processed",
      amount: "$215,640.00",
      catBg: "bg-sky-50 text-sky-600 border border-sky-100",
      icon: <Truck className="h-3.5 w-3.5 text-slate-500" />
    }
  ];

  const extendedExpenses = [
    ...initialExpenses,
    {
      vendor: "Google Workspace & Enterprise",
      id: "SaaS-GG-99",
      category: "Infrastructure",
      date: "Sep 28, 2023",
      status: "Processed",
      amount: "$34,120.00",
      catBg: "bg-blue-50 text-blue-600 border border-blue-100",
      icon: <Laptop className="h-3.5 w-3.5 text-blue-500" />
    },
    {
      vendor: "Delta Core Freight Systems",
      id: "LOG-FRM-04",
      category: "Logistics",
      date: "Sep 25, 2023",
      status: "Processed",
      amount: "$118,900.00",
      catBg: "bg-sky-50 text-sky-600 border border-sky-100",
      icon: <Truck className="h-3.5 w-3.5 text-sky-500" />
    }
  ];

  const visibleExpenses = showAllExpenses ? extendedExpenses : initialExpenses;

  return (
    <AdminShell activeTab="Expenses" searchPlaceholder="Search operational costs...">
      <div 
        className="space-y-6 max-w-7xl mx-auto relative z-10 pointer-events-auto select-none"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Expenses Overview</h1>
          <div className="relative z-50">
            <DateFilter />
          </div>
        </div>
        
        {isFiltering ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkeletonLoader height="120px" />
              <SkeletonLoader height="120px" />
              <SkeletonLoader height="120px" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2"><SkeletonLoader height="300px" /></div>
              <div><SkeletonLoader height="300px" /></div>
            </div>
          </div>
        ) : !hasData ? (
          <EmptyState />
        ) : (
          <>
        {/* ========================================== */}
        {/*     2. TOP ROW PERFORMANCE WRAPPERS       */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-white border border-indigo-100/80 rounded-xl p-4 flex flex-col justify-between shadow-xs relative overflow-hidden min-h-[96px]">
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{item.title}</p>
                  <span className={`p-1 border rounded-md ${item.iconBg}`}>
                    {item.icon}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{item.value}</h3>
                  <span className="text-[10px] font-bold text-rose-600 flex items-center gap-0.5 bg-rose-50 px-1.5 py-0.2 rounded">
                    <TrendingDown className="h-2.5 w-2.5" />
                    <span>{item.badge}</span>
                  </span>
                </div>
              </div>
              <div className="mt-3 border-t border-slate-50 pt-2">
                <p className="text-[11px] text-slate-400 font-medium">{item.subtext}</p>
              </div>
            </div>
          ))}

          {/* Highlighted Dark Theme Forecasted Block */}
          <div className="bg-indigo-950 text-white rounded-xl p-4 flex flex-col justify-between shadow-xs relative overflow-hidden min-h-[96px]">
            <div>
              <p className="text-[9px] font-bold text-indigo-300 tracking-wider uppercase">FORECASTED EOM</p>
              <h3 className="text-xl font-extrabold mt-1 text-white tracking-tight">$3.12M</h3>
              <p className="text-[11px] text-indigo-200/70 mt-1 leading-normal font-medium">
                Velocity runway adjustment parameters.
              </p>
            </div>
            <div className="mt-2 pt-1">
              <button 
                type="button"
                onClick={() => setShowSimulation(true)}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-1 bg-indigo-900/60 border border-indigo-800 text-white rounded-lg text-xs font-bold hover:bg-indigo-900 transition-colors shadow-sm cursor-pointer"
              >
                <span>View Simulation</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. MIDDLE ROW: ALLOCATION & DISTRIBUTION
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Allocation Progress Component */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-sm text-slate-900">Cost Allocation Breakdown</h3>
              <div className="flex items-center gap-4 text-[11px] font-bold">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-950" />
                  <span>Actuals</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span>Budgeted</span>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {allocationRows.map((row, idx) => {
                const percentage = Math.min((row.current / row.total) * 100, 100);
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-500 tracking-wide uppercase text-[10px]">{row.name}</span>
                      <span className={row.isOverBudget ? "text-rose-600" : "text-slate-700"}>
                        ${row.current.toLocaleString()} / <span className="text-slate-400">${row.total.toLocaleString()}</span>
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-sm overflow-hidden relative">
                      <div 
                        className={`h-full ${row.colorClass} rounded-sm transition-all duration-500`} 
                        style={{ width: `${percentage}%` }} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Distribution Center Chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-sm text-slate-900">Distribution</h3>
            
            <div className="my-3 flex justify-center items-center">
              <div className="w-32 h-32 rounded-full border-[10px] border-slate-100 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-[10px] border-indigo-950 border-t-transparent border-r-transparent rotate-45" />
                <div className="absolute inset-0 rounded-full border-[10px] border-slate-400 border-b-transparent border-l-transparent -rotate-45" />
                <div className="text-center">
                  <span className="block text-2xl font-extrabold text-slate-900">14</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Entities</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-50">
              <div className="flex justify-between items-center text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-950" />
                  <span className="text-slate-600">Core Operations</span>
                </div>
                <span className="font-bold text-slate-900">50%</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="text-slate-600">R&D Assets</span>
                </div>
                <span className="font-bold text-slate-900">25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            4. RECENT TRANSACTIONS (FIXED SIZE INTERNAL SCROLL)
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-sm text-slate-900">Recent Large Expenses</h3>
            <button 
              type="button"
              onClick={() => setShowAllExpenses(!showAllExpenses)}
              className="text-xs font-bold text-indigo-950 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>{showAllExpenses ? "View Less" : "View All"}</span>
              <ExternalLink className={`h-3 w-3 transition-transform ${showAllExpenses ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Fixed max height layout container to keep structure intact */}
          <div className="overflow-x-auto max-h-[260px] overflow-y-auto custom-scrollbar transition-all duration-300 ease-in-out">
            <table className="w-full text-left border-collapse sticky-header">
              <thead className="sticky top-0 bg-white z-20 shadow-[0_1px_0_0_rgba(226,232,240,1)]">
                <tr className="bg-slate-50/80 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">VENDOR / ENTITY</th>
                  <th className="px-6 py-3">CATEGORY</th>
                  <th className="px-6 py-3">DATE</th>
                  <th className="px-6 py-3">STATUS</th>
                  <th className="px-6 py-3 text-right">AMOUNT</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {visibleExpenses.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg hidden sm:block">
                          {row.icon}
                        </div>
                        <div>
                          <div className="font-bold text-slate-800">{row.vendor}</div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">{row.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${row.catBg}`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-slate-500 font-medium">{row.date}</td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${row.status === "Processed" ? "bg-emerald-500" : "bg-amber-500"}`} />
                        <span className="text-slate-600 text-[11px] font-medium">{row.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-right font-bold text-slate-900 text-sm">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =================================== */}
          </>
        )}
      </div>

      {/* SIMULATION MODAL */}
      {showSimulation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowSimulation(false)}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Activity className="h-4 w-4 text-indigo-600" /> End of Month Forecast Simulation
              </h3>
              <button onClick={() => setShowSimulation(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                Projected total operational cost for EOM is <span className="font-bold text-indigo-950">$3.12M</span> based on current run rate and upcoming payroll cycles.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Payroll Run (Oct 15)</span>
                    <span className="text-sm font-extrabold text-slate-900">$450K</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Logistics True-Up (Oct 20)</span>
                    <span className="text-sm font-extrabold text-slate-900">$190K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setShowSimulation(false)} className="px-5 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer">
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}