import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  ShieldAlert, 
  Search, 
  RefreshCw,
  CheckCircle,
  Clock,
  User,
  Settings,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sliders
} from "lucide-react";

export default function RoleAuditLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [expandedLogId, setExpandedLogId] = useState(null);

  // ==========================================
  // MOCK ROLE AUDIT LOGS DATASET
  // ==========================================
  const [auditLogs, setAuditLogs] = useState([
    { 
      id: "AUDIT-102", 
      admin: "Amit Sharma", 
      roleModified: "Editor / Dispatcher", 
      actionType: "CRITICAL_OVERRIDE", 
      summary: "Granted Full Delete capabilities on Orders Module",
      time: "10 mins ago", 
      date: "24 June 2026",
      oldSchema: { view: true, create: true, edit: true, delete: false },
      newSchema: { view: true, create: true, edit: true, delete: true }
    },
    { 
      id: "AUDIT-101", 
      admin: "Priya Patel", 
      roleModified: "Viewer", 
      actionType: "METADATA_CHANGE", 
      summary: "Updated security level description and tier constraints",
      time: "2 hours ago", 
      date: "24 June 2026",
      oldSchema: { tier: "Restricted" },
      newSchema: { tier: "Standard Operational Staff" }
    },
    { 
      id: "AUDIT-099", 
      admin: "Amit Sharma", 
      roleModified: "Project Manager", 
      actionType: "PERMISSION_REVOKE", 
      summary: "Revoked Export permissions from Inventory Module",
      time: "1 day ago", 
      date: "23 June 2026",
      oldSchema: { view: true, export: true },
      newSchema: { view: true, export: false }
    }
  ]);

  // Toggle Row Expansion on Click
  const toggleRowExpansion = (id) => {
    setExpandedLogId(expandedLogId === id ? null : id);
  };

  // ==========================================
  // FILTER & SEARCH LOGIC
  // ==========================================
  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = 
      log.admin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.roleModified.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.summary.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "ALL") return matchesSearch;
    return matchesSearch && log.actionType === activeFilter;
  });

  return (
    <AdminShell activeTab="RoleAuditLogs">
      <div className="space-y-6 max-w-6xl mx-auto pb-12">
        
        {/* ==========================================
            1. MODERN BREADCRUMB HEADER
           ========================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-950 text-white rounded-xl shadow-xs">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Role Audit Logs</h1>
              <p className="text-xs text-slate-400 font-medium font-sans">Tracks configuration changes, permission overrides, and schema modifications</p>
            </div>
          </div>

          <button 
            onClick={() => alert("Re-fetching RBAC schema configuration history...")}
            className="flex items-center gap-1.5 text-xs font-bold border border-slate-200 bg-white text-slate-600 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-all shadow-3xs cursor-pointer self-start md:self-auto active:scale-95"
          >
            <RefreshCw className="h-3.5 w-3.5 text-indigo-600" />
            Refresh Audit Chain
          </button>
        </div>

        {/* ==========================================
            2. HEALTH METRICS FEATURES
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-950 rounded-xl"><Settings className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Changes</span>
              <span className="text-xl font-black text-indigo-950">142 Structural</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Clock className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Modified This Week</span>
              <span className="text-xl font-black text-indigo-950">12 Updates</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs flex items-center gap-4 border-rose-100 bg-rose-50/10">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><ShieldAlert className="h-5 w-5" /></div>
            <div>
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">Critical Overrides</span>
              <span className="text-xl font-black text-rose-600">3 Flagged</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. FILTERS & SEARCH BAR
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Admin, Role or Summary..."
              className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 p-2.5 focus:outline-none focus:bg-white focus:border-indigo-950 transition-all shadow-3xs"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "ALL", label: "All Changes" },
              { id: "CRITICAL_OVERRIDE", label: "Critical Overrides" },
              { id: "PERMISSION_REVOKE", label: "Revocations" },
              { id: "METADATA_CHANGE", label: "Metadata updates" }
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
            4. INTERACTIVE ACCORDION AUDIT TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  <th className="p-3.5 pl-4 w-28">Change ID</th>
                  <th className="p-3.5">Authorized Admin</th>
                  <th className="p-3.5">Target Role</th>
                  <th className="p-3.5 w-4/12">Modification Summary</th>
                  <th className="p-3.5 text-center">Event Classification</th>
                  <th className="p-3.5 text-right pr-4">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-xs font-semibold text-slate-700">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => {
                    const isExpanded = expandedLogId === log.id;
                    return (
                      <React.Fragment key={log.id}>
                        {/* Main Visible Row (Clickable) */}
                        <tr 
                          onClick={() => toggleRowExpansion(log.id)}
                          className={`hover:bg-slate-50/60 transition-colors cursor-pointer ${isExpanded ? 'bg-indigo-50/20' : ''}`}
                        >
                          <td className="p-3.5 pl-4 font-mono text-[11px] text-indigo-950 font-bold">
                            {log.id}
                          </td>

                          <td className="p-3.5 flex items-center gap-2">
                            <div className="p-1.5 bg-slate-100 rounded-md text-slate-500"><User className="h-3 w-3" /></div>
                            <span className="font-bold text-indigo-950">{log.admin}</span>
                          </td>

                          <td className="p-3.5">
                            <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100/60">{log.roleModified}</span>
                          </td>

                          <td className="p-3.5 text-slate-700 font-medium">
                            <div className="flex items-center justify-between gap-2">
                              <span className="line-clamp-1">{log.summary}</span>
                              {isExpanded ? <ChevronUp className="h-3.5 w-3.5 text-slate-400" /> : <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
                            </div>
                          </td>

                          <td className="p-3.5 text-center">
                            <span className={`text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded ${
                              log.actionType === "CRITICAL_OVERRIDE" ? "bg-rose-600 text-white shadow-3xs" :
                              log.actionType === "PERMISSION_REVOKE" ? "bg-amber-100 text-amber-800" :
                              "bg-slate-100 text-slate-600"
                            }`}>
                              {log.actionType.replace("_", " ")}
                            </span>
                          </td>

                          <td className="p-3.5 text-right pr-4 font-medium text-slate-400 font-sans">
                            <span className="block">{log.time}</span>
                            <span className="text-[10px] text-slate-300 block font-normal mt-0.5">{log.date}</span>
                          </td>
                        </tr>

                        {/* Interactive Dropdown Expansion (Diff Viewer) */}
                        {isExpanded && (
                          <tr className="bg-slate-50/50">
                            <td colSpan="6" className="p-4 border-t border-b border-slate-200/60 pl-8">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-3xs">
                                
                                <div>
                                  <span className="text-[10px] uppercase tracking-wider font-black text-rose-500 block mb-1.5">Pre-Modification State (Old)</span>
                                  <div className="bg-slate-50 rounded-lg p-2.5 font-mono text-[11px] text-slate-500 space-y-1">
                                    {Object.entries(log.oldSchema).map(([key, val]) => (
                                      <div key={key} className="flex justify-between border-b border-slate-100 pb-0.5">
                                        <span>{key}:</span>
                                        <span className="font-bold">{val.toString()}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <span className="text-[10px] uppercase tracking-wider font-black text-emerald-600 block mb-1.5 flex items-center gap-1">
                                    Post-Modification State (New) <ArrowRight className="h-3 w-3" />
                                  </span>
                                  <div className="bg-emerald-50/30 rounded-lg p-2.5 font-mono text-[11px] text-emerald-900 space-y-1 border border-emerald-100/50">
                                    {Object.entries(log.newSchema).map(([key, val]) => (
                                      <div key={key} className="flex justify-between border-b border-emerald-100/30 pb-0.5">
                                        <span>{key}:</span>
                                        <span className="font-black text-emerald-700">{val.toString()}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-slate-400 font-medium font-sans">
                      No structural schema alterations logged in current time window.
                    </td>
                  </tr>
                )}
              </tbody>
            </table></div>
          </div>

          {/* Engine Footer */}
          <div className="p-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono flex justify-between bg-slate-50/20">
            <span>Schema Integrity Sentinel v4.0</span>
            <span className="flex items-center gap-1 text-emerald-600"><CheckCircle className="h-3 w-3" /> Blockchain Ledger Sealed</span>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}