import React from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  Bold, Italic, Type, List, CheckSquare, AlignLeft, Link as LinkIcon, 
  Image as ImageIcon, Undo, Redo, Clock, ClipboardList, Share2, Download,
  Trash2, CheckCircle2
} from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <AdminShell 
      activeTab="CMS Management" 
      searchPlaceholder="Search resources..."
    >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1200px' }}>
        
        {/* Page Heading */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', background: '#e0e7ff', color: '#4f46e5', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
            ENTERPRISE CORE
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1e1b4b', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Terms & Conditions
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
            Configure and audit the legal framework governing platform usage and user compliance.
          </p>
        </div>

        {/* Top Actions Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid var(--line)', padding: '16px 24px', borderRadius: '12px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#312e81', color: '#fff', padding: '6px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              DRAFT V4.2.2
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
            
            {/* Document Status */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Document Status
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <h1 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--text)', margin: 0 }}>Legal Framework v4.2.1</h1>
                  <span style={{ fontSize: '10px', fontWeight: '800', background: '#d1fae5', color: '#059669', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    LIVE
                  </span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Effective Date
                </span>
                <strong style={{ fontSize: '13px', color: 'var(--text)' }}>October 24, 2023</strong>
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
              
              {/* Toolbar */}
              <div style={{ padding: '12px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="editor-btn"><Bold size={16} /></button>
                    <button className="editor-btn"><Italic size={16} /></button>
                    <button className="editor-btn"><Type size={16} /></button>
                  </div>
                  <div style={{ width: '1px', height: '20px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="editor-btn"><List size={16} /></button>
                    <button className="editor-btn"><CheckSquare size={16} /></button>
                    <button className="editor-btn"><AlignLeft size={16} /></button>
                  </div>
                  <div style={{ width: '1px', height: '20px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="editor-btn"><LinkIcon size={16} /></button>
                    <button className="editor-btn"><ImageIcon size={16} /></button>
                  </div>
                  <div style={{ width: '1px', height: '20px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="editor-btn"><Undo size={16} /></button>
                    <button className="editor-btn"><Redo size={16} /></button>
                  </div>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>Character count: 12,450</span>
              </div>

              {/* Editor Content Area */}
              <div style={{ padding: '32px 40px', minHeight: '600px', fontSize: '13px', color: 'var(--text)', lineHeight: '1.8' }} contentEditable suppressContentEditableWarning>
                <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 24px 0', textTransform: 'uppercase' }}>TERMS AND CONDITIONS OF USE</h2>
                
                <h3 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 12px 0', textTransform: 'uppercase' }}>1. ACCEPTANCE OF TERMS</h3>
                <p style={{ margin: '0 0 16px 0', color: 'var(--muted)' }}>
                  These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Enterprise CMS ("Company", "we", "us", or "our"), concerning your access to and use of our administrative dashboard and management services.
                </p>
                <p style={{ margin: '0 0 24px 0', color: 'var(--muted)' }}>
                  You agree that by accessing the Service, you have read, understood, and agreed to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>

                <h3 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 12px 0', textTransform: 'uppercase' }}>2. INTELLECTUAL PROPERTY RIGHTS</h3>
                <p style={{ margin: '0 0 24px 0', color: 'var(--muted)' }}>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                </p>

                <h3 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 12px 0', textTransform: 'uppercase' }}>3. USER REPRESENTATIONS</h3>
                <p style={{ margin: '0 0 24px 0', color: 'var(--muted)' }}>
                  By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
                </p>

                <h3 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 12px 0', textTransform: 'uppercase' }}>4. PROHIBITED ACTIVITIES</h3>
                <p style={{ margin: '0 0 24px 0', color: 'var(--muted)' }}>
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>

                <div style={{ margin: '40px 0', padding: '24px', border: '1px dashed var(--line)', borderRadius: '8px', textAlign: 'center', color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Section divider - End of page 1
                </div>
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN: Sidebar Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '3' }}>
            
            {/* Version Control */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  VERSION CONTROL
                </h3>
                <Clock size={14} style={{ color: 'var(--muted)' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', marginLeft: '6px' }}>
                {/* Vertical Line connecting timeline */}
                <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '3px', width: '2px', background: 'var(--line)' }} />
                
                {/* Item 1 */}
                <div style={{ position: 'relative', paddingLeft: '20px' }}>
                  <div style={{ position: 'absolute', left: '0', top: '4px', width: '8px', height: '8px', borderRadius: '4px', background: '#0f172a', border: '2px solid #fff', outline: '1px solid #0f172a' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '12px', color: 'var(--text)' }}>v4.2.1 (Current)</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Today, 10:45 AM</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>Updated clause 4.2 regarding API usage...</p>
                </div>

                {/* Item 2 */}
                <div style={{ position: 'relative', paddingLeft: '20px' }}>
                  <div style={{ position: 'absolute', left: '1px', top: '4px', width: '6px', height: '6px', borderRadius: '3px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '12px', color: 'var(--text)' }}>v4.2.0</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Oct 20, 2023</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>Major overhaul of privacy alignment for Q4.</p>
                </div>

                {/* Item 3 */}
                <div style={{ position: 'relative', paddingLeft: '20px' }}>
                  <div style={{ position: 'absolute', left: '1px', top: '4px', width: '6px', height: '6px', borderRadius: '3px', background: 'var(--line)' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '12px', color: 'var(--text)' }}>v4.1.8</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Sep 12, 2023</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>Small typo corrections in base terms.</p>
                </div>
              </div>

              <div style={{ marginTop: '24px', borderTop: '1px solid var(--line)', paddingTop: '16px', textAlign: 'center' }}>
                <button style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}>View Full History</button>
              </div>
            </div>

            {/* Document Metadata */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                DOCUMENT METADATA
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginBottom: '8px' }}>Language</label>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: '#ef4444', color: '#fff', fontSize: '8px', padding: '2px 4px', borderRadius: '12px' }}>EN</div>
                    <select className="dash-select" style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 10px 10px 32px', fontSize: '12px', color: 'var(--text)', outline: 'none', appearance: 'none', background: '#fff' }}>
                      <option>English (United States)</option>
                      <option>Spanish (ES)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginBottom: '8px' }}>Draft Label</label>
                  <input 
                    type="text" 
                    defaultValue="Annual Revision 2023"
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '4px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginBottom: '4px' }}>Region</span>
                    <strong style={{ fontSize: '12px', color: 'var(--text)' }}>Global / EMEA</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginBottom: '4px' }}>Compliance</span>
                    <strong style={{ fontSize: '12px', color: 'var(--text)' }}>GDPR, CCPA</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Notes */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  EDITORIAL NOTES
                </h3>
                <ClipboardList size={14} style={{ color: 'var(--muted)' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '12px' }}>
                  <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: 'var(--muted)', fontStyle: 'italic', lineHeight: '1.5' }}>
                    "Section 2.4 needs more clarity on data encryption standards by Monday."
                  </p>
                  <span style={{ display: 'block', textAlign: 'right', fontSize: '10px', color: 'var(--muted)', fontWeight: '600' }}>— Sarah L.</span>
                </div>
                
                <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '12px' }}>
                  <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: 'var(--muted)', fontStyle: 'italic', lineHeight: '1.5' }}>
                    "Approved by legal counsel on Oct 19."
                  </p>
                  <span style={{ display: 'block', textAlign: 'right', fontSize: '10px', color: 'var(--muted)', fontWeight: '600' }}>— System</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{ width: '100%', padding: '12px', background: '#fff', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Download size={14} /> Export as PDF
              </button>
              <button style={{ width: '100%', padding: '12px', background: '#fff', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Share2 size={14} /> External Review Link
              </button>
              <button style={{ width: '100%', padding: '12px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Trash2 size={14} /> Archive Draft
              </button>
            </div>

          </div>
          
        </div>

        {/* Mock Toast Notification */}
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', background: '#1e293b', color: '#fff', padding: '12px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 50, animation: 'slideIn 0.5s ease forwards' }}>
          <CheckCircle2 size={18} style={{ color: '#34d399' }} />
          <span style={{ fontSize: '13px', fontWeight: '600' }}>Draft auto-saved successfully</span>
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
          @keyframes slideIn {
            from { transform: translateY(100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </div>
    </AdminShell>
  );
}
