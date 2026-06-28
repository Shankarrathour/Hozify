import React from 'react';
import { CreditCard, Copy, Eye, CheckCircle, HelpCircle, FileText, ToggleRight, Activity, Server } from 'lucide-react';
import Toggle from '../../components/common/Toggle';
import AdminShell from '../../components/layouts/AdminShell';
import toast from 'react-hot-toast';

export default function PaymentGatewaySettings() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
              Payment Connectors
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
              Configure and manage your global payment gateway integrations.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ padding: '0 16px', height: '40px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={16} /> Audit Logs
            </button>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ padding: '0 16px', height: '40px', background: '#1e1b4b', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
               Save All Changes
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Row: Stripe & Network Health */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
            
            {/* Stripe Card */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: '#1e1b4b', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CreditCard size={24} color="#fff" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>Stripe Integration</h2>
                    <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>ACTIVE</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '500' }}>Live Mode</span>
                  <Toggle defaultChecked={true} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Publishable Key</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', background: '#f8fafc' }}>
                    <input type="password" value="pk_live_************************" readOnly style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', color: 'var(--text)', fontFamily: 'monospace' }} />
                    <Eye size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Secret Key</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', background: '#f8fafc' }}>
                    <input type="password" value="sk_live_************************" readOnly style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', color: 'var(--text)', fontFamily: 'monospace' }} />
                    <Eye size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Webhook URL</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', background: '#f8fafc', display: 'flex', alignItems: 'center' }}>
                    <input type="text" value="https://api.reportingengine.io/v1/webhooks/stripe" readOnly style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', color: 'var(--text)', fontFamily: 'monospace' }} />
                  </div>
                  <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', color: '#64748b' }}>
                    <Copy size={16} />
                  </button>
                </div>
                <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '8px 0 0' }}>Events to listen for: checkout.session.completed, invoice.paid, charge.refunded</p>
              </div>
            </div>

            {/* Network Health Card */}
            <div style={{ background: '#1e1b4b', borderRadius: '8px', padding: '24px', color: '#fff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '11px', fontWeight: '700', color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Network Health</h3>
                <Activity size={24} color="#3730a3" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
                <span style={{ fontSize: '36px', fontWeight: '800' }}>99.98%</span>
                <span style={{ fontSize: '13px', color: '#34d399', fontWeight: '600' }}>Stable</span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: '#a5b4fc' }}>Avg. Latency</span>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>142ms</span>
                </div>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', width: '100%' }}>
                   <div style={{ width: '70%', height: '100%', background: '#fff', borderRadius: '2px' }}></div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#a5b4fc' }}>24h Volume</span>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>$1.2M</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: '#a5b4fc' }}>Fail Rate</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#fb7185' }}>0.02%</span>
                </div>
              </div>

              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '100%', height: '40px', background: '#3730a3', border: 'none', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', marginTop: '24px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.background = '#4338ca'} onMouseLeave={(e) => e.target.style.background = '#3730a3'}>
                Refresh Diagnostics
              </button>
            </div>

          </div>

          {/* Bottom Row: PayPal & Razorpay */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            {/* PayPal */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#f0f9ff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <CreditCard size={18} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>PayPal</h3>
                </div>
                <span style={{ background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>SANDBOX</span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Client ID</label>
                <input type="text" placeholder="Enter PayPal Client ID" style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', fontSize: '13px', color: 'var(--text)', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Secret Key</label>
                <input type="password" defaultValue="****************" readOnly style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', fontSize: '13px', color: 'var(--text)', outline: 'none', boxSizing: 'border-box', background: '#f8fafc', fontFamily: 'monospace' }} />
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '13px', fontWeight: '600' }}>
                  <CheckCircle size={16} /> Verified credentials
                </div>
                <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                  Re-configure
                </button>
              </div>
            </div>

            {/* Razorpay */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#fef2f2', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                    <CreditCard size={18} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>Razorpay</h3>
                </div>
                <span style={{ background: '#fee2e2', color: '#b91c1c', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' }}>DISCONNECTED</span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Key ID</label>
                <input type="text" placeholder="rzp_live_..." disabled style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', fontSize: '13px', color: 'var(--muted)', outline: 'none', boxSizing: 'border-box', background: '#f8fafc' }} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Key Secret</label>
                <input type="password" placeholder="********" disabled style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', height: '40px', fontSize: '13px', color: 'var(--muted)', outline: 'none', boxSizing: 'border-box', background: '#f8fafc' }} />
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                 <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '100%', height: '40px', background: '#fff', border: '1px solid #1e1b4b', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#1e1b4b', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = '#fff'}>
                   Connect Razorpay
                 </button>
              </div>
            </div>

          </div>

          {/* Webhook Help Banner */}
          <div style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '64px', height: '64px', background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Server size={32} color="#64748b" />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Need help with Webhooks?</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>Read our comprehensive guide on securing your endpoint secrets and handling asynchronous event notifications efficiently.</p>
              </div>
            </div>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ padding: '0 20px', height: '40px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.background = '#f1f5f9'} onMouseLeave={(e) => e.target.style.background = '#fff'}>
              Documentation
            </button>
          </div>

        </div>
      </div>
    </AdminShell>
  );
}
