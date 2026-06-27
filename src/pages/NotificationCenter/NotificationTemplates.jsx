import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Search,
  Mail,
  MessageSquare,
  Smartphone,
  Plus,
  Eye,
  Clock,
  User,
  LayoutGrid,
  List,
  ChevronDown,
  TrendingUp,
  ChevronRight,
  MoreVertical
} from "lucide-react";

export default function NotificationTemplates() {
  return (
    <AdminShell activeTab="Notifications" searchPlaceholder="Search templates...">
      {/* Black background completely removed - Changed to clean slate-50 background */}
      <div className="min-h-screen bg-slate-50 p-8 text-slate-800 space-y-6">
        
        {/* ================= HEADER SEARCH & CONTROLS (Image Look) ================= */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
          <div className="flex items-center gap-4 flex-1 w-full">
            <h2 className="text-lg font-bold tracking-tight text-[#0f143a] whitespace-nowrap">
              Notification Templates
            </h2>
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-9 pr-4 py-1.5 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-indigo-500 text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* ================= SUB-HEADER ACTION CONTROLS ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Channels Filter Tabs */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-md bg-[#251fa3] text-white">
              All Channels
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-2 border border-slate-200">
              <Mail size={15} /> Email
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-2 border border-slate-200">
              <MessageSquare size={15} /> SMS
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-2 border border-slate-200">
              <Smartphone size={15} /> Push
            </button>
          </div>

          {/* Right Layout Views */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="flex items-center border border-slate-200 rounded-md bg-white p-0.5">
              <button className="p-1.5 bg-slate-100 text-slate-800 rounded-sm">
                <LayoutGrid size={16} />
              </button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600">
                <List size={16} />
              </button>
            </div>
            
            <button className="flex items-center gap-4 px-4 py-2 rounded-md bg-white text-slate-800 border border-slate-200 font-medium text-sm">
              Recently Created
              <ChevronDown size={14} className="text-slate-400" />
            </button>
          </div>
        </div>

        {/* ================= CARDS GRID CONTAINER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Create New Blank Canvas */}
          <div className="border-2 border-dashed border-slate-300 bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-indigo-500 transition-colors h-[280px] shadow-sm">
            <div className="h-10 w-10 rounded-md border border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-600 transition-colors">
              <Plus size={18} />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-700 group-hover:text-indigo-600">Create New</p>
            <p className="text-xs text-slate-400 mt-1">Start with a blank canvas</p>
          </div>

          {/* Card 2: Welcome Onboard */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between text-slate-800 h-[280px] shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <div className="p-2 bg-indigo-50 text-[#1d1880] rounded">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  APPROVED
                </span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-base">Welcome Onboard</h3>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                First interaction email sent to new users...
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> 2h ago</span>
                <span className="flex items-center gap-1"><User size={12} /> Admin</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-xs font-semibold rounded bg-[#1d1880] text-white hover:bg-[#161266]">
                  Edit
                </button>
                <button className="px-3 border border-slate-200 text-slate-400 rounded hover:bg-slate-50">
                  <Eye size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Two-Factor Auth */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between text-slate-800 h-[280px] shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <div className="p-2 bg-indigo-50 text-[#1d1880] rounded">
                  <MessageSquare size={18} />
                </div>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-sm">
                  PENDING
                </span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-base">Two-Factor Auth</h3>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                Quick SMS template for security codes and
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> 5h ago</span>
                <span className="flex items-center gap-1"><User size={12} /> Sarah J.</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-xs font-semibold rounded bg-[#1d1880] text-white hover:bg-[#161266]">
                  Review
                </button>
                <button className="px-2 border border-slate-200 text-slate-400 rounded hover:bg-slate-50">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: System Downtime */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between text-slate-800 h-[280px] shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <div className="p-2 bg-indigo-50 text-[#1d1880] rounded">
                  <Smartphone size={18} />
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  APPROVED
                </span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-base">System Downtime</h3>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                Critical push notification alert for...
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> 1d ago</span>
                <span className="flex items-center gap-1"><User size={12} /> Admin</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-xs font-semibold rounded bg-[#1d1880] text-white hover:bg-[#161266]">
                  Edit
                </button>
                <button className="px-3 border border-slate-200 text-slate-400 rounded hover:bg-slate-50">
                  <Eye size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Second Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 5: Weekly Digest */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between text-slate-800 h-[280px] shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <div className="p-2 bg-indigo-50 text-[#1d1880] rounded">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  APPROVED
                </span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-base">Weekly Digest</h3>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                Automated content summary sent every...
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> 3d ago</span>
                <span className="flex items-center gap-1"><User size={12} /> Mike T.</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-xs font-semibold rounded bg-[#1d1880] text-white hover:bg-[#161266]">
                  Edit
                </button>
                <button className="px-3 border border-slate-200 text-slate-400 rounded hover:bg-slate-50">
                  <Eye size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: Re-engagement */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between text-slate-800 h-[280px] shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <div className="p-2 bg-indigo-50 text-[#1d1880] rounded">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-sm">
                  PENDING
                </span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-base">Re-engagement</h3>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                Win-back campaign targeting users who...
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> 4d ago</span>
                <span className="flex items-center gap-1"><User size={12} /> Sarah J.</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-xs font-semibold rounded bg-[#1d1880] text-white hover:bg-[#161266]">
                  Review
                </button>
                <button className="px-2 border border-slate-200 text-slate-400 rounded hover:bg-slate-50">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Performance Overview (Kept original Indigo Blue Panel context as in image) */}
          <div className="lg:col-span-2 bg-gradient-to-b from-[#0c0d2e] to-[#04051a] rounded-lg border border-slate-800 p-6 flex flex-col justify-between min-h-[280px] shadow-md">
            <div>
              <h4 className="text-sm font-semibold text-slate-400">Performance Overview</h4>
            </div>
            
            <div className="grid grid-cols-3 gap-4 items-end mt-4">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">SENT TODAY</span>
                <span className="block text-3xl font-black mt-1 text-white">1.2M</span>
                <span className="block text-[10px] font-semibold text-green-500 mt-1">+12% vs yesterday</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">OPEN RATE</span>
                <span className="block text-3xl font-black mt-1 text-white">24.8%</span>
                <span className="block text-[10px] text-slate-500 mt-1">Avg across all email</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">CTR</span>
                <span className="block text-3xl font-black mt-1 text-white">3.2%</span>
                <span className="block text-[10px] text-slate-500 mt-1">Avg across all channels</span>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <div className="h-14 w-24 bg-[#14163c] rounded-md flex items-center justify-center text-indigo-400 border border-slate-800">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

        </div>

        {/* ================= RECENT ACTIVITY LOG (White Section Table) ================= */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden text-slate-800">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-[#0f143a] text-sm">Recent Activity Log</h3>
            <button className="text-xs font-semibold text-indigo-950 hover:underline">View History</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-3">Template Name</th>
                  <th className="px-4 py-3">Channel</th>
                  <th className="px-4 py-3">Last Modified</th>
                  <th className="px-4 py-3">By</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 text-sm">Password Reset</div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">InternalID: TMPL_009</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Mail size={14} className="text-slate-400" /> Email
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-500">Oct 24, 2023</td>
                  <td className="px-4 py-4 text-slate-700">System</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wide bg-green-50 text-green-600 rounded-sm">
                      APPROVED
                    </span>
                  </td>
                  <td className="pr-4 text-slate-400">
                    <ChevronRight size={16} />
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 text-sm">Order Confirmation</div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">InternalID: TMPL_042</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Mail size={14} className="text-slate-400" /> Email
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-500">Oct 23, 2023</td>
                  <td className="px-4 py-4 text-slate-700">Mike T.</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wide bg-green-50 text-green-600 rounded-sm">
                      APPROVED
                    </span>
                  </td>
                  <td className="pr-4 text-slate-400">
                    <ChevronRight size={16} />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}