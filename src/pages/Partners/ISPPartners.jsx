import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import ExportReportModal from "../../components/common/ExportReportModal";

import {
  Users,
  ShieldCheck,
  Clock3,
  Ban,
  Star,
  Building2,
  Download,
  MoreVertical,
  ChevronDown,
  Filter,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Partners",
    value: "1,284",
    icon: Users,
    badge: "+12%",
    badgeColor: "text-emerald-600",
  },
  {
    title: "Active Networks",
    value: "1,102",
    icon: ShieldCheck,
    badge: "Live",
    badgeColor: "text-green-600",
  },
  {
    title: "Pending Approvals",
    value: "45",
    icon: Clock3,
    badge: "12 New",
    badgeColor: "text-orange-500",
  },
  {
    title: "Suspended",
    value: "28",
    icon: Ban,
    badge: "-2%",
    badgeColor: "text-red-500",
  },
  {
    title: "Top Rated",
    value: "210",
    icon: Star,
    badge: "4.8 Avg",
    badgeColor: "text-blue-600",
  },
  {
    title: "Settlement Volume",
    value: "$42K",
    icon: Building2,
    badge: "Pending",
    badgeColor: "text-violet-600",
  },
];

const partners = [
  {
    name: "Nexus Logistics",
    id: "PRT-9021",
    city: "Chicago, IL",
    region: "Metro Region 4",
    subs: "12,450",
    uptime: "99.98%",
    status: "Active",
  },
  {
    name: "Swift Delivery Co",
    id: "PRT-7842",
    city: "Austin, TX",
    region: "Southwest Hub",
    subs: "5,820",
    uptime: "98.42%",
    status: "Inactive",
  },
  {
    name: "Global Retail Solutions",
    id: "PRT-5510",
    city: "Seattle, WA",
    region: "Northwest Region",
    subs: "22,900",
    uptime: "99.99%",
    status: "Active",
  },
  {
    name: "Metro Freight Systems",
    id: "PRT-1123",
    city: "Denver, CO",
    region: "Mountain Central",
    subs: "3,150",
    uptime: "92.10%",
    status: "Active",
  },
];

export default function ISPPartners() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search providers, cities, settlements..."
      pageTitle="Internet Service Providers"
      pageSubtitle="Manage and monitor service providers across the HOZIFY ecosystem."
    >
      <div className="space-y-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 relative shadow-sm">
  <div className="absolute right-0 top-0 h-full w-[500px] opacity-20">
    <div className="absolute right-16 top-12 h-72 w-72 rounded-full border border-indigo-400"></div>
    <div className="absolute right-28 top-24 h-52 w-52 rounded-full border border-indigo-400"></div>
    <div className="absolute right-40 top-36 h-32 w-32 rounded-full border border-indigo-400"></div>
  </div>

  <div className="relative z-10 flex items-center justify-between">

    <div>

      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.25em]">
        ISP MANAGEMENT
      </span>

      <h1 className="mt-6 text-3xl font-bold">
        Internet Service Providers
      </h1>

      <p className="mt-4 max-w-3xl text-slate-800 text-lg">
        Manage and monitor 1,284 service providers across the
        HOZIFY ecosystem. Track uptime, settlements,
        subscribers and network health from one place.
      </p>

      <div className="mt-8 flex gap-4">


        <button 
          onClick={() => setIsExportModalOpen(true)}
          className="flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
        >
          <Download size={18} />
          Export Report
        </button>

      </div>

    </div>

    <div className="hidden xl:block">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

        <p className="text-sm text-slate-400">
          NETWORK STATUS
        </p>

        <h2 className="mt-4 text-6xl font-bold text-emerald-400">
          99.82%
        </h2>

        <p className="mt-2 text-slate-300">
          Global Uptime
        </p>

      </div>

    </div>

  </div>

</div>
{/* ================= STATS ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">

  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* Glow */}
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
              <Icon
                size={24}
                className="text-indigo-600"
              />
            </div>

            <span
              className={`text-sm font-bold ${item.badgeColor}`}
            >
              {item.badge}
            </span>

          </div>

          <p className="mt-6 text-sm text-slate-500">
            {item.title}
          </p>

          <h3 className="mt-2 text-4xl font-bold text-slate-900">
            {item.value}
          </h3>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600"
              style={{
                width: `${72 + index * 4}%`,
              }}
            />

          </div>

        </div>
      </div>
    );
  })}

</div>
{/* ================= ISP DIRECTORY ================= */}

<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

  {/* Header */}
  <div className="flex items-center justify-between border-b border-slate-200 p-6">

    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
        Provider Management
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        ISP Directory
      </h2>

      <p className="mt-1 text-slate-500">
        Monitor all registered internet service providers
      </p>
    </div>

    <button className="flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 font-medium hover:bg-slate-50">
      <Filter size={18} />
      Advanced Filters
    </button>

  </div>

  {/* ================= ISP PARTNER  ================= */}

{/* ================= ISP FEATURES ================= */}

<div className="p-6 border-b border-slate-200">

  <div className="rounded-[28px] border border-slate-200 bg-slate-100 p-8">

    <div className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold">
        ISP
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          Internet Service Provider
        </h3>

        <p className="text-slate-600">
          Broadband & Internet Distribution Partner
        </p>
      </div>

    </div>

    <div className="mt-8">

      <h4 className="mb-5 text-lg font-semibold text-slate-900">
        Required KYC Documents
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {[
          "Aadhaar Card",
          "PAN Card",
          "Selfie Verification",
          "Bank Account Details",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200"
          >
            <div className="h-3 w-3 rounded-full bg-indigo-600"></div>

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}

      </div>

    </div>

  </div>

</div>

  {/* Filters */}
  <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

    <div className="flex items-center gap-4">

      <div className="flex rounded-2xl bg-slate-100 p-1">

        <button className="rounded-xl bg-white px-5 py-2 font-semibold shadow-sm">
          All
        </button>

        <button className="px-5 py-2 text-slate-600">
          Active
        </button>

        <button className="px-5 py-2 text-slate-600">
          Inactive
        </button>

      </div>

      <button className="flex items-center gap-2 text-slate-700 font-medium">
        All Cities
        <ChevronDown size={16} />
      </button>

      <button className="flex items-center gap-2 text-slate-700 font-medium">
        Service Type
        <ChevronDown size={16} />
      </button>

    </div>

    <div className="text-sm text-slate-500">
      1,284 Providers
    </div>

  </div>

  {/* Table */}

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-slate-50">

        <tr className="text-left text-sm font-semibold text-slate-500">

          <th className="px-6 py-5">PROVIDER</th>
          <th>SERVICE AREA</th>
          <th>SUBSCRIBERS</th>
          <th>UPTIME</th>
          <th>STATUS</th>
          <th>ACTIONS</th>

        </tr>

      </thead>

      <tbody>

        {partners.map((partner) => (

          <tr
            key={partner.id}
            className="border-t border-slate-100 transition hover:bg-slate-50"
          >

            {/* Provider */}
            <td className="px-6 py-5">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold">
                  {partner.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {partner.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    ID: {partner.id}
                  </p>

                </div>

              </div>

            </td>

            {/* Area */}
            <td>

              <div className="font-medium text-slate-800">
                {partner.city}
              </div>

              <div className="text-sm text-slate-500">
                {partner.region}
              </div>

            </td>

            {/* Subscribers */}
            <td className="font-semibold text-slate-800">
              {partner.subs}
            </td>

            {/* Uptime */}
            <td>

              <div className="flex items-center gap-3">

                <span className="font-bold text-emerald-600">
                  {partner.uptime}
                </span>

                <div className="h-2 w-16 rounded-full bg-slate-100">

                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: "90%" }}
                  />

                </div>

              </div>

            </td>

            {/* Status */}
            <td>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  partner.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {partner.status}
              </span>

            </td>

            {/* Actions */}
            <td>

              <button className="rounded-xl p-2 hover:bg-slate-100">
                <MoreVertical size={18} />
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

  {/* Footer */}

  <div className="flex items-center justify-between border-t border-slate-200 px-6 py-5">

    <p className="text-sm text-slate-500">
      Showing 1–4 of 1,284 Providers
    </p>

    <div className="flex gap-2">

      <button className="h-10 w-10 rounded-xl border">
        1
      </button>

      <button className="h-10 w-10 rounded-xl border">
        2
      </button>

      <button className="h-10 w-10 rounded-xl border">
        3
      </button>

    </div>

  </div>

</div>
{/* ================= NETWORK ANALYTICS ================= */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  {/* Analytics Card */}

  <div className="xl:col-span-2 overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 text-white relative">

    {/* Background Effect */}

    <div className="absolute right-0 top-0 h-full w-full opacity-10">

      <div className="absolute right-10 top-10 h-80 w-80 rounded-full border border-white"></div>

      <div className="absolute right-20 top-20 h-60 w-60 rounded-full border border-white"></div>

      <div className="absolute right-32 top-32 h-40 w-40 rounded-full border border-white"></div>

    </div>

    <div className="relative z-10">

      <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.3em]">
        LIVE NETWORK OVERVIEW
      </span>

      <h2 className="mt-5 text-4xl font-bold">
        Provider Network Health
      </h2>

      <p className="mt-3 max-w-2xl text-slate-400">
        Real-time monitoring across all ISP providers.
        Analyze uptime, latency, settlements and
        active node performance.
      </p>

      {/* Metrics */}

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Global Uptime
          </p>

          <h3 className="mt-2 text-4xl font-bold text-emerald-400">
            99.82%
          </h3>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Active Nodes
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            18,204
          </h3>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Avg Latency
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            24ms
          </h3>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Settlements
          </p>

          <h3 className="mt-2 text-4xl font-bold text-violet-400">
            $42K
          </h3>
        </div>

      </div>

      {/* Fake Graph */}

      <div className="mt-10">

        <div className="flex items-end gap-3 h-40">

          {[40, 65, 55, 90, 75, 110, 95, 140, 125, 160, 150, 180].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-indigo-600 to-violet-400"
                style={{
                  height: `${height}px`,
                }}
              />
            )
          )}

        </div>

        <div className="mt-4 flex justify-between text-xs text-slate-500">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>

      </div>

    </div>

  </div>

  {/* Quick Actions */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-7">

    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
        ADMIN TOOLS
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        Quick Actions
      </h2>

      <p className="mt-2 text-slate-500">
        Frequently used management tools.
      </p>
    </div>

    <div className="mt-8 space-y-4">

      <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-50">

        <h4 className="font-semibold text-slate-900">
          Add New Provider
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          Register ISP partner in network
        </p>

      </button>

      <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-50">

        <h4 className="font-semibold text-slate-900">
          Compliance Review
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          Verify provider documentation
        </p>

      </button>

      <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-50">

        <h4 className="font-semibold text-slate-900">
          Settlement Reports
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          Download transaction history
        </p>

      </button>

      <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-50">

        <h4 className="font-semibold text-slate-900">
          Performance Analytics
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          Advanced provider insights
        </p>

      </button>

    </div>

  </div>

</div>
      </div>
            
      <ExportReportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
        entityName="ISP Directory" 
        data={partners} 
      />
    </AdminShell>
  );
}