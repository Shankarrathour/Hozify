import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

import {
  Users,
  UserCheck,
  UserX,
  Clock3,
  Briefcase,
  ShieldCheck,
  MoreVertical,
} from "lucide-react";

const employeeStats = [
  {
    title: "Total Employees",
    value: "5,428",
    icon: Users,
    badge: "+8%",
    color: "text-emerald-600",
  },
  {
    title: "Active Employees",
    value: "5,102",
    icon: UserCheck,
    badge: "94%",
    color: "text-green-600",
  },
  {
    title: "Pending Verification",
    value: "86",
    icon: Clock3,
    badge: "Review",
    color: "text-orange-500",
  },
  {
    title: "Suspended",
    value: "34",
    icon: UserX,
    badge: "-2%",
    color: "text-red-500",
  },
];

const employees = [
  {
    name: "Rahul Sharma",
    id: "EMP-1001",
    partner: "SkyNet Logistics",
    department: "Operations",
    role: "Manager",
    status: "Active",
  },
  {
    name: "Ankit Verma",
    id: "EMP-1002",
    partner: "BlueWave Systems",
    department: "Support",
    role: "Executive",
    status: "Pending",
  },
  {
    name: "Priya Patel",
    id: "EMP-1003",
    partner: "Vertex Transit",
    department: "Sales",
    role: "Team Lead",
    status: "Active",
  },
];
export default function PartnerEmployees() {
  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search employees, departments..."
    >
      <div className="space-y-8">

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-indigo-900 to-violet-900 p-8 text-white">

          <span className="rounded-full bg-white/10 px-4 py-2 text-xs tracking-[0.3em]">
            PARTNER EMPLOYEES
          </span>

          <h1 className="mt-5 text-3xl font-bold">
            Workforce Management Center
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Manage partner employees, roles, departments,
            verification status and workforce productivity.
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {employeeStats.map((item, index) => {

    const Icon = item.icon;

    return (
      <div
        key={index}
        className="rounded-[28px] border border-slate-200 bg-white p-6"
      >

        <div className="flex justify-between">

          <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
            <Icon className="text-indigo-600" />
          </div>

          <span className={item.color}>
            {item.badge}
          </span>

        </div>

        <p className="mt-5 text-slate-500">
          {item.title}
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          {item.value}
        </h3>

      </div>
    );
  })}

</div>
<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">

  <div className="border-b border-slate-200 p-6">

    <h2 className="text-3xl font-bold">
      Employee Directory
    </h2>

    <p className="text-slate-500 mt-2">
      Monitor workforce across all partners
    </p>

  </div>

  <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">

    <thead className="bg-slate-50">

      <tr>

        <th className="px-6 py-4 text-left">EMPLOYEE</th>
        <th>PARTNER</th>
        <th>DEPARTMENT</th>
        <th>ROLE</th>
        <th>STATUS</th>
        <th>ACTION</th>

      </tr>

    </thead>

    <tbody>

      {employees.map((employee) => (

        <tr
          key={employee.id}
          className="border-t border-slate-100"
        >

          <td className="px-6 py-5">

            <h4 className="font-semibold">
              {employee.name}
            </h4>

            <p className="text-sm text-slate-500">
              {employee.id}
            </p>

          </td>

          <td>{employee.partner}</td>

          <td>{employee.department}</td>

          <td>{employee.role}</td>

          <td>

            <span
              className={`rounded-full px-4 py-2 text-sm ${
                employee.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {employee.status}
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

  </table></div>

</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="rounded-[28px] bg-white border border-slate-200 p-6">
    <h3 className="font-bold text-xl">
      Attendance Rate
    </h3>
    <p className="mt-3 text-4xl font-bold text-green-600">
      96.4%
    </p>
  </div>

  <div className="rounded-[28px] bg-white border border-slate-200 p-6">
    <h3 className="font-bold text-xl">
      Verified Employees
    </h3>
    <p className="mt-3 text-4xl font-bold text-indigo-600">
      5,102
    </p>
  </div>

  <div className="rounded-[28px] bg-white border border-slate-200 p-6">
    <h3 className="font-bold text-xl">
      Avg Productivity
    </h3>
    <p className="mt-3 text-4xl font-bold text-violet-600">
      92%
    </p>
  </div>

</div>

      </div>
    </AdminShell>
  );
}