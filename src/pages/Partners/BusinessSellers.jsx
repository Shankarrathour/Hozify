import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import ExportReportModal from "../../components/common/ExportReportModal";

import {
  Store,
  Users,
  Building2,
  Wallet,
  BadgeCheck,
  Clock3,
  Download,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Business Sellers",
    value: "2,846",
    icon: Store,
    badge: "+14%",
    color: "text-emerald-600",
  },
  {
    title: "Verified Sellers",
    value: "2,512",
    icon: BadgeCheck,
    badge: "88%",
    color: "text-blue-600",
  },
  {
    title: "Pending Personal KYC",
    value: "84",
    icon: Clock3,
    badge: "Review",
    color: "text-orange-500",
  },
  {
    title: "Active Branches",
    value: "864",
    icon: Building2,
    badge: "Live",
    color: "text-indigo-600",
  },
  {
    title: "Employees",
    value: "5,428",
    icon: Users,
    badge: "+9%",
    color: "text-violet-600",
  },
  {
    title: "Wallet Balance",
    value: "₹1.82Cr",
    icon: Wallet,
    badge: "Secure",
    color: "text-green-600",
  },
];

const sellers = [
  {
    id: "BS-1001",
    business: "Apex Industrial Solutions",
    owner: "Rahul Sharma",
    personalKyc: "Verified",
    businessKyc: "Verified",
    branches: 12,
    employees: 84,
    status: "Active",
  },
  {
    id: "BS-1002",
    business: "Urban Build Supplies",
    owner: "Amit Verma",
    personalKyc: "Pending",
    businessKyc: "Verified",
    branches: 8,
    employees: 52,
    status: "Pending",
  },
  {
    id: "BS-1003",
    business: "Prime Home Essentials",
    owner: "Rakesh Singh",
    personalKyc: "Verified",
    businessKyc: "Pending",
    branches: 5,
    employees: 31,
    status: "Review",
  },
];

export default function BusinessSellers() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search business sellers..."
      pageTitle="Business Seller Operations"
      pageSubtitle="Monitor and manage all registered business sellers, their compliance, revenue and activity."
    >
      <div className="space-y-8">

        {/* Hero Section */}

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          <div className="absolute right-0 top-0 h-full w-[400px] opacity-20">
            <div className="absolute right-10 top-10 h-64 w-64 rounded-full border border-indigo-400"></div>
            <div className="absolute right-24 top-24 h-44 w-44 rounded-full border border-indigo-400"></div>
          </div>

          <div className="relative z-10 flex items-center justify-between">

            <div>

              <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold tracking-[0.25em] text-indigo-700">
                BUSINESS SELLER 
              </span>

              <h1 className="mt-6 text-3xl font-bold text-slate-900">
                Business Seller Operations
              </h1>

              <p className="mt-4 max-w-3xl text-lg text-slate-600">
                Manage business sellers, KYC verification,
                service mapping, branch operations,
                employee management and wallet monitoring
                from a centralized platform.
              </p>

              <div className="mt-8 flex gap-4">

                {/* <button className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
                  <Plus size={18} />
                  Add Business Seller
                </button> */}

                <button 
                  onClick={() => setIsExportModalOpen(true)}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 px-6 py-3 font-medium hover:bg-slate-50"
                >
                  <Download size={18} />
                  Export Report
                </button>

              </div>

            </div>

            <div className="hidden xl:block">

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

                <p className="text-sm text-slate-500">
                  VERIFICATION STATUS
                </p>

                <h2 className="mt-4 text-6xl font-bold text-emerald-500">
                  96%
                </h2>

                <p className="mt-2 text-slate-600">
                  Overall Approval Rate
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
                    <Icon
                      size={24}
                      className="text-indigo-600"
                    />
                  </div>

                  <span className={`font-bold ${item.color}`}>
                    {item.badge}
                  </span>

                </div>

                <p className="mt-6 text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

              </div>
            );
          })}

        </div>
        {/* ================= BUSINESS SELLER REGISTRY ================= */}

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-slate-200 p-6">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
                Seller Registry
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Business Seller Directory
              </h2>

              <p className="mt-1 text-slate-500">
                Manage seller verification, branches and employee records
              </p>

            </div>

            <button className="rounded-2xl border border-slate-200 px-5 py-3 font-medium hover:bg-slate-50">
              Advanced Filters
            </button>

          </div>

          {/* Filters */}

          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

            <div className="flex rounded-2xl bg-slate-100 p-1">

              <button className="rounded-xl bg-white px-5 py-2 font-semibold shadow-sm">
                All
              </button>

              <button className="px-5 py-2 text-slate-600">
                Verified
              </button>

              <button className="px-5 py-2 text-slate-600">
                Pending
              </button>

              <button className="px-5 py-2 text-slate-600">
                Review
              </button>

            </div>

            <div className="text-sm text-slate-500">
              Total 2,846 Sellers
            </div>

          </div>

          {/* Table */}

          <div className="overflow-x-auto">

            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

              <thead className="bg-slate-50">

                <tr className="text-left text-sm font-semibold text-slate-500">

                  <th className="px-6 py-5">BUSINESS</th>
                  <th>OWNER</th>
                  <th>PERSONAL KYC</th>
                  <th>BUSINESS KYC</th>
                  <th>BRANCHES</th>
                  <th>EMPLOYEES</th>
                  <th>STATUS</th>

                </tr>

              </thead>

              <tbody>

                {sellers.map((seller) => (

                  <tr
                    key={seller.id}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold">
                          {seller.business.charAt(0)}
                        </div>

                        <div>

                          <h4 className="font-semibold text-slate-900">
                            {seller.business}
                          </h4>

                          <p className="text-sm text-slate-500">
                            {seller.id}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="font-medium text-slate-700">
                      {seller.owner}
                    </td>

                    <td>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          seller.personalKyc === "Verified"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {seller.personalKyc}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          seller.businessKyc === "Verified"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {seller.businessKyc}
                      </span>

                    </td>

                    <td className="font-semibold">
                      {seller.branches}
                    </td>

                    <td className="font-semibold">
                      {seller.employees}
                    </td>

                    <td>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          seller.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : seller.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-violet-100 text-violet-700"
                        }`}
                      >
                        {seller.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table></div>

          </div>

          {/* Footer */}

          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-5">

            <p className="text-sm text-slate-500">
              Showing 1–3 of 2,846 Sellers
            </p>

            <div className="flex gap-2">

              <button className="h-10 w-10 rounded-xl border bg-indigo-600 text-white">
                1
              </button>

              <button className="h-10 w-10 rounded-xl border">
                2
              </button>

              <button className="h-10 w-10 rounded-xl border">
                3
              </button>

            </div>

          </div>

        </div>
        {/* ================= VERIFICATION CENTER ================= */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  {/* Personal KYC */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-8">

    <h3 className="text-2xl font-bold text-slate-900">
      Personal KYC Verification
    </h3>

    <p className="mt-2 text-slate-500">
      Review seller identity verification requests.
    </p>

    <div className="mt-6 space-y-4">

      {[
        ["Aadhaar Verification", "Verified"],
        ["PAN Verification", "Verified"],
        ["Mobile Verification", "Verified"],
        ["Address Verification", "Pending"],
      ].map(([title, status]) => (
        <div
          key={title}
          className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
        >
          <span>{title}</span>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              status === "Verified"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {status}
          </span>
        </div>
      ))}

    </div>

  </div>

  {/* Business Verification */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-8">

    <h3 className="text-2xl font-bold text-slate-900">
      Business Verification
    </h3>

    <p className="mt-2 text-slate-500">
      Monitor business registration and compliance approvals.
    </p>

    <div className="mt-6 space-y-4">

      {[
        ["GST Verification", "Approved"],
        ["Business PAN", "Approved"],
        ["Trade License", "Approved"],
        ["Company Registration", "Pending"],
      ].map(([title, status]) => (
        <div
          key={title}
          className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
        >
          <span>{title}</span>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              status === "Approved"
                ? "bg-blue-100 text-blue-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {status}
          </span>
        </div>
      ))}

    </div>

  </div>

</div>

{/* ================= SERVICE MAPPING + BRANCHES ================= */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  {/* Service Mapping */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-8">

    <h3 className="text-2xl font-bold text-slate-900">
      Service Mapping
    </h3>

    <p className="mt-2 text-slate-500">
      Assigned services available for business sellers.
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4">

      {[
        "Internet Services",
        "Electrical Services",
        "Construction",
        "Home Solutions",
        "Maintenance",
        "Security Systems",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 p-4"
        >
          <h4 className="font-semibold text-slate-900">
            {item}
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            Active Category
          </p>
        </div>
      ))}

    </div>

  </div>

  {/* Branch Management */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-8">

    <h3 className="text-2xl font-bold text-slate-900">
      Branch Management
    </h3>

    <p className="mt-2 text-slate-500">
      Track seller branch operations.
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4">

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Total Branches
        </p>

        <h4 className="mt-2 text-3xl font-bold">
          864
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Active Branches
        </p>

        <h4 className="mt-2 text-3xl font-bold text-emerald-600">
          812
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Inactive
        </p>

        <h4 className="mt-2 text-3xl font-bold text-red-500">
          32
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Pending Approval
        </p>

        <h4 className="mt-2 text-3xl font-bold text-orange-500">
          20
        </h4>
      </div>

    </div>

  </div>

</div>

{/* ================= EMPLOYEE + WALLET ================= */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  {/* Employee */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-8">

    <h3 className="text-2xl font-bold text-slate-900">
      Employee Management
    </h3>

    <div className="mt-6 grid grid-cols-2 gap-4">

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Total Employees
        </p>

        <h4 className="mt-2 text-3xl font-bold">
          5,428
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Active
        </p>

        <h4 className="mt-2 text-3xl font-bold text-emerald-600">
          5,012
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          On Leave
        </p>

        <h4 className="mt-2 text-3xl font-bold text-orange-500">
          286
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Suspended
        </p>

        <h4 className="mt-2 text-3xl font-bold text-red-500">
          130
        </h4>
      </div>

    </div>

  </div>

  {/* Wallet */}

  <div className="rounded-[32px] border border-slate-200 bg-white p-8">

    <h3 className="text-2xl font-bold text-slate-900">
      Wallet Monitoring
    </h3>

    <div className="mt-6 grid grid-cols-2 gap-4">

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Available Balance
        </p>

        <h4 className="mt-2 text-3xl font-bold">
          ₹1.82Cr
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Pending Settlement
        </p>

        <h4 className="mt-2 text-3xl font-bold">
          ₹24.5L
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Withdraw Requests
        </p>

        <h4 className="mt-2 text-3xl font-bold">
          ₹12.4L
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Frozen Amount
        </p>

        <h4 className="mt-2 text-3xl font-bold text-red-500">
          ₹2.1L
        </h4>
      </div>

    </div>

  </div>

</div>

{/* ================= QUICK ACTIONS ================= */}

<div className="rounded-[32px] border border-slate-200 bg-white p-8">

  <h3 className="text-2xl font-bold text-slate-900">
    Quick Actions
  </h3>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

    {[
      "Add Business Seller",
      "Approve Personal KYC",
      "Approve Business KYC",
      "Manage Branches",
      "Manage Employees",
      "Wallet Audit",
    ].map((item) => (
      <button
        key={item}
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left hover:border-indigo-300 hover:bg-indigo-50 transition-all"
      >
        <h4 className="font-semibold text-slate-900">
          {item}
        </h4>
      </button>
    ))}

  </div>

</div>
      </div>
      <ExportReportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
        entityName="Business Sellers" 
        data={sellers} 
      />
    </AdminShell>
  );
}