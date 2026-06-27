import React, { useState } from 'react';
import {
  SlidersHorizontal,
  FolderTree,
  CheckCircle,
  Banknote,
  Percent,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const initialCategories = [
  { id: 'CAT-2024-001', name: 'Facility Maintenance', total: 12, active: 8, revenue: '$42,500.00', status: 'VERIFIED' },
  { id: 'CAT-2024-002', name: 'HVAC Systems', total: 8, active: 8, revenue: '$31,200.00', status: 'VERIFIED' },
  { id: 'CAT-2024-003', name: 'Emergency Response', total: 15, active: 4, revenue: '$12,400.00', status: 'PENDING' },
  { id: 'CAT-2024-004', name: 'Groundskeeping', total: 22, active: 18, revenue: '$18,900.00', status: 'VERIFIED' },
  { id: 'CAT-2024-005', name: 'Compliance Audits', total: 5, active: 0, revenue: '$0.00', status: 'SUSPENDED' },
  { id: 'CAT-2024-006', name: 'IT Infrastructure', total: 11, active: 11, revenue: '$23,400.00', status: 'VERIFIED' }
];

export default function ServiceCategories({ onAddCategory }) {
  const [categories, setCategories] = useState(initialCategories);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Title & Actions Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Categories</h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>Manage and organize your service offerings across the enterprise.</p>
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
            onClick={onAddCategory}
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
            <span>+ Add Category</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {/* TOTAL CATEGORIES */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Categories</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>24</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb' }}>
              <FolderTree size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginTop: '12px', display: 'block' }}>
            +2 FROM LAST MONTH
          </span>
        </div>

        {/* ACTIVE SERVICES */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Services</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>142</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#ecfdf5', color: '#059669' }}>
              <CheckCircle size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginTop: '12px', display: 'block' }}>
            +12% EFFICIENCY UP
          </span>
        </div>

        {/* TOTAL REVENUE */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Revenue</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>$128.4k</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fffbeb', color: '#d97706' }}>
              <Banknote size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginTop: '12px', display: 'block' }}>
            +8.4% VS PREV PERIOD
          </span>
        </div>

        {/* AVG UTILIZATION */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Utilization</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>94.2%</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fef2f2', color: '#dc2626' }}>
              <Percent size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#dc2626', fontWeight: '800', marginTop: '12px', display: 'block' }}>
            -1.2% PEAK LOAD DOWN
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <div style={{ overflowX: 'auto' }}>
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Category ID</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Name</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Services</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Services</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Revenue (MTD)</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px 8px', width: '110px' }} />
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                    {cat.id}
                  </td>
                  <td style={{ padding: '16px 8px', fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>
                    {cat.name}
                  </td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>
                    {String(cat.total).padStart(2, '0')}
                  </td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>
                    {cat.active}
                  </td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                    {cat.revenue}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background:
                          cat.status === 'VERIFIED'
                            ? '#ecfdf5'
                            : cat.status === 'PENDING'
                            ? '#fffbeb'
                            : '#fef2f2',
                        color:
                          cat.status === 'VERIFIED'
                            ? '#059669'
                            : cat.status === 'PENDING'
                            ? '#d97706'
                            : '#dc2626'
                      }}
                    >
                      {cat.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="View">
                        <Eye size={16} />
                      </button>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Edit">
                        <Edit size={16} />
                      </button>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>

        {/* Pagination Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
            Showing <strong>1 to 6</strong> of <strong>24</strong> entries
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
            <span style={{ background: '#ffffff', color: 'var(--muted)', padding: '8px 8px', fontSize: '13px', display: 'flex', alignItems: 'flex-end' }}>...</span>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
              4
            </button>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Insights & Quick Actions Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', mdGridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        
        {/* Insights Panel */}
        <div className="panel" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
            <Sparkles size={16} style={{ color: '#1e40af' }} />
            <h3 style={{ fontSize: '11px', fontWeight: '800', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Category Performance Insights</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', fontWeight: '700' }}>
                <span style={{ color: '#1e40af' }}>Most Profitable</span>
                <span style={{ color: '#0f172a' }}>Facility Maintenance</span>
              </div>
              <div style={{ height: '6px', background: '#dbeafe', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', fontWeight: '700' }}>
                <span style={{ color: '#1e40af' }}>Highest Growth</span>
                <span style={{ color: '#0f172a' }}>HVAC Systems</span>
              </div>
              <div style={{ height: '6px', background: '#dbeafe', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '55%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="panel" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
          {/* Waterman diagonal graph SVG */}
          <svg style={{ position: 'absolute', right: '10px', bottom: '10px', opacity: 0.15, pointerEvents: 'none' }} width="120" height="80" viewBox="0 0 120 80">
            <path d="M 0 80 L 40 40 L 70 50 L 120 10 L 120 80 Z" fill="#25108f" />
            <path d="M 0 80 L 40 40 L 70 50 L 120 10" fill="none" stroke="#25108f" strokeWidth="4" />
          </svg>

          <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', margin: 0 }}>QUICK ACTIONS</h3>
          <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '6px', marginBottom: '16px', lineHeight: '1.4', maxWidth: '180px' }}>
            Need to perform bulk operations or export this view?
          </p>

          <div style={{ display: 'flex', gap: '8px', zIndex: 1, position: 'relative' }}>
            <button
              style={{
                height: '34px',
                padding: '0 12px',
                background: '#0f172a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
              type="button"
            >
              EXPORT CSV
            </button>
            <button
              style={{
                height: '34px',
                padding: '0 12px',
                background: '#ffffff',
                color: '#0f172a',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
              type="button"
            >
              PRINT PDF
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
