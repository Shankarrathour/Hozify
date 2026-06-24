import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Download,
  Plus,
  MoreVertical,
} from "lucide-react";

function StatusBadge({ status }) {
  const styles = {
    SUCCESSFUL: "bg-emerald-100 text-emerald-700",
    PENDING: "bg-amber-100 text-amber-700",
    REJECTED: "bg-rose-100 text-rose-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function ReferralRow({
  id,
  initials,
  referrer,
  referee,
  campaign,
  date,
  status,
  amount,
}) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">

      <td className="px-4 py-5 font-bold text-indigo-800">
        {id}
      </td>

      <td className="px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">
            {initials}
          </div>

          <span className="text-sm font-medium text-slate-700">
            {referrer}
          </span>
        </div>
      </td>

      <td className="px-4 py-5 text-sm text-slate-700">
        {referee}
      </td>

      <td className="px-4 py-5">
        <span className="bg-indigo-50 text-indigo-700 text-[10px] px-2 py-1 rounded font-bold uppercase">
          {campaign}
        </span>
      </td>

      <td className="px-4 py-5 text-sm text-slate-600">
        {date}
      </td>

      <td className="px-4 py-5">
        <StatusBadge status={status} />
      </td>

      <td className="px-4 py-5 font-bold text-slate-900">
        {amount}
      </td>

      <td className="px-4 py-5">
        <button>
          <MoreVertical size={16} />
        </button>
      </td>

    </tr>
  );
}
export default function ReferralListingPage() {
  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="p-4 md:p-6 lg:p-8 bg-slate-100 min-h-screen">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

          <div>
            <h1 className="text-4xl font-black text-indigo-950">
              Referral Listing
            </h1>

            <p className="text-slate-600 mt-2">
              Manage and monitor all individual referral transactions across active campaigns.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded-xl font-semibold">
              <Download size={14}/>
              Export CSV
            </button>

            <button className="flex items-center gap-2 bg-indigo-900 text-white px-4 py-2 rounded-xl font-semibold">
              <Plus size={14}/>
              Create Referral
            </button>

          </div>

        </div>

        {/* FILTERS */}

        <div className="bg-white border border-slate-300 rounded-2xl p-4 mb-5">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
              <option>All Statuses</option>
            </select>

            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />

            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />

            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
              <option>All Campaigns</option>
            </select>

            <button className="text-indigo-700 font-semibold text-sm">
              Clear All Filters
            </button>

          </div>

        </div>
                <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-md">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead className="bg-slate-100">

                <tr>

                  <th className="px-4 py-4 text-left text-xs">REFERRAL ID</th>
                  <th className="px-4 py-4 text-left text-xs">REFERRER NAME</th>
                  <th className="px-4 py-4 text-left text-xs">REFEREE NAME</th>
                  <th className="px-4 py-4 text-left text-xs">CAMPAIGN</th>
                  <th className="px-4 py-4 text-left text-xs">DATE</th>
                  <th className="px-4 py-4 text-left text-xs">STATUS</th>
                  <th className="px-4 py-4 text-left text-xs">REWARD</th>
                  <th className="px-4 py-4 text-left text-xs">ACTIONS</th>

                </tr>

              </thead>

              <tbody>

                <ReferralRow
                  id="#REF-88421"
                  initials="JD"
                  referrer="Jane Doe"
                  referee="Michael Smith"
                  campaign="Summer Growth"
                  date="Oct 12, 2023"
                  status="SUCCESSFUL"
                  amount="$50.00"
                />

                <ReferralRow
                  id="#REF-88419"
                  initials="RK"
                  referrer="Robert King"
                  referee="Sarah Wilson"
                  campaign="Q3 Loyalty"
                  date="Oct 11, 2023"
                  status="PENDING"
                  amount="$25.00"
                />

                <ReferralRow
                  id="#REF-88415"
                  initials="EL"
                  referrer="Elena Lopez"
                  referee="Chris Jordan"
                  campaign="Summer Growth"
                  date="Oct 10, 2023"
                  status="REJECTED"
                  amount="$0.00"
                />

                <ReferralRow
                  id="#REF-88408"
                  initials="AW"
                  referrer="Alex Wong"
                  referee="Samantha Reed"
                  campaign="Influencer Tier 1"
                  date="Oct 09, 2023"
                  status="SUCCESSFUL"
                  amount="$100.00"
                />

              </tbody>

            </table>

          </div>
                    <div className="flex flex-col md:flex-row justify-between items-center p-4 border-t border-slate-200">

            <p className="text-sm text-slate-500">
              Showing 1 to 5 of 1,248 referrals
            </p>

            <div className="flex gap-2 mt-3 md:mt-0">

              <button className="w-8 h-8 border rounded">1</button>
              <button className="w-8 h-8 border rounded">2</button>
              <button className="w-8 h-8 border rounded">3</button>

            </div>

          </div>

        </div>

        {/* SUMMARY CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

          <div className="bg-indigo-900 text-white rounded-2xl p-6">
            <p className="uppercase text-xs tracking-widest opacity-70">
              Total Paid Rewards
            </p>

            <h2 className="text-4xl font-black mt-3">
              $42,850
            </h2>

            <p className="text-sm mt-4 opacity-70">
              ↑ 12% increase from last month
            </p>
          </div>

          <div className="bg-white border border-slate-300 rounded-2xl p-6">
            <p className="uppercase text-xs tracking-widest text-slate-500">
              Conversion Rate
            </p>

            <h2 className="text-4xl font-black mt-3 text-slate-900">
              24.8%
            </h2>

            <div className="h-2 bg-slate-100 rounded-full mt-5">
              <div className="h-2 bg-indigo-700 rounded-full w-1/3"></div>
            </div>
          </div>

          <div className="bg-white border border-slate-300 rounded-2xl p-6">
            <p className="uppercase text-xs tracking-widest text-slate-500">
              Pending Verification
            </p>

            <h2 className="text-4xl font-black mt-3 text-slate-900">
              156
            </h2>

            <button className="w-full mt-5 border border-slate-300 py-2 rounded-lg font-semibold">
              Action Required
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}