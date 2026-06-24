import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  AlertTriangle, 
  ShieldAlert, 
  MapPin, 
  Clock, 
  User, 
  PhoneCall, 
  CheckCircle2, 
  Radio,
  Eye
} from "lucide-react";

export default function SOStracking() {
  // ==========================================
  // SOS ALERTS MOCK DATA
  // ==========================================
  const initialAlerts = [
    { 
      id: "SOS-911", 
      user: "Rahul Sharma", 
      role: "Field Supervisor", 
      zone: "Downtown Sector B", 
      time: "2 mins ago", 
      status: "CRITICAL", 
      phone: "+91 98765 43210",
      coordinates: "Grid Node #24",
      description: "Sudden pressure drop detected in primary line. Main valve stuck."
    },
    { 
      id: "SOS-842", 
      user: "Amit Verma", 
      role: "Security Personnel", 
      zone: "Industrial Warehouses", 
      time: "12 mins ago", 
      status: "HIGH", 
      phone: "+91 91234 56789",
      coordinates: "Grid Node #45",
      description: "Unauthorized access breach at Perimeter Gate 4. Need backup."
    },
    { 
      id: "SOS-719", 
      user: "Priya Patel", 
      role: "Logistics Operator", 
      zone: "Harbor Loading Dock", 
      time: "45 mins ago", 
      status: "RESOLVED", 
      phone: "+91 99887 76655",
      coordinates: "Grid Node #12",
      description: "Medical first-aid required for minor injury. (Resolved by On-site Medic)"
    }
  ];

  const [alerts, setAlerts] = useState(initialAlerts);
  const [activeAlert, setActiveAlert] = useState(initialAlerts[0]);
  const [filterStatus, setFilterStatus] = useState("ALL"); // ALL, CRITICAL, RESOLVED

  // Function to resolve alert clickably
  const handleResolveAlert = (id) => {
    const updatedAlerts = alerts.map(alert => {
      if (alert.id === id) {
        return { ...alert, status: "RESOLVED" };
      }
      return alert;
    });
    setAlerts(updatedAlerts);
    // Update active view as well
    if (activeAlert.id === id) {
      setActiveAlert({ ...activeAlert, status: "RESOLVED" });
    }
  };

  // Filter logic for quick navigation tabs
  const filteredAlerts = alerts.filter(alert => {
    if (filterStatus === "ALL") return true;
    return alert.status === filterStatus;
  });

  return (
    <AdminShell activeTab="SOStracking">
      <div className="space-y-6">
        
        {/* ==========================================
            TOP HEADER ROW 
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-3 pl-2">
            <div className="p-2 bg-rose-100 text-rose-600 rounded-lg animate-pulse">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 tracking-tight">SOS Emergency Tracking</h1>
              <p className="text-[11px] text-slate-400 font-medium">Real-time emergency signals & dispatch control</p>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-1.5 pr-2">
            {["ALL", "CRITICAL", "RESOLVED"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  filterStatus === status 
                    ? "bg-indigo-950 text-white border-transparent shadow-xs" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================
            MAIN CONTENT SPLIT GRID
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT PANEL: ACTIVE SOS ALERTS LIST (2/3 Width) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-950 uppercase tracking-tight">Incoming Distress Beacons</span>
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Radio className="h-3 w-3 animate-ping" /> Live Tracking
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {filteredAlerts.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400 font-medium">
                    No active SOS alerts found in this filter.
                  </div>
                ) : (
                  filteredAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      onClick={() => setActiveAlert(alert)}
                      className={`p-4 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        activeAlert.id === alert.id ? "bg-rose-50/30 border-l-4 border-rose-500" : "hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          alert.status === "CRITICAL" ? "bg-rose-100 text-rose-600" :
                          alert.status === "HIGH" ? "bg-orange-100 text-orange-600" :
                          "bg-emerald-100 text-emerald-600"
                        }`}>
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900">{alert.user}</h4>
                            <span className="text-[10px] bg-slate-100 font-semibold px-2 py-0.2 rounded text-slate-500">{alert.role}</span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-1">{alert.description}</p>
                          
                          <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium pt-1">
                            <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-indigo-950" /> {alert.zone}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {alert.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 border-t sm:border-0 border-slate-100 pt-2 sm:pt-0">
                        <span className={`text-[10px] font-black tracking-wide px-2 py-0.5 rounded uppercase ${
                          alert.status === "CRITICAL" ? "bg-rose-50 text-rose-600 border border-rose-200" :
                          alert.status === "HIGH" ? "bg-orange-50 text-orange-600 border border-orange-200" :
                          "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        }`}>
                          {alert.status}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono font-bold">{alert.id}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: SOS SNAPSHOT INTERACTIVE VIEW */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div className="px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
                <h3 className="font-bold text-xs text-indigo-950 tracking-tight uppercase">Incident Command Center</h3>
              </div>
              
              {/* Active Ticket Details Container */}
              <div className="p-4 space-y-4">
                <div className="p-3 bg-slate-50/70 border border-slate-200 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-slate-400">{activeAlert.id}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                      activeAlert.status === 'CRITICAL' ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {activeAlert.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Triggered By</label>
                    <div className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-indigo-950" />
                      <span className="text-xs font-bold text-slate-900">{activeAlert.user}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Live Location Node</label>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-rose-500" />
                      <span className="text-xs font-bold text-slate-800">{activeAlert.zone} ({activeAlert.coordinates})</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Reported Issue</label>
                    <p className="text-xs text-slate-600 leading-normal font-medium">{activeAlert.description}</p>
                  </div>
                </div>

                {/* Communication Actions */}
                <div className="space-y-2">
                  <a 
                    href={`tel:${activeAlert.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-all shadow-3xs"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    Establish Satellite Call
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Status Resolving Action Trigger */}
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              {activeAlert.status !== "RESOLVED" ? (
                <button
                  onClick={() => handleResolveAlert(activeAlert.id)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-lg transition-all"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Mark Ticket As Resolved
                </button>
              ) : (
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-center rounded-lg p-2 font-bold text-xs flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Incident Threat Resolved
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}