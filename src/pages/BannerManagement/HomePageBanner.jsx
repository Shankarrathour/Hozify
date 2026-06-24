import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import {
  ChevronDown,
  Download,
  Eye,
  MousePointer,
  ShoppingCart,
  Wallet,
  Smartphone,
  Laptop,
  Tablet,
  Sparkles,
  Globe,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// ========================================================================
// ALL UTILITY SUB-COMPONENTS (SABSE UPAR TAKI CHROMIUM SCOPE ERROR NA AAYE)
// ========================================================================

function StatCard({ label, value, change, trend, icon, iconBg }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
      <div className="space-y-3">
        <div className={`p-2.5 rounded-lg w-fit ${iconBg}`}>
          {icon}
        </div>
        <div>
          <span className="text-xs font-medium text-gray-400 block tracking-wide">{label}</span>
          <span className="text-2xl font-bold text-gray-900 mt-1 block">{value}</span>
        </div>
      </div>
      <span className={`text-xs font-semibold flex items-center space-x-0.5 ${trend === "up" ? "text-emerald-500" : "text-rose-500"}`}>
        {trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        <span>{change}</span>
      </span>
    </div>
  );
}

function DarkStatCard({ label, value, change, icon }) {
  return (
    <div className="bg-indigo-950 text-white p-5 rounded-xl shadow-md flex items-start justify-between relative overflow-hidden">
      <div className="space-y-3 z-10">
        <div className="p-2.5 bg-white/10 text-white rounded-lg w-fit">
          {icon}
        </div>
        <div>
          <span className="text-xs font-medium text-indigo-200 block tracking-wide">{label}</span>
          <span className="text-2xl font-bold mt-1 block">{value}</span>
        </div>
      </div>
      <span className="text-xs font-semibold bg-white/10 text-indigo-200 px-2 py-1 rounded-md flex items-center space-x-0.5 z-10">
        <ArrowUpRight size={14} className="text-emerald-400" />
        <span>{change}</span>
      </span>
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
    </div>
  );
}

function DeviceProgress() {
  const devices = [
    { name: "Mobile", percentage: 62, icon: <Smartphone size={14} />, width: "w-[62%]" },
    { name: "Desktop", percentage: 31, icon: <Laptop size={14} />, width: "w-[31%]" },
    { name: "Tablet", percentage: 7, icon: <Tablet size={14} />, width: "w-[7%]" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
      <div>
        <h3 className="text-sm font-bold text-gray-900">Device Usage</h3>
      </div>
      <div className="space-y-4">
        {devices.map((device, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-gray-500">
                {device.icon}
                <span className="font-medium text-gray-700">{device.name}</span>
              </div>
              <span className="font-bold text-gray-900">{device.percentage}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full bg-indigo-950 rounded-full ${device.width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegionalEngagement() {
  const regions = [
    { country: "United States", percentage: "45%" },
    { country: "United Kingdom", percentage: "22%" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-gray-900">Regional Engagement</h3>
      </div>
      <div className="h-28 bg-slate-900 rounded-lg flex items-center justify-center text-indigo-400 relative overflow-hidden">
        <Globe size={40} className="opacity-20 animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-slate-500 absolute font-mono">Interactive Map Block</span>
      </div>
      <div className="space-y-2">
        {regions.map((region, idx) => (
          <div key={idx} className="flex justify-between items-center text-xs border-b border-gray-50 pb-2 last:border-none last:pb-0">
            <span className="text-gray-600 font-medium">{region.country}</span>
            <span className="font-bold text-gray-900">{region.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BannerCard({ title, ctr, conv, tag, tagColor, img }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
      <div className="h-32 bg-slate-100 relative overflow-hidden">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-slate-500 text-xs">No Preview</div>
        )}
        {tag && (
          <span className={`absolute top-2.5 right-2.5 text-[9px] font-bold text-white px-2 py-0.5 rounded ${tagColor}`}>
            {tag}
          </span>
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
        <h4 className="text-xs font-bold text-gray-900 truncate">{title}</h4>
        <div className="flex justify-between items-center text-[10px] text-gray-400 bg-gray-50 p-1.5 rounded">
          <div>CTR: <span className="font-semibold text-gray-700">{ctr}</span></div>
          <div>Conv: <span className="font-semibold text-gray-700">{conv}</span></div>
        </div>
      </div>
    </div>
  );
}

const chartData = [
  { name: "MON", impressions: 4000, clicks: 2400 },
  { name: "TUE", impressions: 3000, clicks: 1398 },
  { name: "WED", impressions: 2000, clicks: 9800 },
  { name: "THU", impressions: 2780, clicks: 3908 },
  { name: "FRI", impressions: 1890, clicks: 4800 },
  { name: "SAT", impressions: 2390, clicks: 3800 },
  { name: "SUN", impressions: 3490, clicks: 4300 },
  { name: "MON ", impressions: 4000, clicks: 2400 },
];
// ========================================================================
// 2. MAIN CONTAINER DEFAULT EXPORT (AB YEH HAR COMPONENT KO ISTEMAL KAR PAYEGA)
// ========================================================================

export default function BannersPage() {
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  return (
    <AdminShell
      activeTab="Banners"
      searchPlaceholder="Search campaigns or users..."
    >
      <div className="p-8 bg-slate-50 min-h-screen space-y-6 max-w-[1400px] w-full mx-auto font-sans">
        
        {/* HEADER TITLE SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Banner Management Suite</h1>
            <p className="text-xs text-gray-400 mt-1">Performance insights for Active & Scheduled Campaigns.</p>
          </div>
          <div className="flex space-x-3 w-full sm:w-auto justify-end">
            <button className="flex items-center space-x-2 bg-white border border-gray-200 text-xs font-semibold text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50">
              <span>{timeRange}</span>
              <ChevronDown size={12} />
            </button>
            <button className="flex items-center space-x-2 bg-indigo-950 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-900 transition-colors">
              <Download size={14} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* TOP LEVEL KPI METRICS DASHBOARD TRACKER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Impressions" value="1,284,502" change="12.5%" trend="up" icon={<Eye size={18} />} iconBg="bg-indigo-50 text-indigo-900" />
          <StatCard label="Average CTR" value="2.4%" change="0.4%" trend="up" icon={<MousePointer size={18} />} iconBg="bg-indigo-50 text-indigo-900" />
          <StatCard label="Total Conversions" value="42,891" change="2.1%" trend="down" icon={<ShoppingCart size={18} />} iconBg="bg-indigo-50 text-indigo-900" />
          <DarkStatCard label="Revenue Attribution" value="$124,500.00" change="18%" icon={<Wallet size={18} />} />
        </div>

        {/* PERFORMANCE TRENDS GRAPH CHART + DEVICE BREAKDOWN ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visual Trend Graph Section Area */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Performance Trends</h3>
                <p className="text-xs text-gray-400">Impressions vs Clicks over time</p>
              </div>
              <div className="flex space-x-4 text-xs">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-950 inline-block"></span> 
                  <span className="text-gray-500">Impressions</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block"></span> 
                  <span className="text-gray-500">Clicks</span>
                </span>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="impressions" stroke="#1e1b4b" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="clicks" stroke="#818cf8" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Section Device Stats Tracking Progress Widget */}
          <DeviceProgress />
        </div>

        {/* REGIONAL GEO ENGAGEMENT + BANNER CARDS ASSETS ITEMS MAP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Block Regional Engagement */}
          <RegionalEngagement />

          {/* Right Top Campaign Banner Block Layout */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-gray-900">Top Performing Banners</h3>
              <button className="text-xs font-semibold text-indigo-900 hover:underline">View All Assets</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <BannerCard title="Luxury Collection Q4" ctr="3.8%" conv="2.1%" tag="HIGH CTR" tagColor="bg-emerald-500" img="https://unsplash.com" />
              <BannerCard title="Work from Anywhere" ctr="3.3%" conv="1.8%" tag="TRENDING" tagColor="bg-indigo-600" img="https://unsplash.com" />
              <BannerCard title="Enterprise Cloud Solutions" ctr="2.9%" conv="1.5%" img="https://unsplash.com" />
              <BannerCard title="Summer Performance Kit" ctr="2.7%" conv="1.2%" img="https://unsplash.com" />
            </div>
          </div>
        </div>

        {/* AI STRATEGY SUGGESTION FLOATING METRIC BOX ROW PANEL */}
        <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-950 text-white rounded-xl">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">AI Performance Insight</h4>
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed max-w-3xl">
                Your <span className="font-semibold text-indigo-950">"Luxury Collection Q4"</span> campaign is performing 42% better on mobile devices between 6 PM and 9 PM. We recommend shifting 15% of your Desktop budget to Mobile Prime-Time for a projected 8% increase in overall conversions.
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-indigo-950 hover:bg-indigo-900 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
            Apply Strategy
          </button>
        </div>

      </div>
    </AdminShell>
  );
}
