import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { Download, Plus, Filter, Play, Check, X, ShieldAlert, Sparkles, Target } from "lucide-react";

const MOCK_COUPONS = [
  { code: "SUMMER-REF-2024", status: "ACTIVE", limit: 500, expiry: "Aug 30, 2024", redeemed: 342, progressWidth: "w-[68%]" },
  { code: "WELCOME-10-OFF", status: "ACTIVE", limit: "Unlimited", expiry: "No Expiry", redeemed: 1892, progressWidth: "w-[100%]" },
  { code: "FLASH-SALES-B2B", status: "EXPIRED", limit: 100, expiry: "Jul 15, 2024", redeemed: 100, progressWidth: "w-[100%]" },
  { code: "PARTNER-PERK-A1", status: "SCHEDULED", limit: 50, expiry: "Dec 31, 2024", redeemed: 0, progressWidth: "w-[0%]" },
];

export default function CouponManagementPage() {
  const { addToast } = useToast();
  const [campaignAssociation, setCampaignAssociation] = useState("Summer 2024 Launch");
  const [coupons, setCoupons] = useState(MOCK_COUPONS);
  const [bulkQty, setBulkQty] = useState("");
  const [bulkPrefix, setBulkPrefix] = useState("");

  const handleBulkGenerate = () => {
    if (!bulkQty) {
      addToast("Please specify the quantity to generate", "success");
      return;
    }
    addToast(`Successfully generated ${bulkQty} coupons with prefix "${bulkPrefix || "None"}"`, "success");
    setBulkQty("");
    setBulkPrefix("");
  };

  return (
    <AdminShell activeTab="Referrals">
      <div className="w-full min-h-screen bg-[#f8f9fc] p-4 md:p-6 text-slate-800 antialiased">
        
        {/* TOP MAIN HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#1a165a]">
              Coupon Management
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Generate, track, and manage referral-linked coupons for active campaigns.
            </p>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => addToast("Exporting Coupon Management database...", "success")}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-bold bg-white border border-gray-300 rounded text-gray-700 shadow-sm hover:bg-gray-50 transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Export Data</span>
            </button>
            <button 
              onClick={() => addToast("Scrolling to bulk coupon generator...", "success")}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-bold bg-[#1c0094] hover:bg-[#150070] text-white rounded shadow-sm transition-all cursor-pointer"
            >
              <Plus size={14} />
              <span>Generate Bulk Coupons</span>
            </button>
          </div>
        </div>

        {/* KPI Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Card 1 */}
          <div 
            onClick={() => addToast("Card clicked: Total Redeemed coupons details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Total Redeemed
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  2,334
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Sparkles size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-green-500 font-semibold bg-green-50 px-1.5 py-0.5 rounded">~12.5%</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Summer Referral</span>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => addToast("Card clicked: Quota Utilization details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Quota Utilized
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  72%
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Target size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-slate-500">1,120 Remaining</span>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => addToast("Card clicked: Active Coupons list", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Active Coupons
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  32
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Play size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">Running live</span>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => addToast("Card clicked: Expired Coupons details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Expired Today
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight text-red-500">
                  4
                </h3>
              </div>
              <div className="text-red-500 mt-0.5">
                <ShieldAlert size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-red-500 font-semibold bg-red-50 px-1 rounded-md">Critical</span>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION - TABLE */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="font-bold text-sm text-gray-800">Active Coupons</h2>
            <button 
              onClick={() => addToast("Opening table filters dashboard...", "success")}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <Filter size={15} />
            </button>
          </div>

          {/* DATA TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#fcfdfe] border-b border-gray-200 text-gray-500 font-medium">
                <tr>
                  <th className="p-4">Coupon Code</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Usage Limit</th>
                  <th className="p-4">Expiry Date</th>
                  <th className="p-4">Total Redeemed</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {coupons.map((row, idx) => (
                  <tr 
                    key={idx}
                    onClick={() => addToast(`Opening detailed status metrics for coupon: ${row.code}`, "success")}
                    className="hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    <td className="p-4 font-bold text-[#1c0094]">{row.code}</td>
                    <td className="p-4">
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded ${
                        row.status === "ACTIVE" ? "bg-blue-50 text-blue-600" : row.status === "EXPIRED" ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500 font-semibold">{row.limit}</td>
                    <td className={`p-4 font-semibold ${row.status === "EXPIRED" ? "text-red-500" : "text-gray-500"}`}>{row.expiry}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3 w-36">
                        <span className="font-bold text-gray-800 text-xs">{row.redeemed}</span>
                        {row.status !== "ACTIVE" && row.redeemed === 1892 ? null : (
                          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${row.status === "EXPIRED" ? "bg-red-500" : "bg-[#1c0094]"}`} style={{ width: row.redeemed === 342 ? "68%" : row.redeemed === 100 ? "100%" : "0%" }}></div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => addToast(`Opening config options for: ${row.code}`, "success")}
                        className="cursor-pointer"
                      >
                        •••
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE PAGINATION */}
          <div className="flex justify-between items-center p-4 border-t border-gray-100 text-xs text-gray-400 bg-white rounded-b-lg">
            <p>Showing 1 to 4 of 42 coupons</p>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => addToast("Loaded previous coupon directory page", "success")}
                className="p-1 text-gray-400 hover:bg-gray-50 rounded border border-gray-200 cursor-pointer"
              >
                ‹
              </button>
              <button className="px-2.5 py-1 bg-[#1c0094] text-white rounded font-medium text-xs">1</button>
              <button onClick={() => addToast("Loaded page 2", "success")} className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 rounded border border-gray-200 cursor-pointer text-xs">2</button>
              <button onClick={() => addToast("Loaded page 3", "success")} className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 rounded border border-gray-200 cursor-pointer text-xs">3</button>
              <button 
                onClick={() => addToast("Loaded next coupon directory page", "success")}
                className="p-1 text-gray-400 hover:bg-gray-50 rounded border border-gray-200 cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM AREA: INPUT GENERATOR */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-6 p-6">
          <h2 className="font-bold text-gray-800 text-sm md:text-base">
            Generate Bulk Coupons
          </h2>
          <p className="text-xs text-gray-400 mt-0.5 mb-5">
            Rapidly create a large set of unique codes tied to specific campaign parameters. Ideal for offline marketing or partner handouts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Quantity to Generate</label>
              <input
                type="text"
                placeholder="e.g. 1000"
                value={bulkQty}
                onChange={(e) => setBulkQty(e.target.value)}
                className="border border-gray-200 rounded p-2 text-xs outline-none bg-gray-50/50 focus:border-[#1c0094]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Code Prefix</label>
              <input
                type="text"
                placeholder="e.g. FALL-"
                value={bulkPrefix}
                onChange={(e) => setBulkPrefix(e.target.value)}
                className="border border-gray-200 rounded p-2 text-xs outline-none bg-gray-50/50 focus:border-[#1c0094]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Campaign Association</label>
              <select 
                value={campaignAssociation}
                onChange={(e) => setCampaignAssociation(e.target.value)}
                className="border border-gray-200 rounded p-2 text-xs bg-white outline-none focus:border-[#1c0094] text-gray-600 font-semibold cursor-pointer"
              >
                <option value="Summer 2024 Launch">Summer 2024 Launch</option>
                <option value="Winter Campaign">Winter Campaign</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-6 pt-4 border-t border-gray-100">
            <p className="text-[11px] text-gray-400">
              Estimated generation time: ~3 seconds
            </p>
            <button 
              onClick={handleBulkGenerate}
              className="bg-[#1c0094] hover:bg-[#150070] text-white px-5 py-2 rounded text-xs font-semibold transition-all shadow-sm self-end sm:self-auto cursor-pointer"
            >
              Start Bulk Generation
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}