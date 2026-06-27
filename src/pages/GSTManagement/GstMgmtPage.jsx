import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, FileText, CheckCircle2, AlertTriangle, ShieldCheck
} from 'lucide-react';

const INITIAL_TAXES = [
  { id: 'GST-301', hsn: '998713', category: 'AC Maintenance Services', rate: 18.0, cgst: 9.0, sgst: 9.0, status: 'Active' },
  { id: 'GST-302', hsn: '841590', category: 'AC Compressor Spare Parts', rate: 28.0, cgst: 14.0, sgst: 14.0, status: 'Active' },
  { id: 'GST-303', hsn: '998711', category: 'General Plumbing Services', rate: 18.0, cgst: 9.0, sgst: 9.0, status: 'Active' },
  { id: 'GST-304', hsn: '391723', category: 'PVC Conduit Pipes & Fittings', rate: 18.0, cgst: 9.0, sgst: 9.0, status: 'Active' }
];

export default function GstMgmtPage() {
  const { addToast } = useToast();
  const [taxes, setTaxes] = useState(INITIAL_TAXES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedTax, setSelectedTax] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'hsn', label: 'HSN / SAC Code', type: 'text', placeholder: 'e.g. 998713', required: true },
    { name: 'category', label: 'Service / Parts Category', type: 'text', placeholder: 'e.g. Electrical Labor', required: true },
    { name: 'rate', label: 'Total GST Rate (%)', type: 'number', placeholder: '18', required: true },
    { name: 'cgst', label: 'CGST Portion (%)', type: 'number', placeholder: '9', required: true },
    { name: 'sgst', label: 'SGST Portion (%)', type: 'number', placeholder: '9', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Visible)' },
      { value: 'Inactive', label: 'Inactive' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newTax = {
      ...val,
      id: `GST-${Math.floor(300 + Math.random() * 100)}`
    };
    setTaxes([newTax, ...taxes]);
    setSuccessMsg('GST rule added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setTaxes(taxes.map(t => t.id === selectedTax.id ? { ...t, ...updatedVal } : t));
    setSuccessMsg('GST rule updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setTaxes(taxes.filter(t => t.id !== selectedTax.id));
    setSuccessMsg('GST rule deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'HSN Code', 'Category', 'Total GST %', 'CGST %', 'SGST %', 'Status'], taxes);
    triggerDownload(csvContent, 'gst_taxation_rules.csv', 'text/csv');
    addToast('GST Taxation Rules CSV downloaded!', 'success');
  };

  const filteredTaxes = taxes.filter(t => 
    t.hsn.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell activeTab="GST Management" headerTitle="GST Taxation Rules Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Finance &gt; <span style={{ color: '#2A2454' }}>GST Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">GST &amp; Tax Configuration</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure platform HSN/SAC parameters, split CGST/SGST ratios, and audit tax compliance invoices.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add HSN/GST Rule
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
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Tax Categories</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{taxes.length} Rules</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tax Yield</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>18% Standard</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Compliance Audit</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>0 Discrepancy</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search HSN codes, category..." 
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
                <th style={{ padding: '16px 24px' }}>GST RULE ID</th>
                <th style={{ padding: '16px 24px' }}>HSN / SAC</th>
                <th style={{ padding: '16px 24px' }}>SERVICE CATEGORY</th>
                <th style={{ padding: '16px 24px' }}>TOTAL GST</th>
                <th style={{ padding: '16px 24px' }}>CGST</th>
                <th style={{ padding: '16px 24px' }}>SGST</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredTaxes.length > 0 ? (
                filteredTaxes.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>{row.hsn}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.category}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#059669' }}>{row.rate}%</td>
                    <td style={{ padding: '18px 24px' }}>{row.cgst}%</td>
                    <td style={{ padding: '18px 24px' }}>{row.sgst}%</td>
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
                        <button onClick={() => { setSelectedTax(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedTax(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedTax(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No tax codes found matching filters.</td>
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
        title="Add GST Taxation Rule" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit GST Rule" 
        fields={formFields} 
        initialValues={selectedTax} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`GST rule code "${selectedTax?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="GST Rule Overview" 
        data={{
          'GST ID': selectedTax?.id,
          'HSN / SAC Code': selectedTax?.hsn,
          'Spare Category': selectedTax?.category,
          'Total GST Percentage': `${selectedTax?.rate}%`,
          'CGST Fraction': `${selectedTax?.cgst}%`,
          'SGST Fraction': `${selectedTax?.sgst}%`,
          'Status State': selectedTax?.status
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
