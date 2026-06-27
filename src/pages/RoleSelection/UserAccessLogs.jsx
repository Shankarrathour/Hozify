import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Activity, 
  ShieldAlert, 
  Terminal, 
  Smartphone, 
  Globe, 
  Search, 
  Filter, 
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";

export default function UserAccessLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  // ==========================================
  // MOCK ACCESS LOGS DATASET
  // ==========================================
  const [logs, setLogs] = useState([
    { id: "LOG-9021", user: "Amit Sharma", email: "amit.sharma@enterprise.com", role: "Administrator", event: "Master Matrix Updated", ip: "192.168.1.45", location: "Mumbai, IN", time: "Just Now", status: "SUCCESS", severity: "HIGH" },
    { id: "LOG-8940", user: "Rahul Verma", email: "r.verma@enterprise.com", role: "Editor / Dispatcher", event: "Unauthorized Export Blocked", ip: "103.45.22.11", location: "Delhi, IN", time: "12 mins ago", status: "FAILED", severity: "CRITICAL" },
    { id: "LOG-8812", user: "Priya Patel", email: "priya.p@enterprise.com", role: "Project Manager", event: "User Profile Onboarded", ip: "157.34.192.8", location: "Bangalore, IN", time: "1 hour ago", status: "SUCCESS", severity: "LOW" },
    { id: "LOG-8765", user: "Unknown Entity", email: "src_ip_attack@root.io", role: "Guest Node", event: "SSH Root Brute-Force Attempt", ip: "45.221.13.90", location: "Beijing, CN", time: "3 hours ago", status: "FAILED", severity: "CRITICAL" },
    { id: "LOG-8611", user: "Vikram Malhotra", email: "v.malhotra@enterprise.com", role: "Viewer", event: "System Heatmaps Viewed", ip: "122.160.43.2", location: "Bhopal, IN", time: "5 hours ago", status: "SUCCESS", severity: "LOW" },
    { id: "LOG-8590", user: "Rahul Verma", email: "r.verma@enterprise.com", role: "Editor / Dispatcher", event: "Session Token Refreshed", ip: "103.45.22.11", location: "Delhi, IN", time: "1 day ago", status: "WARNING", severity: "MEDIUM" }
  ]);

  // ==========================================
  // FILTER & SEARCH LOGIC
  // ==========================================
  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "ALL") return matchesSearch;
    if (activeFilter === "FAILED") return matchesSearch && log.status === "FAILED";
    if (activeFilter === "CRITICAL") return matchesSearch && log.severity === "CRITICAL";
    if (activeFilter === "SUCCESS") return matchesSearch && log.status === "SUCCESS";
    return matchesSearch;
  });

  return (
    <AdminShell activeTab="UserAccessLogs">
      <div className="space-y-6 max-w-6xl mx-auto pb-12">
        
        {/* ==========================================
            1. MODERN BREADCRUMB HEADER
           ========================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-950 text-white rounded-xl shadow-xs">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Security Access Logs</h1>
              <p className="text-xs text-slate-400 font-medium font-sans">Real-time audit trails and infrastructure authentication records</p>
            </div>
          </div>

          <button 
            onClick={() => alert("Re-fetching and synchronizing system logs...")}
            className="flex items-center gap-1.5 text-xs font-bold border border-slate-200 bg-white text-slate-600 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-all shadow-3xs cursor-pointer self-start md:self-auto active:scale-95"
          >
            <RefreshCw className="h-3.5 w-3.5 text-indigo-600" />
            Sync Live Trails
          </button>
        </div>

        {/* ==========================================
            2. TOP ANALYTICAL CARDS FEATURE
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-950 rounded-xl"><Globe className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Unique IP Nodes</span>
              <span className="text-xl font-black text-indigo-950">14 Active</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><CheckCircle className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Auth Passing Rate</span>
              <span className="text-xl font-black text-indigo-950">98.2%</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs flex items-center gap-4 border-rose-100 bg-rose-50/10">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><ShieldAlert className="h-5 w-5 animate-pulse" /></div>
            <div>
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">Critical Blocks</span>
              <span className="text-xl font-black text-rose-600">2 Alerts</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. INTERACTIVE FILTERS & SEARCH BAR
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Operator, Event or Log ID..."
              className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 p-2.5 focus:outline-none focus:bg-white focus:border-indigo-950 transition-all shadow-3xs"
            />
          </div>

          {/* Pill Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "ALL", label: "All Logs" },
              { id: "FAILED", label: "Failed Attempts" },
              { id: "CRITICAL", label: "Critical Severity" },
              { id: "SUCCESS", label: "Success Trails" }
            ].map(pill => (
              <button
                key={pill.id}
                onClick={() => setActiveFilter(pill.id)}
                className={`text-[11px] font-bold px-3 py-2 rounded-xl border transition-all cursor-pointer ${
                  activeFilter === pill.id 
                    ? "bg-indigo-950 text-white border-indigo-950 shadow-3xs" 
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

        </div>

        {/* ==========================================
            4. MINIMALIST AUDIT TRAIL TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  <th className="p-3.5 pl-4 w-28">Log ID</th>
                  <th className="p-3.5">Operator Identity</th>
                  <th className="p-3.5 w-3/12">Action / Event</th>
                  <th className="p-3.5">Network Node (IP)</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-center">Severity</th>
                  <th className="p-3.5 text-right pr-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-xs font-semibold text-slate-700">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/40 transition-colors">
                      {/* Log ID Badge */}
                      <td className="p-3.5 pl-4 font-mono text-[11px] text-indigo-950 font-bold">
                        {log.id}
                      </td>

                      {/* User Info Stack */}
                      <td className="p-3.5">
                        <span className="font-bold text-indigo-950 block">{log.user}</span>
                        <span className="text-[10px] text-slate-400 font-medium font-sans block mt-0.5">{log.email}</span>
                      </td>

                      {/* Event Detail */}
                      <td className="p-3.5 text-slate-800 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Activity className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                          <span className="line-clamp-1">{log.event}</span>
                        </div>
                      </td>

                      {/* IP & Location */}
                      <td className="p-3.5 font-sans">
                        <span className="font-mono text-slate-600 block">{log.ip}</span>
                        <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{log.location}</span>
                      </td>

                      {/* Status Dynamic Badge */}
                      <td className="p-3.5 text-center">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          log.status === "SUCCESS" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                          log.status === "FAILED" ? "bg-rose-50 text-rose-600 border border-rose-100" :
                          "bg-amber-50 text-amber-700 border border-amber-100"
                        }`}>
                          {log.status === "SUCCESS" && <CheckCircle className="h-2.5 w-2.5 stroke-[3]" />}
                          {log.status === "FAILED" && <XCircle className="h-2.5 w-2.5 stroke-[3]" />}
                          {log.status === "WARNING" && <AlertTriangle className="h-2.5 w-2.5 stroke-[3]" />}
                          {log.status}
                        </span>
                      </td>

                      {/* Severity Color System */}
                      <td className="p-3.5 text-center">
                        <span className={`text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded ${
                          log.severity === "CRITICAL" ? "bg-rose-600 text-white shadow-3xs" :
                          log.severity === "HIGH" ? "bg-orange-500 text-white" :
                          log.severity === "MEDIUM" ? "bg-amber-100 text-amber-800" :
                          "bg-slate-100 text-slate-500"
                        }`}>
                          {log.severity}
                        </span>
                      </td>

                      {/* Time ago */}
                      <td className="p-3.5 text-right pr-4 font-medium text-slate-400 font-sans">
                        {log.time}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-slate-400 font-medium font-sans">
                      No matching authentication logs discovered in active database registers.
                    </td>
                  </tr>
                )}
              </tbody>
            </table></div>
          </div>

          {/* Engine Footer */}
          <div className="p-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono flex justify-between bg-slate-50/20">
            <span>Audit Engine v2.0 // Active Listener</span>
            <span>Real-time Log Buffer Connected</span>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}