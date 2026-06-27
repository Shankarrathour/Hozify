import React, { useState } from 'react';
import {
  Clock,
  ArrowLeft,
  ChevronRight,
  Download,
  FileText,
  User,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Paperclip,
  Send,
  Sliders,
  DollarSign,
  AlertOctagon,
  CheckCircle,
  XCircle,
  Star
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function SupportTicketDetails({ activeTab = 'Support Center' }) {
  const { navigate, route } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('Overview');
  const [inputText, setInputText] = useState('');
  
  // Extract ID from path if needed (e.g. /support/ticket/8842 -> #TK-8842)
  const pathParts = window.location.pathname.split('/');
  const rawId = pathParts[pathParts.length - 1] || 'HZY-98241';
  const ticketId = rawId.toUpperCase().startsWith('TK-') || rawId.toUpperCase().startsWith('HZY-')
    ? `#${rawId.toUpperCase()}`
    : `#HZY-${rawId.toUpperCase()}`;

  // Interactive ticket state details
  const [ticket, setTicket] = useState({
    id: ticketId,
    status: 'In Progress',
    priority: 'Urgent (P0)',
    timeLeft: '12m',
    category: 'Financial / Payments',
    assignedTo: 'Marc K.',
    summary: 'The customer reported being charged twice for Booking #BK-9022. The first attempt appeared to time out on the client side, but the gateway processed the transaction. A second manual attempt by the user also succeeded. Needs immediate refund for the duplicate transaction.',
    bookingRef: '#BK-9022',
    paymentRef: 'TXN_772183',
    customer: {
      name: 'Elena Aris',
      email: 'elena.a@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&fit=crop&q=80',
      initials: 'EA',
      tier: 'Tier 1: Gold Member',
      since: '2021',
      rating: 5,
      bookingsCount: 42,
      ltv: '$4,820.00',
      cancellations: 1
    }
  });

  // Simulated Chat Messages
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Customer', name: 'Elena Aris', text: 'Hello, I checked my bank statement and I have two debits for the same booking. Can you please check?', time: 'Oct 12, 10:02 AM' },
    { id: 2, sender: 'Agent', name: 'Marc K.', text: 'Hi Elena, I see the duplicate charge on our gateway log. I am processing a refund to your Hozify Wallet right now.', time: 'Oct 12, 10:10 AM' }
  ]);

  // SLA Timelines logs
  const [timeline, setTimeline] = useState([
    { id: 1, text: 'Ticket registered by user via Mobile App', time: 'Oct 12, 10:00 AM' },
    { id: 2, text: 'Auto-routed to Financial / Payments queue', time: 'Oct 12, 10:01 AM' },
    { id: 3, text: 'Agent Marc K. assumed ticket ownership', time: 'Oct 12, 10:05 AM' }
  ]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'Agent',
      name: 'Marc K. (Manager Bypass)',
      text: inputText,
      time: 'Just now'
    };
    setMessages([...messages, newMsg]);
    setInputText('');
  };

  const handleEscalate = () => {
    setTicket(prev => ({ ...prev, priority: 'Critical (P0)', timeLeft: '05m' }));
    setTimeline(prev => [
      ...prev,
      { id: Date.now(), text: 'Ticket escalated to Critical (P0) priority level by Manager override', time: 'Just now' }
    ]);
    alert('Ticket priority escalated to Critical P0.');
  };

  const handleCloseTicket = () => {
    setTicket(prev => ({ ...prev, status: 'Closed', timeLeft: 'N/A' }));
    setTimeline(prev => [
      ...prev,
      { id: Date.now(), text: 'Ticket marked as Closed by Manager', time: 'Just now' }
    ]);
    alert('Ticket has been successfully resolved and closed.');
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Ticket Detail"
      searchPlaceholder="Search within ticket audits, messages..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Back and Breadcrumb navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <button
            onClick={() => navigate(ROUTES.supportAll)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              background: 'transparent',
              fontSize: '13px',
              fontWeight: '750',
              color: 'var(--primary)',
              cursor: 'pointer'
            }}
            type="button"
          >
            <ArrowLeft size={16} />
            <span>Back to All Tickets</span>
          </button>

          <div style={{ fontSize: '12px', fontWeight: '750', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Support Center</span>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--primary)' }}>Ticket Details</span>
          </div>
        </div>

        {/* Ticket Header Metadata Card (Top Card) */}
        <div className="panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', background: '#fff' }}>
          
          {/* Ticket ID & Category */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Ticket ID
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <strong style={{ fontSize: '20px', fontWeight: '850', color: 'var(--primary)' }}>{ticket.id}</strong>
              <span style={{ fontSize: '10px', fontWeight: '900', color: '#10b981', background: '#ecfdf5', padding: '2px 8px', borderRadius: '12px' }}>
                ACTIVE
              </span>
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>
              {ticket.summary.substring(0, 42)}...
            </span>
          </div>

          {/* Customer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Customer
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                height: '28px',
                width: '28px',
                borderRadius: '50%',
                background: '#f1ebfa',
                color: 'var(--primary)',
                fontSize: '11px',
                fontWeight: '850',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {ticket.customer.initials}
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13.5px', color: 'var(--text)' }}>
                  {ticket.customer.name}
                </strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                  {ticket.customer.tier}
                </span>
              </div>
            </div>
          </div>

          {/* Priority SLA countdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Priority SLA
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={15} style={{ color: '#dc2626' }} />
              <strong style={{ fontSize: '13.5px', color: '#dc2626', fontWeight: '850' }}>
                {ticket.priority}
              </strong>
            </div>
            <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>
              Response due in: <strong style={{ color: '#dc2626' }}>{ticket.timeLeft}</strong>
            </span>
          </div>

          {/* Category */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Category
            </span>
            <span style={{
              fontSize: '13px',
              fontWeight: '800',
              color: 'var(--primary)',
              background: 'var(--soft)',
              padding: '4px 10px',
              borderRadius: '6px',
              alignSelf: 'flex-start'
            }}>
              {ticket.category}
            </span>
          </div>

          {/* Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Status
            </span>
            <span style={{
              fontSize: '12px',
              fontWeight: '850',
              padding: '4px 10px',
              borderRadius: '6px',
              background: ticket.status === 'Closed' ? '#f3f4f6' : '#fff9db',
              color: ticket.status === 'Closed' ? '#4b5563' : '#b58000'
            }}>
              {ticket.status}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
              Assigned: <strong>{ticket.assignedTo}</strong>
            </span>
          </div>

        </div>

        {/* Content Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left Side: Tabs and Content */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#fff' }}>
            
            {/* Nav tabs */}
            <div style={{ display: 'flex', borderBottom: '1.5px solid var(--lavender)', paddingBottom: '2px', gap: '24px' }}>
              {['Overview', 'Communications', 'SLA & Timeline', 'Resolution'].map((tName) => {
                const isActive = activeSubTab === tName;
                return (
                  <button
                    key={tName}
                    onClick={() => setActiveSubTab(tName)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      padding: '10px 4px',
                      fontSize: '13.5px',
                      fontWeight: isActive ? '850' : '700',
                      color: isActive ? 'var(--primary)' : 'var(--muted)',
                      borderBottom: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      marginBottom: '-3px'
                    }}
                    type="button"
                  >
                    {tName}
                  </button>
                );
              })}
            </div>

            {/* Sub Tab contents */}
            <div style={{ flex: 1 }}>
              
              {/* Overview content */}
              {activeSubTab === 'Overview' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* Issue Summary */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                      Issue Summary
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>
                      {ticket.summary}
                    </p>
                  </div>

                  {/* Related Actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    
                    {/* Booking Link */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid var(--line)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      background: '#fff'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FileText size={16} style={{ color: 'var(--primary)' }} />
                        <span style={{ fontSize: '13px', fontWeight: '750', color: 'var(--text)' }}>
                          Booking {ticket.bookingRef}
                        </span>
                      </div>
                      <button
                        onClick={() => alert(`Navigating to details for ${ticket.bookingRef}`)}
                        style={{ border: 'none', background: 'transparent', color: 'var(--primary)', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}
                        type="button"
                      >
                        View Details
                      </button>
                    </div>

                    {/* Payment Ref Link */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid var(--line)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      background: '#fff'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <DollarSign size={16} style={{ color: 'var(--primary)' }} />
                        <span style={{ fontSize: '13px', fontWeight: '750', color: 'var(--text)' }}>
                          Ref: {ticket.paymentRef}
                        </span>
                      </div>
                      <button
                        onClick={() => alert(`Verifying payment gateway status for ${ticket.paymentRef}...`)}
                        style={{ border: 'none', background: 'transparent', color: 'var(--primary)', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}
                        type="button"
                      >
                        Verify Gateway
                      </button>
                    </div>

                  </div>

                  {/* Attachments */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                      Attachments (2)
                    </h3>
                    
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      {/* Attachment 1 */}
                      <div
                        style={{
                          width: '130px',
                          height: '130px',
                          border: '1.5px dashed var(--line)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          cursor: 'pointer',
                          overflow: 'hidden'
                        }}
                        onClick={() => alert('Opening attachment...')}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&fit=crop&q=80"
                          alt="screenshot"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Attachment 2 */}
                      <div
                        style={{
                          width: '130px',
                          height: '130px',
                          border: '1.5px dashed var(--line)',
                          borderRadius: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--soft)',
                          cursor: 'pointer',
                          gap: '6px',
                          padding: '10px',
                          textAlign: 'center'
                        }}
                        onClick={() => alert('Downloading error log JSON...')}
                      >
                        <FileText size={28} style={{ color: 'var(--muted)' }} />
                        <span style={{ fontSize: '10px', fontWeight: '850', color: 'var(--text)', wordBreak: 'break-all' }}>
                          ERROR_LOG.JSON
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Communications / Chat */}
              {activeSubTab === 'Communications' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '350px', justifyContent: 'space-between' }}>
                  
                  {/* Chat logs */}
                  <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '6px' }}>
                    {messages.map((msg) => {
                      const isAgent = msg.sender === 'Agent';
                      return (
                        <div
                          key={msg.id}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: isAgent ? 'flex-end' : 'flex-start',
                            maxWidth: '75%',
                            gap: '4px'
                          }}
                        >
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', alignSelf: isAgent ? 'flex-end' : 'flex-start' }}>
                            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)' }}>{msg.name}</span>
                            <span style={{ fontSize: '9px', color: 'var(--muted)' }}>{msg.time}</span>
                          </div>
                          
                          <div style={{
                            padding: '10px 14px',
                            borderRadius: '8px',
                            background: isAgent ? 'var(--primary)' : 'var(--soft)',
                            color: isAgent ? '#ffffff' : 'var(--text)',
                            fontSize: '13px',
                            lineHeight: '1.4'
                          }}>
                            {msg.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Input controls */}
                  <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--lavender)', paddingTop: '12px' }}>
                    <button style={{ height: '36px', width: '36px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer', color: 'var(--muted)' }} aria-label="Attach file">
                      <Paperclip size={16} style={{ margin: 'auto' }} />
                    </button>
                    <input
                      placeholder="Type your reply to customer..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                      style={{ flex: 1, border: '1px solid var(--line)', padding: '0 12px', borderRadius: '6px', fontSize: '13px', outline: 'none' }}
                    />
                    <button
                      onClick={handleSendMessage}
                      style={{ height: '36px', padding: '0 16px', border: 'none', background: 'var(--primary)', color: '#fff', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                      type="button"
                    >
                      <Send size={13} />
                      <span>Send</span>
                    </button>
                  </div>

                </div>
              )}

              {/* SLA & Timeline */}
              {activeSubTab === 'SLA & Timeline' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                    Chronological Ticket Audit
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderLeft: '2px solid var(--lavender)', paddingLeft: '16px', marginLeft: '8px', marginTop: '8px' }}>
                    {timeline.map((log) => (
                      <div key={log.id} style={{ position: 'relative', paddingBottom: '10px' }}>
                        {/* Bullet offset circle */}
                        <div style={{
                          position: 'absolute',
                          left: '-23px',
                          top: '3px',
                          height: '10px',
                          width: '10px',
                          borderRadius: '50%',
                          background: 'var(--primary)',
                          border: '2px solid #fff'
                        }} />
                        <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                          {log.text}
                        </span>
                        <span style={{ fontSize: '10.5px', color: 'var(--muted)' }}>
                          {log.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resolution Tab */}
              {activeSubTab === 'Resolution' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                    Final Resolve Terminal
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>Resolution Summary</span>
                      <textarea
                        placeholder="Detail the cause and structural fix of this issue..."
                        rows={4}
                        style={{ width: '100%', border: '1px solid var(--line)', padding: '10px', borderRadius: '6px', fontSize: '13px', resize: 'vertical' }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                      <button
                        onClick={handleCloseTicket}
                        style={{ height: '35px', padding: '0 16px', border: 'none', background: 'var(--primary)', color: '#fff', borderRadius: '4px', fontSize: '13px', fontWeight: '750', cursor: 'pointer' }}
                        type="button"
                      >
                        Execute Resolution
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Side Sidebar Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Customer card */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Customer Profile
              </h3>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', borderBottom: '1px solid var(--lavender)', paddingBottom: '16px' }}>
                <img
                  src={ticket.customer.avatar}
                  alt={ticket.customer.name}
                  style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover' }}
                />
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)' }}>
                    {ticket.customer.name}
                  </strong>
                  <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>
                    Member since {ticket.customer.since}
                  </span>
                  
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '1px', marginTop: '3px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={11} fill="#07956f" stroke="#07956f" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Total Bookings</span>
                  <strong style={{ color: 'var(--text)' }}>{ticket.customer.bookingsCount}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Total LTV</span>
                  <strong style={{ color: 'var(--text)' }}>{ticket.customer.ltv}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Cancellations</span>
                  <strong style={{ color: '#dc2626' }}>{ticket.customer.cancellations}</strong>
                </div>
              </div>

              <button
                onClick={() => alert(`Opening profile for ${ticket.customer.name}...`)}
                style={{
                  width: '100%',
                  height: '35px',
                  border: '1px solid var(--line)',
                  background: '#fff',
                  borderRadius: '6px',
                  fontSize: '12.5px',
                  fontWeight: '800',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  marginTop: '4px'
                }}
                type="button"
              >
                View Full Profile
              </button>
            </div>

            {/* Quick Actions Console */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Quick Actions
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Issue Refund */}
                <button
                  onClick={() => navigate(ROUTES.supportFinancial)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  type="button"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: 'var(--text)' }}>
                    <DollarSign size={15} style={{ color: 'var(--muted)' }} />
                    Issue Refund
                  </span>
                  <ArrowRight size={14} style={{ color: 'var(--muted)' }} />
                </button>

                {/* Escalate Ticket */}
                <button
                  onClick={handleEscalate}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  type="button"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: 'var(--text)' }}>
                    <TrendingUp size={15} style={{ color: 'var(--muted)' }} />
                    Escalate Ticket
                  </span>
                  <ArrowRight size={14} style={{ color: 'var(--muted)' }} />
                </button>

                {/* Email Customer */}
                <button
                  onClick={() => setActiveSubTab('Communications')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  type="button"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: 'var(--text)' }}>
                    <MessageSquare size={15} style={{ color: 'var(--muted)' }} />
                    Email Customer
                  </span>
                  <ArrowRight size={14} style={{ color: 'var(--muted)' }} />
                </button>

                {/* Close Ticket */}
                <button
                  onClick={handleCloseTicket}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid #fee2e2',
                    background: '#fff5f5',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  type="button"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: '#dc2626' }}>
                    <XCircle size={15} style={{ color: '#dc2626' }} />
                    Close Ticket
                  </span>
                  <ArrowRight size={14} style={{ color: '#dc2626' }} />
                </button>
              </div>
            </div>

            {/* History Logs */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                History
              </h3>
              
              <div style={{ padding: '12px', border: '1px solid #c8c0d7', borderRadius: '6px', background: '#f8f4fc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '12px', color: 'var(--primary)' }}>#HZY-8110</strong>
                  <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Sep 12</span>
                </div>
                <p style={{ fontSize: '11.5px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.3' }}>
                  Service delay at Central Branch.
                </p>
                <span style={{ fontSize: '10px', fontWeight: '850', color: '#07956f', display: 'block', marginTop: '4px' }}>
                  Resolved
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
