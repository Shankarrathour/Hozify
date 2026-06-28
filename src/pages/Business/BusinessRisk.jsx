import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import { useToast } from '../../components/common/ToastNotification';
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
  const { addToast } = useToast();

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
              onClick={() => addToast("Entity status marked as SAFE.", "success")}
              type="button"
            >
              Mark Safe
            </button>
            <button
              style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => addToast("Risk alert escalated to surveillance lead.", "success")}
              type="button"
            >
              Escalate
            </button>
            <button
              style={{ border: 'none', background: '#fee2e2', color: '#ef4444', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => { navigate(ROUTES.businessSuspension); addToast("Loading suspension parameters...", "success"); }}
              type="button"
            >
              Suspend
            </button>
            <button
              style={{ border: 'none', background: '#991b1b', color: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 14px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => addToast("All banking transactions and API keys FROZEN.", "success")}
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
                {riskIndicators.map((ri, idx) => (
                  <div
                    key={idx}
                    onClick={() => addToast(`Risk alert details: ${ri.desc}`, "success")}
                    style={{
                      borderLeft: '4px solid #ef4444',
                      background: '#fff8f8',
                      padding: '12px',
                      borderRadius: '4px',
                      border: '1px solid #fee2e2',
                      borderLeftWidth: '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '80px',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#ef4444' }}>
                      {ri.num}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '11px', color: 'var(--text)' }}>{ri.label}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investigation Timeline */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px' }}>Investigation Timeline</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', paddingLeft: '24px' }}>
                <div style={{ position: 'absolute', top: '8px', bottom: '8px', left: '7px', width: '2px', background: '#e2e8f0' }} />
                
                {[
                  { time: '10 mins ago', title: 'System flagged high review velocity', desc: 'IP verification trace identified review clustering from 2 origins.' },
                  { time: '2 hours ago', title: 'Owner verification mismatch', desc: 'Biometric identity hash matches blacklisted owner profile #99211.' },
                  { time: 'Yesterday', title: 'GST certification check failed', desc: 'GSTIN certificate duplicate match against suspended shell entities.' }
                ].map((ev, idx) => (
                  <div key={idx} style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-23px', top: '4px', height: '12px', width: '12px', borderRadius: '50%', background: '#ef4444', border: '2px solid #fff' }} />
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>{ev.time}</span>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginTop: '2px' }}>{ev.title}</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px', lineHeight: '1.4' }}>{ev.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Surveillance Info (Right) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Risk Assessment */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Risk Assessment Summary</h2>
              
              <div style={{ border: '1px solid #fee2e2', background: '#fff8f8', padding: '12px', borderRadius: '6px' }}>
                <strong style={{ display: 'block', fontSize: '12px', color: '#ef4444', textTransform: 'uppercase' }}>Critical</strong>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.4' }}>
                  Risk score has increased by 42 points since manual review began.
                </span>
              </div>

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
                  <a href="#map" onClick={(e) => { e.preventDefault(); addToast("Loading DMCC virtual office geolocation trace...", "success"); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#4f46e5', textDecoration: 'underline', marginTop: '4px', fontWeight: '700' }}>
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
