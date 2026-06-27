import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Wallet, ShieldAlert, ArrowUpDown, ChevronLeft, ChevronRight, Activity, Percent
} from 'lucide-react';

const INITIAL_MATERIALS = [
  { id: 'MP-701', name: 'AC Copper Pipe (3m Bundle)', category: 'AC Spares', purchasePrice: 42.00, sellingPrice: 55.00, margin: 23.6, status: 'Active' },
  { id: 'MP-702', name: 'Washing Machine Drainage Hose (2m)', category: 'Plumbing', purchasePrice: 8.50, sellingPrice: 12.00, margin: 29.1, status: 'Active' },
  { id: 'MP-703', name: 'Geyser Heating Core element (3KW)', category: 'Electricals', purchasePrice: 18.00, sellingPrice: 24.00, margin: 25.0, status: 'Active' },
  { id: 'MP-704', name: 'Water Purifier Pre-Filter Set', category: 'Water Purifiers', purchasePrice: 11.20, sellingPrice: 16.50, margin: 32.1, status: 'Active' },
  { id: 'MP-705', name: 'Single Core Copper Wire (10m Reel)', category: 'Electricals', purchasePrice: 22.00, sellingPrice: 28.00, margin: 21.4, status: 'Inactive' }
];

export default function MaterialPriceMgmtPage() {
  const { addToast } = useToast();
  const [materials, setMaterials] = useState(INITIAL_MATERIALS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedMat, setSelectedMat] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'name', label: 'Material Spare Name', type: 'text', placeholder: 'e.g. Copper wire reel', required: true },
    { name: 'category', label: 'Material Category', type: 'select', required: true, options: [
      { value: 'AC Spares', label: 'AC Spares' },
      { value: 'Plumbing', label: 'Plumbing' },
      { value: 'Electricals', label: 'Electricals' },
      { value: 'Water Purifiers', label: 'Water Purifiers' }
    ]},
    { name: 'purchasePrice', label: 'Wholesale Purchase Cost ($)', type: 'number', placeholder: '15.00', required: true },
    { name: 'sellingPrice', label: 'Retail Customer Selling Price ($)', type: 'number', placeholder: '22.00', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Propagated)' },
      { value: 'Inactive', label: 'Inactive' }
    ]}
  ];

  const handleAddSave = (val) => {
    const pPrice = parseFloat(val.purchasePrice);
    const sPrice = parseFloat(val.sellingPrice);
    const computedMargin = ((sPrice - pPrice) / sPrice) * 100;
    
    const newMat = {
      ...val,
      purchasePrice: pPrice,
      sellingPrice: sPrice,
      margin: parseFloat(computedMargin.toFixed(1)),
      id: `MP-${Math.floor(700 + Math.random() * 100)}`
    };
    setMaterials([newMat, ...materials]);
    setSuccessMsg('Material pricing record added!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    const pPrice = parseFloat(updatedVal.purchasePrice);
    const sPrice = parseFloat(updatedVal.sellingPrice);
    const computedMargin = ((sPrice - pPrice) / sPrice) * 100;

    setMaterials(materials.map(m => m.id === selectedMat.id ? { 
      ...m, 
      ...updatedVal,
      purchasePrice: pPrice,
      sellingPrice: sPrice,
      margin: parseFloat(computedMargin.toFixed(1))
    } : m));
    setSuccessMsg('Material pricing margins recalculated and saved!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setMaterials(materials.filter(m => m.id !== selectedMat.id));
    setSuccessMsg('Pricing record deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Material Name', 'Category', 'Purchase Cost', 'Selling Price', 'Margin %', 'Status'], materials);
    triggerDownload(csvContent, 'material_price_ledger.csv', 'text/csv');
    addToast('Material pricing matrix CSV downloaded!', 'success');
  };

  const filteredMaterials = materials.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell activeTab="Material Price Management" headerTitle="Material Cost Controls Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Logistics &gt; <span style={{ color: '#2A2454' }}>Material Price Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Material Price &amp; Profit Margin Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review vendor material buy values, retail list prices, and automated profit margins.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Material Cost
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wallet size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Material catalog</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{materials.length} Items</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Percent size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Margin Yield</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>26.2% Yield</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search material names, category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>MATERIAL ID</th>
                <th style={{ padding: '16px 24px' }}>NAME</th>
                <th style={{ padding: '16px 24px' }}>CATEGORY</th>
                <th style={{ padding: '16px 24px' }}>BUY COST</th>
                <th style={{ padding: '16px 24px' }}>RETAIL SELLING PRICE</th>
                <th style={{ padding: '16px 24px' }}>PROFIT MARGIN YIELD</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.length > 0 ? (
                filteredMaterials.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.name}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.category}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>${row.purchasePrice.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>${row.sellingPrice.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, width: '60px', height: '6px', background: '#eee9f6', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${(row.margin / 40) * 100}%`, height: '100%', background: '#059669' }} />
                        </div>
                        <span style={{ fontWeight: '700', color: '#059669' }}>{row.margin}%</span>
                      </div>
                    </td>
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
                        <button onClick={() => { setSelectedMat(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedMat(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedMat(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No materials matching filters found.</td>
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
        title="Add Material Price Record" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Material Prices" 
        fields={formFields} 
        initialValues={selectedMat} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`pricing record "${selectedMat?.name}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Material Cost Ledger Summary" 
        data={{
          'Material ID': selectedMat?.id,
          'Spare Name': selectedMat?.name,
          'Material Category': selectedMat?.category,
          'Wholesale Buy Cost': `$${selectedMat?.purchasePrice.toFixed(2)}`,
          'Retail Selling Price': `$${selectedMat?.sellingPrice.toFixed(2)}`,
          'Computed Profit Margin': `${selectedMat?.margin}%`,
          'Status State': selectedMat?.status
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
