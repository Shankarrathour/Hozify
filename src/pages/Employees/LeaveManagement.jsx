import React, { useState } from 'react';
import { Search, SlidersHorizontal, Download, ChevronLeft, ChevronRight, CheckCircle2, ShieldAlert, Ban, Trash2 } from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';

const leaveRequests = [
  { id: 'emp_1', name: 'John Doe', role: 'Senior Developer', type: 'SICK LEAVE', typeClass: 'sick', duration: 'Oct 24 - Oct 26 (3 Days)', reason: 'Severe seasonal flu and high fever.', status: 'Pending', statusClass: 'pending', initials: 'JD', bg: '#f1ebf8', color: 'var(--primary)', isOnLeave: true },
  { id: 'emp_2', name: 'Sarah Smith', role: 'UI Designer', type: 'ANNUAL', typeClass: 'annual', duration: 'Nov 12 - Nov 20 (9 Days)', reason: 'Pre-planned family vacation to Greece.', status: 'Approved', statusClass: 'active', initials: 'SS', bg: '#ecfdf5', color: '#059669', isOnLeave: true },
  { id: 'emp_3', name: 'Michael Chen', role: 'Accountant', type: 'BEREAVEMENT', typeClass: 'bereavement', duration: 'Oct 25 - Oct 25 (1 Day)', reason: 'Personal emergency / Family matter.', status: 'Pending', statusClass: 'pending', initials: 'MC', bg: '#fee2e2', color: '#ef4444', isOnLeave: true },
  { id: 'emp_4', name: 'Elena Rodriguez', role: 'Marketing Lead', type: 'ANNUAL', typeClass: 'annual', duration: 'Nov 01 - Nov 05 (5 Days)', reason: 'Moving houses and settling in.', status: 'Rejected', statusClass: 'suspended', initials: 'ER', bg: '#e0f2fe', color: '#0284c7', isOnLeave: false }
];

export default function LeaveManagement() {
  const { addToast } = useToast();
  const [search, setSearch] = useState('');
  const [requests, setRequests] = useState(leaveRequests);
  
  // लीव रिमार्क्स को हैंडल करने के लिए स्टेट
  const [employeeRemarks, setEmployeeRemarks] = useState({});

  const executeStatusTrigger = (employeeId, name, nextStatus) => {
    setRequests(requests.map(r => 
      r.id === employeeId 
        ? { ...r, status: nextStatus, statusClass: nextStatus === 'ACTIVE' ? 'active' : 'suspended' } 
        : r
    ));

    const remark = employeeRemarks[employeeId] || '';
    const remarkMsg = remark ? ` with justification: "${remark}"` : '';
    
    addToast(`Success: Status changed to ${nextStatus} for ${name}${remarkMsg}!`, "success");
  };

  const syncRemarkState = (employeeId, value) => {
    setEmployeeRemarks(prev => ({
      ...prev,
      [employeeId]: value
    }));
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
                <th style={{ width: '220px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((row, index) => (
                <tr 
                  key={row.id || index} 
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
                  
                  {/* UPDATED ACTIONS COLUMN WITH INSTANT ICONS & REMARK TEXTBOX */}
                  <td onClick={(e) => e.stopPropagation()} style={{ textAlign: 'right' }}>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '6px', 
                      alignItems: 'flex-end',
                      width: '100%' 
                    }}>
                      {/* Action Buttons Panel */}
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        {/* ACTIVATE */}
                        <button 
                          type="button"
                          onClick={() => executeStatusTrigger(row.id, row.name, 'ACTIVE')}
                          title="Set Active"
                          style={{ border: '1px solid #bbf7d0', background: '#f0fdf4', cursor: 'pointer', color: '#16a34a', padding: '6px', borderRadius: '6px', display: 'flex' }}
                        >
                          <CheckCircle2 size={15} strokeWidth={2.5} />
                        </button>

                        {/* SUSPEND */}
                        <button 
                          type="button"
                          onClick={() => executeStatusTrigger(row.id, row.name, 'SUSPEND')}
                          title="Suspend Session"
                          style={{ border: '1px solid #fed7aa', background: '#fff7ed', cursor: 'pointer', color: '#ea580c', padding: '6px', borderRadius: '6px', display: 'flex' }}
                        >
                          <ShieldAlert size={15} strokeWidth={2.5} />
                        </button>

                        {/* BLOCK */}
                        <button 
                          type="button"
                          onClick={() => executeStatusTrigger(row.id, row.name, 'BLOCK')}
                          title="Block Security Access"
                          style={{ border: '1px solid #fecaca', background: '#fef2f2', cursor: 'pointer', color: '#dc2626', padding: '6px', borderRadius: '6px', display: 'flex' }}
                        >
                          <Ban size={15} strokeWidth={2.5} />
                        </button>

                        {/* DELETE */}
                        <button 
                          type="button"
                          onClick={() => executeStatusTrigger(row.id, row.name, 'DELETE')}
                          title="Purge Record"
                          style={{ border: '1px solid #e2e8f0', background: '#f8fafc', cursor: 'pointer', color: '#4b5563', padding: '6px', borderRadius: '6px', display: 'flex' }}
                        >
                          <Trash2 size={15} strokeWidth={2.5} />
                        </button>
                      </div>

                      {/* Dynamic Textbox for Leave Justification */}
                      {row.isOnLeave && (
                        <div style={{ width: '100%', maxWidth: '180px', marginTop: '2px' }}>
                          <input
                            type="text"
                            placeholder="Leave justification..."
                            value={employeeRemarks[row.id] || ''}
                            onChange={(e) => syncRemarkState(row.id, e.target.value)}
                            style={{
                              width: '100%',
                              padding: '5px 8px',
                              fontSize: '11px',
                              border: '1px solid #cbd5e1',
                              borderRadius: '4px',
                              outline: 'none',
                              backgroundColor: '#ffffff',
                              color: '#334155'
                            }}
                          />
                        </div>
                      )}
                    </div>
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
          <span className="footer-results-text">Showing {filteredRequests.length} of {requests.length} requests</span>
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