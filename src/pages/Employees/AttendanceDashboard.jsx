import React, { useState } from 'react';
import { Calendar, Download, UserCheck, UserMinus, Clock, Hourglass, SlidersHorizontal, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

const attendanceDetails = [
  { name: 'Marcus Holloway', id: 'EMP-9283', dept: 'Engineering', shift: '09:00 - 18:00', checkIn: '08:54 AM', status: 'ON TIME', statusClass: 'on-time', initials: 'MH', bg: '#ecfdf5', color: '#059669' },
  { name: 'Elara Vance', id: 'EMP-4412', dept: 'Design', shift: '09:00 - 18:00', checkIn: '09:12 AM', status: 'LATE', statusClass: 'late', initials: 'EV', bg: '#fef3c7', color: '#d97706' },
  { name: 'Julian Thorne', id: 'EMP-0922', dept: 'Operations', shift: '08:00 - 17:00', checkIn: '- - : - -', status: 'ABSENT', statusClass: 'absent', initials: 'JT', bg: '#fee2e2', color: '#ef4444' }
];

export default function AttendanceDashboard() {
  const [date, setDate] = useState('June 14, 2024');
  const [viewType, setViewType] = useState('Real-time');

  return (
    <div className="attendance-dashboard-flow">
      {/* Title Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Attendance Dashboard</h1>
          <p className="page-subtitle">Monitoring real-time presence across all branches.</p>
        </div>
        <div className="partners-header-buttons">
          <div className="date-select-picker-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', padding: '6px 12px', borderRadius: '6px', background: '#fff' }}>
            <Calendar size={16} />
            <span style={{ fontWeight: '700', fontSize: '13px' }}>{date}</span>
          </div>

          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '4px' }} />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        {/* Today's Attendance */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Today's Attendance</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>1,248 <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 'normal' }}>/ 1,350</span></strong>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↗ 92.4% rate today</span>
          </div>
          <span style={{ color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eee9f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UserCheck size={18} /></span>
        </div>

        {/* Absent */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Absent</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>42</strong>
            <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>↗ +12% from yesterday</span>
          </div>
          <span style={{ color: '#ef4444', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UserMinus size={18} /></span>
        </div>

        {/* Late Arrivals */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Late Arrivals</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>15</strong>
            <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>→ Stable trend</span>
          </div>
          <span style={{ color: '#d97706', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={18} /></span>
        </div>

        {/* Total Hours */}
        <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Hours (Today)</span>
            <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>9,842h</strong>
            <span style={{ fontSize: '11px', color: '#4f46e5', fontWeight: '700' }}>↗ High productivity peak</span>
          </div>
          <span style={{ color: '#0ea5e9', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Hourglass size={18} /></span>
        </div>
      </section>

      {/* Middle Row Grid */}
      <div className="fraud-top-grid" style={{ marginBottom: '24px', gap: '20px' }}>
        
        {/* Attendance Trends */}
        <div className="panel" style={{ flex: 1.6, padding: '24px' }}>
          <div className="service-card-title-wrap header-row-justify" style={{ marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Attendance Trends</h2>
              <p style={{ margin: '2px 0 0', color: 'var(--muted)', fontSize: '12px' }}>Presence overview for the last 14 days</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', border: '1px solid var(--line)', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', backgroundColor: '#fff' }}>
              <span>Last 14 Days</span>
            </div>
          </div>

          {/* SVG line chart */}
          <div className="analytics-chart-viewport" style={{ height: '180px', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
              <line x1="0" y1="45" x2="600" y2="45" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="90" x2="600" y2="90" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="135" x2="600" y2="135" stroke="#f1f5f9" strokeWidth="1" />

              <path d="M 0 140 C 100 110, 200 130, 300 90 C 400 70, 500 110, 600 80" fill="none" stroke="#4f46e5" strokeWidth="3" />
            </svg>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>
            <span>01 Jun</span>
            <span>02 Jun</span>
            <span>03 Jun</span>
            <span style={{ color: '#4f46e5', fontWeight: '800' }}>Today</span>
            <span>05 Jun</span>
            <span>06 Jun</span>
            <span>07 Jun</span>
            <span>08 Jun</span>
          </div>
        </div>

        {/* Branch Distribution */}
        <div className="panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px' }}>Branch Distribution</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '10px 0' }}>
            <div style={{ position: 'relative', width: '110px', height: '110px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', border: '5px solid #4f46e5', transform: 'rotate(45deg)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
              <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <strong style={{ fontSize: '24px', color: 'var(--text)' }}>88%</strong>
                <span style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase' }}>Overall</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '14px', fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                <span style={{ width: '8px', height: '8px', background: '#4f46e5', borderRadius: '50%' }} />
                Main HQ
              </span>
              <span>98%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                <span style={{ width: '8px', height: '8px', background: '#a5b4fc', borderRadius: '50%' }} />
                West Wing
              </span>
              <span>82%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                <span style={{ width: '8px', height: '8px', background: '#475569', borderRadius: '50%' }} />
                Logistic Hub
              </span>
              <span>75%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Table Card */}
      <section className="panel partner-directory-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Attendance Detail</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '4px', background: '#f1f5f9', padding: '3px', borderRadius: '6px' }}>
              <button
                type="button"
                onClick={() => setViewType('Real-time')}
                style={{ border: 'none', padding: '4px 12px', background: viewType === 'Real-time' ? '#fff' : 'transparent', color: viewType === 'Real-time' ? '#0f172a' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Real-time
              </button>
              <button
                type="button"
                onClick={() => setViewType('Logs')}
                style={{ border: 'none', padding: '4px 12px', background: viewType === 'Logs' ? '#fff' : 'transparent', color: viewType === 'Logs' ? '#0f172a' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Logs
              </button>
            </div>
            <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Filter attendance detail">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table">
            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>DEPARTMENT</th>
                <th>SHIFT</th>
                <th>CHECK-IN</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {attendanceDetails.map((row, idx) => (
                <tr key={idx} className="partner-row-clickable">
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                        {row.initials}
                      </span>
                      <div>
                        <strong style={{ display: 'block', fontSize: '13px' }}>{row.name}</strong>
                        <span style={{ fontSize: '11px', color: 'var(--muted)' }}>ID: {row.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>{row.dept}</td>
                  <td>{row.shift}</td>
                  <td style={{ fontWeight: '700' }}>{row.checkIn}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontSize: '12px' }}>
                      <span
                        className="priority-bullet-dot"
                        style={{
                          background: row.statusClass === 'on-time' ? '#10b981' : row.statusClass === 'late' ? '#f59e0b' : '#ef4444'
                        }}
                      />
                      <span style={{ color: row.statusClass === 'on-time' ? '#059669' : row.statusClass === 'late' ? '#b45309' : '#dc2626' }}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="partner-actions-cell" onClick={(e) => e.stopPropagation()}>
                    <button className="table-row-action-btn" type="button" aria-label="More options">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>

        <div className="directory-table-footer">
          <span className="footer-results-text">Showing 1 to 3 of 42 employees</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
