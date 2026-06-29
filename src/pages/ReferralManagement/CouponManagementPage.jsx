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

  // 3. Action Handler to Add New Coupon
  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (!newCode) return alert("Please enter a coupon code");

    const newCoupon = {
      code: newCode.toUpperCase(),
      status: "ACTIVE",
      limit: newLimit || "Unlimited",
      expiry: newExpiry || "No Expiry",
      redeemed: 0,
      progress: "0%"
    };

    setCoupons([newCoupon, ...coupons]); // Naye coupon ko list ke top par add karega
    setIsModalOpen(false); // Modal close karega
    
    // Form reset fields
    setNewCode("");
    setNewLimit("");
    setNewExpiry("");
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
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-white border border-gray-300 rounded text-gray-700 shadow-sm hover:bg-gray-50">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Data
            </button>
            
            {/* DYNAMIC ACTION: ADD NEW COUPON BUTTON */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-emerald-600 text-white rounded shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Coupon
            </button>

            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-[#1c0094] text-white rounded shadow-sm hover:bg-[#150070]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Generate Bulk Coupons
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

            {/* DYNAMIC DATA TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
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
                  {coupons.map((coupon, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-bold text-[#1c0094]">{coupon.code}</td>
                      <td className="p-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          coupon.status === "ACTIVE" ? "bg-blue-50 text-blue-600" :
                          coupon.status === "EXPIRED" ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"
                        }`}>
                          {coupon.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500">{coupon.limit}</td>
                      <td className="p-4 text-gray-500">{coupon.expiry}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3 w-36">
                          <span className="font-bold text-gray-800">{coupon.redeemed.toLocaleString()}</span>
                          {coupon.progress !== null && (
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${coupon.status === "EXPIRED" ? "bg-red-500" : "bg-[#1c0094]"}`} 
                                style={{ width: coupon.progress }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-center font-bold text-gray-400 cursor-pointer hover:text-gray-600">•••</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

            {/* TABLE PAGINATION */}
            <div className="flex justify-between items-center p-4 border-t border-gray-100 text-xs text-gray-400 bg-white rounded-b-lg">
              <p>Showing 1 to {coupons.length} of 42 coupons</p>
              <div className="flex items-center gap-1">
                <button className="p-1 text-gray-400 hover:bg-gray-50 rounded border border-gray-200">‹</button>
                <button className="px-2.5 py-1 bg-[#1c0094] text-white rounded font-medium">1</button>
                <button className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 rounded border border-gray-200">2</button>
                <button className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 rounded border border-gray-200">3</button>
                <button className="p-1 text-gray-400 hover:bg-gray-50 rounded border border-gray-200">›</button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-slate-500">1,120 Remaining</span>
            </div>
          </div>

          {/* RIGHT AREA: SIDE STATS CARDS */}
          <div className="lg:col-span-4 space-y-4">
            {/* Total Redeemed Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Total Redeemed</p>
                  <h2 className="text-3xl font-black text-[#1a165a] mt-1">2,334</h2>
                </div>
                <div className="bg-blue-50 p-2 rounded text-[#1c0094]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Play size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">Running live</span>
            </div>
          </div>

            {/* Quota Distribution Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide self-start w-full text-left mb-4">Quota Distribution</p>
              <div className="relative w-24 h-24 flex flex-col items-center justify-center border-4 border-dashed border-[#1c0094] rounded-full my-1">
                <span className="text-xl font-extrabold text-[#1a165a]">72%</span>
                <span className="text-[8px] font-bold text-gray-400 tracking-wider uppercase">Utilized</span>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Remaining Quota: <span className="text-gray-900 font-bold">1,120</span>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-3">Quick Stats</h3>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Active Coupons</span>
                  <span className="font-bold text-gray-800">{coupons.filter(c => c.status === "ACTIVE").length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Expired Today</span>
                  <span className="font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded text-xs">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Fraud Alerts</span>
                  <span className="font-bold text-gray-800">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM AREA: INPUT GENERATOR */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-6 p-6">
          <h2 className="font-bold text-gray-800 text-sm md:text-base">Generate Bulk Coupons</h2>
          <p className="text-xs md:text-sm text-gray-400 mt-0.5 mb-5">
            Rapidly create a large set of unique codes tied to specific campaign parameters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Quantity to Generate</label>
              <input type="text" placeholder="e.g. 1000" className="border border-gray-200 rounded p-2 text-xs md:text-sm outline-none bg-gray-50/50 focus:border-[#1c0094]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Code Prefix</label>
              <input type="text" placeholder="e.g. FALL-" className="border border-gray-200 rounded p-2 text-xs md:text-sm outline-none bg-gray-50/50 focus:border-[#1c0094]" />
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
            <p className="text-[11px] text-gray-400">Estimated generation time: ~3 seconds</p>
            <button className="bg-[#1c0094] text-white px-5 py-2 rounded text-xs md:text-sm font-semibold hover:bg-[#150070] transition-colors shadow-sm">
              Start Bulk Generation
            </button>
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
                  className="text-gray-400 hover:text-gray-600 text-lg font-bold"
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
                    className="px-4 py-2 text-xs font-semibold border border-gray-200 rounded text-gray-500 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-emerald-600 text-white rounded hover:bg-emerald-700 shadow-sm"
                  >
                    Save Coupon
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}