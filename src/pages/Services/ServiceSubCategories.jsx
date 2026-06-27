import React, { useState } from 'react';
import { Plus, Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, Layers, LayoutList, Folder, ShieldCheck, Search, ArrowRight } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

const MOCK_SUBCATEGORIES = [
  { id: 'SCAT-01', name: 'Home Cleaning', parent: 'Cleaning Services', serviceCount: 15, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-15', icon: '🧹' },
  { id: 'SCAT-02', name: 'Plumbing Repair', parent: 'Maintenance', serviceCount: 8, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-16', icon: '🔧' },
  { id: 'SCAT-03', name: 'Electrical Works', parent: 'Maintenance', serviceCount: 12, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-17', icon: '⚡' },
  { id: 'SCAT-04', name: 'Appliance Repair', parent: 'Repairs', serviceCount: 5, status: 'INACTIVE', statusBg: '#fef3c7', statusColor: '#d97706', date: '2023-10-18', icon: '🧊' },
  { id: 'SCAT-05', name: 'Car Wash', parent: 'Automotive', serviceCount: 3, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-19', icon: '🚗' },
];

export default function ServiceSubCategories({ onAddSubCategory }) {
  const [search, setSearch] = useState('');

  const filteredSubCategories = MOCK_SUBCATEGORIES.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.parent.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="service-list-container" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .premium-kpi-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (min-width: 1024px) { .premium-kpi-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 768px) and (max-width: 1023px) { .premium-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 767px) { .premium-kpi-grid { grid-template-columns: repeat(1, 1fr); } }
        
        .premium-kpi-card {
          padding: 20px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 110px;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .premium-kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          border-color: #cbd5e1;
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }
        .premium-table-row {
          transition: background-color 0.15s ease;
        }
        .premium-table-row:hover {
          background-color: #f8fafc;
        }
      `}</style>

      {/* Header section */}
      <div className="partners-page-header" style={{ marginBottom: '24px', alignItems: 'center' }}>
        <div>
          <h2 className="page-title" style={{ fontSize: '20px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={20} color="#4f46e5" /> Sub Categories
          </h2>
          <p className="page-subtitle" style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px' }}>Manage specialized service groupings and hierarchies.</p>
        </div>
        <div className="partners-header-buttons">
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px', borderRadius: '8px' }}>
            <Download size={14} style={{ marginRight: '6px' }} />
            <span>Export CSV</span>
          </button>
          <button className="primary-action-btn font-bold" type="button" onClick={onAddSubCategory} style={{ height: '36px', borderRadius: '8px', backgroundColor: '#0f172a' }}>
            <Plus size={14} style={{ marginRight: '6px' }} />
            <span>Add Sub Category</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <section className="premium-kpi-grid">
        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Sub Categories</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>48</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#f1f5f9' }}>
              <Layers size={16} color="#475569" />
            </div>
          </div>
        </div>

        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>42</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#ecfdf5' }}>
              <ShieldCheck size={16} color="#10b981" />
            </div>
          </div>
        </div>

        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Inactive</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>6</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#fef3c7' }}>
              <LayoutList size={16} color="#d97706" />
            </div>
          </div>
        </div>

        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Parent Categories</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>12</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#eff6ff' }}>
              <Folder size={16} color="#3b82f6" />
            </div>
          </div>
        </div>
      </section>

      {/* Table Panel */}
      <section className="panel" style={{ padding: '0', overflow: 'hidden', borderRadius: '12px' }}>
        <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>Sub Categories List</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className="dash-search" style={{ width: '260px', margin: 0, height: '36px', borderRadius: '8px' }}>
              <Search size={14} color="#94a3b8" style={{ marginLeft: '12px' }} />
              <input
                placeholder="Search sub categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: '13px', paddingLeft: '8px', border: 'none', background: 'transparent', outline: 'none', width: '100%' }}
              />
            </div>
            <button className="secondary-action-btn" style={{ height: '36px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '8px' }}>
              <SlidersHorizontal size={14} />
              <span style={{ fontSize: '12px', fontWeight: '700' }}>Filters</span>
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: '#f8fafc' }}>
              <tr>
                <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>SUB CATEGORY INFO</th>
                <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>PARENT CATEGORY</th>
                <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>SERVICES</th>
                <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>CREATED DATE</th>
                <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>STATUS</th>
                <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubCategories.map((row) => (
                <tr key={row.id} className="premium-table-row" style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                        {row.icon}
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)' }}>{row.name}</strong>
                        <span style={{ display: 'block', fontSize: '11px', color: '#64748b', marginTop: '2px' }}>{row.id}</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Folder size={14} color="#94a3b8" />
                      <span style={{ color: 'var(--text)', fontSize: '13px', fontWeight: '600' }}>{row.parent}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#334155', fontWeight: '700', fontSize: '12px', padding: '4px 10px', borderRadius: '12px' }}>
                      {row.serviceCount} Services
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>
                    {row.date}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px', background: row.statusBg, color: row.statusColor }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: row.statusColor }}></span>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#94a3b8', padding: '6px', borderRadius: '4px', transition: 'background 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                      <ArrowRight size={16} />
                    </button>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#94a3b8', padding: '6px', borderRadius: '4px', marginLeft: '4px', transition: 'background 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>

          {filteredSubCategories.length === 0 && (
            <div style={{ padding: '60px', textAlign: 'center' }}>
              <Layers size={40} color="#cbd5e1" style={{ margin: '0 auto 16px auto', display: 'block' }} />
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--text)' }}>No sub categories found</strong>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>Try adjusting your search criteria or add a new sub category.</p>
            </div>
          )}
        </div>

        <div className="directory-table-footer" style={{ padding: '16px 24px', background: '#fff', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>Showing {filteredSubCategories.length} of 48 sub categories</span>
          <div className="pagination-wrap" style={{ display: 'flex', gap: '4px' }}>
            <button type="button" disabled style={{ padding: '6px 8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', color: '#cbd5e1', cursor: 'not-allowed' }}>
              <ChevronLeft size={16} />
            </button>
            <button type="button" style={{ padding: '6px 12px', border: '1px solid #4f46e5', background: '#4f46e5', color: '#fff', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>1</button>
            <button type="button" style={{ padding: '6px 12px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f8fafc'} onMouseOut={(e) => e.currentTarget.style.background = '#fff'}>2</button>
            <button type="button" style={{ padding: '6px 8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', color: 'var(--text)', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f8fafc'} onMouseOut={(e) => e.currentTarget.style.background = '#fff'}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
