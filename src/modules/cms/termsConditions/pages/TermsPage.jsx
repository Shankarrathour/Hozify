import React, { useState } from 'react';
import AdminShell from '../../../../components/layouts/AdminShell';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  SuccessModal,
  WarningModal,
  DiscardChangesModal
} from '../../../../components/common/popups/Modals';
import { triggerDownload, downloadDummyPDF } from '../../../../utils/downloadHelper';
import { 
  Clock, Download, RefreshCw, FileText, CheckCircle2, 
  Plus, Edit, Trash2, Bold, Italic, AlignLeft, List, CheckSquare 
} from 'lucide-react';

const INITIAL_VERSIONS = {
  Users: [
    { version: 'v4.2.1', date: 'Today, 10:45 AM', author: 'Alex Sterling', changeLog: 'Updated clause 4.2 regarding API rate limits.', content: 'USER TERMS AND CONDITIONS OF SERVICE\n\n1. ACCEPTANCE OF TERMS\nWelcome to Hozify. By registering or using our platform, you accept all terms outlined here. If you disagree, please cancel your account immediately.\n\n2. INTELLECTUAL PROPERTY\nAll software, logos, databases, and structural assets are proprietary properties of Hozify Ltd.\n\n3. BOOKING COMPLIANCE\nUsers must ensure accuracy in addressing and details of booked works. Non-compliance results in platform lock.' },
    { version: 'v4.2.0', date: 'Oct 24, 2025, 09:15 AM', author: 'Sarah Jenkins', changeLog: 'Consolidated geo-compliance parameters.', content: 'USER TERMS AND CONDITIONS OF SERVICE\n\n1. ACCEPTANCE OF TERMS\nWelcome to Hozify. By registering or using our platform, you accept all terms outlined here.\n\n2. SYSTEM COVERAGE\nOur operations cover selected Tier 1 and Tier 2 cities in India.' }
  ],
  ISP: [
    { version: 'v3.1.0', date: 'May 12, 2026, 02:30 PM', author: 'Deepak Rao', changeLog: 'Updated payout schedules and security checks.', content: 'INDEPENDENT SERVICE PROVIDER (ISP) TERMS\n\n1. SERVICE OBLIGATIONS\nISPs agree to deliver home services with high standards of professionalism and safety.\n\n2. COMMISSION DEDUCTIONS\nA standard commission fee of 15% is levied on all closed orders.' }
  ],
  BSP: [
    { version: 'v2.5.0', date: 'Jan 05, 2026, 11:00 AM', author: 'Alex Sterling', changeLog: 'Modified GST registration protocols.', content: 'BUSINESS SERVICE PROVIDER (BSP) AGREEMENT\n\n1. BUSINESS VERIFICATION\nBSPs must supply valid business registrations, GST certificates, and PAN details.\n\n2. BRANCH LIMITATION\nBusinesses may register up to 10 active branches under a single corporate entity.' }
  ],
  BS: [
    { version: 'v1.9.0', date: 'Apr 18, 2026, 04:20 PM', author: 'Nisha Mehta', changeLog: 'Revised inventory catalog ingestion rules.', content: 'BUSINESS SELLER (BS) TERMS AND CONDITIONS\n\n1. MERCHANT OBLIGATIONS\nSellers must keep catalog stocks updated in real-time. Delayed orders attract penalties.' }
  ],
  Employees: [
    { version: 'v1.2.0', date: 'Dec 02, 2025, 08:00 AM', author: 'HR Compliance', changeLog: 'Added internal cybersecurity policy code.', content: 'EMPLOYEE ENGAGEMENT RULES AND ETHICAL PROTOCOLS\n\n1. DATA HANDLING SECURE PROTOCOL\nEmployees shall not copy client addresses or KYC documents to non-authorized storage channels.' }
  ]
};

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState('Users');
  const [versions, setVersions] = useState(INITIAL_VERSIONS);
  const [activeVersionIndex, setActiveVersionIndex] = useState(0);
  const [editorText, setEditorText] = useState(INITIAL_VERSIONS['Users'][0].content);

  // Modal controls
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveVersionIndex(0);
    setEditorText(versions[tab][0]?.content || '');
  };

  // Select version to view in editor
  const handleSelectVersion = (index) => {
    setActiveVersionIndex(index);
    setEditorText(versions[activeTab][index].content);
  };

  // Add new version (Publish draft)
  const handleAddVersion = (newVal) => {
    const nextVer = {
      version: newVal.version,
      date: 'Just now',
      author: 'Alex Sterling',
      changeLog: newVal.changeLog,
      content: editorText
    };

    setVersions(prev => ({
      ...prev,
      [activeTab]: [nextVer, ...prev[activeTab]]
    }));
    setActiveVersionIndex(0);
    setSuccessMessage(`New version ${newVal.version} published successfully!`);
    setIsSuccessOpen(true);
  };

  // Rollback to historical version
  const handleRollback = (ver) => {
    setWarningAction(() => () => {
      // Move this version to the top as a new release
      const rollbackVer = {
        version: `${ver.version}-RB`,
        date: 'Just now',
        author: 'Alex Sterling',
        changeLog: `Rollback to version ${ver.version}`,
        content: ver.content
      };
      setVersions(prev => ({
        ...prev,
        [activeTab]: [rollbackVer, ...prev[activeTab]]
      }));
      setEditorText(ver.content);
      setActiveVersionIndex(0);
      setSuccessMessage(`Rolled back successfully to version ${ver.version}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  // Delete version log
  const handleDeleteVersion = (ver) => {
    setSelectedVersion(ver);
    setIsDeleteOpen(true);
  };

  const confirmDeleteVersion = () => {
    setVersions(prev => {
      const filtered = prev[activeTab].filter(v => v.version !== selectedVersion.version);
      // Ensure at least one version exists
      if (filtered.length === 0) {
        filtered.push({ version: 'v1.0.0', date: 'Initial', author: 'System', changeLog: 'Reset', content: 'Base terms content.' });
      }
      return {
        ...prev,
        [activeTab]: filtered
      };
    });
    setActiveVersionIndex(0);
    setEditorText(versions[activeTab][0]?.content || '');
    setSuccessMessage('Version timeline node removed!');
    setIsSuccessOpen(true);
  };

  // Downloads
  const handleDownload = () => {
    downloadDummyPDF(`${activeTab} Terms & Conditions`, editorText);
    setSuccessMessage(`${activeTab} Terms & Conditions exported successfully!`);
    setIsSuccessOpen(true);
  };

  const applyFormat = (type) => {
    if (type === 'bold') {
      setEditorText(prev => `**${prev}**`);
      setSuccessMessage('Applied Bold markdown formatting to terms editor content!');
      setIsSuccessOpen(true);
    } else if (type === 'italic') {
      setEditorText(prev => `*${prev}*`);
      setSuccessMessage('Applied Italic markdown formatting to terms editor content!');
      setIsSuccessOpen(true);
    } else if (type === 'left') {
      setSuccessMessage('Aligned content text left!');
      setIsSuccessOpen(true);
    } else if (type === 'list') {
      setEditorText(prev => prev.split('\n').map(line => line.startsWith('- ') ? line : `- ${line}`).join('\n'));
      setSuccessMessage('Converted editor content lines into a bulleted list!');
      setIsSuccessOpen(true);
    } else if (type === 'check') {
      setEditorText(prev => prev.split('\n').map(line => line.startsWith('[ ] ') ? line : `[ ] ${line}`).join('\n'));
      setSuccessMessage('Converted editor content lines into a checklist!');
      setIsSuccessOpen(true);
    }
  };

  const activeVersions = versions[activeTab] || [];
  const currentVersionObj = activeVersions[activeVersionIndex] || {};

  return (
    <AdminShell activeTab="CMS" headerTitle="Terms & Conditions Editor">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; <span style={{ color: '#2A2454' }}>Terms & Conditions</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Terms & Conditions - {activeTab}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure and publish specific agreements for Customers, Providers, Sellers, and Workers.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleDownload} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export PDF
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Publish Draft
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Version</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#4f46e5', margin: '2px 0 0 0' }}>{activeVersions[0]?.version}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Edit size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Last Updated By</span>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '4px 0 0 0' }}>{activeVersions[0]?.author}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Releases</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{activeVersions.length} Logs</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</span>
              <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#059669', margin: '4px 0 0 0' }}>APPROVED & LIVE</h2>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
          {['Users', 'ISP', 'BSP', 'BS', 'Employees'].map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              style={{
                padding: '8px 16px',
                border: activeTab === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                borderRadius: '8px',
                background: activeTab === tab ? '#e0e7ff' : '#fff',
                color: '#2A2454',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'Users' ? 'User Portal' : tab === 'ISP' ? 'Independent Partner' : tab === 'BSP' ? 'Business Partner' : tab === 'BS' ? 'Business Seller' : 'Internal Employee'}
            </button>
          ))}
        </div>

        {/* Editor & Version Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '24px' }}>
          
          {/* LEFT: Text Editor Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Header info */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Selected Node</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#1e1b4b', margin: 0 }}>{currentVersionObj.version}</h3>
                  <span style={{ fontSize: '9px', fontWeight: '800', background: activeVersionIndex === 0 ? '#d1fae5' : '#f1f5f9', color: activeVersionIndex === 0 ? '#065f46' : '#475569', padding: '2px 6px', borderRadius: '4px' }}>
                    {activeVersionIndex === 0 ? 'LIVE RELEASE' : 'ARCHIVAL'}
                  </span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Modified Date</span>
                <div style={{ fontWeight: '700', color: 'var(--text)', fontSize: '13px', marginTop: '4px' }}>{currentVersionObj.date}</div>
              </div>
            </div>

            {/* Rich Editor Panel */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--line)', background: '#f8fafc', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button onClick={() => applyFormat('bold')} className="editor-btn" style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer' }} title="Bold"><Bold size={14} /></button>
                <button onClick={() => applyFormat('italic')} className="editor-btn" style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer' }} title="Italic"><Italic size={14} /></button>
                <div style={{ width: '1px', height: '16px', background: '#cbd5e1' }} />
                <button onClick={() => applyFormat('left')} className="editor-btn" style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer' }} title="Align Left"><AlignLeft size={14} /></button>
                <button onClick={() => applyFormat('list')} className="editor-btn" style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer' }} title="Bulleted List"><List size={14} /></button>
                <button onClick={() => applyFormat('check')} className="editor-btn" style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer' }} title="Checklist"><CheckSquare size={14} /></button>
                <div style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>Character Count: {editorText.length}</div>
              </div>
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                style={{ width: '100%', minHeight: '400px', padding: '24px', border: 'none', outline: 'none', fontSize: '13px', lineHeight: '1.7', color: 'var(--text)', resize: 'vertical', fontFamily: 'monospace' }}
              />
            </div>

          </div>

          {/* RIGHT: Version History Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>VERSION HISTORY</h3>
                <Clock size={14} style={{ color: 'var(--muted)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', marginLeft: '6px' }}>
                <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '3px', width: '2px', background: 'var(--line)' }} />

                {activeVersions.map((ver, idx) => (
                  <div key={ver.version} style={{ position: 'relative', paddingLeft: '20px' }}>
                    <div 
                      onClick={() => handleSelectVersion(idx)}
                      style={{ 
                        position: 'absolute', 
                        left: '0', 
                        top: '5px', 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '4px', 
                        background: activeVersionIndex === idx ? '#4f46e5' : '#cbd5e1', 
                        cursor: 'pointer' 
                      }} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <strong 
                        onClick={() => handleSelectVersion(idx)}
                        style={{ fontSize: '12px', color: activeVersionIndex === idx ? '#4f46e5' : 'var(--text)', cursor: 'pointer' }}
                      >
                        {ver.version} {idx === 0 && '(Live)'}
                      </strong>
                      <span style={{ fontSize: '10px', color: 'var(--muted)' }}>{ver.date}</span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0 0 6px 0', lineHeight: '1.4' }}>{ver.changeLog}</p>
                    <span style={{ fontSize: '10px', color: 'var(--text)', fontWeight: '600' }}>Authored by: {ver.author}</span>
                    
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                      {idx !== 0 && (
                        <button 
                          onClick={() => handleRollback(ver)}
                          style={{ border: 'none', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700', color: '#4f46e5', cursor: 'pointer' }}
                        >
                          Rollback
                        </button>
                      )}
                      <button 
                        onClick={() => handleDeleteVersion(ver)}
                        style={{ border: 'none', background: '#fef2f2', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700', color: '#ef4444', cursor: 'pointer' }}
                      >
                        Delete Log
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Publish New Terms Version" 
        fields={[
          { name: 'version', label: 'New Version Code', type: 'text', placeholder: 'e.g. v4.2.2', required: true, maxLength: 8 },
          { name: 'changeLog', label: 'Changelog Notes', type: 'textarea', placeholder: 'Provide details about changes made...', required: true, maxLength: 100 }
        ]} 
        onSave={handleAddVersion} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={confirmDeleteVersion} 
        itemName={`version log ${selectedVersion?.version}`} 
      />

      <WarningModal 
        isOpen={isWarningOpen} 
        onClose={() => setIsWarningOpen(false)} 
        title="Rollback Terms Confirmation" 
        message="Rolling back will create a new release version based on selected historical terms configuration. Associated client platforms will load this version immediately. Proceed?" 
        onConfirm={warningAction} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMessage} 
      />
    </AdminShell>
  );
}
