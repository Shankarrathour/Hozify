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
import { Search, Plus, Download, Edit, Trash2, Eye, Smartphone, AlertTriangle, ArrowUpDown, ChevronLeft, ChevronRight, Database, Settings, CheckCircle2, Layers } from 'lucide-react';

const INITIAL_CONFIGS = [
  { id: 'UC-101', category: 'User Configuration', key: 'USER_BOOKING_SLOT_INTERVAL_MINS', value: '60', status: 'Active', description: 'Sets duration between available booking slots on customer application.' },
  { id: 'UC-102', category: 'User Features', key: 'USER_SOS_DIRECT_AUTHORITY_DIAL', value: 'true', status: 'Active', description: 'Enables user to bypass support executive and directly dial emergency authority.' },
  { id: 'UC-103', category: 'User Menus', key: 'USER_MENU_INFLUENCER_REWARDS', value: 'false', status: 'Inactive', description: 'Toggles visibility of Influencer Referral tab in sidebar menu.' },
  { id: 'UC-104', category: 'App Version', key: 'USER_ANDROID_MIN_VERSION_REQUIRED', value: '3.1.0', status: 'Active', description: 'Forces app update on play store if client app version is below this value.' },
  { id: 'UC-105', category: 'App Version', key: 'USER_IOS_TARGET_VERSION', value: '4.2.0', status: 'Active', description: 'Recommended latest release build for iOS devices.' },
  { id: 'UC-106', category: 'User Configuration', key: 'USER_MAX_ACTIVE_BOOKINGS_LIMIT', value: '3', status: 'Active', description: 'Maximum open bookings a customer can hold concurrently.' },
  { id: 'UC-107', category: 'User Features', key: 'USER_CHAT_WITH_TECHNICIAN', value: 'true', status: 'Active', description: 'Enables real-time client-to-partner instant chat.' },
  { id: 'UC-108', category: 'User Features', key: 'USER_MULTILINGUAL_UI', value: 'true', status: 'Active', description: 'Enables regional language selector in user account profile settings.' },
  { id: 'UC-109', category: 'User Menus', key: 'USER_MENU_SAVED_CARDS', value: 'true', status: 'Active', description: 'Toggles Payment Cards list inside sidebar menu.' },
  { id: 'UC-110', category: 'User Menus', key: 'USER_MENU_FAVORITE_PROS', value: 'true', status: 'Active', description: 'Toggles "My Preferred Pros" list inside sidebar menu.' },
  { id: 'UC-111', category: 'App Version', key: 'USER_IOS_MIN_VERSION_REQUIRED', value: '3.0.0', status: 'Active', description: 'Forces iOS update if build version is below this.' },
  { id: 'UC-112', category: 'App Version', key: 'USER_ANDROID_TARGET_VERSION', value: '4.2.0', status: 'Active', description: 'Latest verified build released on Google Play Store.' }
];

export default function UserAppPage({ defaultTab = 'config' }) {
  const [configs, setConfigs] = useState(INITIAL_CONFIGS);
  const [searchTerm, setSearchTerm] = useState('');
  
  const getTabLabel = (t) => {
    if (t === 'features') return 'User Features';
    if (t === 'menus') return 'User Menus';
    if (t === 'version') return 'App Version';
    return 'User Configuration';
  };

  const [activeTab, setActiveTab] = useState(() => getTabLabel(defaultTab));

  React.useEffect(() => {
    setActiveTab(getTabLabel(defaultTab));
  }, [defaultTab]);
  const [sortField, setSortField] = useState('key');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Modal States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [selectedConfig, setSelectedConfig] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Statistics
  const totalKeys = configs.length;
  const activeKeys = configs.filter(c => c.status === 'Active').length;
  const menuToggles = configs.filter(c => c.category === 'User Menus').length;
  const versionKeys = configs.filter(c => c.category === 'App Version').length;

  const formFields = [
    { name: 'key', label: 'Configuration Key (Uppercase)', type: 'text', placeholder: 'e.g. USER_MAX_ORDERS', required: true, maxLength: 40 },
    { name: 'category', label: 'App Category', type: 'select', required: true, options: [
      { value: 'User Configuration', label: 'User Configuration' },
      { value: 'User Features', label: 'User Features' },
      { value: 'User Menus', label: 'User Menus' },
      { value: 'App Version', label: 'App Version' }
    ]},
    { name: 'value', label: 'Configuration Value', type: 'text', placeholder: 'e.g. 5 or true', required: true, maxLength: 30 },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Propagated)' },
      { value: 'Inactive', label: 'Inactive' }
    ]},
    { name: 'description', label: 'Key Purpose Details', type: 'textarea', placeholder: 'Describe configuration influence...', required: true, maxLength: 120 }
  ];

  // Actions
  const handleAddSave = (val) => {
    const newConf = {
      ...val,
      id: `UC-${Date.now()}`
    };
    setConfigs(prev => [newConf, ...prev]);
    setSuccessMessage(`Configuration key ${val.key} registered successfully!`);
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setConfigs(prev => prev.map(c => c.id === selectedConfig.id ? { ...c, ...updatedVal } : c));
    setSuccessMessage('Configuration details updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setConfigs(prev => prev.filter(c => c.id !== selectedConfig.id));
    setSuccessMessage('Configuration node deleted!');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (config, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setConfigs(prev => prev.map(c => c.id === config.id ? { ...c, status: nextStatus } : c));
      setSuccessMessage(`User app configuration ${config.key} set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const activeConfigs = configs.filter(c => c.category === activeTab);
    const csvContent = generateCSV(['Key', 'Category', 'Value', 'Status', 'Description'], activeConfigs);
    const filename = `${activeTab.toLowerCase().replace(/ /g, '_')}_export.csv`;
    triggerDownload(csvContent, filename, 'text/csv');
    setSuccessMessage(`${activeTab} data exported successfully! file "${filename}" downloaded.`);
    setIsSuccessOpen(true);
  };

  const handleDownloadJSON = () => {
    const activeConfigs = configs.filter(c => c.category === activeTab);
    const filename = `${activeTab.toLowerCase().replace(/ /g, '_')}_export.json`;
    triggerDownload(JSON.stringify(activeConfigs, null, 2), filename, 'application/json');
    setSuccessMessage(`${activeTab} JSON configuration downloaded successfully! file "${filename}" downloaded.`);
    setIsSuccessOpen(true);
  };

  // Sort & Filter
  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredConfigs = configs
    .filter(c => {
      const matchSearch = c.key.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchTab = c.category === activeTab;
      return matchSearch && matchTab;
    })
    .sort((a, b) => {
      const aVal = a[sortField]?.toLowerCase() || '';
      const bVal = b[sortField]?.toLowerCase() || '';
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  // Pagination
  const totalPages = Math.ceil(filteredConfigs.length / itemsPerPage);
  const currentItems = filteredConfigs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AdminShell activeTab="CMS" headerTitle="User App Configuration Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; User App &gt; <span style={{ color: '#2A2454' }}>{activeTab}</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">User App Management - {activeTab}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure consumer application layouts, enable features, and schedule playstore forced updates.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleDownloadJSON} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Download JSON
            </button>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Config
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Configurations</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalKeys} Keys</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active/Propagated</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{activeKeys} Active</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sidebar Nodes</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{menuToggles} Nodes</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Target Release</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>v4.2.0</h2>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--line)', paddingBottom: '1px' }}>
          {['User Configuration', 'User Features', 'User Menus', 'App Version'].map(tab => (
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
        {activeTab === 'User Configuration' && (
          <>
            {/* Search */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                <input 
                  type="text" 
                  placeholder="Search keys..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
                />
                <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
              </div>
            </div>

            {/* Configs Table */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                  <thead>
                    <tr className="custom-table-header">
                      <th onClick={() => toggleSort('key')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                        CONFIG KEY <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                      </th>
                      <th style={{ padding: '16px 24px' }}>VALUE</th>
                      <th style={{ padding: '16px 24px' }}>STATUS</th>
                      <th style={{ padding: '16px 24px' }}>CATEGORY</th>
                      <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map(row => (
                        <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#1e1b4b' }}>
                            {row.key}
                            <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '4px' }}>
                              {row.description}
                            </span>
                          </td>
                          <td style={{ padding: '18px 24px', fontWeight: '700', color: '#4f46e5', fontFamily: 'monospace' }}>{row.value}</td>
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
                          <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.category}</td>
                          <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button onClick={() => { setSelectedConfig(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                              <button onClick={() => { setSelectedConfig(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                              <button onClick={() => { setSelectedConfig(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No configuration keys found under this tab.</td>
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

        {activeTab === 'User Features' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {configs.filter(c => c.category === 'User Features').map(feat => (
              <div key={feat.id} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#1e1b4b', margin: '0 0 4px 0' }}>{feat.key.replace('USER_', '').replace(/_/g, ' ')}</h3>
                    <code style={{ fontSize: '11px', color: '#4f46e5', fontWeight: '700' }}>{feat.key}</code>
                  </div>
                  <Toggle 
                    checked={feat.status === 'Active'} 
                    onChange={(checked) => handleStatusToggle(feat, checked)} 
                  />
                </div>
                <p style={{ fontSize: '12px', color: '#475569', margin: 0, flexGrow: 1 }}>{feat.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: feat.status === 'Active' ? '#065f46' : '#64748b', background: feat.status === 'Active' ? '#d1fae5' : '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                    {feat.status === 'Active' ? 'ROLLOUT: ACTIVE' : 'DISABLED'}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button onClick={() => { setSelectedConfig(feat); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#475569' }}><Edit size={14} /></button>
                    <button onClick={() => { setSelectedConfig(feat); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }}><Trash2 size={14} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'User Menus' && (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#1e1b4b' }}>User Portal Sidebar Navigation Nodes</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {configs.filter(c => c.category === 'User Menus').map((menu, idx) => (
                <div key={menu.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: idx < configs.filter(c => c.category === 'User Menus').length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '36px', height: '36px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                      <Smartphone size={16} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '13px', color: '#1e1b4b', display: 'block' }}>{menu.key.replace('USER_MENU_', '').replace(/_/g, ' ')}</strong>
                      <code style={{ fontSize: '11px', color: '#64748b' }}>{menu.description}</code>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#4f46e5', fontFamily: 'monospace' }}>VALUE: {menu.value}</span>
                    <Toggle 
                      checked={menu.status === 'Active'} 
                      onChange={(checked) => handleStatusToggle(menu, checked)} 
                    />
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button onClick={() => { setSelectedConfig(menu); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#475569' }}><Edit size={14} /></button>
                      <button onClick={() => { setSelectedConfig(menu); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'App Version' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Android Release control */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', background: '#d1fae5', color: '#065f46', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>A</div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e1b4b', margin: 0 }}>Android Version Control</h3>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>Google Play Store release parameters</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px 0' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '6px' }}>MINIMUM REQUIRED VERSION</label>
                  <input type="text" defaultValue="3.1.0" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', outline: 'none', fontWeight: '700' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '6px' }}>RECOMMENDED TARGET VERSION</label>
                  <input type="text" defaultValue="4.2.0" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', outline: 'none', fontWeight: '700' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569' }}>FORCE MIN VERSION UPDATE</span>
                  <Toggle checked={true} onChange={() => {}} />
                </div>
              </div>
              <button onClick={() => { setSuccessMessage('Android release requirements updated on production gateway!'); setIsSuccessOpen(true); }} className="custom-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Save Android Parameters
              </button>
            </div>

            {/* iOS Release control */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', background: '#f1f5f9', color: '#334155', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>I</div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e1b4b', margin: 0 }}>iOS Version Control</h3>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>Apple App Store release parameters</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px 0' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '6px' }}>MINIMUM REQUIRED VERSION</label>
                  <input type="text" defaultValue="3.0.0" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', outline: 'none', fontWeight: '700' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '6px' }}>RECOMMENDED TARGET VERSION</label>
                  <input type="text" defaultValue="4.2.0" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', outline: 'none', fontWeight: '700' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569' }}>FORCE MIN VERSION UPDATE</span>
                  <Toggle checked={true} onChange={() => {}} />
                </div>
              </div>
              <button onClick={() => { setSuccessMessage('iOS App Store release requirements updated on production gateway!'); setIsSuccessOpen(true); }} className="custom-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Save iOS Parameters
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add User App Configuration" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Configuration Parameter" 
        fields={formFields} 
        initialValues={selectedConfig} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`configuration ${selectedConfig?.key}`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title={`Configuration ${selectedConfig?.key} Overview`} 
        data={{
          'Config Key': selectedConfig?.key,
          'Category': selectedConfig?.category,
          'Value': selectedConfig?.value,
          'Status': selectedConfig?.status,
          'Details': selectedConfig?.description
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
        title="Trigger Forced Ingestion Warning" 
        message="Changing this configuration alters operational layouts immediately on client mobile applications. Do you wish to continue?" 
        onConfirm={warningAction} 
      />
    </AdminShell>
  );
}
