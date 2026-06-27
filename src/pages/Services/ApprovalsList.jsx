import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Download,
  Search,
  ListFilter,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Clock,
  ThumbsUp,
  XCircle,
  FileSearch,
  Cpu,
  Shield,
  Cloud,
  Layers
} from 'lucide-react';

const approvalQueueData = [
  {
    id: '#SRV-88291',
    name: 'Robotic Arm Calibration',
    partner: 'TechNexus Dynamics',
    category: 'Heavy Machinery',
    date: '2023-10-24 09:12',
    status: 'Pending',
    icon: Cpu
  },
  {
    id: '#SRV-88292',
    name: 'L3 Security Audit',
    partner: 'CyberShield Pro',
    category: 'IT & Compliance',
    date: '2023-10-23 15:45',
    status: 'Pending',
    icon: Shield
  },
  {
    id: '#SRV-88293',
    name: 'Cloud Migration Service',
    partner: 'BlueSky Cloud Corp',
    category: 'Software',
    date: '2023-10-23 11:20',
    status: 'Rejected',
    icon: Cloud
  },
  {
    id: '#SRV-88294',
    name: 'Grid Connectivity Setup',
    partner: 'VoltCore Systems',
    category: 'Facility',
    date: '2023-10-22 17:30',
    status: 'Pending',
    icon: Layers
  }
];

export default function ApprovalsList({ onViewDetails, onClose }) {
  const [approvals, setApprovals] = useState(approvalQueueData);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Breadcrumbs & Back */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', fontWeight: '700' }}>
          <span style={{ cursor: 'pointer' }} onClick={onClose}>Catalog</span>
          <span>&gt;</span>
          <span style={{ color: 'var(--text)' }}>Approval Queue</span>
        </div>
        
        <button
          onClick={onClose}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--primary)',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          type="button"
        >
          <ArrowLeftIcon />
          <span>Back to Catalog</span>
        </button>
      </div>

      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Approval Queue</h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>Review and moderate incoming service requests from active partners.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              color: 'var(--text)',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            <SlidersHorizontal size={16} />
            <span>Filter</span>
          </button>
          
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              color: 'var(--text)',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            <Download size={16} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* KPI summaries row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        
        {/* Total Pending */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Pending</span>
            <FileSearch size={18} style={{ color: '#d97706' }} />
          </div>
          <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>24</strong>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '700' }}>📈 +12%</span>
          <div style={{ height: '4px', background: '#fef3c7', borderRadius: '2px', overflow: 'hidden', marginTop: '4px' }}>
            <div style={{ width: '60%', height: '100%', background: '#f59e0b' }} />
          </div>
        </div>

        {/* Rejected (7d) */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rejected (7d)</span>
            <XCircle size={18} style={{ color: '#dc2626' }} />
          </div>
          <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>08</strong>
          <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>📉 -3%</span>
          <div style={{ height: '4px', background: '#fee2e2', borderRadius: '2px', overflow: 'hidden', marginTop: '4px' }}>
            <div style={{ width: '30%', height: '100%', background: '#ef4444' }} />
          </div>
        </div>

        {/* Avg Response */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg. Response</span>
            <Clock size={18} style={{ color: '#2563eb' }} />
          </div>
          <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>4.2h</strong>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '700' }}>📉 -15%</span>
          <div style={{ height: '4px', background: '#dbeafe', borderRadius: '2px', overflow: 'hidden', marginTop: '4px' }}>
            <div style={{ width: '45%', height: '100%', background: '#3b82f6' }} />
          </div>
        </div>

        {/* Approval Rate */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Approval Rate</span>
            <ThumbsUp size={18} style={{ color: '#059669' }} />
          </div>
          <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>94.1%</strong>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '700' }}>📈 +2%</span>
          <div style={{ height: '4px', background: '#dcfce7', borderRadius: '2px', overflow: 'hidden', marginTop: '4px' }}>
            <div style={{ width: '94%', height: '100%', background: '#10b981' }} />
          </div>
        </div>
      </div>

      {/* Approvals Table Card */}
      <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        
        {/* Table Filter Top header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <strong style={{ fontSize: '15px', color: 'var(--text)' }}>Queue Items</strong>
            <span style={{ fontSize: '10px', fontWeight: '800', color: '#2563eb', background: '#eff6ff', padding: '3px 8px', borderRadius: '12px' }}>
              24 NEW
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="dash-search" style={{ margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px', width: '220px' }}>
              <Search size={16} />
              <input
                placeholder="Search approvals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '12px' }}
              />
            </div>
            <button
              style={{
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--line)',
                background: '#ffffff',
                color: 'var(--muted)',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              type="button"
            >
              <ListFilter size={16} />
            </button>
            <button
              style={{
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--line)',
                background: '#ffffff',
                color: 'var(--muted)',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              type="button"
            >
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Name</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Partner</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Category</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Submitted Date</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px 8px', width: '60px' }} />
              </tr>
            </thead>
            <tbody>
              {approvals
                .filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()) || a.partner.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((app) => {
                  const CategoryIcon = app.icon;
                  return (
                    <tr
                      key={app.id}
                      onClick={() => onViewDetails(app.id)}
                      style={{ borderBottom: '1px solid #f1f5f9', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      {/* Name */}
                      <td style={{ padding: '16px 8px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb' }}>
                            <CategoryIcon size={18} />
                          </div>
                          <div>
                            <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)' }}>{app.name}</strong>
                          </div>
                        </div>
                      </td>

                      {/* Partner */}
                      <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--muted)', fontWeight: '700' }}>
                        {app.partner}
                      </td>

                      {/* Category */}
                      <td style={{ padding: '16px 8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: '800', background: '#f1f5f9', color: 'var(--muted)', padding: '4px 8px', borderRadius: '4px' }}>
                          {app.category}
                        </span>
                      </td>

                      {/* Date */}
                      <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--muted)' }}>
                        {app.date}
                      </td>

                      {/* Status */}
                      <td style={{ padding: '16px 8px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: '800',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            background: app.status === 'Pending' ? '#fffbeb' : '#fef2f2',
                            color: app.status === 'Pending' ? '#d97706' : '#dc2626'
                          }}
                        >
                          ● {app.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); onViewDetails(app.id); }}
                          style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}
                          type="button"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Pagination Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
            Showing <strong>4</strong> of <strong>24</strong> results
          </span>

          <div style={{ display: 'flex', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} type="button">
              <ChevronLeft size={16} />
            </button>
            <button style={{ border: 'none', background: '#25108f', color: '#ffffff', padding: '8px 14px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }} type="button">
              1
            </button>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
              2
            </button>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
              3
            </button>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

// Simple Back Arrow SVG icon
function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}
