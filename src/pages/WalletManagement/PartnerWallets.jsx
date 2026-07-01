import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  Search,
  Filter,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Calendar,
  ChevronDown,
  Upload,
  X,
  Building2
} from "lucide-react";
import PartnerExportButton from "../../components/ui/PartnerExportButton";
import PartnerExportModal from "../../components/ui/PartnerExportModal";
import { useToast } from "../../components/common/ToastNotification";

// Initial Mock Data
const initialWalletPartners = [
  {
    name: "SkyNet Logistics",
    id: "ID-94821",
    type: "ISP",
    balance: 42500.00,
    threshold: 10000.00,
    status: "On Track",
    velocity: [40, 60, 45, 75, 50, 90, 65],
  },
  {
    name: "BlueWave Systems",
    id: "ID-44210",
    type: "BSP",
    balance: 128400.12,
    threshold: 50000.00,
    status: "Overdue",
    velocity: [80, 50, 95, 40, 70, 85, 100],
  },
  {
    name: "Apex Pro Logistics",
    id: "ID-33109",
    type: "ISP",
    balance: 5120.00,
    threshold: 10000.00,
    status: "Awaiting",
    velocity: [20, 30, 25, 35, 15, 40, 30],
  },
  {
    name: "Vertex Transit",
    id: "ID-22874",
    type: "ISP",
    balance: 89230.50,
    threshold: 25000.00,
    status: "Processing",
    velocity: [60, 70, 80, 65, 90, 75, 85],
  },
];

export default function PartnerWallets() {
  const [walletPartners, setWalletPartners] = useState(initialWalletPartners);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All"); 
  const [timeframe, setTimeframe] = useState("Monthly");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // Modal & Toast States for Dynamic Interaction
  const [activeModalData, setActiveModalData] = useState(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const { addToast } = useToast();

  // Trigger professional toast alert
  const showToast = (msg) => {
    addToast(msg, 'success');
  };

  // Dynamic Filtering
  const filteredSearchPartners = useMemo(() => {
    return walletPartners.filter((partner) => {
      return (
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [walletPartners, searchQuery]);

  const filteredPartners = useMemo(() => {
    return filteredSearchPartners.filter((partner) => {
      return selectedType === "All" || partner.type === selectedType;
    });
  }, [filteredSearchPartners, selectedType]);

  const typeCounts = useMemo(() => {
    return {
      all: filteredSearchPartners.length,
      ISP: filteredSearchPartners.filter((partner) => partner.type === "ISP").length,
      BSP: filteredSearchPartners.filter((partner) => partner.type === "BSP").length,
    };
  }, [filteredSearchPartners]);

  // Dynamic Metrics
  const metrics = useMemo(() => {
    let total = 0;
    let ispTotal = 0;
    let bspTotal = 0;
    let overdueCount = 0;

    filteredPartners.forEach((p) => {
      total += p.balance;
      if (p.type === "ISP") ispTotal += p.balance;
      if (p.type === "BSP") bspTotal += p.balance;
      if (p.status === "Overdue") overdueCount++;
    });

    return { total, ispTotal, bspTotal, overdueCount };
  }, [filteredPartners]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(val);
  };

  const handleReviewPayouts = (e) => {
    e.stopPropagation();
    const activePayoutsCount = walletPartners.filter(
      (p) => p.status === "Processing" || p.status === "Overdue"
    ).length;
    showToast(`Success: Triggered dispatch logs for ${activePayoutsCount} active high-priority settlements.`);
  };

  const handleFileUpload = () => {
    showToast("Document uploaded successfully! Parsing wallet ledger data...");
  };

  const handleExport = (format) => {
    setIsExportOpen(false);
    showToast(`${format} export for wallet data has started.`);
  };

  // Unified mini graph calculation based on active selections
  const combinedGraphBars = useMemo(() => {
    if (filteredPartners.length === 0) return Array(7).fill(10);
    const result = Array(7).fill(0);
    filteredPartners.forEach(p => {
      p.velocity.forEach((v, idx) => { result[idx] += v; });
    });
    const maxVal = Math.max(...result);
    return result.map(v => (v / maxVal) * 100);
  }, [filteredPartners]);

  return (
    <AdminShell activeTab="Partner Wallets" searchPlaceholder="Search wallets...">
      <div className="space-y-5 max-w-[1400px] mx-auto p-2 text-slate-800 antialiased selection:bg-indigo-100">
        
        {/* Toast is handled globally by ToastNotification provider */}

        {/* TOP COMPACT CONTROLS & CALENDAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-slate-400" />
            <h1 className="text-base font-bold tracking-tight text-slate-800">Partner Intelligence Hub</h1>
          </div>
          
          <div className="flex items-center gap-2">
            {/* File Actions */}
            <label className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition">
              <Upload size={14} />
              <span>Upload</span>
              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>
            
            <PartnerExportButton onClick={() => setIsExportOpen(true)} label="Export Report" />
            
            <PartnerExportModal
              open={isExportOpen}
              onClose={() => setIsExportOpen(false)}
              title="Export Wallet Data"
              description="Choose the file format for exporting wallet balances and settlement summaries."
              helper="Your export will include partner balances, thresholds, and activity indicators."
              onExport={handleExport}
              confirmLabel="Generate Export"
            />

            {/* Timeframe Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="flex items-center gap-1.5 rounded-lg border border-indigo-100 bg-indigo-50/50 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition"
              >
                <span>{timeframe} Window</span>
                <ChevronDown size={12} />
              </button>
              {isCalendarOpen && (
                <div className="absolute right-0 mt-1.5 z-40 w-36 rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl">
                  {["Weekly", "Monthly", "Yearly"].map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTimeframe(t); setIsCalendarOpen(false); showToast(`View scope adjusted to ${t} data interval.`); }}
                      className={`w-full rounded-lg px-3 py-1.5 text-left text-xs font-semibold transition ${timeframe === t ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      {t} Analytics
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* METRIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* LIABILITIES CARD */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md transition">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Liabilities {selectedType !== "All" && `• ${selectedType}`}
            </p>
            <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-slate-900">
              {formatCurrency(metrics.total)}
            </h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['All', 'ISP', 'BSP'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-bold transition ${selectedType === type ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  {type}: {type === 'All' ? formatCurrency(metrics.total) : formatCurrency(type === 'ISP' ? metrics.ispTotal : metrics.bspTotal)}
                </button>
              ))}
            </div>
          </div>

          {/* UPCOMING PAYOUTS */}
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-slate-50 to-indigo-50/50 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500/90">Upcoming Batch Settlements</p>
              <h3 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">$240,150</h3>
              <p className="mt-1 text-slate-500 text-[11px]">Next execution cycle: Thursday, 14:00 GMT</p>
            </div>
            <button 
              onClick={handleReviewPayouts}
              className="mt-3 w-full rounded-xl bg-indigo-600 py-2 text-xs font-bold text-white hover:bg-indigo-700 active:scale-[0.98] transition shadow-sm"
            >
              Dispatch Queue Verification
            </button>
          </div>

          {/* VELOCITY MINI BAR CHART */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Settlement Velocity Graph</p>
            <div className="mt-3 flex items-end justify-between h-14 gap-1.5 px-1">
              {combinedGraphBars.map((val, i) => (
                <div key={i} className="flex-1 bg-slate-100 h-full rounded-t-sm relative group cursor-pointer">
                  <div 
                    style={{ height: `${val}%` }} 
                    className="absolute bottom-0 left-0 right-0 bg-indigo-500 group-hover:bg-indigo-600 transition-all rounded-t-sm"
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap z-10 shadow-md">
                    Day {i+1}: {Math.round(val)}%
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-bold text-slate-400 border-t border-slate-50 pt-1">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>

        </div>

        {/* CONTROLS AREA */}
        <div className="rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="relative w-full max-w-md">
              <Search size={15} className="absolute left-3.5 top-3 text-slate-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter secure registry by partner name or ID..."
                className="w-full rounded-xl border border-slate-200/80 py-2 pl-9 pr-4 outline-none focus:border-indigo-500 transition text-xs font-medium bg-slate-50/50 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {["All", "ISP", "BSP"].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${selectedType === t ? "bg-slate-900 text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                >
                  {t} ({t === "All" ? typeCounts.all : typeCounts[t]})
                </button>
              ))}
              <button 
                onClick={() => { setSelectedType("All"); setSearchQuery(""); showToast("Filters reset to default."); }}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 transition"
              >
                <Filter size={12} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* REGISTRY TABLE */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-4 bg-slate-50/40">
            <h3 className="text-sm font-bold text-slate-900">Partner Ledger Matrix</h3>
            <p className="text-[11px] text-slate-500">Interactive rows. Click any node profile to launch structural popups.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/80 border-b border-slate-200/60">
                <tr className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                  <th className="px-5 py-3">Partner Identity</th>
                  <th className="px-5 py-3">Classification</th>
                  <th className="px-5 py-3">Current Balance</th>
                  <th className="px-5 py-3">Threshold Limit</th>
                  <th className="px-5 py-3">Operational Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
                {filteredPartners.length > 0 ? (
                  filteredPartners.map((partner) => (
                    <tr
                      key={partner.id}
                      onClick={() => setActiveModalData(partner)}
                      className="hover:bg-indigo-50/30 transition-colors cursor-pointer group"
                    >
                      <td className="px-5 py-3">
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{partner.name}</h4>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">{partner.id}</p>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${partner.type === "ISP" ? "bg-violet-50 text-violet-700 border border-violet-100" : "bg-blue-50 text-blue-700 border border-blue-100"}`}>
                          {partner.type}
                        </span>
                      </td>
                      <td className="px-5 py-3 font-bold text-slate-900">{formatCurrency(partner.balance)}</td>
                      <td className="px-5 py-3 text-slate-500 font-semibold">{formatCurrency(partner.threshold)}</td>
                      <td className="px-5 py-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold inline-block min-w-[85px] text-center border ${
                          partner.status === "On Track" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : 
                          partner.status === "Overdue" ? "bg-rose-50 text-rose-700 border-rose-100" : "bg-amber-50 text-amber-700 border-amber-100"
                        }`}>
                          {partner.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-slate-400 font-semibold">
                      No matching architectural records located.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ANALYTICS LOWER ROWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-sm hover:border-slate-300 transition">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-indigo-600" size={16} />
              <h3 className="text-xs font-bold text-slate-800">Liability Velocity</h3>
            </div>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">Structural liability growth shift.</p>
            <h4 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">+12.4%</h4>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-sm hover:border-slate-300 transition">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" size={16} />
              <h3 className="text-xs font-bold text-slate-800">Compliance Factor</h3>
            </div>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">Active validation across node paths.</p>
            <h4 className="mt-2 text-2xl font-black text-emerald-600 tracking-tight">98%</h4>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-sm hover:border-slate-300 transition">
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-rose-600" size={16} />
              <h3 className="text-xs font-bold text-slate-800">Overdue Settlements</h3>
            </div>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">Partners exceeding safe threshold bounds.</p>
            <h4 className="mt-2 text-2xl font-black text-rose-600 tracking-tight">
              {String(metrics.overdueCount).padStart(2, '0')}
            </h4>
          </div>
        </div>

      </div>

      {/* DYNAMIC INTERACTIVE POPUP / MODAL */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl transition-all scale-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  {activeModalData.type} Node Profile
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{activeModalData.name}</h3>
              </div>
              <button 
                onClick={() => setActiveModalData(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-50 pb-1.5">
                <span className="text-slate-400 font-medium">System Registry ID:</span>
                <span className="font-mono font-bold text-slate-700">{activeModalData.id}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-1.5">
                <span className="text-slate-400 font-medium">Available Balance:</span>
                <span className="font-extrabold text-slate-900">{formatCurrency(activeModalData.balance)}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-1.5">
                <span className="text-slate-400 font-medium">Allocated Threshold:</span>
                <span className="font-semibold text-slate-700">{formatCurrency(activeModalData.threshold)}</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-slate-400 font-medium">Execution Status:</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                  activeModalData.status === "On Track" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : 
                  activeModalData.status === "Overdue" ? "bg-rose-50 text-rose-700 border-rose-100" : "bg-amber-50 text-amber-700 border-amber-100"
                }`}>{activeModalData.status}</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button 
                onClick={() => { showToast(`Balance audit logs pulled for ${activeModalData.name}`); setActiveModalData(null); }}
                className="rounded-xl bg-slate-900 py-2 text-center text-xs font-bold text-white hover:bg-slate-800 transition"
              >
                Audit Stream
              </button>
              <button 
                onClick={() => { showToast(`Instant settlement pipeline initialized for ${activeModalData.name}`); setActiveModalData(null); }}
                className="rounded-xl bg-indigo-600 py-2 text-center text-xs font-bold text-white hover:bg-indigo-700 transition"
              >
                Settle Node
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}