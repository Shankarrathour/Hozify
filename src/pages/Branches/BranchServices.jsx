import { useToast } from '../../components/common/ToastNotification';
import React, { useState } from 'react';
import { Plus, Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, Star, Settings } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import AdminShell from '../../components/layouts/AdminShell';

const mockServices = [
  { id: 'SRV-001', name: 'Premium Cleaning', category: 'Maintenance', branch: 'Downtown Hub', price: '$120', rating: 4.8, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'SRV-002', name: 'Express Delivery', category: 'Logistics', branch: 'Riverview North', price: '$45', rating: 4.5, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'SRV-003', name: 'Equipment Repair', category: 'Technical', branch: 'Liberty Peak', price: '$250', rating: 3.9, status: 'INACTIVE', statusBg: '#fef3c7', statusColor: '#d97706' },
  { id: 'SRV-004', name: 'Security Audit', category: 'Consulting', branch: 'East Side Depot', price: '$500', rating: 4.9, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'SRV-005', name: 'Pest Control', category: 'Maintenance', branch: 'Pacific Shore Line', price: '$85', rating: 4.2, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669' },
];

export default function BranchServices() {
  const { addToast } = useToast();
  const { navigate } = useApp();
  const [search, setSearch] = useState('');

  const filteredServices = mockServices.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell
      activeTab="Branch Management"
      headerTitle="Branch Services"
      searchPlaceholder="Search services..."
    >
      <div className="branch-inventory-container">
        {/* Page Header */}
        <div className="partners-page-header">
          <div>
            <h1 className="page-title">Branch Services</h1>
            <p className="page-subtitle">Manage and monitor service offerings across all branches.</p>
          </div>
          <div className="partners-header-buttons">
            <button className="primary-action-btn font-bold" style={{ cursor: 'pointer',  height: '36px' }} onClick={() => addToast('Action performed successfully.', 'success')}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Service</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" style={{ cursor: 'pointer',  height: '36px' }} onClick={() => addToast('Action performed successfully.', 'success')}>
              <Download size={14} style={{ marginRight: '4px' }} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Top Section KPIs Row */}
        <style>{`
          .branch-kpi-grid {
            display: grid;
            gap: 16px;
            margin-bottom: 24px;
          }
          @media (min-width: 1024px) { .branch-kpi-grid { grid-template-columns: repeat(6, 1fr); } }
          @media (min-width: 768px) and (max-width: 1023px) { .branch-kpi-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 767px) { .branch-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
          .branch-kpi-card {
            padding: 16px;
            background: #fff;
            border: 1px solid var(--line);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 105px;
          }
          .branch-kpi-card .truncate-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
          }
        `}</style>
        <section className="branch-kpi-grid">
          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Services</span>
              <span>📦</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>458</strong>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+12 new this week</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Active</span>
              <span>✅</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>412</strong>
            <div style={{ height: '4px', background: '#10b981', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Inactive</span>
              <span>⏸️</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>46</strong>
            <div style={{ height: '4px', background: '#f59e0b', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Categories</span>
              <span>📑</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>18</strong>
            <div style={{ height: '4px', background: '#3b82f6', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Top Category</span>
              <span>⭐</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#4f46e5', margin: '6px 0', fontWeight: '800' }}>Maintenance</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: 'var(--muted)' }}>42% of revenue</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Avg Rating</span>
              <span>🌟</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#eab308', margin: '6px 0', fontWeight: '800' }}>4.6 / 5.0</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+0.2 from last month</span>
          </div>
        </section>

        {/* Main Table Panel */}
        <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
              Service Catalog
            </h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
                <input
                  placeholder="Search services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ fontSize: '12px', paddingLeft: '8px' }}
                />
              </div>
              <button className="secondary-action-btn" style={{ cursor: 'pointer',  height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => addToast('Action performed successfully.', 'success')}>
                <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => addToast('More Options menu opened.', 'info')} type="button"><SlidersHorizontal size={14}  /></button>
              </button>
              <button className="secondary-action-btn" style={{ cursor: 'pointer',  height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => addToast('Action performed successfully.', 'success')}>
                <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => addToast('More Options menu opened.', 'info')} type="button"><MoreVertical size={14}  /></button>
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <table className="partner-table">
              <thead>
                <tr>
                  <th>SERVICE ID</th>
                  <th>SERVICE NAME</th>
                  <th>CATEGORY</th>
                  <th>PRIMARY BRANCH</th>
                  <th>BASE PRICE</th>
                  <th>RATING</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <span 
                        style={{ color: '#4f46e5', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => navigate('/services')}
                      >
                        {row.id}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.name}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.category}</td>
                    <td style={{ color: 'var(--text)' }}>{row.branch}</td>
                    <td style={{ color: 'var(--text)', fontWeight: '800' }}>{row.price}</td>
                    <td>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700', fontSize: '12px' }}>
                        <Star size={12} fill="#eab308" stroke="#eab308" />
                        {row.rating}
                      </span>
                    </td>
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
                    <td>
                      <button style={{ cursor: 'pointer',  border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} onClick={() => addToast('Action performed successfully.', 'success')}>
                        <Settings size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredServices.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                No services found matching your criteria.
              </div>
            )}
          </div>

          <div className="directory-table-footer" style={{ marginTop: '16px' }}>
            <span className="footer-results-text">Showing {filteredServices.length} of 458 services</span>
            <div className="pagination-wrap">
              <button className="pag-nav-btn" type="button" disabled style={{ cursor: 'pointer' }} onClick={() => addToast('Action performed successfully.', 'success')}>
                <ChevronLeft size={16} />
              </button>
              <button className="pag-num-btn active" type="button" style={{ cursor: 'pointer' }} onClick={() => addToast('Action performed successfully.', 'success')}>1</button>
              <button className="pag-num-btn" type="button" style={{ cursor: 'pointer' }} onClick={() => addToast('Action performed successfully.', 'success')}>2</button>
              <button className="pag-num-btn" type="button" style={{ cursor: 'pointer' }} onClick={() => addToast('Action performed successfully.', 'success')}>3</button>
              <button className="pag-nav-btn" type="button" style={{ cursor: 'pointer' }} onClick={() => addToast('Action performed successfully.', 'success')}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
