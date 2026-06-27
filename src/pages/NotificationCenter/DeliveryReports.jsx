import React, { useState, useEffect } from 'react';
import { 
  Search, 
  RotateCcw, 
  Trash2, 
  Clock, 
  Mail, 
  MessageSquare, 
  Bell, 
  Sliders, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Send,
  CheckCircle,
  AlertTriangle,
  FileText,
  Check,
  X
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function DeliveryReports({ activeTab = 'Notification Center' }) {
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [attemptsFilter, setAttemptsFilter] = useState('All');

  const [queue, setQueue] = useState([
    { id: '1', type: 'Email', recipient: 'a.smith@techflow.io', subtext: 'Campaign: Q4 Growth', error: '429: Too Many Requests', attempts: '2 / 5', nextRetry: '04:12 mins', status: 'Pending', errorColor: '#ef4444', errorBg: '#fee2e2' },
    { id: '2', type: 'SMS', recipient: '+1 (555) 092-1142', subtext: 'Alert: System Maintenance', error: 'Timeout: Provider Delay', attempts: '1 / 3', nextRetry: '12:45 mins', status: 'Pending', errorColor: '#1e40af', errorBg: '#eff6ff' },
    { id: '3', type: 'Push', recipient: 'User_92104 (Push)', subtext: 'Promo: Flash Sale', error: 'Invalid Token', attempts: '5 / 5', nextRetry: 'Stopped', status: 'Stopped', errorColor: '#ef4444', errorBg: '#fee2e2' }
  ]);

  const handleRetry = (recipient) => {
    setToastMsg(`Manual retry triggered for ${recipient}`);
    setShowToast(true);
  };

  const handleCancel = (id, recipient) => {
    setQueue(queue.filter(item => item.id !== id));
    setToastMsg(`Cancelled delivery attempt for ${recipient}`);
    setShowToast(true);
  };

  const handleRetryAll = () => {
    setToastMsg('Manual retry triggered for all failed attempts in queue');
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const filteredQueue = queue.filter(item => 
    item.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.subtext.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.error.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise SaaS"
      headerTitle="Delivery Monitoring"
      searchPlaceholder="Search notification IDs or recipients..."
      searchValue={searchQuery}
      onSearchChange={setSearchQuery}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Delivery Monitoring
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Real-time delivery diagnostics and retry queue management
            </p>
          </div>

          <button
            onClick={handleRetryAll}
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
            <RotateCcw size={15} />
            <span>Manual Retry All</span>
          </button>
        </div>

        {/* Diagnostic KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          {/* Card 1: Queued */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '3px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>QUEUED</span>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary)' }}>+12% vs last hr</span>
            </div>
            <div>
              <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>1,284</strong>
            </div>
            {/* Loader-style visual bar */}
            <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden', marginTop: '6px' }}>
              <div style={{ width: '68%', height: '100%', background: 'var(--primary)' }} />
            </div>
          </div>

          {/* Card 2: Sent */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '3px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>SENT</span>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981' }}>Real-time</span>
            </div>
            <div>
              <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>45,902</strong>
            </div>
            {/* Green dots */}
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
              <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulse 1s infinite alternate' }} />
              <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulse 1s infinite alternate 0.2s' }} />
              <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulse 1s infinite alternate 0.4s' }} />
            </div>
          </div>

          {/* Card 3: Delivered */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '3px solid #059669' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>DELIVERED</span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#059669', background: '#d1fae5', padding: '2px 6px', borderRadius: '4px' }}>99.2% rate</span>
            </div>
            <div>
              <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>45,540</strong>
            </div>
            {/* Multi-avatars overlapping + label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ height: '18px', width: '18px', borderRadius: '50%', background: '#3b82f6', border: '1px solid #fff', display: 'inline-block' }} />
                <span style={{ height: '18px', width: '18px', borderRadius: '50%', background: '#06b6d4', border: '1px solid #fff', display: 'inline-block', marginLeft: '-6px' }} />
                <span style={{ height: '18px', width: '18px', borderRadius: '50%', background: '#a855f7', border: '1px solid #fff', display: 'inline-block', marginLeft: '-6px' }} />
              </div>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>+2.4k new</span>
            </div>
          </div>

          {/* Card 4: Failed */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '3px solid #ef4444' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>FAILED</span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#ef4444', background: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>Requires Action</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>362</strong>
              <button
                onClick={() => alert('Filtering table to view failed attempts')}
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#dc2626',
                  background: '#fef2f2',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer'
                }}
              >
                View Errors
              </button>
            </div>
          </div>

        </div>

        {/* Main Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Retry Queue Card (Left) */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '16px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Retry Queue
                </h2>
                <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 0' }}>
                  Manage transient delivery failures and manual re-triggers.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => alert('Exporting queue CSV...')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    color: 'var(--text)',
                    height: '34px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    fontSize: '12.5px',
                    fontWeight: '700'
                  }}
                >
                  <Download size={14} />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={() => alert('Opening filter options...')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    color: 'var(--text)',
                    height: '34px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    fontSize: '12.5px',
                    fontWeight: '700'
                  }}
                >
                  <Sliders size={14} />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div style={{ overflowX: 'auto', flex: 1 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: 'var(--soft)', borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Recipient</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Error Code</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Attempts</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Next Retry</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQueue.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--lavender)' }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <div style={{
                            height: '32px',
                            width: '32px',
                            borderRadius: '50%',
                            background: '#f4eff8',
                            color: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {item.type === 'Email' ? <Mail size={15} /> : item.type === 'SMS' ? <MessageSquare size={15} /> : <Bell size={15} />}
                          </div>
                          <div>
                            <strong style={{ display: 'block', fontWeight: '800', color: 'var(--text)' }}>{item.recipient}</strong>
                            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{item.subtext}</span>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          color: item.errorColor,
                          background: item.errorBg,
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          {item.error}
                        </span>
                      </td>
                      <td style={{ padding: '16px', fontWeight: '700', color: 'var(--text)' }}>{item.attempts}</td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center', color: item.status === 'Stopped' ? '#ef4444' : 'var(--text)' }}>
                          {item.status !== 'Stopped' && <Clock size={13} style={{ color: 'var(--muted)' }} />}
                          <span style={{ fontWeight: '700', fontSize: '12px' }}>{item.nextRetry}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '6px' }}>
                          <button
                            onClick={() => handleRetry(item.recipient)}
                            style={{
                              height: '30px',
                              width: '30px',
                              borderRadius: '6px',
                              border: '1px solid var(--line)',
                              background: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                            title="Retry now"
                          >
                            <RotateCcw size={13} style={{ color: 'var(--primary)' }} />
                          </button>
                          
                          <button
                            onClick={() => handleCancel(item.id, item.recipient)}
                            style={{
                              height: '30px',
                              width: '30px',
                              borderRadius: '6px',
                              border: '1px solid var(--line)',
                              background: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                            title="Cancel attempt"
                          >
                            <Trash2 size={13} style={{ color: 'var(--red)' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredQueue.length === 0 && (
                    <tr>
                      <td colSpan="5" style={{ padding: '32px', textAlign: 'center', color: 'var(--muted)' }}>
                        No failed delivery attempts found matching criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer / Pagination info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--lavender)', paddingTop: '16px', marginTop: '12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                Showing 3 of 362 failed attempts
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <ChevronLeft size={16} />
                </button>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Side Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Provider Latency */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Provider Latency
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '800', display: 'block', marginTop: '4px' }}>
                  124ms <span style={{ color: 'var(--muted)', fontWeight: '500' }}>Global Avg</span>
                </span>
              </div>

              {/* Sketchy vertical bar chart */}
              <div style={{ height: '70px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '4px' }}>
                {[30, 45, 35, 65, 50, 80, 40, 50, 70, 45, 90, 60, 40].map((h, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      width: '6%', 
                      height: `${h}%`, 
                      background: i === 10 ? 'var(--primary)' : 'rgba(37, 16, 143, 0.2)', 
                      borderRadius: '1px' 
                    }} 
                  />
                ))}
              </div>
            </div>

            {/* Failure Distribution */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Failure Distribution
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Rate Limited', percent: 42, color: '#ef4444', bg: '#fee2e2' },
                  { name: 'Network Timeout', percent: 28, color: '#10b981', bg: '#ecfdf5' },
                  { name: 'Invalid Identity', percent: 15, color: 'var(--primary)', bg: '#eee9f6' }
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750' }}>
                      <span style={{ color: 'var(--text)' }}>{f.name}</span>
                      <span style={{ color: 'var(--text)' }}>{f.percent}%</span>
                    </div>
                    <div style={{ height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${f.percent}%`, height: '100%', background: f.color }} />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => alert('Redirecting to detailed logs...')}
                style={{
                  width: '100%',
                  height: '36px',
                  border: '1px solid var(--primary)',
                  background: 'transparent',
                  color: 'var(--primary)',
                  fontSize: '12.5px',
                  fontWeight: '750',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginTop: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                Detailed Logs
              </button>
            </div>

            {/* Live Stream */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Live Stream
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative' }}>
                {/* Timeline vertical bar */}
                <div style={{ position: 'absolute', left: '5px', top: '8px', bottom: '8px', width: '1px', background: 'var(--line)', zIndex: 0 }} />

                <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                  <span style={{ height: '11px', width: '11px', borderRadius: '50%', background: '#10b981', display: 'inline-block', border: '2px solid #fff', marginTop: '4px', flexShrink: 0 }} />
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text)' }}>Batch #1942 Delivered</span>
                    <span style={{ color: 'var(--muted)', fontSize: '11px' }}>Just now</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                  <span style={{ height: '11px', width: '11px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', border: '2px solid #fff', marginTop: '4px', flexShrink: 0 }} />
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text)' }}>Retry Success: smith@io</span>
                    <span style={{ color: 'var(--muted)', fontSize: '11px' }}>2m</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                  <span style={{ height: '11px', width: '11px', borderRadius: '50%', background: '#9ca3af', display: 'inline-block', border: '2px solid #fff', marginTop: '4px', flexShrink: 0 }} />
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text)' }}>System Check: OK</span>
                    <span style={{ color: 'var(--muted)', fontSize: '11px' }}>15m</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Refresh Alert Toast */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#111827',
          color: '#fff',
          padding: '12px 18px',
          borderRadius: '8px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 10000,
          animation: 'fadeInUp 0.2s ease-out'
        }}>
          <div style={{ height: '18px', width: '18px', borderRadius: '50%', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check size={12} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>{toastMsg}</span>
          <button
            onClick={() => setShowToast(false)}
            style={{
              border: 'none',
              background: 'transparent',
              color: '#9ca3af',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              marginLeft: '8px'
            }}
          >
            <X size={14} />
          </button>
        </div>
      )}

    </AdminShell>
  );
}
