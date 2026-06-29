import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Download,
  ShoppingCart,
  Target,
  Timer,
  DollarSign,
  Info,
} from "lucide-react";
import { useToast } from "../../components/common/ToastNotification";

const campaignRates = [
  { name: "Summer Blast", rate: "32.4%", width: "w-[90%]" },
  { name: "VIP Rewards", rate: "28.1%", width: "w-[80%]" },
  { name: "Flash Sale", rate: "24.5%", width: "w-[70%]" },
  { name: "Early Bird", rate: "19.8%", width: "w-[55%]" },
  { name: "Loyalty v2", rate: "15.2%", width: "w-[45%]" },
];

const trendBars = [35, 50, 40, 65, 60, 78, 85, 74, 55, 68, 78, 82];

export default function ConversionAnalyticsPage() {
  const { addToast } = useToast();
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="min-h-screen bg-slate-100 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Analytics › Conversion Deep Dive
            </p>
            <h1 className="text-3xl font-black text-indigo-955 mt-1">
              Conversion Performance
            </h1>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="bg-white border border-slate-300 rounded-xl flex overflow-hidden">
              <button 
                onClick={() => { setTimeRange("Last 30 Days"); addToast("Filtered timeline: Last 30 Days", "success"); }}
                className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${timeRange === "Last 30 Days" ? "bg-indigo-900 text-white" : "hover:bg-slate-50 text-slate-700"}`}
              >
                Last 30 Days
              </button>
              {/* <button 
                onClick={() => { setTimeRange("Quarterly"); addToast("Filtered timeline: Quarterly", "success"); }}
                className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${timeRange === "Quarterly" ? "bg-indigo-900 text-white" : "hover:bg-slate-50 text-slate-700"}`}
              >
                Quarterly
              </button>
              <button 
                onClick={() => { setTimeRange("Yearly"); addToast("Filtered timeline: Yearly", "success"); }}
                className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${timeRange === "Yearly" ? "bg-indigo-900 text-white" : "hover:bg-slate-50 text-slate-700"}`}
              >
                Yearly
              </button> */}
            </div>

            <button 
              onClick={() => addToast("Generating conversion deep dive PDF report...", "success")}
              className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Card 1 */}
          <div 
            onClick={() => addToast("Card clicked: Total Conversions volume history", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Total Conversions
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  3,204
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <ShoppingCart size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">+18.2%</span>
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-900 w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => addToast("Card clicked: Conversion Rate dynamics", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Conversion Rate
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  22.4%
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Target size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">+2.1%</span>
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-900 w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => addToast("Card clicked: Average Time To Convert analysis", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Avg. Time To Convert
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  4.2 days
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Timer size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-red-500 font-semibold">-1.4%</span>
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-900 w-2/5 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => addToast("Card clicked: Conversion Value ledger", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Conversion Value
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  $84,500
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <DollarSign size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">+12.5%</span>
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-900 w-4/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Funnel and Campaigns */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                Conversion Funnel
              </h2>
              <Info 
                size={16} 
                onClick={() => addToast("Funnel step benchmarks loaded", "success")} 
                className="text-slate-500 cursor-pointer hover:text-indigo-700" 
              />
            </div>

            <div className="space-y-4">
              <div onClick={() => addToast("Stage: Referral details", "success")} className="cursor-pointer hover:opacity-95 transition-all">
                <div className="flex justify-between text-xs mb-1.5 font-bold text-slate-650">
                  <span>Referral (14,292)</span>
                  <span>100%</span>
                </div>
                <div className="h-10 bg-indigo-900 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  Referral (14,292)
                </div>
              </div>

              <div onClick={() => addToast("Stage: Click details", "success")} className="cursor-pointer hover:opacity-95 transition-all">
                <div className="flex justify-between text-xs mb-1.5 font-bold text-slate-650">
                  <span>Click (9,289)</span>
                  <span>65%</span>
                </div>
                <div className="h-10 bg-indigo-700 rounded-lg w-[85%] mx-auto flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  Click
                </div>
              </div>

              <div onClick={() => addToast("Stage: Signup details", "success")} className="cursor-pointer hover:opacity-95 transition-all">
                <div className="flex justify-between text-xs mb-1.5 font-bold text-slate-650">
                  <span>Signup (5,430)</span>
                  <span>38%</span>
                </div>
                <div className="h-10 bg-indigo-500 rounded-lg w-[70%] mx-auto flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  Signup
                </div>
              </div>

              <div onClick={() => addToast("Stage: First Transaction details", "success")} className="cursor-pointer hover:opacity-95 transition-all">
                <div className="flex justify-between text-xs mb-1.5 font-bold text-slate-650">
                  <span>First Transaction (3,204)</span>
                  <span>22.4%</span>
                </div>
                <div className="h-10 bg-indigo-300 rounded-lg w-[55%] mx-auto flex items-center justify-center text-slate-900 text-xs font-extrabold shadow-sm">
                  First Transaction
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Campaign Conversion Rates
                </h2>
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  Top 5 Campaigns
                </span>
              </div>

              <div className="space-y-4">
                {campaignRates.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => addToast(`Opening detailed conversion logs for ${item.name}`, "success")}
                    className="cursor-pointer group"
                  >
                    <div className="flex justify-between mb-1.5 text-xs font-bold text-slate-800">
                      <span className="group-hover:text-indigo-900 transition-all">{item.name}</span>
                      <span>{item.rate}</span>
                    </div>

                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-indigo-800 rounded-full ${item.width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Daily Conversion Trend
                </h2>
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  Last 12 Days
                </span>
              </div>

              <div className="h-[120px] flex items-end justify-between px-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
                {trendBars.map((h, index) => (
                  <div
                    key={index}
                    onClick={() => addToast(`Conversions for Day ${index + 1}: ${h} referrals`, "success")}
                    className="w-4 bg-indigo-900 rounded-t cursor-pointer hover:bg-indigo-700 transition-all"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}