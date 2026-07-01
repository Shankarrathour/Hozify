import React, { useState, useRef } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  ChevronLeft, ChevronRight, Calendar, AlertTriangle, 
  ExternalLink, MoreVertical, Plus 
} from "lucide-react";

// Bottom section me dikhne wale slots cards
function ScheduledSlotCard({ title, status, zone, dateRange, bgImg }) {
  return (
<div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow min-h-[110px]">
  <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">  <img
    src={bgImg}
    alt={title}
    className="w-full h-full object-cover"
  />
</div>  
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <h4 className="text-xs font-bold text-slate-900 truncate">{title}</h4>
          <span className={`text-[8px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wide shrink-0 ${
            status === "LIVE" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
          }`}>
            {status}
          </span>
        </div>
        <p className="text-[10px] text-slate-400 mt-0.5">{zone}</p>
        <p className="text-[9px] text-slate-400 font-medium mt-1 flex items-center space-x-1">
          <Calendar size={10} /> <span>{dateRange}</span>
        </p>
      </div>
      <button onClick={() => alert(`Opening options for ${title}`)} className="text-slate-400 hover:text-slate-600 shrink-0">
        <MoreVertical size={14} />
      </button>
    </div>
  );
}

// Checkbox items for top calendar filters
function FilterCheckbox({ label, colorClass, checked }) {
  return (
    <label className="flex items-center space-x-2 text-xs font-semibold text-slate-600 cursor-pointer select-none">
      <input type="checkbox" defaultChecked={checked} className="rounded border-slate-300 text-indigo-950 focus:ring-indigo-950 w-3.5 h-3.5" />
      <div className="flex items-center space-x-1.5">
        <span className={`w-2 h-2 rounded-full ${colorClass}`} />
        <span>{label}</span>
      </div>
    </label>
  );
}
// ========================================================================
// 2. MAIN DASHBOARD ELEMENT ROUTE CONTAINER (PART A - SCHEDULING CALENDAR GRID)
// ========================================================================

export default function BannerSchedulingPage() {
  const [viewTab, setViewTab] = useState("Timeline");
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1));
  const quickScheduleRef = useRef(null);
  
  const [scheduledSlots, setScheduledSlots] = useState([
    { id: 1, title: "Winter Launch 2024", status: "LIVE", zone: "Homepage Hero", dateRange: "Nov 10 - Nov 20", bgImg: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=600" },
    { id: 2, title: "Early Bird Promo", status: "SCHEDULED", zone: "Homepage Hero", dateRange: "Nov 14 - Nov 18", bgImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" }
  ]);

  const [newCampaignName, setNewCampaignName] = useState("");
  const [newZone, setNewZone] = useState("Homepage Hero");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [showAllSlotsModal, setShowAllSlotsModal] = useState(false);

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleScheduleNewBanner = () => {
    setShowScheduleModal(true);
  };

  const handleCreateSchedule = () => {
    if (!newCampaignName || !newStartDate || !newEndDate) {
      alert("Please fill all fields");
      return;
    }
    const newSlot = {
      id: Date.now(),
      title: newCampaignName,
      status: "SCHEDULED",
      zone: newZone,
      dateRange: `${newStartDate} - ${newEndDate}`,
      bgImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
    };
    setScheduledSlots([newSlot, ...scheduledSlots]);
    setNewCampaignName("");
    setNewStartDate("");
    setNewEndDate("");
    setShowScheduleModal(false);
    alert("Schedule created successfully!");
  };

  return (
    <AdminShell activeTab="Banners" searchPlaceholder="Search campaigns or users...">
      <div className="p-8 bg-slate-50 min-h-screen space-y-6 max-w-[1400px] w-full mx-auto font-sans antialiased">
        
        {/* HEADER TOOLBAR TITLE ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Banner Scheduling</h1>
            <p className="text-sm text-slate-400 mt-1">Visualize and manage campaign deployment across platform zones.</p>
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <div className="bg-slate-100 p-1 rounded-lg flex items-center space-x-1 text-xs font-semibold">
              {["Timeline", "Calendar"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setViewTab(tab)}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewTab === tab ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button onClick={handleScheduleNewBanner} className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all">
              <Plus size={18} />
              <span>Schedule New Banner</span>
            </button>
          </div>
        </div>

        {/* MAIN SIDEBAR + MAIN VIEW WORKSPACE SPLIT LAYOUT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">          
          {/* LEFT 3 COLUMNS AREA: CRITICAL ALERTS & TIMELINE VISUAL DATA BLOCK */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* RED COLOR STATUS ERROR SCHEDULING CONFLICT ALERT BOX */}
            <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-center justify-between shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-rose-600 text-white rounded-lg mt-0.5">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-rose-950">Scheduling Conflicts Detected</h4>
                  <p className="text-xs text-rose-700 mt-0.5 max-w-xl leading-relaxed">
                    3 High-Priority banners are overlapping in the <span className="font-semibold text-rose-950">"Homepage Hero"</span> slot for Nov 14th - 16th.
                  </p>
                </div>
              </div>
              <button onClick={() => alert('Opening conflict resolution tool...')} className="whitespace-nowrap bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm">
                Resolve Now
              </button>
            </div>

            {/* TIMELINE VISUAL CONTAINER SHEET BOX ROW BLOCKS */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-6 space-y-6">
              
              {/* MONTH NAVIGATION + FILTER PILLS GROUP BAR */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-50">
                <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                  <button onClick={handlePrevMonth} className="text-slate-500 hover:text-slate-800 p-0.5"><ChevronLeft size={14} /></button>
                  <span className="text-xs font-bold text-slate-800 min-w-[90px] text-center">{monthName} {year}</span>
                  <button onClick={handleNextMonth} className="text-slate-500 hover:text-slate-800 p-0.5"><ChevronRight size={18} /></button>
                </div>
                
                {/* Horizontal custom interactive filters checklist checkboxes group box */}
                <div className="flex items-center flex-wrap gap-4 pt-1 sm:pt-0">
                  <FilterCheckbox label="Homepage" colorClass="bg-indigo-600" checked={true} />
                  <FilterCheckbox label="Offers" colorClass="bg-blue-600" checked={true} />
                  <FilterCheckbox label="Popups" colorClass="bg-amber-500" checked={false} />
                  <span className="w-px h-3 bg-slate-200 hidden sm:inline-block" />
                  <div className="flex items-center space-x-3 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    <span className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> <span>Live</span></span>
                    <span className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> <span>Scheduled</span></span>
                    <span className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> <span>Conflict</span></span>
                  </div>
                </div>
              </div>

              {/* TIMELINE TRACK MAP CHART GRID MATRIX BOX MOCKUP ELEMENT */}
              <div className="overflow-x-auto">
                <div className="min-w-[700px] border border-slate-100 rounded-xl overflow-hidden">
                  
                  {/* Grid Table Headers Day Indicators */}
                  <div className="grid grid-cols-6 bg-slate-50/50 border-b border-slate-100 text-[10px] font-extrabold text-slate-400 uppercase text-center py-2.5">
                    <div className="text-left px-4">Placement Zone</div>
                    <div>Nov 11</div>
                    <div>Nov 12</div>
                    <div>Nov 13</div>
                    <div className="text-indigo-600 bg-indigo-50/40 font-black">Nov 14 (Today)</div>
                    <div>Nov 15</div>
                  </div>

                  {/* Row 1: Homepage Hero Slot Tracking Line */}
                  <div className="grid grid-cols-6 items-center text-xs border-b border-slate-50 py-4 relative">
                    <div className="font-bold text-slate-800 px-4">Homepage Hero</div>
                    <div className="col-span-5 grid grid-cols-5 gap-2 px-2 relative h-7">
                      <div className="col-start-3 col-span-2 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate">Winter Sale Launch</div>
                      <div className="col-start-4 col-span-2 bg-orange-500 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm border border-rose-600/30 truncate absolute top-1 bottom-1 left-4 right-0 z-10">Exclusive Early Bird</div>
                      {scheduledSlots.filter(s => s.id > 2 && s.zone === "Homepage Hero").map((slot, idx) => (
                        <div key={idx} className="col-span-2 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate absolute top-1 bottom-1 left-0 z-20">{slot.title}</div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Offers Sidebar Slot Tracking Line */}
                  <div className="grid grid-cols-6 items-center text-xs border-b border-slate-50 py-4 relative">
                    <div className="font-bold text-slate-800 px-4">Offers Sidebar</div>
                    <div className="col-span-5 grid grid-cols-5 gap-2 px-2 h-7 relative">
                      <div className="col-start-2 col-span-4 bg-blue-600 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate">App-Only Promo</div>
                      {scheduledSlots.filter(s => s.id > 2 && s.zone === "Offers Sidebar").map((slot, idx) => (
                        <div key={idx} className="col-span-2 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate absolute top-1 bottom-1 left-0 z-20">{slot.title}</div>
                      ))}
                    </div>
                  </div>

                  {/* Row 3: Category Header Slot Tracking Line */}
                  <div className="grid grid-cols-6 items-center text-xs border-b border-slate-50 py-4 relative">
                    <div className="font-bold text-slate-800 px-4">Category Header</div>
                    <div className="col-span-5 grid grid-cols-5 gap-2 px-2 h-7 relative">
                      <div className="col-start-4 col-span-2 bg-emerald-400 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate">Flash Sale Category</div>
                      {scheduledSlots.filter(s => s.id > 2 && s.zone === "Category Header").map((slot, idx) => (
                        <div key={idx} className="col-span-2 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate absolute top-1 bottom-1 left-0 z-20">{slot.title}</div>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Exit Intent Popup Slot Tracking Line */}
                  <div className="grid grid-cols-6 items-center text-xs py-4">
                    <div className="font-bold text-slate-800 px-4">Exit Intent Popup</div>
                    <div className="col-span-5 grid grid-cols-5 gap-2 px-2 h-7">
                      <div className="col-start-3 col-span-2 bg-amber-500 text-white rounded-lg flex items-center justify-center font-extrabold text-[9px] px-2 shadow-sm truncate">Cart Recovery V1</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          {/* RIGHT SIDEBAR 1 COLUMN AREA: QUICK FORM FORM & METRICS RADAR PANEL */}
          <div className="space-y-6">
            
            {/* QUICK FORM FORM SCHEDULER WIDGET */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
              <div>
                <h3 className="text-xs font-extrabold text-indigo-950 uppercase tracking-widest">Quick Schedule</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Deploy new placeholder instantly.</p>
              </div>
              
              <div className="space-y-3 text-sm">
                {/* Input text name campaign selection field */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 block">Campaign Name</label>
                  <input ref={quickScheduleRef} value={newCampaignName} onChange={(e) => setNewCampaignName(e.target.value)} type="text" placeholder="e.g. Black Friday 2024" className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none font-medium placeholder-slate-300 text-slate-700" />
                </div>
                
                {/* Selection dropdown menu placement fields option box block container */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 block">Zone Placement</label>
                  <select value={newZone} onChange={(e) => setNewZone(e.target.value)} className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none font-medium text-slate-700">
                    <option>Homepage Hero</option>
                    <option>Offers Sidebar</option>
                    <option>Category Header</option>
                  </select>
                </div>
                
                {/* Start and end time limits grid fields selection box elements lines */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-600 block">Start Date</label>
                    <input value={newStartDate} onChange={(e) => setNewStartDate(e.target.value)} type="text" placeholder="mm/dd/yyyy" className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none text-center font-medium placeholder-slate-300 text-slate-700" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-600 block">End Date</label>
                    <input value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)} type="text" placeholder="mm/dd/yyyy" className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none text-center font-medium placeholder-slate-300 text-slate-700" />
                  </div>
                </div>

                <button onClick={handleCreateSchedule} className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2.5 rounded-xl mt-2 transition-colors shadow-sm text-center">
                  Create Schedule
                </button>
              </div>
            </div>

            {/* LIVE DATA PERFORMANCE LIST TRACKER COUNT WIDGETS BOX */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
              <div>
                <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Live Performance</h3>
              </div>
              
              <div className="space-y-3.5 text-xs text-slate-500 font-medium">
                <div className="flex justify-between items-center">
                  <span>Active Banners</span>
                  <span className="text-sm font-black text-slate-900">12</span>
                </div>
                <div className="w-full h-px bg-slate-50" />
                <div className="flex justify-between items-center">
                  <span>Total Impressions</span>
                  <span className="text-sm font-black text-slate-900">45.2k</span>
                </div>
                <div className="w-full h-px bg-slate-50" />
                <div className="flex justify-between items-center">
                  <span>CTR Avg.</span>
                  <span className="text-sm font-black text-slate-900">3.4%</span>
                </div>
              </div>
            </div>

{/* LATEST INTERACTIVE ASSET UPLOAD CARD LINK BOX ELEMENT CONTAINER */}
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
  <div className="flex justify-between items-center">
    <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
      Latest Asset Upload
    </h3>
    <ExternalLink
      size={16}
      className="text-slate-400 cursor-pointer hover:text-slate-600"
      onClick={() => alert("Opening latest asset in new tab...")}
    />
  </div>

  <div className="h-24 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
      alt="Latest Asset"
      className="w-full h-full object-cover"
    />
  </div>

  <div>
    <p className="text-sm font-bold text-slate-800 truncate">
      hero_banner_winter_final.jpg
    </p>
    <p className="text-[10px] text-slate-400 mt-0.5">
      1920×600 • 2.4 MB
    </p>
  </div>
</div>

          </div>
        </div>

        {/* BOTTOM SECTION FOOTER: LIVE SCHEDULED SLOTS GRID PREVIEW GROUPS */}
       <div className="space-y-4 -mt-60">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-gray-900">Scheduled Slots Detail</h3>
            <button onClick={() => setShowAllSlotsModal(true)} className="text-xs font-bold text-indigo-600 hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {scheduledSlots.slice(0, 3).map(slot => (
              <ScheduledSlotCard key={slot.id} {...slot} />
            ))}
          </div>
        </div>

      </div>

      {showAllSlotsModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[80vh] flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">All Scheduled Slots</h2>
              <button onClick={() => setShowAllSlotsModal(false)} className="text-slate-400 hover:text-slate-600 font-bold text-3xl">&times;</button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scheduledSlots.map(slot => (
                <ScheduledSlotCard key={slot.id} {...slot} />
              ))}
            </div>
          </div>
        </div>
      )}

      {showScheduleModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Schedule New Banner</h2>
                <p className="text-xs text-slate-500 mt-1">Configure and deploy a new promotional asset.</p>
              </div>
              <button onClick={() => setShowScheduleModal(false)} className="text-slate-400 hover:text-slate-600 font-bold text-2xl">&times;</button>
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="font-bold text-slate-600 block text-sm">Campaign Name</label>
                <input value={newCampaignName} onChange={(e) => setNewCampaignName(e.target.value)} type="text" placeholder="e.g. Black Friday 2024" className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none font-medium text-slate-700" />
              </div>
              
              <div className="space-y-1">
                <label className="font-bold text-slate-600 block text-sm">Zone Placement</label>
                <select value={newZone} onChange={(e) => setNewZone(e.target.value)} className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none font-medium text-slate-700">
                  <option>Homepage Hero</option>
                  <option>Offers Sidebar</option>
                  <option>Category Header</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 block text-sm">Start Date</label>
                  <input value={newStartDate} onChange={(e) => setNewStartDate(e.target.value)} type="text" placeholder="mm/dd/yyyy" className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none text-center font-medium text-slate-700" />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 block text-sm">End Date</label>
                  <input value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)} type="text" placeholder="mm/dd/yyyy" className="w-full bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl outline-none text-center font-medium text-slate-700" />
                </div>
              </div>

              <button onClick={handleCreateSchedule} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl mt-4 transition-colors shadow-sm text-center">
                Create Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
