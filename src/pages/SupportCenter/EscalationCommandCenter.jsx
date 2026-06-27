import React, { useState, useEffect } from 'react';
import {
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  ShieldAlert,
  Users,
  Radio,
  BellOff,
  UserCheck,
  Play,
  MoreVertical,
  Activity,
  ChevronRight,
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function EscalationCommandCenter({ activeTab = 'Support Center' }) {
  const [activeLevel, setActiveLevel] = useState('Level 3');
  const [warRoomActive, setWarRoomActive] = useState(false);
  const [alertsSilenced, setAlertsSilenced] = useState(false);
  
  // Interactive ticket data
  const [escalations, setEscalations] = useState([
    {
      id: '#ESC-9021',
      level: 'Level 3',
      name: 'PostgreSQL Connection Exhaustion',
      desc: 'Database connection pool exhausted. Master node CPU spikes to 98%. API requests failing with Gateway Timeouts.',
      priority: 'Critical',
      timeLabel: 'Breached',
      timeLeft: '-0h 24m',
      isOverdue: true,
      agent: 'Unassigned',
      category: 'Database'
    },
    {
      id: '#ESC-8944',
      level: 'Level 3',
      name: 'Double-charging Payment Webhook',
      desc: 'Stripe webhook processor executing twice for Enterprise checkouts. 14 customers affected in last 30 minutes.',
      priority: 'Critical',
      timeLabel: 'Remaining',
      timeLeft: '0h 08m',
      isOverdue: false,
      agent: 'Marcus Knight',
      category: 'Billing'
    },
    {
      id: '#ESC-9102',
      level: 'Level 2',
      name: 'Partner KYC Upload Timeout',
      desc: 'Bulk document upload fails continuously for files > 10MB. 4 business accounts pending verification.',
      priority: 'High',
      timeLabel: 'Remaining',
      timeLeft: '0h 42m',
      isOverdue: false,
      agent: 'Emily Lu',
      category: 'Onboarding'
    },
    {
      id: '#ESC-9108',
      level: 'Level 2',
      name: 'Push Notification Gateway Failure',
      desc: 'APNS gateway returns invalid token errors for all iOS app updates. Failed delivery rate is at 94%.',
      priority: 'High',
      timeLabel: 'Remaining',
      timeLeft: '1h 15m',
      isOverdue: false,
      agent: 'Sarah Miller',
      category: 'System'
    },
    {
      id: '#ESC-8721',
      level: 'Level 1',
      name: 'Logo Alignment Issue in Invoice PDF',
      desc: 'Customer complains branding logo overlaps total summary fields on exported PDF invoices.',
      priority: 'Medium',
      timeLabel: 'Remaining',
      timeLeft: '3h 30m',
      isOverdue: false,
      agent: 'John Davis',
      category: 'UI/UX'
    }
  ]);

  // Feed items
  const [feed, setFeed] = useState([
    { id: 1, text: 'P0 ticket #ESC-9021 escalated to Tier 3 database support', time: '2m ago', type: 'alert' },
    { id: 2, text: 'Agent Marcus Knight requested manager intervention on #ESC-8944', time: '10m ago', type: 'request' },
    { id: 3, text: 'War-Room protocol automatically pre-initialized for Database module', time: '24m ago', type: 'info' }
  ]);

  const handleTakeOver = (ticketId) => {
    setEscalations(prev =>
      prev.map(esc => {
        if (esc.id === ticketId) {
          return { ...esc, agent: 'Manager (Self)' };
        }
        return esc;
      })
    );
    
    // Add to feed
    setFeed(prev => [
      { id: Date.now(), text: `Manager took over ownership of ticket ${ticketId}`, time: 'Just now', type: 'action' },
      ...prev
    ]);
  };

  const handleDirectAction = (ticketId) => {
    alert(`Initializing immediate direct debugging route for ticket ${ticketId}...`);
  };

  const handleForceReassignment = () => {
    const ticketId = prompt('Enter Escalation ID to force reassign (e.g. #ESC-9021):');
    if (!ticketId) return;
    const exists = escalations.find(e => e.id.toLowerCase() === ticketId.toLowerCase());
    if (!exists) {
      alert('Ticket not found.');
      return;
    }
    const newAgent = prompt('Enter new agent name:');
    if (!newAgent) return;

    setEscalations(prev =>
      prev.map(esc => {
        if (esc.id.toLowerCase() === ticketId.toLowerCase()) {
          return { ...esc, agent: newAgent };
        }
        return esc;
      })
    );

    setFeed(prev => [
      { id: Date.now(), text: `Forced reassignment of ${ticketId} to ${newAgent}`, time: 'Just now', type: 'action' },
      ...prev
    ]);
  };

  const handleToggleWarRoom = () => {
    const nextState = !warRoomActive;
    setWarRoomActive(nextState);
    if (nextState) {
      setFeed(prev => [
        { id: Date.now(), text: 'WAR-ROOM PROTOCOL ACTIVATED: High priority alerts and team routing initiated', time: 'Just now', type: 'alert' },
        ...prev
      ]);
    } else {
      setFeed(prev => [
        { id: Date.now(), text: 'War-Room protocol deactivated', time: 'Just now', type: 'info' },
        ...prev
      ]);
    }
  };

  // Filter escalations based on active tab
  const filteredEscalations = escalations.filter(esc => esc.level === activeLevel);

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Escalation Center"
      searchPlaceholder="Search active escalations, incident owners..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Breadcrumb Row */}
        <div style={{ fontSize: '12px', fontWeight: '750', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>Support Center</span>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--primary)' }}>Escalation Command Center</span>
        </div>

        {/* War-Room Overlay Announcement */}
        {warRoomActive && (
          <div style={{
            background: 'linear-gradient(90deg, #7f1d1d 0%, #dc2626 50%, #7f1d1d 100%)',
            border: '2px solid #ef4444',
            borderRadius: '8px',
            padding: '16px 24px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
            animation: 'pulse 2s infinite ease-in-out',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Radio size={20} style={{ animation: 'spin 4s linear infinite' }} />
              <div>
                <strong style={{ fontSize: '15px', fontWeight: '850', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  ACTIVE WAR-ROOM PROTOCOL
                </strong>
                <span style={{ fontSize: '12px', opacity: 0.9 }}>
                  Incident Response Team has been notified. Internal communications locked to high priority.
                </span>
              </div>
            </div>
            <button
              onClick={() => setWarRoomActive(false)}
              style={{
                border: '1px solid #fff',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer'
              }}
              type="button"
            >
              Stand Down
            </button>
          </div>
        )}

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
                Escalation Command Center
              </h1>
              {/* Badges */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{
                  background: '#dc2626',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '850',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <ShieldAlert size={12} />
                  12 SLA Breaches
                </span>
                <span style={{
                  background: '#f97316',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '850',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Zap size={12} />
                  8 Urgent
                </span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '6px 0 0' }}>
              Real-time intervention cockpit for managing system breaches and critical ticket handoffs.
            </p>
          </div>
        </div>

        {/* Layout Column Wrapper */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left Side: Tabs and Escalations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '2px solid var(--lavender)', paddingBottom: '2px', gap: '24px' }}>
              {['Level 3', 'Level 2', 'Level 1'].map((lvl) => {
                const isActive = activeLevel === lvl;
                const count = escalations.filter(e => e.level === lvl).length;
                return (
                  <button
                    key={lvl}
                    onClick={() => setActiveLevel(lvl)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      padding: '12px 4px',
                      fontSize: '14.5px',
                      fontWeight: isActive ? '850' : '700',
                      color: isActive ? 'var(--primary)' : 'var(--muted)',
                      borderBottom: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.15s ease',
                      marginBottom: '-3px'
                    }}
                    type="button"
                  >
                    <span>{lvl} {lvl === 'Level 3' ? '(Critical)' : lvl === 'Level 2' ? '(Urgent)' : '(Standard)'}</span>
                    <span style={{
                      background: isActive ? 'var(--soft)' : '#f3f4f6',
                      color: isActive ? 'var(--primary)' : 'var(--muted)',
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontWeight: '800'
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* List of escalation cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredEscalations.length === 0 ? (
                <div className="panel" style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--muted)' }}>
                  No active escalations found for {activeLevel}. All clear.
                </div>
              ) : (
                filteredEscalations.map((esc) => (
                  <div
                    key={esc.id}
                    className="panel"
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      borderLeft: esc.isOverdue ? '4px solid #dc2626' : '1px solid var(--line)',
                      transition: 'all 0.2s ease',
                      background: '#ffffff'
                    }}
                  >
                    {/* Card Top Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '12px', fontWeight: '850', color: 'var(--primary)' }}>
                            {esc.id}
                          </span>
                          <span style={{
                            fontSize: '9.5px',
                            fontWeight: '900',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            background: esc.isOverdue ? '#fee2e2' : '#fef3c7',
                            color: esc.isOverdue ? '#dc2626' : '#d97706'
                          }}>
                            {esc.priority}
                          </span>
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: 'var(--muted)',
                            background: 'var(--soft)',
                            padding: '2px 8px',
                            borderRadius: '12px'
                          }}>
                            {esc.category}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '8px 0 0' }}>
                          {esc.name}
                        </h3>
                      </div>

                      {/* Time and countdown details */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: esc.isOverdue ? '#fff5f5' : '#fffbeb',
                        border: esc.isOverdue ? '1px solid #feb2b2' : '1px solid #fde68a',
                        padding: '6px 12px',
                        borderRadius: '6px'
                      }}>
                        <Clock size={14} style={{ color: esc.isOverdue ? '#dc2626' : '#d97706' }} />
                        <div>
                          <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '750' }}>
                            SLA {esc.timeLabel}
                          </span>
                          <span style={{ fontSize: '13px', fontWeight: '850', color: esc.isOverdue ? '#dc2626' : '#d97706' }}>
                            {esc.timeLeft}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desc */}
                    <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: '1.5' }}>
                      {esc.desc}
                    </p>

                    {/* Footer / Assign Info & Action */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px dashed var(--lavender)',
                      paddingTop: '16px',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '12.5px', color: 'var(--muted)', fontWeight: '700' }}>
                          Current Handler:
                        </span>
                        <span style={{
                          fontSize: '12.5px',
                          fontWeight: '800',
                          color: esc.agent === 'Unassigned' ? '#dc2626' : 'var(--text)',
                          background: esc.agent === 'Unassigned' ? '#fee2e2' : 'var(--soft)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          {esc.agent}
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleTakeOver(esc.id)}
                          disabled={esc.agent === 'Manager (Self)'}
                          style={{
                            height: '32px',
                            padding: '0 14px',
                            borderRadius: '4px',
                            border: '1px solid var(--primary)',
                            background: esc.agent === 'Manager (Self)' ? 'var(--soft)' : '#fff',
                            color: 'var(--primary)',
                            fontSize: '12.5px',
                            fontWeight: '750',
                            cursor: esc.agent === 'Manager (Self)' ? 'not-allowed' : 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          type="button"
                        >
                          <UserCheck size={13} />
                          <span>{esc.agent === 'Manager (Self)' ? 'Assumed Ownership' : 'Take Over'}</span>
                        </button>
                        <button
                          onClick={() => handleDirectAction(esc.id)}
                          style={{
                            height: '32px',
                            padding: '0 14px',
                            borderRadius: '4px',
                            border: 'none',
                            background: 'var(--primary)',
                            color: '#fff',
                            fontSize: '12.5px',
                            fontWeight: '750',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          type="button"
                        >
                          <Play size={13} fill="#fff" />
                          <span>Direct Action</span>
                        </button>
                      </div>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>

          {/* Right Side: Sidebar Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Panel 1: Manager Intervention Console */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Manager Intervention
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>
                Operational bypasses to override ticketing rules, reallocate workloads, or trigger global alerts.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
                {/* Force Re-assignment */}
                <button
                  onClick={handleForceReassignment}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  type="button"
                  onMouseOver={(e) => e.currentTarget.style.background = 'var(--soft)'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
                >
                  <Users size={16} style={{ color: 'var(--primary)' }} />
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text)' }}>
                      Force Re-assignment
                    </strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                      Override active agent queue lockouts
                    </span>
                  </div>
                  <ArrowRight size={14} style={{ color: 'var(--muted)' }} />
                </button>

                {/* War-Room Protocol */}
                <button
                  onClick={handleToggleWarRoom}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #fca5a5',
                    background: warRoomActive ? '#fee2e2' : '#fff5f5',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  type="button"
                >
                  <Radio size={16} style={{ color: '#dc2626' }} className={warRoomActive ? 'pulse-icon' : ''} />
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: '13px', display: 'block', color: '#991b1b' }}>
                      {warRoomActive ? 'Deactivate War-Room' : 'Initiate War-Room'}
                    </strong>
                    <span style={{ fontSize: '11px', color: '#b91c1c' }}>
                      Lock down system alerts and summon Tier 3
                    </span>
                  </div>
                  <ArrowRight size={14} style={{ color: '#991b1b' }} />
                </button>

                {/* Silence Alerts */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid var(--line)',
                  background: '#fff'
                }}>
                  <BellOff size={16} style={{ color: alertsSilenced ? '#d97706' : 'var(--muted)' }} />
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text)' }}>
                      Mute Notification Pings
                    </strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                      Temporary silence system sound alarms
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={alertsSilenced}
                    onChange={(e) => {
                      setAlertsSilenced(e.target.checked);
                      if (e.target.checked) {
                        setFeed(prev => [
                          { id: Date.now(), text: 'Manager silenced audible dashboard alarm pings', time: 'Just now', type: 'info' },
                          ...prev
                        ]);
                      }
                    }}
                    style={{
                      width: '38px',
                      height: '20px',
                      cursor: 'pointer',
                      accentColor: 'var(--primary)'
                    }}
                    aria-label="Toggle silence alarms"
                  />
                </div>
              </div>
            </div>

            {/* Panel 2: MTTR Statistics & Compliance dial */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Performance & SLAs
              </h3>

              {/* Goal dial/bar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid var(--lavender)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '700' }}>
                    SLA Compliance Goal
                  </span>
                  <span style={{ fontSize: '12.5px', fontWeight: '850', color: 'var(--primary)' }}>
                    94.2% / 98.0%
                  </span>
                </div>
                {/* Horizontal Compliance progress bar */}
                <div style={{ height: '8px', background: '#eee9f6', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ width: '94.2%', height: '100%', background: 'var(--primary)' }} />
                  {/* Goal marker */}
                  <div style={{ position: 'absolute', left: '98%', top: 0, width: '2px', height: '100%', background: '#dc2626' }} title="Goal: 98%" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>
                  <span>Current: 94.2%</span>
                  <span style={{ color: '#dc2626' }}>Goal Target: 98%</span>
                </div>
              </div>

              {/* MTTR Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Activity size={16} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>
                    MTTR (Mean Time to Resolve)
                  </span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '4px' }}>
                  <div style={{ padding: '12px', background: 'var(--soft)', borderRadius: '6px' }}>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', fontWeight: '750', textTransform: 'uppercase' }}>
                      Level 3 MTTR
                    </span>
                    <strong style={{ display: 'block', fontSize: '18px', color: '#dc2626', fontWeight: '850', marginTop: '4px' }}>
                      42m
                    </strong>
                    <span style={{ fontSize: '10px', color: '#07956f', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '2px', marginTop: '2px' }}>
                      <TrendingDown size={10} />
                      -12% vs average
                    </span>
                  </div>

                  <div style={{ padding: '12px', background: 'var(--soft)', borderRadius: '6px' }}>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', fontWeight: '750', textTransform: 'uppercase' }}>
                      Level 2 MTTR
                    </span>
                    <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)', fontWeight: '850', marginTop: '4px' }}>
                      2h 15m
                    </strong>
                    <span style={{ fontSize: '10px', color: '#d32929', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '2px', marginTop: '2px' }}>
                      <TrendingUp size={10} />
                      +8% vs average
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Panel 3: Recent Escalation Events Feed */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Recent Escalation Events
                </h3>
              </div>

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
                      fontSize: '12px'
                    }}
                  >
                    <span
                      style={{
                        height: '6px',
                        width: '6px',
                        borderRadius: '50%',
                        background: item.type === 'alert' ? '#dc2626' : item.type === 'request' ? '#f97316' : item.type === 'action' ? 'var(--primary)' : 'var(--muted)',
                        marginTop: '6px',
                        flexShrink: 0
                      }}
                    />
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
      
      {/* Animation keyframes style injected dynamically */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.95;
            filter: brightness(1.15);
          }
        }
        .pulse-icon {
          animation: radial-pulse 1.5s infinite;
        }
        @keyframes radial-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
          }
        }
      `}</style>
    </AdminShell>
  );
}
