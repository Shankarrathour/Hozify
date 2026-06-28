import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  HelpCircle, MessageSquare, PhoneCall, FileText, Send, 
  ChevronRight, ChevronDown, CheckCircle2, Ticket
} from 'lucide-react';

export default function HelpSupportPage() {
  const { addToast } = useToast();
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketPriority, setTicketPriority] = useState('Medium');

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: 'How do I add a new administrative role?', a: 'Super Admins can navigate to Role Management in the sidebar, click Create Role, specify permission nodes, and assign the new role to users.' },
    { id: 2, q: 'How is the platform fee commission calculated?', a: 'Commission fee is a dynamic base percentage configured in Platform Fee Management. It applies directly to booking sub-totals on processing.' },
    { id: 3, q: 'What happens when a transaction is in a FAILED state?', a: 'Failed transactions list in Payment Management. Operators can view reason codes and trigger manual failover overrides to force settled statuses.' },
    { id: 4, q: 'Can I restrict menu options for support agents?', a: 'Yes. Menu Management allows you to toggle visibility on user-facing and partner-facing sidebar links based on dynamic access levels.' }
  ];

  const handleRaiseTicket = (e) => {
    e.preventDefault();
    addToast('Support ticket registered successfully!', 'success');
    setTicketSubject('');
    setTicketDescription('');
  };

  const handleLiveChat = () => {
    addToast('Opening secure Live Chat terminal support...', 'info');
  };

  return (
    <AdminShell activeTab="Profile" headerTitle="Help &amp; Support Console">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Profile &gt; <span style={{ color: '#2A2454' }}>Help &amp; Support</span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="custom-page-heading" style={{ margin: '0 0 6px 0' }}>Help &amp; Support Center</h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Access system operation guides, raise support tickets, chat live with developers, and view FAQs.</p>
        </div>

        {/* Top Grid: Action Options */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* Option 1: Live Chat */}
          <div className="report-kpi-card" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '8px', width: 'fit-content', borderRadius: '8px', background: '#e0e7ff', color: '#4f46e5' }}>
              <MessageSquare size={20} />
            </div>
            <strong style={{ fontSize: '15px', color: 'var(--text)' }}>Connect to Live Chat</strong>
            <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>Discuss platform integrations and runtime issues directly with backend system developers.</p>
            <button onClick={handleLiveChat} className="custom-btn-secondary" style={{ marginTop: 'auto', width: '100%' }}>
              Start Live Chat
            </button>
          </div>

          {/* Option 2: Direct Contact */}
          <div className="report-kpi-card" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '8px', width: 'fit-content', borderRadius: '8px', background: '#ecfdf5', color: '#10b981' }}>
              <PhoneCall size={20} />
            </div>
            <strong style={{ fontSize: '15px', color: 'var(--text)' }}>Contact Helpline Support</strong>
            <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>Call our emergency operational support hotline for real-time backup assistance.</p>
            <a href="tel:+911800234567" className="custom-btn-secondary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}>
              Call +91 1800 234 567
            </a>
          </div>

          {/* Option 3: Documentation */}
          <div className="report-kpi-card" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '8px', width: 'fit-content', borderRadius: '8px', background: '#fef2f2', color: '#ef4444' }}>
              <FileText size={20} />
            </div>
            <strong style={{ fontSize: '15px', color: 'var(--text)' }}>System Documentation</strong>
            <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>Browse structured deployment guides, permission matrix documentation, and API references.</p>
            <button onClick={() => addToast('Documentation download starting...', 'success')} className="custom-btn-secondary" style={{ marginTop: 'auto', width: '100%' }}>
              Open Docs Archive
            </button>
          </div>

        </div>

        {/* Content Section: FAQs & Raise Ticket */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
          
          {/* FAQ Accordion */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={18} /> Frequently Asked Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq) => {
                const isActive = activeFaq === faq.id;
                return (
                  <div key={faq.id} style={{ border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
                    <button 
                      onClick={() => setActiveFaq(isActive ? null : faq.id)}
                      style={{ width: '100%', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none', background: '#f8fafc', cursor: 'pointer', textAlign: 'left', outline: 'none' }}
                    >
                      <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>{faq.q}</span>
                      {isActive ? <ChevronDown size={16} color="var(--muted)" /> : <ChevronRight size={16} color="var(--muted)" />}
                    </button>
                    {isActive && (
                      <div style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--muted)', lineHeight: '1.5', background: '#fff', borderTop: '1px solid var(--line)' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ticket Registration */}
          <form onSubmit={handleRaiseTicket} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Ticket size={18} /> Raise Operations Support Ticket
            </h3>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Ticket Subject</label>
              <input 
                type="text" 
                placeholder="e.g. UPI payout settlement failure"
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Description</label>
              <textarea 
                rows="3"
                placeholder="Provide a detailed description of the error or request..."
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', fontFamily: 'inherit', resize: 'vertical' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Priority Level</label>
              <select 
                value={ticketPriority}
                onChange={(e) => setTicketPriority(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', background: '#fff' }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
                <option value="Critical">Critical blocker</option>
              </select>
            </div>

            <button type="submit" className="custom-btn-primary" style={{ width: '100%', height: '38px', marginTop: '4px' }}>
              <Send size={14} style={{ marginRight: '6px' }} /> Submit Support Ticket
            </button>
          </form>

        </div>

      </div>
    </AdminShell>
  );
}
