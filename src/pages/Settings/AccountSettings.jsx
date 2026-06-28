import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { useToast } from '../../components/common/ToastNotification';
import { Save, X, Settings, Bell, Globe, Moon, Clock, Mail, User } from 'lucide-react';

export default function AccountSettings() {
  const { session, navigate } = useApp();
  const { addToast } = useToast();

  const userName = session?.user?.name || 'Alex Sterling';
  const email = session?.user?.email || 'alex.sterling@hozify.com';

  const [settings, setSettings] = useState({
    name: userName,
    username: 'alex_sterling_super',
    email: email,
    phone: '+91 98765 43210',
    notifyBookings: true,
    notifyPayments: true,
    notifySystemAlerts: false,
    language: 'English (US)',
    theme: 'Light',
    timezone: 'Asia/Kolkata (GMT+05:30)',
    marketingEmails: true,
    securityEmails: true
  });

  const handleSave = (e) => {
    e.preventDefault();
    addToast('Account settings saved successfully!', 'success');
  };

  const handleCancel = () => {
    navigate('/my-profile');
    addToast('Changes discarded.', 'info');
  };

  return (
    <AdminShell activeTab="Settings" headerTitle="Account Settings">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Breadcrumbs */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Settings &gt; <span style={{ color: '#2A2454' }}>Account Settings</span>
        </div>

        {/* Page Heading */}
        <div>
          <h1 className="custom-page-heading" style={{ margin: '0 0 6px 0' }}>Account Settings</h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Configure personal details, system themes, notifications, and localization settings.</p>
        </div>

        {/* Settings Container */}
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Section 1: Personal Details */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={16} /> Personal Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Full Name</label>
                <input 
                  type="text" 
                  value={settings.name}
                  onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Username</label>
                <input 
                  type="text" 
                  value={settings.username}
                  onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Email Address</label>
                <input 
                  type="email" 
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Phone Number</label>
                <input 
                  type="text" 
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Localization */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={16} /> Preferences &amp; Localization
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Language</label>
                <select 
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', background: '#fff' }}
                >
                  <option value="English (US)">English (US)</option>
                  <option value="Hindi">Hindi (हिन्दी)</option>
                  <option value="Spanish">Spanish (Español)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Theme Mode</label>
                <select 
                  value={settings.theme}
                  onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', background: '#fff' }}
                >
                  <option value="Light">Light Mode</option>
                  <option value="Dark">Dark Mode</option>
                  <option value="System">System Default</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Time Zone</label>
                <select 
                  value={settings.timezone}
                  onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', background: '#fff' }}
                >
                  <option value="Asia/Kolkata (GMT+05:30)">Asia/Kolkata (GMT+05:30)</option>
                  <option value="UTC (GMT+00:00)">UTC (GMT+00:00)</option>
                  <option value="America/New_York (GMT-05:00)">America/New_York (GMT-05:00)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Notification Alerts */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell size={16} /> Notification Alerts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={settings.notifyBookings}
                  onChange={(e) => setSettings({ ...settings, notifyBookings: e.target.checked })}
                />
                Receive real-time alerts for booking assignments and re-assignments
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={settings.notifyPayments}
                  onChange={(e) => setSettings({ ...settings, notifyPayments: e.target.checked })}
                />
                Receive payouts and weekly settlement transaction alerts
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={settings.notifySystemAlerts}
                  onChange={(e) => setSettings({ ...settings, notifySystemAlerts: e.target.checked })}
                />
                Receive warning notifications for price spikes or database load thresholds
              </label>
            </div>
          </div>

          {/* Section 4: Email Subscriptions */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} /> Email Preferences
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={settings.marketingEmails}
                  onChange={(e) => setSettings({ ...settings, marketingEmails: e.target.checked })}
                />
                Receive marketing newsletters, campaign releases, and promo code launches
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={settings.securityEmails}
                  onChange={(e) => setSettings({ ...settings, securityEmails: e.target.checked })}
                />
                Receive critical security warning emails and login notification logs (Recommended)
              </label>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button type="button" onClick={handleCancel} className="custom-btn-secondary" style={{ height: '38px', padding: '0 20px' }}>
              Cancel
            </button>
            <button type="submit" className="custom-btn-primary" style={{ height: '38px', padding: '0 20px' }}>
              <Save size={14} style={{ marginRight: '6px' }} /> Save Changes
            </button>
          </div>

        </form>

      </div>
    </AdminShell>
  );
}
