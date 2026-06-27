import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Layers, 
  Eye, 
  EyeOff, 
  Save, 
  CheckCircle, 
  HelpCircle,
  Sliders,
  ToggleLeft,
  ToggleRight
} from "lucide-react";

export default function ModuleAccess() {
  // ==========================================
  // DEPARTMENTS & MODULES DEFINITION
  // ==========================================
  const departments = [
    { id: "DEP-01", name: "Operations & Control Center", staffCount: 14 },
    { id: "DEP-02", name: "Technical Support & IT", staffCount: 6 },
    { id: "DEP-03", name: "Logistics & Field Force", staffCount: 22 },
    { id: "DEP-04", name: "Executive & Management Team", staffCount: 4 }
  ];

  const [selectedDept, setSelectedDept] = useState(departments[0]);
  const [isSaved, setIsSaved] = useState(false);

  // Default toggle state for modules mapped to each department
  const [deptModuleVisibility, setDeptModuleVisibility] = useState({
    "DEP-01": { Dashboard: true, Heatmaps: true, SOStracking: true, UserManagement: false, Reports: true },
    "DEP-02": { Dashboard: true, Heatmaps: true, SOStracking: true, UserManagement: true, Reports: true },
    "DEP-03": { Dashboard: true, Heatmaps: true, SOStracking: false, UserManagement: false, Reports: false },
    "DEP-04": { Dashboard: true, Heatmaps: false, SOStracking: true, UserManagement: true, Reports: true }
  });

  const modulesList = [
    { id: "Dashboard", title: "Main Analytics Dashboard", path: "/dashboard", desc: "Core telemetry graphs, active counters, and overall status feed." },
    { id: "Heatmaps", title: "Live Population Heatmaps", path: "/heatmaps", desc: "Thermal density grid and coordinates projection matrix." },
    { id: "SOStracking", title: "SOS Emergency Systems", path: "/sos-tracking", desc: "Distress beacons registry, panic signals, and threat resolver tool." },
    { id: "UserManagement", title: "Staff & User Management", path: "/users", desc: "Profile directories, credential distribution, and team mapping." },
    { id: "Reports", title: "System Logs & Reports", path: "/reports", desc: "CSV/Excel data exporter, historical records, and platform audits." }
  ];

  // ==========================================
  // CLICK HANDLERS (INTERACTIVE)
  // ==========================================
  
  // Toggle Visibility for a single module clickably
  const handleToggleModule = (moduleId) => {
    setDeptModuleVisibility(prev => ({
      ...prev,
      [selectedDept.id]: {
        ...prev[selectedDept.id],
        [moduleId]: !prev[selectedDept.id][moduleId]
      }
    }));
    setIsSaved(false);
  };

  // Turn all modules ON or OFF for the selected department
  const handleMassToggle = (status) => {
    const updatedState = { ...deptModuleVisibility[selectedDept.id] };
    Object.keys(updatedState).forEach(key => {
      updatedState[key] = status;
    });

    setDeptModuleVisibility(prev => ({
      ...prev,
      [selectedDept.id]: updatedState
    }));
    setIsSaved(false);
  };

  // Simulate server save action
  const handleSaveConfig = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Alert hides in 3 seconds
  };

  const currentVisibility = deptModuleVisibility[selectedDept.id];

  return (
    <AdminShell activeTab="ModuleAccess">
      <div className="space-y-6">
        
        {/* ==========================================
            TOP HEADER ROW (No Search Bar)
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-3 pl-2">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Module Visibility Settings</h1>
              <p className="text-[11px] text-slate-400 font-medium">Enable or restrict system modules across departments globally</p>
            </div>
          </div>

          {/* Action Header Controls */}
          <div className="flex items-center gap-2 pr-2 justify-end">
            {isSaved && (
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg flex items-center gap-1 border border-emerald-100">
                <CheckCircle className="h-3 w-3" /> Scope Deployed
              </span>
            )}
            <button
              onClick={handleSaveConfig}
              className="flex items-center gap-1.5 text-xs font-bold bg-indigo-950 text-white px-3.5 py-1.5 rounded-lg hover:bg-indigo-900 transition-all shadow-xs cursor-pointer"
            >
              <Save className="h-3.5 w-3.5" />
              Save Visibility Config
            </button>
          </div>
        </div>

        {/* ==========================================
            MAIN SPLIT GRID
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* LEFT PANEL: DEPARTMENT SELECTOR (Clickable Switcher) */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
            <div className="px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-xs text-indigo-950 tracking-tight uppercase">Department Clusters</h3>
            </div>
            
            <div className="p-2 space-y-1">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => {
                    setSelectedDept(dept);
                    setIsSaved(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex flex-col gap-0.5 cursor-pointer ${
                    selectedDept.id === dept.id 
                      ? "bg-indigo-50 border-l-4 border-indigo-950 pl-2.5" 
                      : "hover:bg-slate-50/60"
                  }`}
                >
                  <span className={`text-xs font-bold ${selectedDept.id === dept.id ? "text-indigo-950" : "text-slate-700"}`}>
                    {dept.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium font-mono">
                    ID: {dept.id} • {dept.staffCount} Members Assigned
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Bulk Action Toggles */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Bulk Action Trigger</span>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => handleMassToggle(true)}
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[10px] py-1.5 px-2 rounded-md transition-all text-center cursor-pointer"
                >
                  Allow All Modules
                </button>
                <button 
                  onClick={() => handleMassToggle(false)}
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-rose-600 font-bold text-[10px] py-1.5 px-2 rounded-md transition-all text-center cursor-pointer"
                >
                  Restrict All
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: INTERACTIVE MODULE LIST LAYOUT */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Context Info Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex justify-between items-center text-xs shadow-3xs">
              <div className="flex items-center gap-2 font-medium text-slate-600">
                <Sliders className="h-4 w-4 text-indigo-950" />
                <span>Currently adjusting sidebar layout links for: <strong className="text-slate-900 font-bold">{selectedDept.name}</strong></span>
              </div>
            </div>

            {/* Modules Grid Wrapper */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden divide-y divide-slate-100">
              {modulesList.map((mod) => {
                const isEnabled = currentVisibility[mod.id] ?? false;

                return (
                  <div 
                    key={mod.id} 
                    className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                      isEnabled ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    {/* Left Meta Specs */}
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                        <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.2 rounded text-slate-400 font-semibold">{mod.path}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{mod.desc}</p>
                    </div>

                    {/* Right Interactive Toggle Trigger */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-0 border-slate-100 pt-2 sm:pt-0 shrink-0">
                      
                      {/* Live Badge indicator */}
                      <div className="flex items-center gap-1.5 text-[11px] font-bold">
                        {isEnabled ? (
                          <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <Eye className="h-3 w-3" /> Visible
                          </span>
                        ) : (
                          <span className="text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded flex items-center gap-1">
                            <EyeOff className="h-3 w-3" /> Hidden
                          </span>
                        )}
                      </div>

                      {/* Clickable Custom Switch Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleModule(mod.id)}
                        className="focus:outline-none transition-all scale-110 cursor-pointer"
                        title={`Click to ${isEnabled ? 'hide' : 'show'} ${mod.id}`}
                      >
                        {isEnabled ? (
                          <ToggleRight className="h-7 w-7 text-indigo-950" fill="currentColor" />
                        ) : (
                          <ToggleLeft className="h-7 w-7 text-slate-300" fill="none" />
                        )}
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Matrix Tracker Logs Footer info */}
            <div className="text-[10px] text-slate-400 font-mono font-bold flex justify-between px-2">
              <span>Security Hash Scope: MD5-DEPT_LOCK</span>
              <span>Sync Status: Ready</span>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}