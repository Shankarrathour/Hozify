import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import PartnerExportButton from "../../components/ui/PartnerExportButton";
import PartnerExportModal from "../../components/ui/PartnerExportModal";

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
  X,
  ChevronRight,
  Eye,
  CheckCircle,
  XCircle,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Total Partners",
    value: "1,284",
    icon: Users,
    badge: "+12%",
    badgeColor: "text-emerald-600 bg-emerald-50",
    bgColor: "bg-slate-50/70",
    filterValue: "All",
  },
  {
    title: "Active Networks",
    value: "1,102",
    icon: ShieldCheck,
    badge: "Live",
    badgeColor: "text-green-600 bg-green-50",
    bgColor: "bg-emerald-50/40",
    filterValue: "Active",
  },
  {
    title: "Pending Approvals",
    value: "45",
    icon: Clock3,
    badge: "12 New",
    badgeColor: "text-orange-600 bg-orange-50",
    bgColor: "bg-amber-50/40",
    filterValue: "Pending",
  },
  {
    title: "Suspended",
    value: "28",
    icon: Ban,
    badge: "-2%",
    badgeColor: "text-red-600 bg-red-50",
    bgColor: "bg-rose-50/40",
    filterValue: "Inactive",
  },
  {
    title: "Top Rated",
    value: "210",
    icon: Star,
    badge: "4.8 Avg",
    badgeColor: "text-blue-600 bg-blue-50",
    bgColor: "bg-blue-50/40",
    filterValue: "Top Rated",
  },
  {
    title: "Settlement Volume",
    value: "$42K",
    icon: Building2,
    badge: "Pending",
    badgeColor: "text-violet-600 bg-violet-50",
    bgColor: "bg-violet-50/40",
    filterValue: "All",
  },
];

const initialPartners = [
  {
    name: "Nexus Logistics",
    id: "PRT-9021",
    city: "Chicago, IL",
    region: "Metro Region 4",
    subs: "12,450",
    uptime: "99.98%",
    status: "Active",
    serviceType: "FTTH Broadband",
    isTopRated: true,
    ispKyc: {
      aadhaar: { status: "VERIFIED", documentNumber: "[Aadhaar Omitted]", uploadDate: "2026-03-12", uploadedBy: "John Doe", remarks: "Clear copy uploaded", fileUrl: "#" },
      pan: { status: "VERIFIED", documentNumber: "ABCDE1234F", uploadDate: "2026-03-12", uploadedBy: "John Doe", remarks: "PAN details match completely", fileUrl: "#" },
      selfie: { status: "REVIEW", documentNumber: "SELFIE-9021", uploadDate: "2026-03-14", uploadedBy: "John Doe", remarks: "Slight lighting glare; verifying facial geometry match", fileUrl: "#" },
      bank: { status: "VERIFIED", documentNumber: "9876543210", uploadDate: "2026-03-12", uploadedBy: "John Doe", remarks: "Penny drop successful", fileUrl: "#" }
    }
  },
  {
    name: "Swift Delivery Co",
    id: "PRT-7842",
    city: "Austin, TX",
    region: "Southwest Hub",
    subs: "5,820",
    uptime: "98.42%",
    status: "Inactive",
    serviceType: "Lease Line",
    isTopRated: false,
    ispKyc: {
      aadhaar: { status: "PENDING", documentNumber: "[Aadhaar Omitted]", uploadDate: "2026-05-20", uploadedBy: "Sarah Jenkins", remarks: "Awaiting administrative intake verification", fileUrl: "#" },
      pan: { status: "VERIFIED", documentNumber: "XYZWR9876Q", uploadDate: "2026-05-20", uploadedBy: "Sarah Jenkins", remarks: "Verified via Tax Portal", fileUrl: "#" },
      selfie: { status: "VERIFIED", documentNumber: "SELFIE-7842", uploadDate: "2026-05-21", uploadedBy: "Sarah Jenkins", remarks: "Match accuracy 98.4%", fileUrl: "#" },
      bank: { status: "REVIEW", documentNumber: "1122334455", uploadDate: "2026-05-22", uploadedBy: "Sarah Jenkins", remarks: "Name matching checklist mismatch by one letter", fileUrl: "#" }
    }
  },
  {
    name: "Global Retail Solutions",
    id: "PRT-5510",
    city: "Seattle, WA",
    region: "Northwest Region",
    subs: "22,900",
    uptime: "99.99%",
    status: "Active",
    serviceType: "FTTH Broadband",
    isTopRated: true,
    ispKyc: {
      aadhaar: { status: "VERIFIED", documentNumber: "[Aadhaar Omitted]", uploadDate: "2026-01-15", uploadedBy: "Alex Mercer", remarks: "e-KYC verified successfully", fileUrl: "#" },
      pan: { status: "REJECTED", documentNumber: "PLMKO4321Z", uploadDate: "2026-01-15", uploadedBy: "Alex Mercer", remarks: "Document scan is completely unreadable/blurry", fileUrl: "#" },
      selfie: { status: "VERIFIED", documentNumber: "SELFIE-5510", uploadDate: "2026-01-16", uploadedBy: "Alex Mercer", remarks: "Live check passed", fileUrl: "#" },
      bank: { status: "VERIFIED", documentNumber: "5566778899", uploadDate: "2026-01-15", uploadedBy: "Alex Mercer", remarks: "Canceled check image matches provided data", fileUrl: "#" }
    }
  },
  {
    name: "Metro Freight Systems",
    id: "PRT-1123",
    city: "Denver, CO",
    region: "Mountain Central",
    subs: "3,150",
    uptime: "92.10%",
    status: "Pending",
    serviceType: "Wireless Link",
    isTopRated: false,
    ispKyc: {
      aadhaar: { status: "PENDING", documentNumber: "[Aadhaar Omitted]", uploadDate: "2026-06-01", uploadedBy: "David Miller", remarks: "Document uploaded, awaiting queue execution", fileUrl: "#" },
      pan: { status: "PENDING", documentNumber: "QWERTY5544", uploadDate: "2026-06-01", uploadedBy: "David Miller", remarks: "Pending tax database callback sync", fileUrl: "#" },
      selfie: { status: "PENDING", documentNumber: "SELFIE-1123", uploadDate: "2026-06-02", uploadedBy: "David Miller", remarks: "Liveness tracking analysis pending", fileUrl: "#" },
      bank: { status: "PENDING", documentNumber: "4433221100", uploadDate: "2026-06-01", uploadedBy: "David Miller", remarks: "Bank validation job in operational pipeline", fileUrl: "#" }
    }
  },
];

const documentLabels = {
  aadhaar: "Aadhaar Card",
  pan: "PAN Card",
  selfie: "Selfie Verification",
  bank: "Bank Account Details",
};

const statusConfig = {
  VERIFIED: { bg: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
  PENDING: { bg: "bg-amber-50 text-amber-700 ring-amber-600/20" },
  REVIEW: { bg: "bg-blue-50 text-blue-700 ring-blue-600/20" },
  REJECTED: { bg: "bg-rose-50 text-rose-700 ring-rose-600/20" },
};

export default function ISPPartners() {
  const [partners, setPartners] = useState(initialPartners);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedService, setSelectedService] = useState("All Services");
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const [expandedPartnerId, setExpandedPartnerId] = useState(null);
  const [selectedKycDoc, setSelectedKycDoc] = useState(null);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleExport = (format) => {
    setIsExportOpen(false);
    alert(`${format} export for ISP directory is starting...`);
  };

  const availableCities = ["All Cities", ...new Set(partners.map((p) => p.city))];
  const availableServices = ["All Services", ...new Set(partners.map((p) => p.serviceType))];

  const filteredPartners = partners.filter((partner) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Top Rated" && partner.isTopRated) ||
      partner.status === activeTab;

    const matchesCity = selectedCity === "All Cities" || partner.city === selectedCity;
    const matchesService = selectedService === "All Services" || partner.serviceType === selectedService;

    return matchesTab && matchesCity && matchesService;
  });

  const togglePartnerExpand = (partnerId) => {
    setExpandedPartnerId(expandedPartnerId === partnerId ? null : partnerId);
  };

  const openKycModal = (partnerId, docKey, docData) => {
    setSelectedKycDoc({
      partnerId,
      docKey,
      ...docData,
    });
  };

  const handleUpdateStatus = (partnerId, docKey, newStatus) => {
    setPartners((prev) =>
      prev.map((p) => {
        if (p.id === partnerId) {
          return {
            ...p,
            ispKyc: {
              ...p.ispKyc,
              [docKey]: {
                ...p.ispKyc[docKey],
                status: newStatus,
              },
            },
          };
        }
        return p;
      })
    );
    setSelectedKycDoc((prev) => (prev ? { ...prev, status: newStatus } : null));
  };

  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search providers, cities, settlements..."
    >
      <div className="space-y-8 max-w-[1600px] mx-auto p-4">
        
        {/* Hero Section */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 relative shadow-sm">
          <div className="absolute right-0 top-0 h-full w-[500px] opacity-20 pointer-events-none">
            <div className="absolute right-16 top-12 h-72 w-72 rounded-full border border-indigo-400"></div>
            <div className="absolute right-28 top-24 h-52 w-52 rounded-full border border-indigo-400"></div>
            <div className="absolute right-40 top-36 h-32 w-32 rounded-full border border-indigo-400"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-slate-600">
                ISP MANAGEMENT
              </span>
              <h1 className="mt-4 text-3xl font-bold text-slate-900">
                Internet Service Providers
              </h1>
              <p className="mt-3 max-w-3xl text-slate-500 text-base">
                Manage and monitor 1,284 service providers across the HOZIFY ecosystem. 
                Track uptime, settlements, subscribers and network health from one place.
              </p>
              <div className="mt-6 flex gap-4">
                <PartnerExportButton onClick={() => setIsExportOpen(true)} label="Export Report" />
              </div>
            </div>

            <div className="hidden xl:block">
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 min-w-[200px]">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">NETWORK STATUS</p>
                <h2 className="mt-2 text-4xl font-extrabold text-emerald-600">99.82%</h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Global Uptime</p>
              </div>
            </div>
          </div>
        </div>

        <PartnerExportModal
          open={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          title="Export ISP Directory Report"
          description="Choose the file format to download the complete provider network data."
          helper="Includes uptime logs, KYC records, and subscriber data summaries."
          onExport={handleExport}
          confirmLabel="Generate Export"
        />

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.filterValue;

            return (
              <div
                key={index}
                onClick={() => {
                  setActiveTab(item.filterValue);
                  setSelectedCity("All Cities");
                  setSelectedService("All Services");
                }}
                className={`group relative overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer select-none ${item.bgColor} ${
                  isSelected ? "ring-2 ring-indigo-500/70 border-transparent shadow" : "border-slate-200/80"
                }`}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-indigo-600">
                      <Icon size={18} />
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border border-current/10 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-medium text-slate-400 truncate">{item.title}</p>
                    <h3 className="mt-0.5 text-2xl font-bold text-slate-900 tracking-tight">{item.value}</h3>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100/80">
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: `${72 + index * 4}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ISP Directory Main Card */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">Provider Management</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">ISP Directory</h2>
              <p className="mt-0.5 text-sm text-slate-400">Monitor all registered internet service providers</p>
            </div>
             <button 
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={`flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                showAdvancedFilters ? "bg-indigo-50 border-indigo-200 text-indigo-700 font-bold" : "border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
            >
              <Filter size={16} />
              Advanced Filters
            </button>
          </div>

          {/* Requirements Overview Card inside directory */}
          <div className="p-6 border-b border-slate-200 bg-slate-50/50">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white text-sm font-bold shadow-sm">ISP</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Internet Service Provider</h3>
                  <p className="text-xs text-slate-500">Broadband & Internet Distribution Partner</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Required KYC Documents</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.values(documentLabels).map((item) => (
                    <div key={item} className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                      <span className="text-xs font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filtering Header */}
          {showAdvancedFilters && (
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/30">
              <div className="flex items-center gap-4 relative">
                <div className="flex rounded-xl bg-slate-200/60 p-0.5 text-xs font-semibold">
                  {["All", "Active", "Pending", "Inactive", "Top Rated"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setSelectedCity("All Cities");
                        setSelectedService("All Services");
                      }}
                      className={`rounded-lg px-4 py-1.5 transition ${
                        activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <button 
                    onClick={() => { setIsCityDropdownOpen(!isCityDropdownOpen); setIsServiceDropdownOpen(false); }}
                    className="flex items-center gap-1 text-xs text-slate-700 font-bold bg-white border border-slate-200 rounded-xl px-3 py-1.5 hover:bg-slate-50 transition"
                  >
                    {selectedCity}
                    <ChevronDown size={14} />
                  </button>
                  {isCityDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-44 rounded-xl border border-slate-100 bg-white shadow-lg z-30 py-1">
                      {availableCities.map((city) => (
                        <button
                          key={city}
                          onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition ${selectedCity === city ? "font-bold text-indigo-600 bg-indigo-50/30" : "text-slate-600"}`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button 
                    onClick={() => { setIsServiceDropdownOpen(!isServiceDropdownOpen); setIsCityDropdownOpen(false); }}
                    className="flex items-center gap-1 text-xs text-slate-700 font-bold bg-white border border-slate-200 rounded-xl px-3 py-1.5 hover:bg-slate-50 transition"
                  >
                    {selectedService === "All Services" ? "Service Type" : selectedService}
                    <ChevronDown size={14} />
                  </button>
                  {isServiceDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-xl border border-slate-100 bg-white shadow-lg z-30 py-1">
                      {availableServices.map((service) => (
                        <button
                          key={service}
                          onClick={() => { setSelectedService(service); setIsServiceDropdownOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition ${selectedService === service ? "font-bold text-indigo-600 bg-indigo-50/30" : "text-slate-600"}`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {filteredPartners.length} Matches
              </div>
            </div>
          )}

          {/* Directory Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">PROVIDER</th>
                  <th className="px-6 py-4">SERVICE AREA / TYPE</th>
                  <th className="px-6 py-4">SUBSCRIBERS</th>
                  <th className="px-6 py-4">UPTIME</th>
                  <th className="px-6 py-4">STATUS</th>
                  <th className="px-6 py-4 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                {filteredPartners.length > 0 ? (
                  filteredPartners.map((partner) => (
                    <React.Fragment key={partner.id}>
                      <tr className="transition hover:bg-slate-50/70">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-sm">
                              {partner.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900">{partner.name}</h4>
                              <p className="text-xs text-slate-400">ID: {partner.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap align-middle">
                          <div className="font-medium text-slate-800">{partner.city}</div>
                          <div className="text-xs text-indigo-600 font-semibold">{partner.serviceType}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap align-middle font-semibold text-slate-800">{partner.subs}</td>
                        <td className="px-6 py-4 whitespace-nowrap align-middle">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-emerald-600 text-xs">{partner.uptime}</span>
                            <div className="h-1.5 w-12 rounded-full bg-slate-100">
                              <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: "94%" }} />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap align-middle">
                          <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                            partner.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
                              : partner.status === "Pending"
                              ? "bg-amber-50 text-amber-700 ring-amber-600/10"
                              : "bg-slate-100 text-slate-700 ring-slate-600/10"
                          }`}>
                            {partner.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap align-middle text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => togglePartnerExpand(partner.id)}
                              className={`rounded-xl border px-3 py-1.5 text-xs font-bold shadow-sm transition flex items-center gap-1 ${
                                expandedPartnerId === partner.id
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                              }`}
                            >
                              Verification
                              <ChevronDown size={14} className={`transform transition-transform duration-200 ${expandedPartnerId === partner.id ? "rotate-180" : ""}`} />
                            </button>
                            <div className="relative">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveDropdownId(activeDropdownId === partner.id ? null : partner.id);
                                }}
                                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                              >
                                <MoreVertical size={16} />
                              </button>
                              {activeDropdownId === partner.id && (
                                <div 
                                  className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 rounded-lg shadow-lg z-30 py-1 text-left"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <button 
                                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                    onClick={() => {
                                      alert(`Viewing profile details for ${partner.name}`);
                                      setActiveDropdownId(null);
                                    }}
                                  >
                                    <Eye size={14} /> View Details
                                  </button>
                                  <button 
                                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                    onClick={() => {
                                      alert(`Configuring network parameters for ${partner.name}`);
                                      setActiveDropdownId(null);
                                    }}
                                  >
                                    <FileText size={14} /> Configure
                                  </button>
                                  <button 
                                    className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-slate-50 ${partner.status === 'Inactive' ? 'text-green-600' : 'text-orange-600'}`}
                                    onClick={() => {
                                      setPartners(prev => prev.map(p => p.id === partner.id ? { ...p, status: p.status === 'Active' ? 'Inactive' : 'Active' } : p));
                                      setActiveDropdownId(null);
                                    }}
                                  >
                                    {partner.status === 'Inactive' ? <CheckCircle size={14} /> : <Ban size={14} />}
                                    {partner.status === 'Inactive' ? 'Activate' : 'Suspend'}
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>

                      {/* Expanded Compliance Drawer */}
                      {expandedPartnerId === partner.id && (
                        <tr>
                          <td colSpan="6" className="bg-slate-50/40 px-8 py-5 border-y border-slate-100/70">
                            <div className="max-w-2xl rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-sm space-y-4">
                              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <div>
                                  <h3 className="text-base font-bold text-slate-900">Independent Service Provider KYC</h3>
                                  <p className="text-xs text-slate-400">Click individual compliance verification channels to view or audit assets.</p>
                                </div>
                                <span className="rounded-full bg-indigo-50 border border-indigo-100 px-2.5 py-1 text-[11px] font-bold text-indigo-600">
                                  4 Documents Required
                                </span>
                              </div>

                              <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                                {Object.entries(partner.ispKyc).map(([key, value]) => (
                                  <div
                                    key={key}
                                    onClick={() => openKycModal(partner.id, key, value)}
                                    className="group flex items-center justify-between p-3.5 bg-white hover:bg-slate-50/60 transition cursor-pointer select-none"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                                        <FileText size={16} />
                                      </div>
                                      <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition">
                                        {documentLabels[key]}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                      <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-[11px] font-bold ring-1 ring-inset ${statusConfig[value.status]?.bg}`}>
                                        {value.status}
                                      </span>
                                      <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5 transition" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-xs font-semibold text-slate-400 bg-white">
                      No service providers match the chosen criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 text-xs font-medium text-slate-400 bg-white">
            <p>Showing 1–{filteredPartners.length} of {filteredPartners.length} Criteria Matches</p>
            <div className="flex gap-1.5">
              <button className="h-7 w-7 rounded-md bg-indigo-600 font-semibold text-white shadow-sm flex items-center justify-center">1</button>
            </div>
          </div>
        </div>

        {/* Analytics & Quick Action Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-slate-900 relative shadow-sm">
            <div className="absolute right-0 top-0 h-full w-full opacity-40 pointer-events-none">
              <div className="absolute right-10 top-10 h-80 w-80 rounded-full border border-slate-200"></div>
              <div className="absolute right-20 top-20 h-60 w-60 rounded-full border border-slate-200"></div>
            </div>

            <div className="relative z-10">
              <span className="rounded-full bg-slate-200 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-slate-600 uppercase">
                LIVE NETWORK OVERVIEW
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                Provider Network Health
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-xl">
                Real-time monitoring across all ISP providers. Analyze uptime, latency, settlements and active node performance.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Global Uptime</p>
                  <h3 className="mt-1 text-2xl font-bold text-emerald-600">99.82%</h3>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Nodes</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-800">18,204</h3>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Avg Latency</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-800">24ms</h3>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Settlements</p>
                  <h3 className="mt-1 text-2xl font-bold text-violet-600">$42K</h3>
                </div>
              </div>

              {/* Blue column charts */}
              <div className="mt-8">
                <div className="flex items-end gap-2 h-28">
                  {[40, 65, 55, 90, 75, 110, 95, 140, 125, 160, 150, 180].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-blue-500/20 hover:bg-blue-500 transition"
                      style={{ height: `${(height / 180) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] font-semibold text-slate-400 tracking-wider px-1">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">ADMIN TOOLS</p>
              <h2 className="mt-1.5 text-xl font-bold text-slate-900">Quick Actions</h2>
              <p className="text-xs text-slate-400 mt-0.5">Frequently used management operational tools.</p>
            </div>

            <div className="mt-6 space-y-3">
              {["Add New Provider", "Compliance Review", "Settlement Reports", "Performance Analytics"].map((action, idx) => {
                const subtitles = [
                  "Register ISP partner in network",
                  "Verify provider documentation",
                  "Download transaction history",
                  "Advanced provider insights"
                ];
                return (
                  <button 
                    key={idx}
                    className="w-full rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50/40"
                  >
                    <h4 className="font-semibold text-slate-900 text-sm">{action}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{subtitles[idx]}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Verification Modal Action Drawer */}
      {selectedKycDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100 mx-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Review {documentLabels[selectedKycDoc.docKey]}</h3>
              <button 
                onClick={() => setSelectedKycDoc(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="mt-4 text-xs space-y-3 text-slate-600">
              <div>
                <span className="font-bold block text-slate-400 uppercase tracking-wider mb-0.5">Document Identifier</span>
                <span className="font-mono text-slate-800 text-sm bg-slate-50 p-1.5 rounded border border-slate-100 block">{selectedKycDoc.documentNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="font-bold block text-slate-400 uppercase tracking-wider">Uploaded By</span>
                  <span className="text-slate-800 font-medium">{selectedKycDoc.uploadedBy}</span>
                </div>
                <div>
                  <span className="font-bold block text-slate-400 uppercase tracking-wider">Upload Date</span>
                  <span className="text-slate-800 font-medium">{selectedKycDoc.uploadDate}</span>
                </div>
              </div>
              <div>
                <span className="font-bold block text-slate-400 uppercase tracking-wider mb-1">Administrative Remarks</span>
                <p className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-xs font-medium text-slate-600 shadow-inner">
                  {selectedKycDoc.remarks || "No evaluation remarks recorded."}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <div className="flex gap-2">
                <a href={selectedKycDoc.fileUrl} className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
                  <Eye size={14} /> View
                </a>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedKycDoc.partnerId, selectedKycDoc.docKey, "REJECTED")}
                  disabled={selectedKycDoc.status === "REJECTED"}
                  className="flex items-center gap-1.5 rounded-xl bg-rose-600 px-3 py-2 text-xs font-bold text-white hover:bg-rose-700 disabled:opacity-40 transition"
                >
                  <XCircle size={14} /> Reject
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedKycDoc.partnerId, selectedKycDoc.docKey, "VERIFIED")}
                  disabled={selectedKycDoc.status === "VERIFIED"}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-40 transition"
                >
                  <CheckCircle size={14} /> Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}