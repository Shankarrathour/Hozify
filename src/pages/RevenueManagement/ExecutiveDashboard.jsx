import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { 
  BarChart3, 
  GripVertical, 
  FileText, 
  Clock, 
  ExternalLink,
  Filter,
  Download,
  ChevronDown,
  Eye,
  Edit2,
  X,
  LayoutTemplate
} from "lucide-react";

export default function ExecutiveDashboard() {
  // Core UI Interaction Dynamic States
  const [activeRegion, setActiveRegion] = useState("EMEA");
  const [showFilters, setShowFilters] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showSharedModal, setShowSharedModal] = useState(false);
  const [selectedTemplateName, setSelectedTemplateName] = useState(null);

  // Filter Checkbox Live State
  const [selectedStatuses, setSelectedStatuses] = useState({
    Finalized: true,
    Drafting: true,
    Private: true
  });

  // Dynamic Array Pool Data Sets
  const barHeights = ["h-24", "h-36", "h-44", "h-48", "h-40", "h-52", "h-44"];
  const dimensions = ["Timeframe", "Region", "Branch ID"];
  const measures = ["Gross Revenue", "Net Margin"];

  const templatesPool = [
    { id: 1, title: "Consolidated Fin-Audit", desc: "Standard P&L layout with variance matrices." },
    { id: 2, title: "Operational Velocity Run-rate", desc: "Deep dive node tracking metric setup." },
    { id: 3, title: "Executive Board Summary", desc: "Clean macro layouts with direct KPI vectors." }
  ];

  const sharedReports = [
    {
      name: "Q4 Revenue Audit - APAC",
      createdBy: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      status: "Finalized",
      statusClass: "bg-blue-50 text-blue-600 border border-blue-100",
      time: "2 hours ago"
    },
    {
      name: "Branch Efficiency Forecast",
      createdBy: "Liam Zhao",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      status: "Drafting",
      statusClass: "bg-slate-50 text-slate-600 border border-slate-200",
      time: "Yesterday"
    },
    {
      name: "P&L Consolidated Master",
      createdBy: "Marcus Thorne",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      status: "Private",
      statusClass: "bg-indigo-50 text-indigo-600 border border-indigo-100",
      time: "3 days ago"
    }
  ];

  // Dynamic Filter Execution Logic
  const filteredReports = useMemo(() => {
    return sharedReports.filter(report => selectedStatuses[report.status]);
  }, [selectedStatuses]);

  // Real-time Template Applicator Action
  const applyTemplate = (title) => {
    setSelectedTemplateName(title);
    setShowTemplateModal(false);
  };

  // Functional Export CSV Pipeline
  const handleExportCSV = (e) => {
    e.stopPropagation();
    const csvContent = [
      ["Report Name", "Created By", "Status", "Last Modified"],
      ...filteredReports.map(row => [row.name, row.createdBy, row.status, row.time])
    ]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent));
    element.setAttribute("download", `executive_reports_${new Date().toISOString().split('T')[0]}.csv`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AdminShell activeTab="Executive Dashboard" searchPlaceholder="Search enterprise metrics...">
      <div className="space-y-6 max-w-7xl mx-auto relative z-10 pointer-events-auto select-none" onClick={() => setShowFilters(false)}>
        
        {/* ==========================================
            1. HEADER CONTROLS ACTIONS MODULE
           ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Executive BI Center</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Advanced cross-regional data exploration and report crafting.</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
            {/* FILTER DROPDOWN CONTROLLER */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-1.5 px-3 py-1.5 bg-white border text-slate-600 hover:border-slate-300 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${showFilters ? 'border-indigo-600 ring-1 ring-indigo-600' : 'border-slate-200'}`}
              >
                <Filter className="h-3.5 w-3.5 text-indigo-600" />
                <span>Filters</span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </button>
              
              {showFilters && (
                <div className="absolute top-full right-0 mt-1.5 z-50 bg-white border border-slate-200 rounded-lg shadow-lg p-4 min-w-[200px]">
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Filter Status</label>
                      <div className="mt-1.5 space-y-1.5">
                        {["Finalized", "Drafting", "Private"].map((status) => (
                          <label key={status} className="flex items-center gap-2 cursor-pointer select-none">
                            <input 
                              type="checkbox" 
                              className="w-3.5 h-3.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 transition-colors" 
                              checked={selectedStatuses[status]} 
                              onChange={() => setSelectedStatuses(prev => ({ ...prev, [status]: !prev[status] }))}
                            />
                            <span className="text-xs font-semibold text-slate-600">{status}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <button 
                        type="button"
                        onClick={() => setShowFilters(false)}
                        className="w-full px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer text-center"
                      >
                        Apply Setup
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EXPORT CSV BUTTON */}
            <button 
              type="button"
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            2. UPPER LEVEL DATA CHARTS & FOCUS PANELS
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Regional Revenue Growth</h3>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">Historical Core Run-Rate Variance sequences (Q3-Q4).</p>
              </div>
              <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[10px] font-extrabold" onClick={(e) => e.stopPropagation()}>
                {["EMEA", "APAC", "AMER"].map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setActiveRegion(reg)}
                    className={`px-3 py-1 rounded transition-colors cursor-pointer ${activeRegion === reg ? "bg-white text-indigo-950 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-56 flex items-end justify-between px-4 pb-2 border-b border-slate-100">
              {barHeights.map((height, idx) => (
                <div key={idx} className="w-[10%] group flex flex-col items-center gap-2">
                  <div className={`w-full bg-slate-900 rounded-t-sm ${height} transition-all duration-300 group-hover:bg-indigo-600`} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 flex flex-col">
            <div className="bg-slate-900 text-white rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold text-indigo-300 tracking-wider uppercase">Total Branch Efficiency</p>
                <h3 className="text-3xl font-black tracking-tight mt-2">94.2%</h3>
              </div>
              <p className="text-xs text-indigo-200/80 font-medium mt-4">
                <span className="text-emerald-400 font-bold">↗ +2.4%</span> from last period
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
              <div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Regional Focus: LATAM</h4>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-xs text-slate-400 font-semibold">Active Pipelines</span>
                  <span className="text-xl font-extrabold text-slate-900">1,204</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full w-[72%]" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>Target: 1,500</span>
                  <span className="text-slate-700">72% to Goal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. WORKSPACE SECTIONS: BUILDER & SELECTIONS
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 bg-slate-50/60 border-b md:border-b-0 md:border-r border-slate-200/80 space-y-5">
            <div className="space-y-2">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Dimensions</span>
              <div className="space-y-1.5">
                {dimensions.map((dim, idx) => (
                  <div key={idx} className="flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm cursor-grab hover:border-slate-300 transition-all">
                    <span className="text-xs font-semibold text-slate-700">{dim}</span>
                    <GripVertical className="h-3.5 w-3.5 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Measures</span>
              <div className="space-y-1.5">
                {measures.map((meas, idx) => (
                  <div key={idx} className="flex items-center justify-between px-3 py-2 bg-slate-900 text-white rounded-lg shadow-sm cursor-grab hover:bg-slate-800 transition-all">
                    <span className="text-xs font-bold">{meas}</span>
                    <GripVertical className="h-3.5 w-3.5 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 p-8 flex flex-col items-center justify-center text-center min-h-[260px]">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 mb-3 shadow-inner">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">
              {selectedTemplateName ? `Active Template: ${selectedTemplateName}` : "Report Builder Workspace"}
            </h4>
            <p className="text-xs text-slate-400 max-w-sm mt-1 leading-relaxed font-medium">
              {selectedTemplateName 
                ? "Your layout structures are integrated. Drag new elements anytime to alter structural core values." 
                : "Drag dimensions and measures from the left sidebar to start constructing your customized BI report layouts."}
            </p>
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowTemplateModal(true); }}
              className="mt-5 px-4 py-1.5 border border-slate-200 bg-white hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-bold rounded-lg transition-all shadow-sm cursor-pointer"
            >
              Select Template
            </button>
          </div>
        </div>

        {/* ==========================================
            4. BOTTOM PANEL: EXECUTIVE DATA LOG ENTRIES
           ========================================== */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">Shared Executive Reports</h3>
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowSharedModal(true); }}
              className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:text-indigo-800 transition-colors cursor-pointer"
            >
              <span>View All Shared</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-3">REPORT NAME</th>
                  <th className="px-6 py-3">CREATED BY</th>
                  <th className="px-6 py-3">STATUS</th>
                  <th className="px-6 py-3">LAST MODIFIED</th>
                  <th className="px-6 py-3 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700">
                {filteredReports.length > 0 ? (
                  filteredReports.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <FileText className="h-4 w-4 text-slate-700 shrink-0" />
                          <span className="font-bold text-slate-800">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img src={row.avatar} alt={row.createdBy} className="w-5 h-5 rounded-full object-cover shadow-sm border border-slate-100" />
                          <span className="font-medium text-slate-600">{row.createdBy}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${row.statusClass}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400 font-medium">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-slate-300" />
                          <span>{row.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                        {/* VIEW & EDIT ACTION INTERACTION HANDLERS */}
                        <div className="flex items-center justify-center gap-2.5">
                          <button
                            type="button"
                            title="View Report Details"
                            onClick={() => alert(`Opening Full Interactive View Mode for: ${row.name}`)}
                            className="p-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100 transition-colors cursor-pointer flex items-center justify-center"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            title="Edit Layout Setup"
                            onClick={() => alert(`Opening Master Workspace Editor Configuration for: ${row.name}`)}
                            className="p-1.5 rounded-md bg-amber-50 text-amber-600 hover:bg-amber-100 border border-amber-100 transition-colors cursor-pointer flex items-center justify-center"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-xs text-slate-400 font-medium bg-slate-50/20">
                      No reports found matching the selected status filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            5. INTERACTIVE MODAL INTERFACES
           ========================================== */}
        
        {/* SELECT TEMPLATE MODAL */}
        {showTemplateModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowTemplateModal(false)}>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <LayoutTemplate className="h-4 w-4 text-indigo-600" /> Select Base Template
                </h4>
                <button type="button" onClick={() => setShowTemplateModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5 space-y-3">
                {templatesPool.map((tpl) => (
                  <div 
                    key={tpl.id} 
                    onClick={() => applyTemplate(tpl.title)}
                    className="p-3 border border-slate-100 hover:border-indigo-200 rounded-lg bg-white hover:bg-indigo-50/20 cursor-pointer transition-all shadow-xs"
                  >
                    <h5 className="text-xs font-bold text-slate-800">{tpl.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium">{tpl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW ALL SHARED MODAL */}
        {showSharedModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4" onClick={() => setShowSharedModal(false)}>
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150" onClick={(e) => e.stopPropagation()}>
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Global Shared Database View</h4>
                <button type="button" onClick={() => setShowSharedModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5 space-y-2 max-h-80 overflow-y-auto">
                {sharedReports.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border border-slate-100 bg-slate-50/50 rounded-lg">
                    <div>
                      <p className="text-xs font-bold text-slate-800">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">Owner: {item.createdBy} • {item.time}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${item.statusClass}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
          <span>© 2026 Hozify Enterprise BI. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-slate-600">Terms of Service</a>
            <a href="#privacy" className="hover:text-slate-600">Data Privacy Policy</a>
            <a href="#compliance" className="hover:text-slate-600">Compliance</a>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}