import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell"; // आपका एडमिन शेल
import ExportReportModal from "../../components/common/ExportReportModal";

import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ThumbsUp,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react";

export default function PartnerReviewDashboard() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search bookings, users, or partners..."
      pageTitle="Partner Review Dashboard"
      pageSubtitle="Reviewing performance metrics, SLA compliance and service quality for partners."
    >
      {/* पूरे पेज का बैकग्राउंड अब पूरी तरह लाइट (bg-slate-50) है, कोई डार्कनेस नहीं */}
      <div className="min-h-screen bg-slate-50 font-sans text-slate-700 p-6 space-y-6">
        
        {/* ================= BREADCRUMB & SUBTITLE ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <nav className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <span className="hover:underline cursor-pointer">Partners</span>
              <span>&gt;</span>
              <span className="text-slate-600">Partner Review</span>
            </nav>
            <p className="mt-2 text-sm text-slate-500 font-medium">
              Reviewing performance metrics and service compliance for Q3 2023.
            </p>
          </div>
          
          <button 
            onClick={() => setIsExportModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition shadow-sm"
          >
            <Download size={14} />
            Export Report
          </button>
        </div>

        {/* ================= ARCHITECTURE GRID ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* LEFT & CENTER PANELS (PURE LIGHT DESIGN) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Performance Metrics Card */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                <FileText size={18} className="text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">Performance Metrics</h2>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Uptime Metric */}
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100/70">
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                      <Clock size={16} />
                    </div>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-600 gap-0.5">
                      +0.4% <ArrowUpRight size={12} />
                    </span>
                  </div>
                  <p className="mt-4 text-[11px] font-bold text-slate-400 tracking-wide uppercase">Uptime</p>
                  <p className="mt-1 text-2xl font-black text-slate-900 tracking-tight">99.98%</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "99.98%" }}></div>
                  </div>
                </div>

                {/* SLA Compliance Metric */}
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100/70">
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider px-1.5 py-0.5 bg-blue-50 border border-blue-100 rounded">
                      On Target
                    </span>
                  </div>
                  <p className="mt-4 text-[11px] font-bold text-slate-400 tracking-wide uppercase">SLA Compliance</p>
                  <p className="mt-1 text-2xl font-black text-slate-900 tracking-tight">98.5%</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "98.5%" }}></div>
                  </div>
                </div>

                {/* User Rating Metric */}
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100/70">
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-rose-50 p-2 text-rose-600">
                      <ThumbsUp size={16} />
                    </div>
                    <span className="inline-flex items-center text-xs font-bold text-rose-600 gap-0.5">
                      -0.2 <ArrowDownRight size={12} />
                    </span>
                  </div>
                  <p className="mt-4 text-[11px] font-bold text-slate-400 tracking-wide uppercase">User Rating</p>
                  <p className="mt-1 text-2xl font-black text-slate-900 tracking-tight">4.6/5</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-rose-600 rounded-full" style={{ width: "84%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Recent Incidents Table Card */}
            <div className="rounded-xl bg-white overflow-hidden shadow-sm border border-slate-100">
              <div className="flex items-center justify-between border-b border-slate-50 px-6 py-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={18} className="text-amber-500" />
                  <h2 className="text-base font-bold text-slate-900">Recent Incidents</h2>
                </div>
                <button className="text-xs font-bold text-blue-600 hover:underline transition">
                  View All History
                </button>
              </div>

              <div className="overflow-x-auto">
                <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-xs font-bold tracking-wider text-slate-400 uppercase">
                      <th className="px-6 py-3.5">Incident ID</th>
                      <th className="px-6 py-3.5">Category</th>
                      <th className="px-6 py-3.5">Resolution</th>
                      <th className="px-6 py-3.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                    <tr className="hover:bg-slate-50/40 transition">
                      <td className="px-6 py-4 whitespace-nowrap font-mono font-semibold text-blue-600">#INC-4492</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">Late Delivery (Zone B)</td>
                      <td className="px-6 py-4 text-slate-500">Resolved within 4h</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                          Resolved
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/40 transition">
                      <td className="px-6 py-4 whitespace-nowrap font-mono font-semibold text-blue-600">#INC-5021</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">Damaged Goods Claim</td>
                      <td className="px-6 py-4 text-slate-500">Full refund issued</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                          Resolved
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/40 transition">
                      <td className="px-6 py-4 whitespace-nowrap font-mono font-semibold text-blue-600">#INC-5288</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">System Integration Fault</td>
                      <td className="px-6 py-4 text-slate-500">Pending API Patch</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-600/10">
                          In Progress
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>

            {/* 3. Partner Narrative Section */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900">Partner Narrative</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Nexus Logistics has maintained high operational efficiency across coastal regions,
                though recent expansion into Denver has seen a slight dip in timeliness. The user rating
                remains above the enterprise threshold of 4.5, but a trend in damaged small-parcels
                needs addressed before contract renewal.
              </p>
              
              <div className="mt-5 rounded-lg border-l-4 border-blue-600 bg-slate-50 p-4">
                <p className="text-sm italic text-slate-700 leading-relaxed">
                  "The integration with our new ERP system was smooth, but their driver app reported
                  significant lag during peak hours."
                </p>
                <p className="mt-2 text-xs font-bold text-slate-400">— Regional Operations Head</p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT ACTION SIDE PANEL ================= */}
          <div className="space-y-6">
            
            {/* Action 1: Review Actions Form (Dark Navy Card from Image) */}
            <div className="rounded-xl bg-[#141644] p-6 shadow-md border border-indigo-950/40">
              <div className="flex items-center gap-2 border-b border-indigo-900/40 pb-4">
                <AlertCircle size={18} className="text-indigo-300" />
                <h2 className="text-base font-bold text-white">Review Actions</h2>
              </div>
              
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-indigo-300/50">
                Final Determination
              </p>

              <div className="mt-3 space-y-3">
                {/* Approve Active Card */}
                <label className="relative flex cursor-pointer items-start rounded-xl bg-white p-4 transition shadow-sm">
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-bold text-slate-900">Approve Renewal</span>
                    <span className="mt-0.5 text-xs text-slate-500">Extend contract for 12 months</span>
                  </div>
                  <input type="radio" name="determination" defaultChecked className="sr-only" />
                  <span className="ml-3 text-emerald-500">
                    <CheckCircle2 size={18} />
                  </span>
                </label>

                {/* Request Improvements Card */}
                <label className="relative flex cursor-pointer items-start rounded-xl bg-indigo-950/30 p-4 border border-indigo-900/40 hover:bg-indigo-900/20 transition">
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-bold text-indigo-200">Request Improvements</span>
                    <span className="mt-0.5 text-xs text-indigo-400/60">Issue 30-day correction notice</span>
                  </div>
                  <input type="radio" name="determination" className="sr-only" />
                </label>

                {/* Terminate Partnership Card */}
                <label className="relative flex cursor-pointer items-start rounded-xl bg-rose-600 p-4 transition text-white shadow-sm">
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-bold">Terminate Partnership</span>
                    <span className="mt-0.5 text-xs text-rose-100/80">Initiate standard 60-day offboarding</span>
                  </div>
                  <input type="radio" name="determination" className="sr-only" />
                </label>
              </div>

              <div className="mt-5">
                <label className="text-xs font-bold text-indigo-200/70">Internal Review Comments</label>
                <textarea
                  rows={4}
                  placeholder="Add a note for the auditing team..."
                  className="mt-1.5 w-full rounded-xl bg-[#0d0e30] p-3 text-sm text-slate-200 placeholder-indigo-900/50 border border-indigo-950/60 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button className="mt-4 w-full rounded-xl border border-indigo-500 bg-transparent py-2.5 text-xs font-bold text-white hover:bg-indigo-600 transition shadow-sm">
                Save Draft Comment
              </button>
            </div>

            {/* Action 2: Company Summary Profile Meta */}
            <div className="rounded-xl bg-white overflow-hidden p-5 space-y-4 shadow-sm border border-slate-100">
              <div className="relative h-32 w-full rounded-lg bg-slate-50 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
                  alt="Nexus Logistics hub"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-base font-black text-slate-900 tracking-tight">Nexus Logistics</h3>
                <p className="mt-0.5 text-xs font-medium text-slate-400">Partner since Oct 2018 • Premium Tier</p>
              </div>

              <div className="space-y-2.5 border-t border-slate-50 pt-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-bold">Primary Hub:</span>
                  <span className="font-extrabold text-slate-900">Chicago, IL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-bold">Wallet Balance:</span>
                  <span className="font-black text-emerald-600">$12,450.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-bold">Compliance Officer:</span>
                  <span className="font-extrabold text-slate-900">Marcus Thorne</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      
      <ExportReportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
        entityName="Partner Reviews" 
      />
    </AdminShell>
  );
}