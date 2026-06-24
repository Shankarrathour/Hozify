import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Map, ArrowUpRight } from "lucide-react";

const stats = [
  { title: "Active Services", value: "148", growth: "+12%" },
  { title: "Mapped Branches", value: "812", growth: "+9%" },
  { title: "Coverage Score", value: "96%", growth: "+4%" },
  { title: "Service Requests", value: "2,481", growth: "+18%" },
];

const serviceCategories = [
  { title: "Internet Services", count: "42 Services", color: "from-violet-500 to-indigo-600" },
  { title: "Installation Services", count: "28 Services", color: "from-cyan-500 to-blue-600" },
  { title: "Maintenance Services", count: "35 Services", color: "from-emerald-500 to-teal-600" },
  { title: "Support Services", count: "43 Services", color: "from-orange-500 to-red-500" },
];

const coverageData = [
  ["Internet Services", "96%"],
  ["Installation", "91%"],
  ["Maintenance", "88%"],
  ["Support", "98%"],
];

export default function PartnerServices() {
  return (
    <AdminShell activeTab="Partners" searchPlaceholder="Search services...">

      <div className="space-y-8">

        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-950 p-10 text-white">

          <div className="absolute right-0 top-0 h-full w-full opacity-10">
            <div className="absolute right-16 top-10 h-80 w-80 rounded-full border border-white"></div>
            <div className="absolute right-24 top-24 h-60 w-60 rounded-full border border-white"></div>
          </div>

          <div className="relative z-10 flex flex-col xl:flex-row justify-between gap-10">

            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.3em]">
                SERVICE CONTROL CENTER
              </span>

              <h1 className="mt-6 text-4xl font-bold">
                Partner Service Mapping Hub
              </h1>

              <p className="mt-5 max-w-3xl text-lg text-slate-300">
                Manage service allocation, branch mapping, coverage and partner performance.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900">
                  Add Service
                </button>
                <button className="rounded-2xl border border-white/20 px-6 py-3">
                  View Mapping
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <h3 className="mt-2 text-4xl font-bold">{item.value}</h3>
                  <div className="mt-2 flex items-center gap-1 text-emerald-400">
                    <ArrowUpRight size={16} />
                    {item.growth}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* ================= SERVICE CATEGORIES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {serviceCategories.map((s) => (
            <div
              key={s.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 hover:shadow-xl transition"
            >
              <div className={`h-2 rounded-full bg-gradient-to-r ${s.color}`} />
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-slate-500">{s.count}</p>
              <button className="mt-6 text-sm font-semibold text-indigo-600">
                View Services →
              </button>
            </div>
          ))}

        </div>

        {/* ================= COVERAGE ANALYTICS ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2 rounded-[32px] border border-slate-200 bg-white p-8">

            <div className="flex justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-violet-600">
                  Distribution Analytics
                </p>
                <h2 className="mt-2 text-3xl font-bold">
                  Service Coverage Overview
                </h2>
              </div>

              <Map className="text-violet-600" size={30} />
            </div>

            <div className="mt-10 space-y-6">

              {coverageData.map(([name, value]) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <span>{name}</span>
                    <span className="text-violet-600 font-bold">{value}</span>
                  </div>

                  <div className="h-3 bg-slate-100 rounded-full">
                    <div
                      className="h-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
        {/* ================= FOOTER ================= */}
        <div className="rounded-[32px] bg-gradient-to-r from-violet-950 via-indigo-900 to-slate-950 p-8 text-white">

          <h2 className="text-2xl font-bold">
            Partner Service Mapping Complete
          </h2>

          <p className="mt-2 text-slate-300">
            All partner services are synced and operational.
          </p>

        </div>

      </div>

    </AdminShell>
  );
}