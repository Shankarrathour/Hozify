import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Calendar, 
  Truck, 
  Briefcase, 
  SlidersHorizontal, 
  Download, 
  Play, 
  Pause,
  Plus, 
  Minus, 
  Layers,
  AlertTriangle,
  Compass,
  Search,
  Bell,
  HelpCircle,
  Settings
} from "lucide-react";

export default function MovementHistory() {
  // ==========================================
  // INTERACTIVE STATES
  // ==========================================
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState("2x");
  const [timelineProgress, setTimelineProgress] = useState(45);
  const [activeMetric, setActiveMetric] = useState(null);

  // Mock Filters
  const [dateRange, setDateRange] = useState("Oct 12, 2023 - Oct 14, 2023");
  const [partnerId, setPartnerId] = useState("Hozify Logistics South");
  const [vehicleId, setVehicleId] = useState("TRK-9001-ALPHA");

  return (
    <AdminShell activeTab="Movement History">
      <div className="space-y-4 text-slate-900 bg-slate-50 p-2 rounded-xl">
        
        {/* ==========================================
            1. PAGE TITLE & COMPLIANCE ACTIONS
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Movement Audit View</h1>
            <p className="text-xs text-slate-500 mt-0.5">Historical path analysis and telemetry review for compliance and route optimization.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert("Exporting historical route audit trail logs...")}
              className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-slate-400" />
              <span>Export Audit Log</span>
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-4 py-2 bg-black text-white rounded-lg text-xs font-bold hover:bg-slate-900 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="h-3.5 w-3.5 fill-current" />}
              <span>Start Batch Replay</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. ANALYSIS FILTER PANEL
           ========================================== */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Date Range Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:bg-white focus:border-blue-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Partner ID Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Partner ID</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select 
                value={partnerId}
                onChange={(e) => setPartnerId(e.target.value)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:bg-white focus:border-blue-600 cursor-pointer appearance-none"
              >
                <option value="Hozify Logistics South">Hozify Logistics South</option>
                <option value="Matrix Cargo North">Matrix Cargo North</option>
              </select>
            </div>
          </div>

          {/* Vehicle ID Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Vehicle ID / Driver</label>
            <div className="relative">
              <Truck className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:bg-white focus:border-blue-600"
              />
            </div>
          </div>

          {/* Action Filter Button */}
          <button 
            onClick={() => alert(`Applying dynamic analysis filters for ${vehicleId}`)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Apply Analysis Filter</span>
          </button>
        </div>

        {/* ==========================================
            3. MAIN WORKSPACE: SIDE PANEL + MAP
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* LEFT SIDEBAR: TRIP DETAILS & METRICS */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Timeline Progress Tracking Card */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Trip Details</h3>
              
              <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                {/* Start Point */}
                <div 
                  className="flex gap-3 relative z-10 cursor-pointer group"
                  onClick={() => alert("Center map on South Distribution Hub")}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-[10px] font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    O
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">Start Point</span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">South Distribution Hub</h4>
                    <span className="text-[10px] text-slate-400 font-medium">08:42 AM • Oct 12</span>
                  </div>
                </div>

                {/* Current / Destination Target */}
                <div 
                  className="flex gap-3 relative z-10 cursor-pointer group"
                  onClick={() => alert("Center map on Central Port Terminal location")}
                >
                  <div className="w-6 h-6 rounded-full bg-rose-50 border-2 border-rose-600 flex items-center justify-center text-[10px] font-bold text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                    ✖
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">Current Stop / Destination</span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors">Central Port Terminal</h4>
                    <span className="text-[10px] text-rose-600 font-bold flex items-center gap-1">
                      ⚠️ Pending Arrival
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Telemetry Stats Numbers */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex-1 space-y-3">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Route Metrics</h3>
              
              <div className="grid grid-cols-2 gap-2">
                <div 
                  onClick={() => setActiveMetric("distance")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeMetric === "distance" ? "bg-blue-50 border-blue-300" : "bg-slate-50 border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-400 block">Total Distance</span>
                  <p className="text-sm font-black text-slate-800 mt-1">142.8 km</p>
                </div>
                
                <div 
                  onClick={() => setActiveMetric("speed")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeMetric === "speed" ? "bg-blue-50 border-blue-300" : "bg-slate-50 border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-400 block">Avg Speed</span>
                  <p className="text-sm font-black text-slate-800 mt-1">68 km/h</p>
                </div>

                <div 
                  onClick={() => setActiveMetric("fuel")}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeMetric === "fuel" ? "bg-blue-50 border-blue-300" : "bg-slate-50 border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-400 block">Fuel Consumed</span>
                  <p className="text-sm font-black text-slate-800 mt-1">18.4 L</p>
                </div>

                <div 
                  onClick={() => alert("Filtering timeline to map violation windows")}
                  className="bg-rose-50/50 p-3 rounded-lg border border-rose-100 hover:bg-rose-50 transition-all cursor-pointer"
                >
                  <span className="text-[10px] font-bold text-rose-500 block">Alerts</span>
                  <p className="text-sm font-black text-rose-600 mt-1">3 Anomalies</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT VIEW: CHICAGO IMAGE-MATCHED HIGH-FIDELITY MAP */}
          <div className="lg:col-span-9 flex flex-col gap-4">
            
            {/* MAP FRAME VIEWPORT Container */}
            <div className="bg-[#b4d6eb] border border-slate-200 rounded-xl h-[420px] relative overflow-hidden shadow-inner flex flex-col">
              
              {/* Chicago Grid Street Map Mock Design based on image */}
              <div className="absolute inset-0 opacity-90">
                {/* Grid Lines to simulate real Chicago planning roads */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#daeaf2 1px, transparent 1px), linear-gradient(90deg, #daeaf2 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                {/* Major Interstate Highway Routes */}
                <div className="absolute top-[20%] left-0 w-full h-1 bg-orange-200 border-y border-orange-300 transform -rotate-12"></div>
                <div className="absolute top-0 left-[35%] w-1.5 h-full bg-orange-200 border-x border-orange-300 transform rotate-12"></div>
                <div className="absolute bottom-[25%] left-0 w-full h-1 bg-orange-200 border-y border-orange-300"></div>

                {/* Lake Michigan Custom Polygon */}
                <div className="absolute top-0 right-0 w-[42%] h-full bg-[#7faed4] rounded-l-[120px] border-l-4 border-[#a3c3dc]/40 shadow-inner flex items-center justify-center">
                  <span className="text-[11px] font-bold tracking-widest text-[#5d8cb2] uppercase select-none transform rotate-90">Lake Michigan</span>
                </div>

                {/* Simulated Green Parks */}
                <div className="absolute top-[12%] left-[10%] w-24 h-28 bg-[#cbe3c5] rounded-xl border border-[#b4d4ad] opacity-80 p-2 text-[8px] font-bold text-slate-500">
                  Wrigley Field
                </div>
                <div className="absolute bottom-[10%] left-[15%] w-32 h-20 bg-[#cbe3c5] rounded-lg border border-[#b4d4ad] opacity-80 p-1 text-[8px] font-bold text-slate-500">
                  Douglas Park
                </div>
                <div className="absolute top-[45%] left-[18%] w-14 h-24 bg-[#cbe3c5] rounded-md border border-[#b4d4ad] opacity-80"></div>
              </div>

              {/* ROUTE REPLAY PATH LAYER */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Complete History Route path */}
                <path d="M 120,180 L 260,210 L 320,280 L 480,260 L 590,210" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
                <path d="M 120,180 L 260,210 L 320,280 L 480,260 L 590,210" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,4" strokeLinecap="round" opacity="0.9" />
                
                {/* Hazard / Breach Zones highlighted on path */}
                <circle cx="320" cy="280" r="8" fill="#ef4444" opacity="0.3" className="animate-ping" />
                <circle cx="320" cy="280" r="4" fill="#ef4444" />
                <circle cx="480" cy="260" r="8" fill="#ef4444" opacity="0.3" className="animate-ping" />
                <circle cx="480" cy="260" r="4" fill="#ef4444" />
              </svg>

              {/* DYNAMIC TEXT LANDMARKS / MARKERS matching provided map image */}
              <div className="absolute top-[45%] left-[42%] z-20 font-bold text-slate-800 text-xl tracking-tight drop-shadow-xs">
                Chicago
              </div>

              <div className="absolute top-[22%] left-[34%] z-20 bg-white/95 px-2 py-1 rounded-md border border-slate-200 shadow-2xs text-[9px] font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Costco Wholesale</span>
              </div>

              <div className="absolute top-[48%] right-[22%] z-20 bg-white/95 px-2 py-1 rounded-md border border-slate-200 shadow-2xs text-[9px] font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>Navy Pier</span>
              </div>

              <div className="absolute top-[36%] right-[24%] z-20 bg-white/90 px-1.5 py-0.5 rounded text-[8px] font-medium text-slate-600 border border-slate-200">
                William E. Dever Crib
              </div>

              <div className="absolute bottom-[35%] left-[40%] z-20 bg-white/95 px-2 py-1 rounded-md border border-slate-200 shadow-2xs text-[9px] font-bold text-slate-700">
                Museum of Contemporary Art
              </div>

              <div className="absolute bottom-[18%] left-[45%] z-20 bg-white/95 px-2 py-1 rounded-md border border-slate-200 shadow-2xs text-[9px] font-bold text-slate-700">
                Field Museum
              </div>

              <div className="absolute bottom-[38%] right-[15%] z-20 bg-white/95 px-2 py-1 rounded-md border border-slate-200 shadow-2xs text-[9px] font-bold text-slate-700">
                Four Mile Crib
              </div>

              {/* Graphical Moving Vehicle Overlay Marker Badge */}
              <div 
                onClick={() => alert(`Active Vehicle Segment: ${vehicleId}\nHeading: North-East\nStatus: Replaying stream`)}
                className="absolute top-[58%] left-[50%] z-30 bg-slate-950 text-white p-2 rounded-xl border border-white/20 shadow-xl flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-transform hover:scale-105"
              >
                <Truck className="h-4 w-4 text-cyan-400 fill-current" />
                <span className="font-mono text-[9px] font-black tracking-wider">{vehicleId}</span>
              </div>

              {/* MAP FLOATING CONTROLS HUD RIGHT */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-1">
                <button 
                  onClick={() => alert("Zooming In Map View Layer")}
                  className="w-8 h-8 bg-white text-slate-800 border border-slate-200 rounded-t-md font-bold flex items-center justify-center hover:bg-slate-50 shadow-sm cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => alert("Zooming Out Map View Layer")}
                  className="w-8 h-8 bg-white text-slate-800 border-x border-b border-slate-200 rounded-b-md font-bold flex items-center justify-center hover:bg-slate-50 shadow-sm cursor-pointer"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => alert("Toggling Vector Maps / Satellite Terrain Map layers")}
                  className="w-8 h-8 bg-white text-slate-800 border border-slate-200 rounded-md mt-2 flex items-center justify-center hover:bg-slate-50 shadow-sm cursor-pointer transition-colors"
                >
                  <Layers className="h-4 w-4" />
                </button>
              </div>

              {/* MAP BOTTOM LEGEND HUD PANEL */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-200 shadow-md flex items-center gap-4 text-[10px] font-black text-slate-600">
                <div className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600" onClick={() => alert("Showing full movement grid track logs")}>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                  <span>Movement Path</span>
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer hover:text-rose-600" onClick={() => alert("Filtering timeline to map violation segments")}>
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block" />
                  <span>Violation</span>
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer hover:text-slate-500" onClick={() => alert("Highlighting static vehicle idle zones")}>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                  <span>Idle Time</span>
                </div>
              </div>
            </div>

            {/* ==========================================
                4. VIDEO TIMELINE REPLAY CONTROLLER WIDGET
               ========================================== */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row items-center gap-4">
              
              {/* Play Pause Trigger Button */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-md hover:bg-slate-900 transition-all active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
              </button>

              {/* Live Sliding Timeline Bar Meter */}
              <div className="flex-1 w-full space-y-1">
                <div className="flex justify-between items-center text-[11px] font-mono font-bold text-slate-400">
                  <span>Oct 12, 08:42 AM</span>
                  <span className="text-slate-800 font-extrabold flex items-center gap-1">
                    <Compass className={`h-3 w-3 ${isPlaying ? 'animate-spin' : ''}`} />
                    <span>Speed: 64 km/h</span>
                  </span>
                  <span>Oct 12, 11:15 AM</span>
                </div>
                
                <div className="relative pt-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={timelineProgress}
                    onChange={(e) => setTimelineProgress(e.target.value)}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  {/* Custom Threat Markers Layout over Timeline */}
                  <div className="absolute top-1.5 left-[35%] w-1.5 h-3 bg-rose-600 rounded-xs cursor-pointer hover:scale-125 transition-transform" title="Jump to Speed Breach Zone" onClick={() => setTimelineProgress(35)} />
                  <div className="absolute top-1.5 left-[70%] w-1.5 h-3 bg-rose-600 rounded-xs cursor-pointer hover:scale-125 transition-transform" title="Jump to Geofence Violation Event" onClick={() => setTimelineProgress(70)} />
                </div>
              </div>

              {/* Speed Multiplier Badge Selection Controls */}
              <div className="flex items-center gap-1.5 border-l border-slate-100 pl-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Playback</span>
                <div className="flex gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                  {["1x", "2x", "4x"].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setPlaybackSpeed(speed)}
                      className={`text-[10px] font-black px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        playbackSpeed === speed ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {speed}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ==========================================
            5. ANOMALY DETECTOR NOTIFICATION BAR FOOTER
           ========================================== */}
        <div className="bg-white border border-slate-200 px-4 py-3 rounded-xl flex items-center justify-between shadow-3xs">
          <span className="text-xs font-bold text-slate-900 tracking-tight">Historical Log Streams</span>
          
          <button 
            onClick={() => alert("Opening Detailed Anomaly Matrix stream overview panels...")}
            className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 border border-rose-100 font-black text-[10px] uppercase tracking-wider rounded-lg shadow-3xs hover:bg-rose-100 transition-all cursor-pointer active:scale-95 animate-pulse"
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>3 Critical Anomalies Found</span>
          </button>
        </div>

      </div>
    </AdminShell>
  );
}