import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Download, MoreVertical, Calendar } from "lucide-react";

export default function ServiceRevenue() {
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
      <div className="space-y-6">
        
        {/* ==========================================
            1. HEADER SECTION
           ========================================== */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Service Revenue Analysis</h1>
            <p className="text-sm text-slate-500 mt-1">
              Comprehensive performance breakdown by strategic service lines
            </p>
          </div>

          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>03 FY 2026</span>
          </button>
        </div>

        {/* ==========================================
            2. THREE COLUMNS TOP STATS CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Total Service Revenue */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">TOTAL SERVICE REVENUE</p>
              <h3 className="text-3xl font-extrabold mt-2 text-slate-900 tracking-tight">$24.8M</h3>
            </div>
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                ↗ +12.4% vs Last Quarter
              </span>
            </div>
          </div>

          {/* Top Performing Line */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">TOP PERFORMING LINE</p>
              <h3 className="text-3xl font-extrabold mt-2 text-indigo-900 tracking-tight">Express</h3>
            </div>
            <div className="mt-3">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                ⭐ <span className="font-bold text-slate-700">Contributing 45%</span> of Total Mix
              </span>
            </div>
          </div>

          {/* Customer Retention */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">CUSTOMER RETENTION</p>
              <h3 className="text-3xl font-extrabold mt-2 text-slate-900 tracking-tight">98.2%</h3>
            </div>
            <div className="mt-3">
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                🛡️ <span className="text-indigo-600 font-semibold">Enterprise Tier Excellence</span>
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. MIDDLE ROW: SERVICE MIX & REVENUE TRENDS
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Service Mix (Donut Chart representation) */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-900">Service Mix</h3>
            </div>

            {/* Figma Donut Center Layout */}
            <div className="py-6 flex flex-col items-center justify-center relative">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* SVG Circle Segments mimicking 45%, 30%, 25% */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Express Delivery (45%) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#4f46e5" strokeWidth="3.2" strokeDasharray="45 100" strokeDashoffset="0" />
                  {/* Warehousing (30%) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#38bdf8" strokeWidth="3.2" strokeDasharray="30 100" strokeDashoffset="-45" />
                  {/* Tracking Pro (25%) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#6366f1" strokeWidth="3.2" strokeDasharray="25 100" strokeDashoffset="-75" />
                </svg>
                {/* Center Content */}
                <div className="absolute text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL</p>
                  <p className="text-lg font-extrabold text-slate-900">$24.8M</p>
                </div>
              </div>
            </div>

            {/* Custom Bottom Metrics Legends matching figma layout precisely */}
            <div className="grid grid-cols-3 border-t border-slate-100 pt-4 text-center">
              <div>
                <p className="text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 block"></span> Express Delivery
                </p>
                <p className="text-xs font-bold text-slate-400 mt-0.5">(45%)</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sky-400 block"></span> Warehousing
                </p>
                <p className="text-xs font-bold text-slate-400 mt-0.5">(30%)</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 block"></span> Tracking Pro
                </p>
                <p className="text-xs font-bold text-slate-400 mt-0.5">(25%)</p>
              </div>
            </div>
          </div>

          {/* Revenue Trends Wave Analytics */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900">Revenue Trends</h3>
              {/* Legends */}
              <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
                <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-indigo-600 block"></span> Express</span>
                <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-sky-400 block"></span> Warehousing</span>
                <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-indigo-400 block"></span> Tracking</span>
              </div>
            </div>

            {/* Curved SVG paths to represent exact wave trend visualization */}
            <div className="h-44 w-full mt-4 relative flex flex-col justify-end">
              <svg className="w-full h-32 text-indigo-600 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                {/* Express Line Path */}
                <path d="M 0 80 Q 75 20 150 60 T 300 10" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
                {/* Warehousing Line Path */}
                <path d="M 0 90 Q 75 50 150 80 T 300 40" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                {/* Tracking Pro Line Path */}
                <path d="M 0 95 Q 75 70 150 90 T 300 55" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="1 2" />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 mt-4">
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL</span>
              <span>AUG</span>
              <span>SEP</span>
            </div>
          </div>

        </div>

        {/* ==========================================
            4. SERVICE LINE PERFORMANCE DETAIL LIST
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
            <h3 className="font-bold text-base text-slate-900">Service Line Performance Detail</h3>
            <button className="text-indigo-600 text-xs font-bold hover:underline transition-all">View Full Dataset ↗</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3.5">Service Line</th>
                  <th className="px-6 py-3.5">Current Revenue</th>
                  <th className="px-6 py-3.5">Growth Rate</th>
                  <th className="px-6 py-3.5">Margins</th>
                  <th className="px-6 py-3.5">Market Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                {serviceLines.map((service, index) => (
                  <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                          {service.icon}
                        </div>
                        <span className="font-bold text-slate-900">{service.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-900 font-bold">{service.revenue}</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">{service.growth}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{service.margin}</td>
                    {/* Progress Fill bar representation */}
                    <td className="px-6 py-4 w-60">
                      <div className="flex items-center gap-3">
                        <div className="h-2 bg-slate-100 rounded-full w-full max-w-[120px]">
                          <div className="h-2 bg-indigo-950 rounded-full" style={{ width: service.marketShareWidth }} />
                        </div>
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
        <div className="bg-indigo-950 text-white rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm relative overflow-hidden">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase block">EXECUTIVE INSIGHT</span>
            <h4 className="text-lg font-bold mt-1 text-white">Tracking Pro Expansion Potential</h4>
            <p className="text-xs text-indigo-100/90 mt-1 max-w-3xl font-normal leading-relaxed">
              Analysis indicates <span className="text-white font-bold">Tracking Pro</span> has the highest profit margin (35.4%) despite a smaller market share. Expanding this service line into the European market could drive an additional <span className="text-white font-bold">$2.4M</span> in annual revenue by Q2 2027.
            </p>
          </div>
          
          <button className="px-4 py-2 bg-white text-indigo-950 text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-50 transition-colors shrink-0">
            Review Expansion Plan
          </button>
        </div>

      </div>
    </AdminShell>
  );
}