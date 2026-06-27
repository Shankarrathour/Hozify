import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { usersMockData } from "./usersMockData";
import {
  Users,
  CheckCircle,
  DollarSign,
  Gift,
  Filter,
  Download,
  TrendingUp,
} from "lucide-react";

export default function UserReferralsPage() {
    const user = usersMockData[0];

const referrals = user.referrals.referredUsers.map((name, index) => ({
  name,
  email: `user${index + 1}@example.com`,
  joined: "2026-05-10",
  reward: "₹150",
  status: "Successful",
}));
  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search referrals or users..."
    >

<div className="grid grid-cols-12 gap-8">

  {/* Profile Card */}
  <div className="col-span-4 bg-white border rounded-xl p-6">
    <div className="flex gap-5">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-xl object-cover"
      />

      <div>
        <h2 className="text-3xl font-bold">
          {user.name}
        </h2>

        <p className="text-slate-500 mt-1">
          {user.membershipType} • Joined {user.registrationDate}
        </p>

        <div className="flex gap-2 mt-3">
          <span className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
            Referral Hero
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
            Top 1%
          </span>
        </div>

        <div className="mt-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              user.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.status}
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="col-span-8 flex items-center">
    <div className="grid grid-cols-5 gap-4">

      <div className="bg-white border rounded-xl p-5">
        <Users className="text-indigo-600 mb-3" />
        <p className="text-xl text-slate-500">
          Referral Count
        </p>
        <h3 className="text-3xl font-bold">
          {user.referrals.totalReferrals}
        </h3>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <CheckCircle className="text-green-600 mb-3" />
        <p className="text-sm text-slate-500">
          Successful
        </p>
        <h3 className="text-3xl font-bold">
          {user.referrals.totalReferrals}
        </h3>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <Gift className="text-orange-500 mb-3" />
        <p className="text-sm text-slate-500">
          Referral Code
        </p>
        <h3 className="text-xl font-bold">
          {user.referrals.referralCode}
        </h3>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <DollarSign className="text-purple-600 mb-3" />
        <p className="text-sm text-slate-500">
          Total Earnings
        </p>
        <h3 className="text-3xl font-bold">
          ₹{user.referrals.earnedAmount}
        </h3>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-5">
        <TrendingUp />
        <p className="mt-2">
          Growth Rate
        </p>
        <h3 className="text-3xl font-bold">
          +22%
        </h3>
      </div>

    </div>
  </div>

</div>
<div className="flex gap-16 border-b border-slate-200 text-base font-semibold mt-6 px-2">
  <button className="pb-4 text-slate-600 hover:text-indigo-600">
    Overview
  </button>

<button className="pb-4 text-slate-600 hover:text-indigo-600">
        Activity
  </button>

  <button className="pb-4 border-b-2 border-indigo-600 text-indigo-600">
    Referrals
  </button>

<button className="pb-4 text-slate-600 hover:text-indigo-600">
        Wallet
  </button>

<button className="pb-4 text-slate-600 hover:text-indigo-600">
        Settings
  </button>
</div>
<div className="bg-white border rounded-xl overflow-hidden">
  <div className="p-5 border-b flex justify-between">

    <div>
      <h3 className="text-xl font-semibold">
        Referral History
      </h3>

      <p className="text-sm text-slate-500">
        Showing all users referred by Jonathan Davies
      </p>
    </div>

    <div className="flex gap-2">
      <button className="border px-4 py-2 rounded-lg">
        Filter
      </button>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Export Report
      </button>
    </div>

  </div>
  <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">
  <thead>
    <tr className="bg-slate-50 text-left">
      <th className="p-4">User</th>
      <th>Date Joined</th>
      <th>Reward</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {referrals.map((item, index) => (
      <tr key={index} className="border-t">

        <td className="p-4">
          <div>
            <p className="font-medium">
              {item.name}
            </p>

            <p className="text-sm text-slate-500">
              {item.email}
            </p>
          </div>
        </td>

        <td>{item.joined}</td>

        <td>{item.reward}</td>

        <td>{item.status}</td>

        <td>
          <button className="text-indigo-600">
            View Profile
          </button>
        </td>

      </tr>
    ))}
  </tbody>
</table></div>
<div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full">
  <thead>
    <tr className="bg-slate-50 text-left">
      <th className="p-4">User</th>
      <th>Date Joined</th>
      <th>Reward</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {referrals.map((item, index) => (
      <tr key={index} className="border-t">

        <td className="p-4">
          <div>
            <p className="font-medium">
              {item.name}
            </p>

            <p className="text-sm text-slate-500">
              {item.email}
            </p>
          </div>
        </td>

        <td>{item.joined}</td>

        <td>{item.reward}</td>

        <td>{item.status}</td>

        <td>
          <button className="text-indigo-600">
            View Profile
          </button>
        </td>

      </tr>
    ))}
  </tbody>
</table></div>
<div className="bg-gradient-to-r from-orange-50 to-amber-50 border rounded-xl p-6 flex justify-between items-center">

  <div>
    <h3 className="text-xl font-semibold">
      Boost Jonathan's Referrals 🚀
    </h3>

    <p className="text-slate-600">
      Enable a limited-time bonus campaign.
    </p>
  </div>

  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg">
    Activate Bonus
  </button>

</div>
      </div>
    </AdminShell>
  );
}