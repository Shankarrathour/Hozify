import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
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
  const { addToast } = useToast();

  return (
    <AdminShell
      activeTab="Compliance Center"
      searchPlaceholder="Search compliance records..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Compliance Center
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Real-time oversight of your enterprise regulatory standing.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => addToast("Exporting comprehensive compliance report...", "success")}
              className="px-4 h-10 border rounded-lg font-medium text-sm cursor-pointer bg-white"
            >
              Export Report
            </button>
            <button 
              onClick={() => addToast("Initiating real-time regulatory compliance audit...", "success")}
              className="px-4 h-10 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg font-medium text-sm cursor-pointer"
            >
              Run Audit
            </button>
          </div>
        </div>

        {/* ALERT BANNER */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start justify-between">
          <div className="flex gap-4">
            <AlertTriangle
              className="text-red-600 mt-1"
              size={20}
            />
            <div>
              <h3 className="font-bold text-red-700 text-base">
                Immediate Action Required: Tax Filing Deadline
              </h3>
              <p className="text-red-600 mt-1 text-sm">
                Your quarterly VAT compliance for Branch "Downtown-A2" is overdue by 3 days.
                Failure to file may result in operational penalties.
              </p>
            </div>
          </div>
          <button 
            onClick={() => addToast("Redirecting to tax filing console...", "success")}
            className="text-red-700 font-semibold text-sm underline cursor-pointer"
          >
            Resolve Now
          </button>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-12 gap-4">

          {/* OVERALL HEALTH */}
          <div className="col-span-4 bg-white border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <h4 className="uppercase tracking-widest text-xs text-gray-500 font-bold">
                Overall Health
              </h4>
              <Info
                size={16}
                className="text-gray-400"
              />
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-base font-semibold">
                  92%
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Excellent
                </h3>
                <p className="text-gray-500 text-xs">
                  +4% from last month
                </p>
              </div>
            </div>

            <div className="border-t mt-4 pt-3 flex justify-between text-xs">
              <span className="text-gray-500">
                Next Checkup
              </span>
              <span className="font-semibold">
                Oct 24, 2023
              </span>
            </div>
          </div>

          {/* LEGAL */}
          <div className="col-span-2 bg-white border rounded-xl p-4">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Scale
                size={16}
                className="text-blue-600"
              />
            </div>
            <h3 className="font-semibold text-sm">
              Legal
            </h3>
            <div className="h-1.5 bg-gray-200 rounded-full mt-2">
              <div className="h-full w-full bg-black rounded-full"></div>
            </div>
            <p className="font-semibold text-xs mt-2">
              100%
            </p>
            <p className="text-gray-500 text-xs mt-2">
              All licenses active
            </p>
          </div>

          {/* TAX */}
          <div className="col-span-2 bg-white border rounded-xl p-4">
            <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Landmark
                size={16}
                className="text-red-600"
              />
            </div>
            <h3 className="font-semibold text-sm">
              Tax
            </h3>
            <div className="h-1.5 bg-gray-200 rounded-full mt-2">
              <div className="h-full w-[78%] bg-red-600 rounded-full"></div>
            </div>
            <p className="font-semibold text-xs mt-2">
              78%
            </p>
            <p className="text-gray-500 text-xs mt-2">
              1 Action pending
            </p>
          </div>

          {/* OPERATIONAL */}
          <div className="col-span-4 bg-white border rounded-xl p-4">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <Settings
                size={16}
                className="text-purple-600"
              />
            </div>
            <h3 className="font-semibold text-sm">
              Operational
            </h3>
            <div className="h-1.5 bg-gray-200 rounded-full mt-2">
              <div className="h-full w-[94%] bg-black rounded-full"></div>
            </div>
            <p className="font-semibold text-xs mt-2">
              94%
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Near complete
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-12 gap-4">

          {/* UPCOMING RENEWALS */}
          <div className="col-span-7 bg-white border rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="text-base font-semibold">
                Upcoming Renewals & Deadlines
              </h2>
              <button 
                onClick={() => addToast("Opening renewal calendar grid...", "success")}
                className="text-xs font-medium hover:text-indigo-700 cursor-pointer"
              >
                View Calendar
              </button>
            </div>

            {/* ROW 1 */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex gap-3">
                <div className="w-12 h-12 border rounded-lg flex flex-col items-center justify-center">
                  <span className="text-[10px] text-gray-500">
                    OCT
                  </span>
                  <span className="font-bold text-sm">
                    28
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    General Liability Insurance
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Policy #GL-90234-X • Global Coverage
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded font-bold">
                  IN REVIEW
                </span>
                <p className="text-gray-500 mt-1 text-[11px]">
                  Document Uploaded
                </p>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex gap-3">
                <div className="w-12 h-12 border rounded-lg flex flex-col items-center justify-center">
                  <span className="text-[10px] text-gray-500">
                    NOV
                  </span>
                  <span className="font-bold text-sm">
                    02
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    Trade License Renewal
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Registration: REG-DOM-441 • Branch B
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] rounded font-bold">
                  CRITICAL
                </span>
                <p className="text-gray-500 mt-1 text-[11px]">
                  11 Days Left
                </p>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex gap-3">
                <div className="w-12 h-12 border rounded-lg flex flex-col items-center justify-center">
                  <span className="text-[10px] text-gray-500">
                    NOV
                  </span>
                  <span className="font-bold text-sm">
                    15
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    Data Privacy Audit (GDPR)
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Annual Operational Certification
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] rounded font-bold">
                  SCHEDULED
                </span>
                <p className="text-gray-500 mt-1 text-[11px]">
                  Partner: SecureData Inc.
                </p>
              </div>
            </div>

          </div>

          {/* REGIONAL COMPLIANCE */}
          <div className="col-span-5 bg-white border rounded-xl p-4">
            <h2 className="text-base font-semibold mb-4">
              Regional Compliance Status
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>North America (12 Branches)</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-full w-full bg-black rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Europe (8 Branches)</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-full w-[85%] bg-black rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Asia-Pacific (4 Branches)</span>
                  <span className="font-semibold">62%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-full w-[62%] bg-red-600 rounded-full"></div>
                </div>
              </div>

              {/* POLICY ALERT */}
              <div className="border rounded-xl p-3 mt-4">
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=100"
                    alt="policy"
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-xs">
                      New Policy Alert
                    </h4>
                    <p className="text-gray-500 text-[11px] mt-1">
                      APAC region requires new digital tax registration by end of month.
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