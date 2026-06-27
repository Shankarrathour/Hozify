import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Search, ArrowRight } from "lucide-react";

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

function TopCard({ data }) {
  return (
    <div
      className={`relative rounded-2xl p-6 text-center shadow-md transition-all ${
        data.highlight
          ? "bg-indigo-900 text-white scale-105 z-10"
          : "bg-white"
      }`}
    >
      {/* rank badge */}
      <div className="absolute top-4 right-4 text-6xl font-extrabold opacity-10">
        {data.rank}
      </div>

      {/* avatar */}
      <div className="relative w-20 h-20 mx-auto">
        <img
          src={data.image}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
        />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
          {data.rank}
        </div>
      </div>

      {/* name */}
      <h3 className="mt-4 text-lg font-bold">{data.name}</h3>
      <p className="text-xs opacity-70">{data.role}</p>

      {/* stats */}
      <div className="flex justify-between mt-6 text-sm">
        <div>
          <p className="text-xs opacity-70">Referrals</p>
          <p className="font-bold">{data.referrals}</p>
        </div>
        <div>
          <p className="text-xs opacity-70">Earned</p>
          <p className="font-bold">{data.earned}</p>
        </div>
      </div>

      {/* button */}
      <button className="mt-5 text-xs font-semibold flex items-center gap-1 mx-auto">
        View Profile <ArrowRight size={14} />
      </button>
    </div>
  );
}

export default function ReferralLeaderboardPage() {
  return (
    <AdminShell activeTab="Referrals">
      <div className="bg-slate-100 min-h-screen p-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Referrer Leaderboard
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              A live ranking of your top performing advocates and their impact.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white rounded-lg border text-sm">
              This Month
            </button>
            <button className="px-4 py-2 bg-white rounded-lg border text-sm">
              All Time
            </button>
          </div>
        </div>

        {/* TOP 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {topReferrers.map((item, i) => (
            <TopCard key={i} data={item} />
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          {/* table header */}
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="font-bold">Detailed Ranking</h2>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm">
                <Search size={14} />
                Search
              </div>

              <button className="text-indigo-700 font-semibold text-sm">
                Export CSV
              </button>
            </div>
          </div>

          {/* table */}
          <table className="w-full text-base">
            <thead className="bg-slate-100 text-left text-sm">
              <tr>
                <th className="p-4">Rank</th>
                <th>Name</th>
                <th>Referrals</th>
                <th>Earned</th>
                <th>Activity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {rankingData.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-5 font-bold text-base">{item.rank}</td>
                  <td className="text-base font-medium">{item.name}</td>
                  <td className="text-base">{item.referrals}</td>
                  <td className="font-semibold text-base">{item.earned}</td>
                  <td className={`${item.color} text-base font-medium`}>{item.activity}</td>
                  <td className="text-indigo-600 font-semibold text-base cursor-pointer hover:underline">
  View Profile
</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </AdminShell>
  );
}