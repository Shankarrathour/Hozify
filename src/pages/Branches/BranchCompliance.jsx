import React, { useState } from 'react';
import { Download, SlidersHorizontal, CheckSquare, ShieldCheck, Landmark, ShieldAlert, AlertCircle, Eye, Share2, MoreVertical, Globe } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

const initialAlerts = [
  { id: 1, title: 'Northwest Hub - Fire Marshall Certification', tag: 'EXPIRED DOCUMENTS', tagColor: '#ef4444', tagBg: '#fee2e2', text: 'Document #FM-2902 expired on Oct 12, 2023. Branch operational status pending suspension.', time: '3 hours ago' },
  { id: 2, title: 'Downtown Core - Liability Insurance (General)', tag: 'EXPIRING DOCUMENTS', tagColor: '#b45309', tagBg: '#fef3c7', text: "Renewal required within 14 days to maintain 'Verified' status tier.", time: '8 hours ago' },
  { id: 3, title: 'South Industrial - Waste Management License', tag: 'PENDING RENEWALS', tagColor: '#0369a1', tagBg: '#e0f2fe', text: "Application submitted. Currently in 'Bureau Review' stage. Follow-up recommended.", time: 'Yesterday' }
];

const complianceLedger = [
  { id: '#BR-8802', name: 'Northwest Logistics', region: 'Cascadia-B', score: 92, lastAudit: 'Oct 14, 2023' },
  { id: '#BR-9104', name: 'Eastside Storage', region: 'Coastal-A', score: 64, lastAudit: 'Sep 28, 2023' },
  { id: '#BR-4412', name: 'Sunset Plaza Hub', region: 'Urban-X', score: 98, lastAudit: 'Oct 20, 2023' }
];

export default function BranchCompliance() {
  const { navigate, setCurrentBranchId } = useApp();
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleRowAction = (id) => {
    // Map standard routes or set active branch
    const cleanId = id.replace('#', '');
    setCurrentBranchId(cleanId);
    navigate(ROUTES.branchSchedule);
  };

  return (
    <div className="branch-compliance-container">
      {/* Page Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Branch Compliance Center</h1>
          <p className="page-subtitle">Real-time regulatory status and document verification pipeline.</p>
        </div>
        <div className="partners-header-buttons">
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <span>Download Report</span>
          </button>
          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px', backgroundColor: '#0f172a', color: '#fff' }}>
            <ShieldCheck size={14} style={{ marginRight: '4px' }} />
            <span>Bulk Verify</span>
          </button>
        </div>
      </div>

      {/* Top Section KPIs Row */}
      <section className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px', gap: '20px' }}>
        
        {/* License Status */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>License Status</span>
              <strong style={{ display: 'block', fontSize: '24px', margin: '4px 0 2px', color: 'var(--text)' }}>1,248</strong>
            </div>
            <span style={{ fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', color: '#059669', background: '#ecfdf5' }}>94% Active</span>
          </div>
          <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↗ +2.4% vs last month</span>
        </div>

        {/* Insurance Status */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Insurance Status</span>
              <strong style={{ display: 'block', fontSize: '24px', margin: '4px 0 2px', color: 'var(--text)' }}>1,102</strong>
            </div>
            <span style={{ fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', color: '#b45309', background: '#fef3c7' }}>88% Covered</span>
          </div>
          <span style={{ fontSize: '11px', color: '#d97706', fontWeight: '700' }}>⚠ 142 renewal pending</span>
        </div>

        {/* Registration Status */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Registration Status</span>
              <strong style={{ display: 'block', fontSize: '24px', margin: '4px 0 2px', color: 'var(--text)' }}>1,320</strong>
            </div>
            <span style={{ fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', color: '#059669', background: '#ecfdf5' }}>100% Reg</span>
          </div>
          <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>✓ Fully Compliant</span>
        </div>

        {/* Verification Status */}
        <div className="kpi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', minHeight: '110px', background: '#fff', border: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Verification Status</span>
              <strong style={{ display: 'block', fontSize: '24px', margin: '4px 0 2px', color: 'var(--text)' }}>99.1%</strong>
            </div>
            <span style={{ fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', color: '#ef4444', background: '#fee2e2' }}>12 Suspended</span>
          </div>
          <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>⚠ 8 critical failures</span>
        </div>

      </section>

      {/* Main Two-Column View */}
      <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
        
        {/* Left column (Alerts & Ledger Table) */}
        <div style={{ flex: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Critical Compliance Alerts Panel */}
          <div className="panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldAlert size={16} style={{ color: '#ef4444' }} /> Critical Compliance Alerts
              </h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ border: 'none', background: '#0f172a', color: '#fff', fontSize: '10px', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer' }} type="button">Filter All</button>
                <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', fontSize: '10px', fontWeight: '800', cursor: 'pointer' }} type="button">Resolve All</button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {alerts.map((alert) => (
                <div key={alert.id} style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '8px', position: 'relative' }}>
                  <span style={{ color: alert.tagColor, marginTop: '2px' }}><AlertCircle size={18} /></span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontSize: '9px', fontWeight: '800', color: alert.tagColor, background: alert.tagBg, padding: '2px 6px', borderRadius: '3px' }}>
                        {alert.tag}
                      </span>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>{alert.title}</strong>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0 0 4px', lineHeight: '1.4' }}>{alert.text}</p>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>{alert.time}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <button style={{ border: 'none', background: 'transparent', color: '#4f46e5', cursor: 'pointer' }} aria-label="Review alert"><Eye size={16} /></button>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer' }} aria-label="More options"><MoreVertical size={16} /></button>
                  </div>
                </div>
              ))}
            </div>

            <a href="#alerts" onClick={(e) => e.preventDefault()} style={{ display: 'block', textAlign: 'center', fontSize: '12px', color: '#4f46e5', fontWeight: '700', textDecoration: 'none', marginTop: '16px' }}>
              View All 42 Alerts
            </a>
          </div>

          {/* Regional Compliance Ledger Table */}
          <section className="panel partner-directory-panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
                Regional Compliance Ledger
              </h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="secondary-action-btn" style={{ height: '30px', width: '30px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Filter ledger">
                  <SlidersHorizontal size={12} />
                </button>
                <button className="secondary-action-btn" style={{ height: '30px', width: '30px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Download ledger report">
                  <Download size={12} />
                </button>
              </div>
            </div>

            <div className="table-wrap">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table">
                <thead>
                  <tr>
                    <th>BRANCH ID</th>
                    <th>BRANCH NAME</th>
                    <th>REGION</th>
                    <th>COMPLIANCE SCORE</th>
                    <th>LAST AUDIT</th>
                    <th style={{ textAlign: 'right', paddingRight: '20px' }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceLedger.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <a href="#audit" onClick={(e) => { e.preventDefault(); handleRowAction(row.id); }} style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'underline' }}>
                          {row.id}
                        </a>
                      </td>
                      <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.name}</td>
                      <td style={{ color: 'var(--muted)' }}>{row.region}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '110px' }}>
                          <span style={{ fontSize: '11px', fontWeight: '800', width: '28px' }}>{row.score}%</span>
                          <div style={{ flex: 1, height: '5px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${row.score}%`, height: '100%', background: row.score > 70 ? '#10b981' : '#f59e0b' }} />
                          </div>
                        </div>
                      </td>
                      <td style={{ color: 'var(--muted)', fontSize: '12px' }}>{row.lastAudit}</td>
                      <td style={{ textAlign: 'right', paddingRight: '20px' }}>
                        <button
                          onClick={() => handleRowAction(row.id)}
                          style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer' }}
                          title="Share / Audit detail"
                        >
                          <Share2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table></div>
            </div>
          </section>

        </div>

        {/* Right column (Distribution & Timeline & Drift chart) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Geographic Distribution Card */}
          <div className="panel" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 12px' }}>
              Geographic Distribution
            </h2>
            
            {/* Visual Globe/Grid representation */}
            <div style={{ border: '1px solid var(--line)', borderRadius: '6px', height: '110px', background: '#f8fafc', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={32} style={{ color: '#cbd5e1' }} />
              <div style={{ position: 'absolute', bottom: '8px', display: 'flex', gap: '8px', fontSize: '9px', fontWeight: '800' }}>
                <span style={{ background: '#f8fafc', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--line)' }}>84 High Compliance</span>
                <span style={{ background: '#fee2e2', color: '#ef4444', padding: '2px 6px', borderRadius: '4px' }}>12 Critical</span>
              </div>
            </div>
          </div>

          {/* Audit Activity Timeline */}
          <div className="panel" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>
              Audit Activity Timeline
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '11px', fontWeight: '700' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ width: '6px', height: '6px', background: '#6366f1', borderRadius: '50%', marginTop: '5px' }} />
                <div>
                  <span style={{ color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontSize: '9px' }}>Today, 10:45 AM</span>
                  <strong style={{ display: 'block', color: 'var(--text)', marginTop: '2px' }}>System-wide License Audit</strong>
                  <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>Automated validation of 450 state-level operating licenses completed.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', marginTop: '5px' }} />
                <div>
                  <span style={{ color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontSize: '9px' }}>Yesterday</span>
                  <strong style={{ display: 'block', color: 'var(--text)', marginTop: '2px' }}>New Policy Update</strong>
                  <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>Revised insurance minimums pushed to all regional managers.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginTop: '5px' }} />
                <div>
                  <span style={{ color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontSize: '9px' }}>Oct 18, 2023</span>
                  <strong style={{ display: 'block', color: 'var(--text)', marginTop: '2px' }}>Critical Suspension</strong>
                  <span style={{ color: 'var(--muted)', fontWeight: 'normal' }}>Branch #BR-1022 (South Coast) suspended due to expired safety logs.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 7-Day Compliance Drift SVG Chart */}
          <div className="panel" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>
              7-Day Compliance Drift
            </h2>

            <div style={{ height: '90px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 10px', position: 'relative' }}>
              <div style={{ height: '60%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
              <div style={{ height: '55%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
              <div style={{ height: '65%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
              <div style={{ height: '70%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
              <div style={{ height: '95%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
              <div style={{ height: '85%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
              <div style={{ height: '90%', width: '14px', background: '#4f46e5', borderRadius: '2px' }} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '9px', color: 'var(--muted)', fontWeight: '700', padding: '0 6px' }}>
              <span>MON</span>
              <span>SUN</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
