import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Users,
  TrendingUp,
  Download,
  Plus,
  SlidersHorizontal,
  ChevronDown,
  Star,
  AlertTriangle,
  UserPlus,
  Smartphone,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Zap,
  Layers,
  ChevronLast
} from "lucide-react";

export default function AudienceSegments() {
  return (
    <AdminShell activeTab="Audience" searchPlaceholder="Search audience or segments...">
      {/* Background color light slate-50 as per image */}
      <div className="min-h-screen bg-slate-50 p-8 text-slate-800 space-y-6">
        
        {/* ================= EXACT TOP BREADCRUMB HEADING & ACTIONS ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            {/* Breadcrumb row like pic */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span>Audience</span>
              <span className="text-[10px] font-normal text-slate-300">&gt;</span>
            </div>
            
            {/* Main Title Heading: Audience Segments */}
            <h1 className="text-2xl font-bold text-slate-950 mt-1 tracking-tight">
              Audience Segments
            </h1>
            
            <p className="text-xs text-slate-500 mt-1 font-normal">
              Manage and organize your user base into targeted groups.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-700 border border-slate-200 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm">
              <Download size={15} className="text-slate-500" />
              Export Segment
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#251fa3] text-white font-semibold text-sm hover:bg-[#1d1880] transition-colors shadow-sm">
              <Plus size={15} />
              Create Segment
            </button>
          </div>
        </div>

        {/* ================= TOP STATS & TRENDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Total Reach Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-md">
                <Users size={20} />
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                +12.4%
              </span>
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                TOTAL REACH
              </p>
              <h3 className="mt-1 text-4xl font-extrabold text-slate-900 tracking-tight">
                1,284,502
              </h3>
              <p className="mt-2 text-xs text-slate-400 font-medium">
                Active subscribers across all segments
              </p>
            </div>
          </div>

          {/* Growth Trend Bar Graph Card */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-900">Growth Trend</h4>
              <div className="flex bg-slate-100 p-0.5 rounded-md text-xs font-bold text-slate-500">
                <button className="px-3 py-1 rounded hover:text-slate-800">7D</button>
                <button className="px-3 py-1 rounded bg-[#0a0f29] text-white shadow-sm">30D</button>
                <button className="px-3 py-1 rounded hover:text-slate-800">12M</button>
              </div>
            </div>

            {/* Simple Replicated Bar Metrics */}
            <div className="h-24 flex items-end gap-3 pt-4">
              <div className="w-full bg-blue-100/70 h-[50%] rounded-sm" />
              <div className="w-full bg-blue-100/70 h-[75%] rounded-sm" />
              <div className="w-full bg-blue-100/70 h-[30%] rounded-sm" />
              <div className="w-full bg-blue-100/70 h-[80%] rounded-sm" />
              <div className="w-full bg-blue-100/70 h-[60%] rounded-sm" />
              <div className="w-full bg-[#251fa3] h-[95%] rounded-sm" />
            </div>
          </div>

        </div>

        {/* ================= ALL SEGMENTS LIST TABLE ================= */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Table Toolbar controls */}
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-base font-bold text-slate-900">All Segments</h3>
            
            <div className="relative self-end sm:self-auto">
              <select className="appearance-none pl-8 pr-10 py-1.5 rounded-md border border-slate-200 bg-white text-slate-700 text-xs font-semibold focus:outline-none min-w-[130px]">
                <option>Status: All</option>
              </select>
              <SlidersHorizontal className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
            </div>
          </div>

          {/* Core Table Grid layout */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-3.5">Segment Name</th>
                  <th className="px-4 py-3.5">Size</th>
                  <th className="px-4 py-3.5">Growth (30D)</th>
                  <th className="px-4 py-3.5">Last Activity</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                
                {/* Row 1 - Power Users */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 text-[#251fa3] rounded">
                      <Star size={16} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Power Users</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">Spent &gt; $500 total</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-800 text-sm">42,805</td>
                  <td className="px-4 py-4 text-green-600 text-xs font-bold">▲ +5.2%</td>
                  <td className="px-4 py-4 text-slate-400 text-xs">2 hours ago</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-slate-400">
                      <button className="hover:text-slate-600"><Edit2 size={14} /></button>
                      <button className="hover:text-red-500"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 - Churn Risk */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-red-50 text-red-500 rounded">
                      <AlertTriangle size={16} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Churn Risk</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">No activity in 30 days</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-800 text-sm">15,221</td>
                  <td className="px-4 py-4 text-red-500 text-xs font-bold">▼ -2.1%</td>
                  <td className="px-4 py-4 text-slate-400 text-xs">14 mins ago</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-slate-400">
                      <button className="hover:text-slate-600"><Edit2 size={14} /></button>
                      <button className="hover:text-red-500"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 - New Signups */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded">
                      <UserPlus size={16} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">New Signups</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">Joined in last 7 days</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-800 text-sm">8,443</td>
                  <td className="px-4 py-4 text-green-600 text-xs font-bold">▲ +18.4%</td>
                  <td className="px-4 py-4 text-slate-400 text-xs">Just now</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-slate-400">
                      <button className="hover:text-slate-600"><Edit2 size={14} /></button>
                      <button className="hover:text-red-500"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>

                {/* Row 4 - Mobile App Users */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-slate-100 text-slate-600 rounded">
                      <Smartphone size={16} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Mobile App Users</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">Android and iOS active sessions</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-800 text-sm">312,900</td>
                  <td className="px-4 py-4 text-slate-400 text-xs">— 0.0%</td>
                  <td className="px-4 py-4 text-slate-400 text-xs">5 hours ago</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-slate-400">
                      <button className="hover:text-slate-600"><Edit2 size={14} /></button>
                      <button className="hover:text-red-500"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-white text-xs text-slate-400 font-bold">
            <div>Showing 4 of 28 segments</div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded border border-slate-200 text-slate-300">
                <ChevronLeft size={14} />
              </button>
              <button className="h-6 w-6 rounded bg-[#0a0f29] text-white flex items-center justify-center">1</button>
              <button className="h-6 w-6 rounded border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50">2</button>
              <button className="h-6 w-6 rounded border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50">3</button>
              <button className="p-1.5 rounded border border-slate-200 text-slate-500 hover:bg-slate-50">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM FOOTER SECTION GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box Left: Automate Your Audience */}
          <div className="bg-gradient-to-br from-[#0a0c27] to-[#030416] text-white rounded-xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden min-h-[180px]">
            <div className="space-y-2 max-w-sm z-10">
              <h3 className="text-base font-bold tracking-tight">Automate Your Audience</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Connect your CRM to automatically sync segments in real-time and trigger automated workflows based on user behavior changes.
              </p>
            </div>
            <button className="mt-4 self-start px-4 py-2 border border-slate-700 bg-transparent text-xs font-semibold rounded hover:bg-white/5 transition-colors z-10">
              Configure Integration
            </button>
            {/* Minimal Node Graphic Watermark */}
            <Layers className="absolute right-4 bottom-4 text-slate-800/40 h-28 w-28 pointer-events-none" />
          </div>

          {/* Box Right: Segment Recommendations */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Segment Recommendations</h3>
            
            <div className="space-y-3.5">
              {/* Item 1 */}
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 text-slate-700 rounded">
                    <Zap size={14} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">At-Risk High LTV</div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">Users with &gt;$1k spent who haven't visited in 14 days.</div>
                  </div>
                </div>
                <button className="text-xs font-bold text-slate-900 hover:underline px-2">Create</button>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 text-slate-700 rounded">
                    <Users size={14} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Brand Advocates</div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">Users who shared campaign links &gt; 3 times.</div>
                  </div>
                </div>
                <button className="text-xs font-bold text-slate-900 hover:underline px-2">Create</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}