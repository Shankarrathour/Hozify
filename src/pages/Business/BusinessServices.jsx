import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
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
  const [activeTab, setActiveTab] = useState("ACTIVE");

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
    },
  ];

  return (
    <AdminShell
      activeTab="Business Services"
      searchPlaceholder="Search services..."
    >
      <div className="space-y-6">

        {/* HEADER */}

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold">
              Business Services
            </h1>

            <p className="text-gray-500 mt-2 max-w-3xl">
              Manage your service offerings, define dynamic pricing,
              and control global availability windows from a centralized
              command center.
            </p>
          </div>

          <button className="border border-gray-300 bg-white px-5 h-11 rounded-md flex items-center gap-2">
            <Download size={16} />
            Export Catalog
          </button>
        </div>

        {/* TOP STATS */}

        <div className="grid grid-cols-12 gap-6">

          {/* CARD 1 */}

          <div className="col-span-4 bg-white border rounded-xl p-6">
            <h4 className="text-gray-500 text-xl">
              Total Services
            </h4>

            <div className="text-6xl mt-3 font-light">
              24
            </div>

            <p className="mt-5 text-green-600 font-medium">
              ↗ +3 this month
            </p>
          </div>

          {/* CARD 2 */}

          <div className="col-span-4 bg-white border rounded-xl p-6">
            <h4 className="text-gray-500 text-xl">
              Avg. Revenue / Service
            </h4>

            <div className="text-6xl mt-3 font-light">
              $1,240
            </div>

            <div className="mt-6 h-2 bg-gray-200 rounded-full">
              <div className="w-[65%] h-full bg-indigo-700 rounded-full" />
            </div>
          </div>

          {/* CARD 3 */}

          <div className="col-span-4 bg-indigo-800 text-white rounded-xl p-6">
            <h4 className="text-xl text-indigo-200">
              Active Promotions
            </h4>

            <div className="text-6xl mt-3">
              08
            </div>

            <button className="underline mt-5 font-medium">
              Manage Campaigns
            </button>
          </div>

        </div>        {/* SERVICES TABLE */}

        <div className="bg-white border rounded-xl overflow-hidden">

          {/* TABLE HEADER */}

          <div className="flex items-center justify-between px-6 py-5 border-b">

            <div className="flex items-center gap-4">

              <h2 className="text-3xl font-medium">
                All Services
              </h2>

              <button
                onClick={() => setActiveTab("ACTIVE")}
                className={`px-4 py-1 text-sm rounded font-medium ${
                  activeTab === "ACTIVE"
                    ? "bg-black text-white"
                    : "bg-gray-100"
                }`}
              >
                ACTIVE
              </button>

              <button
                onClick={() => setActiveTab("ARCHIVED")}
                className={`px-4 py-1 text-sm rounded font-medium ${
                  activeTab === "ARCHIVED"
                    ? "bg-black text-white"
                    : "bg-gray-100"
                }`}
              >
                ARCHIVED
              </button>

            </div>

            <div className="flex gap-3">

              <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
                <Filter size={18} />
              </button>

              <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
                <Grid2X2 size={18} />
              </button>

            </div>

          </div>

          {/* TABLE HEADINGS */}

          <div className="grid grid-cols-12 px-6 py-5 border-b text-gray-600 font-semibold uppercase tracking-wide">

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

          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-12 px-6 py-8 border-b items-center"
            >

              {/* SERVICE DETAILS */}

              <div className="col-span-3 flex items-center gap-4">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-14 h-14 rounded object-cover"
                />

                <div>
                  <h3 className="font-semibold text-xl">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {service.code}
                  </p>
                </div>

              </div>

              {/* CATEGORY */}

              <div className="col-span-2">

                <span className="text-2xl text-gray-700">
                  {service.category}
                </span>

              </div>

              {/* PRICE */}

              <div className="col-span-2">

                <span className="text-2xl font-semibold">
                  {service.price}
                </span>

              </div>

              {/* DURATION */}

              <div className="col-span-2 flex items-center gap-2">

                <Clock3 size={18} />

                <span className="text-2xl text-gray-700">
                  {service.duration}
                </span>

              </div>

              {/* AVAILABILITY */}

              <div className="col-span-2 flex items-center gap-3">

                <span
                  className={`w-3 h-3 rounded-full ${
                    service.status === "green"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                />

                <span className="font-medium text-gray-700">
                  {service.availability}
                </span>

              </div>

              {/* ACTION */}

              <div className="col-span-1 flex justify-center">

                <button className="hover:bg-gray-100 rounded-full p-2">
                  <ChevronRight size={20} />
                </button>

              </div>

            </div>
          ))}

          {/* PAGINATION */}

          <div className="flex items-center justify-between px-6 py-5">

            <p className="text-gray-500 text-lg">
              Showing 3 of 24 services
            </p>

            <div className="flex gap-2">

              <button className="w-10 h-10 border rounded">
                1
              </button>

              <button className="w-10 h-10 bg-indigo-700 text-white rounded">
                2
              </button>

              <button className="w-10 h-10 border rounded">
                3
              </button>

              <button className="w-10 h-10 border rounded flex items-center justify-center">
                <ChevronRight size={16} />
              </button>

            </div>

          </div>

        </div>        {/* BOTTOM SECTION */}

        <div className="grid grid-cols-12 gap-8">

          {/* GLOBAL PRICING RULES */}

          <div className="col-span-6 bg-white border rounded-xl p-6">

            <div className="flex items-start gap-4 mb-8">

              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard
                  size={26}
                  className="text-blue-700"
                />
              </div>

              <div>
                <h3 className="text-3xl font-medium">
                  Global Pricing Rules
                </h3>

                <p className="uppercase tracking-widest text-gray-500 text-sm mt-1">
                  Managed Automated Adjustments
                </p>
              </div>

            </div>

            {/* RULE 1 */}

            <div className="bg-gray-50 rounded-xl p-5 mb-5">

              <div className="flex items-center justify-between">

                <div>

                  <h4 className="text-2xl font-medium">
                    Dynamic Peak Pricing
                  </h4>

                  <p className="text-gray-500 mt-1">
                    Automated +15% on weekends
                  </p>

                </div>

                <button className="relative w-12 h-7 bg-indigo-700 rounded-full">
                  <span className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full" />
                </button>

              </div>

            </div>

            {/* RULE 2 */}

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <h4 className="text-2xl font-medium">
                    Member-only Discounts
                  </h4>

                  <p className="text-gray-500 mt-1">
                    Universal -10% for tier 2 clients
                  </p>

                </div>

                <button className="relative w-12 h-7 bg-gray-200 rounded-full">
                  <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow" />
                </button>

              </div>

            </div>

          </div>

          {/* GLOBAL AVAILABILITY */}

          <div className="col-span-6 bg-white border rounded-xl p-6">

            <div className="flex items-start gap-4 mb-8">

              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                <Calendar
                  size={26}
                  className="text-red-600"
                />
              </div>

              <div>
                <h3 className="text-3xl font-medium">
                  Global Availability
                </h3>

                <p className="uppercase tracking-widest text-gray-500 text-sm mt-1">
                  Calendar & Break Controls
                </p>
              </div>

            </div>

            {/* DAYS */}

            <div className="grid grid-cols-7 gap-2 mb-8">

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
                  className={`h-12 rounded font-medium text-sm ${
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

            <button className="w-full h-14 border border-gray-300 rounded-lg text-xl font-medium hover:bg-gray-50 transition">
              Edit Business Hours
            </button>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}