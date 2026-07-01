import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { Download, Plus, MoreVertical, Sparkles, Target, ShieldAlert } from "lucide-react";

const MOCK_REFERRALS = [
  { id: "#REF-88421", initials: "JD", referrer: "Jane Doe", referee: "Michael Smith", campaign: "Summer Growth", date: "2023-10-12", status: "SUCCESSFUL", amount: "$50.00" },
  { id: "#REF-88419", initials: "RK", referrer: "Robert King", referee: "Sarah Wilson", campaign: "Q3 Loyalty", date: "2023-10-11", status: "PENDING", amount: "$25.00" },
  { id: "#REF-88415", initials: "EL", referrer: "Elena Lopez", referee: "Chris Jordan", campaign: "Summer Growth", date: "2023-10-10", status: "REJECTED", amount: "$0.00" },
  { id: "#REF-88408", initials: "AW", referrer: "Alex Wong", referee: "Samantha Reed", campaign: "Influencer Tier 1", date: "2023-10-09", status: "SUCCESSFUL", amount: "$100.00" },
];

function StatusBadge({ status }) {
  const styles = {
    SUCCESSFUL: "bg-emerald-105 text-emerald-700 bg-emerald-50 border border-emerald-100",
    PENDING: "bg-amber-105 text-amber-700 bg-amber-50 border border-amber-100",
    REJECTED: "bg-rose-105 text-rose-700 bg-rose-50 border border-rose-100",
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function ReferralListingPage() {
  const { addToast } = useToast();
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [campaignFilter, setCampaignFilter] = useState("All Campaigns");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const filteredReferrals = MOCK_REFERRALS.filter((ref) => {
    const matchesStatus = statusFilter === "All Statuses" || ref.status === statusFilter;
    const matchesCampaign = campaignFilter === "All Campaigns" || ref.campaign === campaignFilter;
    const matchesStartDate = !startDate || ref.date >= startDate;
    const matchesEndDate = !endDate || ref.date <= endDate;
    return matchesStatus && matchesCampaign && matchesStartDate && matchesEndDate;
  });

  const handleClearFilters = () => {
    setStatusFilter("All Statuses");
    setCampaignFilter("All Campaigns");
    setStartDate("");
    setEndDate("");
  };

  return (
    <AdminShell
      activeTab="Referrals"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="p-4 md:p-6 lg:p-8 bg-slate-100 min-h-screen">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-black text-indigo-955">
              Referral Listing
            </h1>
            <p className="text-slate-550 mt-1 text-sm">
              Manage and monitor all individual referral transactions across active campaigns.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => addToast("Exporting complete referral transactions CSV...", "success")}
              className="flex items-center gap-2 bg-white border border-slate-300 px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
            >
              <Download size={13}/>
              <span>Export CSV</span>
            </button>

            {/* <button 
              onClick={() => addToast("Opening Create Referral panel wizard...", "success")}
              className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-850 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              <Plus size={13}/>
              <span>Create Referral</span>
            </button> */}
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Card 1 */}
          <div 
            onClick={() => addToast("Card clicked: Total Paid Rewards details", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Total Paid Rewards
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  $42,850
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Sparkles size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <span className="text-[9px] text-emerald-600 font-semibold">↑ 12% vs last month</span>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => addToast("Card clicked: Conversion Rate analytics", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Conversion Rate
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  24.8%
                </h3>
              </div>
              <div className="text-indigo-700 mt-0.5">
                <Target size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full">
              <div className="w-16 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-700 w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => addToast("Card clicked: Pending Verification case list", "success")}
            className="p-3 min-h-[80px] bg-white border border-slate-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-slate-500">
                  Pending Verification
                </p>
                <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  156
                </h3>
              </div>
              <div className="text-red-500 mt-0.5">
                <ShieldAlert size={14} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => addToast("Opening validation queue review dashboard...", "success")}
                className="text-[9px] font-extrabold text-indigo-700 hover:text-indigo-900 transition-all cursor-pointer"
              >
                Action Required
              </button>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="bg-white border border-slate-300 rounded-2xl p-4 mb-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold bg-white outline-none cursor-pointer"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="SUCCESSFUL">Successful</option>
              <option value="PENDING">Pending</option>
              <option value="REJECTED">Rejected</option>
            </select>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold outline-none"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold outline-none"
            />

            <select 
              value={campaignFilter}
              onChange={(e) => setCampaignFilter(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold bg-white outline-none cursor-pointer"
            >
              <option value="All Campaigns">All Campaigns</option>
              <option value="Summer Growth">Summer Growth</option>
              <option value="Q3 Loyalty">Q3 Loyalty</option>
              <option value="Influencer Tier 1">Influencer Tier 1</option>
            </select>

            <button 
              onClick={handleClearFilters}
              className="text-indigo-700 hover:text-indigo-900 font-bold text-xs cursor-pointer transition-all self-center text-left md:text-center"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead className="bg-slate-50">
                <tr className="text-left text-[10px] font-bold text-slate-500 uppercase border-b border-slate-200">
                  <th className="px-4 py-4">REFERRAL ID</th>
                  <th className="px-4 py-4">REFERRER NAME</th>
                  <th className="px-4 py-4">REFEREE NAME</th>
                  <th className="px-4 py-4">CAMPAIGN</th>
                  <th className="px-4 py-4">DATE</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">REWARD</th>
                  <th className="px-4 py-4 text-right pr-6">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {filteredReferrals.map((row, idx) => (
                  <tr 
                    key={idx}
                    onClick={() => addToast(`Opening verification dashboard for referral transaction ${row.id}`, "success")}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer font-medium"
                  >
                    <td className="px-4 py-4 font-bold text-indigo-900 text-xs">{row.id}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-extrabold text-indigo-700">
                          {row.initials}
                        </div>
                        <span className="text-xs font-bold text-slate-800">{row.referrer}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-650">{row.referee}</td>
                    <td className="px-4 py-4">
                      <span className="bg-indigo-50 text-indigo-700 text-[9px] px-2.5 py-0.5 rounded font-extrabold uppercase border border-indigo-100">
                        {row.campaign}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-400 font-semibold">{row.date}</td>
                    <td className="px-4 py-4">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-4 py-4 font-black text-slate-900 text-xs">{row.amount}</td>
                    <td className="px-4 py-4 text-right pr-6" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => addToast(`Opening configuration menu for referral ${row.id}`, "success")}
                        className="hover:text-indigo-900 cursor-pointer"
                        aria-label={`Actions for referral ${row.id}`}
                      >
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center p-4 border-t border-slate-200 text-xs text-slate-500">
            <p>
              Showing 1 to {filteredReferrals.length} of 1,248 referrals
            </p>

            <div className="flex gap-2 mt-3 md:mt-0">
              <button onClick={() => addToast("Loaded page 1", "success")} className="w-8 h-8 border border-slate-300 rounded hover:bg-slate-50 transition-all font-semibold flex items-center justify-center cursor-pointer">1</button>
              <button onClick={() => addToast("Loaded page 2", "success")} className="w-8 h-8 border border-slate-300 rounded hover:bg-slate-50 transition-all font-semibold flex items-center justify-center cursor-pointer">2</button>
              <button onClick={() => addToast("Loaded page 3", "success")} className="w-8 h-8 border border-slate-300 rounded hover:bg-slate-50 transition-all font-semibold flex items-center justify-center cursor-pointer">3</button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}