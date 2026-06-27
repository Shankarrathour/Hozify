import React, { useState } from 'react';
import AdminShell from '../../../../../components/layouts/AdminShell';
import Toggle from '../../../../../components/common/Toggle';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  PreviewModal, 
  SuccessModal,
  WarningModal
} from '../../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../../../../utils/downloadHelper';
import { Search, Plus, Download, Edit, Trash2, Eye, Server, RefreshCw, Cpu, Layers, AlertCircle, Play, Sparkles } from 'lucide-react';
import { useToast } from '../../../../../components/common/ToastNotification';

const INITIAL_KEYS = [
  { id: 'RC-901', key: 'MAP_API_ZOOM_LEVEL', app: 'User App', value: '16', rollout: 100, env: 'Production', status: 'Active', description: 'Sets default scale for maps during booking tracking.' },
  { id: 'RC-902', key: 'BSP_ENABLE_COMPLEX_GST_CALCULATIONS', app: 'Partner App', value: 'true', rollout: 10, env: 'Staging', status: 'Active', description: 'Surfaces advanced tax summary panel for registered businesses.' },
  { id: 'RC-903', key: 'ADMIN_FORCE_LOGOUT_INACTIVE_MINS', app: 'Admin Panel', value: '120', rollout: 100, env: 'Production', status: 'Active', description: 'Platform-wide security timeout threshold.' },
  { id: 'RC-904', key: 'USER_BOOKING_PRE_CHECK_INTERVAL_SECONDS', app: 'User App', value: '30', rollout: 50, env: 'Staging', status: 'Active', description: 'Buffer time for matching partners to accept bookings.' },
  { id: 'RC-905', key: 'PARTNER_MAX_OFFLINE_TRACKING_RETRIES', app: 'Partner App', value: '5', rollout: 100, env: 'Production', status: 'Inactive', description: 'Limits local tracking buffer retry attempts.' }
];

export default function RemoteConfigPage() {
  const { addToast } = useToast();
  const [configs, setConfigs] = useState(INITIAL_KEYS);
  const [searchTerm, setSearchTerm] = useState('');
  const [appFilter, setAppFilter] = useState('All');
  const [envFilter, setEnvFilter] = useState('All');
  
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

  const formFields = [
    { name: 'key', label: 'Remote Config Key', type: 'text', placeholder: 'e.g. MAP_ZOOM', required: true, maxLength: 50 },
    { name: 'app', label: 'Target Client App', type: 'select', required: true, options: [
      { value: 'User App', label: 'User App' },
      { value: 'Partner App', label: 'Partner App' },
      { value: 'Admin Panel', label: 'Admin Panel' }
    ]},
    { name: 'value', label: 'Configuration Value', type: 'text', placeholder: 'e.g. 15 or false', required: true, maxLength: 40 },
    { name: 'rollout', label: 'Rollout Target (%)', type: 'number', placeholder: '100', required: true },
    { name: 'env', label: 'Deployment Environment', type: 'select', required: true, options: [
      { value: 'Production', label: 'Production' },
      { value: 'Staging', label: 'Staging' }
    ]},
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Visible)' },
      { value: 'Inactive', label: 'Inactive' }
    ]},
    { name: 'description', label: 'Parameter Description', type: 'textarea', placeholder: 'Define parameter usage...', required: true }
  ];

  const handleAddSave = (val) => {
    const newConfig = {
      ...val,
      id: `RC-${Math.floor(900 + Math.random() * 100)}`
    };
    setConfigs([newConfig, ...configs]);
    setSuccessMessage('Remote configuration key created and saved!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setConfigs(configs.map(c => c.id === selectedConfig.id ? { ...c, ...updatedVal } : c));
    setSuccessMessage('Remote config updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setConfigs(configs.filter(c => c.id !== selectedConfig.id));
    setSuccessMessage('Remote config key deleted.');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (row, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setConfigs(configs.map(c => c.id === row.id ? { ...c, status: nextStatus } : c));
      setSuccessMessage(`Status set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['Key', 'Target App', 'Value', 'Rollout %', 'Environment', 'Status', 'Description'], configs);
    triggerDownload(csvContent, 'remote_configs.csv', 'text/csv');
    addToast('Remote configurations CSV downloaded!', 'success');
  };

  const filteredConfigs = configs.filter(c => {
    const matchesSearch = c.key.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesApp = appFilter === 'All' || c.app === appFilter;
    const matchesEnv = envFilter === 'All' || c.env === envFilter;
    return matchesSearch && matchesApp && matchesEnv;
  });

  return (
    <AdminShell activeTab="CMS" headerTitle="Remote Configuration Engine">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#2A2454' }}>Remote Configuration</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Remote Configuration Console</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Deploy dynamic properties, tweak maps configs, and adjust rollout percentages instantly.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Create Parameter
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Config Keys</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{configs.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Play size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Rollouts</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{configs.filter(c => c.rollout < 100).length} Keys</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Server size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Staging Env</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>{configs.filter(c => c.env === 'Staging').length} Parameters</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
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
          <div style={{ display: 'flex', gap: '12px' }}>
            <select
              value={appFilter}
              onChange={(e) => setAppFilter(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
            >
              <option value="All">All Apps</option>
              <option value="User App">User App</option>
              <option value="Partner App">Partner App</option>
              <option value="Admin Panel">Admin Panel</option>
            </select>
            <select
              value={envFilter}
              onChange={(e) => setEnvFilter(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
            >
              <option value="All">All Environments</option>
              <option value="Production">Production</option>
              <option value="Staging">Staging</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>CONFIG KEY</th>
                <th style={{ padding: '16px 24px' }}>TARGET APP</th>
                <th style={{ padding: '16px 24px' }}>VALUE</th>
                <th style={{ padding: '16px 24px' }}>ROLLOUT</th>
                <th style={{ padding: '16px 24px' }}>ENV</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredConfigs.length > 0 ? (
                filteredConfigs.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>
                      {row.key}
                      <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '4px' }}>
                        {row.description}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.app}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>{row.value}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, width: '60px', height: '6px', background: '#eee9f6', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${row.rollout}%`, height: '100%', background: '#4f46e5' }} />
                        </div>
                        <span style={{ fontWeight: '700' }}>{row.rollout}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.env === 'Production' ? '#e0f2fe' : '#f1f5f9',
                        color: row.env === 'Production' ? '#0369a1' : '#475569'
                      }}>
                        {row.env}
                      </span>
                    </td>
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
                        <button onClick={() => { setSelectedConfig(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedConfig(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedConfig(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No configuration parameters found.</td>
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
        title="Add Remote Config Parameter" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Config Parameter" 
        fields={formFields} 
        initialValues={selectedConfig} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`remote key "${selectedConfig?.key}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Configuration Parameter Preview" 
        data={{
          'Parameter ID': selectedConfig?.id,
          'Configuration Key': selectedConfig?.key,
          'Mapped Application': selectedConfig?.app,
          'Value State': selectedConfig?.value,
          'Active Rollout %': `${selectedConfig?.rollout}%`,
          'Deployment Environment': selectedConfig?.env,
          'Status': selectedConfig?.status,
          'Description Detail': selectedConfig?.description
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
        title="Remote Config Toggle" 
        message="Changing remote config values alters target client runtime parameters instantly. Proceed?" 
        onConfirm={warningAction} 
      />

    </AdminShell>
  );
}
