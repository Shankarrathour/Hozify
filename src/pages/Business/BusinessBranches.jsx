import React from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Search, 
  Bell, 
  Settings, 
  User, 
  Users, 
  MapPin, 
  Plus, 
  Minus, 
  Compass, 
  Building2, 
  X 
} from "lucide-react";

export default function BusinessBranches() {
  return (
    <AdminShell>
      {/* Main Full-Screen Layout Container */}
      <div className="flex h-screen w-full overflow-hidden bg-[#F5F6F8]">
        
        {/* ================= LEFT SIDEBAR (BRANCH DIRECTORY LIST) ================= */}
        <div className="w-[340px] border-r border-[#E5E7EB] bg-white flex flex-col h-full z-10 shrink-0">
          
          {/* Header Section */}
          <div className="p-5 border-b border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-bold text-[#111827]">Branch Directory</h2>
              <span className="rounded bg-[#1E1B4B] px-2.5 py-1 text-[12px] font-semibold text-white">
                24 Branches
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button className="h-[38px] rounded bg-black text-[13px] font-medium text-white shadow-sm">
                List View
              </button>
              <button className="h-[38px] rounded border border-[#CFCFD4] bg-white text-[13px] font-medium text-[#333] shadow-sm">
                Export CSV
              </button>
            </div>
          </div>

          {/* List Content - Scrollable area */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#E5E7EB]">
            
            {/* Branch Card 1: Downtown Flagship */}
            <div className="p-5 bg-[#FAFAFB]">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[15px] font-bold text-[#111827]">Downtown Flagship</h3>
                {/* Toggle Active Switch */}
                <div className="relative w-9 h-5 bg-black rounded-full p-0.5 cursor-pointer flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <p className="text-[12px] text-[#70707A] mb-3">442 Broadway, New York, NY 10013</p>
              
              <div className="grid grid-cols-2 gap-y-2 text-[13px] text-[#5E6470] mb-4">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-[#9CA3AF]" />
                  <span>Sarah Jenkins</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#9CA3AF]" />
                  <span>12 Staff</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="rounded bg-[#E0F2FE] px-2 py-0.5 text-[11px] font-bold text-[#0369A1]">
                  ACTIVE
                </span>
                <span className="rounded bg-[#F3F4F6] px-2 py-0.5 text-[11px] font-bold text-[#4B5563]">
                  HQ REGION
                </span>
              </div>
            </div>

            {/* Branch Card 2: East Bay Logistics */}
            <div className="p-5 bg-white">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[15px] font-bold text-[#111827]">East Bay Logistics</h3>
                {/* Toggle Inactive Switch */}
                <div className="relative w-9 h-5 bg-[#CBD5E1] rounded-full p-0.5 cursor-pointer flex items-center justify-start">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <p className="text-[12px] text-[#70707A] mb-3">2100 Powell St, Emeryville, CA 94608</p>
              
              <div className="grid grid-cols-2 gap-y-2 text-[13px] text-[#5E6470] mb-4">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-[#9CA3AF]" />
                  <span>Michael Chen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#9CA3AF]" />
                  <span>45 Staff</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="rounded bg-[#FEE2E2] px-2 py-0.5 text-[11px] font-bold text-[#DC2626]">
                  MAINTENANCE
                </span>
                <span className="rounded bg-[#F3F4F6] px-2 py-0.5 text-[11px] font-bold text-[#4B5563]">
                  WEST COAST
                </span>
              </div>
            </div>

            {/* Branch Card 3: Austin Tech Hub */}
            <div className="p-5 bg-white">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[15px] font-bold text-[#111827]">Austin Tech Hub</h3>
                {/* Toggle Active Switch */}
                <div className="relative w-9 h-5 bg-black rounded-full p-0.5 cursor-pointer flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <p className="text-[12px] text-[#70707A] mb-3">501 Congress Ave, Austin, TX 78701</p>
              
              <div className="grid grid-cols-2 gap-y-2 text-[13px] text-[#5E6470] mb-4">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-[#9CA3AF]" />
                  <span>Elena Rodriguez</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#9CA3AF]" />
                  <span>28 Staff</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="rounded bg-[#E0F2FE] px-2 py-0.5 text-[11px] font-bold text-[#0369A1]">
                  ACTIVE
                </span>
                <span className="rounded bg-[#F3F4F6] px-2 py-0.5 text-[11px] font-bold text-[#4B5563]">
                  SOUTH CENTRAL
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT MAP OVERLAY GRAPHIC SYSTEM ================= */}
        <div className="flex-1 relative h-full bg-[#E3E5E8] overflow-hidden">
          
          {/* Light Gray Roadmap Themed Structural Map Graphic Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-90 select-none bg-cover bg-center" style={{ backgroundImage: "url('/assets/nyc-light-map-grid.jpg')" }}>
            
            {/* Emulated Map Vector Landmarks (Labels positioned across the viewport canvas layout) */}
            <div className="absolute left-[35%] top-[10%] font-bold text-[24px] text-[#94A3B8] tracking-wide">West New York</div>
            <div className="absolute left-[30%] top-[14%] font-bold text-[22px] text-[#94A3B8]">North Bergen</div>
            <div className="absolute left-[65%] top-[5%] font-bold text-[22px] text-[#94A3B8]">City of New York</div>
            <div className="absolute left-[70%] top-[20%] font-bold text-[20px] text-[#A8A29E] tracking-widest">MANHATTAN</div>
            <div className="absolute left-[40%] top-[38%] font-bold text-[22px] text-[#94A3B8]">Hoboken</div>
            <div className="absolute left-[36%] top-[48%] font-bold text-[28px] text-[#64748B] tracking-wide">Jersey City</div>
            <div className="absolute left-[54%] top-[51%] font-bold text-[44px] text-[#334155] tracking-wide">New York</div>
            <div className="absolute left-[75%] top-[65%] font-bold text-[22px] text-[#94A3B8]">Brooklyn</div>
          </div>

          {/* Map Node Pin 1: Uptown Manhattan Core Spot */}
          <div className="absolute left-[63%] top-[12%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-[#70707A] flex items-center justify-center border-2 border-white shadow-md">
              <MapPin size={20} className="text-white" />
            </div>
          </div>

          {/* Map Node Pin 2: Lower West Side Hub Location */}
          <div className="absolute left-[45%] top-[42%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-[#70707A] flex items-center justify-center border-2 border-white shadow-md">
              <Building2 size={18} className="text-white" />
            </div>
          </div>

          {/* Map Node Pin 3: Greenwich Village / Chelsea Core Spot */}
          <div className="absolute left-[61%] top-[40%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-[#70707A] flex items-center justify-center border-2 border-white shadow-md">
              <MapPin size={20} className="text-white" />
            </div>
          </div>

          {/* ================= HIGH-LEVEL INTERACTIVE MAP TOOLTIP (Downtown Flagship) ================= */}
          <div className="absolute left-[52%] top-[24%] transform -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white rounded-lg shadow-xl border border-[#D7D9E0] p-4 z-20">
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-[#D7D9E0]" />
            
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
                  <Building2 size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#111827]">Downtown Flagship</h4>
                </div>
              </div>
              <button className="text-[#9CA3AF] hover:text-[#4B5563]">
                <X size={16} />
              </button>
            </div>

            <p className="text-[12px] text-[#5E6470] mb-4 leading-relaxed">
              Current load: 85% capacity. Staff on-site: 10/12.
            </p>

            <button className="w-full h-[32px] bg-black rounded text-[12px] font-medium text-white hover:bg-[#222] transition-colors">
              View Full Analytics
            </button>
          </div>

          {/* ================= MAP CONTROLS FLOATING WIDGETS ================= */}
          <div className="absolute right-6 top-6 flex flex-col gap-2 z-20">
            <div className="flex flex-col rounded-lg bg-white shadow-md border border-[#E5E7EB] overflow-hidden">
              <button className="w-10 h-10 flex items-center justify-center text-[#4B5563] hover:bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <Plus size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-[#4B5563] hover:bg-[#F9FAFB]">
                <Minus size={18} />
              </button>
            </div>

            <button className="w-10 h-10 rounded-lg bg-white shadow-md border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:bg-[#F9FAFB]">
              <Compass size={18} />
            </button>
          </div>

          {/* ================= OVERLAY METRICS WIDGET (REGIONAL PERFORMANCE) ================= */}
          <div className="absolute left-6 bottom-6 w-[240px] bg-white rounded-xl border border-[#D7D9E0] shadow-xl p-5 z-20">
            <h4 className="text-[14px] font-bold text-[#111827] mb-4">Regional Performance</h4>
            
            <div className="space-y-4">
              {/* East Coast Metric */}
              <div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
                  <span>East Coast</span>
                  <span className="text-[#111827]">92%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              {/* West Coast Metric */}
              <div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
                  <span>West Coast</span>
                  <span className="text-[#111827]">64%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: "64%" }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminShell>
  );
}