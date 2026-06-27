import React, { useState } from 'react';
import {
  Filter,
  Plus,
  Share2,
  MoreVertical,
  Paperclip,
  Smile,
  AlertCircle,
  Upload,
  Send,
  Check,
  X
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function DisputeCenter() {
  const { navigate } = useApp();

  const [disputes, setDisputes] = useState([
    {
      id: 'DSP-8821',
      title: 'Structural Failure',
      type: 'DAMAGED MATERIAL',
      typeBg: '#fef2f2',
      typeColor: '#dc2626',
      material: 'High-Tensile Steel I-Beams (Grade S355)',
      supplier: 'ArcelorMittal Global',
      avatar: 'AM',
      avatarBg: '#0f172a',
      updated: '12m ago',
      po: 'P-2023-00441',
      reported: 'Oct 24, 2023',
      issueTypeDetail: 'Damaged Goods',
      impact: '$124,500.00',
      sla: '48 Hours Remaining',
      severity: 'CRITICAL',
      evidence: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&h=100&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&h=100&q=80',
        'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=150&h=100&q=80'
      ],
      messages: [
        {
          sender: 'Marcus Vance (Procurement)',
          time: '10:42 AM',
          text: 'Discovered hairline fractures on 12 out of 40 beams during offloading. Seems like improper stacking during transit. Please review the attached photos. We cannot accept this batch as it compromises safety standards.',
          isUser: true
        },
        {
          system: true,
          text: 'Supplier was notified via Global API at 10:43 AM'
        },
        {
          sender: 'ArcelorMittal Global (support)',
          time: '11:15 AM',
          text: 'Acknowledged. We are investigating the logistics provider (Maersk Trans). Initial logs show excessive vibration during the final leg. Would you prefer a full refund or a priority replacement delivery by Friday?',
          isUser: false
        }
      ]
    },
    {
      id: 'DSP-8819',
      title: 'Wrong Pump Models',
      type: 'WRONG MATERIAL',
      typeBg: '#f5f3ff',
      typeColor: '#7c3aed',
      material: 'Industrial Coolant Pumps (X-Series)',
      supplier: 'Grundfos Engineering',
      avatar: 'GP',
      avatarBg: '#25108f',
      updated: '2h ago',
      po: 'P-2023-00438',
      reported: 'Oct 23, 2023',
      issueTypeDetail: 'Specification Mismatch',
      impact: '$42,100.00',
      sla: 'SLA Met (Pending Verification)',
      severity: 'HIGH',
      evidence: [],
      messages: [
        {
          sender: 'Marcus Vance (Procurement)',
          time: '09:12 AM',
          text: 'We received Y-Series coolant pumps instead of the ordered high-flow X-Series. This delays our coolant loop installation.',
          isUser: true
        }
      ]
    },
    {
      id: 'DSP-8814',
      title: 'Late Valves Delivery',
      type: 'LATE DELIVERY',
      typeBg: '#fffbeb',
      typeColor: '#d97706',
      material: 'Control Valve Assemblies',
      supplier: 'Emerson Electric',
      avatar: 'EE',
      avatarBg: '#d97706',
      updated: '1d ago',
      po: 'P-2023-00429',
      reported: 'Oct 21, 2023',
      issueTypeDetail: 'Delivery Delay',
      impact: '$18,400.00',
      sla: '12 Hours Overdue',
      severity: 'MEDIUM',
      evidence: [],
      messages: [
        {
          sender: 'Marcus Vance (Procurement)',
          time: '04:30 PM',
          text: 'Estimated delivery was 4 days ago. Please send updated shipping courier details immediately.',
          isUser: true
        }
      ]
    },
    {
      id: 'DSP-8798',
      title: 'Custom PCB Panels',
      type: 'REFUND ISSUED',
      typeBg: '#ecfdf5',
      typeColor: '#059669',
      material: 'Custom PCB Panels (v4.2)',
      supplier: 'Shenzhen Circuits Ltd',
      avatar: 'SC',
      avatarBg: '#059669',
      updated: 'Closed 3d ago',
      po: 'P-2023-00392',
      reported: 'Oct 15, 2023',
      issueTypeDetail: 'Defective Units',
      impact: '$8,200.00',
      sla: 'Closed and Resolved',
      severity: 'RESOLVED',
      evidence: [],
      messages: [
        {
          sender: 'System',
          time: 'Oct 18, 2023',
          text: 'Refund of $8,200.00 processed back to Hozify Wallet.',
          isUser: false
        }
      ]
    }
  ]);

  const [selectedDisputeId, setSelectedDisputeId] = useState('DSP-8821');
  const [typedMessage, setTypedMessage] = useState('');

  const activeDispute = disputes.find((d) => d.id === selectedDisputeId) || disputes[0];

  const handleSendMessage = () => {
    if (!typedMessage.trim()) return;
    
    // Add message to active dispute
    setDisputes((prev) =>
      prev.map((d) => {
        if (d.id === activeDispute.id) {
          return {
            ...d,
            messages: [
              ...d.messages,
              {
                sender: 'Marcus Vance (Procurement)',
                time: 'Just Now',
                text: typedMessage,
                isUser: true
              }
            ]
          };
        }
        return d;
      })
    );
    setTypedMessage('');
  };

  const handleLogNewDispute = () => {
    alert('Opening wizard to file a new Material or Supplier Dispute...');
  };

  return (
    <AdminShell
      activeTab="Material Requests"
      brandText="Hozify Procurement"
      brandSubText="EXECUTIVE COMMAND"
      searchPlaceholder="Search disputes, POs, or items..."
      customProfileName="Admin User"
      customProfileRole="Procurement Director"
    >
      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: 'calc(100vh - 120px)' }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#7a7688' }}>
          <span>Suppliers</span>
          <span>&gt;</span>
          <span style={{ fontWeight: '700', color: '#1c2536' }}>Material Dispute Center</span>
        </div>

        {/* Header Title Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
              Active Disputes
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => alert('Filtering dispute cards...')}
              style={{
                background: '#ffffff',
                color: '#565365',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                padding: '10px 16px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <Filter size={15} />
              <span>Filters</span>
            </button>
            <button
              onClick={handleLogNewDispute}
              style={{
                background: '#0b1329',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(11,19,41,0.15)'
              }}
              type="button"
            >
              <Plus size={15} />
              <span>Log New Dispute</span>
            </button>
          </div>
        </div>

        {/* List + Details Split Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.2fr 2fr', gap: '24px', flex: 1 }}>
          
          {/* Left: Active Disputes List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {disputes.map((d) => {
              const isSelected = d.id === selectedDisputeId;
              return (
                <div
                  key={d.id}
                  onClick={() => setSelectedDisputeId(d.id)}
                  style={{
                    background: '#ffffff',
                    border: isSelected ? '2px solid #25108f' : '1px solid var(--line)',
                    borderRadius: '12px',
                    padding: '20px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 20px rgba(37,16,143,0.08)' : 'none',
                    transition: 'all 0.15s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', padding: '3px 8px', borderRadius: '4px', background: d.typeBg, color: d.typeColor }}>
                      {d.type}
                    </span>
                    <span style={{ fontSize: '11px', color: '#7a7688', fontWeight: '700' }}>#{d.id}</span>
                  </div>
                  
                  <strong style={{ display: 'block', fontSize: '14.5px', color: '#1c2536', lineHeight: '1.4' }}>{d.material}</strong>
                  <span style={{ display: 'block', fontSize: '12px', color: '#7a7688', marginTop: '4px' }}>Supplier: {d.supplier}</span>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: d.avatarBg, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '800' }}>
                        {d.avatar}
                      </div>
                      <span style={{ fontSize: '11.5px', color: '#565365', fontWeight: '600' }}>{d.supplier.substring(0, 15)}...</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#7a7688' }}>{d.updated}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Dispute thread */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            
            {/* Thread Header */}
            <div style={{ padding: '24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
                    #{activeDispute.id}: {activeDispute.title}
                  </h2>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: '#dc2626', background: '#fef2f2', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {activeDispute.severity}
                  </span>
                </div>
                <span style={{ display: 'block', fontSize: '12px', color: '#7a7688', marginTop: '4px' }}>
                  {activeDispute.supplier} • {activeDispute.po} • Reported {activeDispute.reported}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button onClick={() => alert('Sharing dispute files...')} style={{ background: 'transparent', border: 'none', color: '#7a7688', padding: '6px', cursor: 'pointer' }} aria-label="Share dispute details" type="button">
                  <Share2 size={16} />
                </button>
                <button style={{ background: 'transparent', border: 'none', color: '#7a7688', padding: '6px', cursor: 'pointer' }} aria-label="More dispute actions" type="button">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>

            {/* SLA / Value stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', padding: '20px 24px', background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
              
              <div>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Issue Type</span>
                <strong style={{ display: 'block', fontSize: '13.5px', color: '#1c2536', marginTop: '4px' }}>{activeDispute.issueTypeDetail}</strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Impact Value</span>
                <strong style={{ display: 'block', fontSize: '13.5px', color: '#dc2626', marginTop: '4px' }}>{activeDispute.impact}</strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>SLA Resolution</span>
                <strong style={{ display: 'block', fontSize: '13.5px', color: '#25108f', marginTop: '4px' }}>{activeDispute.sla}</strong>
              </div>

            </div>

            {/* Chat Body & Thread Logs */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', background: '#ffffff', minHeight: '220px' }}>
              
              {/* Visual Evidence slots */}
              {activeDispute.evidence.length > 0 && (
                <div>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase', marginBottom: '8px' }}>Visual Evidence & Attachments</span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {activeDispute.evidence.map((img, idx) => (
                      <div key={idx} style={{ width: '80px', height: '60px', borderRadius: '6px', overflow: 'hidden', border: '1px solid #cbd5e1', cursor: 'zoom-in' }} onClick={() => alert('Launching lightbox view...')}>
                        <img src={img} alt={`Evidence photo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                    <div
                      onClick={() => alert('Trigger file browser...')}
                      style={{
                        width: '80px',
                        height: '60px',
                        borderRadius: '6px',
                        border: '1.5px dashed #cbd5e1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7a7688',
                        cursor: 'pointer',
                        fontSize: '9px',
                        fontWeight: '700'
                      }}
                    >
                      <Upload size={14} style={{ marginBottom: '2px' }} />
                      <span>Upload File</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Chat timeline items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                {activeDispute.messages.map((msg, idx) => {
                  if (msg.system) {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                        <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#565365', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <AlertCircle size={12} style={{ color: '#2563eb' }} />
                          <span>{msg.text}</span>
                        </div>
                      </div>
                    );
                  }

                  const initial = msg.sender.substring(0, 2).toUpperCase();

                  return (
                    <div key={idx} style={{ display: 'flex', gap: '12px', flexDirection: msg.isUser ? 'row' : 'row' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: msg.isUser ? '#d7e1ff' : '#0f172a', color: msg.isUser ? '#25108f' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', flexShrink: 0 }}>
                        {initial}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong style={{ fontSize: '12.5px', color: '#1c2536' }}>{msg.sender}</strong>
                          <span style={{ fontSize: '10px', color: '#7a7688' }}>{msg.time}</span>
                        </div>
                        <div
                          style={{
                            background: msg.isUser ? '#f0f4ff' : '#1e1b4b',
                            color: msg.isUser ? '#1c2536' : '#ffffff',
                            borderRadius: '8px',
                            padding: '12px 16px',
                            fontSize: '13px',
                            lineHeight: '1.5',
                            marginTop: '6px',
                            display: 'inline-block',
                            maxWidth: '90%'
                          }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Input message footer */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid var(--line)', background: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <textarea
                placeholder="Type a message or proposed resolution..."
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '60px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  fontSize: '13px',
                  outline: 'none',
                  resize: 'none',
                  background: '#ffffff',
                  color: '#1c2536'
                }}
              />
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '14px', color: '#7a7688' }}>
                  <button onClick={() => alert('Attach file trigger...')} style={{ background: 'transparent', border: 'none', color: '#7a7688', cursor: 'pointer', padding: '2px' }} aria-label="Attach file" type="button">
                    <Paperclip size={18} />
                  </button>
                  <button onClick={() => alert('Insert emoji trigger...')} style={{ background: 'transparent', border: 'none', color: '#7a7688', cursor: 'pointer', padding: '2px' }} aria-label="Insert emoji" type="button">
                    <Smile size={18} />
                  </button>
                </div>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => alert('Draft saved successfully.')}
                    style={{ background: 'transparent', border: 'none', color: '#565365', fontSize: '13px', fontWeight: '700', cursor: 'pointer', padding: '6px 12px' }}
                    type="button"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={handleSendMessage}
                    style={{
                      background: '#25108f',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 18px',
                      fontSize: '13px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 10px rgba(37,16,143,0.1)'
                    }}
                    type="button"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
