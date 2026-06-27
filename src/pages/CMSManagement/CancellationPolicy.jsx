import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  FileText, History, Clock, CheckCircle2, AlertTriangle, X, 
  Bold, Italic, List as ListIcon, Link as LinkIcon, Plus
} from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';

export default function CancellationPolicy() {
  const { addToast } = useToast();
  const [legalHeader, setLegalHeader] = useState('This Cancellation Policy ("Policy") governs the conditions, timeframes, and penalties associated with booking cancellations...');
  const [gracePeriod, setGracePeriod] = useState('15');
  const [cancellationFee, setCancellationFee] = useState('10');

  const [clauses, setClauses] = useState([
    { id: 1, title: 'SECTION 1.0: GRACE PERIOD', content: 'Customers may cancel any scheduled service booking within 15 minutes of partner assignment without incurring any penalty or fee. This is intended to accommodate accidental bookings or immediate plan shifts.' },
    { id: 2, title: 'SECTION 2.0: LATE CANCELLATIONS', content: 'Cancellations made less than 2 hours before the scheduled service time will incur a late cancellation fee equal to 10% of the base booking amount or a flat charge, whichever is higher, to compensate the assigned ISP.' },
    { id: 3, title: 'SECTION 3.0: PROVIDER CANCELLATIONS', content: 'If the assigned partner cancels the booking or fails to arrive within 30 minutes of the slot, the customer receives a full refund of any deposit, plus an automated apology credit added to their wallet.' }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showAddClause, setShowAddClause] = useState(false);

  const removeClause = (idToRemove) => {
    setClauses(clauses.filter(c => c.id !== idToRemove));
    addToast('Sub-clause removed successfully!', 'success');
  };

  const handleAddClause = () => {
    if (!newTitle || !newContent) {
      addToast('Please fill in both the section title and content.', 'error');
      return;
    }
    setClauses([...clauses, { id: Date.now(), title: newTitle.toUpperCase(), content: newContent }]);
    setNewTitle('');
    setNewContent('');
    setShowAddClause(false);
    addToast('Sub-clause added successfully!', 'success');
  };

  const handleSave = () => {
    addToast('Cancellation Policy changes published successfully!', 'success');
  };

  return (
    <AdminShell 
      activeTab="CMS" 
      headerTitle="Cancellation Policy Console"
      searchPlaceholder="Search cancellation policies..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1200px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; <span style={{ color: '#2A2454' }}>Cancellation Policy</span>
        </div>

        {/* Page Heading */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', background: '#fee2e2', color: '#dc2626', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
            OPERATIONAL POLICY
          </span>
          <h1 className="custom-page-heading" style={{ margin: '0 0 8px 0' }}>
            Cancellation Policy
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            Configure and manage cancellation rules, late fee structures, and customer timeframes.
          </p>
        </div>

        {/* Top Actions Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid var(--line)', padding: '16px 24px', borderRadius: '12px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#312e81', color: '#fff', padding: '6px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              DRAFT V1.8.0
            </span>
            <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> Last edited 2 hours ago by Operations Lead
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => addToast('PDF preview generated!', 'success')}
              className="custom-btn-secondary"
            >
              Preview PDF
            </button>
            <button 
              onClick={() => { setGracePeriod('15'); setCancellationFee('10'); addToast('Changes discarded.', 'success'); }}
              className="custom-btn-secondary"
            >
              Discard Changes
            </button>
            <button 
              onClick={handleSave}
              className="custom-btn-primary"
              style={{ height: '38px', padding: '0 16px' }}
            >
              Publish Changes
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '7fr 3fr', gap: '24px' }}>
          
          {/* LEFT COLUMN: Main Editor Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '7' }}>
            
            {/* Cancellation Framework Toggles */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                Cancellation Rules Framework
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
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Grace Period Window (Mins)</label>
                  <input 
                    type="number" 
                    value={gracePeriod}
                    onChange={(e) => setGracePeriod(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '15px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Late Cancellation Penalty (%)</label>
                  <input 
                    type="number" 
                    value={cancellationFee}
                    onChange={(e) => setCancellationFee(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '15px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Detailed Terms Editor */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
              
              {/* Toolbar */}
              <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Detailed Terms Editor
                  </h3>
                  <div style={{ width: '1px', height: '24px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="editor-btn" onClick={() => addToast('Bold applied', 'success')}><Bold size={16} /></button>
                    <button className="editor-btn" onClick={() => addToast('Italic applied', 'success')}><Italic size={16} /></button>
                    <button className="editor-btn" onClick={() => addToast('Bullet list added', 'success')}><ListIcon size={16} /></button>
                    <button className="editor-btn" onClick={() => addToast('Hyperlink input opened', 'success')}><LinkIcon size={16} /></button>
                  </div>
                </div>
                <button 
                  onClick={() => setShowAddClause(true)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  <Plus size={14} /> Add Sub-clause
                </button>
              </div>

              {/* Add Clause Form */}
              {showAddClause && (
                <div style={{ padding: '24px', background: 'var(--soft)', borderBottom: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Section Code / Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. SECTION 4.0: FORCE MAJEURE" 
                      value={newTitle} 
                      onChange={(e) => setNewTitle(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '8px 12px', fontSize: '13px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Clause Content</label>
                    <textarea 
                      placeholder="Enter clause text details..." 
                      rows={3} 
                      value={newContent} 
                      onChange={(e) => setNewContent(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '8px 12px', fontSize: '13px', outline: 'none', resize: 'vertical' }}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => setShowAddClause(false)}
                      className="custom-btn-secondary"
                      style={{ height: '32px', padding: '0 12px', fontSize: '12px' }}
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleAddClause}
                      className="custom-btn-primary"
                      style={{ height: '32px', padding: '0 12px', fontSize: '12px' }}
                    >
                      Save Clause
                    </button>
                  </div>
                </div>
              )}

              {/* Editor Blocks */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {clauses.map((clause, idx) => (
                  <div key={clause.id} style={{ position: 'relative', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px 20px', background: '#fff', display: 'flex', gap: '16px' }}>
                    
                    {idx === 0 && (
                      <div style={{ position: 'absolute', left: '-1px', top: '16px', bottom: '16px', width: '3px', background: '#ef4444', borderRadius: '0 4px 4px 0' }} />
                    )}

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{clause.title}</span>
                        <button onClick={() => removeClause(clause.id)} style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '2px' }}>
                          <X size={14} />
                        </button>
                      </div>
                      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text)', lineHeight: '1.6' }}>
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
                Operational Compliance
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <AlertTriangle size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Consumer Protection Act</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.4', display: 'block', marginTop: '4px' }}>
                      Grace period of at least 10 minutes required for all on-demand bookings.
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Merchant Agreement v3.4</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.4', display: 'block', marginTop: '4px' }}>
                      Assigned ISPs are fully compensated on customer late cancellation triggers.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version History */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Version History
                </h3>
                <button 
                  onClick={() => addToast('Opened Version History details.', 'success')}
                  style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}
                >
                  View All
                </button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginBottom: '4px' }}>v1.7.9 (Live)</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Applied Feb 10, 2024 • Operations</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginBottom: '4px' }}>v1.7.8</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Applied Jan 14, 2024 • System Admin</span>
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
