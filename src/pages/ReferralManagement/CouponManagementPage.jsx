import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { Download, Plus, Filter, Play, Check, X, ShieldAlert, Sparkles, Target } from "lucide-react";

export default function CouponManagementPage() {
  const { addToast } = useToast();

  // 1. Dynamic State for Coupons List
  const [coupons, setCoupons] = useState([
    { code: "SUMMER-REF-2024", status: "ACTIVE", limit: "500", expiry: "Aug 30, 2024", redeemed: 342, progress: "68%" },
    { code: "WELCOME-10-OFF", status: "ACTIVE", limit: "Unlimited", expiry: "No Expiry", redeemed: 1892, progress: null },
    { code: "FLASH-SALES-B2B", status: "EXPIRED", limit: "100", expiry: "Jul 15, 2024", redeemed: 100, progress: "100%" },
    { code: "PARTNER-PERK-A1", status: "SCHEDULED", limit: "50", expiry: "Dec 31, 2024", redeemed: 0, progress: "0%" }
  ]);

  // 2. States for Modal and Form Inputs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [newLimit, setNewLimit] = useState("");
  const [newExpiry, setNewExpiry] = useState("");

  // 3. States for Bulk Generation
  const [bulkQty, setBulkQty] = useState("");
  const [bulkPrefix, setBulkPrefix] = useState("");
  const [campaignAssociation, setCampaignAssociation] = useState("Summer 2024 Launch");

  // 4. Action Handler to Add New Coupon
  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (!newCode) return addToast("Please enter a coupon code", "warning");

    const newCoupon = {
      code: newCode.toUpperCase(),
      status: "ACTIVE",
      limit: newLimit || "Unlimited",
      expiry: newExpiry || "No Expiry",
      redeemed: 0,
      progress: "0%"
    };

    setCoupons([newCoupon, ...coupons]); // Adds to top of list
    setIsModalOpen(false); // Close Modal
    addToast(`Coupon "${newCoupon.code}" created successfully!`, "success");
    
    // Reset Form fields
    setNewCode("");
    setNewLimit("");
    setNewExpiry("");
  };

  // 5. Action Handler for Bulk Generate
  const handleBulkGenerate = () => {
    if (!bulkQty) {
      addToast("Please enter a quantity for bulk generation", "warning");
      return;
    }
    const prefix = bulkPrefix.toUpperCase() || "REF-";
    const qty = parseInt(bulkQty, 10);
    if (isNaN(qty) || qty <= 0) {
      addToast("Please enter a valid quantity", "warning");
      return;
    }

    addToast(`Successfully queued bulk generation of ${qty} coupons with prefix "${prefix}"!`, "success");
    setBulkQty("");
    setBulkPrefix("");
  };

  return (
    <AdminShell activeTab="Referrals">
      <div className="w-full min-h-screen bg-[#f8f9fc] p-4 md:p-6 text-slate-800 antialiased relative">
        
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
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <button 
              onClick={() => addToast("Exporting Coupon metrics spreadsheet...", "success")}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-white border border-gray-300 rounded text-gray-700 shadow-sm hover:bg-gray-50 cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Data
            </button>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-emerald-600 text-white rounded shadow-sm hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <Plus size={16} />
              Add New Coupon
            </button>
          </div>
        </div>

        {/* TOP LAYOUT STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          
          {/* LEFT AREA: TOP KPI CARDS */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              onClick={() => addToast("Card clicked: Active Coupons overview details", "success")}
              className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-all"
            >
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Active Coupons</p>
                <h3 className="text-2xl font-black text-[#1a165a] mt-1">32</h3>
                <span className="text-[10px] text-emerald-600 font-bold block mt-1">● 4 Scheduled next week</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-full text-[#1c0094]">
                <Target size={20} />
              </div>
            </div>

            <div 
              onClick={() => addToast("Card clicked: High Risk Warning alerts log", "warning")}
              className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-all"
            >
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">High Risk Warning</p>
                <h3 className="text-2xl font-black text-red-600 mt-1">0</h3>
                <span className="text-[10px] text-gray-400 font-bold block mt-1">No anomalies detected</span>
              </div>
              <div className="bg-red-50 p-3 rounded-full text-red-500">
                <ShieldAlert size={20} />
              </div>
            </div>
          </div>

          {/* RIGHT AREA: SIDE STATS CARDS */}
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
            <div 
              onClick={() => addToast("Card clicked: Quota distribution metrics", "success")}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-all"
            >
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Quota Distribution</p>
                <div className="text-lg font-black text-[#1a165a]">72% Utilized</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Remaining: <span className="font-bold">1,120</span></div>
              </div>
              <div className="w-12 h-12 flex items-center justify-center border-4 border-dashed border-[#1c0094] rounded-full text-xs font-bold text-[#1a165a]">
                72%
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION - TABLE */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="font-bold text-sm text-gray-800">Active Coupons</h2>
            <button 
              onClick={() => addToast("Opening table filters dashboard...", "success")}
              className="text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded hover:bg-gray-50"
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
                        {row.progress !== null && (
                          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${row.status === "EXPIRED" ? "bg-red-500" : "bg-[#1c0094]"}`} 
                              style={{ width: row.progress }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-400 hover:text-gray-650" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => addToast(`Opening config options for: ${row.code}`, "success")}
                        className="cursor-pointer border-none bg-transparent outline-none"
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
            <p>Showing 1 to {coupons.length} of 42 coupons</p>
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

      {/* DYNAMIC MODAL FOR "ADD NEW COUPON" */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-base font-bold text-[#1a165a]">Create New Coupon</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold border-none bg-transparent cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCoupon} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Coupon Code *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. FESTIVE50" 
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value)}
                  className="border border-gray-200 rounded p-2 text-sm outline-none focus:border-[#1c0094]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Usage Limit (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. 500 (Leave blank for unlimited)" 
                  value={newLimit}
                  onChange={(e) => setNewLimit(e.target.value)}
                  className="border border-gray-200 rounded p-2 text-sm outline-none focus:border-[#1c0094]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Expiry Date (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dec 25, 2026" 
                  value={newExpiry}
                  onChange={(e) => setNewExpiry(e.target.value)}
                  className="border border-gray-200 rounded p-2 text-sm outline-none focus:border-[#1c0094]"
                />
              </div>

              <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold border border-gray-200 rounded text-gray-500 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold bg-emerald-600 text-white rounded hover:bg-emerald-700 shadow-sm cursor-pointer"
                >
                  Save Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </AdminShell>
  );
}