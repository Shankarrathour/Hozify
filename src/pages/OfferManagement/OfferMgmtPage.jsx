import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import Toggle from '../../components/common/Toggle';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal, WarningModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Tag, Gift, Percent, Calendar
} from 'lucide-react';

const INITIAL_OFFERS = [
  { id: 'OFF-101', code: 'WELCOME50', type: 'Coupon', value: '50%', expiry: '2026-12-31', maxCap: 20.00, status: 'Active', description: 'First booking 50% discount for newly registered users.' },
  { id: 'OFF-102', code: 'MONSOON20', type: 'Promo Code', value: '20%', expiry: '2026-08-31', maxCap: 15.00, status: 'Active', description: 'Seasonal promotional discount code during monsoons.' },
  { id: 'OFF-103', code: 'FLAT100', type: 'Discount', value: '$100', expiry: '2026-07-15', maxCap: 100.00, status: 'Active', description: 'Flat discount on deep cleaning bookings above $500.' },
  { id: 'OFF-104', code: 'FESTIVE30', type: 'Campaign', value: '30%', expiry: '2026-10-31', maxCap: 30.00, status: 'Inactive', description: 'Pre-festive season home maintenance campaign.' }
];

export default function OfferMgmtPage() {
  const { addToast } = useToast();
  const [offers, setOffers] = useState(INITIAL_OFFERS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  const formFields = [
    { name: 'code', label: 'Offer Promo Code (Uppercase)', type: 'text', placeholder: 'e.g. SAVE25', required: true },
    { name: 'type', label: 'Offer Campaign Category', type: 'select', required: true, options: [
      { value: 'Coupon', label: 'Coupon' },
      { value: 'Promo Code', label: 'Promo Code' },
      { value: 'Discount', label: 'Discount' },
      { value: 'Campaign', label: 'Campaign' }
    ]},
    { name: 'value', label: 'Offer Value (e.g. 20% or $10)', type: 'text', placeholder: '20%', required: true },
    { name: 'maxCap', label: 'Maximum Discount Cap ($)', type: 'number', placeholder: '15.00', required: true },
    { name: 'expiry', label: 'Expiry Date (YYYY-MM-DD)', type: 'text', placeholder: '2026-12-31', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Visible)' },
      { value: 'Inactive', label: 'Inactive' }
    ]},
    { name: 'description', label: 'Offer Description', type: 'textarea', placeholder: 'Explain rules...', required: true }
  ];

  const handleAddSave = (val) => {
    const newOffer = {
      ...val,
      code: val.code.toUpperCase(),
      id: `OFF-${Math.floor(100 + Math.random() * 100)}`
    };
    setOffers([newOffer, ...offers]);
    setSuccessMsg('Offer discount code added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setOffers(offers.map(o => o.id === selectedOffer.id ? { ...o, ...updatedVal } : o));
    setSuccessMsg('Offer details updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setOffers(offers.filter(o => o.id !== selectedOffer.id));
    setSuccessMsg('Offer code deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (row, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setOffers(offers.map(o => o.id === row.id ? { ...o, status: nextStatus } : o));
      setSuccessMsg(`Status set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    addToast(`Offer code "${code}" copied to clipboard!`, 'success');
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Code', 'Category', 'Value', 'Expiry', 'Max Cap', 'Status', 'Description'], offers);
    triggerDownload(csvContent, 'offers.csv', 'text/csv');
    addToast('Offer campaigns exported successfully!', 'success');
  };

  const filteredOffers = offers.filter(o => 
    o.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell activeTab="Offer Management" headerTitle="Campaign Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Marketing &gt; <span style={{ color: '#2A2454' }}>Offer Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Offer &amp; Coupon Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure client discount campaigns, seasonal promo codes, and referral coupons dynamically.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Create Offer
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tag size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Active Offers</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{offers.filter(o => o.status === 'Active').length} Coupons</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Percent size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Discount</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>33% Off</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Expiring Soon</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>2 Campaigns</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search codes, description..." 
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
                <th style={{ padding: '16px 24px' }}>OFFER CODE</th>
                <th style={{ padding: '16px 24px' }}>TYPE</th>
                <th style={{ padding: '16px 24px' }}>VALUE</th>
                <th style={{ padding: '16px 24px' }}>MAX CAP</th>
                <th style={{ padding: '16px 24px' }}>EXPIRY</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredOffers.length > 0 ? (
                filteredOffers.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '14px', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => handleCopyCode(row.code)}>
                          {row.code}
                        </span>
                      </div>
                      <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '4px' }}>
                        {row.description}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.type}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#059669' }}>{row.value}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>${row.maxCap.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600', fontFamily: 'monospace' }}>{row.expiry}</td>
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
                        <button onClick={() => { setSelectedOffer(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedOffer(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedOffer(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No offer records found.</td>
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
        title="Create Offer Campaign" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Campaign Details" 
        fields={formFields} 
        initialValues={selectedOffer} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`offer code "${selectedOffer?.code}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Offer Campaign Details" 
        data={{
          'Offer ID': selectedOffer?.id,
          'Promo Code': selectedOffer?.code,
          'Campaign Type': selectedOffer?.type,
          'Discount Value': selectedOffer?.value,
          'Expiry Target Date': selectedOffer?.expiry,
          'Maximum Discount Cap': `$${selectedOffer?.maxCap.toFixed(2)}`,
          'Status': selectedOffer?.status,
          'Detailed Description': selectedOffer?.description
        }} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMsg} 
      />

      <WarningModal 
        isOpen={isWarningOpen} 
        onClose={() => setIsWarningOpen(false)} 
        title="Offer Visibility Toggle" 
        message="Toggling this campaign immediately updates code availability status inside checkout panels. Proceed?" 
        onConfirm={warningAction} 
      />

    </AdminShell>
  );
}
