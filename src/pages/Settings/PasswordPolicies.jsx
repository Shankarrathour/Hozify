import React from 'react';
import { 
  Shield, Lock, Clock, AlertTriangle 
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function PasswordPolicies() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px', maxWidth: '1100px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', marginBottom: '24px' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Global Password Standards */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
                <Shield size={14} /> ENTERPRISE SECURITY
              </div>
              <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px' }}>
                Global Password Standards
              </h1>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 32px', lineHeight: '1.6' }}>
                Enforce security protocols across all administrative accounts. Changes made here will affect 1,240 active directory profiles and take effect upon next login.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', background: '#f8fafc' }}>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', fontWeight: '700', marginBottom: '8px' }}>Last Update</span>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>Oct 12, 2023</span>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', background: '#f8fafc' }}>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', fontWeight: '700', marginBottom: '8px' }}>Policy Health</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1e1b4b' }}></span>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>Robust</span>
                  </div>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', background: '#f8fafc' }}>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', fontWeight: '700', marginBottom: '8px' }}>Compliance</span>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>SOC2 / HIPAA</span>
                </div>
              </div>
            </div>

            {/* Complexity Requirements */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Complexity Requirements</h2>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '12px', fontSize: '9px', fontWeight: '800', letterSpacing: '0.5px', color: '#475569' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#475569' }}></span> REAL-TIME VALIDATION
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                
                {/* Minimum Length */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Minimum Length</h4>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Must be at least 12<br/>characters</p>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>
                    12
                  </div>
                </div>

                {/* Mixed Case */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Mixed Case</h4>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Require uppercase &<br/>lowercase</p>
                  </div>
                  <div style={{ width: '36px', height: '20px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                    <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
                  </div>
                </div>

                {/* Special Characters */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Special Characters</h4>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Require symbols (!, @, #, $,<br/>etc.)</p>
                  </div>
                  <div style={{ width: '36px', height: '20px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                    <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
                  </div>
                </div>

                {/* Numeric Values */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Numeric Values</h4>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Require at least one number</p>
                  </div>
                  <div style={{ width: '36px', height: '20px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                    <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Rules & Expiration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Lockout Rules */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Lockout Rules</h2>
                <Lock size={16} color="#475569" />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>MAX LOGIN ATTEMPTS</label>
                <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ fontSize: '14px', color: 'var(--text)' }}></span>
                   <span style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>5</span>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>LOCKOUT DURATION</label>
                <select style={{ width: '100%', height: '40px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', fontSize: '13px', color: 'var(--text)', outline: 'none', background: '#fff', cursor: 'pointer' }}>
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                  <option>24 Hours</option>
                </select>
              </div>

              <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.5' }}>
                *Prevents brute-force attacks on identity endpoints.
              </p>
            </div>

            {/* Expiration Cycles */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 24px' }}>Expiration Cycles</h2>
              
              <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>PASSWORD LIFETIME</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '800', color: '#0f172a', lineHeight: '1', letterSpacing: '-1px' }}>90</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>DAYS</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <button style={{ flex: 1, height: '36px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', cursor: 'pointer' }}>30d</button>
                <button style={{ flex: 1, height: '36px', background: '#f8fafc', border: '1px solid #0f172a', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>90d</button>
                <button style={{ flex: 1, height: '36px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', cursor: 'pointer' }}>180d</button>
              </div>

              <div style={{ background: '#fff', border: '1px solid #fecaca', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '11px', color: '#ef4444', margin: 0, lineHeight: '1.5', fontWeight: '600' }}>
                  Frequent rotations are recommended by NIST for sensitive admin roles.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Card: History Retention */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px 32px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} color="#0f172a" />
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>History Retention</h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>Number of previous passwords users are restricted from reusing.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 12px' }}>
              <button style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', fontWeight: '700', fontSize: '16px' }}>-</button>
              <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', minWidth: '24px', textAlign: 'center' }}>5</span>
              <button style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', fontWeight: '700', fontSize: '16px' }}>+</button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '1px solid #e2e8f0', paddingLeft: '48px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text)', maxWidth: '120px' }}>Prevent identical match check</span>
              <div style={{ width: '36px', height: '20px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '12px', fontWeight: '700', color: 'var(--muted)', cursor: 'pointer', marginRight: '8px' }}>
            Restore Defaults
          </button>
          <button style={{ height: '36px', padding: '0 24px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
            Cancel changes
          </button>
          <button style={{ height: '36px', padding: '0 24px', background: '#0f172a', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
            Deploy Updated Policy
          </button>
        </div>

      </div>
    </AdminShell>
  );
}
