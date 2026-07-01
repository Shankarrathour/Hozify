import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Filter, Trash2, Eye, Layers, Edit2, MoreVertical,
  ExternalLink, Calendar, Clock, RefreshCw, AlertTriangle, Globe 
} from "lucide-react";

// ========================================================================
// 1. HELPER COMPONENTS (INHE SABSE UPAR RAKHA HAI)
// ========================================================================

function CampaignRow({ name, id, targeting, reach, ctr, change, expiry, urgent }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-xs text-slate-700">
      <td className="py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
            <Layers size={14} />
          </div>
          <div>
            <p className="font-semibold text-slate-900">{name}</p>
            <p className="text-[10px] text-slate-400 font-mono">ID: {id}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-slate-500">{targeting}</td>
      <td className="py-4 px-4 font-semibold text-slate-800">{reach}</td>
      <td className="py-4 px-4">
        <div className="flex items-center space-x-1.5 font-bold text-slate-900">
          <span>{ctr}</span>
          <span className="text-[10px] font-medium text-emerald-500">{change}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        <div>
          <p className={`font-semibold ${urgent ? "text-rose-500" : "text-slate-700"}`}>{expiry}</p>
          {urgent && <p className="text-[9px] font-bold text-rose-500 uppercase mt-0.5">Expires Today</p>}
        </div>
      </td>
      <td className="py-4 px-4 text-right">
        <div className="flex items-center justify-end space-x-3 text-slate-400">
          <button onClick={() => alert(`Viewing details for ${name}`)} className="hover:text-slate-600"><Eye size={15} /></button>
          <button onClick={() => alert(`Deleting campaign ${name}`)} className="hover:text-rose-500"><Trash2 size={15} /></button>
        </div>
      </td>
    </tr>
  );
}

function BadgTag({ text, styles }) {
  return (
    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide ${styles}`}>
      {text}
    </span>
  );
}
// ========================================================================
// 2. MAIN BANNERS PAGE COMPONENTS EXPORT (PART A)
// ========================================================================

export default function OfferBannersPage() {
  const [activeFilter, setActiveFilter] = useState("Active");

  return (
    <AdminShell activeTab="Banners" searchPlaceholder="Search campaigns or users...">
      <div className="p-8 bg-black-50 min-h-screen space-y-6 max-w-[1400px] w-full mx-auto font-sans antialiased">
        
        {/* HEADER TOP NAV-BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-2">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Offer Banners</h1>
            <p className="text-xs text-black-400 mt-1">Manage promotional assets and limited-time offer visibility.</p>
          </div>
          
          <div className="flex items-center flex-wrap gap-3 w-full sm:w-auto justify-end">
            <div className="bg-black-100 p-1 rounded-lg flex items-center space-x-1 text-xs font-semibold">
              {["Active", "Scheduled", "Archived"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeFilter === filter ? "bg-indigo-950 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <button onClick={() => alert('Opening filter options...')} className="flex items-center space-x-2 bg-white border border-gray-200 text-xs font-bold text-slate-600 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-50">
              <Filter size={14} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* HERO MAIN TRACKER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SUMMER FLASH SALE CARD (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="h-64 bg-slate-800 relative p-6 flex flex-col justify-between text-white" 
                 style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #142643, #1a3c8a)' }}>
              <div className="flex items-center space-x-2">
                <BadgTag text="★ Top Performer" styles="bg-slate-900/60 text-white backdrop-blur-sm" />
                <BadgTag text="Active" styles="bg-indigo-600 text-white" />
              </div>
              <div className="space-y-1 text-center my-auto">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Summer Sale</p>
                <h2 className="text-5xl font-black tracking-tight text-white">40%</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold text-slate-900">Summer Solstice Flash Sale</h3>
                    <ExternalLink size={14} className="text-slate-400 cursor-pointer" />
                  </div>
                  <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
                    Our highest-converting banner this quarter. Targeted at premium segment users with personalized discount tiers.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Ctr Rate</p>
                  <p className="text-xl font-black text-emerald-500 mt-0.5">12.5%</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-2 border-t border-slate-50">
                <div className="flex items-center space-x-4 text-slate-500 font-medium">
                  <span className="flex items-center space-x-1.5"><Layers size={13} /> <span className="underline">://hozify.com</span></span>
                  <span className="flex items-center space-x-1.5 text-rose-500 font-bold"><Clock size={13} /> <span>Expires in 42h 12m</span></span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <button onClick={() => alert('Editing Summer Sale banner...')} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 bg-white hover:bg-slate-50"><Edit2 size={13} /></button>
                  <button onClick={() => alert('More options for Summer Sale...')} className="p-1.5 border border-slate-200 rounded-lg text-slate-500 bg-white hover:bg-slate-50"><MoreVertical size={13} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER OPT-IN SIDEBAR */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-32 rounded-xl bg-slate-100 border border-dashed border-slate-200 flex items-center justify-center">
                <BadgTag text="Desktop Only" styles="bg-slate-700 text-white font-mono" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-900">Newsletter Opt-in Promo</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Floating sidebar banner for first-time visitors.</p>
              </div>
              <div className="flex justify-between items-center text-xs pt-1.5">
                <span className="text-slate-400 font-medium flex items-center space-x-1"><Calendar size={13} /> <span>Exp. Date:</span></span>
                <span className="font-bold text-slate-800">Dec 31, 2024</span>
              </div>
              <div className="space-y-1 pt-2 border-t border-slate-50">
                <div className="h-1.5 w-full bg-black-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full w-[65%]" />
                </div>
                <p className="text-[10px] text-slate-400 font-medium">65% of budget consumed</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 text-xs">
              <span className="font-bold text-slate-900">CTA: Join Now</span>
              <div className="flex items-center space-x-1.5">
                <button onClick={() => alert('Editing Newsletter banner...')} className="p-1.5 border border-slate-100 rounded-lg text-slate-400 bg-white hover:bg-slate-50"><Edit2 size={12} /></button>
                <button onClick={() => alert('More options for Newsletter...')} className="p-1.5 border border-slate-100 rounded-lg text-slate-400 bg-white hover:bg-slate-50"><MoreVertical size={12} /></button>
              </div>
            </div>
          </div>

        </div>
        {/* SECOND LEVEL ASSETS PACK BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tech Upgrade Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="h-36 rounded-xl bg-gradient-to-br from-slate-700 to-indigo-700 p-4 flex items-start text-white">
                <BadgTag text="New Launch" styles="bg-indigo-600 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">Tech Upgrade 2024</h3>
                <p className="text-xs text-slate-400">Electronics category specific hero banner.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Clicks</p>
                  <p className="text-sm font-black text-slate-800 mt-0.5">4.2k</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Conv.</p>
                  <p className="text-sm font-black text-slate-800 mt-0.5">2.1%</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 text-xs">
              <span className="text-rose-500 font-bold flex items-center space-x-1"><AlertTriangle size={13} /> <span>Expiring soon</span></span>
              <button onClick={() => alert('Managing Tech Upgrade banner...')} className="font-bold text-indigo-950 hover:underline">Manage →</button>
            </div>
          </div>

          {/* App Exclusive Reward */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="h-36 rounded-xl bg-slate-50 border border-slate-100 flex items-start p-4">
                <BadgTag text="App Only" styles="bg-slate-200 text-slate-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">App Exclusive Reward</h3>
                <p className="text-xs text-slate-400">Deep-linked mobile app exclusive discount campaign.</p>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-indigo-400" />
                  <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-purple-400" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium">5 managers assigned</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 text-xs">
              <BadgTag text="In Review" styles="bg-purple-50 text-purple-600 lowercase border border-purple-100 px-2.5" />
              <button onClick={() => alert('Refreshing review status...')} className="p-1.5 border border-slate-100 rounded-lg text-slate-400 bg-white hover:bg-slate-50"><RefreshCw size={12} /></button>
            </div>
          </div>

          {/* CREATE NEW OFFER BANNER BOX BUTTON */}
          <div onClick={() => alert('Creating new offer banner...')} className="border-2 border-dashed border-slate-200 bg-slate-50/50 hover:bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all space-y-3 min-h-[300px]">
            <div className="text-2xl text-slate-400 group-hover:text-indigo-950 font-bold">+</div>
            <div className="space-y-1 max-w-[200px]">
              <h3 className="text-sm font-bold text-slate-900">Create Offer Banner</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">Add a new promotional asset to the rotation</p>
            </div>
          </div>

        </div>

        {/* LIVE PERFORMANCE DATAGRID TABLE */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <h3 className="text-sm font-bold text-slate-900">Live Performance Overview</h3>
            <div className="flex items-center space-x-2 text-xs font-semibold">
              <button onClick={() => alert('Exporting data to CSV...')} className="text-slate-500 hover:text-slate-800 px-3 py-1.5 bg-slate-50 rounded-lg hover:bg-slate-100">Export CSV</button>
              <button onClick={() => alert('Opening bulk update tool...')} className="bg-indigo-950 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-900 shadow-sm">Bulk Update</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                  <th className="pb-3 px-4">Campaign Name</th>
                  <th className="pb-3 px-4">Targeting</th>
                  <th className="pb-3 px-4">Reach</th>
                  <th className="pb-3 px-4">Ctr</th>
                  <th className="pb-3 px-4">Expiry</th>
                  <th className="pb-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <CampaignRow name="Holiday Special 24" id="OFF-9821" targeting="Global / Premium" reach="84.2k" ctr="8.1%" change="▲ 2%" expiry="12 Oct 2024" urgent={true} />
                <CampaignRow name="New User Welcome" id="OFF-7712" targeting="New Accounts" reach="12.5k" ctr="15.4%" change="▲ 4%" expiry="Evergreen" urgent={false} />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
