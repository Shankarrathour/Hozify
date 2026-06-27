import React from 'react';
import { MessageSquare, RefreshCcw, Eye, Globe, MessageCircle, CheckCircle2, Pencil, Check, X, Clock, CheckCircle } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function SmsGatewayManagement() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', marginBottom: '24px' }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Header */}
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
                Messaging Infrastructure
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
                Configure multi-channel communication APIs and monitor global throughput across Twilio and Meta WhatsApp gateways.
              </p>
            </div>

            {/* SMS Configuration */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: '#fee2e2', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare size={20} color="#ef4444" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>SMS Configuration</h2>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Current Provider: Twilio (Live)</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>CONNECTED</span>
                  <RefreshCcw size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Account SID</label>
                  <input type="text" value="AC77e838f9e0129a039d91f9b" readOnly style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', background: '#f8fafc', fontSize: '13px', color: 'var(--text)', outline: 'none', boxSizing: 'border-box', fontFamily: 'monospace' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Auth Token</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', background: '#f8fafc' }}>
                    <input type="password" value="************************" readOnly style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', color: 'var(--text)', fontFamily: 'monospace' }} />
                    <Eye size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Advanced Routing</label>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={16} color="#475569" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', margin: '0 0 2px' }}>Global Fallback Strategy</h3>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Automatically reroute via MessageBird if Twilio latency &gt; 500ms</p>
                    </div>
                  </div>
                  <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '40px', height: '24px', background: '#1e1b4b', borderRadius: '12px', padding: '2px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', cursor: 'pointer' }}>
                    <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row inside Left Column: WhatsApp & Templates */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              
              {/* WhatsApp API (Meta) */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#dcfce7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={18} color="#16a34a" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>WhatsApp API (Meta)</h3>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Verified Business Manager: ID_99210</span>
                  </div>
                </div>

                <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>WABA Account Status</h4>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Live Traffic Active</span>
                  </div>
                  <CheckCircle2 size={18} color="#16a34a" />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Phone Number ID</label>
                  <input type="text" value="109283746505928" readOnly style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', fontSize: '13px', color: 'var(--text)', outline: 'none', boxSizing: 'border-box', background: '#f8fafc' }} />
                </div>

                <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '100%', height: '40px', background: '#fff', border: '1px solid #1e1b4b', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#1e1b4b', cursor: 'pointer', marginTop: 'auto' }}>
                  Configure Webhooks
                </button>
              </div>

              {/* Message Templates */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>Message Templates</h3>
                  <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '10px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', padding: 0 }}>
                    + New Template
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Template 1 */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ background: '#f1f5f9', color: '#475569', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>AUTHENTICATION</span>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>otp_verification_global</span>
                      </div>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>Your {'{{1}}'} verification code is: {'{{2}}'}. Valid for 5 mins.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                      <span style={{ color: '#16a34a', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>APPROVED</span>
                    </div>
                  </div>

                  {/* Template 2 */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ background: '#f1f5f9', color: '#475569', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>UTILITY</span>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>order_update_confirmation</span>
                      </div>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>Hello {'{{1}}'}, your order {'{{2}}'} has been shipped via {'{{3}}'}.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                      <span style={{ color: '#16a34a', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>APPROVED</span>
                      <Pencil size={12} color="#94a3b8" style={{ cursor: 'pointer', position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)' }} />
                    </div>
                  </div>

                  {/* Template 3 */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ background: '#f1f5f9', color: '#475569', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>MARKETING</span>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>seasonal_promotion_flash</span>
                      </div>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>Flash sale alert! Get {'{{1}}'}% off your next purchase with code.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                      <span style={{ color: '#d97706', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>PENDING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '40px' }}>
            
            {/* Available Credits */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 8px' }}>Available Credits</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginBottom: '8px' }}>$4,829.40</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a' }}></span> Balance Healthy
                  </div>
                </div>
                <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '36px', padding: '0 16px', background: '#1e1b4b', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer' }}>
                  Add Funds
                </button>
              </div>
            </div>

            {/* Throughput */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 20px' }}>Throughput (24H)</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Delivered</span>
                <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)' }}>124,092</span>
              </div>
              
              <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px', marginBottom: '20px', display: 'flex' }}>
                 <div style={{ width: '99%', height: '100%', background: '#1e1b4b', borderRadius: '2px 0 0 2px' }}></div>
                 <div style={{ width: '1%', height: '100%', background: '#ef4444', borderRadius: '0 2px 2px 0' }}></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Failed / Bounced</span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#ef4444' }}>421 (0.3%)</span>
              </div>
            </div>

            {/* API Status */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>API Status</h3>
                <span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>OPERATIONAL</span>
              </div>

              {/* Bar Chart Mockup */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px' }}>
                <div style={{ flex: 1, background: '#22c55e', height: '40%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '60%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '80%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '50%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '70%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#eab308', height: '30%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '90%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '100%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '85%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '65%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '95%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ flex: 1, background: '#22c55e', height: '100%', borderRadius: '2px 2px 0 0' }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Recent Logs */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>Recent Logs</h2>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '32px', padding: '0 12px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', cursor: 'pointer' }}>
                All Channels
              </button>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '32px', padding: '0 12px', background: '#fff', border: '1px solid #1e1b4b', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#1e1b4b', cursor: 'pointer' }}>
                View All Logs
              </button>
            </div>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '0 0 12px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Timestamp</th>
                <th style={{ padding: '0 0 12px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Channel</th>
                <th style={{ padding: '0 0 12px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recipient</th>
                <th style={{ padding: '0 0 12px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                <th style={{ padding: '0 0 12px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Provider</th>
                <th style={{ padding: '0 0 12px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Oct 24, 14:02:11</td>
                <td style={{ padding: '16px 0' }}><span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>WHATSAPP</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)', fontFamily: 'monospace' }}>+1 *** **9 1284</td>
                <td style={{ padding: '16px 0' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontSize: '12px', fontWeight: '600' }}><Check size={14} /> Delivered</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Meta Gateway</td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)' }}>210ms</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Oct 24, 14:01:58</td>
                <td style={{ padding: '16px 0' }}><span style={{ background: '#fee2e2', color: '#ef4444', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>SMS</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)', fontFamily: 'monospace' }}>+44 ** *** 4482</td>
                <td style={{ padding: '16px 0' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontSize: '12px', fontWeight: '600' }}><Check size={14} /> Delivered</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Twilio US-East</td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)' }}>412ms</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Oct 24, 14:01:42</td>
                <td style={{ padding: '16px 0' }}><span style={{ background: '#fee2e2', color: '#ef4444', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>SMS</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)', fontFamily: 'monospace' }}>+61 ** *** 1192</td>
                <td style={{ padding: '16px 0' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontSize: '12px', fontWeight: '600' }}><X size={14} /> Undelivered</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Twilio Global</td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)' }}>1.2s</td>
              </tr>
              <tr>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Oct 24, 14:00:15</td>
                <td style={{ padding: '16px 0' }}><span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px' }}>WHATSAPP</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)', fontFamily: 'monospace' }}>+1 *** **4 8839</td>
                <td style={{ padding: '16px 0' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--muted)', fontSize: '12px', fontWeight: '600' }}><Clock size={14} /> Sent</span></td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text)' }}>Meta Gateway</td>
                <td style={{ padding: '16px 0', fontSize: '12px', color: 'var(--muted)' }}>180ms</td>
              </tr>
            </tbody>
          </table></div>
        </div>

      </div>

      {/* Toast Notification */}
      <div style={{ position: 'fixed', bottom: '24px', right: '40px', background: '#0f172a', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>
        <CheckCircle color="#fff" size={20} />
        <div>
          <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#fff', margin: '0 0 4px' }}>System Synced</h4>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Message delivery rates updated for Twilio.</p>
        </div>
      </div>
    </AdminShell>
  );
}
