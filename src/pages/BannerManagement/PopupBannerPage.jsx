import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Filter, Plus, Eye, ArrowUpRight, ArrowDownRight, 
  LogOut, LogIn, Clock, ArrowDown, Bell
} from "lucide-react";


function PopupCampaignRow({ 
  imgText, name, id, triggerType, triggerLabel, triggerIcon,
  tags, status, ctr, change, isUp, footerText 
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors text-xs text-slate-700">
      {/* Campaign & Preview */}
      <td className="py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-8 rounded bg-slate-900 flex items-center justify-center text-[10px] font-bold text-indigo-400 border border-slate-800 shadow-inner font-mono">
            {imgText}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm">{name}</p>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {id}</p>
          </div>
        </div>
      </td>

      {/* Trigger Rule */}
      <td className="py-4 px-4">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-500">
            {triggerIcon}
          </div>
          <div>
            <p className="font-semibold text-slate-800">{triggerType}</p>
            <p className="text-[10px] text-slate-400 font-medium">{triggerLabel}</p>
          </div>
        </div>
      </td>

      {/* Audience Targeting Tags */}
      <td className="py-4 px-4">
        <div className="flex flex-col space-y-1 max-w-[100px]">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide text-center truncate ${
                idx === 0 ? "bg-indigo-50 text-indigo-600 border border-indigo-100/50" : "bg-slate-100 text-slate-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>

      {/* Status Pill */}
      <td className="py-4 px-4">
        <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wide ${
          status === "LIVE" ? "bg-emerald-50 text-emerald-600" :
          status === "PAUSED" ? "bg-slate-100 text-slate-500" : "bg-blue-50 text-blue-600"
        }`}>
          ● {status}
        </span>
      </td>

      {/* Click-Through-Rate (CTR) */}
      <td className="py-4 px-4">
        {ctr === "--" ? (
          <div>
            <p className="font-bold text-slate-400">{ctr}</p>
            <p className="text-[10px] text-slate-300 mt-0.5">{footerText}</p>
          </div>
        ) : (
          <div>
            <p className="font-extrabold text-slate-900 text-sm">{ctr}</p>
            <p className={`text-[10px] font-bold flex items-center mt-0.5 ${isUp ? "text-emerald-500" : "text-rose-500"}`}>
              {change} <span className="text-slate-400 font-medium ml-1">{footerText}</span>
            </p>
          </div>
        )}
      </td>

      {/* Action Buttons */}
      <td className="py-4 px-4 text-right">
        <div className="flex items-center justify-end space-x-3 text-slate-400">
          <button className="hover:text-slate-600 p-1 rounded hover:bg-slate-100 transition-colors"><MoreVerticalIcon /></button>
        </div>
      </td>
    </tr>
  );
}

// Utility Metric Card Block Item
function TopMetricCard({ title, value, change, text, icon, iconStyle }) {
  const isUp = change && !change.includes("-");
  return (
    <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-28 relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-0.5">
          <p className="text-[12px] font-extrabold text-black-400 uppercase tracking-widest">{title}</p>
          <div className="flex items-baseline space-x-2 pt-1">
            <span className="text-3xl font-black text-black-400 tracking-tight">{value}</span>
            {change && (
              <span className={`text-[10px] font-bold flex items-center ${isUp ? "text-emerald-500" : "text-rose-500"}`}>
                {isUp ? "▲" : "▼"} {change}
              </span>
            )}
          </div>
        </div>
        <div className={`p-2 rounded-xl border ${iconStyle}`}>
          {icon}
        </div>
      </div>
      <p className="text-[11px] text-slate-400 font-medium">{text}</p>
    </div>
  );
}

function MoreVerticalIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
  );
}


export default function PopupBannersPage() {
  return (
    <AdminShell
      activeTab="Banners"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="p-8 bg-slate-50 min-h-screen space-y-6 max-w-[1400px] w-full mx-auto font-sans antialiased">
        
        {/* HEADER BLOCK TOOLBAR WITH BUTTON OPTIONS */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black text-blue-900 tracking-tight">Popup Banners</h1>
            <p className="text-sm text-slate-600 mt-1">Manage contextual triggers, audience targeting, and campaign scheduling.</p>
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button className="flex items-center space-x-2 bg-white border border-slate-200 text-xs font-bold text-slate-600 px-3 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
              <Filter size={14} />
              <span>Filters</span>
            </button>
            <button className="flex items-center space-x-2 bg-indigo-950 hover:bg-indigo-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all">
              <Plus size={14} />
              <span>Create Popup</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <TopMetricCard 
            title="Active Popups" 
            value="12" 
            change="8%" 
            text="Running templates live" 
            icon={<Eye size={20} />} 
            iconStyle="bg-slate-200 text-slate-500 border-slate-100" 
          />
          <TopMetricCard 
            title="Avg. Conversion" 
            value="4.2%" 
            change="- 1.2%" 
            text="Submission success rate" 
            icon={<ArrowUpRight size={16} />} 
            iconStyle="bg-slate-200 text-slate-500 border-slate-100" 
          />
          <TopMetricCard 
            title="Scheduled" 
            value="05" 
            change={null} 
            text="Upcoming seasonal prompts" 
            icon={<Clock size={16} />} 
            iconStyle="bg-slate-200 text-slate-500 border-slate-100" 
          />
          <TopMetricCard 
            title="Total Impressions" 
            value="142.8k" 
            change="24%" 
            text="Gross overall views count" 
            icon={<Bell size={16} />} 
            iconStyle="bg-slate-200 text-slate-500 border-slate-100" 
          />
        </div>
        {/* LIVE POPUP CAMPAIGNS OVERVIEW DATA-TABLE */}
        <div className="bg-white rounded-3xl border border-slate-400 shadow-sm p-6 space-y-4 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                  <th className="pb-3 px-4 w-[30%]">Campaign & Preview</th>
                  <th className="pb-3 px-4 w-[18%]">Trigger Rule</th>
                  <th className="pb-3 px-4 w-[18%]">Audience Targeting</th>
                  <th className="pb-3 px-4 w-[12%]">Status</th>
                  <th className="pb-3 px-4 w-[14%]">CTR</th>
                  <th className="pb-3 px-4 text-right w-[8%]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <PopupCampaignRow 
                  imgText="30% OFF"
                  name="Summer Flash Sale"
                  id="PB-2023-001"
                  triggerIcon={<LogOut size={18} />}
                  triggerType="Exit Intent"
                  triggerLabel="On tab close intent"
                  tags={["VIP MEMBERS", "DESKTOP ONLY"]}
                  status="LIVE"
                  ctr="8.4%"
                  change="+1.2%"
                  isUp={true}
                  footerText="this week"
                />
                <PopupCampaignRow 
                  imgText="👋"
                  name="Newsletter Onboarding"
                  id="PB-2023-042"
                  triggerIcon={<LogIn size={18} />}
                  triggerType="On Entry"
                  triggerLabel="Immediate page load"
                  tags={["NEW USERS"]}
                  status="LIVE"
                  ctr="5.1%"
                  change="-0.4%"
                  isUp={false}
                  footerText="vs last mo"
                />
                <PopupCampaignRow 
                  imgText="⌛"
                  name="Holiday Special Offer"
                  id="PB-2023-089"
                  triggerIcon={<Clock size={18} />}
                  triggerType="30s Delay"
                  triggerLabel="Time spent on page"
                  tags={["GLOBAL"]}
                  status="PAUSED"
                  ctr="--"
                  change={null}
                  isUp={false}
                  footerText="Inactive"
                />
                <PopupCampaignRow 
                  imgText="🚀"
                  name="New Feature Release"
                  id="PB-2023-112"
                  triggerIcon={<ArrowDown size={18} />}
                  triggerType="Scroll 50%"
                  triggerLabel="Page height scroll"
                  tags={["INTERNAL BETA"]}
                  status="SCHEDULED"
                  ctr="--"
                  change={null}
                  isUp={false}
                  footerText="Starts in 3d"
                />
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER WITH PAGINATION INTERFACE */}
          <div className="flex justify-between items-center text-sm text-slate-600 pt-3 border-t border-slate-100 font-medium">
            <p>Showing 4 of 24 Campaigns</p>
            <div className="flex items-center space-x-1">
              <button className="px-2.5 py-1.5 rounded-lg border border-slate-100 bg-white text-slate-400 cursor-not-allowed text-[11px] font-bold">
                &lt;
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-indigo-950 text-white text-[11px] font-bold shadow-sm">
                1
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 transition-colors text-[11px] font-bold">
                2
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 transition-colors text-[11px] font-bold">
                3
              </button>
              <button className="px-2.5 py-1.5 rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 transition-colors text-[11px] font-bold">
                &gt;
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}

