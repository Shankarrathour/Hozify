import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Filter,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function ApprovalRow({
  image,
  name,
  email,
  date,
  type,
  status,
  priority,
  action,
}) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">

          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-lg object-cover"
          />

          <div>
            <p className="text-sm font-bold text-slate-900">
              {name}
            </p>

            <p className="text-xs text-slate-500">
              {email}
            </p>
          </div>

        </div>
      </td>

      <td className="px-4 py-4 text-xs text-slate-600">
        {date}
      </td>

      <td className="px-4 py-4">
        <span className="px-2 py-1 bg-slate-100 rounded-full text-[10px] font-bold">
          {type}
        </span>
      </td>

      <td className="px-4 py-4">

        <div className="flex items-center gap-2">

          <Clock size={12} />

          <span className="text-xs font-medium">
            {status}
          </span>

        </div>

      </td>

      <td className="px-4 py-4">

        <div className="flex gap-2">

          {action === "review" ? (
            <button className="bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-bold">
              Review
            </button>
          ) : (
            <>
              <button className="bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-bold">
                Approve
              </button>

              <button className="border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold">
                Reject
              </button>
            </>
          )}

        </div>

      </td>

    </tr>
  );
}
export default function UserApprovalPage() {
  return (
    <AdminShell
      activeTab="Users"
      searchPlaceholder="Search bookings, users, or partners..."
    >
      <div className="p-6 bg-slate-50 min-h-screen">

        {/* PAGE HEADER */}

        <div className="flex justify-between items-start mb-6">

          <div>
            <h1 className="text-4xl font-black text-slate-900">
              User Approvals (KYC)
            </h1>

            <p className="text-slate-500 mt-2">
              Manage and verify pending identity documentation for new accounts.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 border border-slate-300 px-4 py-2 rounded-xl bg-white text-sm font-semibold">
              <Filter size={14} />
              Filter
            </button>

            <button className="flex items-center gap-2 border border-slate-300 px-4 py-2 rounded-xl bg-white text-sm font-semibold">
              <Download size={14} />
              Export CSV
            </button>

          </div>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs uppercase text-slate-400 font-bold">
              Pending Total
            </p>

            <h2 className="text-4xl font-black text-slate-900 mt-3">
              124
            </h2>

            <p className="text-xs text-indigo-600 mt-2">
              ↑ 12% from yesterday
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs uppercase text-slate-400 font-bold">
              Avg Processing Time
            </p>

            <h2 className="text-4xl font-black text-slate-900 mt-3">
              4.2
            </h2>

            <p className="text-xs text-rose-500 mt-2">
              ↓ 0.5 hrs target
            </p>
          </div>

          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 shadow-sm">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs uppercase font-bold text-emerald-700">
                  Verified Today
                </p>

                <h2 className="text-5xl font-black text-emerald-700 mt-3">
                  48
                </h2>
              </div>

              <CheckCircle2
                size={22}
                className="text-emerald-600"
              />

            </div>

            <div className="h-2 bg-emerald-200 rounded-full mt-5">
              <div className="h-2 bg-emerald-500 rounded-full w-4/5"></div>
            </div>

          </div>

          <div className="bg-rose-50 p-5 rounded-2xl border border-rose-100 shadow-sm">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs uppercase font-bold text-rose-700">
                  Escalated
                </p>

                <h2 className="text-5xl font-black text-rose-700 mt-3">
                  7
                </h2>
              </div>

              <AlertCircle
                size={22}
                className="text-rose-600"
              />

            </div>

            <div className="h-2 bg-rose-200 rounded-full mt-5">
              <div className="h-2 bg-rose-500 rounded-full w-1/4"></div>
            </div>

          </div>

        </div>
                {/* VERIFICATION QUEUE */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          {/* TABLE HEADER */}

          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">

            <h3 className="text-xl font-black text-slate-900">
              Verification Queue
            </h3>

            <div className="flex items-center gap-5 text-xs">

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-700"></span>
                <span className="text-slate-500 font-medium">
                  Priority
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="text-slate-500 font-medium">
                  Standard
                </span>
              </div>

            </div>

          </div>

          {/* TABLE */}

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead className="bg-slate-50">

                <tr>

                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-slate-500">
                    User Profile
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-slate-500">
                    Submission Date
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-slate-500">
                    Type
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-slate-500">
                    Doc Status
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-slate-500">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                <ApprovalRow
                  image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200"
                  name="Alexander Thorne"
                  email="alex.thorne@provider.com"
                  date="Oct 24, 2023 • 14:20"
                  type="Personal"
                  status="Blurred Scan • Action Required"
                  priority={true}
                  action="review"
                />

                <ApprovalRow
                  image="https://randomuser.me/api/portraits/women/44.jpg"
                  name="Sarah Jenkins"
                  email="s.jenkins@enterprise.io"
                  date="Oct 24, 2023 • 15:05"
                  type="Business"
                  status="Pending Review"
                  priority={false}
                  action="approve"
                />

                <ApprovalRow
                  image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"
                  name="Marcus Vane"
                  email="m.vane@consultancy.net"
                  date="Oct 24, 2023 • 15:12"
                  type="Personal"
                  status="Pending Review"
                  priority={false}
                  action="approve"
                />

                <ApprovalRow
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                  name="Emily Carter"
                  email="e.carter@business.com"
                  date="Oct 24, 2023 • 15:22"
                  type="Business"
                  status="Pending Review"
                  priority={false}
                  action="approve"
                />

              </tbody>

            </table>

          </div>
                    {/* FOOTER */}

          <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100">

            <p className="text-xs text-slate-500">
              Showing 1 - 4 of 124 requests
            </p>

            <div className="flex gap-2">

              <button className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-500">
                Previous
              </button>

              <button className="px-4 py-2 bg-indigo-950 text-white rounded-lg text-xs font-semibold">
                Next
              </button>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}