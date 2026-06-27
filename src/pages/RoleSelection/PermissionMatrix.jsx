import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Shield, 
  Lock, 
  Save, 
  UserCheck, 
  CheckCircle,
  AlertCircle,
  Layers,
  Sliders,
  Trash2,
  Check
} from "lucide-react";

export default function PermissionMatrix() {
  // 1. Roles Definition
  const availableRoles = ["Administrator", "Project Manager", "Editor / Dispatcher", "Viewer"];
  const [selectedRole, setSelectedRole] = useState("Editor / Dispatcher");
  const [isSaved, setIsSaved] = useState(false);

  // 2. Default Mock Permissions Dataset for Each Role
  const [rolePermissions, setRolePermissions] = useState({
    "Administrator": {
      "Dashboard-read": true, "Dashboard-create": true, "Dashboard-update": true, "Dashboard-delete": true,
      "Heatmaps-read": true, "Heatmaps-create": true, "Heatmaps-update": true, "Heatmaps-delete": true,
      "SOStracking-read": true, "SOStracking-create": true, "SOStracking-update": true, "SOStracking-delete": true,
      "UserManagement-read": true, "UserManagement-create": true, "UserManagement-update": true, "UserManagement-delete": true,
      "Reports-read": true, "Reports-create": true, "Reports-update": true, "Reports-delete": true,
    },
    "Project Manager": {
      "Dashboard-read": true, "Dashboard-create": true, "Dashboard-update": true, "Dashboard-delete": false,
      "Heatmaps-read": true, "Heatmaps-create": true, "Heatmaps-update": true, "Heatmaps-delete": false,
      "SOStracking-read": true, "SOStracking-create": false, "SOStracking-update": true, "SOStracking-delete": false,
      "UserManagement-read": true, "UserManagement-create": true, "UserManagement-update": false, "UserManagement-delete": false,
      "Reports-read": true, "Reports-create": true, "Reports-update": true, "Reports-delete": false,
    },
    "Editor / Dispatcher": {
      "Dashboard-read": true, "Dashboard-create": true, "Dashboard-update": true, "Dashboard-delete": false,
      "Heatmaps-read": true, "Heatmaps-create": true, "Heatmaps-update": true, "Heatmaps-delete": false,
      "SOStracking-read": true, "SOStracking-create": false, "SOStracking-update": true, "SOStracking-delete": false,
      "UserManagement-read": true, "UserManagement-create": false, "UserManagement-update": false, "UserManagement-delete": false,
      "Reports-read": true, "Reports-create": true, "Reports-update": false, "Reports-delete": false,
    },
    "Viewer": {
      "Dashboard-read": true, "Dashboard-create": false, "Dashboard-update": false, "Dashboard-delete": false,
      "Heatmaps-read": true, "Heatmaps-create": false, "Heatmaps-update": false, "Heatmaps-delete": false,
      "SOStracking-read": true, "SOStracking-create": false, "SOStracking-update": false, "SOStracking-delete": false,
      "UserManagement-read": false, "UserManagement-create": false, "UserManagement-update": false, "UserManagement-delete": false,
      "Reports-read": true, "Reports-create": false, "Reports-update": false, "Reports-delete": false,
    }
  });

  // Modules & Column configuration
  const modules = [
    { name: "Dashboard", desc: "Main metrics, analytics overview and platform stats" },
    { name: "Heatmaps", desc: "Live density index grid and zone thermal overlays" },
    { name: "SOStracking", desc: "Emergency distress signals, incoming beacons and status resolving" },
    { name: "UserManagement", desc: "Profile directories, team logs and staff onboarding" },
    { name: "Reports", desc: "System logs download, historical charts and CSV export" }
  ];
  const permissionTypes = ["read", "create", "update", "delete"];

  // Current active role mapping shortcut
  const currentPermissions = rolePermissions[selectedRole];

  // Click Trigger: Single Checkbox Toggle
  const handlePermissionChange = (moduleName, type) => {
    const key = `${moduleName}-${type}`;
    setRolePermissions(prev => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [key]: !prev[selectedRole][key]
      }
    }));
    setIsSaved(false);
  };

  // Click Trigger: Toggle entire row (Select All / Clear All)
  const handleSelectAllRow = (moduleName, isAllChecked) => {
    const updatedRoleState = { ...currentPermissions };
    permissionTypes.forEach(type => {
      updatedRoleState[`${moduleName}-${type}`] = !isAllChecked;
    });

    setRolePermissions(prev => ({
      ...prev,
      [selectedRole]: updatedRoleState
    }));
    setIsSaved(false);
  };

  // Advanced Feature: Global Preset Multi-Injectors for the selected role
  const applyGlobalPreset = (presetType) => {
    const updatedRoleState = { ...currentPermissions };
    modules.forEach(mod => {
      permissionTypes.forEach(type => {
        if (presetType === "full") {
          updatedRoleState[`${mod.name}-${type}`] = true;
        } else if (presetType === "read") {
          updatedRoleState[`${mod.name}-${type}`] = (type === "read");
        } else if (presetType === "clear") {
          updatedRoleState[`${mod.name}-${type}`] = false;
        }
      });
    });

    setRolePermissions(prev => ({
      ...prev,
      [selectedRole]: updatedRoleState
    }));
    setIsSaved(false);
  };

  // Click Trigger: Save simulation
  const handleSaveMatrix = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <AdminShell activeTab="PermissionMatrix">
      <div className="space-y-6 max-w-6xl mx-auto pb-12">
        
        {/* ==========================================
            1. MODERN CLEAN BREADCRUMB HEADER
           ========================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5---">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-950 text-white rounded-xl shadow-xs">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Access Control Matrix</h1>
              <p className="text-xs text-slate-400 font-medium font-sans">Map out explicit security clearances and cluster override permissions</p>
            </div>
          </div>

          {/* Core Submit Actions */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            {isSaved && (
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl flex items-center gap-1 border border-emerald-100 animate-in fade-in duration-200">
                <CheckCircle className="h-3 w-3" /> State Saved
              </span>
            )}
            <button
              onClick={handleSaveMatrix}
              className="flex items-center gap-1.5 text-xs font-bold bg-indigo-950 text-white px-4 py-2 rounded-xl hover:bg-indigo-900 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Save className="h-3.5 w-3.5" />
              Save Matrix Changes
            </button>
          </div>
        </div>

        {/* ==========================================
            2. SPLIT INTERACTIVE ARCHITECTURE LAYOUT
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT PANEL: MINIMAL ROLE SELECTOR SIDEBAR */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
            <div className="px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-[10px] text-slate-400 tracking-wider uppercase">Active Security Roles</h3>
            </div>
            
            <div className="p-2 space-y-1">
              {availableRoles.map((role) => {
                const isActive = selectedRole === role;
                return (
                  <button
                    key={role}
                    onClick={() => {
                      setSelectedRole(role);
                      setIsSaved(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? "bg-indigo-50/70 text-indigo-950 font-bold border border-indigo-200/60 shadow-3xs" 
                        : "text-slate-600 border border-transparent hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <UserCheck className={`h-4 w-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                      <span>{role}</span>
                    </div>
                    {isActive && (
                      <div className="h-3 w-3 rounded-full bg-indigo-950 flex items-center justify-center text-white">
                        <Check className="h-2 w-2 stroke-[4]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 bg-slate-50 border-t border-slate-150 m-2.5 rounded-xl flex gap-2.5 text-[11px] text-slate-400 font-medium leading-relaxed font-sans">
              <AlertCircle className="h-4 w-4 text-indigo-950 shrink-0 mt-0.5" />
              <span>Switching active contexts populates row matrices automatically. Save layout parameters locally to persist modifications.</span>
            </div>
          </div>

          {/* RIGHT PANEL: DYNAMIC INTERACTIVE PRIVILEGES TABLE GRID */}
          <div className="lg:col-span-9 bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden space-y-4 p-5">
            
            {/* Matrix Operational Sub-Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-3">
              <div>
                <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider block">Privilege Mapping Matrix</span>
                <p className="text-[11px] text-slate-400 font-medium font-sans mt-0.5">
                  Overriding explicit capabilities for: <strong className="text-indigo-600 font-bold">{selectedRole}</strong>
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                <Lock className="h-3 w-3 text-indigo-600" /> Active Session Synced
              </div>
            </div>

            {/* Global Rapid Template Preset Strips */}
            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider sm:pl-1">Rapid Global Overrides:</span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button 
                  type="button" 
                  onClick={() => applyGlobalPreset("read")}
                  className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer shadow-3xs"
                >
                  Enforce Read-Only
                </button>
                <button 
                  type="button" 
                  onClick={() => applyGlobalPreset("full")}
                  className="bg-indigo-950 hover:bg-indigo-900 text-white text-[10px] font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer shadow-3xs"
                >
                  Grant Full Access
                </button>
                <button 
                  type="button" 
                  onClick={() => applyGlobalPreset("clear")}
                  className="bg-rose-50 border border-rose-100 hover:bg-rose-100 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 shadow-3xs"
                >
                  <Trash2 className="h-3 w-3" /> Clear Matrix
                </button>
              </div>
            </div>

            {/* Modern Minimalism Grid Framework Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl bg-slate-50/20">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    <th className="p-3 w-5/12">Module Architecture Scope</th>
                    {permissionTypes.map(type => (
                      <th key={type} className="p-3 text-center capitalize w-24">{type}</th>
                    ))}
                    <th className="p-3 text-center w-28">Row Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 bg-white text-xs font-semibold text-slate-700">
                  {modules.map((mod) => {
                    const isAllRowChecked = permissionTypes.every(type => currentPermissions[`${mod.name}-${type}`]);

                    return (
                      <tr key={mod.name} className="hover:bg-slate-50/40 transition-colors">
                        <td className="p-3">
                          <span className="font-bold text-indigo-950 block">{mod.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium font-sans block mt-0.5 leading-tight">{mod.desc}</span>
                        </td>

                        {/* Interactive Granular Micro Action Inputs Mapping */}
                        {permissionTypes.map(type => {
                          const isChecked = currentPermissions[`${mod.name}-${type}`] || false;
                          return (
                            <td key={type} className="p-3 text-center">
                              <label className="inline-flex items-center justify-center cursor-pointer p-1">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handlePermissionChange(mod.name, type)}
                                  className="h-4 w-4 rounded border-slate-300 text-indigo-950 focus:ring-indigo-950/20 cursor-pointer accent-indigo-950 transition-all"
                                />
                              </label>
                            </td>
                          );
                        })}

                        {/* Node Bulk Authorization Action Controller */}
                        <td className="p-3 text-center">
                          <button
                            type="button"
                            onClick={() => handleSelectAllRow(mod.name, isAllRowChecked)}
                            className={`text-[9px] font-black px-2.5 py-0.5 rounded uppercase transition-colors tracking-tight cursor-pointer ${
                              isAllRowChecked 
                                ? "bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100" 
                                : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            {isAllRowChecked ? "Purge Row" : "Grant All"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table></div>
            </div>

            {/* Table Meta Engine Logs Footer */}
            <div className="pt-2 text-[10px] text-slate-400 font-mono flex justify-between items-center">
              <span className="flex items-center gap-1 font-sans font-medium"><Layers className="h-3 w-3 text-indigo-600" /> Layer Matrix Synchronized</span>
              <span>v1.2 // Secure Target State</span>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}