import React, { useState } from 'react';
import {
  Building,
  User,
  Wrench,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Check,
  X,
  ChevronRight,
  LayoutGrid,
  Calendar,
  DollarSign,
  PieChart,
  HelpCircle,
  LogOut,
  FolderOpen,
  Settings
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function ServiceCancellation() {
  const { navigate } = useApp();
  const [selectedReason, setSelectedReason] = useState('customer');
  const [internalNotes, setInternalNotes] = useState('');
  const [waiveFees, setWaiveFees] = useState(false);

  // Custom sidebar mapping for OpsManager Pro layout
  const sidebarItems = [
    { label: 'Dashboard', route: ROUTES.dashboard, icon: LayoutGrid },
    { label: 'Bookings', route: ROUTES.bookingCancellation, icon: Calendar },
    { label: 'Assignments', route: '#', icon: User },
    { label: 'Financials', route: '#', icon: DollarSign },
    { label: 'Analytics', route: '#', icon: PieChart },
    { label: 'Calendar', route: '#', icon: Calendar },
    { label: 'Monitoring', route: '#', icon: LayoutGrid },
    { label: 'Settings', route: '#', icon: Settings }
  ];

  const bottomItems = [
    { label: 'Help Center', route: '#', icon: HelpCircle },
    { label: 'Log out', route: ROUTES.login, icon: LogOut }
  ];

  const handleApprove = () => {
    alert(`Cancellation Approved! Reason: ${selectedReason}. Fees Waived: ${waiveFees}.`);
    navigate(ROUTES.dashboard);
  };

  const handleReject = () => {
    alert('Cancellation Request Rejected.');
    navigate(ROUTES.dashboard);
  };

  return (
    <AdminShell
      activeTab="Booking Management"
      brandText="OpsManager Pro"
      brandSubText="OPERATING SYSTEM"
      headerTitle="Booking Management"
      searchPlaceholder="Search cancellations..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.dashboard)}>Bookings</span>
          <ChevronRight size={14} />
          <span style={{ color: '#0f172a' }}>Cancellation Approval</span>
        </div>

        {/* Page Title & SLA badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Manage Service Cancellation
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '700' }}>Request ID #CNL-88291-B</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '900', letterSpacing: '0.5px' }}>
            <AlertTriangle size={13} />
            <span>URGENT: IMPACTS SLA</span>
          </div>
        </div>

        {/* 2-Column main content layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Service Information Card */}
            <div className="panel" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '12px', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Information</h2>
                <strong style={{ fontSize: '14px', color: '#25108f' }}>BK-77202</strong>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Scheduled for 3 Oct 24, 2023 at 14:00 PM • Premium Facility Cleaning</span>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Client details */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ height: '38px', width: '38px', borderRadius: '6px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                      <User size={18} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase' }}>Client Name</span>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Aerospace Dynamics Inc.</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: '#b45309', fontWeight: '700', marginTop: '2px' }}>Account: Corporate Gold</span>
                    </div>
                  </div>

                  {/* Partner details */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ height: '38px', width: '38px', borderRadius: '6px', background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
                      <Wrench size={18} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase' }}>Assigned Partner</span>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Elite Pro Services</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', fontWeight: '700', marginTop: '2px' }}>Rating: 4.9 ★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Reason Card */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>Cancellation Reason</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                {[
                  { id: 'customer', title: 'Customer Request', desc: 'Initiated via Client Portal' },
                  { id: 'partner', title: 'Partner Unavailable', desc: 'Emergency conflict reported' },
                  { id: 'scheduling', title: 'Scheduling Conflict', desc: 'Internal ops adjustment' }
                ].map((reason) => {
                  const isActive = selectedReason === reason.id;
                  return (
                    <div
                      key={reason.id}
                      onClick={() => setSelectedReason(reason.id)}
                      style={{
                        border: isActive ? '2px solid #25108f' : '1px solid var(--line)',
                        borderRadius: '6px',
                        padding: '16px 12px',
                        cursor: 'pointer',
                        background: isActive ? '#fff' : '#f8f9fa',
                        transition: 'all 0.15s ease',
                        position: 'relative'
                      }}
                    >
                      <input
                        type="radio"
                        checked={isActive}
                        readOnly
                        style={{ position: 'absolute', right: '12px', top: '12px', accentColor: '#25108f' }}
                      />
                      <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', paddingRight: '20px' }}>{reason.title}</strong>
                      <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '4px' }}>{reason.desc}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* Additional notes input */}
              <div>
                <label htmlFor="internal-notes-cancellation" style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Additional Internal Notes</label>
                <textarea
                  id="internal-notes-cancellation"
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                  placeholder="Enter justification for audit trail..."
                  style={{ width: '100%', height: '80px', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px', fontSize: '13px', outline: 'none', resize: 'none' }}
                />
              </div>
            </div>

            {/* Audit Trail & Communications */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px' }}>Audit Trail & Communications</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                {/* Visual timeline bar */}
                <div style={{ position: 'absolute', left: '16px', top: '10px', bottom: '10px', width: '2px', background: 'var(--line)' }} />

                {/* Event 1 */}
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ height: '34px', width: '34px', borderRadius: '50%', background: '#25108f', border: '4px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Cancellation Request Received</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Today, 09:12 AM</span>
                    </div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Initiated by Sarah Jenkins (Customer Contact)</span>
                    {/* Quoted Message box */}
                    <div style={{ background: '#f4eff8', borderRadius: '6px', padding: '12px', marginTop: '8px', fontSize: '12px', lineHeight: '1.4', fontStyle: 'italic', borderLeft: '3px solid #25108f' }}>
                      "Hi, we need to reschedule the premium cleaning because our facility will be undergoing unexpected maintenance. Please process the refund per contract terms."
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ height: '34px', width: '34px', borderRadius: '50%', background: '#cbd5e1', border: '4px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>System Verification Completed</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Today, 09:13 AM</span>
                    </div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Automated Policy Check (Rule: CSR-339)</span>
                  </div>
                </div>

                {/* Event 3 */}
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ height: '34px', width: '34px', borderRadius: '50%', background: '#cbd5e1', border: '4px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Partner Notification Sent</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Today, 09:15 AM</span>
                    </div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Elite Pro Services alerted of pending status</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom 3-Card stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {/* Stat 1 */}
              <div className="panel" style={{ padding: '16px', borderLeft: '4px solid #3b82f6' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Monthly Cancel Rate</span>
                <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>3.2% <span style={{ fontSize: '11px', color: '#07956f', fontWeight: 'normal' }}>(+0.4% MoM)</span></strong>
              </div>
              {/* Stat 2 */}
              <div className="panel" style={{ padding: '16px', borderLeft: '4px solid #000' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Penalties YTM</span>
                <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>$14,290.00</strong>
              </div>
              {/* Stat 3 */}
              <div className="panel" style={{ padding: '16px', borderLeft: '4px solid #25108f' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Auto-Approvals Rate</span>
                <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', marginTop: '4px' }}>68%</strong>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Refund Impact Breakdown Card */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Refund Impact Breakdown</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid var(--line)', paddingBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
                  <span>Service Total</span>
                  <span style={{ color: 'var(--text)' }}>$1,250.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', color: 'var(--muted)', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Cancellation Fee (15%)</span>
                    <Info size={12} style={{ color: 'var(--muted)', cursor: 'pointer' }} onClick={() => alert('Standard policy fee')} />
                  </div>
                  <span style={{ color: '#d32929' }}>-$187.50</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
                  <span>Administrative Fee</span>
                  <span style={{ color: '#d32929' }}>-$25.00</span>
                </div>
              </div>
              
              <div>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Net Refund Amount</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                  <strong style={{ fontSize: '28px', fontWeight: '800', color: '#25108f' }}>$1,037.50</strong>
                  <span style={{ fontSize: '9px', fontWeight: '900', background: '#eff6ff', color: '#1e40af', padding: '2px 6px', borderRadius: '4px' }}>
                    ESTIMATED
                  </span>
                </div>
              </div>
            </div>

            {/* Cancellation Policy Enforcement Card */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Info size={16} style={{ color: '#25108f', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Cancellation Policy Enforcement</strong>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.4' }}>
                    Booking is within the 24-hour window. Penalty fees are mandatory unless waived by an administrator.
                  </p>
                </div>
              </div>
              
              {/* Toggle switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '12px', marginTop: '4px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>Waive penalty fees</span>
                <button
                  onClick={() => setWaiveFees(!waiveFees)}
                  style={{
                    width: '38px',
                    height: '20px',
                    background: waiveFees ? '#25108f' : '#cbd5e1',
                    borderRadius: '10px',
                    position: 'relative',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    padding: 0
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: waiveFees ? '20px' : '2px',
                      top: '2px',
                      height: '16px',
                      width: '16px',
                      background: '#fff',
                      borderRadius: '50%',
                      transition: 'left 0.2s'
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleApprove}
                style={{
                  width: '100%',
                  height: '42px',
                  background: '#0b1329',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <Check size={16} />
                <span>Approve Cancellation</span>
              </button>
              <button
                onClick={handleReject}
                style={{
                  width: '100%',
                  height: '42px',
                  background: '#fff',
                  color: '#d32929',
                  border: '1px solid #fca5a5',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
                <span>Reject Cancellation</span>
              </button>
            </div>

          </div>

        </div>
        
        {/* Footer info text matching Screen 3 */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: '16px', textAlign: 'center', fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>
          OpsManager Pro v4.2.0 • Data refreshed real-time • Session expires in 14m
        </div>

      </div>
    </AdminShell>
  );
}
