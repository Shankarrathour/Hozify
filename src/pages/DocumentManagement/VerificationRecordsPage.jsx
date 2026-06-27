import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Download, Trash2, Eye, Activity, CheckCircle2, AlertTriangle
} from 'lucide-react';

const INITIAL_DATA = [
  { id: 'VR-2001', targetEntity: 'Ramesh Singh', verificationType: 'Identity', timestamp: '2026-06-25 14:30', verifiedBy: 'System Auto', status: 'Passed' },
  { id: 'VR-2002', targetEntity: 'Priya Sharma', verificationType: 'Bank Account', timestamp: '2026-06-26 09:15', verifiedBy: 'Admin - Alex', status: 'Failed' },
  { id: 'VR-2003', targetEntity: 'TechCorp Solutions', verificationType: 'Business Reg', timestamp: '2026-06-26 11:45', verifiedBy: 'Admin - Sarah', status: 'Passed' },
  { id: 'VR-2004', targetEntity: 'Amit Kumar', verificationType: 'Address', timestamp: '2026-06-27 10:00', verifiedBy: 'System Auto', status: 'Passed' }
];

export default function VerificationRecordsPage() {
  const { addToast } = useToast();
  const [data, setData] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  
  // Modals
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleDeleteConfirm = () => {
    setData(data.filter(item => item.id !== selectedItem.id));
    setSuccessMsg('Verification log record deleted.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['Record ID', 'Target Entity', 'Verification Type', 'Timestamp', 'Verified By', 'Status'], data);
    triggerDownload(csvContent, 'verification_records.csv', 'text/csv');
    addToast('Verification Records CSV downloaded!', 'success');
  };

  const filteredData = data.filter(item => {
    const matchesSearch = item.targetEntity.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminShell activeTab="Document Management" headerTitle="Verification Records">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Document Management &gt; <span style={{ color: '#2A2454' }}>Verification Records</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Verification Audit Logs</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>View historical logs of system and manual verification actions.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Verifications</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{data.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Passed</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{data.filter(a => a.status === 'Passed').length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Failed</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#dc2626', margin: '2px 0 0 0' }}>{data.filter(a => a.status === 'Failed').length}</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search by ID or entity..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Passed', 'Failed'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab)}
                style={{
                  padding: '8px 14px',
                  border: filter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: filter === tab ? '#e0e7ff' : '#fff',
                  color: '#2A2454',
                  cursor: 'pointer'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>RECORD ID</th>
                <th style={{ padding: '16px 24px' }}>TARGET ENTITY</th>
                <th style={{ padding: '16px 24px' }}>VERIFICATION TYPE</th>
                <th style={{ padding: '16px 24px' }}>TIMESTAMP</th>
                <th style={{ padding: '16px 24px' }}>VERIFIED BY</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.targetEntity}</td>
                    <td style={{ padding: '18px 24px' }}>{row.verificationType}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>{row.timestamp}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.verifiedBy}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Passed' ? '#d1fae5' : '#fee2e2',
                        color: row.status === 'Passed' ? '#065f46' : '#991b1b'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        <button onClick={() => { setSelectedItem(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview Audit Log"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedItem(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete Log"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No verification records found.</td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>

      </div>

      {/* Modals */}
      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`verification record "${selectedItem?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Verification Log Details" 
        data={{
          'Record ID': selectedItem?.id,
          'Target Entity': selectedItem?.targetEntity,
          'Verification Type': selectedItem?.verificationType,
          'Timestamp': selectedItem?.timestamp,
          'Verified By System/User': selectedItem?.verifiedBy,
          'Final Result Status': selectedItem?.status
        }} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMsg} 
      />

    </AdminShell>
  );
}
