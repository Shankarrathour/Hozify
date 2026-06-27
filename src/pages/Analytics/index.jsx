import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import { downloadDummyPDF } from '../../utils/downloadHelper';
import {
  Download,
  Calendar,
  SlidersHorizontal,
  ChevronDown,
  BarChart3,
  Award,
  Users,
  Compass,
  ArrowUpRight,
  Star,
  Activity,
  FileText,
  Search,
  CheckCircle,
  AlertCircle,
  MoreVertical,
  Sliders,
  TrendingUp,
  MapPin,
  TrendingDown,
  Clock,
  ShieldAlert,
  Sparkles,
  Globe,
  Zap
} from 'lucide-react';

export default function Analytics() {
  const { navigate } = useApp();
  const [activeView, setActiveView] = useState('insights'); // 'insights' or 'reports'
  const [timeRange, setTimeRange] = useState('7 Days');

  // Business Reports Builder States
  const [activeCategory, setActiveCategory] = useState('Revenue');
  const [dateRange, setDateRange] = useState('2023-10-01 to 2023-10-31');
  const [businessTier, setBusinessTier] = useState('All Tiers');
  const [regionFilter, setRegionFilter] = useState('North America');
  const [searchTableTerm, setSearchTableTerm] = useState('');
  const [statuses, setStatuses] = useState({ active: true, pending: true, inactive: false });
  const [emailDigest, setEmailDigest] = useState(true);
  const [s3Sync, setS3Sync] = useState(false);

  // Report Categories list (Screen 3 Left Panel)
  const reportCategories = [
    { id: 'Revenue', label: 'Revenue' },
    { id: 'Compliance', label: 'Compliance' },
    { id: 'Branch Performance', label: 'Branch Performance' },
    { id: 'Employee Activity', label: 'Employee Activity' }
  ];

  // Screen 3 Report Preview Revenue Data
  const detailedRevenueData = [
    { id: '4420-BK', name: 'Atlas Global Logistics', region: 'North America', revenue: '$1,240,500.00', growth: '+12.4%', status: 'Verified', statusColor: '#10b981', statusBg: '#ecfdf5' },
    { id: '8891-XL', name: 'Nova Retail Group', region: 'EMEA', revenue: '$892,300.50', growth: '+4.1%', status: 'Verified', statusColor: '#10b981', statusBg: '#ecfdf5' },
    { id: '1102-AQ', name: 'Horizon FinTech', region: 'APAC', revenue: '$2,410,200.00', growth: '-2.8%', status: 'Pending', statusColor: '#f59e0b', statusBg: '#fef3c7' },
    { id: '5567-TR', name: 'Quantum Dynamics', region: 'North America', revenue: '$560,900.00', growth: '+1.5%', status: 'Suspended', statusColor: '#ef4444', statusBg: '#fee2e2' }
  ];

  // Original Partner Leaderboard Data
  const partnerMetrics = [
    { name: 'Nexis Logistics', category: 'Logistics', orders: '1,420', revenue: '$82,450.00', rating: '4.8', sla: '99.1%' },
    { name: 'CloudFleet Tech', category: 'Cloud / SaaS', orders: '820', revenue: '$45,800.00', rating: '4.6', sla: '97.4%' },
    { name: 'Swift Express', category: 'IT Support', orders: '510', revenue: '$24,100.00', rating: '4.9', sla: '99.8%' },
    { name: 'Apex Sanitation', category: 'Facility Sanitation', orders: '320', revenue: '$12,900.00', rating: '4.2', sla: '92.5%' }
  ];

  // Generation action
  const handleStatusChange = (key) => {
    setStatuses(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AdminShell
      activeTab="Analytics"
      searchPlaceholder="Search performance analytics..."
      headerTitle="Enterprise Growth Analytics"
    >
      <div className="analytics-reports-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Toggle sub-header: Insights vs Reports */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', paddingBottom: '2px', gap: '16px' }}>
          <button
            onClick={() => setActiveView('insights')}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeView === 'insights' ? '2px solid #4f46e5' : '2px solid transparent',
              padding: '6px 12px',
              color: activeView === 'insights' ? '#4f46e5' : 'var(--muted)',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              outline: 'none'
            }}
            type="button"
          >
            Insights Dashboard
          </button>
          <button
            onClick={() => setActiveView('reports')}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeView === 'reports' ? '2px solid #4f46e5' : '2px solid transparent',
              padding: '6px 12px',
              color: activeView === 'reports' ? '#4f46e5' : 'var(--muted)',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              outline: 'none'
            }}
            type="button"
          >
            Reports Builder
          </button>
        </div>

        {activeView === 'insights' ? (
          /* ================= BUSINESS PERFORMANCE INSIGHTS VIEW (SCREEN 1) ================= */
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ANALYTICS DASHBOARD</span>
                <h1 className="page-title" style={{ margin: '4px 0 0', fontSize: '24px', fontWeight: '800' }}>Business Performance Insights</h1>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ display: 'flex', background: '#f1f5f9', padding: '3px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                  {['7 Days', '30 Days', 'YTD'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeRange(t)}
                      style={{
                        border: 'none',
                        padding: '4px 10px',
                        background: timeRange === t ? '#fff' : 'transparent',
                        color: timeRange === t ? '#0f172a' : 'var(--muted)',
                        borderRadius: '4px',
                        boxShadow: timeRange === t ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
                        cursor: 'pointer',
                        fontWeight: '700',
                        fontSize: '11px'
                      }}
                      type="button"
                    >
                      {t}
                    </button>
                  ))}
                </div>
                
                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '700', height: '32px', padding: '0 12px', borderRadius: '6px' }}
                  onClick={() => downloadDummyPDF('Analytics Export', 'Consolidated System Analytics Performance Ledger.')}
                  type="button"
                >
                  Export Data
                </button>
              </div>
            </div>

            {/* 4 KPI Cards Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              
              {/* Total Revenue */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '130px', position: 'relative' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ height: '30px', width: '30px', borderRadius: '6px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>$</div>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981' }}>↗ +12.5%</span>
                  </div>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '10px', fontWeight: '700' }}>Total Revenue</span>
                  <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', marginTop: '4px' }}>$4,282,190</strong>
                </div>
                {/* Mini bar chart visually sketched at bottom */}
                <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '16px', marginTop: '10px' }}>
                  {[20, 30, 25, 45, 35, 50, 40, 55, 45, 60, 50, 70].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: '#cbd5e1', height: `${h}%`, borderRadius: '1px' }} />
                  ))}
                </div>
              </div>

              {/* Avg Rating */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '130px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ height: '30px', width: '30px', borderRadius: '6px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</div>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981' }}>↗ +0.3</span>
                  </div>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '10px', fontWeight: '700' }}>Avg. Rating</span>
                  <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', marginTop: '4px' }}>4.82</strong>
                </div>
                {/* Yellow stars row */}
                <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginTop: '8px' }}>
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="#f59e0b" color="#f59e0b" />)}
                </div>
              </div>

              {/* New Signups */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '130px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ height: '30px', width: '30px', borderRadius: '6px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981' }}>↗ +22%</span>
                  </div>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '10px', fontWeight: '700' }}>New Sign-ups</span>
                  <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', marginTop: '4px' }}>1,248</strong>
                </div>
                {/* Avatar icons row mockup */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                  <span style={{ height: '16px', width: '16px', borderRadius: '50%', background: '#6366f1', color: '#fff', fontSize: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>JD</span>
                  <span style={{ height: '16px', width: '16px', borderRadius: '50%', background: '#10b981', color: '#fff', fontSize: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>MK</span>
                  <span style={{ height: '16px', width: '16px', borderRadius: '50%', background: '#ec4899', color: '#fff', fontSize: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>AS</span>
                  <span style={{ fontSize: '9px', color: 'var(--muted)', fontWeight: '700' }}>+1.2k</span>
                </div>
              </div>

              {/* Churn Rate */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '130px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ height: '30px', width: '30px', borderRadius: '6px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✖</div>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#ef4444' }}>↘ +1.4%</span>
                  </div>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '10px', fontWeight: '700' }}>Churn Rate</span>
                  <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', marginTop: '4px' }}>2.41%</strong>
                </div>
                {/* Progress bar slider */}
                <div style={{ height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden', marginTop: '10px' }}>
                  <div style={{ width: '24%', height: '100%', background: '#ef4444' }} />
                </div>
              </div>

            </div>

            {/* Layout Grid columns */}
            <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
              
              {/* Left Side: Trends and Performance lists */}
              <div style={{ flex: 1.6, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Revenue vs Bookings Trend Chart Card */}
                <div className="panel" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Revenue vs Bookings Trend</h2>
                    
                    <div style={{ display: 'flex', gap: '14px', fontSize: '11px', fontWeight: '700' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text)' }}>
                        <span style={{ height: '8px', width: '8px', background: '#cbd5e1', borderRadius: '2px' }} />
                        Revenue
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                        <span style={{ height: '8px', width: '8px', background: '#0f172a', borderRadius: '50%' }} />
                        Bookings
                      </span>
                    </div>
                  </div>

                  {/* Chart Viewport: columns + curved path overlay */}
                  <div style={{ height: '160px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '10px 10px 0', borderBottom: '1px solid #e2e8f0', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, top: '33%', height: '1px', background: '#f1f5f9' }} />
                    <div style={{ position: 'absolute', left: 0, right: 0, top: '66%', height: '1px', background: '#f1f5f9' }} />

                    {/* Columns */}
                    {[
                      { day: 'Mon', h: 30 },
                      { day: 'Tue', h: 55 },
                      { day: 'Wed', h: 50 },
                      { day: 'Thu', h: 70 },
                      { day: 'Fri', h: 90 },
                      { day: 'Sat', h: 65 },
                      { day: 'Sun', h: 80 }
                    ].map((col, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 1 }}>
                        <div style={{ width: '40px', height: `${col.h}%`, background: '#c7d2fe', borderRadius: '2px 2px 0 0' }} />
                        <span style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '8px', fontWeight: '700' }}>{col.day}</span>
                      </div>
                    ))}

                    {/* Overlay Curved line SVG */}
                    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }}>
                      <path d="M 40 120 Q 120 70, 200 100 T 360 60 T 520 110 T 600 50" fill="none" stroke="#0f172a" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Top Performing Businesses */}
                <div className="panel" style={{ padding: '20px' }}>
                  <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>Top Performing Businesses</h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '12px', fontWeight: '700' }}>
                    {[
                      { name: 'Vanguard Logistics', value: '$842k', rate: '85%' },
                      { name: 'Lumina Health', value: '$612k', rate: '65%' },
                      { name: 'Neo Bank Int.', value: '$489k', rate: '55%' },
                      { name: 'Green Wave Solar', value: '$312k', rate: '35%' }
                    ].map((row, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ color: 'var(--text)' }}>{row.name}</span>
                          <span style={{ color: 'var(--muted)' }}>{row.value}</span>
                        </div>
                        <div style={{ height: '5px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: row.rate, height: '100%', background: '#4f46e5' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highest Rated Businesses */}
                <div className="panel" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Highest Rated Businesses</h2>
                    <a href="#view-all" onClick={(e) => e.preventDefault()} style={{ color: '#4f46e5', fontWeight: '800', fontSize: '11px', textDecoration: 'none' }}>
                      View All
                    </a>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { name: 'Apex Tech Solutions', desc: 'Enterprise Software', score: '4.98', reviews: '2.4k' },
                      { name: 'Blue Ocean Capital', desc: 'Financial Services', score: '4.95', reviews: '1.8k' },
                      { name: 'Core Systems Ltd', desc: 'IT Consulting', score: '4.91', reviews: '940' }
                    ].map((bus, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 12px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
                        <div style={{ height: '32px', width: '32px', borderRadius: '4px', background: '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>
                          {bus.name.charAt(0)}
                        </div>
                        <div style={{ flex: 1 }}>
                          <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>{bus.name}</strong>
                          <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)' }}>{bus.desc}</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '11px', fontWeight: '700' }}>
                          <span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '2px' }}>★ {bus.score}</span>
                          <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)', marginTop: '2px' }}>{bus.reviews} reviews</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Side: Distribution, Heatmap and branches */}
              <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Revenue Distribution */}
                <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Revenue Distribution</h2>
                  
                  {/* Visual distribution container */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', background: '#f8fafc', padding: '24px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    {/* Ring Dial */}
                    <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="100" height="100" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#4f46e5" strokeWidth="4.5" strokeDasharray="64 100" strokeDashoffset="0" strokeLinecap="round" />
                      </svg>
                      <div style={{ position: 'absolute', textAlign: 'center' }}>
                        <strong style={{ fontSize: '20px', color: 'var(--text)', display: 'block' }}>64%</strong>
                        <span style={{ fontSize: '9px', color: 'var(--muted)', fontWeight: '800' }}>Retail</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', fontSize: '11px', fontWeight: '700' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                          <span style={{ height: '8px', width: '8px', background: '#4f46e5', borderRadius: '50%' }} />
                          Retail & Goods
                        </span>
                        <span style={{ color: 'var(--text)' }}>64%</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                          <span style={{ height: '8px', width: '8px', background: '#1d4ed8', borderRadius: '50%' }} />
                          Services
                        </span>
                        <span style={{ color: 'var(--text)' }}>22%</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                          <span style={{ height: '8px', width: '8px', background: '#bfdbfe', borderRadius: '50%' }} />
                          Hospitality
                        </span>
                        <span style={{ color: 'var(--text)' }}>14%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Heatmap (Colored square grid) */}
                <div className="panel" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Growth Heatmap</h2>
                    <span style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: '800', display: 'flex', gap: '4px', alignItems: 'center' }}>
                      ■ ■ ■ ■ <span style={{ color: 'var(--text)' }}>DENSITY</span>
                    </span>
                  </div>

                  {/* 8 rows x 12 cols square grid */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {Array.from({ length: 8 }).map((_, rIdx) => (
                      <div key={rIdx} style={{ display: 'flex', gap: '4px' }}>
                        {Array.from({ length: 12 }).map((_, cIdx) => {
                          // Skew density shades
                          const opacities = [0.1, 0.2, 0.35, 0.6, 0.8, 0.9, 0.4, 0.2];
                          const op = opacities[(rIdx + cIdx) % opacities.length];
                          return (
                            <div
                              key={cIdx}
                              style={{
                                flex: 1,
                                aspectRatio: '1',
                                background: `rgba(79, 70, 229, ${op})`,
                                borderRadius: '2px'
                              }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Week Labels bottom */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--muted)', fontWeight: '700', marginTop: '10px', padding: '0 4px' }}>
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                  </div>
                </div>

                {/* Most Active Branches */}
                <div className="panel" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Most Active Branches</h2>
                    <button style={{ border: 'none', background: '#f1f5f9', height: '24px', width: '24px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} type="button" aria-label="Sort branches">
                      <Sliders size={12} style={{ color: 'var(--muted)' }} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { name: 'London Flagship', desc: '84 Transactions today', label: 'PEAK', color: '#10b981', bg: '#ecfdf5' },
                      { name: 'New York Hub', desc: '72 Transactions today', label: 'STABLE', color: '#b45309', bg: '#fef3c7' },
                      { name: 'Singapore East', desc: '61 Transactions today', label: 'GROWTH', color: '#059669', bg: '#ecfdf5' }
                    ].map((br, idx) => (
                      <div key={idx} style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <div style={{ height: '30px', width: '30px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
                            <MapPin size={14} />
                          </div>
                          <div>
                            <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>{br.name}</strong>
                            <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)' }}>{br.desc}</span>
                          </div>
                        </div>

                        <span style={{ fontSize: '8px', fontWeight: '900', color: br.color, background: br.bg, padding: '2px 6px', borderRadius: '3px' }}>
                          {br.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </>
        ) : (
          /* ================= SERVICE REPORTS CONSOLE VIEW (SCREEN 4) ================= */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Page Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>OPERATIONAL INSIGHTS</span>
                <h1 style={{ margin: '4px 0 0', fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>Service Reports</h1>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    color: 'var(--text)',
                    fontSize: '12px',
                    fontWeight: '700',
                    height: '34px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  onClick={() => alert('Selecting date range...')}
                  type="button"
                >
                  <Calendar size={14} style={{ color: 'var(--muted)' }} />
                  <span>Last 30 Days</span>
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: 'none',
                    background: '#0f172a',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: '700',
                    height: '34px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  onClick={() => alert('Generating operational reports')}
                  type="button"
                >
                  <Download size={14} />
                  <span>Generate Report</span>
                </button>
              </div>
            </div>

            {/* 3 KPI Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              
              {/* Card 1: Service Revenue */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', background: 'white', border: '1px solid var(--line)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service Revenue</span>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: '#10b981', background: '#e6f4ea', padding: '2px 6px', borderRadius: '4px' }}>+12.4%</span>
                </div>
                <strong style={{ fontSize: '28px', color: 'var(--text)', margin: '8px 0 0', fontWeight: '800' }}>$842,910</strong>
                
                {/* Wavy blue sparkline SVG */}
                <div style={{ height: '35px', marginTop: '10px' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <path d="M 0 30 Q 20 10, 40 25 T 80 15 T 120 32 T 160 12 T 200 22" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '8px', display: 'block' }}>vs $750k last mo.</span>
              </div>

              {/* Card 2: Customer Rating */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', background: 'white', border: '1px solid var(--line)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer Rating</span>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: '#10b981', background: '#e6f4ea', padding: '2px 6px', borderRadius: '4px' }}>+2.1%</span>
                </div>
                <strong style={{ fontSize: '28px', color: 'var(--text)', margin: '8px 0 0', fontWeight: '800' }}>4.82<span style={{ fontSize: '14px', fontWeight: 'normal', color: 'var(--muted)' }}>/5</span></strong>
                
                {/* Rising yellow sparkline SVG */}
                <div style={{ height: '35px', marginTop: '10px' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <path d="M 0 35 Q 25 30, 50 15 T 100 22 T 150 10 T 200 5" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '8px', display: 'block' }}>2,491 reviews</span>
              </div>

              {/* Card 3: Risk Alerts */}
              <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', background: 'white', border: '1px solid var(--line)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Risk Alerts</span>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: '#ef4444', background: '#fce8e6', padding: '2px 6px', borderRadius: '4px' }}>-8%</span>
                </div>
                <strong style={{ fontSize: '28px', color: 'var(--text)', margin: '8px 0 0', fontWeight: '800' }}>14</strong>
                
                {/* Falling red sparkline SVG */}
                <div style={{ height: '35px', marginTop: '10px' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <path d="M 0 10 Q 25 15, 50 35 T 100 20 T 150 38 T 200 40" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '8px', display: 'block' }}>6 high priority</span>
              </div>

            </div>

            {/* Main Section: Consolidated Export Center & Auto-Scheduling */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px', alignItems: 'start' }}>
              
              {/* Consolidated Export Center (Left) */}
              <div className="panel" style={{ padding: '20px', background: 'white', border: '1px solid var(--line)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Consolidated Export Center</h2>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Recent system-generated and custom reports.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} type="button" aria-label="Filter exports">
                      <Sliders size={14} />
                    </button>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} type="button" aria-label="Search exports">
                      <Search size={14} />
                    </button>
                  </div>
                </div>

                <div className="table-wrap">
                  <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="approval-queue-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '10px 8px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Report Name</th>
                        <th style={{ padding: '10px 8px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Type</th>
                        <th style={{ padding: '10px 8px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Date</th>
                        <th style={{ padding: '10px 8px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={15} style={{ color: '#25108f' }} />
                            <strong style={{ color: 'var(--text)' }}>Q3_Revenue_Analysis_Final</strong>
                          </div>
                        </td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>Financial</td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>2023-10-24</td>
                        <td style={{ padding: '12px 8px' }}>
                          <span style={{ fontSize: '9px', fontWeight: '800', background: '#e6f4ea', color: '#137333', padding: '3px 8px', borderRadius: '4px' }}>VERIFIED</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Sliders size={15} style={{ color: '#25108f' }} />
                            <strong style={{ color: 'var(--text)' }}>Resource_Allocation_Oct23</strong>
                          </div>
                        </td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>Operations</td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>2023-10-22</td>
                        <td style={{ padding: '12px 8px' }}>
                          <span style={{ fontSize: '9px', fontWeight: '800', background: '#fef7e0', color: '#b06000', padding: '3px 8px', borderRadius: '4px' }}>PENDING</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={15} style={{ color: '#25108f' }} />
                            <strong style={{ color: 'var(--text)' }}>Safety_Compliance_Audit_A1</strong>
                          </div>
                        </td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>Risk</td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>2023-10-20</td>
                        <td style={{ padding: '12px 8px' }}>
                          <span style={{ fontSize: '9px', fontWeight: '800', background: '#e6f4ea', color: '#137333', padding: '3px 8px', borderRadius: '4px' }}>VERIFIED</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: 'none' }}>
                        <td style={{ padding: '12px 8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ShieldAlert size={15} style={{ color: '#ef4444' }} />
                            <strong style={{ color: 'var(--text)' }}>Risk_Incident_Log_2401</strong>
                          </div>
                        </td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>Risk</td>
                        <td style={{ padding: '12px 8px', color: 'var(--muted)', fontWeight: '600' }}>2023-10-18</td>
                        <td style={{ padding: '12px 8px' }}>
                          <span style={{ fontSize: '9px', fontWeight: '800', background: '#fce8e6', color: '#ea4335', padding: '3px 8px', borderRadius: '4px' }}>HIGH RISK</span>
                        </td>
                      </tr>
                    </tbody>
                  </table></div>
                </div>

                <div style={{ borderTop: '1px solid var(--line)', textAlign: 'center', padding: '12px 0 0', marginTop: '12px' }}>
                  <button
                    onClick={() => alert('Viewing all 152 reports')}
                    style={{ border: 'none', background: 'transparent', color: '#25108f', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
                    type="button"
                  >
                    View All 152 Reports
                  </button>
                </div>
              </div>

              {/* Auto-Scheduling Card (Right) */}
              <div style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: '#a78bfa' }} />
                  <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#a78bfa' }}>Auto-Scheduling</span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>Next Scheduled Report</span>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'white', marginBottom: '8px' }}>Executive Weekly Pulse</strong>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '11px', color: '#cbd5e1' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} />
                        Every Monday
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        08:00 AM
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                  
                  {/* Email Digest Toggle */}
                  <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#cbd5e1' }}>Email Digest</span>
                    <button
                      onClick={() => setEmailDigest(!emailDigest)}
                      style={{
                        width: '34px',
                        height: '20px',
                        borderRadius: '10px',
                        background: emailDigest ? '#10b981' : '#cbd5e1',
                        border: 'none',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                      type="button"
                      aria-label="Email digest toggle"
                    >
                      <div style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: 'white',
                        position: 'absolute',
                        top: '3px',
                        left: emailDigest ? '17px' : '3px',
                        transition: 'left 0.2s'
                      }} />
                    </button>
                  </div>

                  {/* S3 Cloud Sync Toggle */}
                  <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#cbd5e1' }}>S3 Cloud Sync</span>
                    <button
                      onClick={() => setS3Sync(!s3Sync)}
                      style={{
                        width: '34px',
                        height: '20px',
                        borderRadius: '10px',
                        background: s3Sync ? '#10b981' : '#475569',
                        border: 'none',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                      type="button"
                      aria-label="S3 sync toggle"
                    >
                      <div style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: 'white',
                        position: 'absolute',
                        top: '3px',
                        left: s3Sync ? '17px' : '3px',
                        transition: 'left 0.2s'
                      }} />
                    </button>
                  </div>

                </div>

                <button
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#25108f',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer',
                    marginTop: '8px',
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => alert('Manage automation rules console')}
                  type="button"
                >
                  Manage Automation Rules
                </button>

                {/* Footer Info Box */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: '6px',
                  padding: '10px',
                  fontSize: '11px',
                  color: '#fbbf24',
                  lineHeight: '1.4',
                  marginTop: '4px'
                }}>
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>4 scheduled tasks are running today. Last successful run: 10:04 AM GMT.</span>
                </div>
              </div>

            </div>

            {/* Bottom Section: Health Insights & Proactive monitoring */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px', alignItems: 'stretch' }}>
              
              {/* System Health (Left) */}
              <div style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=180&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                padding: '24px',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '180px'
              }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'white', margin: 0 }}>System Health & Latency Insights</h3>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '6px 0 0', lineHeight: '1.5', maxWidth: '480px' }}>
                    Monitor real-time infrastructure performance across all service regions. Optimized for low-latency decision making.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 16px', borderRadius: '8px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Uptime</span>
                    <strong style={{ fontSize: '16px', color: '#10b981', fontWeight: '800' }}>99.98%</strong>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 16px', borderRadius: '8px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Response</span>
                    <strong style={{ fontSize: '16px', color: '#3b82f6', fontWeight: '800' }}>124ms</strong>
                  </div>
                </div>
              </div>

              {/* Proactive Monitoring (Right) */}
              <div className="panel" style={{ padding: '20px', background: 'white', border: '1px solid var(--line)', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: '#eff6ff',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}>
                    <Zap size={16} />
                  </div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>
                    Proactive Monitoring
                  </strong>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>
                    Proactive threat detection and resource optimization at the edge.
                  </p>
                </div>

                <button
                  onClick={() => alert('Activating Monitoring...')}

                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#25108f',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    marginTop: '16px'
                  }}
                  type="button"
                >
                  Enable Monitoring
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </AdminShell>
  );
}
