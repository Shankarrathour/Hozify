import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
} from "lucide-react";

const reviews = [
  {
    id: "BK-90210",
    partner: "SwiftFix Plumbing",
    rating: 5,
    review:
      "Excellent service! Arrived on time and completed the work professionally.",
  },
  {
    id: "BK-88452",
    partner: "Elite Cleaning Co.",
    rating: 4,
    review:
      "Good cleaning job, but missed a few spots in the kitchen.",
  },
  {
    id: "BK-87113",
    partner: "Volt Experts",
    rating: 2,
    review:
      "Arrived late. Work quality was average.",
  },
  {
    id: "BK-86001",
    partner: "Green Thumb Garden",
    rating: 5,
    review:
      "Transformed my backyard beautifully. Highly recommended.",
  },
];

export default function UserReviewsPage() {
  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search bookings, users, or partners..."
    >
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            User Reviews
          </h1>
          <p className="text-sm text-slate-500">
            View user feedback and ratings
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">

          {/* LEFT CARD */}
          <div className="col-span-3">
            <div className="bg-white border rounded-xl p-6 text-center">

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="w-24 h-24 rounded-xl mx-auto"
              />

              <h2 className="mt-4 text-xl font-semibold">
                Johnathan Doe
              </h2>

              <p className="text-slate-500 text-sm">
                Member since Oct 2023
              </p>

              <div className="mt-4">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
                  Verified
                </span>
              </div>

              <p className="mt-2 text-slate-500">
                Premium User
              </p>

              <div className="grid grid-cols-2 mt-8">
                <div>
                  <p className="text-slate-500 text-sm">
                    TOTAL BOOKINGS
                  </p>
                  <p className="font-bold text-indigo-700">
                    24
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    SPEND
                  </p>
                  <p className="font-bold text-indigo-700">
                    $1.2k
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-9 space-y-6">

            {/* KPI CARDS */}
            <div className="grid grid-cols-4 gap-4">

              <div className="report-kpi-card bg-white rounded-xl p-5">
                <div className="flex items-center gap-2">
                  <Star
                    size={18}
                    className="text-yellow-500"
                  />
                  <span className="text-3xl font-bold">
                    4.8
                  </span>
                </div>

                <p className="text-slate-500 mt-2">
                  Average Rating
                </p>
              </div>

              <div className="report-kpi-card bg-white rounded-xl p-5">
                <h3 className="text-slate-500 text-sm">
                  TOTAL REVIEWS
                </h3>

                <p className="text-3xl font-bold mt-2">
                  12
                </p>
              </div>

              <div className="report-kpi-card bg-green-50 rounded-xl p-5">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-green-700 text-sm font-medium">
                      POSITIVE
                    </h3>

                    <p className="text-3xl font-bold text-green-700 mt-2">
                      10
                    </p>
                  </div>

                  <ThumbsUp
                    className="text-green-600"
                    size={22}
                  />
                </div>
              </div>

              <div className="report-kpi-card bg-red-50 rounded-xl p-5">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-red-700 text-sm font-medium">
                      NEGATIVE
                    </h3>

                    <p className="text-3xl font-bold text-red-700 mt-2">
                      2
                    </p>
                  </div>

                  <ThumbsDown
                    className="text-red-600"
                    size={22}
                  />
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white border rounded-xl overflow-hidden">

              <div className="p-4 border-b">
                <h3 className="font-semibold">
                  Review History
                </h3>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 text-left text-sm">
                    <th className="p-4">BOOKING ID</th>
                    <th>PARTNER</th>
                    <th>RATING</th>
                    <th>REVIEW</th>
                  </tr>
                </thead>

                <tbody>
                  {reviews.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t"
                    >
                      <td className="p-4 font-medium text-indigo-700">
                        {item.id}
                      </td>

                      <td>{item.partner}</td>

                      <td>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={
                                i < item.rating
                                  ? "currentColor"
                                  : "none"
                              }
                              className={
                                i < item.rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </td>

                      <td className="max-w-md">
                        {item.review}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white border rounded-xl p-6">
                <h3 className="font-semibold">
                  Recent Feedback Highlight
                </h3>

                <p className="italic text-slate-600 mt-4">
                  "The booking process was incredibly smooth.
                  The assigned partner exceeded expectations."
                </p>
              </div>

              <div className="bg-white border rounded-xl p-6 text-center">
                <MessageSquare
                  className="mx-auto text-slate-400"
                  size={40}
                />

                <h3 className="mt-4 font-semibold">
                  Sentiment Analysis
                </h3>

                <p className="text-slate-500 mt-2">
                  Users consistently mention punctuality and
                  professionalism.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </AdminShell>
  );
}
