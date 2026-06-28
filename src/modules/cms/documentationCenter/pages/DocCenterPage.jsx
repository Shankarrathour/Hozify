import React, { useState } from 'react';
import AdminShell from '../../../../components/layouts/AdminShell';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  PreviewModal, 
  ImageViewerModal,
  UploadModal,
  ApprovalModal,
  SuccessModal
} from '../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV, downloadDummyPDF } from '../../../../utils/downloadHelper';
import { Search, Plus, Download, Edit, Trash2, Eye, UploadCloud, FileText, CheckCircle2, ArrowUpDown, ChevronLeft, ChevronRight, Clock, AlertTriangle } from 'lucide-react';

const INITIAL_DOCS = [
  { id: 'DOC-1029', name: 'Aadhaar Card Front', category: 'KYC Documents', entity: 'ISP - Rajesh Kumar', status: 'Approved', expiry: 'N/A', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
  { id: 'DOC-1030', name: 'GST Certificate Reg-06', category: 'GST Documents', entity: 'BSP - Electro Solutions', status: 'Pending Verification', expiry: '2030-05-12', url: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80' },
  { id: 'DOC-1031', name: 'Service SLA Agreement v3', category: 'Agreements', entity: 'All Independent Partners', status: 'Approved', expiry: '2027-01-01', url: '' },
  { id: 'DOC-1032', name: 'Annual Logistics Contract', category: 'Contracts', entity: 'BS - Delhi Goods Corp', status: 'Approved', expiry: '2026-12-31', url: '' },
  { id: 'DOC-1033', name: 'Shop Registration Act Cert', category: 'Business Registrations', entity: 'BS - Urban Store', status: 'Rejected', expiry: 'N/A', url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&q=80' },
  { id: 'DOC-1034', name: 'PAN Card Verified File', category: 'KYC Documents', entity: 'ISP - Sunil Dutt', status: 'Pending Verification', expiry: 'N/A', url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&q=80' }
];

export default function DocCenterPage() {
  const [docs, setDocs] = useState(INITIAL_DOCS);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Modal States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Statistics
  const totalDocs = docs.length;
  const pendingDocs = docs.filter(d => d.status === 'Pending Verification').length;
  const rejectedDocs = docs.filter(d => d.status === 'Rejected').length;
  const activeContracts = docs.filter(d => d.category === 'Contracts' || d.category === 'Agreements').length;

  const formFields = [
    { name: 'name', label: 'Document Name', type: 'text', placeholder: 'e.g. GST Registration Certificate', required: true, maxLength: 50 },
    { name: 'category', label: 'Document Category', type: 'select', required: true, options: [
      { value: 'KYC Documents', label: 'KYC Documents' },
      { value: 'GST Documents', label: 'GST Documents' },
      { value: 'Agreements', label: 'Agreements' },
      { value: 'Contracts', label: 'Contracts' },
      { value: 'Business Registrations', label: 'Business Registrations' }
    ]},
    { name: 'entity', label: 'Associated Entity', type: 'text', placeholder: 'e.g. ISP - Rajesh Kumar', required: true, maxLength: 50 },
    { name: 'expiry', label: 'Expiry Date', type: 'text', placeholder: 'YYYY-MM-DD or N/A', required: true, maxLength: 12 },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Approved', label: 'Approved' },
      { value: 'Pending Verification', label: 'Pending Verification' },
      { value: 'Rejected', label: 'Rejected' }
    ]}
  ];

  // Actions
  const handleAddSave = (val) => {
    const newDoc = {
      ...val,
      id: `DOC-${Math.floor(1000 + Math.random() * 9000)}`,
      url: ''
    };
    setDocs(prev => [newDoc, ...prev]);
    setSuccessMessage('Document record added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setDocs(prev => prev.map(d => d.id === selectedDoc.id ? { ...d, ...updatedVal } : d));
    setSuccessMessage('Document details updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setDocs(prev => prev.filter(d => d.id !== selectedDoc.id));
    setSuccessMessage('Document record deleted!');
    setIsSuccessOpen(true);
  };

  const handleUploadFile = (file) => {
    setDocs(prev => prev.map(d => d.id === selectedDoc.id ? { 
      ...d, 
      name: `${d.name} (Uploaded: ${file.name})`,
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80'
    } : d));
    setSuccessMessage(`File "${file.name}" uploaded successfully and linked to ${selectedDoc.id}!`);
    setIsSuccessOpen(true);
  };

  const handleApprove = (remarks) => {
    setDocs(prev => prev.map(d => d.id === selectedDoc.id ? { ...d, status: 'Approved' } : d));
    setSuccessMessage(`Document ${selectedDoc.id} approved! Remarks: ${remarks}`);
    setIsSuccessOpen(true);
  };

  const handleReject = (remarks) => {
    setDocs(prev => prev.map(d => d.id === selectedDoc.id ? { ...d, status: 'Rejected' } : d));
    setSuccessMessage(`Document ${selectedDoc.id} rejected. Remarks: ${remarks}`);
    setIsSuccessOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Name', 'Category', 'Entity', 'Status', 'Expiry'], docs);
    triggerDownload(csvContent, 'documents_registry.csv', 'text/csv');
    setSuccessMessage('Documents registry exported successfully! "documents_registry.csv" downloaded.');
    setIsSuccessOpen(true);
  };

  const handleDownloadDoc = (doc) => {
    downloadDummyPDF(`DOCUMENT: ${doc.id} - ${doc.name}`, `Associated Entity: ${doc.entity}\nCategory: ${doc.category}\nVerification Status: ${doc.status}\nExpiry Date: ${doc.expiry}`);
    setSuccessMessage(`Document "${doc.name}" exported successfully!`);
    setIsSuccessOpen(true);
  };

  // Sort & Filter
  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredDocs = docs
    .filter(d => {
      const matchSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = categoryFilter === 'All' || d.category === categoryFilter;
      return matchSearch && matchCat;
    })
    .sort((a, b) => {
      const aVal = a[sortField]?.toLowerCase() || '';
      const bVal = b[sortField]?.toLowerCase() || '';
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  // Pagination
  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
  const currentItems = filteredDocs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AdminShell activeTab="CMS" headerTitle="Documentation Registry">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; <span style={{ color: '#2A2454' }}>Documentation Center</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Documentation Center - {categoryFilter === 'All' ? 'All Formats' : categoryFilter}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review uploading queues, audit SLA contracts, and verify provider KYC credentials.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Record
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Documents Indexed</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalDocs}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Review</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{pendingDocs}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rejected Records</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>{rejectedDocs}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active SLA Contracts</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{activeContracts}</h2>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search ID, entity, name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'KYC Documents', 'GST Documents', 'Agreements', 'Contracts', 'Business Registrations'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setCategoryFilter(tab)}
                style={{
                  padding: '8px 14px',
                  border: categoryFilter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: categoryFilter === tab ? '#e0e7ff' : '#fff',
                  color: '#2A2454',
                  cursor: 'pointer'
                }}
              >
                {tab === 'All' ? 'All Formats' : tab.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr className="custom-table-header">
                  <th onClick={() => toggleSort('id')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    DOCUMENT ID <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th onClick={() => toggleSort('name')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    DOCUMENT NAME <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th style={{ padding: '16px 24px' }}>CATEGORY</th>
                  <th style={{ padding: '16px 24px' }}>ASSOCIATED ENTITY</th>
                  <th style={{ padding: '16px 24px' }}>STATUS</th>
                  <th style={{ padding: '16px 24px' }}>EXPIRY</th>
                  <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.name}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.category}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.entity}</td>
                      <td style={{ padding: '18px 24px' }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontWeight: '800',
                          background: row.status === 'Approved' ? '#d1fae5' : row.status === 'Rejected' ? '#fee2e2' : '#fef3c7',
                          color: row.status === 'Approved' ? '#065f46' : row.status === 'Rejected' ? '#991b1b' : '#92400e'
                        }}>
                          {row.status}
                        </span>
                      </td>
                      <td style={{ padding: '18px 24px', fontWeight: '600', fontFamily: 'monospace' }}>{row.expiry}</td>
                      <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button onClick={() => { setSelectedDoc(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="View details"><Eye size={16} /></button>
                          
                          {row.url && (
                            <button onClick={() => { setSelectedDoc(row); setIsViewerOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#4f46e5' }} title="View Attachment Image">
                              <FileText size={16} />
                            </button>
                          )}
                          
                          <button onClick={() => { setSelectedDoc(row); setIsUploadOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Upload Attachment"><UploadCloud size={16} /></button>

                          {row.status === 'Pending Verification' && (
                            <button onClick={() => { setSelectedDoc(row); setIsApprovalOpen(true); }} style={{ border: 'none', background: '#059669', color: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '700' }}>
                              Verify
                            </button>
                          )}

                          <button onClick={() => { setSelectedDoc(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit Record"><Edit size={16} /></button>
                          <button onClick={() => handleDownloadDoc(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Download doc"><Download size={16} /></button>
                          <button onClick={() => { setSelectedDoc(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No documents found matching filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
                Page {currentPage} of {totalPages}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} 
                  disabled={currentPage === 1}
                  className="editor-btn"
                  style={{ border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', background: '#fff', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} 
                  disabled={currentPage === totalPages}
                  className="editor-btn"
                  style={{ border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', background: '#fff', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add Document Record" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Document Registry Details" 
        fields={formFields} 
        initialValues={selectedDoc} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`document record ${selectedDoc?.id}`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title={`Document ${selectedDoc?.id} Registry`} 
        data={{
          'Doc ID': selectedDoc?.id,
          'Name': selectedDoc?.name,
          'Category': selectedDoc?.category,
          'Entity Associated': selectedDoc?.entity,
          'Current Status': selectedDoc?.status,
          'Expiry Date': selectedDoc?.expiry
        }} 
      />

      <ImageViewerModal 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
        imageUrl={selectedDoc?.url} 
        title={`Attached Image for ${selectedDoc?.id}`} 
      />

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
        onUpload={handleUploadFile} 
        title={`Upload scan for ${selectedDoc?.name}`} 
        allowedFormats={['pdf', 'png', 'jpg', 'jpeg']} 
        maxSize="10MB" 
      />

      <ApprovalModal 
        isOpen={isApprovalOpen} 
        onClose={() => setIsApprovalOpen(false)} 
        title={`Verify Document ${selectedDoc?.id}`} 
        details={{
          'File ID': selectedDoc?.id,
          'Document': selectedDoc?.name,
          'Owner Entity': selectedDoc?.entity
        }} 
        onApprove={handleApprove} 
        onReject={handleReject} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMessage} 
      />
    </AdminShell>
  );
}
