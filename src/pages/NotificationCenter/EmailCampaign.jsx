import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Search,
  ChevronDown,
  Calendar,
  SlidersHorizontal,
  MoreVertical,
  Download,
  Plus,
  Mail,
  Users,
  MousePointerClick,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock Data Matrix
const INITIAL_CAMPAIGNS = [
  { id: "CAM-7294", name: "Q4 Seasonal Product Launch", status: "SENT", sent: "42,500", openRate: "24.8%", clickRate: "3.2%", date: "Oct 24, 2023", rawOpen: 24.8 },
  { id: "CAM-7301", name: "Weekly Newsletter #42", status: "SCHEDULED", sent: "--", openRate: "--", clickRate: "--", date: "Oct 28, 2023", rawOpen: 0 },
  { id: "CAM-6855", name: "Customer Re-engagement Beta", status: "SENT", sent: "12,100", openRate: "18.2%", clickRate: "1.5%", date: "Oct 15, 2023", rawOpen: 18.2 },
  { id: "CAM-7312", name: "Referral Program Update", status: "DRAFT", sent: "--", openRate: "--", clickRate: "--", date: "Today, 09:12 AM", rawOpen: 0 },
  { id: "CAM-7002", name: "Abandoned Cart - Recovery A", status: "SENT", sent: "8,450", openRate: "44.1%", clickRate: "7.8%", date: "Oct 12, 2023", rawOpen: 44.1 },
];

export default function CampaignListing() {
  // States for dynamic functionality
  const [campaigns, setCampaigns] = useState(INITIAL_CAMPAIGNS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // Dynamic Action: Clear All Filters
  const handleClearAll = () => {
    setSearchTerm("");
    setStatusFilter("All Statuses");
    setCampaigns(INITIAL_CAMPAIGNS);
    alert("All active filters and search terms cleared successfully.");
  };

  // Dynamic Action: Export Matrix
  const handleExportData = () => {
    alert(`Exporting matrix schema for ${filteredCampaigns.length} matching rows to system clipboard as spreadsheet artifact...`);
  };

  // Dynamic Action: Create New Simulation
  const handleCreateCampaign = () => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const newCamp = {
      id: `CAM-${randomId}`,
      name: `Instant Draft Campaign #${randomId}`,
      status: "DRAFT",
      sent: "--",
      openRate: "--",
      clickRate: "--",
      date: "Just Now",
      rawOpen: 0
    };
    setCampaigns([newCamp, ...campaigns]);
    alert(`New layout dynamic entry generated: ${newCamp.name}`);
  };

  // Dynamic Filter Engine
  const filteredCampaigns = campaigns.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All Statuses" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminShell activeTab="Marketing" searchPlaceholder="Search dashboard...">
      <div className="min-h-screen bg-slate-50 p-8 text-slate-800 space-y-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Marketing</span>
              <span>&gt;</span>
              <span className="text-indigo-600 font-medium">Email Campaigns</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Campaign Listing
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleExportData}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-700 border border-slate-200 font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Download size={16} />
              Export Data
            </button>
            <button 
              onClick={handleCreateCampaign}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Plus size={16} />
              Create Campaign
            </button>
          </div>
        </div>

        {/* ================= FILTERS CONTROLS ================= */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[300px]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search campaigns by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 rounded-md border border-slate-200 bg-white text-slate-700 text-sm font-normal focus:outline-none focus:border-indigo-500 min-w-[150px]"
              >
                <option value="All Statuses">All Statuses</option>
                <option value="SENT">SENT</option>
                <option value="SCHEDULED">SCHEDULED</option>
                <option value="DRAFT">DRAFT</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>

            {/* Date Picker */}
            <div className="relative flex items-center">
              <input
                type="text"
                value="Oct 01, 2023 - Oct 31, 2023"
                readOnly
                className="pl-4 pr-10 py-2 rounded-md border border-slate-200 bg-white text-slate-700 text-sm font-normal focus:outline-none w-[220px]"
              />
              <Calendar className="absolute right-3 text-slate-400" size={16} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center p-2 rounded-md border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100">
              <SlidersHorizontal size={16} />
            </button>
            <button 
              onClick={handleClearAll}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 hover:underline"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* ================= CAMPAIGNS TABLE (Excel Grid Layout) ================= */}
        <div className="bg-white rounded-md border border-slate-300 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                  <th className="p-2 border-r border-slate-300 w-10 text-center bg-slate-100">
                    <input type="checkbox" className="rounded border-slate-400 text-indigo-600 focus:ring-0" />
                  </th>
                  <th className="p-2 border-r border-slate-300 uppercase tracking-tight text-slate-700 font-semibold">Campaign Name</th>
                  <th className="p-2 border-r border-slate-300 uppercase tracking-tight text-slate-700 font-semibold">Status</th>
                  <th className="p-2 border-r border-slate-300 uppercase tracking-tight text-slate-700 font-semibold text-right">Sent</th>
                  <th className="p-2 border-r border-slate-300 uppercase tracking-tight text-slate-700 font-semibold text-right">Open Rate</th>
                  <th className="p-2 border-r border-slate-300 uppercase tracking-tight text-slate-700 font-semibold text-right">Click Rate</th>
                  <th className="p-2 border-r border-slate-300 uppercase tracking-tight text-slate-700 font-semibold">Last Modified</th>
                  <th className="p-2 text-center bg-slate-100 uppercase tracking-tight text-slate-700 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs text-slate-700 bg-white">
                {filteredCampaigns.map((row) => (
                  <tr key={row.id} className="hover:bg-emerald-50/50 transition-colors border-b border-slate-200">
                    <td className="p-2 border-r border-slate-200 text-center bg-slate-50/50">
                      <input type="checkbox" className="rounded border-slate-300" />
                    </td>
                    <td className="p-2 border-r border-slate-200 font-sans">
                      <div className="font-semibold text-slate-900">{row.name}</div>
                      <div className="text-[10px] text-indigo-600 font-mono mt-0.5">{row.id}</div>
                    </td>
                    <td className="p-2 border-r border-slate-200">
                      <span className={`inline-block px-1.5 py-0.5 rounded-sm text-[10px] font-bold tracking-wide ${
                        row.status === 'SENT' ? 'bg-green-100 text-green-800' :
                        row.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-2 border-r border-slate-200 text-right font-medium text-slate-800">{row.sent}</td>
                    <td className="p-2 border-r border-slate-200 text-right font-semibold text-slate-800">
                      {row.openRate !== "--" ? (
                        <div className="flex items-center justify-end gap-2">
                          <span>{row.openRate}</span>
                          <div className="w-12 h-2 rounded bg-slate-100 overflow-hidden inline-block border border-slate-200">
                            <div className="h-full bg-indigo-600" style={{ width: row.openRate }} />
                          </div>
                        </div>
                      ) : "--"}
                    </td>
                    <td className="p-2 border-r border-slate-200 text-right font-medium text-slate-800">{row.clickRate}</td>
                    <td className="p-2 border-r border-slate-200 text-slate-500 font-sans">{row.date}</td>
                    <td className="p-2 text-center bg-slate-50/30 relative">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setOpenDropdownId(openDropdownId === row.id ? null : row.id); }}
                        className="text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-200 transition-colors"
                      >
                        <MoreVertical size={14} />
                      </button>
                      {openDropdownId === row.id && (
                        <div className="absolute right-10 top-8 w-32 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-1 text-left text-xs font-sans">
                          <button onClick={(e) => { e.stopPropagation(); setOpenDropdownId(null); alert('View Details clicked'); }} className="block w-full px-4 py-2 text-slate-700 hover:bg-slate-50 text-left font-medium">View Details</button>
                          <button onClick={(e) => { e.stopPropagation(); setOpenDropdownId(null); alert('Duplicate Campaign'); }} className="block w-full px-4 py-2 text-indigo-600 hover:bg-slate-50 text-left font-medium">Duplicate</button>
                          <button onClick={(e) => { e.stopPropagation(); setOpenDropdownId(null); alert('Delete Campaign'); }} className="block w-full px-4 py-2 text-rose-600 hover:bg-slate-50 text-left font-medium">Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredCampaigns.length === 0 && (
                  <tr>
                    <td colSpan={8} className="p-6 text-center text-slate-400 font-sans italic">
                      No active rows found matching current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table></div>
          </div>

          {/* Excel-style Pagination Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-2.5 border-t border-slate-300 gap-4 bg-slate-50 text-xs text-slate-600 font-sans">
            <div>Showing 1 to {filteredCampaigns.length} of {filteredCampaigns.length} spreadsheet records</div>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded border border-slate-300 bg-white text-slate-400 hover:bg-slate-100">
                <ChevronLeft size={14} />
              </button>
              <button className="h-6 w-6 rounded bg-[#0a0f29] text-white font-semibold flex items-center justify-center text-[11px]">
                1
              </button>
              <button className="h-6 w-6 rounded border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-[11px] text-slate-600">
                2
              </button>
              <button className="h-6 w-6 rounded border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-[11px] text-slate-600">
                3
              </button>
              <span className="px-0.5 text-slate-400">...</span>
              <button className="p-1 rounded border border-slate-300 bg-white text-slate-600 hover:bg-slate-100">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= PERFORMANCE SNAPSHOT (Dark Blue Outline) ================= */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Performance Snapshot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Average Deliverability Card */}
            <div className="bg-white rounded-xl border-2 border-[#0a0f29] p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-blue-50 text-blue-600 rounded">
                  <Mail size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  +12%
                </span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Average Deliverability
                </p>
                <h3 className="mt-1 text-4xl font-extrabold text-slate-900">
                  99.2%
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Compared to previous month (98.1%)
                </p>
              </div>
            </div>

            {/* Total Subscribers Card */}
            <div className="bg-white rounded-xl border-2 border-[#0a0f29] p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-purple-50 text-purple-600 rounded">
                  <Users size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm">
                  +4k
                </span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Total Subscribers
                </p>
                <h3 className="mt-1 text-4xl font-extrabold text-slate-900">
                  124,802
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Net growth across all segments
                </p>
              </div>
            </div>

            {/* Click-Through Rate Card */}
            <div className="bg-white rounded-xl border-2 border-[#0a0f29] p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-orange-50 text-orange-600 rounded">
                  <MousePointerClick size={20} />
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-sm">
                  -0.4%
                </span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Click-Through Rate
                </p>
                <h3 className="mt-1 text-4xl font-extrabold text-slate-900">
                  3.42%
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Average for the current billing cycle
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}