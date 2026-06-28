import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { Search, ArrowRight, Download } from "lucide-react";

const topReferrers = [
  {
    rank: 2,
    name: "Elena Vance",
    role: "Enterprise Partner",
    referrals: 1240,
    earned: "$12,400",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rank: 1,
    name: "Julian Thorne",
    role: "Global Ambassador",
    referrals: 3892,
    earned: "$45,210",
    highlight: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rank: 3,
    name: "Sarah Chen",
    role: "Top Contributor",
    referrals: 945,
    earned: "$8,920",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const rankingData = [
  { rank: "#4", name: "Marcus Wright", referrals: 812, earned: "$6,540.00", activity: "+12% this week", color: "text-green-600" },
  { rank: "#5", name: "Linda Okafor", referrals: 754, earned: "$5,920.00", activity: "Stable", color: "text-slate-500" },
  { rank: "#6", name: "David Kim", referrals: 689, earned: "$5,100.00", activity: "+5% this week", color: "text-green-600" },
  { rank: "#7", name: "Bradley Smith", referrals: 620, earned: "$4,850.00", activity: "-2% this week", color: "text-red-500" },
  { rank: "#8", name: "Aisha Malik", referrals: 590, earned: "$4,420.00", activity: "+3% this week", color: "text-green-600" },
  { rank: "#9", name: "John Carter", referrals: 512, earned: "$3,980.00", activity: "Stable", color: "text-slate-500" },
  { rank: "#10", name: "Neha Sharma", referrals: 488, earned: "$3,760.00", activity: "+8% this week", color: "text-green-600" },
];

function TopCard({ data, onViewProfile }) {
  return (
    <div
      onClick={onViewProfile}
      className={`relative rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-200 flex flex-col justify-between min-h-[220px] ${
        data.highlight
          ? "bg-indigo-900 text-white scale-105 z-10 border-indigo-950"
          : "bg-white"
      }`}
    >
      {/* rank badge */}
      <div className="absolute top-4 right-4 text-5xl font-black opacity-10">
        {data.rank}
      </div>

      {/* avatar */}
      <div className="relative w-16 h-16 mx-auto">
        <img
          src={data.image}
          alt=""
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-indigo-650 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-white">
          Rank {data.rank}
        </div>
      </div>

      {/* name */}
      <div className="mt-4">
        <h3 className="text-sm font-black">{data.name}</h3>
        <p className="text-[10px] opacity-75 mt-0.5 font-bold uppercase tracking-wider">{data.role}</p>
      </div>

      {/* stats */}
      <div className="flex justify-between mt-4 text-xs font-semibold px-2">
        <div>
          <p className="text-[9px] opacity-70 uppercase font-extrabold">Referrals</p>
          <p className="font-black mt-0.5">{data.referrals}</p>
        </div>
        <div>
          <p className="text-[9px] opacity-70 uppercase font-extrabold">Earned</p>
          <p className="font-black mt-0.5">{data.earned}</p>
        </div>
      </div>

      {/* button */}
      <button 
        onClick={(e) => { e.stopPropagation(); onViewProfile(); }}
        className="mt-4 text-[10px] font-extrabold flex items-center gap-1 mx-auto hover:underline cursor-pointer uppercase tracking-wider"
      >
        <span>View Profile</span>
        <ArrowRight size={12} />
      </button>
    </div>
  );
}

export default function ReferralLeaderboardPage() {
  const { addToast } = useToast();
  const [filterPeriod, setFilterPeriod] = useState("This Month");

  return (
    <AdminShell activeTab="Referrals">
      <div className="bg-slate-100 min-h-screen p-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">
              Referrer Leaderboard
            </h1>
            <p className="text-slate-550 text-sm mt-1">
              A live ranking of your top performing advocates and their impact.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => { setFilterPeriod("This Month"); addToast("Filtered ranking period: This Month", "success"); }}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${filterPeriod === "This Month" ? "bg-indigo-900 border-indigo-900 text-white" : "bg-white border-slate-300 hover:bg-slate-50 text-slate-700"}`}
            >
              This Month
            </button>
            <button 
              onClick={() => { setFilterPeriod("All Time"); addToast("Filtered ranking period: All Time", "success"); }}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${filterPeriod === "All Time" ? "bg-indigo-900 border-indigo-900 text-white" : "bg-white border-slate-300 hover:bg-slate-50 text-slate-700"}`}
            >
              All Time
            </button>
          </div>
        </div>

        {/* TOP 3 Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {topReferrers.map((item, i) => (
            <TopCard 
              key={i} 
              data={item} 
              onViewProfile={() => addToast(`Opening detailed advocate profile dashboard for ${item.name}`, "success")}
            />
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {/* table header */}
          <div className="flex justify-between items-center p-5 border-b border-slate-200">
            <h2 className="font-bold text-sm text-slate-900">Detailed Ranking</h2>

            <div className="flex items-center gap-3">
              <div 
                onClick={() => addToast("Opening rank search filter...", "success")}
                className="flex items-center gap-2 border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all"
              >
                <Search size={13} />
                <span>Search Rank</span>
              </div>

              <button 
                onClick={() => addToast("Exporting leaderboard rankings CSV...", "success")}
                className="text-indigo-700 hover:text-indigo-900 font-bold text-xs cursor-pointer flex items-center gap-1"
              >
                <Download size={13} />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-gray-500 font-bold uppercase text-[10px] border-b border-slate-200">
                <tr>
                  <th className="p-4 pl-6">Rank</th>
                  <th>Name</th>
                  <th>Referrals</th>
                  <th>Earned</th>
                  <th>Activity</th>
                  <th className="text-right pr-6">Action</th>
                </tr>
              </thead>

              <tbody>
                {rankingData.map((item, i) => (
                  <tr 
                    key={i} 
                    onClick={() => addToast(`Opening detailed advocate profile dashboard for ${item.name}`, "success")}
                    className="border-t border-slate-100 hover:bg-slate-50 transition-all cursor-pointer font-medium"
                  >
                    <td className="p-5 pl-6 font-bold text-slate-800">{item.rank}</td>
                    <td className="font-bold text-slate-900">{item.name}</td>
                    <td className="font-semibold text-slate-650">{item.referrals}</td>
                    <td className="font-black text-slate-900">{item.earned}</td>
                    <td className={`${item.color} font-bold`}>{item.activity}</td>
                    <td className="text-right pr-6" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => addToast(`Opening detailed advocate profile dashboard for ${item.name}`, "success")}
                        className="text-indigo-700 hover:text-indigo-900 font-bold cursor-pointer hover:underline text-xs"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}