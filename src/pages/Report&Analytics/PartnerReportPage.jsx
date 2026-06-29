import React, { useState, useRef, useEffect } from "react";
import AdminShell from "../../components/layouts/AdminShell";

export default function PartnerReportPage() {
  // 12 Mock items to demonstrate actual functional pagination (4 per page)
  const allPartnersData = [
    { id: 1, name: "Nexus Global ISP", code: "4882-QX", type: "ISP", region: "North America (East)", score: 98.8, uptime: "99.99%", status: "COMPLIANT" },
    { id: 2, name: "Quantum Link BSP", code: "9021-LP", type: "BSP", region: "Europe (Central)", score: 91.4, uptime: "99.92%", status: "COMPLIANT" },
    { id: 3, name: "OpticStream Pro", code: "1125-ZZ", type: "ISP", region: "Asia Pacific (West)", score: 84.2, uptime: "98.45%", status: "WARNING" },
    { id: 4, name: "CloudPath Connect", code: "7731-BC", type: "BSP", region: "North America (West)", score: 96.0, uptime: "99.98%", status: "COMPLIANT" },
    { id: 5, name: "Apex Data System", code: "3341-MK", type: "ISP", region: "Europe (West)", score: 92.5, uptime: "99.81%", status: "COMPLIANT" },
    { id: 6, name: "Delta Network Link", code: "5521-XQ", type: "BSP", region: "South America", score: 79.4, uptime: "97.10%", status: "WARNING" },
    { id: 7, name: "Vortex Carrier Pro", code: "8890-LK", type: "ISP", region: "Asia Pacific (South)", score: 97.2, uptime: "99.95%", status: "COMPLIANT" },
    { id: 8, name: "Beacon Infrastructure", code: "4412-PP", type: "BSP", region: "Africa (North)", score: 95.1, uptime: "99.90%", status: "COMPLIANT" },
    { id: 9, name: "Nova Stream Core", code: "1290-AA", type: "ISP", region: "Middle East", score: 82.0, uptime: "98.11%", status: "WARNING" },
    { id: 10, name: "Matrix Grid Carrier", code: "6672-NN", type: "BSP", region: "Europe (East)", score: 94.8, uptime: "99.88%", status: "COMPLIANT" },
    { id: 11, name: "Zetta Link Systems", code: "2234-BB", type: "ISP", region: "North America (South)", score: 99.1, uptime: "99.99%", status: "COMPLIANT" },
    { id: 12, name: "Strato Pipeline Tech", code: "9910-CC", type: "BSP", region: "Asia Pacific (East)", score: 89.9, uptime: "99.20%", status: "COMPLIANT" }
  ];

  // Component Core States
  const [partners, setPartners] = useState(allPartnersData);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("All Types");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [activeRowMenu, setActiveRowMenu] = useState(null);
  const [dateRange, setDateRange] = useState({ start: "2023-10-01", end: "2023-10-31" });
  const [currentPage, setCurrentPage] = useState(1);

  const filterDropdownRef = useRef(null);
  const headerMenuRef = useRef(null);
  const rowMenuRef = useRef(null);
  const itemsPerPage = 4;

  // Click outside event listener to dismiss dropdown panels safely
  useEffect(() => {
    function handleGlobalClick(event) {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (headerMenuRef.current && !headerMenuRef.current.contains(event.target)) {
        setIsHeaderMenuOpen(false);
      }
      if (rowMenuRef.current && !rowMenuRef.current.contains(event.target)) {
        setActiveRowMenu(null);
      }
    }
    document.addEventListener("mousedown", handleGlobalClick);
    return () => document.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  // Filter Logic Execution Block
  const filteredItems = selectedTypeFilter === "All Types" 
    ? partners 
    : partners.filter(item => item.type === selectedTypeFilter);

  // Pagination Math Variables
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // Dynamic calculations for dynamic display counts
  const currentTotalCount = filteredItems.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setActiveRowMenu(null); // Reset row menu state on navigation change
    }
  };

  const handleActionClick = (actionName, targetName) => {
    alert(`Action executed: [${actionName}] for target entity -> ${targetName}`);
    setIsHeaderMenuOpen(false);
    setActiveRowMenu(null);
  };

  return (
    <AdminShell activeTab="Reports & Analytics">
      <div className="w-full min-h-screen bg-[#f8fafd] p-8 text-slate-700 antialiased font-sans">
        
        {/* TOP TITLE HEADER WITH DATE RANGE & FILTER ACTIONS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Partner Performance Analytics</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              ISP and BSP regional management & quality compliance.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Functional HTML Date Inputs container disguised as custom layout button */}
            {/* <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2.5 py-1 shadow-sm text-xs font-bold text-slate-700 hover:border-gray-300 transition-all">
              <span>📅</span>
              <input 
                type="date" 
                value={dateRange.start} 
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                className="bg-transparent focus:outline-none cursor-pointer text-slate-800"
              />
              <span className="text-gray-300 font-light px-0.5">to</span>
              <input 
                type="date" 
                value={dateRange.end} 
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                className="bg-transparent focus:outline-none cursor-pointer text-slate-800"
              />
            </div> */}
            {/* Fixed Calendar Range Picker */}
{/* <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm h-[40px] overflow-hidden">
  
  {/* Optimized Calendar Range Picker */}
<div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm">
  <span className="text-gray-400">📅</span>

  <div className="relative">
    <input 
      type="date" 
      value={dateRange.start} 
      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
      className="custom-date-input text-xs font-bold text-slate-800 bg-transparent focus:outline-none cursor-pointer w-[90px]"
    />
  </div>
  
  
</div>

{/* CSS to hide the icon but keep the functionality */}
<style jsx>{`
  .custom-date-input::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`}</style>

            {/* Dynamic Segment Filter Dropdown Core Component */}
            <div className="relative" ref={filterDropdownRef}>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-bold shadow-sm transition-colors h-[32px] ${
                  isFilterOpen || selectedTypeFilter !== "All Types" 
                    ? "bg-indigo-50 border-indigo-400 text-indigo-700" 
                    : "bg-white border-gray-200 text-slate-700 hover:bg-gray-50"
                }`}
              >
                <span>⏳</span> {selectedTypeFilter}
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-1.5 bg-white border border-gray-200 rounded-lg shadow-xl py-1 z-50 min-w-[130px] origin-top-right">
                  <div className="px-3 py-1 border-b border-gray-100 text-[9px] font-black text-gray-400 uppercase tracking-wider">Filter Segment</div>
                  {["All Types", "ISP", "BSP"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedTypeFilter(type);
                        setCurrentPage(1); // Force reset view sequence down to safe page boundary
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-bold block transition-colors ${
                        selectedTypeFilter === type ? "bg-[#1d0094] text-white" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {type} {selectedTypeFilter === type && "✓"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TOP ANALYTICS BLOCKS: SCORE CHART & REGIONAL DISTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Left Block: Aggregate Quality Score Chart Layout */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">AGGREGATE QUALITY SCORE</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-black text-[#1d0094] tracking-tight">94.2</span>
                <span className="text-xs font-bold text-emerald-500 inline-flex items-center">↑2.4%</span>
              </div>
              <span className="text-[10px] text-gray-400 font-bold block mt-0.5">vs last month</span>
            </div>

            {/* Custom Multi-shade Violet/Indigo Bar Chart Graphic */}
            <div className="h-28 flex items-end justify-between gap-3 pt-4 px-2">
              <div className="w-[9%] bg-[#ccd0f5] h-[55%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#b3b9f2] h-[65%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#818beb] h-[45%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#4f5de0] h-[78%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#1d0094] h-[70%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#4f5de0] h-[60%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#1d0094] h-[88%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#b3b9f2] h-[58%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#ccd0f5] h-[42%] rounded-t-sm"></div>
              <div className="w-[9%] bg-[#4f5de0] h-[75%] rounded-t-sm"></div>
            </div>
          </div>

          {/* Right Block: Regional Distribution Thumbnail Container */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-3">REGIONAL DISTRIBUTION</span>
              
              <div className="w-full h-36 bg-[#0a111a] rounded-lg overflow-hidden relative border border-slate-800 flex items-center justify-center p-2">
                <svg className="w-full h-full text-emerald-500/20 fill-current opacity-60" viewBox="0 0 200 100">
                  <path d="M20,20 L40,15 L70,25 L90,10 L120,30 L110,60 L80,75 L40,65 L15,45 Z" />
                  <path d="M130,25 L160,20 L180,45 L155,70 L135,55 Z" />
                </svg>
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded border border-gray-100 flex justify-between items-center shadow-sm">
                  <div>
                    <span className="text-[9px] text-slate-800 font-extrabold block">Active Regions</span>
                    <div className="w-24 bg-gray-200 h-1 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-[#1d0094] h-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-slate-900">14 / 20</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FOUR KEY PERFORMANCE METRIC SUB-GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">Total Partners</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">{partners.length}</span>
              <span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded mt-1.5 inline-block">+12 New</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">SLA Compliance</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">98.1%</span>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-3 overflow-hidden">
                <div className="bg-slate-900 h-full" style={{ width: "98.1%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">Avg. Latency</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">24ms</span>
              <span className="text-[9px] text-gray-400 font-bold block mt-2">Target: &lt;30ms</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200/70 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] font-bold text-gray-400">Uptime Rank</span>
            <div className="mt-1">
              <span className="text-2xl font-black text-slate-900 block tracking-tight">Tier 1</span>
              <div className="flex items-center gap-1 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: PARTNER REGISTRY LOG ARCHIVE LOGS */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden" ref={rowMenuRef}>
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
            <h3 className="text-sm font-black text-slate-800 tracking-wide">Partner Registry</h3>
            <div className="flex items-center gap-2 relative" ref={headerMenuRef}>
              
              {/* Text Badge indicator status type configuration */}
              <div className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-md font-bold text-slate-600">
                Segment View: <span className="text-slate-900 font-black">{selectedTypeFilter}</span>
              </div>

              {/* Three dots core control global header settings click menu */}
              <button 
                onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
                className={`p-1 w-7 h-7 border rounded text-slate-500 text-xs flex items-center justify-center font-black ${isHeaderMenuOpen ? "bg-slate-100 text-slate-900" : "bg-white border-gray-200"}`}
              >
                ⋮
              </button>

              {isHeaderMenuOpen && (
                <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-xl py-1 z-50 min-w-[150px] font-bold text-xs text-slate-700">
                  <button onClick={() => handleActionClick("Export Registry Spreadsheet", "All Base")} className="w-full text-left px-4 py-2 hover:bg-slate-50 block">Bulk Export CSV</button>
                  <button onClick={() => handleActionClick("Trigger Pipeline Health Synchronization", "Global Nodes")} className="w-full text-left px-4 py-2 hover:bg-slate-50 block text-indigo-700">Sync Master Logs</button>
                </div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] text-gray-400 border-b border-gray-200/60 uppercase text-[9px] font-black tracking-wider">
                  <th className="py-3 px-6">Partner Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Region</th>
                  <th className="py-3 px-4 text-center">Health Score</th>
                  <th className="py-3 px-4 text-center">Uptime</th>
                  <th className="py-3 px-6 text-right">SLA Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold text-slate-700 bg-white">
                
                {paginatedItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-400 font-medium">No system registry items matched this filter category.</td>
                  </tr>
                ) : (
                  paginatedItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/40 transition-colors group">
                      <td className="py-3.5 px-6 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-slate-100 rounded flex items-center justify-center text-xs font-black text-slate-800 border border-gray-200/60">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-900 block text-xs">{item.name}</span>
                            <span className="text-[10px] text-gray-400 font-medium block">ID: {item.code}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`text-[9px] font-black tracking-wider border px-1.5 py-0.5 rounded uppercase ${
                          item.type === "ISP" ? "bg-indigo-50 border-indigo-100 text-indigo-600" : "bg-teal-50 border-teal-100 text-teal-600"
                        }`}>{item.type}</span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-600">{item.region}</td>
                      <td className="py-3.5 px-4 text-center text-slate-900 font-black">{item.score}</td>
                      <td className="py-3.5 px-4 text-center text-slate-500">{item.uptime}</td>
                      
                      {/* Action Layer Integration over SLA Status cell area */}
                      <td className="py-3.5 px-6 text-right relative">
                        <div className="flex items-center justify-end gap-3">
                          <span className={`text-[9px] font-black tracking-wide px-2 py-0.5 rounded uppercase ${
                            item.status === "COMPLIANT" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"
                          }`}>
                            {item.status}
                          </span>

                          {/* Row Context Options Selector Menu Button */}
                          <button 
                            onClick={() => setActiveRowMenu(activeRowMenu === item.id ? null : item.id)}
                            className="text-gray-400 hover:text-slate-900 font-black tracking-widest px-1 text-sm focus:outline-none"
                          >
                            ⋮
                          </button>
                        </div>

                        {activeRowMenu === item.id && (
                          <div className="absolute right-6 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-1 z-50 min-w-[125px] text-left font-bold text-xs text-slate-700">
                            <button onClick={() => handleActionClick("View Detailed Matrix Node", item.name)} className="w-full text-left px-3 py-1.5 hover:bg-slate-50 block">View Metrics</button>
                            <button onClick={() => handleActionClick("Modify Configuration Profile", item.name)} className="w-full text-left px-3 py-1.5 hover:bg-slate-50 block">Edit Settings</button>
                            <button onClick={() => {
                              setPartners(partners.filter(p => p.id !== item.id));
                              setActiveRowMenu(null);
                            }} className="w-full text-left px-3 py-1.5 hover:bg-rose-50 block text-rose-600">Delete Partner</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}

              </tbody>
            </table>
          </div>

          {/* Table Footer Controls Segment with Fully Operational Pagination Links */}
          <div className="bg-[#f8fafd] border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs font-bold text-gray-400">
            <span>
              Showing {currentTotalCount === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + itemsPerPage, currentTotalCount)} of {currentTotalCount} entries
            </span>
            
            <div className="flex items-center gap-1.5">
              {/* Previous Control Button */}
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-1 px-2.5 bg-white border rounded text-[11px] shadow-sm transition-colors font-bold ${
                  currentPage === 1 ? "text-gray-200 cursor-not-allowed bg-gray-50/50" : "text-slate-700 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              
              {/* Array mapped index pages mapping array matrix */}
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`p-1 px-3 rounded text-[11px] shadow-sm font-extrabold transition-all ${
                      currentPage === pageNum 
                        ? "bg-[#1d0094] border border-transparent text-white" 
                        : "bg-white border border-gray-200 text-slate-700 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Control Button */}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`p-1 px-2.5 bg-white border rounded text-[11px] shadow-sm transition-colors font-bold ${
                  currentPage === totalPages || totalPages === 0 ? "text-gray-200 cursor-not-allowed bg-gray-50/50" : "text-slate-700 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}