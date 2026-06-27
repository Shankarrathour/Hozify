import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, ShieldCheck, CheckCircle2, Clock, AlertCircle
} from 'lucide-react';

const INITIAL_DATA = [
  { id: 'KYC-1001', entityName: 'Ramesh Singh', entityType: 'User', docType: 'Aadhaar Card', uploadDate: '2026-06-25', status: 'Verified' },
  { id: 'KYC-1002', entityName: 'Priya Sharma', entityType: 'Partner', docType: 'PAN Card', uploadDate: '2026-06-26', status: 'Pending Review' },
  { id: 'KYC-1003', entityName: 'Green Logistics', entityType: 'Vendor', docType: 'GST Certificate', uploadDate: '2026-06-20', status: 'Rejected' },
  { id: 'KYC-1004', entityName: 'Amit Kumar', entityType: 'User', docType: 'Passport', uploadDate: '2026-06-27', status: 'Pending Review' }
];

export default function KYCDocumentsPage() {
  const { addToast } = useToast();
  const [data, setData] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'entityName', label: 'Entity Name', type: 'text', placeholder: 'e.g. Ramesh Singh', required: true },
    { name: 'entityType', label: 'Entity Type', type: 'select', required: true, options: [
      { value: 'User', label: 'User' },
      { value: 'Partner', label: 'Partner' },
      { value: 'Vendor', label: 'Vendor' }
    ]},
    { name: 'docType', label: 'Document Type', type: 'select', required: true, options: [
      { value: 'Aadhaar Card', label: 'Aadhaar Card' },
      { value: 'PAN Card', label: 'PAN Card' },
      { value: 'Passport', label: 'Passport' },
      { value: 'Driving License', label: 'Driving License' },
      { value: 'GST Certificate', label: 'GST Certificate' }
    ]},
    { name: 'status', label: 'Verification Status', type: 'select', required: true, options: [
      { value: 'Verified', label: 'Verified' },
      { value: 'Pending Review', label: 'Pending Review' },
      { value: 'Rejected', label: 'Rejected' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newItem = {
      ...val,
      id: `KYC-${Math.floor(1000 + Math.random() * 9000)}`,
      uploadDate: new Date().toISOString().split('T')[0]
    };
    setData([newItem, ...data]);
    setSuccessMsg('KYC document record created successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setData(data.map(item => item.id === selectedItem.id ? { ...item, ...updatedVal } : item));
    setSuccessMsg('KYC document record updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setData(data.filter(item => item.id !== selectedItem.id));
    setSuccessMsg('KYC document record deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Entity Name', 'Type', 'Document Type', 'Upload Date', 'Status'], data);
    triggerDownload(csvContent, 'kyc_documents.csv', 'text/csv');
    addToast('KYC Documents CSV downloaded!', 'success');
  };

  const filteredData = data.filter(item => {
    const matchesSearch = item.entityName.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminShell activeTab="Document Management" headerTitle="KYC Document Management">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Document Management &gt; <span style={{ color: '#2A2454' }}>KYC Documents</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">KYC Verification Inbox</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review, verify, and manage user and partner KYC document submissions.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add KYC Record
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Submissions</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{data.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Verified</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{data.filter(a => a.status === 'Verified').length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Review</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{data.filter(a => a.status === 'Pending Review').length}</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search entity name, ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Verified', 'Pending Review', 'Rejected'].map(tab => (
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
                <th style={{ padding: '16px 24px' }}>KYC ID</th>
                <th style={{ padding: '16px 24px' }}>ENTITY NAME</th>
                <th style={{ padding: '16px 24px' }}>TYPE</th>
                <th style={{ padding: '16px 24px' }}>DOCUMENT TYPE</th>
                <th style={{ padding: '16px 24px' }}>UPLOAD DATE</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.entityName}</td>
                    <td style={{ padding: '18px 24px' }}>{row.entityType}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.docType}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>{row.uploadDate}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Verified' ? '#d1fae5' : row.status === 'Pending Review' ? '#fef3c7' : '#fee2e2',
                        color: row.status === 'Verified' ? '#065f46' : row.status === 'Pending Review' ? '#92400e' : '#991b1b'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        <button onClick={() => { setSelectedItem(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview Document"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedItem(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Review Status"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedItem(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No KYC records found.</td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add KYC Record" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Update KYC Status" 
        fields={formFields} 
        initialValues={selectedItem} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`KYC record "${selectedItem?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="KYC Record Details" 
        data={{
          'KYC Record ID': selectedItem?.id,
          'Entity Name': selectedItem?.entityName,
          'Entity Type': selectedItem?.entityType,
          'Document Type': selectedItem?.docType,
          'Upload Date': selectedItem?.uploadDate,
          'Verification Status': selectedItem?.status
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
