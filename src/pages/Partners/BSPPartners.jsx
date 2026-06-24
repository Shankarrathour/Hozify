import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

import {
  Building2,
  ShieldCheck,
  Clock3,
  Ban,
  DollarSign,
  FileCheck,
  Download,
  Plus,
  ChevronRight,
  UserCheck,
  Briefcase,
  ExternalLink,
} from "lucide-react";

/* ================= STATS DATA ================= */
const stats = [
  {
    title: "Total BSPs",
    value: "148",
    icon: Building2,
    badge: "+12%",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Active Networks",
    value: "2,410",
    icon: ShieldCheck,
    badge: "Live",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Pending Approval",
    value: "07",
    icon: Clock3,
    badge: "Review",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    title: "Compliance Rate",
    value: "98%",
    icon: FileCheck,
    badge: "Verified",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    title: "Revenue Share",
    value: "₹4.2Cr",
    icon: DollarSign,
    badge: "Monthly",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    title: "Suspended",
    value: "03",
    icon: Ban,
    badge: "-1%",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

/* ================= BSP DATA ================= */
const partners = [
  {
    name: "Aetheris Systems",
    id: "BSP-92011",
    city: "Mumbai",
    revenue: "₹8.2L",
    status: "Active",
  },
  {
    name: "Horizon Data",
    id: "BSP-78229",
    city: "Delhi",
    revenue: "₹5.8L",
    status: "Pending",
  },
  {
    name: "Vertex Solutions",
    id: "BSP-55018",
    city: "Bangalore",
    revenue: "₹11.2L",
    status: "Active",
  },
  {
    name: "Nova Logic",
    id: "BSP-11234",
    city: "Hyderabad",
    revenue: "₹3.7L",
    status: "Suspended",
  },
];

export default function BSPPartners() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search BSPs, documents, settlements..."
    >
      <div className="space-y-8 bg-slate-50/50 p-6 min-h-screen">
        
        {/* ================= HERO SECTION ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-50/60 blur-3xl"></div>
          <div className="absolute right-20 bottom-0 h-32 w-32 rounded-full bg-sky-50/50 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10 uppercase tracking-wider">
                BSP Management
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Business Service Providers
              </h1>
              <p className="mt-4 text-base text-slate-500 leading-relaxed">
                Manage onboarding, KYC verification, GST validation, settlements, compliance
                checks and performance monitoring across all registered Business Service Providers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition">
                  <Plus size={16} />
                  Add New BSP
                </button> */}
                <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition">
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>

            {/* Right KPI Card */}
            <div className="w-full lg:max-w-xs shrink-0">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Overall Compliance
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">98%</span>
                  <span className="text-sm font-medium text-emerald-600 font-semibold">↑ Safe</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">Verified Active Partners</p>
                <div className="mt-4 h-2 w-full rounded-full bg-slate-200/70">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: "98%" }}></div>
                </div>
                <button className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition">
                  View Compliance Audit
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-slate-50 p-2.5 text-slate-700">
                    <Icon size={20} className="text-indigo-600" />
                  </div>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-slate-400 truncate">{item.title}</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= PROVIDER DIRECTORY TABLE ================= */}
        <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-5 sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Provider Directory</h2>
              <p className="mt-1 text-xs text-slate-400">Manage registered partners and onboarding statuses.</p>
            </div>
            <div className="mt-3 flex gap-2 sm:mt-0 sm:ml-4">
              <button className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
                Filters
              </button>
              <button className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500">
                Add BSP
              </button>
            </div>
          </div>

          <div className="border-b border-slate-100 px-6 py-3 bg-slate-50/50 flex items-center justify-between">
            <div className="flex gap-1 bg-slate-200/60 rounded-lg p-0.5 text-xs">
              <button className="rounded-md bg-white px-3 py-1.5 font-medium text-slate-900 shadow-sm">All</button>
              <button className="rounded-md px-3 py-1.5 font-medium text-slate-500 hover:text-slate-900">Active</button>
              <button className="rounded-md px-3 py-1.5 font-medium text-slate-500 hover:text-slate-900">Pending</button>
              <button className="rounded-md px-3 py-1.5 font-medium text-slate-500 hover:text-slate-900">Suspended</button>
            </div>
            <span className="text-xs font-medium text-slate-400">148 BSP Partners</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-4">Business</th>
                  <th className="px-6 py-4">City</th>
                  <th className="px-6 py-4">Revenue</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm text-slate-600">
                {partners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-slate-50/80 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600">
                          {partner.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{partner.name}</p>
                          <p className="text-xs text-slate-400">{partner.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap align-middle font-medium text-slate-500">{partner.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap align-middle font-semibold text-slate-900">{partner.revenue}</td>
                    <td className="px-6 py-4 whitespace-nowrap align-middle">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                        partner.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
                          : partner.status === "Pending"
                          ? "bg-amber-50 text-amber-700 ring-amber-600/10"
                          : "bg-rose-50 text-rose-700 ring-rose-600/10"
                      }`}>
                        {partner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap align-middle text-right">
                      <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs text-slate-400">
            <p>Showing 1–4 of 148 BSP Partners</p>
            <div className="flex gap-1">
              <button className="h-7 w-7 rounded-md bg-indigo-600 font-semibold text-white shadow-sm">1</button>
              <button className="h-7 w-7 rounded-md border border-slate-200 bg-white font-semibold text-slate-600 hover:bg-slate-50">2</button>
              <button className="h-7 w-7 rounded-md border border-slate-200 bg-white font-semibold text-slate-600 hover:bg-slate-50">3</button>
            </div>
          </div>
        </div>

        {/* ================= STRUCTURAL KYC & COMPLIANCE CENTER ================= */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          
          {/* KYC Subsections Group */}
          <div className="xl:col-span-2 space-y-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Compliance Center</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">KYC & Verification Hub</h2>
                <p className="text-xs text-slate-400 mt-0.5">Segmented verification workflow for quick audits.</p>
              </div>

              {/* Personal KYC Stack */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 text-slate-800">
                  <UserCheck size={18} className="text-indigo-500" />
                  <h3 className="font-bold text-sm tracking-wide text-slate-700 uppercase">Personal KYC</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Aadhaar Section */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 hover:border-slate-200 transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">Aadhaar Card</h4>
                        <p className="mt-1 text-xs text-slate-400">Submitted identity data checklist verified.</p>
                      </div>
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                  {/* PAN Section */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 hover:border-slate-200 transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">PAN Card</h4>
                        <p className="mt-1 text-xs text-slate-400">Awaiting automated compliance match score.</p>
                      </div>
                      <span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700 ring-1 ring-inset ring-amber-600/10">
                        PENDING
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business KYC Stack */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 text-slate-800">
                  <Briefcase size={18} className="text-indigo-500" />
                  <h3 className="font-bold text-sm tracking-wide text-slate-700 uppercase">Business KYC</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* GST */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 hover:border-slate-200 transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">GST Certificate</h4>
                        <p className="mt-1 text-xs text-slate-400">Tax registration ledger active.</p>
                      </div>
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                  {/* Business PAN */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 hover:border-slate-200 transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">Business PAN</h4>
                        <p className="mt-1 text-xs text-slate-400">Corporate document validation clear.</p>
                      </div>
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                  {/* Registration Documents */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 hover:border-slate-200 transition sm:col-span-2 lg:col-span-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">Registration Documents</h4>
                        <p className="mt-1 text-xs text-slate-400">COI, MSME & Trade Act copies.</p>
                      </div>
                      <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700 ring-1 ring-inset ring-blue-600/10">
                        REVIEW
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Verification Summary Card */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Document Status</p>
              <h2 className="text-lg font-bold text-slate-900 mt-1">Verification Summary</h2>
              <p className="text-xs text-slate-400 mt-0.5">Overall compliance metrics.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-xs font-medium">
                    <span className="text-slate-500">Verified</span>
                    <span className="text-slate-900">80%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs font-medium">
                    <span className="text-slate-500">Pending Review</span>
                    <span className="text-slate-900">15%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-amber-500" style={{ width: "15%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs font-medium">
                    <span className="text-slate-500">Rejected</span>
                    <span className="text-slate-900">5%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-rose-500" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-indigo-50/40 p-4 border border-indigo-50">
              <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wide">Next Compliance Audit</h4>
              <p className="mt-1 text-sm font-semibold text-indigo-700">Scheduled on 15 July 2026</p>
            </div>
          </div>

        </div>

        {/* ================= BUSINESS ANALYTICS & INSIGHTS ================= */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          
          {/* Analytics Graph Block */}
          <div className="xl:col-span-2 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Business Analytics</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">BSP Performance Overview</h2>
                <p className="text-xs text-slate-400 mt-0.5">Monitor core operational metrics and growth velocity.</p>
              </div>
              <div className="rounded-2xl bg-indigo-50/60 border border-indigo-100/50 px-4 py-2.5 shrink-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Monthly Growth</p>
                <h3 className="text-xl font-bold text-indigo-600">+18%</h3>
              </div>
            </div>

            {/* Quick Micro Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl bg-slate-50/60 p-3.5 border border-slate-100">
                <p className="text-xs font-medium text-slate-400">Approved BSPs</p>
                <p className="mt-1 text-xl font-bold text-slate-900">112</p>
              </div>
              <div className="rounded-xl bg-slate-50/60 p-3.5 border border-slate-100">
                <p className="text-xs font-medium text-slate-400">Pending KYC</p>
                <p className="mt-1 text-xl font-bold text-amber-600">17</p>
              </div>
              <div className="rounded-xl bg-slate-50/60 p-3.5 border border-slate-100">
                <p className="text-xs font-medium text-slate-400">Active Entities</p>
                <p className="mt-1 text-xl font-bold text-emerald-600">128</p>
              </div>
              <div className="rounded-xl bg-slate-50/60 p-3.5 border border-slate-100">
                <p className="text-xs font-medium text-slate-400">Monthly Revenue</p>
                <p className="mt-1 text-xl font-bold text-purple-600">₹4.2Cr</p>
              </div>
            </div>

            {/* Premium Minimal Bar Chart */}
            <div className="mt-8">
              <div className="flex items-end gap-2.5 h-44 px-2 border-b border-slate-100">
                {[70, 95, 80, 120, 100, 145, 130, 170, 160, 210, 190, 240].map((val, idx) => (
                  <div key={idx} className="flex-1 group relative flex justify-center">
                    <div 
                      className="w-full rounded-t-md bg-slate-200 group-hover:bg-indigo-500 transition duration-200" 
                      style={{ height: `${(val / 240) * 100}%` }}
                    />
                    {/* Tooltip on hover */}
                    <span className="absolute -top-7 scale-0 group-hover:scale-100 transition rounded bg-slate-900 px-1.5 py-0.5 text-[10px] text-white font-medium">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2.5 flex justify-between text-[11px] font-medium text-slate-400 px-1">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* Network Insights Panel */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Network Insights</p>
              <h2 className="text-lg font-bold text-slate-900 mt-1">Revenue Summary</h2>
              <p className="text-xs text-slate-400 mt-0.5">Current settlement metrics.</p>

              <div className="mt-5 space-y-3.5">
                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/30 p-3.5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Total Settlements</p>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">₹4.2Cr</p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Processed</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/30 p-3.5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Active BSPs</p>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">128 Partners</p>
                  </div>
                  <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">Live</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/30 p-3.5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Compliance Score</p>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">98%</p>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">Excellent</span>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition">
              Detailed Ledger Insights
              <ExternalLink size={14} />
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}