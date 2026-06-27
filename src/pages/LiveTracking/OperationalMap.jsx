import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  SlidersHorizontal, 
  Truck, 
  Zap, 
  Plus, 
  Minus, 
  Target, 
  Layers,
  Check
} from "lucide-react";

export default function OperationalMap() {
  // Mock Data for Active Units (Matching image_36a45c.jpg)
  const initialUnits = [
    { id: "ISP-99201", partnerType: "ISP Partners", speed: "45 mph", station: "R-882", status: "ACTIVE", type: "truck", coords: { top: "35%", left: "46%" } },
    { id: "BSP-44122", partnerType: "BSP Partners", speed: "0 mph", station: "Station 12", status: "IDLE", type: "truck", coords: { top: "52%", left: "44%" } },
    { id: "ISP-11204", partnerType: "ISP Partners", speed: "62 mph", station: "R-771", status: "ACTIVE", type: "zap", coords: { top: "45%", left: "71%" } },
    { id: "ISP-30499", partnerType: "ISP Partners", speed: "55 mph", station: "R-102", status: "ACTIVE", type: "truck", coords: { top: "65%", left: "35%" } }
  ];

  // States for Interactivity
  const [selectedPartners, setSelectedPartners] = useState(["ISP Partners", "BSP Partners"]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [showAlertModal, setShowAlertModal] = useState(false);

  // Toggle Checkboxes for Partner Types
  const handlePartnerToggle = (type) => {
    if (selectedPartners.includes(type)) {
      setSelectedPartners(selectedPartners.filter(p => p !== type));
    } else {
      setSelectedPartners([...selectedPartners, type]);
    }
  };

  // Filtered list based on Checkboxes
  const filteredUnits = initialUnits.filter(unit => selectedPartners.includes(unit.partnerType));

  // Partner Counts
  const ispCount = initialUnits.filter(u => u.partnerType === "ISP Partners").length;
  const bspCount = initialUnits.filter(u => u.partnerType === "BSP Partners").length;

  return (
    <AdminShell activeTab="Live Tracking" searchPlaceholder="Search by Partner ID, Vehicle, or Route...">
      
      {/* Main Map Workspace Layout (Sidebar inside the main content area) */}
      <div className="flex h-[calc(100vh-120px)] border border-slate-200 rounded-xl overflow-hidden relative bg-[#1c262d] shadow-sm">
        
        {/* ==========================================
            1. INTERACTIVE LEFT SIDEBAR (FLEET FILTERS)
           ========================================== */}
        <aside className="w-80 bg-white text-slate-800 shadow-xl flex flex-col justify-between z-20 border-r border-slate-200">
          
          {/* Scrollable Filters Content */}
          <div className="p-4 flex-1 overflow-y-auto space-y-5">
            {/* Sidebar Title */}
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h2 className="font-extrabold text-sm text-slate-900 tracking-tight">Fleet Filters</h2>
              <SlidersHorizontal className="h-4 w-4 text-slate-500 cursor-pointer" />
            </div>

            {/* Partner Category Selector Section */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider block mb-3 uppercase">PARTNER TYPE</span>
              <div className="space-y-2">
                {/* ISP Partner Row */}
                <div 
                  onClick={() => handlePartnerToggle("ISP Partners")}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${selectedPartners.includes("ISP Partners") ? "bg-slate-900 border-slate-900 text-white" : "border-slate-300"}`}>
                      {selectedPartners.includes("ISP Partners") && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-bold text-slate-700">ISP Partners</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{ispCount}</span>
                </div>

                {/* BSP Partner Row */}
                <div 
                  onClick={() => handlePartnerToggle("BSP Partners")}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${selectedPartners.includes("BSP Partners") ? "bg-slate-900 border-slate-900 text-white" : "border-slate-300"}`}>
                      {selectedPartners.includes("BSP Partners") && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-bold text-slate-700">BSP Partners</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{bspCount}</span>
                </div>
              </div>
            </div>

            {/* Active Vehicles List Section */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider block uppercase">
                ACTIVE UNITS (182)
              </span>
              
              <div className="space-y-2">
                {filteredUnits.map((unit) => (
                  <div 
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className={`border p-3 rounded-lg cursor-pointer transition-all ${selectedUnit?.id === unit.id ? "border-indigo-600 bg-indigo-50/40 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-slate-900">{unit.id}</span>
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded tracking-wide ${unit.status === "ACTIVE" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-500"}`}>
                        {unit.status}
                      </span>
                    </div>
                    <div className="flex gap-4 text-[11px] text-slate-500 font-medium mt-2">
                      <span className="flex items-center gap-1">🧭 {unit.speed}</span>
                      <span className="flex items-center gap-1">• {unit.station}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky CTA Footer */}
          <div className="p-3 border-t border-slate-100 bg-slate-50">
            <button 
              onClick={() => alert(`Showing total data for ${filteredUnits.length} vehicles.`)}
              className="w-full bg-[#1e1b4b] text-white font-bold text-xs py-2.5 rounded-lg text-center hover:bg-opacity-90 transition-opacity uppercase tracking-wide"
            >
              View Aggregated Data
            </button>
          </div>
        </aside>

        {/* ==========================================
            2. MAP VIEW WORKSPACE SURFACE
           ========================================== */}
        <div className="flex-1 relative bg-[#1c262d] overflow-hidden">
          
          {/* Map Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none transition-transform duration-300"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop&q=80')`,
              transform: `scale(${mapZoom})`
            }} 
          />
          
          {/* Radar Topographic Blueprint Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
            <div className="w-[800px] h-[800px] border border-cyan-400/20 rounded-full" />
            <div className="w-[500px] h-[500px] border border-cyan-400/30 rounded-full absolute" />
            <div className="w-[200px] h-[200px] border border-cyan-400/40 rounded-full absolute" />
          </div>

          {/* Map Transit Corridor Dotted Line (Purple Line Arc) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
            <path 
              d="M 100 500 Q 350 700 700 400 T 1100 150" 
              fill="none" 
              stroke="#6366f1" 
              strokeWidth="2" 
              strokeDasharray="6 4" 
            />
          </svg>

          {/* ==========================================
              MAP VEHICLE NODE MARKERS
             ========================================== */}
          {filteredUnits.map((unit) => (
            <div 
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              className="absolute cursor-pointer group transition-transform hover:scale-110 z-10"
              style={{ top: unit.coords.top, left: unit.coords.left }}
            >
              {/* Outer Shell Marker box wrapper */}
              <div className={`p-2.5 rounded-xl shadow-2xl relative border-2 ${selectedUnit?.id === unit.id ? "bg-indigo-600 border-white ring-4 ring-indigo-500/30" : "bg-black border-slate-800"}`}>
                
                {/* Live Node Dot */}
                <span className={`absolute top-0 right-0 w-2 h-2 rounded-full ring-1 ring-black ${unit.status === "ACTIVE" ? "bg-emerald-500 animate-pulse" : "bg-amber-400"}`} />
                
                {/* Custom Icons inside Marker Box */}
                {unit.type === "truck" ? (
                  <Truck className="h-4 w-4 text-white" />
                ) : (
                  <Zap className="h-4 w-4 text-emerald-400" />
                )}

                {/* Hover Meta Box */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none shadow-md">
                  {unit.id} • {unit.speed}
                </div>
              </div>
            </div>
          ))}

          {/* Floating Selected Unit Box */}
          {selectedUnit && (
            <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur border border-slate-700 p-3.5 rounded-xl shadow-xl w-60 z-10 text-xs text-white">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-indigo-400">{selectedUnit.id}</h4>
                <button onClick={() => setSelectedUnit(null)} className="text-slate-400 hover:text-white">✕</button>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{selectedUnit.partnerType}</p>
              <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between text-slate-300 font-mono">
                <span>Speed: {selectedUnit.speed}</span>
                <span>Zone: {selectedUnit.station}</span>
              </div>
            </div>
          )}

          {/* ==========================================
              MAP ZOOM & ACTION FLOAT CONTROLS (RIGHT CORNER)
             ========================================== */}
          <div className="absolute right-4 top-4 flex flex-col gap-1 z-20">
            <button 
              onClick={() => setMapZoom(prev => Math.min(prev + 0.1, 1.8))}
              className="bg-white text-slate-800 p-2 rounded-lg border border-slate-200 shadow hover:bg-slate-50 transition-colors"
            >
              <Plus className="h-4 w-4 stroke-[2.5]" />
            </button>
            <button 
              onClick={() => setMapZoom(prev => Math.max(prev - 0.1, 0.8))}
              className="bg-white text-slate-800 p-2 rounded-lg border border-slate-200 shadow hover:bg-slate-50 transition-colors"
            >
              <Minus className="h-4 w-4 stroke-[2.5]" />
            </button>
            <button 
              onClick={() => { setMapZoom(1); setSelectedUnit(null); }}
              className="bg-white text-slate-800 p-2 rounded-lg border border-slate-200 shadow hover:bg-slate-50 transition-colors mt-1"
            >
              <Target className="h-4 w-4" />
            </button>
            <button 
              onClick={() => alert("Changing Map Layout Layers...")}
              className="bg-white text-slate-800 p-2 rounded-lg border border-slate-200 shadow hover:bg-slate-50 transition-colors"
            >
              <Layers className="h-4 w-4" />
            </button>
          </div>

          {/* ==========================================
              3. FLOATING SYSTEM MONITOR STATUS BANNER
             ========================================== */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/90 border border-slate-800 rounded-xl px-5 py-2.5 flex flex-wrap items-center justify-between gap-4 shadow-2xl z-20 font-mono text-xs text-white">
            
            <div className="flex items-center gap-2 border-r border-slate-800 pr-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-100 font-bold uppercase text-[11px]">SYSTEM STABLE</span>
            </div>

            <div className="flex items-center gap-6 flex-1 justify-start text-slate-400">
              <span className="flex items-center gap-1.5">
                🚚 <strong className="text-white">142</strong> ONLINE
              </span>
              <span 
                onClick={() => setShowAlertModal(true)}
                className="flex items-center gap-1.5 cursor-pointer hover:text-rose-400 transition-colors"
              >
                ⚠️ <strong className="text-rose-500 font-bold">2 ALERTS</strong> ACTIVE
              </span>
              <span className="flex items-center gap-1.5">
                ⏱️ <strong className="text-white">98.2%</strong> ON TIME
              </span>
            </div>

            <div className="text-[10px] text-slate-500 hidden sm:block">
              REFRESH SEC: <span className="text-indigo-400">05s</span>
            </div>
          </div>

        </div>
      </div>

      {/* Live Alerts Trigger Modal Popup Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-sm w-full p-5 shadow-2xl space-y-4 text-white">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-rose-500 text-sm">⚠️ Live Incidents</h3>
              <button onClick={() => setShowAlertModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-rose-950/40 border border-rose-900/50 rounded-lg">
                <p className="font-bold text-rose-300">SOS TRIGGERED (2m ago)</p>
                <p className="text-slate-400 mt-0.5">Vehicle #V-2089 lost lock in Sector 7-G.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </AdminShell>
  );
}