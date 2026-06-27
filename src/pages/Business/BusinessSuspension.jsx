import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import {
  ChevronRight,
  ShieldAlert,
  Calendar,
  AlertTriangle,
  MapPin,
  TrendingUp,
  X,
  Check,
  Building,
  DollarSign,
  PieChart,
  ClipboardList,
  Settings,
  LogOut
} from 'lucide-react';

export default function BusinessSuspension() {
  const { navigate } = useApp();
  const [selectedReason, setSelectedReason] = useState('compliance');
  const [strategy, setStrategy] = useState('temporary'); // 'temporary' or 'permanent'
  const [releaseDate, setReleaseDate] = useState('12/31/2024');
  const [adminNotes, setAdminNotes] = useState('');

  // Sidebar navigation for Nexus Admin branding override
  const sidebarItems = [
    { label: 'Dashboard', route: ROUTES.dashboard, icon: Building },
    { label: 'Businesses', route: ROUTES.business, icon: Building },
    { label: 'Analytics', route: '#', icon: PieChart },
    { label: 'Financials', route: '#', icon: DollarSign },
    { label: 'Audit Log', route: '#', icon: ClipboardList },
    { label: 'Settings', route: '#', icon: Settings }
  ];

  const handleConfirm = () => {
    alert(`Suspension confirmed for reason: ${selectedReason}. Strategy: ${strategy}. Notes: ${adminNotes}`);
    navigate(ROUTES.business);
  };

  const handleCancel = () => {
    navigate(ROUTES.business);
  };

  return (
    <AdminShell
      activeTab="Business Management"
      brandText="Nexus Admin"
      brandSubText="Enterprise Control"
      headerTitle="Business Registry"
      searchPlaceholder="Search entities..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.business)}>Entities</span>
          <ChevronRight size={14} />
          <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.business)}>Global Tech Logistics</span>
          <ChevronRight size={14} />
          <span style={{ color: '#0f172a' }}>Entity suspension</span>
        </div>

        {/* Title bar with action buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Suspend Entity
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
              You are initiating the formal suspension process for <strong>Global Tech Logistics (ID: ENT-88902)</strong>.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleCancel}
              style={{ height: '36px', padding: '0 16px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              style={{ height: '36px', padding: '0 16px', border: 'none', background: '#991b1b', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Check size={14} />
              <span>Confirm suspension</span>
            </button>
          </div>
        </div>

        {/* Entity details summary card */}
        <div className="panel" style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=160&h=100&q=80"
            alt="Global Tech Logistics"
            style={{ width: '100px', height: '64px', borderRadius: '6px', objectFit: 'cover' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', flex: 1 }}>
            <div>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Entity Name</span>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--text)', marginTop: '4px' }}>Global Tech Logistics</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Region</span>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--text)', marginTop: '4px' }}>North America (HQ)</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Status</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#07956f', background: '#ecfdf5', padding: '2px 8px', borderRadius: '4px', marginTop: '4px' }}>
                <span style={{ height: '5px', width: '5px', borderRadius: '50%', background: '#07956f' }} />
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column main form grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* Column 1: Reasons & Administrative Context */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Primary Reason */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Primary Reason</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { id: 'compliance', title: 'Compliance Breach', desc: 'Violation of Section 4.2: Meta Privacy Protocols.' },
                  { id: 'payment', title: 'Payment Default', desc: '3 utstanding balance exceeding 90-day threshold.' },
                  { id: 'security', title: 'Security Threat', desc: 'Suspicious activity detected on API endpoints.' }
                ].map((reason) => {
                  const isActive = selectedReason === reason.id;
                  return (
                    <div
                      key={reason.id}
                      onClick={() => setSelectedReason(reason.id)}
                      style={{
                        padding: '16px 14px',
                        border: isActive ? '2px solid #25108f' : '1px solid var(--line)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        background: '#fff',
                        position: 'relative'
                      }}
                    >
                      <input
                        type="radio"
                        checked={isActive}
                        readOnly
                        style={{ position: 'absolute', left: '14px', top: '22px', accentColor: '#25108f' }}
                      />
                      <div style={{ paddingLeft: '24px' }}>
                        <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>{reason.title}</strong>
                        <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.3' }}>{reason.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Administrative Context */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 12px' }}>Administrative Context</h2>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Provide detailed reasoning for this action to be recorded in the audit log..."
                style={{ width: '100%', height: '100px', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px', fontSize: '13px', outline: 'none', resize: 'none' }}
              />
            </div>

          </div>

          {/* Column 2: Duration Strategy */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Duration Strategy</h2>
            
            {/* Strategy Toggles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', background: '#f4eff8', padding: '4px', borderRadius: '6px' }}>
              <button
                onClick={() => setStrategy('temporary')}
                style={{
                  height: '34px',
                  border: 'none',
                  borderRadius: '4px',
                  background: strategy === 'temporary' ? '#fff' : 'transparent',
                  color: strategy === 'temporary' ? '#25108f' : 'var(--muted)',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: strategy === 'temporary' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                Temporary
              </button>
              <button
                onClick={() => setStrategy('permanent')}
                style={{
                  height: '34px',
                  border: 'none',
                  borderRadius: '4px',
                  background: strategy === 'permanent' ? '#fff' : 'transparent',
                  color: strategy === 'permanent' ? '#25108f' : 'var(--muted)',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: strategy === 'permanent' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                Permanent
              </button>
            </div>

            {/* Datepicker field */}
            {strategy === 'temporary' && (
              <div>
                <label htmlFor="release-date-cancellation" style={{ display: 'block', fontSize: '11px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Release Date</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', height: '40px', background: '#fff' }}>
                  <Calendar size={14} style={{ color: 'var(--muted)' }} />
                  <input
                    id="release-date-cancellation"
                    type="text"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '13px', fontWeight: '700', outline: 'none' }}
                  />
                </div>
              </div>
            )}

            {/* Warning yellow box */}
            <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px', padding: '12px 14px', display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: 'auto' }}>
              <AlertTriangle size={15} style={{ color: '#b45309', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '12px', color: '#b45309', fontWeight: '700', lineHeight: '1.4' }}>
                <strong>Notice:</strong> Temporary suspension requires a manual review before reactivation on the selected date.
              </span>
            </div>

          </div>

          {/* Column 3: Impact Analysis */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Impact Analysis panel (navy) */}
            <div className="panel" style={{ padding: '20px', background: '#0b1329', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Impact Analysis</span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Branches */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '20px' }}>14</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Affected Branches</span>
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: '900', background: '#fee2e2', color: '#b91c1c', padding: '2px 6px', borderRadius: '4px' }}>
                    ⚠️ High Risk
                  </span>
                </div>

                {/* Active Bookings */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '20px' }}>482</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Active Bookings</span>
                  </div>
                  <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', fontWeight: '700' }}>
                    Requires Cancellation
                  </span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', marginTop: '4px' }}>
                  <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Revenue at Risk (30D)</span>
                  <strong style={{ display: 'block', fontSize: '24px', marginTop: '4px' }}>$142,500.00</strong>
                </div>
              </div>
            </div>

            {/* Top Affected Nodes */}
            <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)' }}>Top Affected Nodes</span>
                <span style={{ fontSize: '11px', color: '#25108f', fontWeight: '800', cursor: 'pointer' }} onClick={() => alert('Viewing all affected nodes...')}>View All</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { name: 'Chicago Hub - 01', count: '86 Active' },
                  { name: 'Toronto Express', count: '54 Active' },
                  { name: 'London Gateway', count: '42 Active' }
                ].map((node, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f8f4fc', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text)', fontWeight: '700' }}>
                      <MapPin size={12} style={{ color: 'var(--muted)' }} />
                      <span>{node.name}</span>
                    </div>
                    <span style={{ fontSize: '9px', fontWeight: '900', color: '#991b1b', background: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>
                      {node.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Disruption Forecast */}
            <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Traffic Disruption Forecast</span>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <strong style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text)' }}>12.4%</strong>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.3' }}>
                    Global network latency increase predicted upon deactivation.
                  </p>
                </div>
                {/* SVG wave area graph */}
                <svg width="80" height="42" viewBox="0 0 80 42" style={{ overflow: 'visible' }}>
                  <path d="M 0,42 L 0,32 Q 20,22 40,30 T 80,10 L 80,42 Z" fill="rgba(165,180,252,0.3)" />
                  <path d="M 0,32 Q 20,22 40,30 T 80,10" fill="none" stroke="#25108f" strokeWidth="2" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
