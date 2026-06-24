import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  History, GripVertical, ChevronDown, Filter, MoreVertical, 
  Eye, FileEdit, RefreshCcw
} from 'lucide-react';

export default function Faqs() {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'How do I reset my account password?', status: 'published' },
    { id: 2, question: 'What payment methods do you accept?', status: 'published' },
    { id: 3, question: 'How can I upgrade to the Enterprise plan?', status: 'draft' },
    { id: 4, question: 'Where can I find the API documentation?', status: 'published' }
  ]);

  const [autoCatEnabled, setAutoCatEnabled] = useState(true);

  return (
    <AdminShell 
      activeTab="CMS Management" 
      searchPlaceholder="Search resources..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1000px' }}>
        
        {/* Page Heading & Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            {/* Adding the Enterprise Core badge as per previous style standardization, though optional in this exact mock */}
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#e0e7ff', color: '#4f46e5', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
              ENTERPRISE CORE
            </span>
            <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1e1b4b', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
              Manage Help Content
            </h1>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
              Organize and refine frequently asked questions to improve user self-service efficiency.
            </p>
          </div>
          
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
            <History size={16} style={{ color: 'var(--muted)' }} /> View Audit Log
          </button>
        </div>

        {/* Metrics Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          
          {/* Total FAQs */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '24px' }}>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
              TOTAL FAQS
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontSize: '36px', fontWeight: '900', color: 'var(--text)', lineHeight: '1' }}>24</span>
              <span style={{ fontSize: '12px', fontWeight: '800', background: '#fee2e2', color: '#ef4444', padding: '4px 8px', borderRadius: '4px' }}>
                +2 new
              </span>
            </div>
          </div>

          {/* Completion Rate */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '24px' }}>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
              COMPLETION RATE
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ fontSize: '36px', fontWeight: '900', color: 'var(--text)', lineHeight: '1' }}>98%</span>
            </div>
          </div>

          {/* Auto-Categorization */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridColumn: 'span 2 / span 2' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                AUTO-CATEGORIZATION
              </span>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                System is using ML to group related questions.
              </p>
            </div>
            
            {/* Custom Toggle Switch */}
            <div 
              onClick={() => setAutoCatEnabled(!autoCatEnabled)}
              style={{ width: '44px', height: '24px', background: autoCatEnabled ? '#0f172a' : '#cbd5e1', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: autoCatEnabled ? '22px' : '2px', transition: 'left 0.2s' }} />
            </div>
          </div>

        </div>

        {/* Main List Container */}
        <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
          
          {/* List Header */}
          <div style={{ background: '#f8fafc', padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              DRAG TO REORDER Q/A PAIRS
            </span>
            <div style={{ display: 'flex', gap: '16px', color: 'var(--muted)' }}>
              <Filter size={16} style={{ cursor: 'pointer' }} />
              <MoreVertical size={16} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* List Items */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, index) => (
              <div key={faq.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: index === faqs.length - 1 ? 'none' : '1px solid var(--line)', background: '#fff' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <GripVertical size={16} style={{ color: '#cbd5e1', cursor: 'grab' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: faq.status === 'published' ? '#0f172a' : '#cbd5e1', flexShrink: 0 }} />
                  <strong style={{ fontSize: '14px', color: 'var(--text)', fontWeight: '700' }}>{faq.question}</strong>
                </div>
                
                <button style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', display: 'flex' }}>
                  <ChevronDown size={18} />
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>
              <Eye size={14} /> Published: 18
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>
              <FileEdit size={14} /> Draft: 6
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>
              <RefreshCcw size={14} /> Revisions pending: 2
            </span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Autosaved at 14:32:05</span>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontSize: '12px', fontWeight: '800', cursor: 'pointer', padding: 0 }}>
              Publish Changes Now
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
