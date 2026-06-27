import React from 'react';
import { 
  MessageCircle, RefreshCw, Globe, CheckCircle2, 
  Check, Edit2, Clock, BarChart, Plus, AlertCircle
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function WhatsAppApiIntegration() {
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
            WhatsApp API Integration
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
            Configure Meta WhatsApp Business API settings, manage approved message templates, and monitor delivery throughput.
          </p>
        </div>

        {/* Top Section: Left (WhatsApp API + Templates) | Right (Metrics) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start', marginBottom: '24px' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* WhatsApp API (Meta) Configuration */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={20} color="#16a34a" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>WhatsApp API (Meta)</h2>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Verified Business Manager: ID_98210</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', fontSize: '11px', fontWeight: '800', letterSpacing: '0.5px' }}>
                  CONNECTED <RefreshCw size={14} color="#64748b" style={{ cursor: 'pointer' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>WABA ACCOUNT STATUS</label>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 16px', height: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: '600' }}>Live Traffic Active</span>
                    <CheckCircle2 size={16} color="#16a34a" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>PHONE NUMBER ID</label>
                  <input type="text" defaultValue="109283746505928" style={{ width: '100%', height: '40px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 16px', fontSize: '13px', color: '#475569', boxSizing: 'border-box', outline: 'none', fontFamily: 'monospace' }} readOnly />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>ADVANCED ROUTING</label>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', background: '#e2e8f0', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={16} color="#475569" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Global Fallback Strategy</h4>
                      <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Automatically reroute via alternative gateways if Meta latency &gt; 500ms</p>
                    </div>
                  </div>
                  <div style={{ width: '40px', height: '24px', background: '#16a34a', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>
                  </div>
                </div>
              </div>
              
              <div style={{ borderTop: '1px solid #e2e8f0', margin: '24px 0', padding: 0 }}></div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button style={{ height: '40px', padding: '0 24px', background: '#fff', border: '1px solid #0f172a', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>
                  Configure Webhooks
                </button>
              </div>
            </div>

            {/* Message Templates */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Message Templates</h2>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Synced from Meta Business Manager</p>
                </div>
                <button style={{ height: '36px', padding: '0 16px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '6px', fontSize: '11px', fontWeight: '800', color: '#0f172a', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Plus size={14} /> NEW TEMPLATE
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Template 1 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#475569', fontSize: '10px', fontWeight: '800', width: '90px', padding: '6px 0', borderRadius: '6px', letterSpacing: '0.5px' }}>AUTHENTICATION</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>otp_verification_global</h4>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Your {'{{1}}'} verification code is: {'{{2}}'}. Valid for 5 mins.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#16a34a', letterSpacing: '0.5px' }}>APPROVED</span>
                    <Edit2 size={14} color="#94a3b8" style={{ cursor: 'pointer' }} />
                  </div>
                </div>

                {/* Template 2 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#475569', fontSize: '10px', fontWeight: '800', width: '90px', padding: '6px 0', borderRadius: '6px', letterSpacing: '0.5px' }}>UTILITY</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>order_update_confirmation</h4>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Hello {'{{1}}'}, your order {'{{2}}'} has been shipped via {'{{3}}'}.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#16a34a', letterSpacing: '0.5px' }}>APPROVED</span>
                    <Edit2 size={14} color="#94a3b8" style={{ cursor: 'pointer' }} />
                  </div>
                </div>

                {/* Template 3 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#475569', fontSize: '10px', fontWeight: '800', width: '90px', padding: '6px 0', borderRadius: '6px', letterSpacing: '0.5px' }}>MARKETING</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>seasonal_promotion_flash</h4>
                    <p style={{ fontSize: '11px', color: '#64748b', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Flash sale alert! Get {'{{1}}'}% off your next purchase with code...</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#f59e0b', letterSpacing: '0.5px' }}>PENDING</span>
                    <Edit2 size={14} color="#94a3b8" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Metrics Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Available Credits */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>AVAILABLE CREDITS</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>$4,829.40</div>
                <button style={{ background: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px 16px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                  Add Funds
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a' }}></span>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#16a34a', letterSpacing: '0.5px' }}>BALANCE HEALTHY</span>
              </div>
            </div>

            {/* Throughput */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '24px' }}>THROUGHPUT (24H)</span>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Delivered</span>
                <span style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>124,092</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ width: '99%', height: '100%', background: '#0f172a', borderRadius: '2px' }}></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Failed / Bounced</span>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#dc2626' }}>421 (0.3%)</span>
              </div>
            </div>

            {/* API Status */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>API STATUS</span>
                <span style={{ display: 'inline-block', background: '#dcfce7', border: '1px solid #bbf7d0', color: '#16a34a', padding: '4px 8px', borderRadius: '4px', fontSize: '8px', fontWeight: '800', letterSpacing: '0.5px' }}>OPERATIONAL</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px' }}>
                {/* Fake Bar Chart */}
                <div style={{ flex: 1, background: '#22c55e', height: '60%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '75%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '65%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '80%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#eab308', height: '30%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '90%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '85%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '95%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '80%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '100%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '85%', borderRadius: '2px 2px 0 0' }}></div>
              </div>
              <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '4px' }}></div>
            </div>

          </div>

        </div>

        {/* Bottom Full-Width Section: Recent Logs */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Recent WhatsApp Logs</h2>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ height: '32px', padding: '0 16px', background: '#fff', border: '1px solid #0f172a', borderRadius: '6px', fontSize: '11px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>
                View All Logs
              </button>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TIMESTAMP</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CHANNEL</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>RECIPIENT</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>STATUS</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PROVIDER</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>LATENCY</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#334155' }}>Oct 24, 14:02:11</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>WHATSAPP</span>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#475569', fontFamily: 'monospace' }}>+1 *** **9 1284</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '11px', fontWeight: '700' }}>
                    <Check size={14} /> Delivered
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#334155' }}>Meta Gateway</td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#64748b', textAlign: 'right' }}>210ms</td>
              </tr>

              {/* Row 2 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#334155' }}>Oct 24, 14:00:15</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>WHATSAPP</span>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#475569', fontFamily: 'monospace' }}>+1 *** **4 8839</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: '700' }}>
                    <Clock size={14} /> Sent
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#334155' }}>Meta Gateway</td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#64748b', textAlign: 'right' }}>180ms</td>
              </tr>
              
              {/* Row 3 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#334155' }}>Oct 24, 13:55:02</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>WHATSAPP</span>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#475569', fontFamily: 'monospace' }}>+44 ** *** 7712</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '11px', fontWeight: '700' }}>
                    <Check size={14} /> Delivered
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#334155' }}>Meta Gateway</td>
                <td style={{ padding: '16px 24px', fontSize: '11px', color: '#64748b', textAlign: 'right' }}>192ms</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </AdminShell>
  );
}
