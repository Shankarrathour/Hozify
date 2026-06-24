import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell"; // आपका ग्लोबल लेआउट रैपर
import {
  Calendar,
  Download,
  TrendingUp,
  Clock,
  Truck,
  Users,
  Plus,
  Minus,
  Layers,
  ChevronRight,
  AlertTriangle
} from "lucide-react";

export default function TrackingAnalytics() {
  // ==========================================
  // INTERACTIVE STATES
  // ==========================================
  const [timeRange, setTimeRange] = useState("Last 30 Days");
  const [heatmapDensity, setHeatmapDensity] = useState("All"); // All, High, Med, Low
  const [activeMetricCard, setActiveMetricCard] = useState("efficiency");
  const [peakTimeFilter, setPeakTimeFilter] = useState("Workdays");
  const [zoomLevel, setZoomLevel] = useState(12);
  const [showOptimizationAlert, setShowOptimizationAlert] = useState(true);

  // Mock Data from image_5ffe04.jpg
  const partners = [
    { rank: 1, name: "Logistics Prime X", fulfillment: "98.2%", status: "top" },
    { rank: 2, name: "Global Transit Corp", fulfillment: "95.5%", status: "normal" },
    { rank: 3, name: "SwiftPath Delivery", fulfillment: "92.1%", status: "normal" },
    { rank: 4, name: "Atlas Supply Chain", fulfillment: "89.4%", status: "normal" },
    { rank: 5, name: "Urban Flow Partners", fulfillment: "87.2%", status: "normal" }
  ];

  const peakHours = [
    { hour: "00h", value: 20 },
    { hour: "03h", value: 15 },
    { hour: "06h", value: 45 },
    { hour: "09h", value: 90 }, // Peak
    { hour: "12h", value: 75 },
    { hour: "15h", value: 60 },
    { hour: "18h", value: 85 }, 
    { hour: "21h", value: 35 }
  ];

  return (
    <AdminShell activeTab="Analytics Feed">
      <div className="bg-[#ffffff] text-slate-900 font-sans p-6 space-y-6 max-w-[1600px] mx-auto">

        {/* ==========================================
            1. HEADER SECTION (MAIN HEADING + ACTIONS)
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 mb-0.5">
              Tracking Analytics
            </h1>
            <h2 className="text-xs font-medium text-slate-500">
              Enterprise-wide operational density and delivery efficiency metrics.
            </h2>
          </div>
          
          <div className="flex items-center gap-2 sm:self-end">
            {/* Calendar Picker Filter button */}
            <button 
              onClick={() => setTimeRange(timeRange === "Last 30 Days" ? "Last 7 Days" : "Last 30 Days")}
              className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>{timeRange}</span>
            </button>
            
            {/* Export Report Action button */}
            <button 
              onClick={() => alert("Exporting metrics ledger report...")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-900 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-slate-500" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. METRICS TILES ROW GRID (4 CARDS)
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Operational Efficiency Card */}
          <div 
            onClick={() => setActiveMetricCard("efficiency")}
            className={`bg-white p-4 rounded-xl border transition-all cursor-pointer select-none ${
              activeMetricCard === "efficiency" ? "border-blue-600 shadow-sm ring-1 ring-blue-600/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><TrendingUp className="h-4 w-4" /></div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">+12.4%</span>
            </div>
            <div className="mt-4 space-y-1">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Operational Efficiency</span>
              <span className="text-2xl font-black text-slate-900 block">94.2%</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-blue-600 h-1 rounded-full" style={{ width: "94.2%" }}></div>
            </div>
          </div>

          {/* Avg Delivery Delay Card */}
          <div 
            onClick={() => setActiveMetricCard("delay")}
            className={`bg-white p-4 rounded-xl border transition-all cursor-pointer select-none ${
              activeMetricCard === "delay" ? "border-rose-600 shadow-sm ring-1 ring-rose-600/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg"><Clock className="h-4 w-4" /></div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-md">+2.1m</span>
            </div>
            <div className="mt-4 space-y-1">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Avg. Delivery Delay</span>
              <span className="text-2xl font-black text-slate-900 block">14.3 min</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-rose-500 h-1 rounded-full" style={{ width: "45%" }}></div>
            </div>
          </div>

          {/* Active Deliveries Card */}
          <div 
            onClick={() => setActiveMetricCard("deliveries")}
            className={`bg-white p-4 rounded-xl border transition-all cursor-pointer select-none ${
              activeMetricCard === "deliveries" ? "border-purple-600 shadow-sm ring-1 ring-purple-600/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Truck className="h-4 w-4" /></div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md">Stable</span>
            </div>
            <div className="mt-4 space-y-1">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Active Deliveries</span>
              <span className="text-2xl font-black text-slate-900 block">1,284</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-purple-900 h-1 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Partner Utilization Card */}
          <div 
            onClick={() => setActiveMetricCard("utilization")}
            className={`bg-white p-4 rounded-xl border transition-all cursor-pointer select-none ${
              activeMetricCard === "utilization" ? "border-indigo-600 shadow-sm ring-1 ring-indigo-600/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Users className="h-4 w-4" /></div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">+8%</span>
            </div>
            <div className="mt-4 space-y-1">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Partner Utilization</span>
              <span className="text-2xl font-black text-slate-900 block">88.5%</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-indigo-400 h-1 rounded-full" style={{ width: "88.5%" }}></div>
            </div>
          </div>

        </div>

        {/* ==========================================
            3. CORE WORKSPACE: HEATMAP + PARTNERS RANK
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* MAP CANVAS PANEL */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-4 flex flex-col shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-50">
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Operational Density Heatmap</h3>
              
              {/* Density Map Legends */}
              <div className="flex items-center gap-3 text-xs font-bold">
                {["Low", "Med", "High", "All"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setHeatmapDensity(type)}
                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      heatmapDensity === type ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {type !== "All" && (
                      <span className={`w-2 h-2 rounded-full ${
                        type === "Low" ? "bg-slate-300" : type === "Med" ? "bg-blue-400" : "bg-indigo-950"
                      }`} />
                    )}
                    <span>{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* GEOGRAPHICAL NEW YORK HUD MAP VIEWPORT */}
            <div className="w-full h-[380px] bg-[#dbe8f4] border border-slate-100 rounded-xl mt-4 relative overflow-hidden shadow-inner select-none">
              
              {/* City Geography & Water Grids */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#c5d8e9 1px, transparent 1px), linear-gradient(90deg, #c5d8e9 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
                
                {/* Manhattan Landmass */}
                <div className="absolute top-0 left-[35%] w-[25%] h-[82%] bg-[#f7f5f0] border-x border-slate-300 transform rotate-12 shadow-sm flex flex-col justify-between p-4">
                  <span className="text-[9px] font-black tracking-widest text-slate-300 uppercase transform rotate-12 block">MANHATTAN</span>
                  <span className="text-[8px] font-bold text-blue-500/80 tracking-tight block text-center">Times Square</span>
                </div>

                {/* Brooklyn / Queens Landmass */}
                <div className="absolute bottom-0 right-0 w-[42%] h-[88%] bg-[#f4f2ed] border-l border-t border-slate-300 rounded-tl-[80px] p-6 shadow-xs">
                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase block">BROOKLYN</span>
                  <span className="text-[8px] font-semibold text-slate-400 block mt-12 text-center">Brooklyn Botanical Garden</span>
                </div>

                {/* Jersey City Left Landmass */}
                <div className="absolute top-0 left-0 w-[26%] h-full bg-[#f4f2ed] border-r border-slate-300 p-4">
                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase block">JERSEY CITY</span>
                  <span className="text-[8px] font-semibold text-slate-400 block mt-16">Hoboken</span>
                </div>
              </div>

              {/* HEATMAP REPLAY LAYERS */}
              {(heatmapDensity === "All" || heatmapDensity === "High") && (
                <>
                  <div className="absolute top-[32%] left-[42%] w-24 h-24 bg-indigo-950/20 rounded-full filter blur-xl animate-pulse"></div>
                  <div className="absolute top-[38%] left-[45%] w-12 h-12 bg-indigo-950/40 rounded-full filter blur-lg"></div>
                  <div className="absolute bottom-[28%] right-[24%] w-20 h-20 bg-indigo-950/25 rounded-full filter blur-xl"></div>
                </>
              )}

              {/* NEW YORK LANDMARKS REGISTRY */}
              <div className="absolute top-[18%] left-[46%] text-[8px] font-bold text-slate-500 bg-white/90 px-1.5 py-0.5 rounded border border-slate-200 shadow-3xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                <span>Washington Square Park</span>
              </div>
              
              <div className="absolute top-[40%] left-[32%] z-20 text-[13px] font-black text-slate-800 tracking-tight bg-white/30 backdrop-blur-3xs px-2 py-0.5 rounded-md">
                Jersey City
              </div>
              
              <div className="absolute top-[42%] left-[52%] z-20 text-lg font-black text-slate-900 tracking-tight">
                New York
              </div>

              <div className="absolute bottom-[35%] left-[28%] text-[8px] font-medium text-slate-500 bg-white/90 px-1 py-0.5 rounded border border-slate-200">Statue of Liberty</div>

              {/* FLOATING ZOOM CONTROLS */}
              <div className="absolute top-4 right-4 z-30 flex flex-col gap-1">
                <button 
                  onClick={() => setZoomLevel(prev => Math.min(prev + 1, 18))}
                  className="w-8 h-8 bg-white border border-slate-200 text-slate-800 rounded-t-md font-bold flex items-center justify-center hover:bg-slate-50 shadow-xs cursor-pointer active:scale-95"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setZoomLevel(prev => Math.max(prev - 1, 8))}
                  className="w-8 h-8 bg-white border border-x border-b border-slate-200 text-slate-800 rounded-b-md font-bold flex items-center justify-center hover:bg-slate-50 shadow-xs cursor-pointer active:scale-95"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => alert("Toggling Map Layers...")}
                  className="w-8 h-8 bg-white border border-slate-200 text-slate-800 rounded-md mt-2 flex items-center justify-center hover:bg-slate-50 shadow-xs cursor-pointer transition-colors"
                >
                  <Layers className="h-4 w-4" />
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT AREA: PARTNER PERFORMANCE RANKING */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 flex flex-col shadow-2xs">
            <div className="pb-3 border-b border-slate-50">
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Partner Performance</h3>
            </div>

            <div className="mt-4 flex-1 space-y-2">
              {partners.map((partner) => (
                <div 
                  key={partner.rank}
                  onClick={() => alert(`Showing details for: ${partner.name}`)}
                  className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-100 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center shadow-3xs">
                      {partner.rank}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{partner.name}</h4>
                      <span className="text-[10px] text-slate-400 font-medium">{partner.fulfillment} Fulfillment</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    {partner.status === "top" && (
                      <span className="w-4 h-4 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-[9px] font-black">★</span>
                    )}
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => alert("Opening full list of partners...")}
              className="w-full text-center py-2 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-700 bg-white mt-4 transition-colors shadow-3xs cursor-pointer active:scale-95"
            >
              View All Partners
            </button>
          </div>

        </div>

        {/* ==========================================
            4. PEAK USAGE TIMES HISTOGRAM GRAPH
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Peak Usage Times</h3>
              <p className="text-[11px] text-slate-400 font-medium">Volume distribution across a 24-hour operational cycle.</p>
            </div>
            
            <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              {["Workdays", "Weekends"].map((type) => (
                <button
                  key={type}
                  onClick={() => setPeakTimeFilter(type)}
                  className={`text-xs font-bold px-3 py-1 rounded-md transition-all cursor-pointer ${
                    peakTimeFilter === type ? "bg-white text-slate-900 shadow-3xs" : "text-slate-400 hover:text-slate-900"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 pb-2 px-2">
            <div className="h-28 w-full flex items-end gap-3 sm:gap-6 md:gap-10 border-b border-slate-100 relative">
              <div className="absolute left-0 right-0 bottom-1/2 border-t border-dashed border-slate-100 pointer-events-none"></div>

              {peakHours.map((bar, i) => (
                <div 
                  key={i} 
                  className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                  onClick={() => alert(`Timestamp Bucket: ${bar.hour} (${bar.value}% density)`)}
                >
                  <span className="text-[9px] font-mono font-black text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-100 px-1 rounded -mb-1">
                    {bar.value}%
                  </span>
                  
                  <div 
                    style={{ height: `${bar.value}px` }}
                    className={`w-full max-w-[24px] rounded-t-xs transition-all duration-300 ${
                      bar.value > 80 ? "bg-slate-900 group-hover:bg-blue-600" : "bg-slate-200 group-hover:bg-slate-400"
                    }`}
                  ></div>
                  
                  <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                    {bar.hour}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
            5. REAL-TIME EFFICIENCY ALERT BANNER
           ========================================== */}
        {showOptimizationAlert && (
          <div className="bg-[#0c0563] text-white p-5 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden shadow-md">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none flex items-center justify-center">
              <AlertTriangle className="h-40 w-40 transform translate-x-10 translate-y-6" />
            </div>

            <div className="space-y-1 relative z-10 max-w-3xl">
              <h4 className="text-xs font-black tracking-wider uppercase text-cyan-400">Real-time Efficiency Alert</h4>
              <p className="text-xs font-bold leading-relaxed text-slate-100">
                Congestion detected in the Northeast corridor (Zone B4). Routing algorithms recommend redistributing 15% of active jobs to Partner SwiftPath to maintain sub-15min delivery metrics.
              </p>
            </div>

            <div className="flex items-center gap-2 relative z-10 shrink-0 w-full md:w-auto">
              <button 
                onClick={() => {
                  alert("Executing dynamic cluster rerouting pipeline protocols...");
                  setShowOptimizationAlert(false);
                }}
                className="bg-white hover:bg-slate-50 text-[#0c0563] font-black text-xs px-4 py-2 rounded-lg shadow-sm transition-all cursor-pointer active:scale-95 w-full md:w-auto text-center"
              >
                Optimize Now
              </button>
              <button 
                onClick={() => alert("Opening full incident log...")}
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold text-xs px-4 py-2 rounded-lg transition-all cursor-pointer w-full md:w-auto text-center"
              >
                View Incident
              </button>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}