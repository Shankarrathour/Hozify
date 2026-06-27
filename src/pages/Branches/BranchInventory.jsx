import React, { useState } from 'react';
import { Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, Star, Map, ShieldCheck } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

const branchData = [
  { id: 'BR-8821', name: 'Downtown Hub', business: 'Global Logistics Inc.', city: 'Chicago', employees: 42, revenue: '$124,500', rating: 4.8, status: 'APPROVED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'BR-4310', name: 'Pacific Shore Line', business: 'Maritime Solutions', city: 'Seattle', employees: 18, revenue: '$62,300', rating: 3.2, status: 'PENDING', statusBg: '#fef3c7', statusColor: '#d97706' },
  { id: 'BR-0192', name: 'East Side Depot', business: 'Urban Cargo LLC', city: 'Miami', employees: 29, revenue: '$48,000', rating: 2.1, status: 'SUSPENDED', statusBg: '#fee2e2', statusColor: '#ef4444' },
  { id: 'BR-1102', name: 'Riverview North', business: 'Flow Systems', city: 'Portland', employees: 54, revenue: '$198,200', rating: 4.5, status: 'APPROVED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'BR-9905', name: 'Liberty Peak', business: 'Summit Heights', city: 'Denver', employees: 31, revenue: '$88,400', rating: 4.7, status: 'APPROVED', statusBg: '#ecfdf5', statusColor: '#059669' }
];

export default function BranchInventory() {
  const { navigate, setCurrentBranchId } = useApp();
  const [search, setSearch] = useState('');

  const handleRowClick = (branchId) => {
    setCurrentBranchId(branchId);
    navigate(ROUTES.branchProfile);
  };

  const filteredBranches = branchData.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.id.toLowerCase().includes(search.toLowerCase()) ||
    b.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="branch-inventory-container">
      {/* Page Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Branch Inventory</h1>
          <p className="page-subtitle">Track, analyze, and manage operational branch outlets.</p>
        </div>
        <div className="partners-header-buttons">

          
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '4px' }} />
            <span>Export</span>
          </button>

          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <span>Bulk Actions</span>
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
        
        {/* Total Branches */}
        <div className="branch-kpi-card">
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Total Branches</span>
            <span>🏢</span>
          </span>
          <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>1,240</strong>
          <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+4.2% vs last month</span>
        </div>

        {/* Active */}
        <div className="branch-kpi-card">
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Active</span>
            <span>✅</span>
          </span>
          <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>980</strong>
          <div style={{ height: '4px', background: '#10b981', borderRadius: '2px', marginTop: '4px' }} />
        </div>

        {/* Pending */}
        <div className="branch-kpi-card">
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Pending</span>
            <span>⏳</span>
          </span>
          <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>150</strong>
          <div style={{ height: '4px', background: '#f59e0b', borderRadius: '2px', marginTop: '4px' }} />
        </div>

        {/* Suspended */}
        <div className="branch-kpi-card">
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Suspended</span>
            <span>🚨</span>
          </span>
          <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>110</strong>
          <div style={{ height: '4px', background: '#ef4444', borderRadius: '2px', marginTop: '4px' }} />
        </div>

        {/* Top Performance */}
        <div className="branch-kpi-card">
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Top Perf.</span>
            <span>📈</span>
          </span>
          <strong className="truncate-text" style={{ fontSize: '15px', color: '#4f46e5', margin: '6px 0', fontWeight: '800' }}>Austin - North</strong>
          <span className="truncate-text" style={{ fontSize: '11px', color: 'var(--muted)' }}>9.8 Satisfaction Rate</span>
        </div>

        {/* Low Performance */}
        <div className="branch-kpi-card">
          <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Low Perf.</span>
            <span>📉</span>
          </span>
          <strong className="truncate-text" style={{ fontSize: '15px', color: '#ef4444', margin: '6px 0', fontWeight: '800' }}>Miami - Central</strong>
          <span className="truncate-text" style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>12% Growth Drop</span>
        </div>

      </section>

      {/* Main Table Panel */}
      <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
            Branch Inventory
          </h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
              <input
                placeholder="Search branches by ID, name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: '12px', paddingLeft: '8px' }}
                aria-label="Search branches"
              />
            </div>
            <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Filters">
              <SlidersHorizontal size={14} />
            </button>
            <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="More Options">
              <MoreVertical size={14} />
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="partner-table">
            <thead>
              <tr>
                <th>BRANCH ID</th>
                <th>BRANCH NAME</th>
                <th>BUSINESS NAME</th>
                <th>CITY</th>
                <th>EMPLOYEES</th>
                <th>REVENUE (MTD)</th>
                <th>RATING</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredBranches.map((row) => (
                <tr key={row.id} className="partner-row-clickable" onClick={() => handleRowClick(row.id)}>
                  <td>
                    <span style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'underline' }}>{row.id}</span>
                  </td>
                  <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.name}</td>
                  <td style={{ color: 'var(--muted)' }}>{row.business}</td>
                  <td style={{ color: 'var(--text)' }}>{row.city}</td>
                  <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.employees}</td>
                  <td style={{ color: 'var(--text)', fontWeight: '800' }}>{row.revenue}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="directory-table-footer" style={{ marginTop: '16px' }}>
          <span className="footer-results-text">Showing 5 of 1,240 branches</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <span style={{ color: 'var(--muted)', margin: '0 4px' }}>...</span>
            <button className="pag-num-btn" type="button">248</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Section (Service Area Map & Operational Health) */}
      <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
        
        {/* Service Area Distribution */}
        <div className="panel" style={{ flex: 1.8, padding: '0', position: 'relative', overflow: 'hidden', minHeight: '220px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {/* Simple Map Background SVG */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ fill: 'none', stroke: '#cbd5e1', strokeWidth: '1.5' }}>
              <path d="M 0 50 Q 100 80, 200 40 T 400 60" />
              <path d="M 0 120 Q 150 150, 300 110 T 400 130" />
              <line x1="100" y1="0" x2="100" y2="200" />
              <line x1="250" y1="0" x2="250" y2="200" />
              <circle cx="150" cy="80" r="50" fill="#4f46e5" fillOpacity="0.05" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="150" cy="80" r="4" fill="#4f46e5" />
            </svg>
            
            <button
              onClick={() => navigate(ROUTES.serviceAreas)}
              className="primary-action-btn font-bold"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', zIndex: 10 }}
              type="button"
            >
              <Map size={16} />
              <span>Expand GIS Interface</span>
            </button>
          </div>

          <div style={{ position: 'relative', zIndex: 2, padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))', color: '#fff' }}>
            <strong style={{ display: 'block', fontSize: '14px' }}>Service Area Distribution</strong>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Real-time visualization of branch logistics and operational boundaries across North America.</span>
          </div>
        </div>

        {/* Operational Health (Dark Card) */}
        <div className="panel" style={{ flex: 1, padding: '24px', backgroundColor: '#0f172a', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px' }}>
              Operational Health
            </h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: '0 0 16px', lineHeight: '1.4' }}>
              Your current system load is within optimal parameters. Three new branch applications are awaiting final document verification.
            </p>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px', fontWeight: '700' }}>
                <span>COMPLIANCE SCORE</span>
                <strong>94%</strong>
              </div>
              <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '94%', height: '100%', background: '#38bdf8' }} />
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate(ROUTES.branchCompliance)}
            className="secondary-action-btn"
            style={{ width: '100%', height: '36px', border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: '#fff', fontSize: '12px', fontWeight: '700', justifyContent: 'center', cursor: 'pointer', marginTop: '16px' }}
            type="button"
          >
            View Compliance Hub
          </button>
        </div>

      </div>

    </div>
  );
}
