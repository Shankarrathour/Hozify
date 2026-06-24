import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Filter,
  Download,
  MoreVertical,
  Shield,
  Award,
  Medal,
  Star,
} from "lucide-react";

export default function BusinessEmployees() {
  const employees = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.c@hozify.com",
      role: "Senior Operations Manager",
      dept: "Logistics & Supply",
      permissions: ["ADMIN", "FINANCE"],
      performance: "EXCEEDING",
      performanceColor: "bg-green-100 text-green-700",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      id: 2,
      name: "Marcus Holloway",
      email: "m.holloway@hozify.com",
      role: "Product Lead",
      dept: "Growth & Innovation",
      permissions: ["EDITOR"],
      performance: "CONSISTENT",
      performanceColor: "bg-blue-100 text-blue-700",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      email: "elena.r@hozify.com",
      role: "Support Specialist",
      dept: "Customer Relations",
      permissions: ["SUPPORT", "CHAT"],
      performance: "RISING STAR",
      performanceColor: "bg-purple-100 text-purple-700",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1?w=200",
    },
    {
      id: 4,
      name: "Julian Vane",
      email: "j.vane@hozify.com",
      role: "Technical Architect",
      dept: "Engineering",
      permissions: ["SYSADMIN"],
      performance: "VETERAN",
      performanceColor: "bg-orange-100 text-orange-700",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200",
    },
  ];

  return (
    <AdminShell
      activeTab="Employee Management"
      searchPlaceholder="Search employees..."
    >
      <div className="space-y-6">

        {/* HEADER */}

        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-4xl font-bold">
              Employee Management
            </h1>

            <p className="text-gray-500 mt-2">
              Manage 1,248 active staff members across 14 departments.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="h-12 px-5 border rounded-lg flex items-center gap-2">
              <Filter size={18} />
              Filter
            </button>

            <button className="h-12 px-5 border rounded-lg flex items-center gap-2">
              <Download size={18} />
              Export
            </button>

          </div>

        </div>

        {/* TOP CARDS */}

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-3 bg-white border rounded-xl p-6">
            <h4 className="uppercase tracking-widest text-gray-500 text-sm">
              Total Headcount
            </h4>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-6xl font-light">
                1,248
              </span>

              <span className="text-green-600 font-semibold">
                +4.2%
              </span>
            </div>
          </div>

          <div className="col-span-3 bg-white border rounded-xl p-6">
            <h4 className="uppercase tracking-widest text-gray-500 text-sm">
              Retention Rate
            </h4>

            <div className="flex items-center gap-4 mt-4">
              <span className="text-6xl font-light">
                94.8%
              </span>

              <span className="text-gray-500">
                High Stability
              </span>
            </div>
          </div>

          <div className="col-span-6 bg-indigo-950 text-white rounded-xl p-8">

            <h4 className="uppercase tracking-widest text-indigo-300 text-sm">
              Performance Highlight
            </h4>

            <h3 className="text-4xl font-semibold mt-4 max-w-xl">
              82% Employees with 'Top Performer' Badges
            </h3>

            <p className="text-indigo-200 mt-5 max-w-2xl">
              Quarterly assessments show a significant increase
              in client satisfaction scores across the Logistics
              department.
            </p>

          </div>

        </div>        {/* EMPLOYEE TABLE */}

        <div className="bg-white border rounded-xl overflow-hidden">

          {/* TABLE HEADER */}

          <div className="grid grid-cols-12 px-8 py-5 bg-gray-50 border-b text-gray-500 font-semibold uppercase tracking-wide">

            <div className="col-span-3">
              Employee
            </div>

            <div className="col-span-4">
              Role & Dept
            </div>

            <div className="col-span-2">
              Permissions
            </div>

            <div className="col-span-2">
              Performance
            </div>

            <div className="col-span-1 text-center">
              Action
            </div>

          </div>

          {/* EMPLOYEES */}

          {employees.map((employee) => (
            <div
              key={employee.id}
              className="grid grid-cols-12 px-8 py-6 border-b items-center hover:bg-gray-50 transition"
            >

              {/* EMPLOYEE */}

              <div className="col-span-3 flex items-center gap-4">

                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-medium">
                    {employee.name}
                  </h3>

                  <p className="text-gray-500">
                    {employee.email}
                  </p>
                </div>

              </div>

              {/* ROLE */}

              <div className="col-span-4">

                <h4 className="text-xl font-medium">
                  {employee.role}
                </h4>

                <p className="text-gray-500 mt-1">
                  {employee.dept}
                </p>

              </div>

              {/* PERMISSIONS */}

              <div className="col-span-2 flex flex-wrap gap-2">

                {employee.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {permission}
                  </span>
                ))}

              </div>

              {/* PERFORMANCE */}

              <div className="col-span-2">

                <span
                  className={`px-4 py-2 rounded font-semibold text-sm ${employee.performanceColor}`}
                >
                  {employee.performance}
                </span>

              </div>

              {/* ACTION */}

              <div className="col-span-1 flex justify-center">

                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <MoreVertical size={20} />
                </button>

              </div>

            </div>
          ))}

          {/* PAGINATION */}

          <div className="flex items-center justify-between px-8 py-5">

            <p className="text-gray-500 text-lg">
              Showing 1-4 of 1,248 employees
            </p>

            <div className="flex items-center gap-2">

              <button className="w-10 h-10 border rounded text-gray-400">
                {"<"}
              </button>

              <button className="w-12 h-12 bg-black text-white rounded">
                1
              </button>

              <button className="w-12 h-12 border rounded">
                2
              </button>

              <button className="w-12 h-12 border rounded">
                3
              </button>

              <span className="px-2">...</span>

              <button className="w-14 h-12 border rounded">
                312
              </button>

              <button className="w-10 h-10 border rounded">
                {">"}
              </button>

            </div>

          </div>

        </div>        {/* BOTTOM SECTION */}

        <div className="grid grid-cols-12 gap-6">

          {/* HEALTH CARD */}

          <div className="col-span-6 bg-white border rounded-xl p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center">
                <Award className="text-white" size={26} />
              </div>

              <h3 className="text-4xl font-semibold">
                Employee Health & Morale
              </h3>

            </div>

            <p className="text-gray-600 text-xl leading-relaxed">
              Aggregate employee engagement scores have remained
              stable at 4.5/5. Recent "Quick Feedback" sessions
              suggest high satisfaction with current project
              management tools.
            </p>

            <div className="mt-10">

              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

                <div className="h-full bg-green-500 w-[88%] rounded-full" />

              </div>

            </div>

          </div>

          {/* SECURITY CARD */}

          <div className="col-span-6 bg-white border rounded-xl p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield
                  className="text-orange-700"
                  size={26}
                />
              </div>

              <h3 className="text-4xl font-semibold">
                Security & Access Audits
              </h3>

            </div>

            <p className="text-gray-600 text-xl leading-relaxed">
              98% of employees have completed their mandatory annual
              security training. 14 new "Admin" level permissions
              were granted this month following promotion cycles.
            </p>

            <button className="mt-10 text-2xl font-semibold hover:text-indigo-700 transition">
              View Access Logs →
            </button>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}