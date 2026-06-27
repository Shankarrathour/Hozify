import React, { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  ShoppingBag, 
  UserPlus, 
  CreditCard, 
  MessageSquare, 
  Star, 
  Search, 
  Filter, 
  Download, 
  ChevronDown, 
  X,
  FileText,
  Bookmark
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function ActivityCenter({ activeTab = 'Dashboard' }) {
  const [eventType, setEventType] = useState('All Events');
  const [severity, setSeverity] = useState('All');
  const [adminUser, setAdminUser] = useState('All');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleReset = () => {
    setEventType('All Events');
    setSeverity('All');
    setAdminUser('All');
    setDateFrom('');
    setDateTo('');
  };

  const handleDownload = () => {
    alert("Downloading complete activity audit report...");
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Activity Center"
      searchPlaceholder="Search activities, logs, IDs..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Title and stats summary tags */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Activity Center
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Real-time global audit trail and system events.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: '800',
              background: '#f4eff8',
              color: '#25108f',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              ACTIVE EVENTS: <strong>1,284 Today</strong>
            </span>
            <span style={{
              fontSize: '11px',
              fontWeight: '800',
              background: '#fee2e2',
              color: '#d32929',
              padding: '6px 12px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              SECURITY ALERTS: <strong>3 Critical</strong>
            </span>
          </div>
        </div>

        {/* Filter Box Panel */}
        <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', alignItems: 'end' }}>
            
            {/* Event Type */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                style={{ border: '1px solid var(--line)', background: '#fff', height: '36px', borderRadius: '6px', padding: '0 8px', fontSize: '13px', outline: 'none' }}
                aria-label="Event Type"
              >
                <option value="All Events">All Events</option>
                <option value="Security">Security</option>
                <option value="Booking">Booking</option>
                <option value="User Action">User Action</option>
                <option value="Withdrawal">Withdrawal</option>
              </select>
            </div>

            {/* Severity */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Severity</label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                style={{ border: '1px solid var(--line)', background: '#fff', height: '36px', borderRadius: '6px', padding: '0 8px', fontSize: '13px', outline: 'none' }}
                aria-label="Severity"
              >
                <option value="All">All Severities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Standard">Standard</option>
              </select>
            </div>

            {/* Admin User */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Admin User</label>
              <select
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
                style={{ border: '1px solid var(--line)', background: '#fff', height: '36px', borderRadius: '6px', padding: '0 8px', fontSize: '13px', outline: 'none' }}
                aria-label="Admin User"
              >
                <option value="All">Filter by admin...</option>
                <option value="Sarah J.">Sarah J.</option>
                <option value="Michael C.">Michael C.</option>
              </select>
            </div>

            {/* Date Range From */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Date From</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                style={{ border: '1px solid var(--line)', height: '36px', borderRadius: '6px', padding: '0 8px', fontSize: '13px', outline: 'none' }}
                aria-label="Date From"
              />
            </div>

            {/* Date Range To */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Date To</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                style={{ border: '1px solid var(--line)', height: '36px', borderRadius: '6px', padding: '0 8px', fontSize: '13px', outline: 'none' }}
                aria-label="Date To"
              />
            </div>

            <button
              onClick={handleReset}
              style={{
                height: '36px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '750',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Event Timeline list feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
          
          {/* Vertical line indicator */}
          <div style={{
            position: 'absolute',
            top: '20px', bottom: '20px', left: '26px',
            width: '2px', background: 'var(--line)'
          }} />

          {/* TODAY Group */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', zIndex: 2, position: 'relative' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: 'var(--muted)', background: '#fff', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '20px' }}>
                TODAY - OCTOBER 24, 2023
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '14px' }}>
              
              {/* Item 1: Fraud Detected */}
              <div style={{ display: 'flex', gap: '16px', zIndex: 2, position: 'relative' }}>
                <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#fee2e2', color: '#d32929', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '10px' }}>
                  <AlertTriangle size={13} />
                </div>
                <div className="panel" style={{ flex: 1, padding: '16px 20px', borderLeft: '4px solid #d32929' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: 'var(--text)' }}>Fraud Detected</strong>
                      <span style={{ fontSize: '9px', fontWeight: '850', background: '#fee2e2', color: '#d32929', padding: '2px 6px', borderRadius: '4px' }}>CRITICAL ALERT</span>
                    </div>
                    <span
                      onClick={() => alert("Redirecting to security logs for UID-9921-X")}
                      style={{ fontSize: '12px', fontWeight: '800', color: '#25108f', cursor: 'pointer' }}
                    >
                      View Security Logs
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '8px 0 12px' }}>
                    Multiple failed withdrawal attempts from a blacklisted IP address (192.168.1.42). System has auto-locked the account.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', fontSize: '11px', background: '#fafafa', padding: '10px', borderRadius: '6px' }}>
                    <div>
                      <span style={{ color: 'var(--muted)', display: 'block' }}>USER ID</span>
                      <strong style={{ color: 'var(--text)' }}>UID-9921-X</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)', display: 'block' }}>TIMESTAMP</span>
                      <strong style={{ color: 'var(--text)' }}>14:22:15 GMT+5</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)', display: 'block' }}>ATTEMPT COUNT</span>
                      <strong style={{ color: 'var(--text)' }}>5 Retries</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)', display: 'block' }}>LOCATION</span>
                      <strong style={{ color: 'var(--text)' }}>Eastern Europe (VPN)</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2: Booking Created */}
              <div style={{ display: 'flex', gap: '16px', zIndex: 2, position: 'relative' }}>
                <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#f4eff8', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '10px' }}>
                  <ShoppingBag size={13} />
                </div>
                <div className="panel" style={{ flex: 1, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: 'var(--text)' }}>Booking Created</strong>
                      <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)' }}>Standard</span>
                    </div>
                    <span
                      onClick={() => alert("Directing to manage booking #BK-77291")}
                      style={{ fontSize: '12px', fontWeight: '800', color: '#25108f', cursor: 'pointer' }}
                    >
                      Manage Booking
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '8px 0 12px' }}>
                    New enterprise service booking confirmed for 'Global Logistics Hub' - Service: Deep Industrial Cleaning.
                  </p>
                  <div style={{ display: 'flex', gap: '24px', fontSize: '11px' }}>
                    <div>
                      <span style={{ color: 'var(--muted)', marginRight: '6px' }}>ORDER ID:</span>
                      <strong style={{ color: 'var(--text)' }}>#BK-77291</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)', marginRight: '6px' }}>TIME:</span>
                      <strong style={{ color: 'var(--text)' }}>13:05:44</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)', marginRight: '6px' }}>VALUE:</span>
                      <strong style={{ color: '#25108f', fontWeight: '850' }}>$4,200.00</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3: User Registered */}
              <div style={{ display: 'flex', gap: '16px', zIndex: 2, position: 'relative' }}>
                <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#ecfdf5', color: '#07956f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '10px' }}>
                  <UserPlus size={13} />
                </div>
                <div className="panel" style={{ flex: 1, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ fontSize: '14px', color: 'var(--text)' }}>User Registered</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>11:50:02</span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '8px 0 12px' }}>
                    Sarah Jenkins joined as a Service Partner. Registration completed via mobile app.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ height: '24px', width: '24px', borderRadius: '50%', background: '#f4eff8', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800' }}>
                      SJ
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>s.jenkins@enterprise.com</span>
                  </div>
                </div>
              </div>

              {/* Item 4: Payout Withdrawal Requested */}
              <div style={{ display: 'flex', gap: '16px', zIndex: 2, position: 'relative' }}>
                <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#eff6ff', color: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '10px' }}>
                  <CreditCard size={13} />
                </div>
                <div className="panel" style={{ flex: 1, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: 'var(--text)' }}>Withdrawal Requested</strong>
                      <span style={{ fontSize: '9px', fontWeight: '850', background: '#f3f4f6', color: 'var(--muted)', padding: '2px 6px', borderRadius: '4px' }}>Pending Approval</span>
                    </div>
                    <strong style={{ fontSize: '14px', color: 'var(--text)' }}>$12,450.50</strong>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '8px 0 0' }}>
                    Partner ID 0029 requested a payout of $12,450.50 to verified bank account ending in ...9012.
                  </p>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '8px' }}>10:15:33</span>
                </div>
              </div>

            </div>
          </div>

          {/* YESTERDAY Group */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', zIndex: 2, position: 'relative', marginTop: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: 'var(--muted)', background: '#fff', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '20px' }}>
                YESTERDAY - OCTOBER 23, 2023
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '14px' }}>
              
              {/* Item 5: Ticket Raised */}
              <div style={{ display: 'flex', gap: '16px', zIndex: 2, position: 'relative' }}>
                <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#fffbeb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '10px' }}>
                  <MessageSquare size={13} />
                </div>
                <div className="panel" style={{ flex: 1, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: 'var(--text)' }}>Ticket Raised</strong>
                      <span style={{ fontSize: '9px', fontWeight: '850', background: '#fffbeb', color: '#b45309', padding: '2px 6px', borderRadius: '4px' }}>High Priority</span>
                    </div>
                    <button
                      onClick={() => alert("Ticket assigned successfully to current admin.")}
                      style={{ border: 'none', background: '#25108f', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '750', cursor: 'pointer' }}
                    >
                      Assign to Me
                    </button>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '8px 0 0' }}>
                    "Unable to upload insurance documents on mobile portal" - Raised by Partner ID 882.
                  </p>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '8px' }}>17:44:10</span>
                </div>
              </div>

              {/* Item 6: Review Submitted */}
              <div style={{ display: 'flex', gap: '16px', zIndex: 2, position: 'relative' }}>
                <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#fdf2f8', color: '#9d174d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '10px' }}>
                  <Star size={13} fill="#9d174d" />
                </div>
                <div className="panel" style={{ flex: 1, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: 'var(--text)' }}>Review Submitted</strong>
                      <div style={{ display: 'flex', color: '#fbbf24' }}>
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="#fbbf24" stroke="none" />)}
                      </div>
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>16:20:00</span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '8px 0 0' }}>
                    "Excellent service from the cleaning crew. Very professional and efficient."
                  </p>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', fontWeight: '800', marginTop: '8px', textTransform: 'uppercase' }}>
                    BY CLIENT: URBAN DYNAMICS CORP
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Load More Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button
            onClick={() => alert("Loading older timeline event logs...")}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid var(--line)',
              background: '#fff',
              color: 'var(--text)',
              fontSize: '13px',
              fontWeight: '750',
              height: '38px',
              padding: '0 18px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            <span>Load More Events</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Floating Download Payout Report Action */}
        <button
          onClick={handleDownload}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            height: '42px',
            width: '42px',
            borderRadius: '50%',
            background: '#25108f',
            color: '#fff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37, 16, 143, 0.3)',
            cursor: 'pointer',
            zIndex: 99
          }}
          aria-label="Download activity audit report"
        >
          <Download size={18} />
        </button>

      </div>
    </AdminShell>
  );
}
