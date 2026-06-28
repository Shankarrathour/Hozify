import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";

function StepItem({ number, title, active }) {
  return (
    <div className="flex items-center flex-1">
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
            active
              ? "bg-indigo-900 border-indigo-900 text-white"
              : "bg-white border-slate-300 text-slate-500"
          }`}
        >
          {number}
        </div>

        <span
          className={`mt-2 text-xs font-medium ${
            active ? "text-indigo-900" : "text-slate-500"
          }`}
        >
          {title}
        </span>
      </div>

      {number !== 4 && (
        <div className="flex-1 h-px bg-slate-300 mx-4 mb-6"></div>
      )}
    </div>
  );
}

export default function CreateCampaignPage() {
  const { addToast } = useToast();

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="min-h-screen bg-slate-200 p-4 md:p-6 lg:p-8">

        {/* STEPPER */}
        <div className="bg-white border border-slate-300 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <StepItem
              number="1"
              title="Details"
              active={true}
            />
            <StepItem
              number="2"
              title="Rewards"
            />
            <StepItem
              number="3"
              title="Rules"
            />
            <StepItem
              number="4"
              title="Launch"
            />
          </div>
        </div>

        {/* FORM CARD */}
        <div className="mt-6 bg-white border border-slate-300 rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-black text-slate-900">
            Campaign Identity
          </h1>

          <p className="text-slate-600 mt-2 mb-8 text-sm">
            Provide the foundational information for your referral program.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Campaign Name
              </label>

              <input
                type="text"
                placeholder="e.g. Q4 Loyalty Boost"
                className="w-full h-12 px-4 border border-slate-400 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Internal Campaign ID
              </label>

              <input
                type="text"
                placeholder="CAM-2023-001"
                className="w-full h-12 px-4 border border-slate-400 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Campaign Description
            </label>

            <textarea
              rows={5}
              placeholder="Briefly describe the purpose and goals of this campaign..."
              className="w-full border border-slate-400 rounded-lg bg-slate-50 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Start Date
              </label>

              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full h-12 px-4 border border-slate-400 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                End Date
              </label>

              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full h-12 px-4 border border-slate-400 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 mt-10 pt-8 flex justify-end">
            <button 
              onClick={() => addToast("Campaign details saved! Loading Step 2: Rewards Setup...", "success")}
              className="bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-3 rounded-lg font-bold tracking-wide transition-all cursor-pointer text-sm shadow-sm"
            >
              CONTINUE
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}