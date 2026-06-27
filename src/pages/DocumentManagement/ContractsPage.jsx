import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, FileText, CheckCircle2, Clock
} from 'lucide-react';

const INITIAL_DATA = [
  { id: 'CTR-101', entity: 'TechCorp Solutions', type: 'B2B Service', startDate: '2026-01-15', expiryDate: '2027-01-14', status: 'Active' },
  { id: 'CTR-102', entity: 'Sunrise Logistics', type: 'Partner', startDate: '2025-05-01', expiryDate: '2026-04-30', status: 'Expiring Soon' },
  { id: 'CTR-103', entity: 'Omega Suppliers', type: 'Vendor', startDate: '2024-03-10', expiryDate: '2025-03-09', status: 'Expired' },
  { id: 'CTR-104', entity: 'NexGen Retail', type: 'B2B Service', startDate: '2026-06-01', expiryDate: '2027-05-31', status: 'Active' }
];

export default function ContractsPage() {
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
    { name: 'entity', label: 'Entity Name', type: 'text', placeholder: 'e.g. TechCorp Solutions', required: true },
    { name: 'type', label: 'Contract Type', type: 'select', required: true, options: [
      { value: 'B2B Service', label: 'B2B Service' },
      { value: 'Partner', label: 'Partner' },
      { value: 'Vendor', label: 'Vendor' }
    ]},
    { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'YYYY-MM-DD', required: true },
    { name: 'expiryDate', label: 'Expiry Date', type: 'text', placeholder: 'YYYY-MM-DD', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active' },
      { value: 'Expiring Soon', label: 'Expiring Soon' },
      { value: 'Expired', label: 'Expired' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newItem = {
      ...val,
      id: `CTR-${Math.floor(100 + Math.random() * 900)}`
    };
    setData([newItem, ...data]);
    setSuccessMsg('Contract saved successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setData(data.map(item => item.id === selectedItem.id ? { ...item, ...updatedVal } : item));
    setSuccessMsg('Contract updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setData(data.filter(item => item.id !== selectedItem.id));
    setSuccessMsg('Contract deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Entity', 'Type', 'Start Date', 'Expiry Date', 'Status'], data);
    triggerDownload(csvContent, 'contracts.csv', 'text/csv');
    addToast('Contracts CSV downloaded!', 'success');
  };

  const filteredData = data.filter(item => {
    const matchesSearch = item.entity.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminShell activeTab="Document Management" headerTitle="Contract Management">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Document Management &gt; <span style={{ color: '#2A2454' }}>Contracts</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Contract Registry</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Manage B2B, partner, and vendor contracts and their lifecycles.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Contract
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Contracts</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{data.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{data.filter(a => a.status === 'Active').length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Expiring Soon</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{data.filter(a => a.status === 'Expiring Soon').length}</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search contracts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Active', 'Expiring Soon', 'Expired'].map(tab => (
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
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>CONTRACT ID</th>
                <th style={{ padding: '16px 24px' }}>ENTITY</th>
                <th style={{ padding: '16px 24px' }}>TYPE</th>
                <th style={{ padding: '16px 24px' }}>START DATE</th>
                <th style={{ padding: '16px 24px' }}>EXPIRY DATE</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.entity}</td>
                    <td style={{ padding: '18px 24px' }}>{row.type}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>{row.startDate}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>{row.expiryDate}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Active' ? '#d1fae5' : row.status === 'Expiring Soon' ? '#fef3c7' : '#fee2e2',
                        color: row.status === 'Active' ? '#065f46' : row.status === 'Expiring Soon' ? '#92400e' : '#991b1b'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        <button onClick={() => { setSelectedItem(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedItem(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedItem(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No contract records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add Contract" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Contract" 
        fields={formFields} 
        initialValues={selectedItem} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`contract "${selectedItem?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Contract Details" 
        data={{
          'Contract ID': selectedItem?.id,
          'Entity': selectedItem?.entity,
          'Type': selectedItem?.type,
          'Start Date': selectedItem?.startDate,
          'Expiry Date': selectedItem?.expiryDate,
          'Status': selectedItem?.status
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
