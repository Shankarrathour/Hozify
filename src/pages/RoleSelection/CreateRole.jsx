import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  ShieldPlus, 
  ArrowRight, 
  ArrowLeft, 
  Info, 
  Lock, 
  Fingerprint,
  Layers,
  Sparkles,
  Sliders,
  Check,
  Eye,
  Activity,
  ShieldAlert
} from "lucide-react";

export default function CreateRole() {
  // ==========================================
  // CONFIGURATION STATES
  // ==========================================
  const [currentStep, setCurrentStep] = useState(1); 
  const [roleMeta, setRoleMeta] = useState({
    name: "",
    description: "",
    tier: "Standard Operational Staff",
    isSystemScope: false
  });

  // Default master permissions matrix schema
  const [permissionsMatrix, setPermissionsMatrix] = useState({
    dashboard: { view: false, create: false, edit: false, delete: false, export: false },
    inventory: { view: false, create: false, edit: false, delete: false, export: false },
    orders: { view: false, create: false, edit: false, delete: false, export: false },
    users: { view: false, create: false, edit: false, delete: false, export: false }
  });

  const systemModules = [
    { key: "dashboard", name: "Analytics Dashboard", desc: "Core charts, system matrices, and pipeline analytics logs." },
    { key: "inventory", name: "Inventory Management", desc: "Stock entries, warehouse nodes, and supplier allocation trails." },
    { key: "orders", name: "Order Processing", desc: "Invoices, tracking workflows, and dispatch clearance registries." },
    { key: "users", name: "User Directory", desc: "Personnel profiles, staff shifting channels, and access index rules." }
  ];

  const tierOptions = [
    { 
      id: "Standard Operational Staff", 
      title: "Operational Staff", 
      desc: "Restricted regional visibility. No critical destruction layers or batch exports." 
    },
    { 
      id: "Regional Administrative Overseer", 
      title: "Regional Overseer", 
      desc: "Multi-zone monitoring privileges with mandatory multi-token confirmation overrides." 
    },
    { 
      id: "Executive System Master", 
      title: "System Master", 
      desc: "Full uncompromised root access mapping across entire enterprise cloud systems." 
    }
  ];

  // ==========================================
  // INTERACTIVE HANDLERS
  // ==========================================
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoleMeta(prev => ({ ...prev, [name]: value }));
  };

  const togglePermission = (moduleKey, actionKey) => {
    setPermissionsMatrix(prev => ({
      ...prev,
      [moduleKey]: { ...prev[moduleKey], [actionKey]: !prev[moduleKey][actionKey] }
    }));
  };

  const toggleEntireModule = (moduleKey, currentStatus) => {
    const targetState = !currentStatus;
    setPermissionsMatrix(prev => ({
      ...prev,
      [moduleKey]: {
        view: targetState, create: targetState, edit: targetState, delete: targetState, export: targetState
      }
    }));
  };

  const applyPresetTemplate = (presetType) => {
    const isFull = presetType === "full";
    const updatedMatrix = {};
    systemModules.forEach(mod => {
      updatedMatrix[mod.key] = {
        view: presetType === "none" ? false : true, 
        create: isFull, 
        edit: isFull, 
        delete: isFull, 
        export: isFull
      };
    });
    setPermissionsMatrix(updatedMatrix);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const rolePayload = {
      ...roleMeta,
      id: roleMeta.name.toLowerCase().replace(/\s+/g, "-"),
      permissions: permissionsMatrix,
      createdOn: new Date().toLocaleDateString()
    };

    console.log("Master RBAC Payload Generated:", rolePayload);
    alert(`Success! [${roleMeta.name || "Unnamed Role"}] blueprint compiled into security nodes.`);
    
    // Reset configuration
    setCurrentStep(1);
    setRoleMeta({ name: "", description: "", tier: "Standard Operational Staff", isSystemScope: false });
    applyPresetTemplate("none");
  };

  return (
    <AdminShell activeTab="Role & Permissions">
      <div className="space-y-6 max-w-6xl mx-auto pb-12">
        
        {/* ==========================================
            1. MODERN CLEAN BREADCRUMB HEADER
           ========================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-950 text-white rounded-xl shadow-xs">
              <ShieldPlus className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Instantiate Access Template</h1>
              <p className="text-xs text-slate-400 font-medium font-sans">Deploy specialized custom permission maps and core visibility limits</p>
            </div>
          </div>

          {/* Stepper Wizard Component (Validation Removed - Free Clicking) */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto border border-slate-200">
            <button 
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                currentStep === 1 
                  ? 'bg-white text-indigo-950 shadow-xs' 
                  : 'text-slate-500 hover:text-indigo-950'
              }`}
            >
              1. Base Parameters
            </button>
            <button 
              type="button"
              onClick={() => setCurrentStep(2)}
              className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                currentStep === 2 
                  ? 'bg-white text-indigo-950 shadow-xs' 
                  : 'text-slate-500 hover:text-indigo-950'
              }`}
            >
              2. Authorization Grid
            </button>
          </div>
        </div>

        {/* ==========================================
            2. STEP 1: SPLIT SCREEN INTERACTIVE METADATA
           ========================================== */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-in fade-in zoom-in-98 duration-150">
            
            {/* Left Side Form Stack */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-950 uppercase tracking-wider border-b border-slate-100 pb-3">
                <Fingerprint className="h-4 w-4 text-indigo-600" />
                <span>Configure Profile Parameters</span>
              </div>

              {/* Input Segment */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Role Functional Name</label>
                <input 
                  type="text"
                  name="name"
                  value={roleMeta.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Senior Audit Executive"
                  className="w-full text-xs font-semibold bg-slate-50/60 border border-slate-200 rounded-xl p-3 focus:outline-none focus:bg-white focus:border-indigo-950 transition-all shadow-3xs"
                />
              </div>

              {/* Visual Selectors */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Select Security Level Tier</label>
                <div className="grid grid-cols-1 gap-2.5">
                  {tierOptions.map((opt) => {
                    const isSelected = roleMeta.tier === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setRoleMeta(prev => ({ ...prev, tier: opt.id }))}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex justify-between items-start select-none ${
                          isSelected 
                            ? "bg-indigo-50/50 border-indigo-950 shadow-3xs" 
                            : "bg-white border-slate-200 hover:bg-slate-50/80"
                        }`}
                      >
                        <div className="space-y-0.5 pr-4">
                          <span className={`text-xs font-bold block ${isSelected ? 'text-indigo-950' : 'text-slate-800'}`}>{opt.title}</span>
                          <span className="text-[11px] text-slate-400 font-medium font-sans leading-relaxed block">{opt.desc}</span>
                        </div>
                        <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? 'border-indigo-950 bg-indigo-950 text-white' : 'border-slate-300'}`}>
                          {isSelected && <Check className="h-2.5 w-2.5 stroke-[4]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Description Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Operational Summary Context</label>
                <textarea 
                  rows="3"
                  name="description"
                  value={roleMeta.description}
                  onChange={handleInputChange}
                  placeholder="Summarize what functional targets are allocated to this credential context..."
                  className="w-full text-xs font-semibold bg-slate-50/60 border border-slate-200 rounded-xl p-3 focus:outline-none focus:bg-white focus:border-indigo-950 resize-none transition-all shadow-3xs font-medium"
                />
              </div>

              {/* Permanent Core Toggle Wrapper */}
              <div 
                onClick={() => setRoleMeta(prev => ({ ...prev, isSystemScope: !prev.isSystemScope }))}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  roleMeta.isSystemScope ? "bg-amber-50/60 border-amber-300" : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/50"
                }`}
              >
                <div className="flex gap-2.5 items-start pr-4">
                  <Info className={`h-4 w-4 shrink-0 mt-0.5 ${roleMeta.isSystemScope ? 'text-amber-600' : 'text-slate-400'}`} />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Flag as Core Infrastructure Scope?</span>
                    <span className="text-[10px] text-slate-400 font-medium font-sans block mt-0.5">Core components cannot be wiped out or compromised by downstream operations managers.</span>
                  </div>
                </div>
                <div className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer ${roleMeta.isSystemScope ? 'bg-amber-500' : 'bg-slate-200'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs transform duration-200 ease-in-out ${roleMeta.isSystemScope ? 'translate-x-3.5' : ''}`} />
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="flex justify-end pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-1.5 bg-indigo-950 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-900 shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Proceed to Allocation Matrix</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right Side LIVE CARD PREVIEW Panel */}
            <div className="lg:col-span-5 sticky top-6 space-y-4">
              <div className="bg-indigo-950 text-white rounded-2xl p-5 shadow-lg relative overflow-hidden h-52 flex flex-col justify-between">
                <div className="absolute right-[-20px] top-[-20px] w-40 h-40 bg-white/[0.03] rounded-full blur-xl pointer-events-none" />
                <div className="absolute left-[-10px] bottom-[-30px] w-24 h-24 bg-indigo-500/[0.1] rounded-full blur-md pointer-events-none" />

                <div className="flex justify-between items-start border-b border-white/10 pb-3">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest block">Live Token Preview</span>
                    <h3 className="text-base font-black tracking-tight line-clamp-1">{roleMeta.name || "Untitled Identity Index"}</h3>
                  </div>
                  {roleMeta.isSystemScope && (
                    <span className="text-[9px] font-black bg-amber-500 text-indigo-950 px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">Core</span>
                  )}
                </div>

                <p className="text-[11px] text-indigo-200/70 font-sans leading-relaxed font-medium line-clamp-3">
                  {roleMeta.description || "Provide an operational description overview context to populate this secure identity node layout data..."}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-indigo-300 font-bold">
                  <div className="flex items-center gap-1">
                    <Sliders className="h-3 w-3" />
                    <span className="uppercase tracking-wider">{roleMeta.tier.split(" ")[0]} TIER</span>
                  </div>
                  <span>ID: {roleMeta.name ? roleMeta.name.toLowerCase().replace(/\s+/g, "-") : "pending-slug"}</span>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5">
                <Sliders className="h-4 w-4 text-indigo-950 shrink-0 mt-0.5" />
                <p className="text-[11px] font-medium text-slate-400 font-sans leading-normal">
                  This card updates parameters natively in system registries using localized dual-binding variables.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================
            3. STEP 2: MINIMALIST PERMISSIONS GRID TABLE
           ========================================== */}
        {currentStep === 2 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-5 animate-in fade-in zoom-in-98 duration-150">
            
            {/* Header Matrix Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-950 uppercase tracking-wider">
                <Layers className="h-4 w-4 text-indigo-600" />
                <span>Core Module Authorization Matrix</span>
              </div>
              <div className="text-[11px] font-bold text-indigo-950 bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl">
                Target Node: <span className="text-indigo-600 font-black">{roleMeta.name || "Untitled"}</span>
              </div>
            </div>

            {/* Utility Preset Injection Strips */}
            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider sm:pl-1">Rapid Deployment Templates:</span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button 
                  type="button" 
                  onClick={() => applyPresetTemplate("read")}
                  className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer shadow-3xs"
                >
                  Read-Only Scheme
                </button>
                <button 
                  type="button" 
                  onClick={() => applyPresetTemplate("full")}
                  className="bg-indigo-950 hover:bg-indigo-900 text-white text-[10px] font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer shadow-3xs"
                >
                  Full CRUD Authority
                </button>
              </div>
            </div>

            {/* Minimalist Grid Table Framework */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl bg-slate-50/20">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      <th className="p-3 w-5/12">Module Architecture Endpoint</th>
                      <th className="p-3 text-center">Read</th>
                      <th className="p-3 text-center">Create</th>
                      <th className="p-3 text-center">Edit</th>
                      <th className="p-3 text-center">Delete</th>
                      <th className="p-3 text-center">Export</th>
                      <th className="p-3 text-center w-24">Global Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 bg-white text-xs font-semibold text-slate-700">
                    {systemModules.map((mod) => {
                      const currentModulePerms = permissionsMatrix[mod.key];
                      const isEntirelyChecked = Object.values(currentModulePerms).every(v => v === true);

                      return (
                        <tr key={mod.key} className="hover:bg-slate-50/40 transition-colors">
                          <td className="p-3">
                            <span className="font-bold text-indigo-950 block">{mod.name}</span>
                            <span className="text-[10px] text-slate-400 font-medium font-sans block mt-0.5 leading-tight">{mod.desc}</span>
                          </td>
                          
                          {/* Granular Action Checkboxes */}
                          {["view", "create", "edit", "delete", "export"].map((action) => {
                            const isChecked = currentModulePerms[action];
                            return (
                              <td key={action} className="p-3 text-center">
                                <label className="inline-flex items-center justify-center cursor-pointer p-1">
                                  <input 
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => togglePermission(mod.key, action)}
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-950 focus:ring-indigo-950/20 cursor-pointer accent-indigo-950 transition-all"
                                  />
                                </label>
                              </td>
                            );
                          })}

                          {/* Module Bulk Switch Trigger Column */}
                          <td className="p-3 text-center">
                            <button
                              type="button"
                              onClick={() => toggleEntireModule(mod.key, isEntirelyChecked)}
                              className={`text-[9px] font-black px-2 py-0.5 rounded transition-colors tracking-tight cursor-pointer ${
                                isEntirelyChecked 
                                  ? "bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100" 
                                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                              }`}
                            >
                              {isEntirelyChecked ? "Purge" : "Grant All"}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Informational Protection Guard Info Stamp */}
            <div className="bg-indigo-50/30 border border-slate-100 rounded-xl p-3 flex items-start gap-2.5">
              <Lock className="h-4 w-4 text-indigo-950 shrink-0 mt-0.5" />
              <p className="text-[11px] font-medium text-slate-400 font-sans leading-normal">
                Confirming this matrix layout automatically updates access level visibilities globally across secure enterprise nodes. Ensure proper privilege scopes to prevent data exposure or administrative lockouts.
              </p>
            </div>

            {/* Stepper Wizard Navigation Controls Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 bg-white hover:bg-slate-50 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Base Params</span>
              </button>

              <button
                type="button"
                onClick={handleFormSubmission}
                className="flex items-center gap-1.5 bg-indigo-950 hover:bg-indigo-900 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Instantiate Profile Template</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}