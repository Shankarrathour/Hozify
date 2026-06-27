import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Download, 
  SlidersHorizontal, 
  History, 
  ShieldAlert, 
  UserCheck, 
  Clock, 
  ChevronDown, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function AuditLogs() {
  return (
    <AdminShell>
      {/* Light Clean Gray Background Wrapping Main Layout */}
      <div className="min-h-screen bg-[#F9FAFB] p-8 text-[#111827]">
        
        {/* ================= BREADCRUMB & HEADER ================= */}
        <div className="mb-2 text-[13px] text-[#71717A] flex items-center gap-1">
          <span>Business Management</span>
          <span>&gt;</span>
        </div>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-[32px] font-bold tracking-tight text-[#111827]">
              Business Audit Logs
            </h1>
            <p className="mt-1 text-[14px] text-[#71717A]">
              Review and track all administrative actions performed across the business ecosystem.
            </p>
          </div>

          {/* Action Header Buttons */}
          <div className="flex gap-3">
            <button className="h-[40px] rounded border border-[#E4E4E7] bg-white px-4 text-[14px] font-medium text-black inline-flex items-center gap-2 hover:bg-[#F4F4F5] transition-colors shadow-sm">
              <Download size={16} />
              Export CSV
            </button>
            <button className="h-[40px] rounded bg-[#1D1B84] px-4 text-[14px] font-medium text-white inline-flex items-center gap-2 hover:bg-[#2522A6] transition-colors shadow-sm">
              <SlidersHorizontal size={16} />
              Advanced Filters
            </button>
          </div>
        </div>

        {/* ================= STATS OVERVIEW CARDS (Light Theme Layout) ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          
          {/* Card 1: Total Actions */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <History size={18} className="text-[#71717A]" />
              </div>
              <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[12px] font-semibold text-[#15803D]">
                +12%
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
              TOTAL ACTIONS (24H)
            </p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">1,482</p>
          </div>

          {/* Card 2: Security Flags */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <ShieldAlert size={18} className="text-[#EF4444]" />
              </div>
              <span className="text-[13px] font-medium text-[#71717A]">Stable</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
              SECURITY FLAGS
            </p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">03</p>
          </div>

          {/* Card 3: Active Admins */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <UserCheck size={18} className="text-[#3B82F6]" />
              </div>
              <span className="text-[13px] font-medium text-[#71717A]">Active</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
              ACTIVE ADMINS
            </p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">24</p>
          </div>

          {/* Card 4: Last Entry */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <Clock size={18} className="text-[#71717A]" />
              </div>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
              LAST ENTRY
            </p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">2m ago</p>
          </div>
        </div>

        {/* ================= MAIN LOGS CONTAINER BLOCK ================= */}
        <div className="rounded-xl border border-[#E4E4E7] bg-white text-black overflow-hidden shadow-sm mb-6">
          
          {/* Internal Filters Bar */}
          <div className="p-4 border-b border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4 bg-[#FAFAFA]">
            <div className="flex items-center gap-3">
              {/* Category Dropdown */}
              <button className="h-[36px] px-3 rounded-lg border border-[#E4E4E7] bg-white text-[13px] font-medium text-[#27272A] inline-flex items-center gap-6 shadow-sm">
                <span>All Categories</span>
                <ChevronDown size={14} className="text-[#71717A]" />
              </button>

              {/* Date Filter */}
              <button className="h-[36px] px-3 rounded-lg border border-[#E4E4E7] bg-white text-[13px] font-medium text-[#27272A] inline-flex items-center gap-3 shadow-sm">
                <span>Last 7 Days</span>
                <Calendar size={14} className="text-[#71717A]" />
              </button>
            </div>

            <div className="text-[13px] text-[#71717A]">
              Showing <span className="font-semibold text-black">1-50</span> of 12,480 logs
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#E4E4E7] bg-[#F4F4F5] text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
                  <th className="py-3.5 px-5">Timestamp</th>
                  <th className="py-3.5 px-5">Administrator</th>
                  <th className="py-3.5 px-5">Action Category</th>
                  <th className="py-3.5 px-5 w-[35%]">Event Details</th>
                  <th className="py-3.5 px-5">IP Address</th>
                  <th className="py-3.5 px-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E4E7] text-[13px] bg-white">
                
                {/* Row 1 */}
                <tr className="hover:bg-[#FAFAFA]">
                  <td className="py-4 px-5 text-[#27272A] font-medium leading-tight">
                    Oct 24, 2023 <br />
                    <span className="text-[11px] text-[#71717A]">14:22:45 UTC</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1E1B4B] flex items-center justify-center text-[11px] font-bold text-white">JD</div>
                      <span className="font-semibold text-[#111827]">James Davidson</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="rounded bg-[#EFF6FF] px-2 py-0.5 text-[11px] font-bold text-[#1E40AF]">SECURITY</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5563] font-medium">Updated multi-factor authentication requirements for all staff accounts.</td>
                  <td className="py-4 px-5 text-[#27272A] font-mono">192.168.1.45</td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-1.5 text-[#16A34A] font-bold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      SUCCESS
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#FAFAFA]">
                  <td className="py-4 px-5 text-[#27272A] font-medium leading-tight">
                    Oct 24, 2023 <br />
                    <span className="text-[11px] text-[#71717A]">14:15:10 UTC</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E4E4E7] flex items-center justify-center text-[11px] font-bold text-[#4B5563]">SM</div>
                      <span className="font-semibold text-[#111827]">Sarah Miller</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="rounded bg-[#F4F4F5] px-2 py-0.5 text-[11px] font-bold text-[#4B5563]">FINANCE</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5563] font-medium">Authorized bulk payout of $14,200.00 for external regional logistics contractors.</td>
                  <td className="py-4 px-5 text-[#27272A] font-mono">45.22.109.12</td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-1.5 text-[#16A34A] font-bold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      SUCCESS
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-[#FAFAFA]">
                  <td className="py-4 px-5 text-[#27272A] font-medium leading-tight">
                    Oct 24, 2023 <br />
                    <span className="text-[11px] text-[#71717A]">13:58:02 UTC</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FEE2E2] flex items-center justify-center text-[11px] font-bold text-[#EF4444]">AL</div>
                      <span className="font-semibold text-[#111827]">Alex Low</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="rounded bg-[#FEE2E2] px-2 py-0.5 text-[11px] font-bold text-[#991B1B]">ACCESS</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5563] font-medium">Failed login attempt - 3 consecutive failures from unrecognized terminal device location.</td>
                  <td className="py-4 px-5 text-[#27272A] font-mono">203.0.113.19</td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-1.5 text-[#DC2626] font-bold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      FAILED
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-[#FAFAFA]">
                  <td className="py-4 px-5 text-[#27272A] font-medium leading-tight">
                    Oct 24, 2023 <br />
                    <span className="text-[11px] text-[#71717A]">12:10:45 UTC</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-[11px] font-bold text-white">RB</div>
                      <span className="font-semibold text-[#111827]">Rob Banks</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="rounded bg-[#F1F5F9] px-2 py-0.5 text-[11px] font-bold text-[#334155]">CONFIGURATION</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5563] font-medium">Modified service commission rates for 'Partner tier B' configurations ecosystem wide.</td>
                  <td className="py-4 px-5 text-[#27272A] font-mono">10.0.0.122</td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-1.5 text-[#16A34A] font-bold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      SUCCESS
                    </div>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-[#FAFAFA]">
                  <td className="py-4 px-5 text-[#27272A] font-medium leading-tight">
                    Oct 24, 2023 <br />
                    <span className="text-[11px] text-[#71717A]">10:45:12 UTC</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1E1B4B] flex items-center justify-center text-[11px] font-bold text-white">JD</div>
                      <span className="font-semibold text-[#111827]">James Davidson</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="rounded bg-[#F0FDF4] px-2 py-0.5 text-[11px] font-bold text-[#166534]">USER MGMT</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5563] font-medium">Deleted employee profile #8892 (Terminal Offboarding process completed).</td>
                  <td className="py-4 px-5 text-[#27272A] font-mono">192.168.1.45</td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-1.5 text-[#16A34A] font-bold text-[12px]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      SUCCESS
                    </div>
                  </td>
                </tr>

              </tbody>
            </table></div>
          </div>

          {/* Table Pagination Section Footer */}
          <div className="p-4 border-t border-[#E4E4E7] bg-white flex items-center justify-between flex-wrap gap-4 text-[13px] text-[#27272A]">
            <div className="flex items-center gap-1.5">
              <button className="h-[32px] px-3 rounded border border-[#E4E4E7] bg-white text-[#71717A] hover:bg-[#F4F4F5] font-medium inline-flex items-center gap-1">
                <ChevronLeft size={14} />
                Previous
              </button>
              <button className="w-[32px] h-[32px] rounded bg-[#1D1B84] text-white font-semibold">1</button>
              <button className="w-[32px] h-[32px] rounded border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] font-medium">2</button>
              <button className="w-[32px] h-[32px] rounded border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] font-medium">3</button>
              <span className="px-1 text-[#71717A]">...</span>
              <button className="h-[32px] px-2.5 rounded border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] font-medium">250</button>
              <button className="h-[32px] px-3 rounded border border-[#E4E4E7] bg-white text-[#27272A] hover:bg-[#F4F4F5] font-medium inline-flex items-center gap-1">
                Next
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Rows Per Page Config Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[#71717A]">Rows per page:</span>
              <button className="h-[32px] px-2.5 rounded border border-[#E4E4E7] bg-white font-bold inline-flex items-center gap-3">
                <span>50</span>
                <ChevronDown size={14} className="text-[#71717A]" />
              </button>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM SYSTEM INTEGRITY BOX (Light Themed) ================= */}
        <div className="rounded-xl border border-[#E4E4E7] bg-white p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div>
            <p className="text-[14px] text-[#4B5563] leading-relaxed max-w-xl">
              All critical administrative actions are being logged and encrypted in real-time. System integrity at 100%.
            </p>
          </div>
          <button className="h-[40px] rounded bg-black px-5 text-[14px] font-bold text-white hover:bg-[#222] transition-colors shadow-md">
            Review Logs Integrity
          </button>
        </div>

      </div>
    </AdminShell>
  );
}