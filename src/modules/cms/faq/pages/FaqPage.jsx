import React, { useState } from 'react';
import AdminShell from '../../../../components/layouts/AdminShell';
import Toggle from '../../../../components/common/Toggle';
import { 
  AddEditModal, 
  DeleteConfirmationModal, 
  PreviewModal, 
  SuccessModal,
  WarningModal
} from '../../../../components/common/popups/Modals';
import { triggerDownload, generateCSV, downloadDummyPDF } from '../../../../utils/downloadHelper';
import { Search, Plus, Download, Edit, Trash2, Eye, Copy, ArrowUpDown, ChevronLeft, ChevronRight, HelpCircle, BookOpen, Activity } from 'lucide-react';

const INITIAL_FAQS = [
  { id: '1', question: 'How do I request a refund for a booking cancellation?', answer: 'Refunds are automatically generated if cancellation occurs 24 hours prior to the slot time. Refunds show in the customer wallet within 5-7 business days.', category: 'Customers', status: 'Active', views: 1842 },
  { id: '2', question: 'What documents are mandatory for BSP GST verification?', answer: 'You need to upload your GST registration certificate, Business PAN, Owner identity proof, and active bank details with cancelled check.', category: 'Providers', status: 'Active', views: 981 },
  { id: '3', question: 'What happens if a partner reaches a low completion rate?', answer: 'If completion rate falls below 85% in a rolling 14-day cycle, the account goes under automated system review and warning dispersion.', category: 'Providers', status: 'Active', views: 421 },
  { id: '4', question: 'How can a Business Seller update inventory stock in bulk?', answer: 'Sellers can use the Inventory Import module to upload a CSV sheet containing HSN code, Hozify SKU, and active stock counts.', category: 'Sellers', status: 'Inactive', views: 130 },
  { id: '5', question: 'How do employees submit leave requests in the dashboard?', answer: 'Use Workforce -> Leave Management to select duration, reason code, and submit for branch manager verification.', category: 'Employees', status: 'Active', views: 76 },
  { id: '6', question: 'Is self-checkout integration supported on the user application?', answer: 'Currently, user application bookings require OTP confirmation upon completion by the mapped technician.', category: 'Customers', status: 'Draft', views: 12 }
];

export default function FaqPage() {
  const [faqs, setFaqs] = useState(INITIAL_FAQS);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortField, setSortField] = useState('question');
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

  const [selectedFaq, setSelectedFaq] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningAction, setWarningAction] = useState(null);

  // Statistics
  const totalFaqs = faqs.length;
  const activeFaqs = faqs.filter(f => f.status === 'Active').length;
  const disabledFaqs = faqs.filter(f => f.status === 'Inactive').length;
  const totalViews = faqs.reduce((acc, f) => acc + f.views, 0);

  const formFields = [
    { name: 'question', label: 'FAQ Question', type: 'text', placeholder: 'Enter question text', required: true, maxLength: 80 },
    { name: 'category', label: 'Target Category', type: 'select', required: true, options: [
      { value: 'Customers', label: 'Customers' },
      { value: 'Providers', label: 'Providers / ISPs' },
      { value: 'Sellers', label: 'Sellers' },
      { value: 'Employees', label: 'Employees' }
    ]},
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Active', label: 'Active (Visible)' },
      { value: 'Inactive', label: 'Inactive' },
      { value: 'Draft', label: 'Draft' }
    ]},
    { name: 'answer', label: 'Detailed Answer', type: 'textarea', placeholder: 'Enter answer details...', required: true, maxLength: 250 }
  ];

  // Action Handlers
  const handleAddSave = (newVal) => {
    const newFaq = {
      ...newVal,
      id: String(Date.now()),
      views: 0
    };
    setFaqs(prev => [newFaq, ...prev]);
    setSuccessMessage('FAQ item added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setFaqs(prev => prev.map(f => f.id === selectedFaq.id ? { ...f, ...updatedVal } : f));
    setSuccessMessage('FAQ item updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setFaqs(prev => prev.filter(f => f.id !== selectedFaq.id));
    setSuccessMessage('FAQ item deleted!');
    setIsSuccessOpen(true);
  };

  const handleStatusToggle = (faq, checked) => {
    const nextStatus = checked ? 'Active' : 'Inactive';
    setWarningAction(() => () => {
      setFaqs(prev => prev.map(f => f.id === faq.id ? { ...f, status: nextStatus } : f));
      setSuccessMessage(`FAQ is now ${nextStatus}!`);
      setIsSuccessOpen(true);
    });
    setIsWarningOpen(true);
  };

  const handleDuplicate = (faq) => {
    const duplicate = {
      ...faq,
      id: String(Date.now()),
      question: `${faq.question} (Copy)`,
      views: 0,
      status: 'Draft'
    };
    setFaqs(prev => [duplicate, ...prev]);
    setSuccessMessage('FAQ duplicated!');
    setIsSuccessOpen(true);
  };

  // Downloads
  const handleExportCSV = () => {
    const csvContent = generateCSV(['Question', 'Answer', 'Category', 'Status', 'Views'], faqs);
    triggerDownload(csvContent, 'faqs_export.csv', 'text/csv');
    setSuccessMessage('FAQ directory exported successfully! "faqs_export.csv" downloaded.');
    setIsSuccessOpen(true);
  };

  const handleDownloadPDF = (faq) => {
    downloadDummyPDF(`FAQ: ${faq.question}`, `Category: ${faq.category}\nStatus: ${faq.status}\nViews: ${faq.views}\n\nAnswer:\n${faq.answer}`);
    setSuccessMessage(`FAQ item exported to PDF successfully!`);
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

  const filteredFaqs = faqs
    .filter(f => {
      const matchSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = categoryFilter === 'All' || f.category === categoryFilter;
      return matchSearch && matchCat;
    })
    .sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
        return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });

  // Pagination
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const currentItems = filteredFaqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AdminShell activeTab="CMS" headerTitle="FAQ Management Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; <span style={{ color: '#2A2454' }}>FAQ</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">FAQ Directory - {categoryFilter === 'All' ? 'All Categories' : categoryFilter}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Create, categorize, and deploy operational Q&amp;As to user and partner apps.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Add FAQ
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total FAQs</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalFaqs}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active visible</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{activeFaqs}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Disabled</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>{disabledFaqs}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total FAQ Views</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{totalViews.toLocaleString()}</h2>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search Q&amp;A..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Customers', 'Providers', 'Sellers', 'Employees'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setCategoryFilter(tab)}
                style={{
                  padding: '8px 14px',
                  border: categoryFilter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: categoryFilter === tab ? '#e0e7ff' : '#fff',
                  color: '#2A2454',
                  cursor: 'pointer'
                }}
              >
                {tab === 'All' ? 'All Categories' : tab}
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
                  <th onClick={() => toggleSort('question')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    FAQ QUESTION <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th style={{ padding: '16px 24px' }}>CATEGORY</th>
                  <th style={{ padding: '16px 24px' }}>STATUS</th>
                  <th onClick={() => toggleSort('views')} style={{ padding: '16px 24px', cursor: 'pointer' }}>
                    VIEWS <ArrowUpDown size={12} style={{ marginLeft: '4px', display: 'inline' }} />
                  </th>
                  <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b', maxWidth: '400px' }}>
                        {row.question}
                        <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: '400', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {row.answer}
                        </span>
                      </td>
                      <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.category}</td>
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
                      <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>{row.views.toLocaleString()}</td>
                      <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button onClick={() => { setSelectedFaq(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                          <button onClick={() => { setSelectedFaq(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                          <button onClick={() => handleDuplicate(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Duplicate"><Copy size={16} /></button>
                          <button onClick={() => handleDownloadPDF(row)} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Download PDF"><Download size={16} /></button>
                          <button onClick={() => { setSelectedFaq(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No FAQs match filters.</td>
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
        title="Add FAQ" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit FAQ" 
        fields={formFields} 
        initialValues={selectedFaq} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName="this FAQ" 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="FAQ Detailed Preview" 
        data={{
          'Question': selectedFaq?.question,
          'Category': selectedFaq?.category,
          'Views Count': selectedFaq?.views,
          'Active Status': selectedFaq?.status,
          'Detailed Answer Text': selectedFaq?.answer
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
        title="FAQ Visibility Toggle" 
        message="Changing FAQ status alters visibility immediately across target client application FAQ lists. Proceed?" 
        onConfirm={warningAction} 
      />
    </AdminShell>
  );
}
