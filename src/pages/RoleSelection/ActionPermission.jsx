import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Zap, 
  ShieldCheck, 
  Lock, 
  Save, 
  CheckCircle, 
  AlertCircle,
  Fingerprint,
  Info
} from "lucide-react";

export default function ActionPermissions() {
  // ==========================================
  // ROLES & DYNAMIC ACTION DATA
  // ==========================================
  const systemRoles = ["Administrator", "Project Manager", "Editor / Dispatcher", "Field Agent"];
  const [selectedRole, setSelectedRole] = useState("Project Manager");
  const [isSaved, setIsSaved] = useState(false);

  // Deep interaction dataset for explicit granular actions
  const [roleActions, setRoleActions] = useState({
    "Administrator": { csvExport: true, deleteLogs: true, triggerSOS: true, bypassAuth: true, modifyTheme: true },
    "Project Manager": { csvExport: true, deleteLogs: false, triggerSOS: true, bypassAuth: false, modifyTheme: true },
    "Editor / Dispatcher": { csvExport: true, deleteLogs: false, triggerSOS: true, bypassAuth: false, modifyTheme: false },
    "Field Agent": { csvExport: false, deleteLogs: false, triggerSOS: true, bypassAuth: false, modifyTheme: false },
  });

  // Action blueprint categorised by impact tier
  const actionCategories = [
    {
      categoryName: "Data & Auditing Actions",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      items: [
        { id: "csvExport", title: "Bulk CSV / Excel Export", desc: "Allows downloading systemic spreadsheets and historical logs to external drives." },
        { id: "deleteLogs", title: "Purge System History", desc: "Permanently erases database audit logs older than 30 days (High Risk).", isCritical: true }
      ]
    },
    {
      categoryName: "Operational Override Actions",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      items: [
        { id: "triggerSOS", title: "Global Emergency Trigger", desc: "Broadcasts forceful SOS panic beacons to all synchronized dispatcher shells instantly." },
        { id: "bypassAuth", title: "Bypass Dual-Factor (2FA)", desc: "Enables session continuation without active hardware token verification.", isCritical: true }
      ]
    },
    {
      categoryName: "Platform Workspace Customization",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      items: [
        { id: "modifyTheme", title: "Global Layout Refactoring", desc: "Permits runtime modification of global sidebar layouts and component micro-themes." }
      ]
    }
  ];

  // ==========================================
  // INTERACTIVE CLICK HANDLERS
  // ==========================================
  
  // Toggle individual action checkbox clickably
  const handleToggleAction = (actionId) => {
    setRoleActions(prev => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [actionId]: !prev[selectedRole][actionId]
      }
    }));
    setIsSaved(false);
  };

  // Quick Action: Grant or Revoke everything for the current role
  const handleMassToggleActions = (grantAll) => {
    const updatedState = { ...roleActions[selectedRole] };
    Object.keys(updatedState).forEach(key => {
      updatedState[key] = grantAll;
    });

    setRoleActions(prev => ({
      ...prev,
      [selectedRole]: updatedState
    }));
    setIsSaved(false);
  };

  const currentRoleState = roleActions[selectedRole];

  return (
    <AdminShell activeTab="ActionPermissions">
      <div className="space-y-6">
        
        {/* ==========================================
            TOP HEADER ROW (No Search Bar)
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-3 pl-2">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Granular Action Overrides</h1>
              <p className="text-[11px] text-slate-400 font-medium">Configure explicit micro-permissions and high-risk operational steps</p>
            </div>
          </div>

          {/* Action Header Controls */}
          <div className="flex items-center gap-2 pr-2 justify-end">
            {isSaved && (
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg flex items-center gap-1 border border-emerald-100">
                <CheckCircle className="h-3 w-3" /> System Policies Deployed
              </span>
            )}
            <button
              onClick={() => {
                setIsSaved(true);
                setTimeout(() => setIsSaved(false), 3000);
              }}
              className="flex items-center gap-1.5 text-xs font-bold bg-indigo-950 text-white px-3.5 py-1.5 rounded-lg hover:bg-indigo-900 transition-all shadow-xs cursor-pointer"
            >
              <Save className="h-3.5 w-3.5" />
              Save Action Map
            </button>
          </div>
        </div>

        {/* ==========================================
            MAIN SPLIT GRID LAYOUT
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* LEFT PANEL: SYSTEM ROLES QUICK SWITCHER (Clickable) */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
            <div className="px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-xs text-indigo-950 tracking-tight uppercase">Security Profiles</h3>
            </div>
            
            <div className="p-2 space-y-1">
              {systemRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setSelectedRole(role);
                    setIsSaved(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                    selectedRole === role 
                      ? "bg-indigo-50 text-indigo-950 border-l-4 border-indigo-950 pl-2.5" 
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className={`h-3.5 w-3.5 ${selectedRole === role ? "text-indigo-600" : "text-slate-400"}`} />
                    <span>{role}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Micro Multi-Toggles */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Profile Master State</span>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => handleMassToggleActions(true)}
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-indigo-950 font-bold text-[10px] py-1.5 px-2 rounded-md transition-all cursor-pointer"
                >
                  Grant All
                </button>
                <button 
                  onClick={() => handleMassToggleActions(false)}
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 font-bold text-[10px] py-1.5 px-2 rounded-md transition-all cursor-pointer"
                >
                  Revoke All
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: CATEGORIZED GRANULAR CARD ACTIONS */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Quick Informational Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex justify-between items-center text-xs shadow-3xs">
              <div className="flex items-center gap-2 font-medium text-slate-600">
                <Fingerprint className="h-4 w-4 text-indigo-950" />
                <span>Adjusting specific functional execution capabilities for: <strong className="text-indigo-950 font-bold">{selectedRole}</strong></span>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 hidden sm:inline"><Lock className="inline h-3 w-3 mr-1" />Strict RBAC</span>
            </div>

            {/* Mapping Categories */}
            {actionCategories.map((category) => (
              <div key={category.categoryName} className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
                
                {/* Section Group Header */}
                <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/30 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{category.categoryName}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border uppercase ${category.badgeColor}`}>Scope Rules</span>
                </div>

                {/* Sub items matching checklist loops */}
                <div className="divide-y divide-slate-100">
                  {category.items.map((item) => {
                    const isChecked = currentRoleState[item.id] ?? false;

                    return (
                      <div 
                        key={item.id}
                        onClick={() => handleToggleAction(item.id)}
                        className={`p-4 flex items-start justify-between gap-6 cursor-pointer transition-colors ${
                          isChecked ? "bg-white" : "bg-slate-50/20"
                        } hover:bg-slate-50/50`}
                      >
                        {/* Left Info Context */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">{item.title}</span>
                            {item.isCritical && (
                              <span className="text-[9px] bg-rose-50 text-rose-600 font-extrabold px-1.5 py-0.2 rounded uppercase flex items-center gap-0.5 animate-pulse">
                                <AlertCircle className="h-2.5 w-2.5" /> High Risk
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xl">{item.desc}</p>
                        </div>

                        {/* Right Clickable Checkbox/Switch Anchor */}
                        <div className="flex items-center pt-1 shrink-0">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // Controlled click fully driven by row click container
                            className="rounded border-slate-300 text-indigo-950 focus:ring-indigo-950/20 h-4 w-4 cursor-pointer accent-indigo-950 scale-110"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}

            {/* Footer Specifications Logs */}
            <div className="text-[10px] text-slate-400 font-mono font-bold flex justify-between px-1">
              <span>Token Matrix Hash: 0x9F_ACT_PERM</span>
              <span>Syncing Status: Realtime Active</span>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}