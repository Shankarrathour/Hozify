import React, { useState } from 'react';
import AdminShell from '../../../../components/layouts/AdminShell';
import Toggle from '../../../../components/common/Toggle';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  PreviewModal, 
  SuccessModal,
  WarningModal,
  DiscardChangesModal
} from '../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV, downloadDummyPDF } from '../../../../utils/downloadHelper';
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, Plus, Download, Edit, Trash2, Eye, Copy, RefreshCw, Layers, ShieldCheck, Activity, Smartphone } from 'lucide-react';

const INITIAL_POLICIES = [
  { id: '1', name: 'Privacy Policy', code: 'POL-PRV', version: 'v3.2.0', status: 'Live', effectiveDate: '2026-01-15', description: 'Rules governing collection and utilization of customer data.' },
  { id: '2', name: 'Refund Policy', code: 'POL-REF', version: 'v2.1.0', status: 'Live', effectiveDate: '2026-02-10', description: 'Customer transaction refund guidelines and timelines.' },
  { id: '3', name: 'Cancellation Policy', code: 'POL-CAN', version: 'v1.8.5', status: 'Live', effectiveDate: '2026-03-01', description: 'Fees and windows for customer booking cancellations.' },
  { id: '4', name: 'Service Provider Guidelines', code: 'POL-SPG', version: 'v4.0.1', status: 'Draft', effectiveDate: '2026-07-01', description: 'Compliance rules for partner onboarding and ethics.' },
  { id: '5', name: 'Data Security Protocol', code: 'POL-DSP', version: 'v1.0.0', status: 'Archived', effectiveDate: '2025-11-20', description: 'Internal data protection policies and encryption rules.' },
  { id: '6', name: 'Influencer Referral Policy', code: 'POL-IRP', version: 'v1.2.0', status: 'Draft', effectiveDate: '2026-08-12', description: 'Terms of reward dispersion for verified social influencers.' }
];

export default function PoliciesPage() {
  const [policies, setPolicies] = useState(INITIAL_POLICIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortField, setSortField] = useState('name');
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
  const [isDiscardOpen, setIsDiscardOpen] = useState(false);
  
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Stats
  const totalPolicies = policies.length;
  const livePolicies = policies.filter(p => p.status === 'Live').length;
  const draftPolicies = policies.filter(p => p.status === 'Draft').length;
  const archivedPolicies = policies.filter(p => p.status === 'Archived').length;

  // Fields for Form Modal
  const formFields = [
    { name: 'name', label: 'Policy Name', type: 'text', placeholder: 'Enter policy name', required: true, maxLength: 50 },
    { name: 'code', label: 'Policy Code', type: 'text', placeholder: 'e.g. POL-XYZ', required: true, maxLength: 10 },
    { name: 'version', label: 'Version String', type: 'text', placeholder: 'e.g. v1.0.0', required: true, maxLength: 8 },
    { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Live', label: 'Live' },
      { value: 'Draft', label: 'Draft' },
      { value: 'Archived', label: 'Archived' }
    ]},
    { name: 'description', label: 'Policy Details', type: 'textarea', placeholder: 'Describe policy guidelines...', required: true, maxLength: 200 }
  ];

  // Action handlers
  const handleAddSave = (newVal) => {
    const newPolicy = {
      ...newVal,
      id: String(Date.now())
    };
    setPolicies(prev => [newPolicy, ...prev]);
    setSuccessMessage('New policy created successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setPolicies(prev => prev.map(p => p.id === selectedPolicy.id ? { ...p, ...updatedVal } : p));
    setSuccessMessage('Policy updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setPolicies(prev => prev.filter(p => p.id !== selectedPolicy.id));
    setSuccessMessage('Policy deleted successfully!');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (policy, checked) => {
    const nextStatus = checked ? 'Live' : 'Draft';
    setWarningAction(() => () => {
      setPolicies(prev => prev.map(p => p.id === policy.id ? { ...p, status: nextStatus } : p));
      setSuccessMessage(`Policy status updated to ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleDuplicate = (policy) => {
    const duplicate = {
      ...policy,
      id: String(Date.now()),
      name: `${policy.name} (Copy)`,
      code: `${policy.code}-DUP`,
      status: 'Draft'
    };
    setPolicies(prev => [duplicate, ...prev]);
    setSuccessMessage('Policy duplicated successfully!');
    setIsSuccessOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const csvContent = generateCSV(['Name', 'Code', 'Version', 'Status', 'Effective Date', 'Description'], policies);
    triggerDownload(csvContent, 'policies_export.csv', 'text/csv');
    setSuccessMessage('Policies registry exported successfully! "policies_export.csv" downloaded.');
    setIsSuccessOpen(true);
  };

  const handleDownloadPDF = (policy) => {
    downloadDummyPDF(policy.name, `Code: ${policy.code}\nVersion: ${policy.version}\nStatus: ${policy.status}\nEffective Date: ${policy.effectiveDate}\n\nDescription:\n${policy.description}`);
    setSuccessMessage(`Policy "${policy.name}" PDF details downloaded successfully!`);
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

  const filteredPolicies = policies
    .filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === 'All' || p.status === statusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      const aVal = a[sortField]?.toLowerCase() || '';
      const bVal = b[sortField]?.toLowerCase() || '';
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  // Pagination
  const totalPages = Math.ceil(filteredPolicies.length / itemsPerPage);
  const currentItems = filteredPolicies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AdminShell activeTab="CMS" headerTitle="Policies Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; <span style={{ color: '#4f46e5' }}>Policies</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Policy Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure and verify legal frameworks governing consumers, partners, and employees.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add Policy
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
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Policies</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalPolicies}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Live / Active</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{livePolicies}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Draft / Pre-release</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{draftPolicies}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Archived</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#64748b', margin: '2px 0 0 0' }}>{archivedPolicies}</h2>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', minWidth: '260px' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
              <input 
                type="text" 
                placeholder="Search policies..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
              />
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['All', 'Live', 'Draft', 'Archived'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setStatusFilter(tab)}
                  style={{
                    padding: '8px 14px',
                    border: statusFilter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: statusFilter === tab ? '#e0e7ff' : '#fff',
                    color: '#2A2454',
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr className="custom-table-header">
                  <th onClick={() => toggleSort('name')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    POLICY NAME <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th onClick={() => toggleSort('code')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    CODE <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th style={{ padding: '16px 24px' }}>VERSION</th>
                  <th style={{ padding: '16px 24px' }}>STATUS</th>
                  <th onClick={() => toggleSort('effectiveDate')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    EFFECTIVE DATE <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.2s' }}>
                      <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>
                        {row.name}
                        <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '4px' }}>
                          {row.description}
                        </span>
                      </td>
                      <td style={{ padding: '18px 24px', fontFamily: 'monospace', fontWeight: '700', color: '#4f46e5' }}>{row.code}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.version}</td>
                      <td style={{ padding: '18px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '10px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            background: row.status === 'Live' ? '#d1fae5' : row.status === 'Draft' ? '#fef3c7' : '#f1f5f9',
                            color: row.status === 'Live' ? '#065f46' : row.status === 'Draft' ? '#92400e' : '#475569'
                          }}>
                            {row.status}
                          </span>
                          <Toggle 
                            checked={row.status === 'Live'} 
                            onChange={(checked) => handleStatusToggle(row, checked)} 
                            disabled={row.status === 'Archived'}
                          />
                        </div>
                      </td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.effectiveDate}</td>
                      <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button onClick={() => { setSelectedPolicy(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                          <button onClick={() => { setSelectedPolicy(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                          <button onClick={() => handleDuplicate(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Duplicate"><Copy size={16} /></button>
                          <button onClick={() => handleDownloadPDF(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Download PDF"><Download size={16} /></button>
                          <button onClick={() => { setSelectedPolicy(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No policies match the filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
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

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add New Policy" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Policy" 
        fields={formFields} 
        initialValues={selectedPolicy} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={selectedPolicy?.name} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title={`${selectedPolicy?.name} Overview`} 
        data={{
          'Policy Name': selectedPolicy?.name,
          'Policy Code': selectedPolicy?.code,
          'Version': selectedPolicy?.version,
          'Status': selectedPolicy?.status,
          'Effective Date': selectedPolicy?.effectiveDate,
          'Description Detail': selectedPolicy?.description
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
        title="Update Policy Status" 
        message="Are you sure you want to alter the deployment status of this policy document? This will update terms visibility for associated client portals." 
        onConfirm={warningAction} 
      />

    </AdminShell>
  );
}
