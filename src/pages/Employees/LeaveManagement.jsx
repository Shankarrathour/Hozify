import React, { useState } from 'react';
import { Search, SlidersHorizontal, Download, ChevronLeft, ChevronRight, Check, X, Calendar } from 'lucide-react';

const leaveRequests = [
  { name: 'John Doe', role: 'Senior Developer', type: 'SICK LEAVE', typeClass: 'sick', duration: 'Oct 24 - Oct 26 (3 Days)', reason: 'Severe seasonal flu and high fever.', status: 'Pending', statusClass: 'pending', initials: 'JD', bg: '#f1ebf8', color: 'var(--primary)' },
  { name: 'Sarah Smith', role: 'UI Designer', type: 'ANNUAL', typeClass: 'annual', duration: 'Nov 12 - Nov 20 (9 Days)', reason: 'Pre-planned family vacation to Greece.', status: 'Approved', statusClass: 'active', initials: 'SS', bg: '#ecfdf5', color: '#059669' },
  { name: 'Michael Chen', role: 'Accountant', type: 'BEREAVEMENT', typeClass: 'bereavement', duration: 'Oct 25 - Oct 25 (1 Day)', reason: 'Personal emergency / Family matter.', status: 'Pending', statusClass: 'pending', initials: 'MC', bg: '#fee2e2', color: '#ef4444' },
  { name: 'Elena Rodriguez', role: 'Marketing Lead', type: 'ANNUAL', typeClass: 'annual', duration: 'Nov 01 - Nov 05 (5 Days)', reason: 'Moving houses and settling in.', status: 'Rejected', statusClass: 'suspended', initials: 'ER', bg: '#e0f2fe', color: '#0284c7' }
];

export default function LeaveManagement() {
  const [search, setSearch] = useState('');
  const [requests, setRequests] = useState(leaveRequests);

  const handleAction = (name, nextStatus) => {
    setRequests(requests.map(r => r.name === name ? { ...r, status: nextStatus, statusClass: nextStatus === 'Approved' ? 'active' : 'suspended' } : r));
  };

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.reason.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="leave-management-flow">
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
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        {/* Pending Requests */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px', minHeight: '100px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Requests <span style={{ fontSize: '9px', padding: '2px 6px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '4px', marginLeft: '6px', fontWeight: '800' }}>LIVE</span></span>
          <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>24 <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: '700' }}>↗ +12%</span></strong>
          <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>

        {/* Active Leaves */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px', minHeight: '100px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Leaves <span style={{ fontSize: '9px', padding: '2px 6px', background: '#f8fafc', color: 'var(--muted)', borderRadius: '4px', marginLeft: '6px', fontWeight: '800', border: '1px solid var(--line)' }}>TODAY</span></span>
          <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>42 <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700' }}>↘ -5%</span></strong>
          <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>

        {/* Approval Rate */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px', minHeight: '100px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Approval Rate</span>
          <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>94% <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginLeft: '4px' }}>✓ Stable</span></strong>
          <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>

        {/* Staff on Floor */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px', minHeight: '100px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Staff on Floor</span>
          <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>186 <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 'normal' }}>/ 228 total</span></strong>
          <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px' }} />
        </div>
      </section>

      {/* Recent Leave Requests Table */}
      <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Recent Leave Requests</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="secondary-action-btn" style={{ height: '32px' }} type="button">
              <SlidersHorizontal size={14} style={{ marginRight: '4px' }} />
              <span>Filter</span>
            </button>
            <button className="secondary-action-btn" style={{ height: '32px' }} type="button">
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
                <th style={{ textAlign: 'right', paddingRight: '20px' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((row) => (
                <tr key={row.name}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                        {row.initials}
                      </span>
                      <div>
                        <strong style={{ display: 'block', fontSize: '13px' }}>{row.name}</strong>
                        <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.role}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: '800',
                        padding: '3px 6px',
                        borderRadius: '4px',
                        color: row.typeClass === 'annual' ? '#4f46e5' : row.typeClass === 'sick' ? '#059669' : '#b45309',
                        background: row.typeClass === 'annual' ? '#f1ebf8' : row.typeClass === 'sick' ? '#ecfdf5' : '#fef3c7'
                      }}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>{row.duration}</td>
                  <td style={{ color: 'var(--muted)', fontSize: '12px', maxWidth: '300px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{row.reason}</td>
                  <td>
                    <span className={`status-badge ${row.statusClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', paddingRight: '20px' }} onClick={(e) => e.stopPropagation()}>
                    {row.status === 'Pending' ? (
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleAction(row.name, 'Approved')}
                          style={{ width: '28px', height: '28px', border: '1px solid #dcf3ec', background: '#dcf3ec', color: '#088261', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                          title="Approve"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          onClick={() => handleAction(row.name, 'Rejected')}
                          style={{ width: '28px', height: '28px', border: '1px solid #fee2e2', background: '#fee2e2', color: '#ef4444', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                          title="Reject"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>No Actions</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="directory-table-footer">
          <span className="footer-results-text">Showing 1-4 of 24 leave requests</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Layout Row: Distribution & Holidays */}
      <div className="fraud-top-grid" style={{ gap: '20px' }}>
        
        {/* Leave Distribution */}
        <div className="panel" style={{ flex: 1.6, padding: '24px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px' }}>Leave Distribution</h2>
          <p style={{ margin: '-10px 0 20px', color: 'var(--muted)', fontSize: '12px' }}>Types of leaves taken this month</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', height: '140px', alignItems: 'flex-end', textAlign: 'center' }}>
            <div>
              <div style={{ height: '90px', background: '#cbc5d9', borderRadius: '4px', width: '32px', margin: '0 auto' }} />
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '8px' }}>ANNUAL</span>
            </div>
            <div>
              <div style={{ height: '40px', background: '#4f46e5', borderRadius: '4px', width: '32px', margin: '0 auto' }} />
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '8px' }}>SICK</span>
            </div>
            <div>
              <div style={{ height: '20px', background: '#cbc5d9', borderRadius: '4px', width: '32px', margin: '0 auto' }} />
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '8px' }}>UNPAID</span>
            </div>
            <div>
              <div style={{ height: '15px', background: '#cbc5d9', borderRadius: '4px', width: '32px', margin: '0 auto' }} />
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '8px' }}>OTHER</span>
            </div>
          </div>
        </div>

        {/* Upcoming Holidays */}
        <div className="panel" style={{ flex: 1, padding: '24px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px' }}>Upcoming Holidays</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
              <div style={{ padding: '6px', background: '#f1f5f9', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '36px' }}>
                <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)' }}>OCT</span>
                <strong style={{ fontSize: '14px', color: 'var(--text)' }}>31</strong>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px' }}>Halloween Eve</strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Optional Holiday</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
              <div style={{ padding: '6px', background: '#e0e7ff', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '36px' }}>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#4f46e5' }}>NOV</span>
                <strong style={{ fontSize: '14px', color: '#4f46e5' }}>11</strong>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px' }}>Veterans Day</strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Public Holiday</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
              <div style={{ padding: '6px', background: '#e0e7ff', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '36px' }}>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#4f46e5' }}>NOV</span>
                <strong style={{ fontSize: '14px', color: '#4f46e5' }}>28</strong>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px' }}>Thanksgiving</strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Public Holiday</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
