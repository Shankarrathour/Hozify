import React, { useState } from 'react';
import {
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Minus,
  Sliders,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Plus,
  LayoutGrid,
  FileText,
  Inbox,
  CalendarCheck,
  Settings,
  HelpCircle
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function SupplierPerformance() {
  const { navigate } = useApp();
  const [selectedTab, setSelectedTab] = useState('Suppliers');

  // Sidebar items matching the mockup exactly
  const sidebarItems = [
    { label: 'Dashboard', route: ROUTES.dashboard, icon: LayoutGrid },
    { label: 'Material Requests', route: ROUTES.materialRequests, icon: FileText },
    { label: 'Approval Queue', route: ROUTES.materialApprovals, icon: CalendarCheck },
    { label: 'Inventory', route: ROUTES.materialInventory, icon: Inbox },
    { label: 'Suppliers', route: ROUTES.materialSupplierPerformance, icon: Inbox },
    { label: 'Cost Analysis', route: ROUTES.materialCostOptimization, icon: TrendingUp }
  ];

  const sidebarBtn = (
    <button
      onClick={() => navigate(ROUTES.materialCreate)}
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
      <span>New Request</span>
    </button>
  );

  return (
    <AdminShell
      activeTab="Material Management"
      brandText="Hozify Procurement"
      brandSubText="Executive Command"
      headerTitle="Procurement Portal"
      searchPlaceholder="Search suppliers..."
      headerTabs={
        <div style={{ display: 'flex', gap: '20px', height: '100%', alignItems: 'center' }}>
          {['Analytics', 'Suppliers', 'Reports'].map((tab) => {
            const isActive = tab === selectedTab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: isActive ? '#25108f' : '#565365',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '13px',
                  cursor: 'pointer',
                  padding: '8px 0',
                  borderBottom: isActive ? '2px solid #25108f' : '2px solid transparent',
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* H1 Overview bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Supplier Performance Overview
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
              Real-time tracking of vendor reliability, quality metrics, and cost efficiency across the global supply chain.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', padding: '8px 12px', fontSize: '13px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
              <Calendar size={15} style={{ color: 'var(--muted)' }} />
              <span>Last 30 Days</span>
            </div>
            <button
              onClick={() => alert('Exporting data...')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: '#0b1329', color: '#fff', borderRadius: '6px', padding: '8px 16px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#1e293b')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#0b1329')}
            >
              <Download size={15} />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* 4 KPI Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          
          {/* Card 1: On-time delivery */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>On-Time Delivery</span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>+2.4%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>94.2%</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,20 L 10,18 L 20,22 L 30,15 L 40,19 L 50,12 L 60,14 L 70,8 L 80,4" fill="none" stroke="#25108f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="4" r="2.5" fill="#25108f" />
              </svg>
            </div>
          </div>

          {/* Card 2: Quality Rating */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quality Rating</span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>+1.1%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>98.7%</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,12 L 10,12 L 20,13 L 30,12 L 40,11 L 50,12 L 60,11 L 70,10 L 80,9" fill="none" stroke="#25108f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="9" r="2.5" fill="#25108f" />
              </svg>
            </div>
          </div>

          {/* Card 3: Cost Variance */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cost Variance</span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#d32929', background: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>-0.8%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>$4.2M</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,4 L 10,6 L 20,8 L 30,7 L 40,10 L 50,11 L 60,13 L 70,14 L 80,16" fill="none" stroke="#25108f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="16" r="2.5" fill="#25108f" />
              </svg>
            </div>
          </div>

          {/* Card 4: Supply Risk */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Supply Risk</span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>Stable</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <strong style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>Low</strong>
              {/* Sparkline */}
              <svg width="80" height="24" viewBox="0 0 80 24" style={{ overflow: 'visible' }}>
                <path d="M 0,20 L 80,20" fill="none" stroke="#25108f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="20" r="2.5" fill="#25108f" />
              </svg>
            </div>
          </div>

        </div>

        {/* Trends & Top Performers Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* Performance Trends Line Graph */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Performance Trends</h2>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#25108f' }} />
                  <span>Delivery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#a5b4fc' }} />
                  <span>Quality</span>
                </div>
              </div>
            </div>
            
            {/* SVG Interactive Double Line Chart */}
            <div style={{ flex: 1, minHeight: '260px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 500 220" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1="0" y1={44 * i + 10} x2="500" y2={44 * i + 10} stroke="#eee9f6" strokeWidth="1" strokeDasharray="3,3" />
                  ))}
                  
                  {/* Area fill for Quality (indigo light) */}
                  <path d="M 0,220 L 0,110 L 100,105 L 200,95 L 300,80 L 400,90 L 500,75 L 500,220 Z" fill="rgba(165,180,252,0.15)" />
                  {/* Area fill for Delivery (primary dark) */}
                  <path d="M 0,220 L 0,140 L 100,120 L 200,130 L 300,100 L 400,110 L 500,90 L 500,220 Z" fill="rgba(37,16,143,0.06)" />

                  {/* Delivery Curve (Dark Purple) */}
                  <path d="M 0,140 Q 50,115 100,120 T 200,130 T 300,100 T 400,110 T 500,90" fill="none" stroke="#25108f" strokeWidth="2.5" />
                  {/* Quality Curve (Light Blue) */}
                  <path d="M 0,110 Q 50,100 100,105 T 200,95 T 300,80 T 400,90 T 500,75" fill="none" stroke="#a5b4fc" strokeWidth="2.5" />

                  {/* Dots for June */}
                  <circle cx="500" cy="90" r="4" fill="#25108f" />
                  <circle cx="500" cy="75" r="4" fill="#a5b4fc" />
                </svg>
              </div>
              
              {/* X Axis Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '8px', paddingRight: '8px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Top Performers Card */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Top Performers</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              
              {/* Performer 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', background: '#f4eff8', borderRadius: '8px' }}>
                <div style={{ height: '36px', width: '36px', background: '#0b1329', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '15px' }}>
                  1
                </div>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Global Logistics Inc.</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>99.2 Rating</span>
                </div>
                <ArrowUpRight size={18} style={{ color: '#07956f' }} />
              </div>

              {/* Performer 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', border: '1px solid var(--line)', borderRadius: '8px' }}>
                <div style={{ height: '36px', width: '36px', background: '#f1f5f9', color: '#565365', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '15px', border: '1px solid var(--line)' }}>
                  2
                </div>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Precision Parts Co.</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>97.8 Rating</span>
                </div>
                <Minus size={18} style={{ color: 'var(--muted)' }} />
              </div>

              {/* Performer 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', border: '1px solid var(--line)', borderRadius: '8px' }}>
                <div style={{ height: '36px', width: '36px', background: '#f1f5f9', color: '#565365', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '15px', border: '1px solid var(--line)' }}>
                  3
                </div>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Apex Materials Ltd.</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>95.1 Rating</span>
                </div>
                <TrendingDown size={18} style={{ color: '#d32929' }} />
              </div>

            </div>

            <button
              onClick={() => alert('Viewing all rankings...')}
              style={{ background: 'transparent', border: 'none', color: '#25108f', fontWeight: '800', fontSize: '13px', cursor: 'pointer', textAlign: 'center', outline: 'none' }}
            >
              View All Rankings
            </button>
          </div>

        </div>

        {/* Detailed Performance Audit Table */}
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Detailed Performance Audit</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ height: '34px', width: '34px', background: '#fff', border: '1px solid var(--line)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text)' }} onClick={() => alert('Filter options')}>
                <Sliders size={16} />
              </button>
              <button style={{ height: '34px', width: '34px', background: '#fff', border: '1px solid var(--line)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text)' }} onClick={() => alert('Download audit')}>
                <Download size={16} />
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ border: 'none' }}>
              <thead>
                <tr style={{ background: '#f4eff8' }}>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'left', borderRadius: '6px 0 0 6px' }}>SUPPLIER NAME</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'center' }}>ON-TIME %</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'center' }}>DEFECT RATE</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'center' }}>COST INDEX</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textAlign: 'center', borderRadius: '0 6px 6px 0' }}>RATING</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Global Logistics Inc.', id: 'SUP-48291', onTime: '99.8%', onTimeColor: '#07956f', defect: '0.02%', costIdx: '1.02', status: 'PREFERRED', statusBg: '#ecfdf5', statusColor: '#07956f' },
                  { name: 'Precision Parts Co.', id: 'SUP-22104', onTime: '92.5%', onTimeColor: 'var(--text)', defect: '0.15%', costIdx: '0.95', status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#07956f' },
                  { name: 'Apex Materials Ltd.', id: 'SUP-11829', onTime: '84.2%', onTimeColor: '#b45309', defect: '2.1%', defectColor: '#d32929', costIdx: '1.45', status: 'WATCHLIST', statusBg: '#fffbeb', statusColor: '#b45309' },
                  { name: 'Zenith Solutions', id: 'SUP-94832', onTime: '96.1%', onTimeColor: 'var(--text)', defect: '0.05%', costIdx: '1.10', status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#07956f' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee9f6' }}>
                    <td style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ height: '32px', width: '32px', borderRadius: '6px', background: '#f4eff8', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '11px' }}>
                        {row.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.name}</strong>
                        <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>ID: {row.id}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', fontSize: '13px', fontWeight: '800', textAlign: 'center', color: row.onTimeColor }}>{row.onTime}</td>
                    <td style={{ padding: '16px', fontSize: '13px', fontWeight: '700', textAlign: 'center', color: row.defectColor || 'var(--text)' }}>{row.defect}</td>
                    <td style={{ padding: '16px', fontSize: '13px', fontWeight: '700', textAlign: 'center' }}>{row.costIdx}</td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <span style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '0.5px', background: row.statusBg, color: row.statusColor, padding: '3px 8px', borderRadius: '4px' }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>

          {/* Table Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '700' }}>Showing 4 of 212 suppliers</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ height: '34px', padding: '0 14px', border: '1px solid var(--line)', background: '#fff', color: 'var(--muted)', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'not-allowed' }} disabled>
                Previous
              </button>
              <button style={{ height: '34px', padding: '0 14px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }} onClick={() => alert('Next page')}>
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
      
      {/* System Status footer matching Screen 1 exactly */}
      <footer style={{ borderTop: '1px solid var(--line)', padding: '16px 0', marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        <div>
          SYSTEM STATUS: <span style={{ color: '#07956f' }}>NOMINAL</span> | ALL NODES SYNCING
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#audit" onClick={(e) => e.preventDefault()} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Audit Logs</a>
        </div>
      </footer>
    </AdminShell>
  );
}
