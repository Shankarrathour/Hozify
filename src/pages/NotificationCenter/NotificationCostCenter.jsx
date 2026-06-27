import React, { useState } from 'react';
import { 
  Calendar, 
  Download, 
  ShoppingCart, 
  ShieldCheck, 
  Mail, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  SlidersHorizontal,
  ChevronRight,
  TrendingUp as TrendIcon,
  Sliders,
  DollarSign
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function NotificationCostCenter({ activeTab = 'Notification Center' }) {
  const [dateRange, setDateRange] = useState('Oct 01 - Oct 31, 2023');

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise SaaS"
      headerTitle="Notification Cost Center"
      searchPlaceholder="Search cost reports..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>MODULE 18 • SCREEN 24 • FISCAL Q3 MONITORING</span>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: '4px 0 0' }}>
              Notification Cost Center
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', padding: '6px 12px', borderRadius: '6px' }}>
              <Calendar size={14} style={{ color: 'var(--muted)' }} />
              <span style={{ fontWeight: '700', fontSize: '12.5px', color: 'var(--text)', cursor: 'pointer' }} onClick={() => alert('Selecting date range...')}>
                {dateRange}
              </span>
            </div>

            <button
              onClick={() => alert('Exporting cost report...')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '700',
                height: '38px',
                padding: '0 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(37, 16, 143, 0.08)',
                transition: 'all 0.15s ease'
              }}
              type="button"
            >
              <Download size={14} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Spend Metrics Limit Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          {/* Card 1: SMS Spend */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>SMS Spend</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#dc2626', background: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>+4.2%</span>
            </div>
            <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>$12,482.00</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '78%', height: '100%', background: 'var(--primary)' }} />
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--muted)', fontWeight: '500' }}>78% of monthly limit</span>
            </div>
          </div>

          {/* Card 2: WhatsApp Spend */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>WhatsApp Spend</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#059669', background: '#d1fae5', padding: '2px 6px', borderRadius: '4px' }}>-2.1%</span>
            </div>
            <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>$8,120.45</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '45%', height: '100%', background: '#059669' }} />
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--muted)', fontWeight: '500' }}>45% of monthly limit</span>
            </div>
          </div>

          {/* Card 3: Email Spend */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Email Spend</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#059669', background: '#d1fae5', padding: '2px 6px', borderRadius: '4px' }}>-12.5%</span>
            </div>
            <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>$2,840.10</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '12%', height: '100%', background: '#059669' }} />
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--muted)', fontWeight: '500' }}>12% of monthly limit</span>
            </div>
          </div>

          {/* Card 4: Push Spend */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Push Spend</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: 'var(--muted)', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>Stable</span>
            </div>
            <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>$1,450.00</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '28%', height: '100%', background: '#9ca3af' }} />
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--muted)', fontWeight: '500' }}>28% of monthly limit</span>
            </div>
          </div>

        </div>

        {/* Row 2: Spend vs Budget Line Chart & Insights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Spend vs Budget Chart */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Total Spend vs. Budget
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '4px' }}>
                  Real-time projection for current fiscal month
                </span>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: '12px', fontSize: '11px', fontWeight: '750' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text)' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
                  Actual Spend
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--muted)' }}>
                  <span style={{ height: '0px', width: '12px', borderBottom: '2px dashed var(--line)' }} />
                  Budget Limit
                </span>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div style={{ height: '200px', position: 'relative', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'flex-end', marginTop: '24px' }}>
              
              {/* Tooltip bubble */}
              <div style={{
                position: 'absolute',
                top: '55px',
                left: '60%',
                background: 'var(--primary)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                zIndex: 10
              }}>
                Current: $24,892
                {/* bubble pointer arrow */}
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  marginLeft: '-4px',
                  width: 0,
                  height: 0,
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '4px solid var(--primary)'
                }} />
              </div>

              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none" style={{ overflow: 'visible', zIndex: 1 }}>
                {/* Dashed budget limit line */}
                <line x1="0" y1="90" x2="500" y2="90" stroke="var(--line)" strokeWidth="2" strokeDasharray="5 5" />
                
                {/* Actual Spend Line */}
                <path d="M 0 120 C 100 110, 200 95, 300 75 S 400 50, 500 45" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
                
                {/* Tooltip focus point */}
                <circle cx="320" cy="71" r="5" fill="var(--primary)" stroke="#fff" strokeWidth="2" />
              </svg>

              {/* X Axis Labels */}
              <div style={{
                position: 'absolute',
                bottom: '-24px',
                left: 0, right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: 'var(--muted)',
                fontWeight: '750'
              }}>
                <span>Oct 01</span>
                <span>Oct 08</span>
                <span>Oct 15</span>
                <span style={{ color: 'var(--primary)', fontWeight: '850' }}>Today</span>
                <span>Oct 26</span>
                <span>Oct 31</span>
              </div>
            </div>

          </div>

          {/* Cost Efficiency Insight Card */}
          <div className="panel" style={{ 
            background: 'linear-gradient(135deg, #0f0a40 0%, #1e106b 100%)', 
            color: '#fff', 
            padding: '24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            borderRadius: '12px'
          }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontWeight: '900', color: '#c0b4fc', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Cost Efficiency Insight
              </span>
              <Sparkles size={16} style={{ color: '#a78bfa' }} />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontSize: '13px', color: '#fff', margin: 0, fontWeight: '700', lineHeight: 1.4 }}>
                SMS costs are trending 12% higher than forecast due to a regional price adjustment in EMEA.
              </p>
              <p style={{ fontSize: '12.5px', color: '#cbd5e1', margin: 0, lineHeight: 1.4 }}>
                We recommend shifting non-urgent transactional alerts to WhatsApp to save an estimated $1.2k/month.
              </p>
            </div>

            <button
              onClick={() => alert('Running cost optimization simulation...')}
              style={{
                border: 'none',
                background: '#818cf8',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '750',
                height: '38px',
                borderRadius: '6px',
                width: '100%',
                cursor: 'pointer',
                marginTop: '12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Run Optimization Simulation
            </button>
          </div>

        </div>

        {/* Row 3: Campaign Efficiency Drivers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'start' }}>
          
          {/* Efficiency Drivers List */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
              Campaign Efficiency Drivers
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Row 1 */}
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--lavender)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ height: '32px', width: '32px', borderRadius: '50%', background: '#f4eff8', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShoppingCart size={15} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Checkout Recovery SMS</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>84,200 Deliveries</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>$4,210.00</strong>
                  <span style={{ fontSize: '10px', fontWeight: '850', color: '#137333', background: '#e6f4ea', padding: '3px 8px', borderRadius: '4px' }}>
                    ROI 4.2x
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--lavender)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ height: '32px', width: '32px', borderRadius: '50%', background: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={15} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Two-Factor Auth (WhatsApp)</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>156,000 Deliveries</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>$3,120.00</strong>
                  <span style={{ fontSize: '10px', fontWeight: '850', color: 'var(--muted)', background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>
                    System Essential
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ height: '32px', width: '32px', borderRadius: '50%', background: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={15} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Delivery Notifications (Email)</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>1.2M Deliveries</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>$942.50</strong>
                  <span style={{ fontSize: '10px', fontWeight: '850', color: 'var(--muted)', background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>
                    High Volume
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Automated Cost Ceiling Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #090f1d 0%, #17243c 100%)', 
          borderRadius: '12px', 
          padding: '36px 24px', 
          position: 'relative', 
          overflow: 'hidden', 
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          color: '#fff',
          marginTop: '8px'
        }}>
          {/* Backdrop sketch */}
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', opacity: 0.15, zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none">
              <path d="M 10 140 H 190 M 10 110 H 190 M 10 80 H 190 M 30 140 V 40 M 70 140 V 20 M 110 140 V 60 M 150 140 V 10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '540px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <strong style={{ fontSize: '18px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>
              Automated Cost Ceiling
            </strong>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
              Hozify Intelligence is actively monitoring your spend. No manual intervention required for budget caps.
            </p>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
