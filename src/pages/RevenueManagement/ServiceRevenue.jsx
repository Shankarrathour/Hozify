import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, Calendar, X, Eye, TrendingUp, BarChart2, Layers } from "lucide-react";

export default function ServiceRevenue() {
  // --- Operational Dropdown and Modal States ---
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Q3 FY 2026");
  const [showDatasetModal, setShowDatasetModal] = useState(false);
  const [showExpansionModal, setShowExpansionModal] = useState(false);

  // Service Line Performance Detail Table Data
  const serviceLines = [
    {
      name: "Express Delivery",
      icon: "📦",
      revenue: "$11.2M",
      growth: "+18.5%",
      margin: "24.2%",
      marketShareWidth: "65%",
    },
    {
      name: "Warehousing",
      icon: "🏢",
      revenue: "$7.4M",
      growth: "+6.2%",
      margin: "18.9%",
      marketShareWidth: "45%",
    },
    {
      name: "Tracking Pro",
      icon: "⚙️",
      revenue: "$6.2M",
      growth: "+11.0%",
      margin: "35.4%",
      marketShareWidth: "35%",
    },
  ];

  return (
    <AdminShell activeTab="Revenue" searchPlaceholder="Search enterprise metrics...">
      <div 
        className="space-y-5 max-w-7xl mx-auto relative z-10 pointer-events-auto select-none"
        onClick={() => setShowCalendarDropdown(false)}
      >
        
        {/* ==========================================
            1. HEADER SECTION WITH WORKING CALENDAR
           ========================================== */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Service Revenue Analysis</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Comprehensive performance breakdown by strategic service lines
            </p>
          </div>

          {/* WORKING CALENDAR DROPDOWN ROW */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button"
              onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
              className={`px-3 py-1.5 bg-white border text-slate-600 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer ${showCalendarDropdown ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-500' : 'border-slate-200 hover:bg-slate-50'}`}
            >
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>{selectedPeriod}</span>
            </button>

            {showCalendarDropdown && (
              <div className="absolute top-full right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg p-2 min-w-[160px] z-50 space-y-0.5">
                {["Q1 FY 2026", "Q2 FY 2026", "Q3 FY 2026", "Q4 FY 2026"].map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => {
                      setSelectedPeriod(period);
                      setShowCalendarDropdown(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${selectedPeriod === period ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ==========================================
            2. COMPACT THREE COLUMNS TOP STATS CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Service Revenue */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm min-h-[105px]">
            <div>
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">TOTAL SERVICE REVENUE</p>
              <h3 className="text-2xl font-extrabold mt-1 text-slate-900 tracking-tight">$24.8M</h3>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50/70 px-2 py-0.5 rounded border border-emerald-100">
                ↗ +12.4% vs Last Quarter
              </span>
            </div>
          </div>

          {/* Top Performing Line */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm min-h-[105px]">
            <div>
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">TOP PERFORMING LINE</p>
              <h3 className="text-2xl font-extrabold mt-1 text-indigo-950 tracking-tight">Express</h3>
            </div>
            <div className="mt-2">
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                ⭐ <span className="font-bold text-slate-700">Contributing 45%</span> of Total Mix
              </span>
            </div>
          </div>

          {/* Customer Retention */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm min-h-[105px]">
            <div>
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">CUSTOMER RETENTION</p>
              <h3 className="text-2xl font-extrabold mt-1 text-slate-900 tracking-tight">98.2%</h3>
            </div>
            <div className="mt-2">
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                🛡️ <span className="text-indigo-600 font-semibold">Enterprise Tier Excellence</span>
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. MIDDLE ROW: SERVICE MIX & REVENUE TRENDS
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* Service Mix (Donut Chart representation) */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Service Mix Matrix</h3>
            </div>

            <div className="py-4 flex flex-col items-center justify-center relative">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#4f46e5" strokeWidth="3" strokeDasharray="45 100" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="-45" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#6366f1" strokeWidth="3" strokeDasharray="25 100" strokeDashoffset="-75" />
                </svg>
                <div className="absolute text-center">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">TOTAL</p>
                  <p className="text-base font-extrabold text-slate-900">$24.8M</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-slate-100 pt-3 text-center">
              <div>
                <p className="text-[10px] font-bold text-slate-700 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 block"></span> Express
                </p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">(45%)</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-700 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 block"></span> Warehouse
                </p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">(30%)</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-700 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 block"></span> Tracking
                </p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">(25%)</p>
              </div>
            </div>
          </div>

          {/* Revenue Trends Wave Analytics */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Revenue Trends</h3>
              <div className="flex items-center gap-2.5 text-[9px] font-bold text-slate-400">
                <span className="flex items-center gap-1"><span className="w-1.5 h-0.5 bg-indigo-600 block"></span> Express</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-0.5 bg-sky-400 block"></span> Warehouse</span>
              </div>
            </div>

            <div className="h-32 w-full mt-2 relative flex flex-col justify-end">
              <svg className="w-full h-24 text-indigo-600 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d="M 0 80 Q 75 20 150 60 T 300 10" fill="none" stroke="#4f46e5" strokeWidth="2" />
                <path d="M 0 90 Q 75 50 150 80 T 300 40" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 0 95 Q 75 70 150 90 T 300 55" fill="none" stroke="#6366f1" strokeWidth="1.2" strokeDasharray="1 2" />
              </svg>
            </div>

            <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1 mt-2">
              <span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            4. SERVICE LINE PERFORMANCE DETAIL LIST
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 bg-white">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Service Line Performance Detail</h3>
            {/* WORKING MODAL TRIGGER */}
            <button 
              type="button"
              onClick={() => setShowDatasetModal(true)}
              className="text-indigo-600 text-xs font-bold hover:underline transition-all cursor-pointer"
            >
              View Full Dataset ↗
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">Service Line</th>
                  <th className="px-6 py-3">Current Revenue</th>
                  <th className="px-6 py-3">Growth Rate</th>
                  <th className="px-6 py-3">Margins</th>
                  <th className="px-6 py-3">Market Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700 bg-white">
                {serviceLines.map((service, index) => (
                  <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-sm shadow-xs">
                          {service.icon}
                        </div>
                        <span className="font-bold text-slate-800">{service.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-slate-900 font-extrabold">{service.revenue}</td>
                    <td className="px-6 py-3 text-emerald-600 font-extrabold">{service.growth}</td>
                    <td className="px-6 py-3 text-slate-400 font-medium">{service.margin}</td>
                    <td className="px-6 py-3 w-48">
                      <div className="h-1.5 bg-slate-100 rounded-full w-full max-w-[100px]">
                        <div className="h-1.5 bg-indigo-950 rounded-full" style={{ width: service.marketShareWidth }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            5. BOTTOM EXECUTIVE INSIGHT BANNER
           ========================================== */}
        <div className="bg-indigo-950 text-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm relative overflow-hidden">
          <div>
            <span className="text-[9px] font-bold tracking-widest text-indigo-300 uppercase block">EXECUTIVE INSIGHT</span>
            <h4 className="text-base font-bold mt-0.5 text-white">Tracking Pro Expansion Potential</h4>
            <p className="text-xs text-indigo-100/90 mt-1 max-w-3xl font-normal leading-relaxed">
              Analysis indicates <span className="text-white font-bold">Tracking Pro</span> has the highest profit margin (35.4%) despite a smaller market share. Expanding this service line into the European market could drive an additional <span className="text-white font-bold">$2.4M</span> in annual revenue by Q2 2027.
            </p>
          </div>
          
          <button 
            type="button"
            onClick={() => setShowExpansionModal(true)}
            className="px-3.5 py-2 bg-white text-indigo-950 text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-50 transition-colors shrink-0 cursor-pointer"
          >
            Review Expansion Plan
          </button>
        </div>

        {/* ==========================================
            6. FUNCTIONAL MODAL SYSTEM LAYOUT
           ========================================== */}
        
        {/* FULL DATASET DETAILS MODAL */}
        {showDatasetModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowDatasetModal(false)}>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-3.5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-indigo-600" /> Complete Service Segment Ledger
                </h4>
                <button type="button" onClick={() => setShowDatasetModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5 space-y-3 max-h-[350px] overflow-y-auto">
                {serviceLines.map((s, i) => (
                  <div key={i} className="p-3 border border-slate-100 rounded-lg bg-slate-50/50 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-slate-800 flex items-center gap-1.5">{s.icon} {s.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Margin Multiplier Layer: {s.margin}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-extrabold text-slate-900">{s.revenue}</p>
                      <p className="text-[11px] text-emerald-600 font-bold">{s.growth} Growth</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPANSION PLAN MODAL */}
        {showExpansionModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowExpansionModal(false)}>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-3.5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-indigo-600" /> Q2 2027 Expansion Strategy
                </h4>
                <button type="button" onClick={() => setShowExpansionModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5 space-y-4">
                <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg text-xs">
                  <h5 className="font-bold text-indigo-950 flex items-center gap-1.5">🗺️ Phase 1: European Hub Rollout</h5>
                  <p className="text-slate-500 font-medium mt-1 leading-relaxed">Targeting Western Europe enterprise nodes with localized high-margin Tracking Pro software integrations.</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <h5 className="font-bold text-slate-800">📈 Projected Incremental Yield</h5>
                  <p className="text-slate-500 font-medium mt-1 leading-relaxed">Expected baseline trajectory estimates a <span className="font-bold text-indigo-600">+$2.4M ARR</span> scaling vector at maturity tier stage.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}