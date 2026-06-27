import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Download, 
  FolderCheck, 
  CreditCard, 
  AlertOctagon, 
  CheckCircle2, 
  XCircle, 
  MoreVertical,
  ChevronDown
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function ApprovalPipeline() {
  const { navigate, setSelectedRequestId } = useApp();
  const [activeSegment, setActiveSegment] = useState('All');

  // Request queue details mimicking Screen 5
  const requests = [
    { id: '#PR-8821', name: 'James Dalton', dept: 'Infrastructure Div.', initial: 'JD', category: 'Structural Steel', amount: '$42,500.00', status: 'PENDING REVIEW', statusColor: '#d97706', timeline: 'Requested 2h ago', barColor: '#f59e0b' },
    { id: '#PR-8819', name: 'Sarah Kovic', dept: 'Maintenance', initial: 'SK', category: 'HVAC Systems', amount: '$12,800.00', status: 'URGENT ACTION', statusColor: '#dc2626', timeline: 'Delayed 18h', barColor: '#ef4444' },
    { id: '#PR-8815', name: 'Markus Liao', dept: 'Logistics Ops.', initial: 'ML', category: 'Precision Tools', amount: '$5,240.00', status: 'PENDING REVIEW', statusColor: '#d97706', timeline: 'Requested 5h ago', barColor: '#3b82f6' },
    { id: '#PR-8799', name: 'Elena Vance', dept: 'Procurement Analyst', initial: 'EL', category: 'Office Electronics', amount: '$85,300.00', status: 'HIGH VALUE CHECK', statusColor: '#d97706', timeline: 'Under verification', barColor: '#111827' }
  ];

  const handleRowClick = (reqId) => {
    if (setSelectedRequestId) {
      setSelectedRequestId(reqId === '#PR-8821' ? 'MR-8821' : 'REQ-2024-0892');
    }
    navigate(ROUTES.materialDetails);
  };

  const handleAction = (e, reqId, action) => {
    e.stopPropagation();
    alert(`${action} on request ${reqId}`);
  };

  // Filter queue items based on Bulk / Urgent tabs
  const filteredRequests = requests.filter(item => {
    if (activeSegment === 'Urgent') return item.status === 'URGENT ACTION';
    if (activeSegment === 'Bulk') {
      const numericVal = parseFloat(item.amount.replace(/[^0-9.-]+/g, ''));
      return numericVal > 20000; // treat over $20k as bulk
    }
    return true; // 'All'
  });

  return (
    <AdminShell
      activeTab="Material Requests"
      brandText="Hozify Procurement"
      brandSubText="EXECUTIVE COMMAND"
      searchPlaceholder="Search requests..."
      customProfileName="Admin User"
      customProfileRole="Procurement lead"
    >
      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Approval Pipeline
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
              Monitor and process pending material procurement requests across all departments.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              style={{
                background: '#ffffff',
                color: 'var(--text)',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>
            <button
              style={{
                background: '#0b1329',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <Download size={14} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* 3 Analytics KPI cards row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          
          {/* Card 1 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                PENDING QUEUE
              </span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '800', marginTop: '6px' }}>
                24
              </strong>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#dc2626', marginTop: '6px' }}>
                ~12% vs last week
              </span>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#fffbeb', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FolderCheck size={22} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                HIGH VALUE TOTAL
              </span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '800', marginTop: '6px' }}>
                $142.8k
              </strong>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#059669', marginTop: '6px' }}>
                ~4.2% average ticket size
              </span>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CreditCard size={22} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                CRITICAL DELAY
              </span>
              <strong style={{ display: 'block', fontSize: '28px', color: '#dc2626', fontWeight: '800', marginTop: '6px' }}>
                08
              </strong>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#dc2626', marginTop: '6px' }}>
                Action required within 24 hours
              </span>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertOctagon size={22} />
            </div>
          </div>
        </div>

        {/* Detailed Requests Queue Panel */}
        <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Detailed Requests Queue
            </h2>

            {/* Segmented select filter tabs */}
            <div style={{ display: 'flex', background: '#f1f5f9', padding: '4px', borderRadius: '6px' }}>
              {['All', 'Urgent', 'Bulk'].map((seg) => (
                <button
                  key={seg}
                  onClick={() => setActiveSegment(seg)}
                  style={{
                    border: 'none',
                    background: activeSegment === seg ? '#ffffff' : 'transparent',
                    color: activeSegment === seg ? 'var(--text)' : 'var(--muted)',
                    padding: '6px 16px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '700',
                    boxShadow: activeSegment === seg ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                  type="button"
                >
                  {seg}
                </button>
              ))}
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>ID</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Requester</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Category</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Amount</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Timeline</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'right', width: '100px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req) => (
                  <tr 
                    key={req.id} 
                    onClick={() => handleRowClick(req.id)}
                    style={{ borderBottom: '1px solid #fcfaff', cursor: 'pointer', transition: 'background-color 0.15s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fcfaff'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: '#25108f' }}>
                      {req.id}
                    </td>
                    <td style={{ padding: '16px 8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f1ebfa', color: '#25108f', fontSize: '11px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {req.initial}
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{req.name}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{req.dept}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>
                      {req.category}
                    </td>
                    <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                      {req.amount}
                    </td>
                    <td style={{ padding: '16px 8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: req.statusColor }}>
                        {req.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 8px' }}>
                      <div style={{ display: 'inline-block' }}>
                        <span style={{ display: 'block', fontSize: '12px', color: '#565365' }}>{req.timeline}</span>
                        <div style={{ height: '3px', background: req.barColor, borderRadius: '1.5px', marginTop: '6px', width: '50px' }} />
                      </div>
                    </td>
                    <td style={{ padding: '16px 8px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button 
                          onClick={(e) => handleAction(e, req.id, 'Approve')}
                          style={{ border: 'none', background: 'transparent', color: '#07956f', cursor: 'pointer', padding: '4px' }}
                          title="Approve"
                          type="button"
                        >
                          <CheckCircle2 size={18} />
                        </button>
                        <button 
                          onClick={(e) => handleAction(e, req.id, 'Reject')}
                          style={{ border: 'none', background: 'transparent', color: '#d32929', cursor: 'pointer', padding: '4px' }}
                          title="Reject"
                          type="button"
                        >
                          <XCircle size={18} />
                        </button>
                        <button 
                          onClick={(e) => handleAction(e, req.id, 'Menu Open')}
                          style={{ border: 'none', background: 'transparent', color: '#7a7688', cursor: 'pointer', padding: '4px' }}
                          title="More"
                          type="button"
                        >
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: '#565365' }}>
              Showing 1-{filteredRequests.length} of 24 requests
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'transparent', border: '1px solid var(--line)', color: '#565365', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                Previous
              </button>
              <button style={{ background: 'transparent', border: '1px solid var(--line)', color: '#565365', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          
          {/* Approval Trend Line Chart */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0' }}>
              Approval Trend (7 Days)
            </h2>
            
            {/* SVG Line Chart Viewport */}
            <div style={{ height: '200px', width: '100%', position: 'relative', marginTop: '20px' }}>
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="trend-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#25108f" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#25108f" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal dotted grid lines */}
                <line x1="0" y1="37" x2="500" y2="37" stroke="#eee9f6" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#eee9f6" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="112" x2="500" y2="112" stroke="#eee9f6" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Chart Path Area */}
                <path d="M 0 120 C 80 110, 120 135, 166 75 C 212 15, 290 85, 332 45 C 374 5, 420 50, 500 20 L 500 150 L 0 150 Z" fill="url(#trend-grad)" />
                {/* Line Path */}
                <path d="M 0 120 C 80 110, 120 135, 166 75 C 212 15, 290 85, 332 45 C 374 5, 420 50, 500 20" fill="none" stroke="#25108f" strokeWidth="2.5" />
                
                {/* Data Points circles */}
                <circle cx="166" cy="75" r="4" fill="#25108f" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="332" cy="45" r="4" fill="#25108f" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="500" cy="20" r="4" fill="#25108f" stroke="#ffffff" strokeWidth="1.5" />
              </svg>
            </div>
            
            {/* Chart X Labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', color: '#7a7688', marginTop: '12px', padding: '0 8px' }}>
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>
          </div>

          {/* Department Share Donut Chart */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Department Share
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginTop: '20px' }}>
              
              {/* Donut SVG drawing */}
              <div style={{ width: '110px', height: '110px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 36 36">
                  {/* Gray background track */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#eee9f6" strokeWidth="4.2" />
                  
                  {/* Segment 1: Infrastructure 62% - starting at angle -90deg (top) */}
                  <circle 
                    cx="18" cy="18" r="15.915" 
                    fill="none" 
                    stroke="#25108f" 
                    strokeWidth="4.2" 
                    strokeDasharray="62 38" 
                    strokeDashoffset="25" 
                  />
                  
                  {/* Segment 2: Operations 28% */}
                  <circle 
                    cx="18" cy="18" r="15.915" 
                    fill="none" 
                    stroke="#0b1329" 
                    strokeWidth="4.2" 
                    strokeDasharray="28 72" 
                    strokeDashoffset="63" 
                  />
                  
                  {/* Segment 3: Other 10% */}
                  <circle 
                    cx="18" cy="18" r="15.915" 
                    fill="none" 
                    stroke="#d7e1ff" 
                    strokeWidth="4.2" 
                    strokeDasharray="10 90" 
                    strokeDashoffset="35" 
                  />
                </svg>
              </div>

              {/* Legend List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, minWidth: '120px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25108f' }} />
                    <span style={{ color: '#565365' }}>Infrastructure</span>
                  </div>
                  <strong style={{ color: 'var(--text)' }}>62%</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0b1329' }} />
                    <span style={{ color: '#565365' }}>Operations</span>
                  </div>
                  <strong style={{ color: 'var(--text)' }}>28%</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d7e1ff' }} />
                    <span style={{ color: '#565365' }}>Other</span>
                  </div>
                  <strong style={{ color: 'var(--text)' }}>10%</strong>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}
