import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
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
  const { addToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [deptFilter, setDeptFilter] = useState("All");

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
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
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

  const filteredEmployees = employees.filter(
    (emp) => deptFilter === "All" || emp.dept === deptFilter
  );

  return (
    <AdminShell
      activeTab="Employee Management"
      searchPlaceholder="Search employees..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">
              Employee Management
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage 1,248 active staff members across 14 departments.
            </p>
          </div>

          <div className="flex gap-2">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              style={{
                height: "38px",
                border: "1px solid var(--materio-border)",
                borderRadius: "6px",
                padding: "0 10px",
                fontSize: "12px",
                fontWeight: "700",
                color: "#475569",
                background: "#fff",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="All">All Departments</option>
              <option value="Logistics & Supply">Logistics & Supply</option>
              <option value="Growth & Innovation">Growth & Innovation</option>
              <option value="Customer Relations">Customer Relations</option>
              <option value="Engineering">Engineering</option>
            </select>
            <button 
              onClick={() => addToast("Exporting employee roster matrix...", "success")}
              className="h-10 px-4 border border-gray-300 bg-white rounded-lg flex items-center gap-2 text-sm font-medium cursor-pointer"
            >
              <Download size={14} />
              Export
            </button>
          </div>
        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-3 bg-white border rounded-xl p-4">
            <h4 className="uppercase tracking-widest text-gray-500 text-[10px] font-bold">
              Total Headcount
            </h4>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-light">
                1,248
              </span>
              <span className="text-green-600 text-xs font-semibold">
                +4.2%
              </span>
            </div>
          </div>

          <div className="col-span-3 bg-white border rounded-xl p-4">
            <h4 className="uppercase tracking-widest text-gray-500 text-[10px] font-bold">
              Retention Rate
            </h4>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-light">
                94.8%
              </span>
              <span className="text-gray-500 text-[10px]">
                High Stability
              </span>
            </div>
          </div>

          <div className="col-span-6 bg-indigo-950 text-white rounded-xl p-4">
            <h4 className="uppercase tracking-widest text-indigo-300 text-[10px] font-bold">
              Performance Highlight
            </h4>
            <h3 className="text-base font-semibold mt-2">
              82% Employees with 'Top Performer' Badges
            </h3>
          </div>

        </div>

        {/* EMPLOYEE TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 px-4 py-3 bg-gray-50 border-b text-gray-500 text-xs font-bold uppercase tracking-wide">
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
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="grid grid-cols-12 px-4 py-4 border-b items-center last:border-b-0 hover:bg-gray-50 transition"
            >
              {/* EMPLOYEE */}
              <div className="col-span-3 flex items-center gap-3">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {employee.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {employee.email}
                  </p>
                </div>
              </div>

              {/* ROLE */}
              <div className="col-span-4">
                <h4 className="text-sm font-bold text-gray-800">
                  {employee.role}
                </h4>
                <p className="text-gray-500 text-xs mt-0.5">
                  {employee.dept}
                </p>
              </div>

              {/* PERMISSIONS */}
              <div className="col-span-2 flex flex-wrap gap-1">
                {employee.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-bold rounded"
                  >
                    {permission}
                  </span>
                ))}
              </div>

              {/* PERFORMANCE */}
              <div className="col-span-2">
                <span
                  className={`px-2 py-1 rounded text-[10px] font-bold ${employee.performanceColor}`}
                >
                  {employee.performance}
                </span>
              </div>

              {/* ACTION */}
              <div className="col-span-1 flex justify-center">
                <button 
                  onClick={() => addToast(`Opening action console for ${employee.name}`, "success")}
                  className="hover:bg-gray-100 p-2 rounded-full cursor-pointer text-gray-600"
                >
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          ))}
          {filteredEmployees.length === 0 && (
            <p className="p-8 text-center text-gray-400 text-sm font-semibold">No employees match the selected department filter.</p>
          )}

          {/* PAGINATION */}
          <div className="flex items-center justify-between px-4 py-4">
            <p className="text-gray-500 text-xs font-semibold">
              Showing {filteredEmployees.length} of 1,248 employees
            </p>
            <div className="flex items-center gap-1">
              <button onClick={() => addToast("Loaded previous employee page", "success")} className="w-8 h-8 border rounded text-gray-400 cursor-pointer bg-white">
                {"<"}
              </button>
              <button onClick={() => addToast("Loaded page 1", "success")} className="w-8 h-8 bg-black text-white rounded text-xs font-bold border-none cursor-pointer">
                1
              </button>
              <button onClick={() => addToast("Loaded page 2", "success")} className="w-8 h-8 border rounded text-xs font-bold cursor-pointer bg-white">
                2
              </button>
              <button onClick={() => addToast("Loaded page 3", "success")} className="w-8 h-8 border rounded text-xs font-bold cursor-pointer bg-white">
                3
              </button>
              <span className="px-2">...</span>
              <button onClick={() => addToast("Loaded page 312", "success")} className="w-10 h-8 border rounded text-xs font-bold cursor-pointer bg-white">
                312
              </button>
              <button onClick={() => addToast("Loaded next employee page", "success")} className="w-8 h-8 border rounded cursor-pointer bg-white">
                {">"}
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-12 gap-4">

          {/* HEALTH CARD */}
          <div className="col-span-6 bg-white border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <h3 className="text-base font-bold">
                Employee Health & Morale
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Aggregate employee engagement scores have remained stable at 4.5/5. Recent "Quick Feedback" sessions suggest high satisfaction with current project management tools.
            </p>

            <div className="mt-4">
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[88%] rounded-full" />
              </div>
            </div>
          </div>

          {/* SECURITY CARD */}
          <div className="col-span-6 bg-white border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield
                  className="text-orange-700"
                  size={20}
                />
              </div>
              <h3 className="text-base font-bold">
                Security & Access Audits
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              98% of employees have completed their mandatory annual security training. 14 new "Admin" level permissions were granted this month following promotion cycles.
            </p>

            <button 
              onClick={() => addToast("Loading access log matrix ledger...", "success")}
              className="mt-4 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition cursor-pointer border-none bg-transparent"
            >
              View Access Logs →
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}