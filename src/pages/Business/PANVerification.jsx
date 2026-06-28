import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";

import {
  Eye,
  ZoomIn,
  RotateCw,
  Download,
  Pencil,
  Building2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";

export default function KycVerificationPage() {
  const { addToast } = useToast();

  return (
    <AdminShell>

      <div className="min-h-screen  px-6 py-8">

        {/* Breadcrumb */}

        <div className="mb-10 flex items-center gap-2 text-sm font-medium text-[#5E6172]">

          <span>Dashboard</span>

          <span>›</span>

          <span>KYC Verification</span>

          <span>›</span>

        </div>
        <div className="xl:col-span-7 space-y-6">

  {/* Heading */}
  <div>
    <p className="text-sm font-medium text-slate-500">
      Document Verification
    </p>

    <h2 className="mt-1 text-3xl font-bold text-slate-900">
      PAN Card Verification
    </h2>
  </div>



</div> 


        {/* Top Action Buttons */}

        <div className="mb-10 flex justify-end gap-3">

          <button
            onClick={() => addToast("Draft verification details successfully saved.", "success")}
            className="
              h-14
              px-8
              rounded
              bg-white
              text-[#1A1A1A]
              text-lg
              font-medium
              border
              border-[#D7D7D7]
              cursor-pointer
            "
          >
            Save Draft
          </button>

          <button
            onClick={() => addToast("PAN Card verification review submitted successfully!", "success")}
            className="
              h-14
              px-8
              rounded
              bg-[#2614B8]
              hover:bg-[#1F119B]
              text-white
              text-lg
              font-medium
              cursor-pointer
            "
          >
            Submit Review
          </button>

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-12 gap-6">

          {/* LEFT SIDE */}

          <div className="col-span-12 xl:col-span-7 space-y-6">

            <div className="overflow-hidden rounded-md border border-[#D8D8D8] bg-white">

              {/* Header */}

              <div className="flex h-[78px] items-center justify-between border-b border-[#D8D8D8] px-6">

                <div className="flex items-center gap-4">

                  <Eye
                    size={28}
                    className="text-[#1B1B1B]"
                  />

                  <h2 className="text-[20px] font-semibold text-[#1B1B1B]">
                    PAN Document Preview
                  </h2>

                </div>

                <div className="flex items-center gap-5">

                  <button onClick={() => addToast("Zoomed in document preview", "success")}>
                    <ZoomIn
                      size={23}
                      className="text-[#1B1B1B]"
                    />
                  </button>

                  <button onClick={() => addToast("Rotated document preview 90° clockwise", "success")}>
                    <RotateCw
                      size={23}
                      className="text-[#1B1B1B]"
                    />
                  </button>

                  <button onClick={() => addToast("Downloading PAN document scan...", "success")}>
                    <Download
                      size={23}
                      className="text-[#1B1B1B]"
                    />
                  </button>

                </div>

              </div>

              {/* Preview Area */}

              <div className="bg-[#F3F3F3] p-6">

                <div className="relative flex h-[500px] items-center justify-center overflow-hidden bg-[#ECECEC]">

                  {/* Side shadows */}

                  <div className="absolute left-8 top-8 h-[420px] w-[90px] bg-zinc-300 blur-xl opacity-60" />

                  <div className="absolute right-8 top-8 h-[420px] w-[90px] bg-zinc-300 blur-xl opacity-60" />

                  {/* Center Paper */}

                  <div className="relative flex h-[420px] w-[360px] items-center justify-center bg-[#F8F8F8] shadow-lg">

                    {/* PAN CARD */}

                    <div
                      className="
                        relative
                        h-[135px]
                        w-[245px]
                        rotate-[-10deg]
                        rounded-md
                        border
                        border-[#BFBFBF]
                        bg-gradient-to-r
                        from-[#F2D7BE]
                        via-[#E9E4D6]
                        to-[#CFE5D8]
                        shadow-2xl
                      "
                    >

                      <div className="p-3">

                        <div className="mb-3 text-[7px] font-bold text-[#555]">
                          INCOME TAX DEPARTMENT
                        </div>

                        <div className="flex gap-3">

                          <div className="h-14 w-11 rounded bg-zinc-300" />

                          <div className="flex-1 space-y-2">

                            <div className="h-[5px] w-24 rounded bg-zinc-500" />

                            <div className="h-[5px] w-20 rounded bg-zinc-400" />

                            <div className="h-[5px] w-16 rounded bg-zinc-400" />

                            <div className="h-[5px] w-24 rounded bg-zinc-400" />

                            <div className="mt-3 h-[6px] w-20 rounded bg-zinc-700" />

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Footer */}

              <div className="flex h-[64px] items-center justify-between border-t border-[#D8D8D8] px-5">

                <div className="flex items-center gap-8">

                  <span className="text-[15px] text-[#444]">
                    File Name: pan_card_biz_7782.jpg
                  </span>

                  <span className="text-[15px] text-[#444]">
                    Size: 1.2 MB
                  </span>

                </div>

                <div
                  className="
                    rounded
                    bg-[#DCE7FA]
                    px-4
                    py-2
                    text-[14px]
                    font-medium
                    text-[#64748B]
                  "
                >
                  ⚙ OCR Verified
                </div>

              </div>

            </div>
                        {/* ================= VERIFICATION CONTROLS ================= */}

            <div className="rounded-md border border-[#D8D8D8] bg-white p-7">

              <h2 className="mb-6 text-[24px] font-bold text-[#111111]">
                Verification Controls
              </h2>

              {/* Action Cards */}

              <div className="mb-6 grid grid-cols-2 gap-5">

                {/* Reject */}

                <button
                  onClick={() => addToast("PAN card validation rejected.", "success")}
                  className="
                    flex
                    h-[140px]
                    flex-col
                    items-center
                    justify-center
                    rounded-md
                    border-2
                    border-dashed
                    border-[#F1B7B7]
                    bg-[#FFF8F8]
                    transition
                    hover:bg-[#FFF2F2]
                    cursor-pointer
                  "
                >

                  <XCircle
                    size={42}
                    className="mb-3 text-[#C62828]"
                  />

                  <span className="text-[18px] font-bold tracking-wide text-[#C62828]">
                    REJECT CARD
                  </span>

                </button>

                {/* Approve */}

                <button
                  onClick={() => addToast("PAN card successfully verified and approved!", "success")}
                  className="
                    flex
                    h-[140px]
                    flex-col
                    items-center
                    justify-center
                    rounded-md
                    border-2
                    border-dashed
                    border-[#BFC4CC]
                    bg-[#F5F7FA]
                    transition
                    hover:bg-[#EEF2F7]
                    cursor-pointer
                  "
                >

                  <CheckCircle2
                    size={42}
                    className="mb-3 text-[#5E6C84]"
                  />

                  <span className="text-[18px] font-bold tracking-wide text-[#5E6C84]">
                    APPROVE CARD
                  </span>

                </button>

              </div>

              {/* Notes */}

              <div>

                <label className="mb-3 block text-[16px] font-medium text-[#555]">
                  Internal Verification Notes
                </label>

                <textarea
                  rows={5}
                  placeholder="Add details about the verification status or reason for rejection..."
                  className="
                    w-full
                    resize-none
                    rounded-md
                    border
                    border-[#D8D8D8]
                    bg-[#F8F9FB]
                    px-4
                    py-4
                    text-[#444]
                    outline-none
                    placeholder:text-[#9AA0A6]
                    focus:border-[#2614B8]
                  "
                />

              </div>

            </div>
            </div>
                      {/* ================= RIGHT COLUMN ================= */}

          <div className="col-span-12 xl:col-span-5 space-y-6">

            {/* Metadata Extraction */}

            <div className="rounded-md border border-[#D8D8D8] bg-white p-7">

              <div className="mb-8 flex items-center justify-between">

                <h2 className="text-[24px] font-bold text-[#111111]">
                  Metadata Extraction
                </h2>

                <div className="rounded-full bg-[#EEEEF1] px-4 py-1 text-[14px] font-medium text-[#666]">
                  Scan Accuracy: 98%

                </div>

              </div>

              {/* PAN NUMBER */}

              <div className="mb-5">

                <label className="mb-2 block text-[14px] font-medium uppercase tracking-wide text-[#666]">
                  PAN Number
                </label>

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex-1
                      rounded
                      border
                      border-[#D4D6DA]
                      bg-[#F7F7F8]
                      px-4
                      py-3
                      text-[18px]
                      font-semibold
                      text-[#222]
                    "
                  >
                    ABCDE1234F
                  </div>

                  <button>
                    <Pencil
                      size={22}
                      className="text-[#111]"
                    />
                  </button>

                </div>

              </div>

              {/* HOLDER NAME */}

              <div className="mb-5">

                <label className="mb-2 block text-[14px] font-medium uppercase tracking-wide text-[#666]">
                  Business Name / Holder Name
                </label>

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex-1
                      rounded
                      border
                      border-[#D4D6DA]
                      bg-[#F7F7F8]
                      px-4
                      py-3
                      text-[18px]
                      font-semibold
                      text-[#222]
                    "
                  >
                    HOZIFY ENTERPRISES PRIVATE
                    <br />
                    LIMITED
                  </div>

                  <button onClick={() => addToast("Editing extraction field parameter...", "success")}>
                    <Pencil
                      size={22}
                      className="text-[#111]"
                    />
                  </button>

                </div>

              </div>

              {/* DATE + CATEGORY */}

              <div className="mb-8 grid grid-cols-2 gap-4">

                <div>

                  <label className="mb-2 block text-[14px] font-medium uppercase tracking-wide text-[#666]">
                    Date Of Issue
                  </label>

                  <div
                    className="
                      rounded
                      border
                      border-[#D4D6DA]
                      bg-[#F7F7F8]
                      px-4
                      py-3
                      text-[18px]
                      font-semibold
                      text-[#222]
                    "
                  >
                    12/05/2021
                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-[14px] font-medium uppercase tracking-wide text-[#666]">
                    Category
                  </label>

                  <div
                    className="
                      rounded
                      border
                      border-[#D4D6DA]
                      bg-[#F7F7F8]
                      px-4
                      py-3
                      text-[18px]
                      font-semibold
                      text-[#222]
                    "
                  >
                    Company (C)
                  </div>

                </div>

              </div>

              {/* Divider */}

              <div className="mb-6 border-t border-[#E2E2E2]" />

              <h3 className="mb-4 text-[18px] font-bold text-[#555]">
                VERIFICATION CHECKS
              </h3>

                            {/* ================= VERIFICATION CHECKS ================= */}

              <div className="space-y-3">

                {/* Passed */}

                <div className="flex items-center justify-between rounded bg-[#F3F4F6] px-4 py-3">

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="fill-black text-black"
                    />

                    <span className="text-[16px] text-[#333]">
                      Format Validation
                    </span>

                  </div>

                  <span className="font-bold text-[#444]">
                    PASSED
                  </span>

                </div>

                {/* Passed */}

                <div className="flex items-center justify-between rounded bg-[#F3F4F6] px-4 py-3">

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="fill-black text-black"
                    />

                    <span className="text-[16px] text-[#333]">
                      NSDL API Database Match
                    </span>

                  </div>

                  <span className="font-bold text-[#444]">
                    PASSED
                  </span>

                </div>

                {/* Warning */}

                <div className="flex items-center justify-between rounded bg-[#FFF4F4] px-4 py-3">

                  <div className="flex items-center gap-3">

                    <AlertTriangle
                      size={22}
                      className="text-[#D93025]"
                    />

                    <span className="text-[16px] text-[#333]">
                      Tamper Detection
                    </span>

                  </div>

                  <span className="font-bold text-[#D93025]">
                    WARN: SLIGHT BLUR
                  </span>

                </div>

              </div>

            </div>

            {/* ================= REQUESTER BUSINESS DETAILS ================= */}

            <div className="relative overflow-hidden rounded-md bg-[#2413A7] p-7">

              {/* Decorative Pattern */}

              <div className="absolute right-5 top-4 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 bg-white"
                    />
                  ))}
                </div>
              </div>

              <h3 className="mb-6 text-[18px] font-bold uppercase text-[#BEB7FF]">
                REQUESTER BUSINESS DETAILS
              </h3>

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center bg-[#4B39C7]">
                  <Building2
                    size={28}
                    className="text-white"
                  />
                </div>

                <div>

                  <h4 className="text-[20px] font-bold text-white">
                    Hozify Global Pvt Ltd
                  </h4>

                  <p className="text-[#BEB7FF]">
                    Partner ID: #HZ-99812-B
                  </p>

                </div>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-[#D2CCFF]">
                    Submitted By:
                  </span>

                  <span className="text-white">
                    Rahul Sharma
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-[#D2CCFF]">
                    Submission Date:
                  </span>

                  <span className="text-white">
                    Oct 24, 2023 | 14:32
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-[#D2CCFF]">
                    Account Tier:
                  </span>

                  <span className="text-white">
                    Premium Merchant
                  </span>

                </div>

              </div>

            </div>

            {/* ================= TIMELINE ================= */}

            <div className="rounded-md border border-[#D8D8D8] bg-white p-7">

              <h3 className="mb-8 text-[18px] font-bold text-[#333]">
                TIMELINE
              </h3>

              <div className="relative">

                <div className="absolute left-[5px] top-2 h-full w-[2px] bg-[#E5E7EB]" />

                {/* Item 1 */}

                <div className="relative mb-8 flex gap-5">

                  <div className="z-10 h-[10px] w-[10px] rounded-full bg-black" />

                  <div>

                    <h4 className="text-[18px] font-semibold text-[#222]">
                      OCR Process Completed
                    </h4>

                    <p className="text-[#666]">
                      2 minutes ago
                    </p>

                  </div>

                </div>

                {/* Item 2 */}

                <div className="relative flex gap-5">

                  <div className="z-10 h-[10px] w-[10px] rounded-full bg-[#CFCFD6]" />

                  <div>

                    <h4 className="text-[18px] text-[#555]">
                      Document Uploaded
                    </h4>

                    <p className="text-[#777]">
                      5 minutes ago
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

    