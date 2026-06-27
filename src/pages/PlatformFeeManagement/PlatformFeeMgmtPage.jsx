import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Landmark, Compass, Wrench, CircleDollarSign
} from 'lucide-react';

const INITIAL_FEES = [
  { id: 'FEE-401', service: 'Air Conditioner Maintenance', type: 'Percentage Commission', value: '15.0%', status: 'Active', rules: 'Calculated on gross service value.' },
  { id: 'FEE-402', service: 'Plumbing Emergency Services', type: 'Fixed Surcharge', value: '$5.00', status: 'Active', rules: 'Flat booking fee added to emergency slots.' },
  { id: 'FEE-403', service: 'Deep Cleaning (Partner Cut)', type: 'Percentage Commission', value: '12.0%', status: 'Active', rules: 'Sellers/ISPs platform charge per completed job.' },
  { id: 'FEE-404', service: 'Material Fulfillment Fee', type: 'Fixed Surcharge', value: '$2.00', status: 'Inactive', rules: 'Material shipment handling fee for sellers.' }
];

export default function PlatformFeeMgmtPage() {
  const { addToast } = useToast();
  const [fees, setFees] = useState(INITIAL_FEES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'service', label: 'Service / Category Scope', type: 'text', placeholder: 'e.g. Electrical General', required: true },
    { name: 'type', label: 'Fee / Commission Type', type: 'select', required: true, options: [
      { value: 'Percentage Commission', label: 'Percentage Commission' },
      { value: 'Fixed Surcharge', label: 'Fixed Surcharge' }
    ]},
    { name: 'value', label: 'Rate Value (e.g. 15% or $5.00)', type: 'text', placeholder: '15%', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Propagated)' },
      { value: 'Inactive', label: 'Inactive' }
    ]},
    { name: 'rules', label: 'Commission Rule Parameters', type: 'textarea', placeholder: 'Describe rules...', required: true }
  ];

  const handleAddSave = (val) => {
    const newFee = {
      ...val,
      id: `FEE-${Math.floor(400 + Math.random() * 100)}`
    };
    setFees([newFee, ...fees]);
    setSuccessMsg('Commission platform rule added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setFees(fees.map(f => f.id === selectedFee.id ? { ...f, ...updatedVal } : f));
    setSuccessMsg('Commission platform rule updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setFees(fees.filter(f => f.id !== selectedFee.id));
    setSuccessMsg('Platform rule deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Service', 'Category', 'Commission Value', 'Status', 'Rules'], fees);
    triggerDownload(csvContent, 'platform_commissions.csv', 'text/csv');
    addToast('Commissions ledger downloaded!', 'success');
  };

  const filteredFees = fees.filter(f => 
    f.service.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.rules.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell activeTab="Platform Fee Management" headerTitle="Platform Fee Settings Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Finance &gt; <span style={{ color: '#2A2454' }}>Platform Fee Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Platform Fee &amp; Commission Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure platform-wide commission rules, fixed transactional fees, and partner billing payouts.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Commission Rule
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Landmark size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Active Rules</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{fees.length} Rules</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Comm. Rate</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>13.5% Rate</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search services, commission rules..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>RULE ID</th>
                <th style={{ padding: '16px 24px' }}>SERVICE / PARTS SCOPE</th>
                <th style={{ padding: '16px 24px' }}>COMMISSION / FEE TYPE</th>
                <th style={{ padding: '16px 24px' }}>RATE VALUE</th>
                <th style={{ padding: '16px 24px' }}>RULE CRITERIA</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredFees.length > 0 ? (
                filteredFees.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.service}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.type}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#059669', fontFamily: 'monospace' }}>{row.value}</td>
                    <td style={{ padding: '18px 24px', color: 'var(--muted)' }}>{row.rules}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Active' ? '#d1fae5' : '#f1f5f9',
                        color: row.status === 'Active' ? '#065f46' : '#475569'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button onClick={() => { setSelectedFee(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedFee(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedFee(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No commission rules found.</td>
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
        title="Add Platform Commission Rule" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Commission Rule" 
        fields={formFields} 
        initialValues={selectedFee} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`commission rule code "${selectedFee?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Platform Commission Rule Preview" 
        data={{
          'Rule ID': selectedFee?.id,
          'Service Scope Mapped': selectedFee?.service,
          'Rate Commission Type': selectedFee?.type,
          'Fee Payout Value': selectedFee?.value,
          'Status State': selectedFee?.status,
          'Rule Parameters Description': selectedFee?.rules
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
