import React from 'react';
import { Plus, ShieldCheck, AlertTriangle, MoreVertical, Upload, CheckSquare, Square, Pencil, CheckCircle2 } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function TaxSettings() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div className="tax-settings-page" style={{ padding: '32px 40px 60px', position: 'relative', minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
              Tax Settings
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
              Configure global VAT, GST, and regional compliance rules for enterprise operations.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button type="button" style={{ padding: '0 20px', height: '40px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
              Discard Changes
            </button>
            <button type="button" style={{ padding: '0 24px', height: '40px', background: '#1e1b4b', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
              Save Configuration
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', flex: 1 }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Global VAT/GST Rules */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Global VAT/GST Rules</h2>
                <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '800', letterSpacing: '0.5px' }}>
                  Compliance Active
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary Tax Identification</label>
                  <input 
                    type="text" 
                    defaultValue="VAT-US-9910231"
                    style={{ width: '100%', height: '44px', padding: '0 16px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Standard Tax Rate (%)</label>
                  <div style={{ display: 'flex', height: '44px', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <input 
                      type="number" 
                      defaultValue="20.00"
                      style={{ flex: 1, padding: '0 16px', border: 'none', fontSize: '14px', color: 'var(--text)', outline: 'none' }}
                    />
                    <div style={{ background: '#f8fafc', padding: '0 16px', borderLeft: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', fontSize: '14px', color: 'var(--muted)', fontWeight: '600' }}>
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Intra-community Supply Exemption</h3>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>Enable tax-free transactions between registered EU entities.</p>
                  </div>
                  {/* Toggle Switch On */}
                  <div style={{ width: '40px', height: '22px', background: '#1e1b4b', borderRadius: '11px', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
                    <div style={{ width: '18px', height: '18px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Digital Services Tax (DST)</h3>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>Apply jurisdiction-specific DST for multi-national digital advertising revenue.</p>
                  </div>
                  {/* Toggle Switch Off */}
                  <div style={{ width: '40px', height: '22px', background: '#e2e8f0', borderRadius: '11px', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
                    <div style={{ width: '18px', height: '18px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Country-Specific Overrides */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Country-Specific Overrides</h2>
                <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', fontSize: '13px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer', padding: 0 }}>
                  <Plus size={16} /> Add Region
                </button>
              </div>

              <div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '0 0 16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Region</th>
                      <th style={{ padding: '0 0 16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tax Type</th>
                      <th style={{ padding: '0 0 16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rate</th>
                      <th style={{ padding: '0 0 16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px 0', fontSize: '13px', fontWeight: '700', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ background: '#e2e8f0', padding: '2px 4px', borderRadius: '3px', fontSize: '10px' }}>UK</span> United Kingdom
                      </td>
                      <td style={{ padding: '16px 0', fontSize: '13px', color: 'var(--muted)' }}>Standard VAT</td>
                      <td style={{ padding: '16px 0', fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>20.0%</td>
                      <td style={{ padding: '16px 0', textAlign: 'right' }}>
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><Pencil size={16} /></button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px 0', fontSize: '13px', fontWeight: '700', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ background: '#e2e8f0', padding: '2px 4px', borderRadius: '3px', fontSize: '10px' }}>DE</span> Germany
                      </td>
                      <td style={{ padding: '16px 0', fontSize: '13px', color: 'var(--muted)' }}>Mehrwertsteuer</td>
                      <td style={{ padding: '16px 0', fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>19.0%</td>
                      <td style={{ padding: '16px 0', textAlign: 'right' }}>
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><Pencil size={16} /></button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '16px 0', fontSize: '13px', fontWeight: '700', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ background: '#e2e8f0', padding: '2px 4px', borderRadius: '3px', fontSize: '10px' }}>US</span> California, USA
                      </td>
                      <td style={{ padding: '16px 0', fontSize: '13px', color: 'var(--muted)' }}>State Sales Tax</td>
                      <td style={{ padding: '16px 0', fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>7.25%</td>
                      <td style={{ padding: '16px 0', textAlign: 'right' }}>
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><Pencil size={16} /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Digital Certificates */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>Digital Certificates</h2>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 20px', lineHeight: '1.5' }}>Manage cryptographic tax certificates for automated filing and validation.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--text)' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>EU-VAT-2024.crt</strong>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Expires: Dec 2024</span>
                    </div>
                  </div>
                  <button style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}><MoreVertical size={16} /></button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', border: '1px dashed #fca5a5', background: '#fef2f2', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <AlertTriangle size={20} style={{ color: '#ef4444' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: '#ef4444' }}>IRS-TOKEN-REVOKED</strong>
                      <span style={{ fontSize: '10px', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>Action Required</span>
                    </div>
                  </div>
                  <button style={{ background: 'none', border: 'none', color: '#fca5a5', cursor: 'pointer' }}><MoreVertical size={16} /></button>
                </div>
              </div>

              <button type="button" style={{ width: '100%', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1', background: '#fff', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
                <Upload size={16} /> Upload New Certificate
              </button>
            </div>

            {/* Tax Exemptions */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px' }}>Tax Exemptions</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ marginTop: '2px', cursor: 'pointer' }}>
                    <CheckSquare size={18} style={{ color: '#0f172a' }} fill="#0f172a" stroke="#fff" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '2px' }}>Educational Institutions</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Zero-rated for all 501(c)(3) entities.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ marginTop: '2px', cursor: 'pointer' }}>
                    <Square size={18} style={{ color: '#cbd5e1' }} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '2px' }}>Charitable Organizations</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.4', display: 'block' }}>Requires manual certificate verification.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ marginTop: '2px', cursor: 'pointer' }}>
                    <CheckSquare size={18} style={{ color: '#0f172a' }} fill="#0f172a" stroke="#fff" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '2px' }}>Export Goods</strong>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.4', display: 'block' }}>Automatic zero-rate for cross-border shipping.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Readiness */}
            <div style={{ background: '#1e1b4b', borderRadius: '8px', padding: '24px', color: '#fff' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', margin: '0 0 12px' }}>Audit Readiness</h2>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: '0 0 24px', lineHeight: '1.5' }}>
                Your current tax configuration matches 98% of regional compliance requirements for Q4 2024.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '16px', fontWeight: '800' }}>
                  98%
                </div>
                <a href="#" style={{ fontSize: '12px', fontWeight: '700', color: '#fff', textDecoration: 'underline', textUnderlineOffset: '2px' }}>View Compliance Report</a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer sticky bar (simulated position absolute at bottom or just flex-end) */}
        <div style={{ marginTop: '40px', padding: '20px 0 0', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '24px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)' }}>
            <span>Tax Jurisdiction: US-FED-GLOBAL</span>
            <span>Last Updated: 12 Oct 2023, 14:32 UTC</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '800', color: '#16a34a' }}>
            <CheckCircle2 size={14} /> Systems Fully Compliant
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
