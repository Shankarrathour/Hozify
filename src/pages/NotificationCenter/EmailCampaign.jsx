import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Search,
  ChevronDown,
  Calendar,
  SlidersHorizontal,
  MoreVertical,
  Download,
  Plus,
  Mail,
  Users,
  MousePointerClick,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CampaignListing() {
  return (
    <AdminShell activeTab="Marketing" searchPlaceholder="Search dashboard...">
      {/* Black color completely removed. Changed to soft, clean light background */}
      <div className="min-h-screen bg-slate-50 p-8 text-slate-800 space-y-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Marketing</span>
              <span>&gt;</span>
              <span className="text-indigo-600 font-medium">Email Campaigns</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Campaign Listing
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-700 border border-slate-200 font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm">
              <Download size={16} />
              Export Data
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm">
              <Plus size={16} />
              Create Campaign
            </button>
          </div>
        </div>

        {/* ================= FILTERS CONTROLS ================= */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[300px]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search campaigns by name or ID..."
                className="w-full pl-9 pr-4 py-2 rounded-md border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <select className="appearance-none pl-4 pr-10 py-2 rounded-md border border-slate-200 bg-white text-slate-700 text-sm font-normal focus:outline-none focus:border-indigo-500 min-w-[130px]">
                <option>All Statuses</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>

            {/* Date Picker */}
            <div className="relative flex items-center">
              <input
                type="text"
                value="Oct 01, 2023 - Oct 31, 2023"
                readOnly
                className="pl-4 pr-10 py-2 rounded-md border border-slate-200 bg-white text-slate-700 text-sm font-normal focus:outline-none w-[220px]"
              />
              <Calendar className="absolute right-3 text-slate-400" size={16} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center p-2 rounded-md border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100">
              <SlidersHorizontal size={16} />
            </button>
            <button className="text-sm font-medium text-slate-500 hover:text-slate-800 hover:underline">
              Clear All
            </button>
          </div>
        </div>

        {/* ================= CAMPAIGNS TABLE ================= */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="p-4 w-12 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  </th>
                  <th className="px-6 py-4">Campaign Name</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Sent</th>
                  <th className="px-6 py-4">Open Rate</th>
                  <th className="px-4 py-4">Click Rate</th>
                  <th className="px-4 py-4">Last Modified</th>
                  <th className="px-4 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">Q4 Seasonal Product Launch</div>
                    <div className="text-xs text-slate-400 mt-0.5">ID: CAM-7294</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-bold tracking-wide bg-green-50 text-green-600">
                      SENT
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-700">42,500</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <span className="font-semibold text-slate-800">24.8%</span>
                      <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#0a0f29]" style={{ width: "24.8%" }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-700">3.2%</td>
                  <td className="px-4 py-4 text-slate-500">Oct 24, 2023</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">Weekly Newsletter #42</div>
                    <div className="text-xs text-slate-400 mt-0.5">ID: CAM-7301</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-bold tracking-wide bg-blue-50 text-blue-600">
                      SCHEDULED
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-400">--</td>
                  <td className="px-6 py-4 text-slate-400">--</td>
                  <td className="px-4 py-4 text-slate-400">--</td>
                  <td className="px-4 py-4 text-slate-500">Oct 28, 2023</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">Customer Re-engagement Beta</div>
                    <div className="text-xs text-slate-400 mt-0.5">ID: CAM-6855</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-bold tracking-wide bg-green-50 text-green-600">
                      SENT
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-700">12,100</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <span className="font-semibold text-slate-800">18.2%</span>
                      <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#0a0f29]" style={{ width: "18.2%" }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-700">1.5%</td>
                  <td className="px-4 py-4 text-slate-500">Oct 15, 2023</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">Referral Program Update</div>
                    <div className="text-xs text-slate-400 mt-0.5">ID: CAM-7312</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-bold tracking-wide bg-slate-100 text-slate-500">
                      DRAFT
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-400">--</td>
                  <td className="px-6 py-4 text-slate-400">--</td>
                  <td className="px-4 py-4 text-slate-400">--</td>
                  <td className="px-4 py-4 text-slate-500">Today, 09:12 AM</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">Abandoned Cart - Recovery A</div>
                    <div className="text-xs text-slate-400 mt-0.5">ID: CAM-7002</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-bold tracking-wide bg-green-50 text-green-600">
                      SENT
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-700">8,450</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <span className="font-semibold text-slate-800">44.1%</span>
                      <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#0a0f29]" style={{ width: "44.1%" }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-700">7.8%</td>
                  <td className="px-4 py-4 text-slate-500">Oct 12, 2023</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Table Pagination Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-slate-200 gap-4 bg-white text-sm text-slate-500">
            <div>Showing 1 to 10 of 48 entries</div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded border border-slate-200 text-slate-400 hover:bg-slate-50">
                <ChevronLeft size={16} />
              </button>
              <button className="h-7 w-7 rounded bg-[#0a0f29] text-white font-semibold flex items-center justify-center text-xs">
                1
              </button>
              <button className="h-7 w-7 rounded border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-xs text-slate-600">
                2
              </button>
              <button className="h-7 w-7 rounded border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-xs text-slate-600">
                3
              </button>
              <span className="px-1 text-slate-400 text-xs">...</span>
              <button className="h-7 w-7 rounded border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-xs text-slate-600">
                5
              </button>
              <button className="p-1.5 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= PERFORMANCE SNAPSHOT ================= */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Performance Snapshot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Average Deliverability Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-blue-50 text-blue-600 rounded">
                  <Mail size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  +12%
                </span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Average Deliverability
                </p>
                <h3 className="mt-1 text-4xl font-extrabold text-slate-900">
                  99.2%
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Compared to previous month (98.1%)
                </p>
              </div>
            </div>

            {/* Total Subscribers Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-purple-50 text-purple-600 rounded">
                  <Users size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  +4k
                </span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Total Subscribers
                </p>
                <h3 className="mt-1 text-4xl font-extrabold text-slate-900">
                  124,802
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Net growth across all segments
                </p>
              </div>
            </div>

            {/* Click-Through Rate Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-orange-50 text-orange-600 rounded">
                  <MousePointerClick size={20} />
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-sm">
                  -0.4%
                </span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Click-Through Rate
                </p>
                <h3 className="mt-1 text-4xl font-extrabold text-slate-900">
                  3.42%
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Average for the current billing cycle
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}