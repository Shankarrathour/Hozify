import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import Toggle from '../../components/common/Toggle';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal, WarningModal
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Map, Globe, Compass, Navigation
} from 'lucide-react';

const INITIAL_LOCATIONS = [
  { id: 'LOC-401', country: 'India', state: 'Maharashtra', city: 'Mumbai', pincode: '400001, 400050, 400051', radius: 15, status: 'Active' },
  { id: 'LOC-402', country: 'India', state: 'Delhi NCR', city: 'New Delhi', pincode: '110001, 110016, 110020', radius: 25, status: 'Active' },
  { id: 'LOC-403', country: 'India', state: 'Karnataka', city: 'Bengaluru', pincode: '560001, 560066, 560100', radius: 20, status: 'Active' },
  { id: 'LOC-404', country: 'India', state: 'Tamil Nadu', city: 'Chennai', pincode: '600001, 600002, 600018', radius: 18, status: 'Inactive' }
];

export default function LocationMgmtPage() {
  const { addToast } = useToast();
  const [locations, setLocations] = useState(INITIAL_LOCATIONS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [selectedLoc, setSelectedLoc] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  const formFields = [
    { name: 'country', label: 'Country Mapped', type: 'text', placeholder: 'e.g. India', required: true },
    { name: 'state', label: 'State / Territory Name', type: 'text', placeholder: 'e.g. Maharashtra', required: true },
    { name: 'city', label: 'City Hub', type: 'text', placeholder: 'e.g. Mumbai', required: true },
    { name: 'pincode', label: 'Allowed Pincodes List (Comma Separated)', type: 'textarea', placeholder: 'e.g. 400001, 400050', required: true },
    { name: 'radius', label: 'Service Operation Radius (KM)', type: 'number', placeholder: '15', required: true },
    { name: 'status', label: 'Active Coverage Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Permit Bookings)' },
      { value: 'Inactive', label: 'Inactive (Blackout Zone)' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newLoc = {
      ...val,
      radius: parseFloat(val.radius),
      id: `LOC-${Math.floor(400 + Math.random() * 100)}`
    };
    setLocations([newLoc, ...locations]);
    setSuccessMsg('Territory location details registered!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setLocations(locations.map(l => l.id === selectedLoc.id ? { ...l, ...updatedVal, radius: parseFloat(updatedVal.radius) } : l));
    setSuccessMsg('Location coverage parameter saved!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setLocations(locations.filter(l => l.id !== selectedLoc.id));
    setSuccessMsg('Territory location coverage mapping deleted.');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (row, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setLocations(locations.map(l => l.id === row.id ? { ...l, status: nextStatus } : l));
      setSuccessMsg(`Status set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Country', 'State', 'City', 'Pincodes', 'Radius (KM)', 'Status'], locations);
    triggerDownload(csvContent, 'locations.csv', 'text/csv');
    addToast('Territory configuration exported successfully!', 'success');
  };

  const filteredLocations = locations.filter(l => 
    l.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.pincode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell activeTab="Location Management" headerTitle="Geographical Coverage Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Operations &gt; <span style={{ color: '#2A2454' }}>Location Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Geographical Territory &amp; Radius Configuration</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure service coverage cities, active postal pincodes boundaries, and partner booking radiuses.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Register Territory
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Cities</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{locations.filter(l => l.status === 'Active').length} Cities</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Radius Limit</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>19.5 KM</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search city, state, pincode..." 
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
                <th style={{ padding: '16px 24px' }}>TERRITORY ID</th>
                <th style={{ padding: '16px 24px' }}>COUNTRY</th>
                <th style={{ padding: '16px 24px' }}>STATE / TERRITORY</th>
                <th style={{ padding: '16px 24px' }}>CITY HUB</th>
                <th style={{ padding: '16px 24px' }}>PINCODES LIST</th>
                <th style={{ padding: '16px 24px' }}>RADIUS</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredLocations.length > 0 ? (
                filteredLocations.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.country}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.state}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.city}</td>
                    <td style={{ padding: '18px 24px', color: 'var(--muted)', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.pincode}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>{row.radius} KM</td>
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
                        <button onClick={() => { setSelectedLoc(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedLoc(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedLoc(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No location records found.</td>
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
        title="Add Territory Coverage" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Territory Limits" 
        fields={formFields} 
        initialValues={selectedLoc} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`territory record "${selectedLoc?.city}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Territory Coverage Summary" 
        data={{
          'Location ID': selectedLoc?.id,
          'Country Name': selectedLoc?.country,
          'State Name': selectedLoc?.state,
          'City Hub': selectedLoc?.city,
          'Active Pincodes': selectedLoc?.pincode,
          'Coverage Radius': `${selectedLoc?.radius} KM`,
          'Status State': selectedLoc?.status
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
        title="Territory Coverage Surcharge Warning" 
        message="Deactivating a territory blacks out client bookings inside these zones immediately. Proceed?" 
        onConfirm={warningAction} 
      />

    </AdminShell>
  );
}
