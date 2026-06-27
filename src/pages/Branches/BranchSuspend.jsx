import React, { useState } from 'react';
import { ShieldAlert, Calendar, Clock, AlertTriangle, AlertCircle, Trash2 } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function BranchSuspend() {
  const { navigate, currentBranchId } = useApp();
  const [reason, setReason] = useState('');
  const [duration, setDuration] = useState('Temporary'); // Temporary, Indefinite
  const [reactivateDate, setReactivateDate] = useState('');
  const [autoResume, setAutoResume] = useState(true);
  const [notes, setNotes] = useState('');

  // We can look up branch ID or default to North Sector Hub
  const branchId = currentBranchId || 'BR-9042';
  const branchName = branchId === 'BR-90210' ? 'Downtown Logistics Center' :
                     branchId === 'BR-7842' ? 'Uptown Service Hub' :
                     branchId === 'BR-5510' ? 'Industrial Zone East' : 'North Sector Hub';

  const handleSuspendSubmit = (e) => {
    e.preventDefault();
    alert(`Success: ${branchName} operations have been suspended.`);
    navigate(ROUTES.branches);
  };

  return (
    <AdminShell
      activeTab="Branches"
      headerTitle="Branch Manager"
      searchPlaceholder="Global search..."
    >
      <div className="branch-suspend-wrapper">
        
        {/* Breadcrumb & Header Title */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.branches)}>Branch Listing</span>
            <span>&gt;</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.branchSchedule)}>{branchName}</span>
            <span>&gt;</span>
            <span style={{ color: 'var(--text)', fontWeight: '700' }}>Branch Suspension</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h1 className="page-title" style={{ margin: 0 }}>Suspend Branch Operations</h1>
              <p className="page-subtitle" style={{ marginTop: '2px' }}>Immediate cessation of service mapping and performance tracking for {branchName} (ID: {branchId}).</p>
            </div>
            
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#059669', background: '#ecfdf5', padding: '4px 10px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }} />
              Currently Active
            </span>
          </div>
        </div>

        {/* Two Column Form Layout */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Form Block (Left) */}
          <div className="panel" style={{ flex: 1.8, padding: '24px' }}>
            
            {/* Warning Alert Box */}
            <div style={{ border: '1px solid #fee2e2', background: '#fef2f2', padding: '16px', borderRadius: '8px', marginBottom: '24px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#ef4444', marginTop: '2px' }}><AlertTriangle size={20} /></span>
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: '#991b1b', fontWeight: '800', marginBottom: '4px' }}>Critical Action Warning</strong>
                <p style={{ fontSize: '12px', color: '#b91c1c', margin: 0, lineHeight: '1.5' }}>
                  Suspending a branch will immediately disable all active service routes, prevent new customer intake, and stop automated performance reporting. This action is logged for compliance audit. Ensure all local managers have been notified.
                </p>
              </div>
            </div>

            {/* Action Form */}
            <form onSubmit={handleSuspendSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Reason & Duration row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="suspend-reason" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Reason for Action</label>
                  <select
                    id="suspend-reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    style={{ height: '38px', border: '1px solid var(--line)', padding: '0 10px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', outline: 'none', background: '#fff' }}
                    required
                  >
                    <option value="">Select a regulatory reason...</option>
                    <option value="regulatory">Regulatory Compliance Audit</option>
                    <option value="safety">Safety Hazard Reporting</option>
                    <option value="restructure">Operational Restructuring</option>
                    <option value="maintenance">Unscheduled System Maintenance</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Suspension Duration</span>
                  <div style={{ display: 'flex', gap: '8px', height: '38px' }}>
                    <button
                      type="button"
                      onClick={() => setDuration('Temporary')}
                      style={{ flex: 1, border: '1px solid var(--line)', background: duration === 'Temporary' ? '#eee9f6' : '#fff', color: duration === 'Temporary' ? 'var(--primary)' : 'var(--text)', fontWeight: '800', fontSize: '12px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      <Clock size={14} /> Temporary
                    </button>
                    <button
                      type="button"
                      onClick={() => setDuration('Indefinite')}
                      style={{ flex: 1, border: '1px solid var(--line)', background: duration === 'Indefinite' ? '#eee9f6' : '#fff', color: duration === 'Indefinite' ? 'var(--primary)' : 'var(--text)', fontWeight: '800', fontSize: '12px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      <span>∞</span> Indefinite
                    </button>
                  </div>
                </div>
              </div>

              {/* Reactivation Date & Auto Resume row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="reactivate-date" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Re-activation Date</label>
                  <input
                    type="date"
                    id="reactivate-date"
                    value={reactivateDate}
                    onChange={(e) => setReactivateDate(e.target.value)}
                    style={{ height: '38px', border: '1px solid var(--line)', padding: '0 10px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', outline: 'none', background: '#fff' }}
                    disabled={duration === 'Indefinite'}
                    required={duration === 'Temporary'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Auto-resume Operations</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setAutoResume(!autoResume)}
                      style={{ width: '38px', height: '20px', borderRadius: '10px', background: autoResume ? '#4f46e5' : '#cbd5e1', border: 'none', position: 'relative', cursor: 'pointer', outline: 'none' }}
                      aria-label="Toggle auto-resume"
                    >
                      <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '3px', left: autoResume ? '21px' : '3px', transition: 'left 0.2s' }} />
                    </button>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>Enable automated recovery at 00:00 UTC</span>
                  </div>
                </div>
              </div>

              {/* Notes justificatons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="internal-notes" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Internal Command Notes</label>
                <textarea
                  id="internal-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value.slice(0, 500))}
                  placeholder="Document the justification for this suspension. Notes are viewable by Regional Directors and Audit Teams."
                  style={{ height: '90px', border: '1px solid var(--line)', padding: '10px', borderRadius: '6px', fontSize: '13px', outline: 'none', resize: 'none' }}
                  required={duration === 'Indefinite'}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)', fontWeight: '700', marginTop: '2px' }}>
                  <span>{duration === 'Indefinite' ? 'Required for Indefinite suspension.' : ''}</span>
                  <span>{notes.length}/500 characters</span>
                </div>
              </div>

              {/* Cancel and Submit row */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid var(--line)', paddingTop: '20px', marginTop: '10px' }}>
                <button
                  onClick={() => navigate(ROUTES.branchSchedule)}
                  type="button"
                  style={{ border: 'none', background: 'transparent', color: 'var(--muted)', fontWeight: '800', fontSize: '13px', cursor: 'pointer', padding: '0 12px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ border: 'none', background: '#ef4444', color: '#fff', padding: '10px 18px', borderRadius: '6px', fontWeight: '800', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 2px 8px rgba(239, 68, 68, 0.2)' }}
                >
                  <Trash2 size={15} /> Suspend Branch
                </button>
              </div>

            </form>
          </div>

          {/* Right sidebar Block */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Impact Summary Panel */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertCircle size={16} /> Impact Summary
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Active Agents</span>
                  <span>42</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Current Revenue (Daily)</span>
                  <span style={{ color: '#4f46e5' }}>$12,402.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Pending Service Requests</span>
                  <span style={{ color: '#ef4444' }}>15</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Region</span>
                  <span>NE-04 (Greater Metro)</span>
                </div>
              </div>

              {/* SVG Map context */}
              <div style={{ border: '1px solid var(--line)', borderRadius: '6px', height: '110px', background: '#f8fafc', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 200 110" style={{ fill: 'none', stroke: '#cbd5e1', strokeWidth: '1.5' }}>
                  {/* Grid of city roads */}
                  <line x1="20" y1="0" x2="20" y2="110" />
                  <line x1="60" y1="0" x2="60" y2="110" />
                  <line x1="120" y1="0" x2="120" y2="110" />
                  <line x1="170" y1="0" x2="170" y2="110" />
                  <line x1="0" y1="30" x2="200" y2="30" />
                  <line x1="0" y1="70" x2="200" y2="70" />
                  {/* Highlighted diagonal path */}
                  <path d="M 0 10 L 80 50 L 200 90" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4,4" />
                  <circle cx="80" cy="50" r="4" fill="#ef4444" />
                </svg>
                <span style={{ position: 'absolute', bottom: '6px', fontSize: '9px', fontWeight: '800', color: 'var(--muted)' }}>LOCATION VISUAL CONTEXT</span>
              </div>
            </div>

            {/* Recent Branch Events */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>
                Recent Branch Events
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '11px', fontWeight: '700' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', marginTop: '5px' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Audit Completed</strong>
                    <span style={{ color: 'var(--muted)' }}>2 hours ago • Inspector V. Hall</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#38bdf8', borderRadius: '50%', marginTop: '5px' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Service Map Optimized</strong>
                    <span style={{ color: 'var(--muted)' }}>Yesterday • System Automated</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginTop: '5px' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text)' }}>Threshold Alert: Latency</strong>
                    <span style={{ color: 'var(--muted)' }}>Jan 12 • Node NE-04-12</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
