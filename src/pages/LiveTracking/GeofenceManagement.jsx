import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Settings, 
  Plus, 
  Download, 
  SlidersHorizontal,
  Circle,
  Hexagon,
  Edit2,
  Maximize2,
  Minus,
  Plus as PlusIcon,
  RefreshCw,
  MapPin
} from "lucide-react";

export default function GeofenceManagement() {
  // ==========================================
  // ACTIVE BOUNDARIES DATA (Fully Clickable)
  // ==========================================
  const [boundaries, setBoundaries] = useState([
    {
      id: "GF-01",
      name: "Downtown Logistics Hub",
      type: "POLYGONAL",
      violations: 24,
      status: "Active",
      latLng: "40.7128° N, 74.0060° W",
      // Shape vectors for rendering
      svgPoints: "150,120 380,90 420,220 220,260",
      pinX: "300px",
      pinY: "160px",
      associatedLogs: [
        { timestamp: "2023-10-27 14:15:32", assetId: "VT-1044", eventType: "ZONE EXIT", status: "Standard", action: "Log Only" }
      ]
    },
    {
      id: "GF-02",
      name: "Restricted Zone A-4",
      type: "POLYGONAL",
      violations: 12,
      status: "Active",
      latLng: "40.7589° N, 73.9851° W",
      svgPoints: "280,220 520,160 580,260 480,310 340,290",
      pinX: "450px",
      pinY: "230px",
      associatedLogs: [
        { timestamp: "2023-10-27 14:22:10", assetId: "VT-9928", eventType: "UNAUTHORIZED ENTRY", status: "! Violated", action: "Dispatch" }
      ]
    },
    {
      id: "GF-03",
      name: "Warehouse Perimeter",
      type: "CIRCULAR",
      violations: 3,
      status: "Disabled",
      latLng: "40.7306° N, 73.9352° W",
      svgPoints: "100,180 250,120 300,240 180,280",
      pinX: "210px",
      pinY: "200px",
      associatedLogs: [
        { timestamp: "2023-10-27 13:02:11", assetId: "VT-4412", eventType: "UNAUTHORIZED ENTRY", status: "! Violated", action: "Dispatch" }
      ]
    },
    {
      id: "GF-04",
      name: "Port Entrance",
      type: "POLYGONAL",
      violations: 8,
      status: "Active",
      latLng: "40.6892° N, 74.0445° W",
      svgPoints: "300,100 480,120 500,240 320,210",
      pinX: "400px",
      pinY: "160px",
      associatedLogs: [
        { timestamp: "2023-10-27 12:44:05", assetId: "VT-0811", eventType: "ZONE ENTRY", status: "Standard", action: "Log Only" }
      ]
    }
  ]);

  // ==========================================
  // INTERACTIVE UI STATES
  // ==========================================
  const [selectedGeo, setSelectedGeo] = useState(boundaries[1]); // Default to Restricted Zone A-4
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTool, setActiveTool] = useState("Polygon");
  const [zoomLevel, setZoomLevel] = useState(13);

  // Filter Boundaries
  const filteredBoundaries = useMemo(() => {
    return boundaries.filter(b => 
      b.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [boundaries, searchQuery]);

  const handleTableAction = (assetId, actionType) => {
    alert(`Protocol Initiated: Executing "${actionType}" workflow command for Fleet Asset ${assetId}.`);
  };

  return (
    <AdminShell activeTab="Live Tracking">
      <div className="space-y-4">
        
        {/* Top Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white pb-1">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Geofence Management</h1>
            <p className="text-xs text-slate-500 mt-0.5">Configure and monitor virtual boundaries for operational compliance.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert("Downloading logs...")}
              className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-slate-500" />
              <span>Export Logs</span>
            </button>
            <button 
              onClick={() => alert("Opening Map Drawer Wizard...")}
              className="flex items-center gap-1.5 px-4 py-2 bg-black text-white rounded-lg text-xs font-bold hover:bg-slate-900 shadow-sm transition-all"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Create New Fence</span>
            </button>
          </div>
        </div>

        {/* MAIN BODY GRID: CARDS + REAL SATELLITE MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* LEFT SIDEBAR: ZONE SELECTOR FEED */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[520px] shadow-2xs">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Active Boundaries ({filteredBoundaries.length})
              </span>
              <SlidersHorizontal className="h-4 w-4 text-slate-400" />
            </div>

            {/* Live Search Filter */}
            <div className="p-3 border-b border-slate-100">
              <div className="relative">
                <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Quick filter boundaries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:bg-white focus:border-black transition-all"
                />
              </div>
            </div>

            {/* List Element Container */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {filteredBoundaries.map((geo) => (
                <div
                  key={geo.id}
                  onClick={() => setSelectedGeo(geo)}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedGeo.id === geo.id ? "bg-slate-50 border-l-4 border-black" : "hover:bg-slate-50/40"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-sm ${selectedGeo.id === geo.id ? "font-bold text-black" : "font-semibold text-slate-800"}`}>
                        {geo.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-[11px] font-medium">
                        <span className="text-rose-600 font-bold">⚠️ {geo.violations} Violations</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {geo.status}
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] font-black px-2 py-0.5 bg-blue-50 text-blue-700 rounded tracking-wider font-mono">
                      {geo.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: TRUE HIGH-CONTRAST SATELLITE MAP VIEW PORT */}
          <div className="lg:col-span-2 bg-[#0b0e14] rounded-xl overflow-hidden border border-slate-200 h-[520px] relative shadow-inner">
            
            {/* Mapbox Live Dark Satellite Map Style API URL - 100% Working No-Black-Screen */}
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-[80%] contrast-[115%]"
              style={{ 
                backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-73.9851,40.7589,${zoomLevel},0/800x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwY3kyb3lyZ3dicGZ2N3IifQ==')`
              }} 
            />

            {/* Map Grid Matrix Lines Overlay Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

            {/* Live GPS Coordinates Marker Overlay HUD */}
            <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-cyan-400 font-mono text-[11px] font-bold flex items-center gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
              <span>LOG: {selectedGeo.latLng}</span>
            </div>

            {/* Map Action Zoom Control Group Widgets */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
              <button 
                onClick={() => setZoomLevel(prev => Math.min(prev + 1, 16))}
                className="w-8 h-8 bg-slate-900 text-white border border-white/10 rounded-t-md font-bold flex items-center justify-center hover:bg-slate-800"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(prev - 1, 10))}
                className="w-8 h-8 bg-slate-900 text-white border-x border-b border-white/10 rounded-b-md font-bold flex items-center justify-center hover:bg-slate-800"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(13)}
                className="w-8 h-8 bg-slate-900 text-white border border-white/10 rounded-md mt-2 flex items-center justify-center hover:bg-slate-800 shadow-sm"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* DYNAMIC SHAPE SVG LAYER OVERLAY */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                {/* Custom Polygon Boundary Overlay Mesh */}
                <polygon 
                  points={selectedGeo.svgPoints} 
                  fill="rgba(34, 211, 238, 0.24)" 
                  stroke="#22d3ee" 
                  strokeWidth="3"
                  strokeDasharray={selectedGeo.status === "Disabled" ? "6,4" : "0"}
                  className="transition-all duration-500 ease-in-out"
                />
              </svg>

              {/* Graphical Location Pin Indicator over Map Anchor */}
              <div 
                className="absolute z-10 text-rose-500 flex flex-col items-center transition-all duration-500 ease-in-out"
                style={{ top: selectedGeo.pinY, left: selectedGeo.pinX }}
              >
                <MapPin className="h-6 w-6 filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] animate-bounce" />
                <span className="bg-slate-950/90 text-white font-mono text-[9px] font-black px-1 py-0.5 rounded border border-white/20 whitespace-nowrap mt-0.5">
                  {selectedGeo.id} TARGET
                </span>
              </div>
            </div>

            {/* FLOATING DRAWING HUD MENU CONTAINER */}
            <div className="absolute bottom-4 left-4 bg-slate-900/95 border border-white/10 text-white rounded-lg p-3 shadow-2xl z-10 min-w-[240px] backdrop-blur-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-wide text-slate-300">Active Geofence Grid Tool</span>
                <span className="text-[9px] bg-cyan-500/20 text-cyan-400 font-bold px-1.5 py-0.5 rounded uppercase">READY</span>
              </div>
              
              <div className="grid grid-cols-3 gap-1 text-center">
                <button 
                  onClick={() => setActiveTool("Circle")}
                  className={`py-2 rounded border text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                    activeTool === "Circle" ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold" : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Circle className="h-3.5 w-3.5" />
                  <span className="text-[10px]">Circle</span>
                </button>
                
                <button 
                  onClick={() => setActiveTool("Polygon")}
                  className={`py-2 rounded border text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                    activeTool === "Polygon" ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold" : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Hexagon className="h-3.5 w-3.5" />
                  <span className="text-[10px]">Polygon</span>
                </button>

                <button 
                  onClick={() => setActiveTool("Modify")}
                  className={`py-2 rounded border text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                    activeTool === "Modify" ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold" : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Edit2 className="h-3.5 w-3.5" />
                  <span className="text-[10px]">Modify</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* LOWER SECTION: EVENT LOGS & HISTORY TABLE */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="px-4 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Event Logs & Violation History</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Showing live streaming audit trail logs for <strong className="text-slate-700">{selectedGeo.name}</strong></p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Asset ID</th>
                  <th className="py-3 px-4">Geofence Location</th>
                  <th className="py-3 px-4">Event Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {selectedGeo.associatedLogs.map((log, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 text-slate-400 font-mono">{log.timestamp}</td>
                    <td className="py-4 px-4 font-bold text-slate-900 flex items-center gap-1.5">
                      🚚 {log.assetId}
                    </td>
                    <td className="py-4 px-4 text-slate-600 font-semibold">{selectedGeo.name}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-black ${
                        log.eventType.includes('UNAUTHORIZED') ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {log.eventType}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono font-black text-rose-600">
                      {log.status}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button 
                        onClick={() => handleTableAction(log.assetId, log.action)}
                        className="text-indigo-600 hover:text-indigo-900 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-3xs"
                      >
                        {log.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
        </div>

        {/* REFRESH SYSTEM CONTROLLER FOOTER */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-slate-400 bg-white border border-slate-200 p-3 rounded-xl">
          <div className="flex items-center gap-4">
            <span>System Status: <strong className="text-emerald-600">ONLINE (99.98%)</strong></span>
            <span>Active Boundary Mesh Nodes: <strong className="text-slate-700">{boundaries.length}</strong></span>
          </div>
          <button 
            onClick={() => alert("Refreshed map render matrices!")}
            className="flex items-center gap-1 text-indigo-600 font-bold hover:text-indigo-900"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Refresh Engine Grid</span>
          </button>
        </div>

      </div>
    </AdminShell>
  );
}