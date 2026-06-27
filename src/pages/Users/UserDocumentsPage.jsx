import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  ShieldCheck,
  Send,
  FileText,
  Clock,
  AlertTriangle,
  MoreHorizontal,
  Eye,
} from "lucide-react";

function DocumentRow({
  name,
  id,
  status,
  expiry,
  action,
  statusColor,
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-400">{id}</p>
        </div>
      </td>

      <td className="px-4 py-3">
        <span
          className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusColor}`}
        >
          {status}
        </span>
      </td>

      <td className="px-4 py-3 text-xs text-slate-500">
        {expiry}
      </td>

      <td className="px-4 py-3">
        <button className="bg-indigo-950 text-white text-[10px] px-3 py-1 rounded-lg font-bold">
          {action}
        </button>
      </td>
    </tr>
  );
}
export default function UserDocumentsPage() {
  return (
    <AdminShell
      activeTab="Users"
      searchPlaceholder="Search user ID, document or reference..."
    >
      <div className="p-6 bg-slate-50 min-h-screen">

        {/* USER HEADER */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
                alt="user"
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">
                    Marcus Richardson
                  </h2>

                  <span className="bg-indigo-950 text-white text-[10px] px-2 py-1 rounded">
                    PREMIUM TIER
                  </span>
                </div>

                <p className="text-sm text-slate-500 mt-1">
                  Business Account • User ID: MZ-9721
                </p>

                <div className="flex gap-3 mt-3">

                  <button className="bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                    <ShieldCheck size={14} />
                    Verify Identity
                  </button>

                  <button className="border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                    <Send size={14} />
                    Send Message
                  </button>

                </div>
              </div>

            </div>

            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase">
                Account Status
              </p>

              <p className="text-sm font-bold text-emerald-600">
                Active Account
              </p>
            </div>

          </div>

        </div>
                {/* STATS CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Total Documents
                </p>

                <h3 className="text-4xl font-black text-slate-900 mt-2">
                  08
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <FileText size={22} />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Pending Approval
                </p>

                <h3 className="text-4xl font-black text-amber-600 mt-2">
                  02
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Clock size={22} />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Expired Docs
                </p>

                <h3 className="text-4xl font-black text-rose-600 mt-2">
                  01
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                <AlertTriangle size={22} />
              </div>

            </div>
          </div>

        </div>
                {/* MAIN CONTENT */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">

          {/* DOCUMENT VAULT */}

          <div className="lg:col-span-3">

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">

                <h3 className="text-lg font-black text-slate-900">
                  Document Vault
                </h3>

                <button className="text-slate-400 hover:text-slate-700">
                  <MoreHorizontal size={18} />
                </button>

              </div>

              <div className="overflow-x-auto">

                <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

                  <thead className="bg-slate-50">

                    <tr>

                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">
                        Document
                      </th>

                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">
                        Status
                      </th>

                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">
                        Expiry Date
                      </th>

                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">
                        Action
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <DocumentRow
                      name="National Identity Card"
                      id="ID-992871"
                      status="VERIFIED"
                      expiry="12 Dec 2028"
                      action="VIEW"
                      statusColor="bg-emerald-100 text-emerald-700"
                    />

                    <DocumentRow
                      name="International Passport"
                      id="PASS-778281"
                      status="PENDING"
                      expiry="14 Jan 2030"
                      action="REVIEW"
                      statusColor="bg-amber-100 text-amber-700"
                    />

                    <DocumentRow
                      name="Business License"
                      id="LIC-218819"
                      status="EXPIRED"
                      expiry="01 Nov 2024"
                      action="REMIND"
                      statusColor="bg-rose-100 text-rose-700"
                    />

                    <DocumentRow
                      name="Utility Bill"
                      id="UB-112920"
                      status="VERIFIED"
                      expiry="10 Jul 2027"
                      action="VIEW"
                      statusColor="bg-emerald-100 text-emerald-700"
                    />

                  </tbody>

                </table></div>

              </div>

              <div className="px-5 py-4 border-t border-slate-100 flex justify-between items-center">

                <p className="text-xs text-slate-400">
                  Showing 4 of 8 documents
                </p>

                <button className="text-xs font-bold text-indigo-600 hover:underline">
                  View All Documents
                </button>

              </div>

            </div>

          </div>
                    {/* RIGHT SIDEBAR */}

          <div className="space-y-5">

            {/* ACTIVITY HISTORY */}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

              <h3 className="text-lg font-black text-slate-900 mb-5">
                Activity History
              </h3>

              <div className="space-y-5">

                <div className="border-l-4 border-emerald-500 pl-3">
                  <p className="text-sm font-bold text-slate-900">
                    Auto Verification Complete
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Utility Bill successfully verified.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Today • 09:42 AM
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-3">
                  <p className="text-sm font-bold text-slate-900">
                    Passport Submitted
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Waiting for manual review.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Yesterday • 05:14 PM
                  </p>
                </div>

                <div className="border-l-4 border-rose-500 pl-3">
                  <p className="text-sm font-bold text-slate-900">
                    License Expired
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Business License needs renewal.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    3 Days Ago
                  </p>
                </div>

              </div>

              <button className="w-full mt-5 border border-slate-300 rounded-xl py-2 text-xs font-bold hover:bg-slate-50">
                View Full Audit Log
              </button>

            </div>

            {/* KYC HEALTH SCORE */}

            <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 rounded-2xl p-5 text-white shadow-lg">

              <p className="text-xs uppercase tracking-widest text-indigo-200 font-bold">
                KYC HEALTH SCORE
              </p>

              <div className="flex items-center justify-between mt-5">

                <div>
                  <h2 className="text-5xl font-black">
                    82%
                  </h2>

                  <p className="text-xs text-indigo-200 mt-2">
                    +5% This Month
                  </p>
                </div>

                <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center font-black text-xl">
                  82
                </div>

              </div>

              <p className="text-sm text-indigo-100 mt-5 leading-relaxed">
                Verification almost complete.
                Only passport review remains pending.
              </p>

              <button className="w-full mt-5 bg-white text-indigo-950 py-3 rounded-xl font-bold text-sm">
                Expedite Process
              </button>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}