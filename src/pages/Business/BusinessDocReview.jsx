import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import {
  ArrowLeft,
  Search,
  Plus,
  Minus,
  Download,
  Building,
  Check,
  CheckCircle,
  X,
  FileCheck,
  Cpu,
  Clock,
  ClipboardCopy,
  AlertTriangle,
  FolderLock
} from 'lucide-react';

export default function BusinessDocReview() {
  const { navigate } = useApp();

  const entityName = 'Lumina Tech Solutions PVT LTD';
  const gstin = '27AAAAA0000A1Z5';

  const handleApprove = () => {
    alert('Document validation successful. GST Form approved.');
    navigate(ROUTES.businessReview);
  };

  const handleReject = () => {
    const reason = prompt('Please enter the reason for rejection:');
    if (reason) {
      alert(`Document rejected: ${reason}`);
      navigate(ROUTES.businessReview);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gstin);
    alert('GSTIN copied to clipboard!');
  };

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab="Compliance" />}
      searchPlaceholder="Search registry..."
    >
      <div className="business-doc-review-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Task Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: '800', color: '#1d4ed8', background: '#dbeafe', padding: '4px 8px', borderRadius: '4px', alignSelf: 'flex-start' }}>
          <FileCheck size={14} />
          <span>TASK: GST VALIDATION</span>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 className="page-title" style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>Review Document: Form GST REG-06</h1>
            <p className="page-subtitle" style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '13px' }}>Awaiting final administrative decision for Lumina Tech Solutions PVT LTD.</p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', height: '34px', width: '34px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} type="button" title="Zoom In"><Plus size={14} /></button>
            <button style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', height: '34px', width: '34px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} type="button" title="Zoom Out"><Minus size={14} /></button>
            <button style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', height: '34px', width: '34px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} type="button" title="Download"><Download size={14} /></button>
          </div>
        </div>

        {/* 2-Column main content layout */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Column 1: Document canvas visual (Left) */}
          <div className="panel" style={{ flex: 1.4, background: '#1e293b', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '420px', overflow: 'hidden' }}>
            
            {/* Scanned Document simulator mock */}
            <div style={{ width: '100%', height: '100%', maxWidth: '480px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '24px', position: 'relative', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)' }}>
              
              {/* Box highlighter for GSTIN detected */}
              <div style={{ position: 'absolute', top: '70px', left: '140px', right: '40px', height: '24px', border: '1px solid #4f46e5', background: 'rgba(79, 70, 229, 0.06)', borderRadius: '3px', zIndex: 10, display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                <span style={{ background: '#4f46e5', color: '#fff', fontSize: '7px', fontWeight: '800', padding: '1px 3px', borderRadius: '2px' }}>GSTIN DETECTED</span>
              </div>

              {/* Box highlighter for Name detected */}
              <div style={{ position: 'absolute', top: '150px', left: '100px', right: '100px', height: '24px', border: '1px solid #3b82f6', background: 'rgba(59, 130, 246, 0.06)', borderRadius: '3px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#3b82f6', fontSize: '7px', fontWeight: '800', padding: '1px 3px', borderRadius: '2px' }}>LEGAL NAME MATCH</span>
              </div>

              {/* Header document scan */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '16px' }}>
                <strong style={{ fontSize: '11px', letterSpacing: '0.5px' }}>GOVERNMENT OF INDIA</strong>
                <span style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '2px' }}>Form GST REG-06 - Registration Certificate</span>
              </div>

              {/* Body lines scanned */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '9px', color: 'var(--muted)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Registration Number:</span>
                  <strong style={{ color: '#0f172a' }}>{gstin}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <span>Legal Name:</span>
                  <strong style={{ color: '#0f172a' }}>{entityName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Trade Name:</span>
                  <strong style={{ color: '#0f172a' }}>Lumina Tech</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Constitution of Business:</span>
                  <strong style={{ color: '#0f172a' }}>Private Limited Company</strong>
                </div>

                <div style={{ borderTop: '1px dashed #e2e8f0', marginTop: '16px', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '1px', width: '90%' }} />
                  <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '1px', width: '95%' }} />
                  <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '1px', width: '80%' }} />
                </div>
              </div>

            </div>

          </div>

          {/* Column 2: Metadata details, AI Verification, Activity Feed (Right) */}
          <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Legal details card */}
            <div className="panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ height: '40px', width: '40px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', flexShrink: 0 }}>
                <Building size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{entityName}</strong>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '12px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase' }}>GST Number</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                      <strong style={{ color: 'var(--text)' }}>{gstin}</strong>
                      <button onClick={copyToClipboard} style={{ border: 'none', background: 'transparent', color: '#4f46e5', cursor: 'pointer', display: 'inline-flex', padding: 0 }} title="Copy to clipboard" type="button"><ClipboardCopy size={13} /></button>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase' }}>Reg. Date</span>
                      <strong style={{ color: 'var(--text)', marginTop: '2px', display: 'block' }}>Oct 14, 2021</strong>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase' }}>Taxpayer Type</span>
                      <strong style={{ color: 'var(--text)', marginTop: '2px', display: 'block' }}>Regular</strong>
                    </div>
                  </div>

                  <div>
                    <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase' }}>Constitution</span>
                    <strong style={{ color: 'var(--text)', marginTop: '2px', display: 'block' }}>Private Limited Company</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Verification result */}
            <div className="panel" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Cpu size={18} style={{ color: '#4f46e5' }} />
                  <strong style={{ fontSize: '13px', color: 'var(--text)' }}>AI Verification Result</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#4f46e5' }}>
                  Score: <strong style={{ fontSize: '14px' }}>98%</strong> Confidence
                </span>
              </div>

              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', fontWeight: '700' }}>
                  <CheckCircle size={14} style={{ color: '#10b981' }} />
                  <span>GSTIN Match</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', fontWeight: '700' }}>
                  <CheckCircle size={14} style={{ color: '#10b981' }} />
                  <span>Logo Integrity</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', fontWeight: '700' }}>
                  <CheckCircle size={14} style={{ color: '#10b981' }} />
                  <span>Date Alignment</span>
                </div>
              </div>

              <p style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.4', margin: 0 }}>
                System has successfully cross-referenced the GSTIN with the central government portal. Signature and Seal are consistent with regional norms.
              </p>
            </div>

            {/* Activity Feed */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>Activity Feed</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '11px', fontWeight: '700' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Clock size={14} style={{ color: 'var(--muted)', marginTop: '2px' }} />
                  <div>
                    <span style={{ color: 'var(--muted)' }}>10:45 AM</span>
                    <strong style={{ display: 'block', color: 'var(--text)', marginTop: '2px' }}>OCR processing started</strong>

                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <CheckCircle size={14} style={{ color: '#10b981', marginTop: '2px' }} />
                  <div>
                    <span style={{ color: 'var(--muted)' }}>10:46 AM</span>
                    <strong style={{ display: 'block', color: 'var(--text)', marginTop: '2px' }}>Central Registry validation successful</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Verification Actions bar */}
        <div className="panel" style={{ padding: '16px 20px', display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', background: '#f8fafc' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
            <AlertTriangle size={14} />
            <span>Awaiting final administrative decision for Lumina Tech Solutions.</span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{ border: '1px solid #fee2e2', background: '#fff', color: '#ef4444', fontSize: '12px', fontWeight: '800', height: '38px', padding: '0 16px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={handleReject}
              type="button"
            >
              Reject with Reason
            </button>
            <button
              style={{ border: 'none', background: '#4f46e5', color: '#fff', fontSize: '12px', fontWeight: '800', height: '38px', padding: '0 16px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              onClick={handleApprove}
              type="button"
            >
              <Check size={14} /> Verify & Approve
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
