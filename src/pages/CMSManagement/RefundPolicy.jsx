import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  FileText, History, Clock, CheckCircle2, AlertTriangle, X, 
  Bold, Italic, List as ListIcon, Link as LinkIcon, Plus
} from 'lucide-react';

export default function RefundPolicy() {
  const [legalHeader, setLegalHeader] = useState('This Refund Policy ("Policy") governs the financial obligations and reimbursement procedures for Enterprise CMS services...');
  const [refundWindow, setRefundWindow] = useState('30');
  const [processingFee, setProcessingFee] = useState('2.5');

  const [clauses, setClauses] = useState([
    { id: 1, title: 'SECTION 1.0: ELIGIBILITY', content: 'Refunds are strictly limited to technical failure of the CMS platform where our support team cannot provide a resolution within 72 business hours. Subscription renewals are not eligible for automated refunds once the billing cycle has commenced.' },
    { id: 2, title: 'SECTION 2.0: NON-REFUNDABLE ITEMS', content: 'Custom development work, implementation fees, and third-party integration costs are non-refundable under any circumstances once the statement of work has been signed.' },
    { id: 3, title: 'SECTION 3.0: CHARGEBACK POLICY', content: 'Unauthorized chargebacks will result in immediate permanent account suspension and possible legal action to recover merchant processing penalties and administrative costs.' }
  ]);

  const removeClause = (idToRemove) => {
    setClauses(clauses.filter(c => c.id !== idToRemove));
  };

  return (
    <AdminShell 
      activeTab="CMS Management" 
      searchPlaceholder="Search resources..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1200px' }}>
        
        {/* Page Heading */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', background: '#e0e7ff', color: '#4f46e5', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
            ENTERPRISE CORE
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1e1b4b', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Refund Policy
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
            Configure and manage refund rules, financial clauses, and customer reimbursement guidelines.
          </p>
        </div>

        {/* Top Actions Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid var(--line)', padding: '16px 24px', borderRadius: '12px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#312e81', color: '#fff', padding: '6px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              DRAFT V2.4.1
            </span>
            <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> Last edited 4 mins ago by Alex M.
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => alert('Generating PDF preview...')} style={{ padding: '8px 16px', background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Preview PDF
            </button>
            <button onClick={() => alert('Changes discarded.')} style={{ padding: '8px 16px', background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Discard Changes
            </button>
            <button onClick={() => alert('Changes published successfully!')} style={{ padding: '8px 16px', background: '#312e81', border: 'none', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Publish Changes
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '7fr 3fr', gap: '24px' }}>
          
          {/* LEFT COLUMN: Main Editor Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '7' }}>
            
            {/* Financial Framework Clauses */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                Financial Framework Clauses
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Legal Header Statement</label>
                <textarea 
                  rows={3}
                  value={legalHeader}
                  onChange={(e) => setLegalHeader(e.target.value)}
                  style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: 'var(--text)', outline: 'none', resize: 'vertical', lineHeight: '1.5' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Refund Window (Days)</label>
                  <input 
                    type="number" 
                    value={refundWindow}
                    onChange={(e) => setRefundWindow(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '15px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Processing Fee (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    value={processingFee}
                    onChange={(e) => setProcessingFee(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '15px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Detailed Terms Editor */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px' }}>
              
              {/* Toolbar */}
              <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Detailed Terms Editor
                  </h3>
                  <div style={{ width: '1px', height: '24px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button onClick={() => alert('Bold format applied')} className="editor-btn"><Bold size={16} /></button>
                    <button onClick={() => alert('Italic format applied')} className="editor-btn"><Italic size={16} /></button>
                    <button onClick={() => alert('List format applied')} className="editor-btn"><ListIcon size={16} /></button>
                    <button onClick={() => alert('Link format applied')} className="editor-btn"><LinkIcon size={16} /></button>
                  </div>
                </div>
                <button onClick={() => alert('Adding new sub-clause...')} style={{ background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <Plus size={14} /> Add Sub-clause
                </button>
              </div>

              {/* Editor Blocks */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {clauses.map((clause, idx) => (
                  <div key={clause.id} style={{ position: 'relative', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px 20px', background: '#fff', display: 'flex', gap: '16px' }}>
                    
                    {/* Visual left indicator block for some entries just to mimic design variation */}
                    {idx === 0 && (
                      <div style={{ position: 'absolute', left: '-1px', top: '16px', bottom: '16px', width: '3px', background: '#0f172a', borderRadius: '0 4px 4px 0' }} />
                    )}

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{clause.title}</span>
                        <button onClick={() => removeClause(clause.id)} style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '2px' }}>
                          <X size={14} />
                        </button>
                      </div>
                      <p style={{ margin: 0, fontSize: '13px', color: idx === 1 ? 'var(--muted)' : 'var(--text)', fontStyle: idx === 1 ? 'italic' : 'normal', lineHeight: '1.6' }}>
                        {clause.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '3' }}>
            
            {/* Compliance Monitor */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Compliance Monitor
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <AlertTriangle size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>GDPR Article 17</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.4', display: 'block', marginTop: '4px' }}>
                      Policy must explicitly mention data deletion upon refund completion.
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Payment Services Act</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.4', display: 'block', marginTop: '4px' }}>
                      Processing fee transparency meets EU 2024 standards.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Impact */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Operational Impact
              </h3>
              
              <div style={{ display: 'flex', gap: '24px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Refund Rate</span>
                  <strong style={{ display: 'block', fontSize: '20px', fontWeight: '900', color: 'var(--text)' }}>1.2%</strong>
                  <span style={{ fontSize: '10px', color: '#10b981', fontWeight: '600' }}>-0.3% vs LW</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Avg. Process</span>
                  <strong style={{ display: 'block', fontSize: '20px', fontWeight: '900', color: 'var(--text)' }}>4.2d</strong>
                  <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Goal: 3.0d</span>
                </div>
              </div>
            </div>

            {/* Documentation Lead */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Documentation Lead
              </h3>
              <div style={{ background: '#f1f5f9', height: '120px', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line)', overflow: 'hidden', position: 'relative' }}>
                {/* Mocked image background representation */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'repeating-linear-gradient(45deg, #cbd5e1 0, #cbd5e1 2px, transparent 2px, transparent 10px)' }} />
                <span style={{ position: 'relative', fontSize: '24px', fontWeight: '900', color: 'var(--muted)', opacity: 0.3, transform: 'rotate(-15deg)' }}>POLICY DOC</span>
              </div>
              <span style={{ fontSize: '10px', color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Primary header image for public policy page</span>
            </div>

            {/* Version History */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Version History
                </h3>
                <button onClick={() => alert('Viewing all version history...')} style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}>View All</button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginBottom: '4px' }}>v2.4.0 (Live)</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Applied June 14, 2024 • Sarah K.</span>
                </div>
                <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginBottom: '4px' }}>v2.3.9</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Applied May 22, 2024 • Admin</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginBottom: '4px' }}>v2.3.8</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Applied May 10, 2024 • Alex M.</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>

        <style>{`
          .editor-btn {
            background: transparent;
            border: none;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            color: var(--text);
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .editor-btn:hover {
            background: #f1f5f9;
          }
        `}</style>
      </div>
    </AdminShell>
  );
}
