import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Plus,
  Mail,
  MessageSquare,
  Webhook,
  Bell,
  Clock,
  CheckCircle,
  HelpCircle,
  FileText,
  Sliders,
  Play,
  RotateCcw
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function NotificationPreferenceManagement({ activeTab = 'Notification Center' }) {
  // Dispatcher settings
  const [smtpEnabled, setSmtpEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [webhookEnabled, setWebhookEnabled] = useState(false);

  // Blackout settings
  const [blackoutEnabled, setBlackoutEnabled] = useState(true);

  // Alert Matrix
  const [events, setEvents] = useState([
    { id: 'ev-1', name: 'Revenue Threshold Breach', inApp: true, email: true, push: true },
    { id: 'ev-2', name: 'Executive Summary Reports', inApp: false, email: true, push: false },
    { id: 'ev-3', name: 'Account Provisioning & KYC', inApp: true, email: true, push: true },
    { id: 'ev-4', name: 'Anomaly & Fraud Variance', inApp: true, email: false, push: true },
    { id: 'ev-5', name: 'Settlement Ledger Sync Failures', inApp: true, email: true, push: false },
    { id: 'ev-6', name: 'Materials Dispatch Approval', inApp: false, email: true, push: true }
  ]);

  // Policy logs
  const [logs, setLogs] = useState([
    { type: 'reset', label: 'Default settings reset applied', user: 'Alex Sterling', time: 'Today, 02:40 PM' },
    { type: 'test', label: 'Webhook dispatcher payload verified', user: 'System (cron-node)', time: 'Today, 11:15 AM' },
    { type: 'override', label: 'Failure alert override trigger enabled', user: 'David Vance', time: 'Yesterday, 04:30 PM' },
    { type: 'update', label: 'SMS Quiet Hour rule updated to 22:00-08:00', user: 'Sarah Jenkins', time: 'June 12, 09:00 AM' }
  ]);

  const toggleEventChannel = (eventId, channel) => {
    setEvents(events.map(ev => {
      if (ev.id === eventId) {
        return { ...ev, [channel]: !ev[channel] };
      }
      return ev;
    }));
  };

  const handleExportPolicy = () => {
    alert('Exporting system routing policy to HCL JSON file format.');
  };

  const handleNewChannel = () => {
    alert('Registering a new notification provider channel endpoint.');
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Policy Config"
      headerTitle="Preference Management"
      searchPlaceholder="Search event alerts, channels, routing rules..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Notification Preference Management
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Map system alert levels to delivery channels and configure regional blackout overrides
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={handleExportPolicy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                fontSize: '13px',
                fontWeight: '700',
                height: '38px',
                padding: '0 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              type="button"
            >
              <FileSpreadsheet size={14} />
              <span>Export Policy</span>
            </button>

            <button
              onClick={handleNewChannel}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '700',
                height: '38px',
                padding: '0 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(37, 16, 143, 0.08)',
                transition: 'all 0.15s ease'
              }}
              type="button"
            >
              <Plus size={16} />
              <span>Add Custom Channel</span>
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2.2fr 1.8fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left Columns (Channel Settings & Logs) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Channel Delivery Settings */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Channel Delivery Gateways
              </h2>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: 0 }}>
                Activate or silence primary outgoing notification agents globally
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
                {/* SMTP Email */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', border: '1px solid var(--lavender)', background: '#fff' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '6px', background: '#eff6ff', color: '#1e40af' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--text)' }}>SMTP Email Dispatcher</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Amazon SES node - default template processor</span>
                    </div>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={smtpEnabled}
                      onChange={() => setSmtpEnabled(!smtpEnabled)}
                      style={{ height: '18px', width: '18px', accentColor: 'var(--primary)' }}
                      aria-label="Toggle SMTP dispatcher"
                    />
                  </label>
                </div>

                {/* SMS Campaigns */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', border: '1px solid var(--lavender)', background: '#fff' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '6px', background: '#ecfdf5', color: '#059669' }}>
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--text)' }}>SMS Campaign Gateway</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Twilio Gateway Node - regional smart routing</span>
                    </div>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={smsEnabled}
                      onChange={() => setSmsEnabled(!smsEnabled)}
                      style={{ height: '18px', width: '18px', accentColor: 'var(--primary)' }}
                      aria-label="Toggle SMS gateway"
                    />
                  </label>
                </div>

                {/* Webhook dispatchers */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', border: '1px solid var(--lavender)', background: '#fff' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '6px', background: '#f5f3ff', color: 'var(--primary)' }}>
                      <Webhook size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--text)' }}>Webhook Callback Streamers</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>External JSON POST events to partner API logs</span>
                    </div>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={webhookEnabled}
                      onChange={() => setWebhookEnabled(!webhookEnabled)}
                      style={{ height: '18px', width: '18px', accentColor: 'var(--primary)' }}
                      aria-label="Toggle Webhook callbacks"
                    />
                  </label>
                </div>
              </div>

              {/* Quiet hours configuration */}
              <div style={{ borderTop: '1px dashed var(--lavender)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Clock size={16} style={{ color: 'var(--muted)' }} />
                  <span style={{ fontSize: '13px', fontWeight: '750', color: 'var(--text)' }}>
                    Quiet Hours Blackout override rules: <span style={{ color: blackoutEnabled ? '#07956f' : 'var(--muted)' }}>{blackoutEnabled ? 'Active (22:00 - 08:00)' : 'Disabled'}</span>
                  </span>
                </div>
                <button
                  onClick={() => setBlackoutEnabled(!blackoutEnabled)}
                  style={{
                    height: '28px',
                    padding: '0 12px',
                    border: '1px solid var(--line)',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '800',
                    background: '#fff',
                    cursor: 'pointer',
                    color: 'var(--text)'
                  }}
                  type="button"
                >
                  {blackoutEnabled ? 'Disable Blackout' : 'Enable Blackout'}
                </button>
              </div>
            </div>

            {/* Policy Logs History (Timeline) */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Preference Policy Audit Logs
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', paddingLeft: '8px' }}>
                {/* Vertical timeline line */}
                <div style={{ position: 'absolute', left: '16px', top: '10px', bottom: '10px', width: '2px', background: 'var(--lavender)' }} />

                {logs.map((log, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: log.type === 'reset' ? '#fee2e2' : log.type === 'test' ? '#ecfdf5' : '#eff6ff',
                      border: '2px solid #fff',
                      boxShadow: '0 0 0 2px var(--lavender)',
                      marginTop: '2px'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: log.type === 'reset' ? '#dc2626' : log.type === 'test' ? '#059669' : '#1e40af'
                      }} />
                    </div>

                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>
                        {log.label}
                      </strong>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                        Modified by: {log.user} • {log.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Event Alerts Matrix (Right Sidebar Grid) */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                System Event Alert Rules Matrix
              </h2>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '4px 0 0' }}>
                Define which channels are triggered for each specific alert class
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {events.map((ev) => (
                <div
                  key={ev.id}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid var(--lavender)',
                    background: '#fcfbfd',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>
                    {ev.name}
                  </strong>

                  {/* Grid channels mapping checkboxes */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    
                    {/* In-App Checkbox */}
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      height: '32px',
                      borderRadius: '6px',
                      border: ev.inApp ? '1px solid var(--primary)' : '1px solid var(--line)',
                      background: ev.inApp ? 'rgba(37, 16, 143, 0.03)' : '#fff',
                      cursor: 'pointer',
                      fontSize: '11.5px',
                      fontWeight: '750',
                      color: ev.inApp ? 'var(--primary)' : 'var(--muted)'
                    }}>
                      <input
                        type="checkbox"
                        checked={ev.inApp}
                        onChange={() => toggleEventChannel(ev.id, 'inApp')}
                        style={{ display: 'none' }}
                      />
                      <Bell size={12} />
                      <span>In-App</span>
                    </label>

                    {/* Email Checkbox */}
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      height: '32px',
                      borderRadius: '6px',
                      border: ev.email ? '1px solid var(--primary)' : '1px solid var(--line)',
                      background: ev.email ? 'rgba(37, 16, 143, 0.03)' : '#fff',
                      cursor: 'pointer',
                      fontSize: '11.5px',
                      fontWeight: '750',
                      color: ev.email ? 'var(--primary)' : 'var(--muted)'
                    }}>
                      <input
                        type="checkbox"
                        checked={ev.email}
                        onChange={() => toggleEventChannel(ev.id, 'email')}
                        style={{ display: 'none' }}
                      />
                      <Mail size={12} />
                      <span>Email</span>
                    </label>

                    {/* Push Checkbox */}
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      height: '32px',
                      borderRadius: '6px',
                      border: ev.push ? '1px solid var(--primary)' : '1px solid var(--line)',
                      background: ev.push ? 'rgba(37, 16, 143, 0.03)' : '#fff',
                      cursor: 'pointer',
                      fontSize: '11.5px',
                      fontWeight: '750',
                      color: ev.push ? 'var(--primary)' : 'var(--muted)'
                    }}>
                      <input
                        type="checkbox"
                        checked={ev.push}
                        onChange={() => toggleEventChannel(ev.id, 'push')}
                        style={{ display: 'none' }}
                      />
                      <MessageSquare size={12} />
                      <span>Push</span>
                    </label>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}
