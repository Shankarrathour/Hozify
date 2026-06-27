import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function CouponManagementPage() {
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
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-white border border-gray-300 rounded text-gray-700 shadow-sm hover:bg-gray-50">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Data
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold bg-[#1c0094] text-white rounded shadow-sm hover:bg-[#150070]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Generate Bulk Coupons
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION - TABLE & SIDEBAR CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT AREA: TABLE BLOCK */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-bold text-sm text-gray-800">Active Coupons</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>

            {/* DATA TABLE */}
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
                  {/* Row 1 */}
                  <tr>
                    <td className="p-4 font-bold text-[#1c0094]">SUMMER-REF-2024</td>
                    <td className="p-4"><span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded">ACTIVE</span></td>
                    <td className="p-4 text-gray-500">500</td>
                    <td className="p-4 text-gray-500">Aug 30, 2024</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3 w-36">
                        <span className="font-bold text-gray-800">342</span>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#1c0094]" style={{ width: "68%" }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-400 cursor-pointer hover:text-gray-600">•••</td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="p-4 font-bold text-[#1c0094]">WELCOME-10-OFF</td>
                    <td className="p-4"><span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded">ACTIVE</span></td>
                    <td className="p-4 text-gray-500">Unlimited</td>
                    <td className="p-4 text-gray-400">No Expiry</td>
                    <td className="p-4">
                      <div className="flex items-center w-36">
                        <span className="font-bold text-gray-800">1,892</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-400 cursor-pointer hover:text-gray-600">•••</td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="p-4 font-bold text-[#1c0094]">FLASH-SALES-B2B</td>
                    <td className="p-4"><span className="text-[10px] font-bold bg-red-50 text-red-500 px-2 py-0.5 rounded">EXPIRED</span></td>
                    <td className="p-4 text-gray-500">100</td>
                    <td className="p-4 text-red-500 font-semibold">Jul 15, 2024</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3 w-36">
                        <span className="font-bold text-gray-800">100</span>
                        <div className="h-1.5 w-full bg-red-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-400 cursor-pointer hover:text-gray-600">•••</td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="p-4 font-bold text-[#1c0094]">PARTNER-PERK-A1</td>
                    <td className="p-4"><span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded">SCHEDULED</span></td>
                    <td className="p-4 text-gray-500">50</td>
                    <td className="p-4 text-gray-500">Dec 31, 2024</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3 w-36">
                        <span className="font-bold text-gray-400">0</span>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gray-200" style={{ width: "0%" }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-gray-400 cursor-pointer hover:text-gray-600">•••</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TABLE PAGINATION */}
            <div className="flex justify-between items-center p-4 border-t border-gray-100 text-xs text-gray-400 bg-white rounded-b-lg">
              <p>Showing 1 to 4 of 42 coupons</p>
              <div className="flex items-center gap-1">
                <button className="p-1 text-gray-400 hover:bg-gray-50 rounded border border-gray-200">
                  ‹
                </button>
                <button className="px-2.5 py-1 bg-[#1c0094] text-white rounded font-medium">1</button>
                <button className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 rounded border border-gray-200">2</button>
                <button className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 rounded border border-gray-200">3</button>
                <button className="p-1 text-gray-400 hover:bg-gray-50 rounded border border-gray-200">
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT AREA: SIDE STATS CARDS */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* TOTAL REDEEMED */}
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
              <div className="flex items-center gap-2 mt-4 pt-2 border-t border-gray-50">
                <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">~12.5%</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Top Source: Summer Referral</span>
              </div>
            </div>

            {/* QUOTA DISTRIBUTION */}
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

            {/* QUICK STATS */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-3">Quick Stats</h3>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Active Coupons</span>
                  <span className="font-bold text-gray-800">32</span>
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
          <h2 className="font-bold text-gray-800 text-sm md:text-base">
            Generate Bulk Coupons
          </h2>
          <p className="text-xs md:text-sm text-gray-400 mt-0.5 mb-5">
            Rapidly create a large set of unique codes tied to specific campaign parameters. Ideal for offline marketing or partner handouts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Quantity to Generate</label>
              <input
                type="text"
                placeholder="e.g. 1000"
                className="border border-gray-200 rounded p-2 text-xs md:text-sm outline-none bg-gray-50/50 focus:border-[#1c0094]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Code Prefix</label>
              <input
                type="text"
                placeholder="e.g. FALL-"
                className="border border-gray-200 rounded p-2 text-xs md:text-sm outline-none bg-gray-50/50 focus:border-[#1c0094]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Campaign Association</label>
              <select className="border border-gray-200 rounded p-2 text-xs md:text-sm bg-white outline-none focus:border-[#1c0094] text-gray-600">
                <option>Summer 2024 Launch</option>
                <option>Winter Campaign</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-6 pt-4 border-t border-gray-100">
            <p className="text-[11px] text-gray-400">
              Estimated generation time: ~3 seconds
            </p>
            <button className="bg-[#1c0094] text-white px-5 py-2 rounded text-xs md:text-sm font-semibold hover:bg-[#150070] transition-colors shadow-sm self-end sm:self-auto">
              Start Bulk Generation
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}