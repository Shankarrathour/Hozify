import React, { useState } from 'react';
import AdminShell from '../../../../../components/layouts/AdminShell';
import Toggle from '../../../../../components/common/Toggle';
import { useToast } from '../../../../../components/common/ToastNotification';
import { 
  AlertTriangle, ShieldCheck, Clock, Settings, Users, Server, FileText, CheckCircle2, Lock, X
} from 'lucide-react';

export default function MaintenanceModePage() {
  const { addToast } = useToast();
  const [maintenanceActive, setMaintenanceActive] = useState(false);
  const [targetApps, setTargetApps] = useState('Both'); // 'User App' | 'Partner App' | 'Both'
  const [downtimeMessage, setDowntimeMessage] = useState('Hozify is currently undergoing scheduled platform upgrades to serve you better. We will be back online shortly.');
  const [whitelistIps, setWhitelistIps] = useState('127.0.0.1, 192.168.1.1, 103.54.21.90');
  
  // 2FA Verification Modal
  const [show2Fa, setShow2Fa] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);

  const handleToggleState = (checked) => {
    // Show 2FA confirmation before changing state
    setShow2Fa(true);
  };

  const handleOtpChange = (index, val) => {
    if (isNaN(val)) return;
    const nextOtp = [...otpCode];
    nextOtp[index] = val;
    setOtpCode(nextOtp);

    // Auto-focus next input
    if (val && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerify2Fa = () => {
    const codeStr = otpCode.join('');
    if (codeStr.length < 6) {
      addToast('Please enter a valid 6-digit confirmation code.', 'error');
      return;
    }

    const nextState = !maintenanceActive;
    setMaintenanceActive(nextState);
    setShow2Fa(false);
    setOtpCode(['', '', '', '', '', '']);
    
    if (nextState) {
      addToast('System Maintenance Mode activated! Targeted client apps will show downtime message.', 'success');
    } else {
      addToast('System Maintenance Mode deactivated! All client applications restored to online status.', 'success');
    }
  };

  return (
    <AdminShell activeTab="CMS" headerTitle="Application Maintenance Center">
      <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#2A2454' }}>Maintenance Mode</span>
        </div>

        {/* Page Heading */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', background: '#fee2e2', color: '#dc2626', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
            CRITICAL OPS
          </span>
          <h1 className="custom-page-heading" style={{ margin: '0 0 8px 0' }}>
            System Maintenance Mode
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            Put client applications into down-state during system upgrades while permitting developer IP access.
          </p>
        </div>

        {/* Status Panel */}
        <div 
          className="panel" 
          style={{ 
            background: maintenanceActive ? '#fffbeb' : '#fff', 
            border: maintenanceActive ? '1px solid #f59e0b' : '1px solid var(--line)', 
            borderRadius: '12px', 
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div 
              style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                background: maintenanceActive ? '#fef3c7' : '#ecfdf5', 
                color: maintenanceActive ? '#d97706' : '#059669', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <AlertTriangle size={24} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '16px', color: 'var(--text)' }}>
                Status: {maintenanceActive ? 'ACTIVE (DOWN TIME)' : 'INACTIVE (ONLINE)'}
              </strong>
              <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                {maintenanceActive 
                  ? 'All targeted mobile clients are currently blocked by the downtime screen.' 
                  : 'All client services are functional and routing API requests normally.'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Toggle Status
            </span>
            <Toggle checked={maintenanceActive} onChange={handleToggleState} />
          </div>
        </div>

        {/* Configuration Forms */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          
          {/* Settings Column */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid var(--line)', paddingBottom: '12px', margin: 0 }}>
              Downtime Rules & parameters
            </h3>

            {/* Target Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Target Application Clients</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['User App', 'Partner App', 'Both'].map(app => (
                  <button
                    key={app}
                    onClick={() => setTargetApps(app)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: targetApps === app ? '2px solid #25108f' : '1px solid var(--line)',
                      background: targetApps === app ? '#eee9f6' : '#fff',
                      color: targetApps === app ? '#25108f' : 'var(--text)',
                      fontWeight: '700',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px'
                    }}
                  >
                    {app}
                  </button>
                ))}
              </div>
            </div>

            {/* Downtime Message */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Public Downtime Message</label>
              <textarea
                rows={3}
                value={downtimeMessage}
                onChange={(e) => setDowntimeMessage(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', outline: 'none', resize: 'none', lineHeight: '1.5' }}
              />
            </div>

            {/* Whitelisting */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Whitelisted IP Addresses (Comma Separated)</label>
              <input
                type="text"
                value={whitelistIps}
                onChange={(e) => setWhitelistIps(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
              <small style={{ color: 'var(--muted)', display: 'block', marginTop: '6px', fontSize: '11px' }}>
                API calls matching these origin IPs will bypass the maintenance check and run normally.
              </small>
            </div>

            <div>
              <button 
                onClick={() => addToast('Maintenance configurations updated successfully.', 'success')}
                className="custom-btn-primary"
                style={{ float: 'right' }}
              >
                Save Configs
              </button>
            </div>
          </div>

          {/* Guidelines Sidebar */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px', margin: 0 }}>
              Deployment Guidelines
            </h3>
            <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '12px', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '1.4' }}>
              <li><strong>Inform Users Early:</strong> Pre-schedule campaigns to notify users of planned down window via push notices.</li>
              <li><strong>Developer Sandbox:</strong> Ensure your office IP is in the whitelist before activating to prevent lockout.</li>
              <li><strong>Rollback Protocol:</strong> Keep failover gateway links active in settings configuration prior to starting database migrations.</li>
            </ul>
          </div>

        </div>

      </div>

      {/* 2FA Verification Modal Dialog */}
      {show2Fa && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(8,15,34,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', maxWidth: '400px', width: '90%', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
            <button 
              onClick={() => { setShow2Fa(false); setOtpCode(['', '', '', '', '', '']); }}
              style={{ position: 'absolute', right: '16px', top: '16px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}
            >
              <X size={20} />
            </button>
            
            <div style={{ width: '48px', height: '48px', background: '#fee2e2', color: '#dc2626', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', margin: '0 auto' }}>
              <Lock size={22} />
            </div>

            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Confirm Operations Authority</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px', margin: 0 }}>
                Please enter the 6-digit confirmation code generated by your Authenticator app to proceed.
              </p>
            </div>

            {/* OTP Code Input Slots */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', margin: '12px 0' }}>
              {otpCode.map((val, idx) => (
                <input
                  key={idx}
                  id={`otp-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  style={{
                    height: '46px',
                    width: '100%',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: '700',
                    outline: 'none',
                    background: '#f8fafc'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <button 
                onClick={() => { setShow2Fa(false); setOtpCode(['', '', '', '', '', '']); }}
                style={{ flex: 1, padding: '10px', background: '#fff', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={handleVerify2Fa}
                className="custom-btn-primary"
                style={{ flex: 1, height: '38px', padding: 0 }}
              >
                Confirm Verify
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminShell>
  );
}
