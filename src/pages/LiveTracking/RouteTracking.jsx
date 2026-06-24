import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Settings, 
  Video, 
  Phone, 
  RotateCcw,
  Clock, 
  MapPin, 
  Gauge
} from "lucide-react";

export default function RouteTracking() {
  // ==========================================
  // MASTER MOCK DATA (Exactly from image_378519.jpg)
  // ==========================================
  const initialRoutes = [
    {
      id: "RT-7724",
      from: "Main Logistics Hub",
      to: "West Quay",
      driver: "Mark Henderson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      vehicle: "Freightliner Cascadia • WH-902",
      progress: 68,
      eta: "14:45",
      status: "Delayed",
      delayTime: "+15m",
      currentSpeed: "42 mph",
      lastUpdate: "14s ago",
      remainingTime: "0h 42m",
      distanceToGo: "18.4 miles",
      fuelLevel: 74,
      fuelColor: "bg-emerald-500",
      // Map Coordinates simulation for accuracy
      pinTop: "48%",
      pinLeft: "76%"
    },
    {
      id: "RT-8109",
      from: "Terminal A",
      to: "Downtown Dist.",
      driver: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      vehicle: "Mercedes Sprinter • DX-441",
      progress: 32,
      eta: "15:10",
      status: "On Time",
      delayTime: null,
      currentSpeed: "55 mph",
      lastUpdate: "1m ago",
      remainingTime: "1h 15m",
      distanceToGo: "45.2 miles",
      fuelLevel: 89,
      fuelColor: "bg-emerald-500",
      pinTop: "42%",
      pinLeft: "58%"
    },
    {
      id: "RT-9011",
      from: "East Port",
      to: "Cold Storage #4",
      driver: "James Aris",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      vehicle: "Volvo VNL • CS-220",
      progress: 85,
      eta: "14:20",
      status: "On Time",
      delayTime: null,
      currentSpeed: "60 mph",
      lastUpdate: "32s ago",
      remainingTime: "0h 12m",
      distanceToGo: "7.1 miles",
      fuelLevel: 45,
      fuelColor: "bg-amber-500",
      pinTop: "55%",
      pinLeft: "45%"
    },
    {
      id: "RT-5502",
      from: "Regional Hub",
      to: "Airport Cargo",
      driver: "Leon Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      vehicle: "Isuzu NPR • AC-109",
      progress: 12,
      eta: "16:30",
      status: "Delayed",
      delayTime: "+4m",
      currentSpeed: "18 mph",
      lastUpdate: "5s ago",
      remainingTime: "2h 05m",
      distanceToGo: "32.0 miles",
      fuelLevel: 18,
      fuelColor: "bg-rose-500",
      pinTop: "65%",
      pinLeft: "30%"
    }
  ];

  const [routes] = useState(initialRoutes);
  const [selectedRoute, setSelectedRoute] = useState(initialRoutes[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tabFilter, setTabFilter] = useState("All");

  const filteredRoutes = useMemo(() => {
    return routes.filter((route) => {
      const matchesSearch = 
        route.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.from.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab = 
        tabFilter === "All" || 
        (tabFilter === "Delayed" && route.status === "Delayed") ||
        (tabFilter === "Pending" && route.progress === 0);

      return matchesSearch && matchesTab;
    });
  }, [routes, searchQuery, tabFilter]);

  return (
    <AdminShell activeTab="Live Tracking">
      <div className="space-y-4">
        
        {/* TOP GLOBAL HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 pl-2">
            <h1 className="text-xl font-black text-indigo-950 tracking-tight">Active Routes</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-0 sm:mx-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search routes, drivers, vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4 pr-2">
            <button className="text-slate-500 hover:text-indigo-950 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-600 rounded-full" />
            </button>
            <button className="text-slate-500 hover:text-indigo-950">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="text-slate-500 hover:text-indigo-950">
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* MASTER SPLIT GRID PANEL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs min-h-[620px]">
          
          {/* LEFT SIDEBAR: ACTIVE ROUTE LIST */}
          <div className="border-r border-slate-200 flex flex-col bg-white">
            <div className="p-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-slate-900">Active Routes</h3>
                <span className="bg-blue-900 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md">
                  {initialRoutes.filter(r => r.status === 'Delayed').length + 2} Active
                </span>
              </div>
            </div>

            {/* Toolbar Filter Buttons (All, Delayed, Pending) */}
            <div className="px-4 py-3 border-b border-slate-100 flex gap-2">
              {["All", "Delayed", "Pending"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTabFilter(tab)}
                  className={`flex-1 text-center py-2 rounded-lg font-bold text-xs transition-all ${
                    tabFilter === tab 
                      ? "bg-black text-white" 
                      : "bg-slate-100 hover:bg-slate-200/60 text-slate-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Scrollable Route Feed List */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {filteredRoutes.map((route) => (
                <div 
                  key={route.id}
                  onClick={() => setSelectedRoute(route)}
                  className={`p-4 cursor-pointer transition-all ${selectedRoute.id === route.id ? "bg-slate-50 border-l-4 border-black" : "hover:bg-slate-50/50"}`}
                >
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-slate-400 font-mono">{route.id}</span>
                    {route.status === "Delayed" ? (
                      <span className="text-rose-500 font-extrabold bg-rose-50 px-2 py-0.5 rounded flex items-center gap-1">
                        ⚠️ {route.delayTime}
                      </span>
                    ) : (
                      <span className="text-blue-600 font-extrabold bg-blue-50 px-2 py-0.5 rounded">On Time</span>
                    )}
                  </div>

                  <h4 className="text-xs font-black text-slate-900 mt-2">
                    {route.from} → {route.to}
                  </h4>

                  <div className="flex items-center gap-2 mt-3">
                    <img src={route.avatar} alt="" className="w-5 h-5 rounded-full object-cover" />
                    <div className="text-[10px] font-semibold text-slate-700">
                      <strong className="font-bold text-slate-900 block leading-tight">{route.driver}</strong>
                      <span className="text-slate-400 font-medium">{route.vehicle}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-1">
                      <span>Progress ({route.progress}%)</span>
                      <span className="text-slate-900 font-mono font-black">ETA {route.eta}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${route.status === 'Delayed' ? 'bg-black' : 'bg-blue-600'}`}
                        style={{ width: `${route.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIEW: MAP HUD FRAME & STATS */}
          <div className="lg:col-span-2 flex flex-col h-full bg-[#f4f3f0]">
            
            {/* EXACT TOP HUD BAR OVER MAP */}
            <div className="absolute lg:relative w-full z-20 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-4 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-black rounded-full animate-ping" />
                <div>
                  <h4 className="text-xs font-black text-slate-900 font-mono">{selectedRoute.id} Tracking</h4>
                  <div className="flex gap-4 mt-0.5 text-[11px] font-mono font-bold text-slate-700">
                    <span>CURRENT SPEED: <strong className="text-slate-950">{selectedRoute.currentSpeed}</strong></span>
                    <span className="text-slate-300">|</span>
                    <span>LAST UPDATE: <strong className="text-slate-400 font-sans">{selectedRoute.lastUpdate}</strong></span>
                  </div>
                </div>
              </div>

              {/* Exact Controls Group from image_378519.jpg */}
              <div className="flex items-center gap-1.5 ml-auto lg:ml-0">
                <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-lg transition-colors">
                  <Video className="h-4 w-4" />
                </button>
                <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-lg transition-colors">
                  <Phone className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => alert(`Recalculating routing directions data grid matrix for ${selectedRoute.id}...`)}
                  className="bg-black text-white text-[11px] font-black px-4 py-2 rounded-lg hover:bg-slate-900 flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Re-route</span>
                </button>
              </div>
            </div>

            {/* MAP AREA COMPONENT (True Light Map Styling Match) */}
            <div className="flex-1 relative overflow-hidden bg-[#e5e5ea]">
              {/* High Accuracy Static Map Layer of Los Angeles Downtown */}
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-95 grayscale-[15%] contrast-[105%]"
                style={{ 
                  backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-118.2437,34.0522,12.5,0/800x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwY3kyb3lyZ3dicGZ2N3IifQ==')`
                }} 
              />

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.02]" />

              {/* Interactive Vector Route Line Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 120,420 Q 320,180 540,290 T 740,210" 
                  fill="none" 
                  stroke="#1e3a8a" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>

              {/* Home Icon/Destination Point Tag */}
              <div className="absolute top-[37%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 border-2 border-black rounded-lg shadow-md">
                🏠
              </div>

              {/* Dynamic Live Vehicle Pin Placement (Moves based on state selection) */}
              <div 
                className="absolute z-10 flex flex-col items-end transition-all duration-700"
                style={{ top: selectedRoute.pinTop, left: selectedRoute.pinLeft }}
              >
                {/* Vehicle Floating Stats Badge */}
                <div className="bg-white px-2 py-1 rounded-md shadow border border-slate-200 text-right text-[10px] font-black text-slate-900 leading-tight mb-1 font-mono">
                  Vehicle
                  <span className="block text-slate-400 font-sans font-bold text-[9px] uppercase">WH-902</span>
                </div>
                {/* Truck Icon Box */}
                <div className="w-9 h-9 bg-black text-white border-2 border-white rounded-xl shadow-xl flex items-center justify-center font-bold text-base transition-transform active:scale-95 cursor-pointer">
                  🚚
                </div>
              </div>
            </div>

            {/* BOTTOM HUD STATUS MATRIX FOOTER BAR */}
            <div className="bg-white border-t border-slate-200 p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-md z-10">
              
              {/* Remaining Duration Widget Card */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 flex items-center gap-3">
                <div className="p-2.5 bg-slate-100 text-slate-900 rounded-lg">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">REMAINING TIME</span>
                  <p className="text-sm font-black text-slate-900 leading-tight">
                    {selectedRoute.remainingTime}
                    {selectedRoute.status === "Delayed" && (
                      <span className="text-xs text-rose-500 font-mono ml-2 font-bold">({selectedRoute.delayTime})</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Distance Segment Card */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 flex items-center gap-3">
                <div className="p-2.5 bg-slate-100 text-slate-900 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">DISTANCE TO GO</span>
                  <p className="text-sm font-black text-slate-900 leading-tight">{selectedRoute.distanceToGo}</p>
                </div>
              </div>

              {/* Live Fuel Tank Slider Widget */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                  <span className="flex items-center gap-1">⛽ FUEL LEVEL</span>
                  <span className="font-mono text-slate-900 text-xs font-black">{selectedRoute.fuelLevel}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${selectedRoute.fuelColor}`}
                    style={{ width: `${selectedRoute.fuelLevel}%` }}
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}