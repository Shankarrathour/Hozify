import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Flame, 
  Layers, 
  TrendingUp, 
  Activity, 
  RefreshCw, 
  Compass,
  AlertCircle,
  HelpCircle
} from "lucide-react";

export default function Heatmaps() {
  // ==========================================
  // HEATMAP MOCK DATA & REGIONS
  // ==========================================
  const initialRegions = [
    { id: "REG-01", name: "Downtown Commercial Center", density: "CRITICAL", activityScore: 94, activeUnits: 42, riskLevel: "High" },
    { id: "REG-02", name: "Industrial Zone Logistics Hub", density: "HIGH", activityScore: 78, activeUnits: 29, riskLevel: "Medium" },
    { id: "REG-03", name: "West Side Residential Sector", density: "NORMAL", activityScore: 45, activeUnits: 12, riskLevel: "Low" },
    { id: "REG-04", name: "Harbor & Port Terminal Grid", density: "HIGH", activityScore: 82, activeUnits: 31, riskLevel: "High" },
    { id: "REG-05", name: "North Expressway Corridor", density: "LOW", activityScore: 22, activeUnits: 7, riskLevel: "Low" }
  ];

  const [regions] = useState(initialRegions);
  const [selectedRegion, setSelectedRegion] = useState(initialRegions[0]);
  const [mapIntensity, setMapIntensity] = useState("Thermal"); // Thermal, Density, Standard
  
  // State to track clicked node from the grid matrix
  const [selectedNode, setSelectedNode] = useState({ id: 18, level: "critical", metrics: "94% Load Peak" });

  // 64 Points Grid Simulation (8x8 Matrix)
  const gridPoints = Array.from({ length: 64 }, (_, i) => {
    const id = i + 1;
    // Assigning types dynamically to make it look like a map cluster
    if (id % 9 === 0 || id === 18 || id === 35) {
      return { id, level: "critical", label: "Critical Load", metrics: "91-96% Cap" };
    }
    if (id % 5 === 0 || id % 7 === 0) {
      return { id, level: "high", label: "High Activity", metrics: "75-88% Cap" };
    }
    if (id % 3 === 0) {
      return { id, level: "medium", label: "Normal Flow", metrics: "40-60% Cap" };
    }
    return { id, level: "low", label: "Clear Zone", metrics: "10-30% Cap" };
  });

  // Dynamic colors based on Layer View Selection (Thermal vs Density vs Standard)
  const getNodeColorClass = (level, isSelected) => {
    const baseSelection = isSelected ? "ring-2 ring-indigo-600 scale-105 z-10 font-bold" : "";
    
    if (mapIntensity === "Thermal") {
      if (level === "critical") return `bg-rose-500/90 shadow-sm shadow-rose-400 ${baseSelection}`;
      if (level === "high") return `bg-orange-400/90 ${baseSelection}`;
      if (level === "medium") return `bg-amber-300/80 ${baseSelection}`;
      return `bg-slate-200/70 ${baseSelection}`;
    } 
    
    if (mapIntensity === "Density") {
      if (level === "critical") return `bg-indigo-600 text-white ${baseSelection}`;
      if (level === "high") return `bg-indigo-400 text-white ${baseSelection}`;
      if (level === "medium") return `bg-indigo-200 text-indigo-900 ${baseSelection}`;
      return `bg-indigo-50 text-indigo-300 ${baseSelection}`;
    }

    // Standard View (Soft Tech Look)
    if (level === "critical") return `bg-rose-100 text-rose-700 border border-rose-200 ${baseSelection}`;
    if (level === "high") return `bg-orange-100 text-orange-700 border border-orange-200 ${baseSelection}`;
    if (level === "medium") return `bg-amber-100 text-amber-700 border border-amber-200 ${baseSelection}`;
    return `bg-slate-50 text-slate-400 border border-slate-100 ${baseSelection}`;
  };

  return (
    <AdminShell activeTab="Heatmaps">
      <div className="space-y-6">
        
        {/* ==========================================
            TOP HEADER ROW (Clean Layout)
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-3 pl-2">
            <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
              <Flame className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">Live Heatmaps</h1>
              <p className="text-[11px] text-slate-400 font-medium">Density index & area activity matrix</p>
            </div>
          </div>

          {/* Layer Controls - Clickable Toggle */}
          <div className="flex items-center gap-2 pr-2 justify-end">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2">Layer View:</span>
            {["Thermal", "Density", "Standard"].map((layer) => (
              <button
                key={layer}
                onClick={() => setMapIntensity(layer)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  mapIntensity === layer 
                    ? "bg-indigo-950 text-white border-transparent shadow-xs" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {layer}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================
            METRIC INSIGHT CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-xs">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Peak Density Region</span>
              <h3 className="text-sm font-black text-slate-900 mt-0.5">{regions[0].name}</h3>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-xs">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Avg Activity Index</span>
              <h3 className="text-2xl font-extrabold text-indigo-950 mt-0.5">65.2%</h3>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-xs">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <RefreshCw className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Matrix Auto-Sync</span>
              <h3 className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Feed Active
              </h3>
            </div>
          </div>
        </div>

        {/* ==========================================
            MAIN CONTENT SPLIT GRID
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* UPDATED LIGHT-THEME VISUAL MATRIX HEATMAP GENERATOR */}
          <div className="lg:col-span-2 bg-slate-50/70 text-slate-900 rounded-xl shadow-xs border border-slate-200 p-5 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
            
            {/* Map Overlay Info & Dynamic Selection details */}
            <div className="flex justify-between items-center z-10 flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                <Compass className="h-3.5 w-3.5 text-indigo-600 rotate-12" />
                <span className="text-xs font-bold tracking-tight text-slate-700">
                  Cluster View: <span className="text-indigo-950 font-extrabold">{selectedRegion.name}</span>
                </span>
              </div>
              
              {/* Dynamic Legend Tags */}
              <div className="flex gap-1.5 text-[9px] font-bold tracking-wider uppercase">
                <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-200 rounded">Critical</span>
                <span className="px-2 py-0.5 bg-orange-50 text-orange-600 border border-orange-200 rounded">High</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded">Normal</span>
              </div>
            </div>

            {/* Clickable Interactive Heatmap Matrix Grid (8x8) */}
            <div className="my-6 grid grid-cols-8 gap-2.5 max-w-md mx-auto w-full flex-1 justify-center content-center">
              {gridPoints.map((point) => (
                <button 
                  key={point.id} 
                  onClick={() => setSelectedNode({ id: point.id, level: point.level, metrics: point.metrics })}
                  className={`aspect-square rounded-lg transition-all duration-200 hover:scale-110 flex items-center justify-center font-mono text-[9px] font-medium ${getNodeColorClass(point.level, selectedNode.id === point.id)}`}
                  title={`Node ${point.id} (${point.label})`}
                >
                  {point.id}
                </button>
              ))}
            </div>

            {/* Matrix Action Panel Info Drawer */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 flex justify-between items-center text-xs z-10 shadow-3xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <span className="text-slate-500 font-medium">Selected Node: </span>
                <strong className="text-slate-900 font-bold">Node #{selectedNode.id}</strong>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded uppercase ${
                  selectedNode.level === 'critical' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'
                }`}>
                  {selectedNode.metrics}
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-400 hidden sm:inline">Projection: {mapIntensity}</span>
            </div>

            {/* Soft Grid Lines Background Line Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          </div>

          {/* SIDE PANEL: REGION INDEX REGISTRY */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div className="px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
                <h3 className="font-bold text-xs text-indigo-950 tracking-tight uppercase">Region Clusters Density Index</h3>
              </div>
              
              <div className="divide-y divide-slate-100 max-h-[350px] overflow-y-auto">
                {regions.map((region) => (
                  <div
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`p-4 cursor-pointer transition-all flex items-start justify-between gap-3 ${
                      selectedRegion.id === region.id ? "bg-indigo-50/50 border-l-4 border-indigo-950" : "hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">{region.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium font-mono">ID: {region.id} • {region.activeUnits} Clusters</p>
                    </div>

                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span className={`text-[9px] font-black tracking-wide px-2 py-0.5 rounded uppercase ${
                        region.density === "CRITICAL" ? "bg-rose-50 text-rose-600" :
                        region.density === "HIGH" ? "bg-orange-50 text-orange-600" :
                        "bg-emerald-50 text-emerald-600"
                      }`}>
                        {region.density}
                      </span>
                      <span className="text-[10px] font-bold text-slate-600 font-mono">{region.activityScore}% Load</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Snapshot Drawer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                <AlertCircle className="h-3.5 w-3.5 text-indigo-950" />
                <span>Selected Cluster Overview</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-2.5 text-[11px] font-semibold text-slate-600 space-y-1 shadow-3xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Area:</span>
                  <span className="text-slate-900 font-bold truncate max-w-[140px]">{selectedRegion.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Risk Parameters:</span>
                  <span className={`font-bold ${selectedRegion.riskLevel === 'High' ? 'text-rose-600' : 'text-slate-700'}`}>{selectedRegion.riskLevel} Attention Required</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}