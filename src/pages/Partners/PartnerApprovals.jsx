import React from "react";
import AdminShell from "../../components/layouts/AdminShell"; // आपका एडमिन शेल कंपोनेंट

import {
  ShieldAlert,
  SlidersHorizontal,
  Download,
  UserCheck,
  Server,
  GitBranch,
  FileText,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

export default function partnerApprovals() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search approvals, partners, or IDs..."
    >
      {/* मुख्य लाइट बैकग्राउंड कंटेनर - बिना किसी डार्क थीम लाइन्स के */}
      <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 p-8 space-y-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 tracking-wider uppercase">
              <ShieldAlert size={14} />
              Verification Control
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Partner Approval Queue</h1>
            <p className="text-sm text-slate-500 font-medium">
              Manage and verify pending administrative requests from global partners.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition shadow-sm">
              <SlidersHorizontal size={14} />
              Filter Requests
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-950 transition shadow-sm">
              <Download size={14} />
              Export Report
            </button>
          </div>
        </div>

        {/* ================= METRICS STATS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Pending KYC */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">Pending KYC</p>
              <p className="text-[11px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md inline-block">
                ! 8 Urgent
              </p>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <span className="text-2xl font-black text-slate-900">24</span>
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mt-2">
                <UserCheck size={16} />
              </div>
            </div>
          </div>

          {/* Pending Services */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">Pending Services</p>
              <p className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md inline-block">
                4 New Today
              </p>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <span className="text-2xl font-black text-slate-900">12</span>
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mt-2">
                <Server size={16} />
              </div>
            </div>
          </div>

          {/* Pending Branches */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">Pending Branches</p>
              <p className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block">
                Stable flow
              </p>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <span className="text-2xl font-black text-slate-900">08</span>
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600 mt-2">
                <GitBranch size={16} />
              </div>
            </div>
          </div>

          {/* Pending Documents */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">Pending Documents</p>
              <p className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                High volume
              </p>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <span className="text-2xl font-black text-slate-900">45</span>
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-2">
                <FileText size={16} />
              </div>
            </div>
          </div>

          {/* Bank Verification */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">Bank Verification</p>
              <p className="text-[11px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md inline-block">
                ⚠️ Critical action
              </p>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <span className="text-2xl font-black text-slate-900">05</span>
              <div className="p-2 rounded-lg bg-orange-50 text-orange-600 mt-2">
                <Building2 size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* ================= DATA TABLE CONTAINER ================= */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Table Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-base font-bold text-slate-900">Active Approval Queue</h2>
              <div className="inline-flex rounded-lg bg-slate-100 p-1 text-xs font-bold text-slate-600">
                <button className="rounded-md bg-white px-3 py-1 text-slate-900 shadow-sm">All Tasks</button>
                <button className="rounded-md px-3 py-1 hover:text-slate-900">Assigned to Me</button>
              </div>
            </div>
            <p className="text-xs font-bold text-slate-400">Showing 1-10 of 94 items</p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  <th className="px-6 py-3.5">Partner</th>
                  <th className="px-6 py-3.5">Type</th>
                  <th className="px-6 py-3.5">Pending Item</th>
                  <th className="px-6 py-3.5">Submitted Date</th>
                  <th className="px-6 py-3.5">Priority</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/40 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 flex items-center justify-between justify-center rounded-lg bg-slate-200 font-bold text-xs text-slate-600">
                        <span className="w-full text-center">NX</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Nexis Logistics</p>
                        <p className="text-[11px] text-slate-400 font-semibold font-mono">ID: PRT-99201</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-500">ISP</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700">
                      <UserCheck size={14} /> KYC Verification
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500">
                    <p className="font-semibold text-slate-800">Oct 24, 2023</p>
                    <p className="text-[10px]">09:12 AM</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-600"></span> High
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-slate-400">
                    <button className="hover:text-slate-600"><MoreHorizontal size={16} /></button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/40 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-blue-50 font-bold text-xs text-blue-700">
                        BF
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Blue Freight Inc.</p>
                        <p className="text-[11px] text-slate-400 font-semibold font-mono">ID: PRT-88421</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">BSP</span></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Building2 size={14} /> Bank Verification
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500">
                    <p className="font-semibold text-slate-800">Oct 24, 2023</p>
                    <p className="text-[10px]">10:45 AM</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Medium
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-slate-400">
                    <button className="hover:text-slate-600"><MoreHorizontal size={16} /></button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/40 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-indigo-50 font-bold text-xs text-indigo-700">
                        SV
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Swift Ventures</p>
                        <p className="text-[11px] text-slate-400 font-semibold font-mono">ID: PRT-10293</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-500">ISP</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <FileText size={14} /> Tax Documents
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500">
                    <p className="font-semibold text-slate-800">Oct 23, 2023</p>
                    <p className="text-[10px]">04:30 PM</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Low
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-slate-400">
                    <button className="hover:text-slate-600"><MoreHorizontal size={16} /></button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/40 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-orange-700">
                        GR
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Global Reach Co.</p>
                        <p className="text-[11px] text-slate-400 font-semibold font-mono">ID: PRT-20938</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">BSP</span></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <GitBranch size={14} /> New Branch: Singapore
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500">
                    <p className="font-semibold text-slate-800">Oct 23, 2023</p>
                    <p className="text-[10px]">01:15 PM</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Medium
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-slate-400">
                    <button className="hover:text-slate-600"><MoreHorizontal size={16} /></button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Table Pagination Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/30 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <span>Rows per page:</span>
              <button className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-1">
                10 <ChevronDown size={12} />
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded border border-slate-200 bg-white text-slate-400 hover:text-slate-600"><ChevronLeft size={14} /></button>
              <button className="h-7 w-7 rounded bg-indigo-900 text-white flex items-center justify-center">1</button>
              <button className="h-7 w-7 rounded hover:bg-slate-100 flex items-center justify-center">2</button>
              <button className="h-7 w-7 rounded hover:bg-slate-100 flex items-center justify-center">3</button>
              <span className="px-1">...</span>
              <button className="h-7 w-7 rounded hover:bg-slate-100 flex items-center justify-center">10</button>
              <button className="p-1.5 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"><ChevronRight size={14} /></button>
            </div>
          </div>
        </div>

        {/* ================= HERO AUTOMATION BANNER ================= */}
        <div className="rounded-xl bg-gradient-to-r from-indigo-900 to-indigo-950 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md overflow-hidden relative">
          <div className="space-y-3 max-w-xl z-10">
            <h2 className="text-xl font-black text-white tracking-tight">Automate Your Queue</h2>
            <p className="text-sm text-indigo-200 leading-relaxed font-medium">
              Enable Smart-Approval for trusted partners to bypass standard manual review for low-risk documents and branch updates.
            </p>
            <button className="mt-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-indigo-900 hover:bg-slate-50 transition shadow-sm">
              Configure Rules
            </button>
          </div>
          
          <div className="w-full md:w-56 h-36 bg-indigo-950/40 border border-indigo-800/40 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80"
              alt="Automation Tech"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
          </div>
        </div>

      </div>
    </AdminShell>
  );
}