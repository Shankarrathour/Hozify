import React from 'react';
import { ShieldCheck, SlidersHorizontal, Search, Settings, Map, Compass, ShieldAlert, Award, AlertCircle, Edit, PlusCircle, VolumeX } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function ServiceAreaCoverage() {
  return (
    <AdminShell
      activeTab="Services"
      headerTitle="Service Management"
      searchPlaceholder="Search service coverage areas..."
    >
      <div className="service-areas-wrapper">
        
        {/* Page Title & Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 className="page-title" style={{ margin: 0 }}>Global Service Coverage</h1>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#4f46e5', background: '#e0e7ff', padding: '3px 8px', borderRadius: '4px' }}>MAPPED</span>
            </div>
            <p className="page-subtitle" style={{ marginTop: '2px' }}>Service Categories & Zone Dispatch Limits</p>
          </div>

          <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>
            <span style={{ padding: '4px 10px', color: 'var(--muted)' }}>List View</span>
            <span style={{ padding: '4px 10px', color: 'var(--muted)' }}>Density Reports</span>
            <span style={{ padding: '4px 10px', background: '#fff', color: '#0f172a', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>Coverage GIS</span>
          </div>
        </div>

        {/* Map Grid Content */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Map satellite grid (Left) */}
          <div className="panel" style={{ flex: 1.8, padding: '0', position: 'relative', overflow: 'hidden', minHeight: '440px', background: '#091e36', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Cyberpunk Map Design SVG */}
            <svg width="100%" height="100%" viewBox="0 0 500 400" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <radialGradient id="service-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                </radialGradient>
              </defs>
              
              {/* Map grid overlay */}
              <pattern id="service-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#service-grid)" />

              {/* Major Roads */}
              <path d="M 0 120 Q 250 80, 500 150" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
              <path d="M 150 0 C 120 180, 280 220, 350 400" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />

              {/* Blue Glow */}
              <circle cx="250" cy="200" r="140" fill="url(#service-glow)" />

              {/* Polygon Zone */}
              <polygon points="120,80 320,100 420,280 220,320" fill="rgba(79, 70, 229, 0.08)" stroke="#4f46e5" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Plot dots */}
              <circle cx="120" cy="80" r="4" fill="#4f46e5" />
              <circle cx="320" cy="100" r="4" fill="#4f46e5" />
              <circle cx="420" cy="280" r="4" fill="#4f46e5" />
              <circle cx="220" cy="320" r="4" fill="#4f46e5" />

              {/* Active Marker Label */}
              <g transform="translate(200, 180)">
                <rect width="130" height="32" rx="4" fill="#0f172a" stroke="#4f46e5" strokeWidth="1" />
                <text x="8" y="14" fill="#fff" fontSize="9" fontWeight="800">Metropolitan Coverage</text>
                <text x="8" y="24" fill="#a1a1aa" fontSize="7">15 Services Active • 94% SLA</text>
              </g>

            </svg>

            {/* Left float toolbar */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {['Pointer', 'Share', 'Target', 'Pin', 'Plus', 'Minus', 'Layers'].map((tool, i) => (
                <button
                  key={tool}
                  style={{
                    width: '24px',
                    height: '24px',
                    border: 'none',
                    background: tool === 'Share' ? '#4f46e5' : 'transparent',
                    color: '#fff',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  type="button"
                >
                  {tool === 'Pointer' ? '↗' : tool === 'Share' ? '⚙' : tool === 'Target' ? '☉' : tool === 'Pin' ? '📍' : tool === 'Plus' ? '+' : tool === 'Minus' ? '-' : '☷'}
                </button>
              ))}
            </div>

            {/* Bottom float actions */}
            <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button style={{ height: '32px', padding: '0 12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(15, 23, 42, 0.8)', color: '#fff', fontSize: '11px', fontWeight: '800', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }} type="button">
                <Edit size={12} /> Edit Service Boundary
              </button>
              <button style={{ height: '32px', padding: '0 12px', border: 'none', background: '#4f46e5', color: '#fff', fontSize: '11px', fontWeight: '800', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }} type="button">
                <PlusCircle size={12} /> Add Zone
              </button>
            </div>

          </div>

          {/* Sidebar Area info panel (Right) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Top row sizes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="panel" style={{ padding: '12px 16px' }}>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Coverage Zones</span>
                <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '2px' }}>24 <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 'normal' }}>sectors</span></strong>
              </div>
              
              <div className="panel" style={{ padding: '12px 16px' }}>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Density</span>
                <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '2px' }}>1.8k <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 'normal' }}>prov.</span></strong>
              </div>
            </div>

            {/* Service Coverage Statistics */}
            <div className="panel" style={{ padding: '16px 20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Service Category Spread
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--muted)' }}>Home Services Coverage</span>
                    <span>92%</span>
                  </div>
                  <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '92%', height: '100%', background: '#4f46e5' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--muted)' }}>Corporate Maintenance</span>
                    <span>78%</span>
                  </div>
                  <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '78%', height: '100%', background: '#4f46e5' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Mapping Insights */}
            <div className="panel" style={{ padding: '16px 20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Coverage Insights
              </h2>
              <p style={{ fontSize: '12px', color: 'var(--text)', lineHeight: '1.5', margin: 0 }}>
                High density overlap identified in Sector 7. Recommending route balancing between Central and East branches to maintain <strong style={{ color: '#4f46e5' }}>&lt; 30 min dispatch SLA</strong>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
