import React from "react";
import AdminShell from "../../components/layouts/AdminShell";

import {
  Building2,
  Network,
  Filter,
  Download,
} from "lucide-react";

export default function FraudInvestigation() {
  return (
    <AdminShell
      activeTab="Fraud Investigation"
      searchPlaceholder="Search investigations..."
    >
      <div className="space-y-6">

        {/* HEADER */}

        <div className="flex items-start justify-between">

          <div>

            <div className="text-gray-500 text-base font-medium mb-3">
              Risk Center › Fraud Investigations ›
            </div>

            <h1 className="text-4xl font-bold text-gray-900">
              Fraud Investigation Case
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Review evidence, analyze entity relationships,
              and manage escalation workflows.
            </p>

          </div>

          <div className="flex gap-3">

            <button className="h-12 px-6 border rounded-lg font-medium">
              Flag as False Positive
            </button>

            <button className="h-12 px-6 bg-indigo-700 text-white rounded-lg font-medium">
              Escalate to Senior Admin
            </button>

          </div>

        </div>

        {/* TOP SECTION */}

        <div className="grid grid-cols-12 gap-6">

          {/* RISK SCORE */}

          <div className="col-span-3 bg-white border rounded-xl p-6">

            <h3 className="text-center text-gray-500 uppercase tracking-[3px] text-xl leading-tight">
              COMPOSITE RISK
              <br />
              SCORE
            </h3>

            <div className="flex justify-center mt-8">

              <div className="w-44 h-44 rounded-full border-[12px] border-red-600 flex items-center justify-center">

                <div className="text-center">

                  <div className="text-6xl font-bold text-red-600">
                    82
                  </div>

                  <div className="text-gray-500 mt-2">
                    CRITICAL
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between border-b pb-2">
                <span>Identity Match</span>
                <span className="font-semibold">24%</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Velocity Score</span>
                <span className="font-semibold text-red-600">91%</span>
              </div>

              <div className="flex justify-between">
                <span>IP Reputation</span>
                <span className="font-semibold text-red-600">88%</span>
              </div>

            </div>

          </div>

          {/* CASE INTELLIGENCE */}

          <div className="col-span-6 bg-white border rounded-xl p-7">

            <div className="flex items-center justify-between">

              <h2 className="text-[38px] font-bold text-gray-900">
                Case Intelligence
              </h2>

              <span className="px-4 py-2 bg-red-100 text-red-700 rounded font-semibold">
                ACTION REQUIRED
              </span>

            </div>            <div className="grid grid-cols-2 gap-10 mt-8">

              <div>

                <p className="uppercase tracking-wider text-gray-500 text-sm font-medium">
                  Subject Entity
                </p>

                <div className="flex gap-4 mt-4">

                  <Building2 size={34} />

                  <div>

                    <h3 className="text-3xl">
                      Quantum Dynamics LLC
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Partner ID: PRT-8820
                    </p>

                  </div>

                </div>

              </div>

              <div>

                <p className="uppercase tracking-wider text-gray-500 text-sm font-medium">
                  Detection Timestamp
                </p>

                <h3 className="text-3xl mt-4">
                  Oct 24, 2023 • 14:22:09 UTC
                </h3>

                <p className="text-gray-500 mt-2">
                  Automated Rule: VEL_092_BURST
                </p>

              </div>

            </div>

            <div className="bg-gray-100 mt-8 p-5 border-l-4 border-red-600">

              <h4 className="font-semibold text-2xl mb-3">
                Trigger Summary
              </h4>

              <p className="text-gray-700 leading-relaxed">
                Unusually high frequency of payout requests
                (14 within 60 seconds) to 3 distinct IBANs
                located in offshore jurisdictions previously
                flagged for low KYC compliance.
              </p>

            </div>

          </div>

          {/* NETWORK GRAPH */}

          <div className="col-span-3 bg-white border rounded-xl p-6">

            <div className="h-56 bg-gray-50 rounded-lg flex items-center justify-center">
              <Network size={100} className="text-blue-200" />
            </div>

            <h3 className="text-[34px] font-medium mt-6">
              Network Graph
            </h3>

            <p className="text-gray-500 text-lg mt-3">
              Showing 2nd-degree connections to known
              bad actors.
            </p>

            <button className="mt-8 w-full h-14 bg-indigo-700 text-white rounded-lg font-medium">
              Full Analysis
            </button>

          </div>

        </div>

        {/* EVIDENCE LOGS */}

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8 bg-white border rounded-xl overflow-hidden">

            <div className="flex items-center justify-between px-7 py-6 border-b">

              <h2 className="text-[36px] font-bold text-gray-900">
                Evidence Logs
              </h2>

              <div className="flex gap-3">

                <button>
                  <Filter size={20} />
                </button>

                <button>
                  <Download size={20} />
                </button>

              </div>

            </div>            <div className="p-6 space-y-5">

              <div className="border rounded-lg p-4">
                <div className="font-semibold">
                  Withdrawal Attempt
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  IBAN ending in ...X902 • USD 12,500.00
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="font-semibold">
                  MFA Failure
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  3 unsuccessful attempts from IP 45.12.90.1
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="font-semibold">
                  New Device
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Android 11 • Unrecognized User Agent
                </div>
              </div>

            </div>

          </div>

          {/* TIMELINE */}

          <div className="col-span-4 bg-white border rounded-xl p-7">

            <h2 className="text-[36px] font-bold text-gray-900 mb-8">
              Investigation Timeline
            </h2>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold">
                  Case Created
                </h4>
                <p className="text-gray-500">
                  Oct 24, 14:22
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Initial Review Started
                </h4>
                <p className="text-gray-500">
                  Oct 24, 14:45
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Deep Entity Check Pending
                </h4>
                <p className="text-gray-500">
                  In Progress
                </p>
              </div>

            </div>

            <div className="mt-8">

              <h3 className="uppercase tracking-[3px] text-gray-500 text-sm font-semibold mb-4">
                Analyst Notes
              </h3>

              <textarea
                rows={5}
                className="w-full border rounded-lg p-4"
                placeholder="Add a note..."
              />

              <button className="w-full mt-4 h-14 bg-slate-700 text-white rounded-lg">
                Save Internal Note
              </button>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}