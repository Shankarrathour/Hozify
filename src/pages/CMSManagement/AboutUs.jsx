import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
  Heading1, Heading2, List, ListOrdered, Link, Image as ImageIcon, Code,
  Eye, Save, UploadCloud, Activity, Clock, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function AboutUs() {
  const [pageTitle, setPageTitle] = useState('About Our Enterprise Journey');
  const [metaDesc, setMetaDesc] = useState('Discover the foundation, mission, and professional values of our enterprise-level content management solution. We prioritize data integrity and structural minimalism.');

  return (
    <AdminShell 
      activeTab="CMS Management" 
      searchPlaceholder="Search resources..."
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '7fr 3fr', gap: '24px', paddingBottom: '40px', maxWidth: '1200px' }}>
        
        {/* Page Heading */}
        <div style={{ gridColumn: '1 / -1', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', background: '#e0e7ff', color: '#4f46e5', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
            ENTERPRISE CORE
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1e1b4b', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            About Us
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
            Manage and publish company information, mission, vision, values, and organization overview content.
          </p>
        </div>

        {/* LEFT COLUMN: Main Editor Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '7' }}>
          
          {/* SEO & Meta Fields */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Page Title</label>
              <input 
                type="text" 
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '15px', fontWeight: '700', color: 'var(--text)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Meta Description</label>
              <textarea 
                rows={3}
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: 'var(--muted)', outline: 'none', resize: 'vertical', lineHeight: '1.5' }}
              />
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
            {/* Toolbar */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', background: '#f8fafc', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button className="editor-btn"><Bold size={16} /></button>
                <button className="editor-btn"><Italic size={16} /></button>
                <button className="editor-btn"><Underline size={16} /></button>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'var(--line)' }} />
              <div style={{ display: 'flex', gap: '4px' }}>
                <button className="editor-btn"><AlignLeft size={16} /></button>
                <button className="editor-btn"><AlignCenter size={16} /></button>
                <button className="editor-btn"><AlignRight size={16} /></button>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'var(--line)' }} />
              <div style={{ display: 'flex', gap: '4px' }}>
                <button className="editor-btn" style={{ fontSize: '13px', fontWeight: '800', width: '28px', height: '28px' }}>H1</button>
                <button className="editor-btn" style={{ fontSize: '13px', fontWeight: '800', width: '28px', height: '28px' }}>H2</button>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'var(--line)' }} />
              <div style={{ display: 'flex', gap: '4px' }}>
                <button className="editor-btn"><Link size={16} /></button>
                <button className="editor-btn"><ImageIcon size={16} /></button>
                <button className="editor-btn"><Code size={16} /></button>
              </div>
            </div>

            {/* Editor Content Area */}
            <div style={{ padding: '32px', minHeight: '500px', fontSize: '15px', color: 'var(--text)', lineHeight: '1.7' }} contentEditable suppressContentEditableWarning>
              <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 16px 0', color: 'var(--text)' }}>Our Mission</h1>
              <p style={{ margin: '0 0 24px 0', color: 'var(--muted)' }}>
                Deliver trusted home services through technology and operational excellence. Our platform is engineered for high-stakes environments where clarity, speed of service ingestion, and professional authority are paramount.
              </p>

              <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', alignItems: 'flex-start', background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <div style={{ width: '200px', height: '120px', background: '#1e293b', borderRadius: '6px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 75%, #0f172a 75%, #0f172a), linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 75%, #0f172a 75%, #0f172a)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px', opacity: 0.5 }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', margin: '0 0 8px 0', color: 'var(--text)' }}>Vision Statement</h3>
                  <p style={{ fontSize: '13px', margin: 0, color: 'var(--muted)' }}>
                    Become India's most trusted service marketplace. Our approach rejects decorative trends in favor of a "UI as Infrastructure" aesthetic. Every line, border, and service serves a functional purpose.
                  </p>
                </div>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 16px 0', color: 'var(--text)' }}>Core Values</h2>
              <ul style={{ margin: '0 0 24px 0', paddingLeft: '24px', color: 'var(--muted)' }}>
                <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--text)' }}>Customer First:</strong> Absolute focus on delivering value to the end consumer.</li>
                <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--text)' }}>Transparency:</strong> Clear pricing, visible tracking, and honest communication.</li>
                <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--text)' }}>Quality Service:</strong> High-density utility for enterprise-grade performance.</li>
                <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--text)' }}>Innovation:</strong> Continuous improvement of tools and workflows.</li>
                <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--text)' }}>Accountability:</strong> Owning every outcome, end-to-end.</li>
              </ul>
            </div>
          </div>
          
          {/* Image Upload Area */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0' }}>Media Assets</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Company Banner</label>
                <div style={{ border: '2px dashed var(--line)', borderRadius: '8px', padding: '32px', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}>
                  <UploadCloud size={24} style={{ color: 'var(--muted)', marginBottom: '8px' }} />
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4f46e5' }}>Click to upload banner</span>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>1920 x 1080px recommended</span>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>About Section Image</label>
                <div style={{ border: '2px dashed var(--line)', borderRadius: '8px', padding: '32px', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}>
                  <UploadCloud size={24} style={{ color: 'var(--muted)', marginBottom: '8px' }} />
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4f46e5' }}>Click to upload image</span>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>800 x 600px recommended</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '3' }}>
          
          {/* Publishing Panel */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Publishing</h3>
              <span style={{ fontSize: '10px', fontWeight: '800', background: '#d1fae5', color: '#059669', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>Published</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Eye size={14} /> Visibility:
                </span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>Public</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={14} /> Last Published:
                </span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>Oct 24, 2026</span>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>14:32 PM</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{ width: '100%', padding: '12px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <UploadCloud size={16} /> Update Live Page
              </button>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ flex: 1, padding: '10px', background: '#fff', color: 'var(--text)', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                  Preview
                </button>
                <button style={{ flex: 1, padding: '10px', background: '#fff', color: 'var(--text)', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                  Save Draft
                </button>
              </div>
            </div>
          </div>

          {/* Analytics Overview */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0' }}>Analytics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '4px' }}>Total Views</span>
                <strong style={{ fontSize: '18px', color: 'var(--text)', fontWeight: '900' }}>42.5K</strong>
              </div>
              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '4px' }}>SEO Score</span>
                <strong style={{ fontSize: '18px', color: '#10b981', fontWeight: '900' }}>94/100</strong>
              </div>
            </div>
          </div>

          {/* Revision History */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Revision History</h3>
              <button style={{ background: 'transparent', border: 'none', color: '#4f46e5', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>View All</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Item 1 */}
              <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Current Version</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>2 mins ago</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 6px 0', lineHeight: '1.4' }}>Updated "Core Values" section...</p>
                <span style={{ fontSize: '11px', color: 'var(--text)', fontWeight: '600' }}>By Marcus Chen</span>
              </div>
              
              {/* Item 2 */}
              <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Version 1.4.2</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Yesterday</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 6px 0', lineHeight: '1.4' }}>Minor typo fixes in meta tags...</p>
                <span style={{ fontSize: '11px', color: 'var(--text)', fontWeight: '600' }}>By Sarah Jenkins</span>
              </div>
              
              {/* Item 3 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>Version 1.4.1</strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Oct 20</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 6px 0', lineHeight: '1.4' }}>Initial layout migration...</p>
                <span style={{ fontSize: '11px', color: 'var(--text)', fontWeight: '600' }}>By System Agent</span>
              </div>
            </div>
          </div>

          {/* Pro-Tip Box */}
          <div style={{ background: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)', borderRadius: '12px', padding: '24px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '20px solid rgba(255,255,255,0.05)' }} />
            <h4 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={16} /> Editor Pro-Tip
            </h4>
            <p style={{ fontSize: '12px', margin: 0, lineHeight: '1.6', opacity: 0.9 }}>
              Use <strong style={{ color: '#fff' }}>CMD+S</strong> to quickly save your drafts without leaving the editing experience. Your changes are also auto-saved every 60 seconds.
            </p>
          </div>

        </div>
        
        <style>{`
          .editor-btn {
            background: transparent;
            border: none;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            color: var(--text);
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .editor-btn:hover {
            background: #e2e8f0;
          }
        `}</style>
      </div>
    </AdminShell>
  );
}
