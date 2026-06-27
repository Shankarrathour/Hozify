import React from 'react';
import { 
  Key, MapPin, Eye, Image as ImageIcon, Maximize, BarChart2, 
  AlertTriangle, CheckCircle2, Info, HelpCircle
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function GoogleMapsApiIntegration() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px', maxWidth: '1200px', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px' }}>
            Google Maps API Settings
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0, maxWidth: '700px', lineHeight: '1.5' }}>
            Configure geospatial services, usage thresholds, and visual map architecture for the enterprise suite.
          </p>
        </div>

        {/* Layout: Left (Form) | Right (Preview + Quotas + Logs) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px', alignItems: 'start' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Key size={18} color="#0f172a" />
                  </div>
                  <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Integration Core</h2>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#e2e8f0', color: '#334155', fontSize: '10px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#475569' }}></span> SERVICE ACTIVE
                </span>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>PRODUCTION API KEY</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" defaultValue="AIzaSyA_G73u92XkL8m-N1pZ5v-1q2w3e4r5t6" style={{ width: '100%', height: '44px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 40px 0 16px', fontSize: '13px', color: '#475569', boxSizing: 'border-box', outline: 'none', fontFamily: 'monospace' }} readOnly />
                  <Eye size={16} color="#94a3b8" style={{ position: 'absolute', right: '16px', top: '14px', cursor: 'pointer' }} />
                </div>
                <p style={{ fontSize: '10px', color: '#64748b', margin: '8px 0 0' }}>Never share your API key with third parties. Use restrictions in the GCP Console.</p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#e2e8f0', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={16} color="#0f172a" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px' }}>Geocoding Service</h4>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Enable address resolution and reverse geocoding</p>
                  </div>
                </div>
                <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '40px', height: '24px', background: '#09090b', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                  <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>MAP STYLING (JSON)</label>
                <div style={{ background: '#27272a', borderRadius: '8px', padding: '16px', fontFamily: 'monospace', fontSize: '12px', color: '#d4d4d8', lineHeight: '1.6', height: '220px', overflowY: 'auto' }}>
                  [<br/>
                  &nbsp;&nbsp;{'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"featureType": "water",<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"elementType": "geometry",<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"stylers": [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} "color": "#070235" {'}'},<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} "lightness": 17 {'}'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;]<br/>
                  &nbsp;&nbsp;{'}'},<br/>
                  &nbsp;&nbsp;{'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"featureType": "landscape",<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"elementType": "geometry",<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"stylers": [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} "color": "#121226" {'}'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;]<br/>
                  &nbsp;&nbsp;{'}'}<br/>
                  ]
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '40px', padding: '0 20px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#0f172a', cursor: 'pointer' }}>
                  Send Test Query
                </button>
                <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '40px', padding: '0 24px', background: '#09090b', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
                  Update Provider
                </button>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Visual Preview */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ImageIcon size={16} color="#0f172a" />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>VISUAL PREVIEW</span>
                </div>
                <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>
                  <Maximize size={12} /> Expand
                </button>
              </div>
              
              <div style={{ width: '100%', height: '180px', borderRadius: '8px', position: 'relative', overflow: 'hidden', background: '#cbd5e1', backgroundImage: 'url("https://maps.googleapis.com/maps/api/staticmap?center=37.422,-122.084&zoom=15&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C37.422,-122.084&style=feature:all|element:labels.text.fill|color:0x000000&style=feature:landscape|element:geometry.fill|color:0xe8ecd1&key=YOUR_API_KEY")', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid #e2e8f0' }}>
                {/* Fallback pattern if image doesn't load */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(45deg, #e2e8f0 25%, transparent 25%, transparent 75%, #e2e8f0 75%, #e2e8f0), repeating-linear-gradient(45deg, #e2e8f0 25%, #f1f5f9 25%, #f1f5f9 75%, #e2e8f0 75%, #e2e8f0)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px', zIndex: 0, opacity: 0.5 }}></div>
                
                {/* Map markers mockup */}
                <div style={{ position: 'absolute', top: '40%', left: '30%', zIndex: 1 }}><MapPin size={24} color="#3b82f6" fill="#bfdbfe" /></div>
                <div style={{ position: 'absolute', top: '60%', left: '50%', zIndex: 1 }}><MapPin size={24} color="#3b82f6" fill="#bfdbfe" /></div>
                <div style={{ position: 'absolute', top: '30%', left: '70%', zIndex: 1 }}><MapPin size={24} color="#3b82f6" fill="#bfdbfe" /></div>

                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '800', color: '#0f172a', zIndex: 2 }}>
                  Preview: Enterprise Dark style
                </div>
              </div>
            </div>

            {/* Usage & Quotas */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '32px', height: '32px', background: '#f1f5f9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart2 size={16} color="#0f172a" />
                </div>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Usage & Quotas</h2>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0', marginBottom: '24px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>MONTHLY ESTIMATE</span>
                  <span style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px', lineHeight: '1' }}>$412.ŽŽ</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>REMAINING QUOTA</span>
                  <span style={{ fontSize: '28px', fontWeight: '800', color: '#b91c1c', letterSpacing: '-0.5px', lineHeight: '1' }}>12.4%</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Metric 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>eMTP Requests</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>45,102 / 50k</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ width: '90%', height: '100%', background: '#b91c1c', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#b91c1c' }}>
                    <AlertTriangle size={12} />
                    <span style={{ fontSize: '10px', fontWeight: '800' }}>Approaching monthly limit</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Maps API Calls</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>12,480 / 100k</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ width: '12%', height: '100%', background: '#0f172a', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#334155' }}>
                    <CheckCircle2 size={12} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Usage within normal parameters</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Geocoding</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>8,912 / 20k</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ width: '44%', height: '100%', background: '#94a3b8', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
                    <Info size={12} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Tier 2 billing active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Logs */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SYSTEM LOGS</span>
                <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '11px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>
                  View All
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>14:22:10</span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>API Key rotated by system administrato...</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>12:05:45</span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Usage Alert: Threshold reached (80%)</span>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>09:12:33</span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Map style updated by Rivera_A</span>
                </div>
              </div>

              {/* Overlapping Help Button */}
              <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ position: 'absolute', bottom: '-16px', right: '-16px', width: '48px', height: '48px', background: '#09090b', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                <HelpCircle size={24} color="#fff" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
