import React, { useState } from 'react';
import { Download, SlidersHorizontal, TrendingUp, HelpCircle, Star, ArrowUpRight } from 'lucide-react';

const serviceRevenues = [
  { name: 'Executive Consulting', bookings: '1,204', revenue: '$124,500', trend: 'up' },
  { name: 'Managed Infrastructure', bookings: '842', revenue: '$89,200', trend: 'up' },
  { name: 'Security Audit', bookings: '415', revenue: '$62,100', trend: 'flat' },
  { name: 'Cloud Migration', bookings: '210', revenue: '$45,000', trend: 'up' }
];

const employeePerformers = [
  { name: 'James Donovan', role: 'Senior Field Agent', revenue: '$18,450', badge: 'TOP TIER', badgeBg: '#ecfdf5', badgeColor: '#059669', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80' },
  { name: 'Sarah Chen', role: 'Operations Manager', revenue: '$16,208', badge: 'CONSISTENT', badgeBg: '#f1ebf8', badgeColor: 'var(--primary)', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80' },
  { name: 'Marcus Wright', role: 'Regional Consultant', revenue: '$14,950', badge: 'RISING STAR', badgeBg: '#fffbeb', badgeColor: '#b45309', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&h=60&q=80' }
];

export default function BranchAnalytics() {
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [serviceType, setServiceType] = useState('All Services');
  const [employee, setEmployee] = useState('All Staff');

  return (
    <div className="branch-analytics-container">
      {/* Page Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Revenue Analytics</h1>
          <p className="page-subtitle">Real-time financial performance and booking trends across all regional branches.</p>
        </div>
        
        {/* Filters Top Bar */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Date Range</span>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '6px', background: '#fff' }}>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
                aria-label="Filter by date range"
              >
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="Last 90 Days">Last 90 Days</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Type</span>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '6px', background: '#fff' }}>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
                aria-label="Filter by service type"
              >
                <option value="All Services">All Services</option>
                <option value="Consulting">Consulting</option>
                <option value="Security">Security</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Employee</span>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '6px', background: '#fff' }}>
              <select
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
                aria-label="Filter by employee"
              >
                <option value="All Staff">All Staff</option>
                <option value="Alex Thorne">Alex Thorne</option>
              </select>
            </div>
          </div>

          <button className="secondary-action-btn font-bold" type="button" style={{ height: '32px', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <SlidersHorizontal size={12} />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        {/* Total Revenue */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Revenue</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>$2.48M</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↗ +12.5% <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>vs $2.14M last month</span></span>
            </div>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#f1ebf8', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '80%', height: '100%', background: '#4f46e5' }} />
          </div>
        </div>

        {/* Avg Booking */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg. Booking</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>$342.00</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↗ +4.2% <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>Consistent growth</span></span>
            </div>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: '#4f46e5' }} />
          </div>
        </div>

        {/* Service Ops */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service Ops</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>94.2%</strong>
              <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>↘ -1.8% <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>Below target threshold</span></span>
            </div>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#fee2e2', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '94.2%', height: '100%', background: '#ef4444' }} />
          </div>
        </div>

        {/* Utilization */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Utilization</span>
              <strong style={{ display: 'block', fontSize: '26px', margin: '4px 0 2px', color: 'var(--text)' }}>82.5%</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Stable, Optimum capacity range</span>
            </div>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '82.5%', height: '100%', background: '#4f46e5' }} />
          </div>
        </div>
      </section>

      {/* Middle Row (Revenue Growth & Booking Conversion) */}
      <div className="fraud-top-grid" style={{ marginBottom: '24px', gap: '20px' }}>
        
        {/* Revenue Growth Trend Bar Chart */}
        <div className="panel" style={{ flex: 1.8, padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Revenue Growth Trend</h2>
            <div style={{ display: 'flex', gap: '12px', fontSize: '11px', fontWeight: '700' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4f46e5' }}>
                <span style={{ width: '8px', height: '8px', background: '#4f46e5', borderRadius: '2px' }} />
                Current Year
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#cbd5e1' }}>
                <span style={{ width: '8px', height: '8px', background: '#cbd5e1', borderRadius: '2px' }} />
                Previous Year
              </span>
            </div>
          </div>

          <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 20px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', height: '1px', background: '#f8fafc' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: '#f8fafc' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', height: '1px', background: '#f8fafc' }} />

            {/* Bars */}
            {[
              { cur: '55%', prev: '45%' },
              { cur: '70%', prev: '60%' },
              { cur: '85%', prev: '80%' },
              { cur: '90%', prev: '75%' },
              { cur: '95%', prev: '85%' },
              { cur: '100%', prev: '90%' }
            ].map((bar, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%', width: '40px', position: 'relative', zIndex: 1 }}>
                <div style={{ height: bar.prev, width: '18px', background: '#cbd5e1', borderRadius: '2px 2px 0 0' }} />
                <div style={{ height: bar.cur, width: '18px', background: '#4f46e5', borderRadius: '2px 2px 0 0' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Booking Conversion Card (Dark Theme) */}
        <div className="panel" style={{ flex: 1, padding: '24px', backgroundColor: '#0f172a', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 16px' }}>Booking Conversion</h2>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800' }}>88.4%</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↗ Average Conversion Rate</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>
                  <span>Direct Bookings</span>
                  <strong>642</strong>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '68%', height: '100%', background: '#38bdf8' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>
                  <span>Referral Bookings</span>
                  <strong>218</strong>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '42%', height: '100%', background: '#38bdf8' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>
                  <span>Walk-ins</span>
                  <strong>95</strong>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '22%', height: '100%', background: '#38bdf8' }} />
                </div>
              </div>
            </div>
          </div>

          <button className="secondary-action-btn" style={{ width: '100%', height: '36px', border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: '#fff', fontSize: '12px', fontWeight: '700', justifyContent: 'center', cursor: 'pointer', marginTop: '16px' }} type="button">
            View Detailed Log
          </button>
        </div>

      </div>

      {/* Bottom Grid (Service Revenue Table & Employee Performance) */}
      <div className="fraud-top-grid" style={{ gap: '20px' }}>
        
        {/* Service Revenue Panel */}
        <div className="panel" style={{ flex: 1.2, padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>Service Revenue</h2>
            <a href="#export" onClick={(e) => e.preventDefault()} style={{ color: '#4f46e5', fontWeight: '700', fontSize: '12px', textDecoration: 'none' }}>
              Export CSV
            </a>
          </div>

          <div className="table-wrap">
            <table className="approval-queue-table" style={{ width: '100%', minWidth: 'auto' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>SERVICE NAME</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>BOOKINGS</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px' }}>REVENUE</th>
                  <th style={{ padding: '10px 14px', fontSize: '10px', textAlign: 'right' }}>TREND</th>
                </tr>
              </thead>
              <tbody>
                {serviceRevenues.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '12px 14px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>{row.name}</td>
                    <td style={{ padding: '12px 14px', fontSize: '13px', color: 'var(--text)' }}>{row.bookings}</td>
                    <td style={{ padding: '12px 14px', fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>{row.revenue}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                      <span style={{ color: row.trend === 'up' ? '#10b981' : '#b45309', fontWeight: 'bold' }}>
                        {row.trend === 'up' ? '↗' : '→'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee Performance Panel */}
        <div className="panel" style={{ flex: 1.2, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>Employee Performance</h2>
              <a href="#leaderboard" onClick={(e) => e.preventDefault()} style={{ color: '#4f46e5', fontWeight: '700', fontSize: '12px', textDecoration: 'none' }}>
                View Leaderboard
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {employeePerformers.map((emp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
                  <img src={emp.avatar} alt={emp.name} style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{emp.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{emp.role}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{emp.revenue}</strong>
                    <span style={{ fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '3px', background: emp.badgeBg, color: emp.badgeColor }}>
                      {emp.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
