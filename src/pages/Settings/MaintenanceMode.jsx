import React from 'react';
import { PenTool, AlertCircle } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function MaintenanceMode() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px' }}>
            Maintenance Mode
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            Temporarily disable system access for scheduled updates and hotfixes.
          </p>
        </div>

        {/* Maintenance Card */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', background: '#fee2e2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PenTool size={24} color="#ef4444" />
            </div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>System Maintenance</h2>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Control user access to the storefront and dashboard.</p>
            </div>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Current System Status</h4>
              <p style={{ fontSize: '12px', color: '#16a34a', margin: 0, fontWeight: '600' }}>All systems operational (Live)</p>
            </div>
            <div style={{ width: '56px', height: '32px', background: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', padding: '3px', boxSizing: 'border-box', justifyContent: 'flex-start', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ width: '26px', height: '26px', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Public Announcement Message</label>
            <textarea 
              placeholder="e.g. System is undergoing scheduled maintenance. We'll be back at 04:00 UTC."
              style={{ width: '100%', height: '120px', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', fontSize: '14px', color: '#0f172a', boxSizing: 'border-box', outline: 'none', resize: 'vertical', lineHeight: '1.5' }}
            />
            <p style={{ fontSize: '11px', color: '#64748b', margin: '8px 0 0' }}>This message will be displayed to all users attempting to access the platform during maintenance.</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', background: '#fef2f2', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px' }}>
            <AlertCircle size={16} />
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>REQUIRES ADMIN 2FA CONFIRMATION TO ACTIVATE</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <button style={{ height: '44px', padding: '0 24px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}>
              Discard Changes
            </button>
            <button style={{ height: '44px', padding: '0 32px', background: '#312e81', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
              Save Maintenance State
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
