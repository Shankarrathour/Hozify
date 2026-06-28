import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";

import {
  Search,
  ZoomIn,
  RotateCw,
  Download,
  Printer,
  Expand,
  CheckCircle2,
  AlertCircle,
  Circle,
  PlusCircle,
  Pencil,
} from "lucide-react";

export default function RegistrationVerification() {
  const { addToast } = useToast();

  return (
    <AdminShell>

      <div className="min-h-screen bg-[#F3F4F6] p-8">

        {/* Breadcrumb */}

        <div className="mb-3 flex items-center gap-2 text-sm text-[#6B7280]">

          <span>KYC</span>

          <span>›</span>

          <span>Verification Queue</span>

          <span>›</span>

          <span className="font-semibold text-[#111827]">
            REG-2024-8842
          </span>

        </div>

        {/* Company Name */}

        {/* <h1 className="mb-0.5 text-[22px] font-bold text-[#1F2937] ">
          Vanguard Logistics Solutions Ltd.
        </h1> */}

        {/* Top Action Buttons */}

        <div className="mb-7  flex justify-end  gap-4"> 
       <div className="heading mr-35">
      <h1 className="mb-0.5 text-[22px] font-bold text-[#1F2937]   ">
          Vanguard Logistics Solutions Ltd.
        </h1>
</div>
          <button
            onClick={() => addToast("Application successfully flagged for operations review.", "success")}
            className="
              h-12
              rounded-md
              border
              border-[#CFCFCF]
              bg-white
              px-8
              text-[16px]
              font-medium
              cursor-pointer
            "
          >
            Flag for Review
          </button>

          <button
            onClick={() => addToast("Business registration application rejected.", "success")}
            className="
              h-12
              rounded-md
              bg-[#D7191C]
              px-8
              text-white
              text-[16px]
              font-medium
              cursor-pointer
            "
          >
            Reject Application
          </button>

          <button
            onClick={() => addToast("Business registration successfully verified and approved!", "success")}
            className="
              h-12
              rounded-md
              bg-[#2517B8]
              px-8
              text-white
              text-[16px]
              font-medium
              cursor-pointer
            "
          >
            Approve Registration
          </button>

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-12 gap-7">

          {/* LEFT COLUMN */}

          <div className="col-span-12 xl:col-span-7">

                        {/* ================= DOCUMENT PREVIEW ================= */}

            <div className="overflow-hidden rounded-xl border border-[#D1D5DB] bg-white shadow-sm">

              {/* Toolbar */}

              <div className="flex h-[88px] items-center justify-between border-b border-[#D1D5DB] px-7">

                <div className="flex items-center">

                  <div className="flex h-[52px] items-center rounded-md border border-[#C9CED6] px-3">

                    <Search
                      size={20}
                      className="text-[#111827]"
                    />

                    <ZoomIn
                      size={20}
                      className="ml-4 text-[#111827]"
                    />

                    <div className="mx-4 h-6 w-px bg-[#D1D5DB]" />

                    <RotateCw
                      size={20}
                      className="text-[#111827]"
                    />

                  </div>

                  <span className="ml-6 text-[18px] font-medium text-[#4B5563]">
                    Trade_License_2024_VLS.pdf
                  </span>

                </div>

                <div className="flex items-center gap-6">

                  <Download
                    size={26}
                    className="cursor-pointer text-[#111827]"
                  />

                  <Printer
                    size={26}
                    className="cursor-pointer text-[#111827]"
                  />

                  <Expand
                    size={26}
                    className="cursor-pointer text-[#111827]"
                  />

                </div>

              </div>

              {/* PDF Viewer Area */}

              <div className="bg-[#F5F5F5] p-10">

                <div className="flex min-h-[900px] justify-center">

                  {/* Paper */}

                  <div
                    className="
                      w-[560px]
                      bg-white
                      border
                      border-[#D1D5DB]
                      shadow-lg
                      px-14
                      py-14
                    "
                  >

                    {/* Header */}

                    <div className="mb-14 flex justify-between">

                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EEF2F7]">

                        <div className="text-4xl text-[#94A3B8]">
                          🏢
                        </div>

                      </div>

                      <div className="text-right">

                        <h2 className="text-[22px] font-bold text-[#111827]">
                          TRADE LICENSE
                        </h2>

                        <p className="text-[15px] text-[#6B7280]">
                          License No: TL-9920-X1
                        </p>

                      </div>

                    </div>

                    {/* Row */}

                    <div className="mb-12 grid grid-cols-2 gap-10">

                      <div>

                        <p className="mb-2 text-xs font-bold uppercase text-[#6B7280]">
                          Commercial Name
                        </p>

                        <p className="text-[18px] font-semibold text-[#111827]">
                          Vanguard Logistics
                          <br />
                          Solutions Ltd.
                        </p>

                      </div>

                      <div>

                        <p className="mb-2 text-xs font-bold uppercase text-[#6B7280]">
                          Establishment Date
                        </p>

                        <p className="text-[18px] font-semibold text-[#111827]">
                          14 May 2018
                        </p>

                      </div>

                    </div>

                    {/* Address */}

                    <div className="mb-10">

                      <p className="mb-3 text-xs font-bold uppercase text-[#6B7280]">
                        Registered Address
                      </p>

                      <p className="text-[16px] leading-9 text-[#1F2937]">
                        Unit 402, Enterprise Heights,
                        Financial District, South
                        Sector, Metro City, 441022
                      </p>

                    </div>

                    <div className="my-10 border-t border-[#D1D5DB]" />

                    {/* Info Row */}

                    <div className="grid grid-cols-3 gap-8">

                      <div>

                        <p className="mb-2 text-xs font-bold uppercase text-[#6B7280]">
                          Legal Status
                        </p>

                        <p className="text-[16px] text-[#111827]">
                          Limited Liability
                          Company
                        </p>

                      </div>

                      <div>

                        <p className="mb-2 text-xs font-bold uppercase text-[#6B7280]">
                          Issue Date
                        </p>

                        <p className="text-[16px] text-[#111827]">
                          01 Jan 2024
                        </p>

                      </div>

                      <div>

                        <p className="mb-2 text-xs font-bold uppercase text-[#6B7280]">
                          Expiry Date
                        </p>

                        <p className="text-[18px] font-bold text-[#D7191C]">
                          31 Dec 2024
                        </p>

                      </div>

                    </div>

                    <div className="my-10 border-t border-[#D1D5DB]" />
                                        {/* Licensed Activities */}

                    <div>

                      <p className="mb-5 text-xs font-bold uppercase text-[#6B7280]">
                        Licensed Activities
                      </p>

                      <ul className="space-y-4 text-[16px] text-[#111827]">

                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                          <span>
                            International Freight Forwarding & Logistics
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                          <span>
                            Warehousing and Inventory Management
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                          <span>
                            Customs Brokerage Services
                          </span>
                        </li>

                      </ul>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}

          <div className="col-span-12 xl:col-span-5 space-y-6">
                        {/* ================= APPLICATION PROGRESS ================= */}

            <div className="rounded-xl border border-[#D1D5DB] bg-white p-7 shadow-sm">

              <h2 className="mb-8 text-[18px] font-medium uppercase tracking-wider text-[#6B7280]">
                Application Progress
              </h2>

              {/* Progress Row */}

              <div className="mb-8 flex items-center gap-5">

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">

                  <div
                    className="h-full bg-black"
                    style={{ width: "65%" }}
                  />

                </div>

                <span className="text-[18px] font-bold text-[#111827]">
                  65% Complete
                </span>

              </div>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-5">

                {/* Items Verified */}

                <div className="rounded-md bg-[#F3F4F6] p-5">

                  <p className="mb-3 text-xs font-bold uppercase text-[#6B7280]">
                    Items Verified
                  </p>

                  <h3 className="text-[20px] font-bold text-[#111827]">
                    11/17
                  </h3>

                </div>

                {/* Time in Queue */}

                <div className="rounded-md bg-[#F3F4F6] p-5">

                  <p className="mb-3 text-xs font-bold uppercase text-[#6B7280]">
                    Time In Queue
                  </p>

                  <h3 className="text-[20px] font-bold text-[#111827]">
                    4h 12m
                  </h3>

                </div>

              </div>

            </div>

            {/* ================= VERIFICATION CHECKLIST ================= */}

            <div className="overflow-hidden rounded-xl border border-[#D1D5DB] bg-white shadow-sm">

              {/* Header */}

              <div className="flex items-center justify-between border-b border-[#D1D5DB] px-7 py-5">

                <h2 className="text-[18px] font-bold text-[#111827]">
                  Verification Checklist
                </h2>

                <div className="rounded bg-[#DCE7F8] px-3 py-2 text-xs font-bold uppercase text-[#51637D]">
                  Action Required
                </div>

              </div>

              <div className="p-7">
                                {/* ================= ENTITY NAME VERIFICATION ================= */}

                <div className="mb-8">

                  <div className="flex items-start justify-between">

                    <div className="flex gap-4">

                      <CheckCircle2
                        size={28}
                        className="mt-1 text-[#10B981]"
                      />

                      <div>

                        <h3 className="text-[18px] font-bold text-[#111827]">
                          Entity Name Verification
                        </h3>

                      </div>

                    </div>

                    <Pencil
                      size={20}
                      className="text-[#6B7280]"
                    />

                  </div>

                  {/* Success Box */}

                  <div
                    className="
                      mt-4
                      ml-11
                      rounded-md
                      border
                      border-[#B7E4C7]
                      bg-[#EAF8EF]
                      p-5
                    "
                  >

                    <p className="text-[16px] leading-7 text-[#166534]">
                      Match found in National Registry.
                      No discrepancies detected.
                    </p>

                  </div>

                </div>

                {/* ================= LICENSE VALIDITY ================= */}

                <div className="mb-8">

                  <div className="flex items-start justify-between">

                    <div className="flex gap-4">

                      <AlertCircle
                        size={28}
                        className="mt-1 text-[#DC2626]"
                      />

                      <div>

                        <h3 className="text-[18px] font-bold text-[#111827]">
                          License Validity Period
                        </h3>

                      </div>

                    </div>

                    <span
                      className="
                        rounded
                        bg-[#FDE2E2]
                        px-3
                        py-1
                        text-xs
                        font-bold
                        uppercase
                        text-[#DC2626]
                      "
                    >
                      URGENT
                    </span>

                  </div>

                  <div className="ml-11 mt-4">

                    <p className="mb-6 text-[16px] leading-8 text-[#4B5563]">
                      Document expiry date is within 90 days.
                      Check for renewal application or flag
                      for future review.
                    </p>

                    {/* Buttons */}

                    <div className="flex gap-3">

                      <button
                        className="
                          h-11
                          min-w-[130px]
                          rounded
                          bg-[#D7191C]
                          px-6
                          text-[16px]
                          font-semibold
                          text-white
                        "
                      >
                        Invalid
                      </button>

                      <button
                        className="
                          h-11
                          min-w-[130px]
                          rounded
                          bg-[#D1D5DB]
                          px-6
                          text-[16px]
                          font-semibold
                          text-[#1F2937]
                        "
                      >
                        Flag
                      </button>

                      <button
                        className="
                          h-11
                          min-w-[130px]
                          rounded
                          border
                          border-[#D1D5DB]
                          bg-white
                          px-6
                          text-[16px]
                          font-semibold
                          text-[#1F2937]
                        "
                      >
                        Verified
                      </button>

                    </div>

                  </div>

                </div>
                                {/* ================= REGISTERED ADDRESS AUDIT ================= */}

                <div className="mb-8 border-t border-[#E5E7EB] pt-8">

                  <div className="flex items-start justify-between">

                    <div className="flex gap-4">

                      <Circle
                        size={24}
                        className="mt-1 fill-[#111827] text-[#111827]"
                      />

                      <div>

                        <h3 className="text-[18px] font-bold text-[#111827]">
                          Registered Address Audit
                        </h3>

                        <p className="mt-2 text-[15px] text-[#6B7280]">
                          Verify address against utility bill and
                          government registry records.
                        </p>

                      </div>

                    </div>

                    <button
                      className="
                        rounded-md
                        border
                        border-[#D1D5DB]
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-[#374151]
                      "
                    >
                      Compare
                    </button>

                  </div>

                </div>

                {/* ================= UBO & SHAREHOLDERS ================= */}

                <div className="mb-8 border-t border-[#E5E7EB] pt-8">

                  <div className="flex items-start gap-4">

                    <CheckCircle2
                      size={28}
                      className="mt-1 text-[#10B981]"
                    />

                    <div className="flex-1">

                      <h3 className="text-[18px] font-bold text-[#111827]">
                        UBO & Shareholders Review
                      </h3>

                      <div className="mt-5 rounded-md bg-[#F9FAFB] p-5">

                        <div className="flex items-center justify-between">

                          <div>

                            <p className="text-[17px] font-semibold text-[#111827]">
                              Marcus J. Thorne
                            </p>

                            <p className="mt-1 text-[#6B7280]">
                              Beneficial Ownership: 45%
                            </p>

                          </div>

                          <CheckCircle2
                            size={24}
                            className="text-[#10B981]"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* ================= ADD CUSTOM ITEM ================= */}

                <div className="border-t border-[#E5E7EB] pt-8">

                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-lg
                      border-2
                      border-dashed
                      border-[#D1D5DB]
                      bg-[#FAFAFA]
                      py-5
                      text-[16px]
                      font-medium
                      text-[#4B5563]
                    "
                  >
                    <PlusCircle size={20} />

                    Add Custom Checklist Item
                  </button>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </AdminShell>
  );
}
            