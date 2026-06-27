import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { SlidersHorizontal, Flag, Share2, Star } from "lucide-react";

export default function ReviewModeration() {
  const [currentTab, setCurrentTab] = useState("Pending");
  const [selectedReviewId, setSelectedReviewId] = useState(1);

  // Mock data extracted exactly from image_7c4404.jpg
  const reviewsList = [
    {
      id: 1,
      name: "Jonathan Miller",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      status: "Verified Purchase",
      badge: "LOYAL CUSTOMER",
      time: "2m ago",
      rating: 5,
      headline: "Excellent service and quality product!",
      comment: "I was skeptical at first given the price point, but after using it for a week, I can safely say this is the best value in the category. The build quality is surprisingly heavy and feels premium. Setup was a breeze, took less than 10 minutes.\n\nOne thing to note is that the color is slightly different from the website images—more of a matte finish than glossy—but I actually prefer it this way. Customer support reached out immediately after my order to ensure delivery went smoothly. Will definitely be recommending this to my team.",
      submittedAt: "Oct 12, 2023 • 14:32 PM",
      sentiment: "Positive (98.2%)",
      spamScore: "0.02 (Very Low)",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      status: "Standard User",
      time: "15m ago",
      rating: 3,
      headline: "Shipping took longer than expected",
      comment: "The item is great, but the delivery took nearly three weeks. I contacted support multiple...",
      keyword: "KEYWORD: SLOW",
      submittedAt: "Oct 12, 2023 • 12:10 PM",
      sentiment: "Neutral (45.0%)",
      spamScore: "0.15 (Low)"
    },
    {
      id: 3,
      name: "Robert Drane",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      status: "First-time Buyer",
      time: "1h ago",
      rating: 5,
      headline: "Best purchase of 2024",
      comment: "I've been looking for a solution like this for months. Absolute game changer for our...",
      submittedAt: "Oct 11, 2023 • 18:22 PM",
      sentiment: "Positive (95.4%)",
      spamScore: "0.05 (Very Low)"
    },
    {
      id: 4,
      name: "user_99212",
      avatar: "", 
      status: "Unverified",
      time: "2h ago",
      rating: 0,
      headline: "CLICK HERE FOR DISCOUNT",
      comment: "Visit our website for 50% off all electronic products. Lowest prices guaranteed in the...",
      tag: "SPAM RISK",
      submittedAt: "Oct 11, 2023 • 15:01 PM",
      sentiment: "Negative (12.0%)",
      spamScore: "0.98 (High Risk)"
    }
  ];

  const selectedReview = reviewsList.find(r => r.id === selectedReviewId) || reviewsList[0];

  return (
    <AdminShell activeTab="Review Moderation" searchPlaceholder="Search reviews...">
      <div className="space-y-6 antialiased text-slate-900 bg-white min-h-screen">
        
        {/* HEADER BLOCK MATCHING IMAGE HEADINGS EXACTLY */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Review Moderation Queue</h1>
            <p className="text-sm text-slate-500 font-normal mt-0.5">
              324 pending reviews requiring action.
            </p>
          </div>
          
          {/* TOP CONTROLS */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="bg-slate-100 p-0.5 rounded-lg flex items-center border border-slate-200">
              {["Pending", "Approved", "Rejected"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    currentTab === tab 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-slate-50 shadow-sm cursor-pointer text-slate-700">
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* MAIN SPLIT GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* LEFT COLUMN: REVIEWS SIDEBAR QUEUE */}
          <div className="divide-y divide-slate-100 border-r border-slate-200 bg-white h-[750px] overflow-y-auto">
            {reviewsList.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedReviewId(item.id)}
                className={`p-5 transition-colors cursor-pointer text-left relative ${
                  selectedReviewId === item.id ? "bg-slate-50/80" : "hover:bg-slate-50/40"
                }`}
              >
                {item.tag && (
                  <span className="absolute top-0 right-0 bg-rose-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">
                    {item.tag}
                  </span>
                )}
                
                <div className="flex items-start gap-3">
                  {item.avatar ? (
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                      👤
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className="font-bold text-slate-900 text-sm truncate">{item.name}</p>
                      <div className="flex text-slate-900 text-[10px]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < item.rating ? "text-slate-900" : "text-slate-200"}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                      {item.status} • {item.time}
                    </p>
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{item.headline}</h4>
                  <p className="text-slate-500 font-normal text-xs line-clamp-2 leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>

                {item.keyword && (
                  <div className="mt-2.5">
                    <span className="text-[9px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded border border-rose-100 tracking-wide uppercase">
                      {item.keyword}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: REVIEW DETAIL WRAPPER PANEL */}
          <div className="lg:col-span-2 bg-slate-50/30 p-6 flex flex-col justify-between h-[750px] overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
              
              {/* DETAIL HEADER */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  REVIEW DETAIL #{selectedReview.id === 1 ? "8829-JX" : `00${selectedReview.id}4-RM`}
                </span>
                <div className="flex items-center gap-2 text-slate-400">
                  <button className="p-1.5 hover:bg-slate-50 rounded-md hover:text-slate-700 transition-colors cursor-pointer">
                    <Flag className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 hover:bg-slate-50 rounded-md hover:text-slate-700 transition-colors cursor-pointer">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* USER PROFILE INFO ROW */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  {selectedReview.avatar ? (
                    <img src={selectedReview.avatar} alt={selectedReview.name} className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-sm" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-base border border-slate-100 shadow-sm">
                      👤
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900">{selectedReview.name}</h2>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex text-slate-900 text-xs">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < selectedReview.rating ? "text-slate-900" : "text-slate-200"}>★</span>
                        ))}
                      </div>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs text-slate-500 font-normal">{selectedReview.status}</span>
                      {selectedReview.badge && (
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wide scale-95 uppercase">
                          {selectedReview.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs">
                  <p className="text-slate-400 font-normal">Submitted on</p>
                  <p className="font-bold text-slate-900 mt-0.5">{selectedReview.submittedAt}</p>
                </div>
              </div>

              {/* MAIN BODY COMMENT SECTION */}
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-slate-900">
                  "{selectedReview.headline}"
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed whitespace-pre-line">
                  {selectedReview.comment}
                </p>
              </div>

              {/* IMAGES BLOCK ATTACHMENT */}
              {selectedReview.images && selectedReview.images.length > 0 && (
                <div className="flex items-center gap-3 pt-2">
                  {selectedReview.images.map((img, i) => (
                    <div key={i} className="w-36 h-36 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 shadow-inner">
                      <img src={img} alt="Attachment product" className="w-full h-full object-cover hover:scale-105 transition-transform duration-200" />
                    </div>
                  ))}
                </div>
              )}

              {/* METADATA AI BOTTOM BAR PANELS */}
              <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">SENTIMENT ANALYSIS</p>
                    <p className="text-emerald-600 font-bold mt-0.5 text-sm">{selectedReview.sentiment}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">SPAM SCORE</p>
                    <p className="text-slate-900 font-bold mt-0.5 text-sm">{selectedReview.spamScore}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-[11px] font-bold border border-slate-150">
                    Quality Check Passed
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-[11px] font-bold border border-slate-150">
                    NLP: Validated
                  </span>
                </div>
              </div>

            </div>

            {/* ACTION PROCESSING FOOTER BAR */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200/60 mt-4">
              <button 
                onClick={() => alert("Review Rejected Successfully")}
                className="px-5 py-2 bg-white text-slate-700 font-bold rounded-lg text-xs border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Reject Review
              </button>
              <button 
                onClick={() => alert("Review Approved Successfully")}
                className="px-5 py-2 bg-black text-white font-bold rounded-lg text-xs shadow hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Approve & Publish
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}