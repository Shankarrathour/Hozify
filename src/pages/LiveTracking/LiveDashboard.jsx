import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Download, 
  Compass, 
  Plus, 
  Minus, 
  Layers, 
  AlertTriangle,
  Clock,
  Loader2
} from "lucide-react";

export default function LiveDashboard() {
  // ==========================================
  // CLICKABLE / INTERACTIVE STATES
  // ==========================================
  const [selectedAlertId, setSelectedAlertId] = useState(1); // Default selected first alert
  const [mapZoom, setMapZoom] = useState(1);
  const [showSatelliteLayer, setShowSatelliteLayer] = useState(false);
  const [timeframe, setTimeframe] = useState("Last 14 Days");
  const [isExporting, setIsExporting] = useState(false);

  // Urgent System Alerts Data From Image
  const urgentAlerts = [
    {
      id: 1,
      type: "SOS TRIGGERED",
      vehicle: "Vehicle #V-2089 (E. Jenkins)",
      desc: "Location lock lost in Sector 7-G. Immediate verification required.",
      time: "2m ago",
      borderLeft: "border-l-4 border-l-rose-600",
      typeColor: "text-rose-600",
      bgColor: "bg-rose-50/40",
      mapCoords: { top: "45%", left: "50%" } // Simulated Map Marker Coordinates
    },
    {
      id: 2,
      type: "GEOFENCE BREACH",
      vehicle: "Vehicle #V-0041 (M. Rossi)",
      desc: "Exited designated corridor: Interstate 95 Northbound.",
      time: "14m ago",
      borderLeft: "border-l-4 border-l-amber-500",
      typeColor: "text-amber-600",
      bgColor: "bg-amber-50/40",
      mapCoords: { top: "30%", left: "65%" }
    },
    {
      id: 3,
      type: "UNSCHEDULED STOP",
      vehicle: "Vehicle #V-1102 (L. Kim)",
      desc: "Idle for >15 minutes in non-delivery zone: Warehouse District.",
      time: "28m ago",
      borderLeft: "border-l-4 border-l-slate-800",
      typeColor: "text-slate-800",
      bgColor: "bg-slate-50/60",
      mapCoords: { top: "65%", left: "38%" }
    },
    {
      id: 4,
      type: "ETA DELAY",
      vehicle: "Vehicle #V-3049 (S. Gupta)",
      desc: "ETA recalculated: +22 minutes due to traffic congestion.",
      time: "1h ago",
      borderLeft: "border-l-4 border-l-slate-300",
      typeColor: "text-slate-500",
      bgColor: "bg-slate-50/30",
      mapCoords: { top: "55%", left: "58%" }
    }
  ];

  // Simulated Dynamic Chart Data change based on dropdown selection
  const chartPaths = {
    "Last 14 Days": {
      standard: "M 0 120 L 150 100 L 300 60 L 450 130 L 600 100 L 750 55 L 900 120 L 1000 120",
      standardArea: "M 0 120 L 150 100 L 300 60 L 450 130 L 600 100 L 750 55 L 900 120 L 1000 120 L 1000 180 L 0 180 Z",
      express: "M 0 150 L 150 140 L 300 130 L 450 165 L 600 160 L 750 145 L 900 165 L 1000 165",
      expressArea: "M 0 150 L 150 140 L 300 130 L 450 165 L 600 160 L 750 145 L 900 165 L 1000 165 L 1000 180 L 0 180 Z",
      peaks: { std1: [300, 60], std2: [750, 55], exp: [300, 130] }
    },
    "Last 30 Days": {
      standard: "M 0 90 L 150 130 L 300 45 L 450 110 L 600 70 L 750 95 L 900 50 L 1000 80",
      standardArea: "M 0 90 L 150 130 L 300 45 L 450 110 L 600 70 L 750 95 L 900 50 L 1000 80 L 1000 180 L 0 180 Z",
      express: "M 0 130 L 150 160 L 300 110 L 450 140 L 600 120 L 750 155 L 900 130 L 1000 140",
      expressArea: "M 0 130 L 150 160 L 300 110 L 450 140 L 600 120 L 750 155 L 900 130 L 1000 140 L 1000 180 L 0 180 Z",
      peaks: { std1: [300, 45], std2: [900, 50], exp: [300, 110] }
    }
  };

  const currentChart = chartPaths[timeframe] || chartPaths["Last 14 Days"];

  // Click handler for exporting reports
  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert("Success: Operational report exported successfully as CSV.");
    }, 1500);
  };

  // Find active coordinated alert unit info
  const activeAlertUnit = urgentAlerts.find(a => a.id === selectedAlertId) || urgentAlerts[0];

  return (
    <AdminShell activeTab="Dashboard" searchPlaceholder="Global tracking search...">
      <div className="space-y-6">
        
        {/* ==========================================
            1. MASTER DASHBOARD HEADER
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Operational Dashboard</h1>
            <p className="text-xs text-slate-500 mt-0.5">Real-time oversight for Hozify global fleet operations.</p>
          </div>

          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 active:bg-slate-100 transition-colors disabled:opacity-75"
          >
            {isExporting ? (
              <Loader2 className="h-3.5 w-3.5 text-slate-500 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5 text-slate-500" />
            )}
            <span>{isExporting ? "EXPORTING..." : "EXPORT REPORT"}</span>
          </button>
        </div>

        {/* ==========================================
            2. TOP LEVEL STATS CARDS (4 COLUMNS)
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Active Vehicles */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ↗ 12%
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-4">ACTIVE VEHICLES</p>
              <h3 className="text-3xl font-extrabold text-slate-900 mt-0.5 tracking-tight">1,284</h3>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full bg-slate-950 w-[70%]" />
            </div>
          </div>

          {/* Card 2: Jobs In Progress */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                  Steady
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-4">JOBS IN PROGRESS</p>
              <h3 className="text-3xl font-extrabold text-slate-900 mt-0.5 tracking-tight">452</h3>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full bg-blue-500 w-[45%]" />
            </div>
          </div>

          {/* Card 3: On-Time Performance */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ↑ 98.2%
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-4">ON-TIME PERFORMANCE</p>
              <h3 className="text-3xl font-extrabold text-slate-900 mt-0.5 tracking-tight">94%</h3>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full bg-slate-950 w-[94%]" />
            </div>
          </div>

          {/* Card 4: Active SOS Alerts (Critical Dark Card) */}
          <div className="bg-slate-950 text-white border border-slate-900 rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-[-20px] top-[-10px] text-slate-900/60 font-light select-none pointer-events-none text-9xl">
              ✱
            </div>
            
            <div className="z-10">
              <div className="flex justify-between items-center">
                <div className="p-2 bg-slate-900 text-slate-200 border border-slate-800 rounded-lg">
                  <span className="text-lg font-bold">✱</span>
                </div>
                <span className="text-[9px] font-black tracking-wide px-2 py-0.5 bg-rose-600 text-white rounded">
                  CRITICAL
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-4">ACTIVE SOS ALERTS</p>
              <h3 className="text-3xl font-extrabold text-white mt-0.5 tracking-tight">03</h3>
            </div>

            <button 
              onClick={() => alert("Routing terminal interface directly to Emergency dispatch hub...")}
              className="w-full mt-5 bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200 transition-colors py-2 rounded-lg text-center text-xs font-bold tracking-wide uppercase z-10"
            >
              View Emergency Hub
            </button>
          </div>

        </div>

        {/* ==========================================
            3. MIDDLE CONTENT SECTIONS: MAP & ALERTS LIST
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Operational Map View Panel */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[520px]">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Compass className="h-4 w-4 text-slate-500" />
                <span>Operational Map View</span>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button className="text-[11px] font-bold px-3 py-1 bg-white text-slate-800 rounded shadow-sm">All Regions</button>
                <button onClick={() => alert("Filtering Map View to Region: North America")} className="text-[11px] font-bold px-3 py-1 text-slate-500 hover:text-slate-800">North America</button>
              </div>
            </div>

            {/* Futuristic Map Simulator Canvas */}
            <div className={`flex-1 relative overflow-hidden flex items-center justify-center transition-colors duration-300 ${showSatelliteLayer ? "bg-[#0b1319]" : "bg-[#1a232a]"}`}>
              
              {/* Fake Topography Maps Image Overlay background */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-300 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80')`,
                  transform: `scale(${mapZoom})`
                }}
              />

              {/* Radar Radial Topography Simulation Line Loops */}
              <div className="absolute w-[650px] h-[650px] border border-sky-500/5 rounded-full pointer-events-none" />
              <div className="absolute w-[450px] h-[450px] border border-sky-500/10 rounded-full pointer-events-none" />
              <div className="absolute w-[250px] h-[250px] border border-sky-500/15 rounded-full pointer-events-none" />
              
              {/* Fake Multi-radial Road Ray Matrix */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(56,189,248,0.12)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-30" />
              
              {/* DYNAMIC MAP INCIDENT LIVE TARGET MARKER BASED ON SELECTED LEFT SIDEBAR ROW */}
              <div 
                className="absolute transition-all duration-500 z-10 flex flex-col items-center"
                style={{ top: activeAlertUnit.mapCoords.top, left: activeAlertUnit.mapCoords.left }}
              >
                {/* Micro Pulsating Ring Overlay */}
                <div className="absolute -inset-3 border border-rose-500 rounded-full animate-ping opacity-75" />
                
                {/* Core Glowing Vector Point */}
                <div className={`w-4 h-4 rounded-full ring-4 flex items-center justify-center ${activeAlertUnit.id === 1 ? "bg-rose-500 ring-rose-500/30" : "bg-amber-500 ring-amber-500/30"}`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                
                {/* HUD Label Float Badge */}
                <div className="mt-1.5 bg-slate-900/90 text-white font-mono text-[9px] px-1.5 py-0.5 rounded border border-slate-700 shadow whitespace-nowrap">
                  {activeAlertUnit.vehicle.split(" ")[0]} ({activeAlertUnit.type.split(" ")[0]})
                </div>
              </div>

              {/* Float Map Control Buttons (Top Right Corner) */}
              <div className="absolute right-4 top-4 flex flex-col gap-1 z-20">
                <button 
                  onClick={() => setMapZoom(prev => Math.min(prev + 0.15, 1.6))}
                  className="bg-white text-slate-700 p-1.5 rounded-md border border-slate-200 shadow-sm hover:bg-slate-50 transition-transform active:scale-95"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setMapZoom(prev => Math.max(prev - 0.15, 0.85))}
                  className="bg-white text-slate-700 p-1.5 rounded-md border border-slate-200 shadow-sm hover:bg-slate-50 transition-transform active:scale-95"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setShowSatelliteLayer(!showSatelliteLayer)}
                  className={`p-1.5 rounded-md border shadow-sm mt-2 transition-colors ${showSatelliteLayer ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}
                  title="Toggle Vector Overlay Mode"
                >
                  <Layers className="h-4 w-4" />
                </button>
              </div>

              {/* Interactive Color Legend Dashboard Overlay */}
              <div className="absolute left-4 bottom-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg p-3.5 shadow-md w-48 z-20">
                <span className="text-[9px] font-extrabold text-slate-400 tracking-wider block mb-2">LIVE LEGEND</span>
                <div className="space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-slate-600">In Transit</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-medium">(1,120)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-slate-600">Delayed</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-medium">(141)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="text-slate-600">Stopped</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-medium">(23)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgent System Alerts Side list Widget */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[520px]">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-slate-700" />
              <h3 className="font-bold text-sm text-slate-900">Urgent System Alerts</h3>
            </div>

            {/* Inner Content Area - Scrollable Stack Rows */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
              {urgentAlerts.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedAlertId(item.id)}
                  className={`border p-3.5 rounded-lg transition-all cursor-pointer ${item.bgColor} ${item.borderLeft} ${selectedAlertId === item.id ? "ring-2 ring-indigo-500 border-transparent scale-[1.01] shadow-sm" : "border-slate-150 hover:border-slate-300"}`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className={`text-[10px] font-extrabold tracking-wide uppercase ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">{item.time}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mt-2">{item.vehicle}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Footer Call Trigger */}
            <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
              <button 
                onClick={() => alert("Opening systemic list matrix view for total historical incident tracking records...")}
                className="text-xs font-bold text-slate-700 hover:text-slate-900 uppercase tracking-wider transition-colors"
              >
                View All Incidents
              </button>
            </div>
          </div>

        </div>

        {/* ==========================================
            4. BOTTOM CONTENT PANEL: VOLUME TRENDS
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Tracking Volume Trends</h3>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Fleet utilization and job throughput over the last 14 days.</p>
            </div>
            
            {/* Right Controls Area: Legend Badges and Toggle Menu Selector */}
            <div className="flex items-center gap-5 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                <span className="text-slate-600">Standard Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-slate-600">Express Jobs</span>
              </div>
              
              {/* Dynamic Data Dropdown Selector Trigger */}
              <select 
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs bg-white text-slate-700 font-bold focus:outline-none focus:border-indigo-500 cursor-pointer transition-colors"
              >
                <option value="Last 14 Days">Last 14 Days</option>
                <option value="Last 30 Days">Last 30 Days</option>
              </select>
            </div>
          </div>

          {/* Precision Native Canvas Simulation Layer via SVG Viewport mapping */}
          <div className="mt-6 w-full h-44 relative">
            <svg viewBox="0 0 1000 180" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaStandard" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="areaExpress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid rows guides */}
              <line x1="0" y1="45" x2="1000" y2="45" stroke="#f8fafc" strokeWidth="1" />
              <line x1="0" y1="90" x2="1000" y2="90" stroke="#f8fafc" strokeWidth="1" />
              <line x1="0" y1="135" x2="1000" y2="135" stroke="#f8fafc" strokeWidth="1" />

              {/* Area filled masks linked directly to active state parameters */}
              <path d={currentChart.standardArea} fill="url(#areaStandard)" className="transition-all duration-500" />
              <path d={currentChart.expressArea} fill="url(#areaExpress)" className="transition-all duration-500" />

              {/* Paths lines matching graph node points */}
              <path d={currentChart.standard} fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500" />
              <path d={currentChart.express} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500" />

              {/* Specific Anchor Points (Circles) mapped based on timeframe index vectors */}
              <circle cx={currentChart.peaks.std1[0]} cy={currentChart.peaks.std1[1]} r="4.5" fill="#0f172a" className="transition-all duration-500" />
              <circle cx={currentChart.peaks.std2[0]} cy={currentChart.peaks.std2[1]} r="4.5" fill="#0f172a" className="transition-all duration-500" />
              <circle cx={currentChart.peaks.exp[0]} cy={currentChart.peaks.exp[1]} r="3.5" fill="#3b82f6" className="transition-all duration-500" />
            </svg>
          </div>

          {/* Time Series X-Axis Markers Grid Column labels footer */}
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-4 px-1 tracking-wider uppercase">
            {timeframe === "Last 14 Days" ? (
              <>
                <span>MON 01</span>
                <span>WED 03</span>
                <span>FRI 05</span>
                <span>SUN 07</span>
                <span>TUE 09</span>
                <span>THU 11</span>
                <span>SAT 13</span>
                <span>SUN 14</span>
              </>
            ) : (
              <>
                <span>DAY 01</span>
                <span>DAY 05</span>
                <span>DAY 10</span>
                <span>DAY 15</span>
                <span>DAY 20</span>
                <span>DAY 25</span>
                <span>DAY 28</span>
                <span>DAY 30</span>
              </>
            )}
          </div>
        </div>

      </div>
    </AdminShell>
  );
}