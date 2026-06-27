import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  Plus, Grid, List, Download, ArrowUpRight, ArrowDownRight, 
  MoreVertical, Edit2, Folder 
} from "lucide-react";

// ========================================================================
// 1. HELPER COMPONENTS (INHE SABSE UPAR RAKHA HAI HOISTING ERROR SE BACHNE KE LIYE)
// ========================================================================

function CategoryTableRow({ name, id, status, impressions, ctr, trendUp }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-xs text-slate-700">
      <td className="py-4 px-4 font-semibold text-slate-900">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-400">
            <Folder size={14} />
          </div>
          <span>{name}</span>
        </div>
      </td>
      <td className="py-4 px-4 font-mono text-slate-400 text-[11px]">{id}</td>
      <td className="py-4 px-4">
        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide ${
          status === "ACTIVE" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
        }`}>
          {status}
        </span>
      </td>
      <td className="py-4 px-4 font-medium text-slate-800">{impressions}</td>
      <td className="py-4 px-4">
        <div className="flex items-center space-x-1.5 font-bold text-slate-900">
          <span>{ctr}</span>
          {ctr !== "--" && (
            trendUp ? <ArrowUpRight size={13} className="text-emerald-500" /> : <ArrowDownRight size={13} className="text-rose-500" />
          )}
        </div>
      </td>
      <td className="py-4 px-4 text-right">
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreVertical size={14} />
        </button>
      </td>
    </tr>
  );
}

function CardBadge({ text, bgStyle }) {
  return (
    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide shadow-sm z-10 ${bgStyle}`}>
      {text}
    </span>
  );
}
// ========================================================================
// 2. MAIN CATEGORY CONTAINER (PART A - CONTROLS & HEADER METRICS)
// ========================================================================

export default function CategoryBannersPage() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <AdminShell activeTab="Banners" searchPlaceholder="Search campaigns or users...">
      <div className="p-8 bg-slate-50 min-h-screen space-y-6 max-w-[1400px] w-full mx-auto font-sans antialiased">
        
        {/* HEADER SECTION WITH TOP BLUE BANNER ACTION BUTTON */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-2">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 tracking-tight">Category Banners</h1>
            <p className="text-sm text-blue-900 mt-1">Manage and optimize visual experiences across product segments.</p>
          </div>
          
          <button className="flex items-center space-x-2 bg-indigo-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:bg-indigo-700 transition-all">
            <Plus size={14} />
            <span>Assign Banner to Category</span>
          </button>
        </div>

        {/* TOP METRICS SECTION GRID ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* PERFORMANCE LEADER METRIC BOX (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Performance Leader</span>
                <h2 className="text-lg font-black text-slate-900">Electronics & Gadgets</h2>
              </div>
              <CardBadge text="Top Performing" bgStyle="bg-indigo-50 text-indigo-600 border border-indigo-100" />
            </div>
            
            {/* Horizontal inline flex statistics metric data indicators */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-slate-50 my-2">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Impressions</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">1.2M</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">CTR</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">4.82%</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Conversion</p>
                <p className="text-2xl font-black text-emerald-500 mt-0.5">18.2%</p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-slate-400 font-medium">Updated 12 mins ago</span>
              <div className="bg-slate-100 p-1 rounded-lg flex items-center space-x-1">
                <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-white text-slate-800 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}><List size={14} /></button>
                <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-white text-slate-800 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}><Grid size={14} /></button>
              </div>
            </div>
          </div>

          {/* CAMPAIGN HEALTH NAVY SOLID WIDGET BOX */}
          <div className="bg-indigo-950 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white relative overflow-hidden"
               style={{ backgroundImage: 'radial-gradient(circle at 90% 10%, #1e1b4b, #0f172a)' }}>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block">Campaign Health</span>
              <h3 className="text-sm font-bold text-indigo-100">Active Categories</h3>
            </div>
            
            <div className="my-auto py-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-black tracking-tight">24/28</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center bg-white/10 px-1.5 py-0.5 rounded">+4 this month</span>
              </div>
            </div>

            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[85%]" />
            </div>
          </div>

        </div>
        {/* VISUAL CARDS GRID MODULE WITH REAL GRAPHICS COVERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Summer Tech Sale Banner Card (Premium Gadget Image) */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="h-44 bg-slate-900 relative p-4 flex flex-col justify-between text-white overflow-hidden">
             <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200" 
                   alt="Tech" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="flex justify-between items-start z-10">
                <CardBadge text="Electronics" bgStyle="bg-slate-950/70 text-white backdrop-blur-sm" />
                <button className="p-1 bg-white/10 rounded-lg text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"><Edit2 size={12} /></button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-bold text-slate-900">Summer Tech Sale</h4>
                <span className="text-[10px] text-emerald-500 font-bold flex items-center space-x-1">● <span className="uppercase ml-1 text-slate-500 font-bold">Active</span></span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1 border-t border-slate-50">
                <div className="bg-slate-50 p-2 rounded-xl">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">CTR</p>
                  <p className="font-black text-slate-800 mt-0.5">4.2%</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Impressions</p>
                  <p className="font-black text-slate-800 mt-0.5">452k</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 font-medium">
                <span>Campaign Health: 85%</span>
                <span className="text-indigo-950 font-bold">Ends in 12 days</span>
              </div>
            </div>
          </div>

          {/* Minimalist Living Banner Card (Modern Furniture Sofa) */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="h-44 bg-slate-100 relative p-4 flex flex-col justify-between overflow-hidden">
              <img
                 src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200" 
                   alt="Furniture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="flex justify-between items-start z-10">
                <CardBadge text="Furniture" bgStyle="bg-white/80 text-slate-700 backdrop-blur-sm" />
                <button className="p-1 bg-black/5 rounded-lg text-slate-600 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"><Edit2 size={12} /></button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-bold text-slate-900">Minimalist Living</h4>
                <span className="text-[10px] text-emerald-500 font-bold flex items-center space-x-1">● <span className="uppercase ml-1 text-slate-500 font-bold">Active</span></span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1 border-t border-slate-50">
                <div className="bg-slate-50 p-2 rounded-xl">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">CTR</p>
                  <p className="font-black text-slate-800 mt-0.5">3.1%</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Impressions</p>
                  <p className="font-black text-slate-800 mt-0.5">218k</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 font-medium">
                <span>Campaign Health: 92%</span>
                <span className="text-indigo-950 font-bold">Ends in 24 days</span>
              </div>
            </div>
          </div>

          {/* Autumn Collection Banner Card (Fashion Wear Suit jacket) */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="h-44 bg-slate-950 relative p-4 flex flex-col justify-between text-white overflow-hidden">
             <img
                   src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200"
                   alt="Fashion" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent pointer-events-none" />
              <div className="flex justify-between items-start z-10">
                <CardBadge text="Fashion" bgStyle="bg-black/40 text-white backdrop-blur-sm" />
                <button className="p-1 bg-white/10 rounded-lg text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"><Edit2 size={12} /></button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-bold text-slate-900">Autumn Collection</h4>
                <span className="text-[10px] text-amber-500 font-bold flex items-center space-x-1">● <span className="uppercase ml-1 text-slate-500 font-bold">Paused</span></span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1 border-t border-slate-50">
                <div className="bg-slate-50 p-2 rounded-xl">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">CTR</p>
                  <p className="font-black text-slate-800 mt-0.5">1.8%</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Impressions</p>
                  <p className="font-black text-slate-800 mt-0.5">12k</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 font-medium">
                <span>Campaign Health: N/A</span>
                <span className="text-slate-400 font-bold">Pending Assets</span>
              </div>
            </div>
          </div>

        </div>

        {/* DETAILED CATEGORY ANALYTICS PAGINATED DATA DATA-TABLE */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <h3 className="text-sm font-bold text-slate-900">Detailed Category Analytics</h3>
            <button className="text-xs font-bold text-indigo-950 flex items-center space-x-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              <Download size={13} />
              <span>Download Report</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                  <th className="pb-3 px-4">Category Name</th>
                  <th className="pb-3 px-4">Banner ID</th>
                  <th className="pb-3 px-4">Status</th>
                  <th className="pb-3 px-4">Impressions</th>
                  <th className="pb-3 px-4">CTR</th>
                  <th className="pb-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <CategoryTableRow name="Electronics" id="#BN-8829-TECH" status="ACTIVE" impressions="1,240,592" ctr="4.82%" trendUp={true} />
                <CategoryTableRow name="Furniture & Living" id="#BN-4412-HOME" status="ACTIVE" impressions="842,102" ctr="3.15%" trendUp={false} />
                <CategoryTableRow name="Men's Fashion" id="#BN-9930-FASH" status="DRAFT" impressions="0" ctr="--" trendUp={false} />
              </tbody>
            </table></div>
          </div>

          {/* TABLE FOOTER WITH PAGINATION CONTROLS */}
          <div className="flex justify-between items-center text-xs text-slate-400 pt-3 border-t border-slate-50">
            <p className="font-medium">Showing 3 of 28 categories</p>
            <div className="flex items-center space-x-2">           
           <button className="border border-slate-100 px-3 py-1.5 rounded-lg font-bold bg-white text-slate-400 cursor-not-allowed">
                Previous
              </button>

              <button className="bg-indigo-950 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-indigo-900 transition-colors shadow-sm">
                Next
              </button>
            </div>
          </div>
        </div>
    </AdminShell>
  );
}
