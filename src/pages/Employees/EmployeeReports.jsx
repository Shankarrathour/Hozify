import React, { useState } from 'react';
import { Download, FileText, Star, MoreVertical, SlidersHorizontal, Search, ChevronLeft, ChevronRight, ShieldAlert } from 'lucide-react';

const revenueLeaders = [
  { name: 'Jane Doe', role: 'Lead Consultant', revenue: '$12.4k', badge: 'Top 1%', initials: 'JD', bg: '#e0e7ff', color: '#4f46e5' },
  { name: 'Marcus Smith', role: 'Project Manager', revenue: '$9.2k', badge: 'Top 5%', initials: 'MS', bg: '#f1ebf8', color: 'var(--primary)' },
  { name: 'Aria Lee', role: 'Senior Analyst', revenue: '$8.7k', badge: 'Top 8%', initials: 'AL', bg: '#ecfdf5', color: '#10b981' },
  { name: 'Tom King', role: 'Tech Lead', revenue: '$7.9k', badge: 'Top 12%', initials: 'TK', bg: '#e0f2fe', color: '#0284c7' }
];

const efficiencyMatrix = [
  { name: 'Elena Novak', role: 'Business Analyst', productivity: 92, revenue: '$8,450', csat: '4.9/5', status: 'High Performer', statusBg: '#ecfdf5', statusColor: '#059669', initials: 'EN', bg: '#e0e7ff', color: '#4f46e5' },
  { name: 'Kaelen Miller', role: 'Software Engineer', productivity: 81, revenue: '$6,120', csat: '4.6/5', status: 'Steady', statusBg: '#eff6ff', statusColor: '#2563eb', initials: 'KM', bg: '#f1ebf8', color: 'var(--primary)' },
  { name: 'Sarah Chen', role: 'Product Designer', productivity: 68, revenue: '$4,300', csat: '4.2/5', status: 'Review Required', statusBg: '#fffbeb', statusColor: '#d97706', initials: 'SC', bg: '#fee2e2', color: '#ef4444' },
  { name: 'Robert Bell', role: 'Support Lead', productivity: 95, revenue: '$10,200', csat: '5.0/5', status: 'High Performer', statusBg: '#ecfdf5', statusColor: '#059669', initials: 'RB', bg: '#e0f2fe', color: '#0284c7' }
];

export default function EmployeeReports() {
  const [branch, setBranch] = useState('All Branches');
  const [dateRange, setDateRange] = useState('Oct 1 - Oct 31, 2023');
  const [matrixRange, setMatrixRange] = useState('Weekly');
  const [search, setSearch] = useState('');

  const filteredMatrix = efficiencyMatrix.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-reports-flow">
      {/* Title Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Employee Reports & Analytics</h1>
          <p className="page-subtitle">Performance insights and operational efficiency metrics.</p>
        </div>
        <div className="partners-header-buttons">
          <div className="date-select-picker-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '6px', background: '#fff' }}>
            <select
              style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              aria-label="Filter by branch"
            >
              <option value="All Branches">All Branches</option>
              <option value="New York HQ">New York HQ</option>
              <option value="London East">London East</option>
            </select>
          </div>

          <div className="date-select-picker-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '6px', background: '#fff' }}>
            <select
              style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              aria-label="Filter by date range"
            >
              <option value="Oct 1 - Oct 31, 2023">Oct 1 - Oct 31, 2023</option>
              <option value="Nov 1 - Nov 30, 2023">Nov 1 - Nov 30, 2023</option>
            </select>
          </div>

          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '4px' }} />
            <span>Export CSV</span>
          </button>
          
          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <FileText size={14} style={{ marginRight: '4px' }} />
            <span>PDF Report</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        {/* Productivity Score */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Productivity Score</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>88.4% <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700' }}>+2.4%</span></strong>
            </div>
            <span style={{ color: '#4f46e5' }}><Star size={20} fill="#4f46e5" /></span>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#f1ebf8', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '88.4%', height: '100%', background: '#4f46e5' }} />
          </div>
        </div>

        {/* Revenue Contribution */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Revenue Contribution</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>$42.8k <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700' }}>+12%</span></strong>
            </div>
            <span style={{ color: '#0f172a' }}><FileText size={20} /></span>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '70%', height: '100%', background: '#0f172a' }} />
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer Satisfaction</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>4.92 <span style={{ fontSize: '11px', color: '#4f46e5', fontWeight: '800', marginLeft: '4px' }}>Top 5%</span></strong>
            </div>
            <span style={{ color: '#eab308' }}><Star size={20} fill="#eab308" stroke="#eab308" /></span>
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="#eab308" stroke="#eab308" />)}
          </div>
        </div>

        {/* Avg Attendance */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg. Attendance</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>94.1% <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: '700' }}>-1.2%</span></strong>
            </div>
            <span style={{ color: '#ef4444' }}><ShieldAlert size={20} /></span>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#fee2e2', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '94.1%', height: '100%', background: '#ef4444' }} />
          </div>
        </div>
      </section>

      {/* Middle Row Grid */}
      <div className="fraud-top-grid" style={{ marginBottom: '24px', gap: '20px' }}>
        
        {/* Department Productivity Trends */}
        <div className="panel" style={{ flex: 1.6, padding: '24px' }}>
          <div className="service-card-title-wrap header-row-justify" style={{ marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Department Productivity Trends</h2>
            </div>
            <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '6px' }}>
              <button
                type="button"
                onClick={() => setMatrixRange('Weekly')}
                style={{ border: 'none', padding: '4px 10px', background: matrixRange === 'Weekly' ? '#fff' : 'transparent', color: matrixRange === 'Weekly' ? '#0f172a' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Weekly
              </button>
              <button
                type="button"
                onClick={() => setMatrixRange('Monthly')}
                style={{ border: 'none', padding: '4px 10px', background: matrixRange === 'Monthly' ? '#fff' : 'transparent', color: matrixRange === 'Monthly' ? '#0f172a' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* SVG Bar Chart */}
          <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '10px 20px', borderBottom: '1px solid #f1f5f9', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', height: '1px', background: '#f8fafc' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: '#f8fafc' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', height: '1px', background: '#f8fafc' }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '60%', width: '40px', background: '#e0e7ff', borderRadius: '4px 4px 0 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80%', width: '40px', background: '#e0e7ff', borderRadius: '4px 4px 0 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '55%', width: '40px', background: '#cbd5e1', borderRadius: '4px 4px 0 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90%', width: '40px', background: '#4f46e5', borderRadius: '4px 4px 0 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70%', width: '40px', background: '#e0e7ff', borderRadius: '4px 4px 0 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '75%', width: '40px', background: '#e0e7ff', borderRadius: '4px 4px 0 0' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px', fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>
            <span>Admin</span>
            <span>Operations</span>
            <span>Support</span>
            <span>Engineering</span>
            <span>Logistics</span>
            <span>Design</span>
          </div>
        </div>

        {/* Revenue Leaders list */}
        <div className="panel" style={{ flex: 1, padding: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px' }}>Revenue Leaders</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {revenueLeaders.map((lead, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: lead.bg, color: lead.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                  {lead.initials}
                </span>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px' }}>{lead.name}</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{lead.role}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{lead.revenue}</strong>
                  <span style={{ fontSize: '10px', color: '#10b981', fontWeight: '800' }}>{lead.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="secondary-action-btn font-bold" style={{ width: '100%', height: '36px', justifyContent: 'center', marginTop: '16px', fontSize: '12px' }}>
            VIEW FULL RANKING
          </button>
        </div>

      </div>

      {/* Bottom Efficiency Matrix Table */}
      <section className="panel partner-directory-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Employee Efficiency Matrix</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
              <Search size={14} />
              <input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: '12px' }}
                aria-label="Search employees by name or role"
              />
            </div>
            <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle department filters">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="partner-table">
            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>PRODUCTIVITY</th>
                <th>REV. CONTRIBUTION</th>
                <th>CSAT</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredMatrix.map((row, idx) => (
                <tr key={idx} className="partner-row-clickable">
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                        {row.initials}
                      </span>
                      <div>
                        <strong style={{ display: 'block', fontSize: '13px' }}>{row.name}</strong>
                        <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.role}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '130px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', width: '30px' }}>{row.productivity}%</span>
                      <div style={{ flex: 1, height: '5px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${row.productivity}%`, height: '100%', background: row.productivity > 70 ? '#4f46e5' : '#d97706' }} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <strong style={{ fontSize: '13px' }}>{row.revenue}</strong>
                  </td>
                  <td style={{ fontWeight: '700' }}>
                    {row.csat}
                  </td>
                  <td>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: row.statusColor, background: row.statusBg, padding: '3px 8px', borderRadius: '4px' }}>
                      {row.status}
                    </span>
                  </td>
                  <td className="partner-actions-cell" onClick={(e) => e.stopPropagation()}>
                    <button className="table-row-action-btn" type="button" aria-label="Action options">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="directory-table-footer">
          <span className="footer-results-text">Showing 4 of 124 employees</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
