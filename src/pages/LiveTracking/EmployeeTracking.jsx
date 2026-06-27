import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  MoreVertical, 
  Plus, 
  Minus, 
  Navigation, 
  History,
  Radio,
  Search,
  Bell,
  HelpCircle,
  Settings
} from "lucide-react";

export default function EmployeeTracking() {
  // ==========================================
  // INITIAL DATA STATE (From image_3723f9.jpg)
  // ==========================================
  const initialPersonnel = [
    {
      id: "HT-4921",
      name: "Marcus Thorne",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      status: "ON DUTY",
      lastLocation: "Downtown Sector A",
      updatedTime: "Updated 2m ago",
      assignment: "Critical Infrastructure Audit",
      mapCoords: { cx: "35%", cy: "45%", color: "bg-blue-600" }
    },
    {
      id: "HT-8832",
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      status: "INCIDENT",
      lastLocation: "Harbor District - Pier 4",
      updatedTime: "Signal Lost: 14m",
      assignment: "Logistics Verification",
      mapCoords: { cx: "65%", cy: "75%", color: "bg-rose-600 animate-pulse ring-4 ring-rose-600/30" }
    },
    {
      id: "HT-1290",
      name: "Jordan Smith",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      status: "OFF DUTY",
      lastLocation: "Main Campus (Home)",
      updatedTime: "Last Active: 6h ago",
      assignment: "None",
      mapCoords: { cx: "20%", cy: "30%", color: "bg-indigo-900" }
    },
    {
      id: "HT-3301",
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      status: "ON DUTY",
      lastLocation: "West Hub Terminal",
      updatedTime: "Updated 45s ago",
      assignment: "Terminal Ops Oversight",
      mapCoords: { cx: "50%", cy: "25%", color: "bg-blue-600" }
    }
  ];

  // ==========================================
  // DASHBOARD STATES
  // ==========================================
  const [personnel, setPersonnel] = useState(initialPersonnel);
  const [selectedStaff, setSelectedStaff] = useState(initialPersonnel[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("ALL"); 
  const [mapScale, setMapScale] = useState(1);
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  // Live Filtering Logic
  const filteredPersonnel = useMemo(() => {
    return personnel.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.includes(searchQuery);
      const matchesFilter = filterType === "ALL" || p.status === "INCIDENT";
      return matchesSearch && matchesFilter;
    });
  }, [personnel, searchQuery, filterType]);

  const handleAcknowledge = (e) => {
    e.stopPropagation();
    setIsAcknowledged(true);
    alert("Incident acknowledged. Emergency Response Team (ERT) has been dispatched to Harbor District - Pier 4.");
  };

  return (
    <AdminShell activeTab="Personnel Tracking">
      <div className="space-y-6">
        
        {/* ==========================================
            IMAGE TOP HEADER ROW (From image_3723f9.jpg)
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2 rounded-xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-2 pl-2">
            <h1 className="text-xl font-black text-indigo-950 tracking-tight">Employee Tracking</h1>
          </div>
          
          {/* Top Live Search Bar */}
          <div className="flex-1 max-w-md mx-0 sm:mx-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search field personnel by name, ID or vehicle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Actions & Profiles Controls */}
          <div className="flex items-center gap-4 pr-2 justify-end">
            <button className="text-slate-500 hover:text-indigo-950 transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-600 rounded-full" />
            </button>
            <button className="text-slate-500 hover:text-indigo-950 transition-colors">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="text-slate-500 hover:text-indigo-950 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <div className="text-right hidden md:block">
                <p className="text-xs font-black text-indigo-950 leading-tight">Admin Panel</p>
                <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">ENTERPRISE VIEW</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-100"
              />
            </div>
          </div>
        </div>

        {/* ==========================================
            2. TOP STATS METRIC CARDS (4 COLUMNS)
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Staff Total Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">TOTAL STAFF</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">1,248</h3>
              </div>
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <div className="text-[11px] font-bold text-indigo-600 mt-3 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> <span>+12% vs LY</span>
            </div>
          </div>

          {/* On Duty Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">ON DUTY</span>
                <h3 className="text-2xl font-extrabold text-indigo-900 mt-1">892</h3>
              </div>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <CheckCircle className="h-4 w-4" />
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-blue-500 w-[72%]" />
            </div>
          </div>

          {/* Active Incidents Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">ACTIVE INCIDENTS</span>
                <h3 className="text-2xl font-extrabold text-rose-600 mt-1">04</h3>
              </div>
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                <AlertTriangle className="h-4 w-4" />
              </div>
            </div>
            <span className="text-[11px] font-bold text-rose-600 mt-3 block">Requiring Response</span>
          </div>

          {/* Ops Efficiency Dark Blue Card */}
          <div className="bg-[#111155] text-white border border-transparent rounded-xl p-5 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-indigo-200 tracking-wider uppercase block">OPS EFFICIENCY</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">94.8%</h3>
                </div>
                <div className="p-2 bg-white/10 text-white rounded-lg">
                  <Radio className="h-4 w-4" />
                </div>
              </div>
              <p className="text-[11px] text-indigo-200/80 mt-3 font-medium">Real-time target reach</p>
            </div>
            <div className="absolute right-3 bottom-0 flex items-end gap-1 opacity-20 pointer-events-none">
              <div className="w-2.5 h-8 bg-white rounded-t" />
              <div className="w-2.5 h-12 bg-white rounded-t" />
              <div className="w-2.5 h-16 bg-white rounded-t" />
            </div>
          </div>
        </div>

        {/* ==========================================
            3. MIDDLE GRID: PERSONNEL REGISTRY & FEED
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Personnel Registry Table Card */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-sm text-[#111155]">Personnel Registry</h3>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setFilterType(prev => prev === "ALL" ? "INCIDENT" : "ALL")}
                    className={`text-xs font-bold px-3 py-1.5 border rounded-lg transition-colors ${filterType === "INCIDENT" ? "bg-rose-50 text-rose-600 border-rose-200" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}
                  >
                    {filterType === "INCIDENT" ? "Showing Incidents" : "Filter"}
                  </button>
                  <button 
                    onClick={() => alert("Exporting Registry data to CSV...")}
                    className="text-xs font-bold px-3 py-1.5 bg-[#111155] text-white rounded-lg hover:bg-[#1b1b66] transition-colors"
                  >
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Data Grid Table layout */}
              <div className="overflow-x-auto">
                <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-slate-50/50">
                      <th className="py-3 px-5">EMPLOYEE</th>
                      <th className="py-3 px-4">STATUS</th>
                      <th className="py-3 px-4">LAST LOCATION</th>
                      <th className="py-3 px-4">ACTIVE ASSIGNMENT</th>
                      <th className="py-3 px-5 text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {filteredPersonnel.map((staff) => (
                      <tr 
                        key={staff.id}
                        onClick={() => setSelectedStaff(staff)}
                        className={`cursor-pointer transition-colors ${selectedStaff.id === staff.id ? "bg-indigo-50/40 font-bold" : "hover:bg-slate-50/60"}`}
                      >
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <img src={staff.avatar} alt="" className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200" />
                            <div>
                              <span className="text-[#111155] block leading-tight">{staff.name}</span>
                              <span className="text-[10px] text-slate-400 font-mono">ID: {staff.id}</span>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4">
                          <span className={`inline-block text-[9px] font-black tracking-wide px-2 py-0.5 rounded ${
                            staff.status === "ON DUTY" ? "bg-blue-50 text-blue-600" :
                            staff.status === "INCIDENT" ? "bg-rose-50 text-rose-600" :
                            "bg-slate-100 text-slate-500"
                          }`}>
                            {staff.status}
                          </span>
                        </td>

                        <td className="py-4 px-4">
                          <span className="text-slate-800 block">{staff.lastLocation}</span>
                          <span className={`text-[10px] font-medium block ${staff.status === "INCIDENT" ? "text-rose-500 font-bold" : "text-slate-400"}`}>
                            {staff.updatedTime}
                          </span>
                        </td>

                        <td className="py-4 px-4 text-slate-500 font-medium">{staff.assignment}</td>

                        <td className="py-4 px-5 text-right">
                          <div className="flex justify-end items-center">
                            {staff.status === "INCIDENT" ? (
                              <button 
                                onClick={(e) => { e.stopPropagation(); alert(`Initializing crisis communications to ${staff.name}...`); }}
                                className="bg-rose-600 text-white font-bold text-[9px] px-2 py-1 rounded tracking-wide hover:bg-rose-700 transition-colors"
                              >
                                CONTACT
                              </button>
                            ) : (
                              <button className="text-slate-400 hover:text-slate-600 p-1">
                                <MoreVertical className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table></div>
              </div>
            </div>
            
            <div className="px-5 py-3 border-t border-slate-100 text-[11px] font-medium text-slate-400 bg-slate-50/30">
              Active Selection: <strong className="text-slate-700">{selectedStaff.name}</strong> ({selectedStaff.id})
            </div>
          </div>

          {/* LIVE OPS FEED PANEL */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between overflow-hidden h-[410px]">
            <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
                <span>LIVE OPS FEED</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium font-mono">Auto-updating</span>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-4 text-[11px] font-medium text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                <div>
                  <p className="text-slate-800"><strong className="font-bold text-slate-900">Marcus Thorne checked into</strong> <span className="text-blue-600 font-bold underline cursor-pointer">Downtown Sector A.</span></p>
                  <span className="text-[9px] text-slate-400 block font-mono mt-0.5">12:45 PM • Automated Sync</span>
                </div>
              </div>

              <div className={`border rounded-lg p-3 ${isAcknowledged ? "bg-slate-50 border-slate-200" : "bg-rose-50/60 border-rose-200"}`}>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-600 text-xs mt-0.5">⚠️</span>
                  <div>
                    <h5 className="font-bold text-rose-700">CRITICAL: Elena Rodriguez signal lost</h5>
                    <p className="text-slate-600 mt-0.5 leading-normal">Pier 4 proximity. Battery level was 4% at last ping.</p>
                    <span className="text-[9px] text-slate-400 block font-mono mt-1">12:38 PM • System Alert</span>
                    
                    {!isAcknowledged && (
                      <button 
                        onClick={handleAcknowledge}
                        className="w-full mt-2.5 bg-rose-700 text-white hover:bg-rose-800 transition-colors py-1.5 rounded font-bold text-[10px] tracking-wider uppercase text-center"
                      >
                        ACKNOWLEDGE
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                <div>
                  <p className="text-slate-800"><strong className="font-bold text-slate-900">David Chen completed assignment</strong> #TX-9021.</p>
                  <span className="text-[9px] text-slate-400 block font-mono mt-0.5">12:15 PM • Manual Entry</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => alert("Opening logs console matrix...")}
              className="w-full border-t border-slate-100 bg-slate-50/80 hover:bg-slate-100 text-xs font-bold text-slate-700 py-3 text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <History className="h-3.5 w-3.5 text-slate-400" />
              <span>View All Logs</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM SECTION: LIVE CLUSTER MAP
           ========================================== */}
        <div className="bg-[#e5e5ea] border border-slate-300 rounded-xl h-72 relative overflow-hidden flex items-center justify-center shadow-inner">
          <div className="absolute left-4 top-4 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs text-[11px] font-bold text-slate-800 flex items-center gap-1.5 z-10">
            <Navigation className="h-3 w-3 text-indigo-600 rotate-45" />
            <span>Live Cluster Map</span>
          </div>

          <div className="absolute right-4 bottom-4 flex flex-col gap-1 z-10">
            <button 
              onClick={() => setMapScale(prev => Math.min(prev + 0.15, 1.5))}
              className="bg-white p-1.5 rounded-md border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
            <button 
              onClick={() => setMapScale(prev => Math.max(prev - 0.15, 0.75))}
              className="bg-white p-1.5 rounded-md border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d1d6_1px,transparent_1px),linear-gradient(to_bottom,#d1d1d6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

          <div className="w-full h-full relative transition-transform duration-300" style={{ transform: `scale(${mapScale})` }}>
            {personnel.map((p) => (
              <div 
                key={p.id}
                onClick={() => setSelectedStaff(p)}
                className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${p.mapCoords.color} ${selectedStaff.id === p.id ? "ring-4 ring-indigo-500 scale-125 z-20" : "z-10"}`}
                style={{ left: p.mapCoords.cx, top: p.mapCoords.cy }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                {selectedStaff.id === p.id && (
                  <div className="absolute bottom-5 bg-slate-900 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap shadow border border-slate-700">
                    {p.name.split(" ")[0]} ({p.status})
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </AdminShell>
  );
}