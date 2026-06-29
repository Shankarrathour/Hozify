import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import Toggle from '../../components/common/Toggle';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal, WarningModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Banknote, DollarSign, Clock, AlertTriangle, Play, ListOrdered
} from 'lucide-react';

const INITIAL_PRICES = [
  { id: 'PR-101', name: 'General AC Maintenance (Base)', type: 'Flat Base', rate: 45.00, surge: 1.0, peakHour: 0, status: 'Active' },
  { id: 'PR-102', name: 'Plumbing Leak Detection (Hourly)', type: 'Hourly Labor', rate: 25.00, surge: 1.2, peakHour: 5.0, status: 'Active' },
  { id: 'PR-103', name: 'Emergency Electrical Repair (Base)', type: 'Emergency Base', rate: 60.00, surge: 1.5, peakHour: 10.0, status: 'Active' },
  { id: 'PR-104', name: 'Deep Cleaning (Per SqFt)', type: 'Unit Rate', rate: 0.15, surge: 1.0, peakHour: 0, status: 'Inactive' },
  { id: 'PR-105', name: 'Appliance Repair Labor Standard', type: 'Flat Base', rate: 35.00, surge: 1.1, peakHour: 4.0, status: 'Active' }
];

export default function PriceMgmtPage() {
  const { addToast } = useToast();
  const [prices, setPrices] = useState(INITIAL_PRICES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false); // Naya modal state saari services ke liye

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Common Blue Button Style
  const blueButtonStyle = {
    background: '#2563eb', // Standard Professional Blue Color
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background 0.2s'
  };

  const formFields = [
    { name: 'name', label: 'Pricing Rule Name', type: 'text', placeholder: 'e.g. Appliance Installation Base', required: true },
    { name: 'type', label: 'Rate Calculation Type', type: 'select', required: true, options: [
      { value: 'Flat Base', label: 'Flat Base' },
      { value: 'Hourly Labor', label: 'Hourly Labor' },
      { value: 'Emergency Base', label: 'Emergency Base' },
      { value: 'Unit Rate', label: 'Unit Rate' }
    ]},
    { name: 'rate', label: 'Rate Value ($)', type: 'number', placeholder: '35.00', required: true },
    { name: 'surge', label: 'Dynamic Surge Multiplier (1.0 - 2.5)', type: 'number', placeholder: '1.0', required: true },
    { name: 'peakHour', label: 'Peak Hour Surcharge ($)', type: 'number', placeholder: '0.00', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Propagated)' },
      { value: 'Inactive', label: 'Inactive' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newPr = {
      ...val,
      id: `PR-${Math.floor(100 + Math.random() * 100)}`
    };
    setPrices([newPr, ...prices]);
    setSuccessMsg('Pricing rule added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setPrices(prices.map(p => p.id === selectedPrice.id ? { ...p, ...updatedVal } : p));
    setSuccessMsg('Pricing rule updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setPrices(prices.filter(p => p.id !== selectedPrice.id));
    setSuccessMsg('Pricing rule deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (row, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setPrices(prices.map(p => p.id === row.id ? { ...p, status: nextStatus } : p));
      setSuccessMsg(`Status set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Name', 'Calculation Type', 'Rate', 'Surge Multiplier', 'Peak Hour Surcharge', 'Status'], prices);
    triggerDownload(csvContent, 'price_rules.csv', 'text/csv');
    addToast('Pricing rules directory downloaded!', 'success');
  };

  // Map prices array into key-value format for PreviewModal component layout
  const getAllServicesData = () => {
    const dataObj = {};
    prices.forEach(p => {
      dataObj[p.name] = `$${p.rate.toFixed(2)} (${p.type})`;
    });
    return dataObj;
  };

  const filteredPrices = prices.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell activeTab="Price Management" headerTitle="Pricing Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Pricing &gt; <span style={{ color: '#2A2454' }}>Price Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Price Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure service base pricing, labor charges, surge multiplier ceilings, and peak hour additions.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {/* Nayi Button: View All Services with Price */}
            <button onClick={() => setIsAllServicesOpen(true)} style={blueButtonStyle}>
              <ListOrdered size={16} strokeWidth={2.5} /> View All Services
            </button>
            <button onClick={handleExportCSV} style={blueButtonStyle}>
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} style={blueButtonStyle}>
              <Plus size={16} strokeWidth={2.5} /> Create Pricing Rule
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Banknote size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pricing Rules</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{prices.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Base Rate</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>$35.12</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Peak Surcharges</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{prices.filter(p => p.peakHour > 0).length} Rules</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search rule names, types..." 
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
                <th style={{ padding: '16px 24px' }}>PRICING RULE ID</th>
                <th style={{ padding: '16px 24px' }}>NAME</th>
                <th style={{ padding: '16px 24px' }}>CALCULATION TYPE</th>
                <th style={{ padding: '16px 24px' }}>BASE RATE</th>
                <th style={{ padding: '16px 24px' }}>SURGE MULTIPLIER</th>
                <th style={{ padding: '16px 24px' }}>PEAK SURCHARGE</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredPrices.length > 0 ? (
                filteredPrices.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.name}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.type}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>${row.rate.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: row.surge > 1.0 ? '#d97706' : 'var(--text)' }}>{row.surge}x</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>${row.peakHour.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                        <Toggle 
                          checked={row.status === 'Active'} 
                          onChange={(checked) => handleStatusToggle(row, checked)} 
                        />
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button onClick={() => { setSelectedPrice(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedPrice(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedPrice(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No price rules matching filters found.</td>
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
        title="Add Pricing Rule" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Pricing Rule" 
        fields={formFields} 
        initialValues={selectedPrice} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`pricing rule "${selectedPrice?.name}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Pricing Rule Summary" 
        data={{
          'Pricing ID': selectedPrice?.id,
          'Rule Label': selectedPrice?.name,
          'Rate Basis Type': selectedPrice?.type,
          'Base Rate Amount': `$${selectedPrice?.rate.toFixed(2)}`,
          'Surge Multiplier Factor': `${selectedPrice?.surge}x`,
          'Peak Hour Surcharge Addition': `$${selectedPrice?.peakHour.toFixed(2)}`,
          'Status State': selectedPrice?.status
        }} 
      />

      {/* Naya PreviewModal Configured for viewing all service data */}
      <PreviewModal
        isOpen={isAllServicesOpen}
        onClose={() => setIsAllServicesOpen(false)}
        title="All Services Pricing List"
        data={getAllServicesData()}
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMsg} 
      />

      <WarningModal 
        isOpen={isWarningOpen} 
        onClose={() => setIsWarningOpen(false)} 
        title="Pricing Parameter Update" 
        message="Modifying pricing parameters alters customer quote calculations immediately. Proceed?" 
        onConfirm={warningAction} 
      />

    </AdminShell>
  );
}