import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import {
  Download,
  Filter,
  Grid2X2,
  Clock3,
  CreditCard,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function BusinessServices() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState("ACTIVE");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const services = [
    {
      id: 1,
      title: "Strategic Consulting",
      code: "SC-001 • High Priority",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300",
      category: "Business Strategy",
      price: "$250.00",
      duration: "60 mins",
      availability: "Instant Booking",
      status: "green",
      archived: false,
    },
    {
      id: 2,
      title: "Architecture Review",
      code: "AR-042 • Technical",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=300",
      category: "Engineering",
      price: "$400.00",
      duration: "120 mins",
      availability: "Requires Approval",
      status: "yellow",
      archived: false,
    },
    {
      id: 3,
      title: "UI/UX Audit",
      code: "DS-009 • Creative",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300",
      category: "Design",
      price: "$180.00",
      duration: "45 mins",
      availability: "Instant Booking",
      status: "green",
      archived: false,
    },
  ];

  const filteredServices = services
    .filter((s) => {
      if (activeTab === "ACTIVE" && s.archived) return false;
      if (activeTab === "ARCHIVED" && !s.archived) return false;
      return categoryFilter === "All" || s.category === categoryFilter;
    });

  return (
    <AdminShell
      activeTab="Business Services"
      searchPlaceholder="Search services..."
    >
      <div className="space-y-6" style={{ paddingBottom: "40px" }}>

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">
              Business Services
            </h1>
            <p className="text-gray-500 text-sm mt-1 max-w-3xl">
              Manage your service offerings, define dynamic pricing, and control global availability windows from a centralized command center.
            </p>
          </div>

          <button 
            onClick={() => addToast("Exporting catalog report PDF...", "success")}
            className="border border-gray-300 bg-white px-4 h-10 rounded-md flex items-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Download size={14} />
            Export Catalog
          </button>
        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-12 gap-4">

          {/* CARD 1 */}
          <div className="col-span-4 bg-white border rounded-xl p-4">
            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">
              Total Services
            </h4>
            <div className="text-3xl mt-2 font-light">
              24
            </div>
            <p className="mt-3 text-green-600 text-xs font-bold">
              ↗ +3 this month
            </p>
          </div>

          {/* CARD 2 */}
          <div className="col-span-4 bg-white border rounded-xl p-4">
            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">
              Avg. Revenue / Service
            </h4>
            <div className="text-3xl mt-2 font-light">
              $1,240
            </div>
            <div className="mt-4 h-1.5 bg-gray-200 rounded-full">
              <div className="w-[65%] h-full bg-indigo-700 rounded-full" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-span-4 bg-indigo-800 text-white rounded-xl p-4">
            <h4 className="text-indigo-200 text-xs font-bold uppercase tracking-wider">
              Active Promotions
            </h4>
            <div className="text-3xl mt-2">
              08
            </div>
            <button 
              onClick={() => addToast("Campaign manager dashboard loaded.", "success")}
              className="underline mt-3 text-xs font-semibold cursor-pointer text-indigo-100 block"
            >
              Manage Campaigns
            </button>
          </div>

        </div>

        {/* SERVICES TABLE */}
        <div className="bg-white border rounded-xl overflow-hidden">

          {/* TABLE HEADER */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">
                All Services
              </h2>

              <button
                onClick={() => { setActiveTab("ACTIVE"); addToast("Showing active services catalog", "success"); }}
                className={`px-3 py-1 text-xs rounded font-bold cursor-pointer ${
                  activeTab === "ACTIVE"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                ACTIVE
              </button>

              <button
                onClick={() => { setActiveTab("ARCHIVED"); addToast("Showing archived services catalog", "success"); }}
                className={`px-3 py-1 text-xs rounded font-bold cursor-pointer ${
                  activeTab === "ARCHIVED"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                ARCHIVED
              </button>
            </div>

            <div className="flex gap-2">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{
                  height: "38px",
                  border: "1px solid var(--materio-border)",
                  borderRadius: "6px",
                  padding: "0 10px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#475569",
                  background: "#fff",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="All">All Categories</option>
                <option value="Business Strategy">Business Strategy</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
              </select>
              <button 
                onClick={() => addToast("Switched catalog grid view mode.", "success")}
                className="w-10 h-10 border border-gray-300 bg-white rounded-lg flex items-center justify-center cursor-pointer text-gray-600"
              >
                <Grid2X2 size={16} />
              </button>
            </div>
          </div>

          {/* TABLE HEADINGS */}
          <div className="grid grid-cols-12 px-4 py-3 border-b text-gray-600 text-xs font-bold uppercase tracking-wide">
            <div className="col-span-3">
              Service Details
            </div>
            <div className="col-span-2">
              Category
            </div>
            <div className="col-span-2">
              Base Price
            </div>
            <div className="col-span-2">
              Duration
            </div>
            <div className="col-span-2">
              Availability
            </div>
            <div className="col-span-1 text-center">
              Actions
            </div>
          </div>

          {/* SERVICES */}
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-12 px-4 py-4 border-b items-center last:border-b-0 hover:bg-slate-50"
            >
              {/* SERVICE DETAILS */}
              <div className="col-span-3 flex items-center gap-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <h3 className="font-bold text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {service.code}
                  </p>
                </div>
              </div>

              {/* CATEGORY */}
              <div className="col-span-2 text-xs font-semibold text-gray-600">
                {service.category}
              </div>

              {/* PRICE */}
              <div className="col-span-2 text-sm font-bold text-gray-900">
                {service.price}
              </div>

              {/* DURATION */}
              <div className="col-span-2 flex items-center gap-1.5 text-xs text-gray-600 font-semibold">
                <Clock3 size={14} />
                <span>{service.duration}</span>
              </div>

              {/* AVAILABILITY */}
              <div className="col-span-2 flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    service.status === "green"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                />
                <span className="font-bold text-xs text-gray-700">
                  {service.availability}
                </span>
              </div>

              {/* ACTION */}
              <div className="col-span-1 flex justify-center">
                <button 
                  onClick={() => addToast(`Opening details panel for ${service.title}`, "success")}
                  className="hover:bg-gray-100 rounded-full p-2 cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
          {filteredServices.length === 0 && (
            <p className="p-8 text-center text-gray-400 text-sm font-semibold">No services match the selected category filter.</p>
          )}

          {/* PAGINATION */}
          <div className="flex items-center justify-between px-4 py-4">
            <p className="text-gray-500 text-xs font-semibold">
              Showing {filteredServices.length} of 24 services
            </p>
            <div className="flex gap-2">
              <button onClick={() => addToast("Loaded page 1", "success")} className="w-8 h-8 border rounded text-xs font-bold cursor-pointer bg-white">
                1
              </button>
              <button onClick={() => addToast("Loaded page 2", "success")} className="w-8 h-8 bg-indigo-700 text-white rounded text-xs font-bold cursor-pointer border-none">
                2
              </button>
              <button onClick={() => addToast("Loaded page 3", "success")} className="w-8 h-8 border rounded text-xs font-bold cursor-pointer bg-white">
                3
              </button>
              <button onClick={() => addToast("Loaded next page", "success")} className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer bg-white">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-12 gap-4">

          {/* GLOBAL PRICING RULES */}
          <div className="col-span-6 bg-white border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard
                  size={20}
                  className="text-blue-700"
                />
              </div>
              <div>
                <h3 className="text-base font-bold">
                  Global Pricing Rules
                </h3>
                <p className="uppercase tracking-widest text-gray-500 text-[10px] font-bold mt-0.5">
                  Managed Automated Adjustments
                </p>
              </div>
            </div>

            {/* RULE 1 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    Dynamic Peak Pricing
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Automated +15% on weekends
                  </p>
                </div>
                <button 
                  onClick={() => addToast("Dynamic peak pricing toggled.", "success")}
                  className="relative w-10 h-6 bg-indigo-700 rounded-full cursor-pointer border-none"
                >
                  <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>

            {/* RULE 2 */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    Member-only Discounts
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Universal -10% for tier 2 clients
                  </p>
                </div>
                <button 
                  onClick={() => addToast("Member discounts toggled.", "success")}
                  className="relative w-10 h-6 bg-gray-200 rounded-full cursor-pointer border-none"
                >
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                </button>
              </div>
            </div>
          </div>

          {/* GLOBAL AVAILABILITY */}
          <div className="col-span-6 bg-white border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Calendar
                  size={20}
                  className="text-red-600"
                />
              </div>
              <div>
                <h3 className="text-base font-bold">
                  Global Availability
                </h3>
                <p className="uppercase tracking-widest text-gray-500 text-[10px] font-bold mt-0.5">
                  Calendar & Break Controls
                </p>
              </div>
            </div>

            {/* DAYS */}
            <div className="grid grid-cols-7 gap-1.5 mb-4">
              {[
                "SUN",
                "MON",
                "TUE",
                "WED",
                "THU",
                "FRI",
                "SAT",
              ].map((day, index) => (
                <button
                  key={day}
                  onClick={() => addToast(`Availability status toggled for: ${day}`, "success")}
                  className={`h-9 rounded font-bold text-[10px] cursor-pointer border-none ${
                    index > 0 && index < 6
                      ? "bg-indigo-700 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* EDIT BUTTON */}
            <button 
              onClick={() => addToast("Edit business hours scheduler console loaded.", "success")}
              className="w-full h-10 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 transition cursor-pointer bg-white"
            >
              Edit Business Hours
            </button>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}