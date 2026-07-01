import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import PartnerExportButton from "../../components/ui/PartnerExportButton";
import PartnerExportModal from "../../components/ui/PartnerExportModal";

import {
  Building2,
  ShieldCheck,
  Clock3,
  Ban,
  DollarSign,
  FileCheck,
  Download,
  Plus,
  ChevronDown,
  ChevronUp,
  Filter,
  X,
  MoreVertical,
  UserCheck,
  Briefcase,
  ChevronRight,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function BSPPartners() {
  const [activeTab, setActiveTab] = useState("All");
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedService, setSelectedService] = useState("All Services");
  const [expandedPartnerId, setExpandedPartnerId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const availableCities = ["All Cities", "Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata"];
  const availableServices = ["All Services", "A/C Repair", "Plumbing", "Electrical", "Cleaning", "Pest Control", "Carpentry"];

  const filteredPartners = [
    { id: "BSP-10023", name: "Urban Clap Solutions", type: "Home Services", owner: "Ramesh Kumar", city: "Delhi", rating: 4.8, status: "Active", walletBalance: 154000, compliance: 100 },
    { id: "BSP-10045", name: "QuickFix Handy", type: "Repairs", owner: "Suresh Singh", city: "Mumbai", rating: 4.5, status: "Pending", walletBalance: 45000, compliance: 80 }
  ].filter(p => (activeTab === 'All' || p.status === activeTab) && (selectedCity === 'All Cities' || p.city === selectedCity) && (selectedService === 'All Services' || p.type === selectedService) && (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase())));

  const KycDocumentRow = ({ label, docData, onClick }) => {
    const statusColors = {
      VERIFIED: "text-emerald-700 bg-emerald-50 border-emerald-200",
      PENDING: "text-amber-700 bg-amber-50 border-amber-200",
      REVIEW: "text-blue-700 bg-blue-50 border-blue-200",
      REJECTED: "text-rose-700 bg-rose-50 border-rose-200",
    };
    const status = docData?.status || "PENDING";
    const color = statusColors[status] || statusColors.PENDING;

    return (
      <div
        onClick={onClick}
        className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer transition"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
             <FileCheck size={16} />
          </div>
          <span className="text-xs font-bold text-slate-700">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-[11px] font-bold border ${color}`}>
            {status}
          </span>
          <ChevronRight size={14} className="text-slate-300" />
        </div>
      </div>
    );
  };

  const formatIndianCurrency = (val) => "₹" + (val || 0).toLocaleString('en-IN');
  const togglePartnerKyc = (id) => setExpandedPartnerId(expandedPartnerId === id ? null : id);
  const openKycModal = (id, section, doc, title) => console.log("Open KYC Modal for", id, section, doc, title);

  const statsMetrics = {
    total: 0,
    active: 0,
    pending: 0,
    suspended: 0,
    complianceRate: "0%",
    revenueStr: "0"
  };

  return (
    <AdminShell activeTab="Partners" searchPlaceholder="Search partners...">
      <div className="space-y-6">
        {/* ================= STATS CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {[
            { title: "Total BSPs", value: statsMetrics.total, icon: Building2, badge: "All Nodes", badgeColor: "text-slate-600 bg-slate-50", bgColor: "bg-slate-50/70", filterValue: "All" },
            { title: "Active Entities", value: statsMetrics.active, icon: ShieldCheck, badge: "Live", badgeColor: "text-green-600 bg-green-50", bgColor: "bg-emerald-50/40", filterValue: "Active" },
            { title: "Pending Approval", value: statsMetrics.pending, icon: Clock3, badge: "Review", badgeColor: "text-orange-600 bg-orange-50", bgColor: "bg-amber-50/40", filterValue: "Pending" },
            { title: "Suspended", value: statsMetrics.suspended, icon: Ban, badge: "Alert", badgeColor: "text-red-600 bg-red-50", bgColor: "bg-rose-50/40", filterValue: "Suspended" },
            { title: "Compliance Rate", value: statsMetrics.complianceRate, icon: FileCheck, badge: "Stable", badgeColor: "text-blue-600 bg-blue-50", bgColor: "bg-blue-50/40", filterValue: "All" },
            { title: "Total Volume", value: statsMetrics.revenueStr, icon: DollarSign, badge: "INR Raw", badgeColor: "text-violet-600 bg-violet-50", bgColor: "bg-violet-50/40", filterValue: "All" },
          ].map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.filterValue;

            return (
              <div
                key={index}
                onClick={() => {
                  setActiveTab(item.filterValue);
                  setSelectedCity("All Cities");
                  setSelectedService("All Services");
                  setExpandedPartnerId(null);
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
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: `${75 + index * 3}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DIRECTORY TABLE & FILTER HEADER ================= */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">Provider Management</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">BSP Directory</h2>
              <p className="mt-0.5 text-sm text-slate-400">Monitor all business service providers network metrics</p>
            </div>
            <button 
              onClick={() => alert("Advanced filters panel opened.")} 
              className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 transition"
            >
              <Filter size={16} />
              Advanced Filters
            </button>
          </div>

          {/* KYC Features Module */}
          <div className="p-6 border-b border-slate-200 bg-slate-50/50">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white text-sm font-bold shadow-sm">BSP</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Business Service Provider</h3>
                  <p className="text-xs text-slate-500">Corporate & SME Dedicated Infrastructure Network Partner</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Required Verification Blueprint</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {["Aadhaar Signature", "Corporate PAN", "GSTIN Mapping", "Business Registration Certificate"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                      <span className="text-xs font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Filter Header (Tabs + Dropdowns) */}
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/30">
            <div className="flex items-center gap-4 relative">
              <div className="flex rounded-xl bg-slate-200/60 p-0.5 text-xs font-semibold">
                {["All", "Active", "Pending", "Suspended"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedCity("All Cities");
                      setSelectedService("All Services");
                      setExpandedPartnerId(null);
                    }}
                    className={`rounded-lg px-4 py-1.5 transition ${
                      activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* DYNAMIC CITIES DROPDOWN */}
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

              {/* DYNAMIC SERVICE TYPE DROPDOWN */}
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

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-4">Business</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Service Type</th>
                  <th className="px-6 py-4">Revenue Volume</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Verification Desk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredPartners.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400 font-medium">
                      No service providers found matching the selected filtering index parameters.
                    </td>
                  </tr>
                ) : (
                  filteredPartners.map((partner) => {
                    const isExpanded = expandedPartnerId === partner.id;

                    return (
                      <React.Fragment key={partner.id}>
                        {/* Primary Row Entry */}
                        <tr className={`hover:bg-slate-50/80 transition duration-150 ${isExpanded ? 'bg-indigo-50/10' : ''}`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-700 border border-slate-200/40">
                                {partner.name.charAt(0)}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-slate-900">{partner.name}</span>
                                  {partner.isTopRated && (
                                    <span className="inline-flex items-center gap-0.5 rounded-md bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 text-[9px] font-extrabold tracking-wider text-amber-700 uppercase">
                                      Top Rated
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs font-mono font-medium text-slate-400">{partner.id}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-semibold text-slate-700">{partner.city}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                              <Briefcase size={12} className="text-slate-400" />
                              {partner.serviceType || "Corporate Lease"}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-bold text-slate-800">{formatIndianCurrency(partner.revenue || partner.walletBalance)}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md border ${
                              partner.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                              partner.status === "Pending" ? "bg-amber-50 text-amber-700 border-amber-200" :
                              "bg-rose-50 text-rose-700 border-rose-200"
                            }`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${
                                partner.status === "Active" ? "bg-emerald-500" :
                                partner.status === "Pending" ? "bg-amber-500" : "bg-rose-500"
                              }`} />
                              {partner.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => togglePartnerKyc(partner.id)}
                              className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-xl border text-xs font-bold transition shadow-sm active:scale-95 ${
                                isExpanded 
                                  ? "bg-slate-800 border-slate-900 text-white hover:bg-slate-900" 
                                  : "bg-white border-slate-200 text-indigo-600 hover:bg-slate-50"
                              }`}
                            >
                              {isExpanded ? "Close Console" : "Review KYC"}
                              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                          </td>
                        </tr>

                        {/* Nested Expandable Compliance Sub-Grid */}
                        {isExpanded && (
                          <tr>
                            <td colSpan="6" className="bg-slate-50/50 px-8 py-6 border-l-2 border-indigo-500 animate-in fade-in slide-in-from-top-2 duration-200">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                
                                {/* Left Sub-Section: Personal Identity Proofs */}
                                <div>
                                  <div className="flex items-center gap-1.5 mb-3">
                                    <UserCheck size={14} className="text-indigo-500" />
                                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Personal Signatory Proofs</h4>
                                  </div>
                                  <div className="space-y-2">
                                    <KycDocumentRow 
                                      label="Aadhaar Signature" 
                                      docData={partner.personalKyc?.aadhaar} 
                                      onClick={() => openKycModal(partner.id, "personalKyc", "aadhaar", "Aadhaar Signature Profile")} 
                                    />
                                    <KycDocumentRow 
                                      label="Individual PAN Verification" 
                                      docData={partner.personalKyc?.pan} 
                                      onClick={() => openKycModal(partner.id, "personalKyc", "pan", "Individual PAN Matrix")} 
                                    />
                                  </div>
                                </div>

                                {/* Right Sub-Section: Corporate Entity Credentials */}
                                <div>
                                  <div className="flex items-center gap-1.5 mb-3">
                                    <Building2 size={14} className="text-indigo-500" />
                                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Institutional Licensing & Tax Infrastructure</h4>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <KycDocumentRow 
                                      label="GSTIN Mapping" 
                                      docData={partner.businessKyc?.gst} 
                                      onClick={() => openKycModal(partner.id, "businessKyc", "gst", "GSTIN Realtime Gateway Mapping")} 
                                    />
                                    <KycDocumentRow 
                                      label="Corporate PAN" 
                                      docData={partner.businessKyc?.businessPan} 
                                      onClick={() => openKycModal(partner.id, "businessKyc", "businessPan", "Commercial Business PAN")} 
                                    />
                                    <KycDocumentRow 
                                      label="Incorp Certificate" 
                                      docData={partner.businessKyc?.registration} 
                                      onClick={() => openKycModal(partner.id, "businessKyc", "registration", "MCA Incorporation Registry")} 
                                    />
                                  </div>
                                </div>

                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}