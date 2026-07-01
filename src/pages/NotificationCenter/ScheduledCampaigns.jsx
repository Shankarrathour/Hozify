import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal, 
  Clock, 
  Users, 
  MoreVertical, 
  Mail, 
  Smartphone, 
  MessageSquare, 
  BarChart3,
  Edit2,
  CheckCircle,
  X
} from "lucide-react";

export default function ScheduledCampaigns() {
  // State 1: Active Deployment Layout Mode (Calendar vs Timeline View)
  const [currentView, setCurrentView] = useState("calendar");
  
  // State 2: Dynamic Channel Filtering Engine
  const [activeChannelFilter, setActiveChannelFilter] = useState("ALL");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // State 3: Urgent Attention Card Payload Object
  const [urgentCampaign, setUrgentCampaign] = useState({
    title: "Q4 Retention Blast",
    time: "Today, 04:30 PM",
    recipients: "48k Recipients"
  });

  // State 4: Modal UI controller state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInputTitle, setModalInputTitle] = useState(urgentCampaign.title);
  const [modalInputRecipients, setModalInputRecipients] = useState(urgentCampaign.recipients);

  // Handler to persist edited content from modal
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setUrgentCampaign({
      ...urgentCampaign,
      title: modalInputTitle,
      recipients: modalInputRecipients
    });
    setIsModalOpen(false);
  };

  return (
    <AdminShell activeTab="Campaigns" searchPlaceholder="Search campaigns...">
      
      {/* Background color light slate `#f4f6f9` as per image */}
      <div className="min-h-screen bg-[#f4f6f9] p-8 text-slate-800 font-sans relative">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* ================= TOP HEADER SECTION ================= */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-xl font-bold text-[#1e224e] tracking-tight">
                Scheduled Campaigns
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Coordinate and manage your multi-channel deployment pipeline.
              </p>
            </div>

            {/* Controls: Calendar/Timeline Toggle & Filter */}
            <div className="flex items-center gap-3 self-stretch sm:self-auto relative">
              <div className="flex bg-white p-0.5 rounded-md border border-slate-200 shadow-sm text-xs font-semibold">
                <button 
                  onClick={() => setCurrentView("calendar")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    currentView === "calendar" 
                      ? "bg-[#1d1880] text-white shadow-sm" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Calendar
                </button>
                <button 
                  onClick={() => setCurrentView("timeline")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    currentView === "timeline" 
                      ? "bg-[#1d1880] text-white shadow-sm" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Timeline
                </button>
              </div>
              
              {/* Filter Button Control */}
              <div>
                <button 
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md border font-medium text-xs shadow-sm transition-all ${
                    activeChannelFilter !== "ALL" 
                      ? "bg-indigo-50 border-indigo-300 text-indigo-700 font-bold" 
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <SlidersHorizontal size={14} className={activeChannelFilter !== "ALL" ? "text-indigo-600" : "text-slate-500"} />
                  Filter: {activeChannelFilter}
                </button>

                {/* Micro Filter Floating Modal */}
                {showFilterDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-30 text-xs font-medium">
                    {["ALL", "EMAIL", "PUSH", "SMS"].map((channel) => (
                      <button
                        key={channel}
                        onClick={() => {
                          setActiveChannelFilter(channel);
                          setShowFilterDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 font-semibold flex justify-between items-center"
                      >
                        {channel}
                        {activeChannelFilter === channel && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= MAIN CONTAINER GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* LEFT 2/3 COLUMN: CALENDAR COMPONENT */}
            <div className="lg:col-span-2 bg-white rounded-md border border-slate-200/80 p-5 shadow-xs">
              
              {/* Calendar Month Selector Header */}
              <div className="flex justify-between items-center pb-5">
                <h3 className="text-sm font-bold text-[#1e224e] flex items-center gap-2">
                  <CalendarIcon size={16} className="text-indigo-900" />
                  October 2023 <span className="text-xs font-normal text-slate-400">({currentView === "calendar" ? "Grid Mode" : "Linear Engine Pipeline"})</span>
                </h3>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-xs">
                    <ChevronLeft size={15} />
                  </button>
                  <button className="p-1.5 rounded border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-xs">
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Calendar Weekdays Heading Row */}
              <div className="grid grid-cols-7 text-center border-b border-slate-200 pb-2 text-[10px] font-bold text-slate-400 tracking-wider">
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
                <div>SUN</div>
              </div>

              {/* Calendar Month Grid Cells */}
              <div className="grid grid-cols-7 grid-rows-3 border-l border-t border-slate-100">
                
                {/* --- ROW 1 (Faded past days + Oct 1st) --- */}
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-50/70 text-slate-300 text-xs font-semibold">25</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-50/70 text-slate-300 text-xs font-semibold">26</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-50/70 text-slate-300 text-xs font-semibold">27</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-50/70 text-slate-300 text-xs font-semibold">28</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-50/70 text-slate-300 text-xs font-semibold">29</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-50/70 text-slate-300 text-xs font-semibold">30</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">01</div>

                {/* --- ROW 2 (Oct 2 - Oct 8) --- */}
                {/* Oct 02 - Newsletter Campaign */}
                <div className={`p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold flex flex-col justify-between transition-all ${activeChannelFilter !== "ALL" && activeChannelFilter !== "EMAIL" ? "opacity-15 grayscale" : ""}`}>
                  <span>02</span>
                  <div className="bg-sky-50 text-sky-800 text-[9px] leading-tight font-bold p-1.5 rounded-sm border border-sky-100">
                    <div className="truncate tracking-tight">NEWSLETTER #42</div>
                    <div className="text-[8px] font-normal text-sky-500 mt-0.5">09:00 AM</div>
                  </div>
                </div>
                
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">03</div>
                
                {/* Oct 04 - Flash Sale Push */}
                <div className={`p-2 h-28 border-r border-b border-slate-200 bg-white text-slate-900 text-xs font-bold flex flex-col justify-between relative ring-1 ring-inset ring-slate-200 transition-all ${activeChannelFilter !== "ALL" && activeChannelFilter !== "PUSH" ? "opacity-15 grayscale" : ""}`}>
                  <div className="flex justify-between items-center">
                    <span>04</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1d1880]" />
                  </div>
                  <div className="bg-[#0b0c43] text-white text-[9px] leading-tight font-semibold p-1.5 rounded-sm shadow-xs">
                    <div className="tracking-tight uppercase font-bold truncate">Flash Sale Push</div>
                    <div className="text-[8px] font-normal text-slate-300 mt-0.5">02:30 PM</div>
                  </div>
                </div>

                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">05</div>
                
                {/* Oct 06 - Retargeting V2 */}
                <div className={`p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold flex flex-col justify-between transition-all ${activeChannelFilter !== "ALL" && activeChannelFilter !== "SMS" ? "opacity-15 grayscale" : ""}`}>
                  <span>06</span>
                  <div className="bg-purple-50 text-purple-800 text-[9px] leading-tight font-bold p-1.5 rounded-sm border border-purple-100">
                    <div className="truncate tracking-tight">RETARGETING V2</div>
                    <div className="text-[8px] font-normal text-purple-400 mt-0.5">11:00 AM</div>
                  </div>
                </div>

                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">07</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">08</div>

                {/* --- ROW 3 (Oct 9 - Oct 14) --- */}
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">09</div>
                
                {/* Oct 10 - Winback SMS */}
                <div className={`p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold flex flex-col justify-between transition-all ${activeChannelFilter !== "ALL" && activeChannelFilter !== "SMS" ? "opacity-15 grayscale" : ""}`}>
                  <span>10</span>
                  <div className="bg-orange-50 text-orange-800 text-[9px] leading-tight font-bold p-1.5 rounded-sm border border-orange-100">
                    <div className="truncate tracking-tight">WINBACK SMS</div>
                    <div className="text-[8px] font-normal text-orange-400 mt-0.5">04:00 PM</div>
                  </div>
                </div>

                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">11</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">12</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">13</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-white text-slate-900 text-xs font-bold">14</div>
                <div className="p-2 h-28 border-r border-b border-slate-100 bg-slate-100/60" />

              </div>
            </div>

            {/* RIGHT 1/3 COLUMN: SIDEBAR WIDGETS */}
            <div className="space-y-6">
              
              {/* WIDGET 1: Urgent Attention Panel (Clickable Content Edit) */}
              <div className="bg-[#050529] text-white rounded-md p-5 border border-slate-900 shadow-sm flex flex-col justify-between min-h-[180px] ring-2 ring-indigo-500/50">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block text-[9px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-sm tracking-wider uppercase animate-pulse">
                      Urgent Attention
                    </span>
                    <span className="text-[10px] text-indigo-300 font-mono font-semibold">Live synced</span>
                  </div>
                  <h3 className="text-base font-bold tracking-tight mt-3 text-slate-100">
                    {urgentCampaign.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mt-3">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-500" />
                      <span>{urgentCampaign.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={13} className="text-slate-500" />
                      <span>{urgentCampaign.recipients}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <button 
                    onClick={() => {
                      setModalInputTitle(urgentCampaign.title);
                      setModalInputRecipients(urgentCampaign.recipients);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-2 bg-white text-slate-900 text-xs font-bold rounded-sm hover:bg-slate-100 transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <Edit2 size={12} />
                    Edit Content
                  </button>
                  <button className="p-2 rounded-sm border border-slate-800 text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                    <MoreVertical size={14} />
                  </button>
                </div>
              </div>

              {/* DYNAMIC WIDGET INTERCHANGER BASED ON CURRENT INTERFACE MODE */}
              {currentView === "calendar" ? (
                <>
                  {/* WIDGET 2: Upcoming Campaign Queue */}
                  <div className="bg-white rounded-md border border-slate-200/80 p-5 shadow-xs space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold text-[#1e224e]">
                        Queue ({activeChannelFilter === "ALL" ? "3 Total" : "Filtered View"})
                      </h3>
                      <button 
                        onClick={() => alert("Viewing all queued campaigns...")}
                        className="text-xs font-bold text-slate-500 hover:text-[#1d1880] transition-colors"
                      >
                        View All
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Queue Item 1: Email */}
                      {(activeChannelFilter === "ALL" || activeChannelFilter === "EMAIL") && (
                        <div className="flex gap-3 items-start text-xs border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                          <div className="p-2 rounded-md bg-slate-50 border border-slate-100 text-slate-600 mt-0.5">
                            <Mail size={15} />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h4 className="font-bold text-[#1e224e] leading-tight">Monthly Curated Content</h4>
                            <p className="text-slate-400 font-medium text-[11px]">Scheduled: Oct 15 • 10:00 AM</p>
                            <div className="flex items-center gap-1.5 pt-1">
                              <span className="text-[9px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-sm">EMAIL</span>
                              <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm">DRAFT</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Queue Item 2: Push */}
                      {(activeChannelFilter === "ALL" || activeChannelFilter === "PUSH") && (
                        <div className="flex gap-3 items-start text-xs border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                          <div className="p-2 rounded-md bg-slate-50 border border-slate-100 text-slate-600 mt-0.5">
                            <Smartphone size={15} />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h4 className="font-bold text-[#1e224e] leading-tight">App Update Alert</h4>
                            <p className="text-slate-400 font-medium text-[11px]">Scheduled: Oct 16 • 09:15 AM</p>
                            <div className="flex items-center gap-1.5 pt-1">
                              <span className="text-[9px] font-bold bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded-sm">PUSH</span>
                              <span className="text-[9px] font-bold bg-green-50 text-green-600 px-1.5 py-0.5 rounded-sm">READY</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Queue Item 3: SMS */}
                      {(activeChannelFilter === "ALL" || activeChannelFilter === "SMS") && (
                        <div className="flex gap-3 items-start text-xs">
                          <div className="p-2 rounded-md bg-slate-50 border border-slate-100 text-slate-600 mt-0.5">
                            <MessageSquare size={15} />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h4 className="font-bold text-[#1e224e] leading-tight">Weekend Promo Code</h4>
                            <p className="text-slate-400 font-medium text-[11px]">Scheduled: Oct 20 • 02:00 PM</p>
                            <div className="flex items-center gap-1.5 pt-1">
                              <span className="text-[9px] font-bold bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded-sm">SMS</span>
                              <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm">REVIEW</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* WIDGET 3: System Capacity Metric */}
                  <div className="bg-white rounded-md border border-slate-200/80 p-5 shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1e224e]">
                      <BarChart3 size={16} className="text-slate-600" />
                      <h3>Capacity Load</h3>
                    </div>
                    
                    <div className="pt-1">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                        <span className="text-slate-500 font-semibold">Weekly Email Volume</span>
                        <span className="text-slate-900 text-sm font-black">78%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#050529] h-full rounded-full transition-all duration-500" style={{ width: "78%" }} />
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium pt-1">
                      System load is optimal. 3 high-volume slots remain available for Thursday.
                    </p>
                  </div>
                </>
              ) : (
                /* ALTERNATIVE INTERACTIVE TOOL: TIMELINE DATA METRICS VIEW */
                <div className="bg-white rounded-md border border-slate-200/80 p-5 shadow-xs space-y-4 animate-fadeIn">
                  <h3 className="text-sm font-bold text-[#1e224e]">Timeline Metrics Summary</h3>
                  <div className="p-3 bg-slate-50 rounded space-y-2 border border-slate-200 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Pipeline Status:</span>
                      <span className="font-bold text-green-600 flex items-center gap-1">🟢 Active Stable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Total Filters Engaged:</span>
                      <span className="font-mono font-bold text-slate-800">{activeChannelFilter}</span>
                    </div>
                  </div>
                  
                  {/* Dynamic Stacked mini-chart components representing processing speed */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold text-slate-500">Live Delivery Velocity</span>
                    <div className="flex gap-1 h-6">
                      <div className="w-1/3 bg-emerald-400 rounded-xs" />
                      <div className="w-1/2 bg-indigo-500 rounded-xs" />
                      <div className="w-1/6 bg-amber-400 rounded-xs" />
                    </div>
                    <p className="text-[10px] text-slate-400">Green (Delivered) • Blue (Queued) • Yellow (Under Review)</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* ================= EDIT CONTENT OVERLAY MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-md border border-slate-200 w-full max-w-md p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-[#1e224e] flex items-center gap-1.5">
                <Edit2 size={14} className="text-indigo-600" />
                Modify Urgent Payload Content
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveChanges} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="block text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                  Campaign Title
                </label>
                <input 
                  type="text" 
                  value={modalInputTitle}
                  onChange={(e) => setModalInputTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-indigo-600 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                  Recipient Volume Scale
                </label>
                <input 
                  type="text" 
                  value={modalInputRecipients}
                  onChange={(e) => setModalInputRecipients(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-indigo-600 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 font-semibold rounded hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#1d1880] text-white font-bold rounded hover:bg-[#15115c] shadow-sm flex items-center gap-1"
                >
                  <CheckCircle size={13} />
                  Update Component
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </AdminShell>
  );
}