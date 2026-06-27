import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  ShieldAlert,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  RotateCw,
  FolderOpen
} from 'lucide-react';

export default function BusinessVerify() {
  const { navigate } = useApp();

  const handleApprove = () => {
    alert('Identity Verification Approved!');
    navigate(ROUTES.businessReview);
  };

  const handleReject = () => {
    alert('Identity Verification Rejected.');
    navigate(ROUTES.businessReview);
  };

  const handleEscalate = () => {
    alert('Escalated to Manual Review Queue.');
    navigate(ROUTES.businessReview);
  };

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab="Compliance" />}
      searchPlaceholder="Search entries..."
    >
      <div className="business-verify-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Breadcrumb row (Image 2) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.businessApproval)}>Compliance</span>
            <ChevronRight size={14} />
            <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.businessApproval)}>Verification Queue</span>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a' }}>#INV-88291</span>
          </div>

          <button
            style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '700', height: '34px', padding: '0 12px', borderRadius: '6px' }}
            onClick={() => alert('Opening audit logs...')}
            type="button"
          >
            <RotateCw size={12} /> View Audit Log
          </button>
        </div>

        {/* Title */}
        <h1 className="page-title" style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>Ownership Verification</h1>

        {/* Two-Column Grid layout */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Column 1: Owner Profile Card & Statuses (Left) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="panel" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Owner Profile</h2>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#b45309', background: '#fef3c7', padding: '3px 8px', borderRadius: '4px' }}>
                  Pending Review
                </span>
              </div>

              {/* Photo & Details row */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: '100px', height: '120px', borderRadius: '6px', overflow: 'hidden', background: '#f1f5f9', border: '1px solid var(--line)', position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=180&q=80"
                    alt="ID scan portrait"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '8px', fontWeight: '800', textAlign: 'center', padding: '2px 0' }}>ID PHOTO</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, minWidth: '160px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)' }}>
                  <div>
                    <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '9px', color: 'var(--muted)', fontWeight: '600' }}>Full Legal Name</span>
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)', marginTop: '2px' }}>Aditya Vikram Sharma</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '9px', color: 'var(--muted)', fontWeight: '600' }}>Date of Birth</span>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginTop: '2px' }}>14 May 1982</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '9px', color: 'var(--muted)', fontWeight: '600' }}>Citizenship</span>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)', marginTop: '2px' }}>🇮🇳 India</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification status checks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>Identity Verification Status</h3>
              
              {/* Aadhaar check */}
              <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '6px', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: '#059669' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: '#065f46' }}>Aadhaar: Verified</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: '#047857', fontWeight: '500', marginTop: '2px' }}>Digital signature matches UIDAI records</span>
                  </div>
                </div>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#047857' }}>SUCCESS</span>
              </div>

              {/* PAN check */}
              <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '6px', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: '#059669' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: '#065f46' }}>PAN: Verified</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: '#047857', fontWeight: '500', marginTop: '2px' }}>Valid Individual Business PAN confirmed</span>
                  </div>
                </div>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#047857' }}>SUCCESS</span>
              </div>

              {/* Liveness test */}
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <AlertTriangle size={18} style={{ color: '#d97706' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: '#92400e' }}>Liveness Test</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: '#b45309', fontWeight: '500', marginTop: '2px' }}>Requires manual confirmation of biometrics</span>
                  </div>
                </div>
                <span style={{ fontSize: '9px', fontWeight: '800', color: '#b45309' }}>96% MATCH</span>
              </div>

            </div>

          </div>

          {/* Column 2: Face Match Result & bottom buttons (Right) */}
          <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Face Match Result</h2>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
                  Confidence Score: <strong style={{ fontSize: '18px', color: '#4f46e5' }}>96%</strong>
                </span>
              </div>

              {/* Double photos container */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                
                {/* Passport photo */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '100%', height: '160px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=240&q=80"
                      alt="Passport scan portrait"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Document Photo</span>
                </div>

                {/* Double arrows connector badge */}
                <div style={{ height: '32px', width: '32px', borderRadius: '50%', background: '#4f46e5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 11 21 7 17 3" />
                    <polyline points="7 21 3 17 7 13" />
                    <line x1="21" y1="7" x2="9" y2="7" />
                    <line x1="3" y1="17" x2="15" y2="17" />
                  </svg>
                </div>

                {/* Live Capture photo */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '100%', height: '160px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--line)', position: 'relative' }}>
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=240&q=80"
                      alt="Live selfie scan"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{ position: 'absolute', top: '8px', right: '8px', background: '#10b981', color: '#fff', fontSize: '7px', fontWeight: '900', padding: '2px 6px', borderRadius: '4px' }}>CAPTURED LIVE: 2M AGO</span>
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Live Selfie Capture</span>
                </div>

              </div>

              {/* Sub metrics grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px', textAlign: 'center' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Liveness</span>
                  <strong style={{ display: 'block', fontSize: '11px', color: '#10b981', marginTop: '4px' }}>✓ PASSED</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Biometric Points</span>
                  <strong style={{ display: 'block', fontSize: '11px', color: 'var(--text)', marginTop: '4px' }}>128 Matches</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Spoofing</span>
                  <strong style={{ display: 'block', fontSize: '11px', color: 'var(--text)', marginTop: '4px' }}>No risk detected</strong>
                </div>
              </div>

            </div>

            {/* Bottom Actions Card (Image 2) */}
            <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '10px' }}>
                <button
                  style={{ border: 'none', background: '#0f172a', color: '#fff', fontSize: '12px', fontWeight: '800', height: '40px', borderRadius: '6px', cursor: 'pointer' }}
                  onClick={handleApprove}
                  type="button"
                >
                  Approve Identity
                </button>
                <button
                  style={{ border: '1px solid #fee2e2', background: '#fff', color: '#ef4444', fontSize: '12px', fontWeight: '800', height: '40px', borderRadius: '6px', cursor: 'pointer' }}
                  onClick={handleReject}
                  type="button"
                >
                  Reject
                </button>
              </div>
              <button
                style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '800', height: '40px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={handleEscalate}
                type="button"
              >
                <FolderOpen size={14} /> Escalate to Manual Review
              </button>
            </div>

          </div>

        </div>

        {/* Footer info (Image 2) */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>⦿ Session: K-092-221</span>
            <span>⏱ Processing time: 1.2s</span>
          </div>
          <span>Powered by Nexus Biometrics V4.1</span>
        </div>

      </div>
    </AdminShell>
  );
}
