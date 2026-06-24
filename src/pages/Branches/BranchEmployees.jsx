import React, { useState } from 'react';
import { Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, UserCircle, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import AdminShell from '../../components/layouts/AdminShell';

const mockEmployees = [
  { id: 'EMP-1021', name: 'Sarah Jenkins', role: 'Branch Manager', department: 'Management', branch: 'Downtown Hub', status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', joinDate: '2022-03-15' },
  { id: 'EMP-1045', name: 'Michael Chen', role: 'Field Technician', department: 'Operations', branch: 'Riverview North', status: 'ON LEAVE', statusBg: '#fef3c7', statusColor: '#d97706', joinDate: '2023-01-10' },
  { id: 'EMP-1088', name: 'Amanda Torres', role: 'Support Specialist', department: 'Customer Service', branch: 'Liberty Peak', status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', joinDate: '2023-06-22' },
  { id: 'EMP-1102', name: 'David Smith', role: 'Security Officer', department: 'Security', branch: 'East Side Depot', status: 'INACTIVE', statusBg: '#fee2e2', statusColor: '#ef4444', joinDate: '2021-11-05' },
  { id: 'EMP-1150', name: 'Jessica Wong', role: 'Logistics Coordinator', department: 'Logistics', branch: 'Pacific Shore Line', status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', joinDate: '2023-09-01' },
];

export default function BranchEmployees() {
  const { navigate } = useApp();
  const [search, setSearch] = useState('');

  const filteredEmployees = mockEmployees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase()) ||
    e.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell
      activeTab="Branch Management"
      headerTitle="Branch Employees"
      searchPlaceholder="Search employees..."
    >
      <div className="branch-inventory-container">
        {/* Page Header */}
        <div className="partners-page-header">
          <div>
            <h1 className="page-title">Branch Employees</h1>
            <p className="page-subtitle">Track workforce distribution, roles, and status across all branches.</p>
          </div>
          <div className="partners-header-buttons">
            <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
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
              <span>Total Employees</span>
              <span>👥</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>2,450</strong>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+8% this year</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Active</span>
              <span>🟢</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>2,280</strong>
            <div style={{ height: '4px', background: '#10b981', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>On Leave</span>
              <span>🌴</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>124</strong>
            <div style={{ height: '4px', background: '#f59e0b', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>New Joiners</span>
              <span>👋</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>46</strong>
            <div style={{ height: '4px', background: '#3b82f6', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Top Dept</span>
              <span>🏢</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#4f46e5', margin: '6px 0', fontWeight: '800' }}>Operations</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: 'var(--muted)' }}>1,120 Employees</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Turnover Rate</span>
              <span>🔄</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#ef4444', margin: '6px 0', fontWeight: '800' }}>3.2%</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>-0.5% vs last year</span>
          </div>
        </section>

        {/* Main Table Panel */}
        <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
              Employee Directory
            </h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
                <input
                  placeholder="Search name, role, dept..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ fontSize: '12px', paddingLeft: '8px' }}
                />
              </div>
              <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidersHorizontal size={14} />
              </button>
              <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MoreVertical size={14} />
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <table className="partner-table">
              <thead>
                <tr>
                  <th>EMPLOYEE</th>
                  <th>ROLE</th>
                  <th>DEPARTMENT</th>
                  <th>PRIMARY BRANCH</th>
                  <th>JOIN DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {row.name.charAt(0)}
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.name}</strong>
                          <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.id}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text)', fontWeight: '600' }}>{row.role}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.department}</td>
                    <td style={{ color: 'var(--text)' }}>{row.branch}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.joinDate}</td>
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

            {filteredEmployees.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                No employees found matching your criteria.
              </div>
            )}
          </div>

          <div className="directory-table-footer" style={{ marginTop: '16px' }}>
            <span className="footer-results-text">Showing {filteredEmployees.length} of 2,450 employees</span>
            <div className="pagination-wrap">
              <button className="pag-nav-btn" type="button" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="pag-num-btn active" type="button">1</button>
              <button className="pag-num-btn" type="button">2</button>
              <button className="pag-num-btn" type="button">3</button>
              <span style={{ margin: '0 4px', color: 'var(--muted)' }}>...</span>
              <button className="pag-num-btn" type="button">49</button>
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
