import React, { useState, useMemo } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { useToast } from "../../components/common/ToastNotification";
import { 
  Download, 
  SlidersHorizontal, 
  History, 
  ShieldAlert, 
  UserCheck, 
  Clock, 
  ChevronDown, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// ─── Deterministic seed helper ────────────────────────────────────────────────
function seedFromId(id = '') {
  const num = parseInt(id.replace(/\D/g, ''), 10) || 1000;
  return (num % 9000) + 1000;
}

// ─── Generate audit rows from business data ───────────────────────────────────
function generateLogs(biz) {
  const { id, name, category, location, status, owner } = biz;
  const base = seedFromId(id);

  const statusColor = status === 'Active' ? '#16a34a'
    : status === 'Suspended' ? '#ef4444'
    : status === 'Pending' ? '#b45309'
    : '#6366f1';

  return [
    {
      id: `LOG-${base}`,
      date: 'Oct 24, 2023', time: '14:22:45 UTC',
      adminInitials: owner.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      adminBg: '#1E1B4B', adminText: '#fff',
      admin: owner,
      category: 'SECURITY',
      catBg: '#EFF6FF', catText: '#1E40AF',
      detail: `Updated multi-factor authentication requirements for all staff accounts of ${name}.`,
      ip: `192.168.${base % 255}.${(base * 3) % 255}`,
      status: 'SUCCESS', statusColor: '#16A34A',
    },
    {
      id: `LOG-${base - 11}`,
      date: 'Oct 24, 2023', time: '14:15:10 UTC',
      adminInitials: 'SY',
      adminBg: '#E4E4E7', adminText: '#4B5563',
      admin: 'System',
      category: 'FINANCE',
      catBg: '#F4F4F5', catText: '#4B5563',
      detail: `Authorized bulk payout for ${category} contractors linked to ${name}.`,
      ip: `45.22.${(base % 200) + 10}.12`,
      status: 'SUCCESS', statusColor: '#16A34A',
    },
    {
      id: `LOG-${base - 22}`,
      date: 'Oct 24, 2023', time: '13:58:02 UTC',
      adminInitials: 'SE',
      adminBg: '#FEE2E2', adminText: '#EF4444',
      admin: 'Security Engine',
      category: 'ACCESS',
      catBg: '#FEE2E2', catText: '#991B1B',
      detail: `Failed login attempt — 3 consecutive failures from unrecognized device at ${location}.`,
      ip: `203.0.${(base % 100) + 10}.19`,
      status: 'FAILED', statusColor: '#DC2626',
    },
    {
      id: `LOG-${base - 33}`,
      date: 'Oct 24, 2023', time: '12:10:45 UTC',
      adminInitials: owner.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      adminBg: '#3B82F6', adminText: '#fff',
      admin: owner,
      category: 'CONFIGURATION',
      catBg: '#F1F5F9', catText: '#334155',
      detail: `Modified service commission rates for ${name} — ${category} tier configuration.`,
      ip: `10.0.0.${(base % 200) + 10}`,
      status: 'SUCCESS', statusColor: '#16A34A',
    },
    {
      id: `LOG-${base - 44}`,
      date: 'Oct 24, 2023', time: '11:02:30 UTC',
      adminInitials: 'SA',
      adminBg: '#7C3AED', adminText: '#fff',
      admin: 'Super Admin',
      category: 'STATUS',
      catBg: '#EDE9FE', catText: '#5B21B6',
      detail: `Business status changed to "${status}" — ${id} manually reviewed and approved.`,
      ip: `172.16.${(base % 100)}.${(base % 50) + 1}`,
      status: status === 'Active' ? 'SUCCESS' : status === 'Suspended' ? 'FLAGGED' : 'PENDING',
      statusColor: statusColor,
    },
    {
      id: `LOG-${base - 55}`,
      date: 'Oct 24, 2023', time: '10:45:12 UTC',
      adminInitials: 'OC',
      adminBg: '#059669', adminText: '#fff',
      admin: 'OCR System',
      category: 'COMPLIANCE',
      catBg: '#D1FAE5', catText: '#065F46',
      detail: `OCR engine extracted trade registration parameters for ${name} (${category} sector).`,
      ip: `10.10.${(base % 100) + 1}.${(base % 50) + 2}`,
      status: 'SUCCESS', statusColor: '#16A34A',
    },
    {
      id: `LOG-${base - 66}`,
      date: 'Oct 23, 2023', time: '09:33:00 UTC',
      adminInitials: 'RE',
      adminBg: '#6366F1', adminText: '#fff',
      admin: 'Risk Engine',
      category: 'KYC',
      catBg: '#E0E7FF', catText: '#3730A3',
      detail: `Risk profiling alert auto-initialized for ${category} business — ${id}.`,
      ip: `192.168.${(base % 100) + 5}.${(base % 50) + 10}`,
      status: 'WARNING', statusColor: '#D97706',
    },
  ];
}

// ─── Status badge style ───────────────────────────────────────────────────────
function statusStyle(s) {
  if (s === 'SUCCESS')  return { color: '#16A34A', dot: '#16A34A' };
  if (s === 'FAILED')   return { color: '#DC2626', dot: '#DC2626' };
  if (s === 'FLAGGED')  return { color: '#7C3AED', dot: '#7C3AED' };
  if (s === 'WARNING')  return { color: '#D97706', dot: '#D97706' };
  if (s === 'PENDING')  return { color: '#B45309', dot: '#B45309' };
  if (s === 'BLOCKED')  return { color: '#EF4444', dot: '#EF4444' };
  return { color: '#6B7280', dot: '#6B7280' };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AuditLogs() {
  const { addToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('7Days');

  // Read selected business from localStorage
  const biz = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('selectedBusiness')) || null;
    } catch {
      return null;
    }
  }, []);

  const business = biz || {
    id: 'BIZ-8829',
    name: 'Global Logistics Ltd',
    category: 'Logistics',
    location: 'Rotterdam, NL',
    status: 'Active',
    owner: 'Marcus Thorne',
  };

  const logs = useMemo(() => generateLogs(business), [business]);
  
  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchCategory = categoryFilter === 'All' || log.category === categoryFilter;
      return matchCategory;
    });
  }, [logs, categoryFilter]);

  const seed = seedFromId(business.id);

  // Dynamic stats from business
  const totalActions = 1000 + (seed % 600);
  const securityFlags = (seed % 8) + 1;
  const activeAdmins = (seed % 20) + 10;
  const bizStatusColor = business.status === 'Active' ? '#16a34a'
    : business.status === 'Suspended' ? '#ef4444'
    : business.status === 'Pending' ? '#b45309'
    : '#6366f1';

  const totalPages = Math.ceil((seed % 200 + 50) / logs.length);

  const handleExportCSV = () => {
    addToast('Generating Audit Logs CSV...', 'success');
    if (!logs || logs.length === 0) {
      addToast('No logs available to export.', 'error');
      return;
    }
    const headers = "Log ID,Date,Time,Admin,Category,Action,IP Address,Status";
    const csvRows = logs.map(l => 
      `"${l.id}","${l.date}","${l.time}","${l.admin}","${l.category}","${l.action.replace(/"/g, '""')}","${l.ip}","${l.status}"`
    );
    const csvContent = [headers, ...csvRows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `audit_logs_${business.id}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAdvancedFilters = () => {
    addToast('Advanced filters panel opened.', 'success');
  };

  return (
    <AdminShell activeTab="Audit Logs">
      <div className="min-h-screen bg-[#F9FAFB] p-8 text-[#111827]">

        {/* ── BREADCRUMB ── */}
        <div className="mb-2 text-[13px] text-[#71717A] flex items-center gap-1">
          <span>Business Management</span>
          <span>&gt;</span>
          <span className="text-[#111827] font-semibold">{business.name}</span>
        </div>

        {/* ── HEADER ── */}
        <div className="mb-8 flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-[32px] font-bold tracking-tight text-[#111827]">
              Business Audit Logs
            </h1>
            <p className="mt-1 text-[14px] text-[#71717A]">
              Showing all administrative actions for&nbsp;
              <span className="font-semibold text-[#4f46e5]">{business.name}</span>
              &nbsp;·&nbsp;
              <span className="font-mono text-[12px] text-[#71717A]">{business.id}</span>
              &nbsp;·&nbsp;
              <span style={{ color: bizStatusColor }} className="font-semibold">{business.status}</span>
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              className="h-[40px] rounded border border-[#E4E4E7] bg-white px-4 text-[14px] font-medium text-black inline-flex items-center gap-2 hover:bg-[#F4F4F5] transition-colors shadow-sm"
              onClick={handleExportCSV}
              type="button"
            >
              <Download size={16} />
              Export CSV
            </button>
            <button 
              className="h-[40px] rounded bg-[#1D1B84] px-4 text-[14px] font-medium text-white inline-flex items-center gap-2 hover:bg-[#2522A6] transition-colors shadow-sm"
              onClick={handleAdvancedFilters}
              type="button"
            >
              <SlidersHorizontal size={16} />
              Advanced Filters
            </button>
          </div>
        </div>

        {/* ── STATS CARDS ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">

          {/* Total Actions */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <History size={18} className="text-[#71717A]" />
              </div>
              <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[12px] font-semibold text-[#15803D]">
                +{(seed % 20) + 5}%
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">TOTAL ACTIONS (24H)</p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">{totalActions.toLocaleString()}</p>
          </div>

          {/* Security Flags */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <ShieldAlert size={18} className="text-[#EF4444]" />
              </div>
              <span className="text-[13px] font-medium text-[#71717A]">
                {securityFlags > 5 ? 'High' : securityFlags > 2 ? 'Moderate' : 'Stable'}
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">SECURITY FLAGS</p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">{String(securityFlags).padStart(2, '0')}</p>
          </div>

          {/* Active Admins */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <UserCheck size={18} className="text-[#3B82F6]" />
              </div>
              <span className="text-[13px] font-medium text-[#71717A]">Active</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">ACTIVE ADMINS</p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">{activeAdmins}</p>
          </div>

          {/* Last Entry */}
          <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F4F5] flex items-center justify-center border border-[#E4E4E7]">
                <Clock size={18} className="text-[#71717A]" />
              </div>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#71717A]">LAST ENTRY</p>
            <p className="text-[32px] font-bold text-[#111827] mt-1">{(seed % 15) + 1}m ago</p>
          </div>
        </div>

        {/* ── MAIN TABLE CONTAINER ── */}
        <div className="rounded-xl border border-[#E4E4E7] bg-white text-black overflow-hidden shadow-sm mb-6">

          {/* Filters Bar */}
          <div className="p-4 border-b border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4 bg-[#FAFAFA]">
            <div className="flex items-center gap-3">
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="h-[36px] px-3 pr-8 rounded-lg border border-[#E4E4E7] bg-white text-[13px] font-medium text-[#27272A] shadow-sm hover:bg-slate-50 transition-colors focus:outline-none appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2371717A\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.2em 1.2em' }}
              >
                <option value="All">All Categories</option>
                <option value="SECURITY">Security</option>
                <option value="FINANCE">Finance</option>
                <option value="ACCESS">Access</option>
                <option value="CONFIGURATION">Configuration</option>
                <option value="STATUS">Status</option>
                <option value="COMPLIANCE">Compliance</option>
                <option value="KYC">KYC</option>
              </select>
              <select 
                value={dateFilter}
                onChange={(e) => {
                  setDateFilter(e.target.value);
                  addToast(`Date range changed to ${e.target.options[e.target.selectedIndex].text}`, 'success');
                }}
                className="h-[36px] px-3 pr-8 rounded-lg border border-[#E4E4E7] bg-white text-[13px] font-medium text-[#27272A] shadow-sm hover:bg-slate-50 transition-colors focus:outline-none appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2371717A\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.2em 1.2em' }}
              >
                <option value="7Days">Last 7 Days</option>
                <option value="30Days">Last 30 Days</option>
                <option value="ThisMonth">This Month</option>
                <option value="AllTime">All Time</option>
              </select>
            </div>
            <div className="text-[13px] text-[#71717A]">
              Business: <span className="font-semibold text-[#4f46e5]">{business.name}</span>
              &nbsp;·&nbsp; Showing <span className="font-semibold text-black">{filteredLogs.length > 0 ? '1' : '0'}–{filteredLogs.length}</span> of {categoryFilter === 'All' ? ((seed % 300) + 50) : filteredLogs.length} logs
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#E4E4E7] bg-[#F4F4F5] text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
                  <th className="py-3.5 px-5">Timestamp</th>
                  <th className="py-3.5 px-5">Administrator</th>
                  <th className="py-3.5 px-5">Action Category</th>
                  <th className="py-3.5 px-5 w-[35%]">Event Details</th>
                  <th className="py-3.5 px-5">IP Address</th>
                  <th className="py-3.5 px-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E4E7] text-[13px] bg-white">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => {
                    const st = statusStyle(log.status);
                    return (
                    <tr key={log.id} className="hover:bg-[#FAFAFA]">
                      <td className="py-4 px-5 text-[#27272A] font-medium leading-tight">
                        {log.date}<br />
                        <span className="text-[11px] text-[#71717A]">{log.time}</span>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold"
                            style={{ background: log.adminBg, color: log.adminText }}
                          >
                            {log.adminInitials}
                          </div>
                          <span className="font-semibold text-[#111827]">{log.admin}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <span
                          className="rounded px-2 py-0.5 text-[11px] font-bold"
                          style={{ background: log.catBg, color: log.catText }}
                        >
                          {log.category}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-[#4B5563] font-medium">{log.detail}</td>
                      <td className="py-4 px-5 text-[#27272A] font-mono">{log.ip}</td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-1.5 font-bold text-[12px]" style={{ color: st.color }}>
                          <span className="w-2 h-2 rounded-full" style={{ background: st.dot }} />
                          {log.status}
                        </div>
                      </td>
                    </tr>
                  );
                })
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-[#71717A] font-medium">
                      No logs found for the selected category.
                    </td>
                  </tr>
                )}
              </tbody>
            </table></div>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-[#E4E4E7] bg-white flex items-center justify-between flex-wrap gap-4 text-[13px] text-[#27272A]">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="h-[32px] px-3 rounded border border-[#E4E4E7] bg-white text-[#71717A] hover:bg-[#F4F4F5] font-medium inline-flex items-center gap-1"
              >
                <ChevronLeft size={14} /> Previous
              </button>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className="w-[32px] h-[32px] rounded font-semibold"
                  style={{
                    background: currentPage === n ? '#1D1B84' : '#fff',
                    color: currentPage === n ? '#fff' : '#27272A',
                    border: currentPage === n ? 'none' : '1px solid #E4E4E7',
                  }}
                >
                  {n}
                </button>
              ))}
              <span className="px-1 text-[#71717A]">...</span>
              <button className="h-[32px] px-2.5 rounded border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] font-medium">
                {totalPages}
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="h-[32px] px-3 rounded border border-[#E4E4E7] bg-white text-[#27272A] hover:bg-[#F4F4F5] font-medium inline-flex items-center gap-1"
              >
                Next <ChevronRight size={14} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#71717A]">Rows per page:</span>
              <button className="h-[32px] px-2.5 rounded border border-[#E4E4E7] bg-white font-bold inline-flex items-center gap-3">
                <span>{logs.length}</span>
                <ChevronDown size={14} className="text-[#71717A]" />
              </button>
            </div>
          </div>
        </div>

        {/* ── FOOTER INTEGRITY BOX ── */}
        <div className="rounded-xl border border-[#E4E4E7] bg-white p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div>
            <p className="text-[14px] text-[#4B5563] leading-relaxed max-w-xl">
              All critical administrative actions for <strong>{business.name}</strong> are being logged and
              encrypted in real-time. System integrity at 100%.
            </p>
          </div>
          <button 
            onClick={() => addToast('System integrity review initiated. Log hashes match expected values.', 'success')}
            className="h-[40px] rounded bg-black px-5 text-[14px] font-bold text-white hover:bg-[#222] transition-colors shadow-md"
          >
            Review Logs Integrity
          </button>
        </div>

      </div>
    </AdminShell>
  );
}