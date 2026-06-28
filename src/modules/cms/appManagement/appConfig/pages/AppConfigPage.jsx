import React, { useState } from 'react';
import AdminShell from '../../../../../components/layouts/AdminShell';
import { useToast } from '../../../../../components/common/ToastNotification';
import { 
  Settings, Database, Shield, ShieldAlert, CheckCircle2, RefreshCw, Save, Trash2, Link, Clock
} from 'lucide-react';

export default function AppConfigPage() {
  const { addToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState('Core Gateway');

  // Config fields
  const [gatewayUrl, setGatewayUrl] = useState('https://api.production.hozify.com/v1');
  const [secondaryGateway, setSecondaryGateway] = useState('https://api-backup.production.hozify.com/v1');
  const [cacheTtl, setCacheTtl] = useState('3600');
  const [maxRetries, setMaxRetries] = useState('3');
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [emergencyPhone, setEmergencyPhone] = useState('+919876543210');
  const [apiKey, setApiKey] = useState('hz_prod_pk_live_84f9j2n90f12');

  const handleSave = () => {
    addToast('Global App Configuration parameters saved successfully!', 'success');
  };

  const handlePurgeCache = () => {
    addToast('Triggering client application cache purge across production servers...', 'info');
    setTimeout(() => {
      addToast('Application cache purged successfully! Affected users will load updated metadata.', 'success');
    }, 1500);
  };

  const renderConfigFields = () => {
    switch(activeSubTab) {
      case 'Core Gateway':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Primary API Gateway Endpoint</label>
              <input 
                type="text" 
                value={gatewayUrl} 
                onChange={(e) => setGatewayUrl(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Failover Secondary Endpoint</label>
              <input 
                type="text" 
                value={secondaryGateway} 
                onChange={(e) => setSecondaryGateway(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Emergency Operations Hotline</label>
              <input 
                type="text" 
                value={emergencyPhone} 
                onChange={(e) => setEmergencyPhone(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
            </div>
          </div>
        );
      case 'Cache & Performance':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Metadata Cache TTL (Seconds)</label>
              <input 
                type="number" 
                value={cacheTtl} 
                onChange={(e) => setCacheTtl(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Max API Retry Attempts</label>
              <input 
                type="number" 
                value={maxRetries} 
                onChange={(e) => setMaxRetries(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
            </div>
            <div style={{ marginTop: '12px' }}>
              <button 
                onClick={handlePurgeCache}
                className="custom-btn-secondary"
                style={{ color: '#ef4444', borderColor: '#fca5a5' }}
              >
                <Trash2 size={16} /> Purge Active App Cache
              </button>
            </div>
          </div>
        );
      case 'Security & Session Keys':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Active JWT Signature Token Secret Key</label>
              <input 
                type="text" 
                value={apiKey} 
                onChange={(e) => setApiKey(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none', fontFamily: 'monospace' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Customer App Idle Session Timeout (Mins)</label>
              <input 
                type="number" 
                value={sessionTimeout} 
                onChange={(e) => setSessionTimeout(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '14px', outline: 'none' }}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AdminShell activeTab="CMS" headerTitle="App Configuration Center">
      <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#2A2454' }}>App Configuration</span>
        </div>

        {/* Page Heading */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="custom-page-heading">App Configuration Console</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure platform variables, fallback gateways, cache boundaries, and API signatures.</p>
          </div>
          <button 
            onClick={handleSave}
            className="custom-btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Save size={16} /> Save Settings
          </button>
        </div>

        {/* Config Container */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1fr 3fr', gap: '24px', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden', minHeight: '400px' }}>
          
          {/* Tabs Sidebar */}
          <div style={{ borderRight: '1px solid var(--line)', background: '#f8fafc', padding: '16px 0' }}>
            {[
              { label: 'Core Gateway', icon: Link },
              { label: 'Cache & Performance', icon: Database },
              { label: 'Security & Session Keys', icon: Shield }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveSubTab(tab.label)}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    border: 'none',
                    background: isActive ? '#e0e7ff' : 'transparent',
                    color: isActive ? '#312e81' : '#475569',
                    fontWeight: isActive ? '700' : '600',
                    textAlign: 'left',
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderLeft: isActive ? '4px solid #312e81' : '4px solid transparent'
                  }}
                >
                  <Icon size={16} /> {tab.label}
                </button>
              );
            })}
          </div>

          {/* Form Fields Panel */}
          <div style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
              {activeSubTab} Configuration
            </h3>
            {renderConfigFields()}
          </div>

        </div>

      </div>
    </AdminShell>
  );
}
