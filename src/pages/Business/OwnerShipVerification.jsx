import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";

import {
  Bell,
  Settings,
  ShieldCheck,
  TriangleAlert,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function OwnershipVerification() {
  const { addToast } = useToast();

  return (
    <AdminShell>
      <div className="min-h-screen bg-[#F5F6F8] p-8">

        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-[14px] text-[#70707A]">
          <span>Partners</span>
          <span>/</span>
          <span>Global Logistics Solutions Ltd</span>
          <span>/</span>
          <span className="font-semibold text-[#111827]">
            Ownership Verification
          </span>
        </div>

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-[37px] font-bold leading-none text-[#111827]">
              Ultimate Beneficial Owner (UBO) Audit
            </h1>
            <p className="mt-4 text-[18px] text-[#5E6470]">
              ID: VER-99201-GLS • Reviewing significant control and
              shareholding structures.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => addToast("Ownership structure flagged for revision.", "success")}
              className="
                h-[54px]
                rounded-md
                border
                border-[#CFCFD4]
                bg-white
                px-10
                text-[18px]
                font-medium
                text-[#333]
                cursor-pointer
              "
            >
              Flag for Revision
            </button>

            <button
              onClick={() => addToast("Ownership hierarchy successfully verified and approved!", "success")}
              className="
                h-[54px]
                rounded-md
                bg-[#2417B8]
                px-10
                text-[18px]
                font-medium
                text-white
                cursor-pointer
              "
            >
              Approve Identity Set
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-7">

          {/* LEFT COLUMN */}
          <div className="col-span-12 xl:col-span-7 space-y-7">
            
            {/* ================= SHAREHOLDING HIERARCHY ================= */}
            <div className="rounded-xl border border-[#D7D9E0] bg-white p-7 shadow-sm">
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-[24px] font-bold text-[#111827]">
                  Shareholding Hierarchy
                </h2>
                <div className="flex gap-3">
                  <div className="rounded bg-[#EEF2FF] px-4 py-2 text-[14px] font-semibold text-[#64748B]">
                    Total Stakes: 100%
                  </div>
                  <div className="rounded bg-[#FFF1F1] px-4 py-2 text-[14px] font-semibold text-[#DC2626]">
                    Unverified: 15%
                  </div>
                </div>
              </div>

              {/* Hierarchy Area */}
              <div
                className="
                  relative
                  h-[620px]
                  rounded-xl
                  border
                  border-dashed
                  border-[#D7D9E0]
                  bg-[#FAFAFB]
                  p-8
                "
              >
                {/* Parent Company */}
                <div className="flex justify-center">
                  <div
                    className="
                      w-[380px]
                      rounded-md
                      bg-[#2417B8]
                      py-6
                      text-center
                      shadow-lg
                    "
                  >
                    <h3 className="text-[18px] font-bold text-white">
                      Global Logistics Solutions Ltd
                    </h3>
                    <p className="text-[15px] text-[#D7D5FF]">
                      Holding Entity
                    </p>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="mt-6 h-[120px] w-[4px] bg-[#D9D9DF]" />
                </div>

                {/* Connector Split */}
                <div className="relative mx-auto -mt-2 h-[4px] w-[420px] bg-[#D9D9DF]">
                  <div className="absolute left-0 top-0 h-[120px] w-[4px] bg-[#D9D9DF]" />
                  <div className="absolute left-1/2 top-0 h-[120px] w-[4px] -translate-x-1/2 bg-[#D9D9DF]" />
                  <div className="absolute right-0 top-0 h-[120px] w-[4px] bg-[#D9D9DF]" />
                </div>

                {/* Stakeholders */}
                <div className="mt-[120px] grid grid-cols-3 gap-8">
                  {/* Marcus Vane */}
                  <div
                    className="
                      rounded-lg
                      border-2
                      border-[#D9E7FF]
                      bg-white
                      p-6
                      text-center
                      shadow-sm
                    "
                  >
                    <h3 className="text-[18px] font-bold text-[#111827]">
                      Marcus Vane
                    </h3>
                    <p className="mt-2 text-[16px] text-[#6B7280]">
                      45% Ownership
                    </p>
                    <div className="mt-4 flex justify-center">
                      <ShieldCheck size={18} className="text-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Elena Rodriguez */}
                  <div
                    className="
                      rounded-lg
                      border-2
                      border-[#FFD5D5]
                      bg-white
                      p-6
                      text-center
                      shadow-sm
                    "
                  >
                    <h3 className="text-[18px] font-bold text-[#111827]">
                      Elena Rodriguez
                    </h3>
                    <p className="mt-2 text-[16px] text-[#6B7280]">
                      40% Ownership
                    </p>
                    <div className="mt-4 flex justify-center">
                      <TriangleAlert size={18} className="text-[#DC2626]" />
                    </div>
                  </div>

                  {/* Minor Stakeholders */}
                  <div
                    className="
                      rounded-lg
                      border
                      border-[#E5E7EB]
                      bg-[#FAFAFA]
                      p-6
                      text-center
                    "
                  >
                    <h3 className="text-[18px] font-bold text-[#666]">
                      Minor Stakeholders
                    </h3>
                    <p className="mt-2 text-[16px] text-[#9CA3AF]">
                      15% Aggregate
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Lock size={18} className="text-[#9CA3AF]" />
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <p className="mt-10 italic text-[16px] text-[#6B7280]">
                  Visualization based on company registry filing date: Oct 12, 2023.
                </p>
              </div>
            </div>

            {/* ================= SCREENING & SANCTIONS ================= */}
            <div className="rounded-xl border border-[#D7D9E0] bg-white p-7 shadow-sm">
              <div className="mb-7 flex items-center justify-between">
                <h2 className="text-[24px] font-bold text-[#111827]">
                  Screening & Sanctions
                </h2>
                <div className="rounded bg-[#EEF2FF] px-4 py-2 text-sm font-semibold text-[#64748B]">
                  2 Records
                </div>
              </div>

              {/* Marcus */}
              <div className="mb-4 rounded-lg border border-[#D8F3DC] bg-[#F0FDF4] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827]">
                      Marcus Vane
                    </h3>
                    <p className="mt-1 text-[#6B7280]">
                      Global Watchlist Screening
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[#16A34A]" />
                    <span className="font-bold text-[#16A34A]">PASSED</span>
                  </div>
                </div>
              </div>

              {/* Elena */}
              <div className="rounded-lg border border-[#FED7AA] bg-[#FFF7ED] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827]">
                      Elena Rodriguez
                    </h3>
                    <p className="mt-1 text-[#6B7280]">
                      Enhanced Due Diligence Required
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TriangleAlert size={20} className="text-[#EA580C]" />
                    <span className="font-bold text-[#EA580C]">
                      ATTENTION REQUIRED
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 xl:col-span-5 space-y-7">
            
            {/* ================= IDENTITY DOCUMENTS ================= */}
            <div className="rounded-xl border border-[#D7D9E0] bg-white shadow-sm">
              <div className="p-7">
                <h2 className="mb-8 text-[24px] font-bold text-[#111827]">
                  Identity Documents
                </h2>

                {/* Tabs */}
                <div className="mb-8 flex gap-10 border-b border-[#D7D9E0]">
                  <button
                    className="
                      border-b-4
                      border-black
                      pb-4
                      text-[18px]
                      font-semibold
                      text-[#111827]
                    "
                  >
                    Elena Rodriguez
                  </button>
                  <button
                    className="
                      pb-4
                      text-[18px]
                      font-medium
                      text-[#8B8B95]
                    "
                  >
                    Marcus Vane
                  </button>
                </div>

                {/* Passport Preview */}
                <div
                  className="
                    relative
                    mb-5
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#D7D9E0]
                    bg-[#F9F4EC]
                  "
                >
                  {/* Expiring Badge */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      rounded
                      bg-[#D7191C]
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    EXPIRING SOON
                  </div>
                  <div className="h-[270px] bg-[linear-gradient(135deg,#F6D7B8,#F8F1E7,#D9F0E2)]" />
                </div>

                {/* Status Cards */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-md border border-[#D7D9E0] bg-[#F8F8F9] p-5">
                    <p className="mb-3 text-xs font-bold uppercase text-[#6B7280]">
                      OCR Status
                    </p>
                    <p className="text-[18px] font-semibold text-[#16A34A]">
                      ⊙ 98.4% Match
                    </p>
                  </div>

                  <div className="rounded-md border border-[#D7D9E0] bg-[#F8F8F9] p-5">
                    <p className="mb-3 text-xs font-bold uppercase text-[#6B7280]">
                      Liveness Check
                    </p>
                    <p className="text-[18px] font-semibold text-[#16A34A]">
                      ⊙ Verified
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-5">
                  <div className="flex justify-between">
                    <span className="text-[16px] text-[#6B7280]">
                      Document Number
                    </span>
                    <span className="text-[18px] font-bold text-[#111827]">
                      E8921004X
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[16px] text-[#6B7280]">
                      Date of Birth
                    </span>
                    <span className="text-[18px] font-bold text-[#111827]">
                      24 Jan 1982
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[16px] text-[#6B7280]">
                      Expiry Date
                    </span>
                    <span className="text-[18px] font-bold text-[#DC2626]">
                      15 Nov 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= VERIFICATION AUDIT ================= */}
            <div className="rounded-xl border border-[#D7D9E0] bg-white p-7 shadow-sm">
              <h2 className="mb-8 text-[24px] font-bold text-[#111827]">
                Verification Audit
              </h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[10px] top-2 h-[220px] w-[2px] bg-[#E5E7EB]" />

                {/* Item 1 */}
                <div className="relative mb-8 flex gap-5">
                  <div className="z-10 h-5 w-5 rounded-full bg-black" />
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827]">
                      Identity Documents Reviewed
                    </h3>
                    <p className="text-[#6B7280]">Today • 09:42 AM</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative mb-8 flex gap-5">
                  <div className="z-10 h-5 w-5 rounded-full bg-[#6B7280]" />
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827]">
                      Shareholding Structure Confirmed
                    </h3>
                    <p className="text-[#6B7280]">Oct 14, 2023</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex gap-5">
                  <div className="z-10 h-5 w-5 rounded-full bg-[#D1D5DB]" />
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827]">
                      Initial Ownership Filing
                    </h3>
                    <p className="text-[#6B7280]">Oct 12, 2023</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div> {/* MAIN GRID END */}
      </div>
    </AdminShell>
  );
}