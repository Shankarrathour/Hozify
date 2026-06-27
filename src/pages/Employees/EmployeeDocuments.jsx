import React, { useState } from 'react';
import {
  Search, ListFilter, FileText, CheckCircle2, AlertCircle, Clock, Download, Eye, X, ShieldCheck
} from 'lucide-react';

const MOCK_DOCUMENTS = [
  { id: 'DOC-901', employee: 'John Doe', type: 'Employment Contract', uploadDate: 'Sep 10, 2025', expiryDate: 'N/A', status: 'VERIFIED' },
  { id: 'DOC-902', employee: 'Alice Smith', type: 'Driving License', uploadDate: 'Oct 05, 2026', expiryDate: 'Nov 12, 2026', status: 'PENDING' },
  { id: 'DOC-903', employee: 'Bob Johnson', type: 'Health Certificate', uploadDate: 'Jan 15, 2024', expiryDate: 'Jan 15, 2025', status: 'EXPIRED' },
  { id: 'DOC-904', employee: 'Eve Williams', type: 'Background Check', uploadDate: 'Oct 12, 2026', expiryDate: 'Oct 12, 2027', status: 'VERIFIED' },
  { id: 'DOC-905', employee: 'Charlie Brown', type: 'Police Clearance', uploadDate: 'Oct 14, 2026', expiryDate: 'Oct 14, 2027', status: 'PENDING' },
];

export default function EmployeeDocuments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [previewDoc, setPreviewDoc] = useState(null);

  const filteredDocs = MOCK_DOCUMENTS.filter(d => {
    const matchSearch = d.employee.toLowerCase().includes(searchTerm.toLowerCase()) || d.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || d.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Documents</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>1,248</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Verified Documents</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>1,102</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f0fdf4', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Pending Verification</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>94</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Expired Documents</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>52</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef2f2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertCircle size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Document Repository</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div className="dash-search" style={{ margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px', width: '220px', display: 'flex', alignItems: 'center' }}>
              <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
              <input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '12px', border: 'none', background: 'transparent', outline: 'none', paddingLeft: '8px', flex: 1 }}
              />
            </div>
            <select 
              className="dash-select" 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ height: '34px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '12px', color: 'var(--text)', background: '#fff' }}
            >
              <option value="All">All Statuses</option>
              <option value="VERIFIED">Verified</option>
              <option value="PENDING">Pending</option>
              <option value="EXPIRED">Expired</option>
            </select>
          </div>
        </div>

        <div className="table-wrap" style={{ overflowX: 'auto' }}>
          <table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Employee Name</th>
                <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Document Type</th>
                <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Upload Date</th>
                <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Expiry Date</th>
                <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Verification Status</th>
                <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.employee}</strong>
                    </td>
                    <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>{row.type}</td>
                    <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>{row.uploadDate}</td>
                    <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>{row.expiryDate}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', background: row.status === 'VERIFIED' ? '#d1fae5' : row.status === 'PENDING' ? '#fef3c7' : '#fee2e2', color: row.status === 'VERIFIED' ? '#059669' : row.status === 'PENDING' ? '#d97706' : '#dc2626' }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button onClick={() => setPreviewDoc(row)} style={{ background: '#f8fafc', border: '1px solid var(--line)', color: 'var(--text)', cursor: 'pointer', fontSize: '12px', padding: '6px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Eye size={14} /> View
                        </button>
                        <button style={{ background: '#f8fafc', border: '1px solid var(--line)', color: 'var(--text)', cursor: 'pointer', fontSize: '12px', padding: '6px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Download size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredDocs.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ padding: '24px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                      No documents found.
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '600px', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Document Verification</h3>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{previewDoc.type} - {previewDoc.employee}</span>
              </div>
              <button onClick={() => setPreviewDoc(null)} style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '24px', background: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <div style={{ width: '100%', height: '100%', border: '2px dashed #cbd5e1', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--muted)' }}>
                <FileText size={48} style={{ marginBottom: '16px', color: '#94a3b8' }} />
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '700' }}>[Document Preview Placeholder]</p>
                <p style={{ margin: '4px 0 0', fontSize: '11px' }}>Image or PDF renderer would appear here</p>
              </div>
            </div>

            <div style={{ padding: '24px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '800' }}>Current Status</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: previewDoc.status === 'VERIFIED' ? '#059669' : previewDoc.status === 'PENDING' ? '#d97706' : '#dc2626' }}>
                  {previewDoc.status}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  style={{ padding: '10px 16px', background: '#fff', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                >
                  Reject Document
                </button>
                <button 
                  style={{ padding: '10px 16px', background: '#10b981', border: 'none', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <ShieldCheck size={16} /> Mark as Verified
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
