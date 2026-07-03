import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  Map,
  ArrowUpRight,
  Wifi,
  Wrench,
  ShieldCheck,
  LifeBuoy,
  Layers,
} from "lucide-react";

const stats = [
  { title: "Active Services", value: "148", growth: "+12%", icon: Wifi, iconColor: "text-violet-600" },
  { title: "Mapped Branches", value: "812", growth: "+9%", icon: Layers, iconColor: "text-cyan-600" },
  { title: "Coverage Score", value: "96%", growth: "+4%", icon: ShieldCheck, iconColor: "text-emerald-600" },
  { title: "Service Requests", value: "2,481", growth: "+18%", icon: LifeBuoy, iconColor: "text-orange-600" },
];

const serviceCategories = [
  {
    id: "internet",
    title: "Internet Services",
    count: "42 Services",
    color: "from-violet-500 to-indigo-600",
    icon: Wifi,
    summary: "High-speed internet plans with branch-level coverage and bandwidth management.",
    details:
      "Includes fiber and wireless packages, QoS routing, uptime monitoring, and branch-level SLA tracking.",
  },
  {
    id: "installation",
    title: "Installation Services",
    count: "28 Services",
    color: "from-cyan-500 to-blue-600",
    icon: Wrench,
    summary: "On-site setup, equipment configuration, and branch service activation.",
    details:
      "Field engineers coordinate hardware setup, software configuration, and connectivity validation for each branch.",
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    count: "35 Services",
    color: "from-emerald-500 to-teal-600",
    icon: ShieldCheck,
    summary: "Proactive branch maintenance, patch management, and health checks.",
    details:
      "Scheduled inspections, incident fixes, and preventive maintenance ensure consistent branch performance.",
  },
  {
    id: "support",
    title: "Support Services",
    count: "43 Services",
    color: "from-orange-500 to-red-500",
    icon: LifeBuoy,
    summary: "24/7 partner support with live ticketing and priority escalation.",
    details:
      "Support workflows cover incident response, branch assistance, and service restoration for urgent needs.",
  },
];

const coverageData = [
  ["Internet Services", "96%"],
  ["Installation", "91%"],
  ["Maintenance", "88%"],
  ["Support", "98%"],
];

const mappingOptions = [
  {
    key: "coverage",
    title: "Coverage Map",
    description: "View branch-level service availability and regional coverage heatmaps.",
    icon: Map,
  },
  {
    key: "allocation",
    title: "Branch Allocation",
    description: "See which services are mapped to each branch and available capacity.",
    icon: Layers,
  },
  {
    key: "status",
    title: "Activation Status",
    description: "Track live service activations, pending rollouts and SLA health.",
    icon: ShieldCheck,
  },
];

export default function PartnerServices() {
  const { addToast } = useToast();
  const [activeService, setActiveService] = useState(serviceCategories[0]);
  const [showServiceInfo, setShowServiceInfo] = useState(false);
  const [showMappingOptions, setShowMappingOptions] = useState(false);
  const [selectedMappingOption, setSelectedMappingOption] = useState(mappingOptions[0]);

  const handleViewService = (service) => {
    setActiveService(service);
    setShowServiceInfo(true);
    setShowMappingOptions(false);
  };

  const handleSelectMappingOption = (option) => {
    setSelectedMappingOption(option);
    setShowMappingOptions(true);
  };

  const mappingStats = {
    coverage: {
      title: "Coverage Reach",
      value: "92%",
      detail: "Branch coverage across active services.",
    },
    allocation: {
      title: "Branch Allocation",
      value: "112",
      detail: "Services mapped across active branches.",
    },
    status: {
      title: "Live Status",
      value: "98%",
      detail: "Active SLA health for mapped services.",
    },
  };

  const serviceInsights = {
    internet: {
      metric: "96% Coverage",
      detail: "Fiber and wireless availability across partner branches.",
      deployment: "Network provisioning and routing",
      signal: "High bandwidth uptime with live QoS monitoring",
    },
    installation: {
      metric: "28 Active Deployments",
      detail: "Field engineers completing branch activations and installs.",
      deployment: "Field installation and activation",
      signal: "On-site deployment velocity and equipment readiness",
    },
    maintenance: {
      metric: "35 Scheduled Checks",
      detail: "Preventive maintenance and branch health inspections.",
      deployment: "Scheduled branch maintenance",
      signal: "Patch rollout stability and incident reduction",
    },
    support: {
      metric: "43 Support Channels",
      detail: "24/7 incident response and ticket escalation coverage.",
      deployment: "24/7 support coverage",
      signal: "Priority SLA and live ticketing",
    },
  };

  const currentMapping = mappingStats[selectedMappingOption.key];
  const activeServiceInsights = serviceInsights[activeService.id];

  return (
    <AdminShell activeTab="Partners" searchPlaceholder="Search services...">

      <div className="space-y-8">

        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-50 p-10 text-slate-900">

          <div className="absolute right-0 top-0 h-full w-full opacity-10">
            <div className="absolute right-16 top-10 h-80 w-80 rounded-full border border-white"></div>
            <div className="absolute right-24 top-24 h-60 w-60 rounded-full border border-white"></div>
          </div>

          <div className="relative z-10 flex flex-col xl:flex-row justify-between gap-10">

            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.3em]">
                SERVICE CONTROL CENTERs
              </span>

              <h1 className="mt-6 text-3xl font-semibold">
                Partner Service Mapping Hub
              </h1>

              <p className="mt-5 max-w-3xl text-lg text-slate-700">
                Manage service allocation, branch mapping, coverage and partner performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setShowMappingOptions((current) => !current)}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
                >
                  View Mapping
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-3xl ${item.iconColor} bg-opacity-15 bg-gradient-to-br from-current via-white to-current`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{item.title}</p>
                        <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <ArrowUpRight size={16} className="text-emerald-500" />
                      <span>{item.growth}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {showMappingOptions && (
          <div className="space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Mapping Options
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Choose a mapping view for this page
                </h2>
              </div>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {selectedMappingOption.title}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mappingOptions.map((option) => {
                const Icon = option.icon;
                const active = selectedMappingOption.key === option.key;
                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => handleSelectMappingOption(option)}
                    className={`rounded-[26px] border p-5 text-left transition ${
                      active
                        ? "border-indigo-500 bg-indigo-50 shadow-lg"
                        : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50 hover:-translate-y-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-3xl ${active ? "bg-indigo-600 text-white" : "bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{option.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{option.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Metric</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">{currentMapping.value}</p>
                <p className="mt-2 text-sm text-slate-600">{currentMapping.detail}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Selected view</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{selectedMappingOption.title}</p>
                <p className="mt-2 text-sm text-slate-600">Page-level mapping details for service operations.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Page context</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Services & branches</p>
                <p className="mt-2 text-sm text-slate-600">Actionable mapping options tailored to this service page.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= SERVICE CATEGORIES ================= */}
        {showServiceInfo && (
          <div className="rounded-[28px] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-600">Active service selected</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{activeService.title}</h2>
                <p className="mt-2 text-sm text-slate-700">{activeService.summary}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => addToast(`${activeService.title} data loaded and synced successfully.`, 'success')}
                  className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 hover:shadow-md transition-all cursor-pointer active:scale-95 border border-indigo-100"
                >
                  Loaded
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowMappingOptions(true);
                    addToast(`Viewing all ${activeService.count} for ${activeService.title}.`, 'info');
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }}
                  className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  {activeService.count}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {serviceCategories.map((s) => {
            const Icon = s.icon;
            const isActive = activeService.id === s.id;
            return (
              <div
                key={s.title}
                className={`rounded-[28px] border p-6 shadow-sm transition hover:shadow-lg ${
                  isActive
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${s.color} shadow-lg`}>
                    <Icon className="h-7 w-7 text-white stroke-2" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                      {isActive && (
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500">{s.count}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{s.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleViewService(s)}
                    className={`rounded-2xl border px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                      isActive
                        ? "border-indigo-500 bg-indigo-600 text-white"
                        : "border-slate-200 bg-white text-slate-900"
                    }`}
                  >
                    {isActive ? "Selected" : "View Service"}
                  </button>
                </div>
              </div>
            );
          })}

        </div>

        {/* ================= COVERAGE ANALYTICS ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2 rounded-[32px] border border-slate-200 bg-white p-8">

            <div className="flex justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">
                  Distribution Analytics
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Service Coverage Overview
                </h2>
              </div>

              <Map className="text-slate-700" size={30} />
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
        {/* ================= SERVICE DETAIL ================= */}
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Selected Service
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  {showServiceInfo ? activeService.title : "Service details will appear here"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowServiceInfo(!showServiceInfo)}
                className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                {showServiceInfo ? "Hide Service Info" : "View Service Info"}
              </button>
            </div>

            <p className="mt-1 text-slate-600">
              {showServiceInfo
                ? activeService.details
                : "Click any View Service button to open detailed service information."}
            </p>

            {showServiceInfo && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Core capability</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">{activeService.summary}</p>
                  <p className="mt-2 text-sm text-slate-600">{activeService.details}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Service metric</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">{activeServiceInsights.metric}</p>
                  <p className="mt-2 text-sm text-slate-600">{activeServiceInsights.detail}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Deployment model</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">{activeServiceInsights.deployment}</p>
                  <p className="mt-2 text-sm text-slate-600">{activeServiceInsights.signal}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </AdminShell>
  );
}