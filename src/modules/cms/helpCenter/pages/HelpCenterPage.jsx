import React, { useState } from 'react';
import AdminShell from '../../../../components/layouts/AdminShell';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  PreviewModal, 
  SuccessModal,
  ApprovalModal,
  WarningModal
} from '../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV, downloadDummyPDF } from '../../../../utils/downloadHelper';
import { Search, Plus, Download, Edit, Trash2, Eye, RefreshCw, User, HelpCircle, ArrowUpDown, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const INITIAL_TICKETS = [
  { id: 'TCK-2940', user: 'Rohan Sharma', category: 'Booking Issues', severity: 'High', status: 'Open', executive: 'Unassigned', date: '2026-06-25 10:14', description: 'Technician did not reach slot. Customer waiting at location.' },
  { id: 'TCK-2931', user: 'Priya Patel', category: 'Payments', severity: 'Critical', status: 'Assigned', executive: 'Amit Kumar', date: '2026-06-25 09:30', description: 'Double payment debited for booking ref #BK-8902.' },
  { id: 'TCK-2892', user: 'Vikas Gupta', category: 'Wallet', severity: 'Medium', status: 'In Progress', executive: 'Ritu Sen', date: '2026-06-24 14:20', description: 'Referral reward cashback not credited in user wallet.' },
  { id: 'TCK-2871', user: 'Anjali Shah', category: 'Technical Support', severity: 'Low', status: 'Resolved', executive: 'Amit Kumar', date: '2026-06-23 11:00', description: 'App crashed upon clicking the profile address update menu.' },
  { id: 'TCK-2804', user: 'Kunal Sen', category: 'KYC Issues', severity: 'High', status: 'Closed', executive: 'Neha Sharma', date: '2026-06-21 16:45', description: 'Selfie mismatch verification rejected repeatedly.' },
  { id: 'TCK-2941', user: 'Deepak Verma', category: 'Booking Issues', severity: 'High', status: 'Open', executive: 'Unassigned', date: '2026-06-26 12:00', description: 'Technician left without completing AC service installation.' }
];

export default function HelpCenterPage() {
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Modal States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Statistics
  const openCount = tickets.filter(t => t.status === 'Open').length;
  const inProgressCount = tickets.filter(t => t.status === 'In Progress' || t.status === 'Assigned').length;
  const resolvedCount = tickets.filter(t => t.status === 'Resolved').length;
  const complianceScore = '94.2%';

  // Form Fields for Add
  const addFields = [
    { name: 'user', label: 'Customer Name', type: 'text', placeholder: 'Enter customer name', required: true, maxLength: 40 },
    { name: 'category', label: 'Issue Category', type: 'select', required: true, options: [
      { value: 'Booking Issues', label: 'Booking Issues' },
      { value: 'Payments', label: 'Payments' },
      { value: 'Wallet', label: 'Wallet' },
      { value: 'KYC Issues', label: 'KYC Issues' },
      { value: 'Technical Support', label: 'Technical Support' }
    ]},
    { name: 'severity', label: 'Severity Level', type: 'select', required: true, options: [
      { value: 'Low', label: 'Low' },
      { value: 'Medium', label: 'Medium' },
      { value: 'High', label: 'High' },
      { value: 'Critical', label: 'Critical' }
    ]},
    { name: 'description', label: 'Detailed Description', type: 'textarea', placeholder: 'Provide support issue description...', required: true, maxLength: 200 }
  ];

  // Handlers
  const handleCreateTicket = (val) => {
    const newTicket = {
      ...val,
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Open',
      executive: 'Unassigned',
      date: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };
    setTickets(prev => [newTicket, ...prev]);
    setSuccessMessage('Support ticket created successfully!');
    setIsSuccessOpen(true);
  };

  const handleAssignExecutive = (val) => {
    setTickets(prev => prev.map(t => t.id === selectedTicket.id ? { 
      ...t, 
      executive: val.executive, 
      status: 'Assigned' 
    } : t));
    setSuccessMessage(`Ticket assigned to ${val.executive}!`);
    setIsSuccessOpen(true);
  };

  const handleWorkflowChange = (ticket, nextStatus) => {
    if (nextStatus === 'Resolved') {
      setSelectedTicket(ticket);
      setIsApprovalOpen(true); // Open Approval workflow for resolutions
    } else {
      setTickets(prev => prev.map(t => t.id === ticket.id ? { ...t, status: nextStatus } : t));
      setSuccessMessage(`Ticket workflow moved to ${nextStatus}!`);
      setIsSuccessOpen(true);
    }
  };

  const handleResolveApprove = (remarks) => {
    setTickets(prev => prev.map(t => t.id === selectedTicket.id ? { 
      ...t, 
      status: 'Resolved', 
      description: `${t.description} (Resolution approved: ${remarks})` 
    } : t));
    setSuccessMessage('Ticket resolution approved!');
    setIsSuccessOpen(true);
  };

  const handleResolveReject = (remarks) => {
    setTickets(prev => prev.map(t => t.id === selectedTicket.id ? { 
      ...t, 
      status: 'In Progress', 
      description: `${t.description} (Resolution rejected: ${remarks})` 
    } : t));
    setSuccessMessage('Ticket returned to In Progress!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setTickets(prev => prev.filter(t => t.id !== selectedTicket.id));
    setSuccessMessage('Support ticket deleted!');
    setIsSuccessOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'User', 'Category', 'Severity', 'Status', 'Executive', 'Date'], tickets);
    triggerDownload(csvContent, 'tickets_export.csv', 'text/csv');
    setSuccessMessage('Help Center tickets exported successfully! "tickets_export.csv" downloaded.');
    setIsSuccessOpen(true);
  };

  const handleDownloadPDF = (ticket) => {
    downloadDummyPDF(`SUPPORT TICKET: ${ticket.id}`, `User: ${ticket.user}\nCategory: ${ticket.category}\nSeverity: ${ticket.severity}\nStatus: ${ticket.status}\nExecutive: ${ticket.executive}\nDate: ${ticket.date}\n\nDescription:\n${ticket.description}`);
    setSuccessMessage(`Ticket report exported to PDF successfully!`);
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

  const filteredTickets = tickets
    .filter(t => {
      const matchSearch = t.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === 'All' || t.status === statusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      const aVal = a[sortField]?.toLowerCase() || '';
      const bVal = b[sortField]?.toLowerCase() || '';
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  // Pagination
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const currentItems = filteredTickets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AdminShell activeTab="CMS" headerTitle="Help Center Dashboard">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; <span style={{ color: '#2A2454' }}>Help Center</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Ticket Resolution Center - {statusFilter === 'All' ? 'All Tickets' : statusFilter}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review customer complaints, assign support agents, and audit ticket closure pipelines.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Create Ticket
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Open Tickets</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>{openCount}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RefreshCw size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>In Progress / Assigned</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{inProgressCount}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Resolved</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{resolvedCount}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SLA Compliance Rate</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{complianceScore}</h2>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search ID, name, details..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Open', 'Assigned', 'In Progress', 'Resolved', 'Closed'].map(tab => (
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

        {/* Responsive Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr className="custom-table-header">
                  <th onClick={() => toggleSort('id')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    TICKET ID <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th style={{ padding: '16px 24px' }}>CUSTOMER</th>
                  <th style={{ padding: '16px 24px' }}>CATEGORY</th>
                  <th style={{ padding: '16px 24px' }}>SEVERITY</th>
                  <th style={{ padding: '16px 24px' }}>STATUS</th>
                  <th style={{ padding: '16px 24px' }}>EXECUTIVE</th>
                  <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.user}</td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.category}</td>
                      <td style={{ padding: '18px 24px' }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontWeight: '800',
                          background: row.severity === 'Critical' ? '#fee2e2' : row.severity === 'High' ? '#ffedd5' : '#f1f5f9',
                          color: row.severity === 'Critical' ? '#991b1b' : row.severity === 'High' ? '#c2410c' : '#475569'
                        }}>
                          {row.severity}
                        </span>
                      </td>
                      <td style={{ padding: '18px 24px' }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontWeight: '800',
                          background: row.status === 'Open' ? '#fee2e2' : row.status === 'Resolved' ? '#d1fae5' : '#f1f5f9',
                          color: row.status === 'Open' ? '#991b1b' : row.status === 'Resolved' ? '#065f46' : '#475569'
                        }}>
                          {row.status}
                        </span>
                      </td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <User size={14} style={{ color: '#64748b' }} />
                          {row.executive}
                        </div>
                      </td>
                      <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button onClick={() => { setSelectedTicket(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="View details"><Eye size={16} /></button>
                          
                          {row.status === 'Open' && (
                            <button onClick={() => { setSelectedTicket(row); setIsAssignOpen(true); }} style={{ border: 'none', background: '#4f46e5', color: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '700' }}>
                              Assign
                            </button>
                          )}

                          {row.status === 'Assigned' && (
                            <button onClick={() => handleWorkflowChange(row, 'In Progress')} style={{ border: 'none', background: '#d97706', color: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '700' }}>
                              Start Work
                            </button>
                          )}

                          {row.status === 'In Progress' && (
                            <button onClick={() => handleWorkflowChange(row, 'Resolved')} style={{ border: 'none', background: '#059669', color: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '700' }}>
                              Resolve
                            </button>
                          )}

                          {row.status === 'Resolved' && (
                            <button onClick={() => handleWorkflowChange(row, 'Closed')} style={{ border: 'none', background: '#64748b', color: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '700' }}>
                              Close Case
                            </button>
                          )}

                          <button onClick={() => handleDownloadPDF(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Download Report"><Download size={16} /></button>
                          <button onClick={() => { setSelectedTicket(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No tickets found matching filters.</td>
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

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Create Support Ticket" 
        fields={addFields} 
        onSave={handleCreateTicket} 
      />

      <AddEditModal 
        isOpen={isAssignOpen} 
        onClose={() => setIsAssignOpen(false)} 
        title="Assign Ticket to Executive" 
        fields={[
          { name: 'executive', label: 'Support Executive', type: 'select', required: true, options: [
            { value: 'Amit Kumar', label: 'Amit Kumar (Tier 1)' },
            { value: 'Ritu Sen', label: 'Ritu Sen (Billing)' },
            { value: 'Neha Sharma', label: 'Neha Sharma (Partner KYC)' },
            { value: 'Vikas Singh', label: 'Vikas Singh (Critical SOS)' }
          ]}
        ]} 
        initialValues={{ executive: 'Amit Kumar' }}
        onSave={handleAssignExecutive} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`ticket ${selectedTicket?.id}`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title={`Support Ticket ${selectedTicket?.id} Details`} 
        data={{
          'Ticket ID': selectedTicket?.id,
          'Customer': selectedTicket?.user,
          'Issue Category': selectedTicket?.category,
          'Severity Level': selectedTicket?.severity,
          'Current Status': selectedTicket?.status,
          'Assigned Agent': selectedTicket?.executive,
          'Date Opened': selectedTicket?.date,
          'Detailed Description': selectedTicket?.description
        }} 
      />

      <ApprovalModal
        isOpen={isApprovalOpen}
        onClose={() => setIsApprovalOpen(false)}
        title="Approve Ticket Resolution"
        details={{
          'Ticket': selectedTicket?.id,
          'Category': selectedTicket?.category,
          'Assigned Agent': selectedTicket?.executive
        }}
        onApprove={handleResolveApprove}
        onReject={handleResolveReject}
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMessage} 
      />
    </AdminShell>
  );
}
