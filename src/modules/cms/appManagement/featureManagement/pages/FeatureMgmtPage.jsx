import React, { useState } from 'react';
import AdminShell from '../../../../../components/layouts/AdminShell';
import Toggle from '../../../../../components/common/Toggle';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  SuccessModal, 
  WarningModal,
  PreviewModal
} from '../../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../../../../utils/downloadHelper';
import { Search, Plus, Download, Edit, Trash2, Eye, ShieldAlert, ArrowUpDown, ChevronLeft, ChevronRight, Settings, CheckCircle2, Layers } from 'lucide-react';

const INITIAL_FEATURES = [
  { id: 'FT-301', name: 'Technician Live Tracking Map', key: 'FEATURE_MAP_LIVE_TRACKING', target: 'All Users', status: 'Active', version: 'v3.2.0', description: 'Displays actual technician travel coordinates on user active jobs screen.' },
  { id: 'FT-302', name: 'Influencer Referral Cashback', key: 'FEATURE_INFLUENCER_CASHBACK', target: 'Beta Group', status: 'Inactive', version: 'v3.3.0', description: 'Enables double reward cash dispersion under verified referrers.' },
  { id: 'FT-303', name: 'GST Invoice Bulk Ingestion', key: 'FEATURE_BULK_GST_INGESTION', target: '50% Rollout', status: 'Active', version: 'v3.1.0', description: 'Automates wholesale GST documentation downloads for BSP sellers.' },
  { id: 'FT-304', name: 'Direct SOS Dispatch Integration', key: 'FEATURE_SOS_DIRECT_DISPATCH', target: 'All Users', status: 'Active', version: 'v3.0.0', description: 'Bypasses support queue and triggers immediate local dispatch alert.' },
  { id: 'FT-305', name: 'Beta Material Cost Optimizer', key: 'FEATURE_BETA_MATERIAL_OPTIMIZER', target: 'Beta Group', status: 'Inactive', version: 'v3.4.0-beta', description: 'Uses historical vendor quotation models to suggest minimum purchase orders.' }
];

const getTabLabel = (t) => {
  if (!t) return 'Feature Toggle';
  switch (t.toLowerCase()) {
    case 'enable': return 'Enable Feature';
    case 'disable': return 'Disable Feature';
    case 'beta': return 'Beta Features';
    case 'version': return 'Version Features';
    case 'toggle':
    default:
      return 'Feature Toggle';
  }
};

export default function FeatureMgmtPage({ defaultTab }) {
  const [features, setFeatures] = useState(INITIAL_FEATURES);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(() => getTabLabel(defaultTab));

  React.useEffect(() => {
    if (defaultTab) {
      setActiveTab(getTabLabel(defaultTab));
    }
  }, [defaultTab]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [selectedFeature, setSelectedFeature] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Statistics
  const totalFeatures = features.length;
  const activeFeatures = features.filter(f => f.status === 'Active').length;
  const betaFeaturesCount = features.filter(f => f.target === 'Beta Group').length;

  const formFields = [
    { name: 'name', label: 'Feature Display Name', type: 'text', placeholder: 'e.g. UPI Split Settlement', required: true, maxLength: 40 },
    { name: 'key', label: 'Technical Flag Key (Uppercase)', type: 'text', placeholder: 'e.g. FEATURE_UPI_SPLIT', required: true, maxLength: 40 },
    { name: 'target', label: 'Rollout Target', type: 'select', required: true, options: [
      { value: 'All Users', label: 'All Users (Production)' },
      { value: 'Beta Group', label: 'Beta Group / Internal Testers' },
      { value: '10% Rollout', label: '10% Rollout' },
      { value: '50% Rollout', label: '50% Rollout' }
    ]},
    { name: 'status', label: 'Initial State', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (ON)' },
      { value: 'Inactive', label: 'Inactive (OFF)' }
    ]},
    { name: 'version', label: 'Min Compatibility Version', type: 'text', placeholder: 'e.g. v3.2.0', required: true, maxLength: 8 },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Feature toggle purpose...', required: true, maxLength: 100 }
  ];

  // Actions
  const handleAddSave = (val) => {
    const newFeat = {
      ...val,
      id: `FT-${Date.now()}`
    };
    setFeatures(prev => [newFeat, ...prev]);
    setSuccessMessage(`Feature toggle flag ${val.key} registered and enabled!`);
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setFeatures(prev => prev.map(f => f.id === selectedFeature.id ? { ...f, ...updatedVal } : f));
    setSuccessMessage('Feature flag configurations updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setFeatures(prev => prev.filter(f => f.id !== selectedFeature.id));
    setSuccessMessage('Feature toggle flag removed from database!');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (feature, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setFeatures(prev => prev.map(f => f.id === feature.id ? { ...f, status: nextStatus } : f));
      setSuccessMessage(`Feature flag ${feature.key} set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const csvContent = generateCSV(['Key', 'Name', 'Target', 'Status', 'Version', 'Description'], displayItems);
    const filename = `${activeTab.toLowerCase().replace(/ /g, '_')}_export.csv`;
    triggerDownload(csvContent, filename, 'text/csv');
    setSuccessMessage(`${activeTab} flags exported successfully! file "${filename}" downloaded.`);
    setIsSuccessOpen(true);
  };

  const handleDownloadJSON = () => {
    const filename = `${activeTab.toLowerCase().replace(/ /g, '_')}_export.json`;
    triggerDownload(JSON.stringify(displayItems, null, 2), filename, 'application/json');
    setSuccessMessage(`${activeTab} JSON configuration downloaded successfully! file "${filename}" downloaded.`);
    setIsSuccessOpen(true);
  };

  // Filters based on SOW Tabs
  const getFilteredItems = () => {
    const matchSearch = f => f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             f.key.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === 'Feature Toggle' || activeTab === 'Version Features') {
      return features.filter(matchSearch);
    }
    if (activeTab === 'Enable Feature') {
      return features.filter(f => f.status === 'Active' && matchSearch(f));
    }
    if (activeTab === 'Disable Feature') {
      return features.filter(f => f.status === 'Inactive' && matchSearch(f));
    }
    if (activeTab === 'Beta Features') {
      return features.filter(f => f.target === 'Beta Group' && matchSearch(f));
    }
    return features;
  };

  const displayItems = getFilteredItems();
  const totalPages = Math.ceil(displayItems.length / itemsPerPage);
  const currentItems = displayItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const TABS = [
    'Feature Toggle',
    'Enable Feature',
    'Disable Feature',
    'Beta Features',
    'Version Features'
  ];

  return (
    <AdminShell activeTab="CMS" headerTitle="Feature Management Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#2A2454' }}>Feature Management</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Feature Flag Console - {activeTab}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Deploy live updates, toggle features instantly, and audit version compatibilities.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleDownloadJSON} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Download JSON
            </button>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Register Flag
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Feature Flags</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalFeatures}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active (ON)</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{activeFeatures}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Beta Test Flags</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{betaFeaturesCount}</h2>
            </div>
          </div>
        </div>

        {/* SOW Specific Navigation */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--line)', paddingBottom: '1px' }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
              style={{
                padding: '12px 20px',
                border: 'none',
                background: 'none',
                fontSize: '13px',
                fontWeight: '700',
                color: activeTab === tab ? '#2A2454' : '#64748b',
                borderBottom: activeTab === tab ? '2px solid #2A2454' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Specific Content */}
        {(activeTab === 'Feature Toggle' || activeTab === 'Enable Feature' || activeTab === 'Disable Feature') && (
          <>
            {/* Search */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                <input 
                  type="text" 
                  placeholder="Search technical flags..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
                />
                <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
              </div>
            </div>

            {/* Responsive Table */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                  <thead>
                    <tr className="custom-table-header">
                      <th style={{ padding: '16px 24px' }}>TECHNICAL FLAG KEY</th>
                      <th style={{ padding: '16px 24px' }}>FEATURE NAME</th>
                      <th style={{ padding: '16px 24px' }}>ROLLOUT TARGET</th>
                      <th style={{ padding: '16px 24px' }}>STATUS</th>
                      <th style={{ padding: '16px 24px' }}>COMPATIBILITY</th>
                      <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map(row => (
                        <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>
                            {row.key}
                            <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '4px' }}>
                              {row.description}
                            </span>
                          </td>
                          <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.name}</td>
                          <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.target}</td>
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
                          <td style={{ padding: '18px 24px', fontWeight: '600', fontFamily: 'monospace' }}>{row.version}</td>
                          <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button onClick={() => { setSelectedFeature(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                              <button onClick={() => { setSelectedFeature(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                              <button onClick={() => { setSelectedFeature(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No features logged under this category tab.</td>
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
          </>
        )}

        {activeTab === 'Beta Features' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1e1b4b', margin: '0 0 16px 0' }}>Beta Targets Configuration</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {features.filter(f => f.target === 'Beta Group').map(feat => (
                  <div key={feat.id} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ fontSize: '14px', color: '#1e1b4b', display: 'block' }}>{feat.name}</strong>
                      <code style={{ fontSize: '11px', color: '#4f46e5' }}>{feat.key}</code>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '800', background: '#fef3c7', color: '#d97706', padding: '2px 6px', borderRadius: '4px' }}>BETA TARGET</span>
                      <Toggle checked={feat.status === 'Active'} onChange={(checked) => handleStatusToggle(feat, checked)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#1e1b4b', margin: 0 }}>Authorized Beta User Pool</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  placeholder="tester@example.com" 
                  id="betaEmailInput"
                  style={{ flex: 1, padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', outline: 'none' }} 
                />
                <button 
                  onClick={() => { 
                    const inp = document.getElementById('betaEmailInput');
                    if (inp && inp.value) {
                      setSuccessMessage(`User "${inp.value}" whitelisted as a verified beta tester!`);
                      setIsSuccessOpen(true);
                      inp.value = '';
                    }
                  }} 
                  className="custom-btn-primary"
                >
                  Whitelist
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                {['alex.sterling@hozify.com', 'partner-tester-9@hozify.in', 'vip-customer@gmail.com', 'internal-qa-lead@hozify.com'].map(email => (
                  <div key={email} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f8fafc', borderRadius: '6px', fontSize: '12px' }}>
                    <span style={{ fontWeight: '600', color: '#334155' }}>{email}</span>
                    <button onClick={() => { setSuccessMessage(`Removed beta privileges for ${email}`); setIsSuccessOpen(true); }} style={{ border: 'none', background: 'none', color: '#ef4444', fontWeight: '800', cursor: 'pointer' }}>Revoke</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Version Features' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {['v3.0.0', 'v3.1.0', 'v3.2.0', 'v3.3.0', 'v3.4.0-beta'].map(ver => {
              const matchingFeats = features.filter(f => f.version === ver);
              return (
                <div key={ver} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px', marginBottom: '16px' }}>
                    <div style={{ padding: '4px 10px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '6px', fontSize: '12px', fontWeight: '800', fontFamily: 'monospace' }}>RELEASE BUILD {ver}</div>
                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>{matchingFeats.length} Mapped Features</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {matchingFeats.length > 0 ? (
                      matchingFeats.map(feat => (
                        <div key={feat.id} style={{ padding: '12px', border: '1px solid #f1f5f9', borderRadius: '8px', background: '#f8fafc' }}>
                          <strong style={{ fontSize: '13px', color: '#1e1b4b', display: 'block', marginBottom: '4px' }}>{feat.name}</strong>
                          <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '8px' }}>{feat.description}</span>
                          <code style={{ fontSize: '10px', color: '#4f46e5', fontWeight: '700' }}>{feat.key}</code>
                        </div>
                      ))
                    ) : (
                      <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>No feature flags registered for this platform target release version.</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Register Feature Toggle Flag" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Feature Configuration" 
        fields={formFields} 
        initialValues={selectedFeature} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`feature flag ${selectedFeature?.key}`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title={`Feature ${selectedFeature?.key} Overview`} 
        data={{
          'Feature Name': selectedFeature?.name,
          'Technical Key': selectedFeature?.key,
          'Rollout Target': selectedFeature?.target,
          'Toggle Status': selectedFeature?.status,
          'Compatibility': selectedFeature?.version,
          'Flag Details': selectedFeature?.description
        }} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMessage} 
      />

      <WarningModal 
        isOpen={isWarningOpen} 
        onClose={() => setIsWarningOpen(false)} 
        title="CRITICAL TOGGLE STATE UPDATE" 
        message="Modifying this feature flag status will immediately alter client app access routes. Active technician sessions or user checkouts might be impacted. Proceed?" 
        onConfirm={warningAction} 
      />
    </AdminShell>
  );
}
