import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, MapPin, Map, Home, Briefcase
} from 'lucide-react';

const INITIAL_ADDRESSES = [
  { id: 'ADD-601', user: 'Sarah Miller', type: 'Home', address: 'Flat 402, Sunset Heights, Bandra West, Mumbai 400050', coordinates: '19.0544, 72.8291', savedDate: '2026-06-27' },
  { id: 'ADD-602', user: 'John Doe', type: 'Office', address: 'Level 12, Naman Centre, BKC, Mumbai 400051', coordinates: '19.0664, 72.8660', savedDate: '2026-06-26' },
  { id: 'ADD-603', user: 'Rajesh Kumar', type: 'Home', address: 'Block C-12, Green Park Extension, New Delhi 110016', coordinates: '28.5590, 77.2023', savedDate: '2026-06-25' },
  { id: 'ADD-604', user: 'Amit Shah', type: 'Other', address: 'Villa 9, Palm Meadows, Whitefield, Bengaluru 560066', coordinates: '12.9698, 77.7499', savedDate: '2026-06-24' }
];

export default function FavoriteAddressMgmtPage() {
  const { addToast } = useToast();
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'user', label: 'Associated User Name', type: 'text', placeholder: 'e.g. John Doe', required: true },
    { name: 'type', label: 'Address Type Tag', type: 'select', required: true, options: [
      { value: 'Home', label: 'Home' },
      { value: 'Office', label: 'Office' },
      { value: 'Other', label: 'Other / Saved Location' }
    ]},
    { name: 'address', label: 'Detailed Postal Address', type: 'textarea', placeholder: 'Enter complete address...', required: true },
    { name: 'coordinates', label: 'Latitude, Longitude Coordinates', type: 'text', placeholder: 'e.g. 19.0544, 72.8291', required: true }
  ];

  const handleAddSave = (val) => {
    const newAdd = {
      ...val,
      id: `ADD-${Math.floor(600 + Math.random() * 100)}`,
      savedDate: new Date().toISOString().split('T')[0]
    };
    setAddresses([newAdd, ...addresses]);
    setSuccessMsg('Favorite address saved successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setAddresses(addresses.map(a => a.id === selectedAddress.id ? { ...a, ...updatedVal } : a));
    setSuccessMsg('Favorite address details updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setAddresses(addresses.filter(a => a.id !== selectedAddress.id));
    setSuccessMsg('Favorite address record deleted.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'User', 'Type Tag', 'Address', 'Coordinates', 'Date Saved'], addresses);
    triggerDownload(csvContent, 'saved_addresses.csv', 'text/csv');
    addToast('Saved locations CSV downloaded!', 'success');
  };

  const filteredAddresses = addresses.filter(a => {
    const matchesSearch = a.user.toLowerCase().includes(searchTerm.toLowerCase()) || a.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || a.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminShell activeTab="Favorite Address Management" headerTitle="Saved Locations Registry">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Customer Assets &gt; <span style={{ color: '#2A2454' }}>Favorite Addresses</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Favorite Address Registry</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review customer saved locations, geocoded addresses, and primary home/office destinations.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Saved Address
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Saved locations</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{addresses.length} Locations</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Home size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Home Addresses</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{addresses.filter(a => a.type === 'Home').length} Saved</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Office Addresses</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{addresses.filter(a => a.type === 'Office').length} Saved</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search user, address details..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Home', 'Office', 'Other'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setTypeFilter(tab)}
                style={{
                  padding: '8px 14px',
                  border: typeFilter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: typeFilter === tab ? '#e0e7ff' : '#fff',
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
                <th style={{ padding: '16px 24px' }}>LOCATION ID</th>
                <th style={{ padding: '16px 24px' }}>USER</th>
                <th style={{ padding: '16px 24px' }}>TYPE TAG</th>
                <th style={{ padding: '16px 24px' }}>DETAILED ADDRESS</th>
                <th style={{ padding: '16px 24px' }}>LAT, LNG</th>
                <th style={{ padding: '16px 24px' }}>DATE SAVED</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredAddresses.length > 0 ? (
                filteredAddresses.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.user}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.type === 'Home' ? '#d1fae5' : row.type === 'Office' ? '#e0f2fe' : '#f1f5f9',
                        color: row.type === 'Home' ? '#065f46' : row.type === 'Office' ? '#0369a1' : '#475569'
                      }}>
                        {row.type}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', fontWeight: '600', maxWidth: '350px' }}>{row.address}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>{row.coordinates}</td>
                    <td style={{ padding: '18px 24px', fontFamily: 'monospace' }}>{row.savedDate}</td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        <button onClick={() => addToast(`Opening map tracking for ${row.coordinates}...`, 'info')} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#4f46e5' }} title="Show on Maps">
                          <Map size={16} />
                        </button>
                        <button onClick={() => { setSelectedAddress(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedAddress(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedAddress(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No favorite address records found.</td>
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
        title="Add Favorite Address" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Address Details" 
        fields={formFields} 
        initialValues={selectedAddress} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`saved address record "${selectedAddress?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Saved Address Details" 
        data={{
          'Location ID': selectedAddress?.id,
          'User Owner': selectedAddress?.user,
          'Address Label Tag': selectedAddress?.type,
          'Detailed Postal Address': selectedAddress?.address,
          'Geolocated Coordinates': selectedAddress?.coordinates,
          'Saved Date': selectedAddress?.savedDate
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
