import React, { useState } from 'react';
import { FileText, ShieldAlert, FolderKanban, AlertCircle, SlidersHorizontal, Search, Check, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

const initialQueue = [
  { id: 'BR-90210', branchName: 'West Plaza Unit', business: 'Vanguard Logistics', manager: 'James Stevenson', managerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80', city: 'Chicago, IL', date: 'Oct 24, 2023', status: 'HIGH RISK', statusBg: '#fee2e2', statusColor: '#ef4444' },
  { id: 'BR-88219', branchName: 'North Star Hub', business: 'Apex Distribution', manager: 'Maria Rodriguez', managerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80', city: 'Seattle, WA', date: 'Oct 25, 2023', status: 'PENDING DOCS', statusBg: '#fef3c7', statusColor: '#d97706' },
  { id: 'BR-71233', branchName: 'Eastside Storage', business: 'Metro Real Estate', manager: 'Kevin Lee', managerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&h=60&q=80', city: 'New York, NY', date: 'Oct 26, 2023', status: 'NEW REQUEST', statusBg: '#e0f2fe', statusColor: '#0369a1' },
  { id: 'BR-44321', branchName: 'Harbor EV Fleet', business: 'Blue Ocean Logistics', manager: 'Sarah Williams', managerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=60&h=60&q=80', city: 'Miami, FL', date: 'Oct 26, 2023', status: 'NEW REQUEST', statusBg: '#e0f2fe', statusColor: '#0369a1' }
];

export default function BranchApproval() {
  const { navigate, setCurrentBranchId } = useApp();
  const [queue, setQueue] = useState(initialQueue);
  const [filter, setFilter] = useState('All Approvals');
  const [search, setSearch] = useState('');

  const handleAction = (id, nextStatus) => {
    setQueue(queue.map(item => item.id === id ? {
      ...item,
      status: nextStatus,
      statusBg: nextStatus === 'VERIFIED' ? '#ecfdf5' : '#fee2e2',
      statusColor: nextStatus === 'VERIFIED' ? '#059669' : '#ef4444'
    } : item));
  };

  const filteredQueue = queue.filter(item => {
    const matchesFilter = filter === 'All Approvals' ||
      (filter === 'New Branches' && item.status === 'NEW REQUEST') ||
      (filter === 'Compliance Update' && item.status === 'HIGH RISK');
    const matchesSearch = item.branchName.toLowerCase().includes(search.toLowerCase()) ||
      item.business.toLowerCase().includes(search.toLowerCase()) ||
      item.manager.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleViewDetails = (branch) => {
    setCurrentBranchId(branch.id);
    navigate(ROUTES.branchSchedule);
  };

  return (
    <div className="branch-approval-container">
      {/* Page Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Branch Approval Queue</h1>
          <p className="page-subtitle">Verify and manage high-stakes operational requests across all active regions.</p>
        </div>
        <div className="partners-header-buttons">
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <SlidersHorizontal size={14} style={{ marginRight: '4px' }} />
            <span>Filter</span>
          </button>
          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <FileText size={14} style={{ marginRight: '4px' }} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        {/* Pending Branches */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Branches</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>24</strong>
            <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>↘ -12% from last month</span>
          </div>
          <span style={{ color: '#4f46e5', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f1ebf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FolderKanban size={18} />
          </span>
        </div>

        {/* Pending Documents */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Documents</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>142</strong>
            <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>→ 0% steady queue</span>
          </div>
          <span style={{ color: '#4f46e5', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f1ebf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={18} />
          </span>
        </div>

        {/* Pending Services */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Services</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>18</strong>
            <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>!Critical Requires audit</span>
          </div>
          <span style={{ color: '#0ea5e9', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldAlert size={18} />
          </span>
        </div>

        {/* High Risk Cases (Dark Card) */}
        <div className="kpi-card" style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '110px' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>High Risk Cases</span>
            <strong style={{ display: 'block', fontSize: '28px', margin: '4px 0 2px' }}>05</strong>
          </div>
          <a href="#risk-cases" onClick={(e) => e.preventDefault()} style={{ fontSize: '11px', color: '#38bdf8', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Review Flags →
          </a>
        </div>
      </section>

      {/* Directory Table Panel */}
      <section className="panel partner-directory-panel" style={{ padding: '24px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['All Approvals', 'New Branches', 'Compliance Update'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                type="button"
                style={{ background: 'transparent', border: 'none', borderBottom: filter === tab ? '2px solid #4f46e5' : '2px solid transparent', color: filter === tab ? '#4f46e5' : 'var(--muted)', fontWeight: '700', fontSize: '13px', cursor: 'pointer', paddingBottom: '14px' }}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="dash-search" style={{ width: '200px', height: '32px', margin: 0 }}>
              <Search size={14} />
              <input
                placeholder="Search approvals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: '12px' }}
                aria-label="Search approvals"
              />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Showing 1-{filteredQueue.length} of 42 results</span>
          </div>
        </div>

        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table">
            <thead>
              <tr>
                <th>BRANCH</th>
                <th>BUSINESS</th>
                <th>MANAGER</th>
                <th>CITY</th>
                <th>SUBMITTED DATE</th>
                <th>STATUS</th>
                <th style={{ textAlign: 'right', paddingRight: '20px' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredQueue.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px' }}>{row.branchName}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>ID: {row.id}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text)', fontSize: '13px' }}>{row.business}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img src={row.managerAvatar} alt={row.manager} style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
                      <span style={{ fontSize: '13px', fontWeight: '700' }}>{row.manager}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text)', fontSize: '13px' }}>{row.city}</td>
                  <td style={{ color: 'var(--muted)', fontSize: '12px' }}>{row.date}</td>
                  <td>
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: '800',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        color: row.statusColor,
                        background: row.statusBg
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', paddingRight: '20px' }} onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button
                        onClick={() => handleViewDetails(row)}
                        style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', background: '#f8fafc', color: 'var(--text)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        title="View Details"
                      >
                        <Eye size={14} />
                      </button>
                      
                      {row.status !== 'VERIFIED' && row.status !== 'REJECTED' ? (
                        <>
                          <button
                            onClick={() => handleAction(row.id, 'VERIFIED')}
                            style={{ width: '28px', height: '28px', border: '1px solid #dcf3ec', background: '#dcf3ec', color: '#088261', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            title="Approve"
                          >
                            <Check size={14} />
                          </button>
                          <button
                            onClick={() => handleAction(row.id, 'REJECTED')}
                            style={{ width: '28px', height: '28px', border: '1px solid #fee2e2', background: '#fee2e2', color: '#ef4444', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            title="Reject"
                          >
                            <X size={14} />
                          </button>
                        </>
                      ) : (
                        <span style={{ fontSize: '11px', color: 'var(--muted)', minWidth: '64px', textAlign: 'center' }}>Processed</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>

        {/* Directory Table Footer */}
        <div className="directory-table-footer" style={{ marginTop: '16px' }}>
          <span className="footer-results-text">Showing 1-{filteredQueue.length} of 42 results</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <span style={{ color: 'var(--muted)', margin: '0 4px' }}>...</span>
            <button className="pag-num-btn" type="button">5</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
