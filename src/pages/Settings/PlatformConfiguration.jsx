import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Toggle from '../../components/common/Toggle';
import AdminShell from '../../components/layouts/AdminShell';

export default function PlatformConfiguration() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div className="platform-config-page" style={{ padding: '32px 40px 60px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
            Platform Configuration
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
            Manage global architectural triggers and compliance protocols for the entire enterprise ecosystem.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Row: Maintenance & Registration */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            
            {/* Maintenance Mode */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Maintenance Mode</h2>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Disable all public-facing services for scheduled maintenance.</p>
                </div>
                {/* Toggle Switch Off */}
                <Toggle defaultChecked={false} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Custom Downtime Message</label>
                <textarea 
                  defaultValue="The system is currently undergoing scheduled maintenance. Please check back in 2 hours."
                  style={{ width: '100%', minHeight: '80px', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--muted)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontSize: '13px', fontWeight: '600' }}>
                <AlertTriangle size={16} />
                <span>Activating this will disconnect all active sessions immediately.</span>
              </div>
            </div>

            {/* User Registration */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 24px' }}>User Registration</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Allow New Sign-ups</span>
                  {/* Toggle Switch On */}
                  <Toggle defaultChecked={true} />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Email Domain Whitelist</span>
                  {/* Toggle Switch Off */}
                  <Toggle defaultChecked={false} />
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', margin: '8px 0 0', paddingTop: '20px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Maximum Concurrent Sessions</label>
                  <input 
                    type="number" 
                    defaultValue="3"
                    style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Middle Row: KYC & Thresholds */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            
            {/* KYC & Compliance */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text)' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>KYC & Compliance</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Level 1: Basic</label>
                  <div style={{ position: 'relative' }}>
                    <select 
                      defaultValue="Self-Declaration"
                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc' }}
                    >
                      <option value="Self-Declaration">Self-Declaration</option>
                    </select>
                    <div style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: '#0f172a', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Verification Logic</label>
                  <select 
                    defaultValue="Automated API Only"
                    style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', backgroundColor: '#f8fafc' }}
                  >
                    <option value="Automated API Only">Automated API Only</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Level 2: Advanced</label>
                  <div style={{ position: 'relative' }}>
                    <select 
                      defaultValue="Biometric ID Scan"
                      style={{ width: '100%', height: '40px', padding: '0 36px 0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none', appearance: 'none', backgroundColor: '#f8fafc' }}
                    >
                      <option value="Biometric ID Scan">Biometric ID Scan</option>
                    </select>
                    <div style={{ position: 'absolute', right: '12px', top: '12px', width: '14px', height: '14px', background: '#0f172a', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Retrial Period</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input 
                      type="number" 
                      defaultValue="24"
                      style={{ width: '80px', height: '40px', padding: '0 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: 'var(--text)', outline: 'none' }}
                    />
                    <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '600' }}>Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-Approval Thresholds */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 24px' }}>Auto-Approval Thresholds</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Standard Claims Approval</span>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>$5,000</strong>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Refund Limit (Unverified)</span>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>$250</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button type="button" style={{ flex: 1, padding: '0 12px', height: '36px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '12px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
                  Reset to Factory Defaults
                </button>
                <button type="button" style={{ flex: 1, padding: '0 12px', height: '36px', background: '#1e1b4b', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
                  Update Thresholds
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Table: Recent Configuration Changes */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Recent Configuration Changes</h2>
              <a href="#" style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>View Full Audit Log</a>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Administrator</th>
                    <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Action</th>
                    <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Scope</th>
                    <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date</th>
                    <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e0e7ff', color: '#4338ca', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px', fontWeight: '800' }}>MS</div>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Marcus Sterling</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--text)' }}>Toggled 'Maintenance Mode' OFF</td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--muted)' }}>Global/Public</td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--muted)' }}>Oct 24, 09:42 AM</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ padding: '4px 8px', background: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0', borderRadius: '4px', fontSize: '11px', fontWeight: '800', letterSpacing: '0.5px' }}>SUCCESS</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e0e7ff', color: '#4338ca', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px', fontWeight: '800' }}>EL</div>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Elena Lundqvist</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--text)' }}>Updated KYC threshold to 'Level 2'</td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--muted)' }}>EU Region</td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--muted)' }}>Oct 23, 04:15 PM</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ padding: '4px 8px', background: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0', borderRadius: '4px', fontSize: '11px', fontWeight: '800', letterSpacing: '0.5px' }}>SUCCESS</span>
                    </td>
                  </tr>
                </tbody>
              </table></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
            <button type="button" style={{ padding: '0 20px', height: '44px', background: '#f8fafc', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '700', color: 'var(--muted)', cursor: 'pointer' }}>
              Discard All Changes
            </button>
            <button type="button" style={{ padding: '0 24px', height: '44px', background: '#1e1b4b', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
              Commit Configuration Changes
            </button>
          </div>

        </div>
      </div>
    </AdminShell>
  );
}
