import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

import {
  AlertTriangle,
  Download,
  ShieldCheck,
  Scale,
  Landmark,
  Settings,
  Info,
} from "lucide-react";

export default function ComplianceCenter() {
  return (
    <AdminShell
      activeTab="Compliance Center"
      searchPlaceholder="Search compliance records..."
    >
      <div className="space-y-6">

        {/* HEADER */}

        <div className="flex items-start justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Compliance Center
            </h1>

            <p className="text-gray-500 mt-2">
              Real-time oversight of your enterprise regulatory standing.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="px-5 h-12 border rounded-lg font-medium">
              Export Report
            </button>

            <button className="px-5 h-12 bg-indigo-700 text-white rounded-lg font-medium">
              Run Audit
            </button>

          </div>

        </div>

        {/* ALERT BANNER */}

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start justify-between">

          <div className="flex gap-4">

            <AlertTriangle
              className="text-red-600 mt-1"
              size={22}
            />

            <div>

              <h3 className="font-bold text-red-700 text-lg">
                Immediate Action Required: Tax Filing Deadline
              </h3>

              <p className="text-red-600 mt-1">
                Your quarterly VAT compliance for Branch
                "Downtown-A2" is overdue by 3 days.
                Failure to file may result in operational penalties.
              </p>

            </div>

          </div>

          <button className="text-red-700 font-semibold underline">
            Resolve Now
          </button>

        </div>

        {/* TOP CARDS */}

        <div className="grid grid-cols-12 gap-5">

          {/* OVERALL HEALTH */}

          <div className="col-span-4 bg-white border rounded-xl p-6">

            <div className="flex justify-between items-start">

              <h4 className="uppercase tracking-widest text-gray-500">
                Overall Health
              </h4>

              <Info
                size={18}
                className="text-gray-400"
              />

            </div>

            <div className="flex items-center gap-5 mt-8">

              <div className="w-24 h-24 rounded-full border-[6px] border-black flex items-center justify-center">

                <span className="text-2xl font-semibold">
                  92%
                </span>

              </div>

              <div>

                <h3 className="text-2xl font-semibold">
                  Excellent
                </h3>

                <p className="text-gray-500">
                  +4% from last month
                </p>

              </div>

            </div>

            <div className="border-t mt-8 pt-5 flex justify-between text-sm">

              <span className="text-gray-500">
                Next Checkup
              </span>

              <span className="font-semibold">
                Oct 24, 2023
              </span>

            </div>

          </div>

          {/* LEGAL */}

          <div className="col-span-2 bg-white border rounded-xl p-5">

            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">

              <Scale
                size={18}
                className="text-blue-600"
              />

            </div>

            <h3 className="font-semibold text-xl">
              Legal
            </h3>

            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-full w-full bg-black rounded-full"></div>
            </div>

            <p className="font-semibold mt-2">
              100%
            </p>

            <p className="text-gray-500 mt-4">
              All licenses active
            </p>

          </div>

          {/* TAX */}

          <div className="col-span-2 bg-white border rounded-xl p-5">

            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-6">

              <Landmark
                size={18}
                className="text-red-600"
              />

            </div>

            <h3 className="font-semibold text-xl">
              Tax
            </h3>

            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-full w-[78%] bg-red-600 rounded-full"></div>
            </div>

            <p className="font-semibold mt-2">
              78%
            </p>

            <p className="text-gray-500 mt-4">
              1 Action pending
            </p>

          </div>

          {/* OPERATIONAL */}

          <div className="col-span-4 bg-white border rounded-xl p-5">

            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-6">

              <Settings
                size={18}
                className="text-purple-600"
              />

            </div>

            <h3 className="font-semibold text-xl">
              Operational
            </h3>

            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-full w-[94%] bg-black rounded-full"></div>
            </div>

            <p className="font-semibold mt-2">
              94%
            </p>

            <p className="text-gray-500 mt-4">
              Near complete
            </p>

          </div>

        </div>        {/* BOTTOM SECTION */}

        <div className="grid grid-cols-12 gap-5">

          {/* UPCOMING RENEWALS */}

          <div className="col-span-7 bg-white border rounded-xl overflow-hidden">

            <div className="flex items-center justify-between px-6 py-5 border-b">

              <h2 className="text-2xl font-semibold">
                Upcoming Renewals & Deadlines
              </h2>

              <button className="font-medium hover:text-indigo-700">
                View Calendar
              </button>

            </div>

            {/* ROW 1 */}

            <div className="flex items-center justify-between px-6 py-5 border-b">

              <div className="flex gap-4">

                <div className="w-14 h-14 border rounded-lg flex flex-col items-center justify-center">

                  <span className="text-xs text-gray-500">
                    OCT
                  </span>

                  <span className="font-bold text-xl">
                    28
                  </span>

                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    General Liability Insurance
                  </h3>

                  <p className="text-gray-500">
                    Policy #GL-90234-X • Global Coverage
                  </p>

                </div>

              </div>

              <div className="text-right">

                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                  IN REVIEW
                </span>

                <p className="text-gray-500 mt-2 text-sm">
                  Status: Document Uploaded
                </p>

              </div>

            </div>

            {/* ROW 2 */}

            <div className="flex items-center justify-between px-6 py-5 border-b">

              <div className="flex gap-4">

                <div className="w-14 h-14 border rounded-lg flex flex-col items-center justify-center">

                  <span className="text-xs text-gray-500">
                    NOV
                  </span>

                  <span className="font-bold text-xl">
                    02
                  </span>

                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    Trade License Renewal
                  </h3>

                  <p className="text-gray-500">
                    Registration: REG-DOM-441 • Branch B
                  </p>

                </div>

              </div>

              <div className="text-right">

                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded">
                  CRITICAL
                </span>

                <p className="text-gray-500 mt-2 text-sm">
                  11 Days Left
                </p>

              </div>

            </div>

            {/* ROW 3 */}

            <div className="flex items-center justify-between px-6 py-5">

              <div className="flex gap-4">

                <div className="w-14 h-14 border rounded-lg flex flex-col items-center justify-center">

                  <span className="text-xs text-gray-500">
                    NOV
                  </span>

                  <span className="font-bold text-xl">
                    15
                  </span>

                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    Data Privacy Audit (GDPR)
                  </h3>

                  <p className="text-gray-500">
                    Annual Operational Certification
                  </p>

                </div>

              </div>

              <div className="text-right">

                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  SCHEDULED
                </span>

                <p className="text-gray-500 mt-2 text-sm">
                  Partner: SecureData Inc.
                </p>

              </div>

            </div>

          </div>

          {/* REGIONAL COMPLIANCE */}

          <div className="col-span-5 bg-white border rounded-xl p-6">

            <h2 className="text-2xl font-semibold mb-8">
              Regional Compliance Status
            </h2>

            <div className="space-y-7">

              <div>

                <div className="flex justify-between mb-2">
                  <span>North America (12 Branches)</span>
                  <span className="font-semibold">100%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-full bg-black rounded-full"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span>Europe (8 Branches)</span>
                  <span className="font-semibold">85%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[85%] bg-black rounded-full"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span>Asia-Pacific (4 Branches)</span>
                  <span className="font-semibold">62%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[62%] bg-red-600 rounded-full"></div>
                </div>

              </div>              {/* POLICY ALERT */}

              <div className="border rounded-xl p-4 mt-8">

                <div className="flex gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=100"
                    alt="policy"
                    className="w-14 h-14 rounded object-cover"
                  />

                  <div>

                    <h4 className="font-semibold">
                      New Policy Alert
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      APAC region requires new digital tax
                      registration by end of month.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}