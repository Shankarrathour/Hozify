import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  LogIn,
  Calendar,
  Wallet,
  FileText,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    title: "Successful Login",
    time: "2h ago • 192.168.1.45",
    description:
      "Authenticated via Chrome 118 on MacOS. Session started from Mumbai, IN.",
    color: "bg-slate-100",
    icon: LogIn,
  },
  {
    title: "Booking Created #BK-88201",
    time: "Yesterday, 4:15 PM",
    description:
      "New booking initiated for Deep Home Cleaning service.",
    color: "bg-indigo-100",
    icon: Calendar,
  },
  {
    title: "Wallet Credit +₹500",
    time: "Jan 14, 2024",
    description: "Payment successful via HDFC Credit Card.",
    color: "bg-orange-100",
    icon: Wallet,
  },
  {
    title: "Document Uploaded",
    time: "Jan 12, 2024",
    description: "Identity verification document uploaded.",
    color: "bg-slate-100",
    icon: FileText,
  },
  {
    title: "Account Registration",
    time: "Jan 12, 2024",
    description: "User registered successfully via mobile app.",
    color: "bg-indigo-100",
    icon: UserPlus,
  },
];

export default function UserTimelineTab() {
  return (
    <AdminShell activeTab="User Management" searchPlaceholder="Search users...">

      <div className="space-y-6">

        <div>
          <p className="text-sm text-slate-500">
            Users &gt; User Profile &gt; Timeline
          </p>

          <div className="flex justify-between items-start mt-2">

            <div>
              <h1 className="text-4xl font-bold">
                Activity Timeline
              </h1>

              <p className="text-slate-500 mt-1">
                Detailed historical log for Rahul Sharma
              </p>
            </div>

            <div className="flex gap-3">
              <button className="border px-4 py-2 rounded-lg bg-white">
                Export Log
              </button>

              <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg">
                Quick Note
              </button>
            </div>

          </div>
        </div>

        <div className="border-b">
          <div className="flex gap-12 font-medium">
            <button className="pb-4">Overview</button>
            <button className="pb-4">KYC & Docs</button>
            <button className="pb-4 border-b-2 border-indigo-600 text-indigo-600">
              Activity Timeline
            </button>
            <button className="pb-4">Transaction History</button>
            <button className="pb-4">Support Tickets</button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-9">

            <div className="bg-white border rounded-xl p-6">

              <div className="flex justify-between mb-8">
                <h3 className="text-2xl font-semibold">
                  Chronological Activity
                </h3>

                <span className="text-sm text-slate-500">
                  All Activities
                </span>
              </div>

              <div className="relative">

                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-slate-200"></div>

                {activities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="relative flex gap-5 pb-10">

                      <div className={`w-10 h-10 rounded-lg ${item.color} z-10 flex items-center justify-center`}>
                        {Icon && <Icon size={18} />}
                      </div>

                      <div className="flex-1">

                        <div className="flex justify-between">
                          <h4 className="font-semibold text-lg">
                            {item.title}
                          </h4>

                          <span className="text-sm text-slate-400">
                            {item.time}
                          </span>
                        </div>

                        <p className="text-slate-500 mt-2">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

          <div className="col-span-3 space-y-4">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg">User Stats</h3>

              <div className="mt-6">
                <div className="flex justify-between">
                  <span>Login Count</span>
                  <span className="font-bold text-indigo-700">124</span>
                </div>

                <div className="flex justify-between mt-4">
                  <span>Success Rate</span>
                  <span className="font-bold text-orange-600">98%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold">Known Devices</h3>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-medium">MacBook Pro 14"</p>
                  <p className="text-xs text-slate-500">
                    Last active 2h ago
                  </p>
                </div>

                <div>
                  <p className="font-medium">iPhone 15 Pro</p>
                  <p className="text-xs text-slate-500">
                    Last active 1 day ago
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-700 text-white rounded-xl p-6">
              <h3 className="font-semibold text-lg">
                Need deep audit?
              </h3>

              <p className="mt-3 text-sm">
                Generate a full compliance report.
              </p>

              <button className="w-full mt-5 bg-white text-indigo-700 py-2 rounded-lg font-semibold">
                Request Full Logs
              </button>
            </div>

          </div>

        </div>

      </div>

    </AdminShell>
  );
}