import React, { useState } from 'react';
import { TrendingUp, Users, Star, Award, BarChart3, ArrowUpRight, HelpCircle, ShieldAlert } from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';

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
  const { addToast } = useToast();
  const [trendRange, setTrendRange] = useState('Monthly');

  return (
    <div className="performance-dashboard-flow" style={{ position: 'relative', minHeight: 'calc(100vh - 180px)', paddingBottom: '40px' }}>
      {/* Title Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Performance Dashboard</h1>
          <p className="page-subtitle">Track operational efficiency and individual performance scores.</p>
        </div>
      </div>

      {/* KPI Cards Row */}
      <section className="kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        
        {/* Highest Revenue Card */}
        <div 
          onClick={() => addToast("Card clicked: Highest Revenue stats details", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Highest Revenue Generator</span>
            <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>$84,200</strong>
            <span style={{ fontSize: '9px', color: '#10b981', fontWeight: '700', display: 'block' }}>↗ +12.5% this month</span>
          </div>
        </div>

        {/* Top Rated Employee */}
        <div 
          onClick={() => addToast("Card clicked: Top Rated Employee profile", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Top Rated Employee</span>
            <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>4.98</strong>
            <span style={{ fontSize: '9px', color: '#10b981', fontWeight: '700', display: 'block' }}>✓ Consistent 5-star streak</span>
          </div>
        </div>

        {/* Productivity Score */}
        <div 
          onClick={() => addToast("Card clicked: Average Productivity score distribution", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Avg Productivity Score</span>
            <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>87%</strong>
            <span style={{ fontSize: '9px', color: 'var(--muted)', display: 'block' }}>Network wide average</span>
          </div>
        </div>

        {/* Active Employees */}
        <div 
          onClick={() => addToast("Card clicked: Active Employees list", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}
        >
          <div>
            <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Active Employees</span>
            <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>1,248</strong>
            <span style={{ fontSize: '9px', color: '#ef4444', display: 'block' }}>↘ -2.1% from peak</span>
          </div>
        </div>

      </section>

      {/* Middle Row Grid */}
      <div className="fraud-top-grid" style={{ marginBottom: '24px', gap: '20px' }}>
        
        {/* Rating & Productivity line trends */}
        <div className="panel" style={{ flex: 1.6, padding: '24px' }}>
          <div className="service-card-title-wrap header-row-justify" style={{ marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Efficiency Trends</h2>
              <p style={{ margin: '2px 0 0', color: 'var(--muted)', fontSize: '12px' }}>Operational metrics for target periods</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <select
                value={trendRange}
                onChange={(e) => setTrendRange(e.target.value)}
                style={{ border: '1px solid var(--line)', borderRadius: '6px', padding: '4px 8px', fontWeight: '700', fontSize: '12px', background: '#fff', outline: 'none', cursor: 'pointer' }}
                aria-label="Select trend range"
              >
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
            </div>
          </div>

          <div className="analytics-chart-viewport" style={{ height: '180px', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
              <line x1="0" y1="45" x2="600" y2="45" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="90" x2="600" y2="90" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="135" x2="600" y2="135" stroke="#f1f5f9" strokeWidth="1" />

              <path d="M 0 110 Q 150 150 300 70 T 600 30" fill="none" stroke="#4f46e5" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Score metrics */}
        <div className="panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>CSAT Performance</h2>
            <HelpCircle size={16} style={{ color: 'var(--muted)', cursor: 'pointer' }} onClick={() => addToast("CSAT calculation standard score formula detail.", "success")} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
              <span style={{ width: '80px', fontWeight: '700' }}>Exceeding</span>
              <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '68%', height: '100%', background: '#10b981', borderRadius: '4px' }} />
              </div>
              <span style={{ width: '30px', textAlign: 'right', fontWeight: '700' }}>68%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
              <span style={{ width: '80px', fontWeight: '700' }}>Meeting</span>
              <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '22%', height: '100%', background: '#4f46e5', borderRadius: '4px' }} />
              </div>
              <span style={{ width: '30px', textAlign: 'right', fontWeight: '700' }}>22%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
              <span style={{ width: '80px', fontWeight: '700' }}>Below Avg</span>
              <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '10%', height: '100%', background: '#ef4444', borderRadius: '4px' }} />
              </div>
              <span style={{ width: '30px', textAlign: 'right', fontWeight: '700' }}>10%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Grid: Performers & Improvements */}
      <div className="fraud-top-grid" style={{ gap: '20px' }}>
        
        {/* Top Performers */}
        <div className="panel" style={{ flex: 1, padding: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px' }}>Top Performers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {topPerformers.map((emp, index) => (
              <div 
                key={index} 
                onClick={() => addToast(`Opening profile statistics console for ${emp.name}`, "success")}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '8px', cursor: 'pointer' }}
              >
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: emp.bg, color: emp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>
                  {emp.initials}
                </span>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px' }}>{emp.name}</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Revenue: {emp.revenue}</span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: '800', background: emp.statusBg, color: emp.statusColor, padding: '3px 6px', borderRadius: '4px' }}>{emp.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Improvement Queue */}
        <div className="panel" style={{ flex: 1, padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>Improvement Roster Queue</h2>
            <ShieldAlert size={18} style={{ color: '#ef4444' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {improvementQueue.map((emp, index) => (
              <div 
                key={index} 
                onClick={() => addToast(`Initiating performance audit action workflow for ${emp.name}...`, "success")}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #fee2e2', borderRadius: '8px', cursor: 'pointer' }}
              >
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: emp.bg, color: emp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>
                  {emp.initials}
                </span>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px' }}>{emp.name}</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>Score: {emp.score} • Revenue: {emp.revenue}</span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: '800', background: emp.bg, color: emp.color, padding: '3px 6px', borderRadius: '4px' }}>{emp.action}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
