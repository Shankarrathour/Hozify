import React, { useState } from 'react';
import { TrendingUp, Users, Star, Award, BarChart3, ArrowUpRight, HelpCircle, ShieldAlert } from 'lucide-react';

const topPerformers = [
  { name: 'Alex Murphy', revenue: '$12,450', score: '98%', status: 'PROMOTED', statusBg: '#e0e7ff', statusColor: '#4f46e5', initials: 'AM', bg: '#e0e7ff', color: '#4f46e5' },
  { name: 'Elena Wright', revenue: '$11,920', score: '96%', status: 'ELITE', statusBg: '#ecfdf5', statusColor: '#10b981', initials: 'EW', bg: '#ecfdf5', color: '#10b981' },
  { name: 'Sanjay Kumar', revenue: '$10,100', score: '94%', status: 'ELITE', statusBg: '#ecfdf5', statusColor: '#10b981', initials: 'SK', bg: '#f1ebf8', color: 'var(--primary)' }
];

const improvementQueue = [
  { name: 'Brad Baker', revenue: '$2,400', score: '42%', action: 'REVIEW', initials: 'BB', bg: '#fee2e2', color: '#ef4444' },
  { name: 'Lisa Lane', revenue: '$3,120', score: '58%', action: 'REVIEW', initials: 'LL', bg: '#fef3c7', color: '#d97706' },
  { name: 'Rick Peters', revenue: '$4,050', score: '64%', action: 'TRAINING', initials: 'RP', bg: '#e0f2fe', color: '#0284c7' }
];

export default function PerformanceDashboard() {
  const [trendRange, setTrendRange] = useState('Monthly');

  return (
    <div className="performance-dashboard-flow" style={{ position: 'relative', minHeight: 'calc(100vh - 180px)' }}>
      {/* Title Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Performance Dashboard</h1>
          <p className="page-subtitle">Track operational efficiency and individual performance scores.</p>
        </div>
      </div>

      {/* KPI Cards Row */}
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        
        {/* Highest Revenue Card */}
        <div className="kpi-card" style={{ backgroundColor: '#4f46e5', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '130px' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Highest Revenue Generator</span>
            <strong style={{ display: 'block', fontSize: '28px', margin: '4px 0 2px' }}>$84,200</strong>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.9)' }}>↗ +12.5% this month</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '10px' }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80" alt="Marcus Chen" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Marcus Chen</span>
          </div>
        </div>

        {/* Top Rated Employee */}
        <div className="kpi-card" style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '130px' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Top Rated Employee</span>
            <strong style={{ display: 'block', fontSize: '28px', margin: '4px 0 2px' }}>4.98</strong>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.9)' }}>✓ Consistent 5-star streak</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '10px' }}>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80" alt="Sarah Jenkins" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Sarah Jenkins</span>
          </div>
        </div>

        {/* Productivity Score */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '130px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Productivity Score</span>
            <strong style={{ display: 'block', fontSize: '28px', margin: '4px 0 2px', color: 'var(--text)' }}>87%</strong>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Network wide average</span>
          </div>
          {/* Custom micro bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '26px', marginTop: '8px' }}>
            <span style={{ height: '35%', width: '10px', background: '#c7d2fe', borderRadius: '2px' }} />
            <span style={{ height: '55%', width: '10px', background: '#c7d2fe', borderRadius: '2px' }} />
            <span style={{ height: '40%', width: '10px', background: '#c7d2fe', borderRadius: '2px' }} />
            <span style={{ height: '70%', width: '10px', background: '#818cf8', borderRadius: '2px' }} />
            <span style={{ height: '90%', width: '10px', background: '#4f46e5', borderRadius: '2px' }} />
            <span style={{ height: '80%', width: '10px', background: '#4f46e5', borderRadius: '2px' }} />
          </div>
        </div>

        {/* Active Employees */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '130px', background: '#fff', border: '1px solid var(--line)' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Employees</span>
            <strong style={{ display: 'block', fontSize: '28px', margin: '4px 0 2px', color: 'var(--text)' }}>1,248</strong>
            <span style={{ fontSize: '11px', color: '#ef4444' }}>↘ -2.1% from peak</span>
          </div>
          {/* User circles list */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#e2e8f0', color: 'var(--text)', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700' }}>JD</span>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#e2e8f0', color: 'var(--text)', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700', marginLeft: '-6px' }}>MK</span>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#e2e8f0', color: 'var(--text)', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700', marginLeft: '-6px' }}>SL</span>
            <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#0f172a', color: '#fff', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800', marginLeft: '-6px' }}>+1.2k</span>
          </div>
        </div>

      </section>

      {/* Middle Row Grid */}
      <div className="fraud-top-grid" style={{ marginBottom: '24px', gap: '20px' }}>
        
        {/* Rating & Productivity line trends */}
        <div className="panel" style={{ flex: 1.6, padding: '24px' }}>
          <div className="service-card-title-wrap header-row-justify" style={{ marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Rating & Productivity Trends</h2>
              <p style={{ margin: '2px 0 0', color: 'var(--muted)', fontSize: '12px' }}>Aggregated data across all departments</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '6px' }}>
              <button
                type="button"
                onClick={() => setTrendRange('Monthly')}
                style={{ border: 'none', padding: '4px 10px', background: trendRange === 'Monthly' ? '#fff' : 'transparent', color: trendRange === 'Monthly' ? '#0f172a' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setTrendRange('Quarterly')}
                style={{ border: 'none', padding: '4px 10px', background: trendRange === 'Quarterly' ? '#fff' : 'transparent', color: trendRange === 'Quarterly' ? '#0f172a' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Quarterly
              </button>
            </div>
          </div>

          {/* SVG Line Chart Area */}
          <div className="analytics-chart-viewport" style={{ height: '180px', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
              <line x1="0" y1="45" x2="600" y2="45" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="90" x2="600" y2="90" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="135" x2="600" y2="135" stroke="#f1f5f9" strokeWidth="1" />

              {/* Rating dashed line */}
              <path d="M 0 130 C 100 120, 200 115, 300 95 C 400 70, 500 100, 600 70" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" />

              {/* Productivity solid line */}
              <path d="M 0 110 C 100 100, 200 60, 300 90 C 400 120, 500 30, 600 80" fill="none" stroke="#4f46e5" strokeWidth="3" />
            </svg>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '12px', fontSize: '11px', fontWeight: '700' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4f46e5' }}>
              <span style={{ width: '8px', height: '8px', background: '#4f46e5', borderRadius: '50%' }} />
              Productivity Score
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8' }}>
              <span style={{ width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
              Customer Rating
            </span>
          </div>
        </div>

        {/* High Performance Share Circular card */}
        <div className="panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px' }}>High Performance Share</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '10px 0' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4f46e5" strokeWidth="3" strokeDasharray="68, 100" strokeLinecap="round" />
              </svg>
              <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <strong style={{ fontSize: '24px', color: 'var(--text)' }}>68%</strong>
                <span style={{ fontSize: '9px', color: 'var(--muted)', fontWeight: '700' }}>Target Met</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: 'var(--muted)', fontWeight: '700' }}>Logistics</span>
              <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', margin: '0 12px', overflow: 'hidden' }}>
                <div style={{ width: '42%', height: '100%', background: '#4f46e5' }} />
              </div>
              <span style={{ fontWeight: '700' }}>42%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: 'var(--muted)', fontWeight: '700' }}>Maintenance</span>
              <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', margin: '0 12px', overflow: 'hidden' }}>
                <div style={{ width: '28%', height: '100%', background: '#4f46e5' }} />
              </div>
              <span style={{ fontWeight: '700' }}>28%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Grid: Performers & Improvement Queue */}
      <div className="fraud-top-grid" style={{ gap: '20px' }}>
        
        {/* Top Performers */}
        <div className="panel" style={{ flex: 1.2, padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0', display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a' }}>
              <span style={{ width: '8px', height: '8px', background: '#16a34a', borderRadius: '50%' }} />
              Top Performers
            </h2>
            <button style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontWeight: '700', fontSize: '12px', cursor: 'pointer', padding: 0 }}>
              View All
            </button>
          </div>

          <div className="table-wrap" style={{ border: '1px solid #e1dce8', borderRadius: '8px', overflow: 'hidden' }}>
            <table className="approval-queue-table" style={{ width: '100%', minWidth: 'auto' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>EMPLOYEE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>REVENUE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>SCORE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px', textAlign: 'right' }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {topPerformers.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                          {row.initials}
                        </span>
                        <strong style={{ fontSize: '13px' }}>{row.name}</strong>
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px', color: 'var(--text)', fontSize: '13px', fontWeight: '700' }}>{row.revenue}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '3px 6px', borderRadius: '3px' }}>
                        {row.score}
                      </span>
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                      <span style={{ fontSize: '9px', fontWeight: '800', padding: '3px 6px', borderRadius: '3px', color: row.statusColor, background: row.statusBg }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Improvement Queue */}
        <div className="panel" style={{ flex: 1.2, padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0', display: 'flex', alignItems: 'center', gap: '6px', color: '#dc2626' }}>
              <span style={{ width: '8px', height: '8px', background: '#dc2626', borderRadius: '50%' }} />
              Improvement Queue
            </h2>
            <button style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontWeight: '700', fontSize: '12px', cursor: 'pointer', padding: 0 }}>
              Support All
            </button>
          </div>

          <div className="table-wrap" style={{ border: '1px solid #e1dce8', borderRadius: '8px', overflow: 'hidden' }}>
            <table className="approval-queue-table" style={{ width: '100%', minWidth: 'auto' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>EMPLOYEE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>REVENUE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>SCORE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px', textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {improvementQueue.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: row.bg, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                          {row.initials}
                        </span>
                        <strong style={{ fontSize: '13px' }}>{row.name}</strong>
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px', color: 'var(--text)', fontSize: '13px', fontWeight: '700' }}>{row.revenue}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '800', color: '#ef4444', background: '#fee2e2', padding: '3px 6px', borderRadius: '3px' }}>
                        {row.score}
                      </span>
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                      <button
                        style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: '800', cursor: 'pointer' }}
                      >
                        {row.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
