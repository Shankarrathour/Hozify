import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  AlertTriangle,
  Shield,
  Clock,
  CheckCircle,
  Users,
  Network,
} from "lucide-react";

export default function InvestigationPage() {
  const { addToast } = useToast();

  return (
    <AdminShell activeTab="Referrals">
      <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

        {/* Breadcrumb */}
        <div className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-wider">
          FRAUD &gt; INVESTIGATIONS &gt; CASE-88219-F
        </div>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Incident: High-Frequency Referral Pattern
            </h1>

            <span className="inline-flex mt-2 text-[10px] font-extrabold bg-red-50 border border-red-100 text-red-650 px-2 py-0.5 rounded">
              Critical Alert
            </span>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => addToast("Request Info form modal opened for CASE-88219-F", "success")}
              className="px-3 py-1.5 text-xs font-bold border border-slate-300 rounded-lg bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
            >
              Request Info
            </button>
            <button 
              onClick={() => addToast("CASE-88219-F: Associated nodes suspended successfully", "success")}
              className="px-3 py-1.5 text-xs font-bold border border-red-200 text-red-600 rounded-lg bg-white hover:bg-red-50 transition-all cursor-pointer shadow-sm"
            >
              Suspend
            </button>
            <button 
              onClick={() => addToast("CASE-88219-F: Flagged pattern cleared and whitelisted", "success")}
              className="px-3 py-1.5 text-xs font-bold bg-indigo-650 hover:bg-indigo-700 text-white rounded-lg transition-all cursor-pointer shadow-sm"
            >
              Clear Case
            </button>
          </div>
        </div>

        {/* INCIDENT + AUDIT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {/* LEFT */}
          <div 
            onClick={() => addToast("Viewing incident threshold metrics for CASE-88219-F", "success")}
            className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md cursor-pointer transition-all"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                <AlertTriangle size={15} className="text-red-550" /> 
                <span>Incident Details</span>
              </h2>
              <span className="text-[10px] text-gray-400 font-bold">
                Detected: Oct 24, 2023 - 14:22 GMT
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Risk Score</div>
                <div className="text-3xl font-black text-red-600 mt-0.5 leading-tight">
                  94<span className="text-gray-400 text-sm font-normal">/100</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="h-1.5 bg-gray-150 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[94%]" />
                </div>
                <p className="text-[10px] text-gray-500 font-semibold mt-1">
                  High confidence automated detection
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div 
            onClick={() => addToast("Viewing detailed security audit timeline...", "success")}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md cursor-pointer transition-all"
          >
            <h2 className="font-bold text-sm text-slate-800 mb-4">Audit Trail</h2>

            <div className="space-y-4 text-xs font-semibold text-slate-650">
              <div className="flex gap-2">
                <CheckCircle className="text-green-500 mt-0.5" size={14} />
                <div>
                  <p className="font-bold">Auto-Flagged</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">14:22</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Clock className="text-blue-500 mt-0.5" size={14} />
                <div>
                  <p className="font-bold">Case Assigned</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">14:35</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RELATED ACCOUNTS ================= */}
        <div className="bg-white border border-slate-200 rounded-xl mt-6 p-5 shadow-sm">
          {/* HEADER MATCHED */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-sm text-slate-800 flex items-center gap-2">
              <Users size={15} /> 
              <span>Related Accounts (Associated Clusters)</span>
            </h2>

            <div className="flex gap-2">
              <span className="text-[10px] bg-slate-100 font-bold px-3 py-0.5 rounded-full text-slate-600">
                12 Nodes Detected
              </span>
              <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold px-3 py-0.5 rounded-full">
                Common IP Block
              </span>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[700px] border-collapse">
              <thead className="text-slate-500 border-b border-slate-100 font-bold uppercase text-[10px]">
                <tr>
                  <th className="py-2">User Account</th>
                  <th>Join Date</th>
                  <th>Referral Count</th>
                  <th>Status</th>
                  <th>Identity Verification</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {/* ROW 1 */}
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-all">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-7 h-7 bg-purple-200 rounded-full flex items-center justify-center font-bold text-xs">
                      MK
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Marcus Krauss</p>
                      <p className="text-[10px] text-gray-400">mkrauss@mail.com</p>
                    </div>
                  </td>
                  <td className="font-semibold">Oct 20, 2023</td>
                  <td className="font-bold">42</td>
                  <td>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-red-50 border border-red-100 text-red-600">
                      Flagged
                    </span>
                  </td>
                  <td>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-red-50 border border-red-100 text-red-600">
                      Failed
                    </span>
                  </td>
                  <td>
                    <button 
                      onClick={() => addToast("Opening workforce profile for Marcus Krauss...", "success")}
                      className="text-indigo-700 font-bold hover:text-indigo-900 cursor-pointer text-xs"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>

                {/* ROW 2 */}
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-all">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-200 rounded-full flex items-center justify-center font-bold text-xs">
                      JL
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Janice Liao</p>
                      <p className="text-[10px] text-gray-400">liao@mail.com</p>
                    </div>
                  </td>
                  <td className="font-semibold">Oct 22, 2023</td>
                  <td className="font-bold">1</td>
                  <td>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-yellow-50 border border-yellow-100 text-yellow-600">
                      Pending
                    </span>
                  </td>
                  <td>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-gray-50 border border-gray-200 text-gray-600">
                      In Progress
                    </span>
                  </td>
                  <td>
                    <button 
                      onClick={() => addToast("Opening workforce profile for Janice Liao...", "success")}
                      className="text-indigo-700 font-bold hover:text-indigo-900 cursor-pointer text-xs"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>

                {/* ROW 3 */}
                <tr className="hover:bg-slate-50 transition-all">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-7 h-7 bg-green-200 rounded-full flex items-center justify-center font-bold text-xs">
                      DR
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">David Rossi</p>
                      <p className="text-[10px] text-gray-400">rossi@mail.com</p>
                    </div>
                  </td>
                  <td className="font-semibold">Oct 23, 2023</td>
                  <td className="font-bold">28</td>
                  <td>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-red-50 border border-red-100 text-red-600">
                      Flagged
                    </span>
                  </td>
                  <td>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-red-50 border border-red-100 text-red-600">
                      Failed
                    </span>
                  </td>
                  <td>
                    <button 
                      onClick={() => addToast("Opening workforce profile for David Rossi...", "success")}
                      className="text-indigo-700 font-bold hover:text-indigo-900 cursor-pointer text-xs"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= NETWORK TOPOLOGY ================= */}
        <div className="bg-white border border-slate-200 rounded-xl mt-6 p-5 shadow-sm">
          <h2 className="font-bold flex items-center gap-2 mb-2 text-sm text-slate-800">
            <Network size={15} /> 
            <span>Network Topology Visualization</span>
          </h2>
          <p className="text-xs text-gray-550 mb-4 font-semibold">
            Mapping connections between suspicious nodes and referral hubs.
          </p>

          {/* Graph Area */}
          <div 
            onClick={() => addToast("Graph Node focus selected: High-Confidence Cluster #1", "success")}
            className="h-48 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center relative cursor-pointer hover:bg-slate-100/80 transition-all"
          >
            <div className="absolute w-20 h-20 bg-red-200 rounded-full opacity-60 animate-pulse" />
            <div className="absolute w-8 h-8 bg-indigo-200 rounded-full top-8 left-20" />
            <div className="absolute w-8 h-8 bg-green-200 rounded-full bottom-8 right-20" />

            <div className="text-xs text-slate-700 font-bold bg-white border border-slate-250 px-4 py-2 rounded-full shadow-sm">
              3 High-Confidence Clusters Detected
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}