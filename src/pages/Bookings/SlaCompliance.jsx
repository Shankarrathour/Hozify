import React, { useState } from 'react';
import {
  Calendar,
  Download,
  CheckCircle,
  AlertCircle,
  Sliders,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  LayoutGrid,
  ClipboardList,
  Briefcase,
  Users,
  BarChart3,
  Settings,
  Plus,
  Clock
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function SlaCompliance() {
  const { navigate } = useApp();
  const [timeFilter, setTimeFilter] = useState('24h');
  const [logTab, setLogTab] = useState('All');

  // Custom Service Management sidebar items
  const sidebarItems = [
    { label: 'Command Center', route: ROUTES.bookingSla, icon: LayoutGrid },
    { label: 'Service Catalog', route: '#', icon: ClipboardList },
    { label: 'Work orders', route: '#', icon: Briefcase },
    { label: 'Resources', route: '#', icon: Users },
    { label: 'Analytics', route: '#', icon: BarChart3 },
    { label: 'Settings', route: '#', icon: Settings }
  ];

  const sidebarBtn = (
    <button
      onClick={() => alert('New Service Creation dialog')}
      style={{
        width: '100%',
        background: '#25108f',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        padding: '12px',
        fontSize: '13px',
        fontWeight: '700',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 4px 12px rgba(37, 16, 143, 0.15)',
        transition: 'all 0.2s'
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
    >
      <Plus size={16} />
      <span>New Service</span>
    </button>
  );

  return (
    <AdminShell
      activeTab="Booking Management"
      brandText="Hozify"
      brandSubText="EXECUTIVE COMMAND"
      headerTitle="Service Management"
      searchPlaceholder="Search SLA metrics..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title & Filter Pills Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              SLA Compliance Oversight
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
              Real-time performance auditing across all active service contracts.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Time Filter Pills */}
            <div style={{ display: 'flex', background: '#f4eff8', borderRadius: '6px', padding: '4px' }}>
              {[
                { id: '24h', label: 'Last 24h' },
                { id: '7d', label: '7 Days' },
                { id: '30d', label: '30 Days' }
              ].map((pill) => {
                const isActive = timeFilter === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setTimeFilter(pill.id)}
                    style={{
                      height: '30px',
                      padding: '0 14px',
                      border: 'none',
                      borderRadius: '4px',
                      background: isActive ? '#fff' : 'transparent',
                      color: isActive ? '#25108f' : 'var(--muted)',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
            
            {/* Export button */}
            <button
              onClick={() => alert('Exporting SLA audit report...')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: '#0b1329', color: '#fff', borderRadius: '6px', padding: '8px 16px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#1e293b')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#0b1329')}
            >
              <Download size={15} />
              <span>Export Audit</span>
            </button>
          </div>
        </div>

        {/* 3 KPI Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          
          {/* Card 1: Within SLA */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                <CheckCircle size={14} style={{ color: '#07956f' }} />
                <span>Within SLA %</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>+2.4%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>96.8%</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,20 L 20,18 L 40,22 L 60,14 L 80,4" fill="none" stroke="#07956f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="4" r="2.5" fill="#07956f" />
              </svg>
            </div>
          </div>

          {/* Card 2: Outside SLA */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                <Clock size={14} style={{ color: '#b45309' }} />
                <span>Outside SLA %</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#b45309', background: '#fffbeb', padding: '2px 6px', borderRadius: '4px' }}>+0.8%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>3.2%</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,16 L 20,17 L 40,15 L 60,19 L 80,10" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="10" r="2.5" fill="#b45309" />
              </svg>
            </div>
          </div>

          {/* Card 3: Critical Violations */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                <AlertCircle size={14} style={{ color: '#d32929' }} />
                <span>Critical Violations</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>-12%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>14</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,6 L 20,8 L 40,5 L 60,11 L 80,18" fill="none" stroke="#d32929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="18" r="2.5" fill="#d32929" />
              </svg>
            </div>
          </div>

        </div>

        {/* Response & Completion Trends */}
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Response & Completion Trends</h2>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#25108f' }} />
                <span>Response Time</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#a5b4fc' }} />
                <span>Completion Time</span>
              </div>
            </div>
          </div>

          {/* SVG overlapping bar chart */}
          <div style={{ width: '100%', height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 20px', position: 'relative' }}>
            {/* Background grid lines */}
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{ borderTop: '1px solid #eee9f6', width: '100%', height: '1px' }} />
              ))}
            </div>

            {/* Overlapping bar elements */}
            {[
              { label: 'Jan', resp: 40, comp: 70 },
              { label: 'Feb', resp: 48, comp: 80 },
              { label: 'Mar', resp: 55, comp: 95 },
              { label: 'Apr', resp: 30, comp: 60 },
              { label: 'May', resp: 50, comp: 85 },
              { label: 'Jun', resp: 65, comp: 90 }
            ].map((bar, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '60px', zIndex: 2 }}>
                <div style={{ width: '38px', height: '120px', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                  {/* Completion Time bar (light blue) */}
                  <div style={{ width: '100%', height: `${bar.comp}%`, background: '#cbd5e1', borderRadius: '4px 4px 0 0', position: 'absolute', bottom: 0 }} />
                  {/* Response Time bar (dark blue) */}
                  <div style={{ width: '100%', height: `${bar.resp}%`, background: '#25108f', borderRadius: '4px 4px 0 0', position: 'absolute', bottom: 0 }} />
                </div>
                <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Audit Log */}
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Booking Audit Log</h2>
            
            {/* Table Tabs */}
            <div style={{ display: 'flex', background: '#f4eff8', borderRadius: '6px', padding: '4px' }}>
              {['All', 'Breached', 'At Risk'].map((tab) => {
                const isActive = logTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setLogTab(tab)}
                    style={{
                      height: '28px',
                      padding: '0 12px',
                      border: 'none',
                      borderRadius: '4px',
                      background: isActive ? '#fff' : 'transparent',
                      color: isActive ? '#25108f' : 'var(--muted)',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Audit Log Table */}
          <div className="table-wrap">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ border: 'none' }}>
              <thead>
                <tr style={{ background: '#f4eff8' }}>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'left', borderRadius: '6px 0 0 6px' }}>Booking ID</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)' }}>Client</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'center' }}>r LA r tatus</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'center' }}>Time to Breach</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'right', borderRadius: '0 6px 6px 0' }}>Escalation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#BK-9402', client: 'Nexus Kinetics', clientInit: 'NK', status: 'COMPLIANT', statusColor: '#07956f', statusBg: '#ecfdf5', time: '2h 15m', timeColor: 'var(--text)', escalation: 'Level 0 (None)', escColor: 'var(--text)' },
                  { id: '#BK-8821', client: 'Stellar Venture', clientInit: 'SV', status: 'AT RISK', statusColor: '#b45309', statusBg: '#fffbeb', time: '12m 40s', timeColor: '#b45309', escalation: 'Level 1 (Warning)', escColor: 'var(--text)' },
                  { id: '#BK-8109', client: 'Quantum Labs', clientInit: 'QL', status: 'BREACHED', statusColor: '#d32929', statusBg: '#fee2e2', time: 'Lapsed (-45m)', timeColor: '#d32929', escalation: 'Level 3 (Critical)', escColor: '#d32929' },
                  { id: '#BK-7754', client: 'Apex Systems', clientInit: 'AS', status: 'COMPLIANT', statusColor: '#07956f', statusBg: '#ecfdf5', time: '4h 50m', timeColor: 'var(--text)', escalation: 'Level 0 (None)', escColor: 'var(--text)' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee9f6' }}>
                    <td style={{ padding: '16px', fontSize: '13px', fontWeight: '800', color: '#25108f', textAlign: 'left' }}>
                      <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate(ROUTES.bookingCancellation)}>{row.id}</span>
                    </td>
                    <td style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#eee9f6', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '10px' }}>
                        {row.clientInit}
                      </div>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>{row.client}</strong>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <span style={{ fontSize: '9px', fontWeight: '950', letterSpacing: '0.5px', background: row.statusBg, color: row.statusColor, padding: '3px 8px', borderRadius: '4px' }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '12px', fontWeight: '700', color: row.timeColor, textAlign: 'center' }}>{row.time}</td>
                    <td style={{ padding: '16px', fontSize: '12px', fontWeight: '750', color: row.escColor, textAlign: 'right' }}>{row.escalation}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>

          {/* Table Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '700' }}>Showing 4 of 282 active bookings</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ height: '34px', padding: '0 14px', border: '1px solid var(--line)', background: '#fff', color: 'var(--muted)', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'not-allowed' }} disabled>
                <ChevronLeft size={16} />
              </button>
              <button style={{ height: '34px', padding: '0 14px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }} onClick={() => alert('Next bookings')}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2 Bottom Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          {/* Card 1: Operational Efficiency */}
          <div className="panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ height: '64px', width: '64px', border: '4px solid #25108f', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <strong style={{ fontSize: '20px', color: '#25108f' }}>82%</strong>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Operational Efficiency</strong>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '6px 0 0', lineHeight: '1.4' }}>
                Resource allocation is currently optimized for Tier-1 SLAs. Tier-3 response times have improved by 14% this period.
              </p>
            </div>
          </div>

          {/* Card 2: Peak Breach Risk */}
          <div className="panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ height: '64px', width: '64px', border: '4px solid #d32929', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <strong style={{ fontSize: '20px', color: '#d32929' }}>12%</strong>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Peak Breach Risk</strong>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '6px 0 0', lineHeight: '1.4' }}>
                High volume detected in Central Hub. Suggesting reallocation of 3 mobile units to mitigate potential SLA breaches.
              </p>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}
