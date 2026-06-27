import React, { useState } from 'react';
import { Award, Calendar, Download, Eye, SlidersHorizontal, MoreVertical, TrendingUp, HelpCircle } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

const topPerformers = [
  { rank: 1, name: 'Sarah Miller', efficiency: '98% Efficiency', value: '+$12k', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80', active: true },
  { rank: 2, name: 'Marcus Chen', efficiency: '94% Efficiency', value: '+$9.5k', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80', active: false }
];

const auditBranches = [
  { name: 'Downtown Logistics Center', manager: 'Alex Thorne', revenue: '$48,290.00', status: 'VERIFIED', trend: '+4.2%', id: 'BR-90210' },
  { name: 'Uptown Service Hub', manager: 'Elena Rodriguez', revenue: '$32,150.40', status: 'VERIFIED', trend: '+1.8%', id: 'BR-7842' },
  { name: 'Industrial Zone East', manager: 'David Kim', revenue: '$28,900.00', status: 'REVIEWING', trend: '-2.4%', id: 'BR-5510' },
  { name: 'Bayside Operations', manager: 'Sarah Jenkins', revenue: '$19,420.00', status: 'VERIFIED', trend: '+8.5%', id: 'BR-405' }
];

export default function BranchPerformance() {
  const { navigate, setCurrentBranchId } = useApp();
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  const handleRowClick = (branch) => {
    setCurrentBranchId(branch.id);
    navigate(ROUTES.branchSchedule);
  };

  return (
    <div className="branch-performance-container">
      {/* Page Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Branch Performance Dashboard</h1>
          <p className="page-subtitle">Comprehensive analysis for downtown logistics and service execution.</p>
        </div>
        <div className="partners-header-buttons">
          <div className="date-select-picker-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', padding: '6px 12px', borderRadius: '6px', background: '#fff' }}>
            <Calendar size={16} />
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
              aria-label="Select timeframe"
            >
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last 90 Days">Last 90 Days</option>
              <option value="Year to Date">Year to Date</option>
            </select>
          </div>

          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '4px' }} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Top Section Layout (Performance Score & Top Performers) */}
      <div className="fraud-top-grid" style={{ marginBottom: '24px', gap: '20px' }}>
        
        {/* Overall Performance Score Card */}
        <div className="panel" style={{ flex: 1.8, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Overall Performance Score</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '6px' }}>
                <strong style={{ fontSize: '36px', color: 'var(--text)', fontWeight: '800' }}>94.2</strong>
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#059669', background: '#ecfdf5', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>Excellent</span>
              </div>
              <span style={{ display: 'block', fontSize: '12px', color: '#10b981', fontWeight: '700', marginTop: '4px' }}>↗ +12.4% vs last month</span>
            </div>
          </div>

          {/* Bezier Area Chart SVG */}
          <div style={{ height: '140px', marginTop: '20px', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 500 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="score-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d="M 0 90 C 100 80, 150 95, 200 65 C 250 35, 300 70, 350 45 C 400 20, 450 35, 500 15 L 500 120 L 0 120 Z" fill="url(#score-grad)" />
              <path d="M 0 90 C 100 80, 150 95, 200 65 C 250 35, 300 70, 350 45 C 400 20, 450 35, 500 15" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
              <circle cx="500" cy="15" r="4" fill="#4f46e5" stroke="#fff" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Top Performers Card */}
        <div className="panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={16} style={{ color: '#eab308' }} /> Top Performers
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {topPerformers.map((perf) => (
                <div key={perf.rank} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={perf.avatar} alt={perf.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '18px', height: '18px', borderRadius: '50%', background: perf.rank === 1 ? '#eab308' : '#94a3b8', color: '#fff', fontSize: '10px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
                      {perf.rank}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{perf.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{perf.efficiency}</span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#10b981' }}>{perf.value}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="secondary-action-btn font-bold" style={{ width: '100%', height: '36px', justifyContent: 'center', marginTop: '16px', fontSize: '12px' }} type="button">
            View All Staff
          </button>
        </div>

      </div>

      {/* Middle Row (KPI Mini-Cards Grid) */}
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', marginBottom: '24px', gap: '16px' }}>
        
        {/* Best Services */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Best Services</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '10px 0' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: '700', marginBottom: '2px' }}>
                <span>Express Courier</span>
                <span>42%</span>
              </div>
              <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '42%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: '700', marginBottom: '2px' }}>
                <span>Standard Logistics</span>
                <span>35%</span>
              </div>
              <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '35%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Rank (Dark Card) */}
        <div className="kpi-card" style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '120px' }}>
          <span style={{ fontSize: '9px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Revenue Rank</span>
          <div>
            <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', margin: '4px 0 2px' }}>#04<span style={{ fontSize: '14px', fontWeight: 'normal', color: 'rgba(255,255,255,0.6)' }}>/128</span></strong>
            <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.8)' }}>Top 5% Nationwide</span>
          </div>
          <span style={{ fontSize: '10px', color: '#10b981', fontWeight: '700' }}>↗ Up 2 positions</span>
        </div>

        {/* Customer Satisfaction */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer Satisfaction</span>
          <div>
            <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', margin: '2px 0 0', color: 'var(--text)' }}>4.92<span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 'normal' }}>/5.0</span></strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '8px', fontSize: '9px', fontWeight: '700', color: 'var(--muted)' }}>
            <span>Wait: 4.2m</span>
            <span>NPS: 82</span>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Completion Rate</span>
          <div>
            <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', margin: '2px 0 2px', color: 'var(--text)' }}>99.1%</strong>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '20px' }}>
            <span style={{ height: '40%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '60%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '50%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '80%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '95%', width: '100%', background: '#4f46e5', borderRadius: '1px' }} />
          </div>
        </div>

        {/* Booking Success */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '120px', background: '#fff', border: '1px solid var(--line)' }}>
          <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Booking Success</span>
          <div>
            <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', margin: '2px 0 2px', color: 'var(--text)' }}>86.4%</strong>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '20px' }}>
            <span style={{ height: '60%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '50%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '70%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '65%', width: '100%', background: '#c7d2fe', borderRadius: '1px' }} />
            <span style={{ height: '85%', width: '100%', background: '#4f46e5', borderRadius: '1px' }} />
          </div>
        </div>

      </div>

      {/* Bottom Table Section (Operational Audit) */}
      <section className="panel partner-directory-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text)', margin: '0' }}>
            Operational Audit — Regional Branches
          </h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Filters">
              <SlidersHorizontal size={14} />
            </button>
            <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Options">
              <MoreVertical size={14} />
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="partner-table">
            <thead>
              <tr>
                <th>BRANCH NAME</th>
                <th>MANAGER</th>
                <th>DAILY REVENUE</th>
                <th>STATUS</th>
                <th>TREND</th>
              </tr>
            </thead>
            <tbody>
              {auditBranches.map((branch) => (
                <tr key={branch.id} className="partner-row-clickable" onClick={() => handleRowClick(branch)}>
                  <td>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px' }}>{branch.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>ID: {branch.id}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text)', fontWeight: '700' }}>{branch.manager}</td>
                  <td style={{ color: 'var(--text)', fontWeight: '800' }}>{branch.revenue}</td>
                  <td>
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: '800',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        color: branch.status === 'VERIFIED' ? '#059669' : '#d97706',
                        background: branch.status === 'VERIFIED' ? '#ecfdf5' : '#fffbeb'
                      }}
                    >
                      {branch.status}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: branch.trend.startsWith('+') ? '#10b981' : '#ef4444' }}>
                      {branch.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
