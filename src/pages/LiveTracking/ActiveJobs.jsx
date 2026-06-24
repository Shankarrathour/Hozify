import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  SlidersHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  CornerDownRight,
  Search,
  Bell,
  HelpCircle,
  Settings
} from "lucide-react";

export default function ActiveJobs() {
  // ==========================================
  // MASTER MOCK DATA SET (As seen in image_371b9c.jpg)
  // ==========================================
  const allJobs = [
    { id: "HT-8829-X", partner: "Global Logistics Ltd.", driver: "Marcus King", avatar: "MK", start: "Chicago Hub (ORD)", current: "I-80, Iowa City, IA", eta: "14:30 (On Time)", status: "In Transit", priority: "High", type: "Global", mapCenter: "Chicago" },
    { id: "HT-7102-Q", partner: "FastTrack Delivery", driver: "Sarah Reed", avatar: "SR", start: "Detroit Depot", current: "Toledo, OH (Stationary)", eta: "16:15 (+45m)", status: "Delayed", priority: "Critical", type: "Express", mapCenter: "Toledo" },
    { id: "HT-9941-B", partner: "Summit Supply Co.", driver: "James Liao", avatar: "JL", start: "L.A. Port Terminal", current: "San Jose Warehouse", eta: "Arrived 11:20", status: "At Destination", priority: "Medium", type: "Standard", mapCenter: "San Jose" },
    { id: "HT-1205-L", partner: "Priority Freight Int.", driver: "Alex Wong", avatar: "AW", start: "NYC Central", current: "Philadelphia Corridor", eta: "15:00 (On Time)", status: "In Transit", priority: "High", type: "Global", mapCenter: "Philadelphia" },
    { id: "HT-3342-M", partner: "BlueSky Trucking", driver: "David Vance", avatar: "DV", start: "Austin Facility", current: "San Antonio Ext.", eta: "13:55 (On Time)", status: "In Transit", priority: "Low", type: "Standard", mapCenter: "Austin" },
    // Mock items for Pagination demonstration
    { id: "HT-5541-A", partner: "Global Logistics Ltd.", driver: "Elena Rostova", avatar: "ER", start: "Miami Hub", current: "Orlando Route", eta: "18:20 (On Time)", status: "In Transit", priority: "Medium", type: "Express", mapCenter: "Miami" },
    { id: "HT-4410-Z", partner: "FastTrack Delivery", driver: "Tom Cruse", avatar: "TC", start: "Seattle Depot", current: "Tacoma Grid", eta: "12:10 (Delayed)", status: "Delayed", priority: "Critical", type: "Express", mapCenter: "Seattle" }
  ];

  // ==========================================
  // CLICKABLE / INTERACTIVE STATES
  // ==========================================
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [partnerFilter, setPartnerFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("Global");
  const [selectedJob, setSelectedJob] = useState(allJobs[0]); 
  const [currentPage, setCurrentPage] = useState(1);

  const locationMaps = {
    Chicago: "https://maps.google.com/maps?q=Chicago%20Navy%20Pier&t=&z=11&ie=UTF8&iwloc=&output=embed",
    Toledo: "https://maps.google.com/maps?q=Toledo%20Ohio&t=&z=10&ie=UTF8&iwloc=&output=embed",
    "San Jose": "https://maps.google.com/maps?q=San%20Jose%20Warehouse&t=&z=10&ie=UTF8&iwloc=&output=embed",
    Philadelphia: "https://maps.google.com/maps?q=Philadelphia&t=&z=11&ie=UTF8&iwloc=&output=embed",
    Austin: "https://maps.google.com/maps?q=Austin%20Texas&t=&z=10&ie=UTF8&iwloc=&output=embed",
    Miami: "https://maps.google.com/maps?q=Miami&t=&z=10&ie=UTF8&iwloc=&output=embed",
    Seattle: "https://maps.google.com/maps?q=Seattle&t=&z=10&ie=UTF8&iwloc=&output=embed"
  };

  // ==========================================
  // LIVE FILTERING LOGIC
  // ==========================================
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch = 
        job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.partner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.driver.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPriority = priorityFilter === "All" || job.priority === priorityFilter;
      const matchesPartner = partnerFilter === "All" || job.partner.includes(partnerFilter);
      const matchesRegion = regionFilter === "Global" || job.type === regionFilter;

      return matchesSearch && matchesPriority && matchesPartner && matchesRegion;
    });
  }, [searchQuery, priorityFilter, partnerFilter, regionFilter]);

  // Pagination calculation
  const jobsPerPage = 5;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage) || 1;
  const currentTableData = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <AdminShell activeTab="Live Tracking">
      <div className="space-y-6">
        
        {/* ==========================================
            TOP HEADER ROW WITH MAIN HEADING & SEARCH
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2 rounded-xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-2 pl-2">
            <h1 className="text-xl font-black text-indigo-950 tracking-tight">Active Jobs</h1>
          </div>
          
          {/* Top Live Unified Search Bar */}
          <div className="flex-1 max-w-md mx-0 sm:mx-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search tracking jobs, IDs, drivers, or partners..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Top Right Controls & Profile */}
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

        {/* Real-time Oversight Sub-Counters */}
        <div className="flex justify-between items-end px-1">
          <div>
            <p className="text-xs font-medium text-slate-500">Real-time oversight of all operational movements.</p>
          </div>
          <div className="flex gap-6 text-right font-mono text-[11px] tracking-tight">
            <div>
              <span className="text-slate-400 block font-sans text-[10px] uppercase font-bold">ACTIVE JOBS</span>
              <span className="text-slate-900 font-bold text-sm">03</span>
            </div>
            <div className="border-l border-slate-200 pl-6">
              <span className="text-slate-400 block font-sans text-[10px] uppercase font-bold">AT RISK</span>
              <span className="text-rose-600 font-extrabold text-sm">3</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            1. FILTERS SUBHEADER MATRIX BAR
           ========================================== */}
        <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 border-r border-slate-100 pr-3">
            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
            <span>Filters:</span>
          </div>

          {/* Priority Dropdown Select */}
          <div className="flex items-center gap-1.5 text-xs">
            <select 
              value={priorityFilter}
              onChange={(e) => { setPriorityFilter(e.target.value); setCurrentPage(1); }}
              className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg focus:outline-none focus:border-slate-400 cursor-pointer text-xs"
            >
              <option value="All">Priority: All</option>
              <option value="Critical">Critical Only</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>

          {/* Partner Type Dropdown Select */}
          <div className="flex items-center gap-1.5 text-xs">
            <select 
              value={partnerFilter}
              onChange={(e) => { setPartnerFilter(e.target.value); setCurrentPage(1); }}
              className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg focus:outline-none focus:border-slate-400 cursor-pointer text-xs"
            >
              <option value="All">Partner Type: All</option>
              <option value="Global Logistics">Global Logistics</option>
              <option value="FastTrack">FastTrack Delivery</option>
              <option value="Summit">Summit Supply</option>
            </select>
          </div>

          {/* Region Selector */}
          <div className="flex items-center gap-1.5 text-xs">
            <select 
              value={regionFilter}
              onChange={(e) => { setRegionFilter(e.target.value); setCurrentPage(1); }}
              className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg focus:outline-none focus:border-slate-400 cursor-pointer text-xs"
            >
              <option value="Global">Region: Global</option>
              <option value="Express">Express Routes</option>
              <option value="Standard">Standard Area</option>
            </select>
          </div>
        </div>

        {/* ==========================================
            2. INTERACTIVE JOBS METRIC GRID TABLE
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                  <th className="py-3 px-5">JOB ID</th>
                  <th className="py-3 px-4">PARTNER NAME</th>
                  <th className="py-3 px-4">DRIVER</th>
                  <th className="py-3 px-4">START POINT</th>
                  <th className="py-3 px-4">CURRENT LOCATION</th>
                  <th className="py-3 px-4">ETA</th>
                  <th className="py-3 px-5 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                {currentTableData.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-slate-400">No active tracking jobs matched criteria.</td>
                  </tr>
                ) : (
                  currentTableData.map((job) => (
                    <tr 
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={`cursor-pointer transition-colors ${selectedJob.id === job.id ? "bg-indigo-50/40 hover:bg-indigo-50/60 font-semibold" : "hover:bg-slate-50/80"}`}
                    >
                      <td className="py-3.5 px-5 font-bold text-slate-900 font-mono">{job.id}</td>
                      <td className="py-3.5 px-4 text-slate-800 font-semibold">{job.partner}</td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-[9px] font-black flex items-center justify-center shadow-xs">
                            {job.avatar}
                          </div>
                          <span className="text-slate-900 font-bold">{job.driver}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">{job.start}</td>
                      <td className="py-3.5 px-4 font-sans text-slate-600">{job.current}</td>
                      <td className={`py-3.5 px-4 ${job.status === 'Delayed' ? 'text-rose-600 font-bold' : 'text-slate-800'}`}>
                        {job.eta}
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <span className={`inline-block text-[10px] font-extrabold px-3 py-1 rounded-full ${
                          job.status === "In Transit" ? "bg-blue-50 text-blue-600" :
                          job.status === "Delayed" ? "bg-rose-50 text-rose-500" :
                          "bg-slate-100 text-slate-700"
                        }`}>
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* TABLE INTERACTIVE PAGINATION PANEL FOOTER */}
          <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <p className="text-[11px] text-slate-400 font-semibold">
              Showing {(currentPage - 1) * jobsPerPage + 1}-{Math.min(currentPage * jobsPerPage, filteredJobs.length)} of {filteredJobs.length} active sessions
            </p>

            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${currentPage === pageNum ? "bg-slate-950 text-white shadow-xs" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}
                >
                  {pageNum}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-1 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. DYNAMIC BOTTOM MAP VIEW & ACTIONS FEED
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Dynamic Map Component Syncing with Selected Row */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col h-[340px]">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <MapPin className="h-3.5 w-3.5 text-indigo-500" />
                <span>Live Location Map Tracker: <strong className="text-indigo-600 font-mono">{selectedJob.id}</strong></span>
              </div>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                Live Traffic Overlay active
              </span>
            </div>

            <div className="flex-1 bg-slate-100 relative">
              <iframe 
                src={locationMaps[selectedJob.mapCenter] || locationMaps["Chicago"]}
                className="w-full h-full border-none grayscale-[20%] contrast-[110%] opacity-90"
                allowFullScreen="" 
                loading="lazy"
                title="Active Tracking Session Map Component"
              />
            </div>
          </div>

          {/* Operations Feed & Alert Notification Widget Stream */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col h-[340px]">
            <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-xs text-slate-900 tracking-tight">Operations Feed Stream</h3>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {/* Alert Segment Item */}
              <div className="flex gap-3 items-start">
                <div className="p-1.5 bg-rose-50 text-rose-500 rounded-lg mt-0.5 shadow-xs">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Route Blockage Warning</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    HT-7102-Q driver Sarah Reed reporting severe congestion & stationary parameters in Toledo area grid matrix.
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 block mt-1">2 MINS AGO</span>
                </div>
              </div>

              {/* Status Checked Success Segment Item */}
              <div className="flex gap-3 items-start pt-2 border-t border-slate-50">
                <div className="p-1.5 bg-emerald-50 text-emerald-500 rounded-lg mt-0.5 shadow-xs">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Job Completed Securely</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    HT-9941-B has reached San Jose Warehouse terminal point safely. Unloading protocols initialized.
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 block mt-1">15 MINS AGO</span>
                </div>
              </div>

              {/* Standard Event logs element item */}
              <div className="flex gap-3 items-start pt-2 border-t border-slate-50">
                <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg mt-0.5 shadow-xs">
                  <CornerDownRight className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Checkpoint Verified</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    HT-8829-X (Marcus King) bypassed Iowa City check corridor right on schedule indices.
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 block mt-1">32 MINS AGO</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}