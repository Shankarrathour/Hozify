import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { triggerDownload, generateCSV } from "../../utils/downloadHelper";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Filter,
  Download,
  Send,
} from "lucide-react";

const initialReviews = [
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
  const { addToast } = useToast();
  const [filterRating, setFilterRating] = useState("All");


  const handleExportReviews = () => {
    const csvContent = generateCSV(
      ["BookingID", "Partner", "Rating", "ReviewText"],
      initialReviews.map((r) => ({
        BookingID: r.id,
        Partner: r.partner,
        Rating: r.rating,
        ReviewText: r.review,
      }))
    );
    triggerDownload(csvContent, "user_reviews_ledger.csv", "text/csv");
    addToast("Customer reviews catalog exported successfully!", "success");
  };

  const handleRespond = (bookingId) => {
    addToast(`Response channel initialized for booking ${bookingId}.`, "success");
  };

  const filteredReviews = initialReviews.filter(
    (r) => filterRating === "All" || r.rating === parseInt(filterRating, 10)
  );

  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search bookings, users, or partners..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="page-title">
              User Reviews
            </h1>
            <p className="page-subtitle">
              View user feedback and ratings
            </p>
          </div>

          <div className="flex gap-2">
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              style={{
                padding: "6px 12px",
                border: "1px solid var(--materio-border)",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                background: "var(--materio-surface)",
              }}
            >
              <option value="All">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="2">2 Stars</option>
            </select>
            <button onClick={handleExportReviews} className="secondary-action-btn">
              <Download size={16} /> Export Reviews
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT CARD */}
          <div className="col-span-3">
            <div className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="w-24 h-24 rounded-xl mx-auto object-cover"
              />
              <h2 className="mt-4 text-xl font-semibold">
                Johnathan Doe
              </h2>
              <p className="text-slate-500 text-sm">
                Member since Oct 2023
              </p>
              <div className="mt-4">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                  Verified
                </span>
              </div>
              <p className="mt-2 text-slate-500 font-semibold text-sm">
                Premium User
              </p>
              <div className="grid grid-cols-2 mt-8 border-t pt-4">
                <div>
                  <p className="text-slate-500 text-xs font-bold">TOTAL BOOKINGS</p>
                  <p className="font-bold text-[#2A2454] text-lg">24</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold">SPEND</p>
                  <p className="font-bold text-[#2A2454] text-lg">₹1.2k</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-9 space-y-6">
            {/* KPI CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Average rating is calculated dynamically.", "success")}>
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-yellow-500" />
                  <span className="text-3xl font-bold">4.8</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">Average Rating</p>
              </div>

              <div className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Total reviewed bookings: 12", "success")}>
                <h3 className="text-slate-500 text-xs font-bold">TOTAL REVIEWS</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast("10 positive ratings recorded.", "success")}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-green-700 text-xs font-bold">POSITIVE</h3>
                    <p className="text-3xl font-bold text-green-700 mt-2">10</p>
                  </div>
                  <ThumbsUp className="text-green-600" size={22} />
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5 hover:shadow-md transition cursor-pointer" onClick={() => addToast("2 negative ratings flagged.", "success")}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-red-700 text-xs font-bold">NEGATIVE</h3>
                    <p className="text-3xl font-bold text-red-700 mt-2">2</p>
                  </div>
                  <ThumbsDown className="text-red-600" size={22} />
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-lg">
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
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReviews.map((item) => (
                    <tr key={item.id} className="border-t hover:bg-slate-50">
                      <td className="p-4 font-semibold text-indigo-700">
                        {item.id}
                      </td>
                      <td className="font-medium text-slate-800">{item.partner}</td>
                      <td>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={i < item.rating ? "currentColor" : "none"}
                              className={i < item.rating ? "text-yellow-500" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="max-w-md text-slate-600">{item.review}</td>
                      <td>
                        <button
                          onClick={() => handleRespond(item.id)}
                          style={{
                            border: "none",
                            background: "none",
                            color: "#2A2454",
                            fontWeight: "800",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Send size={12} /> Respond
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border rounded-xl p-6 hover:shadow-md transition cursor-pointer" onClick={() => addToast("Review highlighted in platform recommendations.", "success")}>
                <h3 className="font-semibold">Recent Feedback Highlight</h3>
                <p className="italic text-slate-600 mt-4">
                  "The booking process was incredibly smooth. The assigned partner exceeded expectations."
                </p>
              </div>

              <div className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition cursor-pointer" onClick={() => addToast("Sentiment analysis report updated.", "success")}>
                <MessageSquare className="mx-auto text-slate-400" size={40} />
                <h3 className="mt-4 font-semibold">Sentiment Analysis</h3>
                <p className="text-slate-500 mt-2">
                  Users consistently mention punctuality and professionalism.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminShell>
  );
}
