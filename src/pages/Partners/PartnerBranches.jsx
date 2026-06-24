import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

import {
  Building2,
  MapPinned,
  Users,
  Activity,
  ArrowUpRight,
  MoreVertical,
} from "lucide-react";

const branchStats = [
  {
    title: "Active Branches",
    value: "812",
    growth: "+12%",
  },
  {
    title: "Coverage Cities",
    value: "148",
    growth: "+8%",
  },
  {
    title: "Branch Managers",
    value: "864",
    growth: "+15%",
  },
  {
    title: "Service Mapping",
    value: "96%",
    growth: "+4%",
  },
];

const branches = [
  {
    name: "Mumbai Central Hub",
    code: "BR-1021",
    city: "Mumbai",
    employees: "82",
    manager: "Rahul Sharma",
    status: "Active",
  },
  {
    name: "Delhi Operations Center",
    code: "BR-1022",
    city: "Delhi",
    employees: "65",
    manager: "Amit Verma",
    status: "Active",
  },
  {
    name: "Bangalore Service Point",
    code: "BR-1023",
    city: "Bangalore",
    employees: "48",
    manager: "Priya Singh",
    status: "Pending",
  },
];

export default function PartnerBranches() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search branches..."
    >
      <div className="space-y-8">

        {/* Hero */}

        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white">

          <div className="absolute inset-0 opacity-[0.03]">

            <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

          </div>

          <div className="relative z-10 p-10">

            <div className="flex flex-col xl:flex-row justify-between gap-10">

              <div>

                <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold tracking-[0.3em] text-emerald-700">
                  BRANCH OPERATIONS
                </span>

                <h1 className="mt-6 text-3xl font-bold text-slate-900">
                  Branch Network
                  <br />
                  Command Center
                </h1>

                <p className="mt-5 max-w-3xl text-lg text-slate-600">
                  Monitor branch performance, regional coverage,
                  workforce allocation and service mapping across
                  the entire partner network.
                </p>

                <div className="mt-8 flex gap-4">

                  <button className="rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold">
                    Add Branch
                  </button>

                  <button className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold">
                    Coverage Map
                  </button>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 min-w-[380px]">

                {branchStats.map((item) => (

                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>

                    <h3 className="mt-2 text-4xl font-bold">
                      {item.value}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-emerald-600">
                      <ArrowUpRight size={16} />
                      {item.growth}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
        {/* ================= REGION ANALYTICS ================= */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  {/* Coverage Analytics */}

  <div className="xl:col-span-2 rounded-[32px] border border-slate-200 bg-white p-8">

    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
          Regional Coverage
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Branch Network Distribution
        </h2>

      </div>

      <MapPinned className="text-emerald-600" size={28} />

    </div>

    <div className="mt-10 space-y-8">

      {[
        ["North Region", "92%"],
        ["South Region", "96%"],
        ["East Region", "81%"],
        ["West Region", "98%"],
      ].map(([region, value]) => (

        <div key={region}>

          <div className="mb-3 flex justify-between">

            <span className="font-medium text-slate-700">
              {region}
            </span>

            <span className="font-bold text-emerald-600">
              {value}
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-100">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              style={{
                width: value,
              }}
            />

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* Top Branch */}

  <div className="rounded-[32px] bg-slate-900 p-8 text-white">

    <div className="flex items-center justify-between">

      <Activity size={28} />

      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
        Top Performer
      </span>

    </div>

    <h3 className="mt-8 text-2xl font-bold">
      Mumbai Central Hub
    </h3>

    <p className="mt-3 text-slate-400">
      Highest operational efficiency and
      service coverage score this month.
    </p>

    <div className="mt-8 space-y-4">

      <div className="flex justify-between">
        <span className="text-slate-400">
          Efficiency
        </span>

        <span className="font-semibold">
          98.4%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Workforce
        </span>

        <span className="font-semibold">
          82 Employees
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Service Requests
        </span>

        <span className="font-semibold">
          1,248
        </span>
      </div>

    </div>

  </div>

</div>

{/* ================= OPERATION METRICS ================= */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="rounded-[28px] bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white">

    <Building2 size={30} />

    <h3 className="mt-5 text-4xl font-bold">
      864
    </h3>

    <p className="mt-2 text-emerald-100">
      Total Branch Locations
    </p>

  </div>

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <Users className="text-indigo-600" size={30} />

    <h3 className="mt-5 text-4xl font-bold text-slate-900">
      5,428
    </h3>

    <p className="mt-2 text-slate-500">
      Assigned Workforce
    </p>

  </div>

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <Activity className="text-orange-500" size={30} />

    <h3 className="mt-5 text-4xl font-bold text-slate-900">
      96.2%
    </h3>

    <p className="mt-2 text-slate-500">
      Avg Operational Score
    </p>

  </div>

</div>
{/* ================= BRANCH DIRECTORY ================= */}

<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">

  {/* Header */}

  <div className="flex items-center justify-between border-b border-slate-200 p-6">

    <div>

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
        Branch Registry
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Operational Branch Directory
      </h2>

      <p className="mt-1 text-slate-500">
        View and manage all registered branch locations
      </p>

    </div>

    <button className="rounded-2xl border border-slate-200 px-5 py-3 font-medium hover:bg-slate-50">
      Export Branch Data
    </button>

  </div>

  {/* Table */}

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-slate-50">

        <tr className="text-left text-sm font-semibold text-slate-500">

          <th className="px-6 py-5">BRANCH</th>
          <th>MANAGER</th>
          <th>CITY</th>
          <th>EMPLOYEES</th>
          <th>STATUS</th>
          <th>ACTIONS</th>

        </tr>

      </thead>

      <tbody>

        {branches.map((branch) => (

          <tr
            key={branch.code}
            className="border-t border-slate-100 hover:bg-slate-50"
          >

            <td className="px-6 py-5">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 font-bold text-emerald-700">
                  {branch.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {branch.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {branch.code}
                  </p>

                </div>

              </div>

            </td>

            <td className="font-medium">
              {branch.manager}
            </td>

            <td>
              {branch.city}
            </td>

            <td>
              {branch.employees}
            </td>

            <td>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  branch.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {branch.status}
              </span>

            </td>

            <td>

              <button className="rounded-xl p-2 hover:bg-slate-100">
                <MoreVertical size={18} />
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

{/* ================= BRANCH LEADERS ================= */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="rounded-[32px] border border-slate-200 bg-white p-6">

    <div className="flex items-center justify-between">

      <h3 className="font-bold text-xl text-slate-900">
        Regional Lead
      </h3>

      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
        North
      </span>

    </div>

    <h4 className="mt-6 text-2xl font-bold">
      Rahul Sharma
    </h4>

    <p className="mt-2 text-slate-500">
      Oversees 42 branch locations across
      northern operational zones.
    </p>

  </div>

  <div className="rounded-[32px] border border-slate-200 bg-white p-6">

    <div className="flex items-center justify-between">

      <h3 className="font-bold text-xl text-slate-900">
        Regional Lead
      </h3>

      <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
        South
      </span>

    </div>

    <h4 className="mt-6 text-2xl font-bold">
      Priya Patel
    </h4>

    <p className="mt-2 text-slate-500">
      Responsible for service delivery and
      branch growth in southern regions.
    </p>

  </div>

  <div className="rounded-[32px] border border-slate-200 bg-white p-6">

    <div className="flex items-center justify-between">

      <h3 className="font-bold text-xl text-slate-900">
        Regional Lead
      </h3>

      <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">
        West
      </span>

    </div>

    <h4 className="mt-6 text-2xl font-bold">
      Amit Verma
    </h4>

    <p className="mt-2 text-slate-500">
      Managing operational performance and
      workforce planning across western zones.
    </p>

  </div>

</div>
{/* ================= ACTIVITY TIMELINE ================= */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  {/* Timeline */}

  <div className="xl:col-span-2 rounded-[32px] border border-slate-200 bg-white p-8">

    <div>

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
        Recent Activities
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Branch Activity Timeline
      </h2>

    </div>

    <div className="mt-10 space-y-8">

      {[
        {
          time: "09:15 AM",
          title: "Mumbai Central Hub Approved",
          desc: "Branch verification completed successfully.",
        },
        {
          time: "11:42 AM",
          title: "New Delhi Branch Request",
          desc: "New branch registration submitted for review.",
        },
        {
          time: "01:20 PM",
          title: "Branch Manager Updated",
          desc: "Leadership assignment modified for Bangalore region.",
        },
        {
          time: "04:05 PM",
          title: "Coverage Mapping Completed",
          desc: "West region service coverage updated.",
        },
      ].map((activity, index) => (

        <div
          key={index}
          className="flex gap-5"
        >

          <div className="flex flex-col items-center">

            <div className="h-4 w-4 rounded-full bg-emerald-500"></div>

            {index !== 3 && (
              <div className="mt-2 h-20 w-[2px] bg-slate-200"></div>
            )}

          </div>

          <div>

            <p className="text-sm text-slate-500">
              {activity.time}
            </p>

            <h4 className="mt-1 font-bold text-slate-900">
              {activity.title}
            </h4>

            <p className="mt-1 text-slate-500">
              {activity.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* Coverage Score */}

  <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-8 text-white">

    <p className="text-sm uppercase tracking-wider text-emerald-300">
      Coverage Health
    </p>

    <h2 className="mt-5 text-6xl font-bold">
      96%
    </h2>

    <p className="mt-3 text-slate-300">
      Overall branch coverage efficiency
      across all operational regions.
    </p>

    <div className="mt-10 space-y-5">

      <div className="flex justify-between">
        <span className="text-slate-400">
          Active Regions
        </span>

        <span>48</span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Coverage Cities
        </span>

        <span>148</span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Expansion Requests
        </span>

        <span>23</span>
      </div>

    </div>

  </div>

</div>

{/* ================= INSIGHTS ================= */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <h3 className="font-bold text-lg text-slate-900">
      Fastest Growing Region
    </h3>

    <p className="mt-3 text-4xl font-bold text-emerald-600">
      South
    </p>

    <p className="mt-3 text-slate-500">
      Increased branch operations by 18%
      this quarter.
    </p>

  </div>

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <h3 className="font-bold text-lg text-slate-900">
      Best Performance
    </h3>

    <p className="mt-3 text-4xl font-bold text-cyan-600">
      98.4%
    </p>

    <p className="mt-3 text-slate-500">
      Mumbai Central Hub achieved highest
      operational score.
    </p>

  </div>

  <div className="rounded-[28px] border border-slate-200 bg-white p-6">

    <h3 className="font-bold text-lg text-slate-900">
      Expansion Pipeline
    </h3>

    <p className="mt-3 text-4xl font-bold text-violet-600">
      23
    </p>

    <p className="mt-3 text-slate-500">
      New branch requests currently under
      compliance review.
    </p>

  </div>

</div>

      </div>
    </AdminShell>
  );
}