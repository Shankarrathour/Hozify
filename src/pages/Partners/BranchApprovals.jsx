import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell"; // Aapka AdminShell

import {
  MapPin,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Building2,
  Map,
  ShieldCheck,
  ChevronRight,
  MoreVertical,
  Check,
  FileCheck
} from "lucide-react";

export default function BranchApprovals() {
  // Mock Data: Urban Company Regional Branches / Hub Expansion Requests
  const [branches, setBranches] = useState([
    {
      id: "BRH-4401",
      branchName: "Indore South Hub",
      city: "Indore, MP",
      manager: "Aman Verma",
      capacity: "150+ Partners/Day",
      infrastructureStatus: "Verified",
      status: "Pending",
      zone: "Tier-2 Operational"
    },
    {
      id: "BRH-9022",
      branchName: "Bengaluru East (HSR)",
      city: "Bengaluru, KA",
      manager: "Megha Hegde",
      capacity: "500+ Partners/Day",
      infrastructureStatus: "Verified",
      status: "Pending",
      zone: "Tier-1 Metro"
    },
    {
      id: "BRH-1105",
      branchName: "Noida Sector 62 Center",
      city: "Delhi NCR",
      manager: "Vikram Malhotra",
      capacity: "300+ Partners/Day",
      infrastructureStatus: "Pending Audit",
      status: "Approved",
      zone: "Tier-1 Metro"
    },
    {
      id: "BRH-3312",
      branchName: "Patna Central Training Hub",
      city: "Patna, Bihar",
      manager: "Rajesh Mishra",
      capacity: "100+ Partners/Day",
      infrastructureStatus: "Rejected",
      status: "Rejected",
      zone: "Tier-3 Onboarding"
    }
  ]);

  // Handle Approve/Reject branch status
  const handleStatusChange = (id, newStatus) => {
    setBranches(prev =>
      prev.map(branch => branch.id === id ? { ...branch, status: newStatus } : branch)
    );
  };

  return (
    <AdminShell
      activeTab="Approvals"
      searchPlaceholder="Search by branch name, city, or manager..."
    >
      <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-700 p-4 md:p-8 space-y-6 overflow-x-hidden">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <nav className="text-xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
              <span>Approvals</span>
              <ChevronRight size={12} />
              <span className="text-indigo-600">Branch Approvals</span>
            </nav>
            <h1 className="mt-1 text-xl md:text-2xl font-black text-slate-900 tracking-tight">Branch Expansion Approvals</h1>
            <p className="text-xs md:text-sm text-slate-500 font-medium">
              Review setup audits, operational capacity, and activate regional training hubs or partner onboarding offices.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5 self-start sm:self-center shadow-sm">
            <Building2 size={16} className="text-indigo-600" />
            <span className="text-xs font-bold text-indigo-900">Geo-Expansion Active</span>
          </div>
        </div>

        {/* ================= METRICS COUNTERS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pending Approvals */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Awaiting Launch</p>
              <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">05 Branches</p>
              <p className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded inline-block">
                Ready for Live Sign-off
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <Map size={18} />
            </div>
          </div>

          {/* Active Branches */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Hubs</p>
              <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">42 Locations</p>
              <p className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                Covering 22+ Cities
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={18} />
            </div>
          </div>

          {/* Failed Audits */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Audits Rejected</p>
              <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">02 Sites</p>
              <p className="text-[10px] font-medium text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded inline-block">
                Safety Standards Deficit
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600">
              <XCircle size={18} />
            </div>
          </div>

          {/* Infrustructure Score */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compliance Rate</p>
              <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">96.8%</p>
              <p className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
                Standardized Layouts
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>

        {/* ================= SEARCH & FILTERS ================= */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by branch or territory..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={14} />
            Filter Tier Level
          </button>
        </div>

        {/* ================= MAIN CONTENT CONTAINER ================= */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          
          {/* DESKTOP TABLE VIEW */}
          <div className="hidden lg:block">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  <th className="w-[25%] px-6 py-4">Branch / Hub Details</th>
                  <th className="w-[18%] px-6 py-4">Territory Zone</th>
                  <th className="w-[18%] px-6 py-4">Regional Manager</th>
                  <th className="w-[15%] px-6 py-4">Max Capacity</th>
                  <th className="w-[12%] px-6 py-4">Approval Status</th>
                  <th className="w-[12%] px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-600">
                {branches.map((branch) => (
                  <tr key={branch.id} className="hover:bg-slate-50/40 transition-colors">
                    {/* Branch Info */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-bold text-slate-900 inline-flex items-center gap-1">
                          <MapPin size={14} className="text-indigo-500 flex-shrink-0" /> {branch.branchName}
                        </p>
                        <p className="text-xs text-slate-400 font-semibold mt-0.5 ml-5">{branch.id} • {branch.city}</p>
                      </div>
                    </td>

                    {/* Zone Tier */}
                    <td className="px-6 py-4 text-xs font-bold text-slate-500">
                      {branch.zone}
                    </td>

                    {/* Hub Lead */}
                    <td className="px-6 py-4 text-xs font-bold text-slate-700">
                      {branch.manager}
                    </td>

                    {/* Onboarding Capacity */}
                    <td className="px-6 py-4 text-xs font-bold text-slate-800">
                      {branch.capacity}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-bold ${
                        branch.status === "Approved" ? "bg-emerald-50 text-emerald-700" :
                        branch.status === "Rejected" ? "bg-rose-50 text-rose-700" : "bg-amber-50 text-amber-700"
                      }`}>
                        {branch.status}
                      </span>
                    </td>

                    {/* Quick Trigger Buttons */}
                    <td className="px-6 py-4 text-center">
                      {branch.status === "Pending" ? (
                        <div className="flex items-center justify-center gap-1.5">
                          <button 
                            onClick={() => handleStatusChange(branch.id, "Approved")}
                            className="bg-indigo-900 hover:bg-indigo-950 text-white text-[11px] font-bold p-1.5 rounded-lg shadow-sm transition"
                            title="Approve Hub Launch"
                          >
                            <Check size={14} />
                          </button>
                          <button 
                            onClick={() => handleStatusChange(branch.id, "Rejected")}
                            className="border border-slate-200 hover:bg-rose-50 hover:text-rose-600 text-slate-600 p-1.5 rounded-lg transition"
                            title="Reject & Flag Setup"
                          >
                            <XCircle size={14} />
                          </button>
                        </div>
                      ) : (
                        <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"><MoreVertical size={16} /></button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE RESPONSIVE LIST VIEW */}
          <div className="block lg:hidden divide-y divide-slate-100">
            {branches.map((branch) => (
              <div key={branch.id} className="p-4 space-y-3 hover:bg-slate-50/30 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      <MapPin size={14} className="text-indigo-500" /> {branch.branchName}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5 ml-5">{branch.id} • {branch.city}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-bold ${
                    branch.status === "Approved" ? "bg-emerald-50 text-emerald-700" :
                    branch.status === "Rejected" ? "bg-rose-50 text-rose-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {branch.status}
                  </span>
                </div>

                <div className="bg-slate-50/60 p-3 rounded-lg text-xs font-semibold space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-wider">Zone Tier</p>
                      <p className="text-slate-700 mt-0.5">{branch.zone}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-wider">Manager</p>
                      <p className="text-slate-800 mt-0.5">{branch.manager}</p>
                    </div>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200/50 flex justify-between items-center">
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider">Max Load Capacity</span>
                    <span className="text-slate-900 font-bold">{branch.capacity}</span>
                  </div>
                </div>

                {branch.status === "Pending" && (
                  <div className="flex items-center gap-2 pt-1">
                    <button 
                      onClick={() => handleStatusChange(branch.id, "Approved")}
                      className="flex-1 bg-indigo-900 text-white text-xs font-bold py-2 rounded-lg text-center shadow-sm"
                    >
                      Approve Launch
                    </button>
                    <button 
                      onClick={() => handleStatusChange(branch.id, "Rejected")}
                      className="flex-1 border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded-lg text-center hover:bg-rose-50 hover:text-rose-600"
                    >
                      Reject Site
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Infrastructure Footer Accent */}
          <div className="bg-slate-50/50 px-6 py-3 border-t border-slate-100 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
            <FileCheck size={14} className="text-slate-400 flex-shrink-0" />
            <span>Note: Branch activation enables geofencing for target pin-codes, allowing localized partner matching instantly.</span>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}