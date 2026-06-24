import React, { useState } from 'react';
import { Plus, Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, Map, Globe, ShieldCheck } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import AdminShell from '../../components/layouts/AdminShell';

const mockRegions = [
  { id: 'REG-501', regionName: 'Central Metro', zones: 12, households: '142,500', efficiency: '98%', status: 'COVERED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'REG-502', regionName: 'North Side', zones: 8, households: '65,200', efficiency: '92%', status: 'COVERED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'REG-503', regionName: 'West Suburbs', zones: 4, households: '32,100', efficiency: '85%', status: 'PARTIAL', statusBg: '#eff6ff', statusColor: '#3b82f6' },
  { id: 'REG-504', regionName: 'East Industrial', zones: 3, households: '12,500', efficiency: '60%', status: 'UNCOVERED', statusBg: '#fee2e2', statusColor: '#ef4444' },
  { id: 'REG-505', regionName: 'South Valley', zones: 0, households: '45,000', efficiency: '0%', status: 'UNCOVERED', statusBg: '#fee2e2', statusColor: '#ef4444' },
];

export default function CoverageMapping() {
  const { navigate } = useApp();
  const [search, setSearch] = useState('');

  const filteredRegions = mockRegions.filter(r =>
    r.regionName.toLowerCase().includes(search.toLowerCase()) ||
    r.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell
      activeTab="Branch Management"
      headerTitle="Coverage Mapping"
      searchPlaceholder="Search regions..."
    >
      <div className="branch-inventory-container">
        {/* Page Header */}
        <div className="partners-page-header">
          <div>
            <h1 className="page-title">Coverage Mapping</h1>
            <p className="page-subtitle">Analyze geographic coverage, zone efficiency, and regional distribution.</p>
          </div>
          <div className="partners-header-buttons">
            <button className="primary-action-btn font-bold" style={{ height: '36px' }}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Region</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
              <Download size={14} style={{ marginRight: '4px' }} />
              <span>Export Map</span>
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
              <span>Total Zones</span>
              <span>🗺️</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>145</strong>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+5 this quarter</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Covered Regions</span>
              <span>🟢</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>85%</strong>
            <div style={{ height: '4px', background: '#10b981', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Uncovered Regions</span>
              <span>🔴</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>15%</strong>
            <div style={{ height: '4px', background: '#ef4444', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Coverage Efficiency</span>
              <span>⚡</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>94%</strong>
            <div style={{ height: '4px', background: '#3b82f6', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>High Density</span>
              <span>🏙️</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#4f46e5', margin: '6px 0', fontWeight: '800' }}>Central Metro</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: 'var(--muted)' }}>142k Households</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Expansion Target</span>
              <span>🎯</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#d97706', margin: '6px 0', fontWeight: '800' }}>South Valley</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: '#d97706', fontWeight: '700' }}>High priority</span>
          </div>
        </section>

        {/* Main Table Panel */}
        <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
              Region Mapping Table
            </h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
                <input
                  placeholder="Search region..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ fontSize: '12px', paddingLeft: '8px' }}
                />
              </div>
              <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidersHorizontal size={14} />
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <table className="partner-table">
              <thead>
                <tr>
                  <th>REGION ID</th>
                  <th>REGION NAME</th>
                  <th>ACTIVE ZONES</th>
                  <th>HOUSEHOLDS</th>
                  <th>EFFICIENCY</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegions.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <span style={{ color: '#4f46e5', fontWeight: '700' }}>{row.id}</span>
                    </td>
                    <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.regionName}</td>
                    <td style={{ color: 'var(--text)' }}>{row.zones} zones</td>
                    <td style={{ color: 'var(--muted)' }}>{row.households}</td>
                    <td style={{ color: 'var(--text)', fontWeight: '800' }}>{row.efficiency}</td>
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
                      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}>
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredRegions.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                No regions found matching your criteria.
              </div>
            )}
          </div>

          <div className="directory-table-footer" style={{ marginTop: '16px' }}>
            <span className="footer-results-text">Showing {filteredRegions.length} of 45 regions</span>
            <div className="pagination-wrap">
              <button className="pag-nav-btn" type="button" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="pag-num-btn active" type="button">1</button>
              <button className="pag-num-btn" type="button">2</button>
              <button className="pag-nav-btn" type="button">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
