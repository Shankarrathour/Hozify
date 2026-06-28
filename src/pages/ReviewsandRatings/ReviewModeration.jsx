import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ReviewModeration() {
  const [currentTab, setCurrentTab] = useState("Pending");
  const [selectedId, setSelectedId] = useState(1);
  const [filterActive, setFilterActive] = useState(false); // Filter state

  const [reviews, setReviews] = useState([
    { id: 1, name: "Jonathan Miller", status: "Pending", headline: "Excellent service!", comment: "I was skeptical at first, but this is the best value in the category.", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sarah Chen", status: "Pending", headline: "Shipping delay", comment: "The item is great, but the delivery took nearly three weeks.", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Robert Drane", status: "Pending", headline: "Best purchase of 2024", comment: "Absolute game changer for our team.", avatar: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "User_99212", status: "Pending", headline: "CLICK HERE FOR DISCOUNT", comment: "Visit our website for 50% off all electronic products.", avatar: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Alex Rivera", status: "Pending", headline: "Solid Quality", comment: "Very happy with the build quality and finish.", avatar: "https://i.pravatar.cc/150?u=5" }
  ]);

  // Combined logic: Tab filter + Keyword/Spam filter
  const filteredData = useMemo(() => {
    let data = reviews.filter(r => r.status === currentTab);
    if (filterActive) {
      // Filter logic: Sirf wo dikhao jinme 'Discount' word ho (Example)
      return data.filter(r => r.headline.toLowerCase().includes("discount"));
    }
    return data;
  }, [currentTab, reviews, filterActive]);

  const selectedReview = filteredData.find(r => r.id === selectedId) || filteredData[0];

  const handleAction = (newStatus) => {
    setReviews(prev => prev.map(r => r.id === selectedReview.id ? { ...r, status: newStatus } : r));
  };

  return (
    <AdminShell activeTab="Review Moderation">
      <div className="bg-white min-h-screen">
        <div className="px-8 py-6 border-b">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Review Moderation Queue</h1>
              <p className="text-sm text-slate-500">{filteredData.length} items waiting.</p>
            </div>
            <div className="flex items-center gap-3">
              <select value={currentTab} onChange={(e) => { setCurrentTab(e.target.value); setSelectedId(null); }} className="border border-slate-300 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer">
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              
              {/* WORKING FILTER BUTTON */}
              <button 
                onClick={() => setFilterActive(!filterActive)} 
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-semibold transition-colors ${filterActive ? "bg-black text-white" : "border-slate-300 text-slate-700 hover:bg-slate-50"}`}
              >
                <SlidersHorizontal className="w-4 h-4" /> {filterActive ? "Clear Filters" : "Filters"}
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-180px)]">
          <div className="w-[400px] border-r border-slate-200 overflow-y-auto">
            {filteredData.map((item) => (
              <div key={item.id} onClick={() => setSelectedId(item.id)} className={`p-6 border-b cursor-pointer ${selectedId === item.id ? "bg-slate-50 border-l-4 border-l-black" : "hover:bg-slate-50"}`}>
                <div className="flex items-center gap-3 mb-2">
                  <img src={item.avatar} className="w-8 h-8 rounded-full" alt="avatar" />
                  <div className="font-bold text-sm">{item.name}</div>
                </div>
                <div className="font-bold text-sm mb-1">{item.headline}</div>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-slate-50/30 p-8">
            {selectedReview ? (
              <div className="bg-white border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">"{selectedReview.headline}"</h2>
                <p className="text-slate-600 mb-8">{selectedReview.comment}</p>
                <div className="flex gap-4 pt-8 border-t">
                  <button onClick={() => handleAction("Rejected")} className="px-6 py-2 border border-red-200 text-red-600 font-bold rounded-lg text-sm hover:bg-red-50">Reject Review</button>
                  <button onClick={() => handleAction("Approved")} className="px-6 py-2 bg-black text-white font-bold rounded-lg text-sm hover:bg-slate-800">Approve & Publish</button>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-400 mt-20">No reviews found.</div>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}