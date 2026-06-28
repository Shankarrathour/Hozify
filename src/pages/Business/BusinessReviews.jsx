import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  Search,
  Download,
  Filter,
  Star,
  MapPin,
  Clock3,
  CheckCircle2,
  Flag,
  ChevronDown,
  Pencil,
} from "lucide-react";

export default function BusinessReviews() {
  const { addToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Most Recent");
  const [ratingFilter, setRatingFilter] = useState("All");

  // 2. Clickable Interactive Reviews Dataset State
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Jenkins",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      rating: 5,
      time: "2 hours ago",
      badge: "VERIFIED PURCHASE",
      badgeColor: "bg-green-100 text-green-700",
      review:
        "The service at the Downtown Branch was exceptional. The staff was incredibly professional and the onboarding process was smoother than I expected. Highly recommend for enterprise-level needs!",
      branch: "Downtown Branch",
      category: "Onboarding Service",
      actionRequired: false,
    },
    {
      id: 2,
      name: "Marcus Thorne",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      rating: 2,
      time: "5 hours ago",
      badge: "ACTION REQUIRED",
      badgeColor: "bg-red-100 text-red-600",
      review:
        "Disappointed with the delay in live tracking updates. We had a time-sensitive delivery and the system was lagging by nearly 15 minutes. This needs to be addressed for enterprise clients.",
      branch: "North Hub",
      category: "Live Tracking",
      actionRequired: true,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
      rating: 4,
      time: "1 day ago",
      review:
        "Overall great experience. The pricing for materials was transparent and much better than competitors. Only small gripe was the parking at the East Branch, but the staff was helpful.",
      branch: "East Branch",
      category: "Materials",
      actionRequired: false,
    },
  ]);

  const handleResolve = (id) => {
    setReviews(prev =>
      prev.map(r => r.id === id ? { ...r, actionRequired: false, badge: "RESOLVED", badgeColor: "bg-slate-100 text-slate-700" } : r)
    );
    addToast(`Review #${id} successfully marked as Resolved!`, "success");
  };

  const handleFlag = (id) => {
    addToast(`Review #${id} has been flagged for moderation.`, "success");
  };

  const handleQuickApprove = (id) => {
    setReviews(prev =>
      prev.map(r => r.id === id ? { ...r, actionRequired: false, badge: "APPROVED", badgeColor: "bg-emerald-100 text-emerald-700" } : r)
    );
    addToast(`Review #${id} approved successfully.`, "success");
  };

  const toggleSort = () => {
    const nextSort = sortBy === "Most Recent" ? "Highest Rating" : "Most Recent";
    setSortBy(nextSort);
    addToast(`Sorting reviews by: ${nextSort}`, "success");
  };

  const filteredReviews = reviews.filter(
    r => ratingFilter === "All" || r.rating.toString() === ratingFilter
  );

  return (
    <AdminShell
      activeTab="Business Reviews"
      searchPlaceholder="Search reviews, users, or sentiment data..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black leading-tight">
              Reviews Management
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Monitor brand reputation and customer sentiment across all business branches.
            </p>
          </div>

          <div className="flex gap-2">
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              style={{
                height: "38px",
                border: "1px solid var(--materio-border)",
                borderRadius: "6px",
                padding: "0 12px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#475569",
                background: "#fff",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="All">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="2">2 Stars</option>
            </select>
            <button 
              onClick={() => addToast("Exporting reviews dataset as CSV...", "success")}
              className="h-[38px] px-4 border border-gray-300 bg-white rounded-md flex items-center gap-2 hover:bg-gray-50 cursor-pointer text-sm font-medium"
            >
              <Download size={14} />
              Export Report
            </button>
          </div>
        </div>

        {/* TOP ANALYTICS */}
        <div className="grid grid-cols-12 gap-4">

          {/* SCORE CARD */}
          <div className="col-span-4 border border-gray-200 bg-white p-4 rounded-xl">
            <h3 className="uppercase tracking-[2px] text-gray-500 text-xs font-bold mb-4">
              Sentiment Score
            </h3>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-light">4.8</span>
              <span className="text-gray-400 text-lg mb-1">/ 5.0</span>
            </div>
            <div className="flex mt-2 text-yellow-400">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={16}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-green-600 text-lg mt-4 font-bold">
              ↗ +0.4% this month
            </p>
          </div>

          {/* DISTRIBUTION */}
          <div className="col-span-8 border border-gray-200 bg-white p-4 rounded-xl">
            <h3 className="uppercase tracking-[2px] text-gray-500 text-xs font-bold mb-4">
              Sentiment Distribution
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-semibold">Positive</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[82%]" />
                </div>
                <span className="text-gray-500 text-sm font-bold">82%</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-semibold">Neutral</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[12%]" />
                </div>
                <span className="text-gray-500 text-sm font-bold">12%</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-semibold">Negative</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[6%]" />
                </div>
                <span className="text-gray-500 text-sm font-bold">6%</span>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="border border-gray-200 bg-white rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">All Reviews</h2>
            <button 
              onClick={toggleSort}
              className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-indigo-700 transition-colors font-bold"
            >
              {sortBy}
              <ChevronDown size={14} />
            </button>
          </div>

          <div>
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="px-4 py-5 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex justify-between items-start">
                  {/* LEFT SIDE */}
                  <div className="flex gap-4 flex-1">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-xl object-cover border"
                    />

                    <div className="flex-1">
                      {/* NAME */}
                      <h3 className="text-base font-bold text-gray-900">
                        {review.name}
                      </h3>

                      {/* RATING */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              fill={star <= review.rating ? "currentColor" : "none"}
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{review.time}</span>
                        {review.badge && (
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${review.badgeColor} ml-2`}>
                            {review.badge}
                          </span>
                        )}
                      </div>

                      {/* REVIEW TEXT */}
                      <p className="mt-3 text-sm leading-6 text-gray-700 max-w-6xl">
                        {review.review}
                      </p>

                      {/* TAGS */}
                      <div className="flex items-center gap-6 mt-3 text-xs text-gray-500 font-medium">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{review.branch}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock3 size={14} />
                          <span>{review.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  {review.actionRequired && (
                    <div className="flex items-center gap-2 ml-4">
                      <button 
                        onClick={() => handleFlag(review.id)}
                        className="w-9 h-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 cursor-pointer text-gray-600"
                        title="Flag Review"
                      >
                        <Flag size={14} />
                      </button>
                      <button 
                        onClick={() => handleQuickApprove(review.id)}
                        className="w-9 h-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 cursor-pointer text-gray-600"
                        title="Approve Clear"
                      >
                        <CheckCircle2 size={14} />
                      </button>
                      <button 
                        onClick={() => handleResolve(review.id)}
                        className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 h-9 rounded flex items-center gap-1 text-xs font-semibold cursor-pointer"
                      >
                        Resolve
                        <Pencil size={12} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {filteredReviews.length === 0 && (
              <p className="p-8 text-center text-gray-400 text-sm font-semibold">No reviews match the selected rating filter.</p>
            )}
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center px-4 py-4 border-t border-gray-200">
            <p className="text-gray-500 text-xs font-semibold">Showing {filteredReviews.length} of 482 reviews</p>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => addToast("Loaded previous reviews page...", "success")}
                className="px-3 h-8 border border-gray-300 text-gray-500 hover:bg-gray-50 cursor-pointer disabled:opacity-50 text-xs font-bold"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); addToast(`Loaded page ${page}`, "success"); }}
                  className={`w-8 h-8 border cursor-pointer text-xs font-bold ${
                    currentPage === page
                      ? "bg-indigo-700 text-white border-indigo-700"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => addToast("Loaded next reviews page...", "success")}
                className="px-3 h-8 border border-gray-300 hover:bg-gray-50 cursor-pointer text-xs font-bold"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminShell>
  );
}