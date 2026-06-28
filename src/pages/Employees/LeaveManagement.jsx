import React, { useState } from 'react';
import { Search, SlidersHorizontal, Download, ChevronLeft, ChevronRight, Check, X, Calendar, ClipboardCheck } from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';

const leaveRequests = [
  { name: 'John Doe', role: 'Senior Developer', type: 'SICK LEAVE', typeClass: 'sick', duration: 'Oct 24 - Oct 26 (3 Days)', reason: 'Severe seasonal flu and high fever.', status: 'Pending', statusClass: 'pending', initials: 'JD', bg: '#f1ebf8', color: 'var(--primary)' },
  { name: 'Sarah Smith', role: 'UI Designer', type: 'ANNUAL', typeClass: 'annual', duration: 'Nov 12 - Nov 20 (9 Days)', reason: 'Pre-planned family vacation to Greece.', status: 'Approved', statusClass: 'active', initials: 'SS', bg: '#ecfdf5', color: '#059669' },
  { name: 'Michael Chen', role: 'Accountant', type: 'BEREAVEMENT', typeClass: 'bereavement', duration: 'Oct 25 - Oct 25 (1 Day)', reason: 'Personal emergency / Family matter.', status: 'Pending', statusClass: 'pending', initials: 'MC', bg: '#fee2e2', color: '#ef4444' },
  { name: 'Elena Rodriguez', role: 'Marketing Lead', type: 'ANNUAL', typeClass: 'annual', duration: 'Nov 01 - Nov 05 (5 Days)', reason: 'Moving houses and settling in.', status: 'Rejected', statusClass: 'suspended', initials: 'ER', bg: '#e0f2fe', color: '#0284c7' }
];

export default function LeaveManagement() {
  const { addToast } = useToast();
  const [search, setSearch] = useState('');
  const [requests, setRequests] = useState(leaveRequests);

  const handleAction = (name, nextStatus) => {
    setRequests(requests.map(r => r.name === name ? { ...r, status: nextStatus, statusClass: nextStatus === 'Approved' ? 'active' : 'suspended' } : r));
    addToast(`Leave request status updated: "${nextStatus}" for ${name}`, "success");
  };

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.reason.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="leave-management-flow" style={{ paddingBottom: '40px' }}>
      {/* Title Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Leave Management</h1>
          <p className="page-subtitle">Configure leave requests, holiday schedules, and tracking indices.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div className="dash-search" style={{ width: '260px', margin: 0 }}>
            <Search size={18} />
            <input
              placeholder="Search leave requests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search leave requests by name or reason"
            />
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <section className="kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px', gap: '16px' }}>
        {/* Pending Requests */}
        <div 
          onClick={() => addToast("Card clicked: Pending leave requests details", "success")}
          className="kpi-card" 
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px', minHeight: '80px', background: '#fff', border: '1px solid var(--line)', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
              Pending Requests 
              <span style={{ fontSize: '8px', padding: '2px 4px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '4px', marginLeft: '6px', fontWeight: '800' }}>LIVE</span>
            </span>
            <strong style={{ display: 'block', fontSize: '18px', margin: '4px 0 2px', color: 'var(--text)' }}>24 <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>↗ +12%</span></strong>
          </div>
          <div style={{ width: '100%', height: '3px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>

        {/* Active Leaves */}
        <div 
          onClick={() => addToast("Card clicked: Active leaves today list", "success")}
          className="kpi-card" 
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px', minHeight: '80px', background: '#fff', border: '1px solid var(--line)', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
              Active Leaves 
              <span style={{ fontSize: '8px', padding: '2px 4px', background: '#f8fafc', color: 'var(--muted)', borderRadius: '4px', marginLeft: '6px', fontWeight: '800', border: '1px solid var(--line)' }}>TODAY</span>
            </span>
            <strong style={{ display: 'block', fontSize: '18px', margin: '4px 0 2px', color: 'var(--text)' }}>42 <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↘ -5%</span></strong>
          </div>
          <div style={{ width: '100%', height: '3px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>

        {/* Approval Rate */}
        <div 
          onClick={() => addToast("Card clicked: Leave approval rate analysis", "success")}
          className="kpi-card" 
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px', minHeight: '80px', background: '#fff', border: '1px solid var(--line)', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>Approval Rate</span>
            <strong style={{ display: 'block', fontSize: '18px', margin: '4px 0 2px', color: 'var(--text)' }}>94% <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginLeft: '4px' }}>✓ Stable</span></strong>
          </div>
          <div style={{ width: '100%', height: '3px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>

        {/* Staff on Floor */}
        <div 
          onClick={() => addToast("Card clicked: Present staff count details", "success")}
          className="kpi-card" 
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px', minHeight: '80px', background: '#fff', border: '1px solid var(--line)', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>Staff on Floor</span>
            <strong style={{ display: 'block', fontSize: '18px', margin: '4px 0 2px', color: 'var(--text)' }}>186 <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 'normal' }}>/ 228 total</span></strong>
          </div>
          <div style={{ width: '100%', height: '3px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>
      </section>

      {/* Recent Leave Requests Table */}
      <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Recent Leave Requests</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => addToast("Opened leave requests filter view", "success")}
              className="secondary-action-btn cursor-pointer" 
              style={{ height: '32px' }} 
              type="button"
            >
              <SlidersHorizontal size={14} style={{ marginRight: '4px' }} />
              <span>Filter</span>
            </button>
            <button 
              onClick={() => addToast("Exporting leave records report as CSV...", "success")}
              className="secondary-action-btn cursor-pointer" 
              style={{ height: '32px' }} 
              type="button"
            >
              <Download size={14} style={{ marginRight: '4px' }} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="partner-table">
            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>LEAVE TYPE</th>
                <th>DURATION</th>
                <th>REASON</th>
                <th>STATUS</th>
                <th style={{ width: '120px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((row, index) => (
                <tr 
                  key={index} 
                  onClick={() => addToast(`Reviewing leave detail timeline for ${row.name}`, "success")}
                  className="partner-row-clickable"
                >
                  <td style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                      {row.initials}
                    </span>
                    <div>
                      <strong style={{ fontSize: '13px', display: 'block' }}>{row.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.role}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>{row.type}</span>
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--muted)' }}>{row.duration}</td>
                  <td style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '13px' }}>
                    {row.reason}
                  </td>
                  <td>
                    <span
                      className="status-badge"
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        color: row.statusClass === 'active' ? '#059669' : row.statusClass === 'pending' ? '#d97706' : '#ef4444',
                        background: row.statusClass === 'active' ? '#ecfdf5' : row.statusClass === 'pending' ? '#fef3c7' : '#fee2e2',
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td onClick={(e) => e.stopPropagation()} style={{ textAlign: 'right' }}>
                    {row.status === 'Pending' ? (
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px' }}>
                        <button 
                          onClick={() => handleAction(row.name, 'Approved')}
                          style={{ border: 'none', background: '#d1fae5', color: '#059669', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
                          title="Approve Leave"
                        >
                          <Check size={14} />
                        </button>
                        <button 
                          onClick={() => handleAction(row.name, 'Rejected')}
                          style={{ border: 'none', background: '#fee2e2', color: '#dc2626', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
                          title="Reject Leave"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Completed</span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredRequests.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: 'var(--muted)' }}>No matching leave requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="directory-table-footer">
          <span className="footer-results-text">Showing {filteredRequests.length} of 4 requests</span>
          <div className="pagination-wrap">
            <button onClick={() => addToast("Loaded previous leaves page", "success")} className="pag-nav-btn cursor-pointer" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => addToast("Loaded page 1", "success")} className="pag-num-btn active cursor-pointer" type="button">1</button>
            <button onClick={() => addToast("Loaded next leaves page", "success")} className="pag-nav-btn cursor-pointer" type="button" disabled>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
