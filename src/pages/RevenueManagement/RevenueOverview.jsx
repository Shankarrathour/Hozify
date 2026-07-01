import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
// FIX: 'Global' ko hata kar sahi icon name 'Globe' kiya hai
import { ArrowUpRight, TrendingUp, Users, Building2, AlertCircle, Globe } from "lucide-react";
import { useDateFilter } from "../../contexts/DateFilterContext";
import DateFilter from "../../components/common/DateFilter";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import EmptyState from "../../components/common/EmptyState";

export default function RevenueOverview() {
  const { preset, isFiltering, hasData } = useDateFilter();

  const branches = [
    { name: "Singapore - Regional Hub", revenue: "$1.24M", width: "100%" },
    { name: "London - European HQ", revenue: "$980K", width: "80%" },
    { name: "New York - North America", revenue: "$825K", width: "70%" },
    { name: "Dubai - MENA Logistics", revenue: "$610K", width: "55%" },
    { name: "Tokyo - Asia Pacific", revenue: "$485K", width: "45%" },
  ];

  // Data mapping for ARPU trend nodes
  const arpuData = [
    { month: "May", value: 40, amount: "$80.00" },
    { month: "Jun", value: 45, amount: "$90.00" },
    { month: "Jul", value: 52, amount: "$104.00" },
    { month: "Aug", value: 68, amount: "$136.00" },
    { month: "Sep", value: 60, amount: "$120.00" },
    { month: "Oct", value: 78, amount: "$156.00" },
  ];

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search revenue metrics...">
      <div 
        className="space-y-5 max-w-7xl mx-auto relative z-10 pointer-events-auto select-none"
      >

        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Revenue Overview
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Real-time breakdown of organizational revenue streams and segments.
            </p>
          </div>

          {/* Working Timeframe Dropdown Widget */}
          <div className="relative flex items-center justify-end z-50">
            <DateFilter />
          </div>
        </div>

        {isFiltering ? (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <SkeletonLoader height="120px" />
              <SkeletonLoader height="120px" />
              <SkeletonLoader height="120px" />
              <SkeletonLoader height="120px" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <SkeletonLoader height="280px" />
              <SkeletonLoader height="280px" />
            </div>
          </div>
        ) : !hasData ? (
          <EmptyState />
        ) : (
          <>
        {/* Compact & Slim KPI Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Total Gross Revenue */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Gross Revenue</p>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                $4.28M
              </h3>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-50 flex items-center text-[11px] font-medium text-emerald-600 gap-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" /> +12.5% vs last period
            </div>
          </div>

          {/* Avg Monthly ARPU */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Monthly ARPU</p>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                $842
              </h3>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-50 flex items-center text-[11px] font-medium text-emerald-600 gap-0.5">
              <TrendingUp className="h-3.5 w-3.5" /> +3.2% periodic growth
            </div>
          </div>

          {/* Active Branches */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Operations</p>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                42 Nodes
              </h3>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-50 flex items-center text-[11px] font-semibold text-slate-400 gap-1">
              <Building2 className="h-3 w-3 text-slate-300" /> 2 Pending Activation
            </div>
          </div>

          {/* Partner Churn */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Partner Attrition Rate</p>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                1.8%
              </h3>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-50 flex items-center text-[11px] font-medium text-amber-600 gap-0.5">
              <AlertCircle className="h-3.5 w-3.5" /> +0.4% marginal increase
            </div>
          </div>

        </div>

        {/* Revenue Segment + Branch Progress Trackers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Segment Allocation */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Revenue Mix by Segment
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mb-5">Flow attribution across commercial operational units.</p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-indigo-600" /> Partners</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: "45%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-purple-500" /> Sellers Portfolio</span>
                  <span>35%</span>
                </div>
                <div className="h-2 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "35%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-500" /> Core Services</span>
                  <span>20%</span>
                </div>
                <div className="h-2 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: "20%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Top Branch Performers */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Top Revenue Generating Branches
              </h3>
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); alert("Redirecting to all nodes..."); }}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                View All Nodes
              </button>
            </div>
            <p className="text-[11px] text-slate-400 font-medium mb-4">Highest yielding regional operational centers.</p>

            <div className="space-y-3.5">
              {branches.map((branch, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span className="text-slate-800 font-semibold">{branch.name}</span>
                    <span className="text-slate-900">{branch.revenue}</span>
                  </div>
                  <div className="h-1.5 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-800 rounded-full transition-all duration-500"
                      style={{ width: branch.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HIGH-FIDELITY SMOOTH ARPU VECTOR CHART */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Average Revenue Per User (ARPU) Momentum
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Smooth operational run-rate across the trailing 6-month sequence.</p>
            </div>
            <span className="text-[10px] font-extrabold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md">
              Normalized Core Delta
            </span>
          </div>

          <div className="relative w-full h-48 bg-slate-50/50 rounded-xl border border-slate-100/70 overflow-hidden pt-10">
            
            {/* Smooth SVG Path Plotting */}
            <svg 
              viewBox="0 0 600 120" 
              className="absolute inset-0 w-full h-[75%] overflow-visible text-indigo-600 top-8"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="arpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <path
                d="M 0,120 L 0,65 Q 60,60 120,55 Q 180,48 240,32 Q 300,42 360,20 Q 420,-2 480,0 Q 540,12 600,10 L 600,120 Z"
                fill="url(#arpuGradient)"
              />

              <path
                d="M 0,65 Q 60,60 120,55 Q 180,48 240,32 Q 300,42 360,20 Q 420,-2 480,0 Q 540,12 600,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Matrix Columns Mapping & Tooltips */}
            <div className="absolute inset-x-0 bottom-0 h-full flex justify-between px-4">
              {arpuData.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between items-center h-full group relative flex-1 text-center">
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-150 absolute bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md top-1.5 z-30 pointer-events-none whitespace-nowrap">
                    Delta: {item.amount}
                  </div>

                  <div className="w-full flex justify-center h-full items-center relative">
                    <div 
                      className="w-2 h-2 rounded-full border-2 border-indigo-600 bg-white opacity-0 group-hover:opacity-100 shadow-md transition-opacity absolute" 
                      style={{ bottom: `${item.value - 15}%` }} 
                    />
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-indigo-600 pb-2 transition-colors z-10">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
          </>
        )}

      </div>
    </AdminShell>
  );
}