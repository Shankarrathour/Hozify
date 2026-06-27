import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Settings, 
  AlertOctagon, 
  Clock, 
  AlertTriangle, 
  ShieldAlert, 
  TrendingDown, 
  Send, 
  SlidersHorizontal 
} from "lucide-react";

export default function DelayMonitoring() {
  // ==========================================
  // MASTER DELAY INCIDENTS MOCK DATA
  // ==========================================
  const [incidents, setIncidents] = useState([
    {
      id: "INC-9021",
      jobId: "HT-7102-Q",
      partner: "FastTrack Delivery",
      driver: "Sarah Reed",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      delayDuration: "45 mins",
      reason: "Traffic Congestion",
      impact: "Critical",
      location: "Toledo, OH Corridor",
      etaImpact: "Revised to 16:15",
      resolved: false
    },
    {
      id: "INC-4410",
      jobId: "HT-4410-Z",
      partner: "Global Logistics Ltd.",
      driver: "Tom Cruse",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      delayDuration: "32 mins",
      reason: "Mechanical / Inspection",
      impact: "High",
      location: "Seattle Grid Depot",
      etaImpact: "Revised to 12:10",
      resolved: false
    },
    {
      id: "INC-1102",
      jobId: "HT-5502-R",
      partner: "Regional Hub Carrier",
      driver: "Leon Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      delayDuration: "15 mins",
      reason: "Severe Weather",
      impact: "Medium",
      location: "Airport Cargo Area",
      etaImpact: "Revised to 16:30",
      resolved: false
    },
    {
      id: "INC-8812",
      jobId: "HT-1205-L",
      partner: "Priority Freight Int.",
      driver: "Alex Wong",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
      delayDuration: "12 mins",
      reason: "Route Blockage",
      impact: "Medium",
      location: "Philadelphia Ext.",
      etaImpact: "Revised to 15:00",
      resolved: true
    }
  ]);

  // ==========================================
  // DASHBOARD STATES
  // ==========================================
  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [impactFilter, setImpactFilter] = useState("All");
  const [reasonFilter, setReasonFilter] = useState("All");

  // Filter Logic
  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      const matchesSearch = 
        inc.jobId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.reason.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesImpact = impactFilter === "All" || inc.impact === impactFilter;
      const matchesReason = reasonFilter === "All" || inc.reason.includes(reasonFilter);

      return matchesSearch && matchesImpact && matchesReason;
    });
  }, [incidents, searchQuery, impactFilter, reasonFilter]);

  // Interactive Handler to "Resolve / Action" an item
  const handleSendAlert = (incidentId) => {
    alert(`Action Protocol Initialized: Support ticket & optimized detour link dispatched to incident ${incidentId}.`);
  };

  return (
    <AdminShell activeTab="Live Tracking">
      <div className="space-y-5 p-1">
        
        {/* TOP GLOBAL HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 pl-2">
            <h1 className="text-xl font-black text-indigo-950 tracking-tight">Delay Monitoring</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-0 sm:mx-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by Job ID, Driver, or Delay Reason..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:bg-white focus:border-indigo-950 transition-all"
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
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* DELAY ANALYSIS HIGH-ALERT HUD METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Active Exceptions</span>
              <h3 className="text-2xl font-black text-rose-600 mt-0.5">
                {incidents.filter(i => !i.resolved).length} Flagged
              </h3>
            </div>
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><AlertOctagon className="h-5 w-5" /></div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Critical Impact</span>
              <h3 className="text-2xl font-black text-indigo-950 mt-0.5">
                {incidents.filter(i => i.impact === 'Critical').length} Sessions
              </h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-950 rounded-xl"><ShieldAlert className="h-5 w-5" /></div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Avg. Delay Duration</span>
              <h3 className="text-2xl font-black text-slate-800 mt-0.5">26 Mins</h3>
            </div>
            <div className="p-3 bg-slate-100 text-slate-700 rounded-xl"><Clock className="h-5 w-5" /></div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Resolution Rate</span>
              <h3 className="text-2xl font-black text-emerald-600 mt-0.5">88.4%</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><TrendingDown className="h-5 w-5" /></div>
          </div>
        </div>

        {/* DELAY INTERACTIVE FILTER BAR */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-wrap items-center gap-3 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 border-r border-slate-100 pr-3">
            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
            <span>Exceptions Filter:</span>
          </div>

          <select 
            value={impactFilter} 
            onChange={(e) => setImpactFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 font-bold text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="All">Impact Level: All</option>
            <option value="Critical">Critical Impact</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>

          <select 
            value={reasonFilter} 
            onChange={(e) => setReasonFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 font-bold text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="All">Root Cause: All</option>
            <option value="Traffic">Traffic Congestion</option>
            <option value="Mechanical">Mechanical / Inspection</option>
            <option value="Weather">Severe Weather</option>
          </select>
        </div>

        {/* MAIN BODY LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* DELAY TABLE MATRIX FEED */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-wider text-slate-400 uppercase">
                    <th className="py-3 px-4">INCIDENT / JOB ID</th>
                    <th className="py-3 px-4">DRIVER</th>
                    <th className="py-3 px-4">DELAY REASON</th>
                    <th className="py-3 px-4">DURATION</th>
                    <th className="py-3 px-4 text-right">IMPACT STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {filteredIncidents.map((inc) => (
                    <tr 
                      key={inc.id}
                      onClick={() => setSelectedIncident(inc)}
                      className={`hover:bg-slate-50/60 cursor-pointer transition-all ${selectedIncident.id === inc.id ? "bg-rose-50/30 font-semibold" : ""}`}
                    >
                      <td className="py-4 px-4">
                        <span className="text-[10px] text-slate-400 block font-mono font-bold">{inc.id}</span>
                        <strong className="text-slate-900 font-black font-mono">{inc.jobId}</strong>
                        <span className="block text-slate-400 font-sans text-[11px] font-medium">{inc.partner}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <img src={inc.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-slate-900 font-bold">{inc.driver}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-slate-800 font-semibold block">{inc.reason}</span>
                        <span className="text-slate-400 text-[11px] font-sans">{inc.location}</span>
                      </td>
                      <td className="py-4 px-4 font-mono font-bold text-rose-600">
                        {inc.delayDuration}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-black tracking-wide uppercase ${
                          inc.impact === 'Critical' ? 'bg-rose-600 text-white' :
                          inc.impact === 'High' ? 'bg-rose-100 text-rose-700' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {inc.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT COL: CONTEXTUAL ACTIONS INTERACTION HUD */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col justify-between min-h-[360px]">
            <div>
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[9px] font-mono font-black tracking-widest text-slate-400 block uppercase">Incident Deep-Dive</span>
                <h3 className="text-sm font-black text-slate-950 mt-0.5">
                  Resolve Exception: <span className="font-mono text-rose-600">{selectedIncident.id}</span>
                </h3>
              </div>

              {/* Snapshot parameters */}
              <div className="mt-4 space-y-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold block">CURRENT POSITION RISK ZONE</span>
                  <p className="font-bold text-slate-900 mt-0.5">{selectedIncident.location}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold block">TIME LOST</span>
                    <p className="font-bold text-rose-600 mt-0.5 font-mono">{selectedIncident.delayDuration}</p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold block">SCHEDULE IMPACT</span>
                    <p className="font-bold text-slate-800 mt-0.5 font-mono">{selectedIncident.etaImpact}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-slate-400 font-bold block mb-1">DISPATCH DETOUR MESSAGE / INSTRUCTIONS</span>
                  <textarea 
                    rows={3}
                    placeholder={`Type automated route change or message instructions to send directly to ${selectedIncident.driver}...`}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-rose-500 font-medium resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Action dispatch system trigger */}
            <div className="mt-4">
              <button 
                onClick={() => handleSendAlert(selectedIncident.id)}
                className="w-full bg-slate-950 text-white font-bold text-xs py-3 rounded-xl hover:bg-slate-900 flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Transmit Reroute Command to App</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}