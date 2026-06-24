import React from 'react';
import { 
  Smartphone, MessageSquare, Monitor, Laptop, 
  ShieldCheck
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function SecuritySettings() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px', maxWidth: '1100px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
            Security Settings
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
            Manage your enterprise security protocols and authentication methods.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Two-Factor Authentication (2FA) */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
              {/* Subtle background shield icon */}
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.04, pointerEvents: 'none' }}>
                <ShieldCheck size={180} />
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: '#eff6ff', color: '#3b82f6', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px', marginBottom: '16px', textTransform: 'uppercase' }}>
                  MULTI-FACTOR
                </span>
                <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: '0 0 12px' }}>
                  Two-Factor Authentication (2FA)
                </h2>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 32px', maxWidth: '450px', lineHeight: '1.6' }}>
                  Add an extra layer of security to your account by requiring more than just a password to log in.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Authenticator App */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '40px', height: '40px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <Smartphone size={20} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>Authenticator App</h3>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 24px', lineHeight: '1.6', flex: 1 }}>
                      Use apps like Google Authenticator or Microsoft Authenticator to generate verification codes.
                    </p>
                    <button style={{ width: '100%', height: '36px', background: '#0f172a', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
                      Set Up App
                    </button>
                  </div>

                  {/* SMS Verification */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '40px', height: '40px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <MessageSquare size={20} color="#475569" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>SMS Verification</h3>
                      <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        ACTIVE
                      </span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 24px', lineHeight: '1.6', flex: 1 }}>
                      Verification codes are sent to your mobile phone via text message. Phone ending in **** 4492.
                    </p>
                    <button style={{ width: '100%', height: '36px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
                      Change Number
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Sessions */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>Login Sessions</h2>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review and manage your active web and mobile sessions.</p>
                </div>
                <button style={{ height: '36px', padding: '0 16px', background: '#fff', border: '1px solid #ef4444', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#ef4444', cursor: 'pointer', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px' }}>
                  <span style={{ lineHeight: '1.2' }}>Sign out of all<br/>devices</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Session 1 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Laptop size={20} color="#475569" />
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>macOS Ventura • Chrome Browser</h4>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>San Francisco, USA • Current Session</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>IP: 192.168.1.45</span>
                </div>

                {/* Session 2 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Smartphone size={20} color="#475569" />
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>iPhone 14 Pro • Hozify App</h4>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>London, UK • 2 hours ago</p>
                    </div>
                  </div>
                  <button style={{ background: 'none', border: 'none', padding: 0, fontSize: '11px', fontWeight: '700', color: '#ef4444', cursor: 'pointer' }}>
                    Revoke
                  </button>
                </div>

                {/* Session 3 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Monitor size={20} color="#475569" />
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px' }}>Windows 11 • Edge Browser</h4>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Berlin, DE • 4 days ago</p>
                    </div>
                  </div>
                  <button style={{ background: 'none', border: 'none', padding: 0, fontSize: '11px', fontWeight: '700', color: '#ef4444', cursor: 'pointer' }}>
                    Revoke
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Advanced Protection Gradient Card */}
            <div style={{ background: 'linear-gradient(180deg, #f1f5f9 0%, #8b8ea5 50%, #4b4b60 100%)', borderRadius: '12px', padding: '32px', color: '#fff', height: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', margin: '0 0 8px', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>Advanced Protection</h2>
              <p style={{ fontSize: '12px', margin: 0, opacity: 0.9, lineHeight: '1.5', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                Our security protocols utilize machine learning to detect anomalies in real-time.
              </p>
            </div>

            {/* Account Recovery */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <ShieldCheck size={20} color="#0f172a" />
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Account Recovery</h2>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 24px', lineHeight: '1.6' }}>
                Ensure you can always access your account if you lose your 2FA device or forget your password.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Recovery Codes */}
                <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>Recovery Codes</h4>
                    <span style={{ display: 'inline-block', background: '#e2e8f0', color: '#475569', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>NOT SAVED</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0 0 16px', lineHeight: '1.5' }}>
                    Generate a set of one-time codes to use if you lose access to your authenticator.
                  </p>
                  <button style={{ background: 'none', border: 'none', padding: 0, fontSize: '11px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>
                    Generate New Codes
                  </button>
                </div>

                {/* Recovery Email */}
                <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', margin: 0 }}>Recovery Email</h4>
                    <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>VERIFIED</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--text)', margin: '0 0 16px', fontWeight: '500' }}>
                    secondary_admin@hozify.com
                  </p>
                  <button style={{ background: 'none', border: 'none', padding: 0, fontSize: '11px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>
                    Change Email
                  </button>
                </div>
              </div>

              {/* Security Score */}
              <div style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--muted)' }}>Security Score</span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>84%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '84%', height: '100%', background: '#0f172a', borderRadius: '2px' }}></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}
