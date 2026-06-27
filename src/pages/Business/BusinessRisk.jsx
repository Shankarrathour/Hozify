import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import {
  ShieldAlert,
  ChevronRight,
  UserX,
  UserCheck,
  AlertOctagon,
  TrendingUp,
  MapPin,
  Landmark,
  Plus,
  Compass
} from 'lucide-react';

export default function BusinessRisk() {
  const { navigate } = useApp();

  const entityName = 'Global Zenith Holdings Ltd.';
  const entityId = 'INVEST-8821-X';

  const riskIndicators = [
    { num: '04', label: 'Fake Documents', desc: 'Non-matching watermarks on GST certificates', type: 'doc' },
    { num: '02', label: 'Duplicate GST', desc: 'GSTIN shared with 2 other suspended accounts', type: 'gst' },
    { num: '01', label: 'Duplicate Owner', desc: 'Biometric hash matches blacklisted profile', type: 'owner' },
    { num: '840%', label: 'Suspicious Revenue', desc: 'Inorganic spike in cross-border settlements', type: 'revenue' },
    { num: '122', label: 'Fake Reviews', desc: 'Review clustering detected from 2 IP origins', type: 'review' }
  ];

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab="Risk Management" />}
      searchPlaceholder="Search registry..."
    >
      <div className="business-risk-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Title/Banner section (Screen 4) */}
        <div className="panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', fontWeight: '900', color: '#ef4444', background: '#fee2e2', padding: '3px 8px', borderRadius: '4px' }}>
                HIGH RISK ENTITY
              </span>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>ID: {entityId}</span>
            </div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', margin: 0, color: 'var(--text)' }}>{entityName}</h1>
            <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>
              Entity registered 14 days ago • Multiple red flags detected by automated surveillance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => alert('Marked Safe')}
              type="button"
            >
              Mark Safe
            </button>
            <button
              style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => alert('Escalating...')}
              type="button"
            >
              Escalate
            </button>
            <button
              style={{ border: 'none', background: '#fee2e2', color: '#ef4444', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => navigate(ROUTES.businessSuspension)}
              type="button"
            >
              Suspend
            </button>
            <button
              style={{ border: 'none', background: '#991b1b', color: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => alert('Account Frozen.')}
              type="button"
            >
              Freeze Account
            </button>
          </div>
        </div>

        {/* 2-Column layout */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Column 1: Risk Indicators & Timeline (Left) */}
          <div style={{ flex: 1.3, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Risk Indicators grid */}
            <div className="panel" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Automated Risk Indicators</h2>
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#ef4444' }}>5 CRITICAL ALERTS</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {riskIndicators.map((ri, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderLeft: '4px solid #ef4444',
                      background: '#fff8f8',
                      padding: '12px',
                      borderRadius: '4px',
                      border: '1px solid #fee2e2',
                      borderLeftWidth: '4px',
                      display: 'flex',
                      gap: '12px'
                    }}
                  >
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#ef4444', minWidth: '40px' }}>
                      {ri.num}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>{ri.label}</strong>
                      <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '2px', lineHeight: '1.3' }}>{ri.desc}</span>
                    </div>
                  </div>
                ))}

                {/* Add Marker Button */}
                <button
                  style={{ border: '1px dashed var(--line)', background: 'transparent', color: 'var(--muted)', fontSize: '11px', fontWeight: '800', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', minHeight: '68px' }}
                  onClick={() => alert('Add marker dialog')}
                  type="button"
                >
                  <Plus size={16} /> ADD MARKER
                </button>
              </div>
            </div>

            {/* Investigation Timeline */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px' }}>Investigation Timeline</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                
                {/* Vertical timeline connector */}
                <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '2px', background: '#e2e8f0' }} />

                {/* Alert Item 1 */}
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ height: '16px', width: '16px', borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
                      <strong style={{ fontSize: '13px', color: '#ef4444' }}>Critical System Alert: IP Collision</strong>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>Today, 09:42 AM</span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.4' }}>
                      Entity attempted login from IP range 182.16.x.x, previously linked to "Alpha Shell Corp" (Fraud Case #991).
                    </p>
                  </div>
                </div>

                {/* Alert Item 2 */}
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ height: '16px', width: '16px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Manual Review: Sarah Chen (Senior Auditor)</strong>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>Yesterday, 04:15 PM</span>
                    </div>
                    
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '10px', marginTop: '6px' }}>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', fontStyle: 'italic', margin: 0, lineHeight: '1.4' }}>
                        "Utility bills provided during onboarding appear to be digitally manipulated. The font kerning on the address field is inconsistent with standard issuing bank templates. Recommending immediate escalation."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Alert Item 3 */}
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ height: '16px', width: '16px', borderRadius: '50%', background: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Account Onboarded</strong>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>Oct 24, 11:20 AM</span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.4' }}>
                      Standard registration completed via automated portal.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Column 2: Assessment Gauge & HQ Banker (Right) */}
          <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Overall Risk Assessment (Dial) */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', alignSelf: 'flex-start', margin: '0 0 16px' }}>Overall Risk Assessment</h2>
              
              {/* Semi-circle Arch Gauge */}
              <div style={{ position: 'relative', width: '140px', height: '80px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
                <svg width="140" height="140" style={{ position: 'absolute', bottom: 0 }}>
                  <circle cx="70" cy="70" r="50" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeDasharray="157 314" strokeDashoffset="0" transform="rotate(-180 70 70)" />
                  <circle cx="70" cy="70" r="50" fill="none" stroke="url(#risk-grad)" strokeWidth="8" strokeDasharray="157 314" strokeDashoffset={157 - (157 * 88) / 100} strokeLinecap="round" transform="rotate(-180 70 70)" />
                  <defs>
                    <linearGradient id="risk-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: 'absolute', bottom: '4px', textAlign: 'center' }}>
                  <strong style={{ fontSize: '24px', display: 'block', color: 'var(--text)' }}>88</strong>
                  <span style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: '800' }}>/100</span>
                </div>
              </div>

              <div style={{ marginTop: '14px' }}>
                <strong style={{ display: 'block', fontSize: '12px', color: '#ef4444', textTransform: 'uppercase' }}>Critical</strong>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.4' }}>
                  Risk score has increased by 42 points since manual review began.
                </span>
              </div>

              {/* Confidence & Impact stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: '16px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '600' }}>Confidence</span>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginTop: '2px' }}>94%</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '600' }}>Impact</span>
                  <strong style={{ display: 'block', fontSize: '12px', color: '#ef4444', marginTop: '2px' }}>High</strong>
                </div>
              </div>
            </div>

            {/* Entity Intelligence */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Entity Intelligence</h2>
              
              {/* Registration HQ */}
              <div style={{ display: 'flex', gap: '12px', border: '1px solid var(--line)', padding: '12px', borderRadius: '6px', background: '#f8fafc' }}>
                <MapPin size={20} style={{ color: '#4f46e5', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '8px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase' }}>Registration HQ</span>
                  <strong style={{ display: 'block', fontSize: '11px', color: 'var(--text)', marginTop: '2px' }}>Virtual Office 4B, Dubai DMCC</strong>
                  <a href="#map" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#4f46e5', textDecoration: 'underline', marginTop: '4px', fontWeight: '700' }}>
                    View Map & History <Compass size={10} />
                  </a>
                </div>
              </div>

              {/* Primary Banker */}
              <div style={{ display: 'flex', gap: '12px', border: '1px solid #fee2e2', padding: '12px', borderRadius: '6px', background: '#fff8f8' }}>
                <Landmark size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '8px', color: '#ef4444', fontWeight: '800', textTransform: 'uppercase' }}>Primary Banker</span>
                  <strong style={{ display: 'block', fontSize: '11px', color: 'var(--text)', marginTop: '2px' }}>Standard Oceanic (Flagged)</strong>
                  <span style={{ display: 'block', fontSize: '10px', color: '#b91c1c', fontWeight: '600', marginTop: '2px', lineHeight: '1.3' }}>
                    High association with shell networks.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
