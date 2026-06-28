import React, { useState } from 'react';
import { 
  ShieldCheck, 
  SlidersHorizontal, 
  Search, 
  Settings, 
  Map, 
  Compass, 
  ShieldAlert, 
  Award, 
  AlertCircle, 
  Edit, 
  PlusCircle, 
  Download, 
  ChevronDown,
  BarChart3,
  Users2
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

// GST Export ke liye temporary data
const MOCK_ZONE_COMPLIANCE_DATA = [
  { zoneId: 'ZONE-CENTRAL-01', state: 'Madhya Pradesh', activeProviders: 450, gstTaxRate: '18%', monthlyRevenue: '₹2,45,000' },
  { zoneId: 'ZONE-EAST-04', state: 'Maharashtra', activeProviders: 620, gstTaxRate: '18%', monthlyRevenue: '₹4,12,000' },
  { zoneId: 'ZONE-NORTH-12', state: 'Delhi NCR', activeProviders: 510, gstTaxRate: '18%', monthlyRevenue: '₹3,89,000' },
  { zoneId: 'ZONE-SOUTH-07', state: 'Karnataka', activeProviders: 220, gstTaxRate: '18%', monthlyRevenue: '₹1,54,000' }
];

export default function ServiceAreaCoverage() {
  const [selectedView, setSelectedView] = useState('Coverage GIS');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 1. GST Data Export (CSV Download) Function
  const handleExportGstData = () => {
    const csvHeaders = ['Zone ID', 'State Region', 'Active Providers', 'GST Rate', 'Monthly Revenue'];
    const csvRows = MOCK_ZONE_COMPLIANCE_DATA.map(item => [
      `"${item.zoneId}"`,
      `"${item.state}"`,
      item.activeProviders,
      `"${item.gstTaxRate}"`,
      `"${item.monthlyRevenue}"`
    ]);

    const csvContent = [csvHeaders.join(','), ...csvRows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'GST_Compliance_Report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminShell
      activeTab="Services"
      headerTitle="Service Management"
      searchPlaceholder="Search service coverage areas..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: 'sans-serif', padding: '10px' }}>
        
        {/* TOP BAR: Title & Dropdown */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>Global Service Coverage</h1>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#4f46e5', background: '#e0e7ff', padding: '3px 8px', borderRadius: '4px' }}>MAPPED</span>
            </div>
            <p style={{ marginTop: '4px', fontSize: '13px', color: '#64748b', margin: 0 }}>
              Current View: <span style={{ color: '#4f46e5', fontWeight: '700' }}>{selectedView}</span>
            </p>
          </div>

          {/* 2. WORKING DROPDOWN (List View / Density Reports / Coverage GIS) */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                height: '38px', padding: '0 16px', background: '#fff', border: '1px solid #cbd5e1',
                borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#334155',
                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
              type="button"
            >
              <Map size={14} style={{ color: '#4f46e5' }} />
              {selectedView}
              <ChevronDown size={14} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute', top: '44px', right: 0, background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: '6px', width: '180px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', zIndex: 50, padding: '4px'
              }}>
                {['List View', 'Density Reports', 'Coverage GIS'].map((viewOption) => (
                  <button
                    key={viewOption}
                    onClick={() => {
                      setSelectedView(viewOption); // Click karne par State change hogi aur kaam karega
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      width: '100%', padding: '10px 12px', textAlign: 'left', border: 'none',
                      background: selectedView === viewOption ? '#f1f5f9' : 'transparent',
                      color: selectedView === viewOption ? '#4f46e5' : '#334155',
                      fontSize: '12px', fontWeight: selectedView === viewOption ? '700' : '500',
                      borderRadius: '4px', cursor: 'pointer', display: 'block'
                    }}
                    type="button"
                  >
                    {viewOption}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MIDDLE SECTION: Map (Left) & Stats Panel (Right) */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* MAP SATELITE BOX */}
          <div style={{ flex: '2 1 500px', padding: '0', position: 'relative', overflow: 'hidden', minHeight: '440px', background: '#091e36', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <svg width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <radialGradient id="service-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                </radialGradient>
              </defs>
              <pattern id="service-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#service-grid)" />
              <path d="M 0 120 Q 250 80, 500 150" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
              <path d="M 150 0 C 120 180, 280 220, 350 400" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
              <circle cx="250" cy="200" r="140" fill="url(#service-glow)" />
              <polygon points="120,80 320,100 420,280 220,320" fill="rgba(79, 70, 229, 0.08)" stroke="#4f46e5" strokeWidth="2" strokeDasharray="3,3" />
              <circle cx="120" cy="80" r="4" fill="#4f46e5" />
              <circle cx="320" cy="100" r="4" fill="#4f46e5" />
              <circle cx="420" cy="280" r="4" fill="#4f46e5" />
              <circle cx="220" cy="320" r="4" fill="#4f46e5" />

              <g transform="translate(175, 180)">
                <rect width="160" height="38" rx="6" fill="#0f172a" stroke="#4f46e5" strokeWidth="1" />
                <text x="10" y="16" fill="#fff" fontSize="10" fontWeight="800">{selectedView} Mode</text>
                <text x="10" y="28" fill="#94a3b8" fontSize="8">Sector 7 Overlay Active</text>
              </g>
            </svg>

            {/* Float Toolbar */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {['↗', '⚙', '☉', '📍', '+', '-', '☷'].map((icon, i) => (
                <button key={i} style={{ width: '24px', height: '24px', border: 'none', background: 'transparent', color: '#fff', fontSize: '12px', cursor: 'pointer' }} type="button">{icon}</button>
              ))}
            </div>

            {/* Map Actions */}
            <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', width: 'max-content' }}>
              <button style={{ height: '32px', padding: '0 12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(15, 23, 42, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }} type="button">
                <Edit size={12} /> Edit Boundary
              </button>
              <button style={{ height: '32px', padding: '0 12px', border: 'none', background: '#4f46e5', color: '#fff', fontSize: '11px', fontWeight: '800', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }} type="button">
                <PlusCircle size={12} /> Add Zone
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR STATS */}
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ padding: '14px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Active Zones</span>
                <strong style={{ display: 'block', fontSize: '20px', color: '#0f172a', marginTop: '4px' }}>24 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'normal' }}>sectors</span></strong>
              </div>
              <div style={{ padding: '14px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Service Density</span>
                <strong style={{ display: 'block', fontSize: '20px', color: '#0f172a', marginTop: '4px' }}>1.8k <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'normal' }}>prov.</span></strong>
              </div>
            </div>

            <div style={{ padding: '16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h2 style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category Spread</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Home Services</span>
                    <span style={{ color: '#0f172a' }}>92%</span>
                  </div>
                  <div style={{ height: '5px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '92%', height: '100%', background: '#4f46e5' }} /></div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Corporate Maintenance</span>
                    <span style={{ color: '#0f172a' }}>78%</span>
                  </div>
                  <div style={{ height: '5px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '78%', height: '100%', background: '#4f46e5' }} /></div>
                </div>
              </div>
            </div>

            {/* 3. WORKING EXPORT GST DATA BUTTON */}
            <div style={{ padding: '16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <h2 style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px', textTransform: 'uppercase' }}>Tax & Compliance</h2>
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Click below to instantly download mapped zone data for GST return filing.</p>
              </div>
              <button 
                onClick={handleExportGstData}
                style={{
                  width: '100%', height: '38px', background: '#0f172a', color: '#fff', border: 'none',
                  borderRadius: '6px', fontSize: '12px', fontWeight: '700', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                type="button"
              >
                <Download size={14} /> Export GST Data (CSV)
              </button>
            </div>

          </div>
        </div>

        {/* 4. RESPONSIVE DETAILED DEMOGRAPHICS SECTION */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: 0 }}>View Detailed Demographics</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0' }}>Real-time localized public metrics across active service zone regions.</p>
            </div>
            <span style={{ fontSize: '11px', fontWeight: '700', background: '#f8fafc', color: '#4f46e5', padding: '4px 12px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              Live Coverage Map
            </span>
          </div>

          {/* Flexible Mobile-friendly CSS Grid Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '16px',
            width: '100%'
          }}>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#4f46e5' }}>
                <Users2 size={16} />
                <strong style={{ fontSize: '13px', color: '#334155' }}>Provider Density Index</strong>
              </div>
              <span style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', display: 'block' }}>74.8 / km²</span>
              <p style={{ fontSize: '11px', color: '#64748b', margin: '4px 0 0' }}>Distribution density across high priority urban centers.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10b981' }}>
                <BarChart3 size={16} />
                <strong style={{ fontSize: '13px', color: '#334155' }}>SLA Dispatch Health</strong>
              </div>
              <span style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', display: 'block' }}>94.2%</span>
              <p style={{ fontSize: '11px', color: '#64748b', margin: '4px 0 0' }}>Average arrival timeline under the 30-min threshold.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#f59e0b' }}>
                <Compass size={16} />
                <strong style={{ fontSize: '13px', color: '#334155' }}>Peak Performance Orbit</strong>
              </div>
              <span style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', display: 'block' }}>Sector 7 East</span>
              <p style={{ fontSize: '11px', color: '#64748b', margin: '4px 0 0' }}>Generates about 42% of total operational traffic logs.</p>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}