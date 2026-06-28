import React, { useState } from 'react';
import AdminShell from '../../../../../components/layouts/AdminShell';
import Toggle from '../../../../../components/common/Toggle';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  SuccessModal,
  WarningModal
} from '../../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../../../../utils/downloadHelper';
import { Search, Plus, Download, Edit, Trash2, Eye, Calendar, UploadCloud, Smartphone, ArrowUpDown, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

const INITIAL_BANNERS = [
  { id: 'BAN-101', name: 'Monsoon Service Discount', type: 'Offer Banner', status: 'Active', start: '2026-06-01', end: '2026-08-31', size: '240 KB', ctr: '4.8%', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
  { id: 'BAN-102', name: 'Electrician Special Launch', type: 'Home Banner', status: 'Active', start: '2026-06-15', end: '2026-07-15', size: '180 KB', ctr: '5.2%', img: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80' },
  { id: 'BAN-103', name: 'Partner Recruitment Drive', type: 'Marketing Banner', status: 'Inactive', start: '2026-05-01', end: '2026-05-30', size: '310 KB', ctr: '2.1%', img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&q=80' },
  { id: 'BAN-104', name: 'SOS Emergency Direct Call Promo', type: 'Promotional Banner', status: 'Active', start: '2026-01-01', end: '2026-12-31', size: '120 KB', ctr: '8.4%', img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&q=80' },
  { id: 'BAN-105', name: 'GST Vendor Registration Hub', type: 'Marketing Banner', status: 'Active', start: '2026-03-10', end: '2026-09-30', size: '205 KB', ctr: '3.6%', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80' }
];

const getTabFromDefault = (def) => {
  if (!def) return 'Home Banner';
  switch (def.toLowerCase()) {
    case 'home': return 'Home Banner';
    case 'offer': return 'Offer Banner';
    case 'promotional': return 'Promotional Banner';
    case 'marketing': return 'Marketing Banner';
    case 'upload': return 'Upload Banner';
    case 'preview': return 'Banner Preview';
    case 'scheduling': return 'Banner Scheduling';
    case 'status': return 'Banner Status';
    default: return 'Home Banner';
  }
};

export default function BannerMgmtPage({ defaultTab }) {
  const [banners, setBanners] = useState(INITIAL_BANNERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(() => getTabFromDefault(defaultTab));

  React.useEffect(() => {
    if (defaultTab) {
      setActiveTab(getTabFromDefault(defaultTab));
    }
  }, [defaultTab]);
  const [selectedPreviewBanner, setSelectedPreviewBanner] = useState(INITIAL_BANNERS[0]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [selectedBanner, setSelectedBanner] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Stats
  const totalBanners = banners.length;
  const activeBanners = banners.filter(b => b.status === 'Active').length;
  const scheduledBanners = banners.filter(b => b.start && b.end).length;

  // Form Fields
  const formFields = [
    { name: 'name', label: 'Banner Campaign Name', type: 'text', placeholder: 'Enter campaign title', required: true, maxLength: 40 },
    { name: 'type', label: 'Placement Target', type: 'select', required: true, options: [
      { value: 'Home Banner', label: 'Home Banner' },
      { value: 'Offer Banner', label: 'Offer Banner' },
      { value: 'Promotional Banner', label: 'Promotional Banner' },
      { value: 'Marketing Banner', label: 'Marketing Banner' }
    ]},
    { name: 'start', label: 'Start Date', type: 'date', required: true },
    { name: 'end', label: 'End Date', type: 'date', required: true }
  ];

  // Actions
  const handleAddSave = (val) => {
    const newBan = {
      ...val,
      id: `BAN-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Active',
      size: '150 KB',
      ctr: '0.0%',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80'
    };
    setBanners(prev => [newBan, ...prev]);
    setSuccessMessage('Banner campaign added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setBanners(prev => prev.map(b => b.id === selectedBanner.id ? { ...b, ...updatedVal } : b));
    setSuccessMessage('Banner details updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setBanners(prev => prev.filter(b => b.id !== selectedBanner.id));
    setSuccessMessage('Banner campaign deleted!');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (banner, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setBanners(prev => prev.map(b => b.id === banner.id ? { ...b, status: nextStatus } : b));
      setSuccessMessage(`Banner status changed to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleUploadBannerAsset = () => {
    if (!uploadFile) return;
    setSuccessMessage(`Banner asset "${uploadFile.name}" uploaded successfully!`);
    setIsSuccessOpen(true);
    setUploadFile(null);
  };

  const handleDownload = (banner) => {
    triggerDownload(`IMAGE EXPORT FOR BANNER: ${banner.name}\nSource URL: ${banner.img}`, `banner_${banner.id.toLowerCase()}.txt`, 'text/plain');
    setSuccessMessage(`Banner graphic file for "${banner.name}" downloaded successfully!`);
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const isMainTab = ['Home Banner', 'Offer Banner', 'Promotional Banner', 'Marketing Banner'].includes(activeTab);
    const dataToExport = isMainTab ? banners.filter(b => b.type === activeTab) : banners;
    const csv = generateCSV(['ID', 'Name', 'Type', 'Status', 'Start', 'End', 'Size', 'CTR'], dataToExport);
    const filename = isMainTab ? `${activeTab.toLowerCase().replace(/ /g, '_')}_export.csv` : 'banner_inventory.csv';
    triggerDownload(csv, filename, 'text/csv');
    setSuccessMessage(`${isMainTab ? activeTab : 'Banner inventory'} exported successfully! "${filename}" downloaded.`);
    setIsSuccessOpen(true);
  };

  const TABS = [
    'Home Banner',
    'Offer Banner',
    'Promotional Banner',
    'Marketing Banner',
    'Upload Banner',
    'Banner Preview',
    'Banner Scheduling',
    'Banner Status'
  ];

  const filteredBanners = banners.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'Home Banner' || activeTab === 'Offer Banner' || activeTab === 'Promotional Banner' || activeTab === 'Marketing Banner') {
      return matchesSearch && b.type === activeTab;
    }
    return matchesSearch;
  });

  return (
    <AdminShell activeTab="CMS" headerTitle="Banner Control Center">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#2A2454' }}>Banner Management</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Banner Control Panel - {activeTab}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure advertising slots, upload display graphics, and verify mobile layout spacing.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Banner
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
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Banners Count</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalBanners}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active/Visible</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{activeBanners}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Scheduled Interval</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{scheduledBanners}</h2>
            </div>
          </div>
        </div>

        {/* 8 Tab Navigation */}
        <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid var(--line)', paddingBottom: '1px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 16px',
                border: 'none',
                background: 'none',
                fontSize: '12px',
                fontWeight: '700',
                color: activeTab === tab ? '#2A2454' : '#64748b',
                borderBottom: activeTab === tab ? '2px solid #2A2454' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {activeTab === 'Upload Banner' ? (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <div 
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              style={{
                border: dragActive ? '2px dashed #4f46e5' : '2px dashed #cbd5e1',
                background: dragActive ? '#f5f3ff' : '#f8fafc',
                borderRadius: '8px',
                padding: '60px 20px',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              <UploadCloud size={40} style={{ color: '#4f46e5', marginBottom: '16px' }} />
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>Drag and drop banner graphic here, or click to browse</p>
              <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>PNG, JPG, JPEG formats accepted (Max: 2MB)</p>
            </div>
            {uploadFile && (
              <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '400px', margin: '0 auto 20px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#166534' }}>{uploadFile.name}</span>
                <button onClick={() => setUploadFile(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#166534', fontWeight: '700' }}>X</button>
              </div>
            )}
            <button 
              onClick={handleUploadBannerAsset} 
              disabled={!uploadFile}
              style={{ padding: '10px 24px', background: uploadFile ? '#4f46e5' : '#cbd5e1', color: '#fff', border: 'none', borderRadius: '8px', cursor: uploadFile ? 'pointer' : 'not-allowed', fontWeight: '700', fontSize: '13px' }}
            >
              Upload Graphic
            </button>
          </div>
        ) : activeTab === 'Banner Preview' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px' }}>
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0' }}>Select Banner to Preview</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
                {banners.map(b => (
                  <div 
                    key={b.id} 
                    onClick={() => setSelectedPreviewBanner(b)}
                    style={{ 
                      border: selectedPreviewBanner?.id === b.id ? '2px solid #4f46e5' : '1px solid #cbd5e1', 
                      borderRadius: '8px', 
                      overflow: 'hidden', 
                      cursor: 'pointer',
                      background: '#fff'
                    }}
                  >
                    <img src={b.img} alt={b.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                    <div style={{ padding: '10px', fontSize: '12px', fontWeight: '700' }}>{b.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Phone mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '280px', height: '500px', border: '12px solid #1e293b', borderRadius: '36px', overflow: 'hidden', position: 'relative', background: '#f8fafc', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                {/* Speaker */}
                <div style={{ width: '60px', height: '12px', background: '#1e293b', borderRadius: '0 0 6px 6px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }} />
                {/* App Screen mock */}
                <div style={{ padding: '24px 12px 12px 12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#4f46e5' }}>HOZIFY</span>
                    <Smartphone size={14} style={{ color: '#64748b' }} />
                  </div>
                  {/* Banner Rendering mock */}
                  {selectedPreviewBanner ? (
                    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                      <img src={selectedPreviewBanner.img} alt="Preview" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px', background: '#fff', fontSize: '10px', fontWeight: '800' }}>
                        {selectedPreviewBanner.name}
                      </div>
                    </div>
                  ) : (
                    <div style={{ height: '120px', background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#94a3b8' }}>
                      No banner selected
                    </div>
                  )}
                  <div style={{ flex: 1, background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '10px', fontSize: '10px', color: '#94a3b8' }}>
                    Home screen content feed...
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '12px', fontWeight: '600' }}>Simulated Mobile Layout</span>
            </div>
          </div>
        ) : activeTab === 'Banner Scheduling' ? (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0' }}>Banner Campaigns Publishing Schedules</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {banners.map(b => (
                <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Calendar size={16} style={{ color: '#4f46e5' }} />
                    <div>
                      <strong style={{ fontSize: '13px', color: 'var(--text)' }}>{b.name}</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)' }}>Type: {b.type}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>
                    {b.start} to {b.end}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* List & Table view for types and status */
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                <input 
                  type="text" 
                  placeholder="Search campaigns..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px 8px 36px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
                />
                <Search size={14} style={{ position: 'absolute', left: '12px', top: '11px', color: '#94a3b8' }} />
              </div>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                  <tr className="custom-table-header">
                    <th style={{ padding: '16px 24px' }}>BANNER ID</th>
                    <th style={{ padding: '16px 24px' }}>CAMPAIGN DETAILS</th>
                    <th style={{ padding: '16px 24px' }}>PLACEMENT</th>
                    <th style={{ padding: '16px 24px' }}>STATUS</th>
                    <th style={{ padding: '16px 24px' }}>FILE SIZE</th>
                    <th style={{ padding: '16px 24px' }}>CTR</th>
                    <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBanners.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <img src={row.img} alt={row.name} style={{ width: '48px', height: '32px', borderRadius: '4px', objectFit: 'cover', border: '1px solid #cbd5e1' }} />
                          {row.name}
                        </div>
                      </td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.type}</td>
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
                          {activeTab === 'Banner Status' && (
                            <Toggle 
                              checked={row.status === 'Active'} 
                              onChange={(checked) => handleStatusToggle(row, checked)} 
                            />
                          )}
                        </div>
                      </td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.size}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '800', color: '#4f46e5', fontFamily: 'monospace' }}>{row.ctr}</td>
                      <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button onClick={() => { setSelectedBanner(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                          <button onClick={() => handleDownload(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Download file"><Download size={16} /></button>
                          <button onClick={() => { setSelectedBanner(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add New Banner Campaign" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Banner Campaign Details" 
        fields={formFields} 
        initialValues={selectedBanner} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`banner ${selectedBanner?.name}`} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMessage} 
      />

      <WarningModal 
        isOpen={isWarningOpen} 
        onClose={() => setIsWarningOpen(false)} 
        title="Banner Visibility Override" 
        message="Changing this banner status will modify layout renders for mobile app clients instantly. Proceed?" 
        onConfirm={warningAction} 
      />
    </AdminShell>
  );
}
