import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Search,
  Filter,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const walletPartners = [
  {
    name: "SkyNet Logistics",
    id: "ID-94821",
    type: "ISP",
    balance: "$42,500.00",
    threshold: "$10,000.00",
    status: "On Track",
  },
  {
    name: "BlueWave Systems",
    id: "ID-44210",
    type: "BSP",
    balance: "$128,400.12",
    threshold: "$50,000.00",
    status: "Overdue",
  },
  {
    name: "Apex Pro Logistics",
    id: "ID-33109",
    type: "ISP",
    balance: "$5,120.00",
    threshold: "$10,000.00",
    status: "Awaiting",
  },
  {
    name: "Vertex Transit",
    id: "ID-22874",
    type: "ISP",
    balance: "$89,230.50",
    threshold: "$25,000.00",
    status: "Processing",
  },
];

export default function PartnerWallets() {
  return (
    <AdminShell
      activeTab="Partner Wallets"
      searchPlaceholder="Search wallets..."
    >
      <div className="space-y-6">

        {/* TOP CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8">

            <p className="text-sm font-semibold text-slate-500">
              TOTAL PARTNER LIABILITIES
            </p>

            <h2 className="mt-3 text-5xl font-bold text-slate-900">
              $1,482,905.42
            </h2>

            <div className="mt-5 flex gap-3">

              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                ISP: $842,000
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                BSP: $640,905
              </span>

            </div>

            <div className="mt-10 flex justify-between text-sm text-slate-500">

              <span>Last updated: 5 mins ago</span>

              <span className="font-semibold">
                Target Efficiency: 92%
              </span>

            </div>

            <div className="mt-6 h-2 rounded-full bg-slate-100">

              <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-blue-600" />

            </div>

          </div>

          <div className="rounded-3xl bg-indigo-700 p-8 text-white">

            <p className="text-sm font-semibold">
              UPCOMING PAYOUTS
            </p>

            <h3 className="mt-3 text-5xl font-bold">
              $240,150
            </h3>

            <p className="mt-3 text-indigo-100">
              Next batch scheduled for Thursday, 14:00 GMT
            </p>

            <button className="mt-10 w-full rounded-2xl bg-white py-4 font-semibold text-slate-900">
              Review Payout Queue
            </button>

          </div>

        </div>
        {/* SEARCH + FILTERS */}

<div className="rounded-3xl border border-slate-200 bg-white p-5">

  <div className="flex flex-wrap items-center justify-between gap-4">

    <div className="relative w-full max-w-lg">

      <Search
        size={18}
        className="absolute left-4 top-4 text-slate-400"
      />

      <input
        placeholder="Search by partner name or ID..."
        className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none"
      />

    </div>

    <div className="flex gap-2">

      <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white">
        All
      </button>

      <button className="rounded-xl border border-slate-200 px-5 py-3">
        ISP
      </button>

      <button className="rounded-xl border border-slate-200 px-5 py-3">
        BSP
      </button>

      <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3">
        <Filter size={16} />
        Filters
      </button>

    </div>

  </div>

</div>

{/* WALLET TABLE */}

<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

  <div className="border-b border-slate-200 p-6">

    <h2 className="text-2xl font-bold text-slate-900">
      Partner Wallet Registry
    </h2>

    <p className="mt-1 text-slate-500">
      Monitor balances, liabilities and payouts
    </p>

  </div>

  <div className="overflow-x-auto">

    <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

      <thead className="bg-slate-50">

        <tr className="text-left text-sm text-slate-500">

          <th className="px-6 py-5">PARTNER</th>
          <th>TYPE</th>
          <th>BALANCE</th>
          <th>THRESHOLD</th>
          <th>STATUS</th>

        </tr>

      </thead>

      <tbody>

        {walletPartners.map((partner) => (

          <tr
            key={partner.id}
            className="border-t border-slate-100 hover:bg-slate-50"
          >

            <td className="px-6 py-5">

              <div>

                <h4 className="font-semibold text-slate-900">
                  {partner.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {partner.id}
                </p>

              </div>

            </td>

            <td>{partner.type}</td>

            <td className="font-semibold">
              {partner.balance}
            </td>

            <td>
              {partner.threshold}
            </td>

            <td>

              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  partner.status === "On Track"
                    ? "bg-green-100 text-green-700"
                    : partner.status === "Overdue"
                    ? "bg-red-100 text-red-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {partner.status}
              </span>

            </td>

          </tr>

        ))}

      </tbody>

    </table></div>

  </div>

</div>
{/* ANALYTICS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="rounded-3xl border border-slate-200 bg-white p-6">

    <div className="flex items-center gap-3">

      <TrendingUp className="text-indigo-600" />

      <h3 className="text-xl font-bold">
        Liability Velocity
      </h3>

    </div>

    <p className="mt-4 text-slate-500">
      Liability growth increased by
      12.4% compared to the previous quarter.
    </p>

    <h4 className="mt-6 text-4xl font-bold text-slate-900">
      +12.4%
    </h4>

  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-6">

    <div className="flex items-center gap-3">

      <ShieldCheck className="text-green-600" />

      <h3 className="text-xl font-bold">
        Compliance Status
      </h3>

    </div>

    <p className="mt-4 text-slate-500">
      Active wallet compliance and
      verification across partner network.
    </p>

    <h4 className="mt-6 text-4xl font-bold text-green-600">
      98%
    </h4>

  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-6">

    <div className="flex items-center gap-3">

      <AlertTriangle className="text-red-600" />

      <h3 className="text-xl font-bold">
        Overdue Settlements
      </h3>

    </div>

    <p className="mt-4 text-slate-500">
      Partners exceeding settlement
      thresholds beyond expected cycle.
    </p>

    <h4 className="mt-6 text-4xl font-bold text-red-600">
      04
    </h4>

  </div>

</div>
</div>
    </AdminShell>
  );
}