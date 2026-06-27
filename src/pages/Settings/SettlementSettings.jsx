import React from 'react';
import { Calendar, Clock, Plus, ShieldCheck, Zap, LayoutGrid, CalendarDays, UserCheck, DollarSign, Building, AlertOctagon, Pencil, Eye, MoreVertical, FileCheck, Activity, ShieldAlert, PauseCircle } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function SettlementSettings() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div className="settlement-settings-page" style={{ padding: '32px 40px 60px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
            Settlement Settings
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
            Configure automated payout frequencies, bank validation protocols, and processing thresholds for enterprise-level fund distribution.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Row: Frequency Schedule & Payout Threshold */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            
            {/* Frequency Schedule */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Frequency Schedule</h2>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Determine how often accumulated funds are batched for settlement.</p>
                </div>
                <Calendar size={20} style={{ color: '#0f172a' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                {/* Selected Card */}
                <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ border: '2px solid #4338ca', borderRadius: '6px', padding: '16px', cursor: 'pointer', background: '#fafaff' }}>
                  <Zap size={24} style={{ color: '#4338ca', marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#4338ca', margin: '0 0 6px' }}>Daily</h3>
                  <p style={{ fontSize: '11px', color: '#4f46e5', margin: 0, lineHeight: '1.4' }}>Cleared every 24 hours. Best for high-velocity cash flow.</p>
                </div>
                
                {/* Unselected Cards */}
                <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px', cursor: 'pointer' }}>
                  <LayoutGrid size={24} style={{ color: '#94a3b8', marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 6px' }}>Weekly</h3>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>Batched every Monday at 00:00 UTC. Standard business cycle.</p>
                </div>

                <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px', cursor: 'pointer' }}>
                  <CalendarDays size={24} style={{ color: '#94a3b8', marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 6px' }}>Monthly</h3>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>Processed on the 1st of each month. Consolidates overhead.</p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', margin: '0 0 12px' }}>Batch Processing Times (UTC)</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#f1f5f9', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: 'var(--text)' }}>
                    <Clock size={14} style={{ color: 'var(--muted)' }} /> 04:00 AM
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#f1f5f9', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: 'var(--text)' }}>
                    <Clock size={14} style={{ color: 'var(--muted)' }} /> 12:00 PM
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#f1f5f9', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: 'var(--text)' }}>
                    <Clock size={14} style={{ color: 'var(--muted)' }} /> 08:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Payout Threshold */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px' }}>Payout Threshold</h2>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Minimum Amount (USD)</label>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', height: '44px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--text)', marginRight: '4px' }}>$</span>
                  <input 
                    type="text" 
                    defaultValue="500.00"
                    style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}
                  />
                </div>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0 0 24px', fontStyle: 'italic' }}>
                Funds below this amount will roll over to the next period.
              </p>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '6px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Accumulated Balance</h3>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>As of today, 09:41 AM</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
                  $12,450.00
                </div>
              </div>

              <div style={{ background: '#1e1b4b', padding: '16px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#fff', margin: 0 }}>Estimated Next Payout</h3>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>
                  Oct 24, 2023
                </div>
              </div>
            </div>

          </div>

          {/* Bank Account Validation Rules - Redesigned */}
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' }}>
            
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px' }}>Bank Account Validation Rules</h2>
                <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Security and compliance requirements for merchant payout accounts.</p>
              </div>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} type="button" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#312E81', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#fff', cursor: 'pointer', transition: 'background-color 0.2s', ':hover': { background: '#282568' } }}>
                <Plus size={18} /> Add Custom Rule
              </button>
            </div>

            {/* Top Summary Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #f1f5f9' }}>
                <div style={{ background: '#e2e8f0', borderRadius: '8px', padding: '12px', color: '#475569' }}>
                  <FileCheck size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>Total Rules</p>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: 0 }}>4</h3>
                </div>
              </div>
              
              <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #dcfce7' }}>
                <div style={{ background: '#dcfce7', borderRadius: '8px', padding: '12px', color: '#16A34A' }}>
                  <Activity size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>Active Rules</p>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: 0 }}>3</h3>
                </div>
              </div>
              
              <div style={{ background: '#f5f3ff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #ede9fe' }}>
                <div style={{ background: '#ede9fe', borderRadius: '8px', padding: '12px', color: '#312E81' }}>
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#312E81', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>Mandatory Checks</p>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: 0 }}>3</h3>
                </div>
              </div>
              
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #f1f5f9' }}>
                <div style={{ background: '#e2e8f0', borderRadius: '8px', padding: '12px', color: '#64748B' }}>
                  <PauseCircle size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>Paused Rules</p>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: 0 }}>1</h3>
                </div>
              </div>
            </div>

            {/* Table Redesign */}
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 12px', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0 20px 12px', fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#fff', borderBottom: '1px solid #E2E8F0' }}>Validation Rule</th>
                  <th style={{ padding: '0 20px 12px', fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#fff', borderBottom: '1px solid #E2E8F0' }}>Description</th>
                  <th style={{ padding: '0 20px 12px', fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#fff', borderBottom: '1px solid #E2E8F0' }}>Priority</th>
                  <th style={{ padding: '0 20px 12px', fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#fff', borderBottom: '1px solid #E2E8F0' }}>Status</th>
                  <th style={{ padding: '0 20px 12px', fontSize: '12px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right', background: '#fff', borderBottom: '1px solid #E2E8F0' }}>Actions</th>
                </tr>
              </thead>
              <tbody style={{ background: '#fff' }}>
                
                {/* Row 1 */}
                <tr style={{ background: '#fff', boxShadow: 'inset 0 0 0 1px #E2E8F0', borderRadius: '12px', transition: 'all 0.2s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #cbd5e1, 0 4px 12px -2px rgba(0, 0, 0, 0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #E2E8F0'; }}>
                  <td style={{ padding: '20px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ background: '#f1f5f9', borderRadius: '50%', padding: '12px', color: '#475569', flexShrink: 0 }}>
                        <UserCheck size={20} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>KYC Compliance</strong>
                        <span style={{ fontSize: '13px', color: '#64748B' }}>Identity Verification</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '20px', fontSize: '14px', color: '#64748B', width: '35%', lineHeight: '1.5' }}>
                    Account holder identity must match merchant legal entity.
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-block', background: '#312E81', color: '#fff', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>Mandatory</span>
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dcfce7', color: '#16A34A', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A' }}></span> Active
                    </span>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'right', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Eye size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Pencil size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><MoreVertical size={18} /></button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr style={{ background: '#fff', boxShadow: 'inset 0 0 0 1px #E2E8F0', borderRadius: '12px', transition: 'all 0.2s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #cbd5e1, 0 4px 12px -2px rgba(0, 0, 0, 0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #E2E8F0'; }}>
                  <td style={{ padding: '20px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ background: '#f1f5f9', borderRadius: '50%', padding: '12px', color: '#475569', flexShrink: 0 }}>
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Micro-Deposit Verify</strong>
                        <span style={{ fontSize: '13px', color: '#64748B' }}>Ownership Check</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '20px', fontSize: '14px', color: '#64748B', width: '35%', lineHeight: '1.5' }}>
                    Confirm ownership via two random deposits under $0.50.
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-block', background: '#312E81', color: '#fff', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>Mandatory</span>
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dcfce7', color: '#16A34A', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A' }}></span> Active
                    </span>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'right', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Eye size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Pencil size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><MoreVertical size={18} /></button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr style={{ background: '#fff', boxShadow: 'inset 0 0 0 1px #E2E8F0', borderRadius: '12px', transition: 'all 0.2s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #cbd5e1, 0 4px 12px -2px rgba(0, 0, 0, 0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #E2E8F0'; }}>
                  <td style={{ padding: '20px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ background: '#f1f5f9', borderRadius: '50%', padding: '12px', color: '#475569', flexShrink: 0 }}>
                        <Building size={20} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>SWIFT/BIC Check</strong>
                        <span style={{ fontSize: '13px', color: '#64748B' }}>Bank Routing Validation</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '20px', fontSize: '14px', color: '#64748B', width: '35%', lineHeight: '1.5' }}>
                    Cross-verify routing codes with the global interbank database.
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-block', background: '#f1f5f9', color: '#64748B', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>Optional</span>
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f1f5f9', color: '#64748b', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>
                      <PauseCircle size={14} /> Paused
                    </span>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'right', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Eye size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Pencil size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><MoreVertical size={18} /></button>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr style={{ background: '#fff', boxShadow: 'inset 0 0 0 1px #E2E8F0', borderRadius: '12px', transition: 'all 0.2s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #cbd5e1, 0 4px 12px -2px rgba(0, 0, 0, 0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #E2E8F0'; }}>
                  <td style={{ padding: '20px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ background: '#f1f5f9', borderRadius: '50%', padding: '12px', color: '#475569', flexShrink: 0 }}>
                        <AlertOctagon size={20} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>Fraud Watchlist</strong>
                        <span style={{ fontSize: '13px', color: '#64748B' }}>Risk Screening</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '20px', fontSize: '14px', color: '#64748B', width: '35%', lineHeight: '1.5' }}>
                    Real-time screening against global sanction and fraud lists.
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-block', background: '#312E81', color: '#fff', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>Mandatory</span>
                  </td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dcfce7', color: '#16A34A', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A' }}></span> Active
                    </span>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'right', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Eye size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><Pencil size={18} /></button>
                      <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#334155'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}><MoreVertical size={18} /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table></div>
          </div>

          {/* Bottom Action Bar */}
          <div style={{ background: '#1e1b4b', borderRadius: '8px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShieldCheck size={24} style={{ color: '#c7d2fe' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: '#fff', margin: '0 0 2px' }}>End-to-End Encryption Enabled</strong>
                <span style={{ fontSize: '11px', color: '#a5b4fc' }}>All bank account modifications require multi-factor authorization.</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} type="button" style={{ padding: '0 20px', height: '36px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', fontSize: '11px', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer' }}>
                Discard Changes
              </button>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} type="button" style={{ padding: '0 24px', height: '36px', background: '#fff', border: 'none', borderRadius: '4px', fontSize: '11px', fontWeight: '800', color: '#1e1b4b', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer' }}>
                Save Settings
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminShell>
  );
}
