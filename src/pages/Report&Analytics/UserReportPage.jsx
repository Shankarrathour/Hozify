import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function SettlementReport() {
  const settlementLogs = [
    { id: "STL-01923-X", merchant: "Aura Zero Retail", initials: "AZ", avatarBg: "bg-[#1e1b4b]", date: "Oct 24, 2023 09:12 AM", amount: "$12,450.00", status: "SUCCESS", statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-100" },
    { id: "STL-90122-Y", merchant: "Blue Line Logistics", initials: "BL", avatarBg: "bg-sky-100 text-sky-700", date: "Oct 24, 2023 08:45 AM", amount: "$8,122.50", status: "PENDING", statusStyle: "bg-amber-50 text-amber-600 border border-amber-100" },
    { id: "STL-90121-Z", merchant: "Nova Kitchens", initials: "NK", avatarBg: "bg-slate-200 text-slate-700", date: "Oct 23, 2023 11:20 PM", amount: "$3,900.00", status: "FAILED", statusStyle: "bg-rose-50 text-rose-500 border border-rose-100" },
    { id: "STL-90120-W", merchant: "Evolve Fitness", initials: "EV", avatarBg: "bg-[#120e3a] text-white", date: "Oct 23, 2023 04:30 PM", amount: "$15,700.00", status: "SUCCESS", statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-100" },
  ];

  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [selectedDate, setSelectedDate] = useState("Last 30 Days");
  
  // Popup States
  const [showPopup, setShowPopup] = useState(false);
  const [activeLog, setActiveLog] = useState(null);

  const filteredLogs = settlementLogs.filter((log) => {
    return selectedStatus === "ALL" ? true : log.status === selectedStatus;
  });

  const openStrategy = (log) => {
    setActiveLog(log);
    setShowPopup(true);
  };

  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-6 text-slate-800 antialiased">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-[#1a165a]">Settlement Reports</h1>
            <p className="text-xs text-gray-400 mt-0.5">Real-time status of merchant fund transfers.</p>
          </div>
          
          <div className="flex items-center gap-2 relative">
            {/* DATE PICKER */}
            <div className="relative group">
              <input 
                type="date" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold border border-gray-200 bg-white rounded text-slate-600 hover:bg-gray-50 shadow-sm">
                {selectedDate}
              </button>
            </div>

            <button onClick={() => setShowFilter(!showFilter)} className="px-3 py-1.5 text-xs font-semibold border border-gray-200 bg-white rounded text-slate-600 shadow-sm">
              Filters
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#f8fafd] border-b text-[10px] uppercase font-bold text-gray-400">
                <th className="p-4">Settlement ID</th>
                <th className="p-4">Merchant</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{log.id}</td>
                  <td className="p-4">{log.merchant}</td>
                  <td className="p-4">{log.status}</td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => openStrategy(log)}
                      className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                      View Strategy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* POPUP MODAL (Fixes: Z-Index 9999) */}
        {showPopup && activeLog && (
          <div style={{ zIndex: 9999 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg w-80 shadow-2xl">
              <h2 className="text-sm font-bold mb-2">Strategy for: {activeLog.merchant}</h2>
              <p className="text-xs text-gray-600 mb-4">ID: {activeLog.id}</p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-2 bg-gray-800 text-white rounded text-xs"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}