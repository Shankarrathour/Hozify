import React, { useState } from 'react';
import {
  Clock,
  CheckCircle,
  TrendingUp,
  Activity,
  Users,
  Compass,
  ArrowRight,
  UserCheck,
  Star,
  Zap,
  Sparkles,
  ChevronRight,
  MessageSquare,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function SupportAgentWorkspace({ activeTab = 'Support Center' }) {
  const { navigate } = useApp();
  const [isActive, setIsActive] = useState(true);
  const [resolvedToday, setResolvedToday] = useState(14);
  const dailyGoal = 20;

  const [queue, setQueue] = useState([
    { id: '#T-8902', priority: 'URGENT', priorityColor: '#dc2626', priorityBg: '#fee2e2', title: 'Payment gateway failure on checkout', desc: 'User report: "I\'ve tried three different cards and the transaction keeps timing out..."', sla: '12m left', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&fit=crop&q=80' },
    { id: '#T-8895', priority: 'VIP', priorityColor: '#8b5cf6', priorityBg: '#f5f3ff', title: 'Enterprise subscription renewal issue', desc: 'The corporate billing portal is not reflecting the latest PO update...', sla: '45m left', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&fit=crop&q=80' },
    { id: '#T-8891', priority: 'STANDARD', priorityColor: '#2563eb', priorityBg: '#eff6ff', title: 'API documentation broken links', desc: 'Developer portal links in the \'Auth\' section are returning 404...', sla: '1h 20m left', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&fit=crop&q=80' }
  ]);

  const [feed, setFeed] = useState([
    { id: 1, text: 'You sent a reply to #T-8812', time: '2 minutes ago' },
    { id: 2, text: 'Ticket #T-8744 was marked as resolved', time: '15 minutes ago' },
    { id: 3, text: 'Updated internal note on #T-8902', time: '1 hour ago' }
  ]);

  const handleResolveTicket = (ticketId) => {
    setQueue(queue.filter(t => t.id !== ticketId));
    setResolvedToday(prev => Math.min(prev + 1, dailyGoal));
    setFeed([
      { id: Date.now(), text: `You resolved ticket ${ticketId}`, time: 'Just now' },
      ...feed
    ]);
    alert(`Ticket ${ticketId} resolved successfully.`);
  };

  const handleTemplateClick = (title, text) => {
    navigator.clipboard.writeText(text);
    alert(`Template "${title}" copied to clipboard!`);
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Agent Workspace"
      searchPlaceholder="Search tickets, users, or documentation..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Breadcrumb Row */}
        <div style={{ fontSize: '12px', fontWeight: '750', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>Support Center</span>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--primary)' }}>Agent Workspace</span>
        </div>

        {/* Workspace Title & Availability Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Welcome back, Alex.
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              You have <strong style={{ color: 'var(--primary)' }}>{queue.length} high-priority</strong> tickets waiting for your response.
            </p>
          </div>

          {/* Availability Switcher */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: '#fff',
            border: '1px solid var(--line)',
            padding: '10px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>
                {isActive ? 'Active Duty' : 'Offline'}
              </strong>
              <span style={{ fontSize: '11px', color: '#07956f', fontWeight: '800' }}>
                94% AVAILABILITY
              </span>
            </div>
            
            <button
              onClick={() => setIsActive(!isActive)}
              style={{
                height: '34px',
                padding: '0 14px',
                borderRadius: '6px',
                border: 'none',
                background: isActive ? '#10b981' : 'var(--muted)',
                color: '#fff',
                fontWeight: '800',
                fontSize: '11.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              type="button"
            >
              <Zap size={12} fill="#fff" />
              <span>{isActive ? 'Go Inactive' : 'Go Active'}</span>
            </button>
          </div>
        </div>

        {/* KPI Metrics Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {/* Assigned */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#fff' }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                My Assigned Tickets
              </span>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#07956f', display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                <TrendingUp size={11} />
                +12%
              </span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>
              24
            </strong>
          </div>

          {/* Resolved Today vs Goal */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#fff' }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Resolved Today
              </span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                Daily Goal: {dailyGoal}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>
                {resolvedToday}
              </strong>
              <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '750' }}>
                / {dailyGoal}
              </span>
            </div>
            {/* Progress bar */}
            <div style={{ height: '5px', background: '#eee9f6', borderRadius: '3px', overflow: 'hidden', marginTop: '6px' }}>
              <div style={{ width: `${(resolvedToday / dailyGoal) * 100}%`, height: '100%', background: '#07956f' }} />
            </div>
          </div>

          {/* SLA Safety Score */}
          <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#fff' }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                SLA Safety Score
              </span>
              <span style={{ fontSize: '9px', fontWeight: '900', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                Secure
              </span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>
              98.2
            </strong>
          </div>
        </div>

        {/* Content Layout Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left Column: High Priority Queue & Templates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* High Priority Queue */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  High Priority Queue
                </h3>
                <button
                  onClick={() => navigate(ROUTES.supportAll)}
                  style={{ border: 'none', background: 'transparent', color: 'var(--primary)', fontSize: '12.5px', fontWeight: '800', cursor: 'pointer' }}
                  type="button"
                >
                  View All
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {queue.length === 0 ? (
                  <div style={{ padding: '32px', textAlign: 'center', color: 'var(--muted)' }}>
                    No pending high priority tickets assigned to you today. Good job!
                  </div>
                ) : (
                  queue.map((tk) => (
                    <div
                      key={tk.id}
                      style={{
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid var(--lavender)',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '12px', fontWeight: '850', color: 'var(--primary)' }}>
                            {tk.id}
                          </span>
                          <span style={{
                            fontSize: '9px',
                            fontWeight: '950',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: tk.priorityBg,
                            color: tk.priorityColor
                          }}>
                            {tk.priority}
                          </span>
                        </div>
                        
                        <span style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          color: '#dc2626',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}>
                          <Clock size={12} />
                          SLA: {tk.sla}
                        </span>
                      </div>

                      <div>
                        <strong style={{ display: 'block', fontSize: '13.5px', color: 'var(--text)' }}>
                          {tk.title}
                        </strong>
                        <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.4' }}>
                          {tk.desc}
                        </p>
                      </div>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px dashed var(--lavender)',
                        paddingTop: '10px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <img
                            src={tk.avatar}
                            alt="User"
                            style={{ height: '20px', width: '20px', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>Customer Support Thread</span>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => navigate(ROUTES.supportDetails.replace(':id', tk.id.replace('#', '')))}
                            style={{
                              height: '26px',
                              padding: '0 10px',
                              borderRadius: '4px',
                              border: '1px solid var(--line)',
                              background: '#fff',
                              color: 'var(--text)',
                              fontSize: '11px',
                              fontWeight: '700',
                              cursor: 'pointer'
                            }}
                            type="button"
                          >
                            Reply
                          </button>
                          <button
                            onClick={() => handleResolveTicket(tk.id)}
                            style={{
                              height: '26px',
                              padding: '0 10px',
                              borderRadius: '4px',
                              border: 'none',
                              background: '#07956f',
                              color: '#fff',
                              fontSize: '11px',
                              fontWeight: '700',
                              cursor: 'pointer'
                            }}
                            type="button"
                          >
                            Resolve
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div style={{ fontSize: '11.5px', color: 'var(--muted)', textAlign: 'center', marginTop: '4px' }}>
                Showing {queue.length} of 12 tickets in priority queue
              </div>
            </div>

            {/* Quick Response Templates */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Quick Response Templates
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {[
                  { title: 'Refund Policy', text: 'Thank you for contacting us. Regarding your refund request...' },
                  { title: 'Account Recovery', text: 'To recover your account, please follow the password recovery steps...' },
                  { title: 'Technical Troubleshooting', text: 'We recommend clearing your browser cache and web cookies...' },
                  { title: 'Escalation Protocol', text: 'I am escalating this ticket to our senior finance team for review...' }
                ].map((tpl, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleTemplateClick(tpl.title, tpl.text)}
                    style={{
                      padding: '14px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      background: 'var(--soft)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.border = '1.5px solid var(--primary)'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1px solid var(--line)'}
                  >
                    <strong style={{ display: 'block', fontSize: '12.5px', color: 'var(--text)' }}>
                      {tpl.title}
                    </strong>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '4px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {tpl.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: CSAT, Resolution Speed, Activity feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Current CSAT Score */}
            <div className="panel" style={{ padding: '24px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-2) 100%)', color: '#fff', display: 'flex', flexDirection: 'column', gap: '12px', border: 'none' }}>
              <span style={{ fontSize: '10px', fontWeight: '850', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Current CSAT Score
              </span>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <strong style={{ fontSize: '32px', fontWeight: '900' }}>4.9</strong>
                <span style={{ fontSize: '14px', opacity: 0.8 }}>/ 5.0</span>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', color: '#facc15' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="#facc15" stroke="#facc15" />
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'rgba(255,255,255,0.9)', fontWeight: '750' }}>
                <Sparkles size={13} fill="#fff" />
                <span>Top 1% of agents this week. Keep up the great communication!</span>
              </div>
            </div>

            {/* Resolution Speed indicators */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={15} style={{ color: 'var(--primary)' }} />
                Resolution Speed
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Metric 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: '750' }}>
                    <span style={{ color: 'var(--muted)' }}>First Response</span>
                    <strong style={{ color: 'var(--text)' }}>14 mins</strong>
                  </div>
                  <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: 'var(--primary)' }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: '750' }}>
                    <span style={{ color: 'var(--muted)' }}>Average Resolution</span>
                    <strong style={{ color: 'var(--text)' }}>2.4 hours</strong>
                  </div>
                  <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '65%', height: '100%', background: '#07956f' }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: '750' }}>
                    <span style={{ color: 'var(--muted)' }}>One-touch Resolve</span>
                    <strong style={{ color: 'var(--text)' }}>42%</strong>
                  </div>
                  <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '42%', height: '100%', background: '#3b82f6' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Systems Operational peers */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={15} style={{ color: 'var(--primary)' }} />
                Systems Operational
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', marginLeft: '6px' }}>
                  {['SM', 'EL', 'MK'].map((init, idx) => (
                    <div
                      key={idx}
                      style={{
                        height: '24px',
                        width: '24px',
                        borderRadius: '50%',
                        background: '#e9e2f6',
                        color: 'var(--primary)',
                        fontSize: '9.5px',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid #fff',
                        marginLeft: idx === 0 ? '0' : '-8px',
                        zIndex: 10 - idx
                      }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '650' }}>
                  +8 peers online and active
                </span>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Live Activity Feed
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {feed.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                      borderBottom: '1px solid var(--lavender)',
                      paddingBottom: '10px',
                      fontSize: '12.5px'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p style={{ color: 'var(--text)', margin: 0, lineHeight: '1.4' }}>
                        {item.text}
                      </p>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
