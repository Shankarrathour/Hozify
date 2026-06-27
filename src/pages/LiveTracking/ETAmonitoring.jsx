import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Settings, 
  Filter, 
  ChevronRight, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  SlidersHorizontal,
  Sliders
} from "lucide-react";

export default function ETAMonitoring() {
  // ==========================================
  // MASTER MOCK DATA (Matching the Dashboard Theme)
  // ==========================================
  const [jobs, setJobs] = useState([
    {
      id: "HT-8829-X",
      partner: "Global Logistics Ltd.",
      driver: "Marcus King",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      startPoint: "Chicago Hub (ORD)",
      currentLocation: "I-80, Iowa City, IA",
      eta: "14:30",
      status: "In Transit",
      timeStatus: "On Time",
      progress: 65,
      priority: "High",
      region: "North America"
    },
    {
      id: "HT-7102-Q",
      partner: "FastTrack Delivery",
      driver: "Sarah Reed",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      startPoint: "Detroit Depot",
      currentLocation: "Toledo, OH (Stationary)",
      eta: "16:15",
      status: "Delayed",
      timeStatus: "+45m Delay",
      progress: 40,
      priority: "Critical",
      region: "North America"
    },
    {
      id: "HT-9941-B",
      partner: "Summit Supply Co.",
      driver: "James Liao",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      startPoint: "L.A. Port Terminal",
      currentLocation: "San Jose Warehouse",
      eta: "Arrived 11:20",
      status: "At Destination",
      timeStatus: "Completed",
      progress: 100,
      priority: "Medium",
      region: "West Coast"
    },
    {
      id: "HT-3342-M",
      partner: "BlueSky Trucking",
      driver: "David Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      startPoint: "Austin Facility",
      currentLocation: "San Antonio Ext.",
      eta: "13:55",
      status: "In Transit",
      timeStatus: "On Time",
      progress: 85,
      priority: "High",
      region: "Texas Grid"
    },
    {
      id: "HT-1205-L",
      partner: "Priority Freight Int.",
      driver: "Alex Wong",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
      startPoint: "NYC Central",
      currentLocation: "Philadelphia Corridor",
      eta: "15:00",
      status: "In Transit",
      timeStatus: "On Time",
      progress: 20,
      priority: "Critical",
      region: "East Coast"
    }
  ]);

  // Operational Logs Feed Stream
  const [opsFeed, setOpsFeed] = useState([
    { id: 1, type: "alert", title: "Route Blockage", desc: "HT-7102-Q reporting severe congestion in Toledo.", time: "2 MINS AGO" },
    { id: 2, type: "success", title: "Job Completed", desc: "HT-9941-B has reached San Jose Warehouse.", time: "12 MINS AGO" },
    { id: 3, type: "info", title: "Weather Warning", desc: "Heavy rain alert on Mid-West routes.", time: "1 HR AGO" }
  ]);

  // Interactive UI States
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = 
        job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.partner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.driver.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPriority = priorityFilter === "All" || job.priority === priorityFilter;
      const matchesStatus = statusFilter === "All" || job.status === statusFilter;

      return matchesSearch && matchesPriority && matchesStatus;
    });
  }, [jobs, searchQuery, priorityFilter, statusFilter]);

  return (
    <AdminShell activeTab="Live Tracking">
      <div className="space-y-5 p-1">
        
        {/* ==========================================
            1. TOP GLOBAL SEARCH & PROFILE HEADER
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 pl-2">
            <h1 className="text-xl font-black text-indigo-950 tracking-tight">ETA Monitoring</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-0 sm:mx-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search tracking jobs, IDs, or partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:bg-white focus:border-indigo-950 transition-all"
            />
          </div>

          <div className="flex items-center gap-4 pr-2 justify-end">
            <button className="text-slate-500 hover:text-indigo-950 relative transition-colors">
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
                className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-100"
              />
            </div>
          </div>
        </div>

        {/* ==========================================
            2. TOP PERFORMANCE COUNTER SUMMARY CARDS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Tracked Jobs</span>
              <h3 className="text-2xl font-black text-indigo-950 mt-1">{jobs.length} Active</h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-950 rounded-xl"><TrendingUp className="h-5 w-5" /></div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">On-Time Performance</span>
              <h3 className="text-2xl font-black text-emerald-600 mt-1">94.2%</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><CheckCircle2 className="h-5 w-5" /></div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Delayed Shipments</span>
              <h3 className="text-2xl font-black text-rose-600 mt-1">
                {jobs.filter(j => j.status === 'Delayed').length} Jobs
              </h3>
            </div>
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><AlertTriangle className="h-5 w-5" /></div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Critical Priority</span>
              <h3 className="text-2xl font-black text-amber-600 mt-1">
                {jobs.filter(j => j.priority === 'Critical').length} At Risk
              </h3>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Clock className="h-5 w-5" /></div>
          </div>
        </div>

        {/* ==========================================
            3. ADVANCED INTERACTIVE FILTER CONTROLS
           ========================================== */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-500 font-bold text-xs">
              <Filter className="h-3.5 w-3.5" />
              <span>Filters</span>
            </div>
            
            {/* Priority Selector Filter Dropdown/Tabs */}
            <select 
              value={priorityFilter} 
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All">Priority: All</option>
              <option value="Critical">Critical Only</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>

            {/* Status Selector Filter */}
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All">Status: All</option>
              <option value="In Transit">In Transit</option>
              <option value="Delayed">Delayed</option>
              <option value="At Destination">At Destination</option>
            </select>
          </div>

          <div className="text-[11px] font-bold text-slate-400">
            Showing <strong className="text-slate-800">{filteredJobs.length}</strong> of {jobs.length} live sessions
          </div>
        </div>

        {/* ==========================================
            4. MAIN GRID CONTENT AREA (TABLE & FOOTER INTERACTION)
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* MIDDLE COLUMN: LIVE ETA TRACKING DATAGRID */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs flex flex-col">
            <div className="overflow-x-auto">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-wider text-slate-400 uppercase">
                    <th className="py-3 px-4">Job ID / Partner</th>
                    <th className="py-3 px-4">Driver Details</th>
                    <th className="py-3 px-4">Route Leg Matrix</th>
                    <th className="py-3 px-4">Live Progress / ETA</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredJobs.map((job) => (
                    <tr 
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={`hover:bg-slate-50/70 transition-all cursor-pointer ${selectedJob.id === job.id ? "bg-indigo-50/40 font-semibold" : ""}`}
                    >
                      <td className="py-3.5 px-4">
                        <span className="font-mono text-slate-400 block font-bold">{job.id}</span>
                        <strong className="text-slate-900 font-extrabold block">{job.partner}</strong>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <img src={job.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-slate-800 font-bold">{job.driver}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-slate-500 block">From: {job.startPoint}</span>
                        <span className="text-slate-400 font-medium text-[11px]">Loc: {job.currentLocation}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex justify-between items-center text-[10px] font-bold mb-1">
                          <span className="font-mono text-indigo-950">ETA {job.eta}</span>
                          <span className="text-slate-400">{job.progress}%</span>
                        </div>
                        <div className="w-28 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all ${job.status === 'Delayed' ? 'bg-rose-500' : job.status === 'At Destination' ? 'bg-emerald-500' : 'bg-black'}`}
                            style={{ width: `${job.progress}%` }}
                          />
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase ${
                          job.status === 'Delayed' ? 'bg-rose-50 text-rose-600' :
                          job.status === 'At Destination' ? 'bg-emerald-50 text-emerald-600' :
                          'bg-blue-50 text-blue-600'
                        }`}>
                          {job.timeStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table></div>
            </div>
          </div>

          {/* RIGHT SIDEBAR PANEL: CONTEXTUAL HUD & FEED OVERVIEW */}
          <div className="space-y-4 flex flex-col">
            
            {/* SELECTED JOB MINI-MAP CARD PREVIEW CONTAINER */}
            <div className="bg-indigo-950 text-white p-4 rounded-xl border border-slate-900 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              {/* Grid texture matching design elements */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.03] pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest opacity-50 block">SELECTED INCIDENT CONTEXT</span>
                    <h4 className="text-base font-black tracking-tight">{selectedJob.id}</h4>
                  </div>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${selectedJob.priority === 'Critical' ? 'bg-rose-500 text-white' : 'bg-white/10 text-white'}`}>
                    {selectedJob.priority} Priority
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-xs font-medium">
                  <p className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="opacity-50">Carrier Partner:</span>
                    <strong className="font-bold">{selectedJob.partner}</strong>
                  </p>
                  <p className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="opacity-50">Assigned Driver:</span>
                    <strong className="font-bold">{selectedJob.driver}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="opacity-50">Last Active Track:</span>
                    <strong className="font-mono text-amber-400">{selectedJob.currentLocation}</strong>
                  </p>
                </div>
              </div>

              <button 
                onClick={() => alert(`Pinging data synchronization protocols for job ${selectedJob.id}...`)}
                className="w-full mt-4 bg-white text-indigo-950 text-xs font-black py-2.5 rounded-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-1 shadow-sm"
              >
                <span>Initialize Live Intercom Link</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* REAL-TIME OPERATION FEED NOTIFICATIONS LIST STREAM */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex-1 flex flex-col">
              <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                Operations Live Feed
              </h3>
              <div className="space-y-3 flex-1 overflow-y-auto">
                {opsFeed.map((feed) => (
                  <div key={feed.id} className="flex gap-3 text-xs border-b border-slate-50 pb-2.5 last:border-0">
                    <div className="mt-0.5">
                      {feed.type === 'alert' ? '🔴' : feed.type === 'success' ? '🟢' : '🔵'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="font-black text-slate-900">{feed.title}</strong>
                        <span className="text-[9px] text-slate-400 font-mono font-bold">{feed.time}</span>
                      </div>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-normal">{feed.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}