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
import { Search, Plus, Download, Edit, Trash2, Eye, ArrowUp, ArrowDown, ArrowUpDown, ChevronLeft, ChevronRight, Layers, Smartphone, Handshake, CheckCircle2 } from 'lucide-react';

const INITIAL_MENUS = [
  { id: 'MN-401', label: 'My Bookings', app: 'User App', path: '/bookings', order: 1, status: 'Active', roles: 'All Users' },
  { id: 'MN-402', label: 'Cashback & Referrals', app: 'User App', path: '/rewards', order: 2, status: 'Active', roles: 'All Users' },
  { id: 'MN-403', label: 'Emergency SOS Help', app: 'User App', path: '/sos', order: 3, status: 'Active', roles: 'All Users' },
  { id: 'MN-404', label: 'Active Jobs Board', app: 'Partner App', path: '/jobs', order: 1, status: 'Active', roles: 'ISP, BSP Manager' },
  { id: 'MN-405', label: 'Wallet settlements', app: 'Partner App', path: '/wallet/payouts', order: 2, status: 'Active', roles: 'ISP, BSP Admin' },
  { id: 'MN-406', label: 'Branch Employees Management', app: 'Partner App', path: '/branch/workforce', order: 3, status: 'Inactive', roles: 'BSP Admin' }
];

const getTabLabel = (t) => {
  if (!t) return 'User Menu';
  switch (t.toLowerCase()) {
    case 'partner': return 'Partner Menu';
    case 'ordering': return 'Menu Ordering';
    case 'visibility': return 'Menu Visibility';
    case 'permission': return 'Menu Permission';
    case 'user':
    default:
      return 'User Menu';
  }
};

export default function MenuMgmtPage({ defaultTab }) {
  const [menus, setMenus] = useState(INITIAL_MENUS);
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

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Statistics
  const totalMenus = menus.length;
  const userMenusCount = menus.filter(m => m.app === 'User App').length;
  const partnerMenusCount = menus.filter(m => m.app === 'Partner App').length;
  const activeCount = menus.filter(m => m.status === 'Active').length;

  const formFields = [
    { name: 'label', label: 'Menu Node Name', type: 'text', placeholder: 'e.g. Account Wallet', required: true, maxLength: 30 },
    { name: 'app', label: 'Target Application', type: 'select', required: true, options: [
      { value: 'User App', label: 'User App' },
      { value: 'Partner App', label: 'Partner App' }
    ]},
    { name: 'path', label: 'Navigation Path Route', type: 'text', placeholder: 'e.g. /wallet/details', required: true, maxLength: 40 },
    { name: 'order', label: 'Sidebar Order Position', type: 'number', placeholder: 'e.g. 1', required: true },
    { name: 'roles', label: 'Allowed Roles (Comma Separated)', type: 'text', placeholder: 'e.g. ISP, BSP Admin or All', required: true, maxLength: 50 },
    { name: 'status', label: 'Visibility Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Visible)' },
      { value: 'Inactive', label: 'Inactive' }
    ]}
  ];

  // Actions
  const handleAddSave = (val) => {
    const newMenu = {
      ...val,
      id: `MN-${Date.now()}`
    };
    setMenus(prev => [...prev, newMenu]);
    setSuccessMessage(`Menu node "${val.label}" added successfully!`);
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setMenus(prev => prev.map(m => m.id === selectedMenu.id ? { ...m, ...updatedVal } : m));
    setSuccessMessage('Menu node details updated!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setMenus(prev => prev.filter(m => m.id !== selectedMenu.id));
    setSuccessMessage('Menu node removed from sidebar configurations!');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (menu, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setMenus(prev => prev.map(m => m.id === menu.id ? { ...m, status: nextStatus } : m));
      setSuccessMessage(`Menu visibility set to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  // Re-ordering ordering position
  const handleMoveOrder = (menu, direction) => {
    const targetIdx = menus.findIndex(m => m.id === menu.id);
    if (targetIdx === -1) return;

    const nextOrder = direction === 'up' ? menu.order - 1 : menu.order + 1;
    if (nextOrder < 1) return;

    // Swap orders of items in same app category
    setMenus(prev => prev.map(m => {
      if (m.app === menu.app) {
        if (m.id === menu.id) return { ...m, order: nextOrder };
        if (m.order === nextOrder) return { ...m, order: menu.order };
      }
      return m;
    }));
    
    setSuccessMessage(`Menu node "${menu.label}" order position shifted ${direction}!`);
    setIsSuccessOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const csvContent = generateCSV(['Label', 'App', 'Path', 'Order', 'Status', 'Roles'], displayItems);
    const filename = `${activeTab.toLowerCase().replace(/ /g, '_')}_export.csv`;
    triggerDownload(csvContent, filename, 'text/csv');
    setSuccessMessage(`${activeTab} data exported successfully! file "${filename}" downloaded.`);
    setIsSuccessOpen(true);
  };

  const handleDownloadJSON = () => {
    const filename = `${activeTab.toLowerCase().replace(/ /g, '_')}_export.json`;
    triggerDownload(JSON.stringify(displayItems, null, 2), filename, 'application/json');
    setSuccessMessage(`${activeTab} JSON data downloaded successfully!`);
    setIsSuccessOpen(true);
  };

  // Filters based on SOW Tabs
  const getFilteredItems = () => {
    const matchSearch = m => m.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             m.path.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === 'User Menu') {
      return menus.filter(m => m.app === 'User App' && matchSearch(m));
    }
    if (activeTab === 'Partner Menu') {
      return menus.filter(m => m.app === 'Partner App' && matchSearch(m));
    }
    return menus.filter(matchSearch);
  };

  const displayItems = getFilteredItems();
  const totalPages = Math.ceil(displayItems.length / itemsPerPage);
  const currentItems = displayItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const TABS = [
    'User Menu',
    'Partner Menu',
    'Menu Ordering',
    'Menu Visibility',
    'Menu Permission'
  ];

  return (
    <AdminShell activeTab="CMS" headerTitle="Menu Configuration Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#2A2454' }}>Menu Management</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">App Sidebar Menu Control - {activeTab}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Dynamically adjust client app sidebar hierarchies, re-order tabs, and verify role accessibility permissions.</p>
          </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={handleDownloadJSON}  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
            >
                          <Download size={16} strokeWidth={2.5} /> Download 
                        </button>
                        <button onClick={handleExportCSV}   className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
            >
                          <Download size={16} strokeWidth={2.5} /> Export CSV
                         </button>
                        <button
              onClick={() => setIsAddOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
            >
              <Plus size={16} strokeWidth={2.5} />
              Add User
            </button>
            
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Menu Nodes</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalMenus} Nodes</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>User Portal Menus</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{userMenusCount} Nodes</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#ffedd5', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Handshake size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner App Menus</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{partnerMenusCount} Nodes</h2>
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
        {(activeTab === 'User Menu' || activeTab === 'Partner Menu') && (
          <>
            {/* Search */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                <input 
                  type="text" 
                  placeholder="Search labels..." 
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
                      <th style={{ padding: '16px 24px' }}>SIDEBAR ORDER</th>
                      <th style={{ padding: '16px 24px' }}>MENU LABEL</th>
                      <th style={{ padding: '16px 24px' }}>PATH ROUTE</th>
                      <th style={{ padding: '16px 24px' }}>STATUS</th>
                      <th style={{ padding: '16px 24px' }}>ALLOWED ROLES</th>
                      <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map(row => (
                        <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '18px 24px', fontWeight: '800', fontFamily: 'monospace', color: '#4f46e5' }}>
                            Position {row.order}
                          </td>
                          <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.label}</td>
                          <td style={{ padding: '18px 24px', fontFamily: 'monospace', fontWeight: '600', color: '#64748b' }}>{row.path}</td>
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
                          <td style={{ padding: '18px 24px', fontWeight: '600', color: '#334155' }}>{row.roles}</td>
                          <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button onClick={() => { setSelectedMenu(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                              <button onClick={() => { setSelectedMenu(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                              <button onClick={() => { setSelectedMenu(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No menu nodes match filters.</td>
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

        {activeTab === 'Menu Ordering' && (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1e1b4b', margin: '0 0 16px 0' }}>Re-arrange Sidebar Items Order</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {menus.map((menu) => (
                <div key={menu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '28px', height: '28px', background: '#f1f5f9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' }}>
                      {menu.order}
                    </div>
                    <div>
                      <strong style={{ fontSize: '14px', color: '#1e1b4b' }}>{menu.label}</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: '#64748b' }}>Target Application: {menu.app}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleMoveOrder(menu, 'up')} style={{ border: '1px solid #cbd5e1', background: '#fff', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Move Up"><ArrowUp size={16} /></button>
                    <button onClick={() => handleMoveOrder(menu, 'down')} style={{ border: '1px solid #cbd5e1', background: '#fff', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Move Down"><ArrowDown size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Menu Visibility' && (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1e1b4b', margin: '0 0 16px 0' }}>Toggle Sidebar Link Visibilities</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {menus.map((menu) => (
                <div key={menu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <strong style={{ fontSize: '14px', color: '#1e1b4b', display: 'block' }}>{menu.label}</strong>
                    <code style={{ fontSize: '11px', color: '#4f46e5' }}>{menu.path} ({menu.app})</code>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: menu.status === 'Active' ? '#059669' : '#64748b' }}>{menu.status === 'Active' ? 'VISIBLE' : 'HIDDEN'}</span>
                    <Toggle checked={menu.status === 'Active'} onChange={(checked) => handleStatusToggle(menu, checked)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Menu Permission' && (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#1e1b4b' }}>Allowed Roles Access Matrix</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                  <tr className="custom-table-header">
                    <th style={{ padding: '16px 24px' }}>MENU NODE</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center' }}>SUPER ADMIN</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center' }}>ISP PARTNER</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center' }}>BSP MANAGER</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center' }}>BUSINESS SELLER</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map(menu => (
                    <tr key={menu.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '16px 24px', fontWeight: '700', color: '#1e1b4b' }}>
                        {menu.label}
                        <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '2px' }}>{menu.app} ({menu.path})</span>
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                        <input type="checkbox" defaultChecked={true} onChange={() => { setSuccessMessage(`Permissions for ${menu.label} updated!`); setIsSuccessOpen(true); }} />
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                        <input type="checkbox" defaultChecked={menu.roles.includes('ISP') || menu.roles.includes('All')} onChange={() => { setSuccessMessage(`Permissions for ${menu.label} updated!`); setIsSuccessOpen(true); }} />
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                        <input type="checkbox" defaultChecked={menu.roles.includes('BSP') || menu.roles.includes('All')} onChange={() => { setSuccessMessage(`Permissions for ${menu.label} updated!`); setIsSuccessOpen(true); }} />
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                        <input type="checkbox" defaultChecked={menu.roles.includes('BS') || menu.roles.includes('All')} onChange={() => { setSuccessMessage(`Permissions for ${menu.label} updated!`); setIsSuccessOpen(true); }} />
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
        title="Add Sidebar Menu Node" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Menu Node Details" 
        fields={formFields} 
        initialValues={selectedMenu} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`menu node "${selectedMenu?.label}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title={`Menu Node "${selectedMenu?.label}" Overview`} 
        data={{
          'Node ID': selectedMenu?.id,
          'Label name': selectedMenu?.label,
          'Application': selectedMenu?.app,
          'Route Path': selectedMenu?.path,
          'Order Position': selectedMenu?.order,
          'Allowed Roles': selectedMenu?.roles,
          'Status state': selectedMenu?.status
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
        title="Menu Visibility Ingestion Trigger" 
        message="Changing menu visibility alters sidebar structures instantly for mobile users or technician client apps. Proceed?" 
        onConfirm={warningAction} 
      />
    </AdminShell>
  );
}
