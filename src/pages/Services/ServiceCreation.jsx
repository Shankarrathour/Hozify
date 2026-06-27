import React, { useState } from 'react';
import {
  Plus,
  Layers,
  Clock,
  CheckCircle,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';

const initialDrafts = [
  { id: 'SVC-REQ-001', name: 'Premium HVAC Maintenance', category: 'HVAC Systems', createdBy: 'Alice Freeman', date: '2023-11-20', status: 'DRAFT' },
  { id: 'SVC-REQ-002', name: 'Enterprise IT Support', category: 'IT Infrastructure', createdBy: 'Bob Smith', date: '2023-11-21', status: 'REVIEW' },
  { id: 'SVC-REQ-003', name: '24/7 Plumbing Emergency', category: 'Emergency Response', createdBy: 'Charlie Davis', date: '2023-11-22', status: 'DRAFT' }
];

export default function ServiceCreation() {
  const [drafts] = useState(initialDrafts);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Title & Actions Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Creation</h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>Draft, review, and finalize new service offerings before activation.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#25108f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            <Plus size={16} />
            <span>Create New Service</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Draft Services</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>14</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb' }}>
              <Layers size={20} />
            </div>
          </div>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>In Review</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>8</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fffbeb', color: '#d97706' }}>
              <Clock size={20} />
            </div>
          </div>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ready for Activation</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>3</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#ecfdf5', color: '#059669' }}>
              <CheckCircle size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <div style={{ overflowX: 'auto' }}>
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service ID</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Name</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Category</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Created By</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px 8px', width: '110px' }} />
              </tr>
            </thead>
            <tbody>
              {drafts.map((draft) => (
                <tr key={draft.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>{draft.id}</td>
                  <td style={{ padding: '16px 8px', fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>{draft.name}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{draft.category}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{draft.createdBy}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{draft.date}</td>
                  <td style={{ padding: '16px 8px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background: draft.status === 'REVIEW' ? '#fffbeb' : '#f1f5f9',
                        color: draft.status === 'REVIEW' ? '#d97706' : '#64748b'
                      }}
                    >
                      {draft.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="View"><Eye size={16} /></button>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Edit"><Edit size={16} /></button>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Delete"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </div>
    </div>
  );
}
