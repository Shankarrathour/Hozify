import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

import {
  Landmark,
  Wallet,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Download,
  MoreVertical,
} from "lucide-react";

const bankingStats = [
  {
    title: "Total Settlement",
    value: "₹4.82 Cr",
    icon: Landmark,
    badge: "+12%",
    color: "text-emerald-600",
  },
  {
    title: "Pending Payouts",
    value: "₹24.5 L",
    icon: Wallet,
    badge: "128",
    color: "text-orange-500",
  },
  {
    title: "Verified Accounts",
    value: "2,512",
    icon: ShieldCheck,
    badge: "98%",
    color: "text-indigo-600",
  },
  {
    title: "Failed Transfers",
    value: "18",
    icon: AlertTriangle,
    badge: "-6%",
    color: "text-red-500",
  },
];

const partners = [
  {
    name: "SkyNet Logistics",
    id: "ID-94821",
    type: "ISP",
    balance: "₹42,500",
    threshold: "₹10,000",
    status: "On Track",
  },
  {
    name: "BlueWave Systems",
    id: "ID-44210",
    type: "BSP",
    balance: "₹1,28,400",
    threshold: "₹50,000",
    status: "Overdue",
  },
  {
    name: "Apex Pro Logistics",
    id: "ID-33109",
    type: "ISP",
    balance: "₹5,120",
    threshold: "₹10,000",
    status: "Awaiting",
  },
  {
    name: "Vertex Transit",
    id: "ID-22874",
    type: "ISP",
    balance: "₹89,230",
    threshold: "₹25,000",
    status: "Processing",
  },
];

export default function PartnerBanking() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search partners, settlements, payouts..."
    >
      <div className="space-y-8">

        {/* ================= HERO ================= */}

<div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-900 via-violet-800 to-indigo-700 p-8 text-white relative">

  <div className="absolute right-0 top-0 h-full w-full opacity-10">
    <div className="absolute right-10 top-10 h-80 w-80 rounded-full border border-white"></div>
    <div className="absolute right-24 top-24 h-56 w-56 rounded-full border border-white"></div>
  </div>

  <div className="relative z-10 flex items-center justify-between">

    <div>

      <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.3em]">
        PARTNER BANKING
      </span>

      <h1 className="mt-5 text-3xl font-bold">
        Banking & Settlement Center
      </h1>

      <p className="mt-4 max-w-3xl text-slate-200 text-lg">
        Manage partner banking profiles, settlement cycles,
        payout processing, wallet reconciliation and financial
        compliance from one centralized platform.
      </p>

      <div className="mt-8 flex gap-4">

        <button className="rounded-2xl bg-white text-indigo-700 px-6 py-3 font-semibold">
          Review Payout Queue
        </button>

        <button className="flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3">
          <Download size={18} />
          Export Report
        </button>

      </div>

    </div>

    <div className="hidden xl:block">

      <div className="rounded-3xl bg-white/10 backdrop-blur p-8">

        <p className="text-sm text-slate-300">
          SETTLEMENT SUCCESS RATE
        </p>

        <h2 className="mt-4 text-6xl font-bold text-emerald-400">
          99.4%
        </h2>

        <p className="mt-2 text-slate-300">
          Last 30 Days
        </p>

      </div>

    </div>

  </div>

</div>
{/* ================= KPI ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {bankingStats.map((item, index) => {

    const Icon = item.icon;

    return (

      <div
        key={index}
        className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
      >

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
            <Icon className="text-indigo-600" />
          </div>

          <span className={`font-bold ${item.color}`}>
            {item.badge}
          </span>

        </div>

        <p className="mt-6 text-slate-500 text-sm">
          {item.title}
        </p>

        <h3 className="mt-2 text-4xl font-bold text-slate-900">
          {item.value}
        </h3>

      </div>

    );

  })}

</div>
{/* ================= LIABILITY ================= */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  <div className="xl:col-span-2 rounded-[32px] border border-slate-200 bg-white p-8">

    <p className="text-xs font-bold tracking-[0.25em] text-indigo-600 uppercase">
      Total Partner Liabilities
    </p>

    <h2 className="mt-3 text-5xl font-bold">
      ₹14.82 Cr
    </h2>

    <div className="mt-5 flex gap-4">

      <span className="rounded-full bg-violet-100 px-4 py-2 text-violet-700 font-medium">
        ISP : ₹8.42 Cr
      </span>

      <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-medium">
        BSP : ₹6.40 Cr
      </span>

    </div>

    <div className="mt-10 flex justify-between text-sm text-slate-500">

      <span>Last Updated : 5 mins ago</span>

      <span className="font-semibold">
        Target Efficiency : 92%
      </span>

    </div>

    <div className="mt-6 h-3 rounded-full bg-slate-100 overflow-hidden">

      <div className="h-full w-[92%] bg-gradient-to-r from-violet-500 to-indigo-700 rounded-full"></div>

    </div>

  </div>

  <div className="rounded-[32px] bg-indigo-800 text-white p-8">

    <p className="text-sm uppercase tracking-wider">
      Upcoming Payouts
    </p>

    <h2 className="mt-4 text-5xl font-bold">
      ₹2.40 Cr
    </h2>

    <p className="mt-3 text-indigo-200">
      Next batch scheduled for Thursday 14:00 GMT
    </p>

    <button className="mt-8 w-full rounded-2xl bg-white py-4 font-semibold text-indigo-700">
      Review Payout Queue
    </button>

  </div>

</div>
{/* ================= TABLE ================= */}

<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">

  <div className="flex items-center justify-between border-b border-slate-200 p-6">

    <input
      placeholder="Search partner name or ID..."
      className="w-[400px] rounded-2xl border border-slate-200 px-5 py-3 outline-none"
    />

    <div className="flex gap-3">

      <button className="rounded-xl bg-indigo-600 text-white px-5 py-2">
        All
      </button>

      <button className="rounded-xl border px-5 py-2">
        ISP
      </button>

      <button className="rounded-xl border px-5 py-2">
        BSP
      </button>

    </div>

  </div>

  <table className="w-full">

    <thead className="bg-slate-50">

      <tr className="text-left text-sm text-slate-500">

        <th className="px-6 py-5">PARTNER</th>
        <th>TYPE</th>
        <th>WALLET BALANCE</th>
        <th>PAYOUT THRESHOLD</th>
        <th>SETTLEMENT STATUS</th>
        <th>ACTION</th>

      </tr>

    </thead>

    <tbody>

      {partners.map((partner) => (

        <tr
          key={partner.id}
          className="border-t border-slate-100 hover:bg-slate-50"
        >

          <td className="px-6 py-5">

            <div>

              <h4 className="font-semibold">
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

          <td>{partner.threshold}</td>

          <td>

            <span
              className={`font-medium ${
                partner.status === "On Track"
                  ? "text-green-600"
                  : partner.status === "Overdue"
                  ? "text-red-600"
                  : partner.status === "Processing"
                  ? "text-blue-600"
                  : "text-slate-500"
              }`}
            >
              ● {partner.status}
            </span>

          </td>

          <td>

            <button className="p-2 rounded-lg hover:bg-slate-100">
              <MoreVertical size={18} />
            </button>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>
{/* ================= INSIGHTS ================= */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <TrendingUp className="text-violet-600" />

    <h3 className="mt-4 font-bold text-lg">
      Liability Velocity
    </h3>

    <p className="mt-2 text-slate-500">
      Up 12.4% this quarter compared to last year.
    </p>

  </div>

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <ShieldCheck className="text-blue-600" />

    <h3 className="mt-4 font-bold text-lg">
      Compliance Status
    </h3>

    <p className="mt-2 text-slate-500">
      98% partners have valid AML/KYC certification.
    </p>

  </div>

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <AlertTriangle className="text-red-600" />

    <h3 className="mt-4 font-bold text-lg">
      Overdue Settlements
    </h3>

    <p className="mt-2 text-slate-500">
      4 partners exceeded payout threshold by 30+ days.
    </p>

  </div>

</div>

      </div>
    </AdminShell>
  );
}

      
