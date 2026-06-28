import React from "react";
import { QRCodeSVG } from "qrcode.react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";

export default function QRManagementPage() {
  const { addToast } = useToast();

  const qrCampaigns = [
    {
      name: "Summer 2024 Campaign",
      status: "Active",
      scans: "12.4K",
      conv: "4.2%",
      url: "https://hozify.com/referral/summer2024",
      bgColor: "bg-[#192231]",
      qrColor: "#192231",
    },
    {
      name: "VIP Partner QR",
      status: "Active",
      scans: "8.2K",
      conv: "6.8%",
      url: "https://hozify.com/referral/vippartner",
      bgColor: "bg-[#0b2434]",
      qrColor: "#0b2434",
    },
    {
      name: "Holiday Blitz",
      status: "Paused",
      scans: "42.1K",
      conv: "3.1%",
      url: "https://hozify.com/referral/holidayblitz",
      bgColor: "bg-[#062e24]",
      qrColor: "#062e24",
    },
  ];

  return (
    <AdminShell activeTab="Referrals">
      <div className="w-full min-h-screen bg-[#f8fafd] p-6 text-slate-800 antialiased">
        
        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-black text-[#1a165a]">QR Management</h1>
            <p className="text-xs text-gray-505 mt-0.5">
              Track, manage, and download campaign-specific referral QR codes.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => addToast("Opening QR configuration filters...", "success")}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold border border-gray-250 bg-white rounded text-slate-650 hover:bg-gray-50 shadow-sm transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filter</span>
            </button>
            <button 
              onClick={() => addToast("Launching QR generation wizard console...", "success")}
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold bg-[#1a0dab] hover:bg-[#130985] text-white rounded shadow-sm transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              <span>Generate New QR</span>
            </button>
          </div>
        </div>

        {/* METRICS TOP 3-CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div 
            onClick={() => addToast("Card clicked: Total QR Scans details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 block">Total QR Scans</span>
              <h2 className="text-lg font-black text-slate-900 mt-1">124,802</h2>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[9px] font-bold text-emerald-500">
              <span>↗ +12.4%</span>
              <span className="text-gray-400 font-semibold text-[8px] uppercase tracking-normal">from last month</span>
            </div>
          </div>

          <div 
            onClick={() => addToast("Card clicked: QR-to-Referral conversion details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 block">QR-to-Referral Conversion</span>
              <h2 className="text-lg font-black text-slate-900 mt-1">18.2%</h2>
            </div>
            <div className="flex items-center justify-between mt-2 w-full">
              <span className="text-[9px] text-slate-400 font-semibold">CSAT Benchmark: 12%</span>
              <div className="w-12 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-700 w-2/3 rounded-full"></div>
              </div>
            </div>
          </div>

          <div 
            onClick={() => addToast("Card clicked: Active QR codes list", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 block">Active QR Codes</span>
              <h2 className="text-lg font-black text-slate-900 mt-1">42</h2>
            </div>
            <div className="flex items-center mt-2 -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1c0094] border border-white text-[8px] font-black text-white flex items-center justify-center">S</div>
              <div className="w-5 h-5 rounded-full bg-slate-800 border border-white text-[8px] font-black text-white flex items-center justify-center">W</div>
              <div className="w-5 h-5 rounded-full bg-indigo-900 border border-white text-[8px] font-black text-white flex items-center justify-center">E</div>
              <div className="w-5 h-5 rounded-full bg-gray-100 border border-white text-[8px] font-black text-gray-500 flex items-center justify-center">+39</div>
            </div>
          </div>
        </div>

        {/* ACTIVE QR CODES GALLERY */}
        <div className="mb-8 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-[#58647a]">Active QR Codes Gallery</h3>
            <button 
              onClick={() => addToast("Opening full QR codes inventory list...", "success")}
              className="text-xs font-bold text-[#1a0dab] hover:text-[#130985] cursor-pointer flex items-center gap-1 transition-all"
            >
              <span>View All</span>
              <span>➔</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {qrCampaigns.map((campaign, index) => (
              <div 
                key={index} 
                onClick={() => addToast(`Opening config options for ${campaign.name}`, "success")}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-all"
              >
                <div className={`${campaign.bgColor} p-6 flex justify-center items-center aspect-[4/3]`}>
                  <div className="bg-white p-2 rounded-xl shadow-md flex items-center justify-center">
                    <QRCodeSVG 
                      value={campaign.url} 
                      size={64} 
                      fgColor={campaign.qrColor}
                      bgColor="#ffffff"
                      level="H"
                    />
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100 bg-white">
                  <div className="flex justify-between items-center gap-1">
                    <h4 className="text-xs font-extrabold text-slate-900 leading-tight">{campaign.name}</h4>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${
                      campaign.status === "Active" ? "bg-[#ecfdf5] text-[#10b981]" : "bg-slate-100 text-slate-500"
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tight">
                    SCANS: {campaign.scans} • CONV: {campaign.conv}
                  </p>
                </div>
              </div>
            ))}

            {/* Box 4: Generate New Card */}
            <div 
              onClick={() => addToast("Launching QR creation modal wizard...", "success")}
              className="border-2 border-dashed border-gray-200 hover:border-indigo-300 rounded-xl flex flex-col items-center justify-center p-6 text-center bg-white/50 cursor-pointer transition-all aspect-[4/3]"
            >
              <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-2">
                ＋
              </div>
              <h4 className="text-xs font-bold text-slate-800">Generate New Code</h4>
              <p className="text-[10px] text-gray-400 mt-1 max-w-[140px] leading-snug">Create a custom tracking QR for your next campaign</p>
            </div>
          </div>
        </div>

        {/* DETAILED DATA TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Detailed QR Metrics</h3>
            <button 
              onClick={() => addToast("Exporting detailed QR codes analytics report...", "success")}
              className="text-xs font-bold text-indigo-705 hover:text-indigo-900 flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export Report</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#f5f7fc] text-gray-400 uppercase text-[10px] font-bold tracking-wider border-b border-gray-200">
                  <th className="p-4 pl-6">Campaign Name</th>
                  <th className="p-4">Unique Scans</th>
                  <th className="p-4">Total Scans</th>
                  <th className="p-4">CTR</th>
                  <th className="p-4 text-center pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-slate-705 font-medium">
                <tr 
                  onClick={() => addToast("Opening QR scan statistics for Summer Referral 2024", "success")}
                  className="hover:bg-slate-50/50 transition-all cursor-pointer"
                >
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-indigo-50 text-[#1a0dab] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01" />
                      </svg>
                    </div>
                    <span className="font-bold text-slate-800">Summer Referral 2024</span>
                  </td>
                  <td className="p-4 text-gray-500 font-semibold">9,420</td>
                  <td className="p-4 text-gray-500 font-semibold">12,482</td>
                  <td className="p-4">
                    <span className="bg-emerald-50 text-emerald-650 px-2 py-0.5 rounded font-bold text-[10px]">4.2%</span>
                  </td>
                  <td className="p-4 text-center pr-6 font-bold text-gray-400 hover:text-gray-650" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => addToast("Opening options dropdown menu for Summer Referral 2024", "success")}
                      className="cursor-pointer"
                    >
                      •••
                    </button>
                  </td>
                </tr>

                <tr 
                  onClick={() => addToast("Opening QR scan statistics for VIP Partner Program", "success")}
                  className="hover:bg-slate-50/50 transition-all cursor-pointer"
                >
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-indigo-50 text-[#1a0dab] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01" />
                      </svg>
                    </div>
                    <span className="font-bold text-slate-800">VIP Partner Program</span>
                  </td>
                  <td className="p-4 text-gray-500 font-semibold">5,210</td>
                  <td className="p-4 text-gray-500 font-semibold">8,204</td>
                  <td className="p-4">
                    <span className="bg-emerald-50 text-emerald-650 px-2 py-0.5 rounded font-bold text-[10px]">6.8%</span>
                  </td>
                  <td className="p-4 text-center pr-6 font-bold text-gray-400 hover:text-gray-650" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => addToast("Opening options dropdown menu for VIP Partner Program", "success")}
                      className="cursor-pointer"
                    >
                      •••
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}