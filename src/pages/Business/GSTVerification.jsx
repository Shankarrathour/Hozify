import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Search,
  Bell,
  Grid3X3,
  ZoomIn,
  ZoomOut,
  Download,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function GSTVerification() {
  return (
    <AdminShell
      activeTab="Compliance"
      searchPlaceholder="Search entity, GSTN, or owner..."
    >
      <div className="min-h-screen bg-[#F5F6FB] flex flex-col">

        {/* ================= TOP HEADER ================= */}

        <div className="h-[78px] bg-[#F5F6FB] border-b border-[#D9DCE8] flex items-center justify-between px-8">

          {/* Left Logo */}

          <div className="flex items-center">
            <h1 className="text-[20px] leading-7 font-black text-[#0F172A]">
              Business
              <br />
              Registry
            </h1>
          </div>

          {/* Center Navigation */}

          <div className="flex items-center gap-10">

            {/* Search */}

            <div className="w-[390px] h-[44px] bg-[#EEF1F9] rounded-2xl flex items-center px-4 gap-3">
              <Search size={18} className="text-slate-500" />

              <input
                type="text"
                placeholder="Search entity, GSTN, or owner..."
                className="bg-transparent outline-none w-full text-[15px] text-slate-700 placeholder:text-slate-500"
              />
            </div>

            {/* Menu */}

            <div className="flex items-center gap-8 text-[16px] font-medium">

              <button className="text-slate-700 hover:text-[#4F46E5]">
                Directory
              </button>

              <button className="text-[#312E81] border-b-[3px] border-[#312E81] pb-[14px] font-semibold">
                Compliance
              </button>

              <button className="text-slate-700 hover:text-[#4F46E5]">
                Risk Management
              </button>

            </div>
          </div>

          {/* Right Actions */}

          <div className="flex items-center gap-6">

            <button>
              <Bell
                size={22}
                className="text-slate-700"
              />
            </button>

            <button>
              <Grid3X3
                size={22}
                className="text-slate-700"
              />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#E4E1FF] flex items-center justify-center text-[#312E81] font-bold">
              AU
            </div>

          </div>

        </div>

        {/* ================= PAGE BODY START ================= */}

        <div className="flex flex-1">
                      {/* ================= LEFT PANEL ================= */}

          <div className="flex-1 border-r border-[#D9DCE8] p-10">

            {/* Task Label */}

            <div className="flex items-center gap-3 mb-4">

              <ShieldCheck
                size={20}
                className="text-[#4F46E5]"
              />

              <span className="text-[14px] tracking-[3px] font-bold text-[#312E81] uppercase">
                Task: GST Validation
              </span>

            </div>

            {/* Title + Actions */}

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-[37px] leading-[60px] font-bold text-[#0F172A]">
                Review Document:
                <br />
                Form GST REG-06
              </h2>

              <div className="flex items-center gap-6">

                <button className="hover:text-[#4F46E5] transition-colors">
                  <ZoomIn size={26} />
                </button>

                <button className="hover:text-[#4F46E5] transition-colors">
                  <ZoomOut size={26} />
                </button>

                <button className="hover:text-[#4F46E5] transition-colors">
                  <Download size={24} />
                </button>

              </div>

            </div>

            {/* Document Preview */}

            <div className="bg-[#0D1525] rounded-2xl overflow-hidden border border-[#1E293B] shadow-xl">

              <div className="relative h-[760px] w-full">

                {/* Background Glow */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#243B55,transparent_70%)] opacity-90" />

                {/* Laptop Mockup */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-[88%]">

                    {/* Screen */}

                    <div className="relative bg-black rounded-[28px] p-5 shadow-2xl border-[3px] border-[#0F172A]">

                      {/* Detection Box Top */}

                      <div className="absolute top-8 left-1/2 -translate-x-1/2 border-4 border-[#6366F1] w-[360px] h-[70px] flex items-center justify-center">

                        <span className="bg-white px-3 py-1 text-[#6366F1] font-bold text-sm tracking-wider">
                          GSTIN DETECTED
                        </span>

                      </div>

                      {/* Fake Document */}

                      <div className="bg-[#E8EEF8] h-[520px] rounded-lg mt-10 overflow-hidden">

                        <div className="h-16 bg-[#4A667D]" />

                        <div className="p-8 space-y-4">

                          <div className="h-3 bg-slate-300 rounded w-1/2" />
                          <div className="h-3 bg-slate-300 rounded w-2/3" />
                          <div className="h-3 bg-slate-300 rounded w-1/3" />

                          <div className="grid grid-cols-2 gap-10 mt-10">

                            <div className="space-y-4">
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                            </div>

                            <div className="space-y-4">
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                              <div className="h-3 bg-slate-300 rounded" />
                            </div>

                          </div>

                          {/* Legal Name Match */}

                          <div className="mt-20 border-4 border-[#6366F1] h-[70px] flex items-center justify-center">

                            <span className="bg-white px-4 py-1 text-[#6366F1] font-bold tracking-wider">
                              LEGAL NAME MATCH
                            </span>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Laptop Base */}

                    <div className="h-6 bg-gradient-to-b from-slate-200 to-slate-500 rounded-b-full shadow-lg" />

                  </div>

                </div>

              </div>

            </div>

          </div>
                    {/* ================= RIGHT SIDEBAR ================= */}

          <div className="w-[430px] bg-[#F5F6FB] p-7 space-y-7">

            {/* Business Details Card */}

            <div className="bg-white border border-[#D7DCEA] rounded-2xl p-6">

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-lg bg-[#07132B] flex items-center justify-center">
                  <Building2
                    size={30}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[13px] font-bold tracking-[2px] uppercase text-slate-500">
                    Business Legal Name
                  </p>

                  <h3 className="text-[20px] font-bold text-[#0F172A] mt-1">
                    Lumina Tech Solutions
                    <br />
                    PVT LTD
                  </h3>
                </div>

              </div>

              {/* GST Number */}

              <div className="mt-8">

                <p className="text-[13px] font-bold tracking-[2px] uppercase text-slate-500 mb-2">
                  GST Number
                </p>

                <div className="h-[52px] bg-[#EEF1F8] border border-[#DCE1EC] rounded flex items-center justify-between px-4">

                  <span className="font-medium tracking-wide text-[#334155]">
                    27AAAAA0000A1Z5
                  </span>

                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>

                </div>

              </div>

              {/* Details Grid */}

              <div className="grid grid-cols-2 gap-y-8 gap-x-6 mt-8">

                <div>
                  <p className="text-[13px] font-bold tracking-[2px] uppercase text-slate-500">
                    Reg. Date
                  </p>

                  <p className="mt-2 text-[18px] font-medium text-[#0F172A]">
                    Oct 14, 2021
                  </p>
                </div>

                <div>
                  <p className="text-[13px] font-bold tracking-[2px] uppercase text-slate-500">
                    Taxpayer Type
                  </p>

                  <p className="mt-2 text-[18px] font-medium text-[#0F172A]">
                    Regular
                  </p>
                </div>

                <div className="col-span-2">
                  <p className="text-[13px] font-bold tracking-[2px] uppercase text-slate-500">
                    Constitution
                  </p>

                  <p className="mt-2 text-[18px] font-medium text-[#0F172A]">
                    Private Limited Company
                  </p>
                </div>

              </div>

            </div>
                        {/* ================= AI VERIFICATION CARD ================= */}

            <div className="bg-[#F4F2FF] border border-[#CFCBFF] rounded-2xl p-6 relative overflow-hidden">

              {/* Bot Icon */}

              <div className="absolute top-5 right-5 opacity-20">

                <svg
                  className="w-16 h-16 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 3h6m-3 0v3m-7 4h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm3 4h.01M16 16h.01"
                  />
                </svg>

              </div>

              {/* Heading */}

              <div className="flex items-center gap-2 mb-5">

                <span className="text-[#6366F1] text-xl">✦</span>

                <h4 className="text-[14px] font-bold tracking-[2px] uppercase text-[#6366F1]">
                  AI Verification Result
                </h4>

              </div>

              {/* Score */}

              <div className="flex items-end gap-3 mb-6">

                <span className="text-[58px] leading-none font-black text-[#5B5CEB]">
                  98%
                </span>

                <span className="text-[18px] text-slate-600 mb-2">
                  Confidence
                </span>

              </div>

              {/* Checks */}

              <div className="bg-white rounded-xl p-5 border border-[#E5E7EB] space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-[18px] text-slate-700">
                    GSTIN Match
                  </span>

                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">
                      ✓
                    </span>
                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-[18px] text-slate-700">
                    Logo Integrity
                  </span>

                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">
                      ✓
                    </span>
                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-[18px] text-slate-700">
                    Date Alignment
                  </span>

                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">
                      ✓
                    </span>
                  </div>

                </div>

              </div>

              {/* Description */}

              <p className="mt-6 text-[15px] italic leading-7 text-slate-600">
                "System has successfully cross-referenced the GSTIN with the
                central government portal. Signature and Seal are consistent
                with regional norms."
              </p>

            </div>
                        {/* ================= ACTIVITY FEED ================= */}

            <div className="bg-white border border-[#D7DCEA] rounded-2xl p-6">

              <h4 className="text-[14px] font-bold tracking-[2px] uppercase text-slate-500 mb-6">
                Activity Feed
              </h4>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      GSTIN Validation Successful
                    </p>

                    <p className="text-sm text-slate-500">
                      Government database matched successfully.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-indigo-500 mt-2" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      AI Analysis Completed
                    </p>

                    <p className="text-sm text-slate-500">
                      Document authenticity score generated.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-2" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Awaiting Compliance Approval
                    </p>

                    <p className="text-sm text-slate-500">
                      Manual review required before approval.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM ACTION BAR ================= */}

        <div className="sticky bottom-0 bg-white border-t border-[#D7DCEA] px-8 py-5 flex items-center justify-end gap-4">

          <button className="h-12 px-8 rounded-xl border border-red-300 text-red-600 font-semibold hover:bg-red-50 transition">
            Reject With Reason
          </button>

          <button className="h-12 px-10 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold shadow-lg transition">
            Verify & Approve
          </button>

        </div>

      </div>
    </AdminShell>
  );
}
    