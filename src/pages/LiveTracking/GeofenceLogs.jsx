import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Search, 
  Download, 
  RefreshCw, 
  FileText, 
  AlertOctagon, 
  LogIn, 
  LogOut,
  ArrowUpDown
} from "lucide-react";

export default function GeofenceLogs() {
  // ==========================================
  // MASTER GEOFENCE AUDIT TRAIL LOGS DATA
  // ==========================================
  const [logs, setLogs] = useState([
    {
      id: "LOG-9081",
      timestamp: "2026-06-24 14:22:10",
      assetId: "VT-9928",
      driver: "Marcus King",
      geofenceName: "Restricted Zone A-4",
      eventType: "UNAUTHORIZED ENTRY",
      severity: "Critical",
      dwellTime: "00:00:00", 
      status: "Flagged"
    },
    {
      id: "LOG-9080",
      timestamp: "2026-06-24 14:15:32",
      assetId: "VT-1044",
      driver: "Sarah Reed",
      geofenceName: "Downtown Logistics Hub",
      eventType: "ZONE EXIT",
      severity: "Normal",
      dwellTime: "02:45:12",
      status: "Resolved"
    },
    {
      id: "LOG-9079",
      timestamp: "2026-06-24 13:58:04",
      assetId: "VT-4412",
      driver: "James Liao",
      geofenceName: "Warehouse Perimeter",
      eventType: "ZONE ENTRY",
      severity: "Normal",
      dwellTime: "00:12:44",
      status: "Logged"
    },
    {
      id: "LOG-9078",
      timestamp: "2026-06-24 13:11:45",
      assetId: "VT-0811",
      driver: "Alex Wong",
      geofenceName: "Port Entrance Gate 2",
      eventType: "UNAUTHORIZED ENTRY",
      severity: "High",
      dwellTime: "00:04:15",
      status: "Investigating"
    },
    {
      id: "LOG-9077",
      timestamp: "2026-06-24 12:40:22",
      assetId: "VT-3319",
      driver: "David Vance",
      geofenceName: "Cold Storage Ring",
      eventType: "ZONE EXIT",
      severity: "Normal",
      dwellTime: "05:10:30",
      status: "Resolved"
    }
  ]);

  // ==========================================
  // INTERACTIVE FILTER STATES
  // ==========================================
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedCard, setSelectedCard] = useState("All"); 

  // Filter Logic
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch = 
        log.assetId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.geofenceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSeverity = severityFilter === "All" || log.severity === severityFilter;
      const matchesType = typeFilter === "All" || log.eventType === typeFilter;
      
      let matchesCard = true;
      if (selectedCard === "Critical") matchesCard = log.severity === "Critical" || log.severity === "High";
      if (selectedCard === "Entries") matchesCard = log.eventType.includes("ENTRY");
      if (selectedCard === "Exits") matchesCard = log.eventType.includes("EXIT");

      return matchesSearch && matchesSeverity && matchesType && matchesCard;
    });
  }, [logs, searchQuery, severityFilter, typeFilter, selectedCard]);

  return (
    <AdminShell activeTab="Geofence Logs">
      <div className="space-y-4">
        
        {/* ==========================================
            1. CLEAN PAGE HEADER (No duplicate topbar items)
           ========================================== */}
        <div className="bg-white pb-2">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Geofence Activity Logs</h1>
          <p className="text-xs text-slate-500 mt-0.5">Comprehensive audit trail of historical zone entries, exits, and security perimeter breaches.</p>
        </div>

        {/* ==========================================
            2. CLICKABLE QUICK-FILTER METRICS CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div 
            onClick={() => setSelectedCard("All")}
            className={`p-4 rounded-xl border transition-all cursor-pointer shadow-2xs flex items-center justify-between ${
              selectedCard === "All" ? "bg-indigo-950 text-white border-indigo-950" : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${selectedCard === "All" ? "text-slate-300" : "text-slate-400"}`}>
                Total Logged Events
              </span>
              <h3 className="text-2xl font-black mt-1">{logs.length} Actions</h3>
            </div>
            <div className={`p-3 rounded-xl ${selectedCard === "All" ? "bg-white/10 text-white" : "bg-indigo-50 text-indigo-950"}`}>
              <FileText className="h-5 w-5" />
            </div>
          </div>

          <div 
            onClick={() => setSelectedCard("Critical")}
            className={`p-4 rounded-xl border transition-all cursor-pointer shadow-2xs flex items-center justify-between ${
              selectedCard === "Critical" ? "bg-rose-600 text-white border-rose-600" : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${selectedCard === "Critical" ? "text-rose-100" : "text-slate-400"}`}>
                Critical Violations
              </span>
              <h3 className="text-2xl font-black mt-1">
                {logs.filter(l => l.severity === "Critical" || l.severity === "High").length} Alerts
              </h3>
            </div>
            <div className={`p-3 rounded-xl ${selectedCard === "Critical" ? "bg-white/20 text-white" : "bg-rose-50 text-rose-600"}`}>
              <AlertOctagon className="h-5 w-5" />
            </div>
          </div>

          <div 
            onClick={() => setSelectedCard("Entries")}
            className={`p-4 rounded-xl border transition-all cursor-pointer shadow-2xs flex items-center justify-between ${
              selectedCard === "Entries" ? "bg-indigo-950 text-white border-indigo-950" : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${selectedCard === "Entries" ? "text-slate-300" : "text-slate-400"}`}>
                Zone Entry Sweeps
              </span>
              <h3 className="text-2xl font-black mt-1">
                {logs.filter(l => l.eventType.includes("ENTRY")).length} Check-ins
              </h3>
            </div>
            <div className={`p-3 rounded-xl ${selectedCard === "Entries" ? "bg-white/10 text-white" : "bg-emerald-50 text-emerald-600"}`}>
              <LogIn className="h-5 w-5" />
            </div>
          </div>

          <div 
            onClick={() => setSelectedCard("Exits")}
            className={`p-4 rounded-xl border transition-all cursor-pointer shadow-2xs flex items-center justify-between ${
              selectedCard === "Exits" ? "bg-indigo-950 text-white border-indigo-950" : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${selectedCard === "Exits" ? "text-slate-300" : "text-slate-400"}`}>
                Zone Exit Sweeps
              </span>
              <h3 className="text-2xl font-black mt-1">
                {logs.filter(l => l.eventType.includes("EXIT")).length} Check-outs
              </h3>
            </div>
            <div className={`p-3 rounded-xl ${selectedCard === "Exits" ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}>
              <LogOut className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* ==========================================
            3. INTERACTIVE CONTROL FILTER BAR
           ========================================== */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            
            {/* Search Box */}
            <div className="relative min-w-[240px]">
              <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search by Asset ID, Driver, or Gate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:bg-white focus:border-indigo-950 transition-all"
              />
            </div>

            {/* Severity Filter */}
            <select 
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All">Severity: All</option>
              <option value="Critical">Critical Only</option>
              <option value="High">High</option>
              <option value="Normal">Normal</option>
            </select>

            {/* Event Type Filter */}
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All">Event: All Actions</option>
              <option value="UNAUTHORIZED ENTRY">Unauthorized Entry</option>
              <option value="ZONE ENTRY">Standard Entry</option>
              <option value="ZONE EXIT">Standard Exit</option>
            </select>
          </div>

          {/* Action Tools (Export) */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-2 md:pt-0 border-slate-100">
            <button 
              onClick={() => alert("Downloading formatted CSV database dump of currently filtered logs row entries...")}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-3xs"
            >
              <Download className="h-3.5 w-3.5 text-slate-500" />
              <span>Download CSV</span>
            </button>
            <button 
              onClick={() => { setSearchQuery(""); setSeverityFilter("All"); setTypeFilter("All"); setSelectedCard("All"); }}
              className="p-1.5 border border-slate-200 text-slate-500 rounded-lg bg-white hover:bg-slate-50 transition-colors"
              title="Reset Filters"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* ==========================================
            4. AUDIT DATA-GRID MATRIX TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 font-black uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4 flex items-center gap-1">Log ID <ArrowUpDown className="h-3 w-3" /></th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Fleet Asset / Driver</th>
                  <th className="py-3 px-4">Geofence Location Zone</th>
                  <th className="py-3 px-4">Activity Event Type</th>
                  <th className="py-3 px-4">Dwell Time</th>
                  <th className="py-3 px-4 text-right">Operational Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-indigo-950">{log.id}</td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono">{log.timestamp}</td>
                      <td className="py-3.5 px-4">
                        <strong className="text-slate-900 font-extrabold block font-mono">🚚 {log.assetId}</strong>
                        <span className="text-[11px] text-slate-400 block">{log.driver}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-slate-800 font-semibold block">{log.geofenceName}</span>
                        <span className={`inline-block text-[9px] font-black px-1.5 py-0.2 rounded mt-0.5 ${
                          log.severity === "Critical" ? "bg-rose-50 text-rose-600 border border-rose-100" :
                          log.severity === "High" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                          "bg-slate-100 text-slate-500"
                        }`}>
                          {log.severity} Threat
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase ${
                          log.eventType.includes("UNAUTHORIZED") ? "bg-rose-50 text-rose-600" :
                          log.eventType.includes("EXIT") ? "bg-blue-50 text-blue-600" :
                          "bg-emerald-50 text-emerald-600"
                        }`}>
                          {log.eventType.includes("UNAUTHORIZED") ? "⚠️" : log.eventType.includes("EXIT") ? "🛫" : "🛬"}
                          {log.eventType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-600">
                        {log.dwellTime === "00:00:00" ? (
                          <span className="text-rose-500 animate-pulse font-semibold">Just Breached</span>
                        ) : log.dwellTime}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button 
                          onClick={() => alert(`Opening Incident Timeline context for reference ${log.id}`)}
                          className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                            log.status === "Flagged" ? "bg-rose-600 text-white border-rose-600 shadow-3xs" :
                            log.status === "Investigating" ? "bg-amber-50 text-amber-700 border-amber-200" :
                            log.status === "Resolved" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                            "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {log.status}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-slate-400 font-bold bg-slate-50/50">
                      No activity logs found matching the selected filter criteria parameters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] font-bold text-slate-400 text-right">
            Showing <strong className="text-slate-700">{filteredLogs.length}</strong> of {logs.length} audit string objects
          </div>
        </div>

      </div>
    </AdminShell>
  );
}