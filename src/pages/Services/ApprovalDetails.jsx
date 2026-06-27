import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle2,
  FileCheck,
  TrendingDown,
  ChevronRight,
  ShieldAlert,
  ArrowLeft,
  MessageSquare
} from 'lucide-react';

export default function ApprovalDetails({ requestId, onBack }) {
  const [reviewNote, setReviewNote] = useState('');
  const [notesList, setNotesList] = useState([
    {
      author: 'John Doe',
      role: 'Ops Director',
      avatarInitials: 'JD',
      content: 'Previous maintenance cycle with this vendor showed 99.8% uptime improvement. Highly recommended for expansion.'
    }
  ]);

  const handlePostNote = (e) => {
    e.preventDefault();
    if (!reviewNote.trim()) return;
    setNotesList([
      ...notesList,
      {
        author: 'System Administrator',
        role: 'Internal Access',
        avatarInitials: 'SA',
        content: reviewNote
      }
    ]);
    setReviewNote('');
  };

  const handleApprove = () => {
    alert('Service registration request successfully approved and merged!');
    onBack();
  };

  const handleDeny = () => {
    alert('Service registration request denied.');
    onBack();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Breadcrumb & Navigation Back Action */}
      <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', fontWeight: '700' }}>
          <span style={{ cursor: 'pointer' }} onClick={onBack}>SERVICES</span>
          <span>&gt;</span>
          <span style={{ cursor: 'pointer' }} onClick={onBack}>APPROVALS</span>
          <span>&gt;</span>
          <span style={{ color: 'var(--text)' }}>{requestId || '#SRV-88291'}</span>
        </div>
        
        <button
          onClick={onBack}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--primary)',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          type="button"
        >
          <ArrowLeft size={16} />
          <span>Back to Approval Queue</span>
        </button>
      </div>

      {/* Title & Action Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Advanced HVAC Infrastructure Maintenance
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={handleDeny}
            style={{
              height: '42px',
              padding: '0 20px',
              background: '#ffffff',
              color: 'var(--text)',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            Deny Request
          </button>
          
          <button
            onClick={handleApprove}
            style={{
              height: '42px',
              padding: '0 20px',
              background: '#25108f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            Approve Service
          </button>
        </div>
      </div>

      {/* Grid Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.2fr 1.2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
        
        {/* Column 1: Specifications & Documents */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Specifications */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <FileCheck size={18} style={{ color: '#25108f' }} />
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Specifications</h3>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=320&h=140&q=80"
              alt="Maintenance Pipes Boiler Room"
              style={{ width: '100%', height: '120px', borderRadius: '8px', objectFit: 'cover' }}
            />

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', background: '#eff6ff', color: '#1e40af', padding: '4px 8px', borderRadius: '4px' }}>
                Critical Infrastructure
              </span>
              <span style={{ fontSize: '10px', fontWeight: '800', background: '#fef2f2', color: '#dc2626', padding: '4px 8px', borderRadius: '4px' }}>
                ● High Tier
              </span>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Description</span>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.5' }}>
                Comprehensive quarterly maintenance cycle for building-wide cooling systems, including coolant reclamation, filter replacement, and BMS calibration.
              </p>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Key Requirements</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>
                {['OSHA Level 4 Certification', '24/7 Response Guaranteed', 'Digital Inventory Logs'].map((req, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance Documents */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <CheckCircle2 size={18} style={{ color: '#25108f' }} />
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Compliance Documents</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Liability_Insurance_2024.pdf', meta: 'SIGNED: JAN 12, 2024' },
                { name: 'Compliance_Cert_ISO9001.pdf', meta: 'EXPIRES: AUG 30, 2025' },
                { name: 'Vendor_Background_Check.pdf', meta: 'VERIFIED BY THIRD-PARTY' }
              ].map((doc, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
                  <FileText size={20} style={{ color: 'var(--muted)' }} />
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>{doc.name}</strong>
                    <span style={{ display: 'block', fontSize: '9px', color: 'var(--muted)', marginTop: '2px' }}>{doc.meta}</span>
                  </div>
                  <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer' }} type="button" title="Download">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Column 2: Pricing Structure */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Pricing Structure */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <CheckCircle2 size={18} style={{ color: '#25108f' }} />
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Pricing Structure</h3>
              </div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#25108f', background: '#e0e7ff', padding: '3px 8px', borderRadius: '4px' }}>
                MONTHLY RETAINER
              </span>
            </div>

            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '8px 0', color: 'var(--muted)', fontWeight: '800', fontSize: '10px', textTransform: 'uppercase', textAlign: 'left' }}>Cost Item</th>
                  <th style={{ padding: '8px 0', color: 'var(--muted)', fontWeight: '800', fontSize: '10px', textTransform: 'uppercase', textAlign: 'right' }}>Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px 0', color: 'var(--text)', fontWeight: '700' }}>Base Labor Rate</td>
                  <td style={{ padding: '14px 0', color: 'var(--text)', fontWeight: '700', textAlign: 'right' }}>$4,500.00</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px 0', color: 'var(--text)', fontWeight: '700' }}>Consumables & Parts</td>
                  <td style={{ padding: '14px 0', color: 'var(--text)', fontWeight: '700', textAlign: 'right' }}>$1,250.00</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px 0', color: 'var(--text)', fontWeight: '700' }}>Emergency Response Fee</td>
                  <td style={{ padding: '14px 0', color: 'var(--text)', fontWeight: '700', textAlign: 'right' }}>$850.00</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 0 8px', color: 'var(--text)', fontWeight: '800', fontSize: '15px' }}>Total Per Cycle</td>
                  <td style={{ padding: '16px 0 8px', color: '#25108f', fontWeight: '800', fontSize: '16px', textAlign: 'right' }}>$6,600.00</td>
                </tr>
              </tbody>
            </table></div>
          </div>

        </div>

        {/* Column 3: Risk & Notes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Risk Scorecard */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ShieldAlert size={18} style={{ color: '#25108f' }} />
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Risk Scorecard</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '8px 0' }}>
              {/* Radial gauge dial overlay */}
              <div style={{ position: 'relative', width: '110px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="110" height="110" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#25108f" strokeWidth="3.5" strokeDasharray="75 100" strokeDashoffset="0" strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <strong style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>75</strong>
                  <span style={{ fontSize: '8px', fontWeight: '900', color: '#10b981', display: 'block', marginTop: '2px' }}>LOW RISK</span>
                </div>
              </div>
            </div>

            {/* Risk factors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '11px', fontWeight: '700' }}>
              {[
                { label: 'Financial Stability', activeDots: 4 },
                { label: 'Vendor History', activeDots: 5 },
                { label: 'SLA Adherence', activeDots: 3 }
              ].map((factor, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)' }}>{factor.label}</span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1, 2, 3, 4, 5].map((d) => (
                      <span
                        key={d}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: d <= factor.activeDots ? '#25108f' : '#e2e8f0'
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approval Notes */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <MessageSquare size={18} style={{ color: '#25108f' }} />
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Approval Notes</h3>
            </div>

            {/* Existing feedback card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {notesList.map((note, index) => (
                <div key={index} style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                  <p style={{ fontSize: '11px', color: '#1e3a8a', margin: '0 0 10px', lineHeight: '1.4' }}>
                    "{note.content}"
                  </p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#bfdbfe', color: '#1e40af', fontSize: '8px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {note.avatarInitials}
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#1e3a8a' }}>
                      {note.author} <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>- {note.role}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment input form */}
            <form onSubmit={handlePostNote} style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
              <textarea
                placeholder="Add internal review notes..."
                value={reviewNote}
                onChange={(e) => setReviewNote(e.target.value)}
                style={{
                  height: '64px',
                  border: '1px solid var(--line)',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  outline: 'none',
                  resize: 'none',
                  fontWeight: '700'
                }}
              />
              <button
                type="submit"
                style={{
                  height: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  color: 'var(--text)',
                  fontSize: '11px',
                  fontWeight: '700',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  padding: '0 12px'
                }}
              >
                POST COMMENT
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
